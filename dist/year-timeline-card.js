var YearTimelineCard=function(f){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;const R=globalThis,G=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),le=new WeakMap;let ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&le.set(t,e))}return e}toString(){return this.cssText}};const Ne=r=>new ce(typeof r=="string"?r:r+"",void 0,X),D=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ce(t,r,X)},Ie=(r,e)=>{if(G)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},he=G?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ne(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fe,defineProperty:He,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:ze,getOwnPropertySymbols:Ye,getPrototypeOf:Be}=Object,$=globalThis,de=$.trustedTypes,Re=de?de.emptyScript:"",ee=$.reactiveElementPolyfillSupport,P=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?Re:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},te=(r,e)=>!Fe(r,e),pe={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&He(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Ue(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const l=i==null?void 0:i.call(this);n==null||n.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=Be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,s=[...ze(t),...Ye(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(he(i))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ie(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var n,a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:j;this._$Em=i;const d=o.fromAttribute(t,l.type);this[i]=d??((a=this._$Ej)==null?void 0:a.get(i))??d,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){var a;if(e!==void 0){const l=this.constructor;if(i===!1&&(n=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??te)(n,t)||s.useDefault&&s.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:l}=a,o=this[n];l!==!0||this._$AL.has(n)||o===void 0||this.C(n,void 0,a,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[P("elementProperties")]=new Map,M[P("finalized")]=new Map,ee==null||ee({ReactiveElement:M}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,ue=r=>r,q=L.trustedTypes,me=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,fe="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+_,je=`<${ge}>`,w=document,N=()=>w.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",re=Array.isArray,qe=r=>re(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",se=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,$e=/>/g,k=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,ve=/"/g,be=/^(?:script|style|textarea|title)$/i,We=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=We(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),we=new WeakMap,x=w.createTreeWalker(w,129);function ke(r,e){if(!re(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const Ve=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",a=F;for(let l=0;l<t;l++){const o=r[l];let d,u,h=-1,y=0;for(;y<o.length&&(a.lastIndex=y,u=a.exec(o),u!==null);)y=a.lastIndex,a===F?u[1]==="!--"?a=ye:u[1]!==void 0?a=$e:u[2]!==void 0?(be.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=k):u[3]!==void 0&&(a=k):a===k?u[0]===">"?(a=i??F,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?k:u[3]==='"'?ve:_e):a===ve||a===_e?a=k:a===ye||a===$e?a=F:(a=k,i=void 0);const b=a===k&&r[l+1].startsWith("/>")?" ":"";n+=a===F?o+je:h>=0?(s.push(d),o.slice(0,h)+fe+o.slice(h)+_+b):o+_+(h===-2?l:b)}return[ke(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,a=0;const l=e.length-1,o=this.parts,[d,u]=Ve(e,t);if(this.el=H.createElement(d,s),x.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=x.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(fe)){const y=u[a++],b=i.getAttribute(h).split(_),Z=/([.?@])?(.*)/.exec(y);o.push({type:1,index:n,name:Z[2],strings:b,ctor:Z[1]==="."?Qe:Z[1]==="?"?Ke:Z[1]==="@"?Ze:W}),i.removeAttribute(h)}else h.startsWith(_)&&(o.push({type:6,index:n}),i.removeAttribute(h));if(be.test(i.tagName)){const h=i.textContent.split(_),y=h.length-1;if(y>0){i.textContent=q?q.emptyScript:"";for(let b=0;b<y;b++)i.append(h[b],N()),x.nextNode(),o.push({type:2,index:++n});i.append(h[y],N())}}}else if(i.nodeType===8)if(i.data===ge)o.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)o.push({type:7,index:n}),h+=_.length-1}n++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function E(r,e,t=r,s){var a,l;if(e===S)return e;let i=s!==void 0?(a=t._$Co)==null?void 0:a[s]:t._$Cl;const n=I(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=E(r,i._$AS(r,e.values),i,s)),e}class Je{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);x.currentNode=i;let n=x.nextNode(),a=0,l=0,o=s[0];for(;o!==void 0;){if(a===o.index){let d;o.type===2?d=new U(n,n.nextSibling,this,e):o.type===1?d=new o.ctor(n,o.name,o.strings,this,e):o.type===6&&(d=new Ge(n,this,e)),this._$AV.push(d),o=s[++l]}a!==(o==null?void 0:o.index)&&(n=x.nextNode(),a++)}return x.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),I(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(ke(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const a=new Je(i,this),l=a.u(this.options);a.p(t),this.T(l),this._$AH=a}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new H(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new U(this.O(N()),this.O(N()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=ue(e).nextSibling;ue(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const n=this.strings;let a=!1;if(n===void 0)e=E(this,e,t,0),a=!I(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{const l=e;let o,d;for(e=n[0],o=0;o<n.length-1;o++)d=E(this,l[s+o],t,o),d===S&&(d=this._$AH[o]),a||(a=!I(d)||d!==this._$AH[o]),d===p?e=p:e!==p&&(e+=(d??"")+n[o+1]),this._$AH[o]=d}a&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qe extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Ke extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ze extends W{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??p)===S)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const ie=L.litHtmlPolyfillSupport;ie==null||ie(H,U),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.3.2");const Xe=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new U(e.insertBefore(N(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class g extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}g._$litElement$=!0,g.finalized=!0,(Le=A.litElementHydrateSupport)==null||Le.call(A,{LitElement:g});const ne=A.litElementPolyfillSupport;ne==null||ne({LitElement:g}),(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:te},tt=(r=et,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:a}=t;return{set(l){const o=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,o,r,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,r,l),l}}}if(s==="setter"){const{name:a}=t;return function(l){const o=this[a];e.call(this,l),this.requestUpdate(a,o,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function m(r){return(e,t)=>typeof t=="object"?tt(r,e,t):((s,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(r){return m({...r,state:!0,attribute:!1})}const rt=D`
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
`,st=D`
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
`,it=D`
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
`,nt=D`
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
`,at=["year","dayOfYear","isoWeek","quarter"],Y={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},ot="de";function lt(r){if(!r||!r.show)return at;const e=r.show;return Array.isArray(e)?e.filter(s=>ct(s)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(s=>e[s]===!0)}function ct(r){return typeof r=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(r)}function ht(r){return r?{segments:dt(r.segments),labels:pt(r.labels),showTodayMarker:r.show_today_marker??Y.showTodayMarker,showProgressFill:r.show_progress_fill??Y.showProgressFill}:Y}function dt(r){return r&&["none","quarters","months","weeks"].includes(r)?r:Y.segments}function pt(r){return r&&["none","quarters","months"].includes(r)?r:Y.labels}function ut(r){var i;if(!r.entity||typeof r.entity!="string")return null;let e="state";if(r.source&&r.source!=="state"){const n=/^attribute:(.+)$/.exec(r.source);n&&n[1]&&(e={attribute:n[1]})}const s=["point","rangeStart","rangeEnd","range"].includes(r.type)?r.type:"point";return{entity:r.entity,label:((i=r.label)==null?void 0:i.trim())||null,source:e,type:s,showOnBar:r.showOnBar??!0,showInList:r.showInList??!1}}function mt(r){if(!r||!Array.isArray(r))return[];const e=[];for(const t of r){const s=ut(t);s&&e.push(s)}return e}function ft(r){return{title:r.title??null,locale:r.locale??ot,facts:lt(r.facts),bar:ht(r.bar),markers:mt(r.markers)}}function gt(r){if(!r||typeof r!="object")return!1;const e=r;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function yt(r){return r%4===0&&r%100!==0||r%400===0}function xe(r){return yt(r)?366:365}function Ae(r){const e=new Date(r.getFullYear(),0,0),t=r.getTime()-e.getTime(),s=1e3*60*60*24;return Math.floor(t/s)}function $t(r){const e=new Date(r.valueOf()),t=(r.getDay()+6)%7;e.setDate(e.getDate()-t+3);const s=new Date(e.getFullYear(),0,4),i=(s.getDay()+6)%7;s.setDate(s.getDate()-i+3);const n=e.getTime()-s.getTime();return 1+Math.round(n/6048e5)}function _t(r){return Math.floor(r.getMonth()/3)+1}function ae(r){const e=r.getFullYear(),t=new Date(e,0,1).getTime(),s=new Date(e+1,0,1).getTime(),n=(r.getTime()-t)/(s-t)*100;return Math.min(100,Math.max(0,n))}function vt(r){const e=r.getFullYear(),t=xe(e),s=Ae(r);return t-s}function bt(r){if(r instanceof Date)return isNaN(r.getTime())?null:r;if(typeof r!="string"||r.trim()==="")return null;const e=r.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const s=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:i=>new Date(parseInt(i[1]),parseInt(i[2])-1,parseInt(i[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[2])-1,parseInt(i[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[1])-1,parseInt(i[2]))}];for(const{regex:i,parse:n}of s){const a=e.match(i);if(a){const l=n(a);if(!isNaN(l.getTime()))return l}}return null}const Me={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Se={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function Ee(r,e,t=!1){return(t?Se[e]??Se.de:Me[e]??Me.de)[r]??""}function wt(r){return r==="en"?"CW":"KW"}function kt(r,e){if(r==="none")return[];const t=new Date(e,0,1).getTime(),i=new Date(e+1,0,1).getTime()-t,n=a=>(a.getTime()-t)/i*100;if(r==="quarters")return[0,n(new Date(e,3,1)),n(new Date(e,6,1)),n(new Date(e,9,1))];if(r==="months"){const a=[];for(let l=0;l<12;l++)a.push(n(new Date(e,l,1)));return a}if(r==="weeks"){const a=[],o=(new Date(e,0,1).getDay()+6)%7;let d;o<=3?d=new Date(e,0,1-o):d=new Date(e,0,8-o);let u=d;for(;u.getFullYear()<=e;){const h=n(u);h>=0&&h<100&&a.push(h),u=new Date(u.getTime()+6048e5)}return a}return[]}function xt(r,e,t){if(r==="none")return[];const s=new Date(e,0,1).getTime(),n=new Date(e+1,0,1).getTime()-s,a=l=>(l.getTime()-s)/n*100;if(r==="quarters")return[{position:a(new Date(e,1,1)),label:"Q1"},{position:a(new Date(e,4,1)),label:"Q2"},{position:a(new Date(e,7,1)),label:"Q3"},{position:a(new Date(e,10,1)),label:"Q4"}];if(r==="months"){const l=[];for(let o=0;o<12;o++){const d=new Date(e,o,1),u=new Date(e,o+1,1),h=new Date((d.getTime()+u.getTime())/2);l.push({position:a(h),label:Ee(o,t,!0)})}return l}return[]}function At(r,e){return e==="state"?r.state:r.attributes[e.attribute]}function Mt(r,e){return r.label?r.label:e.attributes.friendly_name??r.entity}function St(r,e,t){const s=e[r.entity];if(!s)return null;const i=At(s,r.source),n=bt(i);if(!n||n.getFullYear()!==t)return null;const a=ae(n);return{label:Mt(r,s),date:n,position:a,type:r.type,showOnBar:r.showOnBar,showInList:r.showInList}}function Et(r,e,t){const s=[];for(const i of r){const n=St(i,e,t);n&&s.push(n)}return s.sort((i,n)=>i.position-n.position),s}function Ct(r,e){const t=r.getDate(),s=r.getMonth()+1;return e==="en"?`${s}/${t}`:`${t}.${s}.`}var Tt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,C=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ot(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Tt(e,t,i),i};let v=class extends g{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return c`
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
    `}renderSegments(){const r=kt(this.config.segments,this.year);if(r.length===0)return c``;const e=this.config.segments==="weeks";return c`
      <div class="timeline-segments">
        ${r.slice(1).map(t=>c`
            <div
              class="timeline-segment-line ${e?"week":""}"
              style="left: ${t}%"
            ></div>
          `)}
      </div>
    `}renderLabels(){const r=xt(this.config.labels,this.year,this.locale);return r.length===0?p:c`
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
    `}};v.styles=st,C([m({type:Number})],v.prototype,"progress",2),C([m({type:Number})],v.prototype,"year",2),C([m({type:String})],v.prototype,"locale",2),C([m({type:Object})],v.prototype,"config",2),C([m({type:Array})],v.prototype,"markers",2),v=C([z("ytc-timeline-bar")],v);var Dt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,J=(r,e,t,s)=>{for(var i=s>1?void 0:s?Pt(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Dt(e,t,i),i};const Ce={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let T=class extends g{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de"}render(){return this.facts.length===0?c``:c`
      <div class="facts-container">
        ${this.facts.map(r=>this.renderFact(r))}
      </div>
    `}renderFact(r){const e=this.getLabel(r),t=this.getValue(r);return t===null?p:c`
      <div class="fact-item">
        <span class="fact-label">${e}</span>
        <span class="fact-value">${t}</span>
      </div>
    `}getLabel(r){return(Ce[this.locale]??Ce.de)[r]}getValue(r){const e=this.date.getFullYear();switch(r){case"year":return String(e);case"dayOfYear":{const t=Ae(this.date),s=xe(e);return`${t} / ${s}`}case"isoWeek":{const t=$t(this.date);return`${wt(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return Ee(t,this.locale,!1)}case"quarter":return`Q${_t(this.date)}`;case"progress":return`${ae(this.date).toFixed(1)}%`;case"remainingDays":{const t=vt(this.date);return String(t)}default:return null}}};T.styles=it,J([m({type:Object})],T.prototype,"date",2),J([m({type:Array})],T.prototype,"facts",2),J([m({type:String})],T.prototype,"locale",2),T=J([z("ytc-facts-block")],T);var Lt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,oe=(r,e,t,s)=>{for(var i=s>1?void 0:s?Nt(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Lt(e,t,i),i};const Te={de:"Ereignisse",en:"Events"};let B=class extends g{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const r=this.markers.filter(t=>t.showInList);if(r.length===0)return p;const e=Te[this.locale]??Te.de;return c`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${r.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(r){const e=Ct(r.date,this.locale);return c`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot"></span>
          <span class="marker-list-item-label">${r.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};B.styles=nt,oe([m({type:Array})],B.prototype,"markers",2),oe([m({type:String})],B.prototype,"locale",2),B=oe([z("ytc-marker-list")],B);var It=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Q=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ft(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&It(e,t,i),i};const Oe=["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"],De={de:{year:"Jahr",dayOfYear:"Tag im Jahr",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt (%)",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day of Year",isoWeek:"ISO Week",month:"Month",quarter:"Quarter",progress:"Progress (%)",remainingDays:"Remaining Days"}},Pe={de:{general:"Allgemein",title:"Titel",titleHelper:"Optionaler Titel für die Karte",locale:"Sprache",german:"Deutsch",english:"Englisch",facts:"Kennzahlen",bar:"Zeitstrahl",segments:"Segment-Linien",barLabels:"Beschriftung",none:"Keine",quarters:"Quartale",months:"Monate",weeks:"Wochen",todayMarker:"Heute-Marker anzeigen",progressFill:"Fortschritt füllen",markers:"Marker",addMarker:"Marker hinzufügen",editMarker:"Marker bearbeiten",back:"Zurück",entity:"Entität",label:"Bezeichnung",labelHelper:"Leer = Entity-Name verwenden",type:"Typ",point:"Punkt",rangeStart:"Bereich Start",rangeEnd:"Bereich Ende",showOnBar:"Auf Balken anzeigen",showInList:"In Liste anzeigen",noMarkers:"Keine Marker konfiguriert"},en:{general:"General",title:"Title",titleHelper:"Optional card title",locale:"Language",german:"German",english:"English",facts:"Facts",bar:"Timeline Bar",segments:"Segment Lines",barLabels:"Labels",none:"None",quarters:"Quarters",months:"Months",weeks:"Weeks",todayMarker:"Show Today Marker",progressFill:"Show Progress Fill",markers:"Markers",addMarker:"Add Marker",editMarker:"Edit Marker",back:"Back",entity:"Entity",label:"Label",labelHelper:"Empty = use entity name",type:"Type",point:"Point",rangeStart:"Range Start",rangeEnd:"Range End",showOnBar:"Show on Bar",showInList:"Show in List",noMarkers:"No markers configured"}};let O=class extends g{constructor(){super(...arguments),this._editingMarkerIndex=null,this._onTitleChange=r=>{const e=r.target,t={...this._config};e.value?t.title=e.value:delete t.title,this._updateConfig(t)},this._onLocaleChange=r=>{const e=r.target.value;e&&this._updateConfig({...this._config,locale:e})},this._onSegmentsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,segments:e}})},this._onLabelsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,labels:e}})},this._onTodayMarkerChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_today_marker:e.checked}})},this._onProgressFillChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_progress_fill:e.checked}})},this._onBackFromSubEditor=()=>{this._editingMarkerIndex=null}}setConfig(r){this._config=r}_getLocale(){var r;return((r=this._config)==null?void 0:r.locale)??"de"}_getLabels(){const r=this._getLocale();return Pe[r]??Pe.de}render(){return this._config?this._editingMarkerIndex!==null?this._renderMarkerSubEditor():c`
      <div class="editor-container">
        ${this._renderGeneralSection()}
        ${this._renderFactsSection()}
        ${this._renderBarSection()}
        ${this._renderMarkersSection()}
      </div>
    `:c``}_renderGeneralSection(){var t;const r=this._getLabels(),e=this._getLocale();return c`
      <ha-expansion-panel outlined .header=${r.general}>
        <div class="content">
          <div class="form-row">
            <ha-textfield
              .label=${r.title}
              .helper=${r.titleHelper}
              .value=${((t=this._config)==null?void 0:t.title)??""}
              @input=${this._onTitleChange}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-select
              .label=${r.locale}
              .value=${e}
              @selected=${this._onLocaleChange}
              @closed=${s=>s.stopPropagation()}
            >
              <mwc-list-item value="de">${r.german}</mwc-list-item>
              <mwc-list-item value="en">${r.english}</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderFactsSection(){var i,n;const r=this._getLabels(),e=this._getLocale(),t=De[e]??De.de,s=((n=(i=this._config)==null?void 0:i.facts)==null?void 0:n.show)??["year","dayOfYear","isoWeek","quarter"];return c`
      <ha-expansion-panel outlined .header=${r.facts}>
        <div class="content">
          <div class="checkbox-group">
            ${Oe.map(a=>c`
                <label class="checkbox-item">
                  <ha-checkbox
                    .checked=${s.includes(a)}
                    @change=${l=>this._onFactToggle(a,l)}
                  ></ha-checkbox>
                  <span>${t[a]}</span>
                </label>
              `)}
          </div>
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
        </div>
      </ha-expansion-panel>
    `}_renderMarkersSection(){var t;const r=this._getLabels(),e=((t=this._config)==null?void 0:t.markers)??[];return c`
      <ha-expansion-panel outlined .header=${r.markers}>
        <div class="content">
          ${e.length===0?c`<div class="no-markers">${r.noMarkers}</div>`:c`
                <div class="marker-list">
                  ${e.map((s,i)=>this._renderMarkerRow(s,i))}
                </div>
              `}

        </div>
      </ha-expansion-panel>
    `}_renderMarkerRow(r,e){var n;const t=(n=this.hass)==null?void 0:n.states[r.entity],s=(t==null?void 0:t.attributes.friendly_name)??r.entity,i=r.label||s;return c`
      <div class="marker-row">
        <ha-icon class="handle" icon="mdi:drag"></ha-icon>
        <ha-icon
          icon=${(t==null?void 0:t.attributes.icon)??"mdi:calendar"}
        ></ha-icon>
        <div class="marker-info">
          <div class="marker-name">${i}</div>
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
    `}_renderMarkerSubEditor(){var n,a,l;const r=this._getLabels(),e=this._editingMarkerIndex,t=(a=(n=this._config)==null?void 0:n.markers)==null?void 0:a[e];if(!t)return this._editingMarkerIndex=null,c``;const s=(l=this.hass)==null?void 0:l.states[t.entity],i=(s==null?void 0:s.attributes.friendly_name)??t.entity;return c`
      <div class="sub-editor">
        <div class="sub-editor-header">
          <ha-icon-button
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._onBackFromSubEditor}
          ></ha-icon-button>
          <span class="sub-editor-title">${r.editMarker}: ${i}</span>
        </div>

        <div class="form-row">
          <ha-textfield
            .label=${r.label}
            .helper=${r.labelHelper}
            .value=${t.label??""}
            .placeholder=${i}
            @input=${o=>this._onMarkerFieldChange("label",o)}
          ></ha-textfield>
        </div>

        <div class="form-row">
          <ha-select
            .label=${r.type}
            .value=${t.type??"point"}
            @selected=${o=>this._onMarkerTypeChange(o)}
            @closed=${o=>o.stopPropagation()}
          >
            <mwc-list-item value="point">${r.point}</mwc-list-item>
            <mwc-list-item value="rangeStart">${r.rangeStart}</mwc-list-item>
            <mwc-list-item value="rangeEnd">${r.rangeEnd}</mwc-list-item>
          </ha-select>
        </div>

        <div class="switch-row">
          <span>${r.showOnBar}</span>
          <ha-switch
            .checked=${t.showOnBar??!0}
            @change=${o=>this._onMarkerSwitchChange("showOnBar",o)}
          ></ha-switch>
        </div>

        <div class="switch-row">
          <span>${r.showInList}</span>
          <ha-switch
            .checked=${t.showInList??!1}
            @change=${o=>this._onMarkerSwitchChange("showInList",o)}
          ></ha-switch>
        </div>
      </div>
    `}_onFactToggle(r,e){var n,a;const t=e.target,s=((a=(n=this._config)==null?void 0:n.facts)==null?void 0:a.show)??["year","dayOfYear","isoWeek","quarter"];let i;t.checked?i=Oe.filter(l=>s.includes(l)||l===r):i=s.filter(l=>l!==r),this._updateConfig({...this._config,facts:{show:i}})}_onEditMarker(r){this._editingMarkerIndex=r}_onDeleteMarker(r){var t;const e=[...((t=this._config)==null?void 0:t.markers)??[]];e.splice(r,1),this._updateConfig({...this._config,markers:e})}_onMarkerFieldChange(r,e){const t=e.target;this._updateMarker({[r]:t.value||void 0})}_onMarkerTypeChange(r){const e=r.target.value;e&&this._updateMarker({type:e})}_onMarkerSwitchChange(r,e){const t=e.target;this._updateMarker({[r]:t.checked})}_updateMarker(r){var s;if(this._editingMarkerIndex===null)return;const e=[...((s=this._config)==null?void 0:s.markers)??[]],t=e[this._editingMarkerIndex];t&&(e[this._editingMarkerIndex]={...t,...r},this._updateConfig({...this._config,markers:e}))}_updateConfig(r){this._config=r;const e=new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};O.styles=D`
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

    /* Facts checkboxes */
    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .checkbox-item ha-checkbox {
      --mdc-checkbox-unchecked-color: var(--secondary-text-color);
    }

    /* Marker list */
    .marker-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
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
  `,Q([m({attribute:!1})],O.prototype,"hass",2),Q([V()],O.prototype,"_config",2),Q([V()],O.prototype,"_editingMarkerIndex",2),O=Q([z("year-timeline-card-editor")],O);var Ht=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,K=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ut(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Ht(e,t,i),i};return f.YearTimelineCard=class extends g{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!gt(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=ft(e)}getCardSize(){var t,s;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(s=this._config)!=null&&s.facts&&this._config.facts.length>0&&(e+=1),e}static getConfigElement(){return document.createElement("year-timeline-card-editor")}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return c`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=ae(this._now),s=this.resolveMarkers(e),i=this.toBarMarkers(s);return c`
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
    `}resolveMarkers(e){return!this._config||!this.hass?[]:Et(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type}))}},f.YearTimelineCard.styles=rt,K([m({attribute:!1})],f.YearTimelineCard.prototype,"hass",2),K([V()],f.YearTimelineCard.prototype,"_config",2),K([V()],f.YearTimelineCard.prototype,"_error",2),f.YearTimelineCard=K([z("year-timeline-card")],f.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),f}({});
