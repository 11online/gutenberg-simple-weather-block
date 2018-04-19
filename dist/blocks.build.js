/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(/*! lodash */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * BLOCK: gutenberg-simple-weather-api\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar Component = wp.element.Component;\nvar InspectorControls = wp.blocks.InspectorControls;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl;\n\n// get our settings\n\nvar settings = void 0;\nvar interval = void 0;\n\nfunction checkIfWeCanGetSettings() {\n\tinterval = setInterval(getSettings, 1000);\n}\n\nfunction getSettings() {\n\tif (typeof wp.api !== 'undefined') {\n\t\twp.api.loadPromise.then(function () {\n\t\t\tsettings = new wp.api.models.Settings();\n\t\t});\n\t\tclearInterval(interval);\n\t}\n}\n\ncheckIfWeCanGetSettings();\n\nfunction debounce(fn, delay) {\n\tvar timer = null;\n\treturn function () {\n\t\tvar context = this,\n\t\t    args = arguments;\n\t\tclearTimeout(timer);\n\t\ttimer = setTimeout(function () {\n\t\t\tfn.apply(context, args);\n\t\t}, delay);\n\t};\n}\n\nvar EditorComponent = function (_Component) {\n\t_inherits(EditorComponent, _Component);\n\n\tfunction EditorComponent() {\n\t\t_classCallCheck(this, EditorComponent);\n\n\t\tvar _this = _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).call(this));\n\n\t\t_this.saveAPIKey = function () {\n\t\t\t_this.setState({ isSaving: true });\n\t\t\tvar model = new wp.api.models.Settings({ simple_weather_api_key: _this.state.simple_weather_api_key });\n\t\t\tmodel.save().then(function (response) {\n\t\t\t\t_this.setState({ isSaving: false });\n\t\t\t\t// set attributes to register a change so the user can save the post\n\t\t\t\t_this.props.setAttributes({ update: Math.random() });\n\t\t\t});\n\t\t};\n\n\t\t_this.getWeather = debounce(function () {\n\t\t\tvar city = _this.props.attributes.city;\n\t\t\tvar simple_weather_api_key = _this.state.simple_weather_api_key;\n\t\t\tvar units = _this.props.attributes.units;\n\t\t\tvar that = _this;\n\t\t\tif (city && simple_weather_api_key) {\n\t\t\t\t// make our api call to show on the front end\n\t\t\t\tjQuery.ajax({\n\t\t\t\t\turl: \"http://api.openweathermap.org/data/2.5/weather?q=\" + city + \"&appid=\" + simple_weather_api_key + \"&units=\" + units\n\t\t\t\t}).done(function (response) {\n\t\t\t\t\tthat.setState({ weather: response });\n\t\t\t\t});\n\t\t\t}\n\t\t}, 1000);\n\n\t\t_this.state = {\n\t\t\tsimple_weather_api_key: '',\n\t\t\tisSaving: false,\n\t\t\tweather: false,\n\t\t\tcityLastUpdateTime: new Date()\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(EditorComponent, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar that = this;\n\t\t\tvar editorInterval = setInterval(function () {\n\t\t\t\tif (settings) {\n\t\t\t\t\t// get our setting\n\t\t\t\t\tsettings.fetch().then(function (response) {\n\t\t\t\t\t\tthat.setState({ simple_weather_api_key: response.simple_weather_api_key });\n\t\t\t\t\t});\n\t\t\t\t\tclearInterval(editorInterval);\n\t\t\t\t}\n\t\t\t}, 1000);\n\t\t}\n\t}, {\n\t\tkey: 'componentDidUpdate',\n\t\tvalue: function componentDidUpdate(prevProps, prevState) {\n\t\t\t// only update the weather if the city changes, we don't currently have weather or we we didn't currently have an api key\n\t\t\tif (prevProps.attributes.city !== this.props.attributes.city || this.state.weather === false || prevState.simple_weather_api_key === '') {\n\t\t\t\tthis.getWeather();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar _props = this.props,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    focus = _props.focus,\n\t\t\t    setAttributes = _props.setAttributes;\n\n\t\t\tvar weather = this.state.weather;\n\t\t\tvar units = void 0;\n\t\t\tswitch (attributes.units) {\n\t\t\t\tcase 'metric':\n\t\t\t\t\tunits = 'C';\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'kelvin':\n\t\t\t\t\tunits = 'Kelvin';\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tunits = 'F';\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\treturn [focus ? wp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Units'),\n\t\t\t\t\tvalue: attributes.units,\n\t\t\t\t\toptions: [{ value: 'imperial', label: 'F' }, { value: 'metric', label: 'C' }, { value: 'kelvin', label: 'Kelvin' }],\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ units: value });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tkey: 'simple_weather_api_key',\n\t\t\t\t\tvalue: this.state.simple_weather_api_key,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn _this2.setState({ simple_weather_api_key: value });\n\t\t\t\t\t},\n\t\t\t\t\tplaceholder: __('Open Weather API Key')\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{\n\t\t\t\t\t\tisPrimary: true,\n\t\t\t\t\t\tonClick: this.saveAPIKey,\n\t\t\t\t\t\tisBusy: this.state.isSaving\n\t\t\t\t\t},\n\t\t\t\t\t__('Save API Key')\n\t\t\t\t)\n\t\t\t) : null, wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tfocus ? wp.element.createElement(TextControl, {\n\t\t\t\t\tkey: 'city',\n\t\t\t\t\tvalue: attributes.city,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ city: value });\n\t\t\t\t\t},\n\t\t\t\t\tplaceholder: __('City to show weather for')\n\t\t\t\t}) : null,\n\t\t\t\tweather.main ? wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'wp-block-cgb-block-gutenberg-simple-weather-api' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Right now in ',\n\t\t\t\t\t\tattributes.city,\n\t\t\t\t\t\t' it is ',\n\t\t\t\t\t\tweather.main.temp,\n\t\t\t\t\t\t'\\xB0',\n\t\t\t\t\t\tunits,\n\t\t\t\t\t\t' and ',\n\t\t\t\t\t\tweather.weather[0].main,\n\t\t\t\t\t\t'.'\n\t\t\t\t\t)\n\t\t\t\t) : wp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'No Weather'\n\t\t\t\t)\n\t\t\t)];\n\t\t}\n\t}]);\n\n\treturn EditorComponent;\n}(Component);\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n\nregisterBlockType('cgb/block-gutenberg-simple-weather-api', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Simple Weather Block'), // Block title.\n\ticon: 'cloud', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Weather')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: EditorComponent,\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBCTE9DSzogZ3V0ZW5iZXJnLXNpbXBsZS13ZWF0aGVyLWFwaVxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgQ29tcG9uZW50ID0gd3AuZWxlbWVudC5Db21wb25lbnQ7XG52YXIgSW5zcGVjdG9yQ29udHJvbHMgPSB3cC5ibG9ja3MuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xuXG4vLyBnZXQgb3VyIHNldHRpbmdzXG5cbnZhciBzZXR0aW5ncyA9IHZvaWQgMDtcbnZhciBpbnRlcnZhbCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gY2hlY2tJZldlQ2FuR2V0U2V0dGluZ3MoKSB7XG5cdGludGVydmFsID0gc2V0SW50ZXJ2YWwoZ2V0U2V0dGluZ3MsIDEwMDApO1xufVxuXG5mdW5jdGlvbiBnZXRTZXR0aW5ncygpIHtcblx0aWYgKHR5cGVvZiB3cC5hcGkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0d3AuYXBpLmxvYWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0c2V0dGluZ3MgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHR9XG59XG5cbmNoZWNrSWZXZUNhbkdldFNldHRpbmdzKCk7XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBkZWxheSkge1xuXHR2YXIgdGltZXIgPSBudWxsO1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcyxcblx0XHQgICAgYXJncyA9IGFyZ3VtZW50cztcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9LCBkZWxheSk7XG5cdH07XG59XG5cbnZhciBFZGl0b3JDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoRWRpdG9yQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBFZGl0b3JDb21wb25lbnQoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVkaXRvckNvbXBvbmVudCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRWRpdG9yQ29tcG9uZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRWRpdG9yQ29tcG9uZW50KSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpcy5zYXZlQVBJS2V5ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0X3RoaXMuc2V0U3RhdGUoeyBpc1NhdmluZzogdHJ1ZSB9KTtcblx0XHRcdHZhciBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHsgc2ltcGxlX3dlYXRoZXJfYXBpX2tleTogX3RoaXMuc3RhdGUuc2ltcGxlX3dlYXRoZXJfYXBpX2tleSB9KTtcblx0XHRcdG1vZGVsLnNhdmUoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRfdGhpcy5zZXRTdGF0ZSh7IGlzU2F2aW5nOiBmYWxzZSB9KTtcblx0XHRcdFx0Ly8gc2V0IGF0dHJpYnV0ZXMgdG8gcmVnaXN0ZXIgYSBjaGFuZ2Ugc28gdGhlIHVzZXIgY2FuIHNhdmUgdGhlIHBvc3Rcblx0XHRcdFx0X3RoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7IHVwZGF0ZTogTWF0aC5yYW5kb20oKSB9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRfdGhpcy5nZXRXZWF0aGVyID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGNpdHkgPSBfdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmNpdHk7XG5cdFx0XHR2YXIgc2ltcGxlX3dlYXRoZXJfYXBpX2tleSA9IF90aGlzLnN0YXRlLnNpbXBsZV93ZWF0aGVyX2FwaV9rZXk7XG5cdFx0XHR2YXIgdW5pdHMgPSBfdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnVuaXRzO1xuXHRcdFx0dmFyIHRoYXQgPSBfdGhpcztcblx0XHRcdGlmIChjaXR5ICYmIHNpbXBsZV93ZWF0aGVyX2FwaV9rZXkpIHtcblx0XHRcdFx0Ly8gbWFrZSBvdXIgYXBpIGNhbGwgdG8gc2hvdyBvbiB0aGUgZnJvbnQgZW5kXG5cdFx0XHRcdGpRdWVyeS5hamF4KHtcblx0XHRcdFx0XHR1cmw6IFwiaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiICsgY2l0eSArIFwiJmFwcGlkPVwiICsgc2ltcGxlX3dlYXRoZXJfYXBpX2tleSArIFwiJnVuaXRzPVwiICsgdW5pdHNcblx0XHRcdFx0fSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHR0aGF0LnNldFN0YXRlKHsgd2VhdGhlcjogcmVzcG9uc2UgfSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDApO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaW1wbGVfd2VhdGhlcl9hcGlfa2V5OiAnJyxcblx0XHRcdGlzU2F2aW5nOiBmYWxzZSxcblx0XHRcdHdlYXRoZXI6IGZhbHNlLFxuXHRcdFx0Y2l0eUxhc3RVcGRhdGVUaW1lOiBuZXcgRGF0ZSgpXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRWRpdG9yQ29tcG9uZW50LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHR2YXIgZWRpdG9ySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzZXR0aW5ncykge1xuXHRcdFx0XHRcdC8vIGdldCBvdXIgc2V0dGluZ1xuXHRcdFx0XHRcdHNldHRpbmdzLmZldGNoKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdHRoYXQuc2V0U3RhdGUoeyBzaW1wbGVfd2VhdGhlcl9hcGlfa2V5OiByZXNwb25zZS5zaW1wbGVfd2VhdGhlcl9hcGlfa2V5IH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoZWRpdG9ySW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHRcdC8vIG9ubHkgdXBkYXRlIHRoZSB3ZWF0aGVyIGlmIHRoZSBjaXR5IGNoYW5nZXMsIHdlIGRvbid0IGN1cnJlbnRseSBoYXZlIHdlYXRoZXIgb3Igd2Ugd2UgZGlkbid0IGN1cnJlbnRseSBoYXZlIGFuIGFwaSBrZXlcblx0XHRcdGlmIChwcmV2UHJvcHMuYXR0cmlidXRlcy5jaXR5ICE9PSB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuY2l0eSB8fCB0aGlzLnN0YXRlLndlYXRoZXIgPT09IGZhbHNlIHx8IHByZXZTdGF0ZS5zaW1wbGVfd2VhdGhlcl9hcGlfa2V5ID09PSAnJykge1xuXHRcdFx0XHR0aGlzLmdldFdlYXRoZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgYXR0cmlidXRlcyA9IF9wcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdFx0ICAgIGZvY3VzID0gX3Byb3BzLmZvY3VzLFxuXHRcdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXHRcdFx0dmFyIHdlYXRoZXIgPSB0aGlzLnN0YXRlLndlYXRoZXI7XG5cdFx0XHR2YXIgdW5pdHMgPSB2b2lkIDA7XG5cdFx0XHRzd2l0Y2ggKGF0dHJpYnV0ZXMudW5pdHMpIHtcblx0XHRcdFx0Y2FzZSAnbWV0cmljJzpcblx0XHRcdFx0XHR1bml0cyA9ICdDJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAna2VsdmluJzpcblx0XHRcdFx0XHR1bml0cyA9ICdLZWx2aW4nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHVuaXRzID0gJ0YnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gW2ZvY3VzID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0XHRsYWJlbDogX18oJ1VuaXRzJyksXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudW5pdHMsXG5cdFx0XHRcdFx0b3B0aW9uczogW3sgdmFsdWU6ICdpbXBlcmlhbCcsIGxhYmVsOiAnRicgfSwgeyB2YWx1ZTogJ21ldHJpYycsIGxhYmVsOiAnQycgfSwgeyB2YWx1ZTogJ2tlbHZpbicsIGxhYmVsOiAnS2VsdmluJyB9XSxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdW5pdHM6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRcdGtleTogJ3NpbXBsZV93ZWF0aGVyX2FwaV9rZXknLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnNpbXBsZV93ZWF0aGVyX2FwaV9rZXksXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnNldFN0YXRlKHsgc2ltcGxlX3dlYXRoZXJfYXBpX2tleTogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ09wZW4gV2VhdGhlciBBUEkgS2V5Jylcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXNQcmltYXJ5OiB0cnVlLFxuXHRcdFx0XHRcdFx0b25DbGljazogdGhpcy5zYXZlQVBJS2V5LFxuXHRcdFx0XHRcdFx0aXNCdXN5OiB0aGlzLnN0YXRlLmlzU2F2aW5nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRfXygnU2F2ZSBBUEkgS2V5Jylcblx0XHRcdFx0KVxuXHRcdFx0KSA6IG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdGZvY3VzID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0a2V5OiAnY2l0eScsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY2l0eSxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY2l0eTogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ0NpdHkgdG8gc2hvdyB3ZWF0aGVyIGZvcicpXG5cdFx0XHRcdH0pIDogbnVsbCxcblx0XHRcdFx0d2VhdGhlci5tYWluID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnd3AtYmxvY2stY2diLWJsb2NrLWd1dGVuYmVyZy1zaW1wbGUtd2VhdGhlci1hcGknIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdCdSaWdodCBub3cgaW4gJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXMuY2l0eSxcblx0XHRcdFx0XHRcdCcgaXQgaXMgJyxcblx0XHRcdFx0XHRcdHdlYXRoZXIubWFpbi50ZW1wLFxuXHRcdFx0XHRcdFx0J1xceEIwJyxcblx0XHRcdFx0XHRcdHVuaXRzLFxuXHRcdFx0XHRcdFx0JyBhbmQgJyxcblx0XHRcdFx0XHRcdHdlYXRoZXIud2VhdGhlclswXS5tYWluLFxuXHRcdFx0XHRcdFx0Jy4nXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIDogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdCdObyBXZWF0aGVyJ1xuXHRcdFx0XHQpXG5cdFx0XHQpXTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRWRpdG9yQ29tcG9uZW50O1xufShDb21wb25lbnQpO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stZ3V0ZW5iZXJnLXNpbXBsZS13ZWF0aGVyLWFwaScsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnU2ltcGxlIFdlYXRoZXIgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdjbG91ZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnV2VhdGhlcicpXSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogRWRpdG9yQ29tcG9uZW50LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 5 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);