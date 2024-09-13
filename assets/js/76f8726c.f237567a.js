"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[8440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={},o="Cheqd Did Module",l={unversionedId:"tutorials/cheqd/index",id:"tutorials/cheqd/index",title:"Cheqd Did Module",description:"In this tutorial we will see how to use the cheqd modules in detail",source:"@site/guides/tutorials/cheqd/index.md",sourceDirName:"tutorials/cheqd",slug:"/tutorials/cheqd/",permalink:"/guides/tutorials/cheqd/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a connection",permalink:"/guides/tutorials/create-a-connection"},next:{title:"Registering a schema and credential definition on an AnonCreds Registry",permalink:"/guides/tutorials/registering-schema-and-credential-definition"}},s={},d=[{value:"DID Module",id:"did-module",level:2},{value:"Create DID",id:"create-did",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Option 1",id:"option-1",level:5},{value:"Option 2",id:"option-2",level:5},{value:"Update DID",id:"update-did",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Deactivate DID",id:"deactivate-did",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Create Resource",id:"create-resource",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Resolve Resource",id:"resolve-resource",level:3},{value:"Using <code>resourceId</code>",id:"using-resourceid",level:4},{value:"Using <code>resourceName</code> and <code>resourceType</code>",id:"using-resourcename-and-resourcetype",level:4},{value:"Types",id:"types",level:3},{value:"<code>secret.verificationMethod</code>",id:"secretverificationmethod",level:4},{value:"<code>verificationMethod.id</code>*",id:"verificationmethodid",level:5},{value:"<code>verificationMethod.type</code>*",id:"verificationmethodtype",level:5},{value:"<code>verificationMethod.privateKey</code>",id:"verificationmethodprivatekey",level:5},{value:"<code>options.methodSpecificIdAlgo</code>",id:"optionsmethodspecificidalgo",level:4},{value:"<code>options.network</code>*",id:"optionsnetwork",level:4},{value:"<code>options.versionId</code>",id:"optionsversionid",level:4}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cheqd-did-module"},"Cheqd Did Module"),(0,r.kt)("p",null,"In this tutorial we will see how to use the cheqd modules in detail"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section assumes that"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"You have ",(0,r.kt)("a",{parentName:"li",href:"../../getting-started"},"set-up your develoment environment"),"."),(0,r.kt)("li",{parentName:"ol"},"You have setup the cheqd module ",(0,r.kt)("a",{parentName:"li",href:"/guides/getting-started/set-up/cheqd/"},"setup cheqd")))),(0,r.kt)("h2",{id:"did-module"},"DID Module"),(0,r.kt)("p",null,'The cheqd DID module facilitates the Create, Read, Update, and Delete (CRUD) operations for did:cheqd identifiers. To learn more about "did:cheqd," please refer to the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/cheqd/identity-docs/blob/main/architecture/adr-list/adr-001-cheqd-did-method.md"},"specification")),(0,r.kt)("h3",{id:"create-did"},"Create DID"),(0,r.kt)("p",null,"The DID can be created in two different ways"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"method"),"*",": ",(0,r.kt)("inlineCode",{parentName:"li"},"cheqd")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"didDocument"))),(0,r.kt)("h5",{id:"option-1"},"Option 1"),(0,r.kt)("p",null,"Provide a DID Document payload according to the w3c did core specification in the request body. This is possible when the keys corresponding to the verification methods provided in the DID Document are already created in the wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-2",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-2":!0},"")),(0,r.kt)("h5",{id:"option-2"},"Option 2"),(0,r.kt)("p",null,"If a DID Document is not passed to the registrar, it requires the secret parameter with a verificationMethod to construct the DID Document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-3",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-3":!0},"")),(0,r.kt)("h3",{id:"update-did"},"Update DID"),(0,r.kt)("p",null,"To update a DID Document, fetch the body of the DID Document you want to change from the DID Resolver, make the relevant updates and pass it as the parameter"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"did"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"didDocument"),"*",": The updated DID Document"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"options")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"secret"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-4",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-4":!0},"")),(0,r.kt)("h3",{id:"deactivate-did"},"Deactivate DID"),(0,r.kt)("p",null,"A DID can be deactivated, it can still be resolved"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"did"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"options"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-5",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-5":!0},"")),(0,r.kt)("h3",{id:"create-resource"},"Create Resource"),(0,r.kt)("p",null,"Using the createResource cheqd api agents are able to create custom DID-Linked Resources, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trust Registries"),(0,r.kt)("li",{parentName:"ul"},"Status Lists"),(0,r.kt)("li",{parentName:"ul"},"Logos associated with DIDs"),(0,r.kt)("li",{parentName:"ul"},"Governance files")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"did"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"resourceType"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),"*"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),"*"," : Text, Base64 string or an object"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"alsoKnownAs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"version"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-6",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-6":!0},"")),(0,r.kt)("h3",{id:"resolve-resource"},"Resolve Resource"),(0,r.kt)("p",null,"The resolveResource function in the cheqd API allows agents to resolve DID-Linked Resources in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By ",(0,r.kt)("inlineCode",{parentName:"li"},"resourceId")),(0,r.kt)("li",{parentName:"ul"},"By ",(0,r.kt)("inlineCode",{parentName:"li"},"resourceName")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"resourceType"))),(0,r.kt)("p",null,"Additionally, both conventions support the following query parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To fetch a specific resource version: ",(0,r.kt)("inlineCode",{parentName:"li"},"resourceUrl?version=<versionId>")),(0,r.kt)("li",{parentName:"ul"},"To fetch the closest resource version for a given time: ",(0,r.kt)("inlineCode",{parentName:"li"},"resourceUrl?resourceVersionTime=<epoch time>"))),(0,r.kt)("h4",{id:"using-resourceid"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"resourceId")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-7",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-7":!0},"")),(0,r.kt)("h4",{id:"using-resourcename-and-resourcetype"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"resourceName")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"resourceType")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers set-up-cheqd.ts section-8",showLineNumbers:!0,"set-up-cheqd.ts":!0,"section-8":!0},"")),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"secretverificationmethod"},(0,r.kt)("inlineCode",{parentName:"h4"},"secret.verificationMethod")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod")),(0,r.kt)("h5",{id:"verificationmethodid"},(0,r.kt)("inlineCode",{parentName:"h5"},"verificationMethod.id"),"*"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h5",{id:"verificationmethodtype"},(0,r.kt)("inlineCode",{parentName:"h5"},"verificationMethod.type"),"*"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519VerificationKey2020")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Members"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Ed25519VerificationKey2020")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Ed25519VerificationKey2018")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"JsonWebKey2020"))),(0,r.kt)("h5",{id:"verificationmethodprivatekey"},(0,r.kt)("inlineCode",{parentName:"h5"},"verificationMethod.privateKey")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"optionsmethodspecificidalgo"},(0,r.kt)("inlineCode",{parentName:"h4"},"options.methodSpecificIdAlgo")),(0,r.kt)("p",null,"Specifies what type of method specific identifier is needed for your DID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Members"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"base58btc"))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"optionsnetwork"},(0,r.kt)("inlineCode",{parentName:"h4"},"options.network"),"*"),(0,r.kt)("p",null,"Specifies the cheqd network name to be published"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Members"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"testnet")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mainnet"))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"optionsversionid"},(0,r.kt)("inlineCode",{parentName:"h4"},"options.versionId")),(0,r.kt)("p",null,"Specifies the version of the DID Document to be published"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")))}u.isMDXComponent=!0}}]);