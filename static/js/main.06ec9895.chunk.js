(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{10:function(e,t,a){e.exports={item:"GameItem_item__308e1",link:"GameItem_link__1zySm",img:"GameItem_img__2Vdeh",plus:"GameItem_plus__1aiLV",wrapper:"GameItem_wrapper__9GFVa",title:"GameItem_title__3URKC",short:"GameItem_short__1-T4C",box:"GameItem_box__1Do_2",genre:"GameItem_genre__10Nct",platform:"GameItem_platform__1dQ1I"}},15:function(e,t,a){e.exports={span:"FilterPopup_span__3TrAe",wrapper:"FilterPopup_wrapper__1SmYY",list:"FilterPopup_list__3wTgx",item:"FilterPopup_item__Vdqfn"}},17:function(e,t,a){e.exports={header:"Header_header__2_jOj",wrapper:"Header_wrapper__3dEto",logo:"Header_logo__1SqfQ",favorite_page:"Header_favorite_page__12EfF"}},23:function(e,t,a){e.exports={wrapper:"AdditInfo_wrapper__1I0QK",title:"AdditInfo_title__WOkAH",text:"AdditInfo_text__3J984"}},24:function(e,t,a){e.exports={list:"GameList_list__3kIvi",title:"GameList_title__3xvZ8"}},27:function(e,t,a){e.exports={list:"FavoritePage_list__24nYu",title:"FavoritePage_title__1grKl"}},3:function(e,t,a){e.exports={wrapper:"GamePage_wrapper__3Cgsj",title:"GamePage_title__1YjrS",description:"GamePage_description__3MgMb",sub_title:"GamePage_sub_title__3RxrW",box:"GamePage_box__3W-zi",img_wrapper:"GamePage_img_wrapper__nfITS",img:"GamePage_img__3GYGG",info:"GamePage_info__3YAVs",thumbnail:"GamePage_thumbnail___shzk",favorite:"GamePage_favorite__1YNI8",favirote_remove:"GamePage_favirote_remove__BFZFs",favorite_add:"GamePage_favorite_add__D-06t"}},39:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n,r=a(1),i=a(20),s=a.n(i),c=(a(45),a(8)),l=a(40),o=a(7);!function(e){e.ADD_FAVORITE="ADD_FAVORITE",e.REMOVE_FAVORITE="REMOVE_FAVORITE"}(n||(n={}));var m,p={favoriteGames:[]};!function(e){e.SET_PLATFORM="SET_PLATFORM",e.SET_GENRE="SET_GENRE",e.SET_SORT_BY="SET_SORT_BY"}(m||(m={}));var j,d={genre:null,platform:null,sortBy:"Relevance"};!function(e){e.FETCH_GAMES="FETCH_GAMES",e.FETCH_GAMES_SUCCESS="FETCH_GAMES_SUCCESS",e.FETCH_GAMES_ERROR="FETCH_GAMES_ERROR"}(j||(j={}));var b,u={games:[],loading:!1,error:null},O=a(13);!function(e){e.FETCH_GAME="FETCH_GAME",e.FETCH_GAME_SUCCESS="FETCH_GAME_SUCCES",e.FETCH_GAMSE_ERROR="FETCH_GAMSE_ERROR"}(b||(b={}));var h={loading:!1,game:null,error:null},x=Object(O.combineReducers)({games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.FETCH_GAMES:return{loading:!0,error:null,games:[]};case j.FETCH_GAMES_SUCCESS:return{loading:!1,error:null,games:t.payload};case j.FETCH_GAMES_ERROR:return{loading:!1,error:t.payload,games:[]};default:return e}},gameReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.FETCH_GAME:return{loading:!0,error:null,game:null};case b.FETCH_GAME_SUCCESS:return{loading:!1,error:null,game:t.payload};case b.FETCH_GAMSE_ERROR:return{loading:!1,error:t.payload,game:null};default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_GENRE:return Object(o.a)(Object(o.a)({},e),{},{genre:t.payload});case m.SET_PLATFORM:return Object(o.a)(Object(o.a)({},e),{},{platform:t.payload});case m.SET_SORT_BY:return Object(o.a)(Object(o.a)({},e),{},{sortBy:t.payload});default:return e}},favorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_FAVORITE:return Object(o.a)(Object(o.a)({},e),{},{favoriteGames:[].concat(Object(l.a)(e.favoriteGames),[t.payload])});case n.REMOVE_FAVORITE:return Object(o.a)(Object(o.a)({},e),{},{favoriteGames:e.favoriteGames.filter((function(e){return e.id!==t.payload}))});default:return e}}}),f=a(37),y=a(38),g=Object(O.createStore)(x,Object(f.composeWithDevTools)(Object(O.applyMiddleware)(y.a))),E=a(11),v=a(2),_=a(9),A=a(15),G=a.n(A),R=a(0),N=function(e){var t=e.options,a=e.label,n=e.selectType,i=e.activePopup,s=Object(r.useState)(!1),c=Object(_.a)(s,2),l=c[0],o=c[1];return Object(R.jsx)("div",{className:G.a.wrapper,children:Object(R.jsxs)("div",{onClick:function(){o(!l)},children:[Object(R.jsxs)("span",{className:G.a.span,children:[a,": "]}),Object(R.jsx)("span",{className:G.a.span,children:null===i?"All ".concat(a):i}),l&&Object(R.jsx)("ul",{className:G.a.list,children:t.map((function(e){return Object(R.jsx)("li",{className:G.a.item,onClick:function(){return function(e){n(e),o(!1)}(e.type)},children:e.name},e.name)}))})]})})},w=c.c,S=a(17),M=a.n(S),T=[{type:null,name:"all genre"},{type:"mmorpg",name:"mmorpg"},{type:"shooter",name:"shooter"},{type:"strategy",name:"strategy"},{type:"moba",name:"moba"},{type:"racing",name:"racing"},{type:"sports",name:"sports"},{type:"social",name:"social"},{type:"sandbox",name:"sandbox"},{type:"open-world",name:"open-world"},{type:"survival",name:"survival"},{type:"pvp",name:"pvp"},{type:"pve",name:"pve"},{type:"pixel",name:"pixel"},{type:"voxel",name:"voxel"},{type:"zombie",name:"zombie"},{type:"turn-based",name:"turn-based"},{type:"first-person",name:"first-person"},{type:"third-Person",name:"third-Person"},{type:"top-down",name:"top-down"},{type:"tank",name:"tank"},{type:"space",name:"space"},{type:"sailing",name:"sailing"},{type:"side-scroller",name:"side-scroller"},{type:"superhero",name:"superhero"},{type:"permadeath",name:"permadeath"},{type:"card",name:"card"},{type:"battle-royale",name:"battle-royale"},{type:"mmo",name:"mmo"},{type:"mmofps",name:"mmofps"},{type:"mmotps",name:"mmotps"},{type:"3d",name:"3d"},{type:"2d",name:"2d"},{type:"anime",name:"anime"},{type:"fantasy",name:"fantasy"},{type:"sci-fi",name:"sci-fi"},{type:"fighting",name:"fighting"},{type:"action-rpg",name:"action-rpg"},{type:"action",name:"action"},{type:"military",name:"military"},{type:"martial-arts",name:"martial-arts"},{type:"flight",name:"flight"},{type:"low-spec",name:"low-spec"},{type:"tower-defense",name:"tower-defense"},{type:"horror",name:"horror"},{type:"mmorts",name:"mmorts"}],I=[{type:"Relevance",name:"Relevance"},{type:"Popularity",name:"Popularity"},{type:"Release Date",name:"Release Date"},{type:"Alphabetical",name:"Alphabetical"}],C=[{type:null,name:"All platfroms"},{type:"browser",name:"browser (web)"},{type:"pc",name:"windows (pc)"}],F=function(){var e=Object(c.b)(),t=w((function(e){return e.filter})),a=t.genre,n=t.platform,r=t.sortBy;return Object(R.jsx)("header",{className:M.a.header,children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:M.a.wrapper,children:[Object(R.jsx)(E.b,{to:"/",className:M.a.logo,children:Object(R.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAtCAYAAADPyKtvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEQjlBNEM5NjVDMDVFQTExQjZFOURBQjI4MkMyQjFDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTlFMTk0OEIxM0IxMUVBOUIyQTlGQTMyMEUwNDREMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NTlFMTk0N0IxM0IxMUVBOUIyQTlGQTMyMEUwNDREMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ZDJiZWFlZS02NTYzLTdjNDEtYjVlYy05NGUwYWEwZGU5MTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REI5QTRDOTY1QzA1RUExMUI2RTlEQUIyODJDMkIxQ0IiLz4gPC9yZGY6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",alt:""})}),Object(R.jsx)(N,{activePopup:n,selectType:function(t){e(function(e){return function(t){t({type:m.SET_PLATFORM,payload:e})}}(t))},options:C,label:"Platforms"}),Object(R.jsx)(N,{activePopup:a,selectType:function(t){e(function(e){return function(t){t({type:m.SET_GENRE,payload:e})}}(t))},options:T,label:"Genres"}),Object(R.jsx)(N,{activePopup:r,selectType:function(t){e(function(e){return function(t){t({type:m.SET_SORT_BY,payload:e})}}(t))},options:I,label:"Sort By"}),Object(R.jsx)(E.b,{className:M.a.favorite_page,to:"/favorite",children:Object(R.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABGUlEQVRoge2ZPU7DQBQGB5QjIES63C4noEQ8RBFFoicKXYqUXIO7UFBYVBFCFBjxo2zIrp/1Nd+UltfP4x3LhU+oJCKegFntuorrT2vOnzTMOAMuGtaNwqn6BoZiATUWUGMBNRZQYwE1FlBjATUWUGMBNRZQYwE1FlBjATUWUGMBNRZQY4EDdMAdMAeexxrS8o/sGDpgBSyBXT/nGjjPHjSWwBpYRsQLQERsgDfgnuRdzxbogHVEXP48GBGv/XGAWxJ3IvNpfGWzOHDOFrgh8Z3IFPiVzT76ndgAV8B7xtCMhPZmUyI7p6E7cEw2JVJyGirwbzYlsnJqTagqmxIZObUIdMAjnx+pLLZ8f+yqaEnogcZsSvzJqYoPgflPTl0TCw0AAAAASUVORK5CYII=",alt:""})})]})})})},Y=a(10),Z=a.n(Y),k=function(e){var t=e.game;return Object(R.jsx)("li",{className:Z.a.item,id:"".concat(t.id),children:Object(R.jsxs)(E.b,{className:Z.a.link,to:"/game/".concat(t.id),children:[Object(R.jsx)("img",{className:Z.a.img,src:t.thumbnail,alt:""}),Object(R.jsxs)("div",{className:Z.a.wrapper,children:[Object(R.jsx)("h3",{className:Z.a.title,children:t.title}),Object(R.jsx)("p",{className:Z.a.short,children:t.short_description}),Object(R.jsx)("div",{className:Z.a.box,children:Object(R.jsx)("p",{className:Z.a.genre,children:t.genre})}),Object(R.jsx)("p",{className:Z.a.platform,children:t.platform})]})]})},t.title)},U=a(27),B=a.n(U),Q=function(){var e=w((function(e){return e.favorite})).favoriteGames;console.log(e);var t=Object(v.f)();return Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("button",{className:"back-btn",onClick:function(){return t("/")},children:"back"}),Object(R.jsx)("ul",{className:B.a.list,children:e&&(e.length?e.map((function(e){return Object(R.jsx)(k,{game:e},e.title)})):Object(R.jsx)("h3",{className:B.a.title,children:"No favorite games"}))})]})},z=a(23),P=a.n(z),D=function(e){var t=e.title,a=e.label;return Object(R.jsxs)("div",{className:P.a.wrapper,children:[Object(R.jsx)("p",{className:P.a.title,children:t}),Object(R.jsx)("p",{className:P.a.text,children:a})]})},V=(a(53),function(){return Object(R.jsx)("div",{className:"spinner-wrapper",children:Object(R.jsx)("div",{className:"loadingio-spinner-double-ring-77e7mrdmxaf",children:Object(R.jsxs)("div",{className:"ldio-kre646e5sx",children:[Object(R.jsx)("div",{}),Object(R.jsx)("div",{}),Object(R.jsx)("div",{children:Object(R.jsx)("div",{})}),Object(R.jsx)("div",{children:Object(R.jsx)("div",{})})]})})})}),J=a(14),W=a.n(J),H=a(21),L="free-to-play-games-database.p.rapidapi.com",X="57feef3e0cmshca1438526093df0p1d367cjsn789be573643d",K=a(22),q=a.n(K),$=a(3),ee=a.n($),te=a.p+"static/media/favorite.82769289.svg",ae=a.p+"static/media/favorite-fill.bc162d09.svg",ne=function(){var e=Object(v.g)().id,t=Object(c.b)(),a=w((function(e){return e.gameReducer})),i=a.game,s=a.loading,l=a.error,o=w((function(e){return e.favorite})).favoriteGames,m=Object(r.useState)(!1),p=Object(_.a)(m,2),j=p[0],d=p[1],u=Number(e),O=Object(v.f)();Object(r.useEffect)((function(){t(function(e){return function(){var t=Object(H.a)(W.a.mark((function t(a){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:b.FETCH_GAME}),t.next=4,q.a.get("/game",{baseURL:"https://".concat(L,"/api"),headers:{"x-rapidapi-key":X,"x-rapidapi-host":L},params:{id:e}});case 4:n=t.sent,a({type:b.FETCH_GAME_SUCCESS,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:b.FETCH_GAMSE_ERROR,payload:"error fetch game"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e)),o&&(o.find((function(e){return u===e.id}))?d(!0):d(!1))}),[]);var h=function(e){t(function(e){return function(t){t({type:n.ADD_FAVORITE,payload:e})}}(e)),d(!0)},x=function(e){t(function(e){return function(t){t({type:n.REMOVE_FAVORITE,payload:e})}}(e)),d(!1)};return l?Object(R.jsx)("h3",{children:l}):s?Object(R.jsx)(V,{}):Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("button",{className:"back-btn",onClick:function(){return O("/")},children:"back"}),l?Object(R.jsx)("h3",{children:"errrr"}):i&&Object(R.jsxs)("div",{className:ee.a.wrapper,children:[Object(R.jsx)("img",{className:ee.a.thumbnail,src:i.thumbnail,alt:""}),Object(R.jsxs)("div",{className:ee.a.info,children:[Object(R.jsx)("h3",{className:ee.a.title,children:i.title}),Object(R.jsxs)("h4",{className:ee.a.sub_title,children:["About ",i.title]}),Object(R.jsx)("p",{className:ee.a.description,children:i.short_description}),Object(R.jsx)("h4",{className:ee.a.sub_title,children:"Additional Information"}),Object(R.jsxs)("div",{className:ee.a.box,children:[Object(R.jsx)(D,{title:"Title",label:i.title}),Object(R.jsx)(D,{title:"Developer",label:i.developer}),Object(R.jsx)(D,{title:"Publisher",label:i.publisher}),Object(R.jsx)(D,{title:"Release Date",label:i.release_date}),Object(R.jsx)(D,{title:"Genre",label:i.genre}),Object(R.jsx)(D,{title:"Platform",label:i.platform})]}),Object(R.jsxs)("h4",{className:ee.a.sub_title,children:[i.title," Screenshots"]}),Object(R.jsx)("div",{className:ee.a.img_wrapper,children:i.screenshots&&i.screenshots.map((function(e){return Object(R.jsx)("img",{className:ee.a.img,src:e.image,alt:""},e.id)}))}),Object(R.jsxs)("div",{children:[Object(R.jsx)("h4",{className:ee.a.sub_title,children:"Minimum System Requirements"}),i.minimum_system_requirements&&Object(R.jsxs)("div",{className:ee.a.box,children:[Object(R.jsx)(D,{title:"OS",label:i.minimum_system_requirements.os}),Object(R.jsx)(D,{title:"Processor",label:i.minimum_system_requirements.processor}),Object(R.jsx)(D,{title:"Memory",label:i.minimum_system_requirements.memory}),Object(R.jsx)(D,{title:"Graphics",label:i.minimum_system_requirements.graphics}),Object(R.jsx)(D,{title:"Storage",label:i.minimum_system_requirements.storage})]})]})]}),Object(R.jsx)("div",{className:ee.a.favorite,children:j?Object(R.jsx)("button",{className:ee.a.favirote_remove,onClick:function(){return x(i.id)},children:Object(R.jsx)("img",{src:ae,alt:""})}):Object(R.jsx)("button",{className:ee.a.favorite_add,onClick:function(){return h(i)},children:Object(R.jsx)("img",{src:te,alt:""})})})]}),Object(R.jsx)("div",{})]})},re=a(24),ie=a.n(re),se=function(){var e=Object(c.b)(),t=w((function(e){return e.games})),a=t.games,n=t.loading,i=w((function(e){return e.filter})),s=i.platform,l=i.genre,o=i.sortBy;return Object(r.useEffect)((function(){e(function(e,t,a){return function(){var n=Object(H.a)(W.a.mark((function n(r){var i;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:j.FETCH_GAMES}),n.next=4,q.a.get("/games",{baseURL:"https://".concat(L,"/api"),headers:{"x-rapidapi-key":X,"x-rapidapi-host":L},params:{platform:e,category:t,"sort-by":a}});case 4:i=n.sent,r({type:j.FETCH_GAMES_SUCCESS,payload:i.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r({type:j.FETCH_GAMES_ERROR,payload:"fetch games error"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(s,l,o))}),[s,l,o]),n?Object(R.jsx)(V,{}):Object(R.jsx)("div",{className:"container",children:Object(R.jsx)("div",{className:ie.a.wrapper,children:Object(R.jsx)("ul",{className:ie.a.list,children:a.length?a.map((function(e){return Object(R.jsx)(k,{game:e},e.title)})):Object(R.jsx)("h3",{className:ie.a.title,children:"No games found"})})})})},ce=a(39),le=a.n(ce),oe=function(){return Object(R.jsx)("div",{className:le.a.wrapper,children:Object(R.jsx)(se,{})})},me=function(){return Object(R.jsx)(E.a,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)(F,{}),Object(R.jsxs)(v.c,{children:[Object(R.jsx)(v.a,{path:"/",element:Object(R.jsx)(oe,{})}),Object(R.jsx)(v.a,{path:"/game/:id",element:Object(R.jsx)(ne,{})}),Object(R.jsx)(v.a,{path:"/favorite",element:Object(R.jsx)(Q,{})})]})]})})};s.a.render(Object(R.jsx)(c.a,{store:g,children:Object(R.jsx)(me,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.06ec9895.chunk.js.map