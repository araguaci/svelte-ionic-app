import{S as we,i as Ae,s as Pe,a as C,v as Se,I as qe,h as _,c as G,w as De,b as re,x as Ie,f as Ye,t as Oe,y as Ne,o as Ce,a5 as Ge,k as D,q as P,l as I,m as Y,r as q,K as H,n as ve,L as s,u as ee,Z as de}from"../../../../chunks/singletons-834fc638.js";import{I as $e,k as ke}from"../../../../chunks/index-47bdae71.js";import"../../../../chunks/preload-helper-aa6bc0ce.js";import{I as Re,S as Ve}from"../../../../chunks/IonPage-8ee9f8db.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var B=function(e,o,r,i){var n=Ue(e)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture,a,u;return e.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(a="addEventListener",u="removeEventListener"),e[a](o,r,n),function(){e[u](o,r,n)}},Ue=function(e){if(te===void 0)try{var o=Object.defineProperty({},"passive",{get:function(){te=!0}});e.addEventListener("optsTest",function(){},o)}catch{te=!1}return!!te},te,Be=2e3,ze=function(e,o,r,i,n){var a,u,l,d,c,f,E,p=0,T=function(g){p=Date.now()+Be,o(g)&&(!u&&r&&(u=B(e,"touchmove",r,n)),l||(l=B(g.target,"touchend",t,n)),d||(d=B(g.target,"touchcancel",t,n)))},S=function(g){p>Date.now()||!o(g)||(!f&&r&&(f=B(be(e),"mousemove",r,n)),E||(E=B(be(e),"mouseup",N,n)))},t=function(g){b(),i&&i(g)},N=function(g){$(),i&&i(g)},b=function(){u&&u(),l&&l(),d&&d(),u=l=d=void 0},$=function(){f&&f(),E&&E(),f=E=void 0},y=function(){b(),$()},h=function(g){g===void 0&&(g=!0),g?(a||(a=B(e,"touchstart",T,n)),c||(c=B(e,"mousedown",S,n))):(a&&a(),c&&c(),a=c=void 0,y())},M=function(){h(!1),i=r=o=void 0};return{enable:h,stop:y,destroy:M}},be=function(e){return e instanceof Document?e:e.ownerDocument},We=function(e,o,r){var i=r*(Math.PI/180),n=e==="x",a=Math.cos(i),u=o*o,l=0,d=0,c=!1,f=0;return{start:function(E,p){l=E,d=p,f=0,c=!0},detect:function(E,p){if(!c)return!1;var T=E-l,S=p-d,t=T*T+S*S;if(t<u)return!1;var N=Math.sqrt(t),b=(n?T:S)/N;return b>a?f=1:b<-a?f=-1:f=0,c=!1,!0},isGesture:function(){return f!==0},getDirection:function(){return f}}},ye=function(e){var o=!1,r=!1,i=!0,n=!1,a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),u=a.canStart,l=a.onWillStart,d=a.onStart,c=a.onEnd,f=a.notCaptured,E=a.onMove,p=a.threshold,T=a.passive,S=a.blurOnStart,t={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},N=We(a.direction,a.threshold,a.maxAngle),b=$e.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),$=function(m){var U=Le(m);return r||!i||(Me(m,t),t.startX=t.currentX,t.startY=t.currentY,t.startTime=t.currentTime=U,t.velocityX=t.velocityY=t.deltaX=t.deltaY=0,t.event=m,u&&u(t)===!1)||(b.release(),!b.start())?!1:(r=!0,p===0?M():(N.start(t.startX,t.startY),!0))},y=function(m){if(o){!n&&i&&(n=!0,me(t,m),requestAnimationFrame(h));return}me(t,m),N.detect(t.currentX,t.currentY)&&(!N.isGesture()||!M())&&F()},h=function(){!o||(n=!1,E&&E(t))},M=function(){return b.capture()?(o=!0,i=!1,t.startX=t.currentX,t.startY=t.currentY,t.startTime=t.currentTime,l?l(t).then(k):k(),!0):!1},g=function(){if(typeof document<"u"){var m=document.activeElement;m!=null&&m.blur&&m.blur()}},k=function(){S&&g(),d&&d(t),i=!0},v=function(){o=!1,r=!1,n=!1,i=!0,b.release()},L=function(m){var U=o,R=i;if(v(),!!R){if(me(t,m),U){c&&c(t);return}f&&f(t)}},O=ze(a.el,$,y,L,{capture:!1,passive:T}),F=function(){v(),O.stop(),f&&f(t)};return{enable:function(m){m===void 0&&(m=!0),m||(o&&L(void 0),v()),O.enable(m)},destroy:function(){b.destroy(),O.destroy()}}},me=function(e,o){if(!!o){var r=e.currentX,i=e.currentY,n=e.currentTime;Me(o,e);var a=e.currentX,u=e.currentY,l=e.currentTime=Le(o),d=l-n;if(d>0&&d<100){var c=(a-r)/d,f=(u-i)/d;e.velocityX=c*.7+e.velocityX*.3,e.velocityY=f*.7+e.velocityY*.3}e.deltaX=a-e.startX,e.deltaY=u-e.startY,e.event=o}},Me=function(e,o){var r=0,i=0;if(e){var n=e.changedTouches;if(n&&n.length>0){var a=n[0];r=a.clientX,i=a.clientY}else e.pageX!==void 0&&(r=e.pageX,i=e.pageY)}o.currentX=r,o.currentY=i},Le=function(e){return e.timeStamp||Date.now()};const{document:Te}=Ge;function je(e){let o,r,i,n,a,u,l,d,c,f,E,p,T,S,t,N,b,$,y,h,M,g,k,v,L,O,F,m,U,R,ne,K,ae,z,oe,Z,ie,W,se,J,V;return l=new Ve({props:{name:"Gesture"}}),{c(){o=D("ion-header"),r=D("ion-toolbar"),i=D("ion-buttons"),n=D("ion-menu-button"),a=C(),u=D("ion-buttons"),Se(l.$$.fragment),d=C(),c=D("ion-title"),f=P("Gesture"),E=C(),p=D("ion-content"),T=D("ion-card"),S=D("div"),t=D("div"),N=C(),b=D("p"),$=P("Drag the square along the track."),y=C(),h=D("ion-card"),M=D("div"),g=C(),k=D("p"),v=P("Swipe to start tracking"),L=C(),O=D("div"),F=P("Type: "),m=P(e[3]),U=C(),R=D("div"),ne=P("Current X: "),K=P(e[4]),ae=C(),z=D("div"),oe=P("Delta X: "),Z=P(e[5]),ie=C(),W=D("div"),se=P("Velocity X: "),J=P(e[6]),this.h()},l(X){o=I(X,"ION-HEADER",{translucent:!0});var A=Y(o);r=I(A,"ION-TOOLBAR",{});var j=Y(r);i=I(j,"ION-BUTTONS",{slot:!0});var _e=Y(i);n=I(_e,"ION-MENU-BUTTON",{}),Y(n).forEach(_),_e.forEach(_),a=G(j),u=I(j,"ION-BUTTONS",{slot:!0});var pe=Y(u);De(l.$$.fragment,pe),pe.forEach(_),d=G(j),c=I(j,"ION-TITLE",{});var he=Y(c);f=q(he,"Gesture"),he.forEach(_),j.forEach(_),A.forEach(_),E=G(X),p=I(X,"ION-CONTENT",{fullscreen:!0,class:!0});var Q=Y(p);T=I(Q,"ION-CARD",{});var x=Y(T);S=I(x,"DIV",{class:!0});var ge=Y(S);t=I(ge,"DIV",{class:!0}),Y(t).forEach(_),ge.forEach(_),N=G(x),b=I(x,"P",{});var Ee=Y(b);$=q(Ee,"Drag the square along the track."),Ee.forEach(_),x.forEach(_),y=G(Q),h=I(Q,"ION-CARD",{});var w=Y(h);M=I(w,"DIV",{class:!0}),Y(M).forEach(_),g=G(w),k=I(w,"P",{});var Xe=Y(k);v=q(Xe,"Swipe to start tracking"),Xe.forEach(_),L=G(w),O=I(w,"DIV",{});var ue=Y(O);F=q(ue,"Type: "),m=q(ue,e[3]),ue.forEach(_),U=G(w),R=I(w,"DIV",{});var le=Y(R);ne=q(le,"Current X: "),K=q(le,e[4]),le.forEach(_),ae=G(w),z=I(w,"DIV",{});var ce=Y(z);oe=q(ce,"Delta X: "),Z=q(ce,e[5]),ce.forEach(_),ie=G(w),W=I(w,"DIV",{});var fe=Y(W);se=q(fe,"Velocity X: "),J=q(fe,e[6]),fe.forEach(_),w.forEach(_),Q.forEach(_),this.h()},h(){H(i,"slot","start"),H(u,"slot","end"),H(o,"translucent","true"),ve(t,"class","square svelte-hre4dx"),ve(S,"class","moveTrack svelte-hre4dx"),ve(M,"class","rectangle svelte-hre4dx"),H(p,"fullscreen",""),H(p,"class","ion-padding")},m(X,A){re(X,o,A),s(o,r),s(r,i),s(i,n),s(r,a),s(r,u),Ie(l,u,null),s(r,d),s(r,c),s(c,f),re(X,E,A),re(X,p,A),s(p,T),s(T,S),s(S,t),e[7](t),e[8](S),s(T,N),s(T,b),s(b,$),s(p,y),s(p,h),s(h,M),e[9](M),s(h,g),s(h,k),s(k,v),s(h,L),s(h,O),s(O,F),s(O,m),s(h,U),s(h,R),s(R,ne),s(R,K),s(h,ae),s(h,z),s(z,oe),s(z,Z),s(h,ie),s(h,W),s(W,se),s(W,J),V=!0},p(X,A){(!V||A&8)&&ee(m,X[3]),(!V||A&16)&&ee(K,X[4]),(!V||A&32)&&ee(Z,X[5]),(!V||A&64)&&ee(J,X[6])},i(X){V||(Ye(l.$$.fragment,X),V=!0)},o(X){Oe(l.$$.fragment,X),V=!1},d(X){X&&_(o),Ne(l),X&&_(E),X&&_(p),e[7](null),e[8](null),e[9](null)}}}function Fe(e){let o,r,i;return r=new Re({props:{$$slots:{default:[je]},$$scope:{ctx:e}}}),{c(){o=C(),Se(r.$$.fragment),this.h()},l(n){qe('[data-svelte="svelte-hpq2is"]',Te.head).forEach(_),o=G(n),De(r.$$.fragment,n),this.h()},h(){Te.title="Ionic Companion - Gesture"},m(n,a){re(n,o,a),Ie(r,n,a),i=!0},p(n,[a]){const u={};a&131199&&(u.$$scope={dirty:a,ctx:n}),r.$set(u)},i(n){i||(Ye(r.$$.fragment,n),i=!0)},o(n){Oe(r.$$.fragment,n),i=!1},d(n){n&&_(o),Ne(r,n)}}}function He(e,o,r){let i,n,a,u,l,d,c,f="Start swiping this area!",E,p,T,S=0,t=!1;Ce(()=>{setTimeout(()=>{c=document.querySelector(".moveTrack").clientWidth-100,i=ke().addElement(u).duration(1e3).fromTo("transform","translateX(0)",`translateX(${c}px)`),console.log("MAX",c,l,l==null?void 0:l.clientWidth)},10),n=ye({el:u,threshold:0,onMove:v=>y(v),onEnd:v=>h(v),gestureName:"my-gesture"});const y=v=>{t||(i.progressStart(),t=!0),i.progressStep(g(v))},h=v=>{if(!t)return;n.enable(!1);const L=g(v),O=L>.5;i.progressEnd(O?1:0,L).onFinish(()=>{n.enable(!0)}),S=O?c:0,t=!1},M=(v,L,O)=>Math.max(v,Math.min(L,O)),g=v=>{const L=S+v.deltaX;return M(0,L/c,1)};n.enable(!0),a=ye({el:d,onMove:v=>{k(v)},gestureName:"my-gesture2"});const k=v=>{r(3,f=v.type),r(4,E=v.currentX),r(5,p=v.deltaX),r(6,T=v.velocityX)};a.enable(!0)});function N(y){de[y?"unshift":"push"](()=>{u=y,r(0,u)})}function b(y){de[y?"unshift":"push"](()=>{l=y,r(1,l)})}function $(y){de[y?"unshift":"push"](()=>{d=y,r(2,d)})}return[u,l,d,f,E,p,T,N,b,$]}class xe extends we{constructor(o){super(),Ae(this,o,He,Fe,Pe,{})}}export{xe as default};
