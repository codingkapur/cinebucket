(this.webpackJsonpcinebucket=this.webpackJsonpcinebucket||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(10),i=c.n(s),r=(c(16),c(17),c(11)),o=c(5),l=c.n(o),j=c(7),m=c(3),b=c(0),u=n.a.createContext(),d=function(e){var t=e.children,c=Object(a.useState)(!1),n=Object(m.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)([]),o=Object(m.a)(r,2),d=o[0],v=o[1],_=Object(a.useState)(5915),h=Object(m.a)(_,2),O=h[0],f=h[1],p=Object(a.useState)(),x=Object(m.a)(p,2),g=x[0],N=x[1],k=Object(a.useState)(""),S=Object(m.a)(k,2),y=S[0],w=S[1],z=Object(a.useState)(!1),M=Object(m.a)(z,2),E=M[0],R=M[1],A=Object(a.useState)(""),C=Object(m.a)(A,2),I=C[0],B=C[1],P=Object(a.useState)(""),U=Object(m.a)(P,2),q=U[0],W=U[1],D=Object(a.useState)(""),L=Object(m.a)(D,2),T=L[0],$=L[1],F=Object(a.useState)(""),G=Object(m.a)(F,2),H=G[0],J=G[1],Q=Object(a.useState)([]),Y=Object(m.a)(Q,2),K=Y[0],V=Y[1],X=[77338,6977,641,13223,603,5915,244786,14160,2062,228150,242582,157336,14161,502033,3131,7345,141,117691,126400,550,284054,286217,627,275,115,14,73,680,629,807,769,101,273248,1124,278,107,334533,2675,155,466272,98,4538,120467,2501,4982,1359,10191,615643,556984,503919,475557,496243,640,27205,601666,424,16869,16869,82693,82693,425,9297,920,359724,245891,324552],Z="https://api.themoviedb.org/3/search/movie?api_key=".concat("bd9ec1b8a04bf19e288d6ec57a80cb51","&query=").concat(y),ee="https://api.themoviedb.org/3/configuration?api_key=".concat("bd9ec1b8a04bf19e288d6ec57a80cb51","&query=").concat(y),te=[],ce=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(t),e.prev=1,i(!0),e.next=5,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("bd9ec1b8a04bf19e288d6ec57a80cb51","&language=en-US"));case 5:return c=e.sent,e.next=8,c.json();case 8:(a=e.sent)?(Object.entries(a.genres).forEach((function(e){te.push(e[1].name)})),V(te),f(a)):console.log("error"),i(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,fetch(Z);case 4:return t=e.sent,e.next=7,t.json();case 7:(c=e.sent).results.length<1?(console.log("No results found!"),i(!1),v([])):(v(c.results.filter((function(e){return null!==e.poster_path}))),i(!1)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(ee);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,B(c.images.secure_base_url),J(c.images.backdrop_sizes[3]),W(c.images.poster_sizes[4]),$(c.images.poster_sizes[2]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){ne()}),[]),Object(a.useEffect)((function(){y.length>0&&ae(Z)}),[y]),Object(a.useEffect)((function(){ce(X[Math.trunc(Math.random()*(X.length-1))])}),[]);return Object(b.jsx)(u.Provider,{value:{API_SEARCH_ENDPOINT:Z,loading:s,setLoading:i,movies:d,setMovies:v,movieID:g,handleSearch:function(e){e.preventDefault()},secureBaseUrl:I,backdropSizeOriginal:H,posterSizeW500:q,posterSizeW185:T,query:y,setQuery:w,searchState:E,setSearchState:R,heroMovie:O,heroGenre:K},children:t})},v=function(){return Object(a.useContext)(u)},_=c(6),h=function(){var e=v(),t=e.searchState,c=e.setSearchState,a=e.handleSearch,n=e.setQuery,s=e.query,i=e.setLoading,o=e.setMovies;return Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{className:"navbar__container",children:[Object(b.jsx)(_.b,{to:"/cinebucket",children:Object(b.jsxs)("div",{className:"nav__logo--container",onClick:function(){c(!1)},children:[Object(b.jsx)("p",{className:"logo",children:"CineBucket"}),Object(b.jsx)("p",{className:"logo__subtitle",children:"Explore Cinema"})]})}),Object(b.jsxs)("form",{className:"nav__search--form",onSubmit:a,children:[Object(b.jsx)(_.b,{to:"/cinebucket/",children:Object(b.jsx)("input",{autoComplete:"off",type:"text",name:"query",placeholder:"Enter Movie Name",value:s,onChange:function(e){return function(e){n(e.currentTarget.value)}(e)},className:t?"nav__search--input active":"nav__search--input"})}),Object(b.jsx)(r.a,{className:"nav__search--icon",onClick:function(){c(!t),i(!0),o([]),n("")}})]})]})})},O=(c(20),function(){var e=v().query;return Object(b.jsx)("div",{className:"loading__container",children:""===e?Object(b.jsx)("p",{className:"loading__message",children:"Search for a movie"}):Object(b.jsx)("p",{className:"loading__message",children:"Loading..."})})}),f=(c(21),function(){return Object(b.jsxs)("div",{className:"loading__container",children:[Object(b.jsx)("p",{className:"loading__message",children:"Is this a movie? Does this even sound like a movie?"}),Object(b.jsx)("p",{className:"loading__message--subtitle",children:"You better check yourself before you wreck yourself buddy."}),Object(b.jsx)("p",{className:"loading__message--subtitle--2",children:"(Or we don't have this movie in our database. Highly unlikely cause we've got all sorts of weird stuff.)"})]})}),p=function(){var e=v(),t=e.movies,c=e.loading,a=e.secureBaseUrl,n=e.posterSizeW185;return c?Object(b.jsx)(O,{}):t.length<1?Object(b.jsx)(f,{}):Object(b.jsx)("section",{className:"movies__container",children:t.map((function(e){var t=e.title,c=e.id;return Object(b.jsx)(_.b,{to:"/cinebucket/".concat(c),className:"movie__container--link",children:Object(b.jsxs)("div",{className:"search__movie--container",children:[Object(b.jsx)("img",{src:"".concat(a).concat(n).concat(e.poster_path),alt:"".concat(e.original_title," Movie Poster"),className:"search__movie--image"}),Object(b.jsx)("p",{className:"search__movie--title",children:t})]})},c)}))})},x=(c(22),function(){var e=v(),t=e.searchState,c=e.heroMovie,a=e.secureBaseUrl,n=e.posterSizeW500,s=e.backdropSizeOriginal,i=e.heroGenre,r=c.backdrop_path,o=c.budget,l=c.overview,j=c.release_date,m=c.revenue,u=c.runtime,d=c.tagline,_=c.vote_average,h=c.title,O=c.poster_path;if(t)return Object(b.jsx)(p,{});var f=Intl.NumberFormat("en-US");return Object(b.jsx)("div",{className:"home__container",style:{backgroundImage:"url(".concat(a).concat(s).concat(r,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(b.jsxs)("div",{className:"hero__movie--container",children:[Object(b.jsx)("div",{className:"hero__movie--image--container",children:Object(b.jsx)("img",{className:"hero__movie--image",src:"".concat(a).concat(n).concat(O),alt:"".concat(h," Movie Poster")})}),Object(b.jsxs)("div",{className:"hero__movie--info",children:[Object(b.jsxs)("div",{className:"hero__movie--info--top",children:[Object(b.jsx)("p",{className:"movie__title",children:h}),Object(b.jsx)("p",{className:"movie__tagline",children:d}),Object(b.jsx)("p",{className:"movie__overview",children:l}),Object(b.jsx)("p",{className:"movie__genres",children:i.join(" . ")})]}),Object(b.jsxs)("div",{className:"movie__facts--container",children:[Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Total Budget"}),Object(b.jsx)("p",{className:"movie__fact--info",children:"0"===f.format(o)?"N/A":"$ ".concat(f.format(o))})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Revenue"}),Object(b.jsx)("p",{className:"movie__fact--info",children:"0"===f.format(m)?"N/A":"$ ".concat(f.format(m))})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Released On"}),Object(b.jsx)("p",{className:"movie__fact--info",children:j})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Runtime"}),Object(b.jsxs)("p",{className:"movie__fact--info",children:[u," Minutes"]})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Average Rating"}),Object(b.jsx)("p",{className:"movie__fact--info",children:0===_?"N/A":_})]})]})]})]})})}),g=c(2),N=function(){var e=v(),t=e.secureBaseUrl,c=e.backdropSizeOriginal,n=e.posterSizeW500,s=Object(g.g)().id,i=Object(a.useState)([]),r=Object(m.a)(i,2),o=r[0],u=r[1],d=Object(a.useState)(!1),_=Object(m.a)(d,2),h=_[0],O=_[1],f=Object(a.useState)([]),p=Object(m.a)(f,2),x=p[0],N=p[1],k="https://api.themoviedb.org/3/movie/".concat(s,"?api_key=").concat("bd9ec1b8a04bf19e288d6ec57a80cb51","&language=en-US"),S=[],y=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,fetch(k);case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,Object.entries(c.genres).forEach((function(e){S.push(e[1].name)})),N(S),u(c),O(!1),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){y()}),[]),h)return"Loading";var w=Intl.NumberFormat("en-US");return Object(b.jsx)("div",{className:"home__container",style:{backgroundImage:"url(".concat(t).concat(c).concat(o.backdrop_path,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(b.jsxs)("div",{className:"hero__movie--container",children:[Object(b.jsx)("div",{className:"hero__movie--image--container",children:Object(b.jsx)("img",{className:"hero__movie--image",src:"".concat(t).concat(n).concat(o.poster_path),alt:"".concat(o.title," Movie Poster")})}),Object(b.jsxs)("div",{className:"hero__movie--info",children:[Object(b.jsxs)("div",{className:"her__movie--info--top",children:[Object(b.jsx)("p",{className:"movie__title",children:o.title}),Object(b.jsx)("p",{className:"movie__tagline",children:o.tagline}),Object(b.jsx)("p",{className:"movie__overview",children:o.overview}),Object(b.jsx)("p",{className:"movie__genres",children:x.join(" . ")})]}),Object(b.jsxs)("div",{className:"movie__facts--container",children:[Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Total Budget"}),Object(b.jsx)("p",{className:"movie__fact--info",children:"0"===w.format(o.budget)?"N/A":"$ ".concat(w.format(o.budget))})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Revenue"}),Object(b.jsx)("p",{className:"movie__fact--info",children:"0"===w.format(o.revenue)?"N/A":"$ ".concat(w.format(o.revenue))})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Released On"}),Object(b.jsx)("p",{className:"movie__fact--info",children:o.release_date})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsx)("p",{className:"movie__fact--title",children:"Runtime"}),Object(b.jsxs)("p",{className:"movie__fact--info",children:[o.runtime," Minutes"]})]}),Object(b.jsxs)("div",{className:"movie__fact--container",children:[Object(b.jsxs)("p",{className:"movie__fact--title",children:["Average Rating",Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"(as per themoviedb.org)"})]}),Object(b.jsx)("p",{className:"movie__fact--info",children:"0"===o.vote_average?"N/A":o.vote_average})]})]})]})]})})};var k=function(){return Object(b.jsxs)(_.a,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"app__container--main",children:Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/cinebucket/",element:Object(b.jsx)(x,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/cinebucket/:id",element:Object(b.jsx)(N,{})})]})})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(d,{children:Object(b.jsx)(k,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.282b0975.chunk.js.map