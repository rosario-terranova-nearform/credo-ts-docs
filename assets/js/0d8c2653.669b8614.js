"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[4105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(a,".").concat(c)]||u[c]||g[c]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const s={},o="Postgres Setup for windows",l={unversionedId:"tutorials/indy-sdk-postgres-database-nodejs/windows",id:"version-0.4/tutorials/indy-sdk-postgres-database-nodejs/windows",title:"Postgres Setup for windows",description:"Build Environment Prerequisites",source:"@site/versioned_docs/version-0.4/tutorials/indy-sdk-postgres-database-nodejs/windows.md",sourceDirName:"tutorials/indy-sdk-postgres-database-nodejs",slug:"/tutorials/indy-sdk-postgres-database-nodejs/windows",permalink:"/guides/0.4/tutorials/indy-sdk-postgres-database-nodejs/windows",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres Setup for macOS",permalink:"/guides/0.4/tutorials/indy-sdk-postgres-database-nodejs/macos"},next:{title:"Updating AFJ",permalink:"/guides/0.4/updating/"}},a={},d=[{value:"Build Environment Prerequisites",id:"build-environment-prerequisites",level:2},{value:"Step 1: Getting dependencies",id:"step-1-getting-dependencies",level:2},{value:"Step 2: Build Postgres plugin",id:"step-2-build-postgres-plugin",level:2},{value:"Step 2.1: Cloning the indy-sdk",id:"step-21-cloning-the-indy-sdk",level:3},{value:"Step 2.2: Building Postgres plugin",id:"step-22-building-postgres-plugin",level:3},{value:"Step 2.3: Setting the file to PATH",id:"step-23-setting-the-file-to-path",level:3}],p={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"postgres-setup-for-windows"},"Postgres Setup for windows"),(0,i.kt)("h2",{id:"build-environment-prerequisites"},"Build Environment Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download and install Visual Studio Community Edition 2022"),(0,i.kt)("li",{parentName:"ol"},"Install git for windows"),(0,i.kt)("li",{parentName:"ol"},"Download rust for windows ",(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/en-US/install.html"},"here")),(0,i.kt)("li",{parentName:"ol"},"Make sure you have already setup libindy for windows from ",(0,i.kt)("a",{parentName:"li",href:"../../getting-started/indy-sdk/windows"},"here"))),(0,i.kt)("h2",{id:"step-1-getting-dependencies"},"Step 1: Getting dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the prebuilt dependencies ",(0,i.kt)("a",{parentName:"li",href:"https://repo.sovrin.org/windows/libindy/deps/"},"here")),(0,i.kt)("li",{parentName:"ul"},"Extract them"),(0,i.kt)("li",{parentName:"ul"},"Point path to this directory using environment variables:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set INDY_PREBUILT_DEPS_DIR=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set INDY_CRYPTO_PREBUILT_DEPS_DIR=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set MILAGRO_DIR=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set LIBZMQ_PREFIX=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set SODIUM_LIB_DIR=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set OPENSSL_DIR=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set PATH=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdk-deps\\lib"))))),(0,i.kt)("h2",{id:"step-2-build-postgres-plugin"},"Step 2: Build Postgres plugin"),(0,i.kt)("p",null,"Building Postgres plugin from the indy-sdk repo with cargo."),(0,i.kt)("h3",{id:"step-21-cloning-the-indy-sdk"},"Step 2.1: Cloning the indy-sdk"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/hyperledger/indy-sdk.git\n\ncd indy-sdk\\experimental\\plugins\\postgres_storage\n")),(0,i.kt)("h3",{id:"step-22-building-postgres-plugin"},"Step 2.2: Building Postgres plugin"),(0,i.kt)("p",null,"If this step throws any errors, it might be because of the environment. Step 1 of this guide provided the dependencies that are required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release --target x86_64-pc-windows-msvc\n")),(0,i.kt)("p",null,"The library ",(0,i.kt)("strong",{parentName:"p"},"indystrgpostgres.dll")," file will be located at ",(0,i.kt)("inlineCode",{parentName:"p"},"indy-sdk\\experimental\\plugins\\postgres_storage\\target\\x86_64-pc-windows-msvc\\release")),(0,i.kt)("h3",{id:"step-23-setting-the-file-to-path"},"Step 2.3: Setting the file to PATH"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set LIB_INDY_STRG_POSTGRES=C:\\Users\\{WINDOWS_USER}\\Downloads\\indy-sdklexperimental\\plugins\\postgres_storage\\target\\x86_64-pc-windows-msvc\\release"))),(0,i.kt)("p",null,"or Alternatively you can copy the ",(0,i.kt)("strong",{parentName:"p"},"indystrgpostgres.dll")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\\\windows\\\\system32\\\\")))}g.isMDXComponent=!0}}]);