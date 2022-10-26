import{a as b,b as A,c as C,f as B,p as D,d as P,g as M,e as N}from"./_layout-a7961e06.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const L=new WeakMap,g=(e,t,o,s=0)=>{L.has(e)!==o&&(o?x(e,t,s):R(e,t))},p=e=>e===e.getRootNode().activeElement,x=(e,t,o)=>{const s=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,s.appendChild(n),L.set(e,n);const d=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${o}px,0) scale(0)`},R=(e,t)=>{const o=L.get(e);o&&(L.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},_=(e,t,o)=>{if(!o||!t)return()=>{};const s=i=>{p(t)&&g(e,t,i)},n=()=>g(e,t,!1),r=()=>s(!0),d=()=>s(!1);return b(o,"ionScrollStart",r),b(o,"ionScrollEnd",d),t.addEventListener("blur",n),()=>{A(o,"ionScrollStart",r),A(o,"ionScrollEnd",d),t.addEventListener("ionBlur",n)}},y="input, textarea, [no-blur], [contenteditable]",K=()=>{let e=!0,t=!1;const o=document,s=()=>{t=!0},n=()=>{e=!0},r=d=>{if(t){t=!1;return}const i=o.activeElement;if(!i||i.matches(y))return;const c=d.target;c!==i&&(c.matches(y)||c.closest(y)||(e=!1,setTimeout(()=>{e||i.blur()},50)))};return b(o,"ionScrollStart",s),o.addEventListener("focusin",n,!0),o.addEventListener("touchend",r,!1),()=>{A(o,"ionScrollStart",s,!0),o.removeEventListener("focusin",n,!0),o.removeEventListener("touchend",r,!1)}},O=.3,F=(e,t,o)=>{var s;const n=(s=e.closest("ion-item,[ion-item]"))!==null&&s!==void 0?s:e;return k(n.getBoundingClientRect(),t.getBoundingClientRect(),o,e.ownerDocument.defaultView.innerHeight)},k=(e,t,o,s)=>{const n=e.top,r=e.bottom,d=t.top,i=Math.min(t.bottom,s-o),c=d+15,f=i*.75-r,h=c-n,a=Math.round(f<0?-f:h>0?-h:0),u=Math.min(a,n-d),v=Math.abs(u)/O,w=Math.min(400,Math.max(150,v));return{scrollAmount:u,scrollDuration:w,scrollPadding:o,inputSafeY:-(n-c)+4}},H=(e,t,o,s,n)=>{let r;const d=c=>{r=D(c)},i=c=>{if(!r)return;const l=D(c);!Y(6,r,l)&&!p(t)&&U(e,t,o,s,n)};return e.addEventListener("touchstart",d,{capture:!0,passive:!0}),e.addEventListener("touchend",i,!0),()=>{e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",i,!0)}},U=async(e,t,o,s,n)=>{if(!o&&!s)return;const r=F(e,o||s,n);if(o&&Math.abs(r.scrollAmount)<4){t.focus();return}if(g(e,t,!0,r.inputSafeY),t.focus(),P(()=>e.click()),typeof window<"u"){let d;const i=async()=>{d!==void 0&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",c),window.removeEventListener("ionKeyboardDidShow",i),o&&await N(o,0,r.scrollAmount,r.scrollDuration),g(e,t,!1,r.inputSafeY),t.focus()},c=()=>{window.removeEventListener("ionKeyboardDidShow",c),window.addEventListener("ionKeyboardDidShow",i)};if(o){const l=await M(o),f=l.scrollHeight-l.clientHeight;if(r.scrollAmount>f-l.scrollTop){t.type==="password"?(r.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",c)):window.addEventListener("ionKeyboardDidShow",i),d=setTimeout(i,1e3);return}}i()}},Y=(e,t,o)=>{if(t&&o){const s=t.x-o.x,n=t.y-o.y;return s*s+n*n>e*e}return!1},I="$ionPaddingTimer",$=e=>{const t=document,o=n=>{T(n.target,e)},s=n=>{T(n.target,0)};return t.addEventListener("focusin",o),t.addEventListener("focusout",s),()=>{t.removeEventListener("focusin",o),t.removeEventListener("focusout",s)}},T=(e,t)=>{var o,s;if(e.tagName!=="INPUT"||e.parentElement&&e.parentElement.tagName==="ION-INPUT"||((s=(o=e.parentElement)===null||o===void 0?void 0:o.parentElement)===null||s===void 0?void 0:s.tagName)==="ION-SEARCHBAR")return;const n=B(e);if(n===null)return;const r=n[I];r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n[I]=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},q=!0,G=!0,V=e=>{const t=document,o=e.getNumber("keyboardHeight",290),s=e.getBoolean("scrollAssist",!0),n=e.getBoolean("hideCaretOnScroll",!0),r=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),i=Array.from(t.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,l=new WeakMap,f=async a=>{await new Promise(m=>C(a,m));const u=a.shadowRoot||a,S=u.querySelector("input")||u.querySelector("textarea"),v=B(a),w=v?null:a.closest("ion-footer");if(!S)return;if(!!v&&n&&!c.has(a)){const m=_(a,S,v);c.set(a,m)}if(!(S.type==="date"||S.type==="datetime-local")&&(!!v||!!w)&&s&&!l.has(a)){const m=H(a,S,v,w,o);l.set(a,m)}},h=a=>{if(n){const u=c.get(a);u&&u(),c.delete(a)}if(s){const u=l.get(a);u&&u(),l.delete(a)}};r&&q&&K(),d&&G&&$(o);for(const a of i)f(a);t.addEventListener("ionInputDidLoad",a=>{f(a.detail)}),t.addEventListener("ionInputDidUnload",a=>{h(a.detail)})};export{V as startInputShims};
