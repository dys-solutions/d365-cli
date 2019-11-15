/*! HSO D365 CLI 1.0.4 | (c) HSO Innovation */!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([,function(e,t){e.exports=require("fs")},,,,,function(e,t,n){e.exports=n(7)},function(e,t,n){"use strict";var a=this&&this.__awaiter||function(i,u,s,a){return new(s=s||Promise)(function(e,t){function n(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((a=a.apply(i,u||[])).next())})},h=this&&this.__generator||function(n,r){var o,i,u,e,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=2&t[0]?i.return:t[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,t[1])).done)return u;switch(i=0,u&&(t=[2&t[0],u.value]),t[0]){case 0:case 1:u=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(u=0<(u=s.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){s.label=t[1];break}if(6===t[0]&&s.label<u[1]){s.label=u[1],u=t;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(t);break}u[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],i=0}finally{o=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),b=n(1),o=n(9),i=n(10),c=n(11);function u(){this.sockets=[],this.settings=JSON.parse(b.readFileSync("deploy/crm.json","utf8")),this.md5=function(e){return o.createHash("md5").update(e).digest("hex")},this.express=r(),this.express.use(r.static("node_modules/adal-angular/dist")),this.mountRoutes(),this.startListen()}(new(u.prototype.startListen=function(){var t=this,e=this.settings.adal.redirectUri.split("/"),n=e[e.length-2].split(":"),r=parseInt(n[1]),o=e.slice(0,e.length-1).join("/");this.httpServer=this.express.listen(r,function(){return i(o),console.log("server is listening on "+r)}),this.httpServer.on("connection",function(e){t.sockets.push(e)})},u.prototype.mountRoutes=function(){var e=r.Router();u.mountDefaultRoute(e),this.mountAuthRoute(e),this.mountTokenRoute(e),this.mountDeployRoute(e),this.express.use("/",e)},u.mountDefaultRoute=function(e){e.get("/",function(e,t){t.redirect("/auth")})},u.prototype.mountAuthRoute=function(e){var n=this;e.get("/auth",function(e,t){t.send('\n                <head>\n                    <title>test</title>\n                </head>\n                <body>\n                    <script src="adal.min.js"><\/script>\n                    <script>\n                        var config = {\n                            clientId: "'+n.settings.adal.clientId+"\",\n                            popUp: true,\n                            callback: function (errorDesc, token, error, tokenType) {\n                                authContext.acquireToken('"+n.settings.crm.url+'\', function (errorDesc, token, error) {\n                                    if (!error) {\n                                        window.location.href = "/token/" + token;\n                                    }\n                                });\n                            }\n                        }\n                        var authContext = new AuthenticationContext(config);\n                        if (authContext.isCallback(window.location.hash)) {\n                            authContext.handleWindowCallback();\n                        } else {\n                            authContext.login();\n                        }\n                    <\/script>\n                </body>')})},u.prototype.mountTokenRoute=function(e){var n=this;e.get("/token/:token",function(e,t){n.bearer=e.params.token,console.log("Bearer: "+n.bearer),t.redirect("/deploy")})},u.prototype.mountDeployRoute=function(e){var n=this;e.get("/deploy",function(e,t){return a(n,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return t.setHeader("Connection","Transfer-Encoding"),t.setHeader("Content-Type","text/html; charset=utf-8"),t.setHeader("Transfer-Encoding","chunked"),t.flushHeaders(),[4,this.deploy(function(e){t.write(""+e,function(){t.flushHeaders()})})];case 1:return e.sent(),t.send(),[2]}})})})},u.prototype.deploy=function(i){return a(this,void 0,void 0,function(){var t,n,r,o=this;return h(this,function(e){switch(e.label){case 0:return t=this.settings.crm,n=t.publisher_prefix,r=t.url,i("Deploying to "+r+"...<br/>"),[4,this.deployDirectory("dist/"+n+"_",i)];case 1:return e.sent(),i("Deploy finished"),setTimeout(function(){o.httpServer.close(function(){return console.log("server stopped listening")});for(var e=0,t=o.sockets;e<t.length;e++)t[e].destroy()},100),[2]}})})},u.prototype.deployDirectory=function(d,p){return a(this,void 0,void 0,function(){var t=this;return h(this,function(e){return[2,new Promise(function(f){b.readdir(d,function(e,l){return a(t,void 0,void 0,function(){var t,n,r,o,i,u,s,a,c;return h(this,function(e){switch(e.label){case 0:t=[],n=0,r=l,e.label=1;case 1:return n<r.length?(o=r[n],i=d+"/"+o,b.lstatSync(i).isDirectory()?(s=(u=t).push,[4,this.deployDirectory(i,p)]):[3,3]):[3,6];case 2:return s.apply(u,[e.sent()]),[3,5];case 3:return c=(a=t).push,[4,this.deployFile(i,p)];case 4:c.apply(a,[e.sent()]),e.label=5;case 5:return n++,[3,1];case 6:return Promise.all(t).then(function(){f()}),[2]}})})})})]})})},u.prototype.deployFile=function(i,u){return a(this,void 0,void 0,function(){var t=this;return h(this,function(e){return[2,new Promise(function(o){b.readFile(i,function(e,r){return a(t,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return console.log("Using Bearer: "+this.bearer),t=i.substr(5),[4,this.getWebresource(t)];case 1:return n=e.sent(),u(""+t),n?[4,this.updateWebresource(n,r,u)]:[3,3];case 2:return e.sent(),[3,5];case 3:return[4,this.insertWebresource(r,t,u)];case 4:e.sent(),e.label=5;case 5:return o(),[2]}})})})})]})})},u.prototype.updateWebresource=function(i,u,s){return a(this,void 0,void 0,function(){var t,n,r,o;return h(this,function(e){switch(e.label){case 0:if(t=this.md5(i.content),n=u.toString("base64"),r=this.md5(n),t===r)return[3,6];i.content=n,e.label=1;case 1:return e.trys.push([1,4,,5]),[4,c.WebresourceService.upsert(i,this.bearer)];case 2:return e.sent(),s(" updated..."),[4,c.WebresourceService.publish(i,this.bearer)];case 3:return e.sent(),s(" and published<br/>"),[3,5];case 4:return o=e.sent(),s(" failed "+o.message+"<br/>"),[3,5];case 5:return[3,7];case 6:s(" unmodified<br/>"),e.label=7;case 7:return[2]}})})},u.prototype.insertWebresource=function(i,u,s){return a(this,void 0,void 0,function(){var t,n,r,o;return h(this,function(e){switch(e.label){case 0:t=i.toString("base64"),e.label=1;case 1:return e.trys.push([1,4,,5]),n=this.settings.crm.solution_name,[4,c.WebresourceService.upsert({content:t,name:u,displayname:u},this.bearer)];case 2:return r=e.sent(),s(" inserted..."),[4,c.WebresourceService.addToSolution(r,n,this.bearer)];case 3:return e.sent(),s(" and added to solution "+n+"<br/>"),[2,r];case 4:return o=e.sent(),s(" failed "+o.message+"<br/>"),[3,5];case 5:return[2]}})})},u.prototype.getWebresource=function(t){return a(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,c.WebresourceService.retrieveMultipleRecords({select:["name","webresourcetype","content","displayname","solutionid"],filters:[{conditions:[{attribute:"name",value:t}]}],top:1},this.bearer)];case 1:return[2,e.sent()[0]]}})})},u)).express},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("opn")},function(e,t,n){"use strict";var u=this&&this.__awaiter||function(i,u,s,a){return new(s=s||Promise)(function(e,t){function n(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((a=a.apply(i,u||[])).next())})},f=this&&this.__generator||function(n,r){var o,i,u,e,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=2&t[0]?i.return:t[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,t[1])).done)return u;switch(i=0,u&&(t=[2&t[0],u.value]),t[0]){case 0:case 1:u=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(u=0<(u=s.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){s.label=t[1];break}if(6===t[0]&&s.label<u[1]){s.label=u[1],u=t;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(t);break}u[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],i=0}finally{o=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0});var d=n(12),r=(p.retrieveMultipleRecords=function(t,n){return u(this,void 0,void 0,function(){return f(this,function(e){return[2,d.NodeApi.retrieveMultipleRecords(p.entitySetName,t,n)]})})},p.upsert=function(o,i){return u(this,void 0,void 0,function(){var t,n,r;return f(this,function(e){switch(e.label){case 0:return o.webresourceid?[4,d.NodeApi.updateRecord(p.entitySetName,o.webresourceid,o,i)]:[3,2];case 1:return e.sent(),[2,o];case 2:return t=o.name.split("."),n=t[t.length-1],r=o,[4,p.getWebresourcetype(n,i)];case 3:return r.webresourcetype=e.sent(),[4,d.NodeApi.insertRecord(p.entitySetName,o,i)];case 4:return[2,e.sent()]}})})},p.publish=function(n,r){return u(this,void 0,void 0,function(){var t;return f(this,function(e){return t={ParameterXml:"<importexportxml><webresources><webresource>{"+n.webresourceid+"}</webresource></webresources></importexportxml>"},[2,d.NodeApi.executeAction("PublishXml",r,t)]})})},p.addToSolution=function(t,n,r){return u(this,void 0,void 0,function(){return f(this,function(e){return[2,d.NodeApi.executeAction("AddSolutionComponent",r,{ComponentId:t.webresourceid,ComponentType:61,SolutionUniqueName:n,AddRequiredComponents:!1,IncludedComponentSettingsValues:null})]})})},p.getWebresourcetype=function(c,l){return u(this,void 0,void 0,function(){var t,n,r,o,i,u,s,a;return f(this,function(e){switch(e.label){case 0:return[4,d.NodeApi.getPicklistOptionSet(p.logicalName,"webresourcetype",l)];case 1:for(t=e.sent(),o=0,i=t;o<i.length;o++)if(u=i[o],s=u.value,(a=u.label).toLocaleLowerCase().includes("script")&&(r=parseInt(String(s),10)),a.toLowerCase().includes(c)){n=parseInt(String(s),10);break}return n||"json"!==c||(n=r),[2,n]}})})},p.logicalName="webresource",p.entitySetName="webresourceset",p);function p(){}t.WebresourceService=r},function(e,t,n){"use strict";var f=this&&this.__awaiter||function(i,u,s,a){return new(s=s||Promise)(function(e,t){function n(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((a=a.apply(i,u||[])).next())})},d=this&&this.__generator||function(n,r){var o,i,u,e,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=2&t[0]?i.return:t[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,t[1])).done)return u;switch(i=0,u&&(t=[2&t[0],u.value]),t[0]){case 0:case 1:u=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(u=0<(u=s.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){s.label=t[1];break}if(6===t[0]&&s.label<u[1]){s.label=u[1],u=t;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(t);break}u[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],i=0}finally{o=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(13),o=(p.retrieveMultipleRecords=function(i,u,s){return f(this,void 0,void 0,function(){var t,n,r,o;return d(this,function(e){switch(e.label){case 0:return t=p.getSystemQueryOptions(u),n=p.settings.crm,r=n.url,o=n.version,[4,p.request("GET",r+"/api/data/v"+o+"/"+i+t,null,{Authorization:"Bearer "+s})];case 1:return[2,e.sent().body.value]}})})},p.updateRecord=function(o,i,u,s){return f(this,void 0,void 0,function(){var t,n,r;return d(this,function(e){switch(e.label){case 0:return t=p.settings.crm,n=t.url,r=t.version,[4,p.request("PATCH",n+"/api/data/v"+r+"/"+o+"("+i+")",u,{Authorization:"Bearer "+s,Prefer:"return=representation"})];case 1:return[2,e.sent().body]}})})},p.insertRecord=function(o,i,u){return f(this,void 0,void 0,function(){var t,n,r;return d(this,function(e){switch(e.label){case 0:return t=p.settings.crm,n=t.url,r=t.version,[4,p.request("POST",n+"/api/data/v"+r+"/"+o,i,{Authorization:"Bearer "+u,Prefer:"return=representation"})];case 1:return[2,e.sent().body]}})})},p.getPicklistOptionSet=function(o,i,u){return f(this,void 0,void 0,function(){var t,n,r;return d(this,function(e){switch(e.label){case 0:return t=p.settings.crm,n=t.url,r=t.version,[4,p.request("GET",n+"/api/data/v"+r+"/EntityDefinitions(LogicalName='"+o+"')/Attributes(LogicalName='"+i+"')/Microsoft.Dynamics.CRM.PicklistAttributeMetadata?$select=LogicalName&$expand=OptionSet($select=Options)",null,{Authorization:"Bearer "+u})];case 1:return[2,e.sent().body.OptionSet.Options.map(function(e){return{value:e.Value,externalValue:e.ExternalValue,label:e.Label.UserLocalizedLabel.Label}})]}})})},p.executeAction=function(t,n,r,o,i){return f(this,void 0,void 0,function(){return d(this,function(e){return o?[2,this.executeBoundAction(t,n,r,o,i)]:[2,this.executeUnboundAction(t,n,r)]})})},p.executeBoundAction=function(u,s,a,c,l){return f(this,void 0,void 0,function(){var t,n,r,o,i;return d(this,function(e){switch(e.label){case 0:return[4,Xrm.Utility.getEntityMetadata(c)];case 1:return t=e.sent(),n=p.settings.crm,r=n.url,o=n.version,i=r+"/api/data/v"+o+"/"+t.EntitySetName+"("+l+")/Microsoft.Dynamics.CRM."+u,[4,p.request("POST",i,a,{Authorization:"Bearer "+s})];case 2:return[2,e.sent().body]}})})},p.executeUnboundAction=function(i,u,s){return f(this,void 0,void 0,function(){var t,n,r,o;return d(this,function(e){switch(e.label){case 0:return t=s?"POST":"GET",n=p.settings.crm,r=n.url,o=n.version,[4,p.request(t,r+"/api/data/v"+o+"/"+i,s,{Authorization:"Bearer "+u})];case 1:return[2,e.sent().body]}})})},p.getSystemQueryOptions=function(e){var t=e.select,n=e.filters,r=e.top,o=p.generateSelect(t),i=p.generateFilter(n),u=r?"$top="+r:null,s=[];return o&&s.push(o),i&&s.push(i),u&&s.push(u),0<s.length?"?"+s.join("&"):""},p.generateSelect=function(e){return void 0===e&&(e=[]),0<e.length?"$select="+e.join(","):null},p.generateFilter=function(e){void 0===e&&(e=[]);var t=[];if(0<e.length)for(var n=0,r=e;n<r.length;n++){var o=r[n];t.push(p.parseFilter(o))}return 0<t.length?"$filter="+t.join(" and "):null},p.parseFilter=function(e){for(var t=e.type,n=void 0===t?"and":t,r=[],o=0,i=e.conditions;o<i.length;o++){var u=i[o],s=u.attribute,a=u.operator,c=void 0===a?"eq":a,l=u.value,f=s+" "+c;f+="string"==typeof l?" '"+l+"'":" "+l,r.push(f)}return""+r.join(" "+n+" ")},p.request=function(o,i,u,s){return void 0===s&&(s={}),new Promise(function(n,r){var e=p.getRequestOptions(o,i,s,u),t=a.request(e,function(e){var t="";e.setEncoding("utf8"),e.on("data",function(e){return t+=e}),e.on("end",function(){try{n(p.handleNodeHttpsResponse(e,t))}catch(e){r(e)}})});t.on("error",function(e){r(e)}),"GET"!==o&&t.write(u&&JSON.stringify(u)),t.end()})},p.getRequestOptions=function(e,t,n,r){var o=t.split("/"),i=o[2],u="/"+o.slice(3,o.length).join("/"),s=Object.assign({},p.jsonHeaders,n);if("GET"!==e){var a=r&&JSON.stringify(r);s["Content-Length"]=a.length}return{hostname:i,port:443,path:encodeURI(u),method:e,headers:s}},p.handleNodeHttpsResponse=function(t,e){var n={200:function(){return p.dataHandler(t,e)},201:function(){return p.dataHandler(t,e)},204:function(){return{body:"",getResponseHeader:function(e){return t.headers[e]},statusCode:t.statusCode}}}[t.statusCode];if(n)return n();if(401===t.statusCode)throw new Error("Unauthorized");throw new Error(t.statusCode+": "+t.statusMessage+"\n "+e)},p.dataHandler=function(t,e){var n=null;try{n=JSON.parse(e)}catch(e){throw new Error("JSON response can't be parsed")}return{body:n,getResponseHeader:function(e){return t.headers[e]},statusCode:t.statusCode}},p.settings=JSON.parse(r.readFileSync("deploy/crm.json","utf8")),p.jsonHeaders={"OData-MaxVersion":"4.0","OData-Version":"4.0",Accept:"application/json","Content-Type":"application/json; charset=utf-8"},p);function p(){}t.NodeApi=o},function(e,t){e.exports=require("https")}]);