!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vueSelectable",[],t):"object"==typeof exports?exports.vueSelectable=t():e.vueSelectable=t()}(window,function(){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,s),l.l=!0,l.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(i,l,function(t){return e[t]}.bind(null,l));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],i=!0,l=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(i=(r=o.next()).done)&&(s.push(r.value),!t||s.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){if(arguments.length>1)for(var t=1;t<arguments.length;t++)if("object"===n(arguments[t])&&null!==arguments[t])for(var s=Object.keys(arguments[t]),i=0;i<s.length;i++)e[s[i]]=arguments[t][s[i]];return e}s.r(t);var o=Object.assign||r,c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectBox=null,this.selectBoxSelector=".selection",this.rootElement=document,this.boundingBox=document,this.boundingBoxSelector=null,this.dragging=!1,this.startX=null,this.startY=null,this.endX=null,this.endY=null,this.selectables=[],this.selected=[],this.selectedSetter=null,this.selectedGetter=null,this.selectingSetter=null,this.selecting=[],this.addMode=!1,this.disableTextSelection=!0,this.handlers={mousedown:null,mouseup:null,mousemove:null},this.scrollingFrame=null,this.scrollSpeed=10,this.scrollDistance=10,this.scrollDocumentEnabled=!0,this.scrollRepeater=null,this.renderSelected=!1,this.renderSelecting=!1,this.overrideAddMode=!1,this.selectingClass="selecting",this.selectedClass="selected",this.firstRun=!0,this.handlers.mousedown=this.mouseDown.bind(this),this.handlers.mouseup=this.mouseUp.bind(this),this.handlers.mousemove=this.mouseMove.bind(this),o(this,t),this.attach()}var t,s,n;return t=e,n=[{key:"disableTextSelection",value:function(e){return e.preventDefault(),!1}},{key:"absBox",value:function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset,width:t.width,height:t.height}}}],(s=[{key:"attach",value:function(){var e=this;this.rootElement&&Object.keys(this.handlers).forEach(function(t){return e.rootElement.addEventListener(t,e.handlers[t])})}},{key:"detach",value:function(){var t=this;Object.keys(this.handlers).forEach(function(e){return t.rootElement.removeEventListener(e,t.handlers[e])}),this.disableTextSelection&&this.dragging&&this.rootElement.removeEventListener("selectstart",e.disableTextSelection),this.scrollRepeater&&clearInterval(this.scrollRepeater),this.selectables=[],this.selectBox=null,this.boundingBox=null,this.rootElement=null,this.scrollingFrame=null}},{key:"setSelectables",value:function(e){this.selectables=e,this.selected=e.map(function(e){return!1}),"function"==typeof this.selectedSetter&&this.selectedSetter(this.selected,this.selected)}},{key:"mouseDown",value:function(t){if(0===t.button){this.boundingBoxSelector&&(this.boundingBox=document.querySelector(this.boundingBoxSelector));var s=e.absBox(this.boundingBox);if(!(t.pageX<s.left||t.pageX>s.width+s.left||t.pageY<s.top||t.pageY>s.height+s.top)){this.disableTextSelection&&this.rootElement.addEventListener("selectstart",e.disableTextSelection),this.scrollRepeater&&(clearInterval(this.scrollRepeater),this.scrollRepeater=null);var l=i(this.bound(t),2),n=l[0],r=l[1];if(this.selectBox=document.querySelector(this.selectBoxSelector),this.scrollingFrame&&(r+=this.scrollingFrame.scrollTop),this.startX=n,this.startY=r,this.endX=n,this.endY=r,this.dragging=!0,this.selecting=this.selectables.map(function(e){return!1}),"function"==typeof this.selectingSetter&&this.selectingSetter(this.selecting),this.addMode=this.overrideAddMode||t.ctrlKey||t.metaKey,this.addMode){if("function"==typeof this.selectedGetter){var o=this.selectedGetter()||[];this.selected=this.selectables.map(function(e,t){return!!o[t]})}}else this.selected=this.selecting,"function"==typeof this.selectedSetter&&this.selectedSetter(this.selected,this.selecting);this.updateSelection(),this.render()}}}},{key:"mouseUp",value:function(t){var s=this;if(this.dragging){if(0!==t.button)return;this.disableTextSelection&&this.rootElement.removeEventListener("selectstart",e.disableTextSelection);var l=i(this.bound(t),2),n=l[0],r=l[1];if(this.endX=n,this.endY=r,this.scrollingFrame&&(this.endY+=this.scrollingFrame.scrollTop),this.scrollRepeater&&(clearInterval(this.scrollRepeater),this.scrollRepeater=null),this.dragging=!1,this.updateSelection(),"function"==typeof this.selectedGetter){var o=this.selectedGetter()||[];this.selected=this.selectables.map(function(e,t){return!!o[t]})}if(this.addMode){var c=this.selecting.reduce(function(e,t){return e+t?1:0},0),a=this.selecting.findIndex(function(e){return!!e});1===c&&this.selected[a]?this.selected[a]=!1:this.selected=this.selected.map(function(e,t){return e||s.selecting[t]})}else this.selected=this.selecting;"function"==typeof this.selectedSetter&&this.selectedSetter(this.selected,this.selecting),this.selecting=[],this.selectingSetter&&this.selectingSetter(this.selecting),this.render()}}},{key:"mouseMove",value:function(e){if(this.dragging){var t=i(this.bound(e),2),s=t[0],l=t[1];this.endX=s,this.endY=l,this.scrollRepeater&&(clearInterval(this.scrollRepeater),this.scrollRepeater=null),this.scrollingFrame?this.endY+=this.scrollFrame(e):this.scrollDocumentEnabled&&this.scrollDocument(e),this.updateSelection(),this.render()}}},{key:"scrollFrame",value:function(e){var t=this,s=this.scrollingFrame,i=s.getBoundingClientRect(),l=0;return e.pageY>=i.bottom-this.scrollDistance?l=this.scrollSpeed:e.pageY<=i.top+this.scrollDistance&&(l=-this.scrollSpeed),s.scrollTop+=l,(e.pageY>=i.bottom||e.pageY<=i.top)&&(this.scrollRepeater&&clearInterval(this.scrollRepeater),this.scrollRepeater=setInterval(function(){return t.mouseMove(e)},16)),s.scrollTop}},{key:"scrollDocument",value:function(e){var t=this,s=0;this.endY<=window.pageYOffset?s=-this.scrollSpeed:this.endY>=window.pageYOffset+window.innerHeight&&(s=this.scrollSpeed),0!==s&&(window.scrollBy(0,s),this.scrollRepeater&&clearInterval(this.scrollRepeater),this.scrollRepeater=setInterval(function(){return t.mouseMove(e)},16))}},{key:"bound",value:function(t){var s=e.absBox(this.boundingBox);return[Math.min(Math.max(s.left,t.pageX),s.width+s.left),Math.min(Math.max(s.top,t.pageY),s.height+s.top)]}},{key:"updateSelection",value:function(){var t=this.getSelectionBox();t.top-=this.scrollingFrame?this.scrollingFrame.scrollTop:0,this.selecting=this.selectables.map(e.absBox).map(function(e){return Math.abs(2*(t.left-e.left)+t.width-e.width)<t.width+e.width&&Math.abs(2*(t.top-e.top)+t.height-e.height)<t.height+e.height}),this.selectingSetter&&this.selectingSetter(this.selecting)}},{key:"getSelectionBox",value:function(){return{left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.startX-this.endX),height:Math.abs(this.startY-this.endY)}}},{key:"renderSelection",value:function(){var e=this;(this.renderSelected||this.renderSelecting)&&this.selectables.forEach(function(t,s){e.renderSelecting&&(e.dragging&&e.selecting[s]?t.classList.add(e.selectingClass):t.classList.remove(e.selectingClass)),e.renderSelected&&(e.selected[s]?t.classList.add(e.selectedClass):t.classList.remove(e.selectedClass))})}},{key:"render",value:function(){var t=this.selectBox.style;if(this.dragging){var s=this.getSelectionBox(),i=e.absBox(this.boundingBox);if(t.display="block",this.firstRun){var l=e.absBox(this.selectBox);this.selectBoxStartX=i.left-l.left,this.selectBoxStartY=i.top-l.top,this.firstRun=!1}t.left=s.left-i.left+this.selectBoxStartX+"px",t.top=s.top-i.top+this.selectBoxStartY-(this.scrollingFrame?this.scrollingFrame.scrollTop:0)+"px",t.width=s.width+"px",t.height=s.height+"px"}else t.display="none";this.renderSelection()}}])&&l(t.prototype,s),n&&l(t,n),e}();s.d(t,"setSelectableItems",function(){return d}),s.d(t,"setOptions",function(){return f});var a=Object.assign||r;function h(e,t,s){e.selectable=new c(a({boundingBox:t.constraint?document.querySelector(t.constraint):e,selectBoxSelector:t.box||".selection",boundingBoxSelector:t.constraint},s)),e.selectable.setSelectables(Array.prototype.slice.call(e.querySelectorAll(t.items||".selectable")))}var u={twoWay:!1,params:["items","box","constraint"],bind:function(e,t){var s;e&&t&&(s=t.value,h(e,e.dataset,s))},update:function(e){this&&this.el&&!this.el.selectable&&h(this.el,this.el.dataset,e)},unbind:function(e){e||(e=this.el),e.selectable.detach(),e.selectable=null}};t.default=u;function d(e,t){if(e&&e.selectable&&"function"==typeof e.selectable.setSelectables){var s=Array.prototype.slice.call(e.querySelectorAll(t||e.dataset.items||".selectable"));return e.selectable.setSelectables(s),s.length}return-1}function f(e,t){if(e&&e.selectable&&"function"==typeof e.selectable.setSelectables){var s=null==e.selectable.rootElement&&null!=t.rootElement;a(e.selectable,t),s&&e.selectable.attach()}}}])});