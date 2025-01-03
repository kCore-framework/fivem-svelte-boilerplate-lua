(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const l of u)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(u){const l={};return u.integrity&&(l.integrity=u.integrity),u.referrerPolicy&&(l.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?l.credentials="include":u.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(u){if(u.ep)return;u.ep=!0;const l=e(u);fetch(u.href,l)}})();const Wt=!1;var zt=Array.isArray,Gt=Array.from,Jt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor;const L=()=>{},T=2,mt=4,Q=8,it=16,N=32,X=64,ut=128,M=256,W=512,y=1024,F=2048,U=4096,z=8192,V=16384,Qt=32768,Xt=65536,Zt=1<<19,tn=1<<20;function nn(t){return t===this.v}function Et(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function en(t){return!Et(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function on(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let an=!1;const cn=2;function bt(t,n){var e={f:0,v:t,reactions:null,equals:nn,version:0};return e}function et(t){return vn(bt(t))}function _n(t,n=!1){const e=bt(t);return n||(e.equals=en),e}function vn(t){return v!==null&&v.f&T&&(E===null?Sn([t]):E.push(t)),t}function A(t,n){return v!==null&&Dn()&&v.f&(T|it)&&(E===null||!E.includes(t))&&fn(),dn(t,n)}function dn(t,n){return t.equals(n)||(t.v=n,t.version=Mt(),gt(t,F),c!==null&&c.f&y&&!(c.f&N)&&(p!==null&&p.includes(t)?(b(c,F),nt(c)):x===null?Cn([t]):x.push(t))),n}function gt(t,n){var e=t.reactions;if(e!==null)for(var r=e.length,u=0;u<r;u++){var l=e[u],o=l.f;o&F||(b(l,n),o&(y|M)&&(o&T?gt(l,U):nt(l)))}}var pt,Tt,Nt;function pn(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;Tt=dt(n,"firstChild").get,Nt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function hn(t=""){return document.createTextNode(t)}function xt(t){return Tt.call(t)}function wn(t){return Nt.call(t)}function ht(t,n){return xt(t)}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var e=0;e<n.length;e+=1){var r=n[e];r.f&T?st(r):S(r)}}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&T))return n;n=n.parent}return null}function Ot(t){var n,e=c;I(yn(t));try{kt(t),n=Vt(t)}finally{I(e)}return n}function Ft(t){var n=Ot(t),e=(O||t.f&M)&&t.deps!==null?U:y;b(t,e),t.equals(n)||(t.v=n,t.version=Mt())}function st(t){kt(t),B(t,0),b(t,V),t.v=t.children=t.deps=t.ctx=t.reactions=null}function mn(t){c===null&&v===null&&ln(),v!==null&&v.f&M&&un(),ft&&rn()}function En(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function j(t,n,e,r=!0){var u=(t&X)!==0,l=c,o={ctx:h,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|F,first:null,fn:n,last:null,next:null,parent:u?null:l,prev:null,teardown:null,transitions:null,version:0};if(e){var f=P;try{wt(!0),at(o),o.f|=Qt}catch(_){throw S(o),_}finally{wt(f)}}else n!==null&&nt(o);var s=e&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&tn)===0;if(!s&&!u&&r&&(l!==null&&En(o,l),v!==null&&v.f&T)){var i=v;(i.children??(i.children=[])).push(o)}return o}function bn(t){const n=j(Q,null,!1);return b(n,y),n.teardown=t,n}function St(t){mn();var n=c!==null&&(c.f&N)!==0&&h!==null&&!h.m;if(n){var e=h;(e.e??(e.e=[])).push({fn:t,effect:c,reaction:v})}else{var r=Ct(t);return r}}function gn(t){const n=j(X,t,!0);return(e={})=>new Promise(r=>{e.outro?On(n,()=>{S(n),r(void 0)}):(S(n),r(void 0))})}function Ct(t){return j(mt,t,!1)}function Tn(t){return Nn(t)}function Nn(t,n=0){return j(Q|it|n,t,!0)}function xn(t,n=!0){return j(Q|N,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const e=ft,r=v;yt(!0),q(null);try{n.call(null)}finally{yt(e),q(r)}}}function At(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)st(n[e])}}function Lt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;S(e,n),e=r}}function kn(t){for(var n=t.first;n!==null;){var e=n.next;n.f&N||S(n),n=e}}function S(t,n=!0){var e=!1;if((n||t.f&Zt)&&t.nodes_start!==null){for(var r=t.nodes_start,u=t.nodes_end;r!==null;){var l=r===u?null:wn(r);r.remove(),r=l}e=!0}Lt(t,n&&!e),At(t),B(t,0),b(t,V);var o=t.transitions;if(o!==null)for(const s of o)s.stop();Dt(t);var f=t.parent;f!==null&&f.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function On(t,n){var e=[];Rt(t,e,!0),Fn(e,()=>{S(t),n()})}function Fn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var u of t)u.out(r)}else n()}function Rt(t,n,e){if(!(t.f&z)){if(t.f^=z,t.transitions!==null)for(const o of t.transitions)(o.is_global||e)&&n.push(o);for(var r=t.first;r!==null;){var u=r.next,l=(r.f&Xt)!==0||(r.f&N)!==0;Rt(r,n,l?e:!1),r=u}}}function qt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=!1,G=!1,J=null,P=!1,ft=!1;function wt(t){P=t}function yt(t){ft=t}let lt=[],$=0;let v=null;function q(t){v=t}let c=null;function I(t){c=t}let E=null;function Sn(t){E=t}let p=null,m=0,x=null;function Cn(t){x=t}let It=1,O=!1,h=null;function Mt(){return++It}function Dn(){return!an}function Z(t){var i;var n=t.f;if(n&F)return!0;if(n&U){var e=t.deps,r=(n&M)!==0;if(e!==null){var u,l,o=(n&W)!==0,f=r&&c!==null&&!O,s=e.length;if(o||f){for(u=0;u<s;u++)l=e[u],(i=l==null?void 0:l.reactions)!=null&&i.includes(t)||(l.reactions??(l.reactions=[])).push(t);o&&(t.f^=W)}for(u=0;u<s;u++)if(l=e[u],Z(l)&&Ft(l),l.version>t.version)return!0}(!r||c!==null&&!O)&&b(t,y)}return!1}function An(t,n){for(var e=n;e!==null;){if(e.f&ut)try{e.fn(t);return}catch{e.f^=ut}e=e.parent}throw K=!1,t}function Ln(t){return(t.f&V)===0&&(t.parent===null||(t.parent.f&ut)===0)}function tt(t,n,e,r){if(K){if(e===null&&(K=!1),Ln(n))throw t;return}e!==null&&(K=!0);{An(t,n);return}}function Vt(t){var d;var n=p,e=m,r=x,u=v,l=O,o=E,f=h,s=t.f;p=null,m=0,x=null,v=s&(N|X)?null:t,O=!P&&(s&M)!==0,E=null,h=t.ctx;try{var i=(0,t.fn)(),_=t.deps;if(p!==null){var a;if(B(t,m),_!==null&&m>0)for(_.length=m+p.length,a=0;a<p.length;a++)_[m+a]=p[a];else t.deps=_=p;if(!O)for(a=m;a<_.length;a++)((d=_[a]).reactions??(d.reactions=[])).push(t)}else _!==null&&m<_.length&&(B(t,m),_.length=m);return i}finally{p=n,m=e,x=r,v=u,O=l,E=o,h=f}}function Pn(t,n){let e=n.reactions;if(e!==null){var r=e.indexOf(t);if(r!==-1){var u=e.length-1;u===0?e=n.reactions=null:(e[r]=e[u],e.pop())}}e===null&&n.f&T&&(p===null||!p.includes(n))&&(b(n,U),n.f&(M|W)||(n.f^=W),B(n,0))}function B(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Pn(t,e[r])}function at(t){var n=t.f;if(!(n&V)){b(t,y);var e=c,r=h;c=t;try{n&it?kn(t):Lt(t),At(t),Dt(t);var u=Vt(t);t.teardown=typeof u=="function"?u:null,t.version=It}catch(l){tt(l,t,e,r||t.ctx)}finally{c=e}}}function Rn(){if($>1e3){$=0;try{on()}catch(t){if(J!==null)tt(t,J,null);else throw t}}$++}function qn(t){var n=t.length;if(n!==0){Rn();var e=P;P=!0;try{for(var r=0;r<n;r++){var u=t[r];u.f&y||(u.f^=y);var l=[];$t(u,l),In(l)}}finally{P=e}}}function In(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if(!(r.f&(V|z)))try{Z(r)&&(at(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Pt(r):r.fn=null))}catch(u){tt(u,r,null,r.ctx)}}}function Mn(){if(G=!1,$>1001)return;const t=lt;lt=[],qn(t),G||($=0,J=null)}function nt(t){G||(G=!0,queueMicrotask(Mn)),J=t;for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&(X|N)){if(!(e&y))return;n.f^=y}}lt.push(n)}function $t(t,n){var e=t.first,r=[];t:for(;e!==null;){var u=e.f,l=(u&N)!==0,o=l&&(u&y)!==0,f=e.next;if(!o&&!(u&z))if(u&Q){if(l)e.f^=y;else try{Z(e)&&at(e)}catch(a){tt(a,e,null,e.ctx)}var s=e.first;if(s!==null){e=s;continue}}else u&mt&&r.push(e);if(f===null){let a=e.parent;for(;a!==null;){if(t===a)break t;var i=a.next;if(i!==null){e=i;continue t}a=a.parent}}e=f}for(var _=0;_<r.length;_++)s=r[_],n.push(s),$t(s,n)}function R(t){var _;var n=t.f,e=(n&T)!==0;if(e&&n&V){var r=Ot(t);return st(t),r}if(v!==null){E!==null&&E.includes(t)&&sn();var u=v.deps;p===null&&u!==null&&u[m]===t?m++:p===null?p=[t]:p.push(t),x!==null&&c!==null&&c.f&y&&!(c.f&N)&&x.includes(t)&&(b(c,F),nt(c))}else if(e&&t.deps===null)for(var l=t,o=l.parent,f=l;o!==null;)if(o.f&T){var s=o;f=s,o=s.parent}else{var i=o;(_=i.deriveds)!=null&&_.includes(f)||(i.deriveds??(i.deriveds=[])).push(f);break}return e&&(l=t,Z(l)&&Ft(l)),t.v}function ct(t){const n=v;try{return v=null,t()}finally{v=n}}const Vn=~(F|U|y);function b(t,n){t.f=t.f&Vn|n}function $n(t,n=1){var e=R(t),r=n===1?e++:e--;return A(t,e),r}function Bt(t,n=!1,e){h={p:h,c:null,e:null,m:!1,s:t,x:null,l:null}}function Ut(t){const n=h;if(n!==null){const o=n.e;if(o!==null){var e=c,r=v;n.e=null;try{for(var u=0;u<o.length;u++){var l=o[u];I(l.effect),q(l.reaction),Ct(l.fn)}}finally{I(e),q(r)}}h=n.p,n.m=!0}return{}}const Bn=["touchstart","touchmove"];function Un(t){return Bn.includes(t)}const jt=new Set,ot=new Set;function jn(t){for(var n=0;n<t.length;n++)jt.add(t[n]);for(var e of ot)e(t)}function H(t){var vt;var n=this,e=n.ownerDocument,r=t.type,u=((vt=t.composedPath)==null?void 0:vt.call(t))||[],l=u[0]||t.target,o=0,f=t.__root;if(f){var s=u.indexOf(f);if(s!==-1&&(n===document||n===window)){t.__root=n;return}var i=u.indexOf(n);if(i===-1)return;s<=i&&(o=s)}if(l=u[o]||t.target,l!==n){Jt(t,"currentTarget",{configurable:!0,get(){return l||e}});var _=v,a=c;q(null),I(null);try{for(var d,w=[];l!==null;){var g=l.assignedSlot||l.parentNode||l.host||null;try{var k=l["__"+r];if(k!==void 0&&!l.disabled)if(zt(k)){var[Ht,...Kt]=k;Ht.apply(l,[t,...Kt])}else k.call(l,t)}catch(Y){d?w.push(Y):d=Y}if(t.cancelBubble||g===n||g===null)break;l=g}if(d){for(let Y of w)queueMicrotask(()=>{throw Y});throw d}}finally{t.__root=n,delete t.currentTarget,q(_),I(a)}}}function Yn(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function Hn(t,n){var e=c;e.nodes_start===null&&(e.nodes_start=t,e.nodes_end=n)}function Kn(t,n){var e=(n&cn)!==0,r,u=!t.startsWith("<!>");return()=>{r===void 0&&(r=Yn(u?t:"<!>"+t),r=xt(r));var l=e?document.importNode(r,!0):r.cloneNode(!0);return Hn(l,l),l}}function Wn(t,n){t!==null&&t.before(n)}function zn(t,n){var e=n==null?"":typeof n=="object"?n+"":n;e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function Gn(t,n){return Jn(t,n)}const C=new Map;function Jn(t,{target:n,anchor:e,props:r={},events:u,context:l,intro:o=!0}){pn();var f=new Set,s=a=>{for(var d=0;d<a.length;d++){var w=a[d];if(!f.has(w)){f.add(w);var g=Un(w);n.addEventListener(w,H,{passive:g});var k=C.get(w);k===void 0?(document.addEventListener(w,H,{passive:g}),C.set(w,1)):C.set(w,k+1)}}};s(Gt(jt)),ot.add(s);var i=void 0,_=gn(()=>{var a=e??n.appendChild(hn());return xn(()=>{if(l){Bt({});var d=h;d.c=l}u&&(r.$$events=u),i=t(a,r)||{},l&&Ut()}),()=>{var g;for(var d of f){n.removeEventListener(d,H);var w=C.get(d);--w===0?(document.removeEventListener(d,H),C.delete(d)):C.set(d,w)}ot.delete(s),a!==e&&((g=a.parentNode)==null||g.removeChild(a))}});return Qn.set(i,_),i}let Qn=new WeakMap;function rt(t,n,e,r){var u=t.__styles??(t.__styles={});u[n]!==e&&(u[n]=e,e==null?t.style.removeProperty(n):t.style.setProperty(n,e,""))}function Xn(t,n,e){if(t==null)return n(void 0),L;const r=ct(()=>t.subscribe(n,e));return r.unsubscribe?()=>r.unsubscribe():r}function Zn(t,n,e){const r=e[n]??(e[n]={store:null,source:_n(void 0),unsubscribe:L});if(r.store!==t)if(r.unsubscribe(),r.store=t,t==null)r.source.v=void 0,r.unsubscribe=L;else{var u=!0;r.unsubscribe=Xn(t,l=>{u?r.source.v=l:A(r.source,l)}),u=!1}return R(r.source)}function te(){const t={};return bn(()=>{for(var n in t)t[n].unsubscribe()}),t}function ne(t){h===null&&qt(),St(()=>{const n=ct(t);if(typeof n=="function")return n})}function ee(t){h===null&&qt(),ne(()=>()=>ct(t))}const re="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);async function Yt(t,n={}){var r;const e=(r=window.GetParentResourceName)==null?void 0:r.call(window);if(!e)return console.log(`Mocking NUI event: ${t}`,n),{status:"ok",data:n};try{return{status:"ok",data:await(await fetch(`https://${e}/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}}catch(u){return console.error("NUI fetch failed:",u),{status:"error",data:null}}}const D=[];function ue(t,n=L){let e=null;const r=new Set;function u(f){if(Et(t,f)&&(t=f,e)){const s=!D.length;for(const i of r)i[1](),D.push(i,t);if(s){for(let i=0;i<D.length;i+=2)D[i][0](D[i+1]);D.length=0}}}function l(f){u(f(t))}function o(f,s=L){const i=[f,s];return r.add(i),r.size===1&&(e=n(u,l)||L),f(t),()=>{r.delete(i),r.size===0&&e&&(e(),e=null)}}return{set:u,update:l,subscribe:o}}function le(t,n){const e=r=>{const{type:u,data:l}=r.data;u===t&&n(l)};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)}const _t=ue(!1);le("setVisible",t=>{_t.set(t.visible)});async function oe(t){_t.set(t),await Yt("setVisible",{visible:t})}function ie(t,n){$n(n),Yt("print",{text:R(n)})}var se=Kn('<main><button class="counter-button"> </button></main>');function fe(t,n){Bt(n,!0);const e=te(),r=()=>Zn(_t,"$visibility",e);let u=et(0),l=et(!1),o=et(0);St(()=>{r()?(A(l,!0),setTimeout(()=>A(o,1),0)):(A(o,0),setTimeout(()=>A(l,!1),200))});const f=a=>{a.key==="Escape"&&r()&&oe(!1)};window.addEventListener("keydown",f),ee(()=>{window.removeEventListener("keydown",f)});var s=se();rt(s,"transition","opacity 200ms ease-in-out");var i=ht(s);i.__click=[ie,u];var _=ht(i);Tn(()=>{rt(s,"display",R(l)?"block":"none"),rt(s,"opacity",R(o)),zn(_,`Count: ${R(u)??""}`)}),Wn(t,s),Ut()}jn(["click"]);Gn(fe,{target:document.getElementById("app")});