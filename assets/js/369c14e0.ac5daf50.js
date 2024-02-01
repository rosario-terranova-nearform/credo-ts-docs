"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[2913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(r),c=i,v=f["".concat(p,".").concat(c)]||f[c]||u[c]||a;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},o="OpenID for Verifiable Credentials",s={unversionedId:"features/openid4vc",id:"features/openid4vc",title:"OpenID for Verifiable Credentials",description:"Since Credo 0.4, support was added to receive credentials using OpenID for Verifiable Credential Issuance, and since 0.5 support was added for all the other OpenID for Verifiable Credential flows.",source:"@site/guides/features/openid4vc.md",sourceDirName:"features",slug:"/features/openid4vc",permalink:"/guides/0.5/features/openid4vc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hyperledger Aries and Aries Interop Profile",permalink:"/guides/0.5/features/aries"},next:{title:"Decentralized Identifiers",permalink:"/guides/0.5/features/dids"}},p={},l=[{value:"OpenID for Verifiable Credential Issuance",id:"openid-for-verifiable-credential-issuance",level:2},{value:"OpenID for Verifiable Presentations",id:"openid-for-verifiable-presentations",level:2},{value:"Self-Issued OpenID Provider v2",id:"self-issued-openid-provider-v2",level:2}],d={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openid-for-verifiable-credentials"},"OpenID for Verifiable Credentials"),(0,i.kt)("p",null,"Since Credo 0.4, support was added to receive credentials using OpenID for Verifiable Credential Issuance, and since 0.5 support was added for all the other OpenID for Verifiable Credential flows."),(0,i.kt)("p",null,"This means Credo has support for ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html"},"OpenID for Verifiable Credential Issuance"),", ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-4-verifiable-presentations-1_0.html"},"OpenID for Verifiable Presentations"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-self-issued-v2-1_0.html"},"Self-Issued OpenID Provider v2"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Support for OpenID for Verifiable Credentials in Credo is still in an experimental phase, and thus is subject to breaking changes. Also, due to the early stages of these specifications, supported draft versions and flows may change and evolve. As early adopters it\u2019s important to align with the evolving specs, and we are doing out best to keep up-to-date without breaking existing deployments."),(0,i.kt)("p",{parentName:"admonition"},"Currently, work is ongoing to update the supported versions for OpenID4VC to the latest available Draft versions:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"OpenID for Verifiable Credential Issuance - Draft 12"),(0,i.kt)("li",{parentName:"ul"},"OpenID for Verifiable Presentations - Draft 20"),(0,i.kt)("li",{parentName:"ul"},"Self-Issued OpenID Provider - Draft 13"))),(0,i.kt)("h2",{id:"openid-for-verifiable-credential-issuance"},"OpenID for Verifiable Credential Issuance"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-11.html"},"OpenID for Verifiable Credential Issuance - Draft 11")," is supported, but only the immediate issuance using the Pre-Authorized Code flow. The deferred endpoint, batch endpoints and Authorized Code Flow are not supported at the moment."),(0,i.kt)("h2",{id:"openid-for-verifiable-presentations"},"OpenID for Verifiable Presentations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-4-verifiable-presentations-1_0-ID1.html"},"OpenID for Verifiable Presentations - Implementers Draft 1 (Draft 8)")," is supported for requesting and presenting verifiable presentations as part of an authorization request and response. OpenID for Verifiable Presentations is only supported in combination with Self-Issued OpenID Provider V2."),(0,i.kt)("h2",{id:"self-issued-openid-provider-v2"},"Self-Issued OpenID Provider v2"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-self-issued-v2-1_0-ID1.html"},"Self-Issued OpenID Provider V2 - Implementers Draft 1 (Draft 7)")," is supported for allowing holders of credentials to act as their own OpenID Provider, and present credentials to a verifier without the need for a third party. Both SIOPv2 authentication requests and responses with verifiable presentations (using VP Token) or without (using ID Token for e.g. DID authentication) are supported."))}u.isMDXComponent=!0}}]);