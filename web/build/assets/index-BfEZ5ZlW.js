(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(i){if(i.ep)return;i.ep=!0;const u=n(i);fetch(i.href,u)}})();const Et=!1;var It=Array.isArray,ve=Array.prototype.indexOf,_e=Array.from,kt=Object.defineProperty,W=Object.getOwnPropertyDescriptor,de=Object.prototype,pe=Array.prototype,he=Object.getPrototypeOf,Tt=Object.isExtensible;const V=()=>{},D=2,Rt=4,wt=8,gt=16,R=32,K=64,nt=128,T=256,rt=512,x=1024,C=2048,$=4096,ut=8192,ot=16384,we=32768,ge=65536,be=1<<19,Lt=1<<20,_t=1<<21,ct=Symbol("$state");function Mt(t){return t===this.v}function $t(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function me(t){return!$t(t,this.v)}function ye(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ee(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Te(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ne(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Oe(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xe(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Se(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Ae=!1;const De=2,y=Symbol();function qt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let g=null;function Nt(t){g=t}function jt(t,e=!1,n){var r=g={p:g,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};Qt(()=>{r.d=!0})}function Ut(t){const e=g;if(e!==null){const a=e.e;if(a!==null){var n=p,r=d;e.e=null;try{for(var i=0;i<a.length;i++){var u=a[i];B(u.effect),k(u.reaction),te(u.fn)}}finally{B(n),k(r)}}g=e.p,e.m=!0}return{}}function Vt(){return!0}function U(t){if(typeof t!="object"||t===null||ct in t)return t;const e=he(t);if(e!==de&&e!==pe)return t;var n=new Map,r=It(t),i=S(0),u=d,a=o=>{var l=d;k(u);var f=o();return k(l),f};return r&&n.set("length",S(t.length)),new Proxy(t,{defineProperty(o,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Oe();var v=n.get(l);return v===void 0?(v=a(()=>S(f.value)),n.set(l,v)):w(v,a(()=>U(f.value))),!0},deleteProperty(o,l){var f=n.get(l);if(f===void 0)l in o&&n.set(l,a(()=>S(y)));else{if(r&&typeof l=="string"){var v=n.get("length"),s=Number(l);Number.isInteger(s)&&s<v.v&&w(v,s)}w(f,y),Ot(i)}return!0},get(o,l,f){var _;if(l===ct)return t;var v=n.get(l),s=l in o;if(v===void 0&&(!s||(_=W(o,l))!=null&&_.writable)&&(v=a(()=>S(U(s?o[l]:y))),n.set(l,v)),v!==void 0){var c=A(v);return c===y?void 0:c}return Reflect.get(o,l,f)},getOwnPropertyDescriptor(o,l){var f=Reflect.getOwnPropertyDescriptor(o,l);if(f&&"value"in f){var v=n.get(l);v&&(f.value=A(v))}else if(f===void 0){var s=n.get(l),c=s==null?void 0:s.v;if(s!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(o,l){var c;if(l===ct)return!0;var f=n.get(l),v=f!==void 0&&f.v!==y||Reflect.has(o,l);if(f!==void 0||p!==null&&(!v||(c=W(o,l))!=null&&c.writable)){f===void 0&&(f=a(()=>S(v?U(o[l]):y)),n.set(l,f));var s=A(f);if(s===y)return!1}return v},set(o,l,f,v){var H;var s=n.get(l),c=l in o;if(r&&l==="length")for(var _=f;_<s.v;_+=1){var m=n.get(_+"");m!==void 0?w(m,y):_ in o&&(m=a(()=>S(y)),n.set(_+"",m))}s===void 0?(!c||(H=W(o,l))!=null&&H.writable)&&(s=a(()=>S(void 0)),w(s,a(()=>U(f))),n.set(l,s)):(c=s.v!==y,w(s,a(()=>U(f))));var N=Reflect.getOwnPropertyDescriptor(o,l);if(N!=null&&N.set&&N.set.call(v,f),!c){if(r&&typeof l=="string"){var Z=n.get("length"),Y=Number(l);Number.isInteger(Y)&&Y>=Z.v&&w(Z,Y+1)}Ot(i)}return!0},ownKeys(o){A(i);var l=Reflect.ownKeys(o).filter(s=>{var c=n.get(s);return c===void 0||c.v!==y});for(var[f,v]of n)v.v!==y&&!(f in o)&&l.push(f);return l},setPrototypeOf(){xe()}})}function Ot(t,e=1){w(t,t.v+e)}function Pe(t){var e=D|C,n=d!==null&&(d.f&D)!==0?d:null;return p===null||n!==null&&(n.f&T)!==0?e|=T:p.f|=Lt,{ctx:g,deps:null,effects:null,equals:Mt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??p}}function Bt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)M(e[n])}}function Fe(t){for(var e=t.parent;e!==null;){if((e.f&D)===0)return e;e=e.parent}return null}function Kt(t){var e,n=p;B(Fe(t));try{Bt(t),e=oe(t)}finally{B(n)}return e}function Yt(t){var e=Kt(t),n=(I||(t.f&T)!==0)&&t.deps!==null?$:x;F(t,n),t.equals(e)||(t.v=e,t.wv=le())}const z=new Map;function Ht(t,e){var n={f:0,v:t,reactions:null,equals:Mt,rv:0,wv:0};return n}function S(t,e){const n=Ht(t);return ze(n),n}function Ce(t,e=!1){const n=Ht(t);return e||(n.equals=me),n}function w(t,e,n=!1){d!==null&&!P&&Vt()&&(d.f&(D|gt))!==0&&!(b!=null&&b.includes(t))&&Se();let r=n?U(e):e;return Ie(t,r)}function Ie(t,e){if(!t.equals(e)){var n=t.v;J?z.set(t,e):z.set(t,n),t.v=e,t.wv=le(),(t.f&D)!==0&&((t.f&C)!==0&&Kt(t),F(t,(t.f&T)===0?x:$)),Wt(t,C),p!==null&&(p.f&x)!==0&&(p.f&(R|K))===0&&(O===null?Ge([t]):O.push(t))}return e}function ke(t,e=1){var n=A(t),r=e===1?n++:n--;return w(t,n),r}function Wt(t,e){var n=t.reactions;if(n!==null)for(var r=n.length,i=0;i<r;i++){var u=n[i],a=u.f;(a&C)===0&&(F(u,e),(a&(x|T))!==0&&((a&D)!==0?Wt(u,$):mt(u)))}}var xt,zt,Gt,Jt;function Re(){if(xt===void 0){xt=window,zt=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Gt=W(e,"firstChild").get,Jt=W(e,"nextSibling").get,Tt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Tt(n)&&(n.__t=void 0)}}function Le(t=""){return document.createTextNode(t)}function Zt(t){return Gt.call(t)}function Me(t){return Jt.call(t)}function St(t,e){return Zt(t)}function $e(t){p===null&&d===null&&Te(),d!==null&&(d.f&T)!==0&&p===null&&Ee(),J&&ye()}function qe(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function G(t,e,n,r=!0){var i=p,u={ctx:g,deps:null,nodes_start:null,nodes_end:null,f:t|C,first:null,fn:e,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(n)try{bt(u),u.f|=we}catch(l){throw M(u),l}else e!==null&&mt(u);var a=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&(Lt|nt))===0;if(!a&&r&&(i!==null&&qe(u,i),d!==null&&(d.f&D)!==0)){var o=d;(o.effects??(o.effects=[])).push(u)}return u}function Qt(t){const e=G(wt,null,!1);return F(e,x),e.teardown=t,e}function Xt(t){$e();var e=p!==null&&(p.f&R)!==0&&g!==null&&!g.m;if(e){var n=g;(n.e??(n.e=[])).push({fn:t,effect:p,reaction:d})}else{var r=te(t);return r}}function je(t){const e=G(K,t,!0);return(n={})=>new Promise(r=>{n.outro?Ye(e,()=>{M(e),r(void 0)}):(M(e),r(void 0))})}function te(t){return G(Rt,t,!1)}function Ue(t,e=[],n=Pe){const r=e.map(n);return Ve(()=>t(...r.map(A)))}function Ve(t,e=0){return G(wt|gt|e,t,!0)}function Be(t,e=!0){return G(wt|R,t,!0,e)}function ee(t){var e=t.teardown;if(e!==null){const n=J,r=d;At(!0),k(null);try{e.call(null)}finally{At(n),k(r)}}}function ne(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&K)!==0?n.parent=null:M(n,e),n=r}}function Ke(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&R)===0&&M(e),e=n}}function M(t,e=!0){var n=!1;if((e||(t.f&be)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,i=t.nodes_end;r!==null;){var u=r===i?null:Me(r);r.remove(),r=u}n=!0}ne(t,e&&!n),ft(t,0),F(t,ot);var a=t.transitions;if(a!==null)for(const l of a)l.stop();ee(t);var o=t.parent;o!==null&&o.first!==null&&re(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function re(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Ye(t,e){var n=[];ue(t,n,!0),He(n,()=>{M(t),e&&e()})}function He(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function ue(t,e,n){if((t.f&ut)===0){if(t.f^=ut,t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&e.push(a);for(var r=t.first;r!==null;){var i=r.next,u=(r.f&ge)!==0||(r.f&R)!==0;ue(r,e,u?n:!1),r=i}}}let tt=!1,dt=!1,it=null,L=!1,J=!1;function At(t){J=t}let et=[];let d=null,P=!1;function k(t){d=t}let p=null;function B(t){p=t}let b=null;function We(t){b=t}function ze(t){d!==null&&d.f&_t&&(b===null?We([t]):b.push(t))}let h=null,E=0,O=null;function Ge(t){O=t}let ie=1,lt=0,I=!1;function le(){return++ie}function st(t){var s;var e=t.f;if((e&C)!==0)return!0;if((e&$)!==0){var n=t.deps,r=(e&T)!==0;if(n!==null){var i,u,a=(e&rt)!==0,o=r&&p!==null&&!I,l=n.length;if(a||o){var f=t,v=f.parent;for(i=0;i<l;i++)u=n[i],(a||!((s=u==null?void 0:u.reactions)!=null&&s.includes(f)))&&(u.reactions??(u.reactions=[])).push(f);a&&(f.f^=rt),o&&v!==null&&(v.f&T)===0&&(f.f^=T)}for(i=0;i<l;i++)if(u=n[i],st(u)&&Yt(u),u.wv>t.wv)return!0}(!r||p!==null&&!I)&&F(t,x)}return!1}function Je(t,e){for(var n=e;n!==null;){if((n.f&nt)!==0)try{n.fn(t);return}catch{n.f^=nt}n=n.parent}throw tt=!1,t}function Ze(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&nt)===0)}function at(t,e,n,r){if(tt){if(n===null&&(tt=!1),Ze(e))throw t;return}n!==null&&(tt=!0);{Je(t,e);return}}function fe(t,e,n=!0){var r=t.reactions;if(r!==null)for(var i=0;i<r.length;i++){var u=r[i];b!=null&&b.includes(t)||((u.f&D)!==0?fe(u,e,!1):e===u&&(n?F(u,C):(u.f&x)!==0&&F(u,$),mt(u)))}}function oe(t){var _;var e=h,n=E,r=O,i=d,u=I,a=b,o=g,l=P,f=t.f;h=null,E=0,O=null,I=(f&T)!==0&&(P||!L||d===null),d=(f&(R|K))===0?t:null,b=null,Nt(t.ctx),P=!1,lt++,t.f|=_t;try{var v=(0,t.fn)(),s=t.deps;if(h!==null){var c;if(ft(t,E),s!==null&&E>0)for(s.length=E+h.length,c=0;c<h.length;c++)s[E+c]=h[c];else t.deps=s=h;if(!I)for(c=E;c<s.length;c++)((_=s[c]).reactions??(_.reactions=[])).push(t)}else s!==null&&E<s.length&&(ft(t,E),s.length=E);if(Vt()&&O!==null&&!P&&s!==null&&(t.f&(D|$|C))===0)for(c=0;c<O.length;c++)fe(O[c],t);return i!==t&&(lt++,O!==null&&(r===null?r=O:r.push(...O))),v}finally{h=e,E=n,O=r,d=i,I=u,b=a,Nt(o),P=l,t.f^=_t}}function Qe(t,e){let n=e.reactions;if(n!==null){var r=ve.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(e.f&D)!==0&&(h===null||!h.includes(e))&&(F(e,$),(e.f&(T|rt))===0&&(e.f^=rt),Bt(e),ft(e,0))}function ft(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Qe(t,n[r])}function bt(t){var e=t.f;if((e&ot)===0){F(t,x);var n=p,r=g,i=L;p=t,L=!0;try{(e&gt)!==0?Ke(t):ne(t),ee(t);var u=oe(t);t.teardown=typeof u=="function"?u:null,t.wv=ie;var a=t.deps,o;Et&&Ae&&t.f&C}catch(l){at(l,t,n,r||t.ctx)}finally{L=i,p=n}}}function Xe(){try{Ne()}catch(t){if(it!==null)at(t,it,null);else throw t}}function tn(){var t=L;try{var e=0;for(L=!0;et.length>0;){e++>1e3&&Xe();var n=et,r=n.length;et=[];for(var i=0;i<r;i++){var u=nn(n[i]);en(u)}z.clear()}}finally{dt=!1,L=t,it=null}}function en(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ot|ut))===0)try{st(r)&&(bt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?re(r):r.fn=null))}catch(i){at(i,r,null,r.ctx)}}}function mt(t){dt||(dt=!0,queueMicrotask(tn));for(var e=it=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(K|R))!==0){if((n&x)===0)return;e.f^=x}}et.push(e)}function nn(t){for(var e=[],n=t;n!==null;){var r=n.f,i=(r&(R|K))!==0,u=i&&(r&x)!==0;if(!u&&(r&ut)===0){if((r&Rt)!==0)e.push(n);else if(i)n.f^=x;else{var a=d;try{d=n,st(n)&&bt(n)}catch(f){at(f,n,null,n.ctx)}finally{d=a}}var o=n.first;if(o!==null){n=o;continue}}var l=n.parent;for(n=n.next;n===null&&l!==null;)n=l.next,l=l.parent}return e}function A(t){var e=t.f,n=(e&D)!==0;if(d!==null&&!P){if(!(b!=null&&b.includes(t))){var r=d.deps;t.rv<lt&&(t.rv=lt,h===null&&r!==null&&r[E]===t?E++:h===null?h=[t]:(!I||!h.includes(t))&&h.push(t))}}else if(n&&t.deps===null&&t.effects===null){var i=t,u=i.parent;u!==null&&(u.f&T)===0&&(i.f^=T)}return n&&(i=t,st(i)&&Yt(i)),J&&z.has(t)?z.get(t):t.v}function yt(t){var e=P;try{return P=!0,t()}finally{P=e}}const rn=-7169;function F(t,e){t.f=t.f&rn|e}const un=["touchstart","touchmove"];function ln(t){return un.includes(t)}const se=new Set,pt=new Set;function fn(t){for(var e=0;e<t.length;e++)se.add(t[e]);for(var n of pt)n(t)}function X(t){var H;var e=this,n=e.ownerDocument,r=t.type,i=((H=t.composedPath)==null?void 0:H.call(t))||[],u=i[0]||t.target,a=0,o=t.__root;if(o){var l=i.indexOf(o);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var f=i.indexOf(e);if(f===-1)return;l<=f&&(a=l)}if(u=i[a]||t.target,u!==e){kt(t,"currentTarget",{configurable:!0,get(){return u||n}});var v=d,s=p;k(null),B(null);try{for(var c,_=[];u!==null;){var m=u.assignedSlot||u.parentNode||u.host||null;try{var N=u["__"+r];if(N!=null&&(!u.disabled||t.target===u))if(It(N)){var[Z,...Y]=N;Z.apply(u,[t,...Y])}else N.call(u,t)}catch(Q){c?_.push(Q):c=Q}if(t.cancelBubble||m===e||m===null)break;u=m}if(c){for(let Q of _)queueMicrotask(()=>{throw Q});throw c}}finally{t.__root=e,delete t.currentTarget,k(v),B(s)}}}function on(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function sn(t,e){var n=p;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function an(t,e){var n=(e&De)!==0,r,i=!t.startsWith("<!>");return()=>{r===void 0&&(r=on(i?t:"<!>"+t),r=Zt(r));var u=n||zt?document.importNode(r,!0):r.cloneNode(!0);return sn(u,u),u}}function cn(t,e){t!==null&&t.before(e)}function vn(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n+"")}function _n(t,e){return dn(t,e)}const q=new Map;function dn(t,{target:e,anchor:n,props:r={},events:i,context:u,intro:a=!0}){Re();var o=new Set,l=s=>{for(var c=0;c<s.length;c++){var _=s[c];if(!o.has(_)){o.add(_);var m=ln(_);e.addEventListener(_,X,{passive:m});var N=q.get(_);N===void 0?(document.addEventListener(_,X,{passive:m}),q.set(_,1)):q.set(_,N+1)}}};l(_e(se)),pt.add(l);var f=void 0,v=je(()=>{var s=n??e.appendChild(Le());return Be(()=>{if(u){jt({});var c=g;c.c=u}i&&(r.$$events=i),f=t(s,r)||{},u&&Ut()}),()=>{var m;for(var c of o){e.removeEventListener(c,X);var _=q.get(c);--_===0?(document.removeEventListener(c,X),q.delete(c)):q.set(c,_)}pt.delete(l),s!==n&&((m=s.parentNode)==null||m.removeChild(s))}});return pn.set(f,v),f}let pn=new WeakMap;function Dt(t,e=!1){var n=e?" !important;":";",r="";for(var i in t){var u=t[i];u!=null&&u!==""&&(r+=" "+i+": "+u+n)}return r}function hn(t,e){if(e){var n="",r,i;return Array.isArray(e)?(r=e[0],i=e[1]):r=e,r&&(n+=Dt(r)),i&&(n+=Dt(i,!0)),n=n.trim(),n===""?null:n}return String(t)}function vt(t,e={},n,r){for(var i in n){var u=n[i];e[i]!==u&&(n[i]==null?t.style.removeProperty(i):t.style.setProperty(i,u,r))}}function wn(t,e,n,r){var i=t.__style;if(i!==e){var u=hn(e,r);u==null?t.removeAttribute("style"):t.style.cssText=u,t.__style=e}else r&&(Array.isArray(r)?(vt(t,n==null?void 0:n[0],r[0]),vt(t,n==null?void 0:n[1],r[1],"important")):vt(t,n,r));return r}function ae(t,e,n){if(t==null)return e(void 0),V;const r=yt(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const j=[];function gn(t,e=V){let n=null;const r=new Set;function i(o){if($t(t,o)&&(t=o,n)){const l=!j.length;for(const f of r)f[1](),j.push(f,t);if(l){for(let f=0;f<j.length;f+=2)j[f][0](j[f+1]);j.length=0}}}function u(o){i(o(t))}function a(o,l=V){const f=[o,l];return r.add(f),r.size===1&&(n=e(i,u)||V),o(t),()=>{r.delete(f),r.size===0&&n&&(n(),n=null)}}return{set:i,update:u,subscribe:a}}function bn(t){let e;return ae(t,n=>e=n)(),e}let ht=Symbol();function mn(t,e,n){const r=n[e]??(n[e]={store:null,source:Ce(void 0),unsubscribe:V});if(r.store!==t&&!(ht in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=V;else{var i=!0;r.unsubscribe=ae(t,u=>{i?r.source.v=u:w(r.source,u)}),i=!1}return t&&ht in n?bn(t):A(r.source)}function yn(){const t={};function e(){Qt(()=>{for(var n in t)t[n].unsubscribe();kt(t,ht,{enumerable:!1,value:!0})})}return[t,e]}function En(t){g===null&&qt(),Xt(()=>{const e=yt(t);if(typeof e=="function")return e})}function Tn(t){g===null&&qt(),En(()=>()=>yt(t))}const Nn="5";var Ct;typeof window<"u"&&((Ct=window.__svelte??(window.__svelte={})).v??(Ct.v=new Set)).add(Nn);async function On(t,e={}){var r;const n=(r=window.GetParentResourceName)==null?void 0:r.call(window);if(!n)return console.log(`Mocking NUI event: ${t}`,e),{status:"ok",data:e};try{return{status:"ok",data:await(await fetch(`https://${n}/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}}catch(i){return console.error("NUI fetch failed:",i),{status:"error",data:null}}}const ce=gn(!1);function Pt(t){ce.set(t)}function Ft(t,e){const n=r=>{const{type:i,data:u}=r.data;i===t&&e(u)};return window.addEventListener("message",n),()=>window.removeEventListener("message",n)}function xn(t,e){ke(e),On("print",{text:A(e)})}var Sn=an('<main><button class="counter-button"> </button></main>');function An(t,e){jt(e,!0);const[n,r]=yn(),i=()=>mn(ce,"$visibility",n);let u=S(0),a=S(!1),o=S(0);Ft("setVisible",_=>{Pt(_.visible)}),Ft("updateCount",_=>{w(u,_.count,!0)}),Xt(()=>{i()?(w(a,!0),setTimeout(()=>w(o,1),0)):(w(o,0),setTimeout(()=>w(a,!1),200))});const l=_=>{_.key==="Escape"&&i()&&Pt(!1)};window.addEventListener("keydown",l),Tn(()=>{window.removeEventListener("keydown",l)});var f=Sn();let v;var s=St(f);s.__click=[xn,u];var c=St(s);Ue(()=>{v=wn(f,"",v,{display:A(a)?"block":"none",opacity:A(o),transition:"opacity 200ms ease-in-out"}),vn(c,`Count: ${A(u)??""}`)}),cn(t,f),Ut(),r()}fn(["click"]);_n(An,{target:document.getElementById("app")});
