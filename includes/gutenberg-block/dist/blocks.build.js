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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * BLOCK: easy-image-gallery-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\n// Import registerBlockType() from wp.blocks\n\nvar _wp$blocks = wp.blocks,\n    BlockControls = _wp$blocks.BlockControls,\n    registerBlockType = _wp$blocks.registerBlockType;\n\n//Import MediaUpload from wp.editor\n\nvar _wp$editor = wp.editor,\n    MediaUpload = _wp$editor.MediaUpload,\n    InspectorControls = _wp$editor.InspectorControls;\n\n//Import Button from wp.components\n\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    Button = _wp$components.Button,\n    FormToggle = _wp$components.FormToggle,\n    SelectControl = _wp$components.SelectControl;\nvar Fragment = wp.element.Fragment;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nvar ID = function ID() {\n\t// Math.random should be unique because of its seeding algorithm.\n\t// Convert it to base 36 (numbers + letters), and grab the first 9 characters\n\t// after the decimal.\n\treturn '_' + Math.random().toString(36).substr(2, 9);\n};\n\nvar uniqueNumber = function uniqueNumber() {\n\t// Math.random should be unique because of its seeding algorithm.\n\t// Convert it to base 36 (numbers + letters), and grab the first 9 characters\n\t// after the decimal.\n\treturn Math.floor(100 + Math.random() * 900);\n};\n\nregisterBlockType('devrix/easy-image-gallery-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: 'Easy Image Gallery', // Block title.\n\ticon: 'format-gallery', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('easy-image-gallery-block'), __('Easy Image Gallery')],\n\tattributes: { //Attributes\n\t\timages: { //Images array\n\t\t\ttype: 'array'\n\t\t},\n\t\tid: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tunique_number: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tlink_images: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: true\n\t\t},\n\t\tlightbox_option: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    isSelected = _ref.isSelected;\n\n\t\t//Destructuring the images array attribute\n\t\tvar _attributes$images = attributes.images,\n\t\t    images = _attributes$images === undefined ? [] : _attributes$images,\n\t\t    link_images = attributes.link_images,\n\t\t    lightbox_option = attributes.lightbox_option,\n\t\t    unique_number = attributes.unique_number;\n\n\t\t// This removes an image from the gallery\n\n\t\tvar removeImage = function removeImage(_removeImage) {\n\t\t\t//filter the images\n\t\t\tvar newImages = images.filter(function (image) {\n\t\t\t\t//If the current image is equal to removeImage the image will be returnd\n\t\t\t\tif (image.id != _removeImage.id) {\n\t\t\t\t\treturn image;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t//Saves the new state\n\t\t\tsetAttributes({\n\t\t\t\timages: newImages\n\t\t\t});\n\t\t};\n\n\t\tif (typeof lightbox_option == 'undefined') {\n\t\t\tsetAttributes({ lightbox_option: 'fancybox' });\n\t\t}\n\n\t\tvar toggleLinkImages = function toggleLinkImages() {\n\t\t\tsetAttributes({ link_images: !link_images });\n\t\t\tsetAttributes({ unique_number: uniqueNumber() });\n\t\t};\n\n\t\tvar setLightbox = function setLightbox(lightbox_option) {\n\t\t\tsetAttributes({ unique_number: uniqueNumber() });\n\t\t\tsetAttributes({ lightbox_option: lightbox_option });\n\t\t};\n\n\t\t//Displays the images\n\t\tvar displayImages = function displayImages(images) {\n\t\t\treturn (\n\t\t\t\t//Loops throug the images\n\t\t\t\timages.map(function (image) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'gallery-item-container' },\n\t\t\t\t\t\twp.element.createElement('img', { className: 'gallery-item', src: image.url, key: images.id }),\n\t\t\t\t\t\tisSelected && wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'remove-item' },\n\t\t\t\t\t\t\twp.element.createElement('span', { 'class': 'dashicons dashicons-trash', onClick: function onClick() {\n\t\t\t\t\t\t\t\t\treturn removeImage(image);\n\t\t\t\t\t\t\t\t} })\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t);\n\t\t};\n\t\tvar _id = \"\";\n\t\tif (attributes['id'] != undefined) {\n\t\t\t_id = attributes['id'];\n\t\t} else {\n\t\t\t_id = ID();\n\t\t}\n\t\tsetAttributes({ id: _id });\n\n\t\t//JSX to return\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\thtmlFor: 'link-images-form-toggle'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t__('Link images to larger sizes', 'dx-link-images')\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(FormToggle, {\n\t\t\t\t\t\t\tid: 'link-images-form-toggle',\n\t\t\t\t\t\t\tlabel: __('Link images to larger sizes', 'dx-link-images'),\n\t\t\t\t\t\t\tchecked: link_images,\n\t\t\t\t\t\t\tonChange: toggleLinkImages\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Lightbox:'),\n\t\t\t\t\t\t\tvalue: lightbox_option,\n\t\t\t\t\t\t\tonChange: setLightbox,\n\t\t\t\t\t\t\toptions: [{ value: 'fancybox', label: 'fancyBox' }, { value: 'pretty-photo', label: 'prettyPhoto' }, { value: 'luminous', label: 'Luminous' }]\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'ul',\n\t\t\t\t\t{ className: 'image-gallery thumbnails-4 linked', 'data-total-slides': images.length },\n\t\t\t\t\tdisplayImages(images)\n\t\t\t\t),\n\t\t\t\tisSelected && wp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\t\tsetAttributes({ images: [].concat(_toConsumableArray(images), _toConsumableArray(media)) });\n\t\t\t\t\t},\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tmultiple: true,\n\t\t\t\t\tvalue: images,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{ className: 'select-images-button is-button is-default is-large', onClick: open },\n\t\t\t\t\t\t\t'Add images'\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\t\t//Destructuring the images array attribute\n\t\tvar images = attributes.images,\n\t\t    link_images = attributes.link_images,\n\t\t    lightbox_option = attributes.lightbox_option,\n\t\t    unique_number = attributes.unique_number;\n\n\n\t\tif (typeof images === 'undefined') {\n\t\t\treturn false;\n\t\t}\n\n\t\t//let rel = \"rel=\\\"prettyphoto[\" + attributes['id'] + \"]\\\"\"\n\t\tvar data_fancybox = 'gallery';\n\n\t\t// Displays the images\n\t\tvar displayImages = function displayImages(images) {\n\n\t\t\treturn images.map(function (image, index) {\n\t\t\t\tvar imgSize = 'thumbnail';\n\t\t\t\tvar imgHrefSize = 'large';\n\n\t\t\t\tif (typeof image.sizes['thumbnail'] === 'undefined') {\n\t\t\t\t\timgSize = 'full';\n\t\t\t\t}\n\n\t\t\t\tif (typeof image.sizes['large'] === 'undefined') {\n\t\t\t\t\timgHrefSize = 'full';\n\t\t\t\t}\n\n\t\t\t\tvar imageWidth = image.sizes[imgSize]['width'];\n\t\t\t\tvar imageHeight = image.sizes[imgSize]['height'];\n\t\t\t\tvar imageThumb = image.sizes[imgSize]['url'];\n\t\t\t\tvar imageHrefUrl = image.sizes[imgHrefSize]['url'];\n\n\t\t\t\tvar lightbox_attr_data = {\n\t\t\t\t\t'fancybox': { 'key': 'data-fancybox', 'value': data_fancybox + unique_number },\n\t\t\t\t\t'pretty-photo': { 'key': 'rel', 'value': 'prettyPhoto[group-' + unique_number + ']' },\n\t\t\t\t\t'luminous': { 'key': 'rel', 'value': 'luminous[group-' + unique_number + ']' }\n\t\t\t\t};\n\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\tlink_images && wp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t_extends({ href: imageHrefUrl }, _defineProperty({}, lightbox_attr_data[lightbox_option]['key'], lightbox_attr_data[lightbox_option]['value']), { 'data-caption': image.caption, className: 'eig-popup' }),\n\t\t\t\t\t\twp.element.createElement('i', { className: 'icon-view' }),\n\t\t\t\t\t\twp.element.createElement('span', { className: 'overlay' }),\n\t\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\t\tclassName: 'attachment-thumbnail size-thumbnail',\n\t\t\t\t\t\t\tkey: images.id,\n\t\t\t\t\t\t\tsrc: imageThumb,\n\t\t\t\t\t\t\t'data-slide-no': index,\n\t\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\t\twidth: imageWidth,\n\t\t\t\t\t\t\theight: imageHeight\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\t!link_images && wp.element.createElement('img', {\n\t\t\t\t\t\tclassName: 'attachment-thumbnail size-thumbnail',\n\t\t\t\t\t\tkey: images.id,\n\t\t\t\t\t\tsrc: imageThumb,\n\t\t\t\t\t\t'data-slide-no': index,\n\t\t\t\t\t\talt: image.alt,\n\t\t\t\t\t\twidth: imageWidth,\n\t\t\t\t\t\theight: imageHeight\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t});\n\t\t};\n\n\t\t//JSX to return\n\t\treturn wp.element.createElement(\n\t\t\t'ul',\n\t\t\t{ className: 'easy-image-gallery thumbnails-4 linked', 'data-total-slides': images.length },\n\t\t\tdisplayImages(images),\n\t\t\t'luminous' == lightbox_option && wp.element.createElement(\n\t\t\t\t'script',\n\t\t\t\tnull,\n\t\t\t\t'new LuminousGallery(document.querySelectorAll(\"a[rel=\\'luminous[group-',\n\t\t\t\tunique_number,\n\t\t\t\t']\\']\"));'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKipcbiAqIEJMT0NLOiBlYXN5LWltYWdlLWdhbGxlcnktYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxuLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIF93cCRibG9ja3MgPSB3cC5ibG9ja3MsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRibG9ja3MuQmxvY2tDb250cm9scyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cbi8vSW1wb3J0IE1lZGlhVXBsb2FkIGZyb20gd3AuZWRpdG9yXG5cbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG5cbi8vSW1wb3J0IEJ1dHRvbiBmcm9tIHdwLmNvbXBvbmVudHNcblxudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGUsXG4gICAgU2VsZWN0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlNlbGVjdENvbnRyb2w7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG52YXIgSUQgPSBmdW5jdGlvbiBJRCgpIHtcblx0Ly8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cblx0Ly8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcblx0Ly8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG5cdHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG59O1xuXG52YXIgdW5pcXVlTnVtYmVyID0gZnVuY3Rpb24gdW5pcXVlTnVtYmVyKCkge1xuXHQvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuXHQvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuXHQvLyBhZnRlciB0aGUgZGVjaW1hbC5cblx0cmV0dXJuIE1hdGguZmxvb3IoMTAwICsgTWF0aC5yYW5kb20oKSAqIDkwMCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnZGV2cml4L2Vhc3ktaW1hZ2UtZ2FsbGVyeS1ibG9jaycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiAnRWFzeSBJbWFnZSBHYWxsZXJ5JywgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdmb3JtYXQtZ2FsbGVyeScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnZWFzeS1pbWFnZS1nYWxsZXJ5LWJsb2NrJyksIF9fKCdFYXN5IEltYWdlIEdhbGxlcnknKV0sXG5cdGF0dHJpYnV0ZXM6IHsgLy9BdHRyaWJ1dGVzXG5cdFx0aW1hZ2VzOiB7IC8vSW1hZ2VzIGFycmF5XG5cdFx0XHR0eXBlOiAnYXJyYXknXG5cdFx0fSxcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdHVuaXF1ZV9udW1iZXI6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0fSxcblx0XHRsaW5rX2ltYWdlczoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0bGlnaHRib3hfb3B0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkO1xuXG5cdFx0Ly9EZXN0cnVjdHVyaW5nIHRoZSBpbWFnZXMgYXJyYXkgYXR0cmlidXRlXG5cdFx0dmFyIF9hdHRyaWJ1dGVzJGltYWdlcyA9IGF0dHJpYnV0ZXMuaW1hZ2VzLFxuXHRcdCAgICBpbWFnZXMgPSBfYXR0cmlidXRlcyRpbWFnZXMgPT09IHVuZGVmaW5lZCA/IFtdIDogX2F0dHJpYnV0ZXMkaW1hZ2VzLFxuXHRcdCAgICBsaW5rX2ltYWdlcyA9IGF0dHJpYnV0ZXMubGlua19pbWFnZXMsXG5cdFx0ICAgIGxpZ2h0Ym94X29wdGlvbiA9IGF0dHJpYnV0ZXMubGlnaHRib3hfb3B0aW9uLFxuXHRcdCAgICB1bmlxdWVfbnVtYmVyID0gYXR0cmlidXRlcy51bmlxdWVfbnVtYmVyO1xuXG5cdFx0Ly8gVGhpcyByZW1vdmVzIGFuIGltYWdlIGZyb20gdGhlIGdhbGxlcnlcblxuXHRcdHZhciByZW1vdmVJbWFnZSA9IGZ1bmN0aW9uIHJlbW92ZUltYWdlKF9yZW1vdmVJbWFnZSkge1xuXHRcdFx0Ly9maWx0ZXIgdGhlIGltYWdlc1xuXHRcdFx0dmFyIG5ld0ltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHRcdC8vSWYgdGhlIGN1cnJlbnQgaW1hZ2UgaXMgZXF1YWwgdG8gcmVtb3ZlSW1hZ2UgdGhlIGltYWdlIHdpbGwgYmUgcmV0dXJuZFxuXHRcdFx0XHRpZiAoaW1hZ2UuaWQgIT0gX3JlbW92ZUltYWdlLmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGltYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9TYXZlcyB0aGUgbmV3IHN0YXRlXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1hZ2VzOiBuZXdJbWFnZXNcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRpZiAodHlwZW9mIGxpZ2h0Ym94X29wdGlvbiA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGxpZ2h0Ym94X29wdGlvbjogJ2ZhbmN5Ym94JyB9KTtcblx0XHR9XG5cblx0XHR2YXIgdG9nZ2xlTGlua0ltYWdlcyA9IGZ1bmN0aW9uIHRvZ2dsZUxpbmtJbWFnZXMoKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbGlua19pbWFnZXM6ICFsaW5rX2ltYWdlcyB9KTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyB1bmlxdWVfbnVtYmVyOiB1bmlxdWVOdW1iZXIoKSB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHNldExpZ2h0Ym94ID0gZnVuY3Rpb24gc2V0TGlnaHRib3gobGlnaHRib3hfb3B0aW9uKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdW5pcXVlX251bWJlcjogdW5pcXVlTnVtYmVyKCkgfSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbGlnaHRib3hfb3B0aW9uOiBsaWdodGJveF9vcHRpb24gfSk7XG5cdFx0fTtcblxuXHRcdC8vRGlzcGxheXMgdGhlIGltYWdlc1xuXHRcdHZhciBkaXNwbGF5SW1hZ2VzID0gZnVuY3Rpb24gZGlzcGxheUltYWdlcyhpbWFnZXMpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdC8vTG9vcHMgdGhyb3VnIHRoZSBpbWFnZXNcblx0XHRcdFx0aW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2dhbGxlcnktaXRlbS1jb250YWluZXInIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgY2xhc3NOYW1lOiAnZ2FsbGVyeS1pdGVtJywgc3JjOiBpbWFnZS51cmwsIGtleTogaW1hZ2VzLmlkIH0pLFxuXHRcdFx0XHRcdFx0aXNTZWxlY3RlZCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JlbW92ZS1pdGVtJyB9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzcyc6ICdkYXNoaWNvbnMgZGFzaGljb25zLXRyYXNoJywgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZW1vdmVJbWFnZShpbWFnZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0dmFyIF9pZCA9IFwiXCI7XG5cdFx0aWYgKGF0dHJpYnV0ZXNbJ2lkJ10gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfaWQgPSBhdHRyaWJ1dGVzWydpZCddO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfaWQgPSBJRCgpO1xuXHRcdH1cblx0XHRzZXRBdHRyaWJ1dGVzKHsgaWQ6IF9pZCB9KTtcblxuXHRcdC8vSlNYIHRvIHJldHVyblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRGcmFnbWVudCxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcjogJ2xpbmstaW1hZ2VzLWZvcm0tdG9nZ2xlJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRfXygnTGluayBpbWFnZXMgdG8gbGFyZ2VyIHNpemVzJywgJ2R4LWxpbmstaW1hZ2VzJylcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuXHRcdFx0XHRcdFx0XHRpZDogJ2xpbmstaW1hZ2VzLWZvcm0tdG9nZ2xlJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGltYWdlcyB0byBsYXJnZXIgc2l6ZXMnLCAnZHgtbGluay1pbWFnZXMnKSxcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZDogbGlua19pbWFnZXMsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0b2dnbGVMaW5rSW1hZ2VzXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdMaWdodGJveDonKSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGxpZ2h0Ym94X29wdGlvbixcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IHNldExpZ2h0Ym94LFxuXHRcdFx0XHRcdFx0XHRvcHRpb25zOiBbeyB2YWx1ZTogJ2ZhbmN5Ym94JywgbGFiZWw6ICdmYW5jeUJveCcgfSwgeyB2YWx1ZTogJ3ByZXR0eS1waG90bycsIGxhYmVsOiAncHJldHR5UGhvdG8nIH0sIHsgdmFsdWU6ICdsdW1pbm91cycsIGxhYmVsOiAnTHVtaW5vdXMnIH1dXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQndWwnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnaW1hZ2UtZ2FsbGVyeSB0aHVtYm5haWxzLTQgbGlua2VkJywgJ2RhdGEtdG90YWwtc2xpZGVzJzogaW1hZ2VzLmxlbmd0aCB9LFxuXHRcdFx0XHRcdGRpc3BsYXlJbWFnZXMoaW1hZ2VzKVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRpc1NlbGVjdGVkICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGltYWdlczogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShpbWFnZXMpLCBfdG9Db25zdW1hYmxlQXJyYXkobWVkaWEpKSB9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0bXVsdGlwbGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IGltYWdlcyxcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3NlbGVjdC1pbWFnZXMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlJywgb25DbGljazogb3BlbiB9LFxuXHRcdFx0XHRcdFx0XHQnQWRkIGltYWdlcydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly9EZXN0cnVjdHVyaW5nIHRoZSBpbWFnZXMgYXJyYXkgYXR0cmlidXRlXG5cdFx0dmFyIGltYWdlcyA9IGF0dHJpYnV0ZXMuaW1hZ2VzLFxuXHRcdCAgICBsaW5rX2ltYWdlcyA9IGF0dHJpYnV0ZXMubGlua19pbWFnZXMsXG5cdFx0ICAgIGxpZ2h0Ym94X29wdGlvbiA9IGF0dHJpYnV0ZXMubGlnaHRib3hfb3B0aW9uLFxuXHRcdCAgICB1bmlxdWVfbnVtYmVyID0gYXR0cmlidXRlcy51bmlxdWVfbnVtYmVyO1xuXG5cblx0XHRpZiAodHlwZW9mIGltYWdlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvL2xldCByZWwgPSBcInJlbD1cXFwicHJldHR5cGhvdG9bXCIgKyBhdHRyaWJ1dGVzWydpZCddICsgXCJdXFxcIlwiXG5cdFx0dmFyIGRhdGFfZmFuY3lib3ggPSAnZ2FsbGVyeSc7XG5cblx0XHQvLyBEaXNwbGF5cyB0aGUgaW1hZ2VzXG5cdFx0dmFyIGRpc3BsYXlJbWFnZXMgPSBmdW5jdGlvbiBkaXNwbGF5SW1hZ2VzKGltYWdlcykge1xuXG5cdFx0XHRyZXR1cm4gaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UsIGluZGV4KSB7XG5cdFx0XHRcdHZhciBpbWdTaXplID0gJ3RodW1ibmFpbCc7XG5cdFx0XHRcdHZhciBpbWdIcmVmU2l6ZSA9ICdsYXJnZSc7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBpbWFnZS5zaXplc1sndGh1bWJuYWlsJ10gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aW1nU2l6ZSA9ICdmdWxsJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YgaW1hZ2Uuc2l6ZXNbJ2xhcmdlJ10gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aW1nSHJlZlNpemUgPSAnZnVsbCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgaW1hZ2VXaWR0aCA9IGltYWdlLnNpemVzW2ltZ1NpemVdWyd3aWR0aCddO1xuXHRcdFx0XHR2YXIgaW1hZ2VIZWlnaHQgPSBpbWFnZS5zaXplc1tpbWdTaXplXVsnaGVpZ2h0J107XG5cdFx0XHRcdHZhciBpbWFnZVRodW1iID0gaW1hZ2Uuc2l6ZXNbaW1nU2l6ZV1bJ3VybCddO1xuXHRcdFx0XHR2YXIgaW1hZ2VIcmVmVXJsID0gaW1hZ2Uuc2l6ZXNbaW1nSHJlZlNpemVdWyd1cmwnXTtcblxuXHRcdFx0XHR2YXIgbGlnaHRib3hfYXR0cl9kYXRhID0ge1xuXHRcdFx0XHRcdCdmYW5jeWJveCc6IHsgJ2tleSc6ICdkYXRhLWZhbmN5Ym94JywgJ3ZhbHVlJzogZGF0YV9mYW5jeWJveCArIHVuaXF1ZV9udW1iZXIgfSxcblx0XHRcdFx0XHQncHJldHR5LXBob3RvJzogeyAna2V5JzogJ3JlbCcsICd2YWx1ZSc6ICdwcmV0dHlQaG90b1tncm91cC0nICsgdW5pcXVlX251bWJlciArICddJyB9LFxuXHRcdFx0XHRcdCdsdW1pbm91cyc6IHsgJ2tleSc6ICdyZWwnLCAndmFsdWUnOiAnbHVtaW5vdXNbZ3JvdXAtJyArIHVuaXF1ZV9udW1iZXIgKyAnXScgfVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2xpJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdGxpbmtfaW1hZ2VzICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdF9leHRlbmRzKHsgaHJlZjogaW1hZ2VIcmVmVXJsIH0sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbGlnaHRib3hfYXR0cl9kYXRhW2xpZ2h0Ym94X29wdGlvbl1bJ2tleSddLCBsaWdodGJveF9hdHRyX2RhdGFbbGlnaHRib3hfb3B0aW9uXVsndmFsdWUnXSksIHsgJ2RhdGEtY2FwdGlvbic6IGltYWdlLmNhcHRpb24sIGNsYXNzTmFtZTogJ2VpZy1wb3B1cCcgfSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ2ljb24tdmlldycgfSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ292ZXJsYXknIH0pLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2F0dGFjaG1lbnQtdGh1bWJuYWlsIHNpemUtdGh1bWJuYWlsJyxcblx0XHRcdFx0XHRcdFx0a2V5OiBpbWFnZXMuaWQsXG5cdFx0XHRcdFx0XHRcdHNyYzogaW1hZ2VUaHVtYixcblx0XHRcdFx0XHRcdFx0J2RhdGEtc2xpZGUtbm8nOiBpbmRleCxcblx0XHRcdFx0XHRcdFx0YWx0OiBpbWFnZS5hbHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBpbWFnZVdpZHRoLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGltYWdlSGVpZ2h0XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0IWxpbmtfaW1hZ2VzICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYXR0YWNobWVudC10aHVtYm5haWwgc2l6ZS10aHVtYm5haWwnLFxuXHRcdFx0XHRcdFx0a2V5OiBpbWFnZXMuaWQsXG5cdFx0XHRcdFx0XHRzcmM6IGltYWdlVGh1bWIsXG5cdFx0XHRcdFx0XHQnZGF0YS1zbGlkZS1ubyc6IGluZGV4LFxuXHRcdFx0XHRcdFx0YWx0OiBpbWFnZS5hbHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogaW1hZ2VXaWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogaW1hZ2VIZWlnaHRcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vSlNYIHRvIHJldHVyblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQndWwnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdlYXN5LWltYWdlLWdhbGxlcnkgdGh1bWJuYWlscy00IGxpbmtlZCcsICdkYXRhLXRvdGFsLXNsaWRlcyc6IGltYWdlcy5sZW5ndGggfSxcblx0XHRcdGRpc3BsYXlJbWFnZXMoaW1hZ2VzKSxcblx0XHRcdCdsdW1pbm91cycgPT0gbGlnaHRib3hfb3B0aW9uICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NjcmlwdCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCduZXcgTHVtaW5vdXNHYWxsZXJ5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW3JlbD1cXCdsdW1pbm91c1tncm91cC0nLFxuXHRcdFx0XHR1bmlxdWVfbnVtYmVyLFxuXHRcdFx0XHQnXVxcJ11cIikpOydcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzljMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz9kMDVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);