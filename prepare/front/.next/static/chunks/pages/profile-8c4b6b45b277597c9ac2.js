_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"W+IF":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return ce}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),u=n.n(o),a=n("/MKj"),c=n("nOHt"),f=n.n(c),s=n("vDqi"),l=n.n(s),d=Object.prototype.hasOwnProperty;var v=new WeakMap,h=0;var p=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):v.has(e[n])?r=v.get(e[n]):(r=h,v.set(e[n],h++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),y=!0,g={isOnline:function(){return y},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){y=!0,e()}),!1),window.addEventListener("offline",(function(){return y=!1}),!1))}},b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},m=new p;var w="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),O=b({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(w?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(w?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(d.call(t,r)&&++i&&!d.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},g),j="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),E=j?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},C=j?r.useEffect:r.useLayoutEffect,k=Object(r.createContext)({});k.displayName="SWRConfigContext";var R=k,S=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},x=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},V={},T={},I={},P={},D={},M={},_={},z=function(){var e=0;return function(){return++e}}();if(!j){var L=function(e){if(O.isDocumentVisible()&&O.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof O.registerOnFocus&&O.registerOnFocus((function(){return L(I)})),"function"===typeof O.registerOnReconnect&&O.registerOnReconnect((function(){return L(P)}))}var F=function(e,t){void 0===t&&(t=!0);var n=m.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=D[r];if(r&&u){for(var a=m.get(r),c=m.get(i),f=m.get(o),s=[],l=0;l<u.length;++l)s.push(u[l](t,a,c,f,l>0));return Promise.all(s).then((function(){return m.get(r)}))}return Promise.resolve(m.get(r))},K=function(e,t,n,r){var i=D[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},W=function(e,t,n){return void 0===n&&(n=!0),S(void 0,void 0,void 0,(function(){var r,i,o,u,a,c,f,s,l,d,v,h,p;return x(this,(function(y){switch(y.label){case 0:if(r=m.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,F(e,n)];if(M[i]=z()-1,_[i]=0,u=M[i],a=T[i],s=!1,t&&"function"===typeof t)try{t=t(m.get(i))}catch(g){t=void 0,f=g}if(!t||"function"!==typeof t.then)return[3,5];s=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return c=y.sent(),[3,4];case 3:return l=y.sent(),f=l,[3,4];case 4:return[3,6];case 5:c=t,y.label=6;case 6:if((d=function(){if(u!==M[i]||a!==T[i]){if(f)throw f;return!0}})())return[2,c];if("undefined"!==typeof c&&m.set(i,c),m.set(o,f),_[i]=z()-1,!s&&d())return[2,c];if(v=D[i]){for(h=[],p=0;p<v.length;++p)h.push(v[p](!!n,c,f,void 0,p>0));return[2,Promise.all(h).then((function(){if(f)throw f;return m.get(i)}))]}if(f)throw f;return[2,c]}}))}))};Object.defineProperty(R.Provider,"default",{value:O});R.Provider;var A=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},O,Object(r.useContext)(R),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:o.fetcher,a=m.serializeKey(i),c=a[0],f=a[1],s=a[2],l=a[3],d=Object(r.useRef)(o);C((function(){d.current=o}));var v=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},h=function(){var e=m.get(c);return"undefined"===typeof e?o.initialData:e},p=function(){return!!m.get(l)||c&&v()},y=h(),g=m.get(s),b=p(),w=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),k=Object(r.useRef)({data:y,error:g,isValidating:b});Object(r.useDebugValue)(k.current.data);var L,F,A=Object(r.useState)({})[1],N=Object(r.useCallback)((function(e){var t=!1;for(var n in e)k.current[n]!==e[n]&&(k.current[n]=e[n],w.current[n]&&(t=!0));if(t){if(B.current||!q.current)return;A({})}}),[]),B=Object(r.useRef)(!1),H=Object(r.useRef)(c),q=Object(r.useRef)(!1),X=Object(r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];B.current||q.current&&c===H.current&&(t=d.current)[e].apply(t,n)}),[c]),G=Object(r.useCallback)((function(e,t){return W(H.current,e,t)}),[]),J=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Y=Object(r.useCallback)((function(t){return void 0===t&&(t={}),S(e,void 0,void 0,(function(){var e,n,r,i,a,v,h,p,y,g;return x(this,(function(b){switch(b.label){case 0:if(!c||!u)return[2,!1];if(B.current)return[2,!1];if(d.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,i=void 0!==r&&r,a=!0,v="undefined"!==typeof V[c]&&i,b.label=1;case 1:return b.trys.push([1,6,,7]),N({isValidating:!0}),m.set(l,!0),v||K(c,k.current.data,k.current.error,!0),h=void 0,p=void 0,v?(p=T[c],[4,V[c]]):[3,3];case 2:return h=b.sent(),[3,5];case 3:return o.loadingTimeout&&!m.get(c)&&setTimeout((function(){a&&X("onLoadingSlow",c,o)}),o.loadingTimeout),V[c]=null!==f?u.apply(void 0,f):u(c),T[c]=p=z(),[4,V[c]];case 4:h=b.sent(),setTimeout((function(){delete V[c],delete T[c]}),o.dedupingInterval),X("onSuccess",h,c,o),b.label=5;case 5:return T[c]>p?[2,!1]:M[c]&&(p<=M[c]||p<=_[c]||0===_[c])?(N({isValidating:!1}),[2,!1]):(m.set(s,void 0),m.set(l,!1),y={isValidating:!1},"undefined"!==typeof k.current.error&&(y.error=void 0),o.compare(k.current.data,h)||(y.data=h,m.set(c,h)),N(y),v||K(c,h,y.error,!1),[3,7]);case 6:return g=b.sent(),delete V[c],delete T[c],d.current.isPaused()?(N({isValidating:!1}),[2,!1]):(m.set(s,g),k.current.error!==g&&(N({isValidating:!1,error:g}),v||K(c,void 0,g,!1)),X("onError",g,c,o),o.shouldRetryOnError&&X("onErrorRetry",g,c,o,Y,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(C((function(){if(c){B.current=!1;var e=q.current;q.current=!0;var t=k.current.data,n=h();H.current=c,o.compare(t,n)||N({data:n});var r=function(){return Y({dedupe:!0})};(e||v())&&("undefined"===typeof n||j?r():E(r));var i=!1,u=J(I,(function(){!i&&d.current.revalidateOnFocus&&(i=!0,r(),setTimeout((function(){return i=!1}),d.current.focusThrottleInterval))})),a=J(P,(function(){d.current.revalidateOnReconnect&&r()})),f=J(D,(function(e,t,n,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||o.compare(k.current.data,t)||(a.data=t,c=!0),k.current.error!==n&&(a.error=n,c=!0),"undefined"!==typeof i&&k.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&N(a),!!e&&(u?r():Y())}));return function(){N=function(){return null},B.current=!0,u(),a(),f()}}}),[c,Y]),C((function(){var t=null,n=function(){return S(e,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:return k.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,Y({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&t&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,Y]),o.suspense){if(L=m.get(c),F=m.get(s),"undefined"===typeof L&&(L=y),"undefined"===typeof F&&(F=g),"undefined"===typeof L&&"undefined"===typeof F){if(V[c]||Y(),V[c]&&"function"===typeof V[c].then)throw V[c];L=V[c]}if("undefined"===typeof L&&F)throw F}var Q=Object(r.useMemo)((function(){var e={revalidate:Y,mutate:G};return Object.defineProperties(e,{error:{get:function(){return w.current.error=!0,o.suspense?F:H.current===c?k.current.error:g},enumerable:!0},data:{get:function(){return w.current.data=!0,o.suspense?L:H.current===c?k.current.data:y},enumerable:!0},isValidating:{get:function(){return w.current.isValidating=!0,!!c&&k.current.isValidating},enumerable:!0}}),e}),[Y,y,g,G,c,o.suspense,F,L]);return Q};var N=A,B=n("1zst"),H=n("ODXe"),q=n("Vl3Y"),X=n("5rEg"),G=n("3zrx"),J=n("LAVF"),Y=i.a.createElement,Q=function(){var e=Object(a.c)((function(e){return e.user})).me,t=Object(G.a)((null===e||void 0===e?void 0:e.nickname)||""),n=Object(H.a)(t,2),i=n[0],o=n[1],u=Object(a.b)(),c=Object(r.useCallback)((function(){u({type:J.c,data:i})}),[i]);return Y(q.a,{style:{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"}},Y(X.a.Search,{value:i,onChange:o,addonBefore:"\ub2c9\ub124\uc784",enterButton:"\uc218\uc815",onSearch:c}))},U=n("VXEj"),Z=n("2/Rp"),$=n("bx4M"),ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},te=n("6VBw"),ne=function(e,t){return r.createElement(te.a,Object.assign({},e,{ref:t,icon:ee}))};ne.displayName="StopOutlined";var re=r.forwardRef(ne),ie=i.a.createElement,oe=function(e){var t=e.header,n=e.data,r=e.onClickMore,i=e.loading,o=a.b;return ie(U.b,{style:{marginBottom:20},grid:{gutter:4,xs:2,md:3},size:"small",header:ie("div",null,t),loadMore:ie("div",{style:{textAlign:"center",margin:"10px 0"}},ie(Z.a,{onClick:r,loading:i},"\ub354 \ubcf4\uae30")),bordered:!0,dataSource:n,renderItem:function(e){return ie(U.b.Item,{style:{marginTop:20}},ie($.a,{actions:[ie(re,{key:"stop",onClick:(n=e.id,function(){"\ud314\ub85c\uc789"===t&&o({type:J.H,data:n}),o({type:J.A,data:n})})})]},ie($.a.Meta,{description:e.nickname})));var n}})},ue=i.a.createElement,ae=function(e){return l.a.get(e,{withCredentials:!0}).then((function(e){return e.data}))},ce=!0;t.default=function(){var e=Object(r.useState)(3),t=e[0],n=e[1],o=Object(r.useState)(3),c=o[0],s=o[1],l=N("http://localhost:3065/user/followings?limit=".concat(t),ae),d=l.data,v=l.error,h=N("http://localhost:3065/user/followers?limit=".concat(c),ae),p=h.data,y=h.error,g=Object(a.c)((function(e){return e.user})).me;Object(r.useEffect)((function(){g&&g.id||f.a.push("/")}),[g&&g.id]);var b=Object(r.useCallback)((function(){s((function(e){return e+3}))}),[]),m=Object(r.useCallback)((function(){n((function(e){return e+3}))}),[]);return y||v?(console.error(y||v),"\ud314\ub85c\uc789/\ud314\ub85c\uc6cc \ub85c\ub529 \uc911 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."):g?ue(i.a.Fragment,null,ue(u.a,null,ue("title",null,"\ub0b4 \ud504\ub85c\ud544 | NodeBird")),ue(B.a,null,ue(Q,null),ue(oe,{header:"\ud314\ub85c\uc789",data:d,onClickMore:m,loading:!v&&!d}),ue(oe,{header:"\ud314\ub85c\uc6cc",data:p,onClickMore:b,loading:!y&&!p}))):"\ub0b4 \uc815\ubcf4 \ub85c\ub529\uc911..."}},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])}},[["u1GD",1,2,0,3,4,7,10]]]);