var YearTimelineCard=function(m){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe;const R=globalThis,K=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),le=new WeakMap;let ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&le.set(t,e))}return e}toString(){return this.cssText}};const Le=r=>new ce(typeof r=="string"?r:r+"",void 0,G),O=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ce(t,r,G)},Ne=(r,e)=>{if(K)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},he=K?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Le(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fe,defineProperty:Ie,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:ze,getOwnPropertySymbols:Ye,getPrototypeOf:Be}=Object,$=globalThis,de=$.trustedTypes,He=de?de.emptyScript:"",Z=$.reactiveElementPolyfillSupport,D=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?He:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},X=(r,e)=>!Fe(r,e),pe={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ie(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Ue(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const a=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const e=Be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const t=this.properties,s=[...ze(t),...Ye(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(he(i))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:j;this._$Em=i;const h=l.fromAttribute(t,a.type);this[i]=h??((o=this._$Ej)==null?void 0:o.get(i))??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){var o;if(e!==void 0){const a=this.constructor;if(i===!1&&(n=this[e]),s??(s=a.getPropertyOptions(e)),!((s.hasChanged??X)(n,t)||s.useDefault&&s.reflect&&n===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:a}=o,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[D("elementProperties")]=new Map,S[D("finalized")]=new Map,Z==null||Z({ReactiveElement:S}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,ue=r=>r,q=P.trustedTypes,fe=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,me="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+v,Re=`<${ge}>`,w=document,L=()=>w.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",ee=Array.isArray,je=r=>ee(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",te=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,$e=/>/g,k=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,_e=/"/g,be=/^(?:script|style|textarea|title)$/i,qe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=qe(1),M=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),we=new WeakMap,A=w.createTreeWalker(w,129);function ke(r,e){if(!ee(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}const We=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=F;for(let a=0;a<t;a++){const l=r[a];let h,u,d=-1,y=0;for(;y<l.length&&(o.lastIndex=y,u=o.exec(l),u!==null);)y=o.lastIndex,o===F?u[1]==="!--"?o=ye:u[1]!==void 0?o=$e:u[2]!==void 0?(be.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=k):u[3]!==void 0&&(o=k):o===k?u[0]===">"?(o=i??F,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?k:u[3]==='"'?_e:ve):o===_e||o===ve?o=k:o===ye||o===$e?o=F:(o=k,i=void 0);const b=o===k&&r[a+1].startsWith("/>")?" ":"";n+=o===F?l+Re:d>=0?(s.push(h),l.slice(0,d)+me+l.slice(d)+v+b):l+v+(d===-2?a:b)}return[ke(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class I{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[h,u]=We(e,t);if(this.el=I.createElement(h,s),A.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=A.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(me)){const y=u[o++],b=i.getAttribute(d).split(v),Q=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:Q[2],strings:b,ctor:Q[1]==="."?Ve:Q[1]==="?"?Qe:Q[1]==="@"?Ke:W}),i.removeAttribute(d)}else d.startsWith(v)&&(l.push({type:6,index:n}),i.removeAttribute(d));if(be.test(i.tagName)){const d=i.textContent.split(v),y=d.length-1;if(y>0){i.textContent=q?q.emptyScript:"";for(let b=0;b<y;b++)i.append(d[b],L()),A.nextNode(),l.push({type:2,index:++n});i.append(d[y],L())}}}else if(i.nodeType===8)if(i.data===ge)l.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:n}),d+=v.length-1}n++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function E(r,e,t=r,s){var o,a;if(e===M)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=N(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=E(r,i._$AS(r,e.values),i,s)),e}class Je{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);A.currentNode=i;let n=A.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new U(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Ge(n,this,e)),this._$AV.push(h),l=s[++a]}o!==(l==null?void 0:l.index)&&(n=A.nextNode(),o++)}return A.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),N(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=I.createElement(ke(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Je(i,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new I(e)),t}k(e){ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new U(this.O(L()),this.O(L()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=ue(e).nextSibling;ue(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=E(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==M,o&&(this._$AH=e);else{const a=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=E(this,a[s+l],t,l),h===M&&(h=this._$AH[l]),o||(o=!N(h)||h!==this._$AH[l]),h===p?e=p:e!==p&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ve extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Qe extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ke extends W{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??p)===M)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const re=P.litHtmlPolyfillSupport;re==null||re(I,U),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.2");const Ze=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new U(e.insertBefore(L(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;class g extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return M}}g._$litElement$=!0,g.finalized=!0,(Pe=x.litElementHydrateSupport)==null||Pe.call(x,{LitElement:g});const se=x.litElementPolyfillSupport;se==null||se({LitElement:g}),(x.litElementVersions??(x.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:X},et=(r=Xe,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,r,a),a}}}if(s==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,r,!0,a)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(e,t)=>typeof t=="object"?et(r,e,t):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(r){return f({...r,state:!0,attribute:!1})}const tt=O`
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
`,rt=O`
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
`,st=O`
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
`,it=O`
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
`,nt=["year","dayOfYear","isoWeek","quarter"],Y={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},ot="de";function at(r){if(!r||!r.show)return nt;const e=r.show;return Array.isArray(e)?e.filter(s=>lt(s)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(s=>e[s]===!0)}function lt(r){return typeof r=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(r)}function ct(r){return r?{segments:ht(r.segments),labels:dt(r.labels),showTodayMarker:r.show_today_marker??Y.showTodayMarker,showProgressFill:r.show_progress_fill??Y.showProgressFill}:Y}function ht(r){return r&&["none","quarters","months","weeks"].includes(r)?r:Y.segments}function dt(r){return r&&["none","quarters","months"].includes(r)?r:Y.labels}function pt(r){var i;if(!r.entity||typeof r.entity!="string")return null;let e="state";if(r.source&&r.source!=="state"){const n=/^attribute:(.+)$/.exec(r.source);n&&n[1]&&(e={attribute:n[1]})}const s=["point","rangeStart","rangeEnd","range"].includes(r.type)?r.type:"point";return{entity:r.entity,label:((i=r.label)==null?void 0:i.trim())||null,source:e,type:s,showOnBar:r.showOnBar??!0,showInList:r.showInList??!1}}function ut(r){if(!r||!Array.isArray(r))return[];const e=[];for(const t of r){const s=pt(t);s&&e.push(s)}return e}function ft(r){return{title:r.title??null,locale:r.locale??ot,facts:at(r.facts),bar:ct(r.bar),markers:ut(r.markers)}}function mt(r){if(!r||typeof r!="object")return!1;const e=r;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function gt(r){return r%4===0&&r%100!==0||r%400===0}function Ae(r){return gt(r)?366:365}function xe(r){const e=new Date(r.getFullYear(),0,0),t=r.getTime()-e.getTime(),s=1e3*60*60*24;return Math.floor(t/s)}function yt(r){const e=new Date(r.valueOf()),t=(r.getDay()+6)%7;e.setDate(e.getDate()-t+3);const s=new Date(e.getFullYear(),0,4),i=(s.getDay()+6)%7;s.setDate(s.getDate()-i+3);const n=e.getTime()-s.getTime();return 1+Math.round(n/6048e5)}function $t(r){return Math.floor(r.getMonth()/3)+1}function ne(r){const e=r.getFullYear(),t=new Date(e,0,1).getTime(),s=new Date(e+1,0,1).getTime(),n=(r.getTime()-t)/(s-t)*100;return Math.min(100,Math.max(0,n))}function vt(r){const e=r.getFullYear(),t=Ae(e),s=xe(r);return t-s}function _t(r){if(r instanceof Date)return isNaN(r.getTime())?null:r;if(typeof r!="string"||r.trim()==="")return null;const e=r.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const s=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:i=>new Date(parseInt(i[1]),parseInt(i[2])-1,parseInt(i[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[2])-1,parseInt(i[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[1])-1,parseInt(i[2]))}];for(const{regex:i,parse:n}of s){const o=e.match(i);if(o){const a=n(o);if(!isNaN(a.getTime()))return a}}return null}const Se={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Me={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function Ee(r,e,t=!1){return(t?Me[e]??Me.de:Se[e]??Se.de)[r]??""}function bt(r){return r==="en"?"CW":"KW"}function wt(r,e){if(r==="none")return[];const t=new Date(e,0,1).getTime(),i=new Date(e+1,0,1).getTime()-t,n=o=>(o.getTime()-t)/i*100;if(r==="quarters")return[0,n(new Date(e,3,1)),n(new Date(e,6,1)),n(new Date(e,9,1))];if(r==="months"){const o=[];for(let a=0;a<12;a++)o.push(n(new Date(e,a,1)));return o}if(r==="weeks"){const o=[],l=(new Date(e,0,1).getDay()+6)%7;let h;l<=3?h=new Date(e,0,1-l):h=new Date(e,0,8-l);let u=h;for(;u.getFullYear()<=e;){const d=n(u);d>=0&&d<100&&o.push(d),u=new Date(u.getTime()+6048e5)}return o}return[]}function kt(r,e,t){if(r==="none")return[];const s=new Date(e,0,1).getTime(),n=new Date(e+1,0,1).getTime()-s,o=a=>(a.getTime()-s)/n*100;if(r==="quarters")return[{position:o(new Date(e,1,1)),label:"Q1"},{position:o(new Date(e,4,1)),label:"Q2"},{position:o(new Date(e,7,1)),label:"Q3"},{position:o(new Date(e,10,1)),label:"Q4"}];if(r==="months"){const a=[];for(let l=0;l<12;l++){const h=new Date(e,l,1),u=new Date(e,l+1,1),d=new Date((h.getTime()+u.getTime())/2);a.push({position:o(d),label:Ee(l,t,!0)})}return a}return[]}function At(r,e){return e==="state"?r.state:r.attributes[e.attribute]}function xt(r,e){return r.label?r.label:e.attributes.friendly_name??r.entity}function St(r,e,t){const s=e[r.entity];if(!s)return null;const i=At(s,r.source),n=_t(i);if(!n||n.getFullYear()!==t)return null;const o=ne(n);return{label:xt(r,s),date:n,position:o,type:r.type,showOnBar:r.showOnBar,showInList:r.showInList}}function Mt(r,e,t){const s=[];for(const i of r){const n=St(i,e,t);n&&s.push(n)}return s.sort((i,n)=>i.position-n.position),s}function Et(r,e){const t=r.getDate(),s=r.getMonth()+1;return e==="en"?`${s}/${t}`:`${t}.${s}.`}var Ct=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,C=(r,e,t,s)=>{for(var i=s>1?void 0:s?Tt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ct(e,t,i),i};let _=class extends g{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return c`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill?this.renderProgress():p}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker?this.renderTodayMarker():p}
        </div>
        ${this.renderLabels()}
      </div>
    `}renderProgress(){const r=Math.min(100,Math.max(0,this.progress));return c`
      <div class="timeline-progress" style="width: ${r}%"></div>
    `}renderTodayMarker(){const r=Math.min(100,Math.max(0,this.progress));return c`
      <div class="timeline-today-marker" style="left: ${r}%"></div>
    `}renderSegments(){const r=wt(this.config.segments,this.year);if(r.length===0)return c``;const e=this.config.segments==="weeks";return c`
      <div class="timeline-segments">
        ${r.slice(1).map(t=>c`
            <div
              class="timeline-segment-line ${e?"week":""}"
              style="left: ${t}%"
            ></div>
          `)}
      </div>
    `}renderLabels(){const r=kt(this.config.labels,this.year,this.locale);return r.length===0?p:c`
      <div class="timeline-labels">
        ${r.map(e=>c`
            <span class="timeline-label">${e.label}</span>
          `)}
      </div>
    `}renderMarkers(){return this.markers.length===0?c``:c`
      <div class="timeline-markers">
        ${this.markers.map(r=>this.renderMarker(r))}
      </div>
    `}renderMarker(r){const e=Math.min(100,Math.max(0,r.position));let t="";return r.type==="rangeStart"?t="range-start":r.type==="rangeEnd"&&(t="range-end"),c`
      <div
        class="timeline-marker ${t}"
        style="left: ${e}%"
        title="${r.label}"
      ></div>
    `}};_.styles=rt,C([f({type:Number})],_.prototype,"progress",2),C([f({type:Number})],_.prototype,"year",2),C([f({type:String})],_.prototype,"locale",2),C([f({type:Object})],_.prototype,"config",2),C([f({type:Array})],_.prototype,"markers",2),_=C([z("ytc-timeline-bar")],_);var Ot=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,J=(r,e,t,s)=>{for(var i=s>1?void 0:s?Dt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ot(e,t,i),i};const Ce={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let T=class extends g{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de"}render(){return this.facts.length===0?c``:c`
      <div class="facts-container">
        ${this.facts.map(r=>this.renderFact(r))}
      </div>
    `}renderFact(r){const e=this.getLabel(r),t=this.getValue(r);return t===null?p:c`
      <div class="fact-item">
        <span class="fact-label">${e}</span>
        <span class="fact-value">${t}</span>
      </div>
    `}getLabel(r){return(Ce[this.locale]??Ce.de)[r]}getValue(r){const e=this.date.getFullYear();switch(r){case"year":return String(e);case"dayOfYear":{const t=xe(this.date),s=Ae(e);return`${t} / ${s}`}case"isoWeek":{const t=yt(this.date);return`${bt(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return Ee(t,this.locale,!1)}case"quarter":return`Q${$t(this.date)}`;case"progress":return`${ne(this.date).toFixed(1)}%`;case"remainingDays":{const t=vt(this.date);return String(t)}default:return null}}};T.styles=st,J([f({type:Object})],T.prototype,"date",2),J([f({type:Array})],T.prototype,"facts",2),J([f({type:String})],T.prototype,"locale",2),T=J([z("ytc-facts-block")],T);var Pt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,oe=(r,e,t,s)=>{for(var i=s>1?void 0:s?Lt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Pt(e,t,i),i};const Te={de:"Ereignisse",en:"Events"};let B=class extends g{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const r=this.markers.filter(t=>t.showInList);if(r.length===0)return p;const e=Te[this.locale]??Te.de;return c`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${r.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(r){const e=Et(r.date,this.locale);return c`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot"></span>
          <span class="marker-list-item-label">${r.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};B.styles=it,oe([f({type:Array})],B.prototype,"markers",2),oe([f({type:String})],B.prototype,"locale",2),B=oe([z("ytc-marker-list")],B);var Nt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,ae=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ft(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Nt(e,t,i),i};const Oe=["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"],De={de:{year:"Jahr",dayOfYear:"Tag im Jahr",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt (%)",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day of Year",isoWeek:"ISO Week",month:"Month",quarter:"Quarter",progress:"Progress (%)",remainingDays:"Remaining Days"}};let H=class extends g{constructor(){super(...arguments),this._onTitleChange=r=>{const e=r.target,t={...this._config};e.value?t.title=e.value:delete t.title,this._updateConfig(t)},this._onLocaleChange=r=>{const e=r.target;this._updateConfig({...this._config,locale:e.value})},this._onSegmentsChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,segments:e.value}})},this._onLabelsChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,labels:e.value}})},this._onTodayMarkerChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_today_marker:e.checked}})},this._onProgressFillChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_progress_fill:e.checked}})},this._onAddMarker=()=>{var e;const r=[...((e=this._config)==null?void 0:e.markers)??[]];r.push({entity:"",type:"point",showOnBar:!0,showInList:!1}),this._updateConfig({...this._config,markers:r})}}setConfig(r){this._config=r}render(){if(!this._config)return c``;const r=this._config.locale??"de";return c`
      <div class="editor-container">
        ${this._renderGeneralSection(r)}
        ${this._renderFactsSection(r)}
        ${this._renderBarSection(r)}
        ${this._renderMarkersSection(r)}
      </div>
    `}_renderGeneralSection(r){var t,s;const e=r==="en"?{title:"Title",locale:"Language",german:"German",english:"English"}:{title:"Titel",locale:"Sprache",german:"Deutsch",english:"Englisch"};return c`
      <div class="section">
        <div class="section-title">${r==="en"?"General":"Allgemein"}</div>

        <div class="form-row">
          <label>${e.title}</label>
          <input
            type="text"
            .value=${((t=this._config)==null?void 0:t.title)??""}
            @input=${this._onTitleChange}
            placeholder="${r==="en"?"Optional title":"Optionaler Titel"}"
          />
        </div>

        <div class="form-row">
          <label>${e.locale}</label>
          <select .value=${((s=this._config)==null?void 0:s.locale)??"de"} @change=${this._onLocaleChange}>
            <option value="de">${e.german}</option>
            <option value="en">${e.english}</option>
          </select>
        </div>
      </div>
    `}_renderFactsSection(r){var s,i;const e=De[r]??De.de,t=((i=(s=this._config)==null?void 0:s.facts)==null?void 0:i.show)??["year","dayOfYear","isoWeek","quarter"];return c`
      <div class="section">
        <div class="section-title">${r==="en"?"Facts":"Kennzahlen"}</div>

        <div class="checkbox-group">
          ${Oe.map(n=>c`
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="fact-${n}"
                  .checked=${t.includes(n)}
                  @change=${o=>this._onFactToggle(n,o)}
                />
                <label for="fact-${n}">${e[n]}</label>
              </div>
            `)}
        </div>
      </div>
    `}_renderBarSection(r){var s;const e=r==="en"?{title:"Timeline Bar",segments:"Segment Lines",labels:"Labels",none:"None",quarters:"Quarters",months:"Months",weeks:"Weeks",todayMarker:"Show Today Marker",progressFill:"Show Progress Fill"}:{title:"Zeitstrahl",segments:"Segment-Linien",labels:"Beschriftung",none:"Keine",quarters:"Quartale",months:"Monate",weeks:"Wochen",todayMarker:"Heute-Marker anzeigen",progressFill:"Fortschritt füllen"},t=((s=this._config)==null?void 0:s.bar)??{};return c`
      <div class="section">
        <div class="section-title">${e.title}</div>

        <div class="form-row">
          <label>${e.segments}</label>
          <select .value=${t.segments??"months"} @change=${this._onSegmentsChange}>
            <option value="none">${e.none}</option>
            <option value="quarters">${e.quarters}</option>
            <option value="months">${e.months}</option>
            <option value="weeks">${e.weeks}</option>
          </select>
        </div>

        <div class="form-row">
          <label>${e.labels}</label>
          <select .value=${t.labels??"quarters"} @change=${this._onLabelsChange}>
            <option value="none">${e.none}</option>
            <option value="quarters">${e.quarters}</option>
            <option value="months">${e.months}</option>
          </select>
        </div>

        <div class="switch-row">
          <label>${e.todayMarker}</label>
          <ha-switch
            .checked=${t.show_today_marker??!0}
            @change=${this._onTodayMarkerChange}
          ></ha-switch>
        </div>

        <div class="switch-row">
          <label>${e.progressFill}</label>
          <ha-switch
            .checked=${t.show_progress_fill??!0}
            @change=${this._onProgressFillChange}
          ></ha-switch>
        </div>
      </div>
    `}_renderMarkersSection(r){var s;const e=r==="en"?{title:"Markers",entity:"Entity",label:"Label (optional)",labelPlaceholder:"Uses entity name if empty",type:"Type",point:"Point",rangeStart:"Range Start",rangeEnd:"Range End",showOnBar:"Show on Bar",showInList:"Show in List",addMarker:"+ Add Marker",delete:"Delete",marker:"Marker"}:{title:"Marker",entity:"Entität",label:"Bezeichnung (optional)",labelPlaceholder:"Verwendet Entity-Name wenn leer",type:"Typ",point:"Punkt",rangeStart:"Bereich Start",rangeEnd:"Bereich Ende",showOnBar:"Auf Balken",showInList:"In Liste",addMarker:"+ Marker hinzufügen",delete:"Löschen",marker:"Marker"},t=((s=this._config)==null?void 0:s.markers)??[];return c`
      <div class="section">
        <div class="section-title">${e.title}</div>

        ${t.map((i,n)=>this._renderMarkerItem(i,n,e))}

        <button class="add-marker-btn" @click=${this._onAddMarker}>
          ${e.addMarker}
        </button>
      </div>
    `}_renderMarkerItem(r,e,t){const s=this.hass?Object.entries(this.hass.states).filter(([i,n])=>{var h;if(i.split(".")[0]==="input_datetime")return!0;const a=n,l=(h=a==null?void 0:a.attributes)==null?void 0:h.device_class;return l==="timestamp"||l==="date"}).map(([i])=>i).sort():[];return c`
      <div class="marker-item">
        <div class="marker-header">
          <span class="marker-number">${t.marker} ${e+1}</span>
          <button
            class="marker-delete"
            @click=${()=>this._onDeleteMarker(e)}
          >
            ${t.delete}
          </button>
        </div>

        <div class="marker-grid">
          <div class="form-row full-width">
            <label>${t.entity}</label>
            <select
              .value=${r.entity??""}
              @change=${i=>this._onMarkerFieldChange(e,"entity",i)}
            >
              <option value="">--</option>
              ${s.map(i=>c`
                  <option value=${i} ?selected=${i===r.entity}>
                    ${i}
                  </option>
                `)}
            </select>
          </div>

          <div class="form-row">
            <label>${t.label}</label>
            <input
              type="text"
              .value=${r.label??""}
              @input=${i=>this._onMarkerFieldChange(e,"label",i)}
              placeholder="${t.labelPlaceholder}"
            />
          </div>

          <div class="form-row">
            <label>${t.type}</label>
            <select
              .value=${r.type??"point"}
              @change=${i=>this._onMarkerFieldChange(e,"type",i)}
            >
              <option value="point">${t.point}</option>
              <option value="rangeStart">${t.rangeStart}</option>
              <option value="rangeEnd">${t.rangeEnd}</option>
            </select>
          </div>
        </div>

        <div class="marker-switches">
          <div class="switch-row">
            <label>${t.showOnBar}</label>
            <ha-switch
              .checked=${r.showOnBar??!0}
              @change=${i=>this._onMarkerSwitchChange(e,"showOnBar",i)}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <label>${t.showInList}</label>
            <ha-switch
              .checked=${r.showInList??!1}
              @change=${i=>this._onMarkerSwitchChange(e,"showInList",i)}
            ></ha-switch>
          </div>
        </div>
      </div>
    `}_onFactToggle(r,e){var n,o;const t=e.target,s=((o=(n=this._config)==null?void 0:n.facts)==null?void 0:o.show)??["year","dayOfYear","isoWeek","quarter"];let i;t.checked?i=Oe.filter(a=>s.includes(a)||a===r):i=s.filter(a=>a!==r),this._updateConfig({...this._config,facts:{show:i}})}_onDeleteMarker(r){var t;const e=[...((t=this._config)==null?void 0:t.markers)??[]];e.splice(r,1),this._updateConfig({...this._config,markers:e})}_onMarkerFieldChange(r,e,t){var o;const s=t.target,i=[...((o=this._config)==null?void 0:o.markers)??[]],n=i[r];n&&(i[r]={...n,[e]:s.value},this._updateConfig({...this._config,markers:i}))}_onMarkerSwitchChange(r,e,t){var o;const s=t.target,i=[...((o=this._config)==null?void 0:o.markers)??[]],n=i[r];n&&(i[r]={...n,[e]:s.checked},this._updateConfig({...this._config,markers:i}))}_updateConfig(r){this._config=r;const e=new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};H.styles=O`
    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
    }

    .section {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 16px;
    }

    .section-title {
      font-weight: 500;
      margin-bottom: 12px;
      color: var(--primary-text-color);
    }

    .form-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 12px;
    }

    .form-row:last-child {
      margin-bottom: 0;
    }

    .form-row label {
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .form-row input[type='text'],
    .form-row select {
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 1em;
    }

    .form-row input[type='text']:focus,
    .form-row select:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .checkbox-item input[type='checkbox'] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .checkbox-item label {
      cursor: pointer;
      font-size: 0.9em;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }

    .switch-row label {
      color: var(--primary-text-color);
    }

    ha-switch {
      --mdc-theme-secondary: var(--primary-color);
    }

    .marker-item {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 12px;
      background: var(--secondary-background-color, #f5f5f5);
    }

    .marker-item:last-child {
      margin-bottom: 0;
    }

    .marker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .marker-number {
      font-weight: 500;
      font-size: 0.9em;
      color: var(--primary-text-color);
    }

    .marker-delete {
      background: none;
      border: none;
      color: var(--error-color, #db4437);
      cursor: pointer;
      padding: 4px 8px;
      font-size: 0.85em;
      border-radius: 4px;
    }

    .marker-delete:hover {
      background: var(--error-color, #db4437);
      color: white;
    }

    .marker-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .marker-grid .form-row {
      margin-bottom: 0;
    }

    .marker-grid .full-width {
      grid-column: 1 / -1;
    }

    .marker-switches {
      display: flex;
      gap: 16px;
      margin-top: 8px;
    }

    .marker-switches .switch-row {
      padding: 4px 0;
      flex: 1;
    }

    .add-marker-btn {
      width: 100%;
      padding: 10px;
      border: 2px dashed var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: none;
      color: var(--primary-color);
      cursor: pointer;
      font-size: 0.9em;
      transition: all 0.2s;
    }

    .add-marker-btn:hover {
      border-color: var(--primary-color);
      background: var(--primary-color);
      color: white;
    }
  `,ae([f({attribute:!1})],H.prototype,"hass",2),ae([ie()],H.prototype,"_config",2),H=ae([z("year-timeline-card-editor")],H);var It=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,V=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ut(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&It(e,t,i),i};return m.YearTimelineCard=class extends g{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!mt(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=ft(e)}getCardSize(){var t,s;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(s=this._config)!=null&&s.facts&&this._config.facts.length>0&&(e+=1),e}static getConfigElement(){return document.createElement("year-timeline-card-editor")}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return c`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=ne(this._now),s=this.resolveMarkers(e),i=this.toBarMarkers(s);return c`
      <ha-card>
        ${this._config.title?c`<div class="card-header">${this._config.title}</div>`:p}
        <div class="card-content">
          ${this._config.facts.length>0?c`
                <ytc-facts-block
                  .date=${this._now}
                  .facts=${this._config.facts}
                  .locale=${this._config.locale}
                ></ytc-facts-block>
              `:p}
          <ytc-timeline-bar
            .progress=${t}
            .year=${e}
            .locale=${this._config.locale}
            .config=${this._config.bar}
            .markers=${i}
          ></ytc-timeline-bar>
          ${s.some(n=>n.showInList)?c`
                <ytc-marker-list
                  .markers=${s}
                  .locale=${this._config.locale}
                ></ytc-marker-list>
              `:p}
        </div>
      </ha-card>
    `}renderError(){return c`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `}resolveMarkers(e){return!this._config||!this.hass?[]:Mt(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type}))}},m.YearTimelineCard.styles=tt,V([f({attribute:!1})],m.YearTimelineCard.prototype,"hass",2),V([ie()],m.YearTimelineCard.prototype,"_config",2),V([ie()],m.YearTimelineCard.prototype,"_error",2),m.YearTimelineCard=V([z("year-timeline-card")],m.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m}({});
