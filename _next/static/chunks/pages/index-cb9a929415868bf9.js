(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6638)}])},6638:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return V}});var n=t(5893),o=t(7294),i=function(e){var r=e.canvasRef,t=e.canvasConfig,i=e.brushColor,c=e.paintInfo;(0,o.useEffect)((function(){var e=r.current;return e.addEventListener("click",u),e.addEventListener("contextmenu",d),e.addEventListener("mousedown",a),e.addEventListener("touchstart",a),e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s),e.addEventListener("touchend",s),function(){e.removeEventListener("click",u),e.removeEventListener("contextmenu",d),e.removeEventListener("mousedown",a),e.removeEventListener("touchstart",a),e.removeEventListener("mouseup",s),e.removeEventListener("mouseleave",s),e.removeEventListener("touchend",s)}}),[i,t]);var a=function(e){var t=r.current;0===e.button?(t.addEventListener("mousemove",u),t.addEventListener("touchmove",u)):2===e.button?(t.addEventListener("mousemove",d),t.addEventListener("touchmove",d)):(t.addEventListener("mousemove",u),t.addEventListener("touchmove",u))},s=function(e){var t=r.current;0===e.button?(t.removeEventListener("mousemove",u),t.removeEventListener("touchmove",u)):(t.removeEventListener("mousemove",d),t.removeEventListener("touchmove",d))},l=function(e){var t=r.current;return e.touches?{x:e.touches[0].pageX-t.offsetLeft,y:e.touches[0].pageY-t.offsetTop}:{x:e.pageX-t.offsetLeft,y:e.pageY-t.offsetTop}},u=function(e){e.preventDefault();var r=l(e),n=Math.floor(r.x/t.gridWidth),o=Math.floor(r.y/t.gridWidth),a=1e4*n+o;c.get(a,i)!=i&&(c.set(a,i),h(n,o,i))},d=function(e){e.preventDefault();var r=l(e),n=Math.floor(r.x/t.gridWidth),o=Math.floor(r.y/t.gridWidth),a=1e4*n+o;void 0!=c.get(a)&&(c.delete(a,i),h(n,o,t.bgColor))},h=function(e,n,o){var i=r.current.getContext("2d");i.fillStyle=o,i.fillRect(e*t.gridWidth+1,n*t.gridWidth+1,t.gridWidth-2,t.gridWidth-2)};return(0,o.useEffect)((function(){var e=r.current,n=e.getContext("2d");e.width=t.width,e.height=t.height,n.fillStyle=t.bgColor,n.fillRect(0,0,e.width,e.height),n.lineWidth=.5,n.strokeStyle=t.gridColor;for(var o=t.gridWidth;o<e.width;o+=t.gridWidth)n.beginPath(),n.moveTo(o,0),n.lineTo(o,e.height),n.closePath(),n.stroke();for(var i=t.gridWidth;i<e.height;i+=t.gridWidth)n.beginPath(),n.moveTo(0,i),n.lineTo(e.width,i),n.closePath(),n.stroke();c.forEach((function(e,r){h(Math.floor(r/1e4),r%1e4,e)}))}),[t]),(0,n.jsx)("canvas",{ref:r,className:"border-0 rounded-lg shadow-lg"})};i.defaultProps={canvasConfig:{width:500,height:500,bgColor:"white",gridWidth:20,gridColor:"#eee"},brushColor:"#f87171"};var c=i,a=t(713),s=t(255),l=t.n(s);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}var h,g=function(e){var r=e.setBrushColor,t=(0,o.useState)({displayColorPicker:!1,history:[],color:{r:"87",g:"96",b:"111",a:"1"}}),i=t[0],c=t[1],s=(0,o.useState)(!1),u=s[0],h=s[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{onClick:function(){h(!0),c(d({},i,{displayColorPicker:!i.displayColorPicker}))},className:"mx-4 w-12 h-12 inline-block rounded-xl shadow-xl shadow-gray-400 ",style:{background:u?"rgba(".concat(i.color.r,", ").concat(i.color.g,", ").concat(i.color.b,", ").concat(i.color.a,")"):"conic-gradient( rgb(240,40,40), rgb(240,240,40), rgb(40,240,40),rgb(40,240,240),rgb(40,40,240),rgb(240,40,240),rgb(240,40,40)"}}),i.displayColorPicker?(0,n.jsxs)("div",{className:l().popover,children:[(0,n.jsx)("div",{className:l().cover,onClick:function(){var e="rgba(".concat(i.color.r,",").concat(i.color.g,",").concat(i.color.b,",").concat(i.color.a,")");i.history.includes(e)||i.history.push(e),r(e),c(d({},i,{displayColorPicker:!1}))}}),(0,n.jsx)(a.xS,{color:i.color,presetColors:i.history,onChange:function(e){c(d({},i,{color:e.rgb}))},width:240})]}):null]})},f=function(e){var r=e.brushColor,t=e.setBrushColor,o=["#f87171","#fb923c","#facc15","#4ade80","#60a5fa","#c084fc"];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{onClick:function(){return t(o[0])},className:"color-circle bg-red-400  ring-red-200 ring-offset-red-300 ".concat(r==o[0]?"ring-4":"hover:ring-4")}),(0,n.jsx)("span",{onClick:function(){return t(o[1])},className:"color-circle bg-orange-400 ring-orange-200 ring-offset-orange-300 ".concat(r==o[1]?"ring-4":"hover:ring-4")}),(0,n.jsx)("span",{onClick:function(){return t(o[2])},className:"color-circle bg-yellow-400 ring-yellow-200 ring-offset-yellow-300 ".concat(r==o[2]?"ring-4":"hover:ring-4")}),(0,n.jsx)(g,{setBrushColor:t}),(0,n.jsx)("span",{onClick:function(){return t(o[3])},className:"color-circle bg-green-400 ring-green-200 ring-offset-green-300 ".concat(r==o[3]?"ring-4":"hover:ring-4")}),(0,n.jsx)("span",{onClick:function(){return t(o[4])},className:"color-circle bg-blue-400 ring-blue-200 ring-offset-blue-300 ".concat(r==o[4]?"ring-4":"hover:ring-4")}),(0,n.jsx)("span",{onClick:function(){return t(o[5])},className:"color-circle bg-purple-400 ring-purple-200 ring-offset-purple-300 ".concat(r==o[5]?"ring-4":"hover:ring-4")})]})};function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)}var b,m=function(e){return o.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),h||(h=o.createElement("path",{d:"M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z"})))};function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}var w=function(e){return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),b||(b=o.createElement("path",{d:"M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"})))};function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){x(e,r,t[r])}))}return e}var j,C=function(e){var r=e.canvasConfig,t=e.setCanvasConfig;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("nav",{className:"inline-flex rounded-full shadow-md",children:[(0,n.jsx)("button",{onClick:function(){r.width>2*r.gridWidth&&t(y({},r,{width:r.width-r.gridWidth}))},className:"btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50 ",children:(0,n.jsx)(m,{className:"h-5 w-5"})}),(0,n.jsx)("p",{className:"btn bg-indigo-50 border-indigo-500 text-indigo-600",children:"\u753b\u5e03\u5bbd\u5ea6"}),(0,n.jsx)("button",{onClick:function(){r.width<document.body.clientWidth-20&&t(y({},r,{width:r.width+r.gridWidth}))},className:"btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50",children:(0,n.jsx)(w,{className:"h-5 w-5"})})]}),(0,n.jsxs)("nav",{className:"inline-flex rounded-full shadow-md",children:[(0,n.jsx)("button",{onClick:function(){r.gridWidth>4&&t(y({},r,{gridWidth:r.gridWidth-2}))},className:"btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50",children:(0,n.jsx)(m,{className:"h-5 w-5"})}),(0,n.jsx)("p",{className:"bg-indigo-50 border-indigo-500 text-indigo-600 btn",children:"\u7f51\u683c\u5927\u5c0f"}),(0,n.jsx)("button",{onClick:function(){2*r.gridWidth<r.width&&t(y({},r,{gridWidth:r.gridWidth+2}))},className:"btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50",children:(0,n.jsx)(w,{className:"h-5 w-5"})})]}),(0,n.jsxs)("nav",{className:"inline-flex rounded-full shadow-md",children:[(0,n.jsx)("button",{onClick:function(){r.height>2*r.gridWidth&&t(y({},r,{height:r.height-r.gridWidth}))},className:"btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50",children:(0,n.jsx)(m,{className:"h-5 w-5"})}),(0,n.jsx)("p",{className:" bg-indigo-50 border-indigo-500 text-indigo-600 btn",children:"\u753b\u5e03\u9ad8\u5ea6"}),(0,n.jsx)("button",{onClick:function(){r.height<document.body.clientHeight-20&&t(y({},r,{height:r.height+r.gridWidth}))},className:"btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50",children:(0,n.jsx)(w,{className:"h-5 w-5"})})]})]})},E=t(3162);function N(){return N=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},N.apply(this,arguments)}var O,k=function(e){return o.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},e),j||(j=o.createElement("path",{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144 55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z",fill:"currentColor"})))};function P(){return P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},P.apply(this,arguments)}var L,W=function(e){return o.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e),O||(O=o.createElement("path",{d:"m433.941 129.941-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z",fill:"currentColor"})))};function S(){return S=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S.apply(this,arguments)}var z,_=function(e){return o.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},e),L||(L=o.createElement("path",{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z",fill:"currentColor"})))};function M(){return M=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},M.apply(this,arguments)}var B=function(e){return o.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},e),z||(z=o.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})))};function I(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function A(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(s){a=!0,o=s}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return I(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(e){var r=e.canvasRef,t=e.canvasConfig,o=e.setCanvasConfig,i=e.paintInfo,c=e.setPaintInfo;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{id:"input",type:"file",accept:".px",className:"hidden",onChange:function(){var e=new FileReader;e.readAsText(document.getElementById("input").files[0]),e.onload=function(e){var r=JSON.parse(e.target.result),t=new Map;Object.entries(r.paintInfo).forEach((function(e){var r=A(e,2),n=r[0],o=r[1];t.set(parseInt(n),o)})),c(t),o(r.canvasConfig)}}}),(0,n.jsxs)("button",{onClick:function(){document.getElementById("input").click()},className:"btn-round border-gray-300 text-white bg-indigo-600 hover:bg-indigo-700 px-1",children:[(0,n.jsx)(_,{className:"h-5 w-5 mr-1"}),"\u8f7d\u5165(.px)"]}),(0,n.jsxs)("button",{onClick:function(){r.current.toBlob((function(e){(0,E.saveAs)(e,"pixxel.png")}))},className:"btn-round border-gray-300 text-white bg-green-600 hover:bg-green-700 ",children:[(0,n.jsx)(k,{className:"h-5 w-5 mr-1"}),"\u4fdd\u5b58(.png)"]}),(0,n.jsxs)("button",{onClick:function(){var e={canvasConfig:t,paintInfo:Object.fromEntries(i)},r=new Blob([JSON.stringify(e)],{type:"text/plain;charset=utf-8"});(0,E.saveAs)(r,"pixeel.px")},className:"btn-round border-gray-300 text-white bg-amber-600 hover:bg-amber-700",children:[(0,n.jsx)(W,{className:"h-5 w-5 mr-1"}),"\u4fdd\u5b58(.px)"]}),(0,n.jsx)("a",{href:"https://github.com/fzf404/Pixxel",target:"_blank",className:"btn-round border-gray-300 text-white bg-gray-600 hover:bg-gray-700 ",children:(0,n.jsx)(B,{className:"h-5 w-5"})})]})},H=t(3595);function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function V(){var e=(0,o.useState)("#f87171"),r=e[0],t=e[1],i=(0,o.useState)(new Map),a=i[0],s=i[1],l=(0,o.useRef)(null),u=(0,o.useState)({width:500,height:500,bgColor:"white",gridWidth:20,gridColor:"#eee"}),d=u[0],h=u[1];return(0,o.useEffect)((function(){var e=document.body.clientWidth-40;d.width>e&&h(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){R(e,r,t[r])}))}return e}({},d,{width:e}))}),[]),(0,n.jsxs)(H.default,{children:[(0,n.jsx)("div",{className:"mt-4 space-x-4",children:(0,n.jsx)(C,{canvasConfig:d,setCanvasConfig:h})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(f,{setBrushColor:t,brushColor:r})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(c,{width:"0",height:"0",canvasRef:l,canvasConfig:d,brushColor:r,paintInfo:a})}),(0,n.jsx)("div",{className:"space-x-2 space-y-2",children:(0,n.jsx)(T,{canvasRef:l,canvasConfig:d,setCanvasConfig:h,paintInfo:a,setPaintInfo:s})})]})}},3595:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(9008),i=t.n(o);r.default=function(e){var r=e.children;return(0,n.jsxs)("div",{className:"contaner min-h-screen flex flex-col space-y-4 items-center bg-slate-200 ",children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.6"}),(0,n.jsx)("title",{children:"Pixxel"})]}),r]})}},255:function(e){e.exports={popover:"picker_popover__0nNmt",cover:"picker_cover__po2H6"}}},function(e){e.O(0,[737,774,888,179],(function(){return r=5557,e(e.s=r);var r}));var r=e.O();_N_E=r}]);