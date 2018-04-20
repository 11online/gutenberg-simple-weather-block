/**
 * BLOCK: gutenberg-simple-weather-api
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element;
const { InspectorControls } = wp.blocks;
const { Button, TextControl, SelectControl } = wp.components;

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

class EditorComponent extends Component {
	constructor() {
		super();
		this.state = {
			simple_weather_api_key: '',
			isSaving: false,
			weather: false
		};
	}

	componentDidMount() {
		wp.api.loadPromise.then( () => {
			const settings = new wp.api.models.Settings();
			// get our setting
			settings.fetch().then( response => {
				this.setState({ simple_weather_api_key: response.simple_weather_api_key });
			});
		});
	}

	componentDidUpdate(prevProps, prevState) {
		// only update the weather if the city changes, we don't currently have weather or we we didn't currently have an api key
		if(prevProps.attributes.city !== this.props.attributes.city || prevProps.attributes.units !== this.props.attributes.units || this.state.weather === false || prevState.simple_weather_api_key === '') {
			this.getWeather();
		}
	}

	saveAPIKey = () => {
		this.setState({isSaving: true});
		const model = new wp.api.models.Settings({ simple_weather_api_key: this.state.simple_weather_api_key });
		model.save().then( response => {
			this.setState({isSaving: false})
			// set attributes to register a change so the user can save the post
			this.props.setAttributes({update: Math.random()})
		});
	}

	getWeather = debounce(() => {
		const city = this.props.attributes.city;
		const simple_weather_api_key = this.state.simple_weather_api_key;
		const units = this.props.attributes.units;
		const that = this;
		if(city && simple_weather_api_key) {
			// make our api call to show on the front end
			jQuery.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + simple_weather_api_key + "&units=" + units,
			}).done(function(response) {
				that.setState({weather: response});
			});
		}
	}, 1000)

	render() {
		const { attributes, focus, setAttributes } = this.props;
		const weather = this.state.weather;
		let units;
		switch(attributes.units) {
			case 'metric':
				units = 'C';
				break;
			case 'kelvin':
				units = 'Kelvin';
				break;
			default:
				units = 'F';
				break;
		}

		return [
			focus ? (
				<InspectorControls>
					<SelectControl
						label={ __( 'Units' ) }
						value={ attributes.units }
						options={[
							{ value: 'imperial', label: 'F'},
							{ value: 'metric', label: 'C'},
							{ value: 'kelvin', label: 'Kelvin'}
						]}
						onChange={ (value) => setAttributes( { units: value } ) }
					/>
					<TextControl
						key="simple_weather_api_key"
						value={ this.state.simple_weather_api_key }
						onChange={ value => this.setState({simple_weather_api_key: value}) }
						placeholder={ __('Open Weather API Key') }
					/>
					<Button 
						isPrimary 
						onClick={ this.saveAPIKey }
						isBusy={this.state.isSaving}
					>
						{__('Save API Key')}
					</Button>
				</InspectorControls>
			) : null,
			<div>
				{
					focus
						? 
							<TextControl
								key='city'
								value={attributes.city}
								onChange={value => setAttributes({city: value})}
								placeholder={__('City to show weather for')}
							/>
						:
							null
				}
				{
					weather.main
						?
							<div className="wp-block-cgb-block-gutenberg-simple-weather-api">
								<h3>{attributes.city}</h3>
								<div className='weather-block'>
									<h4>{weather.main.temp}&deg;{units}</h4>
									<h4>{weather.weather[0].main}</h4>
								</div>
							</div>
						:
							<p>No Weather</p>
				}
			</div>
		];

	}
}

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-gutenberg-simple-weather-api', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Simple Weather Block' ), // Block title.
	icon: 'cloud', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Weather' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: EditorComponent,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( ) {
		return null;
	},
} );
