!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(2),l=(n.n(a),n(3)),i=(n.n(l),wp.i18n.__),c=wp.blocks.registerBlockType,o=wp.editor.MediaUpload,s=wp.components.Button,m=function(){return"_"+Math.random().toString(36).substr(2,9)};c("devrix/easy-image-gallery-block",{title:"Easy Image Gallery",icon:"format-gallery",category:"common",keywords:[i("easy-image-gallery-block"),i("Easy Image Gallery")],attributes:{images:{type:"array"},id:{type:"string"}},edit:function(e){var t=e.attributes,n=(e.className,e.setAttributes),a=t.images,l=void 0===a?[]:a,i=function(e){var t=l.filter(function(t){if(t.id!=e.id)return t});n({images:t})},c="";return c=void 0!=t.id?t.id:m(),n({id:c}),wp.element.createElement("div",null,wp.element.createElement("ul",{className:"image-gallery thumbnails-4 linked","data-total-slides":l.length},function(e){return e.map(function(t){return wp.element.createElement("div",{className:"gallery-item-container"},wp.element.createElement("img",{className:"gallery-item",src:t.url,key:e.id}),wp.element.createElement("div",{className:"remove-item",onClick:function(){return i(t)}},wp.element.createElement("span",{class:"dashicons dashicons-trash"})),wp.element.createElement("div",{className:"caption-text"},t.caption[0]))})}(l)),wp.element.createElement("br",null),wp.element.createElement(o,{onSelect:function(e){n({images:[].concat(r(l),r(e))})},type:"image",multiple:!0,value:l,render:function(e){var t=e.open;return wp.element.createElement(s,{className:"select-images-button is-button is-default is-large",onClick:t},"Add images")}}))},save:function(e){var t=e.attributes,n=t.images,r="prettyphoto["+t.id+"]";return wp.element.createElement("ul",{className:"image-gallery-block thumbnails-4 linked","data-total-slides":n.length},function(e){return e.map(function(t,n){return wp.element.createElement("li",null,wp.element.createElement("a",{href:t.url,rel:r},wp.element.createElement("img",{className:"gallery-item",key:e.id,src:t.url,"data-slide-no":n,"data-caption":t.caption[0],alt:t.alt})))})}(n))}})},function(e,t){},function(e,t){}]);