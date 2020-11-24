(this["webpackJsonpmovie-searcher_ts"]=this["webpackJsonpmovie-searcher_ts"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(18),o=n.n(s),i=n(14),l=n(10),u=n(3),d=n(7),j="UPDATE_FAVORITS",h="SAVE_SEARCH_RESULTS",f="GET_POPULARS",v="SAVE_SEARCH_TEXT",b="SAVE_PAGE",O="SAVE_LOCATION",p=function(e){return{type:j,payload:e}},x=function(e){return{type:h,payload:e}},g=function(e){return{type:b,payload:e}},A=n(9),m=n.n(A),y=n(17),w=n(21),S=function e(){var t=this;Object(w.a)(this,e),this._API_URL="https://api.themoviedb.org/3/movie/",this._API_URL_SEACRCH="https://api.themoviedb.org/3/search/movie",this._API_KEY="?api_key=a28e64474e37ed0554fd9ce97aa5293b",this.getMovieDescription=function(){var e=Object(y.a)(m.a.mark((function e(n){var c,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>1&&void 0!==r[1]?r[1]:"en-US",e.next=3,fetch("".concat(t._API_URL).concat(n).concat(t._API_KEY,"&language=").concat(c)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRecommendations=function(){var e=Object(y.a)(m.a.mark((function e(n){var c,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>1&&void 0!==r[1]?r[1]:"en-US",e.next=3,fetch("".concat(t._API_URL).concat(n,"/recommendations").concat(t._API_KEY,"&language=").concat(c,"&page=1")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPopular=Object(y.a)(m.a.mark((function e(){var n,c=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"en-US",e.next=3,fetch("".concat(t._API_URL,"popular").concat(t._API_KEY,"&language=").concat(n,"&page=1")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),this.searchMovie=Object(y.a)(m.a.mark((function e(){var n,c,r,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",c=a.length>1&&void 0!==a[1]?a[1]:"en-US",r=a.length>2&&void 0!==a[2]?a[2]:1,e.next=5,fetch("".concat(t._API_URL_SEACRCH).concat(t._API_KEY,"&language=").concat(c,"&query=").concat(n,"&page=").concat(r,"&include_adult=false")).then((function(e){return e.json()}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))},N=a.a.createContext(null),U=function(){return Object(c.jsxs)("footer",{id:"footer",className:"jumbotron w-100",children:[Object(c.jsx)("button",{className:"w-100 btn btn-outline-secondary",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"Scroll to top"}),Object(c.jsx)("hr",{}),Object(c.jsx)("span",{children:"Data and images provided by themoviedb.org"}),Object(c.jsx)("span",{})]})},C=n(13),L=(n(43),function(e){var t=e.trackLocation,n=e.getSearchText,a=Object(r.useState)(""),s=Object(C.a)(a,2),o=s[0],i=s[1],d=Object(u.f)().pathname,j=d.length>1,h=j?"...":"Search...";Object(r.useEffect)((function(){n(o)}),[o]),Object(r.useEffect)((function(){t(d)}),[d]);return Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("nav",{className:"justify-content-center",children:[Object(c.jsx)(l.b,{to:"/",className:"btn btn-dark  btn-nav border  border-right-1",children:"Main"}),Object(c.jsx)(l.b,{to:"/favorits",className:"btn btn-dark  btn-nav",children:"Favorits"}),Object(c.jsx)("input",{disabled:j,className:"form-control flex-grow-1 search",onChange:function(e){i(e.target.value)},type:"text",placeholder:h,value:o})]})})}),R=(n(45),function(e){var t=e.src,n=e.title,a=e.id,s=e.favorited,o=e.movieData,i=Object(r.useContext)(N).toggleFavorit,u="like-btn";return s&&(u+=" inFavs"),Object(c.jsxs)("div",{className:"card movie-card",children:[Object(c.jsx)("button",{className:u,onClick:function(){i(o)},children:Object(c.jsx)("svg",{width:"1.5em",height:"1.5em",viewBox:"-0.4 1.2 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})}),Object(c.jsxs)(l.b,{to:"/description/".concat(a),children:[Object(c.jsx)("img",{className:"poster",src:t,alt:n}),Object(c.jsx)("span",{className:"title card-header",children:n})]})]})}),E=n(29),B=n(32),F=n(31),Q=function(e){Object(B.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(w.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(E.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("div",{className:"jumbotron w-100",children:"Something happend... pls reload the page or try later"}):this.props.children}}]),n}(r.Component),M=(n(46),n.p+"static/media/cardPlaceholder.b914a79b.png");var k=function(e){var t,n=Object(d.c)((function(e){return e.favoritsList})).favoritsList,r=e.list,a=Object(u.f)().pathname,s=0===r.length&&a.includes("favorits")?Object(c.jsx)("div",{className:"card empty",children:"Your favorits list is empty"}):null;return Object(c.jsx)(Q,{children:Object(c.jsxs)("div",{className:"cards-list",children:[s,(t=r,t.map((function(e){var t=e.id,r=e.title,a=e.poster_path,s=a?"http://image.tmdb.org/t/p/w342/".concat(a):M,o=n.some((function(e){return e.id===t}));return Object(c.jsx)(R,{id:t,src:s,title:r,favorited:o,movieData:e},t)})))]})})},I=(n(47),function(){return Object(c.jsx)("div",{className:" h-auto w-auto loadingio-spinner-gear-qqoee1y8k8 border border-light",children:Object(c.jsx)("div",{className:"ldio-6qzl3zftic9",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})})});n(48);var P=function(e){var t=new S,n=Object(r.useContext)(N),a=n.toggleFavorit,s=n.favoritsList,o=e.id,i=Object(r.useState)(),l=Object(C.a)(i,2),u=l[0],d=l[1],j=Object(r.useState)(!1),h=Object(C.a)(j,2),f=h[0],v=h[1],b=Object(r.useState)(),O=Object(C.a)(b,2),p=O[0],x=O[1];if(Object(r.useEffect)((function(){var e=!1;return window.scrollTo({top:0,left:0,behavior:"smooth"}),t.getMovieDescription(o).then((function(t){!e&&d(t),!e&&v(function(e){return s.some((function(t){return t.id===e}))}(t.id))})),t.getRecommendations(o).then((function(t){!e&&x(t.results)})),function(){return e=!0}}),[o]),!u)return Object(c.jsx)(I,{});var g=f?"Remove from Favorits":"Add to favorits",A=u,m=A.poster_path,y=A.backdrop_path,w=A.title,U=A.genres,L=A.vote_average,R=A.overview,E=A.release_date,B=U.reduce((function(e,t){return e+" ".concat(t.name)}),""),F=m?"http://image.tmdb.org/t/p/w342/".concat(y||m):"data:image/png;base64,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",M=u?Object(c.jsx)("img",{src:F,alt:w,className:"pic-sizer"}):Object(c.jsx)(I,{});return Object(c.jsx)(Q,{children:Object(c.jsxs)("div",{className:"bg-light w-100",children:[Object(c.jsxs)("div",{className:"flex-container border border-black",children:[Object(c.jsx)("div",{className:"d-flex pic-container",children:M}),Object(c.jsxs)("div",{className:"card card-body",children:[Object(c.jsx)("h1",{children:w}),Object(c.jsxs)("span",{className:"text-muted spacer",children:["Rating: ",L]}),Object(c.jsx)("article",{className:"spacer",children:R}),Object(c.jsxs)("span",{className:"spacer",children:["Genres:",B]}),Object(c.jsxs)("span",{className:"spacer",children:["Release date: ",E]}),Object(c.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){v(!f),a(A)},children:g})]})]}),p?Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"notif",children:"You may also like:"}),Object(c.jsx)(k,{list:p})]}):Object(c.jsx)(I,{})]})})},T=function(){var e=new S,t=Object(d.b)(),n=Object(d.c)((function(e){return e.popularsList})).popularsList,a=Object(d.c)((function(e){return e.favoritsList})).favoritsList,s=Object(d.c)((function(e){return e.searchResults})).searchResults,o=Object(d.c)((function(e){return e.searchText})).searchText,j=Object(d.c)((function(e){return e.page})).page,h=Object(d.c)((function(e){return e.location})).location;Object(r.useEffect)((function(){e.getPopular().then((function(e){var n=e.results;t({type:f,payload:n})}))}),[]),Object(r.useEffect)((function(){document.addEventListener("scroll",b);var e=!1;return e||"/"!==h||A(o,j),function(){document.removeEventListener("scroll",b),e=!0}}),[o,j,h]);var b=function e(){var n=document.getElementById("footer");n.getBoundingClientRect().bottom<=window.innerHeight&&(document.removeEventListener("scroll",e),t(g(j+1)))},A=function(n){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!(n.length<1)){var r=n.toLowerCase(),a="en-US";/^[\u0430-\u044f\u0410-\u042f]+$/.test(r)&&(a="ru-RU",r=encodeURI(r)),e.searchMovie(r,a,c).then((function(e){if(!(e.results.length<1)){var n=m(s,e.results);t(x(n))}}))}},m=function(e,t){var n=new Set(e.map((function(e){return e.id})));return[].concat(Object(i.a)(e),Object(i.a)(t.filter((function(e){return!n.has(e.id)}))))},y={favoritsList:a,toggleFavorit:function(e){var n,c,r=e.id;a.some((function(e){return e.id===r}))?t(p(function(e,t){var n=t.findIndex((function(t){return t.id===e}));return[].concat(Object(i.a)(t.slice(0,n)),Object(i.a)(t.slice(n+1)))}(r,a))):t(p((n=e,c=a,[].concat(Object(i.a)(c),[n]))))}};return n?Object(c.jsx)(Q,{children:Object(c.jsx)(N.Provider,{value:y,children:Object(c.jsxs)("div",{className:"d-flex flex-column flex-shrink-1 bg-gradient-light",children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)(L,{trackLocation:function(e){t(function(e){return{type:O,payload:e}}(e))},getSearchText:function(e){t(x([])),t(g(1)),t({type:v,payload:e})}}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(k,{list:o?s:n})}}),Object(c.jsx)(u.a,{path:"/favorits",render:function(){return Object(c.jsx)(k,{list:a})}}),Object(c.jsx)(u.a,{path:"/description/:id",render:function(e){var t=e.match.params.id;return Object(c.jsx)(P,{id:t})}})]})]}),Object(c.jsx)(U,{})]})})}):Object(c.jsx)(I,{})},D=n(11),z={favoritsList:[]};var q={searchResults:[]};var V={popularsList:[]};var Y={searchText:""};var H={page:1};var X={location:""};var G=Object(D.c)({favoritsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{favoritsList:t.payload};default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{searchResults:t.payload};default:return e}},popularsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{popularsList:t.payload};default:return e}},searchText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{searchText:t.payload};default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{page:t.payload};default:return e}},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{location:t.payload};default:return e}}}),K=n(30),J=localStorage.getItem("MovieSearcherReduxStore"),Z=null!==J?JSON.parse(J):{},W=Object(D.d)(G,Z,Object(D.a)(K.a));W.subscribe((function(){localStorage.setItem("MovieSearcherReduxStore",JSON.stringify(W.getState()))}));var _=W;o.a.render(Object(c.jsx)(Q,{children:Object(c.jsx)(d.a,{store:_,children:Object(c.jsx)(T,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ece09076.chunk.js.map