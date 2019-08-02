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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\r\n * Gutenberg Blocks\r\n *\r\n * All blocks related JavaScript files should be imported here.\r\n * You can create a new block folder in this dir and include code\r\n * for that block here as well.\r\n *\r\n * All blocks should be included here since this is the file that\r\n * Webpack is compiling as the input file.\r\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR3V0ZW5iZXJnIEJsb2Nrc1xyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cclxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcclxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxyXG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cclxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\r\n * BLOCK: easy-image-gallery-block\r\n *\r\n * Registering a basic block with Gutenberg.\r\n * Simple block, renders and saves the same content without any interactivity.\r\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\n// Import registerBlockType() from wp.blocks\n\nvar _wp$blocks = wp.blocks,\n    BlockControls = _wp$blocks.BlockControls,\n    registerBlockType = _wp$blocks.registerBlockType;\n\n//Import MediaUpload from wp.editor\n\nvar _wp$editor = wp.editor,\n    MediaUpload = _wp$editor.MediaUpload,\n    InspectorControls = _wp$editor.InspectorControls;\n\n//Import Button from wp.components\n\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    Button = _wp$components.Button,\n    FormToggle = _wp$components.FormToggle,\n    SelectControl = _wp$components.SelectControl;\nvar Fragment = wp.element.Fragment;\n\n/**\r\n * Register: aa Gutenberg Block.\r\n *\r\n * Registers a new block provided a unique name and an object defining its\r\n * behavior. Once registered, the block is made editor as an option to any\r\n * editor interface where blocks are implemented.\r\n *\r\n * @link https://wordpress.org/gutenberg/handbook/block-api/\r\n * @param  {string}   name     Block name.\r\n * @param  {Object}   settings Block settings.\r\n * @return {?WPBlock}          The block, if it has been successfully\r\n *                             registered; otherwise `undefined`.\r\n */\n\nvar ID = function ID() {\n\t// Math.random should be unique because of its seeding algorithm.\n\t// Convert it to base 36 (numbers + letters), and grab the first 9 characters\n\t// after the decimal.\n\treturn '_' + Math.random().toString(36).substr(2, 9);\n};\n\nvar uniqueNumber = function uniqueNumber() {\n\t// Math.random should be unique because of its seeding algorithm.\n\t// Convert it to base 36 (numbers + letters), and grab the first 9 characters\n\t// after the decimal.\n\treturn Math.floor(100 + Math.random() * 900);\n};\n\nregisterBlockType('devrix/easy-image-gallery-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: 'Easy Image Gallery', // Block title.\n\ticon: 'format-gallery', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('easy-image-gallery-block'), __('Easy Image Gallery')],\n\tattributes: { //Attributes\n\t\timages: { //Images array\n\t\t\ttype: 'array'\n\t\t},\n\t\tid: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tunique_number: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tlink_images: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: false\n\t\t},\n\t\tlightbox_option: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\t/**\r\n  * The edit function describes the structure of your block in the context of the editor.\r\n  * This represents what the editor will render when the block is used.\r\n  *\r\n  * The \"edit\" property must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    isSelected = _ref.isSelected;\n\n\t\t//Destructuring the images array attribute\n\t\tvar _attributes$images = attributes.images,\n\t\t    images = _attributes$images === undefined ? [] : _attributes$images,\n\t\t    link_images = attributes.link_images,\n\t\t    lightbox_option = attributes.lightbox_option,\n\t\t    unique_number = attributes.unique_number;\n\n\t\tconsole.log(window.test);\n\t\tconsole.log(window.images = images);\n\t\t// This removes an image from the gallery\n\t\tvar removeImage = function removeImage(_removeImage) {\n\t\t\t//filter the imagesa\n\t\t\tvar newImages = images.filter(function (image) {\n\t\t\t\t//If the current image is equal to removeImage the image will be returnd\n\t\t\t\tif (image.id != _removeImage.id) {\n\t\t\t\t\treturn image;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t//Saves the new state\n\t\t\tsetAttributes({\n\t\t\t\timages: newImages\n\t\t\t});\n\t\t};\n\n\t\tif (typeof lightbox_option == 'undefined') {\n\t\t\tsetAttributes({ lightbox_option: 'fancybox' });\n\t\t}\n\n\t\tvar toggleLinkImages = function toggleLinkImages() {\n\t\t\tsetAttributes({ link_images: !link_images });\n\t\t\tsetAttributes({ unique_number: uniqueNumber() });\n\t\t};\n\n\t\tvar setLightbox = function setLightbox(lightbox_option) {\n\t\t\tsetAttributes({ unique_number: uniqueNumber() });\n\t\t\tsetAttributes({ lightbox_option: lightbox_option });\n\t\t};\n\n\t\t//Displays the images\n\t\tvar displayImages = function displayImages(images) {\n\t\t\treturn (\n\t\t\t\t//Loops throug the images\n\t\t\t\timages.map(function (image) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'gallery-item-container' },\n\t\t\t\t\t\twp.element.createElement('img', { className: 'gallery-item', src: image.url, key: images.id }),\n\t\t\t\t\t\tisSelected && wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'remove-item' },\n\t\t\t\t\t\t\twp.element.createElement('span', { 'class': 'dashicons dashicons-trash', onClick: function onClick() {\n\t\t\t\t\t\t\t\t\treturn removeImage(image);\n\t\t\t\t\t\t\t\t} })\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t);\n\t\t};\n\t\tvar _id = \"\";\n\t\tif (attributes['id'] != undefined) {\n\t\t\t_id = attributes['id'];\n\t\t} else {\n\t\t\t_id = ID();\n\t\t}\n\t\tsetAttributes({ id: _id });\n\n\t\t//JSX to return\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\thtmlFor: 'link-images-form-toggle'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t__('Link images to larger sizes', 'dx-link-images')\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(FormToggle, {\n\t\t\t\t\t\t\tid: 'link-images-form-toggle',\n\t\t\t\t\t\t\tlabel: __('Link images to larger sizes', 'dx-link-images'),\n\t\t\t\t\t\t\tchecked: link_images,\n\t\t\t\t\t\t\tonChange: toggleLinkImages\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Lightbox:'),\n\t\t\t\t\t\t\tvalue: lightbox_option,\n\t\t\t\t\t\t\tonChange: setLightbox,\n\t\t\t\t\t\t\toptions: [{ value: 'fancybox', label: 'fancyBox' }, { value: 'pretty-photo', label: 'prettyPhoto' }, { value: 'luminous', label: 'Luminous' }]\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'ul',\n\t\t\t\t\t{ id: 'eig-gallery', className: 'image-gallery thumbnails-4 linked', 'data-total-slides': images.length },\n\t\t\t\t\tdisplayImages(images)\n\t\t\t\t),\n\t\t\t\tisSelected && wp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\t\tsetAttributes({ images: [].concat(_toConsumableArray(images), _toConsumableArray(media)) });\n\t\t\t\t\t},\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tmultiple: true,\n\t\t\t\t\tvalue: images,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{ className: 'select-images-button is-button is-default is-large', onClick: open },\n\t\t\t\t\t\t\t'Add images'\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\n\t/**\r\n  * The save function defines the way in which the different attributes should be combined\r\n  * into the final markup, which is then serialized by Gutenberg into post_content.\r\n  *\r\n  * The \"save\" property must be specified and must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  */\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\t\t//Destructuring the images array attribute\n\t\tvar images = attributes.images,\n\t\t    link_images = attributes.link_images,\n\t\t    lightbox_option = attributes.lightbox_option,\n\t\t    unique_number = attributes.unique_number;\n\n\n\t\tif (typeof images === 'undefined') {\n\t\t\treturn false;\n\t\t}\n\n\t\t//let rel = \"rel=\\\"prettyphoto[\" + attributes['id'] + \"]\\\"\"\n\t\tvar data_fancybox = 'gallery';\n\n\t\t// Displays the images\n\t\tvar displayImages = function displayImages(images) {\n\n\t\t\treturn images.map(function (image, index) {\n\t\t\t\tvar imgSize = 'thumbnail';\n\t\t\t\tvar imgUrl = 'large';\n\n\t\t\t\tif (typeof image.sizes['thumbnail'] === 'undefined') {\n\t\t\t\t\timgSize = 'full';\n\t\t\t\t}\n\n\t\t\t\tif (typeof image.sizes['large'] === 'undefined') {\n\t\t\t\t\timgUrl = 'full';\n\t\t\t\t}\n\n\t\t\t\tvar imageWidth = image.sizes[imgSize]['width'];\n\t\t\t\tvar imageHeight = image.sizes[imgSize]['height'];\n\t\t\t\tvar imageThumb = image.sizes[imgSize]['url'];\n\t\t\t\tvar imageHrefUrl = image.sizes[imgSize]['url'];\n\n\t\t\t\tvar lightbox_attr_data = {\n\t\t\t\t\t'fancybox': { 'key': 'data-fancybox', 'value': data_fancybox + unique_number },\n\t\t\t\t\t'pretty-photo': { 'key': 'rel', 'value': 'prettyPhoto[group-' + unique_number + ']' },\n\t\t\t\t\t'luminous': { 'key': 'rel', 'value': 'luminous[group-' + unique_number + ']' }\n\t\t\t\t};\n\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\tlink_images && wp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t_extends({ href: imageHrefUrl }, _defineProperty({}, lightbox_attr_data[lightbox_option]['key'], lightbox_attr_data[lightbox_option]['value']), { 'data-caption': image.caption, className: 'eig-popup' }),\n\t\t\t\t\t\twp.element.createElement('i', { className: 'icon-view' }),\n\t\t\t\t\t\twp.element.createElement('span', { className: 'overlay' }),\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tclassName: 'attachment-thumbnail size-thumbnail',\n\t\t\t\t\t\t\tkey: images.id,\n\t\t\t\t\t\t\tsrc: imageThumb,\n\t\t\t\t\t\t\t'data-slide-no': index,\n\t\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\t\twidth: imageWidth,\n\t\t\t\t\t\t\theight: imageHeight\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\t!link_images && wp.element.createElement('img', {\n\t\t\t\t\t\tclassName: 'attachment-thumbnail size-thumbnail',\n\t\t\t\t\t\tkey: images.id,\n\t\t\t\t\t\tsrc: imageThumb,\n\t\t\t\t\t\t'data-slide-no': index,\n\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\twidth: imageWidth,\n\t\t\t\t\t\theight: imageHeight\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t});\n\t\t};\n\n\t\t//JSX to return\n\t\treturn wp.element.createElement(\n\t\t\t'ul',\n\t\t\t{ id: 'eig-gallery', className: 'easy-image-gallery thumbnails-4 linked', 'data-total-slides': images.length },\n\t\t\tdisplayImages(images),\n\t\t\t'luminous' == lightbox_option && wp.element.createElement(\n\t\t\t\t'script',\n\t\t\t\tnull,\n\t\t\t\t'new LuminousGallery(document.querySelectorAll(\"a[rel=\\'luminous[group-',\n\t\t\t\tunique_number,\n\t\t\t\t']\\']\"));'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKipcclxuICogQkxPQ0s6IGVhc3ktaW1hZ2UtZ2FsbGVyeS1ibG9ja1xyXG4gKlxyXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxyXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cclxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbi8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkYmxvY2tzLkJsb2NrQ29udHJvbHMsXG4gICAgcmVnaXN0ZXJCbG9ja1R5cGUgPSBfd3AkYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG4vL0ltcG9ydCBNZWRpYVVwbG9hZCBmcm9tIHdwLmVkaXRvclxuXG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xuXG4vL0ltcG9ydCBCdXR0b24gZnJvbSB3cC5jb21wb25lbnRzXG5cbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIEZvcm1Ub2dnbGUgPSBfd3AkY29tcG9uZW50cy5Gb3JtVG9nZ2xlLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxuLyoqXHJcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXHJcbiAqXHJcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXHJcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XHJcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cclxuICpcclxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXHJcbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxyXG4gKi9cblxudmFyIElEID0gZnVuY3Rpb24gSUQoKSB7XG5cdC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG5cdC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG5cdC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuXHRyZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xufTtcblxudmFyIHVuaXF1ZU51bWJlciA9IGZ1bmN0aW9uIHVuaXF1ZU51bWJlcigpIHtcblx0Ly8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cblx0Ly8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcblx0Ly8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG5cdHJldHVybiBNYXRoLmZsb29yKDEwMCArIE1hdGgucmFuZG9tKCkgKiA5MDApO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2RldnJpeC9lYXN5LWltYWdlLWdhbGxlcnktYmxvY2snLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogJ0Vhc3kgSW1hZ2UgR2FsbGVyeScsIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnZm9ybWF0LWdhbGxlcnknLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ2Vhc3ktaW1hZ2UtZ2FsbGVyeS1ibG9jaycpLCBfXygnRWFzeSBJbWFnZSBHYWxsZXJ5JyldLFxuXHRhdHRyaWJ1dGVzOiB7IC8vQXR0cmlidXRlc1xuXHRcdGltYWdlczogeyAvL0ltYWdlcyBhcnJheVxuXHRcdFx0dHlwZTogJ2FycmF5J1xuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHR1bmlxdWVfbnVtYmVyOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJ1xuXHRcdH0sXG5cdFx0bGlua19pbWFnZXM6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fSxcblx0XHRsaWdodGJveF9vcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxyXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxyXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxyXG4gICpcclxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXHJcbiAgKlxyXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xyXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZDtcblxuXHRcdC8vRGVzdHJ1Y3R1cmluZyB0aGUgaW1hZ2VzIGFycmF5IGF0dHJpYnV0ZVxuXHRcdHZhciBfYXR0cmlidXRlcyRpbWFnZXMgPSBhdHRyaWJ1dGVzLmltYWdlcyxcblx0XHQgICAgaW1hZ2VzID0gX2F0dHJpYnV0ZXMkaW1hZ2VzID09PSB1bmRlZmluZWQgPyBbXSA6IF9hdHRyaWJ1dGVzJGltYWdlcyxcblx0XHQgICAgbGlua19pbWFnZXMgPSBhdHRyaWJ1dGVzLmxpbmtfaW1hZ2VzLFxuXHRcdCAgICBsaWdodGJveF9vcHRpb24gPSBhdHRyaWJ1dGVzLmxpZ2h0Ym94X29wdGlvbixcblx0XHQgICAgdW5pcXVlX251bWJlciA9IGF0dHJpYnV0ZXMudW5pcXVlX251bWJlcjtcblxuXHRcdGNvbnNvbGUubG9nKHdpbmRvdy50ZXN0KTtcblx0XHRjb25zb2xlLmxvZyh3aW5kb3cuaW1hZ2VzID0gaW1hZ2VzKTtcblx0XHQvLyBUaGlzIHJlbW92ZXMgYW4gaW1hZ2UgZnJvbSB0aGUgZ2FsbGVyeVxuXHRcdHZhciByZW1vdmVJbWFnZSA9IGZ1bmN0aW9uIHJlbW92ZUltYWdlKF9yZW1vdmVJbWFnZSkge1xuXHRcdFx0Ly9maWx0ZXIgdGhlIGltYWdlc2Fcblx0XHRcdHZhciBuZXdJbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0XHQvL0lmIHRoZSBjdXJyZW50IGltYWdlIGlzIGVxdWFsIHRvIHJlbW92ZUltYWdlIHRoZSBpbWFnZSB3aWxsIGJlIHJldHVybmRcblx0XHRcdFx0aWYgKGltYWdlLmlkICE9IF9yZW1vdmVJbWFnZS5pZCkge1xuXHRcdFx0XHRcdHJldHVybiBpbWFnZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vU2F2ZXMgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltYWdlczogbmV3SW1hZ2VzXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0aWYgKHR5cGVvZiBsaWdodGJveF9vcHRpb24gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBsaWdodGJveF9vcHRpb246ICdmYW5jeWJveCcgfSk7XG5cdFx0fVxuXG5cdFx0dmFyIHRvZ2dsZUxpbmtJbWFnZXMgPSBmdW5jdGlvbiB0b2dnbGVMaW5rSW1hZ2VzKCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGxpbmtfaW1hZ2VzOiAhbGlua19pbWFnZXMgfSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdW5pcXVlX251bWJlcjogdW5pcXVlTnVtYmVyKCkgfSk7XG5cdFx0fTtcblxuXHRcdHZhciBzZXRMaWdodGJveCA9IGZ1bmN0aW9uIHNldExpZ2h0Ym94KGxpZ2h0Ym94X29wdGlvbikge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHVuaXF1ZV9udW1iZXI6IHVuaXF1ZU51bWJlcigpIH0pO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGxpZ2h0Ym94X29wdGlvbjogbGlnaHRib3hfb3B0aW9uIH0pO1xuXHRcdH07XG5cblx0XHQvL0Rpc3BsYXlzIHRoZSBpbWFnZXNcblx0XHR2YXIgZGlzcGxheUltYWdlcyA9IGZ1bmN0aW9uIGRpc3BsYXlJbWFnZXMoaW1hZ2VzKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQvL0xvb3BzIHRocm91ZyB0aGUgaW1hZ2VzXG5cdFx0XHRcdGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdnYWxsZXJ5LWl0ZW0tY29udGFpbmVyJyB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IGNsYXNzTmFtZTogJ2dhbGxlcnktaXRlbScsIHNyYzogaW1hZ2UudXJsLCBrZXk6IGltYWdlcy5pZCB9KSxcblx0XHRcdFx0XHRcdGlzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdyZW1vdmUtaXRlbScgfSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyAnY2xhc3MnOiAnZGFzaGljb25zIGRhc2hpY29ucy10cmFzaCcsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVtb3ZlSW1hZ2UoaW1hZ2UpO1xuXHRcdFx0XHRcdFx0XHRcdH0gfSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdHZhciBfaWQgPSBcIlwiO1xuXHRcdGlmIChhdHRyaWJ1dGVzWydpZCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0X2lkID0gYXR0cmlidXRlc1snaWQnXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2lkID0gSUQoKTtcblx0XHR9XG5cdFx0c2V0QXR0cmlidXRlcyh7IGlkOiBfaWQgfSk7XG5cblx0XHQvL0pTWCB0byByZXR1cm5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2xhYmVsJyxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I6ICdsaW5rLWltYWdlcy1mb3JtLXRvZ2dsZSdcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0X18oJ0xpbmsgaW1hZ2VzIHRvIGxhcmdlciBzaXplcycsICdkeC1saW5rLWltYWdlcycpXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEZvcm1Ub2dnbGUsIHtcblx0XHRcdFx0XHRcdFx0aWQ6ICdsaW5rLWltYWdlcy1mb3JtLXRvZ2dsZScsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnTGluayBpbWFnZXMgdG8gbGFyZ2VyIHNpemVzJywgJ2R4LWxpbmstaW1hZ2VzJyksXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ6IGxpbmtfaW1hZ2VzLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogdG9nZ2xlTGlua0ltYWdlc1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnTGlnaHRib3g6JyksXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBsaWdodGJveF9vcHRpb24sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBzZXRMaWdodGJveCxcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogW3sgdmFsdWU6ICdmYW5jeWJveCcsIGxhYmVsOiAnZmFuY3lCb3gnIH0sIHsgdmFsdWU6ICdwcmV0dHktcGhvdG8nLCBsYWJlbDogJ3ByZXR0eVBob3RvJyB9LCB7IHZhbHVlOiAnbHVtaW5vdXMnLCBsYWJlbDogJ0x1bWlub3VzJyB9XVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3VsJyxcblx0XHRcdFx0XHR7IGlkOiAnZWlnLWdhbGxlcnknLCBjbGFzc05hbWU6ICdpbWFnZS1nYWxsZXJ5IHRodW1ibmFpbHMtNCBsaW5rZWQnLCAnZGF0YS10b3RhbC1zbGlkZXMnOiBpbWFnZXMubGVuZ3RoIH0sXG5cdFx0XHRcdFx0ZGlzcGxheUltYWdlcyhpbWFnZXMpXG5cdFx0XHRcdCksXG5cdFx0XHRcdGlzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0b25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VzOiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGltYWdlcyksIF90b0NvbnN1bWFibGVBcnJheShtZWRpYSkpIH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRtdWx0aXBsZTogdHJ1ZSxcblx0XHRcdFx0XHR2YWx1ZTogaW1hZ2VzLFxuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2VsZWN0LWltYWdlcy1idXR0b24gaXMtYnV0dG9uIGlzLWRlZmF1bHQgaXMtbGFyZ2UnLCBvbkNsaWNrOiBvcGVuIH0sXG5cdFx0XHRcdFx0XHRcdCdBZGQgaW1hZ2VzJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXG5cdC8qKlxyXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcclxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cclxuICAqXHJcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cclxuICAqXHJcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXHJcbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcblxuXHRcdC8vRGVzdHJ1Y3R1cmluZyB0aGUgaW1hZ2VzIGFycmF5IGF0dHJpYnV0ZVxuXHRcdHZhciBpbWFnZXMgPSBhdHRyaWJ1dGVzLmltYWdlcyxcblx0XHQgICAgbGlua19pbWFnZXMgPSBhdHRyaWJ1dGVzLmxpbmtfaW1hZ2VzLFxuXHRcdCAgICBsaWdodGJveF9vcHRpb24gPSBhdHRyaWJ1dGVzLmxpZ2h0Ym94X29wdGlvbixcblx0XHQgICAgdW5pcXVlX251bWJlciA9IGF0dHJpYnV0ZXMudW5pcXVlX251bWJlcjtcblxuXG5cdFx0aWYgKHR5cGVvZiBpbWFnZXMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly9sZXQgcmVsID0gXCJyZWw9XFxcInByZXR0eXBob3RvW1wiICsgYXR0cmlidXRlc1snaWQnXSArIFwiXVxcXCJcIlxuXHRcdHZhciBkYXRhX2ZhbmN5Ym94ID0gJ2dhbGxlcnknO1xuXG5cdFx0Ly8gRGlzcGxheXMgdGhlIGltYWdlc1xuXHRcdHZhciBkaXNwbGF5SW1hZ2VzID0gZnVuY3Rpb24gZGlzcGxheUltYWdlcyhpbWFnZXMpIHtcblxuXHRcdFx0cmV0dXJuIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlLCBpbmRleCkge1xuXHRcdFx0XHR2YXIgaW1nU2l6ZSA9ICd0aHVtYm5haWwnO1xuXHRcdFx0XHR2YXIgaW1nVXJsID0gJ2xhcmdlJztcblxuXHRcdFx0XHRpZiAodHlwZW9mIGltYWdlLnNpemVzWyd0aHVtYm5haWwnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRpbWdTaXplID0gJ2Z1bGwnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBpbWFnZS5zaXplc1snbGFyZ2UnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRpbWdVcmwgPSAnZnVsbCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgaW1hZ2VXaWR0aCA9IGltYWdlLnNpemVzW2ltZ1NpemVdWyd3aWR0aCddO1xuXHRcdFx0XHR2YXIgaW1hZ2VIZWlnaHQgPSBpbWFnZS5zaXplc1tpbWdTaXplXVsnaGVpZ2h0J107XG5cdFx0XHRcdHZhciBpbWFnZVRodW1iID0gaW1hZ2Uuc2l6ZXNbaW1nU2l6ZV1bJ3VybCddO1xuXHRcdFx0XHR2YXIgaW1hZ2VIcmVmVXJsID0gaW1hZ2Uuc2l6ZXNbaW1nU2l6ZV1bJ3VybCddO1xuXG5cdFx0XHRcdHZhciBsaWdodGJveF9hdHRyX2RhdGEgPSB7XG5cdFx0XHRcdFx0J2ZhbmN5Ym94JzogeyAna2V5JzogJ2RhdGEtZmFuY3lib3gnLCAndmFsdWUnOiBkYXRhX2ZhbmN5Ym94ICsgdW5pcXVlX251bWJlciB9LFxuXHRcdFx0XHRcdCdwcmV0dHktcGhvdG8nOiB7ICdrZXknOiAncmVsJywgJ3ZhbHVlJzogJ3ByZXR0eVBob3RvW2dyb3VwLScgKyB1bmlxdWVfbnVtYmVyICsgJ10nIH0sXG5cdFx0XHRcdFx0J2x1bWlub3VzJzogeyAna2V5JzogJ3JlbCcsICd2YWx1ZSc6ICdsdW1pbm91c1tncm91cC0nICsgdW5pcXVlX251bWJlciArICddJyB9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnbGknLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0bGlua19pbWFnZXMgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdFx0X2V4dGVuZHMoeyBocmVmOiBpbWFnZUhyZWZVcmwgfSwgX2RlZmluZVByb3BlcnR5KHt9LCBsaWdodGJveF9hdHRyX2RhdGFbbGlnaHRib3hfb3B0aW9uXVsna2V5J10sIGxpZ2h0Ym94X2F0dHJfZGF0YVtsaWdodGJveF9vcHRpb25dWyd2YWx1ZSddKSwgeyAnZGF0YS1jYXB0aW9uJzogaW1hZ2UuY2FwdGlvbiwgY2xhc3NOYW1lOiAnZWlnLXBvcHVwJyB9KSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAnaWNvbi12aWV3JyB9KSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnb3ZlcmxheScgfSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYXR0YWNobWVudC10aHVtYm5haWwgc2l6ZS10aHVtYm5haWwnLFxuXHRcdFx0XHRcdFx0XHRrZXk6IGltYWdlcy5pZCxcblx0XHRcdFx0XHRcdFx0c3JjOiBpbWFnZVRodW1iLFxuXHRcdFx0XHRcdFx0XHQnZGF0YS1zbGlkZS1ubyc6IGluZGV4LFxuXHRcdFx0XHRcdFx0XHRhbHQ6IGltYWdlLmFsdCxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IGltYWdlV2lkdGgsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogaW1hZ2VIZWlnaHRcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHQhbGlua19pbWFnZXMgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdhdHRhY2htZW50LXRodW1ibmFpbCBzaXplLXRodW1ibmFpbCcsXG5cdFx0XHRcdFx0XHRrZXk6IGltYWdlcy5pZCxcblx0XHRcdFx0XHRcdHNyYzogaW1hZ2VUaHVtYixcblx0XHRcdFx0XHRcdCdkYXRhLXNsaWRlLW5vJzogaW5kZXgsXG5cdFx0XHRcdFx0XHRhbHQ6IGltYWdlLmFsdCxcblx0XHRcdFx0XHRcdHdpZHRoOiBpbWFnZVdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBpbWFnZUhlaWdodFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly9KU1ggdG8gcmV0dXJuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCd1bCcsXG5cdFx0XHR7IGlkOiAnZWlnLWdhbGxlcnknLCBjbGFzc05hbWU6ICdlYXN5LWltYWdlLWdhbGxlcnkgdGh1bWJuYWlscy00IGxpbmtlZCcsICdkYXRhLXRvdGFsLXNsaWRlcyc6IGltYWdlcy5sZW5ndGggfSxcblx0XHRcdGRpc3BsYXlJbWFnZXMoaW1hZ2VzKSxcblx0XHRcdCdsdW1pbm91cycgPT0gbGlnaHRib3hfb3B0aW9uICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NjcmlwdCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCduZXcgTHVtaW5vdXNHYWxsZXJ5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW3JlbD1cXCdsdW1pbm91c1tncm91cC0nLFxuXHRcdFx0XHR1bmlxdWVfbnVtYmVyLFxuXHRcdFx0XHQnXVxcJ11cIikpOydcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

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