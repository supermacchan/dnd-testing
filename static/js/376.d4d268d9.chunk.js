"use strict";(self.webpackChunkdnd_testing=self.webpackChunkdnd_testing||[]).push([[376],{376:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(142);function o(r,e,t){return(e=(0,n.Z)(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var a=t(439),c="CardList_container__Wspjy",d="CardList_card__BNJ9w",s=t(791),f=t(184),l=function(){var r=(0,s.useState)([{id:1,order:1,text:"CARD #1"},{id:2,order:2,text:"CARD #2"},{id:3,order:3,text:"CARD #3"},{id:4,order:4,text:"CARD #4"},{id:5,order:5,text:"CARD #5"}]),e=(0,a.Z)(r,2),t=e[0],n=e[1],o=(0,s.useState)(null),i=(0,a.Z)(o,2),l=i[0],p=i[1],b=function(r){r.target.style.background="transparent"};return(0,f.jsx)("div",{className:c,children:t.sort((function(r,e){return r.order>e.order?1:-1})).map((function(r){return(0,f.jsx)("div",{className:d,draggable:!0,onDragStart:function(e){return function(r,e){p(e)}(0,r)},onDragLeave:function(r){return b(r)},onDragEnd:function(r){return b(r)},onDragOver:function(r){return function(r){r.preventDefault(),r.target.style.background="darksalmon"}(r)},onDrop:function(e){return function(r,e){r.preventDefault(),n(t.map((function(r){return r.id===e.id?u(u({},r),{},{order:l.order}):r.id===l.id?u(u({},r),{},{order:e.order}):r}))),r.target.style.background="transparent"}(e,r)},children:r.text},r.id)}))})}}}]);
//# sourceMappingURL=376.d4d268d9.chunk.js.map