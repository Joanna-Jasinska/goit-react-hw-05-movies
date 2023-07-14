"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[344],{3641:function(t,n,e){e.d(n,{d:function(){return c}});var r="Article_article__rqSqJ",a=e(184),c=function(t){var n=t.title,e=t.content,c=t.id;return n||e?(0,a.jsxs)("article",{className:r,id:c||"Article:".concat((n+"").replaceAll(" ","").toLowerCase),children:[n?(0,a.jsx)("h4",{children:n}):"",e||""]}):""}},5344:function(t,n,e){e.r(n),e.d(n,{ArticleList:function(){return h},default:function(){return g}});var r=e(5861),a=e(9439),c=e(7757),u=e.n(c),i=e(2791),o=e(7689),s=e(5984),f="ArticleList_ArticleList__VP6gr",p=e(3641),l=e(4390),v=e(2016),d=e(184),h=function(){var t=(0,o.UO)().movieId,n=(0,i.useState)([]),e=(0,a.Z)(n,2),c=e[0],h=e[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Hx)(t);case 3:e=n.sent,r=e.results,h(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,d.jsxs)("div",{id:"reviews",children:[(0,d.jsx)("br",{}),(0,d.jsx)(v.Z,{}),c.length>0?(0,d.jsx)("ul",{className:f,children:c.map((function(t){return(0,d.jsxs)("li",{children:[(0,d.jsx)(p.d,{title:(0,d.jsxs)(d.Fragment,{children:["Author: ",t.author]}),content:(0,d.jsx)(d.Fragment,{children:t.content})}),(0,d.jsx)(v.Z,{})]})}))},(0,s.x0)()):(0,d.jsxs)(d.Fragment,{children:["No reviews yet.",(0,d.jsx)(v.Z,{})]})]})},g=h},2016:function(t,n,e){e.d(n,{Z:function(){return o}});var r="Separator_horizontal__DeiXg",a="Separator_vertical__Y5adW",c="Separator_absolute__o5u+-",u="Separator_margin__SSK-C",i=e(184),o=function(t){var n=t.vertical,e=void 0!==n&&n,o=t.relative,s=void 0!==o&&o;return(0,i.jsxs)(i.Fragment,{children:[e||s?"":(0,i.jsx)("div",{className:u}),(0,i.jsx)("div",{className:"".concat(e?a:r," ").concat(s?"":c)})]})}},4390:function(t,n,e){e.d(n,{E3:function(){return p},Hx:function(){return d},Mc:function(){return l},Tg:function(){return f},uV:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org",o="78f2b6656e3343e055b38455360ff324",s=new URLSearchParams({baseURL:"https://api.themoviedb.org",key:o,page:1});u.Z.defaults.params=s;var f=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},5984:function(t,n,e){e.d(n,{x0:function(){return r}});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,n){return t+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=344.25dcb57e.chunk.js.map