(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,':root {\n    --sky-blue-crayola: #72ddf7ff;\n    --fondo: #f694c1;\n    --fondo-botones: #ffef9f;\n    --fondo-botones-2: #ffd97d;\n    --fondo-cajas: #b79ced;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: "Poppins", sans-serif;\n    font-size: 30px;\n}\n\nheader {\n    width: 100%;\n    height: 100px;\n    background-color: var(--sky-blue-crayola);\n}\n\nheader button {\n    width: 150px;\n    margin: 30px 15px;\n    height: 40px;\n    border: none;\n    font-size: 30px;\n    background-color: var(--fondo-botones);\n    font-weight: lighter;\n    border-radius: 30px;\n    color: #555;\n    cursor: pointer;\n    transition: all 0.5s ease-out;\n}\n\nbutton:hover {\n    background-color: var(--fondo-botones-2);\n    color: #333;\n    transform: scale(1.3);\n}\n.image-home {\n    width: 250px;\n    height: 300px;\n    border: 5px solid #555;\n}\n\n.image-home:hover {\n    transform: scale(1.3);\n}\n\nh1 {\n    font-size: 75px;\n    text-align: center;\n    padding: 15px 15px;\n    color: #555;\n}\n\np {\n    color: #333;\n}\n\n#content {\n    text-align: center;\n    background-color: var(--fondo);\n    width: 100%;\n    height: 100%;\n}\n\n.location {\n    margin: 20px auto 0;\n    width: 400px;\n    height: 500px;\n    border: 2px solid #333;\n    border-radius: 10px;\n    background-color: var(--fondo-cajas);\n    padding: 20px 10px;\n}\n\nh2 {\n    margin: 20px;\n}\n\np {\n    margin: 10px;\n}\n\nh3 {\n    font-size: 25px;\n}\n\n.location img {\n    margin-top: 30px;\n    width: 300px;\n    height: 200px;\n}\n\n.location:hover {\n    transform: scale(1.1);\n}\n.menu {\n    height: 100vh;\n}\n.div-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\n.card-sabor {\n    width: 250px;\n    height: 275px;\n    border: 4px solid #333;\n    border-radius: 15px;\n    background-color: var(--fondo-cajas);\n    cursor: pointer;\n}\n\n.card-sabor:hover {\n    transform: rotate(30deg);\n}\n\n.sabor-imagen {\n    width: 200px;\n    height: 200px;\n    margin-top: 15px;\n    border-radius: 50%;\n    border: 3px solid var(--fondo-cajas);\n    cursor: pointer;\n}\n\n.sabor-imagen:hover {\n    transform: scale(1.2);\n}\n\n.contact-div {\n    width: 100%;\n    height: 100vh;\n}\n',""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var d=n[i],s=r.base?d[0]+r.base:d[0],p=a[s]||0,u="".concat(s," ").concat(p);a[s]=p+1;var l=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var f=o(m,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var d=r(n,o),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n=t.p+"8b6f2b519553ddb8f962.jpg",e=t.p+"2f4f556c57be12cbac90.jpg",r=function(){const t=document.createElement("div"),r=document.createElement("h1"),o=new Image,a=document.createElement("div"),c=document.createElement("h2"),i=document.createElement("p"),d=document.createElement("p"),s=new Image;return r.innerText="Delicious Ice Cream, Visit us!",i.innerText="From your dreams to your palate, enjoy the different flavors we offer.",o.src=n,c.innerText="Location",d.innerText="742 de Evergreen Terrace",s.src=e,o.classList.add("image-home"),a.classList.add("location"),a.append(c,d,s),t.appendChild(r),t.appendChild(i),t.appendChild(o),t.appendChild(a),t},o=t.p+"9d3dba1fa17f87baa32c.jpg",a=t.p+"0d83c16589b906dce3a6.jpg",c=t.p+"8c5815b1d892833dea42.jpg",i=t.p+"472262d8eb2980d80965.jpg";function d(n,e){const t=document.createElement("div"),r=document.createElement("h3");r.innerText=n;const o=document.createElement("img");return o.src=e,o.classList.add("sabor-imagen"),t.classList.add("card-sabor"),t.append(r,o),t}var s=t(379),p=t.n(s),u=t(795),l=t.n(u),m=t(569),f=t.n(m),h=t(565),g=t.n(h),v=t(216),b=t.n(v),x=t(589),y=t.n(x),E=t(426),w={};w.styleTagTransform=y(),w.setAttributes=g(),w.insert=f().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=b(),p()(E.Z,w),E.Z&&E.Z.locals&&E.Z.locals;const C=function(){const n=document.querySelector("#content");for(n.style="";n.children.length>1;)n.children[1].remove()};document.querySelector("#content").append(function(){const n=document.createElement("header"),e=document.createElement("button"),t=document.createElement("button"),r=document.createElement("button");return e.type="button",r.type="button",t.type="button",e.id="Home",t.id="Contact",r.id="Menu",e.innerText="Home",r.innerText="Menu",t.innerText="Contact",n.append(e,r,t),n}(),r());const T=document.querySelector("#Home"),S=document.querySelector("#Menu"),j=document.querySelector("#Contact");T.addEventListener("click",(n=>{C(),document.querySelector("#content").appendChild(r())})),S.addEventListener("click",(n=>{C(),document.querySelector("#content").appendChild(function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("div"),r=document.createElement("p");return t.classList.add("div-grid"),t.appendChild(d("Galleta",o)),t.appendChild(d("Chocolate",a)),t.appendChild(d("Vainilla",c)),t.appendChild(d("Mamey",i)),e.innerText="Menu",r.innerText="Próximamente Nuevos sabores...",n.classList.add("menu"),n.append(e,t,r),n}())})),j.addEventListener("click",(n=>{C(),document.querySelector("#content").appendChild(function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("p");return e.innerText="Contact",t.innerText="Juan Herrera",n.classList.add("contact-div"),n.append(e,t),console.log(n),n}())}))})()})();