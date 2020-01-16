/*! HSO D365 CLI 1.1.0 | (c) HSO Innovation */!function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=14)}([function(e,n){e.exports=require("shelljs")},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("colors")},function(e,n,c){"use strict";var t=this&&this.__awaiter||function(i,s,c,a){return new(c=c||Promise)(function(e,n){function t(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(t,o)}r((a=a.apply(i,s||[])).next())})},r=this&&this.__generator||function(t,o){var r,i,s,e,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(s=0<(s=c.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=o.call(t,c)}catch(e){n=[6,e],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var o=(i.get=function(){return t(this,void 0,void 0,function(){var n,t,o;return r(this,function(e){switch(e.label){case 0:return[4,i.readWebpackConfig()];case 1:return n=e.sent(),[4,i.readPackageJson()];case 2:return t=e.sent(),[4,i.readCrmJson()];case 3:return o=e.sent(),[2,Object.assign({},n,t,o)]}})})},i.readWebpackConfig=function(){return new Promise(function(t){var o,r,i=c(5).createInterface({input:c(1).createReadStream("webpack.config.js")});i.on("line",function(e){if(e.includes("dir_build =")){var n=e.split('"')[1].split("_/");o=n[0].replace("dist/",""),r=n[1],i.close(),t({publisher:o,namespace:r})}})})},i.readPackageJson=function(){return new Promise(function(t){var o,r="",i="",s=c(5).createInterface({input:c(1).createReadStream("package.json")});s.on("line",function(e){if(e.includes('"name":')){var n=e.split('"');r=n[3]}e.includes('"version":')&&(n=e.split('"'),i=n[3]),e.includes('"description":')&&(n=e.split('"'),o=n[3],s.close(),t({description:o,projectname:r,version:i}))})})},i.readCrmJson=function(){return new Promise(function(t){var o="",r="",i=c(5).createInterface({input:c(1).createReadStream("deploy/crm.json")});i.on("line",function(e){if(e.includes('"solution_name":')){var n=e.split('"');r=n[3]}e.includes('"url":')&&(n=e.split('"'),o=n[3]),e.includes('"clientUrl":')&&(n=e.split('"'),o=n[3]),e.includes('"redirectUri":')&&(i.close(),t({environment:o,solution:r}))})})},i);function i(){}n.Variables=o},function(e,n){e.exports=require("inquirer")},function(e,n){e.exports=require("readline")},,,,,,,,,function(e,n,t){e.exports=t(15)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(16),i=t(17),s=t(18),c=t(19);r.version("1.1.0").usage("<command> [options]"),r.command("new <project>").alias("n").description("Creates a new workspace and an initial Webresource setup").action(function(e){i.Create.createProject(e)}).on("--help",function(){i.Create.showCreateHelp()}),r.command("generate <schematic> [name]").alias("g").description("Generates and/or modifies files bases on a schematic.").action(function(e,n){c.Generator.generate(e,n)}).on("--help",function(){c.Generator.showGenerateHelp()}),r.command("xi18n").alias("i18n").description("Extracts i18n messages from source code.").action(function(){o.exec("npm run i18next-scanner")}).on("--help",function(){console.log("In translation folder a folder 'locales' will be generated having a translation file per language."),console.log("The translation files to be generated can be found in your project 'i18next-scanner.config.js file"),console.log("You have to add the translations after the generation")}),r.command("lint").alias("l").description("Runs linting tools on project code").action(function(){o.exec("npm run lint")}).on("--help",function(){console.log("Runs linting tools on project code using the configuration as specified in your projects '.eslintrc.json' file")}),r.command("build").alias("b").description("Compiles project into an output directory named dist").action(function(){o.exec("npm run build:prod")}).on("--help",function(){console.log("The command can be used to build the project to be distributed to the D365 environment using the 'deploy' command")}),r.command("deploy").alias("d").description("Invokes the deploy builder").action(function(){o.exec("npm run deploy")}).on("--help",function(){console.log("Distributes the project to the D365 environment. You need to run the 'build' command first")}),r.command("update").alias("u").description("Updates existing workspace and Webresource setup").action(function(){s.Update.updateProject()}).on("--help",function(){s.Update.showUpdateHelp()}),r.arguments("<command>").action(function(){r.outputHelp(),console.log(""),console.log("echo Unknown command!")}),r.parse(process.argv)},function(e,n){e.exports=require("commander")},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(i,s,c,a){return new(c=c||Promise)(function(e,n){function t(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(t,o)}r((a=a.apply(i,s||[])).next())})},s=this&&this.__generator||function(t,o){var r,i,s,e,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(s=0<(s=c.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=o.call(t,c)}catch(e){n=[6,e],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var c=t(2),a=t(0),r=t(4),i=(l.createProject=function(e){if(process.argv[4])console.log(c.red("No spaces allowed!"));else{if(!a.test("-e",e+"/Webresources"))return l.create(e);console.log(c.red("Project "+e+"/Webresources already exists!"))}},l.showCreateHelp=function(){console.log("Arguments:"),console.log("   "+c.blue("project")),console.log("     The project name of the new workspace and initial Webresource setup.")},l.create=function(i){return o(this,void 0,void 0,function(){var n,t,o,r;return s(this,function(e){switch(e.label){case 0:return console.log("Initializing D365 Project "+i+"..."),a.mkdir(i),a.cd(i),a.mkdir("Webresources"),a.cp("-R",__dirname+"/root/*","Webresources"),a.cp("-R",__dirname+"/root/.*","Webresources"),[4,l.inquirer()];case 1:return n=e.sent(),t=a.ls("Webresources/deploy/crm.json")[0],a.sed("-i",new RegExp("<%= publisher %>","ig"),n.publisher,t),a.sed("-i",new RegExp("<%= solution %>","ig"),n.solution,t),a.sed("-i",new RegExp("<%= environment %>","ig"),n.environment,t),o=a.ls("Webresources/package.json")[0],a.sed("-i","<%= projectname %>",i.toLowerCase(),o),a.sed("-i",new RegExp("<%= description %>","ig"),n.solution,o),a.sed("-i",new RegExp("<%= publisher %>","ig"),n.publisher,o),r=a.ls("Webresources/webpack.config.js")[0],a.sed("-i",new RegExp("<%= publisher %>","ig"),n.publisher,r),a.sed("-i",new RegExp("<%= namespace %>","ig"),n.namespace,r),a.sed("-i",new RegExp("<%= description %>","ig"),n.namespace,r),a.cd("Webresources"),console.log("Installing npm packages. This may take a while..."),a.exec("npm install"),console.log("Initializing D365 Project done"),console.log(c.blue("hso-d365 generate Entity x")+" in Webresources folder generates Entity x files and settings."),console.log(c.blue("npm run build:prod")+" in Webresources folder creates the deployment package."),console.log("See package.json#scripts for all options."),[2]}})})},l.inquirer=function(){return r.prompt([{type:"input",name:"environment",message:"D365 environment url (eg. https://yourproject.crm4.dynamics.com):"},{type:"input",name:"solution",message:"D365 Solution name:"},{type:"input",name:"publisher",message:"D365 Publisher Prefix (3 chars a-z):"},{type:"input",name:"namespace",message:"Namespace (eg. Customer or Product name):"}])},l);function l(){}n.Create=i},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(i,s,c,a){return new(c=c||Promise)(function(e,n){function t(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(t,o)}r((a=a.apply(i,s||[])).next())})},r=this&&this.__generator||function(t,o){var r,i,s,e,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(s=0<(s=c.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=o.call(t,c)}catch(e){n=[6,e],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),c=t(0),s=t(3),a=(l.updateProject=function(){if(!process.argv[3])return l.update();console.log(i.red("No spaces allowed after update command!"))},l.showUpdateHelp=function(){console.log("Arguments:")},l.update=function(){return o(this,void 0,void 0,function(){var n;return r(this,function(e){switch(e.label){case 0:return console.log("Updating D365 Project..."),[4,s.Variables.get()];case 1:return n=e.sent(),l.updateProjectRootFolder(),l.updateDeploy(n),l.updateSrcFolder(),l.updatePackageJson(n),l.updateServiceFiles(),l.updateModelFiles(),l.updateEntityFiles(),l.updateWebpackConfig(n),console.log("Updating D365 Project done"),[2]}})})},l.updateProjectRootFolder=function(){console.log("Updating .eslintignore..."),c.cp("-R",__dirname+"/root/.eslintignore","."),console.log("Updating .gitignore..."),c.cp("-R",__dirname+"/root/.gitignore","."),console.log("Updating .eslintrc.json..."),c.cp("-R",__dirname+"/root/.eslintrc.json","."),console.log("Updating postcss.config.js"),c.cp("-R",__dirname+"/root/postcss.config.js","."),c.exec("git add postcss.config.js")},l.updateSrcFolder=function(){console.log("Updating tsconfig.json..."),c.cp("-R",__dirname+"/root/src/tsconfig.json","./src"),console.log("Removing tslint.json..."),c.rm("-R","./src/tslint.json"),console.log("Updating WebApi..."),c.cp("-R",__dirname+"/root/src/WebApi","./src"),c.exec("git add src/WebApi/Model.ts"),console.log("Updating util..."),c.cp("-R",__dirname+"/root/src/util","./src"),c.exec("git add src/util/Base64.ts"),c.exec("git add src/util/ModelValidator.ts"),console.log("Updating Annotation..."),c.cp("-R",__dirname+"/root/src/Annotation","./src"),c.exec("git add src/Annotation/Annotation.model.ts"),c.exec("git add src/Annotation/Annotation.service.ts"),console.log("Updating Translation..."),c.cp("-R",__dirname+"/root/src/translation","./src"),console.log("Removing txs..."),c.rm("-R","./src/tsx")},l.updateDeploy=function(e){console.log("Updating deploy..."),c.cp("-R",__dirname+"/root/deploy/deploy.js","./deploy");var n=c.grep("clientSecret","./deploy/crm.json"),t=e.publisher,o=e.solution,r=e.environment;if("\n"!==n.stdout){c.cp("-R",__dirname+"/root/deploy/crm.json","./deploy");var i=c.ls("./deploy/crm.json")[0];c.sed("-i",new RegExp("<%= publisher %>","ig"),t,i),c.sed("-i",new RegExp("<%= solution %>","ig"),o,i),c.sed("-i",new RegExp("<%= environment %>","ig"),r,i)}},l.updatePackageJson=function(e){console.log("Updating package.json...");var n=c.grep("dlf-core","package.json"),t=e.projectname,o=e.description,r=e.publisher,i=e.version;"\n"!==n.stdout&&(c.exec("npm install --save dlf-core@latest"),n=c.grep("dlf-core","package.json")),c.cp("-R",__dirname+"/root/package.json",".");var s=c.ls("package.json")[0];"\n"!==n.stdout&&c.sed("-i",'"dependencies": {','"dependencies": {\n'+n.stdout,s),c.sed("-i",new RegExp("<%= projectname %>","ig"),t,s),c.sed("-i",new RegExp("<%= description %>","ig"),o,s),c.sed("-i",new RegExp("<%= publisher %>","ig"),r,s),c.sed("-i",new RegExp("<%= version %>","ig"),i,s),console.log("Removing old npm packages. This may take a while..."),c.exec("npm prune"),c.exec("npm install")},l.updateServiceFiles=function(){console.log("Updating Service files"),c.ls("src/**/*.service.ts*").forEach(function(e){l.updateServiceFileCount(e),l.updateServiceFileCloneValidation(e)})},l.updateServiceFileCount=function(e){if(console.log("Updating Service files Count code"),"\n"===c.grep("public static async count",e).stdout){var n=e.split("/")[1],t=c.ls(e)[0];c.sed("-i","export class "+n+"Service {","export class "+n+"Service {\n    "+l.serviceFileSnippetCount.replace(/EntityService/g,n+"Service")+"\n",t),console.log("Modified "+e)}},l.updateServiceFileCloneValidation=function(e){if(console.log("Updating Service files Clone and Validation code"),"\n"===c.grep("retrieveClone",e).stdout){var n=e.split("/")[1],t=n.charAt(0).toLowerCase()+n.slice(1),o=c.ls(e)[0];c.sed("-i","export class "+n+"Service {","export class "+n+"Service {\n    "+l.serviceFileSnippetCloneValidation.replace(/EntityService/g,n+"Service").replace(/EntityModel/g,n+"Model").replace(/entityModel/g,t+"Model")+"\n",o),c.sed("-i","import {Model}","import {Model, ModelValidation}",o),c.sed("-i","export","import {Model, ModelValidation} from '../WebApi/Model';\n\nexport",o),console.log("Modified "+e)}},l.updateModelFiles=function(){console.log("Updating Model files"),c.ls("src/**/*.model.ts*").forEach(function(e){if("\n"===c.grep("import {Model}",e).stdout){var n=e.split("/")[1],t=c.ls(e)[0];c.sed("-i","export","import {Model} from '../WebApi/Model';\nexport",t),c.sed("-i","interface "+n+"Model","interface "+n+"Model extends Model",t),console.log("Modified "+e)}})},l.updateEntityFiles=function(){console.log("Updating Entity files"),c.ls("src/**/*.ts*").forEach(function(e){var n=e.split("/"),t=n[1],o=c.ls(e)[0];t+".ts"===n[2]&&"\n"===c.grep("export namespace",e).stdout&&(c.sed("-i","export namespace Form","export const Form =",o),c.sed("-i","export namespace Ribbon","export const Ribbon =",o),c.sed("-i","export function onLoad(executionContext: Xrm.Events.EventContext) {","onLoad: (executionContext: Xrm.Events.EventContext): void => {",o),c.sed("-i","\\(formContext: Xrm.FormContext\\) {",": (formContext: Xrm.FormContext): void => {",o),console.log("Modified "+n[1]+".ts "+n[2]))})},l.updateWebpackConfig=function(e){console.log("Updating webpack.config.js...");var n=c.cat("webpack.config.js").stdout,t=n.indexOf("entry:"),o=n.indexOf("output:"),r=n.substr(t,o-t).replace("\r\n    },","");c.cp("-R",__dirname+"/root/webpack.config.js",".");var i=c.ls("webpack.config.js")[0];c.sed("-i",new RegExp("<%= publisher %>","ig"),e.publisher,i),c.sed("-i",new RegExp("<%= namespace %>","ig"),e.namespace,i),c.sed("-i",new RegExp("<%= description %>","ig"),e.description,i),c.sed("-i",new RegExp("entry: {","ig"),r,i)},l.serviceFileSnippetCount="public static async count(filters?: Filter[]): Promise<number> {\n        return WebApi.count(EntityService.logicalName, filters);\n    }",l.serviceFileSnippetCloneValidation="public static async retrieveClone(id: string): Promise<EntityModel> {\n        const origRecord = await Xrm.WebApi.retrieveRecord(EntityService.logicalName, id);\n        return Model.parseCreateModel(EntityService.logicalName, origRecord);\n    }\n    \n    public static async validateRecord(entityModel: EntityModel): Promise<ModelValidation> {\n        return Model.validateRecord(EntityService.logicalName, entityModel);\n    }",l);function l(){}n.Update=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=t(0),i=t(20),s=t(21),c=t(22),a=(l.generate=function(e,n){if(r.test("-e","src"))if(e)if(["entity","webresource","licensevalidator"].includes(e.toLowerCase())){if("entity"===e.toLowerCase())return i.Entity.generateEntity(n);if("webresource"===e.toLowerCase())return s.Webresource.generateWebresource(n);if("licensevalidator"===e.toLowerCase())return c.LicenseValidator.generateLicenseValidator(n)}else console.log(o.red("Schematic "+e+" not supported!"));else console.log(o.red("No schematic specified!"));else console.log(o.red("You are not inside the project Webresources folder!"))},l.showGenerateHelp=function(){console.log("Arguments:"),console.log("   "+o.blue("schematic")),console.log("     The schematic or collection:schematic to generate."),console.log("     Example: Entity, Webresource or LicenseValidator.")},l);function l(){}n.Generator=a},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(i,s,c,a){return new(c=c||Promise)(function(e,n){function t(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(t,o)}r((a=a.apply(i,s||[])).next())})},a=this&&this.__generator||function(t,o){var r,i,s,e,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(s=0<(s=c.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=o.call(t,c)}catch(e){n=[6,e],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),l=t(0),u=t(4),p=t(3),i=(s.generateEntity=function(e){var n=l.grep(" "+e+":","webpack.config.js");if(e)if(new RegExp("[A-Z]").test(e[0]))if("\n"!==n.stdout)console.log(r.red("Entity "+e+" already exists!"));else{if(!process.argv[5])return s.generate(e);console.log(r.red("No spaces allowed!"))}else console.log(r.red("Entity name must be UpperCamelCase!"));else console.log(r.red("Entity name missing"))},s.generate=function(c){return o(this,void 0,void 0,function(){var n,r,i,s,t;return a(this,function(e){switch(e.label){case 0:return console.log("Adding D365 Entity "+c+"..."),[4,p.Variables.get()];case 1:return n=e.sent(),r=n.publisher,i=n.namespace,[4,u.prompt([{type:"input",name:"entityLogicalName",message:"Entity LogicalName:"}])];case 2:return s=e.sent(),l.mkdir("src/"+c),l.ls(__dirname+"/Entity/*.*").forEach(function(e){var n=e.split("/"),t=n[n.length-1],o=t.replace(/Entity/g,c);l.cp("-r",e,"src/"+c),l.cp("-r","src/"+c+"/"+t,"src/"+c+"/"+o),l.rm("-rf","src/"+c+"/"+t),l.sed("-i",new RegExp("EntityLogicalName","ig"),s.entityLogicalName,"src/"+c+"/"+o),l.sed("-i",new RegExp("Entity","g"),c,"src/"+c+"/"+o),l.sed("-i",new RegExp("entity","g"),c.charAt(0).toLowerCase()+c.slice(1),"src/"+c+"/"+o),l.sed("-i",new RegExp("<%= publisher %>","ig"),r,"src/"+c+"/"+o),l.sed("-i",new RegExp("<%= namespace %>","ig"),i,"src/"+c+"/"+o),l.exec("git add src/"+c+"/"+o)}),t=l.ls("webpack.config.js")[0],l.sed("-i","entry: {","entry: {\n        "+c+': [\n            path.resolve(__dirname, "src/'+c+"/"+c+'.ts")\n        ],',t),console.log("Adding D365 Entity done"),[2]}})})},s);function s(){}n.Entity=i},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(i,s,c,a){return new(c=c||Promise)(function(e,n){function t(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(t,o)}r((a=a.apply(i,s||[])).next())})},u=this&&this.__generator||function(t,o){var r,i,s,e,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(s=0<(s=c.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=o.call(t,c)}catch(e){n=[6,e],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),p=t(0),d=t(4),f=t(3),i=(s.generateWebresource=function(e){var n=p.grep(" "+e+":","webpack.config.js");if(e)if(new RegExp("[A-Z]").test(e[0]))if("\n"!==n.stdout)console.log(r.red("echo Webresource "+e+" already exists!"));else{if(!process.argv[5])return s.generate(e);console.log(r.red("echo No spaces allowed!"))}else console.log(r.red("Webresource name must be UpperCamelCase!"));else console.log(r.red("Webresource name missing"))},s.generate=function(l){return o(this,void 0,void 0,function(){var n,t,o,r,i,s,c,a;return u(this,function(e){switch(e.label){case 0:return console.log("Adding D365 Webresource "+l+"..."),[4,d.prompt([{type:"list",name:"template",message:"Which template do you want?",choices:["HTML","React"]}])];case 1:return n=e.sent(),t=n.template,[4,f.Variables.get()];case 2:return o=e.sent(),r=o.publisher,i=o.namespace,p.mkdir("src/"+l),s=__dirname+"/Webresource"+("React"===t?"Tsx":"")+"/*.*",p.ls(s).forEach(function(e){var n=e.split("/"),t=n[n.length-1],o=t.replace(/Webresource/g,l);p.cp("-r",e,"src/"+l),p.cp("-r","src/"+l+"/"+t,"src/"+l+"/"+o),p.rm("-rf","src/"+l+"/"+t),p.sed("-i",new RegExp("Webresource","ig"),l,"src/"+l+"/"+o),p.sed("-i",new RegExp("<%= publisher %>","ig"),r,"src/"+l+"/"+o),p.sed("-i",new RegExp("<%= namespace %>","ig"),i,"src/"+l+"/"+o),p.exec("git add src/"+l+"/"+o)}),c=p.ls("webpack.config.js")[0],a="React"===t?"tsx":"ts",p.sed("-i","entry: {","entry: {\n        "+l+': [\n            path.resolve(__dirname, "src/'+l+"/"+l+"."+a+'")\n        ],',c),console.log("Adding D365 Webresource done"),[2]}})})},s);function s(){}n.Webresource=i},function(e,n,t){"use strict";var o=this&&this.__awaiter||function(i,s,c,a){return new(c=c||Promise)(function(e,n){function t(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(n){n.done?e(n.value):new c(function(e){e(n.value)}).then(t,o)}r((a=a.apply(i,s||[])).next())})},s=this&&this.__generator||function(t,o){var r,i,s,e,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(s=0<(s=c.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=o.call(t,c)}catch(e){n=[6,e],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),c=t(0),a=t(3),i=(l.generateLicenseValidator=function(t){return o(this,void 0,void 0,function(){var n;return s(this,function(e){return n=c.grep(" LicenseValidator:","webpack.config.js"),t?"\n"!==n.stdout?console.log(r.red("src/License already exists!")):process.argv[5]?console.log(r.red("No spaces allowed!")):l.generate(t):console.log(r.red("Module name missing")),[2]})})},l.generate=function(i){return o(this,void 0,void 0,function(){var n,o,r,t;return s(this,function(e){switch(e.label){case 0:return console.log("Adding D365 License Validator for "+i+"..."),c.exec("npm install --save dlf-core@latest"),[4,a.Variables.get()];case 1:return n=e.sent(),o=n.publisher,r=n.namespace,c.mkdir("src/License"),c.ls(__dirname+"/License/*.*").forEach(function(e){var n=e.split("/"),t=n[n.length-1];c.cp("-r",e,"src/License"),c.sed("-i",new RegExp("<%= licensename %>","ig"),i,"src/License/"+t),c.sed("-i",new RegExp("<%= publisher %>","ig"),o,"src/License/"+t),c.sed("-i",new RegExp("<%= namespace %>","ig"),r,"src/License/"+t)}),t=c.ls("webpack.config.js")[0],c.sed("-i","entry: {",'entry: {\n        LicenseValidator: [\n            path.resolve(__dirname, "src/License/Validator.ts")\n        ],',t),console.log("Adding D365 License Validator done"),[2]}})})},l);function l(){}n.LicenseValidator=i}]);