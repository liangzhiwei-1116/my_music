(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},s={app:0},a=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-152f3afa":"fe8d6d58","chunk-3086a503":"33b9756c","chunk-4216b72f":"826d6b7c","chunk-4af8baa9":"04517caa","chunk-643c5212":"0a5f879b","chunk-81583b30":"726f689e","chunk-8e92b876":"0e9dc08d"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-152f3afa":1,"chunk-3086a503":1,"chunk-4216b72f":1,"chunk-4af8baa9":1,"chunk-643c5212":1,"chunk-81583b30":1,"chunk-8e92b876":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-152f3afa":"b9ea7af5","chunk-3086a503":"cd5b1410","chunk-4216b72f":"8b3ee3c5","chunk-4af8baa9":"a1d91188","chunk-643c5212":"b6cbd5ce","chunk-81583b30":"d4ed6f6d","chunk-8e92b876":"9bef4903"}[t]+".css",s=c.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===i||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,n){i=s[t]=[e,n]}));e.push(i[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0210":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"g",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u}));n("4160"),n("e25e"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("498a"),n("159b");var i=function(t){var e=Math.floor(t/60%60);e=e>=10?e:"0"+e;var n=Math.floor(t%60);return n=n>=10?n:"0"+n,{min:e,second:n}},r=function(t){var e=t.split("\n"),n=/\[\d*:\d*\.\d*\]/g,i=/\[\d*/i,r=/\:\d*/i,s={};return e.forEach((function(t){var e=t.match(n);if(e){e=e[0];var a=e.match(i)[0].substr(1),o=e.match(r)[0].substr(1),c=60*parseInt(a)+parseInt(o),u=t.replace(n,"").trim();s[c]=u}})),s},s=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},a=function(t,e){window.sessionStorage.setItem(t,JSON.stringify(e))},o=function(t){return JSON.parse(window.sessionStorage.getItem(t))},c=function(){var t={officialList:[{name:"飙升榜",id:3},{name:"新歌榜",id:0},{name:"原创榜",id:2},{name:"热歌榜",id:1}],recList:[{name:"云音乐说唱榜",id:23},{name:"云音乐电音榜",id:25},{name:"云音乐国电榜",id:32},{name:"云音乐韩语榜",id:26},{name:"云音乐ACG榜",id:22},{name:"云音乐古典榜",id:24}],globalList:[{name:"美国Billboard榜",id:6},{name:"UK排行榜周榜",id:5},{name:"Beatport全球电子舞曲榜",id:21},{name:"日本Oricon榜",id:10},{name:"iTunes榜",id:8},{name:"中国新乡村音乐排行榜",id:29}],otherList:[{name:"KTV唛榜",id:7},{name:"法国 NRJ Vos Hits 周榜",id:19},{name:"云音乐欧美新歌榜",id:27},{name:"云音乐ACG动画榜",id:28},{name:"云音乐ACG游戏榜",id:30},{name:"云音乐ACG VOCALOID榜",id:31}],titles:{officialList:"官方榜",recList:"推荐榜",globalList:"全球榜",otherList:"更多榜单"}};return t},u={NOT_FOUND:0,CODE_ERROR:1,CODE_OK:2}},"0418":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",on:{click:function(e){return t.changeTheme()}}},[n("div",{staticClass:"left"},[t._t("left",[t._v("左")])],2),t._t("center",[t._v("中")]),n("div",{staticClass:"right"},[t._t("right",[t._v("右")])],2)],2)},r=[],s={name:"Header",data:function(){return{theme:["theme","theme1","theme2"],index:0}},methods:{changeTheme:function(){this.index++,this.index>=this.theme.length&&(this.index=0),document.documentElement.setAttribute("data-theme",this.theme[this.index])}}},a=s,o=(n("1ae4"),n("2877")),c=Object(o["a"])(a,i,r,!1,null,"4d47876b",null);e["a"]=c.exports},"07c0":function(t,e,n){},"1ae4":function(t,e,n){"use strict";n("e3dc")},"2ea5":function(t,e,n){},"365c":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return p})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return b})),n.d(e,"o",(function(){return y})),n.d(e,"n",(function(){return w})),n.d(e,"i",(function(){return L})),n.d(e,"j",(function(){return S}));n("4160"),n("b0c0"),n("d3b7"),n("159b");var i=n("2909"),r=n("ab10"),s=n("0210"),a=function(){return r["a"].get("/banner?type=2")},o=function(){return r["a"].get("/personalized?limit=6")},c=function(){return r["a"].get("/album/newest")},u=function(){return r["a"].get("/personalized/newsong")},l=function(t){return r["a"].get("/playlist/detail",t)},d=function(t){return r["a"].get("/album",t)},f=function(t){return r["a"].get("/song/detail",t)},h=function(t){return r["a"].get("/lyric",t)},p=function(t){return r["a"].get("/song/url",t)},m=function(){return new Promise((function(t,e){r["a"].get("/top/artists?offset=0&limit=5").then((function(e){t(e.artists)}))["catch"]((function(t){e(t)}))}))},g=function(t){return new Promise((function(e,n){var s=[];r["a"].all([r["a"].get("/artist/list?limit=5&type=1&area=7&initial=".concat(t)),r["a"].get("/artist/list?limit=5&type=2&area=7&initial=".concat(t))]).then((function(t){t.forEach((function(t){s.push.apply(s,Object(i["a"])(t.artists))})),e(s)}))["catch"]((function(t){console.log(t)}))}))},v=function(){return new Promise((function(t,e){for(var n=["热"],i=[m()],s=65;s<=90;s++){var a=String.fromCharCode(s);n.push(a),i.push(g(a))}r["a"].all(i).then((function(e){var i={};i.keys=n,i.list=e,t(i)}))["catch"]((function(t){console.log(t)}))}))},b=function(t){return r["a"].get("/artists",t)},y=function(){return new Promise((function(t,e){var n=Object(s["a"])();r["a"].get("/toplist/detail").then((function(e){e.list.forEach((function(t){var e=!1;for(var i in n){for(var r=0;r<n[i].length;r++)if(n[i][r].name===t.name){n[i][r].rank=t,e=!0;break}if(e)break}})),t(n)}))["catch"]((function(t){e(t)}))}))},w=function(t){return r["a"].get("/top/list",t)},L=function(t){return r["a"].get("/cloudsearch",t)},S=function(){return r["a"].get("/search/hot")}},"3e0d":function(t,e,n){},"522f":function(t,e,n){"use strict";n("f067")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loginState?t.registerState?n("div",[n("MainHeader"),n("Tabbar"),n("keep-alive",{attrs:{include:"Singer"}},[n("router-view")],1),n("player")],1):n("Register"):n("login")],1)},s=[],a=n("5530"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Header",{staticClass:"header"},[n("div",{staticClass:"header-left",attrs:{slot:"left"},slot:"left"}),n("p",{staticClass:"header-title",attrs:{slot:"center"},slot:"center"},[t._v("随身听音乐")]),n("div",{staticClass:"header-right",attrs:{slot:"right"},on:{click:function(e){return e.stopPropagation(),t.myAccount(e)}},slot:"right"})])},c=[],u=n("0418"),l={name:"MainHeader",components:{Header:u["a"]},methods:{myAccount:function(){this.$router.push("/account")}}},d=l,f=(n("93d3"),n("2877")),h=Object(f["a"])(d,o,c,!1,null,"69ad7c96",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("router-link",{staticClass:"item ",attrs:{tag:"div",to:"/recommend"}},[n("span",[t._v("推荐")])]),n("router-link",{staticClass:"item ",attrs:{tag:"div",to:"/singer"}},[n("span",[t._v("歌手")])]),n("router-link",{staticClass:"item ",attrs:{tag:"div",to:"/rank"}},[n("span",[t._v("排行")])]),n("router-link",{staticClass:"item ",attrs:{tag:"div",to:"/search"}},[n("span",[t._v("搜索")])])],1)},g=[],v={name:"Tabbar"},b=v,y=(n("94da"),Object(f["a"])(b,m,g,!1,null,"47a46570",null)),w=y.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("normal-player",{attrs:{totalTime:t.totalTime,currentTime:t.currentTime}}),n("mini-player"),n("list-player"),n("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{timeupdate:t.timeupdate,ended:t.end}})],1)},S=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{css:!1},on:{enter:t.enter,leave:t.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.isFullScreen,expression:"this.isFullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"player-warpper"},[n("player-header"),n("player-middle",{attrs:{currentTime:t.currentTime}}),n("player-bottom",{attrs:{totalTime:t.totalTime,currentTime:t.currentTime}})],1),n("div",{staticClass:"player-bg"},[n("img",{attrs:{src:t.currentSong.picUrl,alt:""}})])])])},C=[],O=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-left",on:{click:t.hiddenSong}}),n("div",{staticClass:"header-title"},[n("h3",[t._v(t._s(this.currentSong.name))]),n("p",[t._v(t._s(this.currentSong.singer))])]),n("div",{staticClass:"header-right"})])}),_=[],j=n("2f62"),k={name:"PlayerHeader",computed:Object(a["a"])({},Object(j["c"])(["currentSong"])),methods:Object(a["a"])(Object(a["a"])({},Object(j["b"])(["setFullScreen","setMiniPlayer"])),{},{hiddenSong:function(){this.setFullScreen(!1),this.setMiniPlayer(!0)}})},x=k,T=(n("b018"),Object(f["a"])(x,O,_,!1,null,"13f38cff",null)),M=T.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-container swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide cd"},[n("div",{ref:"cdWarpper",staticClass:"cd-warpper"},[n("img",{attrs:{src:t.currentSong.picUrl,alt:""}})]),n("p",[t._v(t._s(this.getFirstLyric()))])]),n("div",{ref:"lyric",staticClass:"swiper-slide lyric"},[n("scroll-view",{ref:"scrollView"},[n("ul",t._l(this.currentLyric,(function(e,i){return n("li",{key:i,class:{active:t.currentLineNumber===i}},[t._v(" "+t._s(e)+" ")])})),0)])],1)]),n("div",{staticClass:"song-pagination swiper-pagination"})])},E=[],I=(n("4795"),n("ba15"),n("f4bd"),n("b619")),F=n("9b91"),N={name:"PlayerMiddle",components:{ScrollView:F["a"]},data:function(){return{currentLineNumber:"0"}},props:{currentTime:{type:Number,default:0,required:!0}},computed:Object(a["a"])({},Object(j["c"])(["isPlaying","currentSong","currentLyric"])),methods:{getSongBanners:function(){new I["a"](".song-container",{loop:!1,autoplay:!1,pagination:{el:".song-pagination",bulletClass:"my-bullet",bulletActiveClass:"my-bullet-active"},initialSlide:0,observer:!0,observeParents:!0,observeSlideChildren:!0})},getFirstLyric:function(){for(var t in this.currentLyric)return this.currentLyric[t]},getActiveLineNumber:function(t){if(t<0)return this.currentLineNumber;var e=this.currentLyric[t+""];return void 0===e||""===e?(t--,this.getActiveLineNumber(t)):t+""},updateLyric:function(){if(null!==document.querySelector("li.active")){var t=document.querySelector("li.active").offsetTop,e=this.$refs.lyric.offsetHeight;t>e/2?this.$refs.scrollView.scrollTo(0,e/2-t,100):this.$refs.scrollView.scrollTo(0,0,100)}}},mounted:function(){var t=this;setTimeout((function(){t.getSongBanners()}),0)},watch:{isPlaying:function(t,e){t?this.$refs.cdWarpper.classList.add("active"):this.$refs.cdWarpper.classList.remove("active")},currentTime:function(t,e){var n=this,i=Math.floor(t);this.currentLineNumber=this.getActiveLineNumber(i),setTimeout((function(){n.updateLyric()}),50)},currentLyric:function(t,e){for(var n in t)return void(this.currentLineNumber=t[n])}}},R=N,H=(n("e470"),n("96eb"),Object(f["a"])(R,$,E,!1,null,"438ac971",null)),A=H.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-bottom"},[n("div",{staticClass:"bottom-progress"},[n("span",{ref:"theCurrentTime"},[t._v("00:00")]),n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[n("div",{ref:"progressLine",staticClass:"progress-line"},[n("div",{staticClass:"progress-dot"})])]),n("span",{ref:"theTotalTime"},[t._v("00:00")])]),n("div",{staticClass:"bottom-control"},[n("div",{ref:"mode",staticClass:"mode loop",on:{click:function(e){return e.stopPropagation(),t.changeMode(e)}}}),n("div",{staticClass:"prev",on:{click:function(e){return e.stopPropagation(),t.prev(e)}}}),n("div",{ref:"play",staticClass:"play",on:{click:function(e){return e.stopPropagation(),t.play(e)}}}),n("div",{staticClass:"next",on:{click:function(e){return e.stopPropagation(),t.next(e)}}}),n("div",{staticClass:"favorite",class:{active:t.isFavorite(this.currentSong)},on:{click:function(e){return e.stopPropagation(),t.favorite(e)}}})])])},U=[],B=(n("7db0"),{loop:"0",one:"1",random:"2"}),V=n("0210"),q={name:"PlayerBottom",props:{totalTime:{type:Number,default:0,required:!0},currentTime:{type:Number,default:0,required:!0}},computed:Object(a["a"])({},Object(j["c"])(["isPlaying","playMode","currentIndex","currentSong","favoriteList"])),methods:Object(a["a"])(Object(a["a"])({},Object(j["b"])(["setPlaying","setPlayMode","changeCurrentIndex","changeCurTime","addFavoriteSong"])),{},{play:function(){this.setPlaying(!this.isPlaying)},changeMode:function(){this.playMode===B.loop?this.setPlayMode(B.one):this.playMode===B.one?this.setPlayMode(B.random):this.setPlayMode(B.loop)},prev:function(){this.changeCurrentIndex(this.currentIndex-1)},next:function(){this.changeCurrentIndex(this.currentIndex+1)},favorite:function(){this.addFavoriteSong(this.currentSong)},isFavorite:function(t){var e=this.favoriteList.find((function(e){return e.id===t.id}));return void 0!==e},progressClick:function(t){var e=this.$refs.progressBar.offsetLeft,n=t.pageX,i=n-e,r=this.$refs.progressBar.offsetWidth,s=i/r*100;this.$refs.progressLine.style.width=s+"%";var a=this.totalTime*s/100;this.changeCurTime(a)}}),watch:{isPlaying:function(t,e){t?this.$refs.play.classList.add("active"):this.$refs.play.classList.remove("active")},playMode:function(t,e){t===B.loop?(this.$refs.mode.classList.remove("random"),this.$refs.mode.classList.add("loop")):t===B.one?(this.$refs.mode.classList.remove("loop"),this.$refs.mode.classList.add("one")):(this.$refs.mode.classList.remove("one"),this.$refs.mode.classList.add("random"))},totalTime:function(t,e){var n=Object(V["b"])(t);this.$refs.theTotalTime.innerHTML=n.min+":"+n.second},currentTime:function(t,e){var n=Object(V["b"])(t);this.$refs.theCurrentTime.innerHTML=n.min+":"+n.second;var i=t/this.totalTime*100;this.$refs.progressLine.style.width=i+"%"}}},W=q,K=(n("90c7"),Object(f["a"])(W,D,U,!1,null,"0e8c8f9e",null)),J=K.exports,z=n("589d"),G=n.n(z),X=(n("2d7c"),{name:"NormalPlayer",components:{PlayerHeader:M,PlayerMiddle:A,PlayerBottom:J},props:{totalTime:{type:Number,default:0,required:!0},currentTime:{type:Number,default:0,required:!0}},computed:Object(a["a"])({},Object(j["c"])(["isFullScreen","currentSong"])),methods:Object(a["a"])({enter:function(t,e){G()(t,"transition.shrinkIn",{duration:500},(function(){e()}))},leave:function(t,e){G()(t,"transition.shrinkOut",{duration:500},(function(){e()}))}},Object(j["b"])(["getSongsLyric"])),watch:{currentSong:function(t,e){""!==t.id&&this.getSongsLyric(t.id)}}}),Y=X,Q=(n("c66d"),Object(f["a"])(Y,P,C,!1,null,"7a3a90d5",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{css:!1},on:{enter:t.enter,leave:t.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowMini,expression:"this.isShowMini"}],staticClass:"mini-player"},[n("div",{staticClass:"player-warpper"},[n("div",{staticClass:"player-left",on:{click:t.playSong}},[n("img",{ref:"cdImg",attrs:{src:t.currentSong.picUrl,alt:""}}),n("div",{staticClass:"player-title"},[n("h3",[t._v(t._s(this.currentSong.name))]),n("p",[t._v(t._s(this.currentSong.singer))])])]),n("div",{staticClass:"player-right"},[n("div",{ref:"play",staticClass:"play",on:{click:t.play}}),n("div",{staticClass:"list",on:{click:function(e){return e.stopPropagation(),t.showList(e)}}})])])])])},et=[],nt={name:"MiniPlayer",computed:Object(a["a"])({},Object(j["c"])(["isShowMini","isPlaying","isShowList","currentSong"])),methods:Object(a["a"])(Object(a["a"])({},Object(j["b"])(["setFullScreen","setMiniPlayer","setPlaying","setListPlayer"])),{},{playSong:function(){this.setFullScreen(!0),this.setMiniPlayer(!1)},showList:function(){this.setListPlayer(!0)},enter:function(t,e){G()(t,"transition.bounceUpIn",{duration:500},(function(){e()}))},leave:function(t,e){G()(t,"transition.bounceDownOut",{duration:500},(function(){e()}))},play:function(){this.setPlaying(!this.isPlaying)}}),watch:{isPlaying:function(t,e){t?(this.$refs.play.classList.add("active"),this.$refs.cdImg.classList.add("active")):(this.$refs.play.classList.remove("active"),this.$refs.cdImg.classList.remove("active"))}}},it=nt,rt=(n("f569"),Object(f["a"])(it,tt,et,!1,null,"d4a42718",null)),st=rt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{css:!1},on:{enter:t.enter,leave:t.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowList,expression:"this.isShowList"}],staticClass:"list-player"},[n("div",{staticClass:"player-warpper"},[n("div",{staticClass:"player-top"},[n("div",{staticClass:"top-left"},[n("div",{ref:"mode",staticClass:"mode loop",on:{click:function(e){return e.stopPropagation(),t.changeMode(e)}}}),n("p",[t._v("顺序播放")])]),n("div",{staticClass:"top-right"},[n("div",{staticClass:"del",on:{click:function(e){return e.stopPropagation(),t.delAll(e)}}})])]),n("div",{staticClass:"player-middle"},[n("scroll-view",{ref:"scrollView"},[n("ul",{ref:"play"},t._l(t.songs,(function(e,i){return n("li",{key:e.id,staticClass:"item",on:{click:function(e){return t.selectMusic(i)}}},[n("div",{staticClass:"item-left"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===i,expression:"currentIndex === index"}],staticClass:"item-play",on:{click:function(e){return e.stopPropagation(),t.play(e)}}}),n("p",[t._v(t._s(e.name))])]),n("div",{staticClass:"item-right"},[n("div",{staticClass:"item-favorite",class:{active:t.isFavorite(e)},on:{click:function(n){return n.stopPropagation(),t.favorite(e)}}}),n("div",{staticClass:"item-close",on:{click:function(e){return e.stopPropagation(),t.del(i)}}})])])})),0)])],1),n("div",{staticClass:"player-bottom"},[n("p",{on:{click:t.closeListPlayer}},[t._v("关闭")])])])])])},ot=[],ct={name:"ListPlayer",components:{ScrollView:F["a"]},computed:Object(a["a"])({},Object(j["c"])(["isPlaying","playMode","isShowList","songs","currentIndex","favoriteList"])),methods:Object(a["a"])(Object(a["a"])({},Object(j["b"])(["setPlaying","setPlayMode","setListPlayer","delSongs","changeCurrentIndex","addFavoriteSong"])),{},{closeListPlayer:function(){this.setListPlayer(!1)},enter:function(t,e){G()(t,"transition.slideUpIn",{duration:300},(function(){e()}))},leave:function(t,e){G()(t,"transition.slideDownOut",{duration:300},(function(){e()}))},play:function(){this.setPlaying(!this.isPlaying)},changeMode:function(){this.playMode===B.loop?this.setPlayMode(B.one):this.playMode===B.one?this.setPlayMode(B.random):this.setPlayMode(B.loop)},del:function(t){this.delSongs(t)},delAll:function(){this.delSongs()},selectMusic:function(t){this.changeCurrentIndex(t)},favorite:function(t){this.addFavoriteSong(t)},isFavorite:function(t){var e=this.favoriteList.find((function(e){return e.id===t.id}));return void 0!==e}}),watch:{isPlaying:function(t,e){t?this.$refs.play.classList.add("active"):this.$refs.play.classList.remove("active")},playMode:function(t,e){t===B.loop?(this.$refs.mode.classList.remove("random"),this.$refs.mode.classList.add("loop")):t===B.one?(this.$refs.mode.classList.remove("loop"),this.$refs.mode.classList.add("one")):(this.$refs.mode.classList.remove("one"),this.$refs.mode.classList.add("random"))},isShowList:function(t,e){t&&this.$refs.scrollView.refresh()}}},ut=ct,lt=(n("ec16"),Object(f["a"])(ut,at,ot,!1,null,"b4112060",null)),dt=lt.exports,ft={name:"Player",components:{NormalPlayer:Z,MiniPlayer:st,ListPlayer:dt},computed:Object(a["a"])({},Object(j["c"])(["currentSong","isPlaying","currentIndex","curTime","playMode","songs","favoriteList","historyList"])),data:function(){return{totalTime:0,currentTime:0}},created:function(){var t=Object(V["d"])("favoriteList");if(null!==t){this.reFavoriteList(t);var e=Object(V["d"])("historyList");null!==e&&this.reHistoryList(e)}},mounted:function(){var t=this;this.$refs.audio.ondurationchange=function(){t.totalTime=t.$refs.audio.duration}},methods:Object(a["a"])(Object(a["a"])({},Object(j["b"])(["changeCurrentIndex","reFavoriteList","addHistorySong","reHistoryList"])),{},{timeupdate:function(t){this.currentTime=t.target.currentTime},end:function(){if(this.playMode===B.loop)this.changeCurrentIndex(this.currentIndex+1);else if(this.playMode===B.one)this.$refs.audio.play();else{var t=Object(V["c"])(0,this.songs.length-1);this.changeCurrentIndex(t)}}}),watch:{isPlaying:function(t,e){t?(this.addHistorySong(this.currentSong),this.$refs.audio.play()):this.$refs.audio.pause()},currentIndex:function(){var t=this;this.$refs.audio.ondurationchange=function(){t.totalTime=t.$refs.audio.duration,t.isPlaying?(t.addHistorySong(t.currentSong),t.$refs.audio.play()):t.$refs.audio.pause()}},curTime:function(t,e){this.$refs.audio.currentTime=t},favoriteList:function(t,e){Object(V["g"])("favoriteList",t)},historyList:function(t,e){Object(V["g"])("historyList",t)}}},ht=ft,pt=Object(f["a"])(ht,L,S,!1,null,"4759ea57",null),mt=pt.exports,gt=n("a55b"),vt=n("73cf"),bt={name:"App",components:{MainHeader:p,Tabbar:w,Player:mt,Login:gt["default"],Register:vt["default"]},computed:Object(a["a"])({},Object(j["c"])(["loginState","registerState"])),methods:Object(a["a"])({},Object(j["b"])(["changeLoginState"])),watch:{$route:function(t,e){"/login"===t.path&&this.changeLoginState(!1)}}},yt=bt,wt=(n("5c0b"),Object(f["a"])(yt,r,s,!1,null,null,null)),Lt=wt.exports,St=(n("d3b7"),n("8c4f"));i["a"].use(St["a"]);var Pt=[{path:"/",redirect:"/login",component:function(){return Promise.resolve().then(n.bind(null,"a55b"))}},{path:"/register",component:function(){return Promise.resolve().then(n.bind(null,"73cf"))}},{path:"/recommend",component:function(){return n.e("chunk-643c5212").then(n.bind(null,"4802"))},children:[{path:"detail/:id/:type",component:function(){return n.e("chunk-4216b72f").then(n.bind(null,"c84b"))}}]},{path:"/singer",component:function(){return n.e("chunk-8e92b876").then(n.bind(null,"7f43"))},children:[{path:"detail/:id/:type",component:function(){return n.e("chunk-4216b72f").then(n.bind(null,"c84b"))}}]},{path:"/rank",component:function(){return n.e("chunk-81583b30").then(n.bind(null,"789b"))},children:[{path:"detail/:id/:type",component:function(){return n.e("chunk-4216b72f").then(n.bind(null,"c84b"))}}]},{path:"/search",component:function(){return n.e("chunk-152f3afa").then(n.bind(null,"2d3b"))}},{path:"/account",component:function(){return n.e("chunk-3086a503").then(n.bind(null,"77be"))}},{path:"/setting",component:function(){return n.e("chunk-4af8baa9").then(n.bind(null,"4ef5"))}}],Ct=new St["a"]({mode:"hash",base:"",routes:Pt}),Ot=Ct,_t={isFullScreen:!1,isShowMini:!1,isShowList:!1,isPlaying:!1,playMode:B.loop,songs:[],currentSong:{},currentIndex:0,currentLyric:{},curTime:0,favoriteList:[],historyList:[],loginState:!1,registerState:!1},jt=(n("a434"),{changeFullScreen:function(t,e){t.isFullScreen=e},changeMiniPlayer:function(t,e){t.isShowMini=e},changeListPlayer:function(t,e){t.isShowList=e},changePlaying:function(t,e){t.isPlaying=e},changePlayMode:function(t,e){t.playMode=e},getSongsDetail:function(t,e){t.songs=e},getSongsLyric:function(t,e){t.currentLyric=e},delSongs:function(t,e){void 0!==e?t.songs.splice(e,1):t.songs=[],e<t.currentIndex&&t.currentIndex--,0===t.songs.length&&(t.isFullScreen=!1,t.isShowMini=!1,t.isShowList=!1)},changeCurrentIndex:function(t,e){e<0?e=t.songs.length-1:e>t.songs.length-1&&(e=0),t.currentIndex=e},setCurTime:function(t,e){t.curTime=e},addFavoriteSong:function(t,e){var n=t.favoriteList.find((function(t){return t.id===e.id}));void 0===n&&t.favoriteList.push(e)},reFavoriteList:function(t,e){t.favoriteList=e},addHistorySong:function(t,e){var n=t.historyList.find((function(t){return t.id===e.id}));void 0===n&&(t.historyList.length>30&&t.historyList.shift(),t.historyList.push(e))},reHistoryList:function(t,e){t.historyList=e},changeLoginState:function(t,e){t.loginState=e},changeRegisterState:function(t,e){t.registerState=e}}),kt=(n("4160"),n("a15b"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),xt=n("365c"),Tt={setFullScreen:function(t,e){var n=t.commit;n("changeFullScreen",e)},setMiniPlayer:function(t,e){var n=t.commit;n("changeMiniPlayer",e)},setListPlayer:function(t,e){var n=t.commit;n("changeListPlayer",e)},setPlaying:function(t,e){var n=t.commit;n("changePlaying",e)},setPlayMode:function(t,e){var n=t.commit;n("changePlayMode",e)},getSongsDetail:function(t,e){return Object(kt["a"])(regeneratorRuntime.mark((function n(){var i,r,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.commit,n.next=3,Object(xt["k"])({ids:e.join(",")});case 3:return r=n.sent,n.next=6,Object(xt["m"])({id:e.join(",")});case 6:s=n.sent,a=[],r.songs.forEach((function(t){for(var e={},n=0;n<s.data.length;n++){var i=s.data[n];if(t.id===i.id){e.url=i.url;break}}e.name=t.name,e.id=t.id,e.picUrl=t["al"].picUrl;var r="";t["ar"].forEach((function(t,e){0===e?r=t.name:r+="-"+t.name})),e.singer=r,a.push(e)})),i("getSongsDetail",a);case 10:case"end":return n.stop()}}),n)})))()},getSongsLyric:function(t,e){return Object(kt["a"])(regeneratorRuntime.mark((function n(){var i,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.commit,n.next=3,Object(xt["l"])({id:e});case 3:r=n.sent,s={},s=void 0===r.lrc?{0:"纯伴奏没有歌词"}:Object(V["e"])(r.lrc.lyric),i("getSongsLyric",s);case 7:case"end":return n.stop()}}),n)})))()},delSongs:function(t,e){var n=t.commit;n("delSongs",e)},changeCurrentIndex:function(t,e){var n=t.commit;n("changeCurrentIndex",e)},changeCurTime:function(t,e){var n=t.commit;n("setCurTime",e)},addFavoriteSong:function(t,e){var n=t.commit;n("addFavoriteSong",e)},reFavoriteList:function(t,e){var n=t.commit;n("reFavoriteList",e)},addHistorySong:function(t,e){var n=t.commit;n("addHistorySong",e)},reHistoryList:function(t,e){var n=t.commit;n("reHistoryList",e)},changeLoginState:function(t,e){var n=t.commit;n("changeLoginState",e)},changeRegisterState:function(t,e){var n=t.commit;n("changeRegisterState",e)}},Mt={isFullScreen:function(t){return t.isFullScreen},isShowMini:function(t){return t.isShowMini},isShowList:function(t){return t.isShowList},isPlaying:function(t){return t.isPlaying},playMode:function(t){return t.playMode},songs:function(t){return t.songs},currentSong:function(t){var e={id:"",name:"",singer:"",picUrl:null};return 0!==t.songs.length&&(e=t.songs[t.currentIndex]),e},currentLyric:function(t){return t.currentLyric},currentIndex:function(t){return t.currentIndex},curTime:function(t){return t.curTime},favoriteList:function(t){return t.favoriteList},historyList:function(t){return t.historyList},loginState:function(t){return t.loginState},registerState:function(t){return t.registerState}};i["a"].use(j["a"]);var $t=new j["a"].Store({state:_t,mutations:jt,actions:Tt,getters:Mt}),Et=n("fe3c"),It=n.n(Et),Ft=(n("2ea5"),n("caf9")),Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"container"},[n("div",{staticClass:"loading"}),n("p",{staticClass:"title"},[t._v(t._s(t.title))])])},Rt=[],Ht={name:"Loading",data:function(){return{title:"正在加载...",isShow:!1}}},At=Ht,Dt=(n("c35f"),Object(f["a"])(At,Nt,Rt,!1,null,"31d659ce",null)),Ut=Dt.exports,Bt={install:function(t,e){var n=t.extend(Ut),i=new n,r=document.createElement("div");document.body.appendChild(r),i.$mount(r),e&&null!==e.title&&void 0!==e.title&&(i.title=e.title),t.showLoading=function(){i.isShow=!0},t.hiddenLoading=function(){i.isShow=!1}}},Vt=n("2570"),qt=n.n(Vt),Wt=n("3a34"),Kt=n.n(Wt);i["a"].use(qt.a);var Jt=new Kt.a;i["a"].use(Jt),i["a"].use(Ft["a"],{loading:n("cfcf")}),i["a"].use(Bt,{title:"正在加载ing..."}),It.a.attach(document.body),i["a"].config.productionTip=!1,new i["a"]({router:Ot,store:$t,render:function(t){return t(Lt)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7226:function(t,e,n){"use strict";n("86a5")},"73cf":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("div",{staticClass:"heart"}),n("div",{staticClass:"box"},[n("h1",[t._v("Welcome to register zone")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"username",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("span",{staticClass:"prompt"},[t._v(t._s(t.firstPrompt))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pwd",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"prompt"},[t._v(t._s(t.secondPrompt))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rePassword,expression:"rePassword"}],staticClass:"pwd",attrs:{type:"password",placeholder:"rePassword"},domProps:{value:t.rePassword},on:{input:function(e){e.target.composing||(t.rePassword=e.target.value)}}}),n("span",{staticClass:"prompt"},[t._v(t._s(t.thirdPrompt))]),n("div",{staticClass:"buttonCollection"},[n("input",{staticClass:"submit",attrs:{type:"submit",value:"submit"},on:{click:t.submit}})])])])},r=[],s=n("5530"),a=n("ab10"),o=n("0210"),c=n("2f62"),u={name:"Register",metaInfo:function(){return{title:"注册",meta:[{name:"keyWords",content:"注册"},{name:"description",content:"这是注册页面"}]}},data:function(){return{username:"",password:"",rePassword:"",firstPrompt:"",secondPrompt:"",thirdPrompt:""}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["changeRegisterState"])),{},{submit:function(){var t=this;""===this.username?this.firstPrompt="请先输入您想注册的账号":""===this.password?this.secondPrompt="请先输入您的账号密码":""===this.rePassword?this.thirdPrompt="请先确认您的密码":this.password!==this.rePassword?(alert("两次密码输入不同，请重新设置"),this.password="",this.rePassword=""):a["a"].post("/users/show",{username:this.username}).then((function(e){e.code===o["f"].CODE_ERROR?(alert(e.msg),t.username="",t.password="",t.rePassword=""):a["a"].post("/users/register",{username:t.username,password:t.password}).then((function(e){e.code===o["f"].CODE_OK&&(alert(e.msg+"!  即将为您转到登录界面"),t.changeRegisterState(!0),t.$router.push("/login"))}))["catch"]((function(t){console.log(t)}))}))["catch"]((function(t){console.log(t)}))}}),watch:{username:function(t,e){""!==t&&(this.firstPrompt="")},password:function(t,e){""!==t&&(this.secondPrompt="")},rePassword:function(t,e){""!==t&&(this.thirdPrompt="")}}},l=u,d=(n("7226"),n("2877")),f=Object(d["a"])(l,i,r,!1,null,"0e22b275",null);e["default"]=f.exports},"757e":function(t,e,n){},"7cfe":function(t,e,n){},"7e2c":function(t,e,n){},"86a5":function(t,e,n){},"90c7":function(t,e,n){"use strict";n("757e")},"93d3":function(t,e,n){"use strict";n("93e3")},"93e3":function(t,e,n){},"94da":function(t,e,n){"use strict";n("decb")},"96eb":function(t,e,n){"use strict";n("ecf7")},"9b91":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",attrs:{id:"wrapper"}},[t._t("default")],2)},r=[],s=(n("4795"),n("54af")),a=n.n(s),o={name:"ScrollView",mounted:function(){var t=this;this.iscroll=new a.a(this.$refs.wrapper,{mouseWheel:!0,scrollbars:!1,probeType:3,scrollX:!1,scrollY:!0,disablePointer:!0,disableTouch:!1,disableMouse:!0,preventDefault:!1});var e=new MutationObserver((function(e,n){t.iscroll.refresh()})),n={childList:!0,subtree:!0,attributeFilter:["height","offsetHeight"]};e.observe(this.$refs.wrapper,n)},methods:{scrolling:function(t){this.iscroll.on("scroll",(function(){t(this.y)}))},refresh:function(){var t=this;setTimeout((function(){t.iscroll.refresh()}),50)},scrollTo:function(t,e,n){this.iscroll.scrollTo(t,e,n)}}},c=o,u=(n("522f"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,"d50134be",null);e["a"]=l.exports},"9c0c":function(t,e,n){},"9dc2":function(t,e,n){},a55b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"heart"}),n("div",{staticClass:"box"},[n("h1",[t._v("Welcome to music zone")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"username",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("span",{staticClass:"prompt"},[t._v(t._s(t.firstPrompt))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pwd",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"prompt"},[t._v(t._s(t.secondPrompt))]),n("div",{staticClass:"buttonCollection"},[n("input",{staticClass:"submit",attrs:{type:"submit",value:"submit"},on:{click:t.login}}),n("input",{staticClass:"register",attrs:{type:"submit",value:"register"},on:{click:t.register}})])])])},r=[],s=n("5530"),a=n("ab10"),o=n("0210"),c=n("2f62"),u={name:"login",metaInfo:function(){return{title:"登录",meta:[{name:"keyWords",content:"登录"},{name:"description",content:"这是登录页面"}]}},data:function(){return{username:Object(o["d"])("username"),password:Object(o["d"])("password"),firstPrompt:"",secondPrompt:""}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["changeLoginState","changeRegisterState"])),{},{login:function(){var t=this;""===this.username||null===this.username?this.firstPrompt="请先输入您的账号":""===this.password||null===this.password?this.secondPrompt="请先输入您的密码":""!==this.username&&""!==this.password&&a["a"].post("/users/login",{username:this.username,password:this.password}).then((function(e){e.code===o["f"].NOT_FOUND?(alert(e.msg),t.username="",t.password=""):e.code===o["f"].CODE_ERROR?(alert(e.msg),t.password=""):e.code===o["f"].CODE_OK&&(Object(o["g"])("username",t.username),Object(o["g"])("password",t.password),t.changeLoginState(!0),t.changeRegisterState(!0),t.$router.push("/recommend"))}))["catch"]((function(t){console.log(t)}))},register:function(){this.changeLoginState(!0),this.$router.push("/register")}}),watch:{username:function(t,e){""!==t&&(this.firstPrompt="")},password:function(t,e){""!==t&&(this.secondPrompt="")}}},l=u,d=(n("c985"),n("2877")),f=Object(d["a"])(l,i,r,!1,null,"bb56c16e",null);e["default"]=f.exports},ab10:function(t,e,n){"use strict";n("d3b7");var i=n("bc3a"),r=n.n(i),s=n("2b0e");r.a.defaults.withCredentials=!0,r.a.defaults.timeout=5e3;var a=r.a.create({baseURL:"http://192.168.31.217:4000/"}),o=r.a.create({baseURL:"http://192.168.31.217:3000/"}),c=0;o.interceptors.request.use((function(t){return c++,s["a"].showLoading(),t}),(function(t){return s["a"].hiddenLoading(),Promise.reject(t)})),o.interceptors.response.use((function(t){return c--,0===c&&s["a"].hiddenLoading(),t}),(function(t){return s["a"].hiddenLoading(),Promise.reject(t)})),e["a"]={get:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){o.get(t,{params:e}).then((function(t){n(t.data)}))["catch"]((function(t){i(t)}))}))},post:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){a.post(t,e).then((function(t){n(t.data)}))["catch"]((function(t){i(t)}))}))},all:function(t){return new Promise((function(e,n){r.a.all(t).then(r.a.spread((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];e(n)})))["catch"]((function(t){n(t)}))}))}}},b018:function(t,e,n){"use strict";n("3e0d")},b578:function(t,e,n){},c35f:function(t,e,n){"use strict";n("07c0")},c66d:function(t,e,n){"use strict";n("9dc2")},c985:function(t,e,n){"use strict";n("e44d")},cfcf:function(t,e,n){t.exports=n.p+"img/loading.0cd5c0b6.png"},decb:function(t,e,n){},e3dc:function(t,e,n){},e44d:function(t,e,n){},e470:function(t,e,n){"use strict";n("7cfe")},ec16:function(t,e,n){"use strict";n("7e2c")},ecf7:function(t,e,n){},f067:function(t,e,n){},f569:function(t,e,n){"use strict";n("b578")}});
//# sourceMappingURL=app.30141166.js.map