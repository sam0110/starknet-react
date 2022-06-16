"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[658],{8044:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(8855);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7401:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(1528),a=r(2854),o=(r(8855),r(8044)),c=["components"],l={sidebar_position:4},i="useStarknetCall",s={unversionedId:"hooks/call",id:"hooks/call",title:"useStarknetCall",description:"Hook to fetch data from a StarkNet contract. The data is automatically refreshed at every block.",source:"@site/docs/hooks/call.md",sourceDirName:"hooks",slug:"/hooks/call",permalink:"/starknet-react/hooks/call",draft:!1,editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/hooks/call.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useContract",permalink:"/starknet-react/hooks/contract"},next:{title:"useStarknetInvoke",permalink:"/starknet-react/hooks/invoke"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestarknetcall"},"useStarknetCall"),(0,o.kt)("p",null,"Hook to fetch data from a StarkNet contract. The data is automatically refreshed at every block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useStarknetCall } from '@starknet-react/core'\n\nconst { data, loading, error, refresh } = useStarknetCall({ contract, method, args })\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  contract?: Contract\n  method?: string\n  args?: T\n  options?: {\n    watch?: boolean\n  }\n}\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"options.watch")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),") is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the hook will fetch the\ncontract value only once."),(0,o.kt)("h2",{id:"return-values"},"Return Values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  data?: Array<any>\n  loading: boolean\n  error?: string\n  refresh: () => void\n}\n")))}d.isMDXComponent=!0}}]);