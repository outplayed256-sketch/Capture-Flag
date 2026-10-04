(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Q0={exports:{}},wc={},eg={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),__=Symbol.for("react.portal"),y_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),M_=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),T_=Symbol.for("react.forward_ref"),A_=Symbol.for("react.suspense"),b_=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),_p=Symbol.iterator;function R_(n){return n===null||typeof n!="object"?null:(n=_p&&n[_p]||n["@@iterator"],typeof n=="function"?n:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function $s(n,e,t){this.props=n,this.context=e,this.refs=ig,this.updater=t||tg}$s.prototype.isReactComponent={};$s.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};$s.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function rg(){}rg.prototype=$s.prototype;function Gf(n,e,t){this.props=n,this.context=e,this.refs=ig,this.updater=t||tg}var Wf=Gf.prototype=new rg;Wf.constructor=Gf;ng(Wf,$s.prototype);Wf.isPureReactComponent=!0;var yp=Array.isArray,sg=Object.prototype.hasOwnProperty,Xf={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function og(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,i)&&!ag.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:fo,type:n,key:s,ref:a,props:r,_owner:Xf.current}}function P_(n,e){return{$$typeof:fo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Yf(n){return typeof n=="object"&&n!==null&&n.$$typeof===fo}function L_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Sp=/\/+/g;function qc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?L_(""+n.key):e.toString(36)}function yl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case fo:case __:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+qc(a,0):i,yp(r)?(t="",n!=null&&(t=n.replace(Sp,"$&/")+"/"),yl(r,e,t,"",function(c){return c})):r!=null&&(Yf(r)&&(r=P_(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Sp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",yp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+qc(s,o);a+=yl(s,e,t,l,r)}else if(l=R_(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+qc(s,o++),a+=yl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function So(n,e,t){if(n==null)return n;var i=[],r=0;return yl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function N_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Sl={transition:null},D_={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Xf};function lg(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:So,forEach:function(n,e,t){So(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return So(n,function(){e++}),e},toArray:function(n){return So(n,function(e){return e})||[]},only:function(n){if(!Yf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ze.Component=$s;Ze.Fragment=y_;Ze.Profiler=M_;Ze.PureComponent=Gf;Ze.StrictMode=S_;Ze.Suspense=A_;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_;Ze.act=lg;Ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ng({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Xf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)sg.call(e,l)&&!ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:fo,type:n.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(n){return n={$$typeof:E_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:w_,_context:n},n.Consumer=n};Ze.createElement=og;Ze.createFactory=function(n){var e=og.bind(null,n);return e.type=n,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(n){return{$$typeof:T_,render:n}};Ze.isValidElement=Yf;Ze.lazy=function(n){return{$$typeof:C_,_payload:{_status:-1,_result:n},_init:N_}};Ze.memo=function(n,e){return{$$typeof:b_,type:n,compare:e===void 0?null:e}};Ze.startTransition=function(n){var e=Sl.transition;Sl.transition={};try{n()}finally{Sl.transition=e}};Ze.unstable_act=lg;Ze.useCallback=function(n,e){return fn.current.useCallback(n,e)};Ze.useContext=function(n){return fn.current.useContext(n)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};Ze.useEffect=function(n,e){return fn.current.useEffect(n,e)};Ze.useId=function(){return fn.current.useId()};Ze.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};Ze.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};Ze.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};Ze.useMemo=function(n,e){return fn.current.useMemo(n,e)};Ze.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};Ze.useRef=function(n){return fn.current.useRef(n)};Ze.useState=function(n){return fn.current.useState(n)};Ze.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};Ze.useTransition=function(){return fn.current.useTransition()};Ze.version="18.3.1";eg.exports=Ze;var Xe=eg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Xe,U_=Symbol.for("react.element"),F_=Symbol.for("react.fragment"),O_=Object.prototype.hasOwnProperty,k_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B_={key:!0,ref:!0,__self:!0,__source:!0};function cg(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)O_.call(e,i)&&!B_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:U_,type:n,key:s,ref:a,props:r,_owner:k_.current}}wc.Fragment=F_;wc.jsx=cg;wc.jsxs=cg;Q0.exports=wc;var V=Q0.exports,ug={exports:{}},Pn={},hg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(H,B){var q=H.length;H.push(B);e:for(;0<q;){var J=q-1>>>1,he=H[J];if(0<r(he,B))H[J]=B,H[q]=he,q=J;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var B=H[0],q=H.pop();if(q!==B){H[0]=q;e:for(var J=0,he=H.length,Se=he>>>1;J<Se;){var qe=2*(J+1)-1,Be=H[qe],Ue=qe+1,K=H[Ue];if(0>r(Be,q))Ue<he&&0>r(K,Be)?(H[J]=K,H[Ue]=q,J=Ue):(H[J]=Be,H[qe]=q,J=qe);else if(Ue<he&&0>r(K,q))H[J]=K,H[Ue]=q,J=Ue;else break e}}return B}function r(H,B){var q=H.sortIndex-B.sortIndex;return q!==0?q:H.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var B=t(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=H)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(c)}}function x(H){if(M=!1,y(H),!v)if(t(l)!==null)v=!0,ee(w);else{var B=t(c);B!==null&&$(x,B.startTime-H)}}function w(H,B){v=!1,M&&(M=!1,f(_),_=-1),p=!0;var q=h;try{for(y(B),d=t(l);d!==null&&(!(d.expirationTime>B)||H&&!L());){var J=d.callback;if(typeof J=="function"){d.callback=null,h=d.priorityLevel;var he=J(d.expirationTime<=B);B=n.unstable_now(),typeof he=="function"?d.callback=he:d===t(l)&&i(l),y(B)}else i(l);d=t(l)}if(d!==null)var Se=!0;else{var qe=t(c);qe!==null&&$(x,qe.startTime-B),Se=!1}return Se}finally{d=null,h=q,p=!1}}var T=!1,b=null,_=-1,A=5,C=-1;function L(){return!(n.unstable_now()-C<A)}function F(){if(b!==null){var H=n.unstable_now();C=H;var B=!0;try{B=b(!0,H)}finally{B?z():(T=!1,b=null)}}else T=!1}var z;if(typeof m=="function")z=function(){m(F)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,G=O.port2;O.port1.onmessage=F,z=function(){G.postMessage(null)}}else z=function(){g(F,0)};function ee(H){b=H,T||(T=!0,z())}function $(H,B){_=g(function(){H(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,ee(w))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(H){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var q=h;h=B;try{return H()}finally{h=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,B){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var q=h;h=H;try{return B()}finally{h=q}},n.unstable_scheduleCallback=function(H,B,q){var J=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?J+q:J):q=J,H){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,H={id:u++,callback:B,priorityLevel:H,startTime:q,expirationTime:he,sortIndex:-1},q>J?(H.sortIndex=q,e(c,H),t(l)===null&&H===t(c)&&(M?(f(_),_=-1):M=!0,$(x,q-J))):(H.sortIndex=he,e(l,H),v||p||(v=!0,ee(w))),H},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(H){var B=h;return function(){var q=h;h=B;try{return H.apply(this,arguments)}finally{h=q}}}})(fg);hg.exports=fg;var z_=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=Xe,Rn=z_;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,za={};function Xr(n,e){ks(n,e),ks(n+"Capture",e)}function ks(n,e){for(za[n]=e,n=0;n<e.length;n++)dg.add(e[n])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,V_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},wp={};function G_(n){return rh.call(wp,n)?!0:rh.call(Mp,n)?!1:V_.test(n)?wp[n]=!0:(Mp[n]=!0,!1)}function W_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X_(n,e,t,i){if(e===null||typeof e>"u"||W_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$t[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];$t[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$t[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$t[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$t[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$t[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$t[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$t[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$t[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function $f(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(qf,$f);$t[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(qf,$f);$t[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(qf,$f);$t[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$t[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});$t.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$t[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Zf(n,e,t,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X_(e,t,r,i)&&(t=null),i||r===null?G_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var zi=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),vs=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function ea(n){return n===null||typeof n!="object"?null:(n=Ep&&n[Ep]||n["@@iterator"],typeof n=="function"?n:null)}var bt=Object.assign,$c;function xa(n){if($c===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+n}var Zc=!1;function Kc(n,e){if(!n||Zc)return"";Zc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Zc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?xa(n):""}function Y_(n){switch(n.tag){case 5:return xa(n.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return n=Kc(n.type,!1),n;case 11:return n=Kc(n.type.render,!1),n;case 1:return n=Kc(n.type,!0),n;default:return""}}function lh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case xs:return"Fragment";case vs:return"Portal";case sh:return"Profiler";case Kf:return"StrictMode";case ah:return"Suspense";case oh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case mg:return(n.displayName||"Context")+".Consumer";case pg:return(n._context.displayName||"Context")+".Provider";case jf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Jf:return e=n.displayName||null,e!==null?e:lh(n.type)||"Memo";case Ji:e=n._payload,n=n._init;try{return lh(n(e))}catch{}}return null}function q_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lh(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $_(n){var e=vg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wo(n){n._valueTracker||(n._valueTracker=$_(n))}function xg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function kl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ch(n,e){var t=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Tp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=mr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _g(n,e){e=e.checked,e!=null&&Zf(n,"checked",e,!1)}function uh(n,e){_g(n,e);var t=mr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?hh(n,e.type,t):e.hasOwnProperty("defaultValue")&&hh(n,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ap(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function hh(n,e,t){(e!=="number"||kl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var _a=Array.isArray;function Ps(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+mr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function fh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function bp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(_a(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:mr(t)}}function yg(n,e){var t=mr(e.value),i=mr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Cp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Sg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Sg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Eo,Mg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ha(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(n){Z_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ta[e]=Ta[n]})});function wg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ta.hasOwnProperty(n)&&Ta[n]?(""+e).trim():e+"px"}function Eg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=wg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var K_=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ph(n,e){if(e){if(K_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function mh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function Qf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vh=null,Ls=null,Ns=null;function Rp(n){if(n=go(n)){if(typeof vh!="function")throw Error(re(280));var e=n.stateNode;e&&(e=Cc(e),vh(n.stateNode,n.type,e))}}function Tg(n){Ls?Ns?Ns.push(n):Ns=[n]:Ls=n}function Ag(){if(Ls){var n=Ls,e=Ns;if(Ns=Ls=null,Rp(n),e)for(n=0;n<e.length;n++)Rp(e[n])}}function bg(n,e){return n(e)}function Cg(){}var jc=!1;function Rg(n,e,t){if(jc)return n(e,t);jc=!0;try{return bg(n,e,t)}finally{jc=!1,(Ls!==null||Ns!==null)&&(Cg(),Ag())}}function Va(n,e){var t=n.stateNode;if(t===null)return null;var i=Cc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var xh=!1;if(Ui)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){xh=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{xh=!1}function j_(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Aa=!1,Bl=null,zl=!1,_h=null,J_={onError:function(n){Aa=!0,Bl=n}};function Q_(n,e,t,i,r,s,a,o,l){Aa=!1,Bl=null,j_.apply(J_,arguments)}function ey(n,e,t,i,r,s,a,o,l){if(Q_.apply(this,arguments),Aa){if(Aa){var c=Bl;Aa=!1,Bl=null}else throw Error(re(198));zl||(zl=!0,_h=c)}}function Yr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Pg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Pp(n){if(Yr(n)!==n)throw Error(re(188))}function ty(n){var e=n.alternate;if(!e){if(e=Yr(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Pp(r),n;if(s===i)return Pp(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function Lg(n){return n=ty(n),n!==null?Ng(n):null}function Ng(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ng(n);if(e!==null)return e;n=n.sibling}return null}var Dg=Rn.unstable_scheduleCallback,Lp=Rn.unstable_cancelCallback,ny=Rn.unstable_shouldYield,iy=Rn.unstable_requestPaint,Lt=Rn.unstable_now,ry=Rn.unstable_getCurrentPriorityLevel,ed=Rn.unstable_ImmediatePriority,Ig=Rn.unstable_UserBlockingPriority,Hl=Rn.unstable_NormalPriority,sy=Rn.unstable_LowPriority,Ug=Rn.unstable_IdlePriority,Ec=null,fi=null;function ay(n){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Ec,n,void 0,(n.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:cy,oy=Math.log,ly=Math.LN2;function cy(n){return n>>>=0,n===0?32:31-(oy(n)/ly|0)|0}var To=64,Ao=4194304;function ya(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=ya(o):(s&=a,s!==0&&(i=ya(s)))}else a=t&~r,a!==0?i=ya(a):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-jn(e),r=1<<t,i|=n[t],e&=~r;return i}function uy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-jn(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=uy(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function yh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fg(){var n=To;return To<<=1,!(To&4194240)&&(To=64),n}function Jc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function po(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-jn(e),n[e]=t}function fy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function td(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ct=0;function Og(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var kg,nd,Bg,zg,Hg,Sh=!1,bo=[],or=null,lr=null,cr=null,Ga=new Map,Wa=new Map,tr=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Np(n,e){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function na(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=go(e),e!==null&&nd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function py(n,e,t,i,r){switch(e){case"focusin":return or=na(or,n,e,t,i,r),!0;case"dragenter":return lr=na(lr,n,e,t,i,r),!0;case"mouseover":return cr=na(cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,na(Ga.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wa.set(s,na(Wa.get(s)||null,n,e,t,i,r)),!0}return!1}function Vg(n){var e=Rr(n.target);if(e!==null){var t=Yr(e);if(t!==null){if(e=t.tag,e===13){if(e=Pg(t),e!==null){n.blockedOn=e,Hg(n.priority,function(){Bg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);gh=i,t.target.dispatchEvent(i),gh=null}else return e=go(t),e!==null&&nd(e),n.blockedOn=t,!1;e.shift()}return!0}function Dp(n,e,t){Ml(n)&&t.delete(e)}function my(){Sh=!1,or!==null&&Ml(or)&&(or=null),lr!==null&&Ml(lr)&&(lr=null),cr!==null&&Ml(cr)&&(cr=null),Ga.forEach(Dp),Wa.forEach(Dp)}function ia(n,e){n.blockedOn===e&&(n.blockedOn=null,Sh||(Sh=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,my)))}function Xa(n){function e(r){return ia(r,n)}if(0<bo.length){ia(bo[0],n);for(var t=1;t<bo.length;t++){var i=bo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(or!==null&&ia(or,n),lr!==null&&ia(lr,n),cr!==null&&ia(cr,n),Ga.forEach(e),Wa.forEach(e),t=0;t<tr.length;t++)i=tr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<tr.length&&(t=tr[0],t.blockedOn===null);)Vg(t),t.blockedOn===null&&tr.shift()}var Ds=zi.ReactCurrentBatchConfig,Gl=!0;function gy(n,e,t,i){var r=ct,s=Ds.transition;Ds.transition=null;try{ct=1,id(n,e,t,i)}finally{ct=r,Ds.transition=s}}function vy(n,e,t,i){var r=ct,s=Ds.transition;Ds.transition=null;try{ct=4,id(n,e,t,i)}finally{ct=r,Ds.transition=s}}function id(n,e,t,i){if(Gl){var r=Mh(n,e,t,i);if(r===null)lu(n,e,i,Wl,t),Np(n,i);else if(py(r,n,e,t,i))i.stopPropagation();else if(Np(n,i),e&4&&-1<dy.indexOf(n)){for(;r!==null;){var s=go(r);if(s!==null&&kg(s),s=Mh(n,e,t,i),s===null&&lu(n,e,i,Wl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else lu(n,e,i,null,t)}}var Wl=null;function Mh(n,e,t,i){if(Wl=null,n=Qf(i),n=Rr(n),n!==null)if(e=Yr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Pg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Wl=n,null}function Gg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case ed:return 1;case Ig:return 4;case Hl:case sy:return 16;case Ug:return 536870912;default:return 16}default:return 16}}var rr=null,rd=null,wl=null;function Wg(){if(wl)return wl;var n,e=rd,t=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return wl=r.slice(n,1<i?1-i:void 0)}function El(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function Ip(){return!1}function Ln(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Co:Ip,this.isPropagationStopped=Ip,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=Ln(Zs),mo=bt({},Zs,{view:0,detail:0}),xy=Ln(mo),Qc,eu,ra,Tc=bt({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(Qc=n.screenX-ra.screenX,eu=n.screenY-ra.screenY):eu=Qc=0,ra=n),Qc)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),Up=Ln(Tc),_y=bt({},Tc,{dataTransfer:0}),yy=Ln(_y),Sy=bt({},mo,{relatedTarget:0}),tu=Ln(Sy),My=bt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),wy=Ln(My),Ey=bt({},Zs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ty=Ln(Ey),Ay=bt({},Zs,{data:0}),Fp=Ln(Ay),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ry[n])?!!e[n]:!1}function ad(){return Py}var Ly=bt({},mo,{key:function(n){if(n.key){var e=by[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=El(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(n){return n.type==="keypress"?El(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?El(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ny=Ln(Ly),Dy=bt({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Ln(Dy),Iy=bt({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),Uy=Ln(Iy),Fy=bt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=Ln(Fy),ky=bt({},Tc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),By=Ln(ky),zy=[9,13,27,32],od=Ui&&"CompositionEvent"in window,ba=null;Ui&&"documentMode"in document&&(ba=document.documentMode);var Hy=Ui&&"TextEvent"in window&&!ba,Xg=Ui&&(!od||ba&&8<ba&&11>=ba),kp=" ",Bp=!1;function Yg(n,e){switch(n){case"keyup":return zy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function Vy(n,e){switch(n){case"compositionend":return qg(e);case"keypress":return e.which!==32?null:(Bp=!0,kp);case"textInput":return n=e.data,n===kp&&Bp?null:n;default:return null}}function Gy(n,e){if(_s)return n==="compositionend"||!od&&Yg(n,e)?(n=Wg(),wl=rd=rr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Wy[n.type]:e==="textarea"}function $g(n,e,t,i){Tg(i),e=Xl(e,"onChange"),0<e.length&&(t=new sd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ca=null,Ya=null;function Xy(n){sv(n,0)}function Ac(n){var e=Ms(n);if(xg(e))return n}function Yy(n,e){if(n==="change")return e}var Zg=!1;if(Ui){var nu;if(Ui){var iu="oninput"in document;if(!iu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),iu=typeof Hp.oninput=="function"}nu=iu}else nu=!1;Zg=nu&&(!document.documentMode||9<document.documentMode)}function Vp(){Ca&&(Ca.detachEvent("onpropertychange",Kg),Ya=Ca=null)}function Kg(n){if(n.propertyName==="value"&&Ac(Ya)){var e=[];$g(e,Ya,n,Qf(n)),Rg(Xy,e)}}function qy(n,e,t){n==="focusin"?(Vp(),Ca=e,Ya=t,Ca.attachEvent("onpropertychange",Kg)):n==="focusout"&&Vp()}function $y(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(Ya)}function Zy(n,e){if(n==="click")return Ac(e)}function Ky(n,e){if(n==="input"||n==="change")return Ac(e)}function jy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ei=typeof Object.is=="function"?Object.is:jy;function qa(n,e){if(ei(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rh.call(e,r)||!ei(n[r],e[r]))return!1}return!0}function Gp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wp(n,e){var t=Gp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gp(t)}}function jg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?jg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var n=window,e=kl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=kl(n.document)}return e}function ld(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Jy(n){var e=Jg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&jg(t.ownerDocument.documentElement,t)){if(i!==null&&ld(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Wp(t,s);var a=Wp(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qy=Ui&&"documentMode"in document&&11>=document.documentMode,ys=null,wh=null,Ra=null,Eh=!1;function Xp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Eh||ys==null||ys!==kl(i)||(i=ys,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ra&&qa(Ra,i)||(Ra=i,i=Xl(wh,"onSelect"),0<i.length&&(e=new sd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ys)))}function Ro(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ss={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},ru={},Qg={};Ui&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function bc(n){if(ru[n])return ru[n];if(!Ss[n])return n;var e=Ss[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Qg)return ru[n]=e[t];return n}var ev=bc("animationend"),tv=bc("animationiteration"),nv=bc("animationstart"),iv=bc("transitionend"),rv=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,e){rv.set(n,e),Xr(e,[n])}for(var su=0;su<Yp.length;su++){var au=Yp[su],eS=au.toLowerCase(),tS=au[0].toUpperCase()+au.slice(1);xr(eS,"on"+tS)}xr(ev,"onAnimationEnd");xr(tv,"onAnimationIteration");xr(nv,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(iv,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function qp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ey(i,e,void 0,n),n.currentTarget=null}function sv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}}}if(zl)throw n=_h,zl=!1,_h=null,n}function _t(n,e){var t=e[Rh];t===void 0&&(t=e[Rh]=new Set);var i=n+"__bubble";t.has(i)||(av(e,n,2,!1),t.add(i))}function ou(n,e,t){var i=0;e&&(i|=4),av(t,n,i,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function $a(n){if(!n[Po]){n[Po]=!0,dg.forEach(function(t){t!=="selectionchange"&&(nS.has(t)||ou(t,!1,n),ou(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Po]||(e[Po]=!0,ou("selectionchange",!1,e))}}function av(n,e,t,i){switch(Gg(e)){case 1:var r=gy;break;case 4:r=vy;break;default:r=id}t=r.bind(null,e,t,n),r=void 0,!xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function lu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Rr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Rg(function(){var c=s,u=Qf(t),d=[];e:{var h=rv.get(n);if(h!==void 0){var p=sd,v=n;switch(n){case"keypress":if(El(t)===0)break e;case"keydown":case"keyup":p=Ny;break;case"focusin":v="focus",p=tu;break;case"focusout":v="blur",p=tu;break;case"beforeblur":case"afterblur":p=tu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Uy;break;case ev:case tv:case nv:p=wy;break;case iv:p=Oy;break;case"scroll":p=xy;break;case"wheel":p=By;break;case"copy":case"cut":case"paste":p=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Op}var M=(e&4)!==0,g=!M&&n==="scroll",f=M?h!==null?h+"Capture":null:h;M=[];for(var m=c,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,f!==null&&(x=Va(m,f),x!=null&&M.push(Za(m,x,y)))),g)break;m=m.return}0<M.length&&(h=new p(h,v,null,t,u),d.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==gh&&(v=t.relatedTarget||t.fromElement)&&(Rr(v)||v[Fi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Rr(v):null,v!==null&&(g=Yr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(M=Up,x="onMouseLeave",f="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(M=Op,x="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?h:Ms(p),y=v==null?h:Ms(v),h=new M(x,m+"leave",p,t,u),h.target=g,h.relatedTarget=y,x=null,Rr(u)===c&&(M=new M(f,m+"enter",v,t,u),M.target=y,M.relatedTarget=g,x=M),g=x,p&&v)t:{for(M=p,f=v,m=0,y=M;y;y=jr(y))m++;for(y=0,x=f;x;x=jr(x))y++;for(;0<m-y;)M=jr(M),m--;for(;0<y-m;)f=jr(f),y--;for(;m--;){if(M===f||f!==null&&M===f.alternate)break t;M=jr(M),f=jr(f)}M=null}else M=null;p!==null&&$p(d,h,p,M,!1),v!==null&&g!==null&&$p(d,g,v,M,!0)}}e:{if(h=c?Ms(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=Yy;else if(zp(h))if(Zg)w=Ky;else{w=$y;var T=qy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Zy);if(w&&(w=w(n,c))){$g(d,w,t,u);break e}T&&T(n,h,c),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&hh(h,"number",h.value)}switch(T=c?Ms(c):window,n){case"focusin":(zp(T)||T.contentEditable==="true")&&(ys=T,wh=c,Ra=null);break;case"focusout":Ra=wh=ys=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,Xp(d,t,u);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":Xp(d,t,u)}var b;if(od)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else _s?Yg(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Xg&&t.locale!=="ko"&&(_s||_!=="onCompositionStart"?_==="onCompositionEnd"&&_s&&(b=Wg()):(rr=u,rd="value"in rr?rr.value:rr.textContent,_s=!0)),T=Xl(c,_),0<T.length&&(_=new Fp(_,n,null,t,u),d.push({event:_,listeners:T}),b?_.data=b:(b=qg(t),b!==null&&(_.data=b)))),(b=Hy?Vy(n,t):Gy(n,t))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(u=new Fp("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=b))}sv(d,e)})}function Za(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(n,t),s!=null&&i.unshift(Za(n,s,r)),s=Va(n,e),s!=null&&i.push(Za(n,s,r))),n=n.return}return i}function jr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $p(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Va(t,s),l!=null&&a.unshift(Za(t,l,o))):r||(l=Va(t,s),l!=null&&a.push(Za(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var iS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function Zp(n){return(typeof n=="string"?n:""+n).replace(iS,`
`).replace(rS,"")}function Lo(n,e,t){if(e=Zp(e),Zp(n)!==e&&t)throw Error(re(425))}function Yl(){}var Th=null,Ah=null;function bh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,Kp=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kp<"u"?function(n){return Kp.resolve(null).then(n).catch(oS)}:Ch;function oS(n){setTimeout(function(){throw n})}function cu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Xa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Xa(e)}function ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function jp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ci="__reactFiber$"+Ks,Ka="__reactProps$"+Ks,Fi="__reactContainer$"+Ks,Rh="__reactEvents$"+Ks,lS="__reactListeners$"+Ks,cS="__reactHandles$"+Ks;function Rr(n){var e=n[ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fi]||t[ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=jp(n);n!==null;){if(t=n[ci])return t;n=jp(n)}return e}n=t,t=n.parentNode}return null}function go(n){return n=n[ci]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function Cc(n){return n[Ka]||null}var Ph=[],ws=-1;function _r(n){return{current:n}}function yt(n){0>ws||(n.current=Ph[ws],Ph[ws]=null,ws--)}function gt(n,e){ws++,Ph[ws]=n.current,n.current=e}var gr={},sn=_r(gr),_n=_r(!1),Fr=gr;function Bs(n,e){var t=n.type.contextTypes;if(!t)return gr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function yn(n){return n=n.childContextTypes,n!=null}function ql(){yt(_n),yt(sn)}function Jp(n,e,t){if(sn.current!==gr)throw Error(re(168));gt(sn,e),gt(_n,t)}function ov(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,q_(n)||"Unknown",r));return bt({},t,i)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Fr=sn.current,gt(sn,n),gt(_n,_n.current),!0}function Qp(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=ov(n,e,Fr),i.__reactInternalMemoizedMergedChildContext=n,yt(_n),yt(sn),gt(sn,n)):yt(_n),gt(_n,t)}var Ci=null,Rc=!1,uu=!1;function lv(n){Ci===null?Ci=[n]:Ci.push(n)}function uS(n){Rc=!0,lv(n)}function yr(){if(!uu&&Ci!==null){uu=!0;var n=0,e=ct;try{var t=Ci;for(ct=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ci=null,Rc=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(n+1)),Dg(ed,yr),r}finally{ct=e,uu=!1}}return null}var Es=[],Ts=0,Zl=null,Kl=0,In=[],Un=0,Or=null,Ri=1,Pi="";function br(n,e){Es[Ts++]=Kl,Es[Ts++]=Zl,Zl=n,Kl=e}function cv(n,e,t){In[Un++]=Ri,In[Un++]=Pi,In[Un++]=Or,Or=n;var i=Ri;n=Pi;var r=32-jn(i)-1;i&=~(1<<r),t+=1;var s=32-jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ri=1<<32-jn(e)+r|t<<r|i,Pi=s+n}else Ri=1<<s|t<<r|i,Pi=n}function cd(n){n.return!==null&&(br(n,1),cv(n,1,0))}function ud(n){for(;n===Zl;)Zl=Es[--Ts],Es[Ts]=null,Kl=Es[--Ts],Es[Ts]=null;for(;n===Or;)Or=In[--Un],In[Un]=null,Pi=In[--Un],In[Un]=null,Ri=In[--Un],In[Un]=null}var Cn=null,bn=null,Mt=!1,$n=null;function uv(n,e){var t=On(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function em(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Cn=n,bn=ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Cn=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Or!==null?{id:Ri,overflow:Pi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=On(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Cn=n,bn=null,!0):!1;default:return!1}}function Lh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nh(n){if(Mt){var e=bn;if(e){var t=e;if(!em(n,e)){if(Lh(n))throw Error(re(418));e=ur(t.nextSibling);var i=Cn;e&&em(n,e)?uv(i,t):(n.flags=n.flags&-4097|2,Mt=!1,Cn=n)}}else{if(Lh(n))throw Error(re(418));n.flags=n.flags&-4097|2,Mt=!1,Cn=n}}}function tm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Cn=n}function No(n){if(n!==Cn)return!1;if(!Mt)return tm(n),Mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bh(n.type,n.memoizedProps)),e&&(e=bn)){if(Lh(n))throw hv(),Error(re(418));for(;e;)uv(n,e),e=ur(e.nextSibling)}if(tm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=Cn?ur(n.stateNode.nextSibling):null;return!0}function hv(){for(var n=bn;n;)n=ur(n.nextSibling)}function zs(){bn=Cn=null,Mt=!1}function hd(n){$n===null?$n=[n]:$n.push(n)}var hS=zi.ReactCurrentBatchConfig;function sa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function Do(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function nm(n){var e=n._init;return e(n._payload)}function fv(n){function e(f,m){if(n){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function t(f,m){if(!n)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=pr(f,m),f.index=0,f.sibling=null,f}function s(f,m,y){return f.index=y,n?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,m,y,x){return m===null||m.tag!==6?(m=vu(y,f.mode,x),m.return=f,m):(m=r(m,y),m.return=f,m)}function l(f,m,y,x){var w=y.type;return w===xs?u(f,m,y.props.children,x,y.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&nm(w)===m.type)?(x=r(m,y.props),x.ref=sa(f,m,y),x.return=f,x):(x=Ll(y.type,y.key,y.props,null,f.mode,x),x.ref=sa(f,m,y),x.return=f,x)}function c(f,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=xu(y,f.mode,x),m.return=f,m):(m=r(m,y.children||[]),m.return=f,m)}function u(f,m,y,x,w){return m===null||m.tag!==7?(m=Ur(y,f.mode,x,w),m.return=f,m):(m=r(m,y),m.return=f,m)}function d(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=vu(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mo:return y=Ll(m.type,m.key,m.props,null,f.mode,y),y.ref=sa(f,null,m),y.return=f,y;case vs:return m=xu(m,f.mode,y),m.return=f,m;case Ji:var x=m._init;return d(f,x(m._payload),y)}if(_a(m)||ea(m))return m=Ur(m,f.mode,y,null),m.return=f,m;Do(f,m)}return null}function h(f,m,y,x){var w=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:o(f,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mo:return y.key===w?l(f,m,y,x):null;case vs:return y.key===w?c(f,m,y,x):null;case Ji:return w=y._init,h(f,m,w(y._payload),x)}if(_a(y)||ea(y))return w!==null?null:u(f,m,y,x,null);Do(f,y)}return null}function p(f,m,y,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(y)||null,o(m,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Mo:return f=f.get(x.key===null?y:x.key)||null,l(m,f,x,w);case vs:return f=f.get(x.key===null?y:x.key)||null,c(m,f,x,w);case Ji:var T=x._init;return p(f,m,y,T(x._payload),w)}if(_a(x)||ea(x))return f=f.get(y)||null,u(m,f,x,w,null);Do(m,x)}return null}function v(f,m,y,x){for(var w=null,T=null,b=m,_=m=0,A=null;b!==null&&_<y.length;_++){b.index>_?(A=b,b=null):A=b.sibling;var C=h(f,b,y[_],x);if(C===null){b===null&&(b=A);break}n&&b&&C.alternate===null&&e(f,b),m=s(C,m,_),T===null?w=C:T.sibling=C,T=C,b=A}if(_===y.length)return t(f,b),Mt&&br(f,_),w;if(b===null){for(;_<y.length;_++)b=d(f,y[_],x),b!==null&&(m=s(b,m,_),T===null?w=b:T.sibling=b,T=b);return Mt&&br(f,_),w}for(b=i(f,b);_<y.length;_++)A=p(b,f,_,y[_],x),A!==null&&(n&&A.alternate!==null&&b.delete(A.key===null?_:A.key),m=s(A,m,_),T===null?w=A:T.sibling=A,T=A);return n&&b.forEach(function(L){return e(f,L)}),Mt&&br(f,_),w}function M(f,m,y,x){var w=ea(y);if(typeof w!="function")throw Error(re(150));if(y=w.call(y),y==null)throw Error(re(151));for(var T=w=null,b=m,_=m=0,A=null,C=y.next();b!==null&&!C.done;_++,C=y.next()){b.index>_?(A=b,b=null):A=b.sibling;var L=h(f,b,C.value,x);if(L===null){b===null&&(b=A);break}n&&b&&L.alternate===null&&e(f,b),m=s(L,m,_),T===null?w=L:T.sibling=L,T=L,b=A}if(C.done)return t(f,b),Mt&&br(f,_),w;if(b===null){for(;!C.done;_++,C=y.next())C=d(f,C.value,x),C!==null&&(m=s(C,m,_),T===null?w=C:T.sibling=C,T=C);return Mt&&br(f,_),w}for(b=i(f,b);!C.done;_++,C=y.next())C=p(b,f,_,C.value,x),C!==null&&(n&&C.alternate!==null&&b.delete(C.key===null?_:C.key),m=s(C,m,_),T===null?w=C:T.sibling=C,T=C);return n&&b.forEach(function(F){return e(f,F)}),Mt&&br(f,_),w}function g(f,m,y,x){if(typeof y=="object"&&y!==null&&y.type===xs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Mo:e:{for(var w=y.key,T=m;T!==null;){if(T.key===w){if(w=y.type,w===xs){if(T.tag===7){t(f,T.sibling),m=r(T,y.props.children),m.return=f,f=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&nm(w)===T.type){t(f,T.sibling),m=r(T,y.props),m.ref=sa(f,T,y),m.return=f,f=m;break e}t(f,T);break}else e(f,T);T=T.sibling}y.type===xs?(m=Ur(y.props.children,f.mode,x,y.key),m.return=f,f=m):(x=Ll(y.type,y.key,y.props,null,f.mode,x),x.ref=sa(f,m,y),x.return=f,f=x)}return a(f);case vs:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){t(f,m.sibling),m=r(m,y.children||[]),m.return=f,f=m;break e}else{t(f,m);break}else e(f,m);m=m.sibling}m=xu(y,f.mode,x),m.return=f,f=m}return a(f);case Ji:return T=y._init,g(f,m,T(y._payload),x)}if(_a(y))return v(f,m,y,x);if(ea(y))return M(f,m,y,x);Do(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(t(f,m.sibling),m=r(m,y),m.return=f,f=m):(t(f,m),m=vu(y,f.mode,x),m.return=f,f=m),a(f)):t(f,m)}return g}var Hs=fv(!0),dv=fv(!1),jl=_r(null),Jl=null,As=null,fd=null;function dd(){fd=As=Jl=null}function pd(n){var e=jl.current;yt(jl),n._currentValue=e}function Dh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Is(n,e){Jl=n,fd=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(xn=!0),n.firstContext=null)}function Bn(n){var e=n._currentValue;if(fd!==n)if(n={context:n,memoizedValue:e,next:null},As===null){if(Jl===null)throw Error(re(308));As=n,Jl.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return e}var Pr=null;function md(n){Pr===null?Pr=[n]:Pr.push(n)}function pv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,md(e)):(t.next=r.next,r.next=t),e.interleaved=t,Oi(n,i)}function Oi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qi=!1;function gd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(n,t)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(n,t)}function Tl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,td(n,t)}}function im(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ql(n,e,t,i){var r=n.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=n,M=o;switch(h=e,p=t,M.tag){case 1:if(v=M.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=bt({},d,h);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=a,n.lanes=a,n.memoizedState=d}}function rm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var vo={},di=_r(vo),ja=_r(vo),Ja=_r(vo);function Lr(n){if(n===vo)throw Error(re(174));return n}function vd(n,e){switch(gt(Ja,e),gt(ja,n),gt(di,vo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=dh(e,n)}yt(di),gt(di,e)}function Vs(){yt(di),yt(ja),yt(Ja)}function gv(n){Lr(Ja.current);var e=Lr(di.current),t=dh(e,n.type);e!==t&&(gt(ja,n),gt(di,t))}function xd(n){ja.current===n&&(yt(di),yt(ja))}var wt=_r(0);function ec(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function _d(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var Al=zi.ReactCurrentDispatcher,fu=zi.ReactCurrentBatchConfig,kr=0,At=null,Ft=null,Gt=null,tc=!1,Pa=!1,Qa=0,fS=0;function jt(){throw Error(re(321))}function yd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ei(n[t],e[t]))return!1;return!0}function Sd(n,e,t,i,r,s){if(kr=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=n===null||n.memoizedState===null?gS:vS,n=t(i,r),Pa){s=0;do{if(Pa=!1,Qa=0,25<=s)throw Error(re(301));s+=1,Gt=Ft=null,e.updateQueue=null,Al.current=xS,n=t(i,r)}while(Pa)}if(Al.current=nc,e=Ft!==null&&Ft.next!==null,kr=0,Gt=Ft=At=null,tc=!1,e)throw Error(re(300));return n}function Md(){var n=Qa!==0;return Qa=0,n}function ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?At.memoizedState=Gt=n:Gt=Gt.next=n,Gt}function zn(){if(Ft===null){var n=At.alternate;n=n!==null?n.memoizedState:null}else n=Ft.next;var e=Gt===null?At.memoizedState:Gt.next;if(e!==null)Gt=e,Ft=n;else{if(n===null)throw Error(re(310));Ft=n,n={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Gt===null?At.memoizedState=Gt=n:Gt=Gt.next=n}return Gt}function eo(n,e){return typeof e=="function"?e(n):e}function du(n){var e=zn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Ft,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,At.lanes|=u,Br|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,At.lanes|=s,Br|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pu(n){var e=zn(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function vv(){}function xv(n,e){var t=At,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,wd(Sv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(t.flags|=2048,to(9,yv.bind(null,t,i,r,e),void 0,null),Wt===null)throw Error(re(349));kr&30||_v(t,e,r)}return r}function _v(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function yv(n,e,t,i){e.value=t,e.getSnapshot=i,Mv(e)&&wv(n)}function Sv(n,e,t){return t(function(){Mv(e)&&wv(n)})}function Mv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ei(n,t)}catch{return!0}}function wv(n){var e=Oi(n,1);e!==null&&Jn(e,n,1,-1)}function sm(n){var e=ai();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:n},e.queue=n,n=n.dispatch=mS.bind(null,At,n),[e.memoizedState,n]}function to(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ev(){return zn().memoizedState}function bl(n,e,t,i){var r=ai();At.flags|=n,r.memoizedState=to(1|e,t,void 0,i===void 0?null:i)}function Pc(n,e,t,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&yd(i,a.deps)){r.memoizedState=to(e,t,s,i);return}}At.flags|=n,r.memoizedState=to(1|e,t,s,i)}function am(n,e){return bl(8390656,8,n,e)}function wd(n,e){return Pc(2048,8,n,e)}function Tv(n,e){return Pc(4,2,n,e)}function Av(n,e){return Pc(4,4,n,e)}function bv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Cv(n,e,t){return t=t!=null?t.concat([n]):null,Pc(4,4,bv.bind(null,e,n),t)}function Ed(){}function Rv(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Pv(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Lv(n,e,t){return kr&21?(ei(t,e)||(t=Fg(),At.lanes|=t,Br|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,xn=!0),n.memoizedState=t)}function dS(n,e){var t=ct;ct=t!==0&&4>t?t:4,n(!0);var i=fu.transition;fu.transition={};try{n(!1),e()}finally{ct=t,fu.transition=i}}function Nv(){return zn().memoizedState}function pS(n,e,t){var i=dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Dv(n))Iv(e,t);else if(t=pv(n,e,t,i),t!==null){var r=hn();Jn(t,n,i,r),Uv(t,e,i)}}function mS(n,e,t){var i=dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Dv(n))Iv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=pv(n,e,r,i),t!==null&&(r=hn(),Jn(t,n,i,r),Uv(t,e,i))}}function Dv(n){var e=n.alternate;return n===At||e!==null&&e===At}function Iv(n,e){Pa=tc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Uv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,td(n,t)}}var nc={readContext:Bn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},gS={readContext:Bn,useCallback:function(n,e){return ai().memoizedState=[n,e===void 0?null:e],n},useContext:Bn,useEffect:am,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,bl(4194308,4,bv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return bl(4194308,4,n,e)},useInsertionEffect:function(n,e){return bl(4,2,n,e)},useMemo:function(n,e){var t=ai();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ai();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=pS.bind(null,At,n),[i.memoizedState,n]},useRef:function(n){var e=ai();return n={current:n},e.memoizedState=n},useState:sm,useDebugValue:Ed,useDeferredValue:function(n){return ai().memoizedState=n},useTransition:function(){var n=sm(!1),e=n[0];return n=dS.bind(null,n[1]),ai().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=At,r=ai();if(Mt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),Wt===null)throw Error(re(349));kr&30||_v(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,am(Sv.bind(null,i,s,n),[n]),i.flags|=2048,to(9,yv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ai(),e=Wt.identifierPrefix;if(Mt){var t=Pi,i=Ri;t=(i&~(1<<32-jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Qa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=fS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},vS={readContext:Bn,useCallback:Rv,useContext:Bn,useEffect:wd,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:Av,useMemo:Pv,useReducer:du,useRef:Ev,useState:function(){return du(eo)},useDebugValue:Ed,useDeferredValue:function(n){var e=zn();return Lv(e,Ft.memoizedState,n)},useTransition:function(){var n=du(eo)[0],e=zn().memoizedState;return[n,e]},useMutableSource:vv,useSyncExternalStore:xv,useId:Nv,unstable_isNewReconciler:!1},xS={readContext:Bn,useCallback:Rv,useContext:Bn,useEffect:wd,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:Av,useMemo:Pv,useReducer:pu,useRef:Ev,useState:function(){return pu(eo)},useDebugValue:Ed,useDeferredValue:function(n){var e=zn();return Ft===null?e.memoizedState=n:Lv(e,Ft.memoizedState,n)},useTransition:function(){var n=pu(eo)[0],e=zn().memoizedState;return[n,e]},useMutableSource:vv,useSyncExternalStore:xv,useId:Nv,unstable_isNewReconciler:!1};function Yn(n,e){if(n&&n.defaultProps){e=bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ih(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Lc={isMounted:function(n){return(n=n._reactInternals)?Yr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=dr(n),s=Ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(Jn(e,n,r,i),Tl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=dr(n),s=Ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(Jn(e,n,r,i),Tl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=dr(n),r=Ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(Jn(e,n,i,t),Tl(e,n,i))}};function om(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!qa(t,i)||!qa(r,s):!0}function Fv(n,e,t){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=yn(e)?Fr:sn.current,i=e.contextTypes,s=(i=i!=null)?Bs(n,r):gr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function lm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Lc.enqueueReplaceState(e,e.state,null)}function Uh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},gd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=yn(e)?Fr:sn.current,r.context=Bs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ih(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),Ql(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,e){try{var t="",i=e;do t+=Y_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function mu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Fh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var _S=typeof WeakMap=="function"?WeakMap:Map;function Ov(n,e,t){t=Ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){rc||(rc=!0,Yh=i),Fh(n,e)},t}function kv(n,e,t){t=Ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Fh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Fh(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function cm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new _S;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=DS.bind(null,n,e,t),e.then(n,n))}function um(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function hm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ni(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var yS=zi.ReactCurrentOwner,xn=!1;function cn(n,e,t,i){e.child=n===null?dv(e,null,t,i):Hs(e,n.child,t,i)}function fm(n,e,t,i,r){t=t.render;var s=e.ref;return Is(e,r),i=Sd(n,e,t,i,s,r),t=Md(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ki(n,e,r)):(Mt&&t&&cd(e),e.flags|=1,cn(n,e,i,r),e.child)}function dm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Bv(n,e,s,i,r)):(n=Ll(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:qa,t(a,i)&&n.ref===e.ref)return ki(n,e,r)}return e.flags|=1,n=pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Bv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(qa(s,i)&&n.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(xn=!0);else return e.lanes=n.lanes,ki(n,e,r)}return Oh(n,e,t,i,r)}function zv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Cs,Tn),Tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(Cs,Tn),Tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(Cs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(Cs,Tn),Tn|=i;return cn(n,e,r,t),e.child}function Hv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Oh(n,e,t,i,r){var s=yn(t)?Fr:sn.current;return s=Bs(e,s),Is(e,r),t=Sd(n,e,t,i,s,r),i=Md(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ki(n,e,r)):(Mt&&i&&cd(e),e.flags|=1,cn(n,e,t,r),e.child)}function pm(n,e,t,i,r){if(yn(t)){var s=!0;$l(e)}else s=!1;if(Is(e,r),e.stateNode===null)Cl(n,e),Fv(e,t,i),Uh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=yn(t)?Fr:sn.current,c=Bs(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&lm(e,a,i,c),Qi=!1;var h=e.memoizedState;a.state=h,Ql(e,i,a,r),l=e.memoizedState,o!==i||h!==l||_n.current||Qi?(typeof u=="function"&&(Ih(e,t,u,i),l=e.memoizedState),(o=Qi||om(e,t,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,mv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Yn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=yn(t)?Fr:sn.current,l=Bs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&lm(e,a,i,l),Qi=!1,h=e.memoizedState,a.state=h,Ql(e,i,a,r);var v=e.memoizedState;o!==d||h!==v||_n.current||Qi?(typeof p=="function"&&(Ih(e,t,p,i),v=e.memoizedState),(c=Qi||om(e,t,c,i,h,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return kh(n,e,t,i,s,r)}function kh(n,e,t,i,r,s){Hv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Qp(e,t,!1),ki(n,e,s);i=e.stateNode,yS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Hs(e,n.child,null,s),e.child=Hs(e,null,o,s)):cn(n,e,o,s),e.memoizedState=i.state,r&&Qp(e,t,!0),e.child}function Vv(n){var e=n.stateNode;e.pendingContext?Jp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(n,e.context,!1),vd(n,e.containerInfo)}function mm(n,e,t,i,r){return zs(),hd(r),e.flags|=256,cn(n,e,t,i),e.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gv(n,e,t){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(wt,r&1),n===null)return Nh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ic(a,i,0,null),n=Ur(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=zh(t),e.memoizedState=Bh,n):Td(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return SS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=Ur(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?zh(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Bh,i}return s=n.child,n=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Td(n,e){return e=Ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Io(n,e,t,i){return i!==null&&hd(i),Hs(e,n.child,null,t),n=Td(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function SS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=mu(Error(re(422))),Io(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,n.child,null,a),e.child.memoizedState=zh(a),e.memoizedState=Bh,s);if(!(e.mode&1))return Io(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=mu(s,i,void 0),Io(n,e,a,i)}if(o=(a&n.childLanes)!==0,xn||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(n,r),Jn(i,n,r,-1))}return Ld(),i=mu(Error(re(421))),Io(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=IS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,bn=ur(r.nextSibling),Cn=e,Mt=!0,$n=null,n!==null&&(In[Un++]=Ri,In[Un++]=Pi,In[Un++]=Or,Ri=n.id,Pi=n.overflow,Or=e),e=Td(e,i.children),e.flags|=4096,e)}function gm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Dh(n.return,e,t)}function gu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Wv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gm(n,t,e);else if(n.tag===19)gm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ec(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),gu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ec(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}gu(e,!0,t,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Br|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function MS(n,e,t){switch(e.tag){case 3:Vv(e),zs();break;case 5:gv(e);break;case 1:yn(e.type)&&$l(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):t&e.child.childLanes?Gv(n,e,t):(gt(wt,wt.current&1),n=ki(n,e,t),n!==null?n.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Wv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,zv(n,e,t)}return ki(n,e,t)}var Xv,Hh,Yv,qv;Xv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hh=function(){};Yv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Lr(di.current);var s=null;switch(t){case"input":r=ch(n,r),i=ch(n,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=fh(n,r),i=fh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yl)}ph(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};qv=function(n,e,t,i){t!==i&&(e.flags|=4)};function aa(n,e){if(!Mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function wS(n,e,t){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return yn(e.type)&&ql(),Jt(e),null;case 3:return i=e.stateNode,Vs(),yt(_n),yt(sn),_d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(No(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Zh($n),$n=null))),Hh(n,e),Jt(e),null;case 5:xd(e);var r=Lr(Ja.current);if(t=e.type,n!==null&&e.stateNode!=null)Yv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Jt(e),null}if(n=Lr(di.current),No(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Ka]=s,n=(e.mode&1)!==0,t){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Sa.length;r++)_t(Sa[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Tp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":bp(i,s),_t("invalid",i)}ph(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,n),r=["children",""+o]):za.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(t){case"input":wo(i),Ap(i,s,!0);break;case"textarea":wo(i),Cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Sg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[ci]=e,n[Ka]=i,Xv(n,e,!1,!1),e.stateNode=n;e:{switch(a=mh(t,i),t){case"dialog":_t("cancel",n),_t("close",n),r=i;break;case"iframe":case"object":case"embed":_t("load",n),r=i;break;case"video":case"audio":for(r=0;r<Sa.length;r++)_t(Sa[r],n);r=i;break;case"source":_t("error",n),r=i;break;case"img":case"image":case"link":_t("error",n),_t("load",n),r=i;break;case"details":_t("toggle",n),r=i;break;case"input":Tp(n,i),r=ch(n,i),_t("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),_t("invalid",n);break;case"textarea":bp(n,i),r=fh(n,i),_t("invalid",n);break;default:r=i}ph(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Eg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ha(n,l):typeof l=="number"&&Ha(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",n):l!=null&&Zf(n,s,l,a))}switch(t){case"input":wo(n),Ap(n,i,!1);break;case"textarea":wo(n),Cp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+mr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ps(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(n&&e.stateNode!=null)qv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=Lr(Ja.current),Lr(di.current),No(e)){if(i=e.stateNode,t=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==t)&&(n=Cn,n!==null))switch(n.tag){case 3:Lo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Jt(e),null;case 13:if(yt(wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Mt&&bn!==null&&e.mode&1&&!(e.flags&128))hv(),zs(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ci]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else $n!==null&&(Zh($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||wt.current&1?Ot===0&&(Ot=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Vs(),Hh(n,e),n===null&&$a(e.stateNode.containerInfo),Jt(e),null;case 10:return pd(e.type._context),Jt(e),null;case 17:return yn(e.type)&&ql(),Jt(e),null;case 19:if(yt(wt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)aa(s,!1);else{if(Ot!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=ec(n),a!==null){for(e.flags|=128,aa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(wt,wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Lt()>Ws&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(n=ec(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return Jt(e),null}else 2*Lt()-s.renderingStartTime>Ws&&t!==1073741824&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,t=wt.current,gt(wt,i?t&1|2:t&1),e):(Jt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function ES(n,e){switch(ud(e),e.tag){case 1:return yn(e.type)&&ql(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Vs(),yt(_n),yt(sn),_d(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return xd(e),null;case 13:if(yt(wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));zs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return yt(wt),null;case 4:return Vs(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Uo=!1,tn=!1,TS=typeof WeakSet=="function"?WeakSet:Set,we=null;function bs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function Vh(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var vm=!1;function AS(n,e){if(Th=Gl,n=Jg(),ld(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ah={focusedElem:n,selectionRange:t},Gl=!1,we=e;we!==null;)if(e=we,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,we=n;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:Yn(e.type,M),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Rt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}return v=vm,vm=!1,v}function La(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vh(e,t,s)}r=r.next}while(r!==i)}}function Nc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Gh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $v(n){var e=n.alternate;e!==null&&(n.alternate=null,$v(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ci],delete e[Ka],delete e[Rh],delete e[lS],delete e[cS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zv(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(n=n.child,n!==null))for(Wh(n,e,t),n=n.sibling;n!==null;)Wh(n,e,t),n=n.sibling}function Xh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Xh(n,e,t),n=n.sibling;n!==null;)Xh(n,e,t),n=n.sibling}var Xt=null,qn=!1;function Xi(n,e,t){for(t=t.child;t!==null;)Kv(n,e,t),t=t.sibling}function Kv(n,e,t){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Ec,t)}catch{}switch(t.tag){case 5:tn||bs(t,e);case 6:var i=Xt,r=qn;Xt=null,Xi(n,e,t),Xt=i,qn=r,Xt!==null&&(qn?(n=Xt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Xt.removeChild(t.stateNode));break;case 18:Xt!==null&&(qn?(n=Xt,t=t.stateNode,n.nodeType===8?cu(n.parentNode,t):n.nodeType===1&&cu(n,t),Xa(n)):cu(Xt,t.stateNode));break;case 4:i=Xt,r=qn,Xt=t.stateNode.containerInfo,qn=!0,Xi(n,e,t),Xt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Vh(t,e,a),r=r.next}while(r!==i)}Xi(n,e,t);break;case 1:if(!tn&&(bs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Rt(t,e,o)}Xi(n,e,t);break;case 21:Xi(n,e,t);break;case 22:t.mode&1?(tn=(i=tn)||t.memoizedState!==null,Xi(n,e,t),tn=i):Xi(n,e,t);break;default:Xi(n,e,t)}}function _m(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new TS),e.forEach(function(i){var r=US.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Vn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xt=o.stateNode,qn=!1;break e;case 3:Xt=o.stateNode.containerInfo,qn=!0;break e;case 4:Xt=o.stateNode.containerInfo,qn=!0;break e}o=o.return}if(Xt===null)throw Error(re(160));Kv(s,a,r),Xt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jv(e,n),e=e.sibling}function jv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(e,n),ii(n),i&4){try{La(3,n,n.return),Nc(3,n)}catch(M){Rt(n,n.return,M)}try{La(5,n,n.return)}catch(M){Rt(n,n.return,M)}}break;case 1:Vn(e,n),ii(n),i&512&&t!==null&&bs(t,t.return);break;case 5:if(Vn(e,n),ii(n),i&512&&t!==null&&bs(t,t.return),n.flags&32){var r=n.stateNode;try{Ha(r,"")}catch(M){Rt(n,n.return,M)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&_g(r,s),mh(o,a);var c=mh(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?Eg(r,d):u==="dangerouslySetInnerHTML"?Mg(r,d):u==="children"?Ha(r,d):Zf(r,u,d,c)}switch(o){case"input":uh(r,s);break;case"textarea":yg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ps(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ka]=s}catch(M){Rt(n,n.return,M)}}break;case 6:if(Vn(e,n),ii(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(M){Rt(n,n.return,M)}}break;case 3:if(Vn(e,n),ii(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(M){Rt(n,n.return,M)}break;case 4:Vn(e,n),ii(n);break;case 13:Vn(e,n),ii(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cd=Lt())),i&4&&_m(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(c=tn)||u,Vn(e,n),tn=c):Vn(e,n),ii(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(we=n,u=n.child;u!==null;){for(d=we=u;we!==null;){switch(h=we,p=h.child,h.tag){case 0:case 11:case 14:case 15:La(4,h,h.return);break;case 1:bs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){Rt(i,t,M)}}break;case 5:bs(h,h.return);break;case 22:if(h.memoizedState!==null){Sm(d);continue}}p!==null?(p.return=h,we=p):Sm(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=wg("display",a))}catch(M){Rt(n,n.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Rt(n,n.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,n),ii(n),i&4&&_m(n);break;case 21:break;default:Vn(e,n),ii(n)}}function ii(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Zv(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=xm(n);Xh(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=xm(n);Wh(n,o,a);break;default:throw Error(re(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function bS(n,e,t){we=n,Jv(n)}function Jv(n,e,t){for(var i=(n.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||tn;o=Uo;var c=tn;if(Uo=a,(tn=l)&&!c)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?Mm(r):l!==null?(l.return=a,we=l):Mm(r);for(;s!==null;)we=s,Jv(s),s=s.sibling;we=r,Uo=o,tn=c}ym(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):ym(n)}}function ym(n){for(;we!==null;){var e=we;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}rm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}tn||e.flags&512&&Gh(e)}catch(h){Rt(e,e.return,h)}}if(e===n){we=null;break}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}}function Sm(n){for(;we!==null;){var e=we;if(e===n){we=null;break}var t=e.sibling;if(t!==null){t.return=e.return,we=t;break}we=e.return}}function Mm(n){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Nc(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Gh(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{Gh(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var CS=Math.ceil,ic=zi.ReactCurrentDispatcher,Ad=zi.ReactCurrentOwner,kn=zi.ReactCurrentBatchConfig,et=0,Wt=null,Ut=null,qt=0,Tn=0,Cs=_r(0),Ot=0,no=null,Br=0,Dc=0,bd=0,Na=null,gn=null,Cd=0,Ws=1/0,Ai=null,rc=!1,Yh=null,fr=null,Fo=!1,sr=null,sc=0,Da=0,qh=null,Rl=-1,Pl=0;function hn(){return et&6?Lt():Rl!==-1?Rl:Rl=Lt()}function dr(n){return n.mode&1?et&2&&qt!==0?qt&-qt:hS.transition!==null?(Pl===0&&(Pl=Fg()),Pl):(n=ct,n!==0||(n=window.event,n=n===void 0?16:Gg(n.type)),n):1}function Jn(n,e,t,i){if(50<Da)throw Da=0,qh=null,Error(re(185));po(n,t,i),(!(et&2)||n!==Wt)&&(n===Wt&&(!(et&2)&&(Dc|=t),Ot===4&&nr(n,qt)),Sn(n,i),t===1&&et===0&&!(e.mode&1)&&(Ws=Lt()+500,Rc&&yr()))}function Sn(n,e){var t=n.callbackNode;hy(n,e);var i=Vl(n,n===Wt?qt:0);if(i===0)t!==null&&Lp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Lp(t),e===1)n.tag===0?uS(wm.bind(null,n)):lv(wm.bind(null,n)),aS(function(){!(et&6)&&yr()}),t=null;else{switch(Og(i)){case 1:t=ed;break;case 4:t=Ig;break;case 16:t=Hl;break;case 536870912:t=Ug;break;default:t=Hl}t=ax(t,Qv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Qv(n,e){if(Rl=-1,Pl=0,et&6)throw Error(re(327));var t=n.callbackNode;if(Us()&&n.callbackNode!==t)return null;var i=Vl(n,n===Wt?qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ac(n,i);else{e=i;var r=et;et|=2;var s=tx();(Wt!==n||qt!==e)&&(Ai=null,Ws=Lt()+500,Ir(n,e));do try{LS();break}catch(o){ex(n,o)}while(!0);dd(),ic.current=s,et=r,Ut!==null?e=0:(Wt=null,qt=0,e=Ot)}if(e!==0){if(e===2&&(r=yh(n),r!==0&&(i=r,e=$h(n,r))),e===1)throw t=no,Ir(n,0),nr(n,i),Sn(n,Lt()),t;if(e===6)nr(n,i);else{if(r=n.current.alternate,!(i&30)&&!RS(r)&&(e=ac(n,i),e===2&&(s=yh(n),s!==0&&(i=s,e=$h(n,s))),e===1))throw t=no,Ir(n,0),nr(n,i),Sn(n,Lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Cr(n,gn,Ai);break;case 3:if(nr(n,i),(i&130023424)===i&&(e=Cd+500-Lt(),10<e)){if(Vl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ch(Cr.bind(null,n,gn,Ai),e);break}Cr(n,gn,Ai);break;case 4:if(nr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*CS(i/1960))-i,10<i){n.timeoutHandle=Ch(Cr.bind(null,n,gn,Ai),i);break}Cr(n,gn,Ai);break;case 5:Cr(n,gn,Ai);break;default:throw Error(re(329))}}}return Sn(n,Lt()),n.callbackNode===t?Qv.bind(null,n):null}function $h(n,e){var t=Na;return n.current.memoizedState.isDehydrated&&(Ir(n,e).flags|=256),n=ac(n,e),n!==2&&(e=gn,gn=t,e!==null&&Zh(e)),n}function Zh(n){gn===null?gn=n:gn.push.apply(gn,n)}function RS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(n,e){for(e&=~bd,e&=~Dc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-jn(e),i=1<<t;n[t]=-1,e&=~i}}function wm(n){if(et&6)throw Error(re(327));Us();var e=Vl(n,0);if(!(e&1))return Sn(n,Lt()),null;var t=ac(n,e);if(n.tag!==0&&t===2){var i=yh(n);i!==0&&(e=i,t=$h(n,i))}if(t===1)throw t=no,Ir(n,0),nr(n,e),Sn(n,Lt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Cr(n,gn,Ai),Sn(n,Lt()),null}function Rd(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(Ws=Lt()+500,Rc&&yr())}}function zr(n){sr!==null&&sr.tag===0&&!(et&6)&&Us();var e=et;et|=1;var t=kn.transition,i=ct;try{if(kn.transition=null,ct=1,n)return n()}finally{ct=i,kn.transition=t,et=e,!(et&6)&&yr()}}function Pd(){Tn=Cs.current,yt(Cs)}function Ir(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sS(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:Vs(),yt(_n),yt(sn),_d();break;case 5:xd(i);break;case 4:Vs();break;case 13:yt(wt);break;case 19:yt(wt);break;case 10:pd(i.type._context);break;case 22:case 23:Pd()}t=t.return}if(Wt=n,Ut=n=pr(n.current,null),qt=Tn=e,Ot=0,no=null,bd=Dc=Br=0,gn=Na=null,Pr!==null){for(e=0;e<Pr.length;e++)if(t=Pr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Pr=null}return n}function ex(n,e){do{var t=Ut;try{if(dd(),Al.current=nc,tc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tc=!1}if(kr=0,Gt=Ft=At=null,Pa=!1,Qa=0,Ad.current=null,t===null||t.return===null){Ot=1,no=e,Ut=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=um(a);if(p!==null){p.flags&=-257,hm(p,a,o,s,e),p.mode&1&&cm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){cm(s,c,e),Ld();break e}l=Error(re(426))}}else if(Mt&&o.mode&1){var g=um(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),hm(g,a,o,s,e),hd(Gs(l,o));break e}}s=l=Gs(l,o),Ot!==4&&(Ot=2),Na===null?Na=[s]:Na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ov(s,l,e);im(s,f);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(fr===null||!fr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=kv(s,o,e);im(s,x);break e}}s=s.return}while(s!==null)}ix(t)}catch(w){e=w,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function tx(){var n=ic.current;return ic.current=nc,n===null?nc:n}function Ld(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Wt===null||!(Br&268435455)&&!(Dc&268435455)||nr(Wt,qt)}function ac(n,e){var t=et;et|=2;var i=tx();(Wt!==n||qt!==e)&&(Ai=null,Ir(n,e));do try{PS();break}catch(r){ex(n,r)}while(!0);if(dd(),et=t,ic.current=i,Ut!==null)throw Error(re(261));return Wt=null,qt=0,Ot}function PS(){for(;Ut!==null;)nx(Ut)}function LS(){for(;Ut!==null&&!ny();)nx(Ut)}function nx(n){var e=sx(n.alternate,n,Tn);n.memoizedProps=n.pendingProps,e===null?ix(n):Ut=e,Ad.current=null}function ix(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ES(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ot=6,Ut=null;return}}else if(t=wS(t,e,Tn),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Ot===0&&(Ot=5)}function Cr(n,e,t){var i=ct,r=kn.transition;try{kn.transition=null,ct=1,NS(n,e,t,i)}finally{kn.transition=r,ct=i}return null}function NS(n,e,t,i){do Us();while(sr!==null);if(et&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(fy(n,s),n===Wt&&(Ut=Wt=null,qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fo||(Fo=!0,ax(Hl,function(){return Us(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=ct;ct=1;var o=et;et|=4,Ad.current=null,AS(n,t),jv(t,n),Jy(Ah),Gl=!!Th,Ah=Th=null,n.current=t,bS(t),iy(),et=o,ct=a,kn.transition=s}else n.current=t;if(Fo&&(Fo=!1,sr=n,sc=r),s=n.pendingLanes,s===0&&(fr=null),ay(t.stateNode),Sn(n,Lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(rc)throw rc=!1,n=Yh,Yh=null,n;return sc&1&&n.tag!==0&&Us(),s=n.pendingLanes,s&1?n===qh?Da++:(Da=0,qh=n):Da=0,yr(),null}function Us(){if(sr!==null){var n=Og(sc),e=kn.transition,t=ct;try{if(kn.transition=null,ct=16>n?16:n,sr===null)var i=!1;else{if(n=sr,sr=null,sc=0,et&6)throw Error(re(331));var r=et;for(et|=4,we=n.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:La(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var h=u.sibling,p=u.return;if($v(u),u===c){we=null;break}if(h!==null){h.return=p,we=h;break}we=p}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,we=f;break e}we=s.return}}var m=n.current;for(we=m;we!==null;){a=we;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,we=y;else e:for(a=m;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nc(9,o)}}catch(w){Rt(o,o.return,w)}if(o===a){we=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,we=x;break e}we=o.return}}if(et=r,yr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Ec,n)}catch{}i=!0}return i}finally{ct=t,kn.transition=e}}return!1}function Em(n,e,t){e=Gs(t,e),e=Ov(n,e,1),n=hr(n,e,1),e=hn(),n!==null&&(po(n,1,e),Sn(n,e))}function Rt(n,e,t){if(n.tag===3)Em(n,n,t);else for(;e!==null;){if(e.tag===3){Em(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=Gs(t,n),n=kv(e,n,1),e=hr(e,n,1),n=hn(),e!==null&&(po(e,1,n),Sn(e,n));break}}e=e.return}}function DS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,Wt===n&&(qt&t)===t&&(Ot===4||Ot===3&&(qt&130023424)===qt&&500>Lt()-Cd?Ir(n,0):bd|=t),Sn(n,e)}function rx(n,e){e===0&&(n.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var t=hn();n=Oi(n,e),n!==null&&(po(n,e,t),Sn(n,t))}function IS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),rx(n,t)}function US(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),rx(n,t)}var sx;sx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)xn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return xn=!1,MS(n,e,t);xn=!!(n.flags&131072)}else xn=!1,Mt&&e.flags&1048576&&cv(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cl(n,e),n=e.pendingProps;var r=Bs(e,sn.current);Is(e,t),r=Sd(null,e,i,n,r,t);var s=Md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,$l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Uh(e,i,n,t),e=kh(null,e,i,!0,s,t)):(e.tag=0,Mt&&s&&cd(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Cl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OS(i),n=Yn(i,n),r){case 0:e=Oh(null,e,i,n,t);break e;case 1:e=pm(null,e,i,n,t);break e;case 11:e=fm(null,e,i,n,t);break e;case 14:e=dm(null,e,i,Yn(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Oh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),pm(n,e,i,r,t);case 3:e:{if(Vv(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mv(n,e),Ql(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(re(423)),e),e=mm(n,e,i,t,r);break e}else if(i!==r){r=Gs(Error(re(424)),e),e=mm(n,e,i,t,r);break e}else for(bn=ur(e.stateNode.containerInfo.firstChild),Cn=e,Mt=!0,$n=null,t=dv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(zs(),i===r){e=ki(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return gv(e),n===null&&Nh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,bh(i,r)?a=null:s!==null&&bh(i,s)&&(e.flags|=32),Hv(n,e),cn(n,e,a,t),e.child;case 6:return n===null&&Nh(e),null;case 13:return Gv(n,e,t);case 4:return vd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Hs(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),fm(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(jl,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!_n.current){e=ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Dh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Dh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,t),r=Bn(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),dm(n,e,i,r,t);case 15:return Bv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Cl(n,e),e.tag=1,yn(i)?(n=!0,$l(e)):n=!1,Is(e,t),Fv(e,i,r),Uh(e,i,r,t),kh(null,e,i,!0,n,t);case 19:return Wv(n,e,t);case 22:return zv(n,e,t)}throw Error(re(156,e.tag))};function ax(n,e){return Dg(n,e)}function FS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(n,e,t,i){return new FS(n,e,t,i)}function Nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function OS(n){if(typeof n=="function")return Nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===jf)return 11;if(n===Jf)return 14}return 2}function pr(n,e){var t=n.alternate;return t===null?(t=On(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ll(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Nd(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case xs:return Ur(t.children,r,s,e);case Kf:a=8,r|=8;break;case sh:return n=On(12,t,e,r|2),n.elementType=sh,n.lanes=s,n;case ah:return n=On(13,t,e,r),n.elementType=ah,n.lanes=s,n;case oh:return n=On(19,t,e,r),n.elementType=oh,n.lanes=s,n;case gg:return Ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case pg:a=10;break e;case mg:a=9;break e;case jf:a=11;break e;case Jf:a=14;break e;case Ji:a=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=On(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ur(n,e,t,i){return n=On(7,n,i,e),n.lanes=t,n}function Ic(n,e,t,i){return n=On(22,n,i,e),n.elementType=gg,n.lanes=t,n.stateNode={isHidden:!1},n}function vu(n,e,t){return n=On(6,n,null,e),n.lanes=t,n}function xu(n,e,t){return e=On(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function kS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(n,e,t,i,r,s,a,o,l){return n=new kS(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(s),n}function BS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ox(n){if(!n)return gr;n=n._reactInternals;e:{if(Yr(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(yn(t))return ov(n,t,e)}return e}function lx(n,e,t,i,r,s,a,o,l){return n=Dd(t,i,!0,n,r,s,a,o,l),n.context=ox(null),t=n.current,i=hn(),r=dr(t),s=Ni(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,po(n,r,i),Sn(n,i),n}function Uc(n,e,t,i){var r=e.current,s=hn(),a=dr(r);return t=ox(t),e.context===null?e.context=t:e.pendingContext=t,e=Ni(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,a),n!==null&&(Jn(n,r,a,s),Tl(n,r,a)),a}function oc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Id(n,e){Tm(n,e),(n=n.alternate)&&Tm(n,e)}function zS(){return null}var cx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ud(n){this._internalRoot=n}Fc.prototype.render=Ud.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));Uc(n,e,null,null)};Fc.prototype.unmount=Ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;zr(function(){Uc(null,n,null,null)}),e[Fi]=null}};function Fc(n){this._internalRoot=n}Fc.prototype.unstable_scheduleHydration=function(n){if(n){var e=zg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<tr.length&&e!==0&&e<tr[t].priority;t++);tr.splice(t,0,n),t===0&&Vg(n)}};function Fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function HS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=oc(a);s.call(c)}}var a=lx(e,i,n,0,null,!1,!1,"",Am);return n._reactRootContainer=a,n[Fi]=a.current,$a(n.nodeType===8?n.parentNode:n),zr(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=oc(l);o.call(c)}}var l=Dd(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=l,n[Fi]=l.current,$a(n.nodeType===8?n.parentNode:n),zr(function(){Uc(e,l,t,i)}),l}function kc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=oc(a);o.call(l)}}Uc(e,a,n,r)}else a=HS(t,e,n,r,i);return oc(a)}kg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ya(e.pendingLanes);t!==0&&(td(e,t|1),Sn(e,Lt()),!(et&6)&&(Ws=Lt()+500,yr()))}break;case 13:zr(function(){var i=Oi(n,1);if(i!==null){var r=hn();Jn(i,n,1,r)}}),Id(n,1)}};nd=function(n){if(n.tag===13){var e=Oi(n,134217728);if(e!==null){var t=hn();Jn(e,n,134217728,t)}Id(n,134217728)}};Bg=function(n){if(n.tag===13){var e=dr(n),t=Oi(n,e);if(t!==null){var i=hn();Jn(t,n,e,i)}Id(n,e)}};zg=function(){return ct};Hg=function(n,e){var t=ct;try{return ct=n,e()}finally{ct=t}};vh=function(n,e,t){switch(e){case"input":if(uh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Cc(i);if(!r)throw Error(re(90));xg(i),uh(i,r)}}}break;case"textarea":yg(n,t);break;case"select":e=t.value,e!=null&&Ps(n,!!t.multiple,e,!1)}};bg=Rd;Cg=zr;var VS={usingClientEntryPoint:!1,Events:[go,Ms,Cc,Tg,Ag,Rd]},oa={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GS={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Lg(n),n===null?null:n.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Ec=Oo.inject(GS),fi=Oo}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VS;Pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(re(200));return BS(n,e,null,t)};Pn.createRoot=function(n,e){if(!Fd(n))throw Error(re(299));var t=!1,i="",r=cx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(n,1,!1,null,null,t,!1,i,r),n[Fi]=e.current,$a(n.nodeType===8?n.parentNode:n),new Ud(e)};Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=Lg(e),n=n===null?null:n.stateNode,n};Pn.flushSync=function(n){return zr(n)};Pn.hydrate=function(n,e,t){if(!Oc(e))throw Error(re(200));return kc(null,n,e,!0,t)};Pn.hydrateRoot=function(n,e,t){if(!Fd(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=cx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=lx(e,null,n,1,t??null,r,!1,s,a),n[Fi]=e.current,$a(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Fc(e)};Pn.render=function(n,e,t){if(!Oc(e))throw Error(re(200));return kc(null,n,e,!1,t)};Pn.unmountComponentAtNode=function(n){if(!Oc(n))throw Error(re(40));return n._reactRootContainer?(zr(function(){kc(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1};Pn.unstable_batchedUpdates=Rd;Pn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Oc(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return kc(n,e,t,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(n){console.error(n)}}ux(),ug.exports=Pn;var WS=ug.exports,hx,bm=WS;hx=bm.createRoot,bm.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="186",XS=0,Cm=1,YS=2,Nl=1,fx=2,Ma=3,Hr=0,Mn=1,un=2,Di=0,Ia=1,Rm=2,Pm=3,Lm=4,qS=5,gs=100,$S=101,ZS=102,KS=103,jS=104,JS=200,QS=201,eM=202,tM=203,dx=204,px=205,nM=206,iM=207,rM=208,sM=209,aM=210,oM=211,lM=212,cM=213,uM=214,Kh=0,jh=1,Jh=2,io=3,Qh=4,ef=5,tf=6,nf=7,mx=0,hM=1,fM=2,pi=0,gx=1,vx=2,xx=3,_x=4,yx=5,Sx=6,Mx=7,wx=300,Vr=301,Xs=302,_u=303,yu=304,Bc=306,rf=1e3,Li=1001,sf=1002,Yt=1003,dM=1004,ko=1005,nn=1006,Su=1007,Nr=1008,An=1009,Ex=1010,Tx=1011,ro=1012,kd=1013,vi=1014,ui=1015,xi=1016,Bd=1017,zd=1018,so=1020,Ax=35902,bx=35899,Cx=1021,Rx=1022,Kn=1023,Bi=1026,Dr=1027,Px=1028,Hd=1029,Gr=1030,Vd=1031,Gd=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,af=35840,of=35841,lf=35842,cf=35843,uf=36196,hf=37492,ff=37496,df=37488,pf=37489,lc=37490,mf=37491,gf=37808,vf=37809,xf=37810,_f=37811,yf=37812,Sf=37813,Mf=37814,wf=37815,Ef=37816,Tf=37817,Af=37818,bf=37819,Cf=37820,Rf=37821,Pf=36492,Lf=36494,Nf=36495,Df=36283,If=36284,cc=36285,Uf=36286,pM=3200,Ff=0,mM=1,ir="",mn="srgb",uc="srgb-linear",hc="linear",ot="srgb",Mu=7680,gM=519,vM=512,xM=513,_M=514,Wd=515,yM=516,SM=517,Xd=518,MM=519,Lx=35044,Nm="300 es",hi=2e3,ao=2001;function wM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function EM(){const n=fc("canvas");return n.style.display="block",n}const Dm={};function dc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Nx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Nx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=Nx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fs(...n){const e=n.join(" ");e in Dm||(Dm[e]=!0,Ne(...n))}function TM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const AM={[Kh]:jh,[Jh]:tf,[Qh]:nf,[io]:ef,[jh]:Kh,[tf]:Jh,[nf]:Qh,[ef]:io};class qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Im=1234567;const Ua=Math.PI/180,oo=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Yd(n,e){return(n%e+e)%e}function bM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function CM(n,e,t){return n!==e?(t-n)/(e-n):0}function Fa(n,e,t){return(1-t)*n+t*e}function RM(n,e,t,i){return Fa(n,e,1-Math.exp(-t*i))}function PM(n,e=1){return e-Math.abs(Yd(n,e*2)-e)}function LM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function NM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function DM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function IM(n,e){return n+Math.random()*(e-n)}function UM(n){return n*(.5-Math.random())}function FM(n){n!==void 0&&(Im=n);let e=Im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OM(n){return n*Ua}function kM(n){return n*oo}function BM(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function zM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function HM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function VM(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*p,o*u,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yi={DEG2RAD:Ua,RAD2DEG:oo,generateUUID:mi,clamp:Ye,euclideanModulo:Yd,mapLinear:bM,inverseLerp:CM,lerp:Fa,damp:RM,pingpong:PM,smoothstep:LM,smootherstep:NM,randInt:DM,randFloat:IM,randFloatSpread:UM,seededRandom:FM,degToRad:OM,radToDeg:kM,isPowerOfTwo:BM,ceilPowerOfTwo:zM,floorPowerOfTwo:HM,setQuaternionFromProperEuler:VM,normalize:lt,denormalize:Zn},rp=class rp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rp.prototype.isVector2=!0;let pe=rp;class js{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],v=s[a+2],M=s[a+3];if(d!==M||l!==h||c!==p||u!==v){let g=l*h+c*p+u*v+d*M;g<0&&(h=-h,p=-p,v=-v,M=-M,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+M*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+M*o;const m=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=m,c*=m,u*=m,d*=m}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let P=sp;const wu=new P,Um=new js,ap=class ap{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],M=r[0],g=r[3],f=r[6],m=r[1],y=r[4],x=r[7],w=r[2],T=r[5],b=r[8];return s[0]=a*M+o*m+l*w,s[3]=a*g+o*y+l*T,s[6]=a*f+o*x+l*b,s[1]=c*M+u*m+d*w,s[4]=c*g+u*y+d*T,s[7]=c*f+u*x+d*b,s[2]=h*M+p*m+v*w,s[5]=h*g+p*y+v*T,s[8]=h*f+p*x+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eu.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eu.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ap.prototype.isMatrix3=!0;let Ie=ap;const Eu=new Ie,Fm=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GM(){const n={enabled:!0,workingColorSpace:uc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[uc]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const je=GM();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jr;class WM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=fc("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XM=0;class qd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tu(r[a].image)):s.push(Tu(r[a]))}else s=Tu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?WM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let YM=0;const Au=new P;class rn extends qr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=Li,r=Li,s=nn,a=Nr,o=Kn,l=An,c=rn.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=mi(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rf:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rf:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=wx;rn.DEFAULT_ANISOTROPY=1;const op=class op{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,w=(f+1)/2,T=(u+h)/4,b=(d+M)/4,_=(v+g)/4;return y>x&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=b/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=_/s),this.set(i,r,s,t),this}let m=Math.sqrt((g-v)*(g-v)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-M)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;let Et=op;class qM extends qr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends qM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dx extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $M extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Mc=class Mc{constructor(e,t,i,r,s,a,o,l,c,u,d,h,p,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,p,v,M,g)}set(e,t,i,r,s,a,o,l,c,u,d,h,p,v,M,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h-M*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+M,t[1]=l*d,t[5]=M*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=M-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+M,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,KM)}lookAt(e,t,i){const r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),qi.crossVectors(i,wn),qi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),qi.crossVectors(i,wn)),qi.normalize(),Bo.crossVectors(wn,qi),r[0]=qi.x,r[4]=Bo.x,r[8]=wn.x,r[1]=qi.y,r[5]=Bo.y,r[9]=wn.y,r[2]=qi.z,r[6]=Bo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],M=i[6],g=i[10],f=i[14],m=i[3],y=i[7],x=i[11],w=i[15],T=r[0],b=r[4],_=r[8],A=r[12],C=r[1],L=r[5],F=r[9],z=r[13],O=r[2],G=r[6],ee=r[10],$=r[14],H=r[3],B=r[7],q=r[11],J=r[15];return s[0]=a*T+o*C+l*O+c*H,s[4]=a*b+o*L+l*G+c*B,s[8]=a*_+o*F+l*ee+c*q,s[12]=a*A+o*z+l*$+c*J,s[1]=u*T+d*C+h*O+p*H,s[5]=u*b+d*L+h*G+p*B,s[9]=u*_+d*F+h*ee+p*q,s[13]=u*A+d*z+h*$+p*J,s[2]=v*T+M*C+g*O+f*H,s[6]=v*b+M*L+g*G+f*B,s[10]=v*_+M*F+g*ee+f*q,s[14]=v*A+M*z+g*$+f*J,s[3]=m*T+y*C+x*O+w*H,s[7]=m*b+y*L+x*G+w*B,s[11]=m*_+y*F+x*ee+w*q,s[15]=m*A+y*z+x*$+w*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],M=e[7],g=e[11],f=e[15],m=l*p-c*h,y=o*p-c*d,x=o*h-l*d,w=a*p-c*u,T=a*h-l*u,b=a*d-o*u;return t*(M*m-g*y+f*x)-i*(v*m-g*w+f*T)+r*(v*y-M*w+f*b)-s*(v*x-M*T+g*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],M=e[13],g=e[14],f=e[15],m=t*o-i*a,y=t*l-r*a,x=t*c-s*a,w=i*l-r*o,T=i*c-s*o,b=r*c-s*l,_=u*M-d*v,A=u*g-h*v,C=u*f-p*v,L=d*g-h*M,F=d*f-p*M,z=h*f-p*g,O=m*z-y*F+x*L+w*C-T*A+b*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/O;return e[0]=(o*z-l*F+c*L)*G,e[1]=(r*F-i*z-s*L)*G,e[2]=(M*b-g*T+f*w)*G,e[3]=(h*T-d*b-p*w)*G,e[4]=(l*C-a*z-c*A)*G,e[5]=(t*z-r*C+s*A)*G,e[6]=(g*x-v*b-f*y)*G,e[7]=(u*b-h*x+p*y)*G,e[8]=(a*F-o*C+c*_)*G,e[9]=(i*C-t*F-s*_)*G,e[10]=(v*T-M*x+f*m)*G,e[11]=(d*x-u*T-p*m)*G,e[12]=(o*A-a*L-l*_)*G,e[13]=(t*L-i*A+r*_)*G,e[14]=(M*y-v*w-g*m)*G,e[15]=(u*w-d*y+h*m)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,v=s*d,M=a*u,g=a*d,f=o*d,m=l*c,y=l*u,x=l*d,w=i.x,T=i.y,b=i.z;return r[0]=(1-(M+f))*w,r[1]=(p+x)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(h+f))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(v+y)*b,r[9]=(g-m)*b,r[10]=(1-(h+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const c=1/a,u=1/o,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===hi)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===ao)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===hi)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===ao)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Mc.prototype.isMatrix4=!0;let St=Mc;const Qr=new P,Gn=new St,ZM=new P(0,0,0),KM=new P(1,1,1),qi=new P,Bo=new P,wn=new P,km=new St,Bm=new js;class vr{constructor(e=0,t=0,i=0,r=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class Ix{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jM=0;const zm=new P,es=new js,Si=new St,zo=new P,la=new P,JM=new P,QM=new js,Hm=new P(1,0,0),Vm=new P(0,1,0),Gm=new P(0,0,1),Wm={type:"added"},e1={type:"removed"},ts={type:"childadded",child:null},bu={type:"childremoved",child:null};class kt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new P,t=new vr,i=new js,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ie}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Hm,e)}rotateY(e){return this.rotateOnAxis(Vm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hm,e)}translateY(e){return this.translateOnAxis(Vm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(la,zo,this.up):Si.lookAt(zo,la,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Si),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),ts.child=e,this.dispatchEvent(ts),ts.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e1),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,JM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,QM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new P(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oi extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Ru(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Yd(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ru(a,s,e+1/3),this.g=Ru(a,s,e),this.b=Ru(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=Ux[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return je.workingToColorSpace(en.copy(this),e),Math.round(Ye(en.r*255,0,255))*65536+Math.round(Ye(en.g*255,0,255))*256+Math.round(Ye(en.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(en.copy(this),t);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=mn){je.workingToColorSpace(en.copy(this),e);const t=en.r,i=en.g,r=en.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ho);const i=Fa($i.h,Ho.h,t),r=Fa($i.s,Ho.s,t),s=Fa($i.l,Ho.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ge;Ge.NAMES=Ux;class $d{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new $d(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n1 extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wn=new P,Mi=new P,Pu=new P,wi=new P,ns=new P,is=new P,Xm=new P,Lu=new P,Nu=new P,Du=new P,Iu=new Et,Uu=new Et,Fu=new Et;class Fn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Mi.subVectors(i,t),Pu.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(Mi),l=Wn.dot(Pu),c=Mi.dot(Mi),u=Mi.dot(Pu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Iu.setScalar(0),Uu.setScalar(0),Fu.setScalar(0),Iu.fromBufferAttribute(e,t),Uu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Iu,s.x),a.addScaledVector(Uu,s.y),a.addScaledVector(Fu,s.z),a}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Mi.subVectors(e,t),Wn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Wn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ns.subVectors(r,i),is.subVectors(s,i),Lu.subVectors(e,i);const l=ns.dot(Lu),c=is.dot(Lu);if(l<=0&&c<=0)return t.copy(i);Nu.subVectors(e,r);const u=ns.dot(Nu),d=is.dot(Nu);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ns,a);Du.subVectors(e,s);const p=ns.dot(Du),v=is.dot(Du);if(v>=0&&p<=v)return t.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(is,o);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Xm.subVectors(s,r),o=(d-u)/(d-u+(p-v)),t.copy(r).addScaledVector(Xm,o);const f=1/(g+M+h);return a=M*f,o=h*f,t.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Go.subVectors(this.max,ca),rs.subVectors(e.a,ca),ss.subVectors(e.b,ca),as.subVectors(e.c,ca),Zi.subVectors(ss,rs),Ki.subVectors(as,ss),Mr.subVectors(rs,as);let t=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-Mr.z,Mr.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,Mr.z,0,-Mr.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-Mr.y,Mr.x,0];return!Ou(t,rs,ss,as,Go)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,rs,ss,as,Go))?!1:(Wo.crossVectors(Zi,Ki),t=[Wo.x,Wo.y,Wo.z],Ou(t,rs,ss,as,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new P,new P,new P,new P,new P,new P,new P,new P],Xn=new P,Vo=new xo,rs=new P,ss=new P,as=new P,Zi=new P,Ki=new P,Mr=new P,ca=new P,Go=new P,Wo=new P,wr=new P;function Ou(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const It=new P,Xo=new pe;let i1=0;class gi extends qr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lx,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fx extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ox extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class We extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const r1=new xo,ua=new P,ku=new P;class zc{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):r1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(ku)),this.expandByPoint(ua.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let s1=0;const Dn=new St,Bu=new kt,os=new P,En=new xo,ha=new xo,Vt=new P;class Nt extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wM(e)?Ox:Fx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(En.min,ha.min),En.expandByPoint(Vt),Vt.addVectors(En.max,ha.max),En.expandByPoint(Vt)):(En.expandByPoint(ha.min),En.expandByPoint(ha.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Vt.add(os)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new P,l[_]=new P;const c=new P,u=new P,d=new P,h=new pe,p=new pe,v=new pe,M=new P,g=new P;function f(_,A,C){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,C),h.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,C),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),o[_].add(M),o[A].add(M),o[C].add(M),l[_].add(g),l[A].add(g),l[C].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,A=m.length;_<A;++_){const C=m[_],L=C.start,F=C.count;for(let z=L,O=L+F;z<O;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new P,x=new P,w=new P,T=new P;function b(_){w.fromBufferAttribute(r,_),T.copy(w);const A=o[_];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),x.crossVectors(T,A);const L=x.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,L)}for(let _=0,A=m.length;_<A;++_){const C=m[_],L=C.start,F=C.count;for(let z=L,O=L+F;z<O;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new gi(h,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class a1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lx,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const on=new P;class pc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){dc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zu=new P,o1=new P,l1=new Ie;class er{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zu.subVectors(i,t).cross(o1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(zu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l1.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let c1=0;class $r extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Ia,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dx,this.blendDst=px,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mu,this.stencilZFail=Mu,this.stencilZPass=Mu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new er().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kx extends $r{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const fa=new P,cs=new P,us=new P,hs=new pe,da=new pe,Bx=new St,Yo=new P,pa=new P,qo=new P,Ym=new pe,Hu=new pe,qm=new pe;class u1 extends kt{constructor(e=new kx){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new a1(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new pc(i,3,0,!1)),ls.setAttribute("uv",new pc(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Bx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;$o(Yo.set(-.5,-.5,0),us,a,cs,r,s),$o(pa.set(.5,-.5,0),us,a,cs,r,s),$o(qo.set(.5,.5,0),us,a,cs,r,s),Ym.set(0,0),Hu.set(1,0),qm.set(1,1);let o=e.ray.intersectTriangle(Yo,pa,qo,!1,fa);if(o===null&&($o(pa.set(-.5,.5,0),us,a,cs,r,s),Hu.set(0,1),o=e.ray.intersectTriangle(Yo,qo,pa,!1,fa),o===null))return;const l=e.ray.origin.distanceTo(fa);l<e.near||l>e.far||t.push({distance:l,point:fa.clone(),uv:Fn.getInterpolation(fa,Yo,pa,qo,Ym,Hu,qm,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $o(n,e,t,i,r,s){hs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(da.x=s*hs.x-r*hs.y,da.y=r*hs.x+s*hs.y):da.copy(hs),n.copy(e),n.x+=da.x,n.y+=da.y,n.applyMatrix4(Bx)}const Ti=new P,Vu=new P,Zo=new P,Ko=new P;class zx{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vu.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Ko.copy(this.origin).sub(Vu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zo),o=Ko.dot(this.direction),l=-Ko.dot(Zo),c=Ko.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Vu).addScaledVector(Zo,h),p}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,p=e.z-a.z,v=t.x-a.x,M=t.y-a.y,g=t.z-a.z,f=i.x-a.x,m=i.y-a.y,y=i.z-a.z,x=Math.abs(l),w=Math.abs(c),T=Math.abs(u);let b,_,A,C,L,F,z,O,G,ee,$,H;if(x>=w&&x>=T?(A=l,F=d,G=v,H=f,l>=0?(b=c,_=u,C=h,L=p,z=M,O=g,ee=m,$=y):(b=u,_=c,C=p,L=h,z=g,O=M,ee=y,$=m)):w>=T?(A=c,F=h,G=M,H=m,c>=0?(b=u,_=l,C=p,L=d,z=g,O=v,ee=y,$=f):(b=l,_=u,C=d,L=p,z=v,O=g,ee=f,$=y)):(A=u,F=p,G=g,H=y,u>=0?(b=l,_=c,C=d,L=h,z=v,O=M,ee=f,$=m):(b=c,_=l,C=h,L=d,z=M,O=v,ee=m,$=f)),A===0)return null;const B=b/A,q=_/A,J=1/A,he=C-B*F,Se=L-q*F,qe=z-B*G,Be=O-q*G,Ue=ee-B*H,K=$-q*H,ne=Ue*Be-K*qe,_e=he*K-Se*Ue,De=qe*Se-Be*he;if(r){if(ne<0||_e<0||De<0)return null}else if((ne<0||_e<0||De<0)&&(ne>0||_e>0||De>0))return null;const xe=ne+_e+De;if(xe===0)return null;const Oe=J*(ne*F+_e*G+De*H);return(xe>0?Oe<0:Oe>0)?null:this.at(Oe/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bi extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $m=new St,Er=new zx,jo=new zc,Zm=new P,Jo=new P,Qo=new P,el=new P,Gu=new P,tl=new P,Km=new P,nl=new P;class rt extends kt{constructor(e=new Nt,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Gu.fromBufferAttribute(d,e),a?tl.addScaledVector(Gu,u):tl.addScaledVector(Gu.sub(t),u))}t.add(tl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(jo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(jo,Zm)===null||Er.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&($m.copy(s).invert(),Er.copy(e.ray).applyMatrix4($m),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const g=h[v],f=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,w=y;x<w;x+=3){const T=o.getX(x),b=o.getX(x+1),_=o.getX(x+2);r=il(this,f,e,i,c,u,d,T,b,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const m=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);r=il(this,a,e,i,c,u,d,m,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const g=h[v],f=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,w=y;x<w;x+=3){const T=x,b=x+1,_=x+2;r=il(this,f,e,i,c,u,d,T,b,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const m=g,y=g+1,x=g+2;r=il(this,a,e,i,c,u,d,m,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function h1(n,e,t,i,r,s,a,o){let l;if(e.side===Mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Hr,o),l===null)return null;nl.copy(o),nl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(nl);return c<t.near||c>t.far?null:{distance:c,point:nl.clone(),object:n}}function il(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Jo),n.getVertexPosition(l,Qo),n.getVertexPosition(c,el);const u=h1(n,e,t,i,Jo,Qo,el,Km);if(u){const d=new P;Fn.getBarycoord(Km,Jo,Qo,el,d),r&&(u.uv=Fn.getInterpolatedAttribute(r,o,l,c,d,new pe)),s&&(u.uv1=Fn.getInterpolatedAttribute(s,o,l,c,d,new pe)),a&&(u.normal=Fn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Fn.getNormal(Jo,Qo,el,h.normal),u.face=h,u.barycoord=d}return u}class f1 extends rn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Yt,u=Yt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tr=new zc,d1=new pe(.5,.5),rl=new P;class Zd{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,a=new er){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],v=s[8],M=s[9],g=s[10],f=s[11],m=s[12],y=s[13],x=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,f-v,w-m).normalize(),r[1].setComponents(c+a,p+u,f+v,w+m).normalize(),r[2].setComponents(c+o,p+d,f+M,w+y).normalize(),r[3].setComponents(c-o,p-d,f-M,w-y).normalize(),i)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,p-h,f-g,w-x).normalize();else if(r[4].setComponents(c-l,p-h,f-g,w-x).normalize(),t===hi)r[5].setComponents(c+l,p+h,f+g,w+x).normalize();else if(t===ao)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const t=d1.distanceTo(e.center);return Tr.radius=.7071067811865476+t,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hx extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new P,gc=new P,jm=new St,ma=new zx,sl=new zc,Wu=new P,Jm=new P;class p1 extends kt{constructor(e=new Nt,t=new Hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)mc.fromBufferAttribute(t,r-1),gc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new We(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;jm.copy(r).invert(),ma.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let M=p,g=v-1;M<g;M+=c){const f=u.getX(M),m=u.getX(M+1),y=al(this,e,ma,l,f,m,M);y&&t.push(y)}if(this.isLineLoop){const M=u.getX(v-1),g=u.getX(p),f=al(this,e,ma,l,M,g,v-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=p,g=v-1;M<g;M+=c){const f=al(this,e,ma,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=al(this,e,ma,l,v-1,p,v-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function al(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(mc.fromBufferAttribute(o,r),gc.fromBufferAttribute(o,s),t.distanceSqToSegment(mc,gc,Wu,Jm)>i)return;Wu.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wu);if(!(c<e.near||c>e.far))return{distance:c,point:Jm.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Qm=new P,e0=new P;class m1 extends p1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Qm.fromBufferAttribute(t,r),e0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Qm.distanceTo(e0);e.setAttribute("lineDistance",new We(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vx extends rn{constructor(e=[],t=Vr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xu extends rn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends rn{constructor(e,t,i=vi,r,s,a,o=Yt,l=Yt,c,u=Bi,d=1){if(u!==Bi&&u!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class g1 extends lo{constructor(e,t=vi,i=Vr,r,s,a=Yt,o=Yt,l,c=Bi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gx extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Js extends Nt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2));function v(M,g,f,m,y,x,w,T,b,_,A){const C=x/b,L=w/_,F=x/2,z=w/2,O=T/2,G=b+1,ee=_+1;let $=0,H=0;const B=new P;for(let q=0;q<ee;q++){const J=q*L-z;for(let he=0;he<G;he++){const Se=he*C-F;B[M]=Se*m,B[g]=J*y,B[f]=O,c.push(B.x,B.y,B.z),B[M]=0,B[g]=0,B[f]=T>0?1:-1,u.push(B.x,B.y,B.z),d.push(he/b),d.push(1-q/_),$+=1}}for(let q=0;q<_;q++)for(let J=0;J<b;J++){const he=h+J+G*q,Se=h+J+G*(q+1),qe=h+(J+1)+G*(q+1),Be=h+(J+1)+G*q;l.push(he,Se,Be),l.push(Se,qe,Be),H+=6}o.addGroup(p,H,A),p+=H,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vc extends Nt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,p=2*d+h,v=i*2+s,M=r+1,g=new P,f=new P;for(let m=0;m<=v;m++){let y=0,x=0,w=0,T=0;if(m<=i){const A=m/i,C=A*Math.PI/2;x=-u-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),y=A*d}else if(m<=i+s){const A=(m-i)/s;x=-u+A*t,w=e,T=0,y=d+A*h}else{const A=(m-i-s)/i,C=A*Math.PI/2;x=u+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),y=d+h+A*d}const b=Math.max(0,Math.min(1,y/p));let _=0;m===0?_=.5/r:m===v&&(_=-.5/r);for(let A=0;A<=r;A++){const C=A/r,L=C*Math.PI*2,F=Math.sin(L),z=Math.cos(L);f.x=-w*z,f.y=x,f.z=w*F,o.push(f.x,f.y,f.z),g.set(-w*z,T,w*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,b)}if(m>0){const A=(m-1)*M;for(let C=0;C<r;C++){const L=A+C,F=A+C+1,z=m*M+C,O=m*M+C+1;a.push(L,F,z),a.push(F,O,z)}}}this.setIndex(a),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Kd extends Nt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new P,u=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hc extends Nt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let v=0;const M=[],g=i/2;let f=0;m(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(p,2));function m(){const x=new P,w=new P;let T=0;const b=(t-e)/i;for(let _=0;_<=s;_++){const A=[],C=_/s,L=C*(t-e)+e;for(let F=0;F<=r;F++){const z=F/r,O=z*l+o,G=Math.sin(O),ee=Math.cos(O);w.x=L*G,w.y=-C*i+g,w.z=L*ee,d.push(w.x,w.y,w.z),x.set(G,b,ee).normalize(),h.push(x.x,x.y,x.z),p.push(z,1-C),A.push(v++)}M.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const C=M[A][_],L=M[A+1][_],F=M[A+1][_+1],z=M[A][_+1];(e>0||A!==0)&&(u.push(C,L,z),T+=3),(t>0||A!==s-1)&&(u.push(L,F,z),T+=3)}c.addGroup(f,T,0),f+=T}function y(x){const w=v,T=new pe,b=new P;let _=0;const A=x===!0?e:t,C=x===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,g*C,0),h.push(0,C,0),p.push(.5,.5),v++;const L=v;for(let F=0;F<=r;F++){const O=F/r*l+o,G=Math.cos(O),ee=Math.sin(O);b.x=A*ee,b.y=g*C,b.z=A*G,d.push(b.x,b.y,b.z),h.push(0,C,0),T.x=G*.5+.5,T.y=ee*.5*C+.5,p.push(T.x,T.y),v++}for(let F=0;F<r;F++){const z=w+F,O=L+F;x===!0?u.push(O,O+1,z):u.push(O+1,O,z),_+=3}c.addGroup(f,_,x===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends Hc{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jd extends Nt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(s.slice(),3)),this.setAttribute("uv",new We(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const y=new P,x=new P,w=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],x),p(t[T+2],w),l(y,x,w,m)}function l(m,y,x,w){const T=w+1,b=[];for(let _=0;_<=T;_++){b[_]=[];const A=m.clone().lerp(x,_/T),C=y.clone().lerp(x,_/T),L=T-_;for(let F=0;F<=L;F++)F===0&&_===T?b[_][F]=A:b[_][F]=A.clone().lerp(C,F/L)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){const C=Math.floor(A/2);A%2===0?(h(b[_][C+1]),h(b[_+1][C]),h(b[_][C])):(h(b[_][C+1]),h(b[_+1][C+1]),h(b[_+1][C]))}}function c(m){const y=new P;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(m),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const m=new P;for(let y=0;y<s.length;y+=3){m.x=s[y+0],m.y=s[y+1],m.z=s[y+2];const x=g(m)/2/Math.PI+.5,w=f(m)/Math.PI+.5;a.push(x,1-w)}v(),d()}function d(){for(let m=0;m<a.length;m+=6){const y=a[m+0],x=a[m+2],w=a[m+4],T=Math.max(y,x,w),b=Math.min(y,x,w);T>.9&&b<.1&&(y<.2&&(a[m+0]+=1),x<.2&&(a[m+2]+=1),w<.2&&(a[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,y){const x=m*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function v(){const m=new P,y=new P,x=new P,w=new P,T=new pe,b=new pe,_=new pe;for(let A=0,C=0;A<s.length;A+=9,C+=6){m.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),T.set(a[C+0],a[C+1]),b.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),w.copy(m).add(y).add(x).divideScalar(3);const L=g(w);M(T,C+0,m,L),M(b,C+2,y,L),M(_,C+4,x,L)}}function M(m,y,x,w){w<0&&m.x===1&&(a[y]=m.x-1),x.x===0&&x.z===0&&(a[y]=w/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.vertices,e.indices,e.radius,e.detail)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(a-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new pe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,r=[],s=[],a=[],o=new P,l=new St;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ye(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ye(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jd extends yi{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class v1 extends Jd{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qd(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,r(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const t0=new P,n0=new P,Yu=new Qd,qu=new Qd,$u=new Qd;class Of extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(n0.subVectors(r[0],r[1]).add(r[0]),c=n0);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(t0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=t0),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),Yu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,v,M,g),qu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,v,M,g),$u.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,v,M,g)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),qu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),$u.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Yu.calc(l),qu.calc(l),$u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function i0(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function x1(n,e){const t=1-n;return t*t*e}function _1(n,e){return 2*(1-n)*n*e}function y1(n,e){return n*n*e}function Oa(n,e,t,i){return x1(n,e)+_1(n,t)+y1(n,i)}function S1(n,e){const t=1-n;return t*t*t*e}function M1(n,e){const t=1-n;return 3*t*t*n*e}function w1(n,e){return 3*(1-n)*n*n*e}function E1(n,e){return n*n*n*e}function ka(n,e,t,i,r){return S1(n,e)+M1(n,t)+w1(n,i)+E1(n,r)}class Wx extends yi{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ka(e,r.x,s.x,a.x,o.x),ka(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T1 extends yi{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ka(e,r.x,s.x,a.x,o.x),ka(e,r.y,s.y,a.y,o.y),ka(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xx extends yi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A1 extends yi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yx extends yi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Oa(e,r.x,s.x,a.x),Oa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qx extends yi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Oa(e,r.x,s.x,a.x),Oa(e,r.y,s.y,a.y),Oa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $x extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(i0(o,l.x,c.x,u.x,d.x),i0(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var kf=Object.freeze({__proto__:null,ArcCurve:v1,CatmullRomCurve3:Of,CubicBezierCurve:Wx,CubicBezierCurve3:T1,EllipseCurve:Jd,LineCurve:Xx,LineCurve3:A1,QuadraticBezierCurve:Yx,QuadraticBezierCurve3:qx,SplineCurve:$x});class b1 extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new kf[r.type]().fromJSON(r))}return this}}class r0 extends b1{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Xx(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Yx(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Wx(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new $x(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new Jd(e,t,i,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zx extends r0{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new r0().fromJSON(r))}return this}}function C1(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Kx(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=D1(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<r;h+=t){const p=n[h],v=n[h+1];p<o&&(o=p),v<l&&(l=v),p>u&&(u=p),v>d&&(d=v)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return co(s,a,t,o,l,c,0),a}function Kx(n,e,t,i,r){let s;if(r===W1(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=s0(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=s0(a/i|0,n[a],n[a+1],s);return s&&Ys(s,s.next)&&(ho(s),s=s.next),s}function Wr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ys(t,t.next)||Tt(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function co(n,e,t,i,r,s,a){if(!n)return;!a&&s&&k1(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?P1(n,i,r,s):R1(n)){e.push(l.i,n.i,c.i),ho(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=L1(Wr(n),e),co(n,e,t,i,r,s,2)):a===2&&N1(n,e,t,i,r,s):co(Wr(n),e,t,i,r,s,1);break}}}function R1(n){const e=n.prev,t=n,i=n.next;if(Tt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),d=Math.min(o,l,c),h=Math.max(r,s,a),p=Math.max(o,l,c);let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=p&&wa(r,o,s,l,a,c,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function P1(n,e,t,i){const r=n.prev,s=n,a=n.next;if(Tt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,d=s.y,h=a.y,p=Math.min(o,l,c),v=Math.min(u,d,h),M=Math.max(o,l,c),g=Math.max(u,d,h),f=Bf(p,v,e,t,i),m=Bf(M,g,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=f&&x&&x.z<=m;){if(y.x>=p&&y.x<=M&&y.y>=v&&y.y<=g&&y!==r&&y!==a&&wa(o,u,l,d,c,h,y.x,y.y)&&Tt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=M&&x.y>=v&&x.y<=g&&x!==r&&x!==a&&wa(o,u,l,d,c,h,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=M&&y.y>=v&&y.y<=g&&y!==r&&y!==a&&wa(o,u,l,d,c,h,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=m;){if(x.x>=p&&x.x<=M&&x.y>=v&&x.y<=g&&x!==r&&x!==a&&wa(o,u,l,d,c,h,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function L1(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ys(i,r)&&Jx(i,t,t.next,r)&&uo(i,r)&&uo(r,i)&&(e.push(i.i,t.i,r.i),ho(t),ho(t.next),t=n=r),t=t.next}while(t!==n);return Wr(t)}function N1(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H1(a,o)){let l=Qx(a,o);a=Wr(a,a.next),l=Wr(l,l.next),co(a,e,t,i,r,s,0),co(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function D1(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Kx(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(z1(c))}r.sort(I1);for(let s=0;s<r.length;s++)t=U1(r[s],t);return t}function I1(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function U1(n,e){const t=F1(n,e);if(!t)return e;const i=Qx(t,n);return Wr(i,i.next),Wr(t,t.next)}function F1(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(Ys(n,t))return t;do{if(Ys(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&jx(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);uo(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&O1(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function O1(n,e){return Tt(n.prev,n,e.prev)<0&&Tt(e.next,n,n.next)<0}function k1(n,e,t,i){let r=n;do r.z===0&&(r.z=Bf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,B1(r)}function B1(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Bf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function z1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jx(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function wa(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&jx(n,e,t,i,r,s,a,o)}function H1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!V1(n,e)&&(uo(n,e)&&uo(e,n)&&G1(n,e)&&(Tt(n.prev,n,e.prev)||Tt(n,e.prev,e))||Ys(n,e)&&Tt(n.prev,n,n.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ys(n,e){return n.x===e.x&&n.y===e.y}function Jx(n,e,t,i){const r=ll(Tt(n,e,t)),s=ll(Tt(n,e,i)),a=ll(Tt(t,i,n)),o=ll(Tt(t,i,e));return!!(r!==s&&a!==o||r===0&&ol(n,t,e)||s===0&&ol(n,i,e)||a===0&&ol(t,n,i)||o===0&&ol(t,e,i))}function ol(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ll(n){return n>0?1:n<0?-1:0}function V1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jx(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function uo(n,e){return Tt(n.prev,n,n.next)<0?Tt(n,e,n.next)>=0&&Tt(n,n.prev,e)>=0:Tt(n,e,n.prev)<0||Tt(n,n.next,e)<0}function G1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Qx(n,e){const t=zf(n.i,n.x,n.y),i=zf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function s0(n,e,t,i){const r=zf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ho(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W1(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class X1{static triangulate(e,t,i=2){return C1(e,t,i)}}class Ba{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ba.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];a0(e),o0(i,e);let a=e.length;t.forEach(a0);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,o0(i,t[l]);const o=X1.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function a0(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function o0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ep extends jd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ep(e.radius,e.detail)}}class ar extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],M=[],g=[];for(let f=0;f<u;f++){const m=f*h-a;for(let y=0;y<c;y++){const x=y*d-s;v.push(x,-m,0),M.push(0,0,1),g.push(y/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const y=m+c*f,x=m+c*(f+1),w=m+1+c*(f+1),T=m+1+c*f;p.push(y,x,T),p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class _c extends Nt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/r,p=new P,v=new pe;for(let M=0;M<=r;M++){for(let g=0;g<=i;g++){const f=s+g/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}d+=h}for(let M=0;M<r;M++){const g=M*(i+1);for(let f=0;f<i;f++){const m=f+g,y=m,x=m+i+1,w=m+i+2,T=m+1;o.push(y,x,T),o.push(x,w,T)}}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tp extends Nt{constructor(e=new Zx([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(a,2));function c(u){const d=r.length/3,h=u.extractPoints(t);let p=h.shape;const v=h.holes;Ba.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=v.length;g<f;g++){const m=v[g];Ba.isClockWise(m)===!0&&(v[g]=m.reverse())}const M=Ba.triangulateShape(p,v);for(let g=0,f=v.length;g<f;g++){const m=v[g];p=p.concat(m)}for(let g=0,f=p.length;g<f;g++){const m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let g=0,f=M.length;g<f;g++){const m=M[g],y=m[0]+d,x=m[1]+d,w=m[2]+d;i.push(y,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Y1(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new tp(i,e.curveSegments)}}function Y1(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class yc extends Nt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],v=[],M=[],g=[];for(let f=0;f<=i;f++){const m=[],y=f/i,x=a+y*o,w=e*Math.cos(x),T=Math.sqrt(e*e-w*w);let b=0;f===0&&a===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let _=0;_<=t;_++){const A=_/t,C=r+A*s;d.x=-T*Math.cos(C),d.y=w,d.z=T*Math.sin(C),v.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),g.push(A+b,1-y),m.push(c++)}u.push(m)}for(let f=0;f<i;f++)for(let m=0;m<t;m++){const y=u[f][m+1],x=u[f][m],w=u[f+1][m],T=u[f+1][m+1];(f!==0||a>0)&&p.push(y,x,T),(f!==i-1||l<Math.PI)&&p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class np extends Nt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],d=[],h=new P,p=new P,v=new P;for(let M=0;M<=i;M++){const g=a+M/i*o;for(let f=0;f<=r;f++){const m=f/r*s;p.x=(e+t*Math.cos(g))*Math.cos(m),p.y=(e+t*Math.cos(g))*Math.sin(m),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),v.subVectors(p,h).normalize(),u.push(v.x,v.y,v.z),d.push(f/r),d.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=r;g++){const f=(r+1)*M+g-1,m=(r+1)*(M-1)+g-1,y=(r+1)*(M-1)+g,x=(r+1)*M+g;l.push(f,m,x),l.push(m,y,x)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Sc extends Nt{constructor(e=new qx(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new pe;let u=new P;const d=[],h=[],p=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(p,2));function M(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),m(),f()}function g(y){u=e.getPointAt(y/t,u);const x=a.normals[y],w=a.binormals[y];for(let T=0;T<=r;T++){const b=T/r*Math.PI*2,_=Math.sin(b),A=-Math.cos(b);l.x=A*x.x+_*w.x,l.y=A*x.y+_*w.y,l.z=A*x.z+_*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){const w=(r+1)*(y-1)+(x-1),T=(r+1)*y+(x-1),b=(r+1)*y+x,_=(r+1)*(y-1)+x;v.push(w,T,_),v.push(T,b,_)}}function m(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)c.x=y/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sc(new kf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(l0(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(l0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=qs(n[t]);for(const r in i)e[r]=i[r]}return e}function l0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function q1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function e_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const $1={clone:qs,merge:ln};var Z1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new pe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new P().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class j1 extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pn extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J1 extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q1 extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ew extends Vc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Zu=new St,c0=new P,u0=new P;class t_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;c0.setFromMatrixPosition(e.matrixWorld),t.position.copy(c0),u0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Zu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cl=new P,ul=new js,ri=new P;class n_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,ul,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,ul,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(cl,ul,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,ul,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new P,h0=new pe,f0=new pe;class vn extends n_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,h0,f0),t.subVectors(f0,h0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tw extends t_{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class d0 extends Vc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ip extends n_{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nw extends t_{constructor(){super(new ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iw extends Vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new nw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rw extends Vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fs=-90,ds=1;class sw extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(fs,ds,e,t);r.layers=this.layers,this.add(r);const s=new vn(fs,ds,e,t);s.layers=this.layers,this.add(s);const a=new vn(fs,ds,e,t);a.layers=this.layers,this.add(a);const o=new vn(fs,ds,e,t);o.layers=this.layers,this.add(o);const l=new vn(fs,ds,e,t);l.layers=this.layers,this.add(l);const c=new vn(fs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class aw extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let ow=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};const lp=class lp{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};lp.prototype.isMatrix2=!0;let p0=lp;class lw extends m1{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,p=0,v=-o;h<=t;h++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const M=h===s?i:r;M.toArray(c,p),p+=3,M.toArray(c,p),p+=3,M.toArray(c,p),p+=3,M.toArray(c,p),p+=3}const u=new Nt;u.setAttribute("position",new We(l,3)),u.setAttribute("color",new We(c,3));const d=new Hx({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function m0(n,e,t,i){const r=cw(i);switch(t){case Cx:return n*e;case Px:return n*e/r.components*r.byteLength;case Hd:return n*e/r.components*r.byteLength;case Gr:return n*e*2/r.components*r.byteLength;case Vd:return n*e*2/r.components*r.byteLength;case Rx:return n*e*3/r.components*r.byteLength;case Kn:return n*e*4/r.components*r.byteLength;case Gd:return n*e*4/r.components*r.byteLength;case Dl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case of:case cf:return Math.max(n,16)*Math.max(e,8)/4;case af:case lf:return Math.max(n,8)*Math.max(e,8)/2;case uf:case hf:case df:case pf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ff:case lc:case mf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Af:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pf:case Lf:case Nf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Df:case If:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case Uf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cw(n){switch(n){case An:case Ex:return{byteLength:1,components:1};case ro:case Tx:case xi:return{byteLength:2,components:1};case Bd:case zd:return{byteLength:2,components:4};case vi:case kd:case ui:return{byteLength:4,components:1};case Ax:case bx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i_(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uw(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],M=d[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const M=d[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_w=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ww=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ew=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Iw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_T=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:hw,alphahash_pars_fragment:fw,alphamap_fragment:dw,alphamap_pars_fragment:pw,alphatest_fragment:mw,alphatest_pars_fragment:gw,aomap_fragment:vw,aomap_pars_fragment:xw,batching_pars_vertex:_w,batching_vertex:yw,begin_vertex:Sw,beginnormal_vertex:Mw,bsdfs:ww,iridescence_fragment:Ew,bumpmap_pars_fragment:Tw,clipping_planes_fragment:Aw,clipping_planes_pars_fragment:bw,clipping_planes_pars_vertex:Cw,clipping_planes_vertex:Rw,color_fragment:Pw,color_pars_fragment:Lw,color_pars_vertex:Nw,color_vertex:Dw,common:Iw,cube_uv_reflection_fragment:Uw,defaultnormal_vertex:Fw,displacementmap_pars_vertex:Ow,displacementmap_vertex:kw,emissivemap_fragment:Bw,emissivemap_pars_fragment:zw,colorspace_fragment:Hw,colorspace_pars_fragment:Vw,envmap_fragment:Gw,envmap_common_pars_fragment:Ww,envmap_pars_fragment:Xw,envmap_pars_vertex:Yw,envmap_physical_pars_fragment:iE,envmap_vertex:qw,fog_vertex:$w,fog_pars_vertex:Zw,fog_fragment:Kw,fog_pars_fragment:jw,gradientmap_pars_fragment:Jw,lightmap_pars_fragment:Qw,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:aE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:hE,lights_fragment_end:fE,lightprobes_pars_fragment:dE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:_E,map_particle_fragment:yE,map_particle_pars_fragment:SE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:wE,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:bE,morphtarget_vertex:CE,normal_fragment_begin:RE,normal_fragment_maps:PE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:DE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:OE,iridescence_pars_fragment:kE,opaque_fragment:BE,packing:zE,premultiplied_alpha_fragment:HE,project_vertex:VE,dithering_fragment:GE,dithering_pars_fragment:WE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:$E,shadowmap_vertex:ZE,shadowmask_pars_fragment:KE,skinbase_vertex:jE,skinning_pars_vertex:JE,skinning_vertex:QE,skinnormal_vertex:eT,specularmap_fragment:tT,specularmap_pars_fragment:nT,tonemapping_fragment:iT,tonemapping_pars_fragment:rT,transmission_fragment:sT,transmission_pars_fragment:aT,uv_pars_fragment:oT,uv_pars_vertex:lT,uv_vertex:cT,worldpos_vertex:uT,background_vert:hT,background_frag:fT,backgroundCube_vert:dT,backgroundCube_frag:pT,cube_vert:mT,cube_frag:gT,depth_vert:vT,depth_frag:xT,distance_vert:_T,distance_frag:yT,equirect_vert:ST,equirect_frag:MT,linedashed_vert:wT,linedashed_frag:ET,meshbasic_vert:TT,meshbasic_frag:AT,meshlambert_vert:bT,meshlambert_frag:CT,meshmatcap_vert:RT,meshmatcap_frag:PT,meshnormal_vert:LT,meshnormal_frag:NT,meshphong_vert:DT,meshphong_frag:IT,meshphysical_vert:UT,meshphysical_frag:FT,meshtoon_vert:OT,meshtoon_frag:kT,points_vert:BT,points_frag:zT,shadow_vert:HT,shadow_frag:VT,sprite_vert:GT,sprite_frag:WT},de={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},li={basic:{uniforms:ln([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:ln([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:ln([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:ln([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:ln([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:ln([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:ln([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:ln([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:ln([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:ln([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:ln([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:ln([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:ln([de.lights,de.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};li.physical={uniforms:ln([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const hl={r:0,b:0,g:0},XT=new St,r_=new Ie;r_.set(-1,0,0,0,1,0,0,0,1);function YT(n,e,t,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const x=m.backgroundBlurriness>0;y=e.get(y,x)}return y}function v(m){let y=!1;const x=p(m);x===null?g(a,o):x&&x.isColor&&(g(x,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(m,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===Bc)?(c===void 0&&(c=new rt(new Js(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:qs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(r_),c.material.toneMapped=je.getTransfer(x.colorSpace)!==ot,(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rt(new ar(2,2),new _i({name:"BackgroundMaterial",uniforms:qs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(hl,e_(n)),t.buffers.color.setClear(hl.r,hl.g,hl.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:v,addToRenderList:M,dispose:f}}function qT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(L,F,z,O,G){let ee=!1;const $=d(L,O,z,F);s!==$&&(s=$,c(s.object)),ee=p(L,O,z,G),ee&&v(L,O,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,x(L,F,z,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,F,z,O){const G=O.wireframe===!0;let ee=i[F.id];ee===void 0&&(ee={},i[F.id]=ee);const $=L.isInstancedMesh===!0?L.id:0;let H=ee[$];H===void 0&&(H={},ee[$]=H);let B=H[z.id];B===void 0&&(B={},H[z.id]=B);let q=B[G];return q===void 0&&(q=h(l()),B[G]=q),q}function h(L){const F=[],z=[],O=[];for(let G=0;G<t;G++)F[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:O,object:L,attributes:{},index:null}}function p(L,F,z,O){const G=s.attributes,ee=F.attributes;let $=0;const H=z.getAttributes();for(const B in H)if(H[B].location>=0){const J=G[B];let he=ee[B];if(he===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;$++}return s.attributesNum!==$||s.index!==O}function v(L,F,z,O){const G={},ee=F.attributes;let $=0;const H=z.getAttributes();for(const B in H)if(H[B].location>=0){let J=ee[B];J===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),G[B]=he,$++}s.attributes=G,s.attributesNum=$,s.index=O}function M(){const L=s.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function g(L){f(L,0)}function f(L,F){const z=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;z[L]=1,O[L]===0&&(n.enableVertexAttribArray(L),O[L]=1),G[L]!==F&&(n.vertexAttribDivisor(L,F),G[L]=F)}function m(){const L=s.newAttributes,F=s.enabledAttributes;for(let z=0,O=F.length;z<O;z++)F[z]!==L[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function y(L,F,z,O,G,ee,$){$===!0?n.vertexAttribIPointer(L,F,z,G,ee):n.vertexAttribPointer(L,F,z,O,G,ee)}function x(L,F,z,O){M();const G=O.attributes,ee=z.getAttributes(),$=F.defaultAttributeValues;for(const H in ee){const B=ee[H];if(B.location>=0){let q=G[H];if(q===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const J=q.normalized,he=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const qe=Se.buffer,Be=Se.type,Ue=Se.bytesPerElement,K=Be===n.INT||Be===n.UNSIGNED_INT||q.gpuType===kd;if(q.isInterleavedBufferAttribute){const ne=q.data,_e=ne.stride,De=q.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<B.locationSize;xe++)f(B.location+xe,ne.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe,he/B.locationSize,Be,J,_e*Ue,(De+he/B.locationSize*xe)*Ue,K)}else{if(q.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)f(B.location+ne,q.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ne=0;ne<B.locationSize;ne++)y(B.location+ne,he/B.locationSize,Be,J,he*Ue,he/B.locationSize*ne*Ue,K)}}else if($!==void 0){const J=$[H];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(B.location,J);break;case 3:n.vertexAttrib3fv(B.location,J);break;case 4:n.vertexAttrib4fv(B.location,J);break;default:n.vertexAttrib1fv(B.location,J)}}}}m()}function w(){A();for(const L in i){const F=i[L];for(const z in F){const O=F[z];for(const G in O){const ee=O[G];for(const $ in ee)u(ee[$].object),delete ee[$];delete O[G]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const z in F){const O=F[z];for(const G in O){const ee=O[G];for(const $ in ee)u(ee[$].object),delete ee[$];delete O[G]}}delete i[L.id]}function b(L){for(const F in i){const z=i[F];for(const O in z){const G=z[O];if(G[L.id]===void 0)continue;const ee=G[L.id];for(const $ in ee)u(ee[$].object),delete ee[$];delete G[L.id]}}}function _(L){for(const F in i){const z=i[F],O=L.isInstancedMesh===!0?L.id:0,G=z[O];if(G!==void 0){for(const ee in G){const $=G[ee];for(const H in $)u($[H].object),delete $[H];delete G[ee]}delete z[O],Object.keys(z).length===0&&delete i[F]}}}function A(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function $T(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ZT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Kn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const _=b===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==An&&b!==ui&&!_&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,maxSamples:w,samples:T}}function KT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new er,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,y=m*4;let x=f.clippingState||null;l.value=x,x=u(v,h,y,p);for(let w=0;w!==y;++w)x[w]=t[w];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const f=p+M*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,x=p;y!==M;++y,x+=4)a.copy(d[y]).applyMatrix4(m,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Rs=4,jT=6,JT=20,QT=256,ga=new ip,g0=new Ge;let Ku=null,ju=0,Ju=0,Qu=!1;const eA=new P,Ar=new P;class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=eA}=s;Ku=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,ju,Ju),this._renderer.xr.enabled=Qu,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:xi,format:Kn,colorSpace:uc,depthBuffer:!1},r=x0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tA(s)),this._blurMaterial=iA(s,e,t),this._ggxMaterial=nA(s,e,t)}return r}_compileMaterial(e){const t=new rt(new Nt,e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,r,s){const l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(g0),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Js,new bi({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(g0),f=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const w=this._cubeSize;ps(r,x*w,y>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vr||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-Rs?i-v+Rs:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,ps(s,g,f,3*M,2*M),r.setRenderTarget(s),r.render(o,ga),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ps(e,g,f,3*M,2*M),r.setRenderTarget(e),r.render(o,ga)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-Rs?r-this._lodMax+Rs:0),h=4*(this._cubeSize-u);ps(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,ga)}}function tA(n){const e=[],t=[];let i=n;const r=n-Rs+1+jT;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,v=new Float32Array(p*h*d),M=new Float32Array(p*h*d);for(let f=0;f<d;f++){const m=f%3*2/3-1,y=f>2?0:-1,x=[m,y,0,m+2/3,y,0,m+2/3,y+1,0,m,y,0,m+2/3,y+1,0,m,y+1,0];v.set(x,p*h*f);for(let w=0;w<h;w++){const T=u[w*2]*2-1,b=u[w*2+1]*2-1;f===0?Ar.set(1,b,T):f===1?Ar.set(-T,1,-b):f===2?Ar.set(-T,b,1):f===3?Ar.set(-1,b,-T):f===4?Ar.set(-T,-1,b):Ar.set(T,b,-1),Ar.toArray(M,(f*h+w)*p)}}const g=new Nt;g.setAttribute("position",new gi(v,p)),g.setAttribute("outputDirection",new gi(M,p)),t.push(new rt(g,null)),i>Rs&&i--}return{lodMeshes:t,sizeLods:e}}function x0(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nA(n,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function iA(n,e,t){return new _i({name:"SphericalGaussianBlur",defines:{SAMPLES:JT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function _0(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function y0(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class s_ extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vx(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Js(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Di});s.uniforms.tEquirect.value=t;const a=new rt(r,s),o=t.minFilter;return t.minFilter===Nr&&(t.minFilter=nn),new sw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function rA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===_u||p===yu)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const M=new s_(v.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,v=p===_u||p===yu,M=p===Vr||p===Xs;if(v||M){let g=t.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new v0(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const m=h.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new v0(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===_u?h.mapping=Vr:p===yu&&(h.mapping=Xs),h}function l(h){let p=0;const v=6;for(let M=0;M<v;M++)h[M]!==void 0&&p++;return p===v}function c(h){const p=h.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function sA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fs("WebGLRenderer: "+i+" extension not supported."),r}}}function aA(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let y=0,x=m.length;y<x;y+=3){const w=m[y+0],T=m[y+1],b=m[y+2];h.push(w,T,T,b,b,w)}}else{const m=v.array;M=v.version;for(let y=0,x=m.length/3-1;y<x;y+=3){const w=y+0,T=y+1,b=y+2;h.push(w,T,T,b,b,w)}}const g=new(v.count>=65535?Ox:Fx)(h,1);g.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function oA(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,d*a,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,p);let M=0;for(let g=0;g<p;g++)M+=h[g];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cA(n,e,t){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),g===!0&&(x=3);let w=o.attributes.position.count*x,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*d),_=new Dx(b,w,T,d);_.type=ui,_.needsUpdate=!0;const A=x*4;for(let L=0;L<d;L++){const F=f[L],z=m[L],O=y[L],G=w*T*4*L;for(let ee=0;ee<F.count;ee++){const $=ee*A;v===!0&&(r.fromBufferAttribute(F,ee),b[G+$+0]=r.x,b[G+$+1]=r.y,b[G+$+2]=r.z,b[G+$+3]=0),M===!0&&(r.fromBufferAttribute(z,ee),b[G+$+4]=r.x,b[G+$+5]=r.y,b[G+$+6]=r.z,b[G+$+7]=0),g===!0&&(r.fromBufferAttribute(O,ee),b[G+$+8]=r.x,b[G+$+9]=r.y,b[G+$+10]=r.z,b[G+$+11]=O.itemSize===4?r.w:1)}}h={count:d,texture:_,size:new pe(w,T)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function uA(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const hA={[gx]:"LINEAR_TONE_MAPPING",[vx]:"REINHARD_TONE_MAPPING",[xx]:"CINEON_TONE_MAPPING",[_x]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function fA(n,e,t,i,r,s){const a=new Qn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Nt;c.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new We([0,2,0,0,2,0],2));const u=new j1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new rt(c,u),h=new ip(-1,1,1,-1,0,1);let p=null,v=null,M=!1,g,f=null,m=[],y=!1;this.setSize=function(x,w){a.setSize(x,w),o!==null&&o.setSize(x,w),l!==null&&l.setSize(x,w);for(let T=0;T<m.length;T++){const b=m[T];b.setSize&&b.setSize(x,w)}},this.setEffects=function(x){m=x,y=m.length>0&&m[0].isRenderPass===!0;const w=a.width,T=a.height;m.length>0&&o===null&&(o=new Qn(w,T,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(w,T,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<m.length;b++){const _=m[b];_.setSize&&_.setSize(w,T)}},this.begin=function(x,w){if(M||x.toneMapping===pi&&m.length===0)return!1;if(f=w,w!==null){const T=w.width,b=w.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return y===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return y},this.end=function(x,w){x.toneMapping=g,M=!0;let T=a,b=o;for(let _=0;_<m.length;_++){const A=m[_];A.enabled!==!1&&(A.render(x,b,T,w),A.needsSwap!==!1&&(T=b,b=b===o?l:o))}if(p!==x.outputColorSpace||v!==x.toneMapping){p=x.outputColorSpace,v=x.toneMapping,u.defines={},je.getTransfer(p)===ot&&(u.defines.SRGB_TRANSFER="");const _=hA[v];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(f),x.render(d,h),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const a_=new rn,Hf=new lo(1,1),o_=new Dx,l_=new $M,c_=new Vx,S0=[],M0=[],w0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=S0[r];if(s===void 0&&(s=new Float32Array(r),S0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wc(n,e){let t=M0[e];t===void 0&&(t=new Int32Array(e),M0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function vA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;T0.set(i),n.uniformMatrix2fv(this.addr,!1,T0),zt(t,i)}}function xA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),zt(t,i)}}function _A(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;w0.set(i),n.uniformMatrix4fv(this.addr,!1,w0),zt(t,i)}}function yA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function EA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function bA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function CA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hf.compareFunction=t.isReversedDepthBuffer()?Xd:Wd,s=Hf):s=a_,t.setTexture2D(e||s,r)}function RA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||l_,r)}function PA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||c_,r)}function LA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||o_,r)}function NA(n){switch(n){case 5126:return dA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return xA;case 35676:return _A;case 5124:case 35670:return yA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return wA;case 5125:return EA;case 36294:return TA;case 36295:return AA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return LA}}function DA(n,e){n.uniform1fv(this.addr,e)}function IA(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function UA(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function FA(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function OA(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kA(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BA(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zA(n,e){n.uniform1iv(this.addr,e)}function HA(n,e){n.uniform2iv(this.addr,e)}function VA(n,e){n.uniform3iv(this.addr,e)}function GA(n,e){n.uniform4iv(this.addr,e)}function WA(n,e){n.uniform1uiv(this.addr,e)}function XA(n,e){n.uniform2uiv(this.addr,e)}function YA(n,e){n.uniform3uiv(this.addr,e)}function qA(n,e){n.uniform4uiv(this.addr,e)}function $A(n,e,t){const i=this.cache,r=e.length,s=Wc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Hf:a=a_;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function ZA(n,e,t){const i=this.cache,r=e.length,s=Wc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||l_,s[a])}function KA(n,e,t){const i=this.cache,r=e.length,s=Wc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||c_,s[a])}function jA(n,e,t){const i=this.cache,r=e.length,s=Wc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||o_,s[a])}function JA(n){switch(n){case 5126:return DA;case 35664:return IA;case 35665:return UA;case 35666:return FA;case 35674:return OA;case 35675:return kA;case 35676:return BA;case 5124:case 35670:return zA;case 35667:case 35671:return HA;case 35668:case 35672:return VA;case 35669:case 35673:return GA;case 5125:return WA;case 36294:return XA;case 36295:return YA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return jA}}class QA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NA(t.type)}}class eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JA(t.type)}}class tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function A0(n,e){n.seq.push(e),n.map[e.id]=e}function nb(n,e,t){const i=n.name,r=i.length;for(eh.lastIndex=0;;){const s=eh.exec(i),a=eh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){A0(t,c===void 0?new QA(o,n,e):new eb(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new tb(o),A0(t,d)),t=d}}}class Ol{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function b0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ib=37297;let rb=0;function sb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const C0=new Ie;function ab(n){je._getMatrix(C0,je.workingColorSpace,n);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case hc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function R0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sb(n.getShaderSource(e),o)}else return s}function ob(n,e){const t=ab(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lb={[gx]:"Linear",[vx]:"Reinhard",[xx]:"Cineon",[_x]:"ACESFilmic",[Sx]:"AgX",[Mx]:"Neutral",[yx]:"Custom"};function cb(n,e){const t=lb[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fl=new P;function ub(){je.getLuminanceCoefficients(fl);const n=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function fb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function db(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ea(n){return n!==""}function P0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(n){return n.replace(pb,gb)}const mb=new Map;function gb(n,e){let t=Ve[e];if(t===void 0){const i=mb.get(e);if(i!==void 0)t=Ve[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vf(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(n){return n.replace(vb,xb)}function xb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function D0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _b={[Nl]:"SHADOWMAP_TYPE_PCF",[Ma]:"SHADOWMAP_TYPE_VSM"};function yb(n){return _b[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sb={[Vr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function Mb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Sb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const wb={[Xs]:"ENVMAP_MODE_REFRACTION"};function Eb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tb={[mx]:"ENVMAP_BLENDING_MULTIPLY",[hM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function Ab(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Tb[n.combine]||"ENVMAP_BLENDING_NONE"}function bb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yb(t),c=Mb(t),u=Eb(t),d=Ab(t),h=bb(t),p=hb(t),v=fb(s),M=r.createProgram();let g,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ea).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ea).join(`
`),f.length>0&&(f+=`
`)):(g=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),f=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==pi?cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ob("linearToOutputTexel",t.outputColorSpace),ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=Vf(a),a=P0(a,t),a=L0(a,t),o=Vf(o),o=P0(o,t),o=L0(o,t),a=N0(a),o=N0(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=m+g+a,x=m+f+o,w=b0(r,r.VERTEX_SHADER,y),T=b0(r,r.FRAGMENT_SHADER,x);r.attachShader(M,w),r.attachShader(M,T),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",z=r.getShaderInfoLog(w)||"",O=r.getShaderInfoLog(T)||"",G=F.trim(),ee=z.trim(),$=O.trim();let H=!0,B=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,w,T);else{const q=R0(r,w,"vertex"),J=R0(r,T,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+q+`
`+J)}else G!==""?Ne("WebGLProgram: Program Info Log:",G):(ee===""||$==="")&&(B=!1);B&&(L.diagnostics={runnable:H,programLog:G,vertexShader:{log:ee,prefix:g},fragmentShader:{log:$,prefix:f}})}r.deleteShader(w),r.deleteShader(T),_=new Ol(r,M),A=db(r,M)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(M,ib)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let Rb=0;class Pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lb(e),t.set(e,i)),i}}class Lb{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function Nb(n){return n===Gr||n===lc||n===cc}function Db(n,e,t,i,r,s){const a=new Ix,o=new Pb,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,C,L,F,z){const O=L.fog,G=F.geometry,ee=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||ee,$),B=H&&H.mapping===Bc?H.image.height:null,q=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=J!==void 0?J.length:0;let Se=0;G.morphAttributes.position!==void 0&&(Se=1),G.morphAttributes.normal!==void 0&&(Se=2),G.morphAttributes.color!==void 0&&(Se=3);let qe,Be,Ue,K;if(q){const pt=li[q];qe=pt.vertexShader,Be=pt.fragmentShader}else{qe=_.vertexShader,Be=_.fragmentShader;const pt=o.getVertexShaderStage(_),nt=o.getFragmentShaderStage(_);o.update(_,pt,nt),Ue=pt.id,K=nt.id}const ne=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Oe=!!_.map,vt=!!_.matcap,ze=!!H,Ke=!!_.aoMap,st=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,ht=!!_.normalMap,Ct=!!_.displacementMap,Zt=!!_.emissiveMap,at=!!_.metalnessMap,dt=!!_.roughnessMap,U=_.anisotropy>0,Ht=_.clearcoat>0,tt=_.dispersion>0,R=_.retroreflectivity>0,S=_.iridescence>0,k=_.sheen>0,Y=_.transmission>0,j=U&&!!_.anisotropyMap,se=Ht&&!!_.clearcoatMap,oe=Ht&&!!_.clearcoatNormalMap,N=Ht&&!!_.clearcoatRoughnessMap,Q=S&&!!_.iridescenceMap,ae=S&&!!_.iridescenceThicknessMap,Ee=k&&!!_.sheenColorMap,fe=k&&!!_.sheenRoughnessMap,le=!!_.specularMap,Re=!!_.specularColorMap,Le=!!_.specularIntensityMap,Fe=Y&&!!_.transmissionMap,I=Y&&!!_.thicknessMap,ce=!!_.gradientMap,te=!!_.alphaMap,ue=_.alphaTest>0,ve=!!_.alphaHash,ie=!!_.extensions;let Pe=pi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const be={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:Be,defines:_.defines,customVertexShaderID:Ue,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:vt,envMap:ze,envMapMode:ze&&H.mapping,envMapCubeUVHeight:B,aoMap:Ke,lightMap:st,bumpMap:ke,normalMap:ht,displacementMap:Ct,emissiveMap:Zt,normalMapObjectSpace:ht&&_.normalMapType===mM,normalMapTangentSpace:ht&&_.normalMapType===Ff,packedNormalMap:ht&&_.normalMapType===Ff&&Nb(_.normalMap.format),metalnessMap:at,roughnessMap:dt,anisotropy:U,anisotropyMap:j,clearcoat:Ht,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:N,dispersion:tt,retroreflection:R,iridescence:S,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:fe,specularMap:le,specularColorMap:Re,specularIntensityMap:Le,transmission:Y,transmissionMap:Fe,thicknessMap:I,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Ia&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:ue,alphaHash:ve,combine:_.combine,mapUv:Oe&&v(_.map.channel),aoMapUv:Ke&&v(_.aoMap.channel),lightMapUv:st&&v(_.lightMap.channel),bumpMapUv:ke&&v(_.bumpMap.channel),normalMapUv:ht&&v(_.normalMap.channel),displacementMapUv:Ct&&v(_.displacementMap.channel),emissiveMapUv:Zt&&v(_.emissiveMap.channel),metalnessMapUv:at&&v(_.metalnessMap.channel),roughnessMapUv:dt&&v(_.roughnessMap.channel),anisotropyMapUv:j&&v(_.anisotropyMap.channel),clearcoatMapUv:se&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(_.sheenRoughnessMap.channel),specularMapUv:le&&v(_.specularMap.channel),specularColorMapUv:Re&&v(_.specularColorMap.channel),specularIntensityMapUv:Le&&v(_.specularIntensityMap.channel),transmissionMapUv:Fe&&v(_.transmissionMap.channel),thicknessMapUv:I&&v(_.thicknessMap.channel),alphaMapUv:te&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ht||U),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Oe||te),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Se,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:Zt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(A,_),m(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function m(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const A=p[_.type];let C;if(A){const L=li[A];C=$1.clone(L.uniforms)}else C=_.uniforms;return C}function x(_,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new Cb(n,A,_,r),c.push(C),u.set(A,C)),C}function w(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function b(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:b}}function Ib(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ub(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function I0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function U0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,M,g,f){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:f},n[e]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=v,m.materialVariant=a(h),m.groupOrder=M,m.renderOrder=h.renderOrder,m.z=g,m.group=f),e++,m}function l(h,p,v,M,g,f,m){m.reversedDepth===!0&&(g=-g);const y=o(h,p,v,M,g,f);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):t.push(y)}function c(h,p,v,M,g,f){const m=o(h,p,v,M,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):t.unshift(m)}function u(h,p){t.length>1&&t.sort(h||Ub),i.length>1&&i.sort(p||I0),r.length>1&&r.sort(p||I0)}function d(){for(let h=e,p=n.length;h<p;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Fb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new U0,n.set(i,[a])):r>=s.length?(a=new U0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function kb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bb=0;function zb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hb(n){const e=new Ob,t=kb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new St,a=new St;function o(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,v=0,M=0,g=0,f=0,m=0,y=0,x=0,w=0,T=0,b=0,_=0,A=0,C=0;c.sort(zb);for(let F=0,z=c.length;F<z;F++){const O=c[F],G=O.color,ee=O.intensity,$=O.distance;let H=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Gr?H=O.shadow.map.texture:H=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=G.r*ee,d+=G.g*ee,h+=G.b*ee;else if(O.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(O.sh.coefficients[B],ee);C++}else if(O.isSunLight){const B=e.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const q=O.shadow,J=t.get(O);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[v]=J,i.sunShadowMap[v]=H;const he=q.getViewportCount();for(let Se=0;Se<he;Se++)i.sunShadowMatrix[M+Se]=q.getMatrix(Se),i.sunShadowCascade[M+Se]=q._cascadeData[Se];M+=he,v++}i.sun[p]=B,p++}else if(O.isDirectionalLight){const B=e.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const q=O.shadow,J=t.get(O);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=O.shadow.matrix,w++}i.directional[g]=B,g++}else if(O.isSpotLight){const B=e.get(O);B.position.setFromMatrixPosition(O.matrixWorld),B.color.copy(G).multiplyScalar(ee),B.distance=$,B.coneCos=Math.cos(O.angle),B.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),B.decay=O.decay,i.spot[m]=B;const q=O.shadow;if(O.map&&(i.spotLightMap[_]=O.map,_++,q.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[m]=q.matrix,O.castShadow){const J=t.get(O);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=H,b++}m++}else if(O.isRectAreaLight){const B=e.get(O);B.color.copy(G).multiplyScalar(ee),B.halfWidth.set(O.width*.5,0,0),B.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=B,y++}else if(O.isPointLight){const B=e.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity),B.distance=O.distance,B.decay=O.decay,O.castShadow){const q=O.shadow,J=t.get(O);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=O.shadow.matrix,T++}i.point[f]=B,f++}else if(O.isHemisphereLight){const B=e.get(O);B.skyColor.copy(O.color).multiplyScalar(ee),B.groundColor.copy(O.groundColor).multiplyScalar(ee),i.hemi[x]=B,x++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==f||L.spotLength!==m||L.rectAreaLength!==y||L.hemiLength!==x||L.numSunShadows!==v||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==b||L.numSpotMaps!==_||L.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=x,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.sunLength=p,L.directionalLength=g,L.pointLength=f,L.spotLength=m,L.rectAreaLength=y,L.hemiLength=x,L.numSunShadows=v,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=b,L.numSpotMaps=_,L.numLightProbes=C,i.version=Bb++)}function l(c,u){let d=0,h=0,p=0,v=0,M=0,g=0;const f=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),d++}else if(x.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),h++}else if(x.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),v++}else if(x.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function F0(n){const e=new Hb(n),t=[],i=[],r=[];function s(h){d.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Vb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new F0(n),e.set(r,[o])):s>=a.length?(o=new F0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Yb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],O0=new St,va=new P,th=new P;function qb(n,e,t){let i=new Zd;const r=new pe,s=new pe,a=new Et,o=new J1,l=new Q1,c={},u=t.maxTextureSize,d={[Hr]:Mn,[Mn]:Hr,[un]:un},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Gb,fragmentShader:Wb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Nt;v.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new rt(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let f=this.type;this.render=function(T,b,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===fx&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nl);const A=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Di),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=f!==this.type;z&&b.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(G=>G.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,G=T.length;O<G;O++){const ee=T[O],$=ee.shadow;if($===void 0){Ne("WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const H=$.getFrameExtents();r.multiply(H),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,$.mapSize.y=s.y));const B=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=B,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ma){if(ee.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Qn(r.x,r.y,{format:Gr,type:xi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),$.map.texture.name=ee.name+".shadowMap",$.map.depthTexture=new lo(r.x,r.y,ui),$.map.depthTexture.name=ee.name+".shadowMapDepth",$.map.depthTexture.format=Bi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Yt,$.map.depthTexture.magFilter=Yt}else ee.isPointLight?($.map=new s_(r.x),$.map.depthTexture=new g1(r.x,vi)):($.map=new Qn(r.x,r.y),$.map.depthTexture=new lo(r.x,r.y,vi)),$.map.depthTexture.name=ee.name+".shadowMap",$.map.depthTexture.format=Bi,this.type===Nl?($.map.depthTexture.compareFunction=B?Xd:Wd,$.map.depthTexture.minFilter=nn,$.map.depthTexture.magFilter=nn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Yt,$.map.depthTexture.magFilter=Yt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();ee.isPointLight!==!0&&$.updateMatrices(ee,_);for(let J=0;J<q;J++){const he=$.getCamera(J);if(ee.isPointLight){const Se=$.camera,qe=$.matrix,Be=ee.distance||Se.far;Be!==Se.far&&(Se.far=Be,Se.updateProjectionMatrix()),va.setFromMatrixPosition(ee.matrixWorld),Se.position.copy(va),th.copy(Se.position),th.add(Xb[J]),Se.up.copy(Yb[J]),Se.lookAt(th),Se.updateMatrixWorld(),qe.makeTranslation(-va.x,-va.y,-va.z),O0.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),$._frustum.setFromProjectionMatrix(O0,Se.coordinateSystem,Se.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,J),n.clear();else{J===0&&(n.setRenderTarget($.map),n.clear());const Se=$.getViewport(J);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),F.viewport(a)}i=$.getFrustum(J),x(b,_,he,ee,this.type)}$.isPointLightShadow!==!0&&this.type===Ma&&m($,_),$.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(A,C,L)};function m(T,b){const _=e.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qn(r.x,r.y,{format:Gr,type:xi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,_,h,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,_,p,M,null)}function y(T,b,_,A){let C=null;const L=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=C.uuid,z=b.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let G=O[z];G===void 0&&(G=C.clone(),O[z]=G,b.addEventListener("dispose",w)),C=G}if(C.visible=b.visible,C.wireframe=b.wireframe,A===Ma?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:d[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=n.properties.get(C);F.light=_}return C}function x(T,b,_,A,C){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ma)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const z=e.update(T),O=T.material;if(Array.isArray(O)){const G=z.groups;for(let ee=0,$=G.length;ee<$;ee++){const H=G[ee],B=O[H.materialIndex];if(B&&B.visible){const q=y(T,B,A,C);T.onBeforeShadow(n,T,b,_,z,q,H),n.renderBufferDirect(_,null,z,q,T,H),T.onAfterShadow(n,T,b,_,z,q,H)}}}else if(O.visible){const G=y(T,O,A,C);T.onBeforeShadow(n,T,b,_,z,G,null),n.renderBufferDirect(_,null,z,G,T,null),T.onAfterShadow(n,T,b,_,z,G,null)}}const F=T.children;for(let z=0,O=F.length;z<O;z++)x(F[z],b,_,A,C)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in c){const A=c[_],C=T.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function $b(n,e){function t(){let I=!1;const ce=new Et;let te=null;const ue=new Et(0,0,0,0);return{setMask:function(ve){te!==ve&&!I&&(n.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){I=ve},setClear:function(ve,ie,Pe,be,pt){pt===!0&&(ve*=be,ie*=be,Pe*=be),ce.set(ve,ie,Pe,be),ue.equals(ce)===!1&&(n.clearColor(ve,ie,Pe,be),ue.copy(ce))},reset:function(){I=!1,te=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,te=null,ue=null,ve=null;return{setReversed:function(ie){if(ce!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const be=ve;ve=null,this.setClear(be)}},getReversed:function(){return ce},setTest:function(ie){ie?ne(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ie){te!==ie&&!I&&(n.depthMask(ie),te=ie)},setFunc:function(ie){if(ce&&(ie=AM[ie]),ue!==ie){switch(ie){case Kh:n.depthFunc(n.NEVER);break;case jh:n.depthFunc(n.ALWAYS);break;case Jh:n.depthFunc(n.LESS);break;case io:n.depthFunc(n.LEQUAL);break;case Qh:n.depthFunc(n.EQUAL);break;case ef:n.depthFunc(n.GEQUAL);break;case tf:n.depthFunc(n.GREATER);break;case nf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ie}},setLocked:function(ie){I=ie},setClear:function(ie){ve!==ie&&(ve=ie,ce&&(ie=1-ie),n.clearDepth(ie))},reset:function(){I=!1,te=null,ue=null,ve=null,ce=!1}}}function r(){let I=!1,ce=null,te=null,ue=null,ve=null,ie=null,Pe=null,be=null,pt=null;return{setTest:function(nt){I||(nt?ne(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!I&&(n.stencilMask(nt),ce=nt)},setFunc:function(nt,Hn,ti){(te!==nt||ue!==Hn||ve!==ti)&&(n.stencilFunc(nt,Hn,ti),te=nt,ue=Hn,ve=ti)},setOp:function(nt,Hn,ti){(ie!==nt||Pe!==Hn||be!==ti)&&(n.stencilOp(nt,Hn,ti),ie=nt,Pe=Hn,be=ti)},setLocked:function(nt){I=nt},setClear:function(nt){pt!==nt&&(n.clearStencil(nt),pt=nt)},reset:function(){I=!1,ce=null,te=null,ue=null,ve=null,ie=null,Pe=null,be=null,pt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,v=[],M=null,g=!1,f=null,m=null,y=null,x=null,w=null,T=null,b=null,_=new Ge(0,0,0),A=0,C=!1,L=null,F=null,z=null,O=null,G=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),$=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),$=H>=2);let q=null,J={};const he=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),qe=new Et().fromArray(he),Be=new Et().fromArray(Se);function Ue(I,ce,te,ue){const ve=new Uint8Array(4),ie=n.createTexture();n.bindTexture(I,ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<te;Pe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ce+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ie}const K={};K[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(io),ke(!1),ht(Cm),ne(n.CULL_FACE),Ke(Di);function ne(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function _e(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function De(I,ce){return h[I]!==ce?(n.bindFramebuffer(I,ce),h[I]=ce,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function xe(I,ce){let te=v,ue=!1;if(I){te=p.get(ce),te===void 0&&(te=[],p.set(ce,te));const ve=I.textures;if(te.length!==ve.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Pe=ve.length;ie<Pe;ie++)te[ie]=n.COLOR_ATTACHMENT0+ie;te.length=ve.length,ue=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ue=!0);ue&&n.drawBuffers(te)}function Oe(I){return M!==I?(n.useProgram(I),M=I,!0):!1}const vt={[gs]:n.FUNC_ADD,[$S]:n.FUNC_SUBTRACT,[ZS]:n.FUNC_REVERSE_SUBTRACT};vt[KS]=n.MIN,vt[jS]=n.MAX;const ze={[JS]:n.ZERO,[QS]:n.ONE,[eM]:n.SRC_COLOR,[dx]:n.SRC_ALPHA,[aM]:n.SRC_ALPHA_SATURATE,[rM]:n.DST_COLOR,[nM]:n.DST_ALPHA,[tM]:n.ONE_MINUS_SRC_COLOR,[px]:n.ONE_MINUS_SRC_ALPHA,[sM]:n.ONE_MINUS_DST_COLOR,[iM]:n.ONE_MINUS_DST_ALPHA,[oM]:n.CONSTANT_COLOR,[lM]:n.ONE_MINUS_CONSTANT_COLOR,[cM]:n.CONSTANT_ALPHA,[uM]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(I,ce,te,ue,ve,ie,Pe,be,pt,nt){if(I===Di){g===!0&&(_e(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),I!==qS){if(I!==f||nt!==C){if((m!==gs||w!==gs)&&(n.blendEquation(n.FUNC_ADD),m=gs,w=gs),nt)switch(I){case Ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rm:n.blendFunc(n.ONE,n.ONE);break;case Pm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pm:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",I);break}y=null,x=null,T=null,b=null,_.set(0,0,0),A=0,f=I,C=nt}return}ve=ve||ce,ie=ie||te,Pe=Pe||ue,(ce!==m||ve!==w)&&(n.blendEquationSeparate(vt[ce],vt[ve]),m=ce,w=ve),(te!==y||ue!==x||ie!==T||Pe!==b)&&(n.blendFuncSeparate(ze[te],ze[ue],ze[ie],ze[Pe]),y=te,x=ue,T=ie,b=Pe),(be.equals(_)===!1||pt!==A)&&(n.blendColor(be.r,be.g,be.b,pt),_.copy(be),A=pt),f=I,C=!1}function st(I,ce){I.side===un?_e(n.CULL_FACE):ne(n.CULL_FACE);let te=I.side===Mn;ce&&(te=!te),ke(te),I.blending===Ia&&I.transparent===!1?Ke(Di):Ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function ht(I){I!==XS?(ne(n.CULL_FACE),I!==F&&(I===Cm?n.cullFace(n.BACK):I===YS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),F=I}function Ct(I){I!==z&&($&&n.lineWidth(I),z=I)}function Zt(I,ce,te){I?(ne(n.POLYGON_OFFSET_FILL),(O!==ce||G!==te)&&(O=ce,G=te,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,te))):_e(n.POLYGON_OFFSET_FILL)}function at(I){I?ne(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function dt(I){I===void 0&&(I=n.TEXTURE0+ee-1),q!==I&&(n.activeTexture(I),q=I)}function U(I,ce,te){te===void 0&&(q===null?te=n.TEXTURE0+ee-1:te=q);let ue=J[te];ue===void 0&&(ue={type:void 0,texture:void 0},J[te]=ue),(ue.type!==I||ue.texture!==ce)&&(q!==te&&(n.activeTexture(te),q=te),n.bindTexture(I,ce||K[I]),ue.type=I,ue.texture=ce)}function Ht(){const I=J[q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function S(){try{n.texSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function k(){try{n.texSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function se(){try{n.texStorage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function oe(){try{n.texStorage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function N(){try{n.texImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Q(){try{n.texImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ae(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function Ee(I,ce){d[I]!==ce&&(n.pixelStorei(I,ce),d[I]=ce)}function fe(I){qe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function le(I){Be.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function Re(I,ce){let te=c.get(ce);te===void 0&&(te=new WeakMap,c.set(ce,te));let ue=te.get(I);ue===void 0&&(ue=n.getUniformBlockIndex(ce,I.name),te.set(I,ue))}function Le(I,ce){const ue=c.get(ce).get(I);l.get(ce)!==ue&&(n.uniformBlockBinding(ce,ue,I.__bindingPointIndex),l.set(ce,ue))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,J={},h={},p=new WeakMap,v=[],M=null,g=!1,f=null,m=null,y=null,x=null,w=null,T=null,b=null,_=new Ge(0,0,0),A=0,C=!1,L=null,F=null,z=null,O=null,G=null,qe.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:_e,bindFramebuffer:De,drawBuffers:xe,useProgram:Oe,setBlending:Ke,setMaterial:st,setFlipSided:ke,setCullFace:ht,setLineWidth:Ct,setPolygonOffset:Zt,setScissorTest:at,activeTexture:dt,bindTexture:U,unbindTexture:Ht,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:N,texImage3D:Q,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:oe,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:fe,viewport:le,reset:Fe}}function Zb(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,S){return v?new OffscreenCanvas(R,S):fc("canvas")}function g(R,S,k){let Y=1;const j=tt(R);if((j.width>k||j.height>k)&&(Y=k/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(Y*j.width),oe=Math.floor(Y*j.height);h===void 0&&(h=M(se,oe));const N=S?M(se,oe):h;return N.width=se,N.height=oe,N.getContext("2d").drawImage(R,0,0,se,oe),Ne("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+se+"x"+oe+")."),N}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function f(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,S,k,Y,j,se=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe;Y&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=S;if(S===n.RED&&(k===n.FLOAT&&(N=n.R32F),k===n.HALF_FLOAT&&(N=n.R16F),k===n.UNSIGNED_BYTE&&(N=n.R8),k===n.UNSIGNED_SHORT&&oe&&(N=oe.R16_EXT),k===n.SHORT&&oe&&(N=oe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(N=n.R8UI),k===n.UNSIGNED_SHORT&&(N=n.R16UI),k===n.UNSIGNED_INT&&(N=n.R32UI),k===n.BYTE&&(N=n.R8I),k===n.SHORT&&(N=n.R16I),k===n.INT&&(N=n.R32I)),S===n.RG&&(k===n.FLOAT&&(N=n.RG32F),k===n.HALF_FLOAT&&(N=n.RG16F),k===n.UNSIGNED_BYTE&&(N=n.RG8),k===n.UNSIGNED_SHORT&&oe&&(N=oe.RG16_EXT),k===n.SHORT&&oe&&(N=oe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(N=n.RG8UI),k===n.UNSIGNED_SHORT&&(N=n.RG16UI),k===n.UNSIGNED_INT&&(N=n.RG32UI),k===n.BYTE&&(N=n.RG8I),k===n.SHORT&&(N=n.RG16I),k===n.INT&&(N=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(N=n.RGB8UI),k===n.UNSIGNED_SHORT&&(N=n.RGB16UI),k===n.UNSIGNED_INT&&(N=n.RGB32UI),k===n.BYTE&&(N=n.RGB8I),k===n.SHORT&&(N=n.RGB16I),k===n.INT&&(N=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(N=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(N=n.RGBA16UI),k===n.UNSIGNED_INT&&(N=n.RGBA32UI),k===n.BYTE&&(N=n.RGBA8I),k===n.SHORT&&(N=n.RGBA16I),k===n.INT&&(N=n.RGBA32I)),S===n.RGB&&(k===n.UNSIGNED_SHORT&&oe&&(N=oe.RGB16_EXT),k===n.SHORT&&oe&&(N=oe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(N=n.R11F_G11F_B10F)),S===n.RGBA){const Q=se?hc:je.getTransfer(j);k===n.FLOAT&&(N=n.RGBA32F),k===n.HALF_FLOAT&&(N=n.RGBA16F),k===n.UNSIGNED_BYTE&&(N=Q===ot?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&oe&&(N=oe.RGBA16_EXT),k===n.SHORT&&oe&&(N=oe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function w(R,S){let k;return R?S===null||S===vi||S===so?k=n.DEPTH24_STENCIL8:S===ui?k=n.DEPTH32F_STENCIL8:S===ro&&(k=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===so?k=n.DEPTH_COMPONENT24:S===ui?k=n.DEPTH_COMPONENT32F:S===ro&&(k=n.DEPTH_COMPONENT16),k}function T(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),A(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function _(R){const S=R.target;S.removeEventListener("dispose",_),L(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const k=R.source,Y=p.get(k);if(Y){const j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(R),Object.keys(Y).length===0&&p.delete(k)}i.remove(R)}function C(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const k=R.source,Y=p.get(k);delete Y[S.__cacheKey],a.memory.textures--}function L(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,j=k.length;Y<j;Y++){const se=i.get(k[Y]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(k[Y])}i.remove(R)}let F=0;function z(){F=0}function O(){return F}function G(R){F=R}function ee(){const R=F;return R>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function $(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){const k=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function B(R,S){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){_e(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function q(R,S){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){_e(k,R,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function J(R,S){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){De(k,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const he={[rf]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[sf]:n.MIRRORED_REPEAT},Se={[Yt]:n.NEAREST,[dM]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Su]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},qe={[vM]:n.NEVER,[MM]:n.ALWAYS,[xM]:n.LESS,[Wd]:n.LEQUAL,[_M]:n.EQUAL,[Xd]:n.GEQUAL,[yM]:n.GREATER,[SM]:n.NOTEQUAL};function Be(R,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===Su||S.magFilter===ko||S.magFilter===Nr||S.minFilter===nn||S.minFilter===Su||S.minFilter===ko||S.minFilter===Nr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,he[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,he[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,he[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Se[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,qe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==ko&&S.minFilter!==Nr||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ue(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const Y=S.source;let j=p.get(Y);j===void 0&&(j={},p.set(Y,j));const se=$(S);if(se!==R.__cacheKey){j[se]===void 0&&(j[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[se].usedTimes++;const oe=j[R.__cacheKey];oe!==void 0&&(j[R.__cacheKey].usedTimes--,oe.usedTimes===0&&C(S)),R.__cacheKey=se,R.__webglTexture=j[se].texture}return k}function K(R,S,k){return Math.floor(Math.floor(R/k)/S)}function ne(R,S,k,Y){const se=R.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,k,Y,S.data);else{se.sort((Ee,fe)=>Ee.start-fe.start);let oe=0;for(let Ee=1;Ee<se.length;Ee++){const fe=se[oe],le=se[Ee],Re=fe.start+fe.count,Le=K(le.start,S.width,4),Fe=K(fe.start,S.width,4);le.start<=Re+1&&Le===Fe&&K(le.start+le.count-1,S.width,4)===Le?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++oe,se[oe]=le)}se.length=oe+1;const N=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,fe=se.length;Ee<fe;Ee++){const le=se[Ee],Re=Math.floor(le.start/4),Le=Math.ceil(le.count/4),Fe=Re%S.width,I=Math.floor(Re/S.width),ce=Le,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Fe,I,ce,te,k,Y,S.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,N),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function _e(R,S,k){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const j=Ue(R,S),se=S.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+k);const oe=i.get(se);if(se.version!==oe.__version||j===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const te=je.getPrimaries(je.workingColorSpace),ue=S.colorSpace===ir?null:je.getPrimaries(S.colorSpace),ve=S.colorSpace===ir||te===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=g(S.image,!1,r.maxTextureSize);Q=Ht(S,Q);const ae=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let fe=x(S.internalFormat,ae,Ee,S.normalized,S.colorSpace,S.isVideoTexture);Be(Y,S);let le;const Re=S.mipmaps,Le=S.isVideoTexture!==!0,Fe=oe.__version===void 0||j===!0,I=se.dataReady,ce=T(S,Q);if(S.isDepthTexture)fe=w(S.format===Dr,S.type),Fe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,ae,Ee,null));else if(S.isDataTexture)if(Re.length>0){Le&&Fe&&t.texStorage2D(n.TEXTURE_2D,ce,fe,Re[0].width,Re[0].height);for(let te=0,ue=Re.length;te<ue;te++)le=Re[te],Le?I&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,le.width,le.height,ae,Ee,le.data):t.texImage2D(n.TEXTURE_2D,te,fe,le.width,le.height,0,ae,Ee,le.data);S.generateMipmaps=!1}else Le?(Fe&&t.texStorage2D(n.TEXTURE_2D,ce,fe,Q.width,Q.height),I&&ne(S,Q,ae,Ee)):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,ae,Ee,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,fe,Re[0].width,Re[0].height,Q.depth);for(let te=0,ue=Re.length;te<ue;te++)if(le=Re[te],S.format!==Kn)if(ae!==null)if(Le){if(I)if(S.layerUpdates.size>0){const ve=m0(le.width,le.height,S.format,S.type);for(const ie of S.layerUpdates){const Pe=le.data.subarray(ie*ve/le.data.BYTES_PER_ELEMENT,(ie+1)*ve/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ie,le.width,le.height,1,ae,Pe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,Q.depth,ae,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,fe,le.width,le.height,Q.depth,0,le.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,Q.depth,ae,Ee,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,fe,le.width,le.height,Q.depth,0,ae,Ee,le.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Le&&Fe&&t.texStorage2D(n.TEXTURE_2D,ce,fe,Re[0].width,Re[0].height);for(let te=0,ue=Re.length;te<ue;te++)le=Re[te],S.format!==Kn?ae!==null?Le?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(n.TEXTURE_2D,te,fe,le.width,le.height,0,le.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,le.width,le.height,ae,Ee,le.data):t.texImage2D(n.TEXTURE_2D,te,fe,le.width,le.height,0,ae,Ee,le.data)}else if(S.isDataArrayTexture)if(Le){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,fe,Q.width,Q.height,Q.depth),I)if(S.layerUpdates.size>0){const te=m0(Q.width,Q.height,S.format,S.type);for(const ue of S.layerUpdates){const ve=Q.data.subarray(ue*te/Q.data.BYTES_PER_ELEMENT,(ue+1)*te/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,Q.width,Q.height,1,ae,Ee,ve)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(S.isData3DTexture)Le?(Fe&&t.texStorage3D(n.TEXTURE_3D,ce,fe,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)):t.texImage3D(n.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(S.isFramebufferTexture){if(Fe)if(Le)t.texStorage2D(n.TEXTURE_2D,ce,fe,Q.width,Q.height);else{let te=Q.width,ue=Q.height;for(let ve=0;ve<ce;ve++)t.texImage2D(n.TEXTURE_2D,ve,fe,te,ue,0,ae,Ee,null),te>>=1,ue>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),Q.parentNode!==te){te.appendChild(Q),d.add(S),te.onpaint=ue=>{const ve=ue.changedElements;for(const ie of d)ve.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const ve=n.RGBA,ie=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,ie,Pe,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&Fe){const te=tt(Re[0]);t.texStorage2D(n.TEXTURE_2D,ce,fe,te.width,te.height)}for(let te=0,ue=Re.length;te<ue;te++)le=Re[te],Le?I&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ae,Ee,le):t.texImage2D(n.TEXTURE_2D,te,fe,ae,Ee,le);S.generateMipmaps=!1}else if(Le){if(Fe){const te=tt(Q);t.texStorage2D(n.TEXTURE_2D,ce,fe,te.width,te.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Ee,Q)}else t.texImage2D(n.TEXTURE_2D,0,fe,ae,Ee,Q);f(S)&&m(Y),oe.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function De(R,S,k){if(S.image.length!==6)return;const Y=Ue(R,S),j=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const se=i.get(j);if(j.version!==se.__version||Y===!0){t.activeTexture(n.TEXTURE0+k);const oe=je.getPrimaries(je.workingColorSpace),N=S.colorSpace===ir?null:je.getPrimaries(S.colorSpace),Q=S.colorSpace===ir||oe===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ae&&!Ee?fe[ie]=g(S.image[ie],!0,r.maxCubemapSize):fe[ie]=Ee?S.image[ie].image:S.image[ie],fe[ie]=Ht(S,fe[ie]);const le=fe[0],Re=s.convert(S.format,S.colorSpace),Le=s.convert(S.type),Fe=x(S.internalFormat,Re,Le,S.normalized,S.colorSpace),I=S.isVideoTexture!==!0,ce=se.__version===void 0||Y===!0,te=j.dataReady;let ue=T(S,le);Be(n.TEXTURE_CUBE_MAP,S);let ve;if(ae){I&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Fe,le.width,le.height);for(let ie=0;ie<6;ie++){ve=fe[ie].mipmaps;for(let Pe=0;Pe<ve.length;Pe++){const be=ve[Pe];S.format!==Kn?Re!==null?I?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,be.width,be.height,0,be.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,be.width,be.height,Re,Le,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,be.width,be.height,0,Re,Le,be.data)}}}else{if(ve=S.mipmaps,I&&ce){ve.length>0&&ue++;const ie=tt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Re,Le,fe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,fe[ie].width,fe[ie].height,0,Re,Le,fe[ie].data);for(let Pe=0;Pe<ve.length;Pe++){const pt=ve[Pe].image[ie].image;I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,pt.width,pt.height,Re,Le,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,pt.width,pt.height,0,Re,Le,pt.data)}}else{I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Le,fe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Re,Le,fe[ie]);for(let Pe=0;Pe<ve.length;Pe++){const be=ve[Pe];I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,Le,be.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,Re,Le,be.image[ie])}}}f(S)&&m(n.TEXTURE_CUBE_MAP),se.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,k,Y,j,se){const oe=s.convert(k.format,k.colorSpace),N=s.convert(k.type),Q=x(k.internalFormat,oe,N,k.normalized,k.colorSpace),ae=i.get(S),Ee=i.get(k);if(Ee.__renderTarget=S,!ae.__hasExternalTextures){const fe=Math.max(1,S.width>>se),le=Math.max(1,S.height>>se);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,se,Q,fe,le,S.depth,0,oe,N,null):t.texImage2D(j,se,Q,fe,le,0,oe,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),dt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,Ee.__webglTexture,0,at(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,Ee.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,se=w(S.stencilBuffer,j),oe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at(S),se,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,at(S),se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,R)}else{const Y=S.textures;for(let j=0;j<Y.length;j++){const se=Y[j],oe=s.convert(se.format,se.colorSpace),N=s.convert(se.type),Q=x(se.internalFormat,oe,N,se.normalized,se.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at(S),Q,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,at(S),Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(R,S,k){const Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Be(n.TEXTURE_CUBE_MAP,S.depthTexture);const ae=s.convert(S.depthTexture.format),Ee=s.convert(S.depthTexture.type);let fe;S.depthTexture.format===Bi?fe=n.DEPTH_COMPONENT24:S.depthTexture.format===Dr&&(fe=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,fe,S.width,S.height,0,ae,Ee,null)}}else H(S.depthTexture,0);const se=j.__webglTexture,oe=at(S),N=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Q=S.depthTexture.format===Dr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Bi)dt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,N,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,N,se,0);else if(S.depthTexture.format===Dr)dt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,N,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,N,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(R){const S=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)vt(S.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?vt(S.__webglFramebuffer[0],R,0):vt(S.__webglFramebuffer,R,0)}else if(k){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=n.createRenderbuffer(),Oe(S.__webglDepthbuffer[Y],R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,se)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Oe(S.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(R,S,k){const Y=i.get(R);S!==void 0&&xe(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ze(R)}function st(R){const S=R.texture,k=i.get(R),Y=i.get(S);R.addEventListener("dispose",_);const j=R.textures,se=R.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let N=0;N<6;N++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[N]=[];for(let Q=0;Q<S.mipmaps.length;Q++)k.__webglFramebuffer[N][Q]=n.createFramebuffer()}else k.__webglFramebuffer[N]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let N=0;N<S.mipmaps.length;N++)k.__webglFramebuffer[N]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(oe)for(let N=0,Q=j.length;N<Q;N++){const ae=i.get(j[N]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&dt(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let N=0;N<j.length;N++){const Q=j[N];k.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[N]);const ae=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),fe=x(Q.internalFormat,ae,Ee,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),le=at(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,k.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(n.TEXTURE_CUBE_MAP,S);for(let N=0;N<6;N++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)xe(k.__webglFramebuffer[N][Q],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q);else xe(k.__webglFramebuffer[N],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);f(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let N=0,Q=j.length;N<Q;N++){const ae=j[N],Ee=i.get(ae);let fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ee.__webglTexture),Be(fe,ae),xe(k.__webglFramebuffer,R,ae,n.COLOR_ATTACHMENT0+N,fe,0),f(ae)&&m(fe)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(N=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,Y.__webglTexture),Be(N,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)xe(k.__webglFramebuffer[Q],R,S,n.COLOR_ATTACHMENT0,N,Q);else xe(k.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,N,0);f(S)&&m(N),t.unbindTexture()}R.depthBuffer&&ze(R)}function ke(R){const S=R.textures;for(let k=0,Y=S.length;k<Y;k++){const j=S[k];if(f(j)){const se=y(R),oe=i.get(j).__webglTexture;t.bindTexture(se,oe),m(se),t.unbindTexture()}}}const ht=[],Ct=[];function Zt(R){if(R.samples>0){if(dt(R)===!1){const S=R.textures,k=R.width,Y=R.height;let j=n.COLOR_BUFFER_BIT;const se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(R),N=S.length>1;if(N)for(let ae=0;ae<S.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<S.length;ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const Ee=i.get(S[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,k,Y,0,0,k,Y,j,n.NEAREST),l===!0&&(ht.length=0,Ct.length=0,ht.push(n.COLOR_ATTACHMENT0+ae),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ht.push(se),Ct.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let ae=0;ae<S.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const Ee=i.get(S[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function at(R){return Math.min(r.maxSamples,R.samples)}function dt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ht(R,S){const k=R.colorSpace,Y=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==uc&&k!==ir&&(je.getTransfer(k)===ot?(Y!==Kn||j!==An)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",k)),S}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=z,this.getTextureUnits=O,this.setTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=Ke,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kb(n,e){function t(i,r=ir){let s;const a=je.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===Bd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ax)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ex)return n.BYTE;if(i===Tx)return n.SHORT;if(i===ro)return n.UNSIGNED_SHORT;if(i===kd)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Cx)return n.ALPHA;if(i===Rx)return n.RGB;if(i===Kn)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===Px)return n.RED;if(i===Hd)return n.RED_INTEGER;if(i===Gr)return n.RG;if(i===Vd)return n.RG_INTEGER;if(i===Gd)return n.RGBA_INTEGER;if(i===Dl||i===Il||i===Ul||i===Fl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===af||i===of||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===of)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uf||i===hf||i===ff||i===df||i===pf||i===lc||i===mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uf||i===hf)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ff)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===df)return s.COMPRESSED_R11_EAC;if(i===pf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===lc)return s.COMPRESSED_RG11_EAC;if(i===mf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gf||i===vf||i===xf||i===_f||i===yf||i===Sf||i===Mf||i===wf||i===Ef||i===Tf||i===Af||i===bf||i===Cf||i===Rf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_f)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ef)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Af)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pf||i===Lf||i===Nf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pf)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Df||i===If||i===cc||i===Uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===If)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _i({vertexShader:jb,fragmentShader:Jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends qr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",g=new Qb,f={},m=t.getContextAttributes();let y=null,x=null;const w=[],T=[],b=new pe;let _=null,A=null;const C=new vn;C.viewport=new Et;const L=new vn;L.viewport=new Et;const F=[C,L],z=new aw;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=w[K];return ne===void 0&&(ne=new Cu,w[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=w[K];return ne===void 0&&(ne=new Cu,w[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=w[K];return ne===void 0&&(ne=new Cu,w[K]=ne),ne.getHandSpace()};function ee(K){const ne=T.indexOf(K.inputSource);if(ne===-1)return;const _e=w[ne];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",H);for(let K=0;K<w.length;K++){const ne=T[K];ne!==null&&(T[K]=null,w[K].disconnect(ne))}O=null,G=null,g.reset();for(const K in f)delete f[K];if(e.setRenderTarget(y),p=null,h=null,d=null,r=null,x=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",$),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Dr:Bi,De=m.stencil?so:vi);const Oe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Qn(h.textureWidth,h.textureHeight,{format:Kn,type:An,depthTexture:new lo(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(K){for(let ne=0;ne<K.removed.length;ne++){const _e=K.removed[ne],De=T.indexOf(_e);De>=0&&(T[De]=null,w[De].disconnect(_e))}for(let ne=0;ne<K.added.length;ne++){const _e=K.added[ne];let De=T.indexOf(_e);if(De===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=T.length){T.push(_e),De=Oe;break}else if(T[Oe]===null){T[Oe]=_e,De=Oe;break}if(De===-1)break}const xe=w[De];xe&&xe.connect(_e)}}const B=new P,q=new P;function J(K,ne,_e){B.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(_e.matrixWorld);const De=B.distanceTo(q),xe=ne.projectionMatrix.elements,Oe=_e.projectionMatrix.elements,vt=xe[14]/(xe[10]-1),ze=xe[14]/(xe[10]+1),Ke=(xe[9]+1)/xe[5],st=(xe[9]-1)/xe[5],ke=(xe[8]-1)/xe[0],ht=(Oe[8]+1)/Oe[0],Ct=vt*ke,Zt=vt*ht,at=De/(-ke+ht),dt=at*-ke;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(dt),K.translateZ(at),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const U=vt+at,Ht=ze+at,tt=Ct-dt,R=Zt+(De-dt),S=Ke*ze/Ht*U,k=st*ze/Ht*U;K.projectionMatrix.makePerspective(tt,R,S,k,U,Ht),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,_e=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),z.near=L.near=C.near=ne,z.far=L.far=C.far=_e,(O!==z.near||G!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,G=z.far),z.layers.mask=K.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const De=K.parent,xe=z.cameras;he(z,De);for(let Oe=0;Oe<xe.length;Oe++)he(xe[Oe],De);xe.length===2?J(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),Se(K,z,De)};function Se(K,ne,_e){_e===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(K){return f[K]};let qe=null;function Be(K,ne){if(u=ne.getViewerPose(c||a),v=ne,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let De=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,De=!0);for(let ze=0;ze<_e.length;ze++){const Ke=_e[ze];let st=null;if(p!==null)st=p.getViewport(Ke);else{const ht=d.getViewSubImage(h,Ke);st=ht.viewport,ze===0&&(e.setRenderTargetTextures(x,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(x))}let ke=F[ze];ke===void 0&&(ke=new vn,ke.layers.enable(ze),ke.viewport=new Et,F[ze]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),De===!0&&z.cameras.push(ke)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const ze=d.getDepthInformation(_e[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,r.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<_e.length;ze++){const Ke=_e[ze].camera;if(Ke){let st=f[Ke];st||(st=new Gx,f[Ke]=st);const ke=d.getCameraImage(Ke);st.sourceTexture=ke}}}}for(let _e=0;_e<w.length;_e++){const De=T[_e],xe=w[_e];De!==null&&xe!==void 0&&xe.update(De,ne,c||a)}qe&&qe(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ue=new i_;Ue.setAnimationLoop(Be),this.setAnimationLoop=function(K){qe=K},this.dispose=function(){}}}const tC=new St,u_=new Ie;u_.set(-1,0,0,0,1,0,0,0,1);function nC(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,e_(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,y,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Mn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Mn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),y=m.envMap,x=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(u_),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=y*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iC(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const T=w.program;i.uniformBlockBinding(x,T)}function c(x,w){let T=r[x.id];T===void 0&&(g(x),T=u(x),r[x.id]=T,x.addEventListener("dispose",m));const b=w.program;i.updateUBOMapping(x,b);const _=e.render.frame;s[x.id]!==_&&(h(x),s[x.id]=_)}function u(x){const w=d();x.__bindingPointIndex=w;const T=n.createBuffer(),b=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=r[x.id],T=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,A=T.length;_<A;_++){const C=T[_];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)p(C[L],_,L,b);else p(C,_,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,w,T,b){if(M(x,w,T,b)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let C=0;for(let L=0;L<A.length;L++){const F=A[L],z=f(F);v(F,x.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function v(x,w,T){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,T)}function M(x,w,T,b){const _=x.value,A=w+"_"+T;if(b[A]===void 0)return typeof _=="number"||typeof _=="boolean"?b[A]=_:ArrayBuffer.isView(_)?b[A]=_.slice():b[A]=_.clone(),!0;{const C=b[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return b[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(x){const w=x.uniforms;let T=0;const b=16;for(let A=0,C=w.length;A<C;A++){const L=Array.isArray(w[A])?w[A]:[w[A]];for(let F=0,z=L.length;F<z;F++){const O=L[F],G=Array.isArray(O.value)?O.value:[O.value];for(let ee=0,$=G.length;ee<$;ee++){const H=G[ee],B=f(H),q=T%b,J=q%B.boundary,he=q+J;T+=J,he!==0&&b-he<B.storage&&(T+=b-he),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=B.storage}}}const _=T%b;return _>0&&(T+=b-_),x.__size=T,x.__cache={},this}function f(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),w}function m(x){const w=x.target;w.removeEventListener("dispose",m);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const rC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function sC(){return si===null&&(si=new f1(rC,16,16,Gr,xi),si.name="DFG_LUT",si.minFilter=nn,si.magFilter=nn,si.wrapS=Li,si.wrapT=Li,si.generateMipmaps=!1,si.needsUpdate=!0),si}class aC{constructor(e={}){const{canvas:t=EM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=An}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=p,g=new Set([Gd,Vd,Hd]),f=new Set([An,vi,ro,so,Bd,zd]),m=new Uint32Array(4),y=new Int32Array(4),x=new P;let w=null,T=null;const b=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,F=null,z=null,O=null,G=null;this._outputColorSpace=mn;let ee=0,$=0,H=null,B=-1,q=null;const J=new Et,he=new Et;let Se=null;const qe=new Ge(0);let Be=0,Ue=t.width,K=t.height,ne=1,_e=null,De=null;const xe=new Et(0,0,Ue,K),Oe=new Et(0,0,Ue,K);let vt=!1;const ze=new Zd;let Ke=!1,st=!1;const ke=new St,ht=new P,Ct=new Et,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function dt(){return H===null?ne:1}let U=i;function Ht(E,D){return t.getContext(E,D)}let tt,R,S,k,Y,j,se,oe,N,Q,ae,Ee,fe,le,Re,Le,Fe,I,ce,te,ue,ve,ie;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),U===null){const D="webgl2";if(U=Ht(D,E),U===null)throw Ht(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(E){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Qe("WebGLRenderer: "+E.message),E}function Pe(){tt=new sA(U),tt.init(),ue=new Kb(U,tt),R=new ZT(U,tt,e,ue),S=new $b(U,tt),R.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),z=U.createFramebuffer(),O=U.createFramebuffer(),G=U.createFramebuffer(),k=new lA(U),Y=new Ib,j=new Zb(U,tt,S,Y,R,ue,k),se=new rA(C),oe=new uw(U),ve=new qT(U,oe),N=new aA(U,oe,k,ve),Q=new uA(U,N,oe,ve,k),I=new cA(U,R,j),Re=new KT(Y),ae=new Db(C,se,tt,R,ve,Re),Ee=new nC(C,Y),fe=new Fb,le=new Vb(tt),Fe=new YT(C,se,S,Q,v,l),Le=new qb(C,Q,R),ie=new iC(U,k,R,S),ce=new $T(U,tt,k),te=new oA(U,tt,k),k.programs=ae.programs,C.capabilities=R,C.extensions=tt,C.properties=Y,C.renderLists=fe,C.shadowMap=Le,C.state=S,C.info=k}M!==An&&(A=new fA(M,t.width,t.height,o,r,s));const be=new eC(C,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Ue,K,!1))},this.getSize=function(E){return E.set(Ue,K)},this.setSize=function(E,D,Z=!0){if(be.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=E,K=D,t.width=Math.floor(E*ne),t.height=Math.floor(D*ne),Z===!0&&(t.style.width=E+"px",t.style.height=D+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Ue*ne,K*ne).floor()},this.setDrawingBufferSize=function(E,D,Z){Ue=E,K=D,ne=Z,t.width=Math.floor(E*Z),t.height=Math.floor(D*Z),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(M===An){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,D,Z,W){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,D,Z,W),S.viewport(J.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,D,Z,W){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,D,Z,W),S.scissor(he.copy(Oe).multiplyScalar(ne).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(E){S.setScissorTest(vt=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,Z=!0){let W=0;if(E){let X=!1;if(H!==null){const ge=H.texture.format;X=g.has(ge)}if(X){const ge=H.texture.type,Me=f.has(ge),me=Fe.getClearColor(),Te=Fe.getClearAlpha(),Ce=me.r,He=me.g,$e=me.b;Me?(m[0]=Ce,m[1]=He,m[2]=$e,m[3]=Te,U.clearBufferuiv(U.COLOR,0,m)):(y[0]=Ce,y[1]=He,y[2]=$e,y[3]=Te,U.clearBufferiv(U.COLOR,0,y))}else W|=U.COLOR_BUFFER_BIT}D&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Fe.dispose(),fe.dispose(),le.dispose(),Y.dispose(),se.dispose(),Q.dispose(),ve.dispose(),ie.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",up),be.removeEventListener("sessionend",hp),Sr.stop()};function pt(E){E.preventDefault(),dc("WebGLRenderer: Context Lost."),L=!0}function nt(){dc("WebGLRenderer: Context Restored."),L=!1;const E=k.autoReset,D=Le.enabled,Z=Le.autoUpdate,W=Le.needsUpdate,X=Le.type;Pe(),k.autoReset=E,Le.enabled=D,Le.autoUpdate=Z,Le.needsUpdate=W,Le.type=X}function Hn(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ti(E){const D=E.target;D.removeEventListener("dispose",ti),f_(D)}function f_(E){d_(E),Y.remove(E)}function d_(E){const D=Y.get(E).programs;D!==void 0&&(D.forEach(function(Z){ae.releaseProgram(Z)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,Z,W,X,ge){D===null&&(D=Zt);const Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,me=g_(E,D,Z,W,X);S.setMaterial(W,Me);let Te=Z.index,Ce=1;if(W.wireframe===!0){if(Te=N.getWireframeAttribute(Z),Te===void 0)return;Ce=2}const He=Z.drawRange,$e=Z.attributes.position;let Ae=He.start*Ce,it=(He.start+He.count)*Ce;ge!==null&&(Ae=Math.max(Ae,ge.start*Ce),it=Math.min(it,(ge.start+ge.count)*Ce)),Te!==null?(Ae=Math.max(Ae,0),it=Math.min(it,Te.count)):$e!=null&&(Ae=Math.max(Ae,0),it=Math.min(it,$e.count));const Dt=it-Ae;if(Dt<0||Dt===1/0)return;ve.setup(X,W,me,Z,Te);let xt,ft=ce;if(Te!==null&&(xt=oe.get(Te),ft=te,ft.setIndex(xt)),X.isMesh)W.wireframe===!0?(S.setLineWidth(W.wireframeLinewidth*dt()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(X.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),S.setLineWidth(Kt*dt()),X.isLineSegments?ft.setMode(U.LINES):X.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else X.isPoints?ft.setMode(U.POINTS):X.isSprite&&ft.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Kt=X._multiDrawStarts,ye=X._multiDrawCounts,an=X._multiDrawCount,Je=Te?oe.get(Te).bytesPerElement:1,Nn=Y.get(W).currentProgram.getUniforms();for(let ni=0;ni<an;ni++)Nn.setValue(U,"_gl_DrawID",ni),ft.render(Kt[ni]/Je,ye[ni])}else if(X.isInstancedMesh)ft.renderInstances(Ae,Dt,X.count);else if(Z.isInstancedBufferGeometry){const Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ye=Math.min(Z.instanceCount,Kt);ft.renderInstances(Ae,Dt,ye)}else ft.render(Ae,Dt)};function cp(E,D,Z,W){F!==null&&E.isNodeMaterial&&F.setObject(W,E),Ke===!0&&Re.setState(E,Z,!1),E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,yo(E,D,W),E.side=Hr,E.needsUpdate=!0,yo(E,D,W),E.side=un):yo(E,D,W)}this.compile=function(E,D,Z=null){Z===null&&(Z=E),F!==null&&F.renderStart(E,D,Z),T=le.get(Z),T.init(D),_.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),E!==Z&&E.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),st=this.localClippingEnabled,Ke=Re.init(this.clippingPlanes,st),Ke===!0&&Re.setGlobalState(this.clippingPlanes,D),F!==null&&Le.render(T.state.shadowsArray,Z,D);const W=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const me=ge[Me];cp(me,Z,D,X),W.add(me)}else cp(ge,Z,D,X),W.add(ge)}),T=_.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(E,D,Z=null){const W=this.compile(E,D,Z);return new Promise(X=>{function ge(){if(W.forEach(function(Me){const Te=Y.get(Me).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Me)}),W.size===0){X(E);return}setTimeout(ge,10)}tt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Xc=null;function p_(E){Xc&&Xc(E)}function up(){Sr.stop()}function hp(){Sr.start()}const Sr=new i_;Sr.setAnimationLoop(p_),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(E){Xc=E,be.setAnimationLoop(E),E===null?Sr.stop():Sr.start()},be.addEventListener("sessionstart",up),be.addEventListener("sessionend",hp),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,D);const Z=be.enabled===!0&&be.isPresenting===!0,W=A!==null&&(H===null||Z)&&A.begin(C,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(D),D=be.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,D,H),T=le.get(E,_.length),T.init(D),T.state.textureUnits=j.getTextureUnits(),_.push(T),ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ze.setFromProjectionMatrix(ke,hi,D.reversedDepth),st=this.localClippingEnabled,Ke=Re.init(this.clippingPlanes,st),w=fe.get(E,b.length),w.init(),b.push(w),be.enabled===!0&&be.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Yc(Me,D,-1/0,C.sortObjects)}Yc(E,D,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(_e,De),at=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,at&&Fe.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Re.beginShadows();const X=T.state.shadowsArray;if(Le.render(X,E,D),Ke===!0&&Re.endShadows(),(W&&A.hasRenderPass())===!1){const Me=w.opaque,me=w.transmissive;if(T.setupLights(),D.isArrayCamera){const Te=D.cameras;if(me.length>0)for(let Ce=0,He=Te.length;Ce<He;Ce++){const $e=Te[Ce];dp(Me,me,E,$e)}at&&Fe.render(E);for(let Ce=0,He=Te.length;Ce<He;Ce++){const $e=Te[Ce];fp(w,E,$e,$e.viewport)}}else me.length>0&&dp(Me,me,E,D),at&&Fe.render(E),fp(w,E,D)}H!==null&&$===0&&(j.updateMultisampleRenderTarget(H),j.updateRenderTargetMipmap(H)),W&&A.end(C),E.isScene===!0&&E.onAfterRender(C,E,D),ve.resetDefaultState(),B=-1,q=null,_.pop(),_.length>0?(T=_[_.length-1],j.setTextureUnits(T.state.textureUnits),Ke===!0&&Re.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,F!==null&&F.renderEnd()};function Yc(E,D,Z,W){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ze)){W&&Ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);const Me=Q.update(E),me=E.material;me.visible&&w.push(E,Me,me,Z,Ct.z,null,D)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ze))){const Me=Q.update(E),me=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ct.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ct.copy(Me.boundingSphere.center)),Ct.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(me)){const Te=Me.groups;for(let Ce=0,He=Te.length;Ce<He;Ce++){const $e=Te[Ce],Ae=me[$e.materialIndex];Ae&&Ae.visible&&w.push(E,Me,Ae,Z,Ct.z,$e,D)}}else me.visible&&w.push(E,Me,me,Z,Ct.z,null,D)}}const ge=E.children;for(let Me=0,me=ge.length;Me<me;Me++)Yc(ge[Me],D,Z,W)}function fp(E,D,Z,W){const{opaque:X,transmissive:ge,transparent:Me}=E;T.setupLightsView(Z),Ke===!0&&Re.setGlobalState(C.clippingPlanes,Z),W&&S.viewport(J.copy(W)),X.length>0&&_o(X,D,Z),ge.length>0&&_o(ge,D,Z),Me.length>0&&_o(Me,D,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function dp(E,D,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Ae=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Qn(1,1,{generateMipmaps:!0,type:Ae?xi:An,minFilter:Nr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ge=T.state.transmissionRenderTarget[W.id],Me=W.viewport||J;ge.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),Te=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(qe),Be=C.getClearAlpha(),Be<1&&C.setClearColor(16777215,.5),C.clear(),at&&Fe.render(Z);const He=C.toneMapping;C.toneMapping=pi;const $e=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Ke===!0&&Re.setGlobalState(C.clippingPlanes,W),_o(E,Z,W),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let it=0,Dt=D.length;it<Dt;it++){const xt=D[it],{object:ft,geometry:Kt,material:ye,group:an}=xt;if(ye.side===un&&ft.layers.test(W.layers)){const Je=ye.side;ye.side=Mn,ye.needsUpdate=!0,pp(ft,Z,W,Kt,ye,an),ye.side=Je,ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Te,Ce),C.setClearColor(qe,Be),$e!==void 0&&(W.viewport=$e),C.toneMapping=He}function _o(E,D,Z){const W=D.isScene===!0?D.overrideMaterial:null;for(let X=0,ge=E.length;X<ge;X++){const Me=E[X],{object:me,geometry:Te,group:Ce}=Me;let He=Me.material;He.allowOverride===!0&&W!==null&&(He=W),me.layers.test(Z.layers)&&pp(me,D,Z,Te,He,Ce)}}function pp(E,D,Z,W,X,ge){F!==null&&X.isNodeMaterial&&F.setObject(E,X),E.onBeforeRender(C,D,Z,W,X,ge),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(C,D,Z,W,E,ge),X.transparent===!0&&X.side===un&&X.forceSinglePass===!1?(X.side=Mn,X.needsUpdate=!0,C.renderBufferDirect(Z,D,W,X,E,ge),X.side=Hr,X.needsUpdate=!0,C.renderBufferDirect(Z,D,W,X,E,ge),X.side=un):C.renderBufferDirect(Z,D,W,X,E,ge),E.onAfterRender(C,D,Z,W,X,ge)}function yo(E,D,Z){D.isScene!==!0&&(D=Zt);const W=Y.get(E),X=T.state.lights,ge=T.state.shadowsArray,Me=X.state.version,me=ae.getParameters(E,X.state,ge,D,Z,T.state.lightProbeGridArray),Te=ae.getProgramCacheKey(me);let Ce=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,W.fog=D.fog;const He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=se.get(E.envMap||W.environment,He),W.envMapRotation=W.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",ti),Ce=new Map,W.programs=Ce);let $e=Ce.get(Te);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===Me)return gp(E,me),$e}else me.uniforms=ae.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Z,me),E.onBeforeCompile(me,C),$e=ae.acquireProgram(me,Te),Ce.set(Te,$e),W.uniforms=me.uniforms;const Ae=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=Re.uniform),gp(E,me),W.needsLights=x_(E),W.lightsStateVersion=Me,W.needsLights&&(Ae.ambientLightColor.value=X.state.ambient,Ae.lightProbe.value=X.state.probe,Ae.sunLights.value=X.state.sun,Ae.sunLightShadows.value=X.state.sunShadow,Ae.directionalLights.value=X.state.directional,Ae.directionalLightShadows.value=X.state.directionalShadow,Ae.spotLights.value=X.state.spot,Ae.spotLightShadows.value=X.state.spotShadow,Ae.rectAreaLights.value=X.state.rectArea,Ae.ltc_1.value=X.state.rectAreaLTC1,Ae.ltc_2.value=X.state.rectAreaLTC2,Ae.pointLights.value=X.state.point,Ae.pointLightShadows.value=X.state.pointShadow,Ae.hemisphereLights.value=X.state.hemi,Ae.sunShadowMatrix.value=X.state.sunShadowMatrix,Ae.sunShadowCascade.value=X.state.sunShadowCascade,Ae.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ae.spotLightMatrix.value=X.state.spotLightMatrix,Ae.spotLightMap.value=X.state.spotLightMap,Ae.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=$e,W.uniformsList=null,$e}function mp(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Ol.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function gp(E,D){const Z=Y.get(E);Z.outputColorSpace=D.outputColorSpace,Z.batching=D.batching,Z.batchingColor=D.batchingColor,Z.instancing=D.instancing,Z.instancingColor=D.instancingColor,Z.instancingMorph=D.instancingMorph,Z.skinning=D.skinning,Z.morphTargets=D.morphTargets,Z.morphNormals=D.morphNormals,Z.morphColors=D.morphColors,Z.morphTargetsCount=D.morphTargetsCount,Z.numClippingPlanes=D.numClippingPlanes,Z.numIntersection=D.numClipIntersection,Z.vertexAlphas=D.vertexAlphas,Z.vertexTangents=D.vertexTangents,Z.toneMapping=D.toneMapping}function m_(E,D){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let Z=0,W=E.length;Z<W;Z++){const X=E[Z];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function g_(E,D,Z,W,X){D.isScene!==!0&&(D=Zt),j.resetTextureUnits();const ge=D.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?D.environment:null,me=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:je.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ce=se.get(W.envMap||Me,Te),He=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!Z.morphAttributes.position,it=!!Z.morphAttributes.normal,Dt=!!Z.morphAttributes.color;let xt=pi;W.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(xt=C.toneMapping);const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=ft!==void 0?ft.length:0,ye=Y.get(W),an=T.state.lights;if(Ke===!0&&(st===!0||E!==q)){const mt=E===q&&W.id===B;Re.setState(W,E,mt)}let Je=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==an.state.version||ye.outputColorSpace!==me||X.isBatchedMesh&&ye.batching===!1||!X.isBatchedMesh&&ye.batching===!0||X.isBatchedMesh&&ye.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&ye.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&ye.instancing===!1||!X.isInstancedMesh&&ye.instancing===!0||X.isSkinnedMesh&&ye.skinning===!1||!X.isSkinnedMesh&&ye.skinning===!0||X.isInstancedMesh&&ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ye.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ye.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ye.instancingMorph===!1&&X.morphTexture!==null||ye.envMap!==Ce||W.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Re.numPlanes||ye.numIntersection!==Re.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==$e||ye.morphTargets!==Ae||ye.morphNormals!==it||ye.morphColors!==Dt||ye.toneMapping!==xt||ye.morphTargetsCount!==Kt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ye.__version=W.version);let Nn=ye.currentProgram;Je===!0&&(Nn=yo(W,D,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,Nn,ye));let ni=!1,Vi=!1,Zr=!1;const ut=Nn.getUniforms(),Pt=ye.uniforms;if(S.useProgram(Nn.program)&&(ni=!0,Vi=!0,Zr=!0),W.id!==B&&(B=W.id,Vi=!0),ye.needsLights){const mt=m_(T.state.lightProbeGridArray,X);ye.lightProbeGrid!==mt&&(ye.lightProbeGrid=mt,Vi=!0)}if(ni||q!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",E.projectionMatrix),ut.setValue(U,"viewMatrix",E.matrixWorldInverse);const Wi=ut.map.cameraPosition;Wi!==void 0&&Wi.setValue(U,ht.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),q!==E&&(q=E,Vi=!0,Zr=!0)}if(ye.needsLights&&(an.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",an.state.sunShadowMap,j),an.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",an.state.directionalShadowMap,j),an.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",an.state.spotShadowMap,j),an.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",an.state.pointShadowMap,j)),X.isSkinnedMesh){ut.setOptional(U,X,"bindMatrix"),ut.setOptional(U,X,"bindMatrixInverse");const mt=X.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ut.setValue(U,"boneTexture",mt.boneTexture,j))}X.isBatchedMesh&&(ut.setOptional(U,X,"batchingTexture"),ut.setValue(U,"batchingTexture",X._matricesTexture,j),ut.setOptional(U,X,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",X._indirectTexture,j),ut.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",X._colorsTexture,j));const Gi=Z.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&I.update(X,Z,Nn),(Vi||ye.receiveShadow!==X.receiveShadow)&&(ye.receiveShadow=X.receiveShadow,ut.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&D.environment!==null&&(Pt.envMapIntensity.value=D.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=sC()),Vi){if(ut.setValue(U,"toneMappingExposure",C.toneMappingExposure),ye.needsLights&&v_(Pt,Zr),ge&&W.fog===!0&&Ee.refreshFogUniforms(Pt,ge),Ee.refreshMaterialUniforms(Pt,W,ne,K,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const mt=ye.lightProbeGrid;Pt.probesSH.value=mt.texture,Pt.probesMin.value.copy(mt.boundingBox.min),Pt.probesMax.value.copy(mt.boundingBox.max),Pt.probesResolution.value.copy(mt.resolution)}Ol.upload(U,mp(ye),Pt,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ol.upload(U,mp(ye),Pt,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(U,"center",X.center),ut.setValue(U,"modelViewMatrix",X.modelViewMatrix),ut.setValue(U,"normalMatrix",X.normalMatrix),ut.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const mt=W.uniformsGroups;for(let Wi=0,Kr=mt.length;Wi<Kr;Wi++){const xp=mt[Wi];ie.update(xp,Nn),ie.bind(xp,Nn)}}return Nn}function v_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function x_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,D,Z){const W=Y.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=D,Y.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const Z=Y.get(E);Z.__webglFramebuffer=D,Z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,Z=0){H=E,ee=D,$=Z;let W=null,X=!1,ge=!1;if(E){const me=Y.get(E);if(me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),J.copy(E.viewport),he.copy(E.scissor),Se=E.scissorTest,S.viewport(J),S.scissor(he),S.setScissorTest(Se),B=-1;return}else if(me.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(me.__hasExternalTextures)j.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&Y.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Ce=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?W=Ce[D][Z]:W=Ce[D],X=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?W=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?W=Ce[Z]:W=Ce,J.copy(E.viewport),he.copy(E.scissor),Se=E.scissorTest}else J.copy(xe).multiplyScalar(ne).floor(),he.copy(Oe).multiplyScalar(ne).floor(),Se=vt;if(Z!==0&&(W=z),S.bindFramebuffer(U.FRAMEBUFFER,W)&&S.drawBuffers(E,W),S.viewport(J),S.scissor(he),S.setScissorTest(Se),X){const me=Y.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,Z)}else if(ge){const me=D;for(let Te=0;Te<E.textures.length;Te++){const Ce=Y.get(E.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,Z,me)}}else if(E!==null&&Z!==0){const me=Y.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,Z)}B=-1};function vp(E){const D=Y.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=R.textureFormatReadable(E.format),D.__typeReadable=R.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,Z,W,X,ge,Me,me=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){S.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ce=E.textures[me],He=Ce.format,$e=Ce.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me);const Ae=vp(Ce);if(Ae.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-W&&Z>=0&&Z<=E.height-X&&U.readPixels(D,Z,W,X,ue.convert(He),ue.convert($e),ge)}finally{const Ce=H!==null?Y.get(H).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,D,Z,W,X,ge,Me,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(D>=0&&D<=E.width-W&&Z>=0&&Z<=E.height-X){S.bindFramebuffer(U.FRAMEBUFFER,Te);const Ce=E.textures[me],He=Ce.format,$e=Ce.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me);const Ae=vp(Ce);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(D,Z,W,X,ue.convert(He),ue.convert($e),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Dt=H!==null?Y.get(H).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Dt);const xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await TM(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(it),U.deleteSync(xt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,Z=0){const W=Math.pow(2,-Z),X=Math.floor(E.image.width*W),ge=Math.floor(E.image.height*W),Me=D!==null?D.x:0,me=D!==null?D.y:0;j.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Me,me,X,ge),S.unbindTexture()},this.copyTextureToTexture=function(E,D,Z=null,W=null,X=0,ge=0){let Me,me,Te,Ce,He,$e,Ae,it,Dt;const xt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(Z!==null)Me=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Ce=Z.min.x,He=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const Pt=Math.pow(2,-X);Me=Math.floor(xt.width*Pt),me=Math.floor(xt.height*Pt),E.isDataArrayTexture?Te=xt.depth:E.isData3DTexture?Te=Math.floor(xt.depth*Pt):Te=1,Ce=0,He=0,$e=0}W!==null?(Ae=W.x,it=W.y,Dt=W.z):(Ae=0,it=0,Dt=0);const ft=ue.convert(D.format),Kt=ue.convert(D.type);let ye;D.isData3DTexture?(j.setTexture3D(D,0),ye=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(j.setTexture2DArray(D,0),ye=U.TEXTURE_2D_ARRAY):(j.setTexture2D(D,0),ye=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const an=S.getParameter(U.UNPACK_ROW_LENGTH),Je=S.getParameter(U.UNPACK_IMAGE_HEIGHT),Nn=S.getParameter(U.UNPACK_SKIP_PIXELS),ni=S.getParameter(U.UNPACK_SKIP_ROWS),Vi=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),S.pixelStorei(U.UNPACK_SKIP_ROWS,He),S.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const Zr=E.isDataArrayTexture||E.isData3DTexture,ut=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Pt=Y.get(E),Gi=Y.get(D),mt=Y.get(Pt.__renderTarget),Wi=Y.get(Gi.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Kr=0;Kr<Te;Kr++)Zr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,X,$e+Kr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(D).__webglTexture,ge,Dt+Kr)),U.blitFramebuffer(Ce,He,Me,me,Ae,it,Me,me,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Y.has(E)){const Pt=Y.get(E),Gi=Y.get(D);S.bindFramebuffer(U.READ_FRAMEBUFFER,O),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let mt=0;mt<Te;mt++)Zr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,X,$e+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,X),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gi.__webglTexture,ge,Dt+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gi.__webglTexture,ge),X!==0?U.blitFramebuffer(Ce,He,Me,me,Ae,it,Me,me,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(ye,ge,Ae,it,Dt+mt,Ce,He,Me,me):U.copyTexSubImage2D(ye,ge,Ae,it,Ce,He,Me,me);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(ye,ge,Ae,it,Dt,Me,me,Te,ft,Kt,xt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,ge,Ae,it,Dt,Me,me,Te,ft,xt.data):U.texSubImage3D(ye,ge,Ae,it,Dt,Me,me,Te,ft,Kt,xt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Ae,it,Me,me,ft,Kt,xt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Ae,it,xt.width,xt.height,ft,xt.data):U.texSubImage2D(U.TEXTURE_2D,ge,Ae,it,Me,me,ft,Kt,xt);S.pixelStorei(U.UNPACK_ROW_LENGTH,an),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Nn),S.pixelStorei(U.UNPACK_SKIP_ROWS,ni),S.pixelStorei(U.UNPACK_SKIP_IMAGES,Vi),ge===0&&D.generateMipmaps&&U.generateMipmap(ye),S.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){ee=0,$=0,H=null,S.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const dl=16766532,pl=2785279,oC=16726586,ml=16752420,k0=20,B0=.6,z0=50,lC=70,cC=15,H0=1.8,ms=.6,gl=95,nh=12,V0=45,G0=7,W0=2.5,X0=.15,Y0=4.5,q0=5,uC=120,hC=10,$0={attacker:{maxHealth:100,speedMultiplier:1,damageMultiplier:1.5,captureMultiplier:1},defender:{maxHealth:200,speedMultiplier:.75,damageMultiplier:1,captureMultiplier:1},runner:{maxHealth:100,speedMultiplier:1.4,damageMultiplier:1,captureMultiplier:2}};class fC{constructor(e,t,i,r={}){this.clock=new ow,this.playerVelocity=new P,this.playerRotation=0,this.playerHealth=100,this.playerMaxHealth=100,this.playerDead=!1,this.playerRespawnTimer=0,this.playerSpawnPosition=new P(-55,1.5,0),this.playerAttackCooldown=0,this.playerSkillCooldown=0,this.playerDashCooldown=0,this.playerDashTimer=0,this.playerDashDirection=new P,this.enemyDead=!1,this.enemyRespawnTimer=0,this.enemySkillCooldown=0,this.enemyDashCooldown=0,this.enemyDashTimer=0,this.enemyDashDirection=new P,this.enemySpawnPosition=new P(55,1.5,0),this.playerFlashTimer=0,this.enemyFlashTimer=0,this.combatEffects=[],this.floatingDamageTexts=[],this.projectiles=[],this.powerOrbs=[],this.powerOrbSpawnTimer=0,this.playerBulletCount=1,this.enemyBulletCount=1,this.keys={},this.spacePressed=!1,this.playerTwoAttackPressed=!1,this.cameraAngle=0,this.cameraTarget=new P,this.cameraTwoTarget=new P,this.animationId=null,this.zones=[],this.obstacles=[],this.routeObstacles=[],this.playerOneActiveZoneId=null,this.playerTwoActiveZoneId=null,this.captureMessageTimer=0,this.elapsed=0,this.matchTimeRemaining=uC,this.suddenDeathTeam=null,this.suddenDeathRemaining=0,this.matchWinner=null,this.matchEnded=!1,this.onKeyDown=u=>{this.keys[u.code]=!0,u.code.startsWith("Arrow")&&u.preventDefault(),u.code==="Space"&&(u.preventDefault(),this.spacePressed||(this.spacePressed=!0,this.tryAttack())),u.code==="KeyE"&&!u.repeat&&this.trySkill(),u.code==="KeyQ"&&!u.repeat&&this.tryPlayerOneDash(),(u.code==="Numpad0"||u.code==="KeyM")&&!this.playerTwoAttackPressed&&(this.playerTwoAttackPressed=!0,this.tryPlayerTwoAttack()),u.code==="KeyK"&&!u.repeat&&this.tryPlayerTwoSkill(),u.code==="KeyN"&&!u.repeat&&this.tryPlayerTwoDash()},this.onKeyUp=u=>{this.keys[u.code]=!1,u.code==="Space"&&(this.spacePressed=!1),(u.code==="Numpad0"||u.code==="KeyM")&&(this.playerTwoAttackPressed=!1)},this.onResize=()=>{const u=this.container.clientWidth,d=this.container.clientHeight;this.camera.aspect=u/2/d,this.camera.updateProjectionMatrix(),this.cameraTwo.aspect=u/2/d,this.cameraTwo.updateProjectionMatrix(),this.renderer.setSize(u,d)},this.animate=()=>{this.animationId=requestAnimationFrame(this.animate);const u=Math.min(this.clock.getDelta(),.1);this.elapsed+=u,this.matchEnded?this.updatePowerOrbs(u):(this.updatePlayer(u),this.updatePlayerTwo(u),this.updatePowerOrbs(u),this.updateZones(u),this.updateMatch(u)),this.updateCamera(u,this.camera,this.player.position,this.cameraTarget),this.updateCamera(u,this.cameraTwo,this.enemy.mesh.position,this.cameraTwoTarget),this.updateProjectiles(u),this.updateCombatFeedback(u),this.updateHealthBars();const d=this.container.clientWidth,h=this.container.clientHeight,p=Math.floor(d/2);this.renderer.setScissorTest(!0),this.renderer.setViewport(0,0,p,h),this.renderer.setScissor(0,0,p,h),this.playerHealthBar.group.lookAt(this.camera.position),this.enemy.healthBar.group.lookAt(this.camera.position),this.renderer.render(this.scene,this.camera),this.renderer.setViewport(p,0,d-p,h),this.renderer.setScissor(p,0,d-p,h),this.playerHealthBar.group.lookAt(this.cameraTwo.position),this.enemy.healthBar.group.lookAt(this.cameraTwo.position),this.renderer.render(this.scene,this.cameraTwo),this.renderer.setScissorTest(!1)},this.container=e,this.callbacks=r,this.playerStats=$0[t],this.enemyStats=$0[i],this.playerMaxHealth=this.playerStats.maxHealth,this.playerHealth=this.playerMaxHealth,this.renderer=new aC({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fx,e.appendChild(this.renderer.domElement),this.scene=new n1,this.scene.background=new Ge(1710628),this.scene.fog=new $d(1710628,40,120),this.camera=new vn(60,e.clientWidth/2/e.clientHeight,.1,500),this.cameraTwo=new vn(60,e.clientWidth/2/e.clientHeight,.1,500),this.setupLights(),this.setupFloor(),this.setupGrid(),this.setupZones(),this.setupArenaWalls();const s=new vc(.6,1.2,8,24),a=new pn({color:pl,roughness:.35,metalness:.15});this.player=new rt(s,a),this.player.castShadow=!0,this.player.position.copy(this.playerSpawnPosition),this.scene.add(this.player);const o=new xc(.25,.5,12),l=new pn({color:9354495}),c=new rt(o,l);c.position.set(0,.2,-.9),c.rotation.x=-Math.PI/2,this.player.add(c),this.playerHealthBar=this.createHealthBar(4521830),this.player.add(this.playerHealthBar.group),this.playerHealthBar.group.position.set(0,2,0),this.setupEnemy(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize),this.emitZoneStatus(),this.emitHealth(),this.animate()}setupLights(){const e=new rw(6974090,.5);this.scene.add(e);const t=new ew(10066363,4473941,.4);this.scene.add(t);const i=new iw(16777215,.9);i.position.set(20,40,20),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.left=-60,i.shadow.camera.right=60,i.shadow.camera.top=60,i.shadow.camera.bottom=-60,i.shadow.camera.near=1,i.shadow.camera.far=120,this.scene.add(i)}setupFloor(){const e=new ar(200,200),t=new pn({color:16777215,map:this.createCloudTexture(),roughness:.95,metalness:0}),i=new rt(e,t);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i)}createCloudTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");if(!t)return new Xu(e);t.fillStyle="#8dd2f2",t.fillRect(0,0,e.width,e.height);let i=481516;const r=()=>(i=i*16807%2147483647,(i-1)/2147483646);for(let a=0;a<95;a+=1){const o=r()*e.width,l=r()*e.height,c=4+Math.floor(r()*7);for(let u=0;u<c;u+=1){const d=24+r()*52,h=d*(.42+r()*.4),p=o+(r()-.5)*110,v=l+(r()-.5)*55,M=t.createRadialGradient(p,v,0,p,v,d);M.addColorStop(0,"rgba(255, 255, 255, 0.94)"),M.addColorStop(.58,"rgba(244, 251, 255, 0.72)"),M.addColorStop(1,"rgba(225, 244, 255, 0)"),t.fillStyle=M,t.beginPath(),t.ellipse(p,v,d,h,0,0,Math.PI*2),t.fill()}}const s=new Xu(e);return s.colorSpace=mn,s}setupGrid(){const e=new lw(200,100,8947865,4473958);e.material.opacity=.14,e.material.transparent=!0,e.position.y=.01,this.scene.add(e)}setupArenaWalls(){const e=new pn({color:9579573,roughness:.92}),t=[{x:-18,z:-13,width:10,depth:3,height:6},{x:-16,z:16,width:3,depth:9,height:5},{x:17,z:-16,width:3,depth:9,height:7},{x:18,z:15,width:10,depth:3,height:6},{x:0,z:26,width:12,depth:3,height:8}];for(const r of t)this.addArenaWall(r.x,r.z,r.width,r.height,r.depth,e,!0);const i=new pn({color:6561064,roughness:.95});this.addArenaWall(0,-99,200,4,2,i,!1),this.addArenaWall(0,99,200,4,2,i,!1),this.addArenaWall(-99,0,2,4,200,i,!1),this.addArenaWall(99,0,2,4,200,i,!1),this.setupPalmTrees()}setupPalmTrees(){const e=new pn({color:7753772,roughness:.92}),t=new pn({color:2592086,roughness:.8,side:un}),i=new pn({color:9224035,roughness:.8}),r=new Zx;r.moveTo(0,0),r.bezierCurveTo(.35,.62,1.25,.85,2.5,1.15),r.bezierCurveTo(1.8,.46,.98,.12,.35,-.42),r.bezierCurveTo(.1,-.28,.02,-.12,0,0);const s=new tp(r,12),a=new Of([new P(0,0,0),new P(.06,1.5,0),new P(.2,3,0),new P(.42,4.6,0),new P(.34,6.2,0)]),o=new Sc(a,24,.28,9,!1),l=new Of([new P(0,0,0),new P(.45,.36,0),new P(1.35,.72,0),new P(2.5,1.15,0)]),c=new Sc(l,12,.035,5,!1),u=[[-78,-72],[-78,72],[78,-72],[78,72],[-28,-82],[28,82],[-54,-48],[-54,48],[54,-48],[54,48],[-7,-58],[7,58],[-68,-8],[68,8]];for(const[d,h]of u){const p=new oi;p.position.set(d,0,h);const v=new rt(o,e);v.castShadow=!0,p.add(v);for(let f=0;f<8;f+=1){const m=f/8*Math.PI*2,y=new oi;y.position.set(.34,5.95,0),y.rotation.y=m;const x=new rt(s,t),w=new rt(c,i);x.castShadow=!0,y.add(x,w),p.add(y)}const M=new yc(.24,10,8),g=new pn({color:4993312,roughness:.9});for(let f=0;f<3;f+=1){const m=new rt(M,g),y=f/3*Math.PI*2;m.position.set(.34+Math.cos(y)*.24,5.72,Math.sin(y)*.24),p.add(m)}this.scene.add(p)}}addArenaWall(e,t,i,r,s,a,o){const l=new rt(new Js(i,r,s),a);l.position.set(e,r/2,t),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l);const c={minX:e-i/2,maxX:e+i/2,minZ:t-s/2,maxZ:t+s/2};this.obstacles.push(c),o&&this.routeObstacles.push(c)}moveWithCollisions(e,t,i,r){e.x+=t.x*i,this.constrainPosition(e,r),e.z+=t.z*i,this.constrainPosition(e,r)}constrainPosition(e,t){for(let i=0;i<4;i+=1)for(const r of this.obstacles){const s=Yi.clamp(e.x,r.minX,r.maxX),a=Yi.clamp(e.z,r.minZ,r.maxZ),o=e.x-s,l=e.z-a,c=o*o+l*l;if(c>=t*t)continue;if(c>1e-8){const d=Math.sqrt(c),h=(t-d+.001)/d;e.x+=o*h,e.z+=l*h;continue}const u=[{distance:e.x-r.minX,axis:"x",value:r.minX-t-.001},{distance:r.maxX-e.x,axis:"x",value:r.maxX+t+.001},{distance:e.z-r.minZ,axis:"z",value:r.minZ-t-.001},{distance:r.maxZ-e.z,axis:"z",value:r.maxZ+t+.001}].sort((d,h)=>d.distance-h.distance)[0];u.axis==="x"?e.x=u.value:e.z=u.value}e.x=Yi.clamp(e.x,-gl,gl),e.z=Yi.clamp(e.z,-gl,gl)}isPathSegmentClear(e,t,i){for(const r of i){const s=this.segmentInterval(e.x,t.x-e.x,r.minX,r.maxX),a=this.segmentInterval(e.z,t.z-e.z,r.minZ,r.maxZ);if(!s||!a)continue;const o=Math.max(s[0],a[0],0),l=Math.min(s[1],a[1],1);if(l-o>1e-5&&o<1-1e-5&&l>1e-5)return!1}return!0}segmentInterval(e,t,i,r){if(Math.abs(t)<1e-8)return e<=i||e>=r?null:[-1/0,1/0];const s=(i-e)/t,a=(r-e)/t;return[Math.min(s,a),Math.max(s,a)]}createHealthBar(e){const t=new oi,i=new ar(1.8,.28),r=new bi({color:2236962,transparent:!0,opacity:.8,depthTest:!1}),s=new rt(i,r);s.renderOrder=999,t.add(s);const a=new ar(1.7,.18);a.translate(0,0,.001);const o=new bi({color:e,depthTest:!1}),l=new rt(a,o);return l.renderOrder=1e3,t.add(l),l.geometry.translate(.85,0,0),l.position.x=-.85,{group:t,bgMesh:s,fillMesh:l,fillMaterial:o}}updateHealthBar(e,t,i){const r=Math.max(0,Math.min(1,t));e.fillMesh.scale.x=r,r<=0?e.fillMesh.visible=!1:e.fillMesh.visible=!0,e.fillMaterial.color.setHex(i)}setupEnemy(){const e=new vc(.6,1.2,8,24),t=new pn({color:ml,roughness:.35,metalness:.15}),i=new rt(e,t);i.castShadow=!0,i.position.copy(this.enemySpawnPosition),this.scene.add(i);const r=new xc(.25,.5,12),s=new pn({color:16763525}),a=new rt(r,s);a.position.set(0,.2,-.9),a.rotation.x=-Math.PI/2,i.add(a);const o=this.createHealthBar(ml);i.add(o.group),o.group.position.set(0,2,0),this.enemy={mesh:i,cone:a,velocity:new P,rotation:0,health:this.enemyStats.maxHealth,maxHealth:this.enemyStats.maxHealth,healthBar:o,targetZoneId:null,attackCooldown:0}}setupZones(){const e=[{id:0,label:"Center Vault",x:0,z:0},{id:1,label:"East Reliquary",x:35,z:0},{id:2,label:"West Reliquary",x:-35,z:0},{id:3,label:"North Shrine",x:0,z:-35},{id:4,label:"South Shrine",x:0,z:35}];for(const t of e){const r=new P(t.x,0,t.z),s=new _c(4-.4,4,64),a=new bi({color:dl,transparent:!0,opacity:.85,side:un}),o=new rt(s,a);o.rotation.x=-Math.PI/2,o.position.copy(r),o.position.y=.02,this.scene.add(o);const l=new Kd(4-.5,64),c=new bi({color:dl,transparent:!0,opacity:.12,side:un}),u=new rt(l,c);u.rotation.x=-Math.PI/2,u.position.copy(r),u.position.y=.015,this.scene.add(u);const d=new d0(dl,1.2,20,2);d.position.copy(r),d.position.y=4,this.scene.add(d);const h=new oi;h.position.copy(r);const p=new rt(new Hc(.06,.085,2.5,8),new pn({color:14014679,metalness:.35,roughness:.55}));p.position.y=1.25,h.add(p);const v=new pn({color:dl,roughness:.75,side:un}),M=new rt(new ar(1.1,.7),v);M.position.set(.52,2.05,0),h.add(M),this.scene.add(h),this.zones.push({id:t.id,label:t.label,position:r,radius:4,progress:0,state:"neutral",owner:"neutral",ringMesh:o,ringMaterial:a,glowMesh:u,glowMaterial:c,flagMaterial:v,light:d})}}performAttack(){this.tryAttack()}performSkill(){this.trySkill()}performPlayerTwoAttack(){this.tryPlayerTwoAttack()}performPlayerTwoSkill(){this.tryPlayerTwoSkill()}performPlayerOneDash(){this.tryPlayerOneDash()}performPlayerTwoDash(){this.tryPlayerTwoDash()}tryPlayerOneDash(){this.matchEnded||this.playerDashCooldown>0||this.playerDead||(this.playerDashCooldown=W0,this.playerDashTimer=X0,this.playerDashDirection.copy(this.getMovementDirection("playerOne")))}tryPlayerTwoDash(){this.matchEnded||this.enemyDashCooldown>0||this.enemyDead||(this.enemyDashCooldown=W0,this.enemyDashTimer=X0,this.enemyDashDirection.copy(this.getMovementDirection("playerTwo")))}getMovementDirection(e){const t=e==="playerOne",i=t?"KeyW":"ArrowUp",r=t?"KeyS":"ArrowDown",s=t?"KeyA":"ArrowLeft",a=t?"KeyD":"ArrowRight";let o=+!!this.keys[i]-+!!this.keys[r],l=+!!this.keys[a]-+!!this.keys[s];const c=new P().addScaledVector(new P(-Math.sin(this.cameraAngle),0,-Math.cos(this.cameraAngle)),o).addScaledVector(new P(Math.cos(this.cameraAngle),0,-Math.sin(this.cameraAngle)),l);if(c.lengthSq()===0){const u=t?this.player.rotation.y:this.enemy.mesh.rotation.y;c.set(-Math.sin(u),0,-Math.cos(u))}return c.normalize()}tryAttack(){var e,t;this.matchEnded||this.playerAttackCooldown>0||this.enemyDead||this.playerDead||(this.playerAttackCooldown=B0,(t=(e=this.callbacks).onAttack)==null||t.call(e),this.spawnBullet(this.player,"blue",this.playerBulletCount))}trySkill(){var i,r;if(this.matchEnded||this.playerSkillCooldown>0||this.enemyDead||this.playerDead)return;this.playerSkillCooldown=G0,(r=(i=this.callbacks).onAttack)==null||r.call(i),this.spawnShockwave(this.player,pl);const e=this.enemy.mesh.position.x-this.player.position.x,t=this.enemy.mesh.position.z-this.player.position.z;Math.hypot(e,t)<=nh&&this.isPathSegmentClear(this.player.position,this.enemy.mesh.position,this.routeObstacles)&&this.damageEnemy(V0,4)}tryPlayerTwoAttack(){var e,t;this.matchEnded||this.enemy.attackCooldown>0||this.enemyDead||this.playerDead||(this.enemy.attackCooldown=B0,this.spawnBullet(this.enemy.mesh,"red",this.enemyBulletCount),(t=(e=this.callbacks).onAttack)==null||t.call(e))}tryPlayerTwoSkill(){var i,r;if(this.matchEnded||this.enemySkillCooldown>0||this.enemyDead||this.playerDead)return;this.enemySkillCooldown=G0,this.spawnShockwave(this.enemy.mesh,ml);const e=this.player.position.x-this.enemy.mesh.position.x,t=this.player.position.z-this.enemy.mesh.position.z;Math.hypot(e,t)<=nh&&this.isPathSegmentClear(this.enemy.mesh.position,this.player.position,this.routeObstacles)&&this.damagePlayer(V0,4),(r=(i=this.callbacks).onAttack)==null||r.call(i)}damageEnemy(e,t){if(this.enemyDead)return;const i=Math.round(e*this.playerStats.damageMultiplier);this.enemy.health=Math.max(0,this.enemy.health-i),this.enemy.mesh.material.color.setHex(16717334),this.enemyFlashTimer=.16,this.spawnDamageText(this.enemy.mesh,i);const r=new P(this.enemy.mesh.position.x-this.player.position.x,0,this.enemy.mesh.position.z-this.player.position.z).normalize().multiplyScalar(t);this.enemy.mesh.position.add(r),this.constrainPosition(this.enemy.mesh.position,ms),this.enemy.health<=0&&(this.enemyDead=!0,this.enemyRespawnTimer=3,this.enemyBulletCount=1,this.enemy.mesh.visible=!1),this.emitHealth()}damagePlayer(e,t){if(this.playerDead)return;const i=Math.round(e*this.enemyStats.damageMultiplier);this.playerHealth=Math.max(0,this.playerHealth-i),this.player.material.color.setHex(16717334),this.playerFlashTimer=.16,this.spawnDamageText(this.player,i);const r=new P(this.player.position.x-this.enemy.mesh.position.x,0,this.player.position.z-this.enemy.mesh.position.z).normalize().multiplyScalar(t);this.player.position.add(r),this.constrainPosition(this.player.position,ms),this.playerHealth<=0&&(this.playerDead=!0,this.playerRespawnTimer=3,this.playerBulletCount=1,this.player.visible=!1),this.emitHealth()}spawnBullet(e,t,i){const r=Math.min(.5,Math.max(0,i-1)*.1);for(let s=0;s<i;s+=1){const a=i===1?0:-r/2+r*s/(i-1);this.spawnSingleBullet(e,t,a)}}spawnSingleBullet(e,t,i){const r=new P(-Math.sin(e.rotation.y),0,-Math.cos(e.rotation.y)).applyAxisAngle(new P(0,1,0),i),s=new yc(.19,12,10),a=new bi({color:t==="blue"?9095935:16761210,toneMapped:!1}),o=new rt(s,a);o.position.copy(e.position).addScaledVector(r,.85),o.position.y+=.2,o.renderOrder=4,this.scene.add(o),this.projectiles.push({mesh:o,geometry:s,material:a,velocity:r.multiplyScalar(z0),owner:t,remainingRange:lC})}projectileHitsTarget(e,t,i){const r=t.x-e.x,s=t.z-e.z,a=r*r+s*s,o=a>0?Yi.clamp(((i.x-e.x)*r+(i.z-e.z)*s)/a,0,1):0,l=e.x+r*o,c=e.z+s*o;return Math.hypot(i.x-l,i.z-c)<=.95}removeProjectile(e){const[t]=this.projectiles.splice(e,1);this.scene.remove(t.mesh),t.geometry.dispose(),t.material.dispose()}updateProjectiles(e){if(this.matchEnded){for(;this.projectiles.length>0;)this.removeProjectile(this.projectiles.length-1);return}for(let t=this.projectiles.length-1;t>=0;t-=1){const i=this.projectiles[t];if(i.owner==="blue"?this.enemyDead:this.playerDead){this.removeProjectile(t);continue}const s=Math.min(z0*e,i.remainingRange),a=i.mesh.position.clone(),o=a.clone().addScaledVector(i.velocity.clone().normalize(),s);if(!this.isPathSegmentClear(a,o,this.obstacles)){this.removeProjectile(t);continue}const l=i.owner==="blue"?this.enemy.mesh:this.player;if(this.projectileHitsTarget(a,o,l.position)){i.owner==="blue"?this.damageEnemy(k0,1.1):this.damagePlayer(k0,1.1),this.removeProjectile(t);continue}i.mesh.position.copy(o),i.remainingRange-=s,i.remainingRange<=0&&this.removeProjectile(t)}}spawnPowerOrb(){for(let e=0;e<40;e+=1){const t=new P(Yi.randFloat(-86,86),0,Yi.randFloat(-86,86)),i=this.obstacles.some(p=>t.x>p.minX-1&&t.x<p.maxX+1&&t.z>p.minZ-1&&t.z<p.maxZ+1),r=this.zones.some(p=>t.distanceTo(p.position)<p.radius+3),s=t.distanceTo(this.player.position)<8,a=t.distanceTo(this.enemy.mesh.position)<8;if(i||r||s||a)continue;const o=new oi;o.position.set(t.x,.9,t.z);const l=new pn({color:15400822,emissive:9219608,emissiveIntensity:1.8,roughness:.25,metalness:.15}),c=new rt(new ep(.42,1),l);c.castShadow=!0,o.add(c);const u=new bi({color:15925146,transparent:!0,opacity:.72,side:un}),d=new rt(new np(.68,.055,8,32),u);d.rotation.x=Math.PI/2,d.position.y=-.45,o.add(d);const h=new d0(14286681,1.3,7,2);return h.position.y=.15,o.add(h),this.scene.add(o),this.powerOrbs.push({group:o,phase:Math.random()*Math.PI*2}),!0}return!1}removePowerOrb(e){const[t]=this.powerOrbs.splice(e,1);this.scene.remove(t.group),t.group.traverse(i=>{if(!(i instanceof rt))return;i.geometry.dispose();const r=Array.isArray(i.material)?i.material:[i.material];for(const s of r)s.dispose()})}updatePowerOrbs(e){if(this.matchEnded){for(;this.powerOrbs.length>0;)this.removePowerOrb(this.powerOrbs.length-1);return}this.powerOrbSpawnTimer-=e,this.powerOrbSpawnTimer<=0&&this.powerOrbs.length===0&&(this.powerOrbSpawnTimer=this.spawnPowerOrb()?cC:2);for(let t=this.powerOrbs.length-1;t>=0;t-=1){const i=this.powerOrbs[t];if(i.phase+=e,i.group.rotation.y+=e*1.4,i.group.position.y=.9+Math.sin(i.phase*2)*.16,!this.playerDead&&Math.hypot(i.group.position.x-this.player.position.x,i.group.position.z-this.player.position.z)<=H0){this.playerBulletCount+=1,this.removePowerOrb(t);continue}!this.enemyDead&&Math.hypot(i.group.position.x-this.enemy.mesh.position.x,i.group.position.z-this.enemy.mesh.position.z)<=H0&&(this.enemyBulletCount+=1,this.removePowerOrb(t))}}spawnShockwave(e,t){const i=new _c(.92,1,64);this.spawnCombatEffect(e,i,t,.55,.12,nh,.72)}spawnCombatEffect(e,t,i,r,s,a,o){const l=new oi,c=new bi({color:i,transparent:!0,opacity:o,side:un,depthWrite:!1}),u=new rt(t,c);u.rotation.x=-Math.PI/2,u.renderOrder=3,l.add(u),l.position.set(e.position.x,.04,e.position.z),l.rotation.y=e.rotation.y,l.scale.setScalar(s),this.scene.add(l),this.combatEffects.push({group:l,geometry:t,material:c,elapsed:0,duration:r,startScale:s,endScale:a,opacity:o})}spawnDamageText(e,t){const i=document.createElement("canvas");i.width=256,i.height=128;const r=i.getContext("2d");if(!r)return;const s=`-${Math.round(t)}`;r.font="bold 68px sans-serif",r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.lineWidth=10,r.strokeStyle="#3b1010",r.strokeText(s,128,66),r.fillStyle="#ff3026",r.fillText(s,128,66);const a=new Xu(i);a.colorSpace=mn;const o=new kx({map:a,transparent:!0,depthTest:!1,depthWrite:!1}),l=new u1(o);l.position.set(e.position.x,e.position.y+2.8,e.position.z),l.scale.set(2.5,1.25,1),this.scene.add(l),this.floatingDamageTexts.push({sprite:l,material:o,elapsed:0,duration:.9,startY:l.position.y})}updateCombatFeedback(e){var t;this.playerFlashTimer>0&&(this.playerFlashTimer=Math.max(0,this.playerFlashTimer-e),this.playerFlashTimer===0&&this.player.material.color.setHex(pl)),this.enemyFlashTimer>0&&(this.enemyFlashTimer=Math.max(0,this.enemyFlashTimer-e),this.enemyFlashTimer===0&&this.enemy.mesh.material.color.setHex(ml));for(let i=this.combatEffects.length-1;i>=0;i-=1){const r=this.combatEffects[i];r.elapsed+=e;const s=Math.min(1,r.elapsed/r.duration),a=Yi.lerp(r.startScale,r.endScale,s);r.group.scale.setScalar(a),r.material.opacity=r.opacity*(1-s),s>=1&&(this.scene.remove(r.group),r.geometry.dispose(),r.material.dispose(),this.combatEffects.splice(i,1))}for(let i=this.floatingDamageTexts.length-1;i>=0;i-=1){const r=this.floatingDamageTexts[i];r.elapsed+=e;const s=Math.min(1,r.elapsed/r.duration);r.sprite.position.y=r.startY+s*1.8,r.material.opacity=1-s,s>=1&&(this.scene.remove(r.sprite),(t=r.material.map)==null||t.dispose(),r.material.dispose(),this.floatingDamageTexts.splice(i,1))}}disposeCombatFeedback(){var e;for(;this.projectiles.length>0;)this.removeProjectile(this.projectiles.length-1);for(;this.powerOrbs.length>0;)this.removePowerOrb(this.powerOrbs.length-1);for(const t of this.combatEffects)this.scene.remove(t.group),t.geometry.dispose(),t.material.dispose();for(const t of this.floatingDamageTexts)this.scene.remove(t.sprite),(e=t.material.map)==null||e.dispose(),t.material.dispose();this.combatEffects=[],this.floatingDamageTexts=[]}updatePlayer(e){if(this.playerAttackCooldown>0&&(this.playerAttackCooldown-=e),this.playerSkillCooldown>0&&(this.playerSkillCooldown=Math.max(0,this.playerSkillCooldown-e)),this.playerDashCooldown>0&&(this.playerDashCooldown=Math.max(0,this.playerDashCooldown-e)),this.playerDead){this.playerRespawnTimer-=e,this.playerRespawnTimer<=0&&(this.playerHealth=this.playerMaxHealth,this.player.position.copy(this.playerSpawnPosition),this.playerVelocity.set(0,0,0),this.player.rotation.y=0,this.player.visible=!0,this.playerDead=!1,this.emitHealth());return}const t=12*this.playerStats.speedMultiplier;let i=0,r=0;if(this.keys.KeyW&&(i+=1),this.keys.KeyS&&(i-=1),this.keys.KeyA&&(r-=1),this.keys.KeyD&&(r+=1),this.playerDashTimer>0){this.playerDashTimer=Math.max(0,this.playerDashTimer-e),this.player.rotation.y=Math.atan2(-this.playerDashDirection.x,-this.playerDashDirection.z),this.playerRotation=this.player.rotation.y,this.playerVelocity.copy(this.playerDashDirection).multiplyScalar(t*Y0),this.moveWithCollisions(this.player.position,this.playerVelocity,e,ms);return}const s=new P(-Math.sin(this.cameraAngle),0,-Math.cos(this.cameraAngle)),a=new P(Math.cos(this.cameraAngle),0,-Math.sin(this.cameraAngle)),o=new P().addScaledVector(s,i).addScaledVector(a,r);o.length()>0?(o.normalize(),this.playerVelocity.lerp(o.clone().multiplyScalar(t),Math.min(1,e*10)),this.playerRotation=Math.atan2(-o.x,-o.z)):this.playerVelocity.lerp(new P(0,0,0),Math.min(1,e*10));let c=this.playerRotation-this.player.rotation.y;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.player.rotation.y+=c*Math.min(1,e*10),this.moveWithCollisions(this.player.position,this.playerVelocity,e,ms)}updatePlayerTwo(e){if(this.enemy.attackCooldown>0&&(this.enemy.attackCooldown=Math.max(0,this.enemy.attackCooldown-e)),this.enemySkillCooldown>0&&(this.enemySkillCooldown=Math.max(0,this.enemySkillCooldown-e)),this.enemyDashCooldown>0&&(this.enemyDashCooldown=Math.max(0,this.enemyDashCooldown-e)),this.enemyDead){this.enemyRespawnTimer-=e,this.enemyRespawnTimer<=0&&(this.enemy.health=this.enemy.maxHealth,this.enemy.mesh.position.copy(this.enemySpawnPosition),this.enemy.velocity.set(0,0,0),this.enemy.rotation=0,this.enemy.mesh.rotation.y=0,this.enemy.attackCooldown=0,this.enemy.mesh.visible=!0,this.enemyDead=!1,this.emitHealth());return}let t=0,i=0;if(this.keys.ArrowUp&&(t+=1),this.keys.ArrowDown&&(t-=1),this.keys.ArrowLeft&&(i-=1),this.keys.ArrowRight&&(i+=1),this.enemyDashTimer>0){this.enemyDashTimer=Math.max(0,this.enemyDashTimer-e),this.enemy.rotation=Math.atan2(-this.enemyDashDirection.x,-this.enemyDashDirection.z),this.enemy.mesh.rotation.y=this.enemy.rotation,this.enemy.velocity.copy(this.enemyDashDirection).multiplyScalar(12*this.enemyStats.speedMultiplier*Y0),this.moveWithCollisions(this.enemy.mesh.position,this.enemy.velocity,e,ms);return}const r=new P(-Math.sin(this.cameraAngle),0,-Math.cos(this.cameraAngle)),s=new P(Math.cos(this.cameraAngle),0,-Math.sin(this.cameraAngle)),a=new P().addScaledVector(r,t).addScaledVector(s,i);a.lengthSq()>0?(a.normalize(),this.enemy.velocity.lerp(a.clone().multiplyScalar(12*this.enemyStats.speedMultiplier),Math.min(1,e*10)),this.enemy.rotation=Math.atan2(-a.x,-a.z)):this.enemy.velocity.lerp(new P,Math.min(1,e*10));let o=this.enemy.rotation-this.enemy.mesh.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.enemy.mesh.rotation.y+=o*Math.min(1,e*10),this.moveWithCollisions(this.enemy.mesh.position,this.enemy.velocity,e,ms)}updateCamera(e,t,i,r){const o=new P(Math.sin(this.cameraAngle)*12,8,Math.cos(this.cameraAngle)*12),l=i.clone().add(o);t.position.lerp(l,Math.min(1,e*4)),r.lerp(i.clone().add(new P(0,1.5,0)),Math.min(1,e*6)),t.lookAt(r)}updateZones(e){var s,a,o,l;let t=null,i=null,r=!1;for(const c of this.zones){const u=this.isPlayerInZone(c),d=!this.enemyDead&&this.isEnemyInZone(c);d&&!u&&c.owner!=="red"&&(i=c.id,c.owner==="blue"&&c.state==="captured"&&(c.progress=0),c.state="capturing",c.progress=Math.min(1,c.progress+e*this.enemyStats.captureMultiplier/q0),r=!0,c.progress>=1&&(c.state="captured",c.owner="red",this.setZoneColor(c,oC),(a=(s=this.callbacks).onCapture)==null||a.call(s,c.label,"red"),r=!0)),u&&!d&&c.owner!=="blue"&&(t=c.id,c.owner==="red"&&c.state==="captured"&&(c.progress=0),c.state="capturing",c.progress=Math.min(1,c.progress+e*this.playerStats.captureMultiplier/q0),r=!0,c.progress>=1&&(c.state="captured",c.owner="blue",this.setZoneColor(c,pl),(l=(o=this.callbacks).onCapture)==null||l.call(o,c.label,"blue"),r=!0)),!u&&!d&&c.progress>0&&c.state!=="captured"&&(c.progress=Math.max(0,c.progress-e/2),c.progress===0&&(c.state="neutral"),r=!0)}this.playerOneActiveZoneId=t,this.playerTwoActiveZoneId=i;for(const c of this.zones){const u=.5+.5*Math.sin(this.elapsed*3+c.id*1.5),d=c.state==="capturing"?.15+u*.15:.08+u*.08,h=c.state==="capturing"?1.5+u*1:.8+u*.6;c.glowMaterial.opacity=d,c.light.intensity=h}r&&this.emitZoneStatus(),this.captureMessageTimer>0&&(this.captureMessageTimer-=e)}isPlayerInZone(e){const t=this.player.position.x-e.position.x,i=this.player.position.z-e.position.z;return Math.sqrt(t*t+i*i)<e.radius}isEnemyInZone(e){const t=this.enemy.mesh.position.x-e.position.x,i=this.enemy.mesh.position.z-e.position.z;return Math.sqrt(t*t+i*i)<e.radius}updateHealthBars(){if(!this.playerDead){const e=this.playerHealth/this.playerMaxHealth,t=e>.5?4521830:e>.25?16766532:16729156;this.updateHealthBar(this.playerHealthBar,e,t)}if(!this.enemyDead){const e=this.enemy.health/this.enemy.maxHealth,t=e>.5?16757854:16743204;this.updateHealthBar(this.enemy.healthBar,e,t)}}setZoneColor(e,t){e.ringMaterial.color.setHex(t),e.glowMaterial.color.setHex(t),e.flagMaterial.color.setHex(t),e.light.color.setHex(t)}emitZoneStatus(){this.callbacks.onZoneStatusUpdate&&this.callbacks.onZoneStatusUpdate(this.zones.map(e=>({id:e.id,label:e.label,x:e.position.x,z:e.position.z,state:e.state,owner:e.owner,progress:e.progress})))}emitHealth(){if(!this.callbacks.onHealthUpdate)return;const e=[];this.playerDead||e.push({id:"player",label:"Player 1",maxHealth:this.playerMaxHealth,health:this.playerHealth,team:"blue"}),this.enemyDead||e.push({id:"enemy",label:"Player 2",maxHealth:this.enemyStats.maxHealth,health:this.enemy.health,team:"red"}),this.callbacks.onHealthUpdate(e)}getActiveZoneProgress(e){const t=e==="playerOne"?this.playerOneActiveZoneId:this.playerTwoActiveZoneId;if(t===null)return null;const i=this.zones.find(r=>r.id===t);return i?i.progress:null}getPlayerMapPositions(){return{playerOne:{x:this.player.position.x,z:this.player.position.z},playerTwo:{x:this.enemy.mesh.position.x,z:this.enemy.mesh.position.z}}}getPowerOrbPositions(){return this.powerOrbs.map(e=>({x:e.group.position.x,z:e.group.position.z}))}getSkillCooldown(){return this.playerSkillCooldown}getPlayerTwoSkillCooldown(){return this.enemySkillCooldown}getPlayerOneDashCooldown(){return this.playerDashCooldown}getPlayerTwoDashCooldown(){return this.enemyDashCooldown}getPlayerOneBulletCount(){return this.playerBulletCount}getPlayerTwoBulletCount(){return this.enemyBulletCount}getMatchTimeRemaining(){return this.matchTimeRemaining}getSuddenDeathTeam(){return this.suddenDeathTeam}getSuddenDeathRemaining(){return this.suddenDeathRemaining}getMatchWinner(){return this.matchWinner}getEnemyHealth(){return this.enemyDead?0:this.enemy.health}isEnemyDead(){return this.enemyDead}updateMatch(e){if(this.matchEnded)return;this.matchTimeRemaining=Math.max(0,this.matchTimeRemaining-e);const t=this.zones.filter(s=>s.owner==="blue").length,i=this.zones.filter(s=>s.owner==="red").length;if(this.matchTimeRemaining<=0){this.matchWinner=t===i?"draw":t>i?"blue":"red",this.matchEnded=!0;return}const r=this.zones.length>0&&t===this.zones.length?"blue":this.zones.length>0&&i===this.zones.length?"red":null;if(r===null){this.suddenDeathTeam=null,this.suddenDeathRemaining=0;return}this.suddenDeathTeam!==r&&(this.suddenDeathTeam=r,this.suddenDeathRemaining=hC),this.suddenDeathRemaining=Math.max(0,this.suddenDeathRemaining-e),this.suddenDeathRemaining<=0&&(this.matchWinner=r,this.matchEnded=!0)}dispose(){this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),this.disposeCombatFeedback(),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement)}}/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h_=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Xe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Xe.createElement("svg",{ref:l,...pC,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:h_("lucide",r),...o},[...a.map(([c,u])=>Xe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=(n,e)=>{const t=Xe.forwardRef(({className:i,...r},s)=>Xe.createElement(mC,{ref:s,iconNode:e,className:h_(`lucide-${dC(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Hi("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Hi("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=Hi("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=Hi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=Hi("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=Hi("Skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=Hi("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=Hi("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Hi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),J0=n=>{const e=Math.ceil(n);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},_l=(n,e)=>({left:`${(n+100)/200*100}%`,top:`${(e+100)/200*100}%`}),_C=[{playerClass:"attacker",title:"Attacker",description:"+50% attack damage",accent:"border-red-400/30 bg-red-500/10 hover:bg-red-500/20 text-red-200"},{playerClass:"defender",title:"Defender",description:"200 health, 25% slower",accent:"border-green-400/30 bg-green-500/10 hover:bg-green-500/20 text-green-200"},{playerClass:"runner",title:"Runner",description:"+40% speed, 2x capture",accent:"border-amber-400/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200"}];function yC(){const n=Xe.useRef(null),e=Xe.useRef(null),t=Xe.useRef(null),[i,r]=Xe.useState([]),[s,a]=Xe.useState(null),[o,l]=Xe.useState(null),[c,u]=Xe.useState(null),[d,h]=Xe.useState(0),[p,v]=Xe.useState([]),[M,g]=Xe.useState(!1),[f,m]=Xe.useState(!0),[y,x]=Xe.useState(null),[w,T]=Xe.useState(null),[b,_]=Xe.useState("playerOne"),[A,C]=Xe.useState(0),[L,F]=Xe.useState(0),[z,O]=Xe.useState(0),[G,ee]=Xe.useState(0),[$,H]=Xe.useState(1),[B,q]=Xe.useState(1),[J,he]=Xe.useState({blue:0,red:0}),[Se,qe]=Xe.useState({playerOne:{x:-55,z:0},playerTwo:{x:55,z:0}}),[Be,Ue]=Xe.useState([]),[K,ne]=Xe.useState(120),[_e,De]=Xe.useState(null),[xe,Oe]=Xe.useState(0),[vt,ze]=Xe.useState(null),Ke=Xe.useCallback((N,Q)=>{he(Ee=>({...Ee,[Q]:Ee[Q]+1}));const ae=Q==="blue"?`Player 1 captured ${N}!`:`Player 2 captured ${N}!`;u({text:ae,team:Q}),h(Ee=>Ee+1)},[]),st=Xe.useCallback(()=>{g(!0),setTimeout(()=>g(!1),200)},[]);Xe.useEffect(()=>{if(!n.current||!y||!w)return;const N=new fC(n.current,y,w,{onZoneStatusUpdate:r,onCapture:Ke,onHealthUpdate:v,onAttack:st});e.current=N;let Q=0;const ae=()=>{Q+=1,a(N.getActiveZoneProgress("playerOne")),l(N.getActiveZoneProgress("playerTwo")),C(Math.ceil(N.getSkillCooldown())),F(Math.ceil(N.getPlayerTwoSkillCooldown())),O(Math.ceil(N.getPlayerOneDashCooldown())),ee(Math.ceil(N.getPlayerTwoDashCooldown())),H(N.getPlayerOneBulletCount()),q(N.getPlayerTwoBulletCount()),ne(Math.ceil(N.getMatchTimeRemaining())),De(N.getSuddenDeathTeam()),Oe(Math.ceil(N.getSuddenDeathRemaining())),ze(N.getMatchWinner()),Q%6===0&&(qe(N.getPlayerMapPositions()),Ue(N.getPowerOrbPositions())),t.current=requestAnimationFrame(ae)};return t.current=requestAnimationFrame(ae),()=>{t.current!==null&&cancelAnimationFrame(t.current),N.dispose(),e.current=null}},[Ke,st,y,w]),Xe.useEffect(()=>{if(c===null)return;const N=setTimeout(()=>u(null),3500);return()=>clearTimeout(N)},[c,d]);const ke=i.filter(N=>N.owner==="blue").length,ht=i.filter(N=>N.owner==="red").length,Ct=i.length,Zt=Ct>0&&ke===Ct,at=p.find(N=>N.id==="player"),dt=p.find(N=>N.id==="enemy"),U=()=>{var N;(N=e.current)==null||N.performAttack()},Ht=()=>{var N;(N=e.current)==null||N.performSkill()},tt=()=>{var N;(N=e.current)==null||N.performPlayerTwoAttack()},R=()=>{var N;(N=e.current)==null||N.performPlayerTwoSkill()},S=()=>{var N;(N=e.current)==null||N.performPlayerOneDash()},k=()=>{var N;(N=e.current)==null||N.performPlayerTwoDash()},Y=()=>{m(!0),x(null),T(null),_("playerOne"),r([]),a(null),l(null),u(null),v([]),g(!1),C(0),F(0),O(0),ee(0),H(1),q(1),he({blue:0,red:0}),qe({playerOne:{x:-55,z:0},playerTwo:{x:55,z:0}}),Ue([]),ne(120),De(null),Oe(0),ze(null)},j=N=>{b==="playerOne"?(x(N),_("playerTwo")):T(N)},se=N=>N==="blue"?"bg-blue-500/20 border-blue-400/40 text-blue-200":N==="red"?"bg-red-500/20 border-red-400/40 text-red-200":"bg-white/5 border-white/10 text-white/70",oe=N=>N==="blue"?V.jsx(xl,{className:"w-4 h-4 text-blue-300"}):N==="red"?V.jsx(vl,{className:"w-4 h-4 text-red-300"}):V.jsx(xC,{className:"w-4 h-4 text-yellow-300/80"});return V.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#1a1a24] select-none",children:[V.jsx("div",{ref:n,className:"w-full h-full"}),f?V.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm",children:V.jsxs("section",{className:"w-full max-w-3xl rounded-xl border border-white/15 bg-[#20202c]/95 p-6 shadow-2xl sm:p-8",children:[V.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[V.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-lg border border-amber-300/25 bg-amber-400/10",children:V.jsx(xl,{className:"h-5 w-5 text-amber-300"})}),V.jsxs("div",{children:[V.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-amber-300",children:"Before the match"}),V.jsx("h1",{className:"text-2xl font-bold text-white sm:text-3xl",children:"How To Play"})]})]}),V.jsx("p",{className:"max-w-2xl text-sm leading-6 text-white/70",children:"Stand inside a flag circle to capture it. If both players are inside, capture progress pauses. Own more flags when the 2-minute timer ends to win. Capture all five and hold them for 10 seconds to win early; losing even one flag cancels that countdown."}),V.jsxs("p",{className:"mt-4 flex items-start gap-2 rounded-lg border border-lime-300/20 bg-lime-300/5 p-3 text-xs leading-5 text-lime-100/80",children:[V.jsx(ih,{className:"mt-0.5 h-4 w-4 shrink-0 text-lime-300"}),"Collect the glowing orb that appears at the start and every 15 seconds to add one bullet to each shot. When you are defeated, your volley resets to one bullet."]}),V.jsxs("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:[V.jsxs("div",{className:"rounded-lg border border-blue-400/20 bg-blue-500/10 p-4",children:[V.jsx("p",{className:"mb-2 text-sm font-bold text-blue-200",children:"Player 1 · Blue"}),V.jsx("p",{className:"text-xs leading-5 text-white/65",children:"Move: WASD · Attack: Space · Skill: E · Dash: Q"})]}),V.jsxs("div",{className:"rounded-lg border border-orange-400/20 bg-orange-500/10 p-4",children:[V.jsx("p",{className:"mb-2 text-sm font-bold text-orange-200",children:"Player 2 · Orange"}),V.jsx("p",{className:"text-xs leading-5 text-white/65",children:"Move: Arrow keys · Attack: M or Numpad 0 · Skill: K · Dash: N"})]})]}),V.jsx("button",{onClick:()=>m(!1),className:"mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-300/30 bg-amber-400/15 px-5 py-3 text-sm font-bold text-amber-100 transition-colors hover:bg-amber-400/25",children:"Choose Roles"})]})}):!y||!w?V.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm",children:V.jsxs("section",{className:"w-full max-w-3xl rounded-xl border border-white/15 bg-[#20202c]/95 p-6 shadow-2xl sm:p-8",children:[V.jsx("p",{className:"mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300",children:b==="playerOne"?"Player 1 · Step 1 of 2":"Player 2 · Step 2 of 2"}),V.jsx("h1",{className:"mb-3 text-3xl font-bold text-white",children:b==="playerOne"?"Player 1, choose your role":"Player 2, choose your role"}),y&&V.jsxs("p",{className:"mb-6 text-sm text-blue-200/70",children:["Player 1 selected ",y,"."]}),!y&&V.jsx("div",{className:"mb-3"}),V.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:_C.map(N=>V.jsxs("button",{onClick:()=>j(N.playerClass),className:`flex min-h-28 flex-col items-start justify-center rounded-lg border p-5 text-left transition-colors ${N.accent}`,children:[V.jsx("span",{className:"text-lg font-bold",children:N.title}),V.jsx("span",{className:"mt-1 text-sm opacity-75",children:N.description})]},N.playerClass))})]})}):V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"pointer-events-none absolute right-4 top-6 z-10 w-32 sm:w-40",children:[V.jsxs("div",{className:"mb-1 flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-widest text-white/65",children:[V.jsx("span",{children:"Arena map"}),V.jsx("span",{className:"text-white/40",children:"N"})]}),V.jsxs("div",{className:"relative aspect-square overflow-hidden rounded-lg border border-white/20 bg-[#5992b0] shadow-lg shadow-black/30",children:[V.jsx("div",{className:"absolute inset-0 opacity-35",style:{backgroundImage:"linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)",backgroundSize:"25% 25%"}}),V.jsx("div",{className:"absolute inset-[5%] rounded-sm border border-white/40"}),i.map(N=>V.jsx("div",{title:`${N.label}: ${N.owner}`,className:`absolute z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/80 shadow-sm sm:h-3 sm:w-3 ${N.owner==="blue"?"bg-blue-400":N.owner==="red"?"bg-orange-400":"bg-amber-300"} ${N.state==="capturing"?"animate-pulse ring-2 ring-white/60":""}`,style:_l(N.x,N.z)},`map-zone-${N.id}`)),Be.map((N,Q)=>V.jsx("div",{title:"Fire-rate power-up",className:"absolute z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-lime-300 shadow-[0_0_8px_3px_rgba(217,255,89,0.75)] animate-pulse sm:h-3 sm:w-3",style:_l(N.x,N.z)},`map-orb-${Q}`)),V.jsx("div",{title:"Player 1",className:"absolute z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-blue-600 text-[8px] font-black text-white shadow sm:h-[18px] sm:w-[18px]",style:_l(Se.playerOne.x,Se.playerOne.z),children:"1"}),V.jsx("div",{title:"Player 2",className:"absolute z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-orange-500 text-[8px] font-black text-white shadow sm:h-[18px] sm:w-[18px]",style:_l(Se.playerTwo.x,Se.playerTwo.z),children:"2"})]}),V.jsxs("div",{className:"mt-1 flex justify-end gap-2 text-[9px] font-semibold text-white/70",children:[V.jsxs("span",{children:[V.jsx("span",{className:"text-blue-300",children:"1"})," P1"]}),V.jsxs("span",{children:[V.jsx("span",{className:"text-orange-300",children:"2"})," P2"]}),V.jsx("span",{className:"text-amber-200",children:"◆"})," Flag",V.jsx("span",{className:"text-lime-300",children:"●"})," Orb"]})]}),V.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px bg-white/25"}),M&&V.jsx("div",{className:"pointer-events-none absolute inset-0 bg-white/5"}),V.jsxs("div",{className:"pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-wide font-light",children:[V.jsx("span",{className:"font-semibold text-blue-300",children:"P1"})," WASD / Space / E / Q",V.jsx("span",{className:"mx-3 text-white/30",children:"|"}),V.jsx("span",{className:"font-semibold text-orange-300",children:"P2"})," Arrows / M or Num0 / K / N"]}),V.jsxs("div",{className:"absolute right-6 top-48 flex max-h-[calc(100vh-14rem)] flex-col items-end gap-2.5 overflow-y-auto sm:top-52",children:[V.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 rounded-lg backdrop-blur-md bg-black/30 border border-white/10 mb-1",children:[V.jsxs("div",{className:"flex items-center gap-1.5",children:[V.jsx(K0,{className:"w-4 h-4 text-blue-400"}),V.jsx("span",{className:"text-blue-300 text-sm font-bold tabular-nums",children:J.blue}),V.jsx("span",{className:"text-blue-200/60 text-[10px]",children:"P1"})]}),V.jsx("span",{className:"text-white/30 text-xs",children:"vs"}),V.jsxs("div",{className:"flex items-center gap-1.5",children:[V.jsx("span",{className:"text-orange-300 text-sm font-bold tabular-nums",children:J.red}),V.jsx("span",{className:"text-orange-200/60 text-[10px]",children:"P2"}),V.jsx(vl,{className:"w-4 h-4 text-orange-400"})]})]}),V.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-mono text-white/80 tabular-nums",children:[V.jsx(gC,{className:"h-3.5 w-3.5 text-amber-300"}),V.jsx("span",{children:J0(K)}),V.jsx("span",{className:"text-white/40",children:"remaining"})]}),V.jsxs("div",{className:"rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/65",children:["Flags held ",V.jsx("span",{className:"ml-1 font-mono font-bold text-blue-300",children:ke}),V.jsx("span",{className:"mx-1 text-white/30",children:":"}),V.jsx("span",{className:"font-mono font-bold text-orange-300",children:ht})]}),_e&&V.jsxs("div",{className:`rounded-lg border px-3 py-2 text-xs font-bold tabular-nums ${_e==="blue"?"border-blue-300/30 bg-blue-500/20 text-blue-100":"border-orange-300/30 bg-orange-500/20 text-orange-100"}`,children:["Hold all flags: ",J0(xe)]}),i.map(N=>{const Q=N.state==="capturing";return V.jsxs("div",{className:`flex items-center gap-2.5 px-4 py-2.5 rounded-lg backdrop-blur-md border transition-all duration-300 ${se(N.owner)} ${Q?"ring-2 ring-yellow-400/30 animate-pulse":""}`,children:[oe(N.owner),V.jsx("span",{className:"text-xs font-medium tracking-wide",children:N.label})]},N.id)}),V.jsxs("button",{onClick:Y,className:"mt-1 flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white",children:[V.jsx(Z0,{className:"h-3.5 w-3.5"}),"Reset Game"]})]}),V.jsxs("div",{className:"pointer-events-none absolute top-6 left-6 flex flex-col gap-3 w-56",children:[at&&V.jsxs("div",{className:"px-4 py-3 rounded-lg backdrop-blur-md bg-blue-500/10 border border-blue-400/25",children:[V.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[V.jsx(K0,{className:"w-4 h-4 text-blue-400"}),V.jsx("span",{className:"text-blue-200 text-xs font-bold tracking-wide",children:"PLAYER 1"}),V.jsxs("span",{className:"text-white/50 text-xs font-mono ml-auto tabular-nums",children:[at.health,"/",at.maxHealth]})]}),V.jsx("div",{className:"h-2.5 rounded-full bg-black/50 overflow-hidden",children:V.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300",style:{width:`${at.health/at.maxHealth*100}%`}})})]}),dt&&V.jsxs("div",{className:"px-4 py-3 rounded-lg backdrop-blur-md bg-orange-500/10 border border-orange-400/25",children:[V.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[V.jsx(vl,{className:"w-4 h-4 text-orange-400"}),V.jsx("span",{className:"text-orange-200 text-xs font-bold tracking-wide",children:"PLAYER 2"}),V.jsxs("span",{className:"text-white/50 text-xs font-mono ml-auto tabular-nums",children:[dt.health,"/",dt.maxHealth]})]}),V.jsx("div",{className:"h-2.5 rounded-full bg-black/50 overflow-hidden",children:V.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300",style:{width:`${dt.health/dt.maxHealth*100}%`}})})]})]}),V.jsxs("div",{className:"pointer-events-none absolute inset-x-0 bottom-44 grid grid-cols-2 gap-3 px-3 sm:bottom-24 sm:gap-6 sm:px-6",children:[s!==null?V.jsxs("div",{className:"w-full max-w-sm justify-self-center",children:[V.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[V.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-blue-200 sm:text-xs",children:"P1 capturing"}),V.jsxs("span",{className:"font-mono text-[10px] tabular-nums text-white/80 sm:text-xs",children:[Math.round(s*100),"%"]})]}),V.jsx("div",{className:"h-2.5 overflow-hidden rounded-full border border-blue-200/20 bg-black/60 sm:h-3",children:V.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-[width] duration-75 ease-linear shadow-[0_0_12px_rgba(70,160,255,0.55)]",style:{width:`${s*100}%`}})})]}):V.jsx("div",{}),o!==null?V.jsxs("div",{className:"w-full max-w-sm justify-self-center",children:[V.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[V.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-orange-200 sm:text-xs",children:"P2 capturing"}),V.jsxs("span",{className:"font-mono text-[10px] tabular-nums text-white/80 sm:text-xs",children:[Math.round(o*100),"%"]})]}),V.jsx("div",{className:"h-2.5 overflow-hidden rounded-full border border-orange-200/20 bg-black/60 sm:h-3",children:V.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-300 transition-[width] duration-75 ease-linear shadow-[0_0_12px_rgba(255,150,60,0.55)]",style:{width:`${o*100}%`}})})]}):V.jsx("div",{})]}),c&&V.jsxs("div",{className:`pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-lg border ${c.team==="blue"?"bg-blue-500/20 border-blue-400/40 shadow-[0_0_30px_rgba(42,127,255,0.3)]":"bg-red-500/20 border-red-400/40 shadow-[0_0_30px_rgba(255,58,58,0.3)]"}`,style:{animation:"capturePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[c.team==="blue"?V.jsx(vC,{className:"w-6 h-6 text-blue-300"}):V.jsx(vl,{className:"w-6 h-6 text-red-300"}),V.jsx("span",{className:`text-lg font-bold tracking-wide ${c.team==="blue"?"text-blue-100":"text-red-100"}`,children:c.text})]},d),Zt&&V.jsxs("div",{className:"pointer-events-none absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500/15 backdrop-blur-md border border-amber-400/30",children:[V.jsx(xl,{className:"w-5 h-5 text-amber-300"}),V.jsxs("span",{className:"text-amber-200 text-sm font-semibold tracking-wide",children:["All treasures secured — ",ke,"/",Ct]})]}),vt&&V.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm",children:V.jsxs("section",{className:"w-full max-w-md rounded-xl border border-white/15 bg-[#20202c]/95 p-8 text-center shadow-2xl",children:[V.jsx(xl,{className:`mx-auto mb-4 h-10 w-10 ${vt==="blue"?"text-blue-300":vt==="red"?"text-orange-300":"text-amber-300"}`}),V.jsx("p",{className:"mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/45",children:"Match complete"}),V.jsx("h2",{className:"text-3xl font-bold text-white",children:vt==="blue"?"Player 1 Wins":vt==="red"?"Player 2 Wins":"Draw"}),V.jsxs("p",{className:"mt-3 text-sm text-white/60",children:["Final flags: ",V.jsx("span",{className:"font-mono text-blue-300",children:ke}),V.jsx("span",{className:"mx-2 text-white/30",children:"to"}),V.jsx("span",{className:"font-mono text-orange-300",children:ht})]}),V.jsxs("button",{onClick:Y,className:"mt-7 flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15",children:[V.jsx(Z0,{className:"h-4 w-4"}),"Play Again"]})]})}),V.jsxs("div",{className:"absolute inset-x-0 bottom-4 grid grid-cols-2 gap-2 px-2 sm:gap-4 sm:px-4",children:[V.jsxs("div",{className:"flex flex-col items-stretch justify-center gap-2 sm:flex-row",children:[V.jsxs("button",{onClick:U,className:"flex items-center justify-center gap-2 rounded-xl border border-blue-300/30 bg-gradient-to-b from-blue-500 to-blue-800 px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all hover:from-blue-400 hover:to-blue-700 active:scale-95 sm:px-4 sm:text-sm",children:[V.jsx(j0,{className:"h-4 w-4"}),V.jsx("span",{children:"Attack"}),V.jsxs("span",{className:"font-mono text-[10px] text-blue-100/70 sm:text-xs",children:[$,"x"]}),V.jsx("span",{className:"font-mono text-[10px] text-blue-100/70 sm:text-xs",children:"SPACE"})]}),V.jsxs("button",{onClick:Ht,disabled:A>0,className:`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${A>0?"cursor-not-allowed border-blue-400/15 bg-slate-700/90 text-white/60":"border-blue-300/30 bg-gradient-to-b from-cyan-600 to-blue-800 hover:from-cyan-500 hover:to-blue-700 active:scale-95"}`,children:[V.jsx(ih,{className:"h-4 w-4"}),V.jsx("span",{children:"Skill 1"}),V.jsx("span",{className:"font-mono text-[10px] text-blue-100/70 sm:text-xs",children:"E"}),A>0&&V.jsxs("span",{className:"font-mono text-[10px] tabular-nums sm:text-xs",children:[A,"s"]})]}),V.jsxs("button",{onClick:S,disabled:z>0,className:`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${z>0?"cursor-not-allowed border-blue-400/15 bg-slate-700/90 text-white/60":"border-blue-300/30 bg-gradient-to-b from-blue-500 to-indigo-800 hover:from-blue-400 hover:to-indigo-700 active:scale-95"}`,children:[V.jsx("span",{children:"Dash"}),V.jsx("span",{className:"font-mono text-[10px] text-blue-100/70 sm:text-xs",children:"Q"}),z>0&&V.jsxs("span",{className:"font-mono text-[10px] tabular-nums sm:text-xs",children:[z,"s"]})]})]}),V.jsxs("div",{className:"flex flex-col items-stretch justify-center gap-2 sm:flex-row",children:[V.jsxs("button",{onClick:tt,className:"flex items-center justify-center gap-2 rounded-xl border border-orange-300/30 bg-gradient-to-b from-orange-500 to-orange-800 px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all hover:from-orange-400 hover:to-orange-700 active:scale-95 sm:px-4 sm:text-sm",children:[V.jsx(j0,{className:"h-4 w-4"}),V.jsx("span",{children:"Attack"}),V.jsxs("span",{className:"font-mono text-[10px] text-orange-100/70 sm:text-xs",children:[B,"x"]}),V.jsx("span",{className:"font-mono text-[10px] text-orange-100/70 sm:text-xs",children:"M / 0"})]}),V.jsxs("button",{onClick:R,disabled:L>0,className:`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${L>0?"cursor-not-allowed border-orange-400/15 bg-slate-700/90 text-white/60":"border-orange-300/30 bg-gradient-to-b from-amber-600 to-orange-800 hover:from-amber-500 hover:to-orange-700 active:scale-95"}`,children:[V.jsx(ih,{className:"h-4 w-4"}),V.jsx("span",{children:"Skill 1"}),V.jsx("span",{className:"font-mono text-[10px] text-orange-100/70 sm:text-xs",children:"K"}),L>0&&V.jsxs("span",{className:"font-mono text-[10px] tabular-nums sm:text-xs",children:[L,"s"]})]}),V.jsxs("button",{onClick:k,disabled:G>0,className:`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${G>0?"cursor-not-allowed border-orange-400/15 bg-slate-700/90 text-white/60":"border-orange-300/30 bg-gradient-to-b from-orange-500 to-rose-800 hover:from-orange-400 hover:to-rose-700 active:scale-95"}`,children:[V.jsx("span",{children:"Dash"}),V.jsx("span",{className:"font-mono text-[10px] text-orange-100/70 sm:text-xs",children:"N"}),G>0&&V.jsxs("span",{className:"font-mono text-[10px] tabular-nums sm:text-xs",children:[G,"s"]})]})]})]})]}),V.jsx("style",{children:`
        @keyframes capturePop {
          0% { opacity: 0; transform: translate(-50%, 10px) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `})]})}hx(document.getElementById("root")).render(V.jsx(Xe.StrictMode,{children:V.jsx(yC,{})}));
