(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(16),a=c.n(n),r=c(8),l=(c(22),c(0));function j(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h2",{className:"header__title",children:"Blog"})})}function o(){return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("h2",{className:"sidebar__title",children:"Navigation"}),Object(l.jsxs)("ul",{className:"sidebar__lists",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("li",{className:"sidebar__list",children:"All Article"})}),Object(l.jsx)(r.b,{to:"/about",children:Object(l.jsx)("li",{className:"sidebar__list",children:"About"})})]})]})}function d(){return Object(l.jsx)("div",{className:"footer",children:"\xa9 Copyright by ERu"})}var b=c(2),m=c(10);function h(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("http://127.0.0.1:8000/api/").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h2",{className:"content__title",children:"Article"}),c!==[]?c.map((function(e,t){return Object(l.jsxs)("div",{className:"content__item",children:[Object(l.jsx)("img",{src:e.image,alt:"",className:"content__item__img"}),Object(l.jsx)("a",{href:"/"+e.article_id,children:Object(l.jsx)("h3",{className:"content__item__title",children:e.title})}),Object(l.jsx)("p",{className:"content__item__text",children:e.description})]},t)})):""]})}function u(e){var t=Object(s.useState)([]),c=Object(m.a)(t,2),i=c[0],n=c[1];return Object(s.useEffect)((function(){var t=e.match.params.articleId;fetch("http://127.0.0.1:8000/api/".concat(t,"/")).then((function(e){return e.json()})).then((function(e){n(e)}))}),[e.match.params.articleId]),Object(l.jsx)("div",{className:"detail",children:Object(l.jsxs)("div",{className:"detail__item",children:[Object(l.jsx)("img",{src:i.image,alt:"",className:"detail__item__img"}),Object(l.jsx)("h3",{className:"detail__item__title",children:i.title}),Object(l.jsx)("p",{className:"detail__item__text",children:i.description})]})})}function _(){return Object(l.jsx)("div",{className:"about",children:Object(l.jsxs)("div",{className:"about__item",children:[Object(l.jsx)("h3",{className:"about__item__title",children:"Just some test text"}),Object(l.jsx)("p",{className:"about__item__text",children:"ackages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on"})]})})}function x(){return Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(b.a,{path:"/about",component:_}),Object(l.jsx)(b.a,{path:"/:articleId",component:u})]})}function O(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(o,{})]}),Object(l.jsx)(d,{})]})}a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.14fc523a.chunk.js.map