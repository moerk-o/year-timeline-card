var YearTimelineCard=function(f){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const q=globalThis,G=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),le=new WeakMap;let ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&le.set(t,e))}return e}toString(){return this.cssText}};const Le=r=>new ce(typeof r=="string"?r:r+"",void 0,X),P=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ce(t,r,X)},Ie=(r,e)=>{if(G)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=q.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},he=G?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Le(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:He,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:Ue,getOwnPropertySymbols:ze,getPrototypeOf:Be}=Object,_=globalThis,de=_.trustedTypes,Ye=de?de.emptyScript:"",ee=_.reactiveElementPolyfillSupport,D=(r,e)=>r,W={toAttribute(r,e){switch(e){case Boolean:r=r?Ye:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},te=(r,e)=>!Ne(r,e),pe={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&He(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Fe(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const o=i==null?void 0:i.call(this);n==null||n.call(this,a),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const e=Be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const t=this.properties,s=[...Ue(t),...ze(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(he(i))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ie(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:W).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var n,a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:W;this._$Em=i;const p=l.fromAttribute(t,o.type);this[i]=p??((a=this._$Ej)==null?void 0:a.get(i))??p,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){var a;if(e!==void 0){const o=this.constructor;if(i===!1&&(n=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??te)(n,t)||s.useDefault&&s.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:o}=a,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[D("elementProperties")]=new Map,E[D("finalized")]=new Map,ee==null||ee({ReactiveElement:E}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,ue=r=>r,V=L.trustedTypes,me=V?V.createPolicy("lit-html",{createHTML:r=>r}):void 0,fe="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+$,Re=`<${ge}>`,w=document,I=()=>w.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",re=Array.isArray,je=r=>re(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",se=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,_e=/>/g,k=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,ve=/"/g,be=/^(?:script|style|textarea|title)$/i,qe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=qe(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),we=new WeakMap,x=w.createTreeWalker(w,129);function ke(r,e){if(!re(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const We=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",a=H;for(let o=0;o<t;o++){const l=r[o];let p,u,c=-1,y=0;for(;y<l.length&&(a.lastIndex=y,u=a.exec(l),u!==null);)y=a.lastIndex,a===H?u[1]==="!--"?a=ye:u[1]!==void 0?a=_e:u[2]!==void 0?(be.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=k):u[3]!==void 0&&(a=k):a===k?u[0]===">"?(a=i??H,c=-1):u[1]===void 0?c=-2:(c=a.lastIndex-u[2].length,p=u[1],a=u[3]===void 0?k:u[3]==='"'?ve:$e):a===ve||a===$e?a=k:a===ye||a===_e?a=H:(a=k,i=void 0);const b=a===k&&r[o+1].startsWith("/>")?" ":"";n+=a===H?l+Re:c>=0?(s.push(p),l.slice(0,c)+fe+l.slice(c)+$+b):l+$+(c===-2?o:b)}return[ke(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class F{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[p,u]=We(e,t);if(this.el=F.createElement(p,s),x.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(fe)){const y=u[a++],b=i.getAttribute(c).split($),Z=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:Z[2],strings:b,ctor:Z[1]==="."?Je:Z[1]==="?"?Qe:Z[1]==="@"?Ke:J}),i.removeAttribute(c)}else c.startsWith($)&&(l.push({type:6,index:n}),i.removeAttribute(c));if(be.test(i.tagName)){const c=i.textContent.split($),y=c.length-1;if(y>0){i.textContent=V?V.emptyScript:"";for(let b=0;b<y;b++)i.append(c[b],I()),x.nextNode(),l.push({type:2,index:++n});i.append(c[y],I())}}}else if(i.nodeType===8)if(i.data===ge)l.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)l.push({type:7,index:n}),c+=$.length-1}n++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var a,o;if(e===S)return e;let i=s!==void 0?(a=t._$Co)==null?void 0:a[s]:t._$Cl;const n=N(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Ve{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);x.currentNode=i;let n=x.nextNode(),a=0,o=0,l=s[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new U(n,n.nextSibling,this,e):l.type===1?p=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(p=new Ze(n,this,e)),this._$AV.push(p),l=s[++o]}a!==(l==null?void 0:l.index)&&(n=x.nextNode(),a++)}return x.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),N(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=F.createElement(ke(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const a=new Ve(i,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new F(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new U(this.O(I()),this.O(I()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=ue(e).nextSibling;ue(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const n=this.strings;let a=!1;if(n===void 0)e=C(this,e,t,0),a=!N(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{const o=e;let l,p;for(e=n[0],l=0;l<n.length-1;l++)p=C(this,o[s+l],t,l),p===S&&(p=this._$AH[l]),a||(a=!N(p)||p!==this._$AH[l]),p===d?e=d:e!==d&&(e+=(p??"")+n[l+1]),this._$AH[l]=p}a&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Je extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Qe extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Ke extends J{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??d)===S)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const ie=L.litHtmlPolyfillSupport;ie==null||ie(F,U),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.3.2");const Ge=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new U(e.insertBefore(I(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class g extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}g._$litElement$=!0,g.finalized=!0,(De=A.litElementHydrateSupport)==null||De.call(A,{LitElement:g});const ne=A.litElementPolyfillSupport;ne==null||ne({LitElement:g}),(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:te},et=(r=Xe,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,r,o),o}}}if(s==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r,!0,o)}}throw Error("Unsupported decorator location: "+s)};function m(r){return(e,t)=>typeof t=="object"?et(r,e,t):((s,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(r){return m({...r,state:!0,attribute:!1})}const tt=P`
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
`,rt=P`
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
`,st=P`
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
`,it=P`
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
`,nt=["year","dayOfYear","isoWeek","quarter"],Y={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},at="de";function ot(r){if(!r||!r.show)return nt;const e=r.show;return Array.isArray(e)?e.filter(s=>lt(s)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(s=>e[s]===!0)}function lt(r){return typeof r=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(r)}function ct(r){return r?{segments:ht(r.segments),labels:dt(r.labels),showTodayMarker:r.show_today_marker??Y.showTodayMarker,showProgressFill:r.show_progress_fill??Y.showProgressFill}:Y}function ht(r){return r&&["none","quarters","months","weeks"].includes(r)?r:Y.segments}function dt(r){return r&&["none","quarters","months"].includes(r)?r:Y.labels}function pt(r){var i;if(!r.entity||typeof r.entity!="string")return null;let e="state";if(r.source&&r.source!=="state"){const n=/^attribute:(.+)$/.exec(r.source);n&&n[1]&&(e={attribute:n[1]})}const s=["point","rangeStart","rangeEnd","range"].includes(r.type)?r.type:"point";return{entity:r.entity,label:((i=r.label)==null?void 0:i.trim())||null,source:e,type:s,showOnBar:r.showOnBar??!0,showInList:r.showInList??!1}}function ut(r){if(!r||!Array.isArray(r))return[];const e=[];for(const t of r){const s=pt(t);s&&e.push(s)}return e}function mt(r){return{title:r.title??null,locale:r.locale??at,facts:ot(r.facts),bar:ct(r.bar),markers:ut(r.markers)}}function ft(r){if(!r||typeof r!="object")return!1;const e=r;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function gt(r){return r%4===0&&r%100!==0||r%400===0}function xe(r){return gt(r)?366:365}function Ae(r){const e=new Date(r.getFullYear(),0,0),t=r.getTime()-e.getTime(),s=1e3*60*60*24;return Math.floor(t/s)}function yt(r){const e=new Date(r.valueOf()),t=(r.getDay()+6)%7;e.setDate(e.getDate()-t+3);const s=new Date(e.getFullYear(),0,4),i=(s.getDay()+6)%7;s.setDate(s.getDate()-i+3);const n=e.getTime()-s.getTime();return 1+Math.round(n/6048e5)}function _t(r){return Math.floor(r.getMonth()/3)+1}function ae(r){const e=r.getFullYear(),t=new Date(e,0,1).getTime(),s=new Date(e+1,0,1).getTime(),n=(r.getTime()-t)/(s-t)*100;return Math.min(100,Math.max(0,n))}function $t(r){const e=r.getFullYear(),t=xe(e),s=Ae(r);return t-s}function vt(r){if(r instanceof Date)return isNaN(r.getTime())?null:r;if(typeof r!="string"||r.trim()==="")return null;const e=r.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const s=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:i=>new Date(parseInt(i[1]),parseInt(i[2])-1,parseInt(i[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[2])-1,parseInt(i[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[1])-1,parseInt(i[2]))}];for(const{regex:i,parse:n}of s){const a=e.match(i);if(a){const o=n(a);if(!isNaN(o.getTime()))return o}}return null}const Me={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ee={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function Se(r,e,t=!1){return(t?Ee[e]??Ee.de:Me[e]??Me.de)[r]??""}function bt(r){return r==="en"?"CW":"KW"}function wt(r,e){if(r==="none")return[];const t=new Date(e,0,1).getTime(),i=new Date(e+1,0,1).getTime()-t,n=a=>(a.getTime()-t)/i*100;if(r==="quarters")return[0,n(new Date(e,3,1)),n(new Date(e,6,1)),n(new Date(e,9,1))];if(r==="months"){const a=[];for(let o=0;o<12;o++)a.push(n(new Date(e,o,1)));return a}if(r==="weeks"){const a=[],l=(new Date(e,0,1).getDay()+6)%7;let p;l<=3?p=new Date(e,0,1-l):p=new Date(e,0,8-l);let u=p;for(;u.getFullYear()<=e;){const c=n(u);c>=0&&c<100&&a.push(c),u=new Date(u.getTime()+6048e5)}return a}return[]}function kt(r,e,t){if(r==="none")return[];const s=new Date(e,0,1).getTime(),n=new Date(e+1,0,1).getTime()-s,a=o=>(o.getTime()-s)/n*100;if(r==="quarters")return[{position:a(new Date(e,1,1)),label:"Q1"},{position:a(new Date(e,4,1)),label:"Q2"},{position:a(new Date(e,7,1)),label:"Q3"},{position:a(new Date(e,10,1)),label:"Q4"}];if(r==="months"){const o=[];for(let l=0;l<12;l++){const p=new Date(e,l,1),u=new Date(e,l+1,1),c=new Date((p.getTime()+u.getTime())/2);o.push({position:a(c),label:Se(l,t,!0)})}return o}return[]}function xt(r,e){return e==="state"?r.state:r.attributes[e.attribute]}function At(r,e){return r.label?r.label:e.attributes.friendly_name??r.entity}function Mt(r,e,t){const s=e[r.entity];if(!s)return null;const i=xt(s,r.source),n=vt(i);if(!n||n.getFullYear()!==t)return null;const a=ae(n);return{label:At(r,s),date:n,position:a,type:r.type,showOnBar:r.showOnBar,showInList:r.showInList}}function Et(r,e,t){const s=[];for(const i of r){const n=Mt(i,e,t);n&&s.push(n)}return s.sort((i,n)=>i.position-n.position),s}function St(r,e){const t=r.getDate(),s=r.getMonth()+1;return e==="en"?`${s}/${t}`:`${t}.${s}.`}var Ct=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,T=(r,e,t,s)=>{for(var i=s>1?void 0:s?Tt(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Ct(e,t,i),i};let v=class extends g{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return h`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill?this.renderProgress():d}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker?this.renderTodayMarker():d}
        </div>
        ${this.renderLabels()}
      </div>
    `}renderProgress(){const r=Math.min(100,Math.max(0,this.progress));return h`
      <div class="timeline-progress" style="width: ${r}%"></div>
    `}renderTodayMarker(){const r=Math.min(100,Math.max(0,this.progress));return h`
      <div class="timeline-today-marker" style="left: ${r}%"></div>
    `}renderSegments(){const r=wt(this.config.segments,this.year);if(r.length===0)return h``;const e=this.config.segments==="weeks";return h`
      <div class="timeline-segments">
        ${r.slice(1).map(t=>h`
            <div
              class="timeline-segment-line ${e?"week":""}"
              style="left: ${t}%"
            ></div>
          `)}
      </div>
    `}renderLabels(){const r=kt(this.config.labels,this.year,this.locale);return r.length===0?d:h`
      <div class="timeline-labels">
        ${r.map(e=>h`
            <span class="timeline-label">${e.label}</span>
          `)}
      </div>
    `}renderMarkers(){return this.markers.length===0?h``:h`
      <div class="timeline-markers">
        ${this.markers.map(r=>this.renderMarker(r))}
      </div>
    `}renderMarker(r){const e=Math.min(100,Math.max(0,r.position));let t="";return r.type==="rangeStart"?t="range-start":r.type==="rangeEnd"&&(t="range-end"),h`
      <div
        class="timeline-marker ${t}"
        style="left: ${e}%"
        title="${r.label}"
      ></div>
    `}};v.styles=rt,T([m({type:Number})],v.prototype,"progress",2),T([m({type:Number})],v.prototype,"year",2),T([m({type:String})],v.prototype,"locale",2),T([m({type:Object})],v.prototype,"config",2),T([m({type:Array})],v.prototype,"markers",2),v=T([z("ytc-timeline-bar")],v);var Ot=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Q=(r,e,t,s)=>{for(var i=s>1?void 0:s?Pt(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Ot(e,t,i),i};const Ce={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let O=class extends g{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de"}render(){return this.facts.length===0?h``:h`
      <div class="facts-container">
        ${this.facts.map(r=>this.renderFact(r))}
      </div>
    `}renderFact(r){const e=this.getLabel(r),t=this.getValue(r);return t===null?d:h`
      <div class="fact-item">
        <span class="fact-label">${e}</span>
        <span class="fact-value">${t}</span>
      </div>
    `}getLabel(r){return(Ce[this.locale]??Ce.de)[r]}getValue(r){const e=this.date.getFullYear();switch(r){case"year":return String(e);case"dayOfYear":{const t=Ae(this.date),s=xe(e);return`${t} / ${s}`}case"isoWeek":{const t=yt(this.date);return`${bt(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return Se(t,this.locale,!1)}case"quarter":return`Q${_t(this.date)}`;case"progress":return`${ae(this.date).toFixed(1)}%`;case"remainingDays":{const t=$t(this.date);return String(t)}default:return null}}};O.styles=st,Q([m({type:Object})],O.prototype,"date",2),Q([m({type:Array})],O.prototype,"facts",2),Q([m({type:String})],O.prototype,"locale",2),O=Q([z("ytc-facts-block")],O);var Dt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,oe=(r,e,t,s)=>{for(var i=s>1?void 0:s?Lt(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Dt(e,t,i),i};const Te={de:"Ereignisse",en:"Events"};let R=class extends g{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const r=this.markers.filter(t=>t.showInList);if(r.length===0)return d;const e=Te[this.locale]??Te.de;return h`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${r.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(r){const e=St(r.date,this.locale);return h`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot"></span>
          <span class="marker-list-item-label">${r.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};R.styles=it,oe([m({type:Array})],R.prototype,"markers",2),oe([m({type:String})],R.prototype,"locale",2),R=oe([z("ytc-marker-list")],R);var It=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,j=(r,e,t,s)=>{for(var i=s>1?void 0:s?Nt(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&It(e,t,i),i};const Ht=["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"],Oe={de:{general:"Allgemein",title:"Titel",titleHelper:"Optionaler Titel für die Karte",locale:"Sprache",german:"Deutsch",english:"Englisch",facts:"Kennzahlen",bar:"Zeitstrahl",segments:"Segment-Linien",barLabels:"Beschriftung",none:"Keine",quarters:"Quartale",months:"Monate",weeks:"Wochen",todayMarker:"Heute-Marker anzeigen",progressFill:"Fortschritt füllen",markers:"Marker",addMarker:"Marker hinzufügen",editMarker:"Marker bearbeiten",back:"Zurück",entity:"Entität",label:"Bezeichnung",labelHelper:"Leer = Entity-Name verwenden",type:"Typ",point:"Punkt",rangeStart:"Bereich Start",rangeEnd:"Bereich Ende",showOnBar:"Auf Balken anzeigen",showInList:"In Liste anzeigen",noMarkers:"Keine Marker konfiguriert"},en:{general:"General",title:"Title",titleHelper:"Optional card title",locale:"Language",german:"German",english:"English",facts:"Facts",bar:"Timeline Bar",segments:"Segment Lines",barLabels:"Labels",none:"None",quarters:"Quarters",months:"Months",weeks:"Weeks",todayMarker:"Show Today Marker",progressFill:"Show Progress Fill",markers:"Markers",addMarker:"Add Marker",editMarker:"Edit Marker",back:"Back",entity:"Entity",label:"Label",labelHelper:"Empty = use entity name",type:"Type",point:"Point",rangeStart:"Range Start",rangeEnd:"Range End",showOnBar:"Show on Bar",showInList:"Show in List",noMarkers:"No markers configured"}},Pe=async()=>{var e,t,s;const r=await((e=window.loadCardHelpers)==null?void 0:e.call(window));r&&await((s=(t=(await r.createCardElement({type:"entities",entities:[]})).constructor).getConfigElement)==null?void 0:s.call(t))};Pe();let M=class extends g{constructor(){super(...arguments),this._editingMarkerIndex=null,this._helpersLoaded=!1,this._onTitleChange=r=>{const e=r.target,t={...this._config};e.value?t.title=e.value:delete t.title,this._updateConfig(t)},this._onLocaleChange=r=>{const e=r.target.value;e&&this._updateConfig({...this._config,locale:e})},this._onSegmentsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,segments:e}})},this._onLabelsChange=r=>{var t;const e=r.target.value;e&&this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,labels:e}})},this._onTodayMarkerChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_today_marker:e.checked}})},this._onProgressFillChange=r=>{var t;const e=r.target;this._updateConfig({...this._config,bar:{...(t=this._config)==null?void 0:t.bar,show_progress_fill:e.checked}})},this._entityFilter=r=>{var i;if(r.entity_id.split(".")[0]==="input_datetime")return!0;const s=(i=r.attributes)==null?void 0:i.device_class;return s==="timestamp"||s==="date"},this._onAddMarkerEntity=r=>{var s;const e=r.detail.value;if(!e)return;const t=[...((s=this._config)==null?void 0:s.markers)??[]];t.push({entity:e,type:"point",showOnBar:!0,showInList:!1}),this._updateConfig({...this._config,markers:t}),this._editingMarkerIndex=t.length-1},this._onBackFromSubEditor=()=>{this._editingMarkerIndex=null}}setConfig(r){this._config=r}async connectedCallback(){super.connectedCallback(),await Pe(),this._helpersLoaded=!0}_getLocale(){var r;return((r=this._config)==null?void 0:r.locale)??"de"}_getLabels(){const r=this._getLocale();return Oe[r]??Oe.de}render(){var i,n,a;if(!this._config||!this._helpersLoaded)return h``;if(this._editingMarkerIndex!==null)return this._renderMarkerSubEditor();const r=this._getLabels(),e=this._getLocale(),t=((i=this._config)==null?void 0:i.bar)??{},s=((n=this._config)==null?void 0:n.markers)??[];return h`
      <div class="card-config">
        <!-- Title -->
        <div class="form-row">
          <ha-textfield
            .label=${r.title}
            .helper=${r.titleHelper}
            .value=${((a=this._config)==null?void 0:a.title)??""}
            @input=${this._onTitleChange}
          ></ha-textfield>
        </div>

        <!-- Locale -->
        <div class="form-row">
          <ha-select
            .label=${r.locale}
            .value=${e}
            @selected=${this._onLocaleChange}
            @closed=${o=>o.stopPropagation()}
          >
            <mwc-list-item value="de">${r.german}</mwc-list-item>
            <mwc-list-item value="en">${r.english}</mwc-list-item>
          </ha-select>
        </div>

        <!-- Bar settings -->
        <div class="form-row">
          <ha-select
            .label=${r.segments}
            .value=${t.segments??"months"}
            @selected=${this._onSegmentsChange}
            @closed=${o=>o.stopPropagation()}
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
            .value=${t.labels??"quarters"}
            @selected=${this._onLabelsChange}
            @closed=${o=>o.stopPropagation()}
          >
            <mwc-list-item value="none">${r.none}</mwc-list-item>
            <mwc-list-item value="quarters">${r.quarters}</mwc-list-item>
            <mwc-list-item value="months">${r.months}</mwc-list-item>
          </ha-select>
        </div>

        <!-- Toggles side by side -->
        <div class="side-by-side">
          <div class="switch-row">
            <span>${r.todayMarker}</span>
            <ha-switch
              .checked=${t.show_today_marker??!0}
              @change=${this._onTodayMarkerChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${r.progressFill}</span>
            <ha-switch
              .checked=${t.show_progress_fill??!0}
              @change=${this._onProgressFillChange}
            ></ha-switch>
          </div>
        </div>

        <!-- Markers list -->
        ${s.length>0?h`
              <div class="marker-list">
                ${s.map((o,l)=>this._renderMarkerRow(o,l))}
              </div>
            `:d}

        <!-- Add marker button -->
        <ha-entity-picker
          .hass=${this.hass}
          .entityFilter=${this._entityFilter}
          @value-changed=${this._onAddMarkerEntity}
          add-button
        ></ha-entity-picker>
      </div>
    `}_renderMarkerRow(r,e){var n;const t=(n=this.hass)==null?void 0:n.states[r.entity],s=(t==null?void 0:t.attributes.friendly_name)??r.entity,i=r.label||s;return h`
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
    `}_renderMarkerSubEditor(){var n,a,o;const r=this._getLabels(),e=this._editingMarkerIndex,t=(a=(n=this._config)==null?void 0:n.markers)==null?void 0:a[e];if(!t)return this._editingMarkerIndex=null,h``;const s=(o=this.hass)==null?void 0:o.states[t.entity],i=(s==null?void 0:s.attributes.friendly_name)??t.entity;return h`
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
            @input=${l=>this._onMarkerFieldChange("label",l)}
          ></ha-textfield>
        </div>

        <div class="form-row">
          <ha-select
            .label=${r.type}
            .value=${t.type??"point"}
            @selected=${l=>this._onMarkerTypeChange(l)}
            @closed=${l=>l.stopPropagation()}
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
            @change=${l=>this._onMarkerSwitchChange("showOnBar",l)}
          ></ha-switch>
        </div>

        <div class="switch-row">
          <span>${r.showInList}</span>
          <ha-switch
            .checked=${t.showInList??!1}
            @change=${l=>this._onMarkerSwitchChange("showInList",l)}
          ></ha-switch>
        </div>
      </div>
    `}_onFactToggle(r,e){var n,a;const t=e.target,s=((a=(n=this._config)==null?void 0:n.facts)==null?void 0:a.show)??["year","dayOfYear","isoWeek","quarter"];let i;t.checked?i=Ht.filter(o=>s.includes(o)||o===r):i=s.filter(o=>o!==r),this._updateConfig({...this._config,facts:{show:i}})}_onEditMarker(r){this._editingMarkerIndex=r}_onDeleteMarker(r){var t;const e=[...((t=this._config)==null?void 0:t.markers)??[]];e.splice(r,1),this._updateConfig({...this._config,markers:e})}_onMarkerFieldChange(r,e){const t=e.target;this._updateMarker({[r]:t.value||void 0})}_onMarkerTypeChange(r){const e=r.target.value;e&&this._updateMarker({type:e})}_onMarkerSwitchChange(r,e){const t=e.target;this._updateMarker({[r]:t.checked})}_updateMarker(r){var s;if(this._editingMarkerIndex===null)return;const e=[...((s=this._config)==null?void 0:s.markers)??[]],t=e[this._editingMarkerIndex];t&&(e[this._editingMarkerIndex]={...t,...r},this._updateConfig({...this._config,markers:e}))}_updateConfig(r){this._config=r;const e=new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}};M.styles=P`
    .card-config {
      display: flex;
      flex-direction: column;
    }

    .form-row {
      margin-bottom: 16px;
    }

    ha-textfield,
    ha-select {
      display: block;
      width: 100%;
    }

    /* Side by side toggles like entities card */
    .side-by-side {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
      margin-bottom: 16px;
    }

    .side-by-side > * {
      flex: 1 1 200px;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }

    /* Marker list */
    .marker-list {
      display: flex;
      flex-direction: column;
    }

    .marker-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color);
    }

    .marker-row:last-child {
      border-bottom: none;
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
  `,j([m({attribute:!1})],M.prototype,"hass",2),j([B()],M.prototype,"_config",2),j([B()],M.prototype,"_editingMarkerIndex",2),j([B()],M.prototype,"_helpersLoaded",2),M=j([z("year-timeline-card-editor")],M);var Ft=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,K=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ut(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Ft(e,t,i),i};return f.YearTimelineCard=class extends g{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!ft(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=mt(e)}getCardSize(){var t,s;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(s=this._config)!=null&&s.facts&&this._config.facts.length>0&&(e+=1),e}static getConfigElement(){return document.createElement("year-timeline-card-editor")}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return h`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=ae(this._now),s=this.resolveMarkers(e),i=this.toBarMarkers(s);return h`
      <ha-card>
        ${this._config.title?h`<div class="card-header">${this._config.title}</div>`:d}
        <div class="card-content">
          ${this._config.facts.length>0?h`
                <ytc-facts-block
                  .date=${this._now}
                  .facts=${this._config.facts}
                  .locale=${this._config.locale}
                ></ytc-facts-block>
              `:d}
          <ytc-timeline-bar
            .progress=${t}
            .year=${e}
            .locale=${this._config.locale}
            .config=${this._config.bar}
            .markers=${i}
          ></ytc-timeline-bar>
          ${s.some(n=>n.showInList)?h`
                <ytc-marker-list
                  .markers=${s}
                  .locale=${this._config.locale}
                ></ytc-marker-list>
              `:d}
        </div>
      </ha-card>
    `}renderError(){return h`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `}resolveMarkers(e){return!this._config||!this.hass?[]:Et(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type}))}},f.YearTimelineCard.styles=tt,K([m({attribute:!1})],f.YearTimelineCard.prototype,"hass",2),K([B()],f.YearTimelineCard.prototype,"_config",2),K([B()],f.YearTimelineCard.prototype,"_error",2),f.YearTimelineCard=K([z("year-timeline-card")],f.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),f}({});
