/**
 * BLOCK: gutenberg-simple-weather-api
 *
 * A block that allows you save an open weather api key and set a city and a key to show the weather
 * 
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element; // Import the Gutenberg React Component
const { InspectorControls } = wp.editor; // Import the Inspector Controls for more settings
const { Button, TextControl, SelectControl, ServerSideRender } = wp.components; // import a button and some controls

// This is the component we will use for our edit method
class EditorComponent extends Component {
	// the constructor will set our initial state so we don't have undefined variables
	constructor() {
		super();
		this.state = {
			simple_weather_api_key: '',
			isSaving: false
		};
	}

	// We will use the React lifecycle to get our api key when the component mounts
	componentDidMount() {
		// use the wp global object to get our settings
		wp.api.loadPromise.then( () => {
			const settings = new wp.api.models.Settings();
			// get our setting and once it is done, save it to our state so we have access to it
			settings.fetch().then( response => {
				this.setState({ simple_weather_api_key: response.simple_weather_api_key });
			});
		});
	}

	// this method will save our open weather api key to the options table
	saveAPIKey = () => {
		// set the state to isSaving so our button can have a busy animation
		this.setState({isSaving: true});
		// save the new api key
		const model = new wp.api.models.Settings({ 
			simple_weather_api_key: this.state.simple_weather_api_key 
		});
		model.save().then( response => {
			// when we are done saving, change the state so the button animation stops
			this.setState({isSaving: false})
			// set attributes to register a change so the user can save the post
			this.props.setAttributes({update: Math.random()})
		});
	}

	render() {
		// set up our variables
		const { attributes, isSelected, setAttributes } = this.props;
		
		// render returns what get shown in the editor
		return [
			// if isSelected (user has selected the block), then we want to show our settings blocks, we are using some built in components. The select component uses setAttributes to change the units. The button has an onclick to save the api key.
			isSelected ? (
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
					// if isSelected, show the city input
					isSelected
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
				<ServerSideRender
    				block="cgb/block-gutenberg-simple-weather-api"
					attributes={ attributes }
				/>
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
		// since we are doing server side rendering, we don't need any html saved to the content
		return null;
	},
} );
