<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function gutenberg_simple_weather_api_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'gutenberg_simple_weather_api-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function gutenberg_simple_weather_api_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'gutenberg_simple_weather_api_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function gutenberg_simple_weather_api_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'gutenberg_simple_weather_api-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-api' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // Version: filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'gutenberg_simple_weather_api-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function gutenberg_simple_weather_api_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'gutenberg_simple_weather_api_cgb_editor_assets' );

// Register our setting for the api key
function simpleWeatherAPIRegisterSettings() {
    register_setting(
        'simple_weather_api_group',
        'simple_weather_api_key',
        array(
            'type' => 'string',
            'description' => __('API Key for Open Weather'),
            'show_in_rest' => true,
            'default' => ''
        )
    );
}
add_action( 'init','simpleWeatherAPIRegisterSettings'  );

/**
 * Register the weather block. We want to register our attributes here and if there are defaults
 *
 * @return void
 */
function registerSimpleWeatherAPIBlock() {
	if( function_exists('register_block_type') ){
		register_block_type( 'cgb/block-gutenberg-simple-weather-api', array(
			'attributes' => [
				'city' => [
					'type' => 'string'
				],
				'units' => [
					'type' => 'string',
					'default' => 'imperial'
				],
			],
			'render_callback' => 'renderSimpleWeatherAPIBlock',
	) );
    }
}
add_action('init', 'registerSimpleWeatherAPIBlock' );

/**
 * Render the Simple weather block
 *
 * @param array $attributes
 * @return string
 */
function renderSimpleWeatherAPIBlock( $attributes ) {
	// get our api key from the database
	$apiKey = get_option('simple_weather_api_key');
	// if we have a city attribute and an api key, make a request to get the weather
	if(isset($attributes['city']) && $apiKey) {
		// set up our variables
		$city = $attributes['city'];
		$units = $attributes['units'];
		// build our url for the api request
		$url = 'http://api.openweathermap.org/data/2.5/weather?q=' . $city . '&appid=' . $apiKey . '&units=' . $units;
		// get our response
		$response = wp_remote_get( $url );
		// parse the response for our weather
		$weather = json_decode($response['body']);
		// get our user readable units
		switch($units) {
			case 'metric':
				$units = 'C';
				break;
			case 'kelvin':
				$units = 'Kelvin';
				break;
			default:
				$units = 'F';
				break;
		}
		// set up our weather variables
		$temp = $weather->main->temp;
		$clouds = $weather->weather[0]->main;
		// return our html
		return "<div class='wp-block-cgb-block-gutenberg-simple-weather-api'><h3>$city</h3><div class='weather-block'><h4>$temp&deg;$units</h4><h4>$clouds</h4></div></div>";
	}
}