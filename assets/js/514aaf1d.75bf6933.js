"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[2050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},o="Hyperledger Aries and Aries Interop Profile",l={unversionedId:"features/aries",id:"features/aries",title:"Hyperledger Aries and Aries Interop Profile",description:"Initially, Credo was built as an Hyperledger Aries framework, focusing on implementing the Aries RFCs and supporting the Aries Interop Profile.",source:"@site/guides/features/aries.md",sourceDirName:"features",slug:"/features/aries",permalink:"/guides/features/aries",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported Features",permalink:"/guides/features/"},next:{title:"OpenID for Verifiable Credentials",permalink:"/guides/features/openid4vc"}},s={},p=[{value:"Aries Interop Profile",id:"aries-interop-profile",level:2},{value:"Additional Aries RFCs",id:"additional-aries-rfcs",level:2},{value:"Divergence from Aries RFCs",id:"divergence-from-aries-rfcs",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hyperledger-aries-and-aries-interop-profile"},"Hyperledger Aries and Aries Interop Profile"),(0,n.kt)("p",null,"Initially, Credo was built as an Hyperledger Aries framework, focusing on implementing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs"},"Aries RFCs")," and supporting the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile"},"Aries Interop Profile"),"."),(0,n.kt)("p",null,"Support for Hyperledger Aries, DIDComm and AnonCreds is at the core of Credo, and thus if you're building an identity solution supporting these standards, Credo is a great fit."),(0,n.kt)("h2",{id:"aries-interop-profile"},"Aries Interop Profile"),(0,n.kt)("p",null,"Credo currently has ",(0,n.kt)("strong",{parentName:"p"},"full support for ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#aries-interop-profile-version-10"},"Aries Interop Profile 1.0")," (AIP 1)")," as well as ",(0,n.kt)("strong",{parentName:"p"},"most of the features from ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#aries-interop-profile-version-20"},"Aries Interop Profile 2.0")," (AIP 2)")),(0,n.kt)("p",null,"The following table lists which parts of AIP 2 are supported by Credo:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Support"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#base-requirements"},"Base Requirements")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#mediate-mediator-coordination"},"Mediator Coordination")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#indycred-indy-based-credentials"},"Indy Based Credentials")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Also support for the newer ledger-agnostic ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0771-anoncreds-attachments"},"AnonCreds attachment format"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0771-anoncreds-attachments"},"JSON-LD Based Credentials")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#bbscred-bbs-based-credentials"},"BBS+ Based Credentials")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#chat-chat-related-features"},"Chat related features")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#didcommv2prep-didcomm-v2-prep"},"DIDCommm v2 Prep")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"additional-aries-rfcs"},"Additional Aries RFCs"),(0,n.kt)("p",null,"In addition to the Aries RFCs listed by the Aries Interop Profile, Credo also supports the following Aries RFCs:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Aries RFC"),(0,n.kt)("th",{parentName:"tr",align:null},"Support"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0212-pickup"},"Aries RFC 0212 Pickup V1")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0685-pickup-v2"},"Aries RFC 0685 Pickup V2")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/be8c7bf856577745e0165e9cda0918fa554d120e/features/0721-revocation-notification-v2"},"Aries RFC 0721 Revocation Notification V2")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/be8c7bf856577745e0165e9cda0918fa554d120e/features/0771-anoncreds-attachments"},"Aries RFC 0771: AnonCreds Attachment Format")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0794-did-rotate/README.md"},"Aries RFC 0794: DID Rotate V1")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"divergence-from-aries-rfcs"},"Divergence from Aries RFCs"),(0,n.kt)("p",null,"Although Credo tries to follow the standards as described in the Aries RFCs as much as possible, some features in Credo slightly diverge from the written spec. Below is an overview of the features that diverge from the spec, their impact and the reasons for diverging."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Impact"),(0,n.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Support for ",(0,n.kt)("inlineCode",{parentName:"td"},"imageUrl")," attribute in connection invitation and connection request"),(0,n.kt)("td",{parentName:"tr",align:null},"Properties that are not recognized should be ignored, meaning this shouldn't limit interoperability between agents. As the image url is self-attested it could give a false sense of trust. Better, credential based, method for visually identifying an entity are not present yet."),(0,n.kt)("td",{parentName:"tr",align:null},"Even though not documented, almost all agents support this feature. Not including this feature means Credo is lacking in features in comparison to other implementations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Revocation Notification v1 uses a different ",(0,n.kt)("inlineCode",{parentName:"td"},"thread_id")," format ( ",(0,n.kt)("inlineCode",{parentName:"td"},"indy::<revocation_registry_id>::<credential_revocation_id>"),") than specified in the Aries RFC"),(0,n.kt)("td",{parentName:"tr",align:null},"Any agents adhering to the ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0183-revocation-notification"},"revocation notification v1 RFC")," will not be interoperable with Credo. However, revocation notification is considered an optional portion of revocation, therefore this will not break core revocation behavior. Ideally agents should use and implement revocation notification v2."),(0,n.kt)("td",{parentName:"tr",align:null},"Actual implementations (ACA-Py) of revocation notification v1 so far have implemented this different format, so this format change was made to remain interoperable.")))))}u.isMDXComponent=!0}}]);