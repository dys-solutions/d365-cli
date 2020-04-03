/*! HSO D365 CLI 1.4.1 | (c) HSO Innovation */!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}({0:function(e,t){e.exports=require("fs")},1:function(e,t){e.exports=require("shelljs")},16:function(e,t,r){e.exports=r(17)},17:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function l(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,s)}c((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,n=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),l=r(0),s=r(9),c=function(){function e(){}return e.extract=function(){return n(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return(t=e.getCodeKeys()).length>0&&e.addLocalesFile(),[4,e.processCodeKeys(t)];case 1:return r.sent(),[2,null]}}))}))},e.getCodeKeys=function(){for(var t=new Set,r=0,n=a.ls("src/**/*.ts*");r<n.length;r++)for(var o=n[r],s=String(l.readFileSync(o)),c=null;null!==(c=e.regex.exec(s));)c.index===e.regex.lastIndex&&(e.regex.lastIndex+=1),t.add(c[1]);return Array.from(t.values())},e.addLocalesFile=function(){a.test("-d","src/translation/locales")||a.mkdir("src/translation/locales"),a.test("-f","src/translation/locales/locales.resx")||(a.cp("-R",__dirname+"/Locales/locales.resx","./src/translation/locales"),a.exec("git add src/translation/locales/locales.resx")),a.test("-f","src/translation/locales/locales.1033.resx")||(a.cp("-r",__dirname+"/Locales/locales.resx","./src/translation/locales/locales.1033.resx"),a.exec("git add src/translation/locales/locales.1033.resx"))},e.processCodeKeys=function(t){return n(this,void 0,void 0,(function(){var r,n,l,s,c;return o(this,(function(o){switch(o.label){case 0:r=a.ls("src/translation/locales/*.resx"),n=0,l=r,o.label=1;case 1:return n<l.length?(s=l[n],[4,e.getResxDocument(s)]):[3,4];case 2:c=o.sent(),e.processXmlDoc(c,t),e.writeXmlDoc(c,s),o.label=3;case 3:return n++,[3,1];case 4:return[2]}}))}))},e.getResxDocument=function(e){var t=String(l.readFileSync(e));return s.parseStringPromise(t)},e.processXmlDoc=function(e,t){for(var r=e.root.data.map((function(e){return e.$.name})),n=function(r){if(!t.includes(r)){var n=e.root.data.find((function(e){return e.$.name===r})),o=e.root.data.indexOf(n);e.root.data.splice(o,1),console.log("remove "+r)}},o=0,a=r;o<a.length;o++){n(a[o])}for(var l=0,s=t;l<s.length;l++){var c=s[l];r.includes(c)||(e.root.data.push({$:{name:c,"xml-space":"preserve"},value:[c]}),console.log("add "+c))}},e.writeXmlDoc=function(e,t){var r=(new s.Builder).buildObject(e);a.ShellString(r).to(t)},e.regex=/Translation\.translate\('([^']*)'\)/gm,e}();t.Resx=c,c.extract()},9:function(e,t){e.exports=require("xml2js")}});