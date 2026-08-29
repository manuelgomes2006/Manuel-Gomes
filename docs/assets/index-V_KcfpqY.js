(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function JM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vx={exports:{}},Yc={},xx={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),eE=Symbol.for("react.portal"),tE=Symbol.for("react.fragment"),nE=Symbol.for("react.strict_mode"),iE=Symbol.for("react.profiler"),rE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),oE=Symbol.for("react.forward_ref"),aE=Symbol.for("react.suspense"),lE=Symbol.for("react.memo"),cE=Symbol.for("react.lazy"),jm=Symbol.iterator;function uE(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var _x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yx=Object.assign,Sx={};function yo(t,e,n){this.props=t,this.context=e,this.refs=Sx,this.updater=n||_x}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mx(){}Mx.prototype=yo.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=Sx,this.updater=n||_x}var Xh=Wh.prototype=new Mx;Xh.constructor=Wh;yx(Xh,yo.prototype);Xh.isPureReactComponent=!0;var Ym=Array.isArray,Ex=Object.prototype.hasOwnProperty,jh={current:null},Tx={key:!0,ref:!0,__self:!0,__source:!0};function wx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ex.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:jh.current}}function fE(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function dE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dE(""+t.key):e.toString(36)}function Hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case eE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Eu(o,0):i,Ym(r)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),Hl(r,e,n,"",function(c){return c})):r!=null&&(Yh(r)&&(r=fE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($m,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ym(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Eu(s,a);o+=Hl(s,e,n,l,r)}else if(l=uE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Eu(s,a++),o+=Hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return Hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function hE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Gl={transition:null},pE={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:jh};function Ax(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=yo;$e.Fragment=tE;$e.Profiler=iE;$e.PureComponent=Wh;$e.StrictMode=nE;$e.Suspense=aE;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pE;$e.act=Ax;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ex.call(e,l)&&!Tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:sE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rE,_context:t},t.Consumer=t};$e.createElement=wx;$e.createFactory=function(t){var e=wx.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:oE,render:t}};$e.isValidElement=Yh;$e.lazy=function(t){return{$$typeof:cE,_payload:{_status:-1,_result:t},_init:hE}};$e.memo=function(t,e){return{$$typeof:lE,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};$e.unstable_act=Ax;$e.useCallback=function(t,e){return pn.current.useCallback(t,e)};$e.useContext=function(t){return pn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return pn.current.useEffect(t,e)};$e.useId=function(){return pn.current.useId()};$e.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return pn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};$e.useRef=function(t){return pn.current.useRef(t)};$e.useState=function(t){return pn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return pn.current.useTransition()};$e.version="18.3.1";xx.exports=$e;var ae=xx.exports;const mE=JM(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE=ae,vE=Symbol.for("react.element"),xE=Symbol.for("react.fragment"),_E=Object.prototype.hasOwnProperty,yE=gE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SE={key:!0,ref:!0,__self:!0,__source:!0};function bx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_E.call(e,i)&&!SE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vE,type:t,key:s,ref:o,props:r,_owner:yE.current}}Yc.Fragment=xE;Yc.jsx=bx;Yc.jsxs=bx;vx.exports=Yc;var A=vx.exports,Hf={},Cx={exports:{}},Nn={},Rx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,$){var D=F.length;F.push($);e:for(;0<D;){var R=D-1>>>1,q=F[R];if(0<r(q,$))F[R]=$,F[D]=q,D=R;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var $=F[0],D=F.pop();if(D!==$){F[0]=D;e:for(var R=0,q=F.length,ce=q>>>1;R<ce;){var Ee=2*(R+1)-1,xe=F[Ee],z=Ee+1,J=F[z];if(0>r(xe,D))z<q&&0>r(J,xe)?(F[R]=J,F[z]=D,R=z):(F[R]=xe,F[Ee]=D,R=Ee);else if(z<q&&0>r(J,D))F[R]=J,F[z]=D,R=z;else break e}}return $}function r(F,$){var D=F.sortIndex-$.sortIndex;return D!==0?D:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,g=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=F)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function M(F){if(S=!1,y(F),!g)if(n(l)!==null)g=!0,Z(E);else{var $=n(c);$!==null&&H(M,$.startTime-F)}}function E(F,$){g=!1,S&&(S=!1,h(x),x=-1),p=!0;var D=u;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||F&&!N());){var R=d.callback;if(typeof R=="function"){d.callback=null,u=d.priorityLevel;var q=R(d.expirationTime<=$);$=t.unstable_now(),typeof q=="function"?d.callback=q:d===n(l)&&i(l),y($)}else i(l);d=n(l)}if(d!==null)var ce=!0;else{var Ee=n(c);Ee!==null&&H(M,Ee.startTime-$),ce=!1}return ce}finally{d=null,u=D,p=!1}}var T=!1,b=null,x=-1,C=5,L=-1;function N(){return!(t.unstable_now()-L<C)}function B(){if(b!==null){var F=t.unstable_now();L=F;var $=!0;try{$=b(!0,F)}finally{$?K():(T=!1,b=null)}}else T=!1}var K;if(typeof v=="function")K=function(){v(B)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,V=te.port2;te.port1.onmessage=B,K=function(){V.postMessage(null)}}else K=function(){m(B,0)};function Z(F){b=F,T||(T=!0,K())}function H(F,$){x=m(function(){F(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Z(E))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(u){case 1:case 2:case 3:var $=3;break;default:$=u}var D=u;u=$;try{return F()}finally{u=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var D=u;u=F;try{return $()}finally{u=D}},t.unstable_scheduleCallback=function(F,$,D){var R=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?R+D:R):D=R,F){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=D+q,F={id:f++,callback:$,priorityLevel:F,startTime:D,expirationTime:q,sortIndex:-1},D>R?(F.sortIndex=D,e(c,F),n(l)===null&&F===n(c)&&(S?(h(x),x=-1):S=!0,H(M,D-R))):(F.sortIndex=q,e(l,F),g||p||(g=!0,Z(E))),F},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(F){var $=u;return function(){var D=u;u=$;try{return F.apply(this,arguments)}finally{u=D}}}})(Px);Rx.exports=Px;var ME=Rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EE=ae,Dn=ME;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dx=new Set,fa={};function ds(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(fa[t]=e,t=0;t<e.length;t++)Dx.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=Object.prototype.hasOwnProperty,TE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qm={},Km={};function wE(t){return Gf.call(Km,t)?!0:Gf.call(qm,t)?!1:TE.test(t)?Km[t]=!0:(qm[t]=!0,!1)}function AE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bE(t,e,n,i){if(e===null||typeof e>"u"||AE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,qh);Zt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,qh);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,qh);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bE(e,n,r,i)&&(n=null),i||r===null?wE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=EE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Ix=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Tu;function Go(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||""}return`
`+Tu+t}var wu=!1;function Au(t,e){if(!t||wu)return"";wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function CE(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function Yf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ns:return"Portal";case Wf:return"Profiler";case Zh:return"StrictMode";case Xf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nx:return(t.displayName||"Context")+".Consumer";case Lx:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:Yf(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return Yf(t(e))}catch{}}return null}function RE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ux(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PE(t){var e=Ux(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=PE(t))}function Fx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ux(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ox(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function qf(t,e){Ox(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kf(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kf(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Wo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function kx(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DE=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){DE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function Vx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function Hx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var LE=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jf(t,e){if(e){if(LE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nd=null,Zs=null,Qs=null;function ng(t){if(t=ka(t)){if(typeof nd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Qc(e),nd(t.stateNode,t.type,e))}}function Gx(t){Zs?Qs?Qs.push(t):Qs=[t]:Zs=t}function Wx(){if(Zs){var t=Zs,e=Qs;if(Qs=Zs=null,ng(t),e)for(t=0;t<e.length;t++)ng(e[t])}}function Xx(t,e){return t(e)}function jx(){}var bu=!1;function Yx(t,e,n){if(bu)return t(e,n);bu=!0;try{return Xx(t,e,n)}finally{bu=!1,(Zs!==null||Qs!==null)&&(jx(),Wx())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var id=!1;if(Xi)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){id=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{id=!1}function NE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Jo=!1,uc=null,fc=!1,rd=null,IE={onError:function(t){Jo=!0,uc=t}};function UE(t,e,n,i,r,s,o,a,l){Jo=!1,uc=null,NE.apply(IE,arguments)}function FE(t,e,n,i,r,s,o,a,l){if(UE.apply(this,arguments),Jo){if(Jo){var c=uc;Jo=!1,uc=null}else throw Error(oe(198));fc||(fc=!0,rd=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ig(t){if(hs(t)!==t)throw Error(oe(188))}function OE(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ig(r),t;if(s===i)return ig(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function qx(t){return t=OE(t),t!==null?Kx(t):null}function Kx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kx(t);if(e!==null)return e;t=t.sibling}return null}var Zx=Dn.unstable_scheduleCallback,rg=Dn.unstable_cancelCallback,kE=Dn.unstable_shouldYield,BE=Dn.unstable_requestPaint,It=Dn.unstable_now,zE=Dn.unstable_getCurrentPriorityLevel,tp=Dn.unstable_ImmediatePriority,Qx=Dn.unstable_UserBlockingPriority,dc=Dn.unstable_NormalPriority,VE=Dn.unstable_LowPriority,Jx=Dn.unstable_IdlePriority,$c=null,yi=null;function HE(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:XE,GE=Math.log,WE=Math.LN2;function XE(t){return t>>>=0,t===0?32:31-(GE(t)/WE|0)|0}var el=64,tl=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Xo(a):(s&=o,s!==0&&(i=Xo(s)))}else o=n&~r,o!==0?i=Xo(o):s!==0&&(i=Xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function jE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=jE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e_(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function $E(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function t_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n_,ip,i_,r_,s_,od=!1,nl=[],_r=null,yr=null,Sr=null,pa=new Map,ma=new Map,hr=[],qE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Ro(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function KE(t,e,n,i,r){switch(e){case"focusin":return _r=Ro(_r,t,e,n,i,r),!0;case"dragenter":return yr=Ro(yr,t,e,n,i,r),!0;case"mouseover":return Sr=Ro(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Ro(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Ro(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function o_(t){var e=qr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=$x(n),e!==null){t.blockedOn=e,s_(t.priority,function(){i_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);td=i,n.target.dispatchEvent(i),td=null}else return e=ka(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function og(t,e,n){Wl(t)&&n.delete(e)}function ZE(){od=!1,_r!==null&&Wl(_r)&&(_r=null),yr!==null&&Wl(yr)&&(yr=null),Sr!==null&&Wl(Sr)&&(Sr=null),pa.forEach(og),ma.forEach(og)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,ZE)))}function ga(t){function e(r){return Po(r,t)}if(0<nl.length){Po(nl[0],t);for(var n=1;n<nl.length;n++){var i=nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&Po(_r,t),yr!==null&&Po(yr,t),Sr!==null&&Po(Sr,t),pa.forEach(e),ma.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)o_(n),n.blockedOn===null&&hr.shift()}var Js=Ji.ReactCurrentBatchConfig,pc=!0;function QE(t,e,n,i){var r=ot,s=Js.transition;Js.transition=null;try{ot=1,rp(t,e,n,i)}finally{ot=r,Js.transition=s}}function JE(t,e,n,i){var r=ot,s=Js.transition;Js.transition=null;try{ot=4,rp(t,e,n,i)}finally{ot=r,Js.transition=s}}function rp(t,e,n,i){if(pc){var r=ad(t,e,n,i);if(r===null)ku(t,e,i,mc,n),sg(t,i);else if(KE(r,t,e,n,i))i.stopPropagation();else if(sg(t,i),e&4&&-1<qE.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&n_(s),s=ad(t,e,n,i),s===null&&ku(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ku(t,e,i,null,n)}}var mc=null;function ad(t,e,n,i){if(mc=null,t=ep(i),t=qr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$x(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function a_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zE()){case tp:return 1;case Qx:return 4;case dc:case VE:return 16;case Jx:return 536870912;default:return 16}default:return 16}}var gr=null,sp=null,Xl=null;function l_(){if(Xl)return Xl;var t,e=sp,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xl=r.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function ag(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:ag,this.isPropagationStopped=ag,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=In(So),Oa=Tt({},So,{view:0,detail:0}),e1=In(Oa),Ru,Pu,Do,qc=Tt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Ru=t.screenX-Do.screenX,Pu=t.screenY-Do.screenY):Pu=Ru=0,Do=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),lg=In(qc),t1=Tt({},qc,{dataTransfer:0}),n1=In(t1),i1=Tt({},Oa,{relatedTarget:0}),Du=In(i1),r1=Tt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),s1=In(r1),o1=Tt({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a1=In(o1),l1=Tt({},So,{data:0}),cg=In(l1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f1[t])?!!e[t]:!1}function ap(){return d1}var h1=Tt({},Oa,{key:function(t){if(t.key){var e=c1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p1=In(h1),m1=Tt({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=In(m1),g1=Tt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),v1=In(g1),x1=Tt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=In(x1),y1=Tt({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S1=In(y1),M1=[9,13,27,32],lp=Xi&&"CompositionEvent"in window,ea=null;Xi&&"documentMode"in document&&(ea=document.documentMode);var E1=Xi&&"TextEvent"in window&&!ea,c_=Xi&&(!lp||ea&&8<ea&&11>=ea),fg=" ",dg=!1;function u_(t,e){switch(t){case"keyup":return M1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function T1(t,e){switch(t){case"compositionend":return f_(e);case"keypress":return e.which!==32?null:(dg=!0,fg);case"textInput":return t=e.data,t===fg&&dg?null:t;default:return null}}function w1(t,e){if(Us)return t==="compositionend"||!lp&&u_(t,e)?(t=l_(),Xl=sp=gr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c_&&e.locale!=="ko"?null:e.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A1[t.type]:e==="textarea"}function d_(t,e,n,i){Gx(i),e=gc(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,va=null;function b1(t){E_(t,0)}function Kc(t){var e=ks(t);if(Fx(e))return t}function C1(t,e){if(t==="change")return e}var h_=!1;if(Xi){var Lu;if(Xi){var Nu="oninput"in document;if(!Nu){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),Nu=typeof pg.oninput=="function"}Lu=Nu}else Lu=!1;h_=Lu&&(!document.documentMode||9<document.documentMode)}function mg(){ta&&(ta.detachEvent("onpropertychange",p_),va=ta=null)}function p_(t){if(t.propertyName==="value"&&Kc(va)){var e=[];d_(e,va,t,ep(t)),Yx(b1,e)}}function R1(t,e,n){t==="focusin"?(mg(),ta=e,va=n,ta.attachEvent("onpropertychange",p_)):t==="focusout"&&mg()}function P1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(va)}function D1(t,e){if(t==="click")return Kc(e)}function L1(t,e){if(t==="input"||t==="change")return Kc(e)}function N1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:N1;function xa(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gf.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=gg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function m_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g_(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function I1(t){var e=g_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m_(n.ownerDocument.documentElement,n)){if(i!==null&&cp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vg(n,s);var o=vg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U1=Xi&&"documentMode"in document&&11>=document.documentMode,Fs=null,ld=null,na=null,cd=!1;function xg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||Fs==null||Fs!==cc(i)||(i=Fs,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&xa(na,i)||(na=i,i=gc(ld,"onSelect"),0<i.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Iu={},v_={};Xi&&(v_=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Zc(t){if(Iu[t])return Iu[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v_)return Iu[t]=e[n];return t}var x_=Zc("animationend"),__=Zc("animationiteration"),y_=Zc("animationstart"),S_=Zc("transitionend"),M_=new Map,_g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){M_.set(t,e),ds(e,[t])}for(var Uu=0;Uu<_g.length;Uu++){var Fu=_g[Uu],F1=Fu.toLowerCase(),O1=Fu[0].toUpperCase()+Fu.slice(1);Lr(F1,"on"+O1)}Lr(x_,"onAnimationEnd");Lr(__,"onAnimationIteration");Lr(y_,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(S_,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function yg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,FE(i,e,void 0,t),t.currentTarget=null}function E_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;yg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;yg(r,a,c),s=l}}}if(fc)throw t=rd,fc=!1,rd=null,t}function mt(t,e){var n=e[pd];n===void 0&&(n=e[pd]=new Set);var i=t+"__bubble";n.has(i)||(T_(e,t,2,!1),n.add(i))}function Ou(t,e,n){var i=0;e&&(i|=4),T_(n,t,i,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[sl]){t[sl]=!0,Dx.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Ou("selectionchange",!1,e))}}function T_(t,e,n,i){switch(a_(e)){case 1:var r=QE;break;case 4:r=JE;break;default:r=rp}n=r.bind(null,e,n,t),r=void 0,!id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Yx(function(){var c=s,f=ep(n),d=[];e:{var u=M_.get(t);if(u!==void 0){var p=op,g=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=p1;break;case"focusin":g="focus",p=Du;break;case"focusout":g="blur",p=Du;break;case"beforeblur":case"afterblur":p=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=n1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=v1;break;case x_:case __:case y_:p=s1;break;case S_:p=_1;break;case"scroll":p=e1;break;case"wheel":p=S1;break;case"copy":case"cut":case"paste":p=a1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ug}var S=(e&4)!==0,m=!S&&t==="scroll",h=S?u!==null?u+"Capture":null:u;S=[];for(var v=c,y;v!==null;){y=v;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,h!==null&&(M=ha(v,h),M!=null&&S.push(ya(v,M,y)))),m)break;v=v.return}0<S.length&&(u=new p(u,g,null,n,f),d.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==td&&(g=n.relatedTarget||n.fromElement)&&(qr(g)||g[ji]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?qr(g):null,g!==null&&(m=hs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=lg,M="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=ug,M="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?u:ks(p),y=g==null?u:ks(g),u=new S(M,v+"leave",p,n,f),u.target=m,u.relatedTarget=y,M=null,qr(f)===c&&(S=new S(h,v+"enter",g,n,f),S.target=y,S.relatedTarget=m,M=S),m=M,p&&g)t:{for(S=p,h=g,v=0,y=S;y;y=xs(y))v++;for(y=0,M=h;M;M=xs(M))y++;for(;0<v-y;)S=xs(S),v--;for(;0<y-v;)h=xs(h),y--;for(;v--;){if(S===h||h!==null&&S===h.alternate)break t;S=xs(S),h=xs(h)}S=null}else S=null;p!==null&&Sg(d,u,p,S,!1),g!==null&&m!==null&&Sg(d,m,g,S,!0)}}e:{if(u=c?ks(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=C1;else if(hg(u))if(h_)E=L1;else{E=P1;var T=R1}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=D1);if(E&&(E=E(t,c))){d_(d,E,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Kf(u,"number",u.value)}switch(T=c?ks(c):window,t){case"focusin":(hg(T)||T.contentEditable==="true")&&(Fs=T,ld=c,na=null);break;case"focusout":na=ld=Fs=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,xg(d,n,f);break;case"selectionchange":if(U1)break;case"keydown":case"keyup":xg(d,n,f)}var b;if(lp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Us?u_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(c_&&n.locale!=="ko"&&(Us||x!=="onCompositionStart"?x==="onCompositionEnd"&&Us&&(b=l_()):(gr=f,sp="value"in gr?gr.value:gr.textContent,Us=!0)),T=gc(c,x),0<T.length&&(x=new cg(x,t,null,n,f),d.push({event:x,listeners:T}),b?x.data=b:(b=f_(n),b!==null&&(x.data=b)))),(b=E1?T1(t,n):w1(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(f=new cg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}E_(d,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(n,s),l!=null&&o.unshift(ya(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var B1=/\r\n?/g,z1=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(B1,`
`).replace(z1,"")}function ol(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(oe(425))}function vc(){}var ud=null,fd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(G1)}:hd;function G1(t){setTimeout(function(){throw t})}function Bu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),vi="__reactFiber$"+Mo,Sa="__reactProps$"+Mo,ji="__reactContainer$"+Mo,pd="__reactEvents$"+Mo,W1="__reactListeners$"+Mo,X1="__reactHandles$"+Mo;function qr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[vi])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[vi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Qc(t){return t[Sa]||null}var md=[],Bs=-1;function Nr(t){return{current:t}}function gt(t){0>Bs||(t.current=md[Bs],md[Bs]=null,Bs--)}function pt(t,e){Bs++,md[Bs]=t.current,t.current=e}var Cr={},cn=Nr(Cr),_n=Nr(!1),rs=Cr;function oo(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function xc(){gt(_n),gt(cn)}function wg(t,e,n){if(cn.current!==Cr)throw Error(oe(168));pt(cn,e),pt(_n,n)}function w_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,RE(t)||"Unknown",r));return Tt({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,rs=cn.current,pt(cn,t),pt(_n,_n.current),!0}function Ag(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=w_(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,gt(_n),gt(cn),pt(cn,t)):gt(_n),pt(_n,n)}var Ii=null,Jc=!1,zu=!1;function A_(t){Ii===null?Ii=[t]:Ii.push(t)}function j1(t){Jc=!0,A_(t)}function Ir(){if(!zu&&Ii!==null){zu=!0;var t=0,e=ot;try{var n=Ii;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Jc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),Zx(tp,Ir),r}finally{ot=e,zu=!1}}return null}var zs=[],Vs=0,yc=null,Sc=0,zn=[],Vn=0,ss=null,Fi=1,Oi="";function Hr(t,e){zs[Vs++]=Sc,zs[Vs++]=yc,yc=t,Sc=e}function b_(t,e,n){zn[Vn++]=Fi,zn[Vn++]=Oi,zn[Vn++]=ss,ss=t;var i=Fi;t=Oi;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-ri(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function up(t){t.return!==null&&(Hr(t,1),b_(t,1,0))}function fp(t){for(;t===yc;)yc=zs[--Vs],zs[Vs]=null,Sc=zs[--Vs],zs[Vs]=null;for(;t===ss;)ss=zn[--Vn],zn[Vn]=null,Oi=zn[--Vn],zn[Vn]=null,Fi=zn[--Vn],zn[Vn]=null}var Rn=null,Cn=null,yt=!1,ti=null;function C_(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(yt){var e=Cn;if(e){var n=e;if(!bg(t,e)){if(gd(t))throw Error(oe(418));e=Mr(n.nextSibling);var i=Rn;e&&bg(t,e)?C_(i,n):(t.flags=t.flags&-4097|2,yt=!1,Rn=t)}}else{if(gd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,yt=!1,Rn=t}}}function Cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function al(t){if(t!==Rn)return!1;if(!yt)return Cg(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=Cn)){if(gd(t))throw R_(),Error(oe(418));for(;e;)C_(t,e),e=Mr(e.nextSibling)}if(Cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?Mr(t.stateNode.nextSibling):null;return!0}function R_(){for(var t=Cn;t;)t=Mr(t.nextSibling)}function ao(){Cn=Rn=null,yt=!1}function dp(t){ti===null?ti=[t]:ti.push(t)}var Y1=Ji.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rg(t){var e=t._init;return e(t._payload)}function P_(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ar(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,M){return v===null||v.tag!==6?(v=Yu(y,h.mode,M),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,M){var E=y.type;return E===Is?f(h,v,y.props.children,M,y.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===fr&&Rg(E)===v.type)?(M=r(v,y.props),M.ref=Lo(h,v,y),M.return=h,M):(M=Jl(y.type,y.key,y.props,null,h.mode,M),M.ref=Lo(h,v,y),M.return=h,M)}function c(h,v,y,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=$u(y,h.mode,M),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function f(h,v,y,M,E){return v===null||v.tag!==7?(v=ns(y,h.mode,M,E),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yu(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return y=Jl(v.type,v.key,v.props,null,h.mode,y),y.ref=Lo(h,null,v),y.return=h,y;case Ns:return v=$u(v,h.mode,y),v.return=h,v;case fr:var M=v._init;return d(h,M(v._payload),y)}if(Wo(v)||bo(v))return v=ns(v,h.mode,y,null),v.return=h,v;ll(h,v)}return null}function u(h,v,y,M){var E=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(h,v,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return y.key===E?l(h,v,y,M):null;case Ns:return y.key===E?c(h,v,y,M):null;case fr:return E=y._init,u(h,v,E(y._payload),M)}if(Wo(y)||bo(y))return E!==null?null:f(h,v,y,M,null);ll(h,y)}return null}function p(h,v,y,M,E){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(y)||null,a(v,h,""+M,E);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Za:return h=h.get(M.key===null?y:M.key)||null,l(v,h,M,E);case Ns:return h=h.get(M.key===null?y:M.key)||null,c(v,h,M,E);case fr:var T=M._init;return p(h,v,y,T(M._payload),E)}if(Wo(M)||bo(M))return h=h.get(y)||null,f(v,h,M,E,null);ll(v,M)}return null}function g(h,v,y,M){for(var E=null,T=null,b=v,x=v=0,C=null;b!==null&&x<y.length;x++){b.index>x?(C=b,b=null):C=b.sibling;var L=u(h,b,y[x],M);if(L===null){b===null&&(b=C);break}t&&b&&L.alternate===null&&e(h,b),v=s(L,v,x),T===null?E=L:T.sibling=L,T=L,b=C}if(x===y.length)return n(h,b),yt&&Hr(h,x),E;if(b===null){for(;x<y.length;x++)b=d(h,y[x],M),b!==null&&(v=s(b,v,x),T===null?E=b:T.sibling=b,T=b);return yt&&Hr(h,x),E}for(b=i(h,b);x<y.length;x++)C=p(b,h,x,y[x],M),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?x:C.key),v=s(C,v,x),T===null?E=C:T.sibling=C,T=C);return t&&b.forEach(function(N){return e(h,N)}),yt&&Hr(h,x),E}function S(h,v,y,M){var E=bo(y);if(typeof E!="function")throw Error(oe(150));if(y=E.call(y),y==null)throw Error(oe(151));for(var T=E=null,b=v,x=v=0,C=null,L=y.next();b!==null&&!L.done;x++,L=y.next()){b.index>x?(C=b,b=null):C=b.sibling;var N=u(h,b,L.value,M);if(N===null){b===null&&(b=C);break}t&&b&&N.alternate===null&&e(h,b),v=s(N,v,x),T===null?E=N:T.sibling=N,T=N,b=C}if(L.done)return n(h,b),yt&&Hr(h,x),E;if(b===null){for(;!L.done;x++,L=y.next())L=d(h,L.value,M),L!==null&&(v=s(L,v,x),T===null?E=L:T.sibling=L,T=L);return yt&&Hr(h,x),E}for(b=i(h,b);!L.done;x++,L=y.next())L=p(b,h,x,L.value,M),L!==null&&(t&&L.alternate!==null&&b.delete(L.key===null?x:L.key),v=s(L,v,x),T===null?E=L:T.sibling=L,T=L);return t&&b.forEach(function(B){return e(h,B)}),yt&&Hr(h,x),E}function m(h,v,y,M){if(typeof y=="object"&&y!==null&&y.type===Is&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:e:{for(var E=y.key,T=v;T!==null;){if(T.key===E){if(E=y.type,E===Is){if(T.tag===7){n(h,T.sibling),v=r(T,y.props.children),v.return=h,h=v;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===fr&&Rg(E)===T.type){n(h,T.sibling),v=r(T,y.props),v.ref=Lo(h,T,y),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}y.type===Is?(v=ns(y.props.children,h.mode,M,y.key),v.return=h,h=v):(M=Jl(y.type,y.key,y.props,null,h.mode,M),M.ref=Lo(h,v,y),M.return=h,h=M)}return o(h);case Ns:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=$u(y,h.mode,M),v.return=h,h=v}return o(h);case fr:return T=y._init,m(h,v,T(y._payload),M)}if(Wo(y))return g(h,v,y,M);if(bo(y))return S(h,v,y,M);ll(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=Yu(y,h.mode,M),v.return=h,h=v),o(h)):n(h,v)}return m}var lo=P_(!0),D_=P_(!1),Mc=Nr(null),Ec=null,Hs=null,hp=null;function pp(){hp=Hs=Ec=null}function mp(t){var e=Mc.current;gt(Mc),t._currentValue=e}function xd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){Ec=t,hp=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Ec===null)throw Error(oe(308));Hs=t,Ec.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Kr=null;function gp(t){Kr===null?Kr=[t]:Kr.push(t)}function L_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,gp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}function Pg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,S=a;switch(u=e,p=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(p,d,u);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,u=typeof g=="function"?g.call(p,d,u):g,u==null)break e;d=Tt({},d,u);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=d}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ba={},Si=Nr(Ba),Ma=Nr(Ba),Ea=Nr(Ba);function Zr(t){if(t===Ba)throw Error(oe(174));return t}function xp(t,e){switch(pt(Ea,e),pt(Ma,t),pt(Si,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qf(e,t)}gt(Si),pt(Si,e)}function co(){gt(Si),gt(Ma),gt(Ea)}function I_(t){Zr(Ea.current);var e=Zr(Si.current),n=Qf(e,t.type);e!==n&&(pt(Ma,t),pt(Si,n))}function _p(t){Ma.current===t&&(gt(Si),gt(Ma))}var St=Nr(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function yp(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var $l=Ji.ReactCurrentDispatcher,Hu=Ji.ReactCurrentBatchConfig,os=0,Et=null,kt=null,Wt=null,Ac=!1,ia=!1,Ta=0,$1=0;function Jt(){throw Error(oe(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Mp(t,e,n,i,r,s){if(os=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?Q1:J1,t=n(i,r),ia){s=0;do{if(ia=!1,Ta=0,25<=s)throw Error(oe(301));s+=1,Wt=kt=null,e.updateQueue=null,$l.current=eT,t=n(i,r)}while(ia)}if($l.current=bc,e=kt!==null&&kt.next!==null,os=0,Wt=kt=Et=null,Ac=!1,e)throw Error(oe(300));return t}function Ep(){var t=Ta!==0;return Ta=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Yn(){if(kt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,kt=t;else{if(t===null)throw Error(oe(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function wa(t,e){return typeof e=="function"?e(t):e}function Gu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((os&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=f,as|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U_(){}function F_(t,e){var n=Et,i=Yn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,Tp(B_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Aa(9,k_.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(oe(349));os&30||O_(n,e,r)}return r}function O_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k_(t,e,n,i){e.value=n,e.getSnapshot=i,z_(e)&&V_(t)}function B_(t,e,n){return n(function(){z_(e)&&V_(t)})}function z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function V_(t){var e=Yi(t,1);e!==null&&si(e,t,1,-1)}function Lg(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=Z1.bind(null,Et,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H_(){return Yn().memoizedState}function ql(t,e,n,i){var r=mi();Et.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Sp(i,o.deps)){r.memoizedState=Aa(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function Ng(t,e){return ql(8390656,8,t,e)}function Tp(t,e){return eu(2048,8,t,e)}function G_(t,e){return eu(4,2,t,e)}function W_(t,e){return eu(4,4,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j_(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,X_.bind(null,e,t),n)}function wp(){}function Y_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q_(t,e,n){return os&21?(ai(n,e)||(n=e_(),Et.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function q1(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Hu.transition;Hu.transition={};try{t(!1),e()}finally{ot=n,Hu.transition=i}}function K_(){return Yn().memoizedState}function K1(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z_(t))Q_(e,n);else if(n=L_(t,e,n,i),n!==null){var r=dn();si(n,t,i,r),J_(n,e,i)}}function Z1(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z_(t))Q_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,gp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=L_(t,e,r,i),n!==null&&(r=dn(),si(n,t,i,r),J_(n,e,i))}}function Z_(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Q_(t,e){ia=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}var bc={readContext:jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},Q1={readContext:jn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=K1.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:Lg,useDebugValue:wp,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Lg(!1),e=t[0];return t=q1.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=mi();if(yt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Xt===null)throw Error(oe(349));os&30||O_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ng(B_.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,k_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Xt.identifierPrefix;if(yt){var n=Oi,i=Fi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},J1={readContext:jn,useCallback:Y_,useContext:jn,useEffect:Tp,useImperativeHandle:j_,useInsertionEffect:G_,useLayoutEffect:W_,useMemo:$_,useReducer:Gu,useRef:H_,useState:function(){return Gu(wa)},useDebugValue:wp,useDeferredValue:function(t){var e=Yn();return q_(e,kt.memoizedState,t)},useTransition:function(){var t=Gu(wa)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:U_,useSyncExternalStore:F_,useId:K_,unstable_isNewReconciler:!1},eT={readContext:jn,useCallback:Y_,useContext:jn,useEffect:Tp,useImperativeHandle:j_,useInsertionEffect:G_,useLayoutEffect:W_,useMemo:$_,useReducer:Wu,useRef:H_,useState:function(){return Wu(wa)},useDebugValue:wp,useDeferredValue:function(t){var e=Yn();return kt===null?e.memoizedState=t:q_(e,kt.memoizedState,t)},useTransition:function(){var t=Wu(wa)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:U_,useSyncExternalStore:F_,useId:K_,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=wr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(si(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=wr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(si(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=wr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(si(e,t,i,n),Yl(e,t,i))}};function Ig(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function ey(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=yn(e)?rs:cn.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ug(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=yn(e)?rs:cn.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=CE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tT=typeof WeakMap=="function"?WeakMap:Map;function ty(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rc||(Rc=!0,Dd=i),Sd(t,e)},n}function ny(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sd(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=mT.bind(null,t,e,n),e.then(t,t))}function Og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var nT=Ji.ReactCurrentOwner,xn=!1;function fn(t,e,n,i){e.child=t===null?D_(e,null,n,i):lo(e,t.child,n,i)}function Bg(t,e,n,i,r){n=n.render;var s=e.ref;return eo(e,r),i=Mp(t,e,n,i,s,r),n=Ep(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(yt&&n&&up(e),e.flags|=1,fn(t,e,i,r),e.child)}function zg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iy(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(o,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function iy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return Md(t,e,n,i,r)}function ry(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ws,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Ws,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Ws,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Ws,bn),bn|=i;return fn(t,e,r,n),e.child}function sy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Md(t,e,n,i,r){var s=yn(n)?rs:cn.current;return s=oo(e,s),eo(e,r),n=Mp(t,e,n,i,s,r),i=Ep(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(yt&&i&&up(e),e.flags|=1,fn(t,e,n,r),e.child)}function Vg(t,e,n,i,r){if(yn(n)){var s=!0;_c(e)}else s=!1;if(eo(e,r),e.stateNode===null)Kl(t,e),ey(e,n,i),yd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=yn(n)?rs:cn.current,c=oo(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ug(e,o,i,c),dr=!1;var u=e.memoizedState;o.state=u,Tc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||_n.current||dr?(typeof f=="function"&&(_d(e,n,f,i),l=e.memoizedState),(a=dr||Ig(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,N_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=yn(n)?rs:cn.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&Ug(e,o,i,l),dr=!1,u=e.memoizedState,o.state=u,Tc(e,i,o,r);var g=e.memoizedState;a!==d||u!==g||_n.current||dr?(typeof p=="function"&&(_d(e,n,p,i),g=e.memoizedState),(c=dr||Ig(e,n,c,i,u,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Ed(t,e,n,i,s,r)}function Ed(t,e,n,i,r,s){sy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ag(e,n,!1),$i(t,e,s);i=e.stateNode,nT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&Ag(e,n,!0),e.child}function oy(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),xp(t,e.containerInfo)}function Hg(t,e,n,i,r){return ao(),dp(r),e.flags|=256,fn(t,e,n,i),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ay(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(St,r&1),t===null)return vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wd(n),e.memoizedState=Td,t):Ap(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Td,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ap(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,i){return i!==null&&dp(i),lo(e,t.child,null,n),t=Ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Xu(Error(oe(422))),cl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=wd(o),e.memoizedState=Td,s);if(!(e.mode&1))return cl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Xu(s,i,void 0),cl(t,e,o,i)}if(a=(o&t.childLanes)!==0,xn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(t,r),si(i,t,r,-1))}return Lp(),i=Xu(Error(oe(421))),cl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=Mr(r.nextSibling),Rn=e,yt=!0,ti=null,t!==null&&(zn[Vn++]=Fi,zn[Vn++]=Oi,zn[Vn++]=ss,Fi=t.id,Oi=t.overflow,ss=e),e=Ap(e,i.children),e.flags|=4096,e)}function Gg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xd(t.return,e,n)}function ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ly(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,n,e);else if(t.tag===19)Gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rT(t,e,n){switch(e.tag){case 3:oy(e),ao();break;case 5:I_(e);break;case 1:yn(e.type)&&_c(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?ay(t,e,n):(pt(St,St.current&1),t=$i(t,e,n),t!==null?t.sibling:null);pt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ly(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,ry(t,e,n)}return $i(t,e,n)}var cy,Ad,uy,fy;cy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};uy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Zr(Si.current);var s=null;switch(n){case"input":r=$f(t,r),i=$f(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Zf(t,r),i=Zf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}Jf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fy=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sT(t,e,n){var i=e.pendingProps;switch(fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return yn(e.type)&&xc(),en(e),null;case 3:return i=e.stateNode,co(),gt(_n),gt(cn),yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Id(ti),ti=null))),Ad(t,e),en(e),null;case 5:_p(e);var r=Zr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)uy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return en(e),null}if(t=Zr(Si.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)mt(jo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Qm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":eg(i,s),mt("invalid",i)}Jf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":Qa(i),Jm(i,s,!0);break;case"textarea":Qa(i),tg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[Sa]=i,cy(t,e,!1,!1),e.stateNode=t;e:{switch(o=ed(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)mt(jo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Qm(t,i),r=$f(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":eg(t,i),r=Zf(t,i),mt("invalid",t);break;default:r=i}Jf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Kh(t,s,l,o))}switch(n){case"input":Qa(t),Jm(t,i,!1);break;case"textarea":Qa(t),tg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)fy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Zr(Ea.current),Zr(Si.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:ol(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return en(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Cn!==null&&e.mode&1&&!(e.flags&128))R_(),ao(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[vi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ti!==null&&(Id(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?zt===0&&(zt=3):Lp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return co(),Ad(t,e),t===null&&_a(e.stateNode.containerInfo),en(e),null;case 10:return mp(e.type._context),en(e),null;case 17:return yn(e.type)&&xc(),en(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>fo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return en(e),null}else 2*It()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=St.current,pt(St,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function oT(t,e){switch(fp(e),e.tag){case 1:return yn(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),gt(_n),gt(cn),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return co(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var ul=!1,sn=!1,aT=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function bd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var Wg=!1;function lT(t,e){if(ud=pc,t=g_(),cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},pc=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:Jn(e.type,S),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){Rt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return g=Wg,Wg=!1,g}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bd(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dy(t){var e=t.alternate;e!==null&&(t.alternate=null,dy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[Sa],delete e[pd],delete e[W1],delete e[X1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hy(t){return t.tag===5||t.tag===3||t.tag===4}function Xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}var Yt=null,ei=!1;function ir(t,e,n){for(n=n.child;n!==null;)py(t,e,n),n=n.sibling}function py(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:sn||Gs(n,e);case 6:var i=Yt,r=ei;Yt=null,ir(t,e,n),Yt=i,ei=r,Yt!==null&&(ei?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ei?(t=Yt,n=n.stateNode,t.nodeType===8?Bu(t.parentNode,n):t.nodeType===1&&Bu(t,n),ga(t)):Bu(Yt,n.stateNode));break;case 4:i=Yt,r=ei,Yt=n.stateNode.containerInfo,ei=!0,ir(t,e,n),Yt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bd(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!sn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,ir(t,e,n),sn=i):ir(t,e,n);break;default:ir(t,e,n)}}function jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aT),e.forEach(function(i){var r=vT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ei=!1;break e;case 3:Yt=a.stateNode.containerInfo,ei=!0;break e;case 4:Yt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(Yt===null)throw Error(oe(160));py(s,o,r),Yt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)my(e,t),e=e.sibling}function my(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),di(t),i&4){try{ra(3,t,t.return),nu(3,t)}catch(S){Rt(t,t.return,S)}try{ra(5,t,t.return)}catch(S){Rt(t,t.return,S)}}break;case 1:$n(e,t),di(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if($n(e,t),di(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(S){Rt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ox(r,s),ed(a,o);var c=ed(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Hx(r,d):f==="dangerouslySetInnerHTML"?zx(r,d):f==="children"?da(r,d):Kh(r,f,d,c)}switch(a){case"input":qf(r,s);break;case"textarea":kx(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ks(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(S){Rt(t,t.return,S)}}break;case 6:if($n(e,t),di(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Rt(t,t.return,S)}}break;case 3:if($n(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(S){Rt(t,t.return,S)}break;case 4:$n(e,t),di(t);break;case 13:$n(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rp=It())),i&4&&jg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,$n(e,t),sn=c):$n(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ae=t,f=t.child;f!==null;){for(d=Ae=f;Ae!==null;){switch(u=Ae,p=u.child,u.tag){case 0:case 11:case 14:case 15:ra(4,u,u.return);break;case 1:Gs(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){Rt(i,n,S)}}break;case 5:Gs(u,u.return);break;case 22:if(u.memoizedState!==null){$g(d);continue}}p!==null?(p.return=u,Ae=p):$g(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vx("display",o))}catch(S){Rt(t,t.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Rt(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),di(t),i&4&&jg(t);break;case 21:break;default:$n(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hy(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=Xg(t);Pd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Xg(t);Rd(t,a,o);break;default:throw Error(oe(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cT(t,e,n){Ae=t,gy(t)}function gy(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ul;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=ul;var c=sn;if(ul=o,(sn=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?qg(r):l!==null?(l.return=o,Ae=l):qg(r);for(;s!==null;)Ae=s,gy(s),s=s.sibling;Ae=r,ul=a,sn=c}Yg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Yg(t)}}function Yg(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}sn||e.flags&512&&Cd(e)}catch(u){Rt(e,e.return,u)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function $g(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function qg(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Cd(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Cd(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var uT=Math.ceil,Cc=Ji.ReactCurrentDispatcher,bp=Ji.ReactCurrentOwner,Xn=Ji.ReactCurrentBatchConfig,Je=0,Xt=null,Ot=null,Kt=0,bn=0,Ws=Nr(0),zt=0,ba=null,as=0,iu=0,Cp=0,sa=null,vn=null,Rp=0,fo=1/0,Ni=null,Rc=!1,Dd=null,Tr=null,fl=!1,vr=null,Pc=0,oa=0,Ld=null,Zl=-1,Ql=0;function dn(){return Je&6?It():Zl!==-1?Zl:Zl=It()}function wr(t){return t.mode&1?Je&2&&Kt!==0?Kt&-Kt:Y1.transition!==null?(Ql===0&&(Ql=e_()),Ql):(t=ot,t!==0||(t=window.event,t=t===void 0?16:a_(t.type)),t):1}function si(t,e,n,i){if(50<oa)throw oa=0,Ld=null,Error(oe(185));Fa(t,n,i),(!(Je&2)||t!==Xt)&&(t===Xt&&(!(Je&2)&&(iu|=n),zt===4&&pr(t,Kt)),Sn(t,i),n===1&&Je===0&&!(e.mode&1)&&(fo=It()+500,Jc&&Ir()))}function Sn(t,e){var n=t.callbackNode;YE(t,e);var i=hc(t,t===Xt?Kt:0);if(i===0)n!==null&&rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rg(n),e===1)t.tag===0?j1(Kg.bind(null,t)):A_(Kg.bind(null,t)),H1(function(){!(Je&6)&&Ir()}),n=null;else{switch(t_(i)){case 1:n=tp;break;case 4:n=Qx;break;case 16:n=dc;break;case 536870912:n=Jx;break;default:n=dc}n=Ty(n,vy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vy(t,e){if(Zl=-1,Ql=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var i=hc(t,t===Xt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=Je;Je|=2;var s=_y();(Xt!==t||Kt!==e)&&(Ni=null,fo=It()+500,ts(t,e));do try{hT();break}catch(a){xy(t,a)}while(!0);pp(),Cc.current=s,Je=r,Ot!==null?e=0:(Xt=null,Kt=0,e=zt)}if(e!==0){if(e===2&&(r=sd(t),r!==0&&(i=r,e=Nd(t,r))),e===1)throw n=ba,ts(t,0),pr(t,i),Sn(t,It()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!fT(r)&&(e=Dc(t,i),e===2&&(s=sd(t),s!==0&&(i=s,e=Nd(t,s))),e===1))throw n=ba,ts(t,0),pr(t,i),Sn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Gr(t,vn,Ni);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=Rp+500-It(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=hd(Gr.bind(null,t,vn,Ni),e);break}Gr(t,vn,Ni);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uT(i/1960))-i,10<i){t.timeoutHandle=hd(Gr.bind(null,t,vn,Ni),i);break}Gr(t,vn,Ni);break;case 5:Gr(t,vn,Ni);break;default:throw Error(oe(329))}}}return Sn(t,It()),t.callbackNode===n?vy.bind(null,t):null}function Nd(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=vn,vn=n,e!==null&&Id(e)),t}function Id(t){vn===null?vn=t:vn.push.apply(vn,t)}function fT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Cp,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Kg(t){if(Je&6)throw Error(oe(327));to();var e=hc(t,0);if(!(e&1))return Sn(t,It()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=sd(t);i!==0&&(e=i,n=Nd(t,i))}if(n===1)throw n=ba,ts(t,0),pr(t,e),Sn(t,It()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,vn,Ni),Sn(t,It()),null}function Pp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(fo=It()+500,Jc&&Ir())}}function ls(t){vr!==null&&vr.tag===0&&!(Je&6)&&to();var e=Je;Je|=1;var n=Xn.transition,i=ot;try{if(Xn.transition=null,ot=1,t)return t()}finally{ot=i,Xn.transition=n,Je=e,!(Je&6)&&Ir()}}function Dp(){bn=Ws.current,gt(Ws)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,V1(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:co(),gt(_n),gt(cn),yp();break;case 5:_p(i);break;case 4:co();break;case 13:gt(St);break;case 19:gt(St);break;case 10:mp(i.type._context);break;case 22:case 23:Dp()}n=n.return}if(Xt=t,Ot=t=Ar(t.current,null),Kt=bn=e,zt=0,ba=null,Cp=iu=as=0,vn=sa=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Kr=null}return t}function xy(t,e){do{var n=Ot;try{if(pp(),$l.current=bc,Ac){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ac=!1}if(os=0,Wt=kt=Et=null,ia=!1,Ta=0,bp.current=null,n===null||n.return===null){zt=1,ba=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Og(o);if(p!==null){p.flags&=-257,kg(p,o,a,s,e),p.mode&1&&Fg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){Fg(s,c,e),Lp();break e}l=Error(oe(426))}}else if(yt&&a.mode&1){var m=Og(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),kg(m,o,a,s,e),dp(uo(l,a));break e}}s=l=uo(l,a),zt!==4&&(zt=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=ty(s,l,e);Pg(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Tr===null||!Tr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ny(s,a,e);Pg(s,M);break e}}s=s.return}while(s!==null)}Sy(n)}catch(E){e=E,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function _y(){var t=Cc.current;return Cc.current=bc,t===null?bc:t}function Lp(){(zt===0||zt===3||zt===2)&&(zt=4),Xt===null||!(as&268435455)&&!(iu&268435455)||pr(Xt,Kt)}function Dc(t,e){var n=Je;Je|=2;var i=_y();(Xt!==t||Kt!==e)&&(Ni=null,ts(t,e));do try{dT();break}catch(r){xy(t,r)}while(!0);if(pp(),Je=n,Cc.current=i,Ot!==null)throw Error(oe(261));return Xt=null,Kt=0,zt}function dT(){for(;Ot!==null;)yy(Ot)}function hT(){for(;Ot!==null&&!kE();)yy(Ot)}function yy(t){var e=Ey(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Sy(t):Ot=e,bp.current=null}function Sy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oT(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ot=null;return}}else if(n=sT(n,e,bn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);zt===0&&(zt=5)}function Gr(t,e,n){var i=ot,r=Xn.transition;try{Xn.transition=null,ot=1,pT(t,e,n,i)}finally{Xn.transition=r,ot=i}return null}function pT(t,e,n,i){do to();while(vr!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($E(t,s),t===Xt&&(Ot=Xt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,Ty(dc,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=ot;ot=1;var a=Je;Je|=4,bp.current=null,lT(t,n),my(n,t),I1(fd),pc=!!ud,fd=ud=null,t.current=n,cT(n),BE(),Je=a,ot=o,Xn.transition=s}else t.current=n;if(fl&&(fl=!1,vr=t,Pc=r),s=t.pendingLanes,s===0&&(Tr=null),HE(n.stateNode),Sn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rc)throw Rc=!1,t=Dd,Dd=null,t;return Pc&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===Ld?oa++:(oa=0,Ld=t):oa=0,Ir(),null}function to(){if(vr!==null){var t=t_(Pc),e=Xn.transition,n=ot;try{if(Xn.transition=null,ot=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,Pc=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var f=Ae;switch(f.tag){case 0:case 11:case 15:ra(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ae=d;else for(;Ae!==null;){f=Ae;var u=f.sibling,p=f.return;if(dy(f),f===c){Ae=null;break}if(u!==null){u.return=p,Ae=u;break}Ae=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ae=h;break e}Ae=s.return}}var v=t.current;for(Ae=v;Ae!==null;){o=Ae;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ae=y;else e:for(o=v;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(E){Rt(a,a.return,E)}if(a===o){Ae=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ae=M;break e}Ae=a.return}}if(Je=r,Ir(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot($c,t)}catch{}i=!0}return i}finally{ot=n,Xn.transition=e}}return!1}function Zg(t,e,n){e=uo(n,e),e=ty(t,e,1),t=Er(t,e,1),e=dn(),t!==null&&(Fa(t,1,e),Sn(t,e))}function Rt(t,e,n){if(t.tag===3)Zg(t,t,n);else for(;e!==null;){if(e.tag===3){Zg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=uo(n,t),t=ny(e,t,1),e=Er(e,t,1),t=dn(),e!==null&&(Fa(e,1,t),Sn(e,t));break}}e=e.return}}function mT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Kt&n)===n&&(zt===4||zt===3&&(Kt&130023424)===Kt&&500>It()-Rp?ts(t,0):Cp|=n),Sn(t,e)}function My(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=dn();t=Yi(t,e),t!==null&&(Fa(t,e,n),Sn(t,n))}function gT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),My(t,n)}function vT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),My(t,n)}var Ey;Ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,rT(t,e,n);xn=!!(t.flags&131072)}else xn=!1,yt&&e.flags&1048576&&b_(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(t,e),t=e.pendingProps;var r=oo(e,cn.current);eo(e,n),r=Mp(null,e,i,t,r,n);var s=Ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vp(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,yd(e,i,t,n),e=Ed(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&up(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_T(i),t=Jn(i,t),r){case 0:e=Md(null,e,i,t,n);break e;case 1:e=Vg(null,e,i,t,n);break e;case 11:e=Bg(null,e,i,t,n);break e;case 14:e=zg(null,e,i,Jn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Vg(t,e,i,r,n);case 3:e:{if(oy(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,N_(t,e),Tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(oe(423)),e),e=Hg(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(oe(424)),e),e=Hg(t,e,i,n,r);break e}else for(Cn=Mr(e.stateNode.containerInfo.firstChild),Rn=e,yt=!0,ti=null,n=D_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=$i(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return I_(e),t===null&&vd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,dd(i,r)?o=null:s!==null&&dd(i,s)&&(e.flags|=32),sy(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&vd(e),null;case 13:return ay(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Bg(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Mc,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!_n.current){e=$i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,eo(e,n),r=jn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),zg(t,e,i,r,n);case 15:return iy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Kl(t,e),e.tag=1,yn(i)?(t=!0,_c(e)):t=!1,eo(e,n),ey(e,i,r),yd(e,i,r,n),Ed(null,e,i,!0,t,n);case 19:return ly(t,e,n);case 22:return ry(t,e,n)}throw Error(oe(156,e.tag))};function Ty(t,e){return Zx(t,e)}function xT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new xT(t,e,n,i)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _T(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Jh)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return ns(n.children,r,s,e);case Zh:o=8,r|=8;break;case Wf:return t=Wn(12,n,e,r|2),t.elementType=Wf,t.lanes=s,t;case Xf:return t=Wn(13,n,e,r),t.elementType=Xf,t.lanes=s,t;case jf:return t=Wn(19,n,e,r),t.elementType=jf,t.lanes=s,t;case Ix:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lx:o=10;break e;case Nx:o=9;break e;case Qh:o=11;break e;case Jh:o=14;break e;case fr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=Ix,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,i,r,s,o,a,l){return t=new yT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function ST(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wy(t){if(!t)return Cr;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(yn(n))return w_(t,n,e)}return e}function Ay(t,e,n,i,r,s,o,a,l){return t=Ip(n,i,!0,t,r,s,o,a,l),t.context=wy(null),n=t.current,i=dn(),r=wr(n),s=Bi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,Fa(t,r,i),Sn(t,i),t}function su(t,e,n,i){var r=e.current,s=dn(),o=wr(r);return n=wy(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,o),t!==null&&(si(t,r,o,s),Yl(t,r,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){Qg(t,e),(t=t.alternate)&&Qg(t,e)}function MT(){return null}var by=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fp(t){this._internalRoot=t}ou.prototype.render=Fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));su(t,e,null,null)};ou.prototype.unmount=Fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){su(null,t,null,null)}),e[ji]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=r_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&o_(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function ET(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Lc(o);s.call(c)}}var o=Ay(e,i,t,0,null,!1,!1,"",Jg);return t._reactRootContainer=o,t[ji]=o.current,_a(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Lc(l);a.call(c)}}var l=Ip(t,0,!1,null,null,!1,!1,"",Jg);return t._reactRootContainer=l,t[ji]=l.current,_a(t.nodeType===8?t.parentNode:t),ls(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lc(o);a.call(l)}}su(e,o,t,r)}else o=ET(n,e,t,r,i);return Lc(o)}n_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(np(e,n|1),Sn(e,It()),!(Je&6)&&(fo=It()+500,Ir()))}break;case 13:ls(function(){var i=Yi(t,1);if(i!==null){var r=dn();si(i,t,1,r)}}),Up(t,1)}};ip=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=dn();si(e,t,134217728,n)}Up(t,134217728)}};i_=function(t){if(t.tag===13){var e=wr(t),n=Yi(t,e);if(n!==null){var i=dn();si(n,t,e,i)}Up(t,e)}};r_=function(){return ot};s_=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};nd=function(t,e,n){switch(e){case"input":if(qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Qc(i);if(!r)throw Error(oe(90));Fx(i),qf(i,r)}}}break;case"textarea":kx(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};Xx=Pp;jx=ls;var TT={usingClientEntryPoint:!1,Events:[ka,ks,Qc,Gx,Wx,Pp]},Io={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wT={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qx(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||MT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{$c=dl.inject(wT),yi=dl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TT;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(oe(200));return ST(t,e,null,n)};Nn.createRoot=function(t,e){if(!Op(t))throw Error(oe(299));var n=!1,i="",r=by;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,_a(t.nodeType===8?t.parentNode:t),new Fp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=qx(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return ls(t)};Nn.hydrate=function(t,e,n){if(!au(e))throw Error(oe(200));return lu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=by;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ay(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};Nn.render=function(t,e,n){if(!au(e))throw Error(oe(200));return lu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!au(t))throw Error(oe(40));return t._reactRootContainer?(ls(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Nn.unstable_batchedUpdates=Pp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!au(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return lu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function Cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cy)}catch(t){console.error(t)}}Cy(),Cx.exports=Nn;var AT=Cx.exports,e0=AT;Hf.createRoot=e0.createRoot,Hf.hydrateRoot=e0.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="185",bT=0,t0=1,CT=2,ec=1,RT=2,Yo=3,Rr=0,Mn=1,Ui=2,zi=0,no=1,Ud=2,n0=3,i0=4,PT=5,Yr=100,DT=101,LT=102,NT=103,IT=104,UT=200,FT=201,OT=202,kT=203,Fd=204,Od=205,BT=206,zT=207,VT=208,HT=209,GT=210,WT=211,XT=212,jT=213,YT=214,kd=0,Bd=1,zd=2,ho=3,Vd=4,Hd=5,Gd=6,Wd=7,Ry=0,$T=1,qT=2,Mi=0,Py=1,Dy=2,Ly=3,Ny=4,Iy=5,Uy=6,Fy=7,Oy=300,cs=301,po=302,qu=303,Ku=304,cu=306,Xd=1e3,ki=1001,jd=1002,qt=1003,KT=1004,hl=1005,an=1006,Zu=1007,Qr=1008,Gn=1009,ky=1010,By=1011,Ca=1012,Bp=1013,Ai=1014,xi=1015,qi=1016,zp=1017,Vp=1018,Ra=1020,zy=35902,Vy=35899,Hy=1021,Gy=1022,ii=1023,Ki=1026,Jr=1027,Wy=1028,Hp=1029,us=1030,Gp=1031,Wp=1033,tc=33776,nc=33777,ic=33778,rc=33779,Yd=35840,$d=35841,qd=35842,Kd=35843,Zd=36196,Qd=37492,Jd=37496,eh=37488,th=37489,Nc=37490,nh=37491,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,vh=36492,xh=36494,_h=36495,yh=36283,Sh=36284,Ic=36285,Mh=36286,ZT=3200,r0=0,QT=1,mr="",Bn="srgb",Uc="srgb-linear",Fc="linear",st="srgb",_s=7680,s0=519,JT=512,ew=513,tw=514,Xp=515,nw=516,iw=517,jp=518,rw=519,o0=35044,a0="300 es",_i=2e3,Oc=2001;function sw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ow(){const t=kc("canvas");return t.style.display="block",t}const l0={};function c0(...t){const e="THREE."+t.shift();console.log(e,...t)}function Xy(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=Xy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=Xy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function io(...t){const e=t.join(" ");e in l0||(l0[e]=!0,Be(...t))}function aw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const lw={[kd]:Bd,[zd]:Gd,[Vd]:Wd,[ho]:Hd,[Bd]:kd,[Gd]:zd,[Wd]:Vd,[Hd]:ho};class ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,Eh=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function cw(t,e){return(t%e+e)%e}function Ju(t,e,n){return(1-n)*t+n*e}function Uo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lm=class Lm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lm.prototype.isVector2=!0;let it=Lm;class Eo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(d!==S||l!==u||c!==p||f!==g){let m=l*u+c*p+f*g+d*S;m<0&&(u=-u,p=-p,g=-g,S=-S,m=-m);let h=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);h=Math.sin(h*v)/y,a=Math.sin(a*v)/y,l=l*h+u*a,c=c*h+p*a,f=f*h+g*a,d=d*h+S*a}else{l=l*h+u*a,c=c*h+p*a,f=f*h+g*a,d=d*h+S*a;const v=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=v,c*=v,f*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*d+l*p-c*u,e[n+1]=l*g+f*u+c*d-a*p,e[n+2]=c*g+f*p+a*u-l*d,e[n+3]=f*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d-u*p*g;break;case"YXZ":this._x=u*f*d+c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d+u*p*g;break;case"ZXY":this._x=u*f*d-c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d-u*p*g;break;case"ZYX":this._x=u*f*d-c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d+u*p*g;break;case"YZX":this._x=u*f*d+c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d-u*p*g;break;case"XZY":this._x=u*f*d-c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d+u*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nm=class Nm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(u0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(u0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ef.copy(this).projectOnVector(e),this.sub(ef)}reflect(e){return this.sub(ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nm.prototype.isVector3=!0;let j=Nm;const ef=new j,u0=new Eo,Im=class Im{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],g=i[8],S=r[0],m=r[3],h=r[6],v=r[1],y=r[4],M=r[7],E=r[2],T=r[5],b=r[8];return s[0]=o*S+a*v+l*E,s[3]=o*m+a*y+l*T,s[6]=o*h+a*M+l*b,s[1]=c*S+f*v+d*E,s[4]=c*m+f*y+d*T,s[7]=c*h+f*M+d*b,s[2]=u*S+p*v+g*E,s[5]=u*m+p*y+g*T,s[8]=u*h+p*M+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,g=n*d+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(r*c-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=u*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tf.makeScale(e,n)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tf.makeRotation(-e)),this}translate(e,n){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Im.prototype.isMatrix3=!0;let Ge=Im;const tf=new Ge,f0=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d0=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uw(){const t={enabled:!0,workingColorSpace:Uc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?Fc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Uc]:{primaries:e,whitePoint:i,transfer:Fc,toXYZ:f0,fromXYZ:d0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:f0,fromXYZ:d0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const qe=uw();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ro(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class fw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=kc("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dw=0;class Yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nf(r[o].image)):s.push(nf(r[o]))}else s=nf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let hw=0;const rf=new j;class hn extends ps{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=ki,r=ki,s=an,o=Qr,a=ii,l=Gn,c=hn.DEFAULT_ANISOTROPY,f=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=za(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rf).x}get height(){return this.source.getSize(rf).y}get depth(){return this.source.getSize(rf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Oy;hn.DEFAULT_ANISOTROPY=1;const Um=class Um{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],g=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(p+1)/2,E=(h+1)/2,T=(f+u)/4,b=(d+S)/4,x=(g+m)/4;return y>M&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=b/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-S)/v,this.z=(u-f)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Um.prototype.isVector4=!0;let Pt=Um;class pw extends ps{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Yp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends pw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jy extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mw extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,g,S,m)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,g,S,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=g,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,g=a*f,S=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=u-S*c,n[9]=-a*l,n[2]=S-u*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,g=c*f,S=c*d;n[0]=u+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=S+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,g=c*f,S=c*d;n[0]=u-S*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=S-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,g=a*f,S=a*d;n[0]=l*f,n[4]=g*c-p,n[8]=u*c+S,n[1]=l*d,n[5]=S*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*f,n[4]=S-u*d,n[8]=g*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+g,n[10]=u-S*d}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+S,n[5]=o*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*f,n[10]=S*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gw,e,vw)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),rr.crossVectors(i,wn),rr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),rr.crossVectors(i,wn)),rr.normalize(),pl.crossVectors(wn,rr),r[0]=rr.x,r[4]=pl.x,r[8]=wn.x,r[1]=rr.y,r[5]=pl.y,r[9]=wn.y,r[2]=rr.z,r[6]=pl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],g=i[2],S=i[6],m=i[10],h=i[14],v=i[3],y=i[7],M=i[11],E=i[15],T=r[0],b=r[4],x=r[8],C=r[12],L=r[1],N=r[5],B=r[9],K=r[13],te=r[2],V=r[6],Z=r[10],H=r[14],F=r[3],$=r[7],D=r[11],R=r[15];return s[0]=o*T+a*L+l*te+c*F,s[4]=o*b+a*N+l*V+c*$,s[8]=o*x+a*B+l*Z+c*D,s[12]=o*C+a*K+l*H+c*R,s[1]=f*T+d*L+u*te+p*F,s[5]=f*b+d*N+u*V+p*$,s[9]=f*x+d*B+u*Z+p*D,s[13]=f*C+d*K+u*H+p*R,s[2]=g*T+S*L+m*te+h*F,s[6]=g*b+S*N+m*V+h*$,s[10]=g*x+S*B+m*Z+h*D,s[14]=g*C+S*K+m*H+h*R,s[3]=v*T+y*L+M*te+E*F,s[7]=v*b+y*N+M*V+E*$,s[11]=v*x+y*B+M*Z+E*D,s[15]=v*C+y*K+M*H+E*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],g=e[3],S=e[7],m=e[11],h=e[15],v=l*p-c*u,y=a*p-c*d,M=a*u-l*d,E=o*p-c*f,T=o*u-l*f,b=o*d-a*f;return n*(S*v-m*y+h*M)-i*(g*v-m*E+h*T)+r*(g*y-S*E+h*b)-s*(g*M-S*T+m*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],g=e[12],S=e[13],m=e[14],h=e[15],v=n*a-i*o,y=n*l-r*o,M=n*c-s*o,E=i*l-r*a,T=i*c-s*a,b=r*c-s*l,x=f*S-d*g,C=f*m-u*g,L=f*h-p*g,N=d*m-u*S,B=d*h-p*S,K=u*h-p*m,te=v*K-y*B+M*N+E*L-T*C+b*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/te;return e[0]=(a*K-l*B+c*N)*V,e[1]=(r*B-i*K-s*N)*V,e[2]=(S*b-m*T+h*E)*V,e[3]=(u*T-d*b-p*E)*V,e[4]=(l*L-o*K-c*C)*V,e[5]=(n*K-r*L+s*C)*V,e[6]=(m*M-g*b-h*y)*V,e[7]=(f*b-u*M+p*y)*V,e[8]=(o*B-a*L+c*x)*V,e[9]=(i*L-n*B-s*x)*V,e[10]=(g*T-S*M+h*v)*V,e[11]=(d*M-f*T-p*v)*V,e[12]=(a*C-o*N-l*x)*V,e[13]=(n*N-i*C+r*x)*V,e[14]=(S*y-g*E-m*v)*V,e[15]=(f*E-d*y+u*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,g=s*d,S=o*f,m=o*d,h=a*d,v=l*c,y=l*f,M=l*d,E=i.x,T=i.y,b=i.z;return r[0]=(1-(S+h))*E,r[1]=(p+M)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(u+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+y)*b,r[9]=(m-v)*b,r[10]=(1-(u+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ss.set(r[0],r[1],r[2]).length();const a=Ss.set(r[4],r[5],r[6]).length(),l=Ss.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qn.copy(this);const c=1/o,f=1/a,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=f,qn.elements[5]*=f,qn.elements[6]*=f,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,S;if(l)g=s/(o-s),S=o*s/(o-s);else if(a===_i)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Oc)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,S;if(l)g=1/(o-s),S=o/(o-s);else if(a===_i)g=-2/(o-s),S=-(o+s)/(o-s);else if(a===Oc)g=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};jc.prototype.isMatrix4=!0;let Ut=jc;const Ss=new j,qn=new Ut,gw=new j(0,0,0),vw=new j(1,1,1),rr=new j,pl=new j,wn=new j,h0=new Ut,p0=new Eo;class fs{constructor(e=0,n=0,i=0,r=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return h0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return p0.setFromEuler(this),this.setFromQuaternion(p0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class Yy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xw=0;const m0=new j,Ms=new Eo,Ci=new Ut,ml=new j,Fo=new j,_w=new j,yw=new Eo,g0=new j(1,0,0),v0=new j(0,1,0),x0=new j(0,0,1),_0={type:"added"},Sw={type:"removed"},Es={type:"childadded",child:null},sf={type:"childremoved",child:null};class En extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new j,n=new fs,i=new Eo,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ge}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(g0,e)}rotateY(e){return this.rotateOnAxis(v0,e)}rotateZ(e){return this.rotateOnAxis(x0,e)}translateOnAxis(e,n){return m0.copy(e).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(g0,e)}translateY(e){return this.translateOnAxis(v0,e)}translateZ(e){return this.translateOnAxis(x0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Fo,ml,this.up):Ci.lookAt(ml,Fo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),Es.child=e,this.dispatchEvent(Es),Es.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sw),sf.child=e,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,_w),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,yw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DEFAULT_UP=new j(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mw={type:"move"};class of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new gl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=cw(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=$y[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return qe.workingToColorSpace(nn.copy(this),e),Math.round(Ke(nn.r*255,0,255))*65536+Math.round(Ke(nn.g*255,0,255))*256+Math.round(Ke(nn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Bn){qe.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(vl);const i=Ju(sr.h,vl.h,n),r=Ju(sr.s,vl.s,n),s=Ju(sr.l,vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new nt;nt.NAMES=$y;class Ew extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new j,Ri=new j,lf=new j,Pi=new j,Ts=new j,ws=new j,y0=new j,cf=new j,uf=new j,ff=new j,df=new Pt,hf=new Pt,pf=new Pt;class ni{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ri.subVectors(i,n),lf.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Ri),l=Kn.dot(lf),c=Ri.dot(Ri),f=Ri.dot(lf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,g=(o*f-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return df.setScalar(0),hf.setScalar(0),pf.setScalar(0),df.fromBufferAttribute(e,n),hf.fromBufferAttribute(e,i),pf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(df,s.x),o.addScaledVector(hf,s.y),o.addScaledVector(pf,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ri.subVectors(e,n),Kn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Kn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ts.subVectors(r,i),ws.subVectors(s,i),cf.subVectors(e,i);const l=Ts.dot(cf),c=ws.dot(cf);if(l<=0&&c<=0)return n.copy(i);uf.subVectors(e,r);const f=Ts.dot(uf),d=ws.dot(uf);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ts,o);ff.subVectors(e,s);const p=Ts.dot(ff),g=ws.dot(ff);if(g>=0&&p<=g)return n.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ws,a);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return y0.subVectors(s,r),a=(d-f)/(d-f+(p-g)),n.copy(r).addScaledVector(y0,a);const h=1/(m+S+u);return o=S*h,a=u*h,n.copy(i).addScaledVector(Ts,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Va{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),_l.subVectors(this.max,Oo),As.subVectors(e.a,Oo),bs.subVectors(e.b,Oo),Cs.subVectors(e.c,Oo),or.subVectors(bs,As),ar.subVectors(Cs,bs),Or.subVectors(As,Cs);let n=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Or.z,Or.y,or.z,0,-or.x,ar.z,0,-ar.x,Or.z,0,-Or.x,-or.y,or.x,0,-ar.y,ar.x,0,-Or.y,Or.x,0];return!mf(n,As,bs,Cs,_l)||(n=[1,0,0,0,1,0,0,0,1],!mf(n,As,bs,Cs,_l))?!1:(yl.crossVectors(or,ar),n=[yl.x,yl.y,yl.z],mf(n,As,bs,Cs,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new j,new j,new j,new j,new j,new j,new j,new j],Zn=new j,xl=new Va,As=new j,bs=new j,Cs=new j,or=new j,ar=new j,Or=new j,Oo=new j,_l=new j,yl=new j,kr=new j;function mf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){kr.fromArray(t,s);const a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=n.dot(kr),f=i.dot(kr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Ft=new j,Sl=new it;let Tw=0;class oi extends ps{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=o0,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Uo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class qy extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ky extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hi extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ww=new Va,ko=new j,gf=new j;class uu{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ww.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(gf)),this.expandByPoint(ko.copy(e.center).sub(gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Aw=0;const Fn=new Ut,vf=new En,Rs=new j,An=new Va,Bo=new Va,Gt=new j;class li extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sw(e)?Ky:qy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(An.min,Bo.min),An.expandByPoint(Gt),Gt.addVectors(An.max,Bo.max),An.expandByPoint(Gt)):(An.expandByPoint(Bo.min),An.expandByPoint(Bo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Gt.add(Rs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new j,l[x]=new j;const c=new j,f=new j,d=new j,u=new it,p=new it,g=new it,S=new j,m=new j;function h(x,C,L){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,L),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,L),f.sub(c),d.sub(c),p.sub(u),g.sub(u);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(S.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(N),a[x].add(S),a[C].add(S),a[L].add(S),l[x].add(m),l[C].add(m),l[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,C=v.length;x<C;++x){const L=v[x],N=L.start,B=L.count;for(let K=N,te=N+B;K<te;K+=3)h(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const y=new j,M=new j,E=new j,T=new j;function b(x){E.fromBufferAttribute(r,x),T.copy(E);const C=a[x];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),M.crossVectors(T,C);const N=M.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,N)}for(let x=0,C=v.length;x<C;++x){const L=v[x],N=L.start,B=L.count;for(let K=N,te=N+B;K<te;K+=3)b(e.getX(K+0)),b(e.getX(K+1)),b(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,f=new j,d=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*f;for(let h=0;h<f;h++)u[g++]=c[p++]}return new oi(u,f,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bw=0;class Ha extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=za(),this.name="",this.type="Material",this.blending=no,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fd&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new j,xf=new j,Ml=new j,lr=new j,_f=new j,El=new j,yf=new j;class Zy{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xf.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(xf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ml),a=lr.dot(this.direction),l=-lr.dot(Ml),c=lr.lengthSq(),f=Math.abs(1-o*o);let d,u,p,g;if(f>0)if(d=o*l-a,u=o*a-l,g=s*f,d>=0)if(u>=-g)if(u<=g){const S=1/f;d*=S,u*=S,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xf).addScaledVector(Ml,u),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){_f.subVectors(n,e),El.subVectors(i,e),yf.crossVectors(_f,El);let o=this.direction.dot(yf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(lr,El));if(l<0)return null;const c=a*this.direction.dot(_f.cross(lr));if(c<0||l+c>o)return null;const f=-a*lr.dot(yf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qy extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const S0=new Ut,Br=new Zy,Tl=new uu,M0=new j,wl=new j,Al=new j,bl=new j,Sf=new j,Cl=new j,E0=new j,Rl=new j;class Zi extends En{constructor(e=new li,n=new Qy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Sf.fromBufferAttribute(d,e),o?Cl.addScaledVector(Sf,f):Cl.addScaledVector(Sf.sub(n),f))}n.add(Cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(Tl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Tl,M0)===null||Br.origin.distanceToSquared(M0)>(e.far-e.near)**2))&&(S0.copy(s).invert(),Br.copy(e.ray).applyMatrix4(S0),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){const m=u[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,E=y;M<E;M+=3){const T=a.getX(M),b=a.getX(M+1),x=a.getX(M+2);r=Pl(this,h,e,i,c,f,d,T,b,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,h=S;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);r=Pl(this,o,e,i,c,f,d,v,y,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){const m=u[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,E=y;M<E;M+=3){const T=M,b=M+1,x=M+2;r=Pl(this,h,e,i,c,f,d,T,b,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,h=S;m<h;m+=3){const v=m,y=m+1,M=m+2;r=Pl(this,o,e,i,c,f,d,v,y,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Cw(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Rl);return c<n.near||c>n.far?null:{distance:c,point:Rl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,wl),t.getVertexPosition(l,Al),t.getVertexPosition(c,bl);const f=Cw(t,e,n,i,wl,Al,bl,E0);if(f){const d=new j;ni.getBarycoord(E0,wl,Al,bl,d),r&&(f.uv=ni.getInterpolatedAttribute(r,a,l,c,d,new it)),s&&(f.uv1=ni.getInterpolatedAttribute(s,a,l,c,d,new it)),o&&(f.normal=ni.getInterpolatedAttribute(o,a,l,c,d,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new j,materialIndex:0};ni.getNormal(wl,Al,bl,u.normal),f.face=u,f.barycoord=d}return f}class Rw extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,f=qt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=new j,Pw=new j,Dw=new Ge;class Wr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mf.subVectors(i,n).cross(Pw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Mf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Dw.getNormalMatrix(e),r=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new uu,Lw=new it(.5,.5),Dl=new j;class Jy{constructor(e=new Wr,n=new Wr,i=new Wr,r=new Wr,s=new Wr,o=new Wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],g=s[8],S=s[9],m=s[10],h=s[11],v=s[12],y=s[13],M=s[14],E=s[15];if(r[0].setComponents(c-o,p-f,h-g,E-v).normalize(),r[1].setComponents(c+o,p+f,h+g,E+v).normalize(),r[2].setComponents(c+a,p+d,h+S,E+y).normalize(),r[3].setComponents(c-a,p-d,h-S,E-y).normalize(),i)r[4].setComponents(l,u,m,M).normalize(),r[5].setComponents(c-l,p-u,h-m,E-M).normalize();else if(r[4].setComponents(c-l,p-u,h-m,E-M).normalize(),n===_i)r[5].setComponents(c+l,p+u,h+m,E+M).normalize();else if(n===Oc)r[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=Lw.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eS extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T0=new Ut,Th=new Zy,Ll=new uu,Nl=new j;class Nw extends En{constructor(e=new li,n=new eS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;T0.copy(r).invert(),Th.copy(e.ray).applyMatrix4(T0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,S=p;g<S;g++){const m=c.getX(g);Nl.fromBufferAttribute(d,m),w0(Nl,m,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,S=p;g<S;g++)Nl.fromBufferAttribute(d,g),w0(Nl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function w0(t,e,n,i,r,s,o){const a=Th.distanceSqToPoint(t);if(a<n){const l=new j;Th.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tS extends hn{constructor(e=[],n=cs,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mo extends hn{constructor(e,n,i=Ai,r,s,o,a=qt,l=qt,c,f=Ki,d=1){if(f!==Ki&&f!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Iw extends mo{constructor(e,n=Ai,i=cs,r,s,o=qt,a=qt,l,c=Ki){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nS extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ga extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hi(c,3)),this.setAttribute("normal",new Hi(f,3)),this.setAttribute("uv",new Hi(d,2));function g(S,m,h,v,y,M,E,T,b,x,C){const L=M/b,N=E/x,B=M/2,K=E/2,te=T/2,V=b+1,Z=x+1;let H=0,F=0;const $=new j;for(let D=0;D<Z;D++){const R=D*N-K;for(let q=0;q<V;q++){const ce=q*L-B;$[S]=ce*v,$[m]=R*y,$[h]=te,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[h]=T>0?1:-1,f.push($.x,$.y,$.z),d.push(q/b),d.push(1-D/x),H+=1}}for(let D=0;D<x;D++)for(let R=0;R<b;R++){const q=u+R+V*D,ce=u+R+V*(D+1),Ee=u+(R+1)+V*(D+1),xe=u+(R+1)+V*D;l.push(q,ce,xe),l.push(ce,Ee,xe),F+=6}a.addGroup(p,F,C),p+=F,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fu extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],g=[],S=[],m=[];for(let h=0;h<f;h++){const v=h*u-o;for(let y=0;y<c;y++){const M=y*d-s;g.push(M,-v,0),S.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,M=v+c*(h+1),E=v+1+c*(h+1),T=v+1+c*h;p.push(y,M,T),p.push(M,E,T)}this.setIndex(p),this.setAttribute("position",new Hi(g,3)),this.setAttribute("normal",new Hi(S,3)),this.setAttribute("uv",new Hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(A0(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(A0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function A0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Uw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Fw={clone:go,merge:un};var Ow=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ow,this.fragmentShader=kw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Uw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(r.value);break;case"v2":this.uniforms[i].value=new it().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bw extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zw extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vw extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Il=new j,Ul=new Eo,hi=new j;class rS extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ul,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Il,Ul,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new j,b0=new it,C0=new it;class Hn extends rS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,b0,C0),n.subVectors(C0,b0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class sS extends rS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=-90,Ds=1;class Hw extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Ps,Ds,e,n);r.layers=this.layers,this.add(r);const s=new Hn(Ps,Ds,e,n);s.layers=this.layers,this.add(s);const o=new Hn(Ps,Ds,e,n);o.layers=this.layers,this.add(o);const a=new Hn(Ps,Ds,e,n);a.layers=this.layers,this.add(a);const l=new Hn(Ps,Ds,e,n);l.layers=this.layers,this.add(l);const c=new Hn(Ps,Ds,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gw extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fm=class Fm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Fm.prototype.isMatrix2=!0;let R0=Fm;function P0(t,e,n,i){const r=Ww(i);switch(n){case Hy:return t*e;case Wy:return t*e/r.components*r.byteLength;case Hp:return t*e/r.components*r.byteLength;case us:return t*e*2/r.components*r.byteLength;case Gp:return t*e*2/r.components*r.byteLength;case Gy:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Wp:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:case Kd:return Math.max(t,16)*Math.max(e,8)/4;case Yd:case qd:return Math.max(t,8)*Math.max(e,8)/2;case Zd:case Qd:case eh:case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jd:case Nc:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vh:case xh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ic:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ww(t){switch(t){case Gn:case ky:return{byteLength:1,components:1};case Ca:case By:case qi:return{byteLength:2,components:1};case zp:case Vp:return{byteLength:2,components:4};case Ai:case Bp:case xi:return{byteLength:4,components:1};case zy:case Vy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Xw(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],S=d[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const S=d[p];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var jw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yw=`#ifdef USE_ALPHAHASH
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
#endif`,$w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qw=`#ifdef USE_AOMAP
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
#endif`,Jw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eA=`#ifdef USE_BATCHING
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
#endif`,tA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sA=`#ifdef USE_IRIDESCENCE
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
#endif`,oA=`#ifdef USE_BUMPMAP
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
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mA=`#define PI 3.141592653589793
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
} // validated`,gA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vA=`vec3 transformedNormal = objectNormal;
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
#endif`,xA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_A=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MA="gl_FragColor = linearToOutputTexel( gl_FragColor );",EA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TA=`#ifdef USE_ENVMAP
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
#endif`,wA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
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
#endif`,bA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CA=`#ifdef USE_ENVMAP
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
#endif`,RA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NA=`#ifdef USE_GRADIENTMAP
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
}`,IA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kA=`#ifdef USE_ENVMAP
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
	#endif
#endif`,BA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GA=`PhysicalMaterial material;
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
#endif`,WA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,XA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,jA=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$A=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yb=`uniform sampler2D t2D;
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
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
}`,Jb=`#if DEPTH_PACKING == 3200
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
}`,eC=`#define DISTANCE
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
}`,tC=`#define DISTANCE
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
}`,nC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`uniform float scale;
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
}`,sC=`uniform vec3 diffuse;
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
}`,oC=`#include <common>
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
}`,aC=`uniform vec3 diffuse;
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
}`,lC=`#define LAMBERT
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
}`,cC=`#define LAMBERT
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
}`,uC=`#define MATCAP
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
}`,fC=`#define MATCAP
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
}`,dC=`#define NORMAL
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
}`,hC=`#define NORMAL
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
}`,pC=`#define PHONG
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
}`,mC=`#define PHONG
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
}`,gC=`#define STANDARD
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
}`,vC=`#define STANDARD
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
}`,xC=`#define TOON
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
}`,_C=`#define TOON
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
}`,yC=`uniform float size;
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
}`,SC=`uniform vec3 diffuse;
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
}`,MC=`#include <common>
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
}`,EC=`uniform vec3 color;
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
}`,TC=`uniform float rotation;
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
}`,wC=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:jw,alphahash_pars_fragment:Yw,alphamap_fragment:$w,alphamap_pars_fragment:qw,alphatest_fragment:Kw,alphatest_pars_fragment:Zw,aomap_fragment:Qw,aomap_pars_fragment:Jw,batching_pars_vertex:eA,batching_vertex:tA,begin_vertex:nA,beginnormal_vertex:iA,bsdfs:rA,iridescence_fragment:sA,bumpmap_pars_fragment:oA,clipping_planes_fragment:aA,clipping_planes_pars_fragment:lA,clipping_planes_pars_vertex:cA,clipping_planes_vertex:uA,color_fragment:fA,color_pars_fragment:dA,color_pars_vertex:hA,color_vertex:pA,common:mA,cube_uv_reflection_fragment:gA,defaultnormal_vertex:vA,displacementmap_pars_vertex:xA,displacementmap_vertex:_A,emissivemap_fragment:yA,emissivemap_pars_fragment:SA,colorspace_fragment:MA,colorspace_pars_fragment:EA,envmap_fragment:TA,envmap_common_pars_fragment:wA,envmap_pars_fragment:AA,envmap_pars_vertex:bA,envmap_physical_pars_fragment:kA,envmap_vertex:CA,fog_vertex:RA,fog_pars_vertex:PA,fog_fragment:DA,fog_pars_fragment:LA,gradientmap_pars_fragment:NA,lightmap_pars_fragment:IA,lights_lambert_fragment:UA,lights_lambert_pars_fragment:FA,lights_pars_begin:OA,lights_toon_fragment:BA,lights_toon_pars_fragment:zA,lights_phong_fragment:VA,lights_phong_pars_fragment:HA,lights_physical_fragment:GA,lights_physical_pars_fragment:WA,lights_fragment_begin:XA,lights_fragment_maps:jA,lights_fragment_end:YA,lightprobes_pars_fragment:$A,logdepthbuf_fragment:qA,logdepthbuf_pars_fragment:KA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:QA,map_fragment:JA,map_pars_fragment:eb,map_particle_fragment:tb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:rb,morphinstance_vertex:sb,morphcolor_vertex:ob,morphnormal_vertex:ab,morphtarget_pars_vertex:lb,morphtarget_vertex:cb,normal_fragment_begin:ub,normal_fragment_maps:fb,normal_pars_fragment:db,normal_pars_vertex:hb,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:vb,clearcoat_pars_fragment:xb,iridescence_pars_fragment:_b,opaque_fragment:yb,packing:Sb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:Tb,dithering_pars_fragment:wb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:Rb,shadowmap_vertex:Pb,shadowmask_pars_fragment:Db,skinbase_vertex:Lb,skinning_pars_vertex:Nb,skinning_vertex:Ib,skinnormal_vertex:Ub,specularmap_fragment:Fb,specularmap_pars_fragment:Ob,tonemapping_fragment:kb,tonemapping_pars_fragment:Bb,transmission_fragment:zb,transmission_pars_fragment:Vb,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Wb,worldpos_vertex:Xb,background_vert:jb,background_frag:Yb,backgroundCube_vert:$b,backgroundCube_frag:qb,cube_vert:Kb,cube_frag:Zb,depth_vert:Qb,depth_frag:Jb,distance_vert:eC,distance_frag:tC,equirect_vert:nC,equirect_frag:iC,linedashed_vert:rC,linedashed_frag:sC,meshbasic_vert:oC,meshbasic_frag:aC,meshlambert_vert:lC,meshlambert_frag:cC,meshmatcap_vert:uC,meshmatcap_frag:fC,meshnormal_vert:dC,meshnormal_frag:hC,meshphong_vert:pC,meshphong_frag:mC,meshphysical_vert:gC,meshphysical_frag:vC,meshtoon_vert:xC,meshtoon_frag:_C,points_vert:yC,points_frag:SC,shadow_vert:MC,shadow_frag:EC,sprite_vert:TC,sprite_frag:wC},ve={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},gi={basic:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:un([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:un([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:un([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:un([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:un([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:un([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:un([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:un([ve.lights,ve.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};gi.physical={uniforms:un([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Fl={r:0,b:0,g:0},AC=new Ut,aS=new Ge;aS.set(-1,0,0,0,1,0,0,0,1);function bC(t,e,n,i,r,s){const o=new nt(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function g(v){let y=!1;const M=p(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(v,y){const M=p(y);M&&(M.isCubeTexture||M.mapping===cu)?(c===void 0&&(c=new Zi(new Ga(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:go(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AC.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(aS),c.material.toneMapped=qe.getTransfer(M.colorSpace)!==st,(f!==M||d!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Zi(new fu(2,2),new bi({name:"BackgroundMaterial",uniforms:go(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Fl,iS(t)),n.buffers.color.setClear(Fl.r,Fl.g,Fl.b,y,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:S,dispose:h}}function CC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(N,B,K,te,V){let Z=!1;const H=d(N,te,K,B);s!==H&&(s=H,c(s.object)),Z=p(N,te,K,V),Z&&g(N,te,K,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(N,B,K,te),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function d(N,B,K,te){const V=te.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const H=N.isInstancedMesh===!0?N.id:0;let F=Z[H];F===void 0&&(F={},Z[H]=F);let $=F[K.id];$===void 0&&($={},F[K.id]=$);let D=$[V];return D===void 0&&(D=u(l()),$[V]=D),D}function u(N){const B=[],K=[],te=[];for(let V=0;V<n;V++)B[V]=0,K[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:te,object:N,attributes:{},index:null}}function p(N,B,K,te){const V=s.attributes,Z=B.attributes;let H=0;const F=K.getAttributes();for(const $ in F)if(F[$].location>=0){const R=V[$];let q=Z[$];if(q===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),R===void 0||R.attribute!==q||q&&R.data!==q.data)return!0;H++}return s.attributesNum!==H||s.index!==te}function g(N,B,K,te){const V={},Z=B.attributes;let H=0;const F=K.getAttributes();for(const $ in F)if(F[$].location>=0){let R=Z[$];R===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(R=N.instanceColor));const q={};q.attribute=R,R&&R.data&&(q.data=R.data),V[$]=q,H++}s.attributes=V,s.attributesNum=H,s.index=te}function S(){const N=s.newAttributes;for(let B=0,K=N.length;B<K;B++)N[B]=0}function m(N){h(N,0)}function h(N,B){const K=s.newAttributes,te=s.enabledAttributes,V=s.attributeDivisors;K[N]=1,te[N]===0&&(t.enableVertexAttribArray(N),te[N]=1),V[N]!==B&&(t.vertexAttribDivisor(N,B),V[N]=B)}function v(){const N=s.newAttributes,B=s.enabledAttributes;for(let K=0,te=B.length;K<te;K++)B[K]!==N[K]&&(t.disableVertexAttribArray(K),B[K]=0)}function y(N,B,K,te,V,Z,H){H===!0?t.vertexAttribIPointer(N,B,K,V,Z):t.vertexAttribPointer(N,B,K,te,V,Z)}function M(N,B,K,te){S();const V=te.attributes,Z=K.getAttributes(),H=B.defaultAttributeValues;for(const F in Z){const $=Z[F];if($.location>=0){let D=V[F];if(D===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),D!==void 0){const R=D.normalized,q=D.itemSize,ce=e.get(D);if(ce===void 0)continue;const Ee=ce.buffer,xe=ce.type,z=ce.bytesPerElement,J=xe===t.INT||xe===t.UNSIGNED_INT||D.gpuType===Bp;if(D.isInterleavedBufferAttribute){const ne=D.data,ye=ne.stride,be=D.offset;if(ne.isInstancedInterleavedBuffer){for(let me=0;me<$.locationSize;me++)h($.location+me,ne.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let me=0;me<$.locationSize;me++)m($.location+me);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let me=0;me<$.locationSize;me++)y($.location+me,q/$.locationSize,xe,R,ye*z,(be+q/$.locationSize*me)*z,J)}else{if(D.isInstancedBufferAttribute){for(let ne=0;ne<$.locationSize;ne++)h($.location+ne,D.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ne=0;ne<$.locationSize;ne++)m($.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let ne=0;ne<$.locationSize;ne++)y($.location+ne,q/$.locationSize,xe,R,q*z,q/$.locationSize*ne*z,J)}}else if(H!==void 0){const R=H[F];if(R!==void 0)switch(R.length){case 2:t.vertexAttrib2fv($.location,R);break;case 3:t.vertexAttrib3fv($.location,R);break;case 4:t.vertexAttrib4fv($.location,R);break;default:t.vertexAttrib1fv($.location,R)}}}}v()}function E(){C();for(const N in i){const B=i[N];for(const K in B){const te=B[K];for(const V in te){const Z=te[V];for(const H in Z)f(Z[H].object),delete Z[H];delete te[V]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const B=i[N.id];for(const K in B){const te=B[K];for(const V in te){const Z=te[V];for(const H in Z)f(Z[H].object),delete Z[H];delete te[V]}}delete i[N.id]}function b(N){for(const B in i){const K=i[B];for(const te in K){const V=K[te];if(V[N.id]===void 0)continue;const Z=V[N.id];for(const H in Z)f(Z[H].object),delete Z[H];delete V[N.id]}}}function x(N){for(const B in i){const K=i[B],te=N.isInstancedMesh===!0?N.id:0,V=K[te];if(V!==void 0){for(const Z in V){const H=V[Z];for(const F in H)f(H[F].object),delete H[F];delete V[Z]}delete K[te],Object.keys(K).length===0&&delete i[B]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function RC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function PC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ii&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const x=b===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Gn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==xi&&!x)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Be("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:T}}function DC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,y=v*4;let M=h.clippingState||null;l.value=M,M=f(g,u,y,p);for(let E=0;E!==y;++E)M[E]=n[E];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const h=p+S*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,M=p;y!==S;++y,M+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const xr=4,D0=[.125,.215,.35,.446,.526,.582],$r=20,LC=256,zo=new sS,L0=new nt;let Ef=null,Tf=0,wf=0,Af=!1;const NC=new j;class N0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=NC}=s;Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef,Tf,wf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:qi,format:ii,colorSpace:Uc,depthBuffer:!1},r=I0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IC(s)),this._blurMaterial=FC(s,e,n),this._ggxMaterial=UC(s,e,n)}return r}_compileMaterial(e){const n=new Zi(new li,e);this._renderer.compile(n,zo)}_sceneToCubeUV(e,n,i,r,s){const l=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(L0),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zi(new Ga,new Qy({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy(L0),h=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const E=this._cubeSize;Ls(r,M*E,y>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===cs||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=F0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ls(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,p=d*u,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-xr?i-g+xr:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ls(s,m,h,3*S,2*S),r.setRenderTarget(s),r.render(a,zo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ls(e,m,h,3*S,2*S),r.setRenderTarget(e),r.render(a,zo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),S=s/g,m=isFinite(s)?1+Math.floor(f*S):$r;m>$r&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$r}`);const h=[];let v=0;for(let b=0;b<$r;++b){const x=b/S,C=Math.exp(-x*x/2);h.push(C),b===0?v+=C:b<m&&(v+=2*C)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const M=this._sizeLods[r],E=3*M*(r>y-xr?r-y+xr:0),T=4*(this._cubeSize-M);Ls(n,E,T,3*M,2*M),l.setRenderTarget(n),l.render(d,zo)}}function IC(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+D0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-xr?l=D0[o-t+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,S=3,m=2,h=1,v=new Float32Array(S*g*p),y=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,x=T>2?0:-1,C=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];v.set(C,S*g*T),y.set(u,m*g*T);const L=[T,T,T,T,T,T];M.set(L,h*g*T)}const E=new li;E.setAttribute("position",new oi(v,S)),E.setAttribute("uv",new oi(y,m)),E.setAttribute("faceIndex",new oi(M,h)),i.push(new Zi(E,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function I0(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UC(t,e,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function FC(t,e,n){const i=new Float32Array($r),r=new j(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function U0(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function F0(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lS extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:zi});s.uniforms.tEquirect.value=n;const o=new Zi(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=an),new Hw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function OC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===qu||p===Ku)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new lS(g.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===qu||p===Ku,S=p===cs||p===po;if(g||S){let m=n.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new N0(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return g&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new N0(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function a(u,p){return p===qu?u.mapping=cs:p===Ku&&(u.mapping=po),u}function l(u){let p=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&io("WebGLRenderer: "+i+" extension not supported."),r}}}function BC(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const v=p.array;S=p.version;for(let y=0,M=v.length;y<M;y+=3){const E=v[y+0],T=v[y+1],b=v[y+2];u.push(E,T,T,b,b,E)}}else{const v=g.array;S=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const E=y+0,T=y+1,b=y+2;u.push(E,T,T,b,b,E)}}const m=new(g.count>=65535?Ky:qy)(u,1);m.version=S;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function zC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*o,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];n.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function VC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HC(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let C=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),S===!0&&(y=3);let M=a.attributes.position.count*y,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*E*4*d),b=new jy(T,M,E,d);b.type=xi,b.needsUpdate=!0;const x=y*4;for(let L=0;L<d;L++){const N=m[L],B=h[L],K=v[L],te=M*E*4*L;for(let V=0;V<N.count;V++){const Z=V*x;p===!0&&(r.fromBufferAttribute(N,V),T[te+Z+0]=r.x,T[te+Z+1]=r.y,T[te+Z+2]=r.z,T[te+Z+3]=0),g===!0&&(r.fromBufferAttribute(B,V),T[te+Z+4]=r.x,T[te+Z+5]=r.y,T[te+Z+6]=r.z,T[te+Z+7]=0),S===!0&&(r.fromBufferAttribute(K,V),T[te+Z+8]=r.x,T[te+Z+9]=r.y,T[te+Z+10]=r.z,T[te+Z+11]=K.itemSize===4?r.w:1)}}u={count:d,texture:b,size:new it(M,E)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function GC(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const WC={[Py]:"LINEAR_TONE_MAPPING",[Dy]:"REINHARD_TONE_MAPPING",[Ly]:"CINEON_TONE_MAPPING",[Ny]:"ACES_FILMIC_TONE_MAPPING",[Uy]:"AGX_TONE_MAPPING",[Fy]:"NEUTRAL_TONE_MAPPING",[Iy]:"CUSTOM_TONE_MAPPING"};function XC(t,e,n,i,r,s){const o=new Ei(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new mo(e,n):void 0}),a=new Ei(e,n,{type:qi,depthBuffer:!1,stencilBuffer:!1}),l=new li;l.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const c=new Bw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Zi(l,c),d=new sS(-1,1,1,-1,0,1);let u=null,p=null,g=!1,S,m=null,h=[],v=!1;this.setSize=function(y,M){o.setSize(y,M),a.setSize(y,M);for(let E=0;E<h.length;E++){const T=h[E];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){h=y,v=h.length>0&&h[0].isRenderPass===!0;const M=o.width,E=o.height;for(let T=0;T<h.length;T++){const b=h[T];b.setSize&&b.setSize(M,E)}},this.begin=function(y,M){if(g||y.toneMapping===Mi&&h.length===0)return!1;if(m=M,M!==null){const E=M.width,T=M.height;(o.width!==E||o.height!==T)&&this.setSize(E,T)}return v===!1&&y.setRenderTarget(o),S=y.toneMapping,y.toneMapping=Mi,!0},this.hasRenderPass=function(){return v},this.end=function(y,M){y.toneMapping=S,g=!0;let E=o,T=a;for(let b=0;b<h.length;b++){const x=h[b];if(x.enabled!==!1&&(x.render(y,T,E,M),x.needsSwap!==!1)){const C=E;E=T,T=C}}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,c.defines={},qe.getTransfer(u)===st&&(c.defines.SRGB_TRANSFER="");const b=WC[p];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(f,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const cS=new hn,wh=new mo(1,1),uS=new jy,fS=new mw,dS=new tS,O0=[],k0=[],B0=new Float32Array(16),z0=new Float32Array(9),V0=new Float32Array(4);function To(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=O0[r];if(s===void 0&&(s=new Float32Array(r),O0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hu(t,e){let n=k0[e];n===void 0&&(n=new Int32Array(e),k0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function KC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;V0.set(i),t.uniformMatrix2fv(this.addr,!1,V0),Ht(n,i)}}function ZC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;z0.set(i),t.uniformMatrix3fv(this.addr,!1,z0),Ht(n,i)}}function QC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;B0.set(i),t.uniformMatrix4fv(this.addr,!1,B0),Ht(n,i)}}function JC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function iR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function aR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wh.compareFunction=n.isReversedDepthBuffer()?jp:Xp,s=wh):s=cS,n.setTexture2D(e||s,r)}function lR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fS,r)}function cR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dS,r)}function uR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uS,r)}function fR(t){switch(t){case 5126:return jC;case 35664:return YC;case 35665:return $C;case 35666:return qC;case 35674:return KC;case 35675:return ZC;case 35676:return QC;case 5124:case 35670:return JC;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return rR;case 36295:return sR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return uR}}function dR(t,e){t.uniform1fv(this.addr,e)}function hR(t,e){const n=To(e,this.size,2);t.uniform2fv(this.addr,n)}function pR(t,e){const n=To(e,this.size,3);t.uniform3fv(this.addr,n)}function mR(t,e){const n=To(e,this.size,4);t.uniform4fv(this.addr,n)}function gR(t,e){const n=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vR(t,e){const n=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xR(t,e){const n=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _R(t,e){t.uniform1iv(this.addr,e)}function yR(t,e){t.uniform2iv(this.addr,e)}function SR(t,e){t.uniform3iv(this.addr,e)}function MR(t,e){t.uniform4iv(this.addr,e)}function ER(t,e){t.uniform1uiv(this.addr,e)}function TR(t,e){t.uniform2uiv(this.addr,e)}function wR(t,e){t.uniform3uiv(this.addr,e)}function AR(t,e){t.uniform4uiv(this.addr,e)}function bR(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=wh:o=cS;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function CR(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||fS,s[o])}function RR(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dS,s[o])}function PR(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||uS,s[o])}function DR(t){switch(t){case 5126:return dR;case 35664:return hR;case 35665:return pR;case 35666:return mR;case 35674:return gR;case 35675:return vR;case 35676:return xR;case 5124:case 35670:return _R;case 35667:case 35671:return yR;case 35668:case 35672:return SR;case 35669:case 35673:return MR;case 5125:return ER;case 36294:return TR;case 36295:return wR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return CR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return PR}}class LR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fR(n.type)}}class NR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DR(n.type)}}class IR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function H0(t,e){t.seq.push(e),t.map[e.id]=e}function UR(t,e,n){const i=t.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){H0(n,c===void 0?new LR(a,t,e):new NR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new IR(a),H0(n,d)),n=d}}}class sc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);UR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function G0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FR=37297;let OR=0;function kR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const W0=new Ge;function BR(t){qe._getMatrix(W0,qe.workingColorSpace,t);const e=`mat3( ${W0.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Fc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function X0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+kR(t.getShaderSource(e),a)}else return s}function zR(t,e){const n=BR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VR={[Py]:"Linear",[Dy]:"Reinhard",[Ly]:"Cineon",[Ny]:"ACESFilmic",[Uy]:"AgX",[Fy]:"Neutral",[Iy]:"Custom"};function HR(t,e){const n=VR[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ol=new j;function GR(){qe.getLuminanceCoefficients(Ol);const t=Ol.x.toFixed(4),e=Ol.y.toFixed(4),n=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function XR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $o(t){return t!==""}function j0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(t){return t.replace(YR,qR)}const $R=new Map;function qR(t,e){let n=je[e];if(n===void 0){const i=$R.get(e);if(i!==void 0)n=je[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ah(n)}const KR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(t){return t.replace(KR,ZR)}function ZR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function q0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QR={[ec]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function JR(t){return QR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eP={[cs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function tP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nP={[po]:"ENVMAP_MODE_REFRACTION"};function iP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rP={[Ry]:"ENVMAP_BLENDING_MULTIPLY",[$T]:"ENVMAP_BLENDING_MIX",[qT]:"ENVMAP_BLENDING_ADD"};function sP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rP[t.combine]||"ENVMAP_BLENDING_NONE"}function oP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=JR(n),c=tP(n),f=iP(n),d=sP(n),u=oP(n),p=WR(n),g=XR(s),S=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($o).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($o).join(`
`),h.length>0&&(h+=`
`)):(m=[q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),h=[q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?je.tonemapping_pars_fragment:"",n.toneMapping!==Mi?HR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zR("linearToOutputTexel",n.outputColorSpace),GR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),o=Ah(o),o=j0(o,n),o=Y0(o,n),a=Ah(a),a=j0(a,n),a=Y0(a,n),o=$0(o),a=$0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+m+o,M=v+h+a,E=G0(r,r.VERTEX_SHADER,y),T=G0(r,r.FRAGMENT_SHADER,M);r.attachShader(S,E),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(N){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(S)||"",K=r.getShaderInfoLog(E)||"",te=r.getShaderInfoLog(T)||"",V=B.trim(),Z=K.trim(),H=te.trim();let F=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,E,T);else{const D=X0(r,E,"vertex"),R=X0(r,T,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+D+`
`+R)}else V!==""?Be("WebGLProgram: Program Info Log:",V):(Z===""||H==="")&&($=!1);$&&(N.diagnostics={runnable:F,programLog:V,vertexShader:{log:Z,prefix:m},fragmentShader:{log:H,prefix:h}})}r.deleteShader(E),r.deleteShader(T),x=new sc(r,S),C=jR(r,S)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(S,FR)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=T,this}let lP=0;class cP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uP(e),n.set(e,i)),i}}class uP{constructor(e){this.id=lP++,this.code=e,this.usedTimes=0}}function fP(t){return t===us||t===Nc||t===Ic}function dP(t,e,n,i,r,s){const o=new Yy,a=new cP,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,C,L,N,B,K){const te=N.fog,V=B.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||Z,H),$=F&&F.mapping===cu?F.image.height:null,D=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const R=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,q=R!==void 0?R.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let Ee,xe,z,J;if(D){const Re=gi[D];Ee=Re.vertexShader,xe=Re.fragmentShader}else{Ee=x.vertexShader,xe=x.fragmentShader;const Re=a.getVertexShaderStage(x),At=a.getFragmentShaderStage(x);a.update(x,Re,At),z=Re.id,J=At.id}const ne=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,me=B.isBatchedMesh===!0,He=!!x.map,Ue=!!x.matcap,Ce=!!F,ze=!!x.aoMap,Ve=!!x.lightMap,et=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,ft=!!x.displacementMap,at=!!x.emissiveMap,_t=!!x.metalnessMap,wt=!!x.roughnessMap,U=x.anisotropy>0,jt=x.clearcoat>0,tt=x.dispersion>0,P=x.iridescence>0,_=x.sheen>0,k=x.transmission>0,X=U&&!!x.anisotropyMap,Q=jt&&!!x.clearcoatMap,le=jt&&!!x.clearcoatNormalMap,ue=jt&&!!x.clearcoatRoughnessMap,ee=P&&!!x.iridescenceMap,re=P&&!!x.iridescenceThicknessMap,de=_&&!!x.sheenColorMap,Le=_&&!!x.sheenRoughnessMap,ge=!!x.specularMap,he=!!x.specularColorMap,Fe=!!x.specularIntensityMap,Oe=k&&!!x.transmissionMap,We=k&&!!x.thicknessMap,I=!!x.gradientMap,fe=!!x.alphaMap,ie=x.alphaTest>0,pe=!!x.alphaHash,Me=!!x.extensions;let se=Mi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(se=t.toneMapping);const De={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:xe,defines:x.defines,customVertexShaderID:z,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:me,batchingColor:me&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:Ue,envMap:Ce,envMapMode:Ce&&F.mapping,envMapCubeUVHeight:$,aoMap:ze,lightMap:Ve,bumpMap:et,normalMap:rt,displacementMap:ft,emissiveMap:at,normalMapObjectSpace:rt&&x.normalMapType===QT,normalMapTangentSpace:rt&&x.normalMapType===r0,packedNormalMap:rt&&x.normalMapType===r0&&fP(x.normalMap.format),metalnessMap:_t,roughnessMap:wt,anisotropy:U,anisotropyMap:X,clearcoat:jt,clearcoatMap:Q,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:tt,iridescence:P,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:_,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:ge,specularColorMap:he,specularIntensityMap:Fe,transmission:k,transmissionMap:Oe,thicknessMap:We,gradientMap:I,opaque:x.transparent===!1&&x.blending===no&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:ie,alphaHash:pe,combine:x.combine,mapUv:He&&g(x.map.channel),aoMapUv:ze&&g(x.aoMap.channel),lightMapUv:Ve&&g(x.lightMap.channel),bumpMapUv:et&&g(x.bumpMap.channel),normalMapUv:rt&&g(x.normalMap.channel),displacementMapUv:ft&&g(x.displacementMap.channel),emissiveMapUv:at&&g(x.emissiveMap.channel),metalnessMapUv:_t&&g(x.metalnessMap.channel),roughnessMapUv:wt&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(x.sheenRoughnessMap.channel),specularMapUv:ge&&g(x.specularMap.channel),specularColorMapUv:he&&g(x.specularColorMap.channel),specularIntensityMapUv:Fe&&g(x.specularIntensityMap.channel),transmissionMapUv:Oe&&g(x.transmissionMap.channel),thicknessMapUv:We&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(rt||U),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(He||fe),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ce,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:at&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)C.push(L),C.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(h(C,x),v(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function h(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function v(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const C=p[x.type];let L;if(C){const N=gi[C];L=Fw.clone(N.uniforms)}else L=x.uniforms;return L}function M(x,C){let L=f.get(C);return L!==void 0?++L.usedTimes:(L=new aP(t,C,x,r),c.push(L),f.set(C,L)),L}function E(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function b(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:b}}function hP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function K0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Z0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,S,m,h){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:h},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=g,v.materialVariant=o(u),v.groupOrder=S,v.renderOrder=u.renderOrder,v.z=m,v.group=h),e++,v}function l(u,p,g,S,m,h){const v=a(u,p,g,S,m,h);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):n.push(v)}function c(u,p,g,S,m,h){const v=a(u,p,g,S,m,h);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,p,g){n.length>1&&n.sort(u||pP),i.length>1&&i.sort(p||K0),r.length>1&&r.sort(p||K0),g&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function mP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Z0,t.set(i,[o])):r>=s.length?(o=new Z0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new nt};break;case"SpotLight":n={position:new j,direction:new j,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function vP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xP=0;function _P(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yP(t){const e=new gP,n=vP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Ut,o=new Ut;function a(c){let f=0,d=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,S=0,m=0,h=0,v=0,y=0,M=0,E=0,T=0,b=0;c.sort(_P);for(let C=0,L=c.length;C<L;C++){const N=c[C],B=N.color,K=N.intensity,te=N.distance;let V=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===us?V=N.shadow.map.texture:V=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=B.r*K,d+=B.g*K,u+=B.b*K;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],K);b++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const H=N.shadow,F=n.get(N);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=Z,p++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(B).multiplyScalar(K),Z.distance=te,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[S]=Z;const H=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,H.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[S]=H.matrix,N.castShadow){const F=n.get(N);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[S]=F,i.spotShadowMap[S]=V,M++}S++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(B).multiplyScalar(K),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Z,m++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const H=N.shadow,F=n.get(N);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=N.shadow.matrix,y++}i.point[g]=Z,g++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(K),Z.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[h]=Z,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==M||x.numSpotMaps!==E||x.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,x.directionalLength=p,x.pointLength=g,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=M,x.numSpotMaps=E,x.numLightProbes=b,i.version=xP++)}function l(c,f){let d=0,u=0,p=0,g=0,S=0;const m=f.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Q0(t){const e=new yP(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function SP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Q0(t),e.set(r,[a])):s>=o.length?(a=new Q0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const MP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EP=`uniform sampler2D shadow_pass;
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
}`,TP=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],wP=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],J0=new Ut,Vo=new j,Cf=new j;function AP(t,e,n){let i=new Jy;const r=new it,s=new it,o=new Pt,a=new zw,l=new Vw,c={},f=n.maxTextureSize,d={[Rr]:Mn,[Mn]:Rr,[Ui]:Ui},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:MP,fragmentShader:EP}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Zi(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let h=this.type;this.render=function(T,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===RT&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ec);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),B=t.state;B.setBlending(zi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=h!==this.type;K&&b.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(V=>V.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,V=T.length;te<V;te++){const Z=T[te],H=Z.shadow;if(H===void 0){Be("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const F=H.getFrameExtents();r.multiply(F),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,H.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=$,H.map===null||K===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Yo){if(Z.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ei(r.x,r.y,{format:us,type:qi,minFilter:an,magFilter:an,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new mo(r.x,r.y,xi),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Ki,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt}else Z.isPointLight?(H.map=new lS(r.x),H.map.depthTexture=new Iw(r.x,Ai)):(H.map=new Ei(r.x,r.y),H.map.depthTexture=new mo(r.x,r.y,Ai)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Ki,this.type===ec?(H.map.depthTexture.compareFunction=$?jp:Xp,H.map.depthTexture.minFilter=an,H.map.depthTexture.magFilter=an):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt);H.camera.updateProjectionMatrix()}const D=H.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<D;R++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,R),t.clear();else{R===0&&(t.setRenderTarget(H.map),t.clear());const q=H.getViewport(R);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),B.viewport(o)}if(Z.isPointLight){const q=H.camera,ce=H.matrix,Ee=Z.distance||q.far;Ee!==q.far&&(q.far=Ee,q.updateProjectionMatrix()),Vo.setFromMatrixPosition(Z.matrixWorld),q.position.copy(Vo),Cf.copy(q.position),Cf.add(TP[R]),q.up.copy(wP[R]),q.lookAt(Cf),q.updateMatrixWorld(),ce.makeTranslation(-Vo.x,-Vo.y,-Vo.z),J0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(J0,q.coordinateSystem,q.reversedDepth)}else H.updateMatrices(Z);i=H.getFrustum(),M(b,x,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Yo&&v(H,x),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(C,L,N)};function v(T,b){const x=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(r.x,r.y,{format:us,type:qi})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,x,u,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,x,p,S,null)}function y(T,b,x,C){let L=null;const N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)L=N;else if(L=x.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const B=L.uuid,K=b.uuid;let te=c[B];te===void 0&&(te={},c[B]=te);let V=te[K];V===void 0&&(V=L.clone(),te[K]=V,b.addEventListener("dispose",E)),L=V}if(L.visible=b.visible,L.wireframe=b.wireframe,C===Yo?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:d[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=t.properties.get(L);B.light=x}return L}function M(T,b,x,C,L){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Yo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const K=e.update(T),te=T.material;if(Array.isArray(te)){const V=K.groups;for(let Z=0,H=V.length;Z<H;Z++){const F=V[Z],$=te[F.materialIndex];if($&&$.visible){const D=y(T,$,C,L);T.onBeforeShadow(t,T,b,x,K,D,F),t.renderBufferDirect(x,null,K,D,T,F),T.onAfterShadow(t,T,b,x,K,D,F)}}}else if(te.visible){const V=y(T,te,C,L);T.onBeforeShadow(t,T,b,x,K,V,null),t.renderBufferDirect(x,null,K,V,T,null),T.onAfterShadow(t,T,b,x,K,V,null)}}const B=T.children;for(let K=0,te=B.length;K<te;K++)M(B[K],b,x,C,L)}function E(T){T.target.removeEventListener("dispose",E);for(const x in c){const C=c[x],L=T.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function bP(t,e){function n(){let I=!1;const fe=new Pt;let ie=null;const pe=new Pt(0,0,0,0);return{setMask:function(Me){ie!==Me&&!I&&(t.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){I=Me},setClear:function(Me,se,De,Re,At){At===!0&&(Me*=Re,se*=Re,De*=Re),fe.set(Me,se,De,Re),pe.equals(fe)===!1&&(t.clearColor(Me,se,De,Re),pe.copy(fe))},reset:function(){I=!1,ie=null,pe.set(-1,0,0,0)}}}function i(){let I=!1,fe=!1,ie=null,pe=null,Me=null;return{setReversed:function(se){if(fe!==se){const De=e.get("EXT_clip_control");se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=se;const Re=Me;Me=null,this.setClear(Re)}},getReversed:function(){return fe},setTest:function(se){se?ne(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(se){ie!==se&&!I&&(t.depthMask(se),ie=se)},setFunc:function(se){if(fe&&(se=lw[se]),pe!==se){switch(se){case kd:t.depthFunc(t.NEVER);break;case Bd:t.depthFunc(t.ALWAYS);break;case zd:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case Vd:t.depthFunc(t.EQUAL);break;case Hd:t.depthFunc(t.GEQUAL);break;case Gd:t.depthFunc(t.GREATER);break;case Wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=se}},setLocked:function(se){I=se},setClear:function(se){Me!==se&&(Me=se,fe&&(se=1-se),t.clearDepth(se))},reset:function(){I=!1,ie=null,pe=null,Me=null,fe=!1}}}function r(){let I=!1,fe=null,ie=null,pe=null,Me=null,se=null,De=null,Re=null,At=null;return{setTest:function(dt){I||(dt?ne(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(dt){fe!==dt&&!I&&(t.stencilMask(dt),fe=dt)},setFunc:function(dt,ci,ui){(ie!==dt||pe!==ci||Me!==ui)&&(t.stencilFunc(dt,ci,ui),ie=dt,pe=ci,Me=ui)},setOp:function(dt,ci,ui){(se!==dt||De!==ci||Re!==ui)&&(t.stencilOp(dt,ci,ui),se=dt,De=ci,Re=ui)},setLocked:function(dt){I=dt},setClear:function(dt){At!==dt&&(t.clearStencil(dt),At=dt)},reset:function(){I=!1,fe=null,ie=null,pe=null,Me=null,se=null,De=null,Re=null,At=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},p=new WeakMap,g=[],S=null,m=!1,h=null,v=null,y=null,M=null,E=null,T=null,b=null,x=new nt(0,0,0),C=0,L=!1,N=null,B=null,K=null,te=null,V=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),H=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=F>=2);let D=null,R={};const q=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Ee=new Pt().fromArray(q),xe=new Pt().fromArray(ce);function z(I,fe,ie,pe){const Me=new Uint8Array(4),se=t.createTexture();t.bindTexture(I,se),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<ie;De++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(fe+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return se}const J={};J[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(ho),et(!1),rt(t0),ne(t.CULL_FACE),ze(zi);function ne(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function ye(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function be(I,fe){return u[I]!==fe?(t.bindFramebuffer(I,fe),u[I]=fe,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function me(I,fe){let ie=g,pe=!1;if(I){ie=p.get(fe),ie===void 0&&(ie=[],p.set(fe,ie));const Me=I.textures;if(ie.length!==Me.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let se=0,De=Me.length;se<De;se++)ie[se]=t.COLOR_ATTACHMENT0+se;ie.length=Me.length,pe=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,pe=!0);pe&&t.drawBuffers(ie)}function He(I){return S!==I?(t.useProgram(I),S=I,!0):!1}const Ue={[Yr]:t.FUNC_ADD,[DT]:t.FUNC_SUBTRACT,[LT]:t.FUNC_REVERSE_SUBTRACT};Ue[NT]=t.MIN,Ue[IT]=t.MAX;const Ce={[UT]:t.ZERO,[FT]:t.ONE,[OT]:t.SRC_COLOR,[Fd]:t.SRC_ALPHA,[GT]:t.SRC_ALPHA_SATURATE,[VT]:t.DST_COLOR,[BT]:t.DST_ALPHA,[kT]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[HT]:t.ONE_MINUS_DST_COLOR,[zT]:t.ONE_MINUS_DST_ALPHA,[WT]:t.CONSTANT_COLOR,[XT]:t.ONE_MINUS_CONSTANT_COLOR,[jT]:t.CONSTANT_ALPHA,[YT]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(I,fe,ie,pe,Me,se,De,Re,At,dt){if(I===zi){m===!0&&(ye(t.BLEND),m=!1);return}if(m===!1&&(ne(t.BLEND),m=!0),I!==PT){if(I!==h||dt!==L){if((v!==Yr||E!==Yr)&&(t.blendEquation(t.FUNC_ADD),v=Yr,E=Yr),dt)switch(I){case no:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFunc(t.ONE,t.ONE);break;case n0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",I);break}else switch(I){case no:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case n0:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i0:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",I);break}y=null,M=null,T=null,b=null,x.set(0,0,0),C=0,h=I,L=dt}return}Me=Me||fe,se=se||ie,De=De||pe,(fe!==v||Me!==E)&&(t.blendEquationSeparate(Ue[fe],Ue[Me]),v=fe,E=Me),(ie!==y||pe!==M||se!==T||De!==b)&&(t.blendFuncSeparate(Ce[ie],Ce[pe],Ce[se],Ce[De]),y=ie,M=pe,T=se,b=De),(Re.equals(x)===!1||At!==C)&&(t.blendColor(Re.r,Re.g,Re.b,At),x.copy(Re),C=At),h=I,L=!1}function Ve(I,fe){I.side===Ui?ye(t.CULL_FACE):ne(t.CULL_FACE);let ie=I.side===Mn;fe&&(ie=!ie),et(ie),I.blending===no&&I.transparent===!1?ze(zi):ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;a.setTest(pe),pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){N!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),N=I)}function rt(I){I!==bT?(ne(t.CULL_FACE),I!==B&&(I===t0?t.cullFace(t.BACK):I===CT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),B=I}function ft(I){I!==K&&(H&&t.lineWidth(I),K=I)}function at(I,fe,ie){I?(ne(t.POLYGON_OFFSET_FILL),(te!==fe||V!==ie)&&(te=fe,V=ie,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,ie))):ye(t.POLYGON_OFFSET_FILL)}function _t(I){I?ne(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function wt(I){I===void 0&&(I=t.TEXTURE0+Z-1),D!==I&&(t.activeTexture(I),D=I)}function U(I,fe,ie){ie===void 0&&(D===null?ie=t.TEXTURE0+Z-1:ie=D);let pe=R[ie];pe===void 0&&(pe={type:void 0,texture:void 0},R[ie]=pe),(pe.type!==I||pe.texture!==fe)&&(D!==ie&&(t.activeTexture(ie),D=ie),t.bindTexture(I,fe||J[I]),pe.type=I,pe.texture=fe)}function jt(){const I=R[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function _(){try{t.texSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function k(){try{t.texSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function le(){try{t.texStorage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ue(){try{t.texStorage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ee(){try{t.texImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function de(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function Le(I,fe){d[I]!==fe&&(t.pixelStorei(I,fe),d[I]=fe)}function ge(I){Ee.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ee.copy(I))}function he(I){xe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function Fe(I,fe){let ie=c.get(fe);ie===void 0&&(ie=new WeakMap,c.set(fe,ie));let pe=ie.get(I);pe===void 0&&(pe=t.getUniformBlockIndex(fe,I.name),ie.set(I,pe))}function Oe(I,fe){const pe=c.get(fe).get(I);l.get(fe)!==pe&&(t.uniformBlockBinding(fe,pe,I.__bindingPointIndex),l.set(fe,pe))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},D=null,R={},u={},p=new WeakMap,g=[],S=null,m=!1,h=null,v=null,y=null,M=null,E=null,T=null,b=null,x=new nt(0,0,0),C=0,L=!1,N=null,B=null,K=null,te=null,V=null,Ee.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ye,bindFramebuffer:be,drawBuffers:me,useProgram:He,setBlending:ze,setMaterial:Ve,setFlipSided:et,setCullFace:rt,setLineWidth:ft,setPolygonOffset:at,setScissorTest:_t,activeTexture:wt,bindTexture:U,unbindTexture:jt,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:ee,texImage3D:re,pixelStorei:Le,getParameter:de,updateUBOMapping:Fe,uniformBlockBinding:Oe,texStorage2D:le,texStorage3D:ue,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:ge,viewport:he,reset:We}}function CP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,_){return g?new OffscreenCanvas(P,_):kc("canvas")}function m(P,_,k){let X=1;const Q=tt(P);if((Q.width>k||Q.height>k)&&(X=k/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(X*Q.width),ue=Math.floor(X*Q.height);u===void 0&&(u=S(le,ue));const ee=_?S(le,ue):u;return ee.width=le,ee.height=ue,ee.getContext("2d").drawImage(P,0,0,le,ue),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+le+"x"+ue+")."),ee}else return"data"in P&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function h(P){return P.generateMipmaps}function v(P){t.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(P,_,k,X,Q,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===t.RED&&(k===t.FLOAT&&(ee=t.R32F),k===t.HALF_FLOAT&&(ee=t.R16F),k===t.UNSIGNED_BYTE&&(ee=t.R8),k===t.UNSIGNED_SHORT&&ue&&(ee=ue.R16_EXT),k===t.SHORT&&ue&&(ee=ue.R16_SNORM_EXT)),_===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.R8UI),k===t.UNSIGNED_SHORT&&(ee=t.R16UI),k===t.UNSIGNED_INT&&(ee=t.R32UI),k===t.BYTE&&(ee=t.R8I),k===t.SHORT&&(ee=t.R16I),k===t.INT&&(ee=t.R32I)),_===t.RG&&(k===t.FLOAT&&(ee=t.RG32F),k===t.HALF_FLOAT&&(ee=t.RG16F),k===t.UNSIGNED_BYTE&&(ee=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(ee=ue.RG16_EXT),k===t.SHORT&&ue&&(ee=ue.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.RG8UI),k===t.UNSIGNED_SHORT&&(ee=t.RG16UI),k===t.UNSIGNED_INT&&(ee=t.RG32UI),k===t.BYTE&&(ee=t.RG8I),k===t.SHORT&&(ee=t.RG16I),k===t.INT&&(ee=t.RG32I)),_===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),k===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),k===t.UNSIGNED_INT&&(ee=t.RGB32UI),k===t.BYTE&&(ee=t.RGB8I),k===t.SHORT&&(ee=t.RGB16I),k===t.INT&&(ee=t.RGB32I)),_===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),k===t.UNSIGNED_INT&&(ee=t.RGBA32UI),k===t.BYTE&&(ee=t.RGBA8I),k===t.SHORT&&(ee=t.RGBA16I),k===t.INT&&(ee=t.RGBA32I)),_===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGB16_EXT),k===t.SHORT&&ue&&(ee=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),_===t.RGBA){const re=le?Fc:qe.getTransfer(Q);k===t.FLOAT&&(ee=t.RGBA32F),k===t.HALF_FLOAT&&(ee=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ee=re===st?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGBA16_EXT),k===t.SHORT&&ue&&(ee=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(P,_){let k;return P?_===null||_===Ai||_===Ra?k=t.DEPTH24_STENCIL8:_===xi?k=t.DEPTH32F_STENCIL8:_===Ca&&(k=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===Ra?k=t.DEPTH_COMPONENT24:_===xi?k=t.DEPTH_COMPONENT32F:_===Ca&&(k=t.DEPTH_COMPONENT16),k}function T(P,_){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==qt&&P.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function b(P){const _=P.target;_.removeEventListener("dispose",b),C(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&d.delete(_)}function x(P){const _=P.target;_.removeEventListener("dispose",x),N(_)}function C(P){const _=i.get(P);if(_.__webglInit===void 0)return;const k=P.source,X=p.get(k);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(P),Object.keys(X).length===0&&p.delete(k)}i.remove(P)}function L(P){const _=i.get(P);t.deleteTexture(_.__webglTexture);const k=P.source,X=p.get(k);delete X[_.__cacheKey],o.memory.textures--}function N(P){const _=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=P.textures;for(let X=0,Q=k.length;X<Q;X++){const le=i.get(k[X]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(k[X])}i.remove(P)}let B=0;function K(){B=0}function te(){return B}function V(P){B=P}function Z(){const P=B;return P>=r.maxTextures&&Be("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),B+=1,P}function H(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function F(P,_){const k=i.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const X=P.image;if(X===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,P,_);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+_)}function $(P,_){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ye(k,P,_);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+_)}function D(P,_){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ye(k,P,_);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+_)}function R(P,_){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){be(k,P,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+_)}const q={[Xd]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[jd]:t.MIRRORED_REPEAT},ce={[qt]:t.NEAREST,[KT]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Zu]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},Ee={[JT]:t.NEVER,[rw]:t.ALWAYS,[ew]:t.LESS,[Xp]:t.LEQUAL,[tw]:t.EQUAL,[jp]:t.GEQUAL,[nw]:t.GREATER,[iw]:t.NOTEQUAL};function xe(P,_){if(_.type===xi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===Zu||_.magFilter===hl||_.magFilter===Qr||_.minFilter===an||_.minFilter===Zu||_.minFilter===hl||_.minFilter===Qr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,q[_.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,q[_.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,q[_.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ce[_.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==hl&&_.minFilter!==Qr||_.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function z(P,_){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",b));const X=_.source;let Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));const le=H(_);if(le!==P.__cacheKey){Q[le]===void 0&&(Q[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[le].usedTimes++;const ue=Q[P.__cacheKey];ue!==void 0&&(Q[P.__cacheKey].usedTimes--,ue.usedTimes===0&&L(_)),P.__cacheKey=le,P.__webglTexture=Q[le].texture}return k}function J(P,_,k){return Math.floor(Math.floor(P/k)/_)}function ne(P,_,k,X){const le=P.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{le.sort((Le,ge)=>Le.start-ge.start);let ue=0;for(let Le=1;Le<le.length;Le++){const ge=le[ue],he=le[Le],Fe=ge.start+ge.count,Oe=J(he.start,_.width,4),We=J(ge.start,_.width,4);he.start<=Fe+1&&Oe===We&&J(he.start+he.count-1,_.width,4)===Oe?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++ue,le[ue]=he)}le.length=ue+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Le=0,ge=le.length;Le<ge;Le++){const he=le[Le],Fe=Math.floor(he.start/4),Oe=Math.ceil(he.count/4),We=Fe%_.width,I=Math.floor(Fe/_.width),fe=Oe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,We,I,fe,ie,k,X,_.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function ye(P,_,k){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const Q=z(P,_),le=_.source;n.bindTexture(X,P.__webglTexture,t.TEXTURE0+k);const ue=i.get(le);if(le.version!==ue.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ie=qe.getPrimaries(qe.workingColorSpace),pe=_.colorSpace===mr?null:qe.getPrimaries(_.colorSpace),Me=_.colorSpace===mr||ie===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let re=m(_.image,!1,r.maxTextureSize);re=jt(_,re);const de=s.convert(_.format,_.colorSpace),Le=s.convert(_.type);let ge=M(_.internalFormat,de,Le,_.normalized,_.colorSpace,_.isVideoTexture);xe(X,_);let he;const Fe=_.mipmaps,Oe=_.isVideoTexture!==!0,We=ue.__version===void 0||Q===!0,I=le.dataReady,fe=T(_,re);if(_.isDepthTexture)ge=E(_.format===Jr,_.type),We&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,ge,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ge,re.width,re.height,0,de,Le,null));else if(_.isDataTexture)if(Fe.length>0){Oe&&We&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Fe[0].width,Fe[0].height);for(let ie=0,pe=Fe.length;ie<pe;ie++)he=Fe[ie],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,de,Le,he.data):n.texImage2D(t.TEXTURE_2D,ie,ge,he.width,he.height,0,de,Le,he.data);_.generateMipmaps=!1}else Oe?(We&&n.texStorage2D(t.TEXTURE_2D,fe,ge,re.width,re.height),I&&ne(_,re,de,Le)):n.texImage2D(t.TEXTURE_2D,0,ge,re.width,re.height,0,de,Le,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ge,Fe[0].width,Fe[0].height,re.depth);for(let ie=0,pe=Fe.length;ie<pe;ie++)if(he=Fe[ie],_.format!==ii)if(de!==null)if(Oe){if(I)if(_.layerUpdates.size>0){const Me=P0(he.width,he.height,_.format,_.type);for(const se of _.layerUpdates){const De=he.data.subarray(se*Me/he.data.BYTES_PER_ELEMENT,(se+1)*Me/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,se,he.width,he.height,1,de,De)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,re.depth,de,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,ge,he.width,he.height,re.depth,0,he.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,re.depth,de,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,ge,he.width,he.height,re.depth,0,de,Le,he.data)}else{Oe&&We&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Fe[0].width,Fe[0].height);for(let ie=0,pe=Fe.length;ie<pe;ie++)he=Fe[ie],_.format!==ii?de!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,ge,he.width,he.height,0,he.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,de,Le,he.data):n.texImage2D(t.TEXTURE_2D,ie,ge,he.width,he.height,0,de,Le,he.data)}else if(_.isDataArrayTexture)if(Oe){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ge,re.width,re.height,re.depth),I)if(_.layerUpdates.size>0){const ie=P0(re.width,re.height,_.format,_.type);for(const pe of _.layerUpdates){const Me=re.data.subarray(pe*ie/re.data.BYTES_PER_ELEMENT,(pe+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,re.width,re.height,1,de,Le,Me)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,re.width,re.height,re.depth,0,de,Le,re.data);else if(_.isData3DTexture)Oe?(We&&n.texStorage3D(t.TEXTURE_3D,fe,ge,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,ge,re.width,re.height,re.depth,0,de,Le,re.data);else if(_.isFramebufferTexture){if(We)if(Oe)n.texStorage2D(t.TEXTURE_2D,fe,ge,re.width,re.height);else{let ie=re.width,pe=re.height;for(let Me=0;Me<fe;Me++)n.texImage2D(t.TEXTURE_2D,Me,ge,ie,pe,0,de,Le,null),ie>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),d.add(_),ie.onpaint=pe=>{const Me=pe.changedElements;for(const se of d)Me.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const Me=t.RGBA,se=t.RGBA,De=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Me,se,De,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Oe&&We){const ie=tt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,fe,ge,ie.width,ie.height)}for(let ie=0,pe=Fe.length;ie<pe;ie++)he=Fe[ie],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de,Le,he):n.texImage2D(t.TEXTURE_2D,ie,ge,de,Le,he);_.generateMipmaps=!1}else if(Oe){if(We){const ie=tt(re);n.texStorage2D(t.TEXTURE_2D,fe,ge,ie.width,ie.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Le,re)}else n.texImage2D(t.TEXTURE_2D,0,ge,de,Le,re);h(_)&&v(X),ue.__version=le.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function be(P,_,k){if(_.image.length!==6)return;const X=z(P,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const le=i.get(Q);if(Q.version!==le.__version||X===!0){n.activeTexture(t.TEXTURE0+k);const ue=qe.getPrimaries(qe.workingColorSpace),ee=_.colorSpace===mr?null:qe.getPrimaries(_.colorSpace),re=_.colorSpace===mr||ue===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,Le=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!de&&!Le?ge[se]=m(_.image[se],!0,r.maxCubemapSize):ge[se]=Le?_.image[se].image:_.image[se],ge[se]=jt(_,ge[se]);const he=ge[0],Fe=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),We=M(_.internalFormat,Fe,Oe,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,fe=le.__version===void 0||X===!0,ie=Q.dataReady;let pe=T(_,he);xe(t.TEXTURE_CUBE_MAP,_);let Me;if(de){I&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,We,he.width,he.height);for(let se=0;se<6;se++){Me=ge[se].mipmaps;for(let De=0;De<Me.length;De++){const Re=Me[De];_.format!==ii?Fe!==null?I?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,Re.width,Re.height,Fe,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,We,Re.width,Re.height,0,Re.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,Re.width,Re.height,Fe,Oe,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,We,Re.width,Re.height,0,Fe,Oe,Re.data)}}}else{if(Me=_.mipmaps,I&&fe){Me.length>0&&pe++;const se=tt(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,We,se.width,se.height)}for(let se=0;se<6;se++)if(Le){I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,Fe,Oe,ge[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,ge[se].width,ge[se].height,0,Fe,Oe,ge[se].data);for(let De=0;De<Me.length;De++){const At=Me[De].image[se].image;I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,At.width,At.height,Fe,Oe,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,We,At.width,At.height,0,Fe,Oe,At.data)}}else{I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Oe,ge[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Fe,Oe,ge[se]);for(let De=0;De<Me.length;De++){const Re=Me[De];I?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,Fe,Oe,Re.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,We,Fe,Oe,Re.image[se])}}}h(_)&&v(t.TEXTURE_CUBE_MAP),le.__version=Q.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function me(P,_,k,X,Q,le){const ue=s.convert(k.format,k.colorSpace),ee=s.convert(k.type),re=M(k.internalFormat,ue,ee,k.normalized,k.colorSpace),de=i.get(_),Le=i.get(k);if(Le.__renderTarget=_,!de.__hasExternalTextures){const ge=Math.max(1,_.width>>le),he=Math.max(1,_.height>>le);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,le,re,ge,he,_.depth,0,ue,ee,null):n.texImage2D(Q,le,re,ge,he,0,ue,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),wt(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,Le.__webglTexture,0,_t(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,Le.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(P,_,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,le=E(_.stencilBuffer,Q),ue=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(_),le,_.width,_.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,P)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const le=X[Q],ue=s.convert(le.format,le.colorSpace),ee=s.convert(le.type),re=M(le.internalFormat,ue,ee,le.normalized,le.colorSpace);wt(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(_),re,_.width,_.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(_),re,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,re,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(P,_,k){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),xe(t.TEXTURE_CUBE_MAP,_.depthTexture);const de=s.convert(_.depthTexture.format),Le=s.convert(_.depthTexture.type);let ge;_.depthTexture.format===Ki?ge=t.DEPTH_COMPONENT24:_.depthTexture.format===Jr&&(ge=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,_.width,_.height,0,de,Le,null)}}else F(_.depthTexture,0);const le=Q.__webglTexture,ue=_t(_),ee=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,re=_.depthTexture.format===Jr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ki)wt(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,le,0);else if(_.depthTexture.format===Jr)wt(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ce(P){const _=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Ue(_.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Ue(_.__webglFramebuffer[0],P,0):Ue(_.__webglFramebuffer,P,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),He(_.__webglDepthbuffer[X],P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),He(_.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(P,_,k){const X=i.get(P);_!==void 0&&me(X.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ce(P)}function Ve(P){const _=P.texture,k=i.get(P),X=i.get(_);P.addEventListener("dispose",x);const Q=P.textures,le=P.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,o.memory.textures++),le){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let re=0;re<_.mipmaps.length;re++)k.__webglFramebuffer[ee][re]=t.createFramebuffer()}else k.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[ee]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let ee=0,re=Q.length;ee<re;ee++){const de=i.get(Q[ee]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&wt(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const re=Q[ee];k.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);const de=s.convert(re.format,re.colorSpace),Le=s.convert(re.type),ge=M(re.internalFormat,de,Le,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),he=_t(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),He(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),xe(t.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)me(k.__webglFramebuffer[ee][re],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else me(k.__webglFramebuffer[ee],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ee=0,re=Q.length;ee<re;ee++){const de=Q[ee],Le=i.get(de);let ge=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Le.__webglTexture),xe(ge,de),me(k.__webglFramebuffer,P,de,t.COLOR_ATTACHMENT0+ee,ge,0),h(de)&&v(ge)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,X.__webglTexture),xe(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)me(k.__webglFramebuffer[re],P,_,t.COLOR_ATTACHMENT0,ee,re);else me(k.__webglFramebuffer,P,_,t.COLOR_ATTACHMENT0,ee,0);h(_)&&v(ee),n.unbindTexture()}P.depthBuffer&&Ce(P)}function et(P){const _=P.textures;for(let k=0,X=_.length;k<X;k++){const Q=_[k];if(h(Q)){const le=y(P),ue=i.get(Q).__webglTexture;n.bindTexture(le,ue),v(le),n.unbindTexture()}}}const rt=[],ft=[];function at(P){if(P.samples>0){if(wt(P)===!1){const _=P.textures,k=P.width,X=P.height;let Q=t.COLOR_BUFFER_BIT;const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(P),ee=_.length>1;if(ee)for(let de=0;de<_.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const re=P.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<_.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Le=i.get(_[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,k,X,0,0,k,X,Q,t.NEAREST),l===!0&&(rt.length=0,ft.length=0,rt.push(t.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(rt.push(le),ft.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<_.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Le=i.get(_[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const _=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function _t(P){return Math.min(r.maxSamples,P.samples)}function wt(P){const _=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(P){const _=o.render.frame;f.get(P)!==_&&(f.set(P,_),P.update())}function jt(P,_){const k=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Uc&&k!==mr&&(qe.getTransfer(k)===st?(X!==ii||Q!==Gn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",k)),_}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=V,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=R,this.rebindTextures=ze,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=me,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RP(t,e){function n(i,r=mr){let s;const o=qe.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ky)return t.BYTE;if(i===By)return t.SHORT;if(i===Ca)return t.UNSIGNED_SHORT;if(i===Bp)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===Hy)return t.ALPHA;if(i===Gy)return t.RGB;if(i===ii)return t.RGBA;if(i===Ki)return t.DEPTH_COMPONENT;if(i===Jr)return t.DEPTH_STENCIL;if(i===Wy)return t.RED;if(i===Hp)return t.RED_INTEGER;if(i===us)return t.RG;if(i===Gp)return t.RG_INTEGER;if(i===Wp)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yd||i===$d||i===qd||i===Kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zd||i===Qd||i===Jd||i===eh||i===th||i===Nc||i===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zd||i===Qd)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===eh)return s.COMPRESSED_R11_EAC;if(i===th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return s.COMPRESSED_RG11_EAC;if(i===nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ih)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vh||i===xh||i===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vh)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Sh||i===Ic||i===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DP=`
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

}`;class LP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new nS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new bi({vertexShader:PP,fragmentShader:DP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NP extends ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new LP,h={},v=n.getContextAttributes();let y=null,M=null;const E=[],T=[],b=new it;let x=null;const C=new Hn;C.viewport=new Pt;const L=new Hn;L.viewport=new Pt;const N=[C,L],B=new Gw;let K=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=E[z];return J===void 0&&(J=new of,E[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=E[z];return J===void 0&&(J=new of,E[z]=J),J.getGripSpace()},this.getHand=function(z){let J=E[z];return J===void 0&&(J=new of,E[z]=J),J.getHandSpace()};function V(z){const J=T.indexOf(z.inputSource);if(J===-1)return;const ne=E[J];ne!==void 0&&(ne.update(z.inputSource,z.frame,c||o),ne.dispatchEvent({type:z.type,data:z.inputSource}))}function Z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",H);for(let z=0;z<E.length;z++){const J=T[z];J!==null&&(T[z]=null,E[z].disconnect(J))}K=null,te=null,m.reset();for(const z in h)delete h[z];e.setRenderTarget(y),p=null,u=null,d=null,r=null,M=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ye=null,be=null;v.depth&&(be=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=v.stencil?Jr:Ki,ye=v.stencil?Ra:Ai);const me={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(me),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ei(u.textureWidth,u.textureHeight,{format:ii,type:Gn,depthTexture:new mo(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(z){for(let J=0;J<z.removed.length;J++){const ne=z.removed[J],ye=T.indexOf(ne);ye>=0&&(T[ye]=null,E[ye].disconnect(ne))}for(let J=0;J<z.added.length;J++){const ne=z.added[J];let ye=T.indexOf(ne);if(ye===-1){for(let me=0;me<E.length;me++)if(me>=T.length){T.push(ne),ye=me;break}else if(T[me]===null){T[me]=ne,ye=me;break}if(ye===-1)break}const be=E[ye];be&&be.connect(ne)}}const F=new j,$=new j;function D(z,J,ne){F.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const ye=F.distanceTo($),be=J.projectionMatrix.elements,me=ne.projectionMatrix.elements,He=be[14]/(be[10]-1),Ue=be[14]/(be[10]+1),Ce=(be[9]+1)/be[5],ze=(be[9]-1)/be[5],Ve=(be[8]-1)/be[0],et=(me[8]+1)/me[0],rt=He*Ve,ft=He*et,at=ye/(-Ve+et),_t=at*-Ve;if(J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(_t),z.translateZ(at),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),be[10]===-1)z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const wt=He+at,U=Ue+at,jt=rt-_t,tt=ft+(ye-_t),P=Ce*Ue/U*wt,_=ze*Ue/U*wt;z.projectionMatrix.makePerspective(jt,tt,P,_,wt,U),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function R(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let J=z.near,ne=z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),B.near=L.near=C.near=J,B.far=L.far=C.far=ne,(K!==B.near||te!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,te=B.far),B.layers.mask=z.layers.mask|6,C.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const ye=z.parent,be=B.cameras;R(B,ye);for(let me=0;me<be.length;me++)R(be[me],ye);be.length===2?D(B,C,L):B.projectionMatrix.copy(C.projectionMatrix),q(z,B,ye)};function q(z,J,ne){ne===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(ne.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Eh*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(z){return h[z]};let ce=null;function Ee(z,J){if(f=J.getViewerPose(c||o),g=J,f!==null){const ne=f.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ye=!1;ne.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let Ue=0;Ue<ne.length;Ue++){const Ce=ne[Ue];let ze=null;if(p!==null)ze=p.getViewport(Ce);else{const et=d.getViewSubImage(u,Ce);ze=et.viewport,Ue===0&&(e.setRenderTargetTextures(M,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(M))}let Ve=N[Ue];Ve===void 0&&(Ve=new Hn,Ve.layers.enable(Ue),Ve.viewport=new Pt,N[Ue]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ze.x,ze.y,ze.width,ze.height),Ue===0&&(B.matrix.copy(Ve.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(Ve)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Ue=d.getDepthInformation(ne[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,r.renderState)}if(be&&be.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Ue=0;Ue<ne.length;Ue++){const Ce=ne[Ue].camera;if(Ce){let ze=h[Ce];ze||(ze=new nS,h[Ce]=ze);const Ve=d.getCameraImage(Ce);ze.sourceTexture=Ve}}}}for(let ne=0;ne<E.length;ne++){const ye=T[ne],be=E[ne];ye!==null&&be!==void 0&&be.update(ye,J,c||o)}ce&&ce(z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const xe=new oS;xe.setAnimationLoop(Ee),this.setAnimationLoop=function(z){ce=z},this.dispose=function(){}}}const IP=new Ut,hS=new Ge;hS.set(-1,0,0,0,1,0,0,0,1);function UP(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,iS(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(IP.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hS),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const T=E.program;i.uniformBlockBinding(M,T)}function c(M,E){let T=r[M.id];T===void 0&&(m(M),T=f(M),r[M.id]=T,M.addEventListener("dispose",v));const b=E.program;i.updateUBOMapping(M,b);const x=e.render.frame;s[M.id]!==x&&(u(M),s[M.id]=x)}function f(M){const E=d();M.__bindingPointIndex=E;const T=t.createBuffer(),b=M.__size,x=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,b,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=r[M.id],T=M.uniforms,b=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let x=0,C=T.length;x<C;x++){const L=T[x];if(Array.isArray(L))for(let N=0,B=L.length;N<B;N++)p(L[N],x,N,b);else p(L,x,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,E,T,b){if(S(M,E,T,b)===!0){const x=M.__offset,C=M.value;if(Array.isArray(C)){let L=0;for(let N=0;N<C.length;N++){const B=C[N],K=h(B);g(B,M.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,M.__data)}}function g(M,E,T){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,T)}function S(M,E,T,b){const x=M.value,C=E+"_"+T;if(b[C]===void 0)return typeof x=="number"||typeof x=="boolean"?b[C]=x:ArrayBuffer.isView(x)?b[C]=x.slice():b[C]=x.clone(),!0;{const L=b[C];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return b[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(M){const E=M.uniforms;let T=0;const b=16;for(let C=0,L=E.length;C<L;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let B=0,K=N.length;B<K;B++){const te=N[B],V=Array.isArray(te.value)?te.value:[te.value];for(let Z=0,H=V.length;Z<H;Z++){const F=V[Z],$=h(F),D=T%b,R=D%$.boundary,q=D+R;T+=R,q!==0&&b-q<$.storage&&(T+=b-q),te.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=T,T+=$.storage}}}const x=T%b;return x>0&&(T+=b-x),M.__size=T,M.__cache={},this}function h(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),E}function v(M){const E=M.target;E.removeEventListener("dispose",v);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function y(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const OP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function kP(){return pi===null&&(pi=new Rw(OP,16,16,us,qi),pi.name="DFG_LUT",pi.minFilter=an,pi.magFilter=an,pi.wrapS=ki,pi.wrapT=ki,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class BP{constructor(e={}){const{canvas:n=ow(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=p,m=new Set([Wp,Gp,Hp]),h=new Set([Gn,Ai,Ca,Ra,zp,Vp]),v=new Uint32Array(4),y=new Int32Array(4),M=new j;let E=null,T=null;const b=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,B=null,K=null,te=null,V=null;this._outputColorSpace=Bn;let Z=0,H=0,F=null,$=-1,D=null;const R=new Pt,q=new Pt;let ce=null;const Ee=new nt(0);let xe=0,z=n.width,J=n.height,ne=1,ye=null,be=null;const me=new Pt(0,0,z,J),He=new Pt(0,0,z,J);let Ue=!1;const Ce=new Jy;let ze=!1,Ve=!1;const et=new Ut,rt=new j,ft=new Pt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function wt(){return F===null?ne:1}let U=i;function jt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kp}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",ci,!1),U===null){const O="webgl2";if(U=jt(O,w),U===null)throw jt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Qe("WebGLRenderer: "+w.message),w}let tt,P,_,k,X,Q,le,ue,ee,re,de,Le,ge,he,Fe,Oe,We,I,fe,ie,pe,Me,se;function De(){tt=new kC(U),tt.init(),pe=new RP(U,tt),P=new PC(U,tt,e,pe),_=new bP(U,tt),P.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),K=U.createFramebuffer(),te=U.createFramebuffer(),V=U.createFramebuffer(),k=new VC(U),X=new hP,Q=new CP(U,tt,_,X,P,pe,k),le=new OC(L),ue=new Xw(U),Me=new CC(U,ue),ee=new BC(U,ue,k,Me),re=new GC(U,ee,ue,Me,k),I=new HC(U,P,Q),Fe=new DC(X),de=new dP(L,le,tt,P,Me,Fe),Le=new UP(L,X),ge=new mP,he=new SP(tt),We=new bC(L,le,_,re,g,l),Oe=new AP(L,re,P),se=new FP(U,k,P,_),fe=new RC(U,tt,k),ie=new zC(U,tt,k),k.programs=de.programs,L.capabilities=P,L.extensions=tt,L.properties=X,L.renderLists=ge,L.shadowMap=Oe,L.state=_,L.info=k}De(),S!==Gn&&(C=new XC(S,n.width,n.height,a,r,s));const Re=new NP(L,U);this.xr=Re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,O,Y=!0){if(Re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=O,n.width=Math.floor(w*ne),n.height=Math.floor(O*ne),Y===!0&&(n.style.width=w+"px",n.style.height=O+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(z*ne,J*ne).floor()},this.setDrawingBufferSize=function(w,O,Y){z=w,J=O,ne=Y,n.width=Math.floor(w*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(S===Gn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,O,Y,G){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,O,Y,G),_.viewport(R.copy(me).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(He)},this.setScissor=function(w,O,Y,G){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,O,Y,G),_.scissor(q.copy(He).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){_.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){ye=w},this.setTransparentSort=function(w){be=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,Y=!0){let G=0;if(w){let W=!1;if(F!==null){const Se=F.texture.format;W=m.has(Se)}if(W){const Se=F.texture.type,we=h.has(Se),_e=We.getClearColor(),Pe=We.getClearAlpha(),Ne=_e.r,Xe=_e.g,Ye=_e.b;we?(v[0]=Ne,v[1]=Xe,v[2]=Ye,v[3]=Pe,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=Ne,y[1]=Xe,y[2]=Ye,y[3]=Pe,U.clearBufferiv(U.COLOR,0,y))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",ci,!1),We.dispose(),ge.dispose(),he.dispose(),X.dispose(),le.dispose(),re.dispose(),Me.dispose(),se.dispose(),de.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",km),Re.removeEventListener("sessionend",Bm),Fr.stop()};function At(w){w.preventDefault(),c0("WebGLRenderer: Context Lost."),N=!0}function dt(){c0("WebGLRenderer: Context Restored."),N=!1;const w=k.autoReset,O=Oe.enabled,Y=Oe.autoUpdate,G=Oe.needsUpdate,W=Oe.type;De(),k.autoReset=w,Oe.enabled=O,Oe.autoUpdate=Y,Oe.needsUpdate=G,Oe.type=W}function ci(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ui(w){const O=w.target;O.removeEventListener("dispose",ui),jM(O)}function jM(w){YM(w),X.remove(w)}function YM(w){const O=X.get(w).programs;O!==void 0&&(O.forEach(function(Y){de.releaseProgram(Y)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,G,W,Se){O===null&&(O=at);const we=W.isMesh&&W.matrixWorld.determinantAffine()<0,_e=KM(w,O,Y,G,W);_.setMaterial(G,we);let Pe=Y.index,Ne=1;if(G.wireframe===!0){if(Pe=ee.getWireframeAttribute(Y),Pe===void 0)return;Ne=2}const Xe=Y.drawRange,Ye=Y.attributes.position;let Ie=Xe.start*Ne,lt=(Xe.start+Xe.count)*Ne;Se!==null&&(Ie=Math.max(Ie,Se.start*Ne),lt=Math.min(lt,(Se.start+Se.count)*Ne)),Pe!==null?(Ie=Math.max(Ie,0),lt=Math.min(lt,Pe.count)):Ye!=null&&(Ie=Math.max(Ie,0),lt=Math.min(lt,Ye.count));const Dt=lt-Ie;if(Dt<0||Dt===1/0)return;Me.setup(W,G,_e,Y,Pe);let bt,ct=fe;if(Pe!==null&&(bt=ue.get(Pe),ct=ie,ct.setIndex(bt)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*wt()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(W.isLine){let Qt=G.linewidth;Qt===void 0&&(Qt=1),_.setLineWidth(Qt*wt()),W.isLineSegments?ct.setMode(U.LINES):W.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else W.isPoints?ct.setMode(U.POINTS):W.isSprite&&ct.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qt=W._multiDrawStarts,Te=W._multiDrawCounts,Tn=W._multiDrawCount,Ze=Pe?ue.get(Pe).bytesPerElement:1,Un=X.get(G).currentProgram.getUniforms();for(let fi=0;fi<Tn;fi++)Un.setValue(U,"_gl_DrawID",fi),ct.render(Qt[fi]/Ze,Te[fi])}else if(W.isInstancedMesh)ct.renderInstances(Ie,Dt,W.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,Qt);ct.renderInstances(Ie,Dt,Te)}else ct.render(Ie,Dt)};function Om(w,O,Y){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=Mn,w.needsUpdate=!0,qa(w,O,Y),w.side=Rr,w.needsUpdate=!0,qa(w,O,Y),w.side=Ui):qa(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),T=he.get(Y),T.init(O),x.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const G=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const _e=Se[we];Om(_e,Y,W),G.add(_e)}else Om(Se,Y,W),G.add(Se)}),T=x.pop(),G},this.compileAsync=function(w,O,Y=null){const G=this.compile(w,O,Y);return new Promise(W=>{function Se(){if(G.forEach(function(we){X.get(we).currentProgram.isReady()&&G.delete(we)}),G.size===0){W(w);return}setTimeout(Se,10)}tt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Su=null;function $M(w){Su&&Su(w)}function km(){Fr.stop()}function Bm(){Fr.start()}const Fr=new oS;Fr.setAnimationLoop($M),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(w){Su=w,Re.setAnimationLoop(w),w===null?Fr.stop():Fr.start()},Re.addEventListener("sessionstart",km),Re.addEventListener("sessionend",Bm),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(w,O);const Y=Re.enabled===!0&&Re.isPresenting===!0,G=C!==null&&(F===null||Y)&&C.begin(L,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(O),O=Re.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,O,F),T=he.get(w,x.length),T.init(O),T.state.textureUnits=Q.getTextureUnits(),x.push(T),et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ce.setFromProjectionMatrix(et,_i,O.reversedDepth),Ve=this.localClippingEnabled,ze=Fe.init(this.clippingPlanes,Ve),E=ge.get(w,b.length),E.init(),b.push(E),Re.enabled===!0&&Re.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&Mu(we,O,-1/0,L.sortObjects)}Mu(w,O,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(ye,be,O.reversedDepth),_t=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,_t&&We.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&Fe.beginShadows();const W=T.state.shadowsArray;if(Oe.render(W,w,O),ze===!0&&Fe.endShadows(),(G&&C.hasRenderPass())===!1){const we=E.opaque,_e=E.transmissive;if(T.setupLights(),O.isArrayCamera){const Pe=O.cameras;if(_e.length>0)for(let Ne=0,Xe=Pe.length;Ne<Xe;Ne++){const Ye=Pe[Ne];Vm(we,_e,w,Ye)}_t&&We.render(w);for(let Ne=0,Xe=Pe.length;Ne<Xe;Ne++){const Ye=Pe[Ne];zm(E,w,Ye,Ye.viewport)}}else _e.length>0&&Vm(we,_e,w,O),_t&&We.render(w),zm(E,w,O)}F!==null&&H===0&&(Q.updateMultisampleRenderTarget(F),Q.updateRenderTargetMipmap(F)),G&&C.end(L),w.isScene===!0&&w.onAfterRender(L,w,O),Me.resetDefaultState(),$=-1,D=null,x.pop(),x.length>0?(T=x[x.length-1],Q.setTextureUnits(T.state.textureUnits),ze===!0&&Fe.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,B!==null&&B.renderEnd()};function Mu(w,O,Y,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ce.intersectsSprite(w)){G&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const we=re.update(w),_e=w.material;_e.visible&&E.push(w,we,_e,Y,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ce.intersectsObject(w))){const we=re.update(w),_e=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ft.copy(we.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(_e)){const Pe=we.groups;for(let Ne=0,Xe=Pe.length;Ne<Xe;Ne++){const Ye=Pe[Ne],Ie=_e[Ye.materialIndex];Ie&&Ie.visible&&E.push(w,we,Ie,Y,ft.z,Ye)}}else _e.visible&&E.push(w,we,_e,Y,ft.z,null)}}const Se=w.children;for(let we=0,_e=Se.length;we<_e;we++)Mu(Se[we],O,Y,G)}function zm(w,O,Y,G){const{opaque:W,transmissive:Se,transparent:we}=w;T.setupLightsView(Y),ze===!0&&Fe.setGlobalState(L.clippingPlanes,Y),G&&_.viewport(R.copy(G)),W.length>0&&$a(W,O,Y),Se.length>0&&$a(Se,O,Y),we.length>0&&$a(we,O,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Vm(w,O,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ie=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Ei(1,1,{generateMipmaps:!0,type:Ie?qi:Gn,minFilter:Qr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const Se=T.state.transmissionRenderTarget[G.id],we=G.viewport||R;Se.setSize(we.z*L.transmissionResolutionScale,we.w*L.transmissionResolutionScale);const _e=L.getRenderTarget(),Pe=L.getActiveCubeFace(),Ne=L.getActiveMipmapLevel();L.setRenderTarget(Se),L.getClearColor(Ee),xe=L.getClearAlpha(),xe<1&&L.setClearColor(16777215,.5),L.clear(),_t&&We.render(Y);const Xe=L.toneMapping;L.toneMapping=Mi;const Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ze===!0&&Fe.setGlobalState(L.clippingPlanes,G),$a(w,Y,G),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let lt=0,Dt=O.length;lt<Dt;lt++){const bt=O[lt],{object:ct,geometry:Qt,material:Te,group:Tn}=bt;if(Te.side===Ui&&ct.layers.test(G.layers)){const Ze=Te.side;Te.side=Mn,Te.needsUpdate=!0,Hm(ct,Y,G,Qt,Te,Tn),Te.side=Ze,Te.needsUpdate=!0,Ie=!0}}Ie===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}L.setRenderTarget(_e,Pe,Ne),L.setClearColor(Ee,xe),Ye!==void 0&&(G.viewport=Ye),L.toneMapping=Xe}function $a(w,O,Y){const G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Se=w.length;W<Se;W++){const we=w[W],{object:_e,geometry:Pe,group:Ne}=we;let Xe=we.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),_e.layers.test(Y.layers)&&Hm(_e,O,Y,Pe,Xe,Ne)}}function Hm(w,O,Y,G,W,Se){w.onBeforeRender(L,O,Y,G,W,Se),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(L,O,Y,G,w,Se),W.transparent===!0&&W.side===Ui&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,L.renderBufferDirect(Y,O,G,W,w,Se),W.side=Rr,W.needsUpdate=!0,L.renderBufferDirect(Y,O,G,W,w,Se),W.side=Ui):L.renderBufferDirect(Y,O,G,W,w,Se),w.onAfterRender(L,O,Y,G,W,Se)}function qa(w,O,Y){O.isScene!==!0&&(O=at);const G=X.get(w),W=T.state.lights,Se=T.state.shadowsArray,we=W.state.version,_e=de.getParameters(w,W.state,Se,O,Y,T.state.lightProbeGridArray),Pe=de.getProgramCacheKey(_e);let Ne=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Xe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=le.get(w.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",ui),Ne=new Map,G.programs=Ne);let Ye=Ne.get(Pe);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===we)return Wm(w,_e),Ye}else _e.uniforms=de.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,Y,_e),w.onBeforeCompile(_e,L),Ye=de.acquireProgram(_e,Pe),Ne.set(Pe,Ye),G.uniforms=_e.uniforms;const Ie=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),Wm(w,_e),G.needsLights=QM(w),G.lightsStateVersion=we,G.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Ye,G.uniformsList=null,Ye}function Gm(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=sc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Wm(w,O){const Y=X.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function qM(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let Y=0,G=w.length;Y<G;Y++){const W=w[Y];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function KM(w,O,Y,G,W){O.isScene!==!0&&(O=at),Q.resetTextureUnits();const Se=O.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,_e=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:qe.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=le.get(G.envMap||we,Pe),Xe=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,Dt=!!Y.morphAttributes.color;let bt=Mi;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=L.toneMapping);const ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=ct!==void 0?ct.length:0,Te=X.get(G),Tn=T.state.lights;if(ze===!0&&(Ve===!0||w!==D)){const ht=w===D&&G.id===$;Fe.setState(G,w,ht)}let Ze=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Tn.state.version||Te.outputColorSpace!==_e||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==Ne||G.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==Xe||Te.vertexTangents!==Ye||Te.morphTargets!==Ie||Te.morphNormals!==lt||Te.morphColors!==Dt||Te.toneMapping!==bt||Te.morphTargetsCount!==Qt||!!Te.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Te.__version=G.version);let Un=Te.currentProgram;Ze===!0&&(Un=qa(G,O,W),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Un,Te));let fi=!1,er=!1,gs=!1;const ut=Un.getUniforms(),Lt=Te.uniforms;if(_.useProgram(Un.program)&&(fi=!0,er=!0,gs=!0),G.id!==$&&($=G.id,er=!0),Te.needsLights){const ht=qM(T.state.lightProbeGridArray,W);Te.lightProbeGrid!==ht&&(Te.lightProbeGrid=ht,er=!0)}if(fi||D!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",w.projectionMatrix),ut.setValue(U,"viewMatrix",w.matrixWorldInverse);const nr=ut.map.cameraPosition;nr!==void 0&&nr.setValue(U,rt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,er=!0,gs=!0)}if(Te.needsLights&&(Tn.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Tn.state.directionalShadowMap,Q),Tn.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Tn.state.spotShadowMap,Q),Tn.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Tn.state.pointShadowMap,Q)),W.isSkinnedMesh){ut.setOptional(U,W,"bindMatrix"),ut.setOptional(U,W,"bindMatrixInverse");const ht=W.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ut.setValue(U,"boneTexture",ht.boneTexture,Q))}W.isBatchedMesh&&(ut.setOptional(U,W,"batchingTexture"),ut.setValue(U,"batchingTexture",W._matricesTexture,Q),ut.setOptional(U,W,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",W._indirectTexture,Q),ut.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",W._colorsTexture,Q));const tr=Y.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&I.update(W,Y,Un),(er||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,ut.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Lt.envMapIntensity.value=O.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=kP()),er){if(ut.setValue(U,"toneMappingExposure",L.toneMappingExposure),Te.needsLights&&ZM(Lt,gs),Se&&G.fog===!0&&Le.refreshFogUniforms(Lt,Se),Le.refreshMaterialUniforms(Lt,G,ne,J,T.state.transmissionRenderTarget[w.id]),Te.needsLights&&Te.lightProbeGrid){const ht=Te.lightProbeGrid;Lt.probesSH.value=ht.texture,Lt.probesMin.value.copy(ht.boundingBox.min),Lt.probesMax.value.copy(ht.boundingBox.max),Lt.probesResolution.value.copy(ht.resolution)}sc.upload(U,Gm(Te),Lt,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sc.upload(U,Gm(Te),Lt,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(U,"center",W.center),ut.setValue(U,"modelViewMatrix",W.modelViewMatrix),ut.setValue(U,"normalMatrix",W.normalMatrix),ut.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const ht=G.uniformsGroups;for(let nr=0,vs=ht.length;nr<vs;nr++){const Xm=ht[nr];se.update(Xm,Un),se.bind(Xm,Un)}}return Un}function ZM(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function QM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,O,Y){const G=X.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=O,X.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const Y=X.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){F=w,Z=O,H=Y;let G=null,W=!1,Se=!1;if(w){const _e=X.get(w);if(_e.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),R.copy(w.viewport),q.copy(w.scissor),ce=w.scissorTest,_.viewport(R),_.scissor(q),_.setScissorTest(ce),$=-1;return}else if(_e.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(_e.__hasExternalTextures)Q.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(_e.__boundDepthTexture!==Xe){if(Xe!==null&&X.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);const Ne=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?G=Ne[O][Y]:G=Ne[O],W=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?G=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[Y]:G=Ne,R.copy(w.viewport),q.copy(w.scissor),ce=w.scissorTest}else R.copy(me).multiplyScalar(ne).floor(),q.copy(He).multiplyScalar(ne).floor(),ce=Ue;if(Y!==0&&(G=K),_.bindFramebuffer(U.FRAMEBUFFER,G)&&_.drawBuffers(w,G),_.viewport(R),_.scissor(q),_.setScissorTest(ce),W){const _e=X.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,Y)}else if(Se){const _e=O;for(let Pe=0;Pe<w.textures.length;Pe++){const Ne=X.get(w.textures[Pe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,Y,_e)}}else if(w!==null&&Y!==0){const _e=X.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(w,O,Y,G,W,Se,we,_e=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){_.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ne=w.textures[_e],Xe=Ne.format,Ye=Ne.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!P.textureFormatReadable(Xe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Ye)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&Y>=0&&Y<=w.height-W&&U.readPixels(O,Y,G,W,pe.convert(Xe),pe.convert(Ye),Se)}finally{const Ne=F!==null?X.get(F).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,G,W,Se,we,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(O>=0&&O<=w.width-G&&Y>=0&&Y<=w.height-W){_.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ne=w.textures[_e],Xe=Ne.format,Ye=Ne.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!P.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(O,Y,G,W,pe.convert(Xe),pe.convert(Ye),0);const lt=F!==null?X.get(F).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,lt);const Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await aw(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.deleteBuffer(Ie),U.deleteSync(Dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,Y=0){const G=Math.pow(2,-Y),W=Math.floor(w.image.width*G),Se=Math.floor(w.image.height*G),we=O!==null?O.x:0,_e=O!==null?O.y:0;Q.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,we,_e,W,Se),_.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,G=null,W=0,Se=0){let we,_e,Pe,Ne,Xe,Ye,Ie,lt,Dt;const bt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(Y!==null)we=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Xe=Y.min.y,Ye=Y.isBox3?Y.min.z:0;else{const Lt=Math.pow(2,-W);we=Math.floor(bt.width*Lt),_e=Math.floor(bt.height*Lt),w.isDataArrayTexture?Pe=bt.depth:w.isData3DTexture?Pe=Math.floor(bt.depth*Lt):Pe=1,Ne=0,Xe=0,Ye=0}G!==null?(Ie=G.x,lt=G.y,Dt=G.z):(Ie=0,lt=0,Dt=0);const ct=pe.convert(O.format),Qt=pe.convert(O.type);let Te;O.isData3DTexture?(Q.setTexture3D(O,0),Te=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),Te=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),Te=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Tn=_.getParameter(U.UNPACK_ROW_LENGTH),Ze=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Un=_.getParameter(U.UNPACK_SKIP_PIXELS),fi=_.getParameter(U.UNPACK_SKIP_ROWS),er=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),_.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const gs=w.isDataArrayTexture||w.isData3DTexture,ut=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Lt=X.get(w),tr=X.get(O),ht=X.get(Lt.__renderTarget),nr=X.get(tr.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,ht.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let vs=0;vs<Pe;vs++)gs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(w).__webglTexture,W,Ye+vs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(O).__webglTexture,Se,Dt+vs)),U.blitFramebuffer(Ne,Xe,we,_e,Ie,lt,we,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||X.has(w)){const Lt=X.get(w),tr=X.get(O);_.bindFramebuffer(U.READ_FRAMEBUFFER,te),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let ht=0;ht<Pe;ht++)gs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,W,Ye+ht):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,W),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tr.__webglTexture,Se,Dt+ht):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tr.__webglTexture,Se),W!==0?U.blitFramebuffer(Ne,Xe,we,_e,Ie,lt,we,_e,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(Te,Se,Ie,lt,Dt+ht,Ne,Xe,we,_e):U.copyTexSubImage2D(Te,Se,Ie,lt,Ne,Xe,we,_e);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Te,Se,Ie,lt,Dt,we,_e,Pe,ct,Qt,bt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,Se,Ie,lt,Dt,we,_e,Pe,ct,bt.data):U.texSubImage3D(Te,Se,Ie,lt,Dt,we,_e,Pe,ct,Qt,bt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Ie,lt,we,_e,ct,Qt,bt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Ie,lt,bt.width,bt.height,ct,bt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Ie,lt,we,_e,ct,Qt,bt);_.pixelStorei(U.UNPACK_ROW_LENGTH,Tn),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Un),_.pixelStorei(U.UNPACK_SKIP_ROWS,fi),_.pixelStorei(U.UNPACK_SKIP_IMAGES,er),Se===0&&O.generateMipmaps&&U.generateMipmap(Te),_.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){Z=0,H=0,F=null,_.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}const zP=()=>{const t=ae.useRef(null);return ae.useEffect(()=>{const e=t.current;if(!e)return;const n=new Ew,i=new Hn(60,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=100;const r=new BP({antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=180,o=new li,a=new Float32Array(s*3),l=new Float32Array(s);for(let h=0;h<s;h++)a[h*3]=(Math.random()-.5)*500,a[h*3+1]=(Math.random()-.5)*500,a[h*3+2]=(Math.random()-.5)*500,l[h]=Math.random()*2+1;o.setAttribute("position",new oi(a,3));const c=new eS({size:1.6,color:16777215,transparent:!0,opacity:.35,blending:Ud}),f=new Nw(o,c);n.add(f);let d=0,u=0;const p=h=>{d=(h.clientX-window.innerWidth/2)*4e-4,u=(h.clientY-window.innerHeight/2)*4e-4};window.addEventListener("mousemove",p,{passive:!0});let g;const S=()=>{f.rotation.y+=3e-4,f.rotation.x+=1e-4,i.position.x+=(d*30-i.position.x)*.04,i.position.y+=(-u*30-i.position.y)*.04,r.render(n,i),g=requestAnimationFrame(S)};S();const m=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",m),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("resize",m),cancelAnimationFrame(g),e&&r.domElement&&e.removeChild(r.domElement),r.dispose()}},[]),A.jsx("div",{ref:t,className:"fixed inset-0 z-0 pointer-events-none"})},$p=ae.createContext({});function qp(t){const e=ae.useRef(null);return e.current===null&&(e.current=t()),e.current}const pu=ae.createContext(null),Kp=ae.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class VP extends ae.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function HP({children:t,isPresent:e}){const n=ae.useId(),i=ae.useRef(null),r=ae.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ae.useContext(Kp);return ae.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const f=document.createElement("style");return s&&(f.nonce=s),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[e]),A.jsx(VP,{isPresent:e,childRef:i,sizeRef:r,children:ae.cloneElement(t,{ref:i})})}const GP=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=qp(WP),l=ae.useId(),c=ae.useCallback(d=>{a.set(d,!0);for(const u of a.values())if(!u)return;i&&i()},[a,i]),f=ae.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return ae.useMemo(()=>{a.forEach((d,u)=>a.set(u,!1))},[n]),ae.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=A.jsx(HP,{isPresent:n,children:t})),A.jsx(pu.Provider,{value:f,children:t})};function WP(){return new Map}function pS(t=!0){const e=ae.useContext(pu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ae.useId();ae.useEffect(()=>{t&&r(s)},[t]);const o=ae.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const kl=t=>t.key||"";function ev(t){const e=[];return ae.Children.forEach(t,n=>{ae.isValidElement(n)&&e.push(n)}),e}const Zp=typeof window<"u",mS=Zp?ae.useLayoutEffect:ae.useEffect,XP=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=pS(o),c=ae.useMemo(()=>ev(t),[t]),f=o&&!a?[]:c.map(kl),d=ae.useRef(!0),u=ae.useRef(c),p=qp(()=>new Map),[g,S]=ae.useState(c),[m,h]=ae.useState(c);mS(()=>{d.current=!1,u.current=c;for(let M=0;M<m.length;M++){const E=kl(m[M]);f.includes(E)?p.delete(E):p.get(E)!==!0&&p.set(E,!1)}},[m,f.length,f.join("-")]);const v=[];if(c!==g){let M=[...c];for(let E=0;E<m.length;E++){const T=m[E],b=kl(T);f.includes(b)||(M.splice(E,0,T),v.push(T))}s==="wait"&&v.length&&(M=v),h(ev(M)),S(c);return}const{forceRender:y}=ae.useContext($p);return A.jsx(A.Fragment,{children:m.map(M=>{const E=kl(M),T=o&&!a?!1:c===m||f.includes(E),b=()=>{if(p.has(E))p.set(E,!0);else return;let x=!0;p.forEach(C=>{C||(x=!1)}),x&&(y==null||y(),h(u.current),o&&(l==null||l()),i&&i())};return A.jsx(GP,{isPresent:T,initial:!d.current||n?void 0:!1,custom:T?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:T?void 0:b,children:M},E)})})},Pn=t=>t;let gS=Pn;function Qp(t){let e;return()=>(e===void 0&&(e=t()),e)}const vo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Gi=t=>t*1e3,Wi=t=>t/1e3,jP={useManualTiming:!1};function YP(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const Bl=["read","resolveKeyframes","update","preRender","render","postRender"],$P=40;function vS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Bl.reduce((h,v)=>(h[v]=YP(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:f,render:d,postRender:u}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,$P),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),d.process(r),u.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Bl.reduce((h,v)=>{const y=o[v];return h[v]=(M,E=!1,T=!1)=>(n||g(),y.schedule(M,E,T)),h},{}),cancel:h=>{for(let v=0;v<Bl.length;v++)o[Bl[v]].cancel(h)},state:r,steps:o}}const{schedule:vt,cancel:Pr,state:$t,steps:Rf}=vS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pn,!0),xS=ae.createContext({strict:!1}),tv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},xo={};for(const t in tv)xo[t]={isEnabled:e=>tv[t].some(n=>!!e[n])};function qP(t){for(const e in t)xo[e]={...xo[e],...t[e]}}const KP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||KP.has(t)}let _S=t=>!Bc(t);function ZP(t){t&&(_S=e=>e.startsWith("on")?!Bc(e):t(e))}try{ZP(require("@emotion/is-prop-valid").default)}catch{}function QP(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(_S(r)||n===!0&&Bc(r)||!e&&!Bc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function JP(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const mu=ae.createContext({});function Pa(t){return typeof t=="string"||Array.isArray(t)}function gu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],em=["initial",...Jp];function vu(t){return gu(t.animate)||em.some(e=>Pa(t[e]))}function yS(t){return!!(vu(t)||t.variants)}function e2(t,e){if(vu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Pa(n)?n:void 0,animate:Pa(i)?i:void 0}}return t.inherit!==!1?e:{}}function t2(t){const{initial:e,animate:n}=e2(t,ae.useContext(mu));return ae.useMemo(()=>({initial:e,animate:n}),[nv(e),nv(n)])}function nv(t){return Array.isArray(t)?t.join(" "):t}const n2=Symbol.for("motionComponentSymbol");function Xs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function i2(t,e,n){return ae.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Xs(n)&&(n.current=i))},[e])}const tm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),r2="framerAppearId",SS="data-"+tm(r2),{schedule:nm}=vS(queueMicrotask,!1),MS=ae.createContext({});function s2(t,e,n,i,r){var s,o;const{visualElement:a}=ae.useContext(mu),l=ae.useContext(xS),c=ae.useContext(pu),f=ae.useContext(Kp).reducedMotion,d=ae.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:f}));const u=d.current,p=ae.useContext(MS);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&o2(d.current,n,r,p);const g=ae.useRef(!1);ae.useInsertionEffect(()=>{u&&g.current&&u.update(n,c)});const S=n[SS],m=ae.useRef(!!S&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,S))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,S)));return mS(()=>{u&&(g.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),nm.render(u.render),m.current&&u.animationState&&u.animationState.animateChanges())}),ae.useEffect(()=>{u&&(!m.current&&u.animationState&&u.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,S)}),m.current=!1))}),u}function o2(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:ES(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Xs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function ES(t){if(t)return t.options.allowProjection!==!1?t.projection:ES(t.parent)}function a2({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&qP(t);function a(c,f){let d;const u={...ae.useContext(Kp),...c,layoutId:l2(c)},{isStatic:p}=u,g=t2(c),S=i(c,p);if(!p&&Zp){c2();const m=u2(u);d=m.MeasureLayout,g.visualElement=s2(r,S,u,e,m.ProjectionNode)}return A.jsxs(mu.Provider,{value:g,children:[d&&g.visualElement?A.jsx(d,{visualElement:g.visualElement,...u}):null,n(r,c,i2(S,g.visualElement,f),S,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ae.forwardRef(a);return l[n2]=r,l}function l2({layoutId:t}){const e=ae.useContext($p).id;return e&&t!==void 0?e+"-"+t:t}function c2(t,e){ae.useContext(xS).strict}function u2(t){const{drag:e,layout:n}=xo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const f2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function im(t){return typeof t!="string"||t.includes("-")?!1:!!(f2.indexOf(t)>-1||/[A-Z]/u.test(t))}function iv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function rm(t,e,n,i){if(typeof e=="function"){const[r,s]=iv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=iv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const bh=t=>Array.isArray(t),d2=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),h2=t=>bh(t)?t[t.length-1]||0:t,ln=t=>!!(t&&t.getVelocity);function oc(t){const e=ln(t)?t.get():t;return d2(e)?e.toValue():e}function p2({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:m2(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const TS=t=>(e,n)=>{const i=ae.useContext(mu),r=ae.useContext(pu),s=()=>p2(t,e,i,r);return n?s():qp(s)};function m2(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=oc(s[u]);let{initial:o,animate:a}=t;const l=vu(t),c=yS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!gu(d)){const u=Array.isArray(d)?d:[d];for(let p=0;p<u.length;p++){const g=rm(t,u[p]);if(g){const{transitionEnd:S,transition:m,...h}=g;for(const v in h){let y=h[v];if(Array.isArray(y)){const M=f?y.length-1:0;y=y[M]}y!==null&&(r[v]=y)}for(const v in S)r[v]=S[v]}}}return r}const wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ms=new Set(wo),wS=t=>e=>typeof e=="string"&&e.startsWith(t),AS=wS("--"),g2=wS("var(--"),sm=t=>g2(t)?v2.test(t.split("/*")[0].trim()):!1,v2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,bS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Qi=(t,e,n)=>n>e?e:n<t?t:n,Ao={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Da={...Ao,transform:t=>Qi(0,1,t)},zl={...Ao,default:1},Wa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ur=Wa("deg"),Ti=Wa("%"),ke=Wa("px"),x2=Wa("vh"),_2=Wa("vw"),rv={...Ti,parse:t=>Ti.parse(t)/100,transform:t=>Ti.transform(t*100)},y2={borderWidth:ke,borderTopWidth:ke,borderRightWidth:ke,borderBottomWidth:ke,borderLeftWidth:ke,borderRadius:ke,radius:ke,borderTopLeftRadius:ke,borderTopRightRadius:ke,borderBottomRightRadius:ke,borderBottomLeftRadius:ke,width:ke,maxWidth:ke,height:ke,maxHeight:ke,top:ke,right:ke,bottom:ke,left:ke,padding:ke,paddingTop:ke,paddingRight:ke,paddingBottom:ke,paddingLeft:ke,margin:ke,marginTop:ke,marginRight:ke,marginBottom:ke,marginLeft:ke,backgroundPositionX:ke,backgroundPositionY:ke},S2={rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:zl,scaleX:zl,scaleY:zl,scaleZ:zl,skew:ur,skewX:ur,skewY:ur,distance:ke,translateX:ke,translateY:ke,translateZ:ke,x:ke,y:ke,z:ke,perspective:ke,transformPerspective:ke,opacity:Da,originX:rv,originY:rv,originZ:ke},sv={...Ao,transform:Math.round},om={...y2,...S2,zIndex:sv,size:ke,fillOpacity:Da,strokeOpacity:Da,numOctaves:sv},M2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},E2=wo.length;function T2(t,e,n){let i="",r=!0;for(let s=0;s<E2;s++){const o=wo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=bS(a,om[o]);if(!l){r=!1;const f=M2[o]||o;i+=`${f}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function am(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ms.has(l)){o=!0;continue}else if(AS(l)){r[l]=c;continue}else{const f=bS(c,om[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=T2(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}const w2={offset:"stroke-dashoffset",array:"stroke-dasharray"},A2={offset:"strokeDashoffset",array:"strokeDasharray"};function b2(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?w2:A2;t[s.offset]=ke.transform(-i);const o=ke.transform(e),a=ke.transform(n);t[s.array]=`${o} ${a}`}function ov(t,e,n){return typeof t=="string"?t:ke.transform(e+n*t)}function C2(t,e,n){const i=ov(e,t.x,t.width),r=ov(n,t.y,t.height);return`${i} ${r}`}function lm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},f,d){if(am(t,c,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:u,style:p,dimensions:g}=t;u.transform&&(g&&(p.transform=u.transform),delete u.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=C2(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(u.x=e),n!==void 0&&(u.y=n),i!==void 0&&(u.scale=i),o!==void 0&&b2(u,o,a,l,!1)}const cm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),CS=()=>({...cm(),attrs:{}}),um=t=>typeof t=="string"&&t.toLowerCase()==="svg";function RS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const PS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function DS(t,e,n,i){RS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(PS.has(r)?r:tm(r),e.attrs[r])}const zc={};function R2(t){Object.assign(zc,t)}function LS(t,{layout:e,layoutId:n}){return ms.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!zc[t]||t==="opacity")}function fm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(ln(r[o])||e.style&&ln(e.style[o])||LS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function NS(t,e,n){const i=fm(t,e,n);for(const r in t)if(ln(t[r])||ln(e[r])){const s=wo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function P2(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const av=["x","y","width","height","cx","cy","r"],D2={useVisualState:TS({scrapeMotionValuesFromProps:NS,createRenderState:CS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(ms.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<av.length;a++){const l=av[a];t[l]!==e[l]&&(o=!0)}o&&vt.read(()=>{P2(n,i),vt.render(()=>{lm(i,r,um(n.tagName),t.transformTemplate),DS(n,i)})})}})},L2={useVisualState:TS({scrapeMotionValuesFromProps:fm,createRenderState:cm})};function IS(t,e,n){for(const i in e)!ln(e[i])&&!LS(i,n)&&(t[i]=e[i])}function N2({transformTemplate:t},e){return ae.useMemo(()=>{const n=cm();return am(n,e,t),Object.assign({},n.vars,n.style)},[e])}function I2(t,e){const n=t.style||{},i={};return IS(i,n,t),Object.assign(i,N2(t,e)),i}function U2(t,e){const n={},i=I2(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function F2(t,e,n,i){const r=ae.useMemo(()=>{const s=CS();return lm(s,e,um(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};IS(s,t.style,t),r.style={...s,...r.style}}return r}function O2(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(im(n)?F2:U2)(i,s,o,n),c=QP(i,typeof n=="string",t),f=n!==ae.Fragment?{...c,...l,ref:r}:{},{children:d}=i,u=ae.useMemo(()=>ln(d)?d.get():d,[d]);return ae.createElement(n,{...f,children:u})}}function k2(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...im(i)?D2:L2,preloadedFeatures:t,useRender:O2(r),createVisualElement:e,Component:i};return a2(o)}}function US(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function xu(t,e,n){const i=t.getProps();return rm(i,e,n!==void 0?n:i.custom,t)}const B2=Qp(()=>window.ScrollTimeline!==void 0);class z2{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(B2()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class V2 extends z2{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function dm(t,e){return t?t[e]||t.default||t:void 0}const Ch=2e4;function FS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Ch;)e+=n,i=t.next(e);return e>=Ch?1/0:e}function hm(t){return typeof t=="function"}function lv(t,e){t.timeline=e,t.onfinish=null}const pm=t=>Array.isArray(t)&&typeof t[0]=="number",H2={linearEasing:void 0};function G2(t,e){const n=Qp(t);return()=>{var i;return(i=H2[e])!==null&&i!==void 0?i:n()}}const Vc=G2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),OS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(vo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function kS(t){return!!(typeof t=="function"&&Vc()||!t||typeof t=="string"&&(t in Rh||Vc())||pm(t)||Array.isArray(t)&&t.every(kS))}const qo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Rh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qo([0,.65,.55,1]),circOut:qo([.55,0,1,.45]),backIn:qo([.31,.01,.66,-.59]),backOut:qo([.33,1.53,.69,.99])};function BS(t,e){if(t)return typeof t=="function"&&Vc()?OS(t,e):pm(t)?qo(t):Array.isArray(t)?t.map(n=>BS(n,e)||Rh.easeOut):Rh[t]}const Qn={x:!1,y:!1};function zS(){return Qn.x||Qn.y}function W2(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function VS(t,e){const n=W2(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function cv(t){return e=>{e.pointerType==="touch"||zS()||t(e)}}function X2(t,e,n={}){const[i,r,s]=VS(t,n),o=cv(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const f=cv(d=>{c(d),l.removeEventListener("pointerleave",f)});l.addEventListener("pointerleave",f,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const HS=(t,e)=>e?t===e?!0:HS(t,e.parentElement):!1,mm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,j2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Y2(t){return j2.has(t.tagName)||t.tabIndex!==-1}const Ko=new WeakSet;function uv(t){return e=>{e.key==="Enter"&&t(e)}}function Pf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const $2=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=uv(()=>{if(Ko.has(n))return;Pf(n,"down");const r=uv(()=>{Pf(n,"up")}),s=()=>Pf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function fv(t){return mm(t)&&!zS()}function q2(t,e,n={}){const[i,r,s]=VS(t,n),o=a=>{const l=a.currentTarget;if(!fv(a)||Ko.has(l))return;Ko.add(l);const c=e(a),f=(p,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",u),!(!fv(p)||!Ko.has(l))&&(Ko.delete(l),typeof c=="function"&&c(p,{success:g}))},d=p=>{f(p,n.useGlobalTarget||HS(l,p.target))},u=p=>{f(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",u,r)};return i.forEach(a=>{!Y2(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>$2(c,r),r)}),s}function K2(t){return t==="x"||t==="y"?Qn[t]?null:(Qn[t]=!0,()=>{Qn[t]=!1}):Qn.x||Qn.y?null:(Qn.x=Qn.y=!0,()=>{Qn.x=Qn.y=!1})}const GS=new Set(["width","height","top","left","right","bottom",...wo]);let ac;function Z2(){ac=void 0}const wi={now:()=>(ac===void 0&&wi.set($t.isProcessing||jP.useManualTiming?$t.timestamp:performance.now()),ac),set:t=>{ac=t,queueMicrotask(Z2)}};function gm(t,e){t.indexOf(e)===-1&&t.push(e)}function vm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class xm{constructor(){this.subscriptions=[]}add(e){return gm(this.subscriptions,e),()=>vm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function WS(t,e){return e?t*(1e3/e):0}const dv=30,Q2=t=>!isNaN(parseFloat(t));class J2{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=wi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=wi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Q2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new xm);const i=this.events[e].add(n);return e==="change"?()=>{i(),vt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=wi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>dv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,dv);return WS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function La(t,e){return new J2(t,e)}function e3(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,La(n))}function t3(t,e){const n=xu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=h2(s[o]);e3(t,o,a)}}function n3(t){return!!(ln(t)&&t.add)}function Ph(t,e){const n=t.getValue("willChange");if(n3(n))return n.add(e)}function XS(t){return t.props[SS]}const jS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,i3=1e-7,r3=12;function s3(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=jS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>i3&&++a<r3);return o}function Xa(t,e,n,i){if(t===e&&n===i)return Pn;const r=s=>s3(s,0,1,t,n);return s=>s===0||s===1?s:jS(r(s),e,i)}const YS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,$S=t=>e=>1-t(1-e),qS=Xa(.33,1.53,.69,.99),_m=$S(qS),KS=YS(_m),ZS=t=>(t*=2)<1?.5*_m(t):.5*(2-Math.pow(2,-10*(t-1))),ym=t=>1-Math.sin(Math.acos(t)),QS=$S(ym),JS=YS(ym),eM=t=>/^0[^.\s]+$/u.test(t);function o3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||eM(t):!0}const aa=t=>Math.round(t*1e5)/1e5,Sm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function a3(t){return t==null}const l3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mm=(t,e)=>n=>!!(typeof n=="string"&&l3.test(n)&&n.startsWith(t)||e&&!a3(n)&&Object.prototype.hasOwnProperty.call(n,e)),tM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Sm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},c3=t=>Qi(0,255,t),Df={...Ao,transform:t=>Math.round(c3(t))},es={test:Mm("rgb","red"),parse:tM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Df.transform(t)+", "+Df.transform(e)+", "+Df.transform(n)+", "+aa(Da.transform(i))+")"};function u3(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Dh={test:Mm("#"),parse:u3,transform:es.transform},js={test:Mm("hsl","hue"),parse:tM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ti.transform(aa(e))+", "+Ti.transform(aa(n))+", "+aa(Da.transform(i))+")"},rn={test:t=>es.test(t)||Dh.test(t)||js.test(t),parse:t=>es.test(t)?es.parse(t):js.test(t)?js.parse(t):Dh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?es.transform(t):js.transform(t)},f3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function d3(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Sm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(f3))===null||n===void 0?void 0:n.length)||0)>0}const nM="number",iM="color",h3="var",p3="var(",hv="${}",m3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Na(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(m3,l=>(rn.test(l)?(i.color.push(s),r.push(iM),n.push(rn.parse(l))):l.startsWith(p3)?(i.var.push(s),r.push(h3),n.push(l)):(i.number.push(s),r.push(nM),n.push(parseFloat(l))),++s,hv)).split(hv);return{values:n,split:a,indexes:i,types:r}}function rM(t){return Na(t).values}function sM(t){const{split:e,types:n}=Na(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===nM?s+=aa(r[o]):a===iM?s+=rn.transform(r[o]):s+=r[o]}return s}}const g3=t=>typeof t=="number"?0:t;function v3(t){const e=rM(t);return sM(t)(e.map(g3))}const Dr={test:d3,parse:rM,createTransformer:sM,getAnimatableNone:v3},x3=new Set(["brightness","contrast","saturate","opacity"]);function _3(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Sm)||[];if(!i)return t;const r=n.replace(i,"");let s=x3.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const y3=/\b([a-z-]*)\(.*?\)/gu,Lh={...Dr,getAnimatableNone:t=>{const e=t.match(y3);return e?e.map(_3).join(" "):t}},S3={...om,color:rn,backgroundColor:rn,outlineColor:rn,fill:rn,stroke:rn,borderColor:rn,borderTopColor:rn,borderRightColor:rn,borderBottomColor:rn,borderLeftColor:rn,filter:Lh,WebkitFilter:Lh},Em=t=>S3[t];function oM(t,e){let n=Em(t);return n!==Lh&&(n=Dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const M3=new Set(["auto","none","0"]);function E3(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!M3.has(s)&&Na(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=oM(n,r)}const pv=t=>t===Ao||t===ke,mv=(t,e)=>parseFloat(t.split(", ")[e]),gv=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return mv(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?mv(s[1],t):0}},T3=new Set(["x","y","z"]),w3=wo.filter(t=>!T3.has(t));function A3(t){const e=[];return w3.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const _o={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:gv(4,13),y:gv(5,14)};_o.translateX=_o.x;_o.translateY=_o.y;const is=new Set;let Nh=!1,Ih=!1;function aM(){if(Ih){const t=Array.from(is).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=A3(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ih=!1,Nh=!1,is.forEach(t=>t.complete()),is.clear()}function lM(){is.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ih=!0)})}function b3(){lM(),aM()}class Tm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(is.add(this),Nh||(Nh=!0,vt.read(lM),vt.resolveKeyframes(aM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),is.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,is.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const cM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),C3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function R3(t){const e=C3.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function uM(t,e,n=1){const[i,r]=R3(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return cM(o)?parseFloat(o):o}return sm(r)?uM(r,e,n+1):r}const fM=t=>e=>e.test(t),P3={test:t=>t==="auto",parse:t=>t},dM=[Ao,ke,Ti,ur,_2,x2,P3],vv=t=>dM.find(fM(t));class hM extends Tm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),sm(c))){const f=uM(c,n.current);f!==void 0&&(e[l]=f),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!GS.has(i)||e.length!==2)return;const[r,s]=e,o=vv(r),a=vv(s);if(o!==a)if(pv(o)&&pv(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)o3(e[r])&&i.push(r);i.length&&E3(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_o[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=_o[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const xv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Dr.test(t)||t==="0")&&!t.startsWith("url("));function D3(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function L3(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=xv(r,e),a=xv(s,e);return!o||!a?!1:D3(t)||(n==="spring"||hm(n))&&i}const N3=t=>t!==null;function _u(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(N3),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const I3=40;class pM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=wi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>I3?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&b3(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=wi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!L3(e,i,r,s))if(o)this.options.duration=0;else{l&&l(_u(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const f=this.initPlayback(e,n);f!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...f},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Mt=(t,e,n)=>t+(e-t)*n;function Lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function U3({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Lf(l,a,t+1/3),s=Lf(l,a,t),o=Lf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Hc(t,e){return n=>n>0?e:t}const Nf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},F3=[Dh,es,js],O3=t=>F3.find(e=>e.test(t));function _v(t){const e=O3(t);if(!e)return!1;let n=e.parse(t);return e===js&&(n=U3(n)),n}const yv=(t,e)=>{const n=_v(t),i=_v(e);if(!n||!i)return Hc(t,e);const r={...n};return s=>(r.red=Nf(n.red,i.red,s),r.green=Nf(n.green,i.green,s),r.blue=Nf(n.blue,i.blue,s),r.alpha=Mt(n.alpha,i.alpha,s),es.transform(r))},k3=(t,e)=>n=>e(t(n)),ja=(...t)=>t.reduce(k3),Uh=new Set(["none","hidden"]);function B3(t,e){return Uh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function z3(t,e){return n=>Mt(t,e,n)}function wm(t){return typeof t=="number"?z3:typeof t=="string"?sm(t)?Hc:rn.test(t)?yv:G3:Array.isArray(t)?mM:typeof t=="object"?rn.test(t)?yv:V3:Hc}function mM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>wm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function V3(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=wm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function H3(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const G3=(t,e)=>{const n=Dr.createTransformer(e),i=Na(t),r=Na(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Uh.has(t)&&!r.values.length||Uh.has(e)&&!i.values.length?B3(t,e):ja(mM(H3(i,r),r.values),n):Hc(t,e)};function gM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Mt(t,e,n):wm(t)(t,e)}const W3=5;function vM(t,e,n){const i=Math.max(e-W3,0);return WS(n-t(i),e-i)}const Ct={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},If=.001;function X3({duration:t=Ct.duration,bounce:e=Ct.bounce,velocity:n=Ct.velocity,mass:i=Ct.mass}){let r,s,o=1-e;o=Qi(Ct.minDamping,Ct.maxDamping,o),t=Qi(Ct.minDuration,Ct.maxDuration,Wi(t)),o<1?(r=c=>{const f=c*o,d=f*t,u=f-n,p=Fh(c,o),g=Math.exp(-d);return If-u/p*g},s=c=>{const d=c*o*t,u=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-d),S=Fh(Math.pow(c,2),o);return(-r(c)+If>0?-1:1)*((u-p)*g)/S}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-If+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,l=Y3(r,s,a);if(t=Gi(t),isNaN(l))return{stiffness:Ct.stiffness,damping:Ct.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const j3=12;function Y3(t,e,n){let i=n;for(let r=1;r<j3;r++)i=i-t(i)/e(i);return i}function Fh(t,e){return t*Math.sqrt(1-e*e)}const $3=["duration","bounce"],q3=["stiffness","damping","mass"];function Sv(t,e){return e.some(n=>t[n]!==void 0)}function K3(t){let e={velocity:Ct.velocity,stiffness:Ct.stiffness,damping:Ct.damping,mass:Ct.mass,isResolvedFromDuration:!1,...t};if(!Sv(t,q3)&&Sv(t,$3))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Qi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Ct.mass,stiffness:r,damping:s}}else{const n=X3(t);e={...e,...n,mass:Ct.mass},e.isResolvedFromDuration=!0}return e}function xM(t=Ct.visualDuration,e=Ct.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:d,velocity:u,isResolvedFromDuration:p}=K3({...n,velocity:-Wi(n.velocity||0)}),g=u||0,S=c/(2*Math.sqrt(l*f)),m=o-s,h=Wi(Math.sqrt(l/f)),v=Math.abs(m)<5;i||(i=v?Ct.restSpeed.granular:Ct.restSpeed.default),r||(r=v?Ct.restDelta.granular:Ct.restDelta.default);let y;if(S<1){const E=Fh(h,S);y=T=>{const b=Math.exp(-S*h*T);return o-b*((g+S*h*m)/E*Math.sin(E*T)+m*Math.cos(E*T))}}else if(S===1)y=E=>o-Math.exp(-h*E)*(m+(g+h*m)*E);else{const E=h*Math.sqrt(S*S-1);y=T=>{const b=Math.exp(-S*h*T),x=Math.min(E*T,300);return o-b*((g+S*h*m)*Math.sinh(x)+E*m*Math.cosh(x))/E}}const M={calculatedDuration:p&&d||null,next:E=>{const T=y(E);if(p)a.done=E>=d;else{let b=0;S<1&&(b=E===0?Gi(g):vM(y,E,T));const x=Math.abs(b)<=i,C=Math.abs(o-T)<=r;a.done=x&&C}return a.value=a.done?o:T,a},toString:()=>{const E=Math.min(FS(M),Ch),T=OS(b=>M.next(E*b).value,E,30);return E+"ms "+T}};return M}function Mv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,g=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let S=n*e;const m=d+S,h=o===void 0?m:o(m);h!==m&&(S=h-d);const v=x=>-S*Math.exp(-x/i),y=x=>h+v(x),M=x=>{const C=v(x),L=y(x);u.done=Math.abs(C)<=c,u.value=u.done?h:L};let E,T;const b=x=>{p(u.value)&&(E=x,T=xM({keyframes:[u.value,g(u.value)],velocity:vM(y,x,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return b(0),{calculatedDuration:null,next:x=>{let C=!1;return!T&&E===void 0&&(C=!0,M(x),b(x)),E!==void 0&&x>=E?T.next(x-E):(!C&&M(x),u)}}}const Z3=Xa(.42,0,1,1),Q3=Xa(0,0,.58,1),_M=Xa(.42,0,.58,1),J3=t=>Array.isArray(t)&&typeof t[0]!="number",eD={linear:Pn,easeIn:Z3,easeInOut:_M,easeOut:Q3,circIn:ym,circInOut:JS,circOut:QS,backIn:_m,backInOut:KS,backOut:qS,anticipate:ZS},Ev=t=>{if(pm(t)){gS(t.length===4);const[e,n,i,r]=t;return Xa(e,n,i,r)}else if(typeof t=="string")return eD[t];return t};function tD(t,e,n){const i=[],r=n||gM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Pn:e;a=ja(l,a)}i.push(a)}return i}function nD(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(gS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=tD(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const u=vo(t[d],t[d+1],f);return a[d](u)};return n?f=>c(Qi(t[0],t[s-1],f)):c}function iD(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=vo(0,e,i);t.push(Mt(n,1,r))}}function rD(t){const e=[0];return iD(e,t.length-1),e}function sD(t,e){return t.map(n=>n*e)}function oD(t,e){return t.map(()=>e||_M).splice(0,t.length-1)}function Gc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=J3(i)?i.map(Ev):Ev(i),s={done:!1,value:e[0]},o=sD(n&&n.length===e.length?n:rD(e),t),a=nD(o,e,{ease:Array.isArray(r)?r:oD(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const aD=t=>{const e=({timestamp:n})=>t(n);return{start:()=>vt.update(e,!0),stop:()=>Pr(e),now:()=>$t.isProcessing?$t.timestamp:wi.now()}},lD={decay:Mv,inertia:Mv,tween:Gc,keyframes:Gc,spring:xM},cD=t=>t/100;class Am extends pM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Tm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=hm(n)?n:lD[n]||Gc;let l,c;a!==Gc&&typeof e[0]!="number"&&(l=ja(cD,gM(e[0],e[1])),e=[0,100]);const f=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),f.calculatedDuration===null&&(f.calculatedDuration=FS(f));const{calculatedDuration:d}=f,u=d+r,p=u*(i+1)-r;return{generator:f,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:u,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:x}=this.options;return{done:!0,value:x[x.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:f,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:u,repeat:p,repeatType:g,repeatDelay:S,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-f/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-u*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>f;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=f);let y=this.currentTime,M=s;if(p){const x=Math.min(this.currentTime,f)/d;let C=Math.floor(x),L=x%1;!L&&x>=1&&(L=1),L===1&&C--,C=Math.min(C,p+1),!!(C%2)&&(g==="reverse"?(L=1-L,S&&(L-=S/d)):g==="mirror"&&(M=o)),y=Qi(0,1,L)*d}const E=v?{done:!1,value:l[0]}:M.next(y);a&&(E.value=a(E.value));let{done:T}=E;!v&&c!==null&&(T=this.speed>=0?this.currentTime>=f:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return b&&r!==void 0&&(E.value=_u(l,this.options,r)),m&&m(E.value),b&&this.finish(),E}get duration(){const{resolved:e}=this;return e?Wi(e.calculatedDuration):0}get time(){return Wi(this.currentTime)}set time(e){e=Gi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Wi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=aD,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const uD=new Set(["opacity","clipPath","filter","transform"]);function fD(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const f=BS(a,r);return Array.isArray(f)&&(c.easing=f),t.animate(c,{delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const dD=Qp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Wc=10,hD=2e4;function pD(t){return hm(t.type)||t.type==="spring"||!kS(t.ease)}function mD(t,e){const n=new Am({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<hD;)i=n.sample(s),r.push(i.value),s+=Wc;return{times:void 0,keyframes:r,duration:s-Wc,ease:"linear"}}const yM={anticipate:ZS,backInOut:KS,circInOut:JS};function gD(t){return t in yM}class Tv extends pM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new hM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Vc()&&gD(s)&&(s=yM[s]),pD(this.options)){const{onComplete:d,onUpdate:u,motionValue:p,element:g,...S}=this.options,m=mD(e,S);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const f=fD(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return f.startTime=c??this.calcStartTime(),this.pendingTimeline?(lv(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:d}=this.options;a.set(_u(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Wi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Wi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Gi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Pn;const{animation:i}=n;lv(i,e)}return Pn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:f,onComplete:d,element:u,...p}=this.options,g=new Am({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),S=Gi(this.time);c.setWithVelocity(g.sample(S-Wc).value,g.sample(S).value,Wc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return dD()&&i&&uD.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const vD={type:"spring",stiffness:500,damping:25,restSpeed:10},xD=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_D={type:"keyframes",duration:.8},yD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},SD=(t,{keyframes:e})=>e.length>2?_D:ms.has(t)?t.startsWith("scale")?xD(e[1]):vD:yD;function MD({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...f}){return!!Object.keys(f).length}const bm=(t,e,n,i={},r,s)=>o=>{const a=dm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Gi(l);let f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};MD(a)||(f={...f,...SD(t,f)}),f.duration&&(f.duration=Gi(f.duration)),f.repeatDelay&&(f.repeatDelay=Gi(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(f.duration=0,f.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const u=_u(f.keyframes,a);if(u!==void 0)return vt.update(()=>{f.onUpdate(u),f.onComplete()}),new V2([])}return!s&&Tv.supports(f)?new Tv(f):new Am(f)};function ED({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function SM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],f=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const u=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||f&&ED(f,d))continue;const g={delay:n,...dm(o||{},d)};let S=!1;if(window.MotionHandoffAnimation){const h=XS(t);if(h){const v=window.MotionHandoffAnimation(h,d,vt);v!==null&&(g.startTime=v,S=!0)}}Ph(t,d),u.start(bm(d,u,p,t.shouldReduceMotion&&GS.has(d)?{type:!1}:g,t,S));const m=u.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{vt.update(()=>{a&&t3(t,a)})}),c}function Oh(t,e,n={}){var i;const r=xu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(SM(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:d,staggerDirection:u}=s;return TD(t,e,f+c,d,u,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,f]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>f())}else return Promise.all([o(),a(n.delay)])}function TD(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(wD).forEach((c,f)=>{c.notify("AnimationStart",e),o.push(Oh(c,e,{...s,delay:n+l(f)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function wD(t,e){return t.sortNodePosition(e)}function AD(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Oh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Oh(t,e,n);else{const r=typeof e=="function"?xu(t,e,n.custom):e;i=Promise.all(SM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const bD=em.length;function MM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?MM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<bD;n++){const i=em[n],r=t.props[i];(Pa(r)||r===!1)&&(e[i]=r)}return e}const CD=[...Jp].reverse(),RD=Jp.length;function PD(t){return e=>Promise.all(e.map(({animation:n,options:i})=>AD(t,n,i)))}function DD(t){let e=PD(t),n=wv(),i=!0;const r=l=>(c,f)=>{var d;const u=xu(t,f,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(u){const{transition:p,transitionEnd:g,...S}=u;c={...c,...S,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,f=MM(t.parent)||{},d=[],u=new Set;let p={},g=1/0;for(let m=0;m<RD;m++){const h=CD[m],v=n[h],y=c[h]!==void 0?c[h]:f[h],M=Pa(y),E=h===l?v.isActive:null;E===!1&&(g=m);let T=y===f[h]&&y!==c[h]&&M;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),v.protectedKeys={...p},!v.isActive&&E===null||!y&&!v.prevProp||gu(y)||typeof y=="boolean")continue;const b=LD(v.prevProp,y);let x=b||h===l&&v.isActive&&!T&&M||m>g&&M,C=!1;const L=Array.isArray(y)?y:[y];let N=L.reduce(r(h),{});E===!1&&(N={});const{prevResolvedValues:B={}}=v,K={...B,...N},te=H=>{x=!0,u.has(H)&&(C=!0,u.delete(H)),v.needsAnimating[H]=!0;const F=t.getValue(H);F&&(F.liveStyle=!1)};for(const H in K){const F=N[H],$=B[H];if(p.hasOwnProperty(H))continue;let D=!1;bh(F)&&bh($)?D=!US(F,$):D=F!==$,D?F!=null?te(H):u.add(H):F!==void 0&&u.has(H)?te(H):v.protectedKeys[H]=!0}v.prevProp=y,v.prevResolvedValues=N,v.isActive&&(p={...p,...N}),i&&t.blockInitialAnimation&&(x=!1),x&&(!(T&&b)||C)&&d.push(...L.map(H=>({animation:H,options:{type:h}})))}if(u.size){const m={};u.forEach(h=>{const v=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),m[h]=v??null}),d.push({animation:m})}let S=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(d):Promise.resolve()}function a(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(u=>{var p;return(p=u.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const u in n)n[u].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=wv(),i=!0}}}function LD(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!US(e,t):!1}function Vr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wv(){return{animate:Vr(!0),whileInView:Vr(),whileHover:Vr(),whileTap:Vr(),whileDrag:Vr(),whileFocus:Vr(),exit:Vr()}}class Ur{constructor(e){this.isMounted=!1,this.node=e}update(){}}class ND extends Ur{constructor(e){super(e),e.animationState||(e.animationState=DD(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();gu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let ID=0;class UD extends Ur{constructor(){super(...arguments),this.id=ID++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const FD={animation:{Feature:ND},exit:{Feature:UD}};function Ia(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ya(t){return{point:{x:t.pageX,y:t.pageY}}}const OD=t=>e=>mm(e)&&t(e,Ya(e));function la(t,e,n,i){return Ia(t,e,OD(n),i)}const Av=(t,e)=>Math.abs(t-e);function kD(t,e){const n=Av(t.x,e.x),i=Av(t.y,e.y);return Math.sqrt(n**2+i**2)}class EM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Ff(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,p=kD(d.offset,{x:0,y:0})>=3;if(!u&&!p)return;const{point:g}=d,{timestamp:S}=$t;this.history.push({...g,timestamp:S});const{onStart:m,onMove:h}=this.handlers;u||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,u)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Uf(u,this.transformPagePoint),vt.update(this.updatePoint,!0)},this.handlePointerUp=(d,u)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Ff(d.type==="pointercancel"?this.lastMoveEventInfo:Uf(u,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),g&&g(d,m)},!mm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ya(e),a=Uf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=$t;this.history=[{...l,timestamp:c}];const{onSessionStart:f}=n;f&&f(e,Ff(a,this.history)),this.removeListeners=ja(la(this.contextWindow,"pointermove",this.handlePointerMove),la(this.contextWindow,"pointerup",this.handlePointerUp),la(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pr(this.updatePoint)}}function Uf(t,e){return e?{point:e(t.point)}:t}function bv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ff({point:t},e){return{point:t,delta:bv(t,TM(e)),offset:bv(t,BD(e)),velocity:zD(e,.1)}}function BD(t){return t[0]}function TM(t){return t[t.length-1]}function zD(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=TM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Gi(e)));)n--;if(!i)return{x:0,y:0};const s=Wi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const wM=1e-4,VD=1-wM,HD=1+wM,AM=.01,GD=0-AM,WD=0+AM;function Ln(t){return t.max-t.min}function XD(t,e,n){return Math.abs(t-e)<=n}function Cv(t,e,n,i=.5){t.origin=i,t.originPoint=Mt(e.min,e.max,t.origin),t.scale=Ln(n)/Ln(e),t.translate=Mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=VD&&t.scale<=HD||isNaN(t.scale))&&(t.scale=1),(t.translate>=GD&&t.translate<=WD||isNaN(t.translate))&&(t.translate=0)}function ca(t,e,n,i){Cv(t.x,e.x,n.x,i?i.originX:void 0),Cv(t.y,e.y,n.y,i?i.originY:void 0)}function Rv(t,e,n){t.min=n.min+e.min,t.max=t.min+Ln(e)}function jD(t,e,n){Rv(t.x,e.x,n.x),Rv(t.y,e.y,n.y)}function Pv(t,e,n){t.min=e.min-n.min,t.max=t.min+Ln(e)}function ua(t,e,n){Pv(t.x,e.x,n.x),Pv(t.y,e.y,n.y)}function YD(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Mt(n,t,i.max):Math.min(t,n)),t}function Dv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function $D(t,{top:e,left:n,bottom:i,right:r}){return{x:Dv(t.x,n,r),y:Dv(t.y,e,i)}}function Lv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function qD(t,e){return{x:Lv(t.x,e.x),y:Lv(t.y,e.y)}}function KD(t,e){let n=.5;const i=Ln(t),r=Ln(e);return r>i?n=vo(e.min,e.max-i,t.min):i>r&&(n=vo(t.min,t.max-r,e.min)),Qi(0,1,n)}function ZD(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const kh=.35;function QD(t=kh){return t===!1?t=0:t===!0&&(t=kh),{x:Nv(t,"left","right"),y:Nv(t,"top","bottom")}}function Nv(t,e,n){return{min:Iv(t,e),max:Iv(t,n)}}function Iv(t,e){return typeof t=="number"?t:t[e]||0}const Uv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ys=()=>({x:Uv(),y:Uv()}),Fv=()=>({min:0,max:0}),Nt=()=>({x:Fv(),y:Fv()});function kn(t){return[t("x"),t("y")]}function bM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function JD({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function eL(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Of(t){return t===void 0||t===1}function Bh({scale:t,scaleX:e,scaleY:n}){return!Of(t)||!Of(e)||!Of(n)}function Xr(t){return Bh(t)||CM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function CM(t){return Ov(t.x)||Ov(t.y)}function Ov(t){return t&&t!=="0%"}function Xc(t,e,n){const i=t-n,r=e*i;return n+r}function kv(t,e,n,i,r){return r!==void 0&&(t=Xc(t,r,i)),Xc(t,n,i)+e}function zh(t,e=0,n=1,i,r){t.min=kv(t.min,e,n,i,r),t.max=kv(t.max,e,n,i,r)}function RM(t,{x:e,y:n}){zh(t.x,e.translate,e.scale,e.originPoint),zh(t.y,n.translate,n.scale,n.originPoint)}const Bv=.999999999999,zv=1.0000000000001;function tL(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&qs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,RM(t,o)),i&&Xr(s.latestValues)&&qs(t,s.latestValues))}e.x<zv&&e.x>Bv&&(e.x=1),e.y<zv&&e.y>Bv&&(e.y=1)}function $s(t,e){t.min=t.min+e,t.max=t.max+e}function Vv(t,e,n,i,r=.5){const s=Mt(t.min,t.max,r);zh(t,e,n,s,i)}function qs(t,e){Vv(t.x,e.x,e.scaleX,e.scale,e.originX),Vv(t.y,e.y,e.scaleY,e.scale,e.originY)}function PM(t,e){return bM(eL(t.getBoundingClientRect(),e))}function nL(t,e,n){const i=PM(t,n),{scroll:r}=e;return r&&($s(i.x,r.offset.x),$s(i.y,r.offset.y)),i}const DM=({current:t})=>t?t.ownerDocument.defaultView:null,iL=new WeakMap;class rL{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Nt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ya(f).point)},s=(f,d)=>{const{drag:u,dragPropagation:p,onDragStart:g}=this.getProps();if(u&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=K2(u),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(Ti.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[m];y&&(h=Ln(y)*(parseFloat(h)/100))}}this.originPoint[m]=h}),g&&vt.postRender(()=>g(f,d)),Ph(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},o=(f,d)=>{const{dragPropagation:u,dragDirectionLock:p,onDirectionLock:g,onDrag:S}=this.getProps();if(!u&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=sL(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),S&&S(f,d)},a=(f,d)=>this.stop(f,d),l=()=>kn(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new EM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:DM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&vt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Vl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=YD(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Xs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=$D(r.layoutBox,n):this.constraints=!1,this.elastic=QD(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&kn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=ZD(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Xs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=nL(i,r.root,this.visualElement.getTransformPagePoint());let o=qD(r.layout.layoutBox,s);if(n){const a=n(JD(o));this.hasMutatedConstraints=!!a,a&&(o=bM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=kn(f=>{if(!Vl(f,n,this.currentDirection))return;let d=l&&l[f]||{};o&&(d={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ph(this.visualElement,e),i.start(bm(e,i,0,n,this.visualElement,!1))}stopAnimation(){kn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){kn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){kn(n=>{const{drag:i}=this.getProps();if(!Vl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-Mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Xs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};kn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=KD({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),kn(o=>{if(!Vl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Mt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;iL.set(this.visualElement,this);const e=this.visualElement.current,n=la(e,"pointerdown",l=>{const{drag:c,dragListener:f=!0}=this.getProps();c&&f&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Xs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),vt.read(i);const o=Ia(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(kn(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=l[f].translate,d.set(d.get()+l[f].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=kh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Vl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function sL(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class oL extends Ur{constructor(e){super(e),this.removeGroupControls=Pn,this.removeListeners=Pn,this.controls=new rL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Hv=t=>(e,n)=>{t&&vt.postRender(()=>t(e,n))};class aL extends Ur{constructor(){super(...arguments),this.removePointerDownListener=Pn}onPointerDown(e){this.session=new EM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:DM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Hv(e),onStart:Hv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&vt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=la(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const lc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Gv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ho={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ke.test(t))t=parseFloat(t);else return t;const n=Gv(t,e.target.x),i=Gv(t,e.target.y);return`${n}% ${i}%`}},lL={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Dr.parse(t);if(r.length>5)return i;const s=Dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class cL extends ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;R2(uL),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),lc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||vt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),nm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function LM(t){const[e,n]=pS(),i=ae.useContext($p);return A.jsx(cL,{...t,layoutGroup:i,switchLayoutGroup:ae.useContext(MS),isPresent:e,safeToRemove:n})}const uL={borderRadius:{...Ho,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ho,borderTopRightRadius:Ho,borderBottomLeftRadius:Ho,borderBottomRightRadius:Ho,boxShadow:lL};function fL(t,e,n){const i=ln(t)?t:La(t);return i.start(bm("",i,e,n)),i.animation}function dL(t){return t instanceof SVGElement&&t.tagName!=="svg"}const hL=(t,e)=>t.depth-e.depth;class pL{constructor(){this.children=[],this.isDirty=!1}add(e){gm(this.children,e),this.isDirty=!0}remove(e){vm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hL),this.isDirty=!1,this.children.forEach(e)}}function mL(t,e){const n=wi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Pr(i),t(s-e))};return vt.read(i,!0),()=>Pr(i)}const NM=["TopLeft","TopRight","BottomLeft","BottomRight"],gL=NM.length,Wv=t=>typeof t=="string"?parseFloat(t):t,Xv=t=>typeof t=="number"||ke.test(t);function vL(t,e,n,i,r,s){r?(t.opacity=Mt(0,n.opacity!==void 0?n.opacity:1,xL(i)),t.opacityExit=Mt(e.opacity!==void 0?e.opacity:1,0,_L(i))):s&&(t.opacity=Mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<gL;o++){const a=`border${NM[o]}Radius`;let l=jv(e,a),c=jv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Xv(l)===Xv(c)?(t[a]=Math.max(Mt(Wv(l),Wv(c),i),0),(Ti.test(c)||Ti.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Mt(e.rotate||0,n.rotate||0,i))}function jv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const xL=IM(0,.5,QS),_L=IM(.5,.95,Pn);function IM(t,e,n){return i=>i<t?0:i>e?1:n(vo(t,e,i))}function Yv(t,e){t.min=e.min,t.max=e.max}function On(t,e){Yv(t.x,e.x),Yv(t.y,e.y)}function $v(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function qv(t,e,n,i,r){return t-=e,t=Xc(t,1/n,i),r!==void 0&&(t=Xc(t,1/r,i)),t}function yL(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ti.test(e)&&(e=parseFloat(e),e=Mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Mt(s.min,s.max,i);t===s&&(a-=e),t.min=qv(t.min,e,n,a,r),t.max=qv(t.max,e,n,a,r)}function Kv(t,e,[n,i,r],s,o){yL(t,e[n],e[i],e[r],e.scale,s,o)}const SL=["x","scaleX","originX"],ML=["y","scaleY","originY"];function Zv(t,e,n,i){Kv(t.x,e,SL,n?n.x:void 0,i?i.x:void 0),Kv(t.y,e,ML,n?n.y:void 0,i?i.y:void 0)}function Qv(t){return t.translate===0&&t.scale===1}function UM(t){return Qv(t.x)&&Qv(t.y)}function Jv(t,e){return t.min===e.min&&t.max===e.max}function EL(t,e){return Jv(t.x,e.x)&&Jv(t.y,e.y)}function ex(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function FM(t,e){return ex(t.x,e.x)&&ex(t.y,e.y)}function tx(t){return Ln(t.x)/Ln(t.y)}function nx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class TL{constructor(){this.members=[]}add(e){gm(this.members,e),e.scheduleRender()}remove(e){if(vm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function wL(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,rotateX:d,rotateY:u,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotateX(${d}deg) `),u&&(i+=`rotateY(${u}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const jr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Zo=typeof window<"u"&&window.MotionDebug!==void 0,kf=["","X","Y","Z"],AL={visibility:"hidden"},ix=1e3;let bL=0;function Bf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function OM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=XS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",vt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&OM(i)}function kM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=bL++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zo&&(jr.totalNodes=jr.resolvedTargetDeltas=jr.recalculatedProjection=0),this.nodes.forEach(PL),this.nodes.forEach(UL),this.nodes.forEach(FL),this.nodes.forEach(DL),Zo&&window.MotionDebug.record(jr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new pL)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new xm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dL(o),this.instance=o;const{layoutId:l,layout:c,visualElement:f}=this.options;if(f&&!f.current&&f.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const u=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=mL(u,250),lc.hasAnimatedSinceResize&&(lc.hasAnimatedSinceResize=!1,this.nodes.forEach(sx))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&f&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||f.getDefaultTransition()||VL,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=f.getProps(),v=!this.targetLayout||!FM(this.targetLayout,g)||p,y=!u&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||u&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const M={...dm(S,"layout"),onPlay:m,onComplete:h};(f.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else u||sx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(OL),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&OM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(rx);return}this.isUpdating||this.nodes.forEach(NL),this.isUpdating=!1,this.nodes.forEach(IL),this.nodes.forEach(CL),this.nodes.forEach(RL),this.clearAllSnapshots();const a=wi.now();$t.delta=Qi(0,1e3/60,a-$t.timestamp),$t.timestamp=a,$t.isProcessing=!0,Rf.update.process($t),Rf.preRender.process($t),Rf.render.process($t),$t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(LL),this.sharedNodes.forEach(kL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Nt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!UM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&(a||Xr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),HL(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Nt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(GL))){const{scroll:f}=this.root;f&&($s(l.x,f.offset.x),$s(l.y,f.offset.y))}return l}removeElementScroll(o){var a;const l=Nt();if(On(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:d,options:u}=f;f!==this.root&&d&&u.layoutScroll&&(d.wasRoot&&On(l,o),$s(l.x,d.offset.x),$s(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Nt();On(l,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&qs(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Xr(f.latestValues)&&qs(l,f.latestValues)}return Xr(this.latestValues)&&qs(l,this.latestValues),l}removeTransform(o){const a=Nt();On(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Xr(c.latestValues))continue;Bh(c.latestValues)&&c.updateSnapshot();const f=Nt(),d=c.measurePageBox();On(f,d),Zv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return Xr(this.latestValues)&&Zv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:u}=this.options;if(!(!this.layout||!(d||u))){if(this.resolvedRelativeTargetAt=$t.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Nt(),this.relativeTargetOrigin=Nt(),ua(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),On(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Nt(),this.targetWithTransforms=Nt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):On(this.target,this.layout.layoutBox),RM(this.target,this.targetDelta)):On(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Nt(),this.relativeTargetOrigin=Nt(),ua(this.relativeTargetOrigin,this.target,p.target),On(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zo&&jr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bh(this.parent.latestValues)||CM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===$t.timestamp&&(c=!1),c)return;const{layout:f,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||d))return;On(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,p=this.treeScale.y;tL(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Nt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($v(this.prevProjectionDelta.x,this.projectionDelta.x),$v(this.prevProjectionDelta.y,this.projectionDelta.y)),ca(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==p||!nx(this.projectionDelta.x,this.prevProjectionDelta.x)||!nx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Zo&&jr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ys(),this.projectionDelta=Ys(),this.projectionDeltaWithTransform=Ys()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},f={...this.latestValues},d=Ys();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const u=Nt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,S=p!==g,m=this.getStack(),h=!m||m.members.length<=1,v=!!(S&&!h&&this.options.crossfade===!0&&!this.path.some(zL));this.animationProgress=0;let y;this.mixTargetDelta=M=>{const E=M/1e3;ox(d.x,o.x,E),ox(d.y,o.y,E),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ua(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),BL(this.relativeTarget,this.relativeTargetOrigin,u,E),y&&EL(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Nt()),On(y,this.relativeTarget)),S&&(this.animationValues=f,vL(f,c,this.latestValues,E,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=vt.update(()=>{lc.hasAnimatedSinceResize=!0,this.currentAnimation=fL(0,ix,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ix),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&BM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Nt();const d=Ln(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const u=Ln(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}On(a,l),qs(a,f),ca(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new TL),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Bf("z",o,c,this.animationValues);for(let f=0;f<kf.length;f++)Bf(`rotate${kf[f]}`,o,c,this.animationValues),Bf(`skew${kf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return AL;const c={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=oc(o==null?void 0:o.pointerEvents)||"",c.transform=f?f(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=oc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Xr(this.latestValues)&&(S.transform=f?f({},""):"none",this.hasProjected=!1),S}const u=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=wL(this.projectionDeltaWithTransform,this.treeScale,u),f&&(c.transform=f(u,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=u.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:c.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const S in zc){if(u[S]===void 0)continue;const{correct:m,applyTo:h}=zc[S],v=c.transform==="none"?u[S]:m(u[S],d);if(h){const y=h.length;for(let M=0;M<y;M++)c[h[M]]=v}else c[S]=v}return this.options.layoutId&&(c.pointerEvents=d===this?oc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(rx),this.root.sharedNodes.clear()}}}function CL(t){t.updateLayout()}function RL(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?kn(d=>{const u=o?n.measuredBox[d]:n.layoutBox[d],p=Ln(u);u.min=i[d].min,u.max=u.min+p}):BM(s,n.layoutBox,i)&&kn(d=>{const u=o?n.measuredBox[d]:n.layoutBox[d],p=Ln(i[d]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ys();ca(a,i,n.layoutBox);const l=Ys();o?ca(l,t.applyTransform(r,!0),n.measuredBox):ca(l,i,n.layoutBox);const c=!UM(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:p}=d;if(u&&p){const g=Nt();ua(g,n.layoutBox,u.layoutBox);const S=Nt();ua(S,i,p.layoutBox),FM(g,S)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function PL(t){Zo&&jr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function DL(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function LL(t){t.clearSnapshot()}function rx(t){t.clearMeasurements()}function NL(t){t.isLayoutDirty=!1}function IL(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function sx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function UL(t){t.resolveTargetDelta()}function FL(t){t.calcProjection()}function OL(t){t.resetSkewAndRotation()}function kL(t){t.removeLeadSnapshot()}function ox(t,e,n){t.translate=Mt(e.translate,0,n),t.scale=Mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function ax(t,e,n,i){t.min=Mt(e.min,n.min,i),t.max=Mt(e.max,n.max,i)}function BL(t,e,n,i){ax(t.x,e.x,n.x,i),ax(t.y,e.y,n.y,i)}function zL(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const VL={duration:.45,ease:[.4,0,.1,1]},lx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cx=lx("applewebkit/")&&!lx("chrome/")?Math.round:Pn;function ux(t){t.min=cx(t.min),t.max=cx(t.max)}function HL(t){ux(t.x),ux(t.y)}function BM(t,e,n){return t==="position"||t==="preserve-aspect"&&!XD(tx(e),tx(n),.2)}function GL(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const WL=kM({attachResizeListener:(t,e)=>Ia(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zf={current:void 0},zM=kM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!zf.current){const t=new WL({});t.mount(window),t.setOptions({layoutScroll:!0}),zf.current=t}return zf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),XL={pan:{Feature:aL},drag:{Feature:oL,ProjectionNode:zM,MeasureLayout:LM}};function fx(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&vt.postRender(()=>s(e,Ya(e)))}class jL extends Ur{mount(){const{current:e}=this.node;e&&(this.unmount=X2(e,n=>(fx(this.node,n,"Start"),i=>fx(this.node,i,"End"))))}unmount(){}}class YL extends Ur{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ja(Ia(this.node.current,"focus",()=>this.onFocus()),Ia(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function dx(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&vt.postRender(()=>s(e,Ya(e)))}class $L extends Ur{mount(){const{current:e}=this.node;e&&(this.unmount=q2(e,n=>(dx(this.node,n,"Start"),(i,{success:r})=>dx(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vh=new WeakMap,Vf=new WeakMap,qL=t=>{const e=Vh.get(t.target);e&&e(t)},KL=t=>{t.forEach(qL)};function ZL({root:t,...e}){const n=t||document;Vf.has(n)||Vf.set(n,{});const i=Vf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(KL,{root:t,...e})),i[r]}function QL(t,e,n){const i=ZL(e);return Vh.set(t,n),i.observe(t),()=>{Vh.delete(t),i.unobserve(t)}}const JL={some:0,all:1};class eN extends Ur{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:JL[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),u=c?f:d;u&&u(l)};return QL(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(tN(e,n))&&this.startObserver()}unmount(){}}function tN({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const nN={inView:{Feature:eN},tap:{Feature:$L},focus:{Feature:YL},hover:{Feature:jL}},iN={layout:{ProjectionNode:zM,MeasureLayout:LM}},Hh={current:null},VM={current:!1};function rN(){if(VM.current=!0,!!Zp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Hh.current=t.matches;t.addListener(e),e()}else Hh.current=!1}const sN=[...dM,rn,Dr],oN=t=>sN.find(fM(t)),hx=new WeakMap;function aN(t,e,n){for(const i in e){const r=e[i],s=n[i];if(ln(r))t.addValue(i,r);else if(ln(s))t.addValue(i,La(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,La(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const px=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class lN{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=wi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,vt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:f}=o;this.onUpdate=f,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=vu(n),this.isVariantNode=yS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const g=u[p];l[p]!==void 0&&ln(g)&&g.set(l[p],!1)}}mount(e){this.current=e,hx.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),VM.current||rN(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hx.delete(this.current),this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ms.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&vt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in xo){const n=xo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Nt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<px.length;i++){const r=px[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=aN(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=La(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(cM(r)||eM(r))?r=parseFloat(r):!oN(r)&&Dr.test(n)&&(r=oM(e,n)),this.setBaseTarget(e,ln(r)?r.get():r)),ln(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=rm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ln(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new xm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class HM extends lN{constructor(){super(...arguments),this.KeyframeResolver=hM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ln(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function cN(t){return window.getComputedStyle(t)}class uN extends HM{constructor(){super(...arguments),this.type="html",this.renderInstance=RS}readValueFromInstance(e,n){if(ms.has(n)){const i=Em(n);return i&&i.default||0}else{const i=cN(e),r=(AS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return PM(e,n)}build(e,n,i){am(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return fm(e,n,i)}}class fN extends HM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Nt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ms.has(n)){const i=Em(n);return i&&i.default||0}return n=PS.has(n)?n:tm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return NS(e,n,i)}build(e,n,i){lm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){DS(e,n,i,r)}mount(e){this.isSVGTag=um(e.tagName),super.mount(e)}}const dN=(t,e)=>im(t)?new fN(e):new uN(e,{allowProjection:t!==ae.Fragment}),hN=k2({...FD,...nN,...XL,...iN},dN),on=JP(hN);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),xt=(t,e)=>{const n=ae.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>ae.createElement("svg",{ref:f,...pN,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${mN(t)}`,a].join(" "),...c},[...e.map(([d,u])=>ae.createElement(d,u)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=xt("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=xt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=xt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=xt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=xt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=xt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=xt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=xt("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=xt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=xt("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=xt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=xt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=xt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=xt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=xt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=xt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=xt("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=xt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=xt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=xt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=xt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=xt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),NN=({onComplete:t})=>{const[e,n]=ae.useState("initial"),i=ae.useRef(null);ae.useEffect(()=>{const s=setTimeout(()=>n("drafting"),400),o=setTimeout(()=>n("gathering"),2500),a=setTimeout(()=>n("exploded"),4200),l=setTimeout(()=>n("revealed"),5400),c=setTimeout(()=>{n("done"),t()},7400);return()=>{clearTimeout(s),clearTimeout(o),clearTimeout(a),clearTimeout(l),clearTimeout(c)}},[t]),ae.useEffect(()=>{const s=i.current;if(!s)return;const o=s.getContext("2d");if(!o)return;let a,l=s.width=window.innerWidth,c=s.height=window.innerHeight;const f=()=>{s&&(l=s.width=window.innerWidth,c=s.height=window.innerHeight)};window.addEventListener("resize",f);const d=Array.from({length:35},()=>({angle:Math.random()*Math.PI*2,speed:.015+Math.random()*.03,radiusX:100+Math.random()*160,radiusY:40+Math.random()*90,rotation:Math.random()*Math.PI,size:1.5+Math.random()*2})),u=()=>{o.clearRect(0,0,l,c);const p=l/2,g=c/2;d.forEach(S=>{S.angle+=S.speed;const m=Math.cos(S.rotation),h=Math.sin(S.rotation),v=Math.cos(S.angle)*S.radiusX,y=Math.sin(S.angle)*S.radiusY,M=p+(v*m-y*h),E=g+(v*h+y*m);o.beginPath(),o.arc(M,E,S.size,0,Math.PI*2),o.fillStyle="rgba(255, 255, 255, 0.6)",o.fill()}),a=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("resize",f),cancelAnimationFrame(a)}},[]);const r=()=>{n("done"),t()};return e==="done"?null:A.jsx(XP,{children:A.jsxs(on.div,{exit:{opacity:0,transition:{duration:.9,ease:"easeInOut"}},className:"fixed inset-0 z-50 bg-[#020203] flex flex-col items-center justify-center overflow-hidden select-none font-mono",children:[A.jsx("canvas",{ref:i,className:"absolute inset-0 pointer-events-none z-0 opacity-40"}),A.jsxs("button",{onClick:r,className:"absolute top-6 right-6 z-50 flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-950/90 border border-white/20 text-[10px] font-mono text-zinc-300 hover:text-white hover:border-white transition-all duration-300 shadow-2xl",children:[A.jsx("span",{children:"SKIP INTRO"}),A.jsx(RN,{className:"w-3 h-3 ml-1 fill-current"})]}),(e==="drafting"||e==="gathering")&&A.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center space-y-6",children:[A.jsx("div",{className:"relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] flex items-center justify-center",children:A.jsxs("svg",{viewBox:"0 0 400 400",className:"w-full h-full",children:[A.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1",strokeDasharray:"4 4"}),A.jsx("circle",{cx:"200",cy:"200",r:"120",fill:"none",stroke:"rgba(255, 255, 255, 0.06)",strokeWidth:"1"}),A.jsx("circle",{cx:"200",cy:"200",r:"60",fill:"none",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1",strokeDasharray:"2 4"}),A.jsx("line",{x1:"0",y1:"200",x2:"400",y2:"200",stroke:"rgba(255, 255, 255, 0.12)",strokeWidth:"1"}),A.jsx("line",{x1:"200",y1:"0",x2:"200",y2:"400",stroke:"rgba(255, 255, 255, 0.12)",strokeWidth:"1"}),A.jsx("line",{x1:"0",y1:"90",x2:"400",y2:"90",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"0.8",strokeDasharray:"3 3"}),A.jsx("line",{x1:"0",y1:"310",x2:"400",y2:"310",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"0.8",strokeDasharray:"3 3"}),A.jsx("line",{x1:"0",y1:"0",x2:"400",y2:"400",stroke:"rgba(255, 255, 255, 0.09)",strokeWidth:"0.8"}),A.jsx("line",{x1:"400",y1:"0",x2:"0",y2:"400",stroke:"rgba(255, 255, 255, 0.09)",strokeWidth:"0.8"}),A.jsx("line",{x1:"60",y1:"0",x2:"60",y2:"400",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"0.8"}),A.jsx("line",{x1:"340",y1:"0",x2:"340",y2:"400",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"0.8"}),A.jsx(on.path,{d:"M 60 310 L 60 90 L 200 230 L 340 90 L 340 310",fill:"none",stroke:"#ffffff",strokeWidth:"3.5",strokeLinecap:"square",strokeLinejoin:"miter",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.8,ease:[.16,1,.3,1]}}),A.jsx(on.path,{d:"M 90 310 L 90 145 L 200 260 L 310 145 L 310 310",fill:"none",stroke:"rgba(255, 255, 255, 0.85)",strokeWidth:"1.8",strokeDasharray:"6 3",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:2,delay:.2,ease:[.16,1,.3,1]}}),[[60,90],[200,230],[340,90],[60,310],[340,310],[90,145],[310,145],[200,260],[90,310],[310,310]].map(([s,o],a)=>A.jsxs("g",{children:[A.jsx("circle",{cx:s,cy:o,r:"3",fill:"#000000",stroke:"#ffffff",strokeWidth:"1.5"}),A.jsx("line",{x1:s-6,y1:o,x2:s+6,y2:o,stroke:"rgba(255,255,255,0.6)",strokeWidth:"0.8"}),A.jsx("line",{x1:s,y1:o-6,x2:s,y2:o+6,stroke:"rgba(255,255,255,0.6)",strokeWidth:"0.8"})]},a))]})}),A.jsxs("p",{className:"text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold flex items-center space-x-2",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-white animate-pulse inline-block"}),A.jsx("span",{children:"DRAFTING SKELETON 'M' ARCHITECTURE"})]})]}),e==="exploded"&&A.jsx("div",{className:"relative z-10 flex items-center justify-center w-full h-full",children:A.jsx(on.div,{initial:{scale:0,opacity:1},animate:{scale:9,opacity:0},transition:{duration:1.4,ease:"easeOut"},className:"absolute w-64 h-64 rounded-full border-2 border-white bg-gradient-to-r from-white/40 via-zinc-400/30 to-violet-500/40 blur-2xl pointer-events-none"})}),e==="revealed"&&A.jsxs(on.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.8,ease:"easeOut"},className:"text-center space-y-4 max-w-xl px-6 relative z-10",children:[A.jsx("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-white/20 text-[10px] font-mono text-zinc-300 shadow-xl",children:A.jsx("span",{children:"SYSTEM ARCHITECTURE READY"})}),A.jsx("h1",{className:"text-4xl sm:text-7xl font-black tracking-tight text-white uppercase font-sans",children:"MANUEL GOMES"}),A.jsx("p",{className:"text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold",children:"AI DEVELOPER • CREATIVE TECHNOLOGIST • BUILDER"})]}),A.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 w-56 space-y-2 text-center z-10",children:[A.jsx("div",{className:"h-1 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800",children:A.jsx(on.div,{initial:{width:"0%"},animate:{width:"100%"},transition:{duration:7.2,ease:"linear"},className:"h-full bg-white"})}),A.jsx("span",{className:"text-[9px] font-mono uppercase tracking-widest text-zinc-500",children:"BLUEPRINT 'M' DRAFTING COMPLETE"})]})]})})},IN=()=>{const[t,e]=ae.useState("home"),[n,i]=ae.useState(!1);ae.useEffect(()=>{const o=()=>{const a=["home","about","skills","projects","education","contact"],l=window.scrollY+200;for(const c of a){const f=document.getElementById(c);if(f){const d=f.offsetTop,u=f.offsetHeight;if(l>=d&&l<d+u){e(c);break}}}};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]);const r=[{id:"home",label:"ROOT"},{id:"about",label:"ABOUT"},{id:"skills",label:"STACK"},{id:"projects",label:"PROJECTS"},{id:"education",label:"ACADEMICS"},{id:"contact",label:"CONTACT"}],s=o=>{i(!1);const a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth",block:"start"})};return A.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 p-4 sm:p-6 pointer-events-none font-mono",children:[A.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between pointer-events-auto",children:[A.jsxs("a",{href:"#home",onClick:o=>{o.preventDefault(),s("home")},className:"group flex items-center space-x-3 px-4 py-2 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl shadow-2xl hover:border-emerald-500/60 transition-all duration-300 transform-gpu hover:scale-105",children:[A.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-black text-xs shadow-md",children:"</>"}),A.jsxs("div",{className:"hidden sm:block text-left",children:[A.jsx("span",{className:"block text-xs font-black tracking-widest text-white uppercase font-sans",children:"MANUEL GOMES"}),A.jsx("span",{className:"block text-[9px] font-mono text-emerald-400",children:"SYS::DEVELOPER_MATRIX"})]})]}),A.jsx("nav",{className:"hidden lg:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl shadow-2xl",children:r.map(o=>{const a=t===o.id;return A.jsxs("button",{onClick:()=>s(o.id),className:`relative px-4 py-2 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${a?"text-emerald-400 font-bold bg-zinc-900 border border-emerald-500/50 shadow-md":"text-zinc-400 hover:text-white hover:bg-zinc-900/60"}`,children:[a&&A.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse"}),"./",o.label]},o.id)})}),A.jsxs("div",{className:"flex items-center space-x-3",children:[A.jsxs("button",{onClick:()=>s("contact"),className:"hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-zinc-950 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-xl transform-gpu hover:scale-105",children:[A.jsx(Gh,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:"LET'S TALK"})]}),A.jsx("button",{onClick:()=>i(!n),"aria-label":"Toggle menu",className:"lg:hidden p-2.5 rounded-2xl bg-zinc-950/90 border border-zinc-800 text-zinc-300 hover:text-white backdrop-blur-xl shadow-xl",children:n?A.jsx(LN,{className:"w-5 h-5"}):A.jsx(CN,{className:"w-5 h-5"})})]})]}),n&&A.jsxs("div",{className:"lg:hidden fixed inset-x-4 top-20 bg-zinc-950/95 border border-zinc-800 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl flex flex-col space-y-3 pointer-events-auto font-mono",children:[A.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-zinc-800 text-[10px] text-emerald-400 uppercase tracking-widest",children:[A.jsx("span",{children:"$ ./system_menu.sh"}),A.jsx(yN,{className:"w-4 h-4 text-emerald-400"})]}),r.map(o=>A.jsxs("button",{onClick:()=>s(o.id),className:`w-full py-3 px-4 rounded-xl text-xs font-mono tracking-widest uppercase text-left flex items-center justify-between transition-colors ${t===o.id?"bg-zinc-900 text-emerald-400 font-bold border border-emerald-500/50":"text-zinc-400 hover:text-white hover:bg-zinc-900"}`,children:[A.jsxs("span",{children:["./",o.label]}),A.jsxs("span",{className:"text-zinc-600 text-xs font-mono",children:["0",r.indexOf(o)+1]})]},o.id)),A.jsxs("button",{onClick:()=>s("contact"),className:"mt-3 w-full py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-xl shadow-lg flex items-center justify-center space-x-2 font-mono",children:[A.jsx(Gh,{className:"w-4 h-4"}),A.jsx("span",{children:"EXECUTE CONTACT"})]})]})]})},UN=()=>{const[t,e]=ae.useState({x:-100,y:-100}),[n,i]=ae.useState(!1),[r,s]=ae.useState(!1);return ae.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;const o=a=>{e({x:a.clientX,y:a.clientY});const l=a.target;l&&(l.tagName==="A"||l.tagName==="BUTTON"||l.closest("a")||l.closest("button")||l.getAttribute("role")==="button")?s(!0):s(!1)};return window.addEventListener("mousemove",o,{passive:!0}),()=>window.removeEventListener("mousemove",o)},[]),typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white transition-transform duration-100 ease-out transform-gpu hidden md:block",style:{width:"6px",height:"6px",transform:`translate3d(${t.x-3}px, ${t.y-3}px, 0) scale(${r?1.8:1})`}}),A.jsx("div",{className:`pointer-events-none fixed top-0 left-0 z-50 rounded-full border transition-all duration-300 ease-out transform-gpu hidden md:block ${r?"border-violet-400 bg-violet-500/10 scale-125":"border-white/30"}`,style:{width:"36px",height:"36px",transform:`translate3d(${t.x-18}px, ${t.y-18}px, 0)`}})]})},FN=""+new URL("manuel-main-portrait-DopKHdFB.jpg",import.meta.url).href,ON=""+new URL("manuel-about-portrait-Df0QYLLj.jpg",import.meta.url).href,kN=""+new URL("scholarmatch-screenshot-Ba3TawtR.png",import.meta.url).href,BN=""+new URL("raw-fitness-screenshot-HQqtRShx.png",import.meta.url).href,Bt={name:"MANUEL GOMES",role:"AI Developer & Builder",status:"Currently building & learning",heroTagline:"BCA (Hons.) student specializing in Data Science & Artificial Intelligence, building modern web experiences and AI-powered products.",aboutHeading:"More than just code.",aboutBio:"I'm Manuel, a BCA (Hons.) student specializing in Data Science & Artificial Intelligence. I enjoy building useful applications, experimenting with AI, designing modern interfaces, and turning ideas into real products.",aboutTags:["AI","Web Development","Data Science","UI/UX","Builder"],images:{hero:FN,about:ON},education:{institution:"Techno India University",degree:"Bachelor of Computer Applications (Honours)",specialization:"Data Science & Artificial Intelligence",status:"Currently Pursuing"},skills:[{category:"Development",items:["HTML","CSS","JavaScript","React","TypeScript"]},{category:"AI & Data",items:["Gemini AI","Generative AI","Data Science","Machine Learning"]},{category:"Programming",items:["Python","Java","SQL"]},{category:"Tools",items:["Git","GitHub","VS Code"]}],projects:[{id:"scholarmatch-ai",title:"ScholarMatch AI",tagline:"AI-powered opportunity eligibility analyzer",description:"An application that analyzes student profiles against scholarships, internships, and competitions and provides eligibility verdicts, explanations, match percentages, and improvement recommendations.",tech:["React","TypeScript","Tailwind CSS","Gemini AI"],githubUrl:"https://github.com/manuelgomes2006/scholarmatch",liveUrl:"https://manuelgomes2006.github.io/scholarmatch/",image:kN},{id:"raw-fitness",title:"RAW FITNESS",tagline:"Modern Gym Website",description:"A responsive gym website designed to give a local fitness business a strong digital presence, showcasing its brand, facilities, training offerings, and gym experience through a bold, fitness-focused interface.",tech:["HTML","CSS","JavaScript"],githubUrl:"https://github.com/manuelgomes2006/Raw-Fitness",liveUrl:"https://manuelgomes2006.github.io/Raw-Fitness/",image:BN}],contact:{heading:"Let's build something.",text:"Have an idea, project, or opportunity? Let's talk.",email:"manuelgomes062006@gmail.com",socials:{github:"https://github.com/manuelgomes2006",linkedin:"https://www.linkedin.com/in/manuel-gomes-638418388/",instagram:"https://www.instagram.com/manuel.undercover/"}}},Pm=({children:t,className:e="",maxTilt:n=8})=>{const i=ae.useRef(null),[r,s]=ae.useState({x:0,y:0}),[o,a]=ae.useState(!1),l=d=>{if(!i.current)return;const u=i.current.getBoundingClientRect(),p=d.clientX-u.left,g=d.clientY-u.top,S=u.width/2,m=u.height/2,h=(g-m)/m*-n,v=(p-S)/S*n;s({x:h,y:v})},c=()=>{a(!0)},f=()=>{a(!1),s({x:0,y:0})};return A.jsx("div",{ref:i,onMouseMove:l,onMouseEnter:c,onMouseLeave:f,className:`transition-transform duration-200 ease-out transform-gpu ${e}`,style:{transform:o?`perspective(1000px) rotateX(${r.x}deg) rotateY(${r.y}deg) scale3d(1.01, 1.01, 1.01)`:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},children:t})},zN=()=>{const t=ae.useRef(null);return ae.useEffect(()=>{var S,m;const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=((S=e.parentElement)==null?void 0:S.clientWidth)||window.innerWidth,s=e.height=((m=e.parentElement)==null?void 0:m.clientHeight)||450;const o=()=>{!e||!e.parentElement||(r=e.width=e.parentElement.clientWidth,s=e.height=e.parentElement.clientHeight)};window.addEventListener("resize",o);const a=65,l=[];for(let h=0;h<a;h++)l.push({x:(Math.random()-.5)*400,y:(Math.random()-.5)*400,z:(Math.random()-.5)*400,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,vz:(Math.random()-.5)*.4});let c=0,f=0;const d=h=>{const v=e.getBoundingClientRect();c=(h.clientX-v.left-r/2)*.05,f=(h.clientY-v.top-s/2)*.05};window.addEventListener("mousemove",d);let u=0,p=0;const g=()=>{n.clearRect(0,0,r,s),u+=.002,p+=.003;const h=Math.cos(u+f*.01),v=Math.sin(u+f*.01),y=Math.cos(p+c*.01),M=Math.sin(p+c*.01),E=[];for(let T=0;T<l.length;T++){const b=l[T];b.x+=b.vx,b.y+=b.vy,b.z+=b.vz,Math.abs(b.x)>200&&(b.vx*=-1),Math.abs(b.y)>200&&(b.vy*=-1),Math.abs(b.z)>200&&(b.vz*=-1);let x=b.x*y-b.z*M,C=b.z*y+b.x*M,L=b.y*h-C*v,N=C*h+b.y*v;const B=300,K=B/(B+N+350),te=x*K+r/2,V=L*K+s/2;E.push({x:te,y:V,z:K});const Z=Math.max(1,2.5*K),H=Math.min(1,Math.max(.1,(N+200)/400));n.beginPath(),n.arc(te,V,Z,0,Math.PI*2),n.fillStyle=`rgba(255, 255, 255, ${H*.6})`,n.fill()}n.lineWidth=.5;for(let T=0;T<E.length;T++)for(let b=T+1;b<E.length;b++){const x=E[T].x-E[b].x,C=E[T].y-E[b].y,L=Math.sqrt(x*x+C*C);if(L<90){const N=(1-L/90)*.25;n.beginPath(),n.moveTo(E[T].x,E[T].y),n.lineTo(E[b].x,E[b].y),n.strokeStyle=`rgba(255, 255, 255, ${N})`,n.stroke()}}i=requestAnimationFrame(g)};return g(),()=>{window.removeEventListener("resize",o),window.removeEventListener("mousemove",d),cancelAnimationFrame(i)}},[]),A.jsx("canvas",{ref:t,className:"w-full h-full absolute inset-0 pointer-events-none opacity-40"})},VN=()=>A.jsxs("section",{id:"home",className:"relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden scroll-mt-24",children:[A.jsx(zN,{}),A.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-zinc-700/15 via-zinc-500/10 to-transparent blur-[140px] rounded-full pointer-events-none"}),A.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"}),A.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10",children:[A.jsxs(on.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1]},className:"lg:col-span-7 space-y-6 text-left",children:[A.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-inner text-[11px] font-mono text-zinc-300",children:[A.jsxs("span",{className:"relative flex h-2 w-2",children:[A.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),A.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),A.jsx("span",{className:"tracking-wide",children:Bt.status})]}),A.jsxs("div",{className:"space-y-2",children:[A.jsx("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans",children:"MANUEL GOMES"}),A.jsxs("p",{className:"text-xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600 font-sans uppercase flex items-center",children:[A.jsx("span",{children:Bt.role}),A.jsx(Rm,{className:"w-5 h-5 ml-2 text-zinc-400 inline"})]})]}),A.jsx("p",{className:"text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-xl",children:Bt.heroTagline}),A.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5",children:[A.jsxs("a",{href:"#projects",className:"group px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-xl text-center flex items-center justify-center transform-gpu hover:scale-[1.03]",children:[A.jsx("span",{children:"View Featured Projects"}),A.jsx(mx,{className:"w-3.5 h-3.5 ml-2 group-hover:translate-y-0.5 transition-transform"})]}),A.jsxs("a",{href:"#contact",className:"group px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-200 hover:text-white bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all duration-300 text-center flex items-center justify-center transform-gpu hover:scale-[1.03]",children:[A.jsx("span",{children:"Let's Connect"}),A.jsx(vN,{className:"w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]}),A.jsxs("div",{className:"pt-4 flex items-center space-x-4",children:[A.jsx("a",{href:Bt.contact.socials.github,target:"_blank",rel:"noreferrer","aria-label":"GitHub",className:"p-3 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-md",children:A.jsx(Cm,{className:"w-4 h-4"})}),A.jsx("a",{href:Bt.contact.socials.linkedin,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",className:"p-3 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-md",children:A.jsx(XM,{className:"w-4 h-4"})}),A.jsx("a",{href:Bt.contact.socials.instagram,target:"_blank",rel:"noreferrer","aria-label":"Instagram",className:"p-3 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-md",children:A.jsx(WM,{className:"w-4 h-4"})})]})]}),A.jsx(on.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.9,delay:.2,ease:[.16,1,.3,1]},className:"lg:col-span-5 flex justify-center lg:justify-end",children:A.jsx(Pm,{className:"max-w-sm w-full",children:A.jsxs("div",{className:"relative group",children:[A.jsx("div",{className:"absolute -inset-1 bg-gradient-to-tr from-zinc-600 via-zinc-400 to-zinc-800 rounded-3xl opacity-25 blur-2xl transition-all duration-500 pointer-events-none group-hover:opacity-45"}),A.jsxs("div",{className:"relative rounded-3xl overflow-hidden bg-zinc-900/90 border border-zinc-800/90 shadow-2xl",children:[A.jsx("img",{src:Bt.images.hero,alt:"Manuel Gomes — Portrait",className:"w-full h-[410px] sm:h-[490px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none"}),A.jsx("div",{className:"absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none",children:A.jsxs("div",{children:[A.jsx("p",{className:"text-xs font-black uppercase tracking-widest text-white",children:"MANUEL GOMES"}),A.jsx("p",{className:"text-[10px] font-mono text-zinc-400 mt-0.5",children:"BCA (HONS.) DATA SCIENCE & AI"})]})})]})]})})})]}),A.jsxs(on.a,{href:"#about",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-zinc-500 hover:text-zinc-300 transition-colors",children:[A.jsx("span",{className:"text-[9px] font-mono uppercase tracking-widest mb-1",children:"Scroll"}),A.jsx(mx,{className:"w-3.5 h-3.5 animate-bounce"})]})]}),yu=({children:t,className:e=""})=>A.jsxs("div",{className:`relative rounded-3xl bg-zinc-950/80 border border-white/15 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden group ${e}`,children:[A.jsx("div",{className:"absolute top-2 left-2 text-[9px] font-mono text-white/40 pointer-events-none",children:"+"}),A.jsx("div",{className:"absolute top-2 right-2 text-[9px] font-mono text-white/40 pointer-events-none",children:"+"}),A.jsx("div",{className:"absolute bottom-2 left-2 text-[9px] font-mono text-white/40 pointer-events-none",children:"+"}),A.jsx("div",{className:"absolute bottom-2 right-2 text-[9px] font-mono text-white/40 pointer-events-none",children:"+"}),A.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50 pointer-events-none"}),A.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50 pointer-events-none"}),A.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50 pointer-events-none"}),A.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50 pointer-events-none"}),A.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"}),A.jsx("div",{className:"relative z-10",children:t})]}),HN=()=>A.jsx("section",{id:"about",className:"py-28 relative scroll-mt-24",children:A.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[A.jsx(on.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,ease:[.16,1,.3,1]},className:"lg:col-span-5 relative",children:A.jsx(Pm,{className:"max-w-sm mx-auto lg:max-w-none",children:A.jsxs("div",{className:"relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl group",children:[A.jsx("img",{src:Bt.images.about,alt:"Manuel Gomes — Origin",className:"w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"}),A.jsxs("div",{className:"absolute top-4 left-4 z-10 flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md text-[10px] font-mono text-zinc-300",children:[A.jsx(TN,{className:"w-3 h-3 text-violet-400"}),A.jsx("span",{children:"ORIGIN PLANET: COORDS 22.57°N"})]})]})})}),A.jsx(on.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.1,ease:[.16,1,.3,1]},className:"lg:col-span-7",children:A.jsx(yu,{children:A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-violet-400",children:"// ORIGIN — WHERE IT ALL STARTED"}),A.jsx("h2",{className:"text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1",children:Bt.aboutHeading})]}),A.jsx("p",{className:"text-zinc-300 text-sm sm:text-base leading-relaxed font-normal",children:Bt.aboutBio}),A.jsxs("div",{className:"pt-2 space-y-3",children:[A.jsx("p",{className:"text-xs font-mono uppercase tracking-widest text-zinc-500",children:"Core Capabilities"}),A.jsx("div",{className:"flex flex-wrap gap-2",children:Bt.aboutTags.map(t=>A.jsxs("span",{className:"px-3.5 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-violet-500/50 hover:text-white transition-all duration-300 transform-gpu hover:scale-105",children:["`",t,"`"]},t))})]})]})})})]})})}),GN=()=>{const{education:t}=Bt;return A.jsx("section",{id:"education",className:"py-24 relative scroll-mt-24",children:A.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[A.jsxs("div",{className:"mb-10",children:[A.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-violet-400",children:"// JOURNEY — ORBITAL TIMELINE"}),A.jsx("h2",{className:"text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1",children:"Academic Orbit."})]}),A.jsx(on.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,ease:[.16,1,.3,1]},children:A.jsx(yu,{children:A.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-6",children:[A.jsxs("div",{className:"flex items-start space-x-4",children:[A.jsx("div",{className:"p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-violet-400 shrink-0 shadow-lg",children:A.jsx(wN,{className:"w-7 h-7"})}),A.jsxs("div",{className:"space-y-1.5",children:[A.jsxs("div",{className:"flex items-center space-x-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest",children:[A.jsx(SN,{className:"w-3 h-3 text-emerald-400 animate-spin"}),A.jsx("span",{children:"MILESTONE: TECHNO INDIA UNIVERSITY"})]}),A.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:t.institution}),A.jsx("p",{className:"text-sm font-medium text-zinc-300",children:t.degree}),A.jsxs("p",{className:"text-xs font-mono text-zinc-400",children:["Specialization: ",t.specialization]})]})]}),A.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono self-start sm:self-auto shrink-0 shadow-lg",children:[A.jsxs("span",{className:"relative flex h-2 w-2",children:[A.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),A.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),A.jsx("span",{children:t.status})]})]})})})]})})},WN=()=>{const t=e=>{switch(e){case"Development":return A.jsx(gx,{className:"w-4 h-4 text-violet-400"});case"AI & Data":return A.jsx(GM,{className:"w-4 h-4 text-blue-400"});case"Programming":return A.jsx(Gh,{className:"w-4 h-4 text-emerald-400"});case"Tools":return A.jsx(DN,{className:"w-4 h-4 text-sky-400"});default:return A.jsx(gx,{className:"w-4 h-4 text-violet-400"})}};return A.jsx("section",{id:"skills",className:"py-28 relative scroll-mt-24",children:A.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[A.jsxs("div",{className:"mb-14",children:[A.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-violet-400",children:"// CONSTELLATION — 3D STAR MAP"}),A.jsx("h2",{className:"text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1",children:"Tech Constellation."}),A.jsx("p",{className:"text-zinc-400 text-sm mt-2 max-w-xl",children:"An interconnected star map of frameworks, languages, and AI systems I engineer with."})]}),A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:Bt.skills.map((e,n)=>A.jsx(on.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:n*.1,ease:[.16,1,.3,1]},children:A.jsxs(yu,{className:"h-full p-6",children:[A.jsxs("div",{className:"flex items-center space-x-2.5 pb-4 border-b border-white/10",children:[A.jsx("div",{className:"p-2 rounded-xl bg-zinc-900 border border-zinc-800",children:t(e.category)}),A.jsx("h3",{className:"text-base font-bold text-white tracking-tight font-sans",children:e.category})]}),A.jsx("div",{className:"pt-4 flex flex-wrap gap-2",children:e.items.map(i=>A.jsxs("span",{className:"px-2.5 py-1.5 rounded-lg bg-zinc-950/90 border border-zinc-800/80 text-xs font-mono text-zinc-300 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-105",children:[A.jsx(Rm,{className:"w-2.5 h-2.5 inline mr-1 text-violet-400"}),i]},i))})]})},e.category))})]})})},XN=()=>A.jsx("section",{id:"projects",className:"py-24 bg-[#09090b] border-t border-zinc-900 relative scroll-mt-24",children:A.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[A.jsxs("div",{className:"mb-14",children:[A.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-zinc-500",children:"// FEATURED PROJECTS"}),A.jsx("h2",{className:"text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1",children:"What I Have Built."}),A.jsx("p",{className:"text-zinc-400 text-sm mt-2 max-w-xl",children:"Real applications showcasing my capabilities in AI integration, full-stack web development, and client solutions."})]}),A.jsx("div",{className:"space-y-12",children:Bt.projects.map((t,e)=>A.jsx(Pm,{maxTilt:5,children:A.jsxs(on.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:e*.15,ease:[.16,1,.3,1]},className:"rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-black/90 border border-zinc-800/80 p-6 sm:p-10 backdrop-blur-2xl hover:border-zinc-700/90 transition-all duration-500 shadow-2xl overflow-hidden group relative",children:[A.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500"}),A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10",children:[A.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[A.jsxs("div",{className:"flex items-center space-x-3",children:[A.jsx("div",{className:"p-2.5 rounded-xl bg-zinc-800/90 border border-zinc-700/80 text-zinc-200 shadow-md",children:t.id==="scholarmatch-ai"?A.jsx(GM,{className:"w-5 h-5"}):A.jsx(MN,{className:"w-5 h-5"})}),A.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-950/90 px-3.5 py-1 rounded-full border border-zinc-800",children:t.id==="scholarmatch-ai"?"AI PLATFORM":"WEB APPLICATION"})]}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-2xl sm:text-4xl font-black text-white tracking-tight font-sans",children:t.title}),A.jsx("p",{className:"text-xs sm:text-sm font-mono text-zinc-400 mt-1 font-semibold",children:t.tagline})]}),A.jsx("p",{className:"text-zinc-300 text-sm leading-relaxed font-normal",children:t.description}),A.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:t.tech.map(n=>A.jsxs("span",{className:"px-3 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800 text-xs font-mono text-zinc-300",children:["`",n,"`"]},n))}),A.jsxs("div",{className:"pt-3 flex flex-wrap items-center gap-3.5",children:[A.jsxs("a",{href:t.liveUrl,target:"_blank",rel:"noreferrer",className:"px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center shadow-lg transform-gpu hover:scale-[1.03]",children:[A.jsx("span",{children:"Live Demo"}),A.jsx(EN,{className:"w-3.5 h-3.5 ml-2"})]}),A.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noreferrer",className:"px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center shadow-md transform-gpu hover:scale-[1.03]",children:[A.jsx(Cm,{className:"w-3.5 h-3.5 mr-2"}),A.jsx("span",{children:"GitHub"})]})]})]}),A.jsx("div",{className:"lg:col-span-5",children:A.jsx("div",{className:"relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/90 p-2 shadow-inner group-hover:border-zinc-700 transition-all duration-500",children:t.image?A.jsx("img",{src:t.image,alt:`${t.title} screenshot`,className:"w-full h-56 sm:h-64 object-cover object-top rounded-xl filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"}):A.jsxs("div",{className:"w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 flex flex-col justify-between border border-zinc-800/80",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-zinc-500",children:"SCHOLARMATCH AI"}),A.jsx(Rm,{className:"w-4 h-4 text-zinc-400"})]}),A.jsxs("div",{className:"space-y-2",children:[A.jsx("div",{className:"h-1.5 w-3/4 bg-zinc-700 rounded-full"}),A.jsx("div",{className:"h-1.5 w-1/2 bg-zinc-800 rounded-full"}),A.jsx("div",{className:"p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-emerald-400 mt-2",children:"VERDICT: ELIGIBLE (94% MATCH)"})]}),A.jsxs("div",{className:"text-[10px] font-mono text-zinc-500 flex justify-between",children:[A.jsx("span",{children:"GEMINI AI EMBEDDINGS"}),A.jsx("span",{children:"PROD READY"})]})]})})})]})]})},t.id))})]})});var Dm={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),R=D.getContext("2d");R.fillRect(0,0,1,1);var q=D.transferToImageBitmap();R.createPattern(q,"no-repeat")}catch{return!1}return!0}();function l(){}function c(D){var R=n.exports.Promise,q=R!==void 0?R:e.Promise;return typeof q=="function"?new q(D):(D(l,l),null)}var f=function(D,R){return{transform:function(q){if(D)return q;if(R.has(q))return R.get(q);var ce=new OffscreenCanvas(q.width,q.height),Ee=ce.getContext("2d");return Ee.drawImage(q,0,0),R.set(q,ce),ce},clear:function(){R.clear()}}}(a,new Map),d=function(){var D=Math.floor(16.666666666666668),R,q,ce={},Ee=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(xe){var z=Math.random();return ce[z]=requestAnimationFrame(function J(ne){Ee===ne||Ee+D-1<ne?(Ee=ne,delete ce[z],xe()):ce[z]=requestAnimationFrame(J)}),z},q=function(xe){ce[xe]&&cancelAnimationFrame(ce[xe])}):(R=function(xe){return setTimeout(xe,D)},q=function(xe){return clearTimeout(xe)}),{frame:R,cancel:q}}(),u=function(){var D,R,q={};function ce(Ee){function xe(z,J){Ee.postMessage({options:z||{},callback:J})}Ee.init=function(J){var ne=J.transferControlToOffscreen();Ee.postMessage({canvas:ne},[ne])},Ee.fire=function(J,ne,ye){if(R)return xe(J,null),R;var be=Math.random().toString(36).slice(2);return R=c(function(me){function He(Ue){Ue.data.callback===be&&(delete q[be],Ee.removeEventListener("message",He),R=null,f.clear(),ye(),me())}Ee.addEventListener("message",He),xe(J,be),q[be]=He.bind(null,{data:{callback:be}})}),R},Ee.reset=function(){Ee.postMessage({reset:!0});for(var J in q)q[J](),delete q[J]}}return function(){if(D)return D;if(!i&&s){var Ee=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([Ee])))}catch(xe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",xe),null}ce(D)}return D}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(D,R){return R?R(D):D}function S(D){return D!=null}function m(D,R,q){return g(D&&S(D[R])?D[R]:p[R],q)}function h(D){return D<0?0:Math.floor(D)}function v(D,R){return Math.floor(Math.random()*(R-D))+D}function y(D){return parseInt(D,16)}function M(D){return D.map(E)}function E(D){var R=String(D).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:y(R.substring(0,2)),g:y(R.substring(2,4)),b:y(R.substring(4,6))}}function T(D){var R=m(D,"origin",Object);return R.x=m(R,"x",Number),R.y=m(R,"y",Number),R}function b(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function x(D){var R=D.getBoundingClientRect();D.width=R.width,D.height=R.height}function C(D){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=D,R}function L(D,R,q,ce,Ee,xe,z,J,ne){D.save(),D.translate(R,q),D.rotate(xe),D.scale(ce,Ee),D.arc(0,0,1,z,J,ne),D.restore()}function N(D){var R=D.angle*(Math.PI/180),q=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-R+(.5*q-Math.random()*q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function B(D,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var q=R.tick++/R.totalTicks,ce=R.x+R.random*R.tiltCos,Ee=R.y+R.random*R.tiltSin,xe=R.wobbleX+R.random*R.tiltCos,z=R.wobbleY+R.random*R.tiltSin;if(D.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-q)+")",D.beginPath(),o&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))D.fill(H(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(xe-ce)*.1,Math.abs(z-Ee)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var J=Math.PI/10*R.wobble,ne=Math.abs(xe-ce)*.1,ye=Math.abs(z-Ee)*.1,be=R.shape.bitmap.width*R.scalar,me=R.shape.bitmap.height*R.scalar,He=new DOMMatrix([Math.cos(J)*ne,Math.sin(J)*ne,-Math.sin(J)*ye,Math.cos(J)*ye,R.x,R.y]);He.multiplySelf(new DOMMatrix(R.shape.matrix));var Ue=D.createPattern(f.transform(R.shape.bitmap),"no-repeat");Ue.setTransform(He),D.globalAlpha=1-q,D.fillStyle=Ue,D.fillRect(R.x-be/2,R.y-me/2,be,me),D.globalAlpha=1}else if(R.shape==="circle")D.ellipse?D.ellipse(R.x,R.y,Math.abs(xe-ce)*R.ovalScalar,Math.abs(z-Ee)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):L(D,R.x,R.y,Math.abs(xe-ce)*R.ovalScalar,Math.abs(z-Ee)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var Ce=Math.PI/2*3,ze=4*R.scalar,Ve=8*R.scalar,et=R.x,rt=R.y,ft=5,at=Math.PI/ft;ft--;)et=R.x+Math.cos(Ce)*Ve,rt=R.y+Math.sin(Ce)*Ve,D.lineTo(et,rt),Ce+=at,et=R.x+Math.cos(Ce)*ze,rt=R.y+Math.sin(Ce)*ze,D.lineTo(et,rt),Ce+=at;else D.moveTo(Math.floor(R.x),Math.floor(R.y)),D.lineTo(Math.floor(R.wobbleX),Math.floor(Ee)),D.lineTo(Math.floor(xe),Math.floor(z)),D.lineTo(Math.floor(ce),Math.floor(R.wobbleY));return D.closePath(),D.fill(),R.tick<R.totalTicks}function K(D,R,q,ce,Ee){var xe=R.slice(),z=D.getContext("2d"),J,ne,ye=c(function(be){function me(){J=ne=null,z.clearRect(0,0,ce.width,ce.height),f.clear(),Ee(),be()}function He(){i&&!(ce.width===r.width&&ce.height===r.height)&&(ce.width=D.width=r.width,ce.height=D.height=r.height),!ce.width&&!ce.height&&(q(D),ce.width=D.width,ce.height=D.height),z.clearRect(0,0,ce.width,ce.height),xe=xe.filter(function(Ue){return B(z,Ue)}),xe.length?J=d.frame(He):me()}J=d.frame(He),ne=me});return{addFettis:function(be){return xe=xe.concat(be),ye},canvas:D,promise:ye,reset:function(){J&&d.cancel(J),ne&&ne()}}}function te(D,R){var q=!D,ce=!!m(R||{},"resize"),Ee=!1,xe=m(R,"disableForReducedMotion",Boolean),z=s&&!!m(R||{},"useWorker"),J=z?u():null,ne=q?b:x,ye=D&&J?!!D.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,me;function He(Ce,ze,Ve){for(var et=m(Ce,"particleCount",h),rt=m(Ce,"angle",Number),ft=m(Ce,"spread",Number),at=m(Ce,"startVelocity",Number),_t=m(Ce,"decay",Number),wt=m(Ce,"gravity",Number),U=m(Ce,"drift",Number),jt=m(Ce,"colors",M),tt=m(Ce,"ticks",Number),P=m(Ce,"shapes"),_=m(Ce,"scalar"),k=!!m(Ce,"flat"),X=T(Ce),Q=et,le=[],ue=D.width*X.x,ee=D.height*X.y;Q--;)le.push(N({x:ue,y:ee,angle:rt,spread:ft,startVelocity:at,color:jt[Q%jt.length],shape:P[v(0,P.length)],ticks:tt,decay:_t,gravity:wt,drift:U,scalar:_,flat:k}));return me?me.addFettis(le):(me=K(D,le,ne,ze,Ve),me.promise)}function Ue(Ce){var ze=xe||m(Ce,"disableForReducedMotion",Boolean),Ve=m(Ce,"zIndex",Number);if(ze&&be)return c(function(at){at()});q&&me?D=me.canvas:q&&!D&&(D=C(Ve),document.body.appendChild(D)),ce&&!ye&&ne(D);var et={width:D.width,height:D.height};J&&!ye&&J.init(D),ye=!0,J&&(D.__confetti_initialized=!0);function rt(){if(J){var at={getBoundingClientRect:function(){if(!q)return D.getBoundingClientRect()}};ne(at),J.postMessage({resize:{width:at.width,height:at.height}});return}et.width=et.height=null}function ft(){me=null,ce&&(Ee=!1,e.removeEventListener("resize",rt)),q&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,ye=!1)}return ce&&!Ee&&(Ee=!0,e.addEventListener("resize",rt,!1)),J?J.fire(Ce,et,ft):He(Ce,et,ft)}return Ue.reset=function(){J&&J.reset(),me&&me.reset()},Ue}var V;function Z(){return V||(V=te(null,{useWorker:!0,resize:!0})),V}function H(D,R,q,ce,Ee,xe,z){var J=new Path2D(D),ne=new Path2D;ne.addPath(J,new DOMMatrix(R));var ye=new Path2D;return ye.addPath(ne,new DOMMatrix([Math.cos(z)*Ee,Math.sin(z)*Ee,-Math.sin(z)*xe,Math.cos(z)*xe,q,ce])),ye}function F(D){if(!o)throw new Error("path confetti are not supported in this browser");var R,q;typeof D=="string"?R=D:(R=D.path,q=D.matrix);var ce=new Path2D(R),Ee=document.createElement("canvas"),xe=Ee.getContext("2d");if(!q){for(var z=1e3,J=z,ne=z,ye=0,be=0,me,He,Ue=0;Ue<z;Ue+=2)for(var Ce=0;Ce<z;Ce+=2)xe.isPointInPath(ce,Ue,Ce,"nonzero")&&(J=Math.min(J,Ue),ne=Math.min(ne,Ce),ye=Math.max(ye,Ue),be=Math.max(be,Ce));me=ye-J,He=be-ne;var ze=10,Ve=Math.min(ze/me,ze/He);q=[Ve,0,0,Ve,-Math.round(me/2+J)*Ve,-Math.round(He/2+ne)*Ve]}return{type:"path",path:R,matrix:q}}function $(D){var R,q=1,ce="#000000",Ee='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?R=D:(R=D.text,q="scalar"in D?D.scalar:q,Ee="fontFamily"in D?D.fontFamily:Ee,ce="color"in D?D.color:ce);var xe=10*q,z=""+xe+"px "+Ee,J=new OffscreenCanvas(xe,xe),ne=J.getContext("2d");ne.font=z;var ye=ne.measureText(R),be=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),me=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),He=2,Ue=ye.actualBoundingBoxLeft+He,Ce=ye.actualBoundingBoxAscent+He;be+=He+He,me+=He+He,J=new OffscreenCanvas(be,me),ne=J.getContext("2d"),ne.font=z,ne.fillStyle=ce,ne.fillText(R,Ue,Ce);var ze=1/q;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[ze,0,0,ze,-be*ze/2,-me*ze/2]}}n.exports=function(){return Z().apply(this,arguments)},n.exports.reset=function(){Z().reset()},n.exports.create=te,n.exports.shapeFromPath=F,n.exports.shapeFromText=$})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Dm,!1);const jN=Dm.exports;Dm.exports.create;const YN=()=>{const{contact:t}=Bt,[e,n]=ae.useState(!1),[i,r]=ae.useState(!1),[s,o]=ae.useState({name:"",email:"",message:""}),[a,l]=ae.useState(""),c=p=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(p.trim()),f=p=>{const g=p.target.value;o({...s,email:g}),a&&c(g)&&l("")},d=()=>{s.email.trim()&&!c(s.email)?l("Please enter a valid email address (e.g., name@domain.com)"):l("")},u=async p=>{if(p.preventDefault(),!(!s.name.trim()||!s.message.trim())){if(!c(s.email)){l("Please enter a valid email address (e.g., name@domain.com)");return}l(""),r(!0);try{(await fetch(`https://formsubmit.co/ajax/${t.email}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:s.name.trim(),email:s.email.trim(),message:s.message.trim(),_subject:`New Portfolio Message from ${s.name.trim()}`,_template:"table"})})).ok?(n(!0),jN({particleCount:70,spread:60,origin:{y:.8},colors:["#ffffff","#a855f7","#3b82f6"]})):(window.location.href=`mailto:${t.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${s.name}`)}&body=${encodeURIComponent(`${s.message}

From: ${s.name} (${s.email})`)}`,n(!0))}catch{window.location.href=`mailto:${t.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${s.name}`)}&body=${encodeURIComponent(`${s.message}

From: ${s.name} (${s.email})`)}`,n(!0)}finally{r(!1)}}};return A.jsx("section",{id:"contact",className:"py-28 relative scroll-mt-24",children:A.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[A.jsxs(on.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,ease:[.16,1,.3,1]},className:"lg:col-span-5 space-y-6",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-violet-400",children:"// DESTINATION — GALAXY CORE"}),A.jsx("h2",{className:"text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1",children:t.heading}),A.jsx("p",{className:"text-zinc-400 text-sm sm:text-base leading-relaxed mt-3 font-normal",children:t.text})]}),A.jsxs("a",{href:`mailto:${t.email}`,className:"flex items-center space-x-3.5 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-violet-500/50 transition-all duration-300 group transform-gpu hover:scale-[1.02] shadow-xl",children:[A.jsx("div",{className:"p-3 rounded-xl bg-zinc-900 text-violet-400 group-hover:scale-105 transition-transform",children:A.jsx(bN,{className:"w-5 h-5"})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-mono uppercase tracking-widest text-zinc-500",children:"DIRECT INBOX"}),A.jsx("p",{className:"text-sm font-semibold text-white font-mono",children:t.email})]})]}),A.jsxs("div",{className:"pt-2 space-y-2",children:[A.jsx("p",{className:"text-xs font-mono uppercase tracking-widest text-zinc-500",children:"CONNECT ON SOCIAL"}),A.jsxs("div",{className:"flex space-x-3",children:[A.jsx("a",{href:t.socials.github,target:"_blank",rel:"noreferrer",className:"p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg","aria-label":"GitHub",children:A.jsx(Cm,{className:"w-5 h-5"})}),A.jsx("a",{href:t.socials.linkedin,target:"_blank",rel:"noreferrer",className:"p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg","aria-label":"LinkedIn",children:A.jsx(XM,{className:"w-5 h-5"})}),A.jsx("a",{href:t.socials.instagram,target:"_blank",rel:"noreferrer",className:"p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg","aria-label":"Instagram",children:A.jsx(WM,{className:"w-5 h-5"})})]})]})]}),A.jsx(on.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.1,ease:[.16,1,.3,1]},className:"lg:col-span-7",children:A.jsx(yu,{children:e?A.jsxs("div",{className:"py-12 text-center space-y-4",children:[A.jsx("div",{className:"w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl",children:A.jsx(_N,{className:"w-7 h-7"})}),A.jsx("h3",{className:"text-xl font-bold text-white font-sans uppercase tracking-tight",children:"Thank You For Reaching Out"}),A.jsx("p",{className:"text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal",children:"Your message has been successfully received. A team member will review your inquiry and follow up with you shortly."})]}):A.jsxs("form",{onSubmit:u,className:"space-y-4",children:[A.jsxs("div",{className:"space-y-1.5",children:[A.jsx("label",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 block",children:"Name"}),A.jsx("input",{type:"text",required:!0,placeholder:"Your name",value:s.name,onChange:p=>o({...s,name:p.target.value}),className:"w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 font-sans text-sm transition-colors"})]}),A.jsxs("div",{className:"space-y-1.5",children:[A.jsx("label",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 block",children:"Email"}),A.jsx("input",{type:"email",required:!0,placeholder:"Your email address (e.g., name@domain.com)",value:s.email,onChange:f,onBlur:d,className:`w-full px-4 py-3 rounded-xl bg-zinc-950/90 border text-white placeholder-zinc-600 focus:outline-none font-sans text-sm transition-colors ${a?"border-red-500/80 focus:border-red-500":"border-zinc-800 focus:border-violet-500"}`}),a&&A.jsxs("p",{className:"text-xs font-mono text-red-400 mt-1 flex items-center space-x-1",children:[A.jsx(gN,{className:"w-3.5 h-3.5 mr-1 inline shrink-0"}),A.jsx("span",{children:a})]})]}),A.jsxs("div",{className:"space-y-1.5",children:[A.jsx("label",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 block",children:"Message"}),A.jsx("textarea",{required:!0,rows:4,placeholder:"How can I help you?",value:s.message,onChange:p=>o({...s,message:p.target.value}),className:"w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 font-sans text-sm transition-colors resize-none"})]}),A.jsx("button",{type:"submit",disabled:i,className:"w-full py-4 px-6 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 transform-gpu hover:scale-[1.01] disabled:opacity-50",children:i?A.jsxs(A.Fragment,{children:[A.jsx(AN,{className:"w-4 h-4 animate-spin"}),A.jsx("span",{children:"SENDING TRANSMISSION..."})]}):A.jsxs(A.Fragment,{children:[A.jsx("span",{children:"SEND TRANSMISSION"}),A.jsx(PN,{className:"w-3.5 h-3.5 ml-1"})]})})]})})})]})})})},$N=()=>{const t=new Date().getFullYear(),e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.jsx("footer",{className:"py-16 bg-[#09090b] border-t border-zinc-900 relative",children:A.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8",children:[A.jsxs("div",{className:"space-y-2 text-center md:text-left",children:[A.jsx("a",{href:"#home",className:"text-xl font-black tracking-widest text-white uppercase font-sans",children:Bt.name}),A.jsx("p",{className:"text-xs font-mono text-zinc-400",children:"Building. Learning. Creating."})]}),A.jsxs("div",{className:"flex items-center space-x-6 text-xs font-mono text-zinc-400",children:[A.jsx("a",{href:Bt.contact.socials.github,target:"_blank",rel:"noreferrer",className:"hover:text-white transition-colors",children:"GitHub"}),A.jsx("a",{href:Bt.contact.socials.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-white transition-colors",children:"LinkedIn"}),A.jsx("a",{href:Bt.contact.socials.instagram,target:"_blank",rel:"noreferrer",className:"hover:text-white transition-colors",children:"Instagram"})]}),A.jsxs("div",{className:"flex items-center space-x-4 text-xs font-mono text-zinc-500",children:[A.jsxs("span",{children:["© ",t," MANUEL GOMES"]}),A.jsx("button",{onClick:e,"aria-label":"Scroll to top",className:"p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors",children:A.jsx(xN,{className:"w-4 h-4"})})]})]})})};function qN(){const[t,e]=ae.useState(!1);return A.jsxs("div",{className:"relative min-h-screen bg-[#050508] text-zinc-100 selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden",children:[!t&&A.jsx(NN,{onComplete:()=>e(!0)}),A.jsx(zP,{}),A.jsx(UN,{}),A.jsx(IN,{}),A.jsxs("main",{className:"relative z-10",children:[A.jsx(VN,{}),A.jsx(HN,{}),A.jsx(WN,{}),A.jsx(XN,{}),A.jsx(GN,{}),A.jsx(YN,{})]}),A.jsx($N,{})]})}Hf.createRoot(document.getElementById("root")).render(A.jsx(mE.StrictMode,{children:A.jsx(qN,{})}));
