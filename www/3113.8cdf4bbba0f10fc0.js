"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3113],{3113:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var y=h(5861),P=h(4435),m=h(544),K=h(3812);h(9920),h(7643);const A=new WeakMap,I=(t,e,s,o=0,n=!1)=>{A.has(t)!==s&&(s?H(t,e,o,n):k(t,e))},H=(t,e,s,o=!1)=>{const n=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),n.appendChild(r),A.set(t,r);const d="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},k=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},T="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",p=(t,e,s)=>{const o=t[U];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[U]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&p(e,0,s)},{once:!0})};let g=0;const C="data-ionic-skip-scroll-assist",V=(t,e,s,o,n,r,a,d=!1)=>{const i=r&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(C)?e.removeAttribute(C):J(t,e,s,o,n,i,d)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},w=t=>{document.activeElement!==t&&(t.setAttribute(C,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,o,n,r,a,d=!1){if(!o&&!n)return;const i=((t,e,s)=>{var o;return((t,e,s,o)=>{const n=t.top,r=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,o-s)-50-r,v=i-n,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,n-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(n-i)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,o||n,r);if(o&&Math.abs(i.scrollAmount)<4)return w(s),void(a&&null!==o&&(p(o,g),N(s,o,()=>g=0)));if(I(e,s,!0,i.inputSafeY,d),w(s),(0,m.r)(()=>e.click()),a&&o&&(g=i.scrollPadding,p(o,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,P.c)(o,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),w(s),a&&N(s,o,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,P.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,o,n,r,a,d){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const o=document,n="ios"===s,r="android"===s,a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",n),S=e.getBoolean("inputBlurring",n),u=e.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,j=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(c){yield new Promise(b=>(0,m.c)(c,b));const x=c.shadowRoot||c,L=x.querySelector("input")||x.querySelector("textarea"),D=(0,P.f)(c),W=D?null:c.closest("ion-footer");if(L){if(D&&i&&!l.has(c)){const b=((t,e,s)=>{if(!s||!e)return()=>{};const o=d=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,d)},n=()=>I(t,e,!1),r=()=>o(!0),a=()=>o(!1);return(0,m.a)(s,"ionScrollStart",r),(0,m.a)(s,"ionScrollEnd",a),e.addEventListener("blur",n),()=>{(0,m.b)(s,"ionScrollStart",r),(0,m.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",n)}})(c,L,D);l.set(c,b)}if("date"!==L.type&&"datetime-local"!==L.type&&(D||W)&&d&&!_.has(c)){const b=V(c,L,D,W,a,u,j,r);_.set(c,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const d=s.activeElement;if(!d||d.matches(T))return;const i=a.target;i!==d&&(i.matches(T)||i.closest(T)||(t=!1,setTimeout(()=>{t||d.blur()},50)))},!1)})();for(const f of v)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,o){return t.apply(this,arguments)}}()}}]);