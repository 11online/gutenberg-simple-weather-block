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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * BLOCK: gutenberg-simple-weather-api\n *\n * A block that allows you save an open weather api key and set a city and a key to show the weather\n * \n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar Component = wp.element.Component; // Import the Gutenberg React Component\n\nvar InspectorControls = wp.editor.InspectorControls; // Import the Inspector Controls for more settings\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl,\n    ServerSideRender = _wp$components.ServerSideRender; // import a button and some controls\n\n// This is the component we will use for our edit method\n\nvar EditorComponent = function (_Component) {\n\t_inherits(EditorComponent, _Component);\n\n\t// the constructor will set our initial state so we don't have undefined variables\n\tfunction EditorComponent() {\n\t\t_classCallCheck(this, EditorComponent);\n\n\t\tvar _this = _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).call(this));\n\n\t\t_this.saveAPIKey = function () {\n\t\t\t// set the state to isSaving so our button can have a busy animation\n\t\t\t_this.setState({ isSaving: true });\n\t\t\t// save the new api key\n\t\t\tvar model = new wp.api.models.Settings({\n\t\t\t\tsimple_weather_api_key: _this.state.simple_weather_api_key\n\t\t\t});\n\t\t\tmodel.save().then(function (response) {\n\t\t\t\t// when we are done saving, change the state so the button animation stops\n\t\t\t\t_this.setState({ isSaving: false });\n\t\t\t\t// set attributes to register a change so the user can save the post\n\t\t\t\t_this.props.setAttributes({ update: Math.random() });\n\t\t\t});\n\t\t};\n\n\t\t_this.state = {\n\t\t\tsimple_weather_api_key: '',\n\t\t\tisSaving: false\n\t\t};\n\t\treturn _this;\n\t}\n\n\t// We will use the React lifecycle to get our api key when the component mounts\n\n\n\t_createClass(EditorComponent, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar _this2 = this;\n\n\t\t\t// use the wp global object to get our settings\n\t\t\twp.api.loadPromise.then(function () {\n\t\t\t\tvar settings = new wp.api.models.Settings();\n\t\t\t\t// get our setting and once it is done, save it to our state so we have access to it\n\t\t\t\tsettings.fetch().then(function (response) {\n\t\t\t\t\t_this2.setState({ simple_weather_api_key: response.simple_weather_api_key });\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\n\t\t// this method will save our open weather api key to the options table\n\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\t// set up our variables\n\t\t\tvar _props = this.props,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    isSelected = _props.isSelected,\n\t\t\t    setAttributes = _props.setAttributes;\n\n\t\t\t// render returns what get shown in the editor\n\n\t\t\treturn [\n\t\t\t// if isSelected (user has selected the block), then we want to show our settings blocks, we are using some built in components. The select component uses setAttributes to change the units. The button has an onclick to save the api key.\n\t\t\tisSelected ? wp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\tlabel: __('Units'),\n\t\t\t\t\tvalue: attributes.units,\n\t\t\t\t\toptions: [{ value: 'imperial', label: 'F' }, { value: 'metric', label: 'C' }, { value: 'kelvin', label: 'Kelvin' }],\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ units: value });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tkey: 'simple_weather_api_key',\n\t\t\t\t\tvalue: this.state.simple_weather_api_key,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn _this3.setState({ simple_weather_api_key: value });\n\t\t\t\t\t},\n\t\t\t\t\tplaceholder: __('Open Weather API Key')\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{\n\t\t\t\t\t\tisPrimary: true,\n\t\t\t\t\t\tonClick: this.saveAPIKey,\n\t\t\t\t\t\tisBusy: this.state.isSaving\n\t\t\t\t\t},\n\t\t\t\t\t__('Save API Key')\n\t\t\t\t)\n\t\t\t) : null, wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\n\t\t\t\t// if isSelected, show the city input\n\t\t\t\tisSelected ? wp.element.createElement(TextControl, {\n\t\t\t\t\tkey: 'city',\n\t\t\t\t\tvalue: attributes.city,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ city: value });\n\t\t\t\t\t},\n\t\t\t\t\tplaceholder: __('City to show weather for')\n\t\t\t\t}) : null,\n\t\t\t\twp.element.createElement(ServerSideRender, {\n\t\t\t\t\tblock: 'cgb/block-gutenberg-simple-weather-api',\n\t\t\t\t\tattributes: attributes\n\t\t\t\t})\n\t\t\t)];\n\t\t}\n\t}]);\n\n\treturn EditorComponent;\n}(Component);\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n\nregisterBlockType('cgb/block-gutenberg-simple-weather-api', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Simple Weather Block'), // Block title.\n\ticon: 'cloud', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Weather')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: EditorComponent,\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save() {\n\t\t// since we are doing server side rendering, we don't need any html saved to the content\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBCTE9DSzogZ3V0ZW5iZXJnLXNpbXBsZS13ZWF0aGVyLWFwaVxuICpcbiAqIEEgYmxvY2sgdGhhdCBhbGxvd3MgeW91IHNhdmUgYW4gb3BlbiB3ZWF0aGVyIGFwaSBrZXkgYW5kIHNldCBhIGNpdHkgYW5kIGEga2V5IHRvIHNob3cgdGhlIHdlYXRoZXJcbiAqIFxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIENvbXBvbmVudCA9IHdwLmVsZW1lbnQuQ29tcG9uZW50OyAvLyBJbXBvcnQgdGhlIEd1dGVuYmVyZyBSZWFjdCBDb21wb25lbnRcblxudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzOyAvLyBJbXBvcnQgdGhlIEluc3BlY3RvciBDb250cm9scyBmb3IgbW9yZSBzZXR0aW5nc1xuXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIFNlcnZlclNpZGVSZW5kZXIgPSBfd3AkY29tcG9uZW50cy5TZXJ2ZXJTaWRlUmVuZGVyOyAvLyBpbXBvcnQgYSBidXR0b24gYW5kIHNvbWUgY29udHJvbHNcblxuLy8gVGhpcyBpcyB0aGUgY29tcG9uZW50IHdlIHdpbGwgdXNlIGZvciBvdXIgZWRpdCBtZXRob2RcblxudmFyIEVkaXRvckNvbXBvbmVudCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhFZGl0b3JDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG5cdC8vIHRoZSBjb25zdHJ1Y3RvciB3aWxsIHNldCBvdXIgaW5pdGlhbCBzdGF0ZSBzbyB3ZSBkb24ndCBoYXZlIHVuZGVmaW5lZCB2YXJpYWJsZXNcblx0ZnVuY3Rpb24gRWRpdG9yQ29tcG9uZW50KCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFZGl0b3JDb21wb25lbnQpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVkaXRvckNvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVkaXRvckNvbXBvbmVudCkpLmNhbGwodGhpcykpO1xuXG5cdFx0X3RoaXMuc2F2ZUFQSUtleSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIHNldCB0aGUgc3RhdGUgdG8gaXNTYXZpbmcgc28gb3VyIGJ1dHRvbiBjYW4gaGF2ZSBhIGJ1c3kgYW5pbWF0aW9uXG5cdFx0XHRfdGhpcy5zZXRTdGF0ZSh7IGlzU2F2aW5nOiB0cnVlIH0pO1xuXHRcdFx0Ly8gc2F2ZSB0aGUgbmV3IGFwaSBrZXlcblx0XHRcdHZhciBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRcdFx0c2ltcGxlX3dlYXRoZXJfYXBpX2tleTogX3RoaXMuc3RhdGUuc2ltcGxlX3dlYXRoZXJfYXBpX2tleVxuXHRcdFx0fSk7XG5cdFx0XHRtb2RlbC5zYXZlKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly8gd2hlbiB3ZSBhcmUgZG9uZSBzYXZpbmcsIGNoYW5nZSB0aGUgc3RhdGUgc28gdGhlIGJ1dHRvbiBhbmltYXRpb24gc3RvcHNcblx0XHRcdFx0X3RoaXMuc2V0U3RhdGUoeyBpc1NhdmluZzogZmFsc2UgfSk7XG5cdFx0XHRcdC8vIHNldCBhdHRyaWJ1dGVzIHRvIHJlZ2lzdGVyIGEgY2hhbmdlIHNvIHRoZSB1c2VyIGNhbiBzYXZlIHRoZSBwb3N0XG5cdFx0XHRcdF90aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoeyB1cGRhdGU6IE1hdGgucmFuZG9tKCkgfSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaW1wbGVfd2VhdGhlcl9hcGlfa2V5OiAnJyxcblx0XHRcdGlzU2F2aW5nOiBmYWxzZVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Ly8gV2Ugd2lsbCB1c2UgdGhlIFJlYWN0IGxpZmVjeWNsZSB0byBnZXQgb3VyIGFwaSBrZXkgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuXG5cblx0X2NyZWF0ZUNsYXNzKEVkaXRvckNvbXBvbmVudCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdC8vIHVzZSB0aGUgd3AgZ2xvYmFsIG9iamVjdCB0byBnZXQgb3VyIHNldHRpbmdzXG5cdFx0XHR3cC5hcGkubG9hZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBzZXR0aW5ncyA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKCk7XG5cdFx0XHRcdC8vIGdldCBvdXIgc2V0dGluZyBhbmQgb25jZSBpdCBpcyBkb25lLCBzYXZlIGl0IHRvIG91ciBzdGF0ZSBzbyB3ZSBoYXZlIGFjY2VzcyB0byBpdFxuXHRcdFx0XHRzZXR0aW5ncy5mZXRjaCgpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0X3RoaXMyLnNldFN0YXRlKHsgc2ltcGxlX3dlYXRoZXJfYXBpX2tleTogcmVzcG9uc2Uuc2ltcGxlX3dlYXRoZXJfYXBpX2tleSB9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyB0aGlzIG1ldGhvZCB3aWxsIHNhdmUgb3VyIG9wZW4gd2VhdGhlciBhcGkga2V5IHRvIHRoZSBvcHRpb25zIHRhYmxlXG5cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0XHQvLyBzZXQgdXAgb3VyIHZhcmlhYmxlc1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgYXR0cmlidXRlcyA9IF9wcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdFx0ICAgIGlzU2VsZWN0ZWQgPSBfcHJvcHMuaXNTZWxlY3RlZCxcblx0XHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3Byb3BzLnNldEF0dHJpYnV0ZXM7XG5cblx0XHRcdC8vIHJlbmRlciByZXR1cm5zIHdoYXQgZ2V0IHNob3duIGluIHRoZSBlZGl0b3JcblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdC8vIGlmIGlzU2VsZWN0ZWQgKHVzZXIgaGFzIHNlbGVjdGVkIHRoZSBibG9jayksIHRoZW4gd2Ugd2FudCB0byBzaG93IG91ciBzZXR0aW5ncyBibG9ja3MsIHdlIGFyZSB1c2luZyBzb21lIGJ1aWx0IGluIGNvbXBvbmVudHMuIFRoZSBzZWxlY3QgY29tcG9uZW50IHVzZXMgc2V0QXR0cmlidXRlcyB0byBjaGFuZ2UgdGhlIHVuaXRzLiBUaGUgYnV0dG9uIGhhcyBhbiBvbmNsaWNrIHRvIHNhdmUgdGhlIGFwaSBrZXkuXG5cdFx0XHRpc1NlbGVjdGVkID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0XHRsYWJlbDogX18oJ1VuaXRzJyksXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudW5pdHMsXG5cdFx0XHRcdFx0b3B0aW9uczogW3sgdmFsdWU6ICdpbXBlcmlhbCcsIGxhYmVsOiAnRicgfSwgeyB2YWx1ZTogJ21ldHJpYycsIGxhYmVsOiAnQycgfSwgeyB2YWx1ZTogJ2tlbHZpbicsIGxhYmVsOiAnS2VsdmluJyB9XSxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdW5pdHM6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRcdGtleTogJ3NpbXBsZV93ZWF0aGVyX2FwaV9rZXknLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnNpbXBsZV93ZWF0aGVyX2FwaV9rZXksXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgc2ltcGxlX3dlYXRoZXJfYXBpX2tleTogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ09wZW4gV2VhdGhlciBBUEkgS2V5Jylcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aXNQcmltYXJ5OiB0cnVlLFxuXHRcdFx0XHRcdFx0b25DbGljazogdGhpcy5zYXZlQVBJS2V5LFxuXHRcdFx0XHRcdFx0aXNCdXN5OiB0aGlzLnN0YXRlLmlzU2F2aW5nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRfXygnU2F2ZSBBUEkgS2V5Jylcblx0XHRcdFx0KVxuXHRcdFx0KSA6IG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdG51bGwsXG5cblx0XHRcdFx0Ly8gaWYgaXNTZWxlY3RlZCwgc2hvdyB0aGUgY2l0eSBpbnB1dFxuXHRcdFx0XHRpc1NlbGVjdGVkID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0a2V5OiAnY2l0eScsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY2l0eSxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY2l0eTogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ0NpdHkgdG8gc2hvdyB3ZWF0aGVyIGZvcicpXG5cdFx0XHRcdH0pIDogbnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlcnZlclNpZGVSZW5kZXIsIHtcblx0XHRcdFx0XHRibG9jazogJ2NnYi9ibG9jay1ndXRlbmJlcmctc2ltcGxlLXdlYXRoZXItYXBpJyxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG5cdFx0XHRcdH0pXG5cdFx0XHQpXTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRWRpdG9yQ29tcG9uZW50O1xufShDb21wb25lbnQpO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stZ3V0ZW5iZXJnLXNpbXBsZS13ZWF0aGVyLWFwaScsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnU2ltcGxlIFdlYXRoZXIgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdjbG91ZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnV2VhdGhlcicpXSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogRWRpdG9yQ29tcG9uZW50LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0Ly8gc2luY2Ugd2UgYXJlIGRvaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgd2UgZG9uJ3QgbmVlZCBhbnkgaHRtbCBzYXZlZCB0byB0aGUgY29udGVudFxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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

/***/ })
/******/ ]);