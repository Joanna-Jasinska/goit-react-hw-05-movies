"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[727],{9613:function(t,e,n){n.d(e,{e:function(){return l}});var r=n(5984),a=n(7689),u=n(1087),c=n(4967),i="MovieLink_NavLink__02YS-",o="MovieLink_themeDark__HoovL",s="MovieLink_MovieLink__frDj-",f="MovieLink_MovieLi__U-dAF",v=n(184),p=function(t){var e=t.to,n=void 0===e?"":e,r=t.text,p=void 0===r?"":r,d=(0,a.TH)(),l=(0,c.F)().theme;return(0,v.jsx)("li",{className:f,children:(0,v.jsx)("div",{className:s,children:(0,v.jsxs)(u.OL,{className:"".concat(i," ").concat(l?"":o),to:n,state:{from:d.pathname},children:[p," "]})})})},d="MovieList_MovieList__92Iqv",l=function(t){var e=t.list,n=void 0===e?[]:e,a=t.path,u=void 0===a?"/movies":a;return(0,v.jsx)("ul",{className:d,children:n.map((function(t){return(0,v.jsx)(p,{text:t.title||"Title to be announced later",to:"".concat(u,"/").concat(t.id)},(0,r.x0)())}))})}},727:function(t,e,n){n.r(e),n.d(e,{MainPage:function(){return p}});var r=n(5861),a=n(9439),u=n(7757),c=n.n(u),i=n(2791),o=n(9613),s=n(4390),f=n(2639),v=n(184),p=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],p=(0,i.useState)(!0),d=(0,a.Z)(p,2),l=d[0],h=d[1],m=(0,i.useState)(!1),x=(0,a.Z)(m,2),_=x[0],g=x[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!1),h(!0),t.next=5,(0,s.Tg)();case 5:e=t.sent,u(e.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),g(!0);case 12:return t.prev=12,h(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[g,h,u]),(0,v.jsx)("article",{children:l?(0,v.jsx)(f.a,{}):_||(0,v.jsx)(o.e,{list:n})})};e.default=p},4390:function(t,e,n){n.d(e,{E3:function(){return f},Hx:function(){return d},Mc:function(){return v},Tg:function(){return s},uV:function(){return p}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1243),i=new URLSearchParams({api_key:"78f2b6656e3343e055b38455360ff324",page:1,include_adult:!1,language:"en-US"});c.Z.defaults.params=i;var o=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:i}),s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("search/movie?query=".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(e,"}/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},5984:function(t,e,n){n.d(e,{x0:function(){return r}});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=727.7be600bd.chunk.js.map