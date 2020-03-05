/*! HSO D365 CLI 1.3.1 | (c) HSO Innovation */!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=require("fs")},,,function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=n(5),a=function(){function t(){}return t.retrieveMultipleRecords=function(e,n,i){return r(this,void 0,void 0,(function(){var r,u,a,s,c;return o(this,(function(o){switch(o.label){case 0:return r=t.getSystemQueryOptions(n),u=t.settings.crm,a=u.url,s=u.version,c=a+"/api/data/v"+s+"/"+e+r,[4,t.request("GET",c,null,{Authorization:"Bearer "+i})];case 1:return[2,o.sent().body.value]}}))}))},t.updateRecord=function(e,n,i,u){return r(this,void 0,void 0,(function(){var r,a,s,c;return o(this,(function(o){switch(o.label){case 0:return r=t.settings.crm,a=r.url,s=r.version,c=a+"/api/data/v"+s+"/"+e+"("+n+")",[4,t.request("PATCH",c,i,{Authorization:"Bearer "+u,Prefer:"return=representation"})];case 1:return[2,o.sent().body]}}))}))},t.insertRecord=function(e,n,i){return r(this,void 0,void 0,(function(){var r,u,a,s;return o(this,(function(o){switch(o.label){case 0:return r=t.settings.crm,u=r.url,a=r.version,s=u+"/api/data/v"+a+"/"+e,[4,t.request("POST",s,n,{Authorization:"Bearer "+i,Prefer:"return=representation"})];case 1:return[2,o.sent().body]}}))}))},t.getPicklistOptionSet=function(e,n,i){return r(this,void 0,void 0,(function(){var r,u,a,s;return o(this,(function(o){switch(o.label){case 0:return r=t.settings.crm,u=r.url,a=r.version,s=u+"/api/data/v"+a+"/EntityDefinitions(LogicalName='"+e+"')/Attributes(LogicalName='"+n+"')/Microsoft.Dynamics.CRM.PicklistAttributeMetadata?$select=LogicalName&$expand=OptionSet($select=Options)",[4,t.request("GET",s,null,{Authorization:"Bearer "+i})];case 1:return[2,o.sent().body.OptionSet.Options.map((function(t){return{value:t.Value,externalValue:t.ExternalValue,label:t.Label.UserLocalizedLabel.Label}}))]}}))}))},t.executeAction=function(t,e,n,i,u){return r(this,void 0,void 0,(function(){return o(this,(function(r){return i?[2,this.executeBoundAction(t,e,n,i,u)]:[2,this.executeUnboundAction(t,e,n)]}))}))},t.executeBoundAction=function(e,n,i,u,a){return r(this,void 0,void 0,(function(){var r,s,c,l,f;return o(this,(function(o){switch(o.label){case 0:return[4,Xrm.Utility.getEntityMetadata(u)];case 1:return r=o.sent(),s=t.settings.crm,c=s.url,l=s.version,f=c+"/api/data/v"+l+"/"+r.EntitySetName+"("+a+")/Microsoft.Dynamics.CRM."+e,[4,t.request("POST",f,i,{Authorization:"Bearer "+n})];case 2:return[2,o.sent().body]}}))}))},t.executeUnboundAction=function(e,n,i){return r(this,void 0,void 0,(function(){var r,u,a,s,c;return o(this,(function(o){switch(o.label){case 0:return r=i?"POST":"GET",u=t.settings.crm,a=u.url,s=u.version,c=a+"/api/data/v"+s+"/"+e,[4,t.request(r,c,i,{Authorization:"Bearer "+n})];case 1:return[2,o.sent().body]}}))}))},t.getSystemQueryOptions=function(e){var n=e.select,r=e.filters,o=e.top,i=t.generateSelect(n),u=t.generateFilter(r),a=o?"$top="+o:null,s=[];return i&&s.push(i),u&&s.push(u),a&&s.push(a),s.length>0?"?"+s.join("&"):""},t.generateSelect=function(t){return void 0===t&&(t=[]),t.length>0?"$select="+t.join(","):null},t.generateFilter=function(e){void 0===e&&(e=[]);var n=[];if(e.length>0)for(var r=0,o=e;r<o.length;r++){var i=o[r];n.push(t.parseFilter(i))}return n.length>0?"$filter="+n.join(" and "):null},t.parseFilter=function(t){for(var e=t.type,n=void 0===e?"and":e,r=[],o=0,i=t.conditions;o<i.length;o++){var u=i[o],a=u.attribute,s=u.operator,c=void 0===s?"eq":s,l=u.value,f=a+" "+c;f+="string"==typeof l?" '"+l+"'":" "+l,r.push(f)}return""+r.join(" "+n+" ")},t.request=function(e,n,r,o){return void 0===o&&(o={}),new Promise((function(i,a){var s=t.getRequestOptions(e,n,o,r),c=u.request(s,(function(e){var n="";e.setEncoding("utf8"),e.on("data",(function(t){return n+=t})),e.on("end",(function(){try{i(t.handleNodeHttpsResponse(e,n))}catch(t){a(t)}}))}));c.on("error",(function(t){a(t)})),"GET"!==e&&c.write(r&&JSON.stringify(r)),c.end()}))},t.getRequestOptions=function(e,n,r,o){var i=n.split("/"),u=i[2],a="/"+i.slice(3,i.length).join("/"),s=Object.assign({},t.jsonHeaders,r);if("GET"!==e){var c=o&&JSON.stringify(o);s["Content-Length"]=c.length}return{hostname:u,port:443,path:encodeURI(a),method:e,headers:s}},t.handleNodeHttpsResponse=function(e,n){var r={200:function(){return t.dataHandler(e,n)},201:function(){return t.dataHandler(e,n)},204:function(){return{body:"",getResponseHeader:function(t){return e.headers[t]},statusCode:e.statusCode}}}[e.statusCode];if(r)return r();if(401===e.statusCode)throw new Error("Unauthorized");throw new Error(e.statusCode+": "+e.statusMessage+"\n "+n)},t.dataHandler=function(t,e){var n=null;try{n=JSON.parse(e)}catch(t){throw new Error("JSON response can't be parsed")}return{body:n,getResponseHeader:function(e){return t.headers[e]},statusCode:t.statusCode}},t.settings=JSON.parse(i.readFileSync("tools/crm.json","utf8")),t.jsonHeaders={"OData-MaxVersion":"4.0","OData-Version":"4.0",Accept:"application/json","Content-Type":"application/json; charset=utf-8"},t}();e.NodeApi=a},,function(t,e){t.exports=require("https")},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),u=n(8),a=n(0),s=function(){function t(){this.sockets=[],this.settings=JSON.parse(a.readFileSync("tools/crm.json","utf8")),this.express=i(),this.express.use(i.static("node_modules/adal-angular/dist")),this.mountRoutes(),this.startListen()}return t.prototype.startListen=function(){var t=this,e=this.settings.adal.redirectUri.split("/"),n=e[e.length-2].split(":"),r=parseInt(n[1]),o=e.slice(0,e.length-1).join("/");this.httpServer=this.express.listen(r,(function(){return u(o),console.log("server is listening on "+r)})),this.httpServer.on("connection",(function(e){t.sockets.push(e)}))},t.prototype.mountRoutes=function(){var e=i.Router();return t.mountDefaultRoute(e),this.mountAuthRoute(e),this.mountTokenRoute(e),this.mountAuthenticatedRoute(e),this.express.use("/",e),e},t.mountDefaultRoute=function(t){t.get("/",(function(t,e){e.redirect("/auth")}))},t.prototype.mountAuthRoute=function(t){var e=this;t.get("/auth",(function(t,n){n.send('\n                <head>\n                    <title>test</title>\n                </head>\n                <body>\n                    <script src="adal.min.js"><\/script>\n                    <script>\n                        var config = {\n                            clientId: "'+e.settings.adal.clientId+"\",\n                            popUp: true,\n                            callback: function (errorDesc, token, error, tokenType) {\n                                authContext.acquireToken('"+e.settings.crm.url+'\', function (errorDesc, token, error) {\n                                    if (!error) {\n                                        window.location.href = "/token/" + token;\n                                    }\n                                });\n                            }\n                        }\n                        var authContext = new AuthenticationContext(config);\n                        if (authContext.isCallback(window.location.hash)) {\n                            authContext.handleWindowCallback();\n                        } else {\n                            authContext.login();\n                        }\n                    <\/script>\n                </body>')}))},t.prototype.mountTokenRoute=function(t){var e=this;t.get("/token/:token",(function(t,n){e.bearer=t.params.token,n.redirect("/authenticated")}))},t.prototype.mountAuthenticatedRoute=function(t){var e=this;t.get("/authenticated",(function(t,n){return r(e,void 0,void 0,(function(){var t=this;return o(this,(function(e){switch(e.label){case 0:return n.setHeader("Connection","Transfer-Encoding"),n.setHeader("Content-Type","text/html; charset=utf-8"),n.setHeader("Transfer-Encoding","chunked"),n.flushHeaders(),this.response=n,[4,this.onAuthenticated()];case 1:return e.sent(),setTimeout((function(){t.httpServer.close((function(){return console.log("server stopped listening")}));for(var e=0,n=t.sockets;e<n.length;e++){n[e].destroy()}}),100),n.send(),[2]}}))}))}))},t.prototype.onAuthenticated=function(){return Promise.resolve()},t.prototype.log=function(t){var e=this;return new Promise((function(n){e.response.write(t+"<br/>",(function(){e.response.flushHeaders(),n()}))}))},t}();e.AdalRouter=s},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("open")},,,,,,,function(t,e,n){t.exports=n(16)},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n(17),c=n(18),l=n(19);(new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.onAuthenticated=function(){var t=process.argv[3];return this.log("Customizable: "+t),this.setFormCustomizable("true"===t)},e.prototype.setFormCustomizable=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,i,a;return u(this,(function(u){switch(u.label){case 0:return this.log("Solution name: "+this.settings.crm.solution_name),[4,s.SolutionService.getSolution(["solutionid"],this.bearer)];case 1:return e=u.sent(),this.log("Solution id: "+e.solutionid),this.log(""),[4,this.getSolutionComponents(e)];case 2:n=u.sent(),r=0,o=n,u.label=3;case 3:return r<o.length?(i=o[r],this.log("SolutionComponent: "+i.objectid),[4,this.getSystemForm(i)]):[3,7];case 4:return a=u.sent(),[4,this.setForm(a,t)];case 5:u.sent(),u.label=6;case 6:return r++,[3,3];case 7:return[2]}}))}))},e.prototype.setForm=function(t,e){return i(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:if(this.log("Form name: "+t.name),t.iscustomizable.Value===e&&t.canbedeleted.Value===e)return[3,5];t.iscustomizable.CanBeChanged&&(t.iscustomizable.Value=e),t.canbedeleted.CanBeChanged&&(t.canbedeleted.Value=e),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,l.SystemFormService.updateRecord(t.formid,t,this.bearer)];case 2:return r.sent(),this.log("Updated"),[3,4];case 3:return n=r.sent(),this.log(n.message),[3,4];case 4:return[3,6];case 5:this.log("Unmodified"),r.label=6;case 6:return this.log("---------------------------"),[2]}}))}))},e.prototype.getSolutionComponents=function(t){return c.SolutionComponentService.retrieveMultipleRecords({select:["objectid"],filters:[{conditions:[{attribute:"_solutionid_value",value:t.solutionid},{attribute:"componenttype",value:60}]}]},this.bearer)},e.prototype.getSystemForm=function(t){return l.SystemFormService.getSystemForm(t.objectid,["name","objecttypecode","iscustomizable","canbedeleted"],this.bearer)},e}(a.AdalRouter))).express},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=n(0),a=function(){function t(){}return t.retrieveMultipleRecords=function(e,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,i.NodeApi.retrieveMultipleRecords(t.entitySetName,e,n)]}))}))},t.getSolution=function(e,n){return r(this,void 0,void 0,(function(){var r,i;return o(this,(function(o){switch(o.label){case 0:return r=JSON.parse(u.readFileSync("tools/crm.json","utf8")),i=r.crm.solution_name,[4,t.retrieveMultipleRecords({select:e,filters:[{conditions:[{attribute:"uniquename",value:i}]}]},n)];case 1:return[2,o.sent()[0]]}}))}))},t.entitySetName="solutions",t}();e.SolutionService=a},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=function(){function t(){}return t.retrieveMultipleRecords=function(e,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,i.NodeApi.retrieveMultipleRecords(t.entitySetName,e,n)]}))}))},t.entitySetName="solutioncomponents",t}();e.SolutionComponentService=u},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),u=function(){function t(){}return t.retrieveMultipleRecords=function(e,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,i.NodeApi.retrieveMultipleRecords(t.entitySetName,e,n)]}))}))},t.updateRecord=function(e,n,u){return r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,i.NodeApi.updateRecord(t.entitySetName,e,n,u)]}))}))},t.getSystemForm=function(e,n,i){return r(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,t.retrieveMultipleRecords({select:n,filters:[{conditions:[{attribute:"formid",value:e}]}]},i)];case 1:return[2,r.sent()[0]]}}))}))},t.entitySetName="systemforms",t}();e.SystemFormService=u}]);