var YearTimelineCard=function(g){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const V=globalThis,ee=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),he=new WeakMap;let de=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ee&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&he.set(t,e))}return e}toString(){return this.cssText}};const He=s=>new de(typeof s=="string"?s:s+"",void 0,te),F=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,a,n)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[n+1],s[0]);return new de(t,s,te)},Ne=(s,e)=>{if(ee)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),a=V.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=t.cssText,s.appendChild(r)}},ue=ee?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return He(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Be,defineProperty:ze,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Ue,getOwnPropertySymbols:Ye,getPrototypeOf:qe}=Object,_=globalThis,pe=_.trustedTypes,je=pe?pe.emptyScript:"",se=_.reactiveElementPolyfillSupport,I=(s,e)=>s,J={toAttribute(s,e){switch(e){case Boolean:s=s?je:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},re=(s,e)=>!Be(s,e),me={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(e,r,t);a!==void 0&&ze(this.prototype,e,a)}}static getPropertyDescriptor(e,t,r){const{get:a,set:n}=Re(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:a,set(i){const o=a==null?void 0:a.call(this);n==null||n.call(this,i),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=qe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const t=this.properties,r=[...Ue(t),...Ye(t)];for(const a of r)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,a]of t)this.elementProperties.set(r,a)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const a=this._$Eu(t,r);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const a of r)t.unshift(ue(a))}else e!==void 0&&t.push(ue(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var n;const r=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,r);if(a!==void 0&&r.reflect===!0){const i=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:J).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){var n,i;const r=this.constructor,a=r._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const o=r.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:J;this._$Em=a;const u=l.fromAttribute(t,o.type);this[a]=u??((i=this._$Ej)==null?void 0:i.get(a))??u,this._$Em=null}}requestUpdate(e,t,r,a=!1,n){var i;if(e!==void 0){const o=this.constructor;if(a===!1&&(n=this[e]),r??(r=o.getPropertyOptions(e)),!((r.hasChanged??re)(n,t)||r.useDefault&&r.reflect&&n===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:a,wrapped:n},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),n!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[n,i]of a){const{wrapped:o}=i,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(a=>{var n;return(n=a.hostUpdate)==null?void 0:n.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostUpdated)==null?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[I("elementProperties")]=new Map,S[I("finalized")]=new Map,se==null||se({ReactiveElement:S}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,ge=s=>s,K=H.trustedTypes,fe=K?K.createPolicy("lit-html",{createHTML:s=>s}):void 0,ye="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+b,We=`<${_e}>`,k=document,N=()=>k.createComment(""),B=s=>s===null||typeof s!="object"&&typeof s!="function",ae=Array.isArray,Ve=s=>ae(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,$e=/>/g,x=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,we=/"/g,ke=/^(?:script|style|textarea|title)$/i,Je=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),c=Je(1),D=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),xe=new WeakMap,A=k.createTreeWalker(k,129);function Ae(s,e){if(!ae(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}const Ke=(s,e)=>{const t=s.length-1,r=[];let a,n=e===2?"<svg>":e===3?"<math>":"",i=z;for(let o=0;o<t;o++){const l=s[o];let u,p,h=-1,y=0;for(;y<l.length&&(i.lastIndex=y,p=i.exec(l),p!==null);)y=i.lastIndex,i===z?p[1]==="!--"?i=be:p[1]!==void 0?i=$e:p[2]!==void 0?(ke.test(p[2])&&(a=RegExp("</"+p[2],"g")),i=x):p[3]!==void 0&&(i=x):i===x?p[0]===">"?(i=a??z,h=-1):p[1]===void 0?h=-2:(h=i.lastIndex-p[2].length,u=p[1],i=p[3]===void 0?x:p[3]==='"'?we:ve):i===we||i===ve?i=x:i===be||i===$e?i=z:(i=x,a=void 0);const w=i===x&&s[o+1].startsWith("/>")?" ":"";n+=i===z?l+We:h>=0?(r.push(u),l.slice(0,h)+ye+l.slice(h)+b+w):l+b+(h===-2?o:w)}return[Ae(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class R{constructor({strings:e,_$litType$:t},r){let a;this.parts=[];let n=0,i=0;const o=e.length-1,l=this.parts,[u,p]=Ke(e,t);if(this.el=R.createElement(u,r),A.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=A.nextNode())!==null&&l.length<o;){if(a.nodeType===1){if(a.hasAttributes())for(const h of a.getAttributeNames())if(h.endsWith(ye)){const y=p[i++],w=a.getAttribute(h).split(b),X=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:X[2],strings:w,ctor:X[1]==="."?Qe:X[1]==="?"?Ze:X[1]==="@"?Xe:G}),a.removeAttribute(h)}else h.startsWith(b)&&(l.push({type:6,index:n}),a.removeAttribute(h));if(ke.test(a.tagName)){const h=a.textContent.split(b),y=h.length-1;if(y>0){a.textContent=K?K.emptyScript:"";for(let w=0;w<y;w++)a.append(h[w],N()),A.nextNode(),l.push({type:2,index:++n});a.append(h[y],N())}}}else if(a.nodeType===8)if(a.data===_e)l.push({type:2,index:n});else{let h=-1;for(;(h=a.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:n}),h+=b.length-1}n++}}static createElement(e,t){const r=k.createElement("template");return r.innerHTML=e,r}}function L(s,e,t=s,r){var i,o;if(e===D)return e;let a=r!==void 0?(i=t._$Co)==null?void 0:i[r]:t._$Cl;const n=B(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==n&&((o=a==null?void 0:a._$AO)==null||o.call(a,!1),n===void 0?a=void 0:(a=new n(s),a._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=a:t._$Cl=a),a!==void 0&&(e=L(s,a._$AS(s,e.values),a,r)),e}class Ge{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,a=((e==null?void 0:e.creationScope)??k).importNode(t,!0);A.currentNode=a;let n=A.nextNode(),i=0,o=0,l=r[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new U(n,n.nextSibling,this,e):l.type===1?u=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(u=new et(n,this,e)),this._$AV.push(u),l=r[++o]}i!==(l==null?void 0:l.index)&&(n=A.nextNode(),i++)}return A.currentNode=k,a}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,a){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),B(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ve(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=R.createElement(Ae(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===a)this._$AH.p(t);else{const i=new Ge(a,this),o=i.u(this.options);i.p(t),this.T(o),this._$AH=i}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new R(e)),t}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,a=0;for(const n of e)a===t.length?t.push(r=new U(this.O(N()),this.O(N()),this,this.options)):r=t[a],r._$AI(n),a++;a<t.length&&(this._$AR(r&&r._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const a=ge(e).nextSibling;ge(e).remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,a,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(e,t=this,r,a){const n=this.strings;let i=!1;if(n===void 0)e=L(this,e,t,0),i=!B(e)||e!==this._$AH&&e!==D,i&&(this._$AH=e);else{const o=e;let l,u;for(e=n[0],l=0;l<n.length-1;l++)u=L(this,o[r+l],t,l),u===D&&(u=this._$AH[l]),i||(i=!B(u)||u!==this._$AH[l]),u===d?e=d:e!==d&&(e+=(u??"")+n[l+1]),this._$AH[l]=u}i&&!a&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qe extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ze extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Xe extends G{constructor(e,t,r,a,n){super(e,t,r,a,n),this.type=5}_$AI(e,t=this){if((e=L(this,e,t,0)??d)===D)return;const r=this._$AH,a=e===d&&r!==d||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==d&&(r===d||a);a&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class et{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}}const ie=H.litHtmlPolyfillSupport;ie==null||ie(R,U),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.3.2");const tt=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let a=r._$litPart$;if(a===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=a=new U(e.insertBefore(N(),n),n,void 0,t??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class f extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}}f._$litElement$=!0,f.finalized=!0,(Ie=C.litElementHydrateSupport)==null||Ie.call(C,{LitElement:f});const oe=C.litElementPolyfillSupport;oe==null||oe({LitElement:f}),(C.litElementVersions??(C.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:re},rt=(s=st,e,t)=>{const{kind:r,metadata:a}=t;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),n.set(t.name,s),r==="accessor"){const{name:i}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,l,s,!0,o)},init(o){return o!==void 0&&this.C(i,void 0,s,o),o}}}if(r==="setter"){const{name:i}=t;return function(o){const l=this[i];e.call(this,o),this.requestUpdate(i,l,s,!0,o)}}throw Error("Unsupported decorator location: "+r)};function m(s){return(e,t)=>typeof t=="object"?rt(s,e,t):((r,a,n)=>{const i=a.hasOwnProperty(n);return a.constructor.createProperty(n,r),i?Object.getOwnPropertyDescriptor(a,n):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(s){return m({...s,state:!0,attribute:!1})}const at=F`
  :host {
    display: block;
    --ytc-primary-color: var(--primary-color, #03a9f4);
    --ytc-text-primary: var(--primary-text-color, #212121);
    --ytc-text-secondary: var(--secondary-text-color, #727272);
    --ytc-background: var(--card-background-color, #fff);
    --ytc-divider: var(--divider-color, #e0e0e0);
    --ytc-bar-background: var(--disabled-color, #bdbdbd);
    --ytc-bar-height: 24px;
    --ytc-marker-color: var(--accent-color, #ff9800);
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
`,nt=F`
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
`,it=F`
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
`,ot=F`
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
`,lt=["year","dayOfYear","isoWeek","quarter"],O={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0,progressColor:null},Q={borderless:!1,compactFacts:!1,factsColumns:2},ct="auto",E={type:"point",showOnBar:!0,showInList:!0};function ht(s){if(!s||!s.show)return lt;const e=s.show;return Array.isArray(e)?e.filter(r=>dt(r)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(r=>e[r]===!0)}function dt(s){return typeof s=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(s)}function ut(s){return s?{segments:mt(s.segments),labels:gt(s.labels),showTodayMarker:s.show_today_marker??O.showTodayMarker,showProgressFill:s.show_progress_fill??O.showProgressFill,progressColor:s.progress_color??O.progressColor}:O}function pt(s){return s?{borderless:s.borderless??Q.borderless,compactFacts:s.compact_facts??Q.compactFacts,factsColumns:s.facts_columns??Q.factsColumns}:Q}function mt(s){return s&&["none","quarters","months","weeks"].includes(s)?s:O.segments}function gt(s){return s&&["none","quarters","months"].includes(s)?s:O.labels}function ft(s){var a;if(!s.entity||typeof s.entity!="string")return null;let e="state";if(s.source&&s.source!=="state"){const n=/^attribute:(.+)$/.exec(s.source);n&&n[1]&&(e={attribute:n[1]})}const r=["point","rangeStart","rangeEnd","range"].includes(s.type)?s.type:E.type;return{entity:s.entity,label:((a=s.label)==null?void 0:a.trim())||null,source:e,type:r,showOnBar:s.showOnBar??E.showOnBar,showInList:s.showInList??E.showInList}}function yt(s){if(!s||!Array.isArray(s))return[];const e=[];for(const t of s){const r=ft(t);r&&e.push(r)}return e}function _t(s){return{title:s.title??null,locale:s.locale??ct,layout:pt(s.layout),facts:ht(s.facts),bar:ut(s.bar),markers:yt(s.markers)}}function bt(s){if(!s||typeof s!="object")return!1;const e=s;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function $t(s){return s%4===0&&s%100!==0||s%400===0}function Ce(s){return $t(s)?366:365}function Ee(s){const e=new Date(s.getFullYear(),0,0),t=s.getTime()-e.getTime(),r=1e3*60*60*24;return Math.floor(t/r)}function vt(s){const e=new Date(s.valueOf()),t=(s.getDay()+6)%7;e.setDate(e.getDate()-t+3);const r=new Date(e.getFullYear(),0,4),a=(r.getDay()+6)%7;r.setDate(r.getDate()-a+3);const n=e.getTime()-r.getTime();return 1+Math.round(n/6048e5)}function wt(s){return Math.floor(s.getMonth()/3)+1}function le(s){const e=s.getFullYear(),t=new Date(e,0,1).getTime(),r=new Date(e+1,0,1).getTime(),n=(s.getTime()-t)/(r-t)*100;return Math.min(100,Math.max(0,n))}function kt(s){const e=s.getFullYear(),t=Ce(e),r=Ee(s);return t-r}function xt(s){if(s instanceof Date)return isNaN(s.getTime())?null:s;if(typeof s!="string"||s.trim()==="")return null;const e=s.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const r=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:a=>new Date(parseInt(a[1]),parseInt(a[2])-1,parseInt(a[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:a=>new Date(parseInt(a[3]),parseInt(a[2])-1,parseInt(a[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:a=>new Date(parseInt(a[3]),parseInt(a[1])-1,parseInt(a[2]))}];for(const{regex:a,parse:n}of r){const i=e.match(a);if(i){const o=n(i);if(!isNaN(o.getTime()))return o}}return null}const Me={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Se={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function De(s,e,t=!1){return(t?Se[e]??Se.de:Me[e]??Me.de)[s]??""}function At(s){return s==="en"?"CW":"KW"}function Ct(s,e){if(s==="none")return[];const t=new Date(e,0,1).getTime(),a=new Date(e+1,0,1).getTime()-t,n=i=>(i.getTime()-t)/a*100;if(s==="quarters")return[0,n(new Date(e,3,1)),n(new Date(e,6,1)),n(new Date(e,9,1))];if(s==="months"){const i=[];for(let o=0;o<12;o++)i.push(n(new Date(e,o,1)));return i}if(s==="weeks"){const i=[],l=(new Date(e,0,1).getDay()+6)%7;let u;l<=3?u=new Date(e,0,1-l):u=new Date(e,0,8-l);let p=u;for(;p.getFullYear()<=e;){const h=n(p);h>=0&&h<100&&i.push(h),p=new Date(p.getTime()+6048e5)}return i}return[]}function Et(s,e,t){if(s==="none")return[];const r=new Date(e,0,1).getTime(),n=new Date(e+1,0,1).getTime()-r,i=o=>(o.getTime()-r)/n*100;if(s==="quarters")return[{position:i(new Date(e,1,1)),label:"Q1"},{position:i(new Date(e,4,1)),label:"Q2"},{position:i(new Date(e,7,1)),label:"Q3"},{position:i(new Date(e,10,1)),label:"Q4"}];if(s==="months"){const o=[];for(let l=0;l<12;l++){const u=new Date(e,l,1),p=new Date(e,l+1,1),h=new Date((u.getTime()+p.getTime())/2);o.push({position:i(h),label:De(l,t,!0)})}return o}return[]}function Mt(s,e){return e==="state"?s.state:s.attributes[e.attribute]}function St(s,e){return s.label?s.label:e.attributes.friendly_name??s.entity}function Dt(s,e,t){const r=e[s.entity];if(!r)return null;const a=Mt(r,s.source),n=xt(a);if(!n||n.getFullYear()!==t)return null;const i=le(n);return{label:St(s,r),date:n,position:i,type:s.type,showOnBar:s.showOnBar,showInList:s.showInList}}function Lt(s,e,t){const r=[];for(const a of s){const n=Dt(a,e,t);n&&r.push(n)}return r.sort((a,n)=>a.position-n.position),r}function Ot(s,e){const t=s.getDate(),r=s.getMonth()+1;return e==="en"?`${r}/${t}`:`${t}.${r}.`}var Tt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,T=(s,e,t,r)=>{for(var a=r>1?void 0:r?Pt(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(a=(r?i(e,t,a):i(a))||a);return r&&a&&Tt(e,t,a),a};let $=class extends f{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return c`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill?this.renderProgress():d}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker?this.renderTodayMarker():d}
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
    `}renderLabels(){const s=Et(this.config.labels,this.year,this.locale);return s.length===0?d:c`
      <div class="timeline-labels">
        ${s.map(e=>c`
            <span class="timeline-label">${e.label}</span>
          `)}
      </div>
    `}renderMarkers(){return this.markers.length===0?c``:c`
      <div class="timeline-markers">
        ${this.markers.map(s=>this.renderMarker(s))}
      </div>
    `}renderMarker(s){const e=Math.min(100,Math.max(0,s.position));let t="";return s.type==="rangeStart"?t="range-start":s.type==="rangeEnd"&&(t="range-end"),c`
      <div
        class="timeline-marker ${t}"
        style="left: ${e}%"
        title="${s.label}"
      ></div>
    `}};$.styles=nt,T([m({type:Number})],$.prototype,"progress",2),T([m({type:Number})],$.prototype,"year",2),T([m({type:String})],$.prototype,"locale",2),T([m({type:Object})],$.prototype,"config",2),T([m({type:Array})],$.prototype,"markers",2),$=T([Y("ytc-timeline-bar")],$);var Ft=Object.defineProperty,It=Object.getOwnPropertyDescriptor,P=(s,e,t,r)=>{for(var a=r>1?void 0:r?It(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(a=(r?i(e,t,a):i(a))||a);return r&&a&&Ft(e,t,a),a};const Le={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let v=class extends f{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de",this.compact=!1,this.columns=2}render(){if(this.facts.length===0)return c``;const s=`
      grid-template-columns: repeat(${this.columns}, 1fr);
      ${this.compact?"gap: 2px 12px;":""}
    `,e=this.compact?"fact-item compact":"fact-item";return c`
      <div class="facts-container" style=${s}>
        ${this.facts.map(t=>this.renderFact(t,e))}
      </div>
    `}renderFact(s,e){const t=this.getLabel(s),r=this.getValue(s);return r===null?d:c`
      <div class=${e}>
        <span class="fact-label">${t}</span>
        <span class="fact-value">${r}</span>
      </div>
    `}getLabel(s){return(Le[this.locale]??Le.de)[s]}getValue(s){const e=this.date.getFullYear();switch(s){case"year":return String(e);case"dayOfYear":{const t=Ee(this.date),r=Ce(e);return`${t} / ${r}`}case"isoWeek":{const t=vt(this.date);return`${At(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return De(t,this.locale,!1)}case"quarter":return`Q${wt(this.date)}`;case"progress":return`${le(this.date).toFixed(1)}%`;case"remainingDays":{const t=kt(this.date);return String(t)}default:return null}}};v.styles=it,P([m({type:Object})],v.prototype,"date",2),P([m({type:Array})],v.prototype,"facts",2),P([m({type:String})],v.prototype,"locale",2),P([m({type:Boolean})],v.prototype,"compact",2),P([m({type:Number})],v.prototype,"columns",2),v=P([Y("ytc-facts-block")],v);var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,ce=(s,e,t,r)=>{for(var a=r>1?void 0:r?Nt(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(a=(r?i(e,t,a):i(a))||a);return r&&a&&Ht(e,t,a),a};const Oe={de:"Ereignisse",en:"Events"};let j=class extends f{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const s=this.markers.filter(t=>t.showInList);if(s.length===0)return d;const e=Oe[this.locale]??Oe.de;return c`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${s.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(s){const e=Ot(s.date,this.locale);return c`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot"></span>
          <span class="marker-list-item-label">${s.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};j.styles=ot,ce([m({type:Array})],j.prototype,"markers",2),ce([m({type:String})],j.prototype,"locale",2),j=ce([Y("ytc-marker-list")],j);var Bt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,W=(s,e,t,r)=>{for(var a=r>1?void 0:r?zt(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(a=(r?i(e,t,a):i(a))||a);return r&&a&&Bt(e,t,a),a};const Rt=["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"],Ut=[{name:"default",value:"",labelDe:"Standard",labelEn:"Default"},{name:"red",value:"#f44336",labelDe:"Rot",labelEn:"Red"},{name:"pink",value:"#e91e63",labelDe:"Pink",labelEn:"Pink"},{name:"purple",value:"#9c27b0",labelDe:"Lila",labelEn:"Purple"},{name:"deep-purple",value:"#673ab7",labelDe:"Tiefviolett",labelEn:"Deep Purple"},{name:"indigo",value:"#3f51b5",labelDe:"Indigo",labelEn:"Indigo"},{name:"blue",value:"#2196f3",labelDe:"Blau",labelEn:"Blue"},{name:"light-blue",value:"#03a9f4",labelDe:"Hellblau",labelEn:"Light Blue"},{name:"cyan",value:"#00bcd4",labelDe:"Cyan",labelEn:"Cyan"},{name:"teal",value:"#009688",labelDe:"Blaugrün",labelEn:"Teal"},{name:"green",value:"#4caf50",labelDe:"Grün",labelEn:"Green"},{name:"light-green",value:"#8bc34a",labelDe:"Hellgrün",labelEn:"Light Green"},{name:"lime",value:"#cddc39",labelDe:"Limette",labelEn:"Lime"},{name:"yellow",value:"#ffeb3b",labelDe:"Gelb",labelEn:"Yellow"},{name:"amber",value:"#ffc107",labelDe:"Bernstein",labelEn:"Amber"},{name:"orange",value:"#ff9800",labelDe:"Orange",labelEn:"Orange"},{name:"deep-orange",value:"#ff5722",labelDe:"Tieforange",labelEn:"Deep Orange"},{name:"brown",value:"#795548",labelDe:"Braun",labelEn:"Brown"},{name:"grey",value:"#9e9e9e",labelDe:"Grau",labelEn:"Grey"},{name:"blue-grey",value:"#607d8b",labelDe:"Blaugrau",labelEn:"Blue Grey"}],Te={de:{year:"Jahr",dayOfYear:"Tag im Jahr",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt (%)",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day of Year",isoWeek:"ISO Week",month:"Month",quarter:"Quarter",progress:"Progress (%)",remainingDays:"Remaining Days"}},Pe={de:{general:"Allgemein",title:"Titel",titleHelper:"Optionaler Titel für die Karte",locale:"Sprache",localeAuto:"Automatisch",german:"Deutsch",english:"Englisch",layout:"Layout",borderless:"Rahmenlos",borderlessHelper:"Entfernt Rahmen und Schatten",compactFacts:"Kompakte Kennzahlen",compactFactsHelper:"Reduziert Abstände zwischen Kennzahlen",factsColumns:"Spalten für Kennzahlen",facts:"Kennzahlen",bar:"Zeitstrahl",segments:"Segment-Linien",barLabels:"Beschriftung",none:"Keine",quarters:"Quartale",months:"Monate",weeks:"Wochen",todayMarker:"Heute-Marker anzeigen",progressFill:"Fortschritt füllen",progressColor:"Fortschrittsfarbe",progressColorHelper:"Leer = Standardfarbe",markers:"Marker",addMarker:"Marker hinzufügen",editMarker:"Marker bearbeiten",back:"Zurück",entity:"Entität",label:"Bezeichnung",labelHelper:"Leer = Entity-Name verwenden",type:"Typ",point:"Punkt",rangeStart:"Bereich Start",rangeEnd:"Bereich Ende",showOnBar:"Auf Balken anzeigen",showInList:"In Liste anzeigen",noMarkers:"Keine Marker konfiguriert",addFact:"Kennzahl hinzufügen"},en:{general:"General",title:"Title",titleHelper:"Optional card title",locale:"Language",localeAuto:"Automatic",german:"German",english:"English",layout:"Layout",borderless:"Borderless",borderlessHelper:"Remove border and shadow",compactFacts:"Compact Facts",compactFactsHelper:"Reduce spacing between facts",factsColumns:"Facts Columns",facts:"Facts",bar:"Timeline Bar",segments:"Segment Lines",barLabels:"Labels",none:"None",quarters:"Quarters",months:"Months",weeks:"Weeks",todayMarker:"Show Today Marker",progressFill:"Show Progress Fill",progressColor:"Progress Color",progressColorHelper:"Empty = default color",markers:"Markers",addMarker:"Add Marker",editMarker:"Edit Marker",back:"Back",entity:"Entity",label:"Label",labelHelper:"Empty = use entity name",type:"Type",point:"Point",rangeStart:"Range Start",rangeEnd:"Range End",showOnBar:"Show on Bar",showInList:"Show in List",noMarkers:"No markers configured",addFact:"Add fact"}},Fe=async()=>{var e,t,r;const s=await((e=window.loadCardHelpers)==null?void 0:e.call(window));s&&await((r=(t=(await s.createCardElement({type:"entities",entities:[]})).constructor).getConfigElement)==null?void 0:r.call(t))};Fe();let M=class extends f{constructor(){super(...arguments),this._editingMarkerIndex=null,this._helpersLoaded=!1,this._onTitleChange=s=>{const e=s.target,t={...this._config};e.value?t.title=e.value:delete t.title,this._updateConfig(t)},this._onLocaleChange=s=>{const e=s.target.value;e&&this._updateConfig({...this._config,locale:e})},this._onBorderlessChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,borderless:e.checked}})},this._onCompactFactsChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,compact_facts:e.checked}})},this._onFactsColumnsChange=s=>{var t;const e=s.target.value;e&&this._updateConfig({...this._config,layout:{...(t=this._config)==null?void 0:t.layout,facts_columns:parseInt(e,10)}})},this._onAddFact=s=>{var a,n;const e=s.target.value;if(!e)return;const t=((n=(a=this._config)==null?void 0:a.facts)==null?void 0:n.show)??["year","dayOfYear","isoWeek","quarter"];if(t.includes(e))return;const r=[...t,e];this._updateConfig({...this._config,facts:{show:r}}),s.target.value=""},this._onFactMoved=s=>{var n,i;const{oldIndex:e,newIndex:t}=s.detail,r=[...((i=(n=this._config)==null?void 0:n.facts)==null?void 0:i.show)??["year","dayOfYear","isoWeek","quarter"]],[a]=r.splice(e,1);a&&r.splice(t,0,a),this._updateConfig({...this._config,facts:{show:r}})},this._onSegmentsChange=s=>{var t;const e=s.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,segments:e}})},this._onLabelsChange=s=>{var t;const e=s.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,labels:e}})},this._onTodayMarkerChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_today_marker:e.checked}})},this._onProgressFillChange=s=>{var t;const e=s.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_progress_fill:e.checked}})},this._onProgressColorChange=s=>{const e=s.target.value,t={...this._config};e?t.bar={...t.bar,progress_color:e}:(t.bar={...t.bar},delete t.bar.progress_color),this._updateConfig(t)},this._entityFilter=s=>{var a;if(s.entity_id.split(".")[0]==="input_datetime")return!0;const r=(a=s.attributes)==null?void 0:a.device_class;return r==="timestamp"||r==="date"},this._onAddMarkerEntity=s=>{var r;const e=s.detail.value;if(!e)return;const t=[...((r=this._config)==null?void 0:r.markers)??[]];t.push({entity:e,...E}),this._updateConfig({...this._config,markers:t})},this._onBackFromSubEditor=()=>{this._editingMarkerIndex=null}}setConfig(s){this._config=s}async connectedCallback(){super.connectedCallback(),await Fe(),this._helpersLoaded=!0}_getLocale(){var e,t;const s=(e=this._config)==null?void 0:e.locale;if(!s||s==="auto"){const a=(((t=this.hass)==null?void 0:t.language)??"en").split("-")[0];return a&&(a==="de"||a==="en")?a:"en"}return s}_getLabels(){const s=this._getLocale();return Pe[s]??Pe.en}render(){return!this._config||!this._helpersLoaded?c``:this._editingMarkerIndex!==null?this._renderMarkerSubEditor():c`
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
    `}_renderFactsSection(){var n,i;const s=this._getLabels(),e=this._getLocale(),t=Te[e]??Te.de,r=((i=(n=this._config)==null?void 0:n.facts)==null?void 0:i.show)??["year","dayOfYear","isoWeek","quarter"],a=Rt.filter(o=>!r.includes(o));return c`
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
              `:d}
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
              `:d}
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
          <div class="form-row">
            <ha-select
              .label=${s.progressColor}
              .value=${e.progress_color??""}
              @selected=${this._onProgressColorChange}
              @closed=${r=>r.stopPropagation()}
            >
              ${this._renderColorOptions()}
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderColorOptions(){const s=this._getLocale();return Ut.map(e=>{const t=s==="de"?e.labelDe:e.labelEn,r=e.value===""?"color-dot default":"color-dot",a=e.value?`background-color: ${e.value}`:"";return c`
        <mwc-list-item value=${e.value} graphic="icon">
          <span class="color-item">
            <span class=${r} style=${a}></span>
            ${t}
          </span>
        </mwc-list-item>
      `})}_renderMarkersSection(){var t;const s=this._getLabels(),e=((t=this._config)==null?void 0:t.markers)??[];return c`
      <ha-expansion-panel outlined .header=${s.markers}>
        <div class="content">
          ${e.length>0?c`
                <div class="marker-list">
                  ${e.map((r,a)=>this._renderMarkerRow(r,a))}
                </div>
              `:d}

          <ha-entity-picker
            .hass=${this.hass}
            .entityFilter=${this._entityFilter}
            @value-changed=${this._onAddMarkerEntity}
            add-button
          ></ha-entity-picker>
        </div>
      </ha-expansion-panel>
    `}_renderMarkerRow(s,e){var n;const t=(n=this.hass)==null?void 0:n.states[s.entity],r=(t==null?void 0:t.attributes.friendly_name)??s.entity,a=s.label||r;return c`
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
    `}_renderMarkerSubEditor(){var n,i,o;const s=this._getLabels(),e=this._editingMarkerIndex,t=(i=(n=this._config)==null?void 0:n.markers)==null?void 0:i[e];if(!t)return this._editingMarkerIndex=null,c``;const r=(o=this.hass)==null?void 0:o.states[t.entity],a=(r==null?void 0:r.attributes.friendly_name)??t.entity;return c`
      <div class="sub-editor">
        <div class="sub-editor-header">
          <ha-icon-button
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._onBackFromSubEditor}
          ></ha-icon-button>
          <span class="sub-editor-title">${s.editMarker}: ${a}</span>
        </div>

        <div class="form-row">
          <ha-textfield
            .label=${s.label}
            .helper=${s.labelHelper}
            .value=${t.label??""}
            .placeholder=${a}
            @input=${l=>this._onMarkerFieldChange("label",l)}
          ></ha-textfield>
        </div>

        <div class="form-row">
          <ha-select
            .label=${s.type}
            .value=${t.type??E.type}
            @selected=${l=>this._onMarkerTypeChange(l)}
            @closed=${l=>l.stopPropagation()}
          >
            <mwc-list-item value="point">${s.point}</mwc-list-item>
            <mwc-list-item value="rangeStart">${s.rangeStart}</mwc-list-item>
            <mwc-list-item value="rangeEnd">${s.rangeEnd}</mwc-list-item>
          </ha-select>
        </div>

        <div class="switch-row">
          <span>${s.showOnBar}</span>
          <ha-switch
            .checked=${t.showOnBar??E.showOnBar}
            @change=${l=>this._onMarkerSwitchChange("showOnBar",l)}
          ></ha-switch>
        </div>

        <div class="switch-row">
          <span>${s.showInList}</span>
          <ha-switch
            .checked=${t.showInList??E.showInList}
            @change=${l=>this._onMarkerSwitchChange("showInList",l)}
          ></ha-switch>
        </div>
      </div>
    `}_onRemoveFact(s){var r,a;const t=(((a=(r=this._config)==null?void 0:r.facts)==null?void 0:a.show)??["year","dayOfYear","isoWeek","quarter"]).filter(n=>n!==s);this._updateConfig({...this._config,facts:{show:t}})}_onEditMarker(s){this._editingMarkerIndex=s}_onDeleteMarker(s){var t;const e=[...((t=this._config)==null?void 0:t.markers)??[]];e.splice(s,1),this._updateConfig({...this._config,markers:e})}_onMarkerFieldChange(s,e){const t=e.target;this._updateMarker({[s]:t.value||void 0})}_onMarkerTypeChange(s){const e=s.target.value;e&&this._updateMarker({type:e})}_onMarkerSwitchChange(s,e){const t=e.target;this._updateMarker({[s]:t.checked})}_updateMarker(s){var r;if(this._editingMarkerIndex===null)return;const e=[...((r=this._config)==null?void 0:r.markers)??[]],t=e[this._editingMarkerIndex];t&&(e[this._editingMarkerIndex]={...t,...s},this._updateConfig({...this._config,markers:e}))}_updateConfig(s){this._config=s;const e=new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}};M.styles=F`
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

    /* Color picker */
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
  `,W([m({attribute:!1})],M.prototype,"hass",2),W([q()],M.prototype,"_config",2),W([q()],M.prototype,"_editingMarkerIndex",2),W([q()],M.prototype,"_helpersLoaded",2),M=W([Y("year-timeline-card-editor")],M);var Yt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Z=(s,e,t,r)=>{for(var a=r>1?void 0:r?qt(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(a=(r?i(e,t,a):i(a))||a);return r&&a&&Yt(e,t,a),a};return g.YearTimelineCard=class extends f{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!bt(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=_t(e)}getCardSize(){var t,r;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(r=this._config)!=null&&r.facts&&this._config.facts.length>0&&(e+=1),e}static getConfigElement(){return document.createElement("year-timeline-card-editor")}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return c`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=le(this._now),r=this.resolveMarkers(e),a=this.toBarMarkers(r),n=this._resolveLocale(),i=this._config.layout,o=i.borderless?"borderless":"",l=this._config.bar.progressColor?`--ytc-primary-color: ${this._config.bar.progressColor}`:"";return c`
      <ha-card class=${o} style=${l}>
        ${this._config.title?c`<div class="card-header">${this._config.title}</div>`:d}
        <div class="card-content">
          ${this._config.facts.length>0?c`
                <ytc-facts-block
                  .date=${this._now}
                  .facts=${this._config.facts}
                  .locale=${n}
                  .compact=${i.compactFacts}
                  .columns=${i.factsColumns}
                ></ytc-facts-block>
              `:d}
          <ytc-timeline-bar
            .progress=${t}
            .year=${e}
            .locale=${n}
            .config=${this._config.bar}
            .markers=${a}
          ></ytc-timeline-bar>
          ${r.some(u=>u.showInList)?c`
                <ytc-marker-list
                  .markers=${r}
                  .locale=${n}
                ></ytc-marker-list>
              `:d}
        </div>
      </ha-card>
    `}_resolveLocale(){var t,r;const e=(t=this._config)==null?void 0:t.locale;if(!e||e==="auto"){const n=(((r=this.hass)==null?void 0:r.language)??"en").split("-")[0];return n&&(n==="de"||n==="en")?n:"en"}return e}renderError(){return c`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `}resolveMarkers(e){return!this._config||!this.hass?[]:Lt(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type}))}},g.YearTimelineCard.styles=at,Z([m({attribute:!1})],g.YearTimelineCard.prototype,"hass",2),Z([q()],g.YearTimelineCard.prototype,"_config",2),Z([q()],g.YearTimelineCard.prototype,"_error",2),g.YearTimelineCard=Z([Y("year-timeline-card")],g.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),g}({});
