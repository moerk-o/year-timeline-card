var YearTimelineCard=function(m){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const R=globalThis,Q=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),ne=new WeakMap;let oe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ne.set(t,e))}return e}toString(){return this.cssText}};const Te=r=>new oe(typeof r=="string"?r:r+"",void 0,K),Y=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new oe(t,r,K)},Oe=(r,e)=>{if(Q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},ae=Q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Te(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pe,defineProperty:Ce,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:Ue,getOwnPropertySymbols:Ie,getPrototypeOf:Le}=Object,y=globalThis,le=y.trustedTypes,ze=le?le.emptyScript:"",Z=y.reactiveElementPolyfillSupport,O=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?ze:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},X=(r,e)=>!Pe(r,e),ce={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ce(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Ne(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const l=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,s=[...Ue(t),...Ie(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(ae(i))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:j;this._$Em=i;const h=a.fromAttribute(t,l.type);this[i]=h??((o=this._$Ej)==null?void 0:o.get(i))??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){var o;if(e!==void 0){const l=this.constructor;if(i===!1&&(n=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??X)(n,t)||s.useDefault&&s.reflect&&n===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[O("elementProperties")]=new Map,E[O("finalized")]=new Map,Z==null||Z({ReactiveElement:E}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,he=r=>r,F=P.trustedTypes,de=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,ue="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+$,He=`<${pe}>`,w=document,C=()=>w.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Re=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,me=/>/g,A=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,ye=/"/g,$e=/^(?:script|style|textarea|title)$/i,Ye=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Ye(1),M=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),_e=new WeakMap,x=w.createTreeWalker(w,129);function ve(r,e){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const je=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=U;for(let l=0;l<t;l++){const a=r[l];let h,u,c=-1,g=0;for(;g<a.length&&(o.lastIndex=g,u=o.exec(a),u!==null);)g=o.lastIndex,o===U?u[1]==="!--"?o=fe:u[1]!==void 0?o=me:u[2]!==void 0?($e.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=i??U,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?A:u[3]==='"'?ye:ge):o===ye||o===ge?o=A:o===fe||o===me?o=U:(o=A,i=void 0);const b=o===A&&r[l+1].startsWith("/>")?" ":"";n+=o===U?a+He:c>=0?(s.push(h),a.slice(0,c)+ue+a.slice(c)+$+b):a+$+(c===-2?l:b)}return[ve(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class I{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[h,u]=je(e,t);if(this.el=I.createElement(h,s),x.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ue)){const g=u[o++],b=i.getAttribute(c).split($),V=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:V[2],strings:b,ctor:V[1]==="."?Be:V[1]==="?"?qe:V[1]==="@"?We:B}),i.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:n}),i.removeAttribute(c));if($e.test(i.tagName)){const c=i.textContent.split($),g=c.length-1;if(g>0){i.textContent=F?F.emptyScript:"";for(let b=0;b<g;b++)i.append(c[b],C()),x.nextNode(),a.push({type:2,index:++n});i.append(c[g],C())}}}else if(i.nodeType===8)if(i.data===pe)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)a.push({type:7,index:n}),c+=$.length-1}n++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function k(r,e,t=r,s){var o,l;if(e===M)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=N(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=k(r,i._$AS(r,e.values),i,s)),e}class Fe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);x.currentNode=i;let n=x.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new L(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new Je(n,this,e)),this._$AV.push(h),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=x.nextNode(),o++)}return x.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class L{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),N(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Re(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=I.createElement(ve(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Fe(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new I(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new L(this.O(C()),this.O(C()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=he(e).nextSibling;he(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=k(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==M,o&&(this._$AH=e);else{const l=e;let a,h;for(e=n[0],a=0;a<n.length-1;a++)h=k(this,l[s+a],t,a),h===M&&(h=this._$AH[a]),o||(o=!N(h)||h!==this._$AH[a]),h===d?e=d:e!==d&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Be extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class qe extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class We extends B{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??d)===M)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Je{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const te=P.litHtmlPolyfillSupport;te==null||te(I,L),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.2");const Ve=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new L(e.insertBefore(C(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class _ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return M}}_._$litElement$=!0,_.finalized=!0,(De=S.litElementHydrateSupport)==null||De.call(S,{LitElement:_});const re=S.litElementPolyfillSupport;re==null||re({LitElement:_}),(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:X},Ke=(r=Qe,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(e,t)=>typeof t=="object"?Ke(r,e,t):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(r){return f({...r,state:!0,attribute:!1})}const Ze=Y`
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
`,Xe=Y`
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
`,Ge=Y`
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
`,et=Y`
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
`,tt=["year","dayOfYear","isoWeek","quarter"],z={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},rt="de";function st(r){if(!r||!r.show)return tt;const e=r.show;return Array.isArray(e)?e.filter(s=>it(s)):["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].filter(s=>e[s]===!0)}function it(r){return typeof r=="string"&&["year","dayOfYear","isoWeek","month","quarter","progress","remainingDays"].includes(r)}function nt(r){return r?{segments:ot(r.segments),labels:at(r.labels),showTodayMarker:r.show_today_marker??z.showTodayMarker,showProgressFill:r.show_progress_fill??z.showProgressFill}:z}function ot(r){return r&&["none","quarters","months","weeks"].includes(r)?r:z.segments}function at(r){return r&&["none","quarters","months"].includes(r)?r:z.labels}function lt(r){if(!r.entity||typeof r.entity!="string"||!r.label||typeof r.label!="string")return null;let e="state";if(r.source&&r.source!=="state"){const o=/^attribute:(.+)$/.exec(r.source);o&&o[1]&&(e={attribute:o[1]})}const s=["point","rangeStart","rangeEnd","range"].includes(r.type)?r.type:"point",n=["fixedDate","annualRecurring"].includes(r.behavior)?r.behavior:"fixedDate";return{entity:r.entity,label:r.label,source:e,type:s,behavior:n,showOnBar:r.showOnBar??!0,showInList:r.showInList??!1}}function ct(r){if(!r||!Array.isArray(r))return[];const e=[];for(const t of r){const s=lt(t);s&&e.push(s)}return e}function ht(r){return{title:r.title??null,locale:r.locale??rt,facts:st(r.facts),bar:nt(r.bar),markers:ct(r.markers)}}function dt(r){if(!r||typeof r!="object")return!1;const e=r;return typeof e.type=="string"&&e.type==="custom:year-timeline-card"}function ut(r){return r%4===0&&r%100!==0||r%400===0}function we(r){return ut(r)?366:365}function Ae(r){const e=new Date(r.getFullYear(),0,0),t=r.getTime()-e.getTime(),s=1e3*60*60*24;return Math.floor(t/s)}function pt(r){const e=new Date(r.valueOf()),t=(r.getDay()+6)%7;e.setDate(e.getDate()-t+3);const s=new Date(e.getFullYear(),0,4),i=(s.getDay()+6)%7;s.setDate(s.getDate()-i+3);const n=e.getTime()-s.getTime();return 1+Math.round(n/6048e5)}function ft(r){return Math.floor(r.getMonth()/3)+1}function se(r){const e=r.getFullYear(),t=new Date(e,0,1).getTime(),s=new Date(e+1,0,1).getTime(),n=(r.getTime()-t)/(s-t)*100;return Math.min(100,Math.max(0,n))}function mt(r){const e=r.getFullYear(),t=we(e),s=Ae(r);return t-s}function gt(r){if(r instanceof Date)return isNaN(r.getTime())?null:r;if(typeof r!="string"||r.trim()==="")return null;const e=r.trim(),t=new Date(e);if(!isNaN(t.getTime()))return t;const s=[{regex:/^(\d{4})-(\d{1,2})-(\d{1,2})$/,parse:i=>new Date(parseInt(i[1]),parseInt(i[2])-1,parseInt(i[3]))},{regex:/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[2])-1,parseInt(i[1]))},{regex:/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,parse:i=>new Date(parseInt(i[3]),parseInt(i[1])-1,parseInt(i[2]))}];for(const{regex:i,parse:n}of s){const o=e.match(i);if(o){const l=n(o);if(!isNaN(l.getTime()))return l}}return null}function yt(r,e){return new Date(e,r.getMonth(),r.getDate())}const xe={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},Se={de:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};function Ee(r,e,t=!1){return(t?Se[e]??Se.de:xe[e]??xe.de)[r]??""}function $t(r){return r==="en"?"CW":"KW"}function _t(r,e){if(r==="none")return[];const t=new Date(e,0,1).getTime(),i=new Date(e+1,0,1).getTime()-t,n=o=>(o.getTime()-t)/i*100;if(r==="quarters")return[0,n(new Date(e,3,1)),n(new Date(e,6,1)),n(new Date(e,9,1))];if(r==="months"){const o=[];for(let l=0;l<12;l++)o.push(n(new Date(e,l,1)));return o}if(r==="weeks"){const o=[],a=(new Date(e,0,1).getDay()+6)%7;let h;a<=3?h=new Date(e,0,1-a):h=new Date(e,0,8-a);let u=h;for(;u.getFullYear()<=e;){const c=n(u);c>=0&&c<100&&o.push(c),u=new Date(u.getTime()+6048e5)}return o}return[]}function vt(r,e,t){if(r==="none")return[];const s=new Date(e,0,1).getTime(),n=new Date(e+1,0,1).getTime()-s,o=l=>(l.getTime()-s)/n*100;if(r==="quarters")return[{position:o(new Date(e,1,1)),label:"Q1"},{position:o(new Date(e,4,1)),label:"Q2"},{position:o(new Date(e,7,1)),label:"Q3"},{position:o(new Date(e,10,1)),label:"Q4"}];if(r==="months"){const l=[];for(let a=0;a<12;a++){const h=new Date(e,a,1),u=new Date(e,a+1,1),c=new Date((h.getTime()+u.getTime())/2);l.push({position:o(c),label:Ee(a,t,!0)})}return l}return[]}function bt(r,e){return e==="state"?r.state:r.attributes[e.attribute]}function wt(r,e,t){const s=e[r.entity];if(!s)return null;const i=bt(s,r.source);let n=gt(i);if(!n||(r.behavior==="annualRecurring"&&(n=yt(n,t)),n.getFullYear()!==t))return null;const o=se(n);return{label:r.label,date:n,position:o,type:r.type,showOnBar:r.showOnBar,showInList:r.showInList}}function At(r,e,t){const s=[];for(const i of r){const n=wt(i,e,t);n&&s.push(n)}return s.sort((i,n)=>i.position-n.position),s}function xt(r,e){const t=r.getDate(),s=r.getMonth()+1;return e==="en"?`${s}/${t}`:`${t}.${s}.`}var St=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,D=(r,e,t,s)=>{for(var i=s>1?void 0:s?Et(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&St(e,t,i),i};let v=class extends _{constructor(){super(...arguments),this.progress=0,this.year=new Date().getFullYear(),this.locale="de",this.config={segments:"months",labels:"quarters",showTodayMarker:!0,showProgressFill:!0},this.markers=[]}render(){return p`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill?this.renderProgress():d}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker?this.renderTodayMarker():d}
        </div>
        ${this.renderLabels()}
      </div>
    `}renderProgress(){const r=Math.min(100,Math.max(0,this.progress));return p`
      <div class="timeline-progress" style="width: ${r}%"></div>
    `}renderTodayMarker(){const r=Math.min(100,Math.max(0,this.progress));return p`
      <div class="timeline-today-marker" style="left: ${r}%"></div>
    `}renderSegments(){const r=_t(this.config.segments,this.year);if(r.length===0)return p``;const e=this.config.segments==="weeks";return p`
      <div class="timeline-segments">
        ${r.slice(1).map(t=>p`
            <div
              class="timeline-segment-line ${e?"week":""}"
              style="left: ${t}%"
            ></div>
          `)}
      </div>
    `}renderLabels(){const r=vt(this.config.labels,this.year,this.locale);return r.length===0?d:p`
      <div class="timeline-labels">
        ${r.map(e=>p`
            <span class="timeline-label">${e.label}</span>
          `)}
      </div>
    `}renderMarkers(){return this.markers.length===0?p``:p`
      <div class="timeline-markers">
        ${this.markers.map(r=>this.renderMarker(r))}
      </div>
    `}renderMarker(r){const e=Math.min(100,Math.max(0,r.position));let t="";return r.type==="rangeStart"?t="range-start":r.type==="rangeEnd"&&(t="range-end"),p`
      <div
        class="timeline-marker ${t}"
        style="left: ${e}%"
        title="${r.label}"
      ></div>
    `}};v.styles=Xe,D([f({type:Number})],v.prototype,"progress",2),D([f({type:Number})],v.prototype,"year",2),D([f({type:String})],v.prototype,"locale",2),D([f({type:Object})],v.prototype,"config",2),D([f({type:Array})],v.prototype,"markers",2),v=D([q("ytc-timeline-bar")],v);var Mt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,W=(r,e,t,s)=>{for(var i=s>1?void 0:s?kt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Mt(e,t,i),i};const Me={de:{year:"Jahr",dayOfYear:"Tag",isoWeek:"Kalenderwoche",month:"Monat",quarter:"Quartal",progress:"Fortschritt",remainingDays:"Resttage"},en:{year:"Year",dayOfYear:"Day",isoWeek:"Week",month:"Month",quarter:"Quarter",progress:"Progress",remainingDays:"Days left"}};let T=class extends _{constructor(){super(...arguments),this.date=new Date,this.facts=[],this.locale="de"}render(){return this.facts.length===0?p``:p`
      <div class="facts-container">
        ${this.facts.map(r=>this.renderFact(r))}
      </div>
    `}renderFact(r){const e=this.getLabel(r),t=this.getValue(r);return t===null?d:p`
      <div class="fact-item">
        <span class="fact-label">${e}</span>
        <span class="fact-value">${t}</span>
      </div>
    `}getLabel(r){return(Me[this.locale]??Me.de)[r]}getValue(r){const e=this.date.getFullYear();switch(r){case"year":return String(e);case"dayOfYear":{const t=Ae(this.date),s=we(e);return`${t} / ${s}`}case"isoWeek":{const t=pt(this.date);return`${$t(this.locale)} ${t}`}case"month":{const t=this.date.getMonth();return Ee(t,this.locale,!1)}case"quarter":return`Q${ft(this.date)}`;case"progress":return`${se(this.date).toFixed(1)}%`;case"remainingDays":{const t=mt(this.date);return String(t)}default:return null}}};T.styles=Ge,W([f({type:Object})],T.prototype,"date",2),W([f({type:Array})],T.prototype,"facts",2),W([f({type:String})],T.prototype,"locale",2),T=W([q("ytc-facts-block")],T);var Dt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,ie=(r,e,t,s)=>{for(var i=s>1?void 0:s?Tt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Dt(e,t,i),i};const ke={de:"Ereignisse",en:"Events"};let H=class extends _{constructor(){super(...arguments),this.markers=[],this.locale="de"}render(){const r=this.markers.filter(t=>t.showInList);if(r.length===0)return d;const e=ke[this.locale]??ke.de;return p`
      <div class="marker-list">
        <div class="marker-list-title">${e}</div>
        <div class="marker-list-items">
          ${r.map(t=>this.renderMarkerItem(t))}
        </div>
      </div>
    `}renderMarkerItem(r){const e=xt(r.date,this.locale);return p`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot"></span>
          <span class="marker-list-item-label">${r.label}</span>
        </div>
        <span class="marker-list-item-date">${e}</span>
      </div>
    `}};H.styles=et,ie([f({type:Array})],H.prototype,"markers",2),ie([f({type:String})],H.prototype,"locale",2),H=ie([q("ytc-marker-list")],H);var Ot=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,J=(r,e,t,s)=>{for(var i=s>1?void 0:s?Pt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ot(e,t,i),i};return m.YearTimelineCard=class extends _{constructor(){super(...arguments),this._now=new Date}connectedCallback(){super.connectedCallback(),this._updateInterval=setInterval(()=>{this._now=new Date,this.requestUpdate()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0)}setConfig(e){if(!dt(e)){this._error='Invalid configuration: type must be "custom:year-timeline-card"';return}this._error=void 0,this._config=ht(e)}getCardSize(){var t,s;let e=2;return(t=this._config)!=null&&t.title&&(e+=1),(s=this._config)!=null&&s.facts&&this._config.facts.length>0&&(e+=1),e}updated(e){super.updated(e),e.has("hass")&&this.requestUpdate()}render(){if(this._error)return this.renderError();if(!this._config)return p`<ha-card><div class="card-content">No configuration</div></ha-card>`;const e=this._now.getFullYear(),t=se(this._now),s=this.resolveMarkers(e),i=this.toBarMarkers(s);return p`
      <ha-card>
        ${this._config.title?p`<div class="card-header">${this._config.title}</div>`:d}
        <div class="card-content">
          ${this._config.facts.length>0?p`
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
          ${s.some(n=>n.showInList)?p`
                <ytc-marker-list
                  .markers=${s}
                  .locale=${this._config.locale}
                ></ytc-marker-list>
              `:d}
        </div>
      </ha-card>
    `}renderError(){return p`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `}resolveMarkers(e){return!this._config||!this.hass?[]:At(this._config.markers,this.hass.states,e)}toBarMarkers(e){return e.filter(t=>t.showOnBar).map(t=>({position:t.position,label:t.label,type:t.type}))}},m.YearTimelineCard.styles=Ze,J([f({attribute:!1})],m.YearTimelineCard.prototype,"hass",2),J([be()],m.YearTimelineCard.prototype,"_config",2),J([be()],m.YearTimelineCard.prototype,"_error",2),m.YearTimelineCard=J([q("year-timeline-card")],m.YearTimelineCard),window.customCards=window.customCards||[],window.customCards.push({type:"year-timeline-card",name:"Year Timeline Card",description:"A card displaying the year progress as a horizontal timeline with facts and markers"}),console.info("%c YEAR-TIMELINE-CARD %c v1.0.0 ","color: white; background: #03a9f4; font-weight: bold;","color: #03a9f4; background: white; font-weight: bold;"),Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m}({});
