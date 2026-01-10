var YearTimelineCard=function(y){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const J=globalThis,te=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),de=new WeakMap;let ue=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(te&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&de.set(t,e))}return e}toString(){return this.cssText}};const Be=r=>new ue(typeof r=="string"?r:r+"",void 0,re),I=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,a,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[i+1],r[0]);return new ue(t,r,re)},Ye=(r,e)=>{if(te)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),a=J.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=t.cssText,r.appendChild(s)}},pe=te?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Be(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:Ve,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Re,getOwnPropertySymbols:Ue,getPrototypeOf:je}=Object,b=globalThis,me=b.trustedTypes,qe=me?me.emptyScript:"",se=b.reactiveElementPolyfillSupport,B=(r,e)=>r,K={toAttribute(r,e){switch(e){case Boolean:r=r?qe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ae=(r,e)=>!Ne(r,e),fe={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(e,s,t);a!==void 0&&Ve(this.prototype,e,a)}}static getPropertyDescriptor(e,t,s){const{get:a,set:i}=ze(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:a,set(n){const o=a==null?void 0:a.call(this);i==null||i.call(this,n),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const t=this.properties,s=[...Re(t),...Ue(t)];for(const a of s)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,a]of t)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const a=this._$Eu(t,s);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const a of s)t.unshift(pe(a))}else e!==void 0&&t.push(pe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var i;const s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:K).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){var i,n;const s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const o=s.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:K;this._$Em=a;const h=l.fromAttribute(t,o.type);this[a]=h??((n=this._$Ej)==null?void 0:n.get(a))??h,this._$Em=null}}requestUpdate(e,t,s,a=!1,i){var n;if(e!==void 0){const o=this.constructor;if(a===!1&&(i=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??ae)(i,t)||s.useDefault&&s.reflect&&i===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:a,wrapped:i},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,n]of a){const{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[B("elementProperties")]=new Map,S[B("finalized")]=new Map,se==null||se({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,ge=r=>r,G=Y.trustedTypes,ye=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,_e="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+v,We=`<${be}>`,A=document,N=()=>A.createComment(""),V=r=>r===null||typeof r!="object"&&typeof r!="function",ie=Array.isArray,Je=r=>ie(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,$e=/>/g,x=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,ke=/"/g,Me=/^(?:script|style|textarea|title)$/i,Ke=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=Ke(1),L=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ae=new WeakMap,C=A.createTreeWalker(A,129);function xe(r,e){if(!ie(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(e):e}const Ge=(r,e)=>{const t=r.length-1,s=[];let a,i=e===2?"<svg>":e===3?"<math>":"",n=z;for(let o=0;o<t;o++){const l=r[o];let h,p,d=-1,g=0;for(;g<l.length&&(n.lastIndex=g,p=n.exec(l),p!==null);)g=n.lastIndex,n===z?p[1]==="!--"?n=ve:p[1]!==void 0?n=$e:p[2]!==void 0?(Me.test(p[2])&&(a=RegExp("</"+p[2],"g")),n=x):p[3]!==void 0&&(n=x):n===x?p[0]===">"?(n=a??z,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?x:p[3]==='"'?ke:we):n===ke||n===we?n=x:n===ve||n===$e?n=z:(n=x,a=void 0);const M=n===x&&r[o+1].startsWith("/>")?" ":"";i+=n===z?l+We:d>=0?(s.push(h),l.slice(0,d)+_e+l.slice(d)+v+M):l+v+(d===-2?o:M)}return[xe(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class R{constructor({strings:e,_$litType$:t},s){let a;this.parts=[];let i=0,n=0;const o=e.length-1,l=this.parts,[h,p]=Ge(e,t);if(this.el=R.createElement(h,s),C.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=C.nextNode())!==null&&l.length<o;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(_e)){const g=p[n++],M=a.getAttribute(d).split(v),ee=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:ee[2],strings:M,ctor:ee[1]==="."?Ze:ee[1]==="?"?Xe:ee[1]==="@"?et:Q}),a.removeAttribute(d)}else d.startsWith(v)&&(l.push({type:6,index:i}),a.removeAttribute(d));if(Me.test(a.tagName)){const d=a.textContent.split(v),g=d.length-1;if(g>0){a.textContent=G?G.emptyScript:"";for(let M=0;M<g;M++)a.append(d[M],N()),C.nextNode(),l.push({type:2,index:++i});a.append(d[g],N())}}}else if(a.nodeType===8)if(a.data===be)l.push({type:2,index:i});else{let d=-1;for(;(d=a.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:i}),d+=v.length-1}i++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function O(r,e,t=r,s){var n,o;if(e===L)return e;let a=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const i=V(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((o=a==null?void 0:a._$AO)==null||o.call(a,!1),i===void 0?a=void 0:(a=new i(r),a._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=a:t._$Cl=a),a!==void 0&&(e=O(r,a._$AS(r,e.values),a,s)),e}class Qe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,a=((e==null?void 0:e.creationScope)??A).importNode(t,!0);C.currentNode=a;let i=C.nextNode(),n=0,o=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new U(i,i.nextSibling,this,e):l.type===1?h=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(h=new tt(i,this,e)),this._$AV.push(h),l=s[++o]}n!==(l==null?void 0:l.index)&&(i=C.nextNode(),n++)}return C.currentNode=A,a}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,a){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),V(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=R.createElement(xe(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(t);else{const n=new Qe(a,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new R(e)),t}k(e){ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,a=0;for(const i of e)a===t.length?t.push(s=new U(this.O(N()),this.O(N()),this,this.options)):s=t[a],s._$AI(i),a++;a<t.length&&(this._$AR(s&&s._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const a=ge(e).nextSibling;ge(e).remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,a,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,a){const i=this.strings;let n=!1;if(i===void 0)e=O(this,e,t,0),n=!V(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{const o=e;let l,h;for(e=i[0],l=0;l<i.length-1;l++)h=O(this,o[s+l],t,l),h===L&&(h=this._$AH[l]),n||(n=!V(h)||h!==this._$AH[l]),h===u?e=u:e!==u&&(e+=(h??"")+i[l+1]),this._$AH[l]=h}n&&!a&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ze extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Xe extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class et extends Q{constructor(e,t,s,a,i){super(e,t,s,a,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??u)===L)return;const s=this._$AH,a=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==u&&(s===u||a);a&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const oe=Y.litHtmlPolyfillSupport;oe==null||oe(R,U),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.3.2");const rt=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let a=s._$litPart$;if(a===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=a=new U(e.insertBefore(N(),i),i,void 0,t??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class _ extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}_._$litElement$=!0,_.finalized=!0,(Ie=E.litElementHydrateSupport)==null||Ie.call(E,{LitElement:_});const le=E.litElementPolyfillSupport;le==null||le({LitElement:_}),(E.litElementVersions??(E.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ae},at=(r=st,e,t)=>{const{kind:s,metadata:a}=t;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(n,l,r,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,r,o),o}}}if(s==="setter"){const{name:n}=t;return function(o){const l=this[n];e.call(this,o),this.requestUpdate(n,l,r,!0,o)}}throw Error("Unsupported decorator location: "+s)};function m(r){return(e,t)=>typeof t=="object"?at(r,e,t):((s,a,i)=>{const n=a.hasOwnProperty(i);return a.constructor.createProperty(i,s),n?Object.getOwnPropertyDescriptor(a,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(r){return m({...r,state:!0,attribute:!1})}const it=I`
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
  :host {
    display: block;
    width: 100%;
    /* Fallback values for CSS variables in case inheritance is broken */
    --ytc-primary-color: var(--primary-color, #03a9f4);
    --ytc-text-primary: var(--primary-text-color, #212121);
    --ytc-text-secondary: var(--secondary-text-color, #727272);
    --ytc-background: var(--card-background-color, #fff);
    --ytc-divider: var(--divider-color, #e0e0e0);
    --ytc-bar-background: var(--disabled-color, #bdbdbd);
    --ytc-bar-height: 24px;
    --ytc-marker-color: var(--accent-color, #ff9800);
  }

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
  :host {
    display: block;
    width: 100%;
    /* Fallback values for CSS variables in case inheritance is broken */
    --ytc-text-primary: var(--primary-text-color, #212121);
    --ytc-text-secondary: var(--secondary-text-color, #727272);
  }

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
  :host {
    display: block;
    width: 100%;
    /* Fallback values for CSS variables in case inheritance is broken */
    --ytc-text-primary: var(--primary-text-color, #212121);
    --ytc-text-secondary: var(--secondary-text-color, #727272);
    --ytc-divider: var(--divider-color, #e0e0e0);
    --ytc-marker-color: var(--accent-color, #ff9800);
  }

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
`,ct=["year","dayOfYear","isoWeek","quarter"],T={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0,progressColor:null},Z={borderless:!1,compactFacts:!1,factsColumns:2},ht="auto",f={type:"point",color:null,showOnBar:!0,showInList:!0};function dt(r){if(!r||!r.show)return ct;const e=r.show;return Array.isArray(e)?e.filter(s=>ut(s)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(s=>e[s]===!0)}function ut(r){return typeof r=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(r)}function pt(r){return r?{segments:ft(r.segments),labels:gt(r.labels),showTodayMarker:r.show_today_marker??T.showTodayMarker,showProgressFill:r.show_progress_fill??T.showProgressFill,progressColor:r.progress_color??T.progressColor}:T}function mt(r){return r?{borderless:r.borderless??Z.borderless,compactFacts:r.compact_facts??Z.compactFacts,factsColumns:r.facts_columns??Z.factsColumns}:Z}function ft(r){return r&&["none","quarters","months","weeks"].includes(r)?r:T.segments}function gt(r){return r&&["none","quarters","months"].includes(r)?r:T.labels}function yt(r){var a,i;if(!r.entity||typeof r.entity!="string")return null;let e="state";if(r.source&&r.source!=="state"){const n=/^attribute:(.+)$/.exec(r.source);n&&n[1]&&(e={attribute:n[1]})}const s=["point","rangeStart","rangeEnd","range"].includes(r.type)?r.type:f.type;return{entity:r.entity,label:((a=r.label)==null?void 0:a.trim())||null,source:e,type:s,color:((i=r.color)==null?void 0:i.trim())||f.color,showOnBar:r.showOnBar??f.showOnBar,showInList:r.showInList??f.showInList}}function _t(r){if(!r||!Array.isArray(r))return[];const e=[];for(const t of r){const s=yt(t);s&&e.push(s)}return e}function bt(r){return{title:r.title??null,locale:r.locale??ht,layout:mt(r.layout),facts:dt(r.facts),bar:pt(r.bar),markers:_t(r.markers)}}function vt(r){if(!r||typeof r!="object")return!1;const e=r;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function $t(r){return r%4===0&&r%100!==0||r%400===0}function Ce(r){return $t(r)?366:365}function Ee(r){const e=new Date(r.getFullYear(),0,0),t=r.getTime()-e.getTime(),s=1e3*60*60*24;return Math.floor(t/s)}function wt(r){const e=new Date(r.valueOf()),t=(r.getDay()+6)%7;e.setDate(e.getDate()-t+3);const s=new Date(e.getFullYear(),0,4),a=(s.getDay()+6)%7;s.setDate(s.getDate()-a+3);const i=e.getTime()-s.getTime();return 1+Math.round(i/6048e5)}function kt(r){return Math.floor(r.getMonth()/3)+1}function ce(r){const e=r.getFullYear(),t=new Date(e,0,1).getTime(),s=new Date(e+1,0,1).getTime(),i=(r.getTime()-t)/(s-t)*100;return Math.min(100,Math.max(0,i))}function Mt(r){const e=r.getFullYear(),t=Ce(e),s=Ee(r);return t-s}function At(r){if(r instanceof Date)return isNaN(r.getTime())?null:r;if(typeof r!="string"||r.trim()==="")return null;const e=r.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const s=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:a=>new Date(parseInt(a[1]),parseInt(a[2])-1,parseInt(a[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:a=>new Date(parseInt(a[3]),parseInt(a[2])-1,parseInt(a[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:a=>new Date(parseInt(a[3]),parseInt(a[1])-1,parseInt(a[2]))}];for(const{regex:a,parse:i}of s){const n=e.match(a);if(n){const o=i(n);if(!isNaN(o.getTime()))return o}}return null}const Se={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Le={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function Oe(r,e,t=!1){return(t?Le[e]??Le.de:Se[e]??Se.de)[r]??""}function xt(r){return r==="en"?"CW":"KW"}function Ct(r,e){if(r==="none")return[];const t=new Date(e,0,1).getTime(),a=new Date(e+1,0,1).getTime()-t,i=n=>(n.getTime()-t)/a*100;if(r==="quarters")return[0,i(new Date(e,3,1)),i(new Date(e,6,1)),i(new Date(e,9,1))];if(r==="months"){const n=[];for(let o=0;o<12;o++)n.push(i(new Date(e,o,1)));return n}if(r==="weeks"){const n=[],l=(new Date(e,0,1).getDay()+6)%7;let h;l<=3?h=new Date(e,0,1-l):h=new Date(e,0,8-l);let p=h;for(;p.getFullYear()<=e;){const d=i(p);d>=0&&d<100&&n.push(d),p=new Date(p.getTime()+6048e5)}return n}return[]}function Et(r,e,t){if(r==="none")return[];const s=new Date(e,0,1).getTime(),i=new Date(e+1,0,1).getTime()-s,n=o=>(o.getTime()-s)/i*100;if(r==="quarters")return[{position:n(new Date(e,1,1)),label:"Q1"},{position:n(new Date(e,4,1)),label:"Q2"},{position:n(new Date(e,7,1)),label:"Q3"},{position:n(new Date(e,10,1)),label:"Q4"}];if(r==="months"){const o=[];for(let l=0;l<12;l++){const h=new Date(e,l,1),p=new Date(e,l+1,1),d=new Date((h.getTime()+p.getTime())/2);o.push({position:n(d),label:Oe(l,t,!0)})}return o}return[]}function St(r,e){return e==="state"?r.state:r.attributes[e.attribute]}function Lt(r,e){return r.label?r.label:e.attributes.friendly_name??r.entity}function Ot(r,e,t){const s=e[r.entity];if(!s)return null;const a=St(s,r.source),i=At(a);if(!i||i.getFullYear()!==t)return null;const n=ce(i);return{label:Lt(r,s),date:i,position:n,type:r.type,color:r.color,showOnBar:r.showOnBar,showInList:r.showInList}}function Dt(r,e,t){const s=[];for(const a of r){const i=Ot(a,e,t);i&&s.push(i)}return s.sort((a,i)=>a.position-i.position),s}function Tt(r,e){const t=r.getDate(),s=r.getMonth()+1;return e==="en"?`${s}/${t}`:`${t}.${s}.`}var Pt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,P=(r,e,t,s)=>{for(var a=s>1?void 0:s?Ht(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(a=(s?n(e,t,a):n(a))||a);return s&&a&&Pt(e,t,a),a};let $=class extends _{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return c`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill?this.renderProgress():u}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker?this.renderTodayMarker():u}
        </div>
        ${this.renderLabels()}
      </div>
    `}renderProgress(){const r=Math.min(100,Math.max(0,this.progress));return c`
      <div class="timeline-progress" style="width: ${r}%"></div>
    `}renderTodayMarker(){const r=Math.min(100,Math.max(0,this.progress));return c`
      <div class="timeline-today-marker" style="left: ${r}%"></div>
    `}renderSegments(){const r=Ct(this.config.segments,this.year);if(r.length===0)return c``;const e=this.config.segments==="weeks";return c`
      <div class="timeline-segments">
        ${r.slice(1).map(t=>c`
            <div
              class="timeline-segment-line ${e?"week":""}"
              style="left: ${t}%"
            ></div>
          `)}
      </div>
    `}renderLabels(){const r=Et(this.config.labels,this.year,this.locale);return r.length===0?u:c`
      <div class="timeline-labels">
        ${r.map(e=>c`
            <span class="timeline-label">${e.label}</span>
          `)}
      </div>
    `}renderMarkers(){return this.markers.length===0?c``:c`
      <div class="timeline-markers">
        ${this.markers.map(r=>this.renderMarker(r))}
      </div>
    `}renderMarker(r){const e=Math.min(100,Math.max(0,r.position));let t="";r.type==="rangeStart"?t="range-start":r.type==="rangeEnd"&&(t="range-end");const s=r.color?`background-color: ${r.color}`:"";return c`
      <div
        class="timeline-marker ${t}"
        style="left: ${e}%; ${s}"
        title="${r.label}"
      ></div>
    `}};$.styles=nt,P([m({type:Number})],$.prototype,"progress",2),P([m({type:Number})],$.prototype,"year",2),P([m({type:String})],$.prototype,"locale",2),P([m({type:Object})],$.prototype,"config",2),P([m({type:Array})],$.prototype,"markers",2),$=P([j("ytc-timeline-bar")],$);var Ft=Object.defineProperty,It=Object.getOwnPropertyDescriptor,H=(r,e,t,s)=>{for(var a=s>1?void 0:s?It(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(a=(s?n(e,t,a):n(a))||a);return s&&a&&Ft(e,t,a),a};const De={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let w=class extends _{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de",this.compact=!1,this.columns=2}render(){if(this.facts.length===0)return c``;const r=`
      grid-template-columns: repeat(${this.columns}, 1fr);
      ${this.compact?"gap: 2px 12px;":""}
    `,e=this.compact?"fact-item compact":"fact-item";return c`
      <div class="facts-container" style=${r}>
        ${this.facts.map(t=>this.renderFact(t,e))}
      </div>
    `}renderFact(r,e){const t=this.getLabel(r),s=this.getValue(r);return s===null?u:c`
      <div class=${e}>
        <span class="fact-label">${t}</span>
        <span class="fact-value">${s}</span>
      </div>
    `}getLabel(r){return(De[this.locale]??De.de)[r]}getValue(r){const e=this.date.getFullYear();switch(r){case"year":return String(e);case"dayOfYear":{const t=Ee(this.date),s=Ce(e);return`${t} / ${s}`}case"isoWeek":{const t=wt(this.date);return`${xt(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return Oe(t,this.locale,!1)}case"quarter":return`Q${kt(this.date)}`;case"progress":return`${ce(this.date).toFixed(1)}%`;case"remainingDays":{const t=Mt(this.date);return String(t)}default:return null}}};w.styles=ot,H([m({type:Object})],w.prototype,"date",2),H([m({type:Array})],w.prototype,"facts",2),H([m({type:String})],w.prototype,"locale",2),H([m({type:Boolean})],w.prototype,"compact",2),H([m({type:Number})],w.prototype,"columns",2),w=H([j("ytc-facts-block")],w);var Bt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,he=(r,e,t,s)=>{for(var a=s>1?void 0:s?Yt(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(a=(s?n(e,t,a):n(a))||a);return s&&a&&Bt(e,t,a),a};const Te={de:"Ereignisse",en:"Events"};let q=class extends _{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const r=this.markers.filter(t=>t.showInList);if(r.length===0)return u;const e=Te[this.locale]??Te.de;return c`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${r.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(r){const e=Tt(r.date,this.locale),t=r.color?`background-color: ${r.color}`:"";return c`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot" style=${t}></span>
          <span class="marker-list-item-label">${r.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};q.styles=lt,he([m({type:Array})],q.prototype,"markers",2),he([m({type:String})],q.prototype,"locale",2),q=he([j("ytc-marker-list")],q);var Nt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,F=(r,e,t,s)=>{for(var a=s>1?void 0:s?Vt(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(a=(s?n(e,t,a):n(a))||a);return s&&a&&Nt(e,t,a),a};const zt=["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"],W=[{name:"default",value:"default",labelDe:"Standard",labelEn:"Default"},{name:"red",value:"#f44336",labelDe:"Rot",labelEn:"Red"},{name:"pink",value:"#e91e63",labelDe:"Pink",labelEn:"Pink"},{name:"purple",value:"#9c27b0",labelDe:"Lila",labelEn:"Purple"},{name:"deep-purple",value:"#673ab7",labelDe:"Tiefviolett",labelEn:"Deep Purple"},{name:"indigo",value:"#3f51b5",labelDe:"Indigo",labelEn:"Indigo"},{name:"blue",value:"#2196f3",labelDe:"Blau",labelEn:"Blue"},{name:"light-blue",value:"#03a9f4",labelDe:"Hellblau",labelEn:"Light Blue"},{name:"cyan",value:"#00bcd4",labelDe:"Cyan",labelEn:"Cyan"},{name:"teal",value:"#009688",labelDe:"Blaugrün",labelEn:"Teal"},{name:"green",value:"#4caf50",labelDe:"Grün",labelEn:"Green"},{name:"light-green",value:"#8bc34a",labelDe:"Hellgrün",labelEn:"Light Green"},{name:"lime",value:"#cddc39",labelDe:"Limette",labelEn:"Lime"},{name:"yellow",value:"#ffeb3b",labelDe:"Gelb",labelEn:"Yellow"},{name:"amber",value:"#ffc107",labelDe:"Bernstein",labelEn:"Amber"},{name:"orange",value:"#ff9800",labelDe:"Orange",labelEn:"Orange"},{name:"deep-orange",value:"#ff5722",labelDe:"Tieforange",labelEn:"Deep Orange"},{name:"brown",value:"#795548",labelDe:"Braun",labelEn:"Brown"},{name:"grey",value:"#9e9e9e",labelDe:"Grau",labelEn:"Grey"},{name:"blue-grey",value:"#607d8b",labelDe:"Blaugrau",labelEn:"Blue Grey"}],Pe={de:{year:"Jahr",dayOfYear:"Tag im Jahr",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt (%)",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day of Year",isoWeek:"ISO Week",month:"Month",quarter:"Quarter",progress:"Progress (%)",remainingDays:"Remaining Days"}},He={de:{general:"Allgemein",title:"Titel",titleHelper:"Optionaler Titel für die Karte",locale:"Sprache",localeAuto:"Automatisch",german:"Deutsch",english:"Englisch",layout:"Layout",borderless:"Rahmenlos",borderlessHelper:"Entfernt Rahmen und Schatten",compactFacts:"Kompakte Kennzahlen",compactFactsHelper:"Reduziert Abstände zwischen Kennzahlen",factsColumns:"Spalten für Kennzahlen",facts:"Kennzahlen",bar:"Zeitstrahl",segments:"Segment-Linien",barLabels:"Beschriftung",none:"Keine",quarters:"Quartale",months:"Monate",weeks:"Wochen",todayMarker:"Heute-Marker anzeigen",progressFill:"Fortschritt füllen",progressColor:"Fortschrittsfarbe",progressColorHelper:"Leer = Standardfarbe",customColor:"Benutzerdefiniert",markers:"Marker",addMarker:"Marker hinzufügen",editMarker:"Marker bearbeiten",back:"Zurück",entity:"Entität",label:"Bezeichnung",labelHelper:"Leer = Entity-Name verwenden",type:"Typ",point:"Punkt",rangeStart:"Bereich Start",rangeEnd:"Bereich Ende",showOnBar:"Auf Balken anzeigen",showInList:"In Liste anzeigen",markerColor:"Marker-Farbe",noMarkers:"Keine Marker konfiguriert",addFact:"Kennzahl hinzufügen",showYamlEditor:"YAML-Editor anzeigen",showVisualEditor:"Visuellen Editor anzeigen"},en:{general:"General",title:"Title",titleHelper:"Optional card title",locale:"Language",localeAuto:"Automatic",german:"German",english:"English",layout:"Layout",borderless:"Borderless",borderlessHelper:"Remove border and shadow",compactFacts:"Compact Facts",compactFactsHelper:"Reduce spacing between facts",factsColumns:"Facts Columns",facts:"Facts",bar:"Timeline Bar",segments:"Segment Lines",barLabels:"Labels",none:"None",quarters:"Quarters",months:"Months",weeks:"Weeks",todayMarker:"Show Today Marker",progressFill:"Show Progress Fill",progressColor:"Progress Color",progressColorHelper:"Empty = default color",customColor:"Custom",markers:"Markers",addMarker:"Add Marker",editMarker:"Edit Marker",back:"Back",entity:"Entity",label:"Label",labelHelper:"Empty = use entity name",type:"Type",point:"Point",rangeStart:"Range Start",rangeEnd:"Range End",showOnBar:"Show on Bar",showInList:"Show in List",markerColor:"Marker Color",noMarkers:"No markers configured",addFact:"Add fact",showYamlEditor:"Show YAML editor",showVisualEditor:"Show visual editor"}},Fe=async()=>{var e,t,s;const r=await((e=window.loadCardHelpers)==null?void 0:e.call(window));r&&await((s=(t=(await r.createCardElement({type:"entities",entities:[]})).constructor).getConfigElement)==null?void 0:s.call(t))};Fe();let k=class extends _{constructor(){super(...arguments),this._editingMarkerIndex=null,this._markerYamlMode=!1,this._helpersLoaded=!1,this._onTitleChange=r=>{const e=r.target,t={...this._config};e.value?t.title=e.value:delete t.title,this._updateConfig(t)},this._onLocaleChange=r=>{const e=r.target.value;e&&this._updateConfig({...this._config,locale:e})},this._onBorderlessChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,borderless:e.checked}})},this._onCompactFactsChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,compact_facts:e.checked}})},this._onFactsColumnsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,facts_columns:parseInt(e,10)}})},this._onAddFact=r=>{var a,i;const e=r.target.value;if(!e)return;const t=((i=(a=this._config)==null?void 0:a.facts)==null?void 0:i.show)??["year","dayOfYear","isoWeek","quarter"];if(t.includes(e))return;const s=[...t,e];this._updateConfig({...this._config,facts:{show:s}}),r.target.value=""},this._onFactMoved=r=>{var i,n;const{oldIndex:e,newIndex:t}=r.detail,s=[...((n=(i=this._config)==null?void 0:i.facts)==null?void 0:n.show)??["year","dayOfYear","isoWeek","quarter"]],[a]=s.splice(e,1);a&&s.splice(t,0,a),this._updateConfig({...this._config,facts:{show:s}})},this._onSegmentsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,segments:e}})},this._onLabelsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,labels:e}})},this._onTodayMarkerChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_today_marker:e.checked}})},this._onProgressFillChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_progress_fill:e.checked}})},this._onProgressColorChange=r=>{const e=r.target.value,t={...this._config};e&&e!=="default"?t.bar={...t.bar,progress_color:e}:(t.bar={...t.bar},delete t.bar.progress_color),this._updateConfig(t)},this._entityFilter=r=>{var a;if(r.entity_id.split(".")[0]==="input_datetime")return!0;const s=(a=r.attributes)==null?void 0:a.device_class;return s==="timestamp"||s==="date"},this._onAddMarkerEntity=r=>{var a;const e=r.detail.value;if(!e)return;const t=[...((a=this._config)==null?void 0:a.markers)??[]],s=this._getRandomMarkerColor();t.push({entity:e,type:f.type,color:s,showOnBar:f.showOnBar,showInList:f.showInList}),this._updateConfig({...this._config,markers:t})},this._onBackFromSubEditor=()=>{this._editingMarkerIndex=null,this._markerYamlMode=!1},this._onToggleMarkerYamlMode=()=>{this._markerYamlMode=!this._markerYamlMode},this._onMarkerYamlChange=r=>{var s;const e=r.detail.value,t=this._yamlToMarker(e);if(t&&this._editingMarkerIndex!==null){const a=[...((s=this._config)==null?void 0:s.markers)??[]];a[this._editingMarkerIndex]=t,this._updateConfig({...this._config,markers:a})}}}setConfig(r){this._config=r}async connectedCallback(){super.connectedCallback(),await Fe(),this._helpersLoaded=!0}_getLocale(){var e,t;const r=(e=this._config)==null?void 0:e.locale;if(!r||r==="auto"){const a=(((t=this.hass)==null?void 0:t.language)??"en").split("-")[0];return a&&(a==="de"||a==="en")?a:"en"}return r}_getLabels(){const r=this._getLocale();return He[r]??He.en}render(){return!this._config||!this._helpersLoaded?c``:this._editingMarkerIndex!==null?this._renderMarkerSubEditor():c`
      <div class="editor-container">
        ${this._renderGeneralSection()}
        ${this._renderLayoutSection()}
        ${this._renderFactsSection()}
        ${this._renderBarSection()}
        ${this._renderMarkersSection()}
      </div>
    `}_renderGeneralSection(){var t,s;const r=this._getLabels(),e=((t=this._config)==null?void 0:t.locale)??"auto";return c`
      <ha-expansion-panel outlined .header=${r.general}>
        <div class="content">
          <div class="form-row">
            <ha-textfield
              .label=${r.title}
              .helper=${r.titleHelper}
              .value=${((s=this._config)==null?void 0:s.title)??""}
              @input=${this._onTitleChange}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-select
              .label=${r.locale}
              .value=${e}
              @selected=${this._onLocaleChange}
              @closed=${a=>a.stopPropagation()}
            >
              <mwc-list-item value="auto">${r.localeAuto}</mwc-list-item>
              <mwc-list-item value="de">${r.german}</mwc-list-item>
              <mwc-list-item value="en">${r.english}</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderLayoutSection(){var t;const r=this._getLabels(),e=((t=this._config)==null?void 0:t.layout)??{};return c`
      <ha-expansion-panel outlined .header=${r.layout}>
        <div class="content">
          <div class="switch-row">
            <span>${r.borderless}</span>
            <ha-switch
              .checked=${e.borderless??!1}
              @change=${this._onBorderlessChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${r.compactFacts}</span>
            <ha-switch
              .checked=${e.compact_facts??!1}
              @change=${this._onCompactFactsChange}
            ></ha-switch>
          </div>
          <div class="form-row">
            <ha-select
              .label=${r.factsColumns}
              .value=${String(e.facts_columns??2)}
              @selected=${this._onFactsColumnsChange}
              @closed=${s=>s.stopPropagation()}
            >
              <mwc-list-item value="1">1</mwc-list-item>
              <mwc-list-item value="2">2</mwc-list-item>
              <mwc-list-item value="3">3</mwc-list-item>
              <mwc-list-item value="4">4</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderFactsSection(){var i,n;const r=this._getLabels(),e=this._getLocale(),t=Pe[e]??Pe.de,s=((n=(i=this._config)==null?void 0:i.facts)==null?void 0:n.show)??["year","dayOfYear","isoWeek","quarter"],a=zt.filter(o=>!s.includes(o));return c`
      <ha-expansion-panel outlined .header=${r.facts}>
        <div class="content">
          ${s.length>0?c`
                <ha-sortable no-style @item-moved=${this._onFactMoved}>
                  <ha-chip-set>
                    ${s.map(o=>c`
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
                  .label=${r.addFact}
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
    `}_renderBarSection(){var t;const r=this._getLabels(),e=((t=this._config)==null?void 0:t.bar)??{};return c`
      <ha-expansion-panel outlined .header=${r.bar}>
        <div class="content">
          <div class="form-row">
            <ha-select
              .label=${r.segments}
              .value=${e.segments??"months"}
              @selected=${this._onSegmentsChange}
              @closed=${s=>s.stopPropagation()}
            >
              <mwc-list-item value="none">${r.none}</mwc-list-item>
              <mwc-list-item value="quarters">${r.quarters}</mwc-list-item>
              <mwc-list-item value="months">${r.months}</mwc-list-item>
              <mwc-list-item value="weeks">${r.weeks}</mwc-list-item>
            </ha-select>
          </div>
          <div class="form-row">
            <ha-select
              .label=${r.barLabels}
              .value=${e.labels??"quarters"}
              @selected=${this._onLabelsChange}
              @closed=${s=>s.stopPropagation()}
            >
              <mwc-list-item value="none">${r.none}</mwc-list-item>
              <mwc-list-item value="quarters">${r.quarters}</mwc-list-item>
              <mwc-list-item value="months">${r.months}</mwc-list-item>
            </ha-select>
          </div>
          <div class="switch-row">
            <span>${r.todayMarker}</span>
            <ha-switch
              .checked=${e.show_today_marker??!0}
              @change=${this._onTodayMarkerChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${r.progressFill}</span>
            <ha-switch
              .checked=${e.show_progress_fill??!0}
              @change=${this._onProgressFillChange}
            ></ha-switch>
          </div>
          ${e.show_progress_fill??!0?c`
                <div class="form-row">
                  <ha-select
                    class="color-picker-select"
                    .label=${r.progressColor}
                    .value=${e.progress_color??"default"}
                    @selected=${this._onProgressColorChange}
                    @closed=${s=>s.stopPropagation()}
                  >
                    ${this._renderColorOptions()}
                  </ha-select>
                </div>
              `:u}
        </div>
      </ha-expansion-panel>
    `}_renderColorOptions(){var i,n;const r=this._getLocale(),e=this._getLabels(),t=((n=(i=this._config)==null?void 0:i.bar)==null?void 0:n.progress_color)??"default",s=t!=="default"&&!W.some(o=>o.value===t),a=[];return s&&a.push(c`
        <mwc-list-item value=${t} .selected=${!0} graphic="icon">
          <span class="color-item">
            <span class="color-dot" style="background-color: ${t}"></span>
            ${e.customColor} (${t})
          </span>
        </mwc-list-item>
      `),W.forEach(o=>{const l=r==="de"?o.labelDe:o.labelEn,h=o.value==="default",p=h?"color-dot default":"color-dot",d=h?"":`background-color: ${o.value}`,g=!s&&o.value===t;a.push(c`
        <mwc-list-item value=${o.value} .selected=${g} graphic="icon">
          <span class="color-item">
            <span class=${p} style=${d}></span>
            ${l}
          </span>
        </mwc-list-item>
      `)}),a}_renderMarkerColorOptions(r){const e=this._getLocale(),t=this._getLabels(),s=r??"default",a=s!=="default"&&!W.some(n=>n.value===s),i=[];return a&&i.push(c`
        <mwc-list-item value=${s} .selected=${!0} graphic="icon">
          <span class="color-item">
            <span class="color-dot" style="background-color: ${s}"></span>
            ${t.customColor} (${s})
          </span>
        </mwc-list-item>
      `),W.forEach(n=>{const o=e==="de"?n.labelDe:n.labelEn,l=n.value==="default",h=l?"color-dot default":"color-dot",p=l?"":`background-color: ${n.value}`,d=!a&&n.value===s;i.push(c`
        <mwc-list-item value=${n.value} .selected=${d} graphic="icon">
          <span class="color-item">
            <span class=${h} style=${p}></span>
            ${o}
          </span>
        </mwc-list-item>
      `)}),i}_renderMarkersSection(){var t;const r=this._getLabels(),e=((t=this._config)==null?void 0:t.markers)??[];return c`
      <ha-expansion-panel outlined .header=${r.markers}>
        <div class="content">
          ${e.length>0?c`
                <div class="marker-list">
                  ${e.map((s,a)=>this._renderMarkerRow(s,a))}
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
    `}_renderMarkerRow(r,e){var i;const t=(i=this.hass)==null?void 0:i.states[r.entity],s=(t==null?void 0:t.attributes.friendly_name)??r.entity,a=r.label||s;return c`
      <div class="marker-row">
        <ha-icon class="handle" icon="mdi:drag"></ha-icon>
        <ha-icon
          icon=${(t==null?void 0:t.attributes.icon)??"mdi:calendar"}
        ></ha-icon>
        <div class="marker-info">
          <div class="marker-name">${a}</div>
          <div class="marker-entity">${r.entity}</div>
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
    `}_renderMarkerSubEditor(){var l,h,p;const r=this._getLabels(),e=this._editingMarkerIndex,t=(h=(l=this._config)==null?void 0:l.markers)==null?void 0:h[e];if(!t)return this._editingMarkerIndex=null,c``;const s=(p=this.hass)==null?void 0:p.states[t.entity],a=(s==null?void 0:s.attributes.friendly_name)??t.entity,i="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z",n="M14,17H17V14H19V17H22V19H19V22H17V19H14V17M12,17V19H9V17H12M7,17V19H3V15H5V17H7M3,13V10H5V13H3M3,8V4H7V6H5V8H3M9,4H12V6H9V4M15,4H19V8H17V6H15V4M19,10V12H17V10H19Z",o=this._markerYamlMode?r.showVisualEditor:r.showYamlEditor;return c`
      <div class="sub-editor">
        <div class="sub-editor-header">
          <ha-icon-button
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._onBackFromSubEditor}
          ></ha-icon-button>
          <span class="sub-editor-title">${r.editMarker}: ${a}</span>
          <ha-icon-button
            class="yaml-toggle"
            .path=${this._markerYamlMode?n:i}
            title=${o}
            @click=${this._onToggleMarkerYamlMode}
          ></ha-icon-button>
        </div>

        ${this._markerYamlMode?this._renderMarkerYamlEditor(t):this._renderMarkerVisualEditor(t,a,r)}
      </div>
    `}_renderMarkerVisualEditor(r,e,t){return c`
      <div class="form-row">
        <ha-textfield
          .label=${t.label}
          .helper=${t.labelHelper}
          .value=${r.label??""}
          .placeholder=${e}
          @input=${s=>this._onMarkerFieldChange("label",s)}
        ></ha-textfield>
      </div>

      <div class="form-row">
        <ha-select
          .label=${t.type}
          .value=${r.type??f.type}
          @selected=${s=>this._onMarkerTypeChange(s)}
          @closed=${s=>s.stopPropagation()}
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
          .value=${r.color??"default"}
          @selected=${s=>this._onMarkerColorChange(s)}
          @closed=${s=>s.stopPropagation()}
        >
          ${this._renderMarkerColorOptions(r.color)}
        </ha-select>
      </div>

      <div class="switch-row">
        <span>${t.showOnBar}</span>
        <ha-switch
          .checked=${r.showOnBar??f.showOnBar}
          @change=${s=>this._onMarkerSwitchChange("showOnBar",s)}
        ></ha-switch>
      </div>

      <div class="switch-row">
        <span>${t.showInList}</span>
        <ha-switch
          .checked=${r.showInList??f.showInList}
          @change=${s=>this._onMarkerSwitchChange("showInList",s)}
        ></ha-switch>
      </div>
    `}_renderMarkerYamlEditor(r){const e=this._markerToYaml(r);return c`
      <ha-code-editor
        .hass=${this.hass}
        .value=${e}
        mode="yaml"
        autofocus
        autocomplete-entities
        autocomplete-icons
        @value-changed=${this._onMarkerYamlChange}
      ></ha-code-editor>
    `}_markerToYaml(r){const e=[];return e.push(`entity: ${r.entity}`),r.label&&e.push(`label: "${r.label}"`),r.type&&r.type!==f.type&&e.push(`type: ${r.type}`),r.color&&e.push(`color: "${r.color}"`),r.showOnBar!==void 0&&r.showOnBar!==f.showOnBar&&e.push(`showOnBar: ${r.showOnBar}`),r.showInList!==void 0&&r.showInList!==f.showInList&&e.push(`showInList: ${r.showInList}`),e.join(`
`)}_yamlToMarker(r){try{const e=r.split(`
`),t={};for(const s of e){const a=s.trim();if(!a||a.startsWith("#"))continue;const i=a.indexOf(":");if(i===-1)continue;const n=a.substring(0,i).trim();let o=a.substring(i+1).trim();typeof o=="string"&&(o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'"))&&(o=o.slice(1,-1)),o==="true"&&(o=!0),o==="false"&&(o=!1),t[n]=o}return!t.entity||typeof t.entity!="string"?null:{entity:t.entity,label:t.label,type:t.type,color:t.color,showOnBar:t.showOnBar,showInList:t.showInList}}catch{return null}}_onRemoveFact(r){var s,a;const t=(((a=(s=this._config)==null?void 0:s.facts)==null?void 0:a.show)??["year","dayOfYear","isoWeek","quarter"]).filter(i=>i!==r);this._updateConfig({...this._config,facts:{show:t}})}_onEditMarker(r){this._editingMarkerIndex=r}_onDeleteMarker(r){var t;const e=[...((t=this._config)==null?void 0:t.markers)??[]];e.splice(r,1),this._updateConfig({...this._config,markers:e})}_onMarkerFieldChange(r,e){const t=e.target;this._updateMarker({[r]:t.value||void 0})}_onMarkerTypeChange(r){const e=r.target.value;e&&this._updateMarker({type:e})}_onMarkerColorChange(r){const e=r.target.value;e&&e!=="default"?this._updateMarker({color:e}):this._updateMarker({color:void 0})}_onMarkerSwitchChange(r,e){const t=e.target;this._updateMarker({[r]:t.checked})}_updateMarker(r){var s;if(this._editingMarkerIndex===null)return;const e=[...((s=this._config)==null?void 0:s.markers)??[]],t=e[this._editingMarkerIndex];t&&(e[this._editingMarkerIndex]={...t,...r},this._updateConfig({...this._config,markers:e}))}_updateConfig(r){this._config=r;const e=new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}_getRandomMarkerColor(){var i,n,o;const r=W.filter(l=>l.value!=="default").map(l=>l.value),e=(n=(i=this._config)==null?void 0:i.bar)==null?void 0:n.progress_color,t=new Set;for(const l of((o=this._config)==null?void 0:o.markers)??[])l.color&&t.add(l.color);let s=r.filter(l=>!t.has(l)&&l!==e);if(s.length===0&&(s=r.filter(l=>l!==e)),s.length===0)return r[0];const a=Math.floor(Math.random()*s.length);return s[a]}};k.styles=I`
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
  `,F([m({attribute:!1})],k.prototype,"hass",2),F([D()],k.prototype,"_config",2),F([D()],k.prototype,"_editingMarkerIndex",2),F([D()],k.prototype,"_markerYamlMode",2),F([D()],k.prototype,"_helpersLoaded",2),k=F([j("year-timeline-card-editor")],k);var Rt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,X=(r,e,t,s)=>{for(var a=s>1?void 0:s?Ut(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(a=(s?n(e,t,a):n(a))||a);return s&&a&&Rt(e,t,a),a};return y.YearTimelineCard=class extends _{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!vt(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=bt(e)}getCardSize(){var t,s;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(s=this._config)!=null&&s.facts&&this._config.facts.length>0&&(e+=1),e}getGridOptions(){return{rows:2,columns:12,min_rows:1,min_columns:6}}static getConfigElement(){return document.createElement("year-timeline-card-editor")}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return c`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=ce(this._now),s=this.resolveMarkers(e),a=this.toBarMarkers(s),i=this._resolveLocale(),n=this._config.layout,o=n.borderless?"borderless":"",l=this._config.bar.progressColor?`--ytc-primary-color: ${this._config.bar.progressColor}`:"";return c`
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
          ${s.some(h=>h.showInList)?c`
                <ytc-marker-list
                  .markers=${s}
                  .locale=${i}
                ></ytc-marker-list>
              `:u}
        </div>
      </ha-card>
    `}_resolveLocale(){var t,s;const e=(t=this._config)==null?void 0:t.locale;if(!e||e==="auto"){const i=(((s=this.hass)==null?void 0:s.language)??"en").split("-")[0];return i&&(i==="de"||i==="en")?i:"en"}return e}renderError(){return c`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `}resolveMarkers(e){return!this._config||!this.hass?[]:Dt(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type,color:t.color}))}},y.YearTimelineCard.styles=it,X([m({attribute:!1})],y.YearTimelineCard.prototype,"hass",2),X([D()],y.YearTimelineCard.prototype,"_config",2),X([D()],y.YearTimelineCard.prototype,"_error",2),y.YearTimelineCard=X([j("year-timeline-card")],y.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.3 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),y}({});
