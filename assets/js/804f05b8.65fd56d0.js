(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[837],{405:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return ft},default:function(){return ht},frontMatter:function(){return dt},metadata:function(){return pt},toc:function(){return vt}});var r=n(5773),a=n(808),o=n(7378),c=n(5318),i=n(7807),s=n(290),u=n(8549),l=n(7791),d=n(3219),f=n(8953),p=n(7135),v=n.n(p),m=n(9576),h=n(4051),b=n(8282);function k(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var y=(0,o.createContext)(void 0);function E(){return(0,o.useContext)(y)}var g={account:void 0,connect:function(){},disconnect:function(){},library:m.defaultProvider,connectors:[]},C=(0,o.createContext)(g);function w(){return(0,o.useContext)(C)}var _={};k(_,"ConnectorAlreadyConnectedError",(function(){return x})),k(_,"ConnectorNotConnectedError",(function(){return N})),k(_,"ConnectorNotFoundError",(function(){return A})),k(_,"UserRejectedRequestError",(function(){return R})),k(_,"UserNotConnectedError",(function(){return T}));var x=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).name="ConnectorAlreadyConnectedError",e.message="Connector already connected",e}return(0,d.Z)(e,t),e}((0,f.Z)(Error)),N=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).name="ConnectorNotConnectedError",e.message="Connector not connected",e}return(0,d.Z)(e,t),e}((0,f.Z)(Error)),A=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).name="ConnectorNotFoundError",e.message="Connector not found",e}return(0,d.Z)(e,t),e}((0,f.Z)(Error)),R=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).name="UserRejectedRequestError",e.message="User rejected request",e}return(0,d.Z)(e,t),e}((0,f.Z)(Error)),T=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).name="UserNotConnectedError",e.message="User not connected",e}return(0,d.Z)(e,t),e}((0,f.Z)(Error));function S(t,e){switch(e.type){case"set_account":return Object.assign({},t,{account:e.account});case"set_provider":return Object.assign({},t,{library:e.provider});case"set_error":return Object.assign({},t,{error:e.error});default:return t}}function Z(t){var e=t.children,n=function(t){var e=t.defaultProvider,n=t.connectors,r=t.autoConnect,a=(0,o.useReducer)(S,{library:e||m.defaultProvider,connectors:n}),c=a[0],i=a[1],s=c.account,u=c.library,d=c.error,f=(0,o.useCallback)((function(t){t.connect().then((function(t){i({type:"set_account",account:t.address}),i({type:"set_provider",provider:t})}),(function(t){console.error(t),i({type:"set_error",error:new A})}))}),[]),p=(0,o.useCallback)((function(t){t.disconnect().then((function(){i({type:"set_account",account:void 0}),i({type:"set_provider",provider:void 0})}),(function(t){console.error(t),i({type:"set_error",error:new A})}))}),[]);return(0,o.useEffect)((function(){function t(){return(t=(0,l.Z)(v().mark((function t(e){var n,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<e.length)){t.next=20;break}return t.prev=2,t.next=5,e[n].ready();case 5:if(t.sent){t.next=7;break}return t.abrupt("continue",17);case 7:return t.next=9,e[n].connect();case 9:return r=t.sent,i({type:"set_account",account:r.address}),i({type:"set_provider",provider:r}),t.abrupt("return");case 15:t.prev=15,t.t0=t.catch(2);case 17:n++,t.next=1;break;case 20:case"end":return t.stop()}}),t,null,[[2,15]])})))).apply(this,arguments)}r&&!s&&function(e){t.apply(this,arguments)}(n)}),[]),{account:s,connect:f,disconnect:p,connectors:n,library:u,error:d}}({defaultProvider:t.defaultProvider,connectors:t.connectors,autoConnect:t.autoConnect});return o.createElement(C.Provider,{value:n},e)}function j(t){var e=t.interval,n=t.children,r=w().library,a=(0,o.useState)(void 0),c=a[0],i=a[1],s=(0,o.useState)(void 0),u=s[0],l=s[1],d=(0,o.useState)(void 0),f=d[0],p=d[1],v=(0,o.useCallback)((function(){r&&r.getBlock().then((function(t){i((function(e){return(null==e?void 0:e.block_hash)===t.block_hash?e:(p(void 0),t)}))})).catch((function(){p("failed fetching block")})).finally((function(){return l(!1)}))}),[r,l,p,i]);return(0,o.useEffect)((function(){l(!0),v();var t=setInterval((function(){v()}),null!=e?e:5e3);return function(){return clearInterval(t)}}),[v,e]),o.createElement(y.Provider,{value:{data:c,loading:u,error:f}},n)}var O={transactions:[],addTransaction:function(t){},removeTransaction:function(t){},refreshTransaction:function(t){}},D=(0,o.createContext)(O);function P(){return(0,o.useContext)(D)}function U(t,e){if("add_transaction"===e.type)return Object.assign({},t,{transactions:t.transactions.push(e.transaction)});if("remove_transaction"===e.type)return Object.assign({},t,{transactions:t.transactions.filter((function(t){return t.transactionHash!==e.transactionHash}))});if("update_transaction"===e.type){if("NOT_RECEIVED"===e.transactionResponse.status)return t;var n=t.transactions.findEntry((function(t){return t.transactionHash===e.transactionResponse.transaction.transaction_hash}));if(!n)return t;var r=n[0],a=(n[1],{status:e.transactionResponse.status,transaction:e.transactionResponse.transaction,transactionHash:e.transactionResponse.transaction.transaction_hash,lastUpdatedAt:e.lastUpdatedAt});return Object.assign({},t,{transactions:t.transactions.set(r,a)})}return t}function H(t,e){return"TRANSACTION_RECEIVED"===t.status||"ACCEPTED_ON_L1"!==t.status&&"REJECTED"!==t.status&&("ACCEPTED_ON_L2"===t.status?e-t.lastUpdatedAt>12e4:e-t.lastUpdatedAt>15e3)}function I(t){var e=t.children,n=t.interval,r=w().library,a=(0,o.useReducer)(U,{transactions:(0,h.aV)()}),c=a[0],i=a[1],s=(0,o.useCallback)(function(){var t=(0,l.Z)(v().mark((function t(e){var n,a;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.getTransaction(e);case 3:n=t.sent,a=Date.now(),i({type:"update_transaction",transactionResponse:n,lastUpdatedAt:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),[r,i]),d=(0,o.useCallback)((function(){for(var t,e=Date.now(),n=(0,u.Z)(c.transactions);!(t=n()).done;){var r=t.value;H(r,e)&&s(r.transactionHash)}}),[c.transactions,s]),f=(0,o.useCallback)((function(t){i({type:"add_transaction",transaction:t})}),[i]),p=(0,o.useCallback)((function(t){i({type:"remove_transaction",transactionHash:t})}),[i]),m=(0,o.useCallback)((function(t){s(t)}),[s]);return(0,o.useEffect)((function(){d();var t=setInterval((function(){d()}),null!=n?n:5e3);return function(){return clearInterval(t)}}),[n,d]),o.createElement(D.Provider,{value:{transactions:c.transactions.toArray(),addTransaction:f,removeTransaction:p,refreshTransaction:m}},e)}function M(t){var e=t.children,n=t.defaultProvider,r=t.connectors,a=t.autoConnect;return o.createElement(Z,{defaultProvider:n,autoConnect:a,connectors:r},o.createElement(j,null,o.createElement(I,null,e)))}var z={};function B(t,e){return"set_call_response"===e.type?Object.assign({},t,{data:e.data,error:void 0,loading:!1}):"set_call_error"===e.type?Object.assign({},t,{error:e.error,loading:!1}):"set_last_updated_at"===e.type?Object.assign({},t,{loading:!1,lastUpdatedAt:e.blockHash}):t}function L(t){var e=t.contract,n=t.method,r=t.args,a=(0,o.useReducer)(B,{loading:!0,lastUpdatedAt:""}),c=a[0],i=a[1],s=E().data,u=(0,o.useCallback)((0,l.Z)(v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e&&n&&r)){t.next=4;break}return t.next=3,e.call(n,r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),[e,n,JSON.stringify(r)]),d=(0,o.useCallback)((function(){u().then((function(t){t&&i({type:"set_call_response",data:t})})).catch((function(t){t.message?i({type:"set_call_error",error:t.message}):i({type:"set_call_error",error:"call failed"})}))}),[u]);return(0,o.useEffect)((function(){null!=s&&s.block_hash&&(null==s?void 0:s.block_hash)!==c.lastUpdatedAt&&(d(),i({type:"set_last_updated_at",blockHash:s.block_hash}))}),[null==s?void 0:s.block_hash,c.lastUpdatedAt,d]),(0,o.useEffect)((function(){d()}),[null==e?void 0:e.address,n,JSON.stringify(r)]),{data:c.data,loading:c.loading,error:c.error,refresh:d}}function V(t){var e=t.abi,n=t.address,r=(0,o.useState)(void 0),a=r[0],c=r[1],i=w().library;return(0,o.useEffect)((function(){e&&n&&i&&c(new m.Contract(e,n,i))}),[e,n,i]),{contract:a}}function X(t,e){return"start_invoke"===e.type?Object.assign({},t,{loading:!0}):"set_invoke_response"===e.type?Object.assign({},t,{data:e.data.transaction_hash,error:void 0,loading:!1}):"set_invoke_error"===e.type?Object.assign({},t,{error:e.error,loading:!1}):"reset"===e.type?Object.assign({},t,{data:void 0,error:void 0,loading:!1}):t}function J(t){var e=t.contract,n=t.method,r=P().addTransaction,a=(0,o.useReducer)(X,{loading:!1}),c=a[0],i=a[1],s=(0,o.useCallback)((function(){i({type:"reset"})}),[i]),u=(0,o.useCallback)(function(){var t=(0,l.Z)(v().mark((function t(a){var o,c;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=a.args,!(e&&n&&o)){t.next=14;break}return t.prev=2,i({type:"start_invoke"}),t.next=6,e.invoke(n,o);case 6:c=t.sent,i({type:"set_invoke_response",data:c}),r({status:c.code,transactionHash:c.transaction_hash}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),t.t0.message?i({type:"set_invoke_error",error:t.t0.message}):i({type:"set_invoke_error",error:"invoke failed"});case 14:return t.abrupt("return",void 0);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),[e,n,r]);return{data:c.data,loading:c.loading,error:c.error,reset:s,invoke:u}}k(z,"useStarknetCall",(function(){return L})),k(z,"useContract",(function(){return V})),k(z,"useStarknetInvoke",(function(){return J}));var q={};k(q,"Connector",(function(){return F})),k(q,"InjectedConnector",(function(){return G}));var F=function(t){var e=t.options;this.options=e},G=function(t){function e(e){var n;return(n=t.call(this,{options:e})||this).id="injected",n.name="ArgentX",n}(0,d.Z)(e,t);var n=e.prototype;return n.available=function(){return void 0!==(0,b.k)()},n.ready=function(){var t=(0,l.Z)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.available()){t.next=2;break}throw new A;case 2:return e=(0,b.k)(),t.abrupt("return",e.isPreauthorized());case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.connect=function(){var t=(0,l.Z)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.available()){t.next=2;break}throw new A;case 2:return e=(0,b.k)(),t.prev=3,t.next=6,e.enable(this.options);case 6:t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(3),new R;case 11:if(e.isConnected){t.next=13;break}throw new R;case 13:return t.abrupt("return",e.account);case 14:case"end":return t.stop()}}),t,this,[[3,8]])})));return function(){return t.apply(this,arguments)}}(),n.disconnect=function(){var t=(0,l.Z)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.available()){t.next=2;break}throw new A;case 2:if((e=(0,b.k)()).isConnected){t.next=5;break}throw new T;case 5:e.off("accountsChanged",(function(){}));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.account=function(){var t=(0,l.Z)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.available()){t.next=2;break}throw new A;case 2:return e=(0,b.k)(),t.abrupt("return",e.account?Promise.resolve(e.account):Promise.reject(new N));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e}(F),Y=JSON.parse('[{"inputs":[{"name":"amount","type":"felt"}],"name":"incrementCounter","outputs":[{"name":"prev_count","type":"felt"},{"name":"new_count","type":"felt"}],"type":"function"},{"inputs":[],"name":"counter","outputs":[{"name":"count","type":"felt"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCaller","outputs":[{"name":"address","type":"felt"}],"stateMutability":"view","type":"function"}]'),K=(0,i.zo)("div",{display:"flex",flexDirection:"column"}),Q=(0,i.zo)("div",{}),W=(0,i.zo)("h3",{}),$=(0,i.zo)("div",{display:"flex",justifyContent:"flex-start",gap:"4rem",marginBottom:"2rem"}),tt=(0,i.zo)("button",{background:"transparent",border:"1px solid var(--ifm-color-primary)",padding:"1rem",borderRadius:"10px",cursor:"pointer","&:hover":{boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.2)"}});function et(){return V({abi:Y,address:"0x036486801b8f42e950824cba55b2df8cccb0af2497992f807a7e1d9abd2c6ba1"})}function nt(){var t=w(),e=t.account,n=t.connect,r=t.connectors,a=t.error;return o.createElement(Q,null,o.createElement(W,null,"Account"),o.createElement("div",null,o.createElement("p",null,"Connected Account: ",e)),!e&&!a&&r.map((function(t){return t.available()?o.createElement($,null,o.createElement("button",{key:t.id,onClick:function(){return n(t)}},"Connect ",t.name)):null})),a instanceof A&&o.createElement("div",null,o.createElement("p",null,o.createElement("a",{href:"https://github.com/argentlabs/argent-x"},"Download Argent-X"))))}function rt(){var t=E(),e=t.data,n=t.error;return o.createElement(Q,null,o.createElement(W,null,"Block Data"),e?o.createElement("div",null,o.createElement("p",null,"Block Hash: ",e.block_hash),o.createElement("p",null,"Block Timestamp: ",new Date(1e3*e.timestamp).toLocaleString())):n?o.createElement("p",null,"'Error loading block data'"):o.createElement("p",null,"'Loading'"))}function at(){var t=L({contract:et().contract,method:"counter",args:[]}),e=t.data,n=t.error;return o.createElement(Q,null,o.createElement(W,null,"Contract Call"),e?o.createElement("div",null,o.createElement("p",null,"Counter Value: ",(0,s.toBN)(e[0]).toString())):n?o.createElement("p",null,"'Error loading counter'"):o.createElement("p",null,"'Loading'"))}function ot(){var t=J({contract:et().contract,method:"incrementCounter"}),e=t.data,n=t.loading,r=t.error,a=t.reset,c=t.invoke;return o.createElement(Q,null,o.createElement(W,null,"Invoke Contract Method"),o.createElement("div",null,e&&o.createElement("div",null,o.createElement("p",null,"Transaction Hash: ",e))),o.createElement("div",null,o.createElement("p",null,"Submitting: ",n?"Submitting":"Not Submitting"),o.createElement("p",null,"Error: ",r||"No error")),o.createElement($,null,o.createElement(tt,{onClick:function(){return c({args:["0x1"]})}},"Invoke Method"),o.createElement(tt,{onClick:function(){return a()}},"Reset State")))}function ct(t){var e=t.transaction,n=t.onClick;return o.createElement("div",null,e.status,": ",e.transactionHash," ",o.createElement("button",{onClick:n},"remove"))}function it(){var t=P(),e=t.transactions,n=t.removeTransaction;return o.createElement(Q,null,o.createElement(W,null,"Transaction Manager"),o.createElement("div",null,0===e.length?"No transactions":e.map((function(t,e){return o.createElement(ct,{key:e,transaction:t,onClick:function(){return n(t.transactionHash)}})}))))}function st(){return o.createElement(K,null,o.createElement(nt,null),o.createElement(rt,null),o.createElement(at,null),o.createElement(ot,null),o.createElement(it,null))}function ut(){var t=[new G];return o.createElement(M,{autoConnect:!0,connectors:t},o.createElement(st,null))}var lt=["components"],dt={},ft="StarkNet React Demo",pt={unversionedId:"demo",id:"demo",title:"StarkNet React Demo",description:"This demo shows how to combine the hooks provided by StarkNet React to",source:"@site/docs/demo.mdx",sourceDirName:".",slug:"/demo",permalink:"/starknet-react/demo",editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/demo.mdx",tags:[],version:"current",frontMatter:{}},vt=[],mt={toc:vt};function ht(t){var e=t.components,n=(0,a.Z)(t,lt);return(0,c.kt)("wrapper",(0,r.Z)({},mt,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"starknet-react-demo"},"StarkNet React Demo"),(0,c.kt)("p",null,"This demo shows how to combine the hooks provided by StarkNet React to\nbuild React applications."),(0,c.kt)("p",null,"The demo interacts with a simple smart contract deployed on StarkNet G\xf6rli Testnet.\nYou can find the contract ",(0,c.kt)("a",{parentName:"p",href:"https://goerli.voyager.online/contract/0x036486801b8f42e950824cba55b2df8cccb0af2497992f807a7e1d9abd2c6ba1"},"on Voyager"),"."),(0,c.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"If you try to invoke the ",(0,c.kt)("inlineCode",{parentName:"p"},"incrementCounter")," method without first connecting Argent-X,\nthe transaction will fail instantly."))),(0,c.kt)(ut,{mdxType:"Demo"}))}ht.isMDXComponent=!0},5545:function(){},6047:function(){},4886:function(){},6601:function(){}}]);