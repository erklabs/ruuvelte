import{S as q,i as D,s as M,k as $,q as x,a as E,l as p,m as b,r as C,h as f,c as y,n as h,b as v,C as u,B as A,D as I,w as k,x as z,y as B,E as L,F as N,G as J,f as R,t as T,z as G}from"../../chunks/index-8359d38f.js";function K(m){let e,l,o,r,a,n,s,t,c,w,d,F,H,j;return{c(){e=$("nav"),l=$("a"),o=x("Home"),r=E(),a=$("a"),n=x("About"),s=E(),t=$("a"),c=x("Projects"),w=E(),d=$("a"),F=x("Contact"),H=E(),j=$("hr"),this.h()},l(_){e=p(_,"NAV",{class:!0});var i=b(e);l=p(i,"A",{href:!0,class:!0});var O=b(l);o=C(O,"Home"),O.forEach(f),r=y(i),a=p(i,"A",{href:!0,class:!0});var P=b(a);n=C(P,"About"),P.forEach(f),s=y(i),t=p(i,"A",{href:!0,class:!0});var S=b(t);c=C(S,"Projects"),S.forEach(f),w=y(i),d=p(i,"A",{href:!0,class:!0});var V=b(d);F=C(V,"Contact"),V.forEach(f),i.forEach(f),H=y(_),j=p(_,"HR",{}),this.h()},h(){h(l,"href","/"),h(l,"class","svelte-b7lnrh"),h(a,"href","/about"),h(a,"class","svelte-b7lnrh"),h(t,"href","/projects"),h(t,"class","svelte-b7lnrh"),h(d,"href","/contact"),h(d,"class","svelte-b7lnrh"),h(e,"class","svelte-b7lnrh")},m(_,i){v(_,e,i),u(e,l),u(l,o),u(e,r),u(e,a),u(a,n),u(e,s),u(e,t),u(t,c),u(e,w),u(e,d),u(d,F),v(_,H,i),v(_,j,i)},p:A,i:A,o:A,d(_){_&&f(e),_&&f(H),_&&f(j)}}}class Q extends q{constructor(e){super(),D(this,e,null,K,M,{})}}function U(m){let e,l,o,r,a;return{c(){e=$("hr"),l=E(),o=$("footer"),r=$("div"),a=x("This is the footer")},l(n){e=p(n,"HR",{}),l=y(n),o=p(n,"FOOTER",{});var s=b(o);r=p(s,"DIV",{});var t=b(r);a=C(t,"This is the footer"),t.forEach(f),s.forEach(f)},m(n,s){v(n,e,s),v(n,l,s),v(n,o,s),u(o,r),u(r,a)},p:A,i:A,o:A,d(n){n&&f(e),n&&f(l),n&&f(o)}}}class W extends q{constructor(e){super(),D(this,e,null,U,M,{})}}function X(m){let e,l,o,r,a;e=new Q({});const n=m[1].default,s=I(n,m,m[0],null);return r=new W({}),{c(){k(e.$$.fragment),l=E(),s&&s.c(),o=E(),k(r.$$.fragment)},l(t){z(e.$$.fragment,t),l=y(t),s&&s.l(t),o=y(t),z(r.$$.fragment,t)},m(t,c){B(e,t,c),v(t,l,c),s&&s.m(t,c),v(t,o,c),B(r,t,c),a=!0},p(t,[c]){s&&s.p&&(!a||c&1)&&L(s,n,t,t[0],a?J(n,t[0],c,null):N(t[0]),null)},i(t){a||(R(e.$$.fragment,t),R(s,t),R(r.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),T(s,t),T(r.$$.fragment,t),a=!1},d(t){G(e,t),t&&f(l),s&&s.d(t),t&&f(o),G(r,t)}}}function Y(m,e,l){let{$$slots:o={},$$scope:r}=e;return m.$$set=a=>{"$$scope"in a&&l(0,r=a.$$scope)},[r,o]}class g extends q{constructor(e){super(),D(this,e,Y,X,M,{})}}export{g as default};