"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[586],{3586:function(t,n,r){r.r(n),r.d(n,{CastList:function(){return l},default:function(){return _}});var e=r(5861),a=r(9439),i=r(7757),c=r.n(i),u=r(2791),o=r(7689),s=r(5984),f=r(1564),p=r(4390),d=r(2016),v="CastList_CastList__G2Wj2",m=r(184),l=function(){var t=(0,o.UO)().movieId,n=(0,u.useState)([]),r=(0,a.Z)(n,2),i=r[0],l=r[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.uV)(t);case 3:r=n.sent,e=r.cast,l(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),!i||i.length<1?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(d.Z,{}),"No information about casting so far.",(0,m.jsx)(d.Z,{})]}):(0,m.jsxs)("div",{id:"cast",children:[(0,m.jsx)("br",{}),(0,m.jsx)(d.Z,{}),(0,m.jsx)("br",{}),(0,m.jsx)("ul",{className:v,children:i.map((function(t){return(0,m.jsx)(f.v,{title:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h4",{children:t.name||"Unknown actor"}),"Character:",(0,m.jsx)("br",{})," ",t.character||"unknown"]}),url:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):void 0,alt:"photo of\n".concat(t.name)},(0,s.x0)())}))})]})},_=l},1564:function(t,n,r){r.d(n,{v:function(){return c}});var e=r(4967),a={miniature:"Miniature_miniature__-XChZ",padding:"Miniature_padding__AvpVc",textBox:"Miniature_textBox__uhqLZ",imgFrame:"Miniature_imgFrame__3V+X9",figcaption:"Miniature_figcaption__PifSq",img:"Miniature_img__7uR5g",themeDark:"Miniature_themeDark__enC-x",tmdb:"Miniature_tmdb__UhPZY"},i=r(184),c=function(t){var n=t.url,r=t.alt,c=void 0===r?"\ud83d\ude0e\nIncognito":r,u=t.title,o=t.padding,s=void 0!==o&&o,f=t.bg,p=(0,e.F)().theme;return(0,i.jsxs)("figure",{className:"".concat(a.miniature," ").concat(p?"":a.themeDark),children:[(0,i.jsx)("div",{className:"".concat(a.imgFrame," ").concat(s?a.padding:""," ").concat(p?"":a.themeDark," ").concat(f?a[f]:""),children:n&&""!==n?(0,i.jsx)("img",{className:a.img,src:n,alt:"\n".concat(c)}):(0,i.jsxs)("div",{className:a.textBox,children:["Missing ",c]})}),(0,i.jsx)("figcaption",{className:a.figcaption,children:u||c})]})}},2016:function(t,n,r){r.d(n,{Z:function(){return o}});var e="Separator_horizontal__DeiXg",a="Separator_vertical__Y5adW",i="Separator_absolute__o5u+-",c="Separator_margin__SSK-C",u=r(184),o=function(t){var n=t.vertical,r=void 0!==n&&n,o=t.relative,s=void 0!==o&&o;return(0,u.jsxs)(u.Fragment,{children:[r||s?"":(0,u.jsx)("div",{className:c}),(0,u.jsx)("div",{className:"".concat(r?a:e," ").concat(s?"":i)})]})}},4390:function(t,n,r){r.d(n,{E3:function(){return f},Hx:function(){return v},Mc:function(){return p},Tg:function(){return s},uV:function(){return d}});var e=r(5861),a=r(7757),i=r.n(a),c=r(1243),u=new URLSearchParams({api_key:"78f2b6656e3343e055b38455360ff324",page:1,include_adult:!1,language:"en-US"});c.Z.defaults.params=u;var o=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:u}),s=function(){var t=(0,e.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("search/movie?query=".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"}/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},5984:function(t,n,r){r.d(n,{x0:function(){return e}});var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,n){return t+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=586.311e37db.chunk.js.map