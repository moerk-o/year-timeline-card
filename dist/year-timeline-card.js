var YearTimelineCard=function(y){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const J=globalThis,te=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),de=new WeakMap;let ue=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(te&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&de.set(t,e))}return e}toString(){return this.cssText}};const Be=s=>new ue(typeof s=="string"?s:s+"",void 0,se),I=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,a,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[i+1],s[0]);return new ue(t,s,se)},Ye=(s,e)=>{if(te)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),a=J.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=t.cssText,s.appendChild(r)}},pe=te?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Be(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:Ve,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Re,getOwnPropertySymbols:Ue,getPrototypeOf:je}=Object,b=globalThis,me=b.trustedTypes,qe=me?me.emptyScript:"",re=b.reactiveElementPolyfillSupport,B=(s,e)=>s,K={toAttribute(s,e){switch(e){case Boolean:s=s?qe:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ae=(s,e)=>!Ne(s,e),fe={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(e,r,t);a!==void 0&&Ve(this.prototype,e,a)}}static getPropertyDescriptor(e,t,r){const{get:a,set:i}=ze(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:a,set(n){const o=a==null?void 0:a.call(this);i==null||i.call(this,n),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const t=this.properties,r=[...Re(t),...Ue(t)];for(const a of r)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,a]of t)this.elementProperties.set(r,a)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const a=this._$Eu(t,r);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const a of r)t.unshift(pe(a))}else e!==void 0&&t.push(pe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var i;const r=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,r);if(a!==void 0&&r.reflect===!0){const n=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:K).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){var i,n;const r=this.constructor,a=r._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const o=r.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:K;this._$Em=a;const h=l.fromAttribute(t,o.type);this[a]=h??((n=this._$Ej)==null?void 0:n.get(a))??h,this._$Em=null}}requestUpdate(e,t,r,a=!1,i){var n;if(e!==void 0){const o=this.constructor;if(a===!1&&(i=this[e]),r??(r=o.getPropertyOptions(e)),!((r.hasChanged??ae)(i,t)||r.useDefault&&r.reflect&&i===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:a,wrapped:i},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,n]of a){const{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostUpdated)==null?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[B("elementProperties")]=new Map,S[B("finalized")]=new Map,re==null||re({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,ge=s=>s,G=Y.trustedTypes,ye=G?G.createPolicy("lit-html",{createHTML:s=>s}):void 0,_e="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+$,We=`<${be}>`,A=document,N=()=>A.createComment(""),V=s=>s===null||typeof s!="object"&&typeof s!="function",ie=Array.isArray,Je=s=>ie(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ve=/>/g,x=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,ke=/"/g,Me=/^(?:script|style|textarea|title)$/i,Ke=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),c=Ke(1),L=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ae=new WeakMap,C=A.createTreeWalker(A,129);function xe(s,e){if(!ie(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(e):e}const Ge=(s,e)=>{const t=s.length-1,r=[];let a,i=e===2?"<svg>":e===3?"<math>":"",n=z;for(let o=0;o<t;o++){const l=s[o];let h,p,d=-1,g=0;for(;g<l.length&&(n.lastIndex=g,p=n.exec(l),p!==null);)g=n.lastIndex,n===z?p[1]==="!--"?n=$e:p[1]!==void 0?n=ve:p[2]!==void 0?(Me.test(p[2])&&(a=RegExp("</"+p[2],"g")),n=x):p[3]!==void 0&&(n=x):n===x?p[0]===">"?(n=a??z,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?x:p[3]==='"'?ke:we):n===ke||n===we?n=x:n===$e||n===ve?n=z:(n=x,a=void 0);const M=n===x&&s[o+1].startsWith("/>")?" ":"";i+=n===z?l+We:d>=0?(r.push(h),l.slice(0,d)+_e+l.slice(d)+$+M):l+$+(d===-2?o:M)}return[xe(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class R{constructor({strings:e,_$litType$:t},r){let a;this.parts=[];let i=0,n=0;const o=e.length-1,l=this.parts,[h,p]=Ge(e,t);if(this.el=R.createElement(h,r),C.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=C.nextNode())!==null&&l.length<o;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(_e)){const g=p[n++],M=a.getAttribute(d).split($),ee=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:ee[2],strings:M,ctor:ee[1]==="."?Ze:ee[1]==="?"?Xe:ee[1]==="@"?et:Q}),a.removeAttribute(d)}else d.startsWith($)&&(l.push({type:6,index:i}),a.removeAttribute(d));if(Me.test(a.tagName)){const d=a.textContent.split($),g=d.length-1;if(g>0){a.textContent=G?G.emptyScript:"";for(let M=0;M<g;M++)a.append(d[M],N()),C.nextNode(),l.push({type:2,index:++i});a.append(d[g],N())}}}else if(a.nodeType===8)if(a.data===be)l.push({type:2,index:i});else{let d=-1;for(;(d=a.data.indexOf($,d+1))!==-1;)l.push({type:7,index:i}),d+=$.length-1}i++}}static createElement(e,t){const r=A.createElement("template");return r.innerHTML=e,r}}function O(s,e,t=s,r){var n,o;if(e===L)return e;let a=r!==void 0?(n=t._$Co)==null?void 0:n[r]:t._$Cl;const i=V(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((o=a==null?void 0:a._$AO)==null||o.call(a,!1),i===void 0?a=void 0:(a=new i(s),a._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=a:t._$Cl=a),a!==void 0&&(e=O(s,a._$AS(s,e.values),a,r)),e}class Qe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,a=((e==null?void 0:e.creationScope)??A).importNode(t,!0);C.currentNode=a;let i=C.nextNode(),n=0,o=0,l=r[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new U(i,i.nextSibling,this,e):l.type===1?h=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(h=new tt(i,this,e)),this._$AV.push(h),l=r[++o]}n!==(l==null?void 0:l.index)&&(i=C.nextNode(),n++)}return C.currentNode=A,a}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,a){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),V(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=R.createElement(xe(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(t);else{const n=new Qe(a,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new R(e)),t}k(e){ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,a=0;for(const i of e)a===t.length?t.push(r=new U(this.O(N()),this.O(N()),this,this.options)):r=t[a],r._$AI(i),a++;a<t.length&&(this._$AR(r&&r._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const a=ge(e).nextSibling;ge(e).remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,a,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,t=this,r,a){const i=this.strings;let n=!1;if(i===void 0)e=O(this,e,t,0),n=!V(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{const o=e;let l,h;for(e=i[0],l=0;l<i.length-1;l++)h=O(this,o[r+l],t,l),h===L&&(h=this._$AH[l]),n||(n=!V(h)||h!==this._$AH[l]),h===u?e=u:e!==u&&(e+=(h??"")+i[l+1]),this._$AH[l]=h}n&&!a&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ze extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Xe extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class et extends Q{constructor(e,t,r,a,i){super(e,t,r,a,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??u)===L)return;const r=this._$AH,a=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==u&&(r===u||a);a&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const oe=Y.litHtmlPolyfillSupport;oe==null||oe(R,U),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.3.2");const st=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let a=r._$litPart$;if(a===void 0){const i=(t==null?void 0:t.renderBefore)??null;r._$litPart$=a=new U(e.insertBefore(N(),i),i,void 0,t??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class _ extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}_._$litElement$=!0,_.finalized=!0,(Ie=E.litElementHydrateSupport)==null||Ie.call(E,{LitElement:_});const le=E.litElementPolyfillSupport;le==null||le({LitElement:_}),(E.litElementVersions??(E.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ae},at=(s=rt,e,t)=>{const{kind:r,metadata:a}=t;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(t.name,s),r==="accessor"){const{name:n}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(n,l,s,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,s,o),o}}}if(r==="setter"){const{name:n}=t;return function(o){const l=this[n];e.call(this,o),this.requestUpdate(n,l,s,!0,o)}}throw Error("Unsupported decorator location: "+r)};function m(s){return(e,t)=>typeof t=="object"?at(s,e,t):((r,a,i)=>{const n=a.hasOwnProperty(i);return a.constructor.createProperty(i,r),n?Object.getOwnPropertyDescriptor(a,i):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(s){return m({...s,state:!0,attribute:!1})}const it=I`
  :host {
    display: block;
    width: 100%;
    --ytc-primary-color: var(--primary-color, #03a9f4);
    --ytc-text-primary: var(--primary-text-color, #212121);
    --ytc-text-secondary: var(--secondary-text-color, #727272);
    --ytc-background: var(--card-background-color, #fff);
    --ytc-divider: var(--divider-color, #e0e0e0);
    --ytc-bar-background: var(--disabled-color, #bdbdbd);
    --ytc-bar-height: 24px;
    --ytc-marker-color: var(--accent-color, #ff9800);
  }

  ha-card {
    display: block;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .card-header {
    padding: 16px 16px 0 16px;
    font-size: 1.2em;
    font-weight: 500;
    color: var(--ytc-text-primary);
  }

  .card-content {
    padding: 16px;
  }

  /* Borderless mode */
  ha-card.borderless {
    background: transparent;
    border: none;
    box-shadow: none;
  }
`,nt=I`
  .timeline-container {
    position: relative;
    width: 100%;
    margin: 8px 0;
  }

  .timeline-bar {
    position: relative;
    width: 100%;
    height: var(--ytc-bar-height, 24px);
    background-color: var(--ytc-bar-background);
    border-radius: 4px;
    overflow: hidden;
  }

  .timeline-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--ytc-primary-color);
    border-radius: 4px 0 0 4px;
    transition: width 0.3s ease;
  }

  .timeline-today-marker {
    position: absolute;
    top: -4px;
    width: 2px;
    height: calc(100% + 8px);
    background-color: var(--ytc-text-primary);
    transform: translateX(-50%);
    z-index: 2;
  }

  .timeline-today-marker::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--ytc-text-primary);
  }

  .timeline-segments {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .timeline-segment-line {
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: var(--ytc-divider);
    opacity: 0.5;
  }

  .timeline-segment-line.week {
    height: 30%;
    top: 70%;
    opacity: 0.3;
  }

  .timeline-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    padding: 0 2px;
  }

  .timeline-label {
    font-size: 0.7em;
    color: var(--ytc-text-secondary);
    text-align: center;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .timeline-markers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .timeline-marker {
    position: absolute;
    top: 50%;
    width: 8px;
    height: 8px;
    background-color: var(--ytc-marker-color);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid var(--ytc-background);
    z-index: 3;
  }

  .timeline-marker.range-start {
    border-radius: 50% 0 0 50%;
  }

  .timeline-marker.range-end {
    border-radius: 0 50% 50% 0;
  }
`,ot=I`
  .facts-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 400px) {
    .facts-container {
      grid-template-columns: 1fr;
    }
  }

  .fact-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 4px 0;
  }

  .fact-label {
    font-size: 0.85em;
    color: var(--ytc-text-secondary);
  }

  .fact-value {
    font-size: 0.95em;
    font-weight: 500;
    color: var(--ytc-text-primary);
  }

  /* Compact mode */
  .fact-item.compact {
    padding: 1px 0;
  }

  .fact-item.compact .fact-label,
  .fact-item.compact .fact-value {
    font-size: 0.8em;
  }
`,lt=I`
  .marker-list {
    margin-top: 16px;
    border-top: 1px solid var(--ytc-divider);
    padding-top: 12px;
  }

  .marker-list-title {
    font-size: 0.85em;
    color: var(--ytc-text-secondary);
    margin-bottom: 8px;
  }

  .marker-list-items {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .marker-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9em;
  }

  .marker-list-item-label {
    color: var(--ytc-text-primary);
  }

  .marker-list-item-date {
    color: var(--ytc-text-secondary);
    font-size: 0.85em;
  }

  .marker-list-item-dot {
    width: 8px;
    height: 8px;
    background-color: var(--ytc-marker-color);
    border-radius: 50%;
    margin-right: 8px;
    flex-shrink: 0;
  }

  .marker-list-item-content {
    display: flex;
    align-items: center;
    min-width: 0;
  }
`,ct=["year","dayOfYear","isoWeek","quarter"],T={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0,progressColor:null},Z={borderless:!1,compactFacts:!1,factsColumns:2},ht="auto",f={type:"point",color:null,showOnBar:!0,showInList:!0};function dt(s){if(!s||!s.show)return ct;const e=s.show;return Array.isArray(e)?e.filter(r=>ut(r)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(r=>e[r]===!0)}function ut(s){return typeof s=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(s)}function pt(s){return s?{segments:ft(s.segments),labels:gt(s.labels),showTodayMarker:s.show_today_marker??T.showTodayMarker,showProgressFill:s.show_progress_fill??T.showProgressFill,progressColor:s.progress_color??T.progressColor}:T}function mt(s){return s?{borderless:s.borderless??Z.borderless,compactFacts:s.compact_facts??Z.compactFacts,factsColumns:s.facts_columns??Z.factsColumns}:Z}function ft(s){return s&&["none","quarters","months","weeks"].includes(s)?s:T.segments}function gt(s){return s&&["none","quarters","months"].includes(s)?s:T.labels}function yt(s){var a,i;if(!s.entity||typeof s.entity!="string")return null;let e="state";if(s.source&&s.source!=="state"){const n=/^attribute:(.+)$/.exec(s.source);n&&n[1]&&(e={attribute:n[1]})}const r=["point","rangeStart","rangeEnd","range"].includes(s.type)?s.type:f.type;return{entity:s.entity,label:((a=s.label)==null?void 0:a.trim())||null,source:e,type:r,color:((i=s.color)==null?void 0:i.trim())||f.color,showOnBar:s.showOnBar??f.showOnBar,showInList:s.showInList??f.showInList}}function _t(s){if(!s||!Array.isArray(s))return[];const e=[];for(const t of s){const r=yt(t);r&&e.push(r)}return e}function bt(s){return{title:s.title??null,locale:s.locale??ht,layout:mt(s.layout),facts:dt(s.facts),bar:pt(s.bar),markers:_t(s.markers)}}function $t(s){if(!s||typeof s!="object")return!1;const e=s;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function vt(s){return s%4===0&&s%100!==0||s%400===0}function Ce(s){return vt(s)?366:365}function Ee(s){const e=new Date(s.getFullYear(),0,0),t=s.getTime()-e.getTime(),r=1e3*60*60*24;return Math.floor(t/r)}function wt(s){const e=new Date(s.valueOf()),t=(s.getDay()+6)%7;e.setDate(e.getDate()-t+3);const r=new Date(e.getFullYear(),0,4),a=(r.getDay()+6)%7;r.setDate(r.getDate()-a+3);const i=e.getTime()-r.getTime();return 1+Math.round(i/6048e5)}function kt(s){return Math.floor(s.getMonth()/3)+1}function ce(s){const e=s.getFullYear(),t=new Date(e,0,1).getTime(),r=new Date(e+1,0,1).getTime(),i=(s.getTime()-t)/(r-t)*100;return Math.min(100,Math.max(0,i))}function Mt(s){const e=s.getFullYear(),t=Ce(e),r=Ee(s);return t-r}function At(s){if(s instanceof Date)return isNaN(s.getTime())?null:s;if(typeof s!="string"||s.trim()==="")return null;const e=s.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const r=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:a=>new Date(parseInt(a[1]),parseInt(a[2])-1,parseInt(a[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:a=>new Date(parseInt(a[3]),parseInt(a[2])-1,parseInt(a[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:a=>new Date(parseInt(a[3]),parseInt(a[1])-1,parseInt(a[2]))}];for(const{regex:a,parse:i}of r){const n=e.match(a);if(n){const o=i(n);if(!isNaN(o.getTime()))return o}}return null}const Se={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Le={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function Oe(s,e,t=!1){return(t?Le[e]??Le.de:Se[e]??Se.de)[s]??""}function xt(s){return s==="en"?"CW":"KW"}function Ct(s,e){if(s==="none")return[];const t=new Date(e,0,1).getTime(),a=new Date(e+1,0,1).getTime()-t,i=n=>(n.getTime()-t)/a*100;if(s==="quarters")return[0,i(new Date(e,3,1)),i(new Date(e,6,1)),i(new Date(e,9,1))];if(s==="months"){const n=[];for(let o=0;o<12;o++)n.push(i(new Date(e,o,1)));return n}if(s==="weeks"){const n=[],l=(new Date(e,0,1).getDay()+6)%7;let h;l<=3?h=new Date(e,0,1-l):h=new Date(e,0,8-l);let p=h;for(;p.getFullYear()<=e;){const d=i(p);d>=0&&d<100&&n.push(d),p=new Date(p.getTime()+6048e5)}return n}return[]}function Et(s,e,t){if(s==="none")return[];const r=new Date(e,0,1).getTime(),i=new Date(e+1,0,1).getTime()-r,n=o=>(o.getTime()-r)/i*100;if(s==="quarters")return[{position:n(new Date(e,1,1)),label:"Q1"},{position:n(new Date(e,4,1)),label:"Q2"},{position:n(new Date(e,7,1)),label:"Q3"},{position:n(new Date(e,10,1)),label:"Q4"}];if(s==="months"){const o=[];for(let l=0;l<12;l++){const h=new Date(e,l,1),p=new Date(e,l+1,1),d=new Date((h.getTime()+p.getTime())/2);o.push({position:n(d),label:Oe(l,t,!0)})}return o}return[]}function St(s,e){return e==="state"?s.state:s.attributes[e.attribute]}function Lt(s,e){return s.label?s.label:e.attributes.friendly_name??s.entity}function Ot(s,e,t){const r=e[s.entity];if(!r)return null;const a=St(r,s.source),i=At(a);if(!i||i.getFullYear()!==t)return null;const n=ce(i);return{label:Lt(s,r),date:i,position:n,type:s.type,color:s.color,showOnBar:s.showOnBar,showInList:s.showInList}}function Dt(s,e,t){const r=[];for(const a of s){const i=Ot(a,e,t);i&&r.push(i)}return r.sort((a,i)=>a.position-i.position),r}function Tt(s,e){const t=s.getDate(),r=s.getMonth()+1;return e==="en"?`${r}/${t}`:`${t}.${r}.`}var Pt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,P=(s,e,t,r)=>{for(var a=r>1?void 0:r?Ht(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&Pt(e,t,a),a};let v=class extends _{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return c`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill?this.renderProgress():u}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker?this.renderTodayMarker():u}
        </div>
        ${this.renderLabels()}
      </div>
    `}renderProgress(){const s=Math.min(100,Math.max(0,this.progress));return c`
      <div class="timeline-progress" style="width: ${s}%"></div>
    `}renderTodayMarker(){const s=Math.min(100,Math.max(0,this.progress));return c`
      <div class="timeline-today-marker" style="left: ${s}%"></div>
    `}renderSegments(){const s=Ct(this.config.segments,this.year);if(s.length===0)return c``;const e=this.config.segments==="weeks";return c`
      <div class="timeline-segments">
        ${s.slice(1).map(t=>c`
            <div
              class="timeline-segment-line ${e?"week":""}"
              style="left: ${t}%"
            ></div>
          `)}
      </div>
    `}renderLabels(){const s=Et(this.config.labels,this.year,this.locale);return s.length===0?u:c`
      <div class="timeline-labels">
        ${s.map(e=>c`
            <span class="timeline-label">${e.label}</span>
          `)}
      </div>
    `}renderMarkers(){return this.markers.length===0?c``:c`
      <div class="timeline-markers">
        ${this.markers.map(s=>this.renderMarker(s))}
      </div>
    `}renderMarker(s){const e=Math.min(100,Math.max(0,s.position));let t="";s.type==="rangeStart"?t="range-start":s.type==="rangeEnd"&&(t="range-end");const r=s.color?`background-color: ${s.color}`:"";return c`
      <div
        class="timeline-marker ${t}"
        style="left: ${e}%; ${r}"
        title="${s.label}"
      ></div>
    `}};v.styles=nt,P([m({type:Number})],v.prototype,"progress",2),P([m({type:Number})],v.prototype,"year",2),P([m({type:String})],v.prototype,"locale",2),P([m({type:Object})],v.prototype,"config",2),P([m({type:Array})],v.prototype,"markers",2),v=P([j("ytc-timeline-bar")],v);var Ft=Object.defineProperty,It=Object.getOwnPropertyDescriptor,H=(s,e,t,r)=>{for(var a=r>1?void 0:r?It(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&Ft(e,t,a),a};const De={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let w=class extends _{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de",this.compact=!1,this.columns=2}render(){if(this.facts.length===0)return c``;const s=`
      grid-template-columns: repeat(${this.columns}, 1fr);
      ${this.compact?"gap: 2px 12px;":""}
    `,e=this.compact?"fact-item compact":"fact-item";return c`
      <div class="facts-container" style=${s}>
        ${this.facts.map(t=>this.renderFact(t,e))}
      </div>
    `}renderFact(s,e){const t=this.getLabel(s),r=this.getValue(s);return r===null?u:c`
      <div class=${e}>
        <span class="fact-label">${t}</span>
        <span class="fact-value">${r}</span>
      </div>
    `}getLabel(s){return(De[this.locale]??De.de)[s]}getValue(s){const e=this.date.getFullYear();switch(s){case"year":return String(e);case"dayOfYear":{const t=Ee(this.date),r=Ce(e);return`${t} / ${r}`}case"isoWeek":{const t=wt(this.date);return`${xt(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return Oe(t,this.locale,!1)}case"quarter":return`Q${kt(this.date)}`;case"progress":return`${ce(this.date).toFixed(1)}%`;case"remainingDays":{const t=Mt(this.date);return String(t)}default:return null}}};w.styles=ot,H([m({type:Object})],w.prototype,"date",2),H([m({type:Array})],w.prototype,"facts",2),H([m({type:String})],w.prototype,"locale",2),H([m({type:Boolean})],w.prototype,"compact",2),H([m({type:Number})],w.prototype,"columns",2),w=H([j("ytc-facts-block")],w);var Bt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,he=(s,e,t,r)=>{for(var a=r>1?void 0:r?Yt(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&Bt(e,t,a),a};const Te={de:"Ereignisse",en:"Events"};let q=class extends _{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const s=this.markers.filter(t=>t.showInList);if(s.length===0)return u;const e=Te[this.locale]??Te.de;return c`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${s.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(s){const e=Tt(s.date,this.locale),t=s.color?`background-color: ${s.color}`:"";return c`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot" style=${t}></span>
          <span class="marker-list-item-label">${s.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};q.styles=lt,he([m({type:Array})],q.prototype,"markers",2),he([m({type:String})],q.prototype,"locale",2),q=he([j("ytc-marker-list")],q);var Nt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,F=(s,e,t,r)=>{for(var a=r>1?void 0:r?Vt(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&Nt(e,t,a),a};const zt=["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"],W=[{name:"default",value:"default",labelDe:"Standard",labelEn:"Default"},{name:"red",value:"#f44336",labelDe:"Rot",labelEn:"Red"},{name:"pink",value:"#e91e63",labelDe:"Pink",labelEn:"Pink"},{name:"purple",value:"#9c27b0",labelDe:"Lila",labelEn:"Purple"},{name:"deep-purple",value:"#673ab7",labelDe:"Tiefviolett",labelEn:"Deep Purple"},{name:"indigo",value:"#3f51b5",labelDe:"Indigo",labelEn:"Indigo"},{name:"blue",value:"#2196f3",labelDe:"Blau",labelEn:"Blue"},{name:"light-blue",value:"#03a9f4",labelDe:"Hellblau",labelEn:"Light Blue"},{name:"cyan",value:"#00bcd4",labelDe:"Cyan",labelEn:"Cyan"},{name:"teal",value:"#009688",labelDe:"Blaugrün",labelEn:"Teal"},{name:"green",value:"#4caf50",labelDe:"Grün",labelEn:"Green"},{name:"light-green",value:"#8bc34a",labelDe:"Hellgrün",labelEn:"Light Green"},{name:"lime",value:"#cddc39",labelDe:"Limette",labelEn:"Lime"},{name:"yellow",value:"#ffeb3b",labelDe:"Gelb",labelEn:"Yellow"},{name:"amber",value:"#ffc107",labelDe:"Bernstein",labelEn:"Amber"},{name:"orange",value:"#ff9800",labelDe:"Orange",labelEn:"Orange"},{name:"deep-orange",value:"#ff5722",labelDe:"Tieforange",labelEn:"Deep Orange"},{name:"brown",value:"#795548",labelDe:"Braun",labelEn:"Brown"},{name:"grey",value:"#9e9e9e",labelDe:"Grau",labelEn:"Grey"},{name:"blue-grey",value:"#607d8b",labelDe:"Blaugrau",labelEn:"Blue Grey"}],Pe={de:{year:"Jahr",dayOfYear:"Tag im Jahr",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt (%)",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day of Year",isoWeek:"ISO Week",month:"Month",quarter:"Quarter",progress:"Progress (%)",remainingDays:"Remaining Days"}},He={de:{general:"Allgemein",title:"Titel",titleHelper:"Optionaler Titel für die Karte",locale:"Sprache",localeAuto:"Automatisch",german:"Deutsch",english:"Englisch",layout:"Layout",borderless:"Rahmenlos",borderlessHelper:"Entfernt Rahmen und Schatten",compactFacts:"Kompakte Kennzahlen",compactFactsHelper:"Reduziert Abstände zwischen Kennzahlen",factsColumns:"Spalten für Kennzahlen",facts:"Kennzahlen",bar:"Zeitstrahl",segments:"Segment-Linien",barLabels:"Beschriftung",none:"Keine",quarters:"Quartale",months:"Monate",weeks:"Wochen",todayMarker:"Heute-Marker anzeigen",progressFill:"Fortschritt füllen",progressColor:"Fortschrittsfarbe",progressColorHelper:"Leer = Standardfarbe",customColor:"Benutzerdefiniert",markers:"Marker",addMarker:"Marker hinzufügen",editMarker:"Marker bearbeiten",back:"Zurück",entity:"Entität",label:"Bezeichnung",labelHelper:"Leer = Entity-Name verwenden",type:"Typ",point:"Punkt",rangeStart:"Bereich Start",rangeEnd:"Bereich Ende",showOnBar:"Auf Balken anzeigen",showInList:"In Liste anzeigen",markerColor:"Marker-Farbe",noMarkers:"Keine Marker konfiguriert",addFact:"Kennzahl hinzufügen",showYamlEditor:"YAML-Editor anzeigen",showVisualEditor:"Visuellen Editor anzeigen"},en:{general:"General",title:"Title",titleHelper:"Optional card title",locale:"Language",localeAuto:"Automatic",german:"German",english:"English",layout:"Layout",borderless:"Borderless",borderlessHelper:"Remove border and shadow",compactFacts:"Compact Facts",compactFactsHelper:"Reduce spacing between facts",factsColumns:"Facts Columns",facts:"Facts",bar:"Timeline Bar",segments:"Segment Lines",barLabels:"Labels",none:"None",quarters:"Quarters",months:"Months",weeks:"Weeks",todayMarker:"Show Today Marker",progressFill:"Show Progress Fill",progressColor:"Progress Color",progressColorHelper:"Empty = default color",customColor:"Custom",markers:"Markers",addMarker:"Add Marker",editMarker:"Edit Marker",back:"Back",entity:"Entity",label:"Label",labelHelper:"Empty = use entity name",type:"Type",point:"Point",rangeStart:"Range Start",rangeEnd:"Range End",showOnBar:"Show on Bar",showInList:"Show in List",markerColor:"Marker Color",noMarkers:"No markers configured",addFact:"Add fact",showYamlEditor:"Show YAML editor",showVisualEditor:"Show visual editor"}},Fe=async()=>{var e,t,r;const s=await((e=window.loadCardHelpers)==null?void 0:e.call(window));s&&await((r=(t=(await s.createCardElement({type:"entities",entities:[]})).constructor).getConfigElement)==null?void 0:r.call(t))};Fe();let k=class extends _{constructor(){super(...arguments),this._editingMarkerIndex=null,this._markerYamlMode=!1,this._helpersLoaded=!1,this._onTitleChange=s=>{const e=s.target,t={...this._config};e.value?t.title=e.value:delete t.title,this._updateConfig(t)},this._onLocaleChange=s=>{const e=s.target.value;e&&this._updateConfig({...this._config,locale:e})},this._onBorderlessChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,borderless:e.checked}})},this._onCompactFactsChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,compact_facts:e.checked}})},this._onFactsColumnsChange=s=>{var t;const e=s.target.value;e&&this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,facts_columns:parseInt(e,10)}})},this._onAddFact=s=>{var a,i;const e=s.target.value;if(!e)return;const t=((i=(a=this._config)==null?void 0:a.facts)==null?void 0:i.show)??["year","dayOfYear","isoWeek","quarter"];if(t.includes(e))return;const r=[...t,e];this._updateConfig({...this._config,facts:{show:r}}),s.target.value=""},this._onFactMoved=s=>{var i,n;const{oldIndex:e,newIndex:t}=s.detail,r=[...((n=(i=this._config)==null?void 0:i.facts)==null?void 0:n.show)??["year","dayOfYear","isoWeek","quarter"]],[a]=r.splice(e,1);a&&r.splice(t,0,a),this._updateConfig({...this._config,facts:{show:r}})},this._onSegmentsChange=s=>{var t;const e=s.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,segments:e}})},this._onLabelsChange=s=>{var t;const e=s.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,labels:e}})},this._onTodayMarkerChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_today_marker:e.checked}})},this._onProgressFillChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_progress_fill:e.checked}})},this._onProgressColorChange=s=>{const e=s.target.value,t={...this._config};e&&e!=="default"?t.bar={...t.bar,progress_color:e}:(t.bar={...t.bar},delete t.bar.progress_color),this._updateConfig(t)},this._entityFilter=s=>{var a;if(s.entity_id.split(".")[0]==="input_datetime")return!0;const r=(a=s.attributes)==null?void 0:a.device_class;return r==="timestamp"||r==="date"},this._onAddMarkerEntity=s=>{var a;const e=s.detail.value;if(!e)return;const t=[...((a=this._config)==null?void 0:a.markers)??[]],r=this._getRandomMarkerColor();t.push({entity:e,type:f.type,color:r,showOnBar:f.showOnBar,showInList:f.showInList}),this._updateConfig({...this._config,markers:t})},this._onBackFromSubEditor=()=>{this._editingMarkerIndex=null,this._markerYamlMode=!1},this._onToggleMarkerYamlMode=()=>{this._markerYamlMode=!this._markerYamlMode},this._onMarkerYamlChange=s=>{var r;const e=s.detail.value,t=this._yamlToMarker(e);if(t&&this._editingMarkerIndex!==null){const a=[...((r=this._config)==null?void 0:r.markers)??[]];a[this._editingMarkerIndex]=t,this._updateConfig({...this._config,markers:a})}}}setConfig(s){this._config=s}async connectedCallback(){super.connectedCallback(),await Fe(),this._helpersLoaded=!0}_getLocale(){var e,t;const s=(e=this._config)==null?void 0:e.locale;if(!s||s==="auto"){const a=(((t=this.hass)==null?void 0:t.language)??"en").split("-")[0];return a&&(a==="de"||a==="en")?a:"en"}return s}_getLabels(){const s=this._getLocale();return He[s]??He.en}render(){return!this._config||!this._helpersLoaded?c``:this._editingMarkerIndex!==null?this._renderMarkerSubEditor():c`
      <div class="editor-container">
        ${this._renderGeneralSection()}
        ${this._renderLayoutSection()}
        ${this._renderFactsSection()}
        ${this._renderBarSection()}
        ${this._renderMarkersSection()}
      </div>
    `}_renderGeneralSection(){var t,r;const s=this._getLabels(),e=((t=this._config)==null?void 0:t.locale)??"auto";return c`
      <ha-expansion-panel outlined .header=${s.general}>
        <div class="content">
          <div class="form-row">
            <ha-textfield
              .label=${s.title}
              .helper=${s.titleHelper}
              .value=${((r=this._config)==null?void 0:r.title)??""}
              @input=${this._onTitleChange}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-select
              .label=${s.locale}
              .value=${e}
              @selected=${this._onLocaleChange}
              @closed=${a=>a.stopPropagation()}
            >
              <mwc-list-item value="auto">${s.localeAuto}</mwc-list-item>
              <mwc-list-item value="de">${s.german}</mwc-list-item>
              <mwc-list-item value="en">${s.english}</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderLayoutSection(){var t;const s=this._getLabels(),e=((t=this._config)==null?void 0:t.layout)??{};return c`
      <ha-expansion-panel outlined .header=${s.layout}>
        <div class="content">
          <div class="switch-row">
            <span>${s.borderless}</span>
            <ha-switch
              .checked=${e.borderless??!1}
              @change=${this._onBorderlessChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${s.compactFacts}</span>
            <ha-switch
              .checked=${e.compact_facts??!1}
              @change=${this._onCompactFactsChange}
            ></ha-switch>
          </div>
          <div class="form-row">
            <ha-select
              .label=${s.factsColumns}
              .value=${String(e.facts_columns??2)}
              @selected=${this._onFactsColumnsChange}
              @closed=${r=>r.stopPropagation()}
            >
              <mwc-list-item value="1">1</mwc-list-item>
              <mwc-list-item value="2">2</mwc-list-item>
              <mwc-list-item value="3">3</mwc-list-item>
              <mwc-list-item value="4">4</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderFactsSection(){var i,n;const s=this._getLabels(),e=this._getLocale(),t=Pe[e]??Pe.de,r=((n=(i=this._config)==null?void 0:i.facts)==null?void 0:n.show)??["year","dayOfYear","isoWeek","quarter"],a=zt.filter(o=>!r.includes(o));return c`
      <ha-expansion-panel outlined .header=${s.facts}>
        <div class="content">
          ${r.length>0?c`
                <ha-sortable no-style @item-moved=${this._onFactMoved}>
                  <ha-chip-set>
                    ${r.map(o=>c`
                        <ha-input-chip
                          .label=${t[o]}
                          @remove=${()=>this._onRemoveFact(o)}
                        ></ha-input-chip>
                      `)}
                  </ha-chip-set>
                </ha-sortable>
              `:u}
          ${a.length>0?c`
                <ha-select
                  .label=${s.addFact}
                  @selected=${this._onAddFact}
                  @closed=${o=>o.stopPropagation()}
                >
                  ${a.map(o=>c`
                      <mwc-list-item .value=${o}>${t[o]}</mwc-list-item>
                    `)}
                </ha-select>
              `:u}
        </div>
      </ha-expansion-panel>
    `}_renderBarSection(){var t;const s=this._getLabels(),e=((t=this._config)==null?void 0:t.bar)??{};return c`
      <ha-expansion-panel outlined .header=${s.bar}>
        <div class="content">
          <div class="form-row">
            <ha-select
              .label=${s.segments}
              .value=${e.segments??"months"}
              @selected=${this._onSegmentsChange}
              @closed=${r=>r.stopPropagation()}
            >
              <mwc-list-item value="none">${s.none}</mwc-list-item>
              <mwc-list-item value="quarters">${s.quarters}</mwc-list-item>
              <mwc-list-item value="months">${s.months}</mwc-list-item>
              <mwc-list-item value="weeks">${s.weeks}</mwc-list-item>
            </ha-select>
          </div>
          <div class="form-row">
            <ha-select
              .label=${s.barLabels}
              .value=${e.labels??"quarters"}
              @selected=${this._onLabelsChange}
              @closed=${r=>r.stopPropagation()}
            >
              <mwc-list-item value="none">${s.none}</mwc-list-item>
              <mwc-list-item value="quarters">${s.quarters}</mwc-list-item>
              <mwc-list-item value="months">${s.months}</mwc-list-item>
            </ha-select>
          </div>
          <div class="switch-row">
            <span>${s.todayMarker}</span>
            <ha-switch
              .checked=${e.show_today_marker??!0}
              @change=${this._onTodayMarkerChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${s.progressFill}</span>
            <ha-switch
              .checked=${e.show_progress_fill??!0}
              @change=${this._onProgressFillChange}
            ></ha-switch>
          </div>
          ${e.show_progress_fill??!0?c`
                <div class="form-row">
                  <ha-select
                    class="color-picker-select"
                    .label=${s.progressColor}
                    .value=${e.progress_color??"default"}
                    @selected=${this._onProgressColorChange}
                    @closed=${r=>r.stopPropagation()}
                  >
                    ${this._renderColorOptions()}
                  </ha-select>
                </div>
              `:u}
        </div>
      </ha-expansion-panel>
    `}_renderColorOptions(){var i,n;const s=this._getLocale(),e=this._getLabels(),t=((n=(i=this._config)==null?void 0:i.bar)==null?void 0:n.progress_color)??"default",r=t!=="default"&&!W.some(o=>o.value===t),a=[];return r&&a.push(c`
        <mwc-list-item value=${t} .selected=${!0} graphic="icon">
          <span class="color-item">
            <span class="color-dot" style="background-color: ${t}"></span>
            ${e.customColor} (${t})
          </span>
        </mwc-list-item>
      `),W.forEach(o=>{const l=s==="de"?o.labelDe:o.labelEn,h=o.value==="default",p=h?"color-dot default":"color-dot",d=h?"":`background-color: ${o.value}`,g=!r&&o.value===t;a.push(c`
        <mwc-list-item value=${o.value} .selected=${g} graphic="icon">
          <span class="color-item">
            <span class=${p} style=${d}></span>
            ${l}
          </span>
        </mwc-list-item>
      `)}),a}_renderMarkerColorOptions(s){const e=this._getLocale(),t=this._getLabels(),r=s??"default",a=r!=="default"&&!W.some(n=>n.value===r),i=[];return a&&i.push(c`
        <mwc-list-item value=${r} .selected=${!0} graphic="icon">
          <span class="color-item">
            <span class="color-dot" style="background-color: ${r}"></span>
            ${t.customColor} (${r})
          </span>
        </mwc-list-item>
      `),W.forEach(n=>{const o=e==="de"?n.labelDe:n.labelEn,l=n.value==="default",h=l?"color-dot default":"color-dot",p=l?"":`background-color: ${n.value}`,d=!a&&n.value===r;i.push(c`
        <mwc-list-item value=${n.value} .selected=${d} graphic="icon">
          <span class="color-item">
            <span class=${h} style=${p}></span>
            ${o}
          </span>
        </mwc-list-item>
      `)}),i}_renderMarkersSection(){var t;const s=this._getLabels(),e=((t=this._config)==null?void 0:t.markers)??[];return c`
      <ha-expansion-panel outlined .header=${s.markers}>
        <div class="content">
          ${e.length>0?c`
                <div class="marker-list">
                  ${e.map((r,a)=>this._renderMarkerRow(r,a))}
                </div>
              `:u}

          <ha-entity-picker
            .hass=${this.hass}
            .entityFilter=${this._entityFilter}
            @value-changed=${this._onAddMarkerEntity}
            add-button
          ></ha-entity-picker>
        </div>
      </ha-expansion-panel>
    `}_renderMarkerRow(s,e){var i;const t=(i=this.hass)==null?void 0:i.states[s.entity],r=(t==null?void 0:t.attributes.friendly_name)??s.entity,a=s.label||r;return c`
      <div class="marker-row">
        <ha-icon class="handle" icon="mdi:drag"></ha-icon>
        <ha-icon
          icon=${(t==null?void 0:t.attributes.icon)??"mdi:calendar"}
        ></ha-icon>
        <div class="marker-info">
          <div class="marker-name">${a}</div>
          <div class="marker-entity">${s.entity}</div>
        </div>
        <div class="marker-actions">
          <ha-icon-button
            .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
            @click=${()=>this._onEditMarker(e)}
          ></ha-icon-button>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>this._onDeleteMarker(e)}
          ></ha-icon-button>
        </div>
      </div>
    `}_renderMarkerSubEditor(){var l,h,p;const s=this._getLabels(),e=this._editingMarkerIndex,t=(h=(l=this._config)==null?void 0:l.markers)==null?void 0:h[e];if(!t)return this._editingMarkerIndex=null,c``;const r=(p=this.hass)==null?void 0:p.states[t.entity],a=(r==null?void 0:r.attributes.friendly_name)??t.entity,i="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z",n="M14,17H17V14H19V17H22V19H19V22H17V19H14V17M12,17V19H9V17H12M7,17V19H3V15H5V17H7M3,13V10H5V13H3M3,8V4H7V6H5V8H3M9,4H12V6H9V4M15,4H19V8H17V6H15V4M19,10V12H17V10H19Z",o=this._markerYamlMode?s.showVisualEditor:s.showYamlEditor;return c`
      <div class="sub-editor">
        <div class="sub-editor-header">
          <ha-icon-button
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._onBackFromSubEditor}
          ></ha-icon-button>
          <span class="sub-editor-title">${s.editMarker}: ${a}</span>
          <ha-icon-button
            class="yaml-toggle"
            .path=${this._markerYamlMode?n:i}
            title=${o}
            @click=${this._onToggleMarkerYamlMode}
          ></ha-icon-button>
        </div>

        ${this._markerYamlMode?this._renderMarkerYamlEditor(t):this._renderMarkerVisualEditor(t,a,s)}
      </div>
    `}_renderMarkerVisualEditor(s,e,t){return c`
      <div class="form-row">
        <ha-textfield
          .label=${t.label}
          .helper=${t.labelHelper}
          .value=${s.label??""}
          .placeholder=${e}
          @input=${r=>this._onMarkerFieldChange("label",r)}
        ></ha-textfield>
      </div>

      <div class="form-row">
        <ha-select
          .label=${t.type}
          .value=${s.type??f.type}
          @selected=${r=>this._onMarkerTypeChange(r)}
          @closed=${r=>r.stopPropagation()}
        >
          <mwc-list-item value="point">${t.point}</mwc-list-item>
          <mwc-list-item value="rangeStart">${t.rangeStart}</mwc-list-item>
          <mwc-list-item value="rangeEnd">${t.rangeEnd}</mwc-list-item>
        </ha-select>
      </div>

      <div class="form-row">
        <ha-select
          class="color-picker-select"
          .label=${t.markerColor}
          .value=${s.color??"default"}
          @selected=${r=>this._onMarkerColorChange(r)}
          @closed=${r=>r.stopPropagation()}
        >
          ${this._renderMarkerColorOptions(s.color)}
        </ha-select>
      </div>

      <div class="switch-row">
        <span>${t.showOnBar}</span>
        <ha-switch
          .checked=${s.showOnBar??f.showOnBar}
          @change=${r=>this._onMarkerSwitchChange("showOnBar",r)}
        ></ha-switch>
      </div>

      <div class="switch-row">
        <span>${t.showInList}</span>
        <ha-switch
          .checked=${s.showInList??f.showInList}
          @change=${r=>this._onMarkerSwitchChange("showInList",r)}
        ></ha-switch>
      </div>
    `}_renderMarkerYamlEditor(s){const e=this._markerToYaml(s);return c`
      <ha-code-editor
        .hass=${this.hass}
        .value=${e}
        mode="yaml"
        autofocus
        autocomplete-entities
        autocomplete-icons
        @value-changed=${this._onMarkerYamlChange}
      ></ha-code-editor>
    `}_markerToYaml(s){const e=[];return e.push(`entity: ${s.entity}`),s.label&&e.push(`label: "${s.label}"`),s.type&&s.type!==f.type&&e.push(`type: ${s.type}`),s.color&&e.push(`color: "${s.color}"`),s.showOnBar!==void 0&&s.showOnBar!==f.showOnBar&&e.push(`showOnBar: ${s.showOnBar}`),s.showInList!==void 0&&s.showInList!==f.showInList&&e.push(`showInList: ${s.showInList}`),e.join(`
`)}_yamlToMarker(s){try{const e=s.split(`
`),t={};for(const r of e){const a=r.trim();if(!a||a.startsWith("#"))continue;const i=a.indexOf(":");if(i===-1)continue;const n=a.substring(0,i).trim();let o=a.substring(i+1).trim();typeof o=="string"&&(o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'"))&&(o=o.slice(1,-1)),o==="true"&&(o=!0),o==="false"&&(o=!1),t[n]=o}return!t.entity||typeof t.entity!="string"?null:{entity:t.entity,label:t.label,type:t.type,color:t.color,showOnBar:t.showOnBar,showInList:t.showInList}}catch{return null}}_onRemoveFact(s){var r,a;const t=(((a=(r=this._config)==null?void 0:r.facts)==null?void 0:a.show)??["year","dayOfYear","isoWeek","quarter"]).filter(i=>i!==s);this._updateConfig({...this._config,facts:{show:t}})}_onEditMarker(s){this._editingMarkerIndex=s}_onDeleteMarker(s){var t;const e=[...((t=this._config)==null?void 0:t.markers)??[]];e.splice(s,1),this._updateConfig({...this._config,markers:e})}_onMarkerFieldChange(s,e){const t=e.target;this._updateMarker({[s]:t.value||void 0})}_onMarkerTypeChange(s){const e=s.target.value;e&&this._updateMarker({type:e})}_onMarkerColorChange(s){const e=s.target.value;e&&e!=="default"?this._updateMarker({color:e}):this._updateMarker({color:void 0})}_onMarkerSwitchChange(s,e){const t=e.target;this._updateMarker({[s]:t.checked})}_updateMarker(s){var r;if(this._editingMarkerIndex===null)return;const e=[...((r=this._config)==null?void 0:r.markers)??[]],t=e[this._editingMarkerIndex];t&&(e[this._editingMarkerIndex]={...t,...s},this._updateConfig({...this._config,markers:e}))}_updateConfig(s){this._config=s;const e=new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}_getRandomMarkerColor(){var i,n,o;const s=W.filter(l=>l.value!=="default").map(l=>l.value),e=(n=(i=this._config)==null?void 0:i.bar)==null?void 0:n.progress_color,t=new Set;for(const l of((o=this._config)==null?void 0:o.markers)??[])l.color&&t.add(l.color);let r=s.filter(l=>!t.has(l)&&l!==e);if(r.length===0&&(r=s.filter(l=>l!==e)),r.length===0)return s[0];const a=Math.floor(Math.random()*r.length);return r[a]}};k.styles=I`
    .editor-container {
      display: flex;
      flex-direction: column;
    }

    ha-expansion-panel {
      margin-bottom: 4px;
    }

    .content {
      padding: 12px;
    }

    /* Facts chips */
    ha-chip-set {
      margin-bottom: 8px;
    }

    /* Marker list */
    .marker-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .marker-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--secondary-background-color);
      border-radius: 8px;
    }

    .marker-row .handle {
      cursor: grab;
      color: var(--secondary-text-color);
    }

    .marker-info {
      flex: 1;
      min-width: 0;
    }

    .marker-name {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .marker-entity {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .marker-actions {
      display: flex;
      gap: 4px;
    }

    .no-markers {
      padding: 16px;
      text-align: center;
      color: var(--secondary-text-color);
      font-style: italic;
    }


    /* Sub-editor (marker detail) */
    .sub-editor {
      display: flex;
      flex-direction: column;
    }

    .sub-editor-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }

    .sub-editor-title {
      flex: 1;
      font-weight: 500;
      font-size: 1.1em;
    }

    .form-row {
      margin-bottom: 16px;
    }

    .form-row:last-child {
      margin-bottom: 0;
    }

    ha-textfield,
    ha-select {
      width: 100%;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }

    .switch-row span {
      color: var(--primary-text-color);
    }

    /* YAML editor */
    ha-code-editor {
      display: block;
      min-height: 150px;
    }

    .yaml-toggle {
      margin-left: auto;
    }

    /* Color picker */
    .color-picker-select {
      --mdc-menu-max-height: 300px;
    }

    .color-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid var(--divider-color);
      flex-shrink: 0;
    }

    .color-dot.default {
      background: linear-gradient(135deg, var(--primary-color) 50%, var(--disabled-color) 50%);
    }

    .color-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  `,F([m({attribute:!1})],k.prototype,"hass",2),F([D()],k.prototype,"_config",2),F([D()],k.prototype,"_editingMarkerIndex",2),F([D()],k.prototype,"_markerYamlMode",2),F([D()],k.prototype,"_helpersLoaded",2),k=F([j("year-timeline-card-editor")],k);var Rt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,X=(s,e,t,r)=>{for(var a=r>1?void 0:r?Ut(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&Rt(e,t,a),a};return y.YearTimelineCard=class extends _{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!$t(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=bt(e)}getCardSize(){var t,r;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(r=this._config)!=null&&r.facts&&this._config.facts.length>0&&(e+=1),e}getGridOptions(){return{rows:2,columns:12,min_rows:1,min_columns:6}}static getConfigElement(){return document.createElement("year-timeline-card-editor")}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return c`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=ce(this._now),r=this.resolveMarkers(e),a=this.toBarMarkers(r),i=this._resolveLocale(),n=this._config.layout,o=n.borderless?"borderless":"",l=this._config.bar.progressColor?`--ytc-primary-color: ${this._config.bar.progressColor}`:"";return c`
      <ha-card class=${o} style=${l}>
        ${this._config.title?c`<div class="card-header">${this._config.title}</div>`:u}
        <div class="card-content">
          ${this._config.facts.length>0?c`
                <ytc-facts-block
                  .date=${this._now}
                  .facts=${this._config.facts}
                  .locale=${i}
                  .compact=${n.compactFacts}
                  .columns=${n.factsColumns}
                ></ytc-facts-block>
              `:u}
          <ytc-timeline-bar
            .progress=${t}
            .year=${e}
            .locale=${i}
            .config=${this._config.bar}
            .markers=${a}
          ></ytc-timeline-bar>
          ${r.some(h=>h.showInList)?c`
                <ytc-marker-list
                  .markers=${r}
                  .locale=${i}
                ></ytc-marker-list>
              `:u}
        </div>
      </ha-card>
    `}_resolveLocale(){var t,r;const e=(t=this._config)==null?void 0:t.locale;if(!e||e==="auto"){const i=(((r=this.hass)==null?void 0:r.language)??"en").split("-")[0];return i&&(i==="de"||i==="en")?i:"en"}return e}renderError(){return c`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `}resolveMarkers(e){return!this._config||!this.hass?[]:Dt(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type,color:t.color}))}},y.YearTimelineCard.styles=it,X([m({attribute:!1})],y.YearTimelineCard.prototype,"hass",2),X([D()],y.YearTimelineCard.prototype,"_config",2),X([D()],y.YearTimelineCard.prototype,"_error",2),y.YearTimelineCard=X([j("year-timeline-card")],y.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.1 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),y}({});
