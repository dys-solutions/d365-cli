/*! HSO D365 CLI 1.4.0 | (c) HSO Innovation */!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=20)}([function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("shelljs")},function(e,n){e.exports=require("colors")},,function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(){}return e.get=function(){return o(this,void 0,void 0,(function(){var n,t,o;return r(this,(function(r){switch(r.label){case 0:return[4,e.readWebpackConfig()];case 1:return n=r.sent(),[4,e.readPackageJson()];case 2:return t=r.sent(),[4,e.readCrmJson()];case 3:return o=r.sent(),[2,Object.assign({},n,t,o)]}}))}))},e.readWebpackConfig=function(){return new Promise((function(e){var n,o,r=t(10).createInterface({input:t(0).createReadStream("webpack.config.js")});r.on("line",(function(t){if(t.includes("dir_build =")){var i=t.split('"')[1].split("_/");n=i[0].replace("dist/",""),o=i[1],r.close(),e({publisher:n,namespace:o})}}))}))},e.readPackageJson=function(){return new Promise((function(e){var n,o="",r="",i=t(10).createInterface({input:t(0).createReadStream("package.json")});i.on("line",(function(t){if(t.includes('"name":')){var s=t.split('"');o=s[3]}if(t.includes('"version":')){s=t.split('"');r=s[3]}if(t.includes('"description":')){s=t.split('"');n=s[3],i.close(),e({description:n,projectname:o,version:r})}}))}))},e.readCrmJson=function(){return new Promise((function(e){var n="",o="",r=t(10).createInterface({input:t(0).createReadStream("tools/crm.json")});r.on("line",(function(t){if(t.includes('"solution_name":')){var i=t.split('"');o=i[3]}if(t.includes('"url":')){i=t.split('"');n=i[3]}if(t.includes('"clientUrl":')){i=t.split('"');n=i[3]}t.includes('"redirectUri":')&&(r.close(),e({environment:n,solution:o}))}))}))},e}();n.Variables=i},,,,,function(e,n){e.exports=require("inquirer")},function(e,n){e.exports=require("readline")},,,,,,,,,,function(e,n,t){e.exports=t(21)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r=t(22),i=t(23),s=t(24),c=t(25);r.version("1.4.0").usage("<command> [options]"),r.command("new <project>").alias("n").description("Creates a new workspace and an initial Webresource setup").action((function(e){i.Create.createProject(e)})).on("--help",(function(){i.Create.showCreateHelp()})),r.command("generate <schematic> [name]").alias("g").description("Generates and/or modifies files bases on a schematic.").action((function(e,n){c.Generator.generate(e,n)})).on("--help",(function(){c.Generator.showGenerateHelp()})),r.command("xi18n").alias("i18n").description("Extracts i18n messages from source code.").action((function(){o.exec("npm run i18next-scanner")})).on("--help",(function(){console.log("In translation folder a folder 'locales' will be generated having a translation file per language."),console.log("The translation files to be generated can be found in your project 'i18next-scanner.config.js file"),console.log("You have to add the translations after the generation")})),r.command("lint").alias("l").description("Runs linting tools on project code").action((function(){o.exec("npm run lint")})).on("--help",(function(){console.log("Runs linting tools on project code using the configuration as specified in your projects '.eslintrc.json' file")})),r.command("build").alias("b").description("Compiles project into an output directory named dist").action((function(){o.exec("npm run build:prod")})).on("--help",(function(){console.log("The command can be used to build the project to be distributed to the D365 environment using the 'deploy' command")})),r.command("deploy").alias("d").description("Invokes the deploy builder").action((function(){o.exec("npm run deploy")})).on("--help",(function(){console.log("Distributes the project to the D365 environment. You need to run the 'build' command first")})),r.command("update").alias("u").description("Updates existing workspace and Webresource setup").action((function(){s.Update.updateProject()})).on("--help",(function(){s.Update.showUpdateHelp()})),r.command("setFormCustomizable <customizable>").alias("f").description("Sets the Solution forms iscustomizable/canbedeleted true/false").action((function(e){o.exec("npm run setFormCustomizable:"+(e?"true":"false"))})).on("--help",(function(){console.log("Sets the Solution forms iscustomizable/canbedeleted true/false")})),r.arguments("<command>").action((function(){r.outputHelp(),console.log(""),console.log("echo Unknown command!")})),r.parse(process.argv)},function(e,n){e.exports=require("commander")},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),s=t(1),c=t(9),a=function(){function e(){}return e.createProject=function(n){if(process.argv[4])console.log(i.red("No spaces allowed!"));else{if(!s.test("-e",n+"/Webresources"))return e.create(n);console.log(i.red("Project "+n+"/Webresources already exists!"))}},e.showCreateHelp=function(){console.log("Arguments:"),console.log("   "+i.blue("project")),console.log("     The project name of the new workspace and initial Webresource setup.")},e.create=function(n){return o(this,void 0,void 0,(function(){var t,o,c,a;return r(this,(function(r){switch(r.label){case 0:return console.log("Initializing D365 Project "+n+"..."),s.mkdir(n),s.cd(n),s.mkdir("Webresources"),s.cp("-R",__dirname+"/root/*","Webresources"),s.cp("-R",__dirname+"/root/.*","Webresources"),[4,e.inquirer()];case 1:return t=r.sent(),o=s.ls("Webresources/tools/crm.json")[0],s.sed("-i",new RegExp("<%= publisher %>","ig"),t.publisher,o),s.sed("-i",new RegExp("<%= solution %>","ig"),t.solution,o),s.sed("-i",new RegExp("<%= environment %>","ig"),t.environment,o),c=s.ls("Webresources/package.json")[0],s.sed("-i","<%= projectname %>",n.toLowerCase(),c),s.sed("-i",new RegExp("<%= description %>","ig"),t.solution,c),s.sed("-i",new RegExp("<%= publisher %>","ig"),t.publisher,c),a=s.ls("Webresources/webpack.config.js")[0],s.sed("-i",new RegExp("<%= publisher %>","ig"),t.publisher,a),s.sed("-i",new RegExp("<%= namespace %>","ig"),t.namespace,a),s.sed("-i",new RegExp("<%= description %>","ig"),t.namespace,a),s.cd("Webresources"),console.log("Installing npm packages. This may take a while..."),s.exec("npm install"),console.log("Initializing D365 Project done"),console.log(i.blue("hso-d365 generate Entity x")+" in Webresources folder generates Entity x files and settings."),console.log(i.blue("npm run build:prod")+" in Webresources folder creates the deployment package."),console.log("See package.json#scripts for all options."),[2]}}))}))},e.inquirer=function(){return c.prompt([{type:"input",name:"environment",message:"D365 environment url (eg. https://yourproject.crm4.dynamics.com):"},{type:"input",name:"solution",message:"D365 Solution name:"},{type:"input",name:"publisher",message:"D365 Publisher Prefix (3 chars a-z):"},{type:"input",name:"namespace",message:"Namespace (eg. Customer or Product name):"}])},e}();n.Create=a},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),s=t(1),c=t(4),a=function(){function e(){}return e.updateProject=function(){if(!process.argv[3])return e.update();console.log(i.red("No spaces allowed after update command!"))},e.showUpdateHelp=function(){console.log("Arguments:")},e.update=function(){return o(this,void 0,void 0,(function(){var n;return r(this,(function(t){switch(t.label){case 0:return console.log("Updating D365 Project..."),e.moveDeploy(),[4,c.Variables.get()];case 1:return n=t.sent(),e.updateProjectRootFolder(),e.updateDeploy(n),e.updateSrcFolder(),e.updatePackageJson(n),e.updateServiceFiles(),e.updateModelFiles(),e.updateEntityFiles(),e.updateWebpackConfig(n),console.log("Updating D365 Project done"),[2]}}))}))},e.updateProjectRootFolder=function(){console.log("Updating .eslintignore..."),s.cp("-R",__dirname+"/root/.eslintignore","."),console.log("Updating .gitignore..."),s.cp("-R",__dirname+"/root/.gitignore","."),console.log("Updating .eslintrc.json..."),s.cp("-R",__dirname+"/root/.eslintrc.json","."),console.log("Updating postcss.config.js"),s.cp("-R",__dirname+"/root/postcss.config.js","."),s.exec("git add postcss.config.js")},e.updateSrcFolder=function(){console.log("Updating tsconfig.json..."),s.cp("-R",__dirname+"/root/src/tsconfig.json","./src"),console.log("Removing tslint.json..."),s.rm("-R","./src/tslint.json"),console.log("Updating WebApi..."),s.cp("-R",__dirname+"/root/src/WebApi","./src"),s.exec("git add src/WebApi/Model.ts"),console.log("Updating Http..."),s.cp("-R",__dirname+"/root/src/Http","./src"),s.exec("git add src/Http/Http.ts"),console.log("Updating util..."),s.cp("-R",__dirname+"/root/src/util","./src"),s.exec("git add src/util/Base64.ts"),s.exec("git add src/util/FormUtil.ts"),console.log("Updating Annotation..."),s.cp("-R",__dirname+"/root/src/Annotation","./src"),s.exec("git add src/Annotation/Annotation.model.ts"),s.exec("git add src/Annotation/Annotation.service.ts"),console.log("Updating Translation..."),s.cp("-R",__dirname+"/root/src/translation","./src"),console.log("Removing txs..."),s.rm("-R","./src/tsx")},e.moveDeploy=function(){console.log("Moving deploy folder..."),s.test("-f","deploy/deploy.js")&&(s.cp("-R","deploy","tools"),s.which("git")&&(s.exec("git rm deploy/deploy.js"),s.exec("git rm deploy/crm.json"),s.exec("git add tools/deploy.js"),s.exec("git add tools/crm.json")))},e.updateDeploy=function(e){console.log("Updating deploy folder..."),s.cp("-R",__dirname+"/root/tools/deploy.js","./tools"),s.cp("-R",__dirname+"/root/tools/setFormCustomizable.js","./tools"),s.exec("git add tools/setFormCustomizable.js");var n=s.grep("clientSecret","./tools/crm.json"),t=e.publisher,o=e.solution,r=e.environment;if("\n"!==n.stdout){s.cp("-R",__dirname+"/root/tools/crm.json","./tools");var i=s.ls("./tools/crm.json")[0];s.sed("-i",new RegExp("<%= publisher %>","ig"),t,i),s.sed("-i",new RegExp("<%= solution %>","ig"),o,i),s.sed("-i",new RegExp("<%= environment %>","ig"),r,i)}},e.updatePackageJson=function(e){console.log("Updating package.json...");var n=s.grep("dlf-core","package.json"),t=e.projectname,o=e.description,r=e.publisher,i=e.version;"\n"!==n.stdout&&(s.exec("npm install --save dlf-core@latest"),n=s.grep("dlf-core","package.json")),s.cp("-R",__dirname+"/root/package.json",".");var c=s.ls("package.json")[0];"\n"!==n.stdout&&s.sed("-i",'"dependencies": {','"dependencies": {\n'+n.stdout,c),s.sed("-i",new RegExp("<%= projectname %>","ig"),t,c),s.sed("-i",new RegExp("<%= description %>","ig"),o,c),s.sed("-i",new RegExp("<%= publisher %>","ig"),r,c),s.sed("-i",new RegExp("<%= version %>","ig"),i,c),console.log("Removing old npm packages. This may take a while..."),s.exec("npm prune"),s.exec("npm install")},e.updateServiceFiles=function(){console.log("Updating Service files"),s.ls("src/**/*.service.ts*").forEach((function(n){e.updateServiceFileCount(n),e.updateServiceFileCloneValidation(n)}))},e.updateServiceFileCount=function(n){if(console.log("Updating Service files Count code"),"\n"===s.grep("public static async count",n).stdout){var t=n.split("/")[1],o=s.ls(n)[0];s.sed("-i","import {MultipleSystemQueryOptions, SystemQueryOptions, WebApi} from '../WebApi/WebApi';","import {Filter, MultipleSystemQueryOptions, SystemQueryOptions, WebApi} from '../WebApi/WebApi';",o),s.sed("-i","export class "+t+"Service {","export class "+t+"Service {\n    "+e.serviceFileSnippetCount.replace(/EntityService/g,t+"Service")+"\n",o),console.log("Modified "+n)}},e.updateServiceFileCloneValidation=function(n){if(console.log("Updating Service files Clone and Validation code"),"\n"===s.grep("retrieveClone",n).stdout){var t=n.split("/")[1],o=t.charAt(0).toLowerCase()+t.slice(1),r=s.ls(n)[0];s.sed("-i","export class "+t+"Service {","export class "+t+"Service {\n    "+e.serviceFileSnippetCloneValidation.replace(/EntityService/g,t+"Service").replace(/EntityModel/g,t+"Model").replace(/entityModel/g,o+"Model")+"\n",r),s.sed("-i","import {Model}","import {Model, ModelValidation}",r),s.sed("-i","export class","import {Model, ModelValidation} from '../WebApi/Model';\n\nexport class",r),console.log("Modified "+n)}},e.updateModelFiles=function(){console.log("Updating Model files"),s.ls("src/**/*.model.ts*").forEach((function(e){if("\n"===s.grep("import {Model}",e).stdout){var n=e.split("/")[1],t=s.ls(e)[0];s.sed("-i","export","import {Model} from '../WebApi/Model';\nexport",t),s.sed("-i","interface "+n+"Model","interface "+n+"Model extends Model",t),console.log("Modified "+e)}}))},e.updateEntityFiles=function(){console.log("Updating Entity files"),s.ls("src/**/*.ts*").forEach((function(e){var n=e.split("/"),t=n[1],o=s.ls(e)[0];t+".ts"===n[2]&&("\n"===s.grep("export namespace",e).stdout&&(s.sed("-i","export namespace Form","export const Form =",o),s.sed("-i","export namespace Ribbon","export const Ribbon =",o),s.sed("-i","export function onLoad(executionContext: Xrm.Events.EventContext) {","onLoad: (executionContext: Xrm.Events.EventContext): void => {",o),s.sed("-i","\\(formContext: Xrm.FormContext\\) {",": (formContext: Xrm.FormContext): void => {",o),console.log("Modified "+n[1]+".ts "+n[2])))}))},e.updateWebpackConfig=function(e){console.log("Updating webpack.config.js...");var n=s.cat("webpack.config.js").stdout,t=n.indexOf("entry:"),o=n.indexOf("output:"),r=n.substr(t,o-t).replace("\r\n    },\r\n    ","");s.cp("-R",__dirname+"/root/webpack.config.js",".");var i=s.ls("webpack.config.js")[0];s.sed("-i",new RegExp("<%= publisher %>","ig"),e.publisher,i),s.sed("-i",new RegExp("<%= namespace %>","ig"),e.namespace,i),s.sed("-i",new RegExp("<%= description %>","ig"),e.description,i),s.sed("-i",new RegExp("entry: {","ig"),r,i)},e.serviceFileSnippetCount="public static async count(filters?: Filter[]): Promise<number> {\n        return WebApi.count(EntityService.logicalName, filters);\n    }",e.serviceFileSnippetCloneValidation="public static async retrieveClone(id: string): Promise<EntityModel> {\n        const origRecord = await Xrm.WebApi.retrieveRecord(EntityService.logicalName, id);\n        return Model.parseCreateModel(EntityService.logicalName, origRecord);\n    }\n\n    public static async validateRecord(entityModel: EntityModel): Promise<ModelValidation> {\n        return Model.validateRecord(EntityService.logicalName, entityModel);\n    }",e}();n.Update=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=t(1),i=t(26),s=t(27),c=t(28),a=function(){function e(){}return e.generate=function(e,n){if(r.test("-e","src"))if(e)if(["entity","webresource","licensevalidator"].includes(e.toLowerCase())){if("entity"===e.toLowerCase())return i.Entity.generateEntity(n);if("webresource"===e.toLowerCase())return s.Webresource.generateWebresource(n);if("licensevalidator"===e.toLowerCase())return c.LicenseValidator.generateLicenseValidator(n)}else console.log(o.red("Schematic "+e+" not supported!"));else console.log(o.red("No schematic specified!"));else console.log(o.red("You are not inside the project Webresources folder!"))},e.showGenerateHelp=function(){console.log("Arguments:"),console.log("   "+o.blue("schematic")),console.log("     The schematic or collection:schematic to generate."),console.log("     Example: Entity, Webresource or LicenseValidator.")},e}();n.Generator=a},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),s=t(1),c=t(9),a=t(4),l=function(){function e(){}return e.generateEntity=function(n){var t=s.grep(" "+n+":","webpack.config.js");if(n)if(new RegExp("[A-Z]").test(n[0]))if("\n"!==t.stdout)console.log(i.red("Entity "+n+" already exists!"));else{if(!process.argv[5])return e.generate(n);console.log(i.red("No spaces allowed!"))}else console.log(i.red("Entity name must be UpperCamelCase!"));else console.log(i.red("Entity name missing"))},e.generate=function(e){return o(this,void 0,void 0,(function(){var n,t,o,i,l;return r(this,(function(r){switch(r.label){case 0:return console.log("Adding D365 Entity "+e+"..."),[4,a.Variables.get()];case 1:return n=r.sent(),t=n.publisher,o=n.namespace,[4,c.prompt([{type:"input",name:"entityLogicalName",message:"Entity LogicalName:"}])];case 2:return i=r.sent(),s.mkdir("src/"+e),s.ls(__dirname+"/Entity/*.*").forEach((function(n){var r=n.split("/"),c=r[r.length-1],a=c.replace(/Entity/g,e);s.cp("-r",n,"src/"+e),s.cp("-r","src/"+e+"/"+c,"src/"+e+"/"+a),s.rm("-rf","src/"+e+"/"+c),s.sed("-i",new RegExp("EntityLogicalName","ig"),i.entityLogicalName,"src/"+e+"/"+a),s.sed("-i",new RegExp("Entity","g"),e,"src/"+e+"/"+a),s.sed("-i",new RegExp("entity","g"),e.charAt(0).toLowerCase()+e.slice(1),"src/"+e+"/"+a),s.sed("-i",new RegExp("<%= publisher %>","ig"),t,"src/"+e+"/"+a),s.sed("-i",new RegExp("<%= namespace %>","ig"),o,"src/"+e+"/"+a),s.exec("git add src/"+e+"/"+a)})),l=s.ls("webpack.config.js")[0],s.sed("-i","entry: {","entry: {\n        "+e+': [\n            path.resolve(__dirname, "src/'+e+"/"+e+'.ts")\n        ],',l),s.exec("git add webpack.config.js"),console.log("Adding D365 Entity done"),[2]}}))}))},e}();n.Entity=l},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),s=t(1),c=t(9),a=t(4),l=function(){function e(){}return e.generateWebresource=function(n){var t=s.grep(" "+n+":","webpack.config.js");if(n)if(new RegExp("[A-Z]").test(n[0]))if("\n"!==t.stdout)console.log(i.red("echo Webresource "+n+" already exists!"));else{if(!process.argv[5])return e.generate(n);console.log(i.red("echo No spaces allowed!"))}else console.log(i.red("Webresource name must be UpperCamelCase!"));else console.log(i.red("Webresource name missing"))},e.generate=function(e){return o(this,void 0,void 0,(function(){var n,t,o,i,l,u,p,d;return r(this,(function(r){switch(r.label){case 0:return console.log("Adding D365 Webresource "+e+"..."),[4,c.prompt([{type:"list",name:"template",message:"Which template do you want?",choices:["HTML","React"]}])];case 1:return n=r.sent(),t=n.template,[4,a.Variables.get()];case 2:return o=r.sent(),i=o.publisher,l=o.namespace,s.mkdir("src/"+e),u=__dirname+"/Webresource"+("React"===t?"Tsx":"")+"/*.*",s.ls(u).forEach((function(n){var t=n.split("/"),o=t[t.length-1],r=o.replace(/Webresource/g,e);s.cp("-r",n,"src/"+e),s.cp("-r","src/"+e+"/"+o,"src/"+e+"/"+r),s.rm("-rf","src/"+e+"/"+o),s.sed("-i",new RegExp("Webresource","ig"),e,"src/"+e+"/"+r),s.sed("-i",new RegExp("<%= publisher %>","ig"),i,"src/"+e+"/"+r),s.sed("-i",new RegExp("<%= namespace %>","ig"),l,"src/"+e+"/"+r),s.exec("git add src/"+e+"/"+r)})),p=s.ls("webpack.config.js")[0],d="React"===t?"tsx":"ts",s.sed("-i","entry: {","entry: {\n        "+e+': [\n            path.resolve(__dirname, "src/'+e+"/"+e+"."+d+'")\n        ],',p),s.exec("git add webpack.config.js"),console.log("Adding D365 Webresource done"),[2]}}))}))},e}();n.Webresource=l},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),s=t(1),c=t(4),a=function(){function e(){}return e.generateLicenseValidator=function(n){return o(this,void 0,void 0,(function(){var t;return r(this,(function(o){return t=s.grep(" LicenseValidator:","webpack.config.js"),n?"\n"!==t.stdout?console.log(i.red("src/License already exists!")):process.argv[5]?console.log(i.red("No spaces allowed!")):e.generate(n):console.log(i.red("Module name missing")),[2]}))}))},e.generate=function(e){return o(this,void 0,void 0,(function(){var n,t,o,i;return r(this,(function(r){switch(r.label){case 0:return console.log("Adding D365 License Validator for "+e+"..."),s.exec("npm install --save dlf-core@latest"),[4,c.Variables.get()];case 1:return n=r.sent(),t=n.publisher,o=n.namespace,s.mkdir("src/License"),s.ls(__dirname+"/License/*.*").forEach((function(n){var r=n.split("/"),i=r[r.length-1];s.cp("-r",n,"src/License"),s.sed("-i",new RegExp("<%= licensename %>","ig"),e,"src/License/"+i),s.sed("-i",new RegExp("<%= publisher %>","ig"),t,"src/License/"+i),s.sed("-i",new RegExp("<%= namespace %>","ig"),o,"src/License/"+i)})),i=s.ls("webpack.config.js")[0],s.sed("-i","entry: {",'entry: {\n        LicenseValidator: [\n            path.resolve(__dirname, "src/License/Validator.ts")\n        ],',i),s.exec("git add webpack.config.js"),console.log("Adding D365 License Validator done"),[2]}}))}))},e}();n.LicenseValidator=a}]);