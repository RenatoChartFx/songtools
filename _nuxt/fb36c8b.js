(window.webpackJsonp=window.webpackJsonp||[]).push([[60,59],{630:function(e,t,n){var content=n(741);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("68a9d977",content,!0,{sourceMap:!1})},740:function(e,t,n){"use strict";n(630)},741:function(e,t,n){var o=n(27)(!1);o.push([e.i,".play-toggle[data-v-c2c70b04]{background:rgba(222,226,224,.5);border-radius:1000px;width:50%;max-width:64px;aspect-ratio:1/1;display:flex;flex-flow:column nowrap;align-items:center;align-content:center;justify-content:center;place-content:center;cursor:pointer}.play-toggle[data-v-c2c70b04]:hover{background-color:#2ec4b6}.play-toggle .icon[data-v-c2c70b04]{flex-grow:1;max-width:24px}",""]),e.exports=o},742:function(e,t){},768:function(e,t,n){var content=n(866);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("be422ccc",content,!0,{sourceMap:!1})},801:function(e,t,n){"use strict";n.r(t);var o={name:"SongCover",props:{song:{type:Object,default:function(){}}},data:function(){return{audioPlayer:void 0,isLoaded:!1,currentSeconds:0,progressPercentageValue:0}},computed:{isPlaying:{get:function(){return this.$store.getters["app/isSongPlaying"]},set:function(e){this.$store.dispatch("app/onSetIsSongPlaying",e)}},selectedSong:function(){return this.$store.getters["artist/selectedSong"]},playToggleIcon:function(){return this.isPlaying?["fas","pause"]:["fas","play"]},canPlay:function(){return!!this.song.PreviewUrl},defaultSong:function(){return this.song.PreviewUrl||null}},watch:{selectedSong:function(){this.isPlaying=!1}},mounted:function(){this.isPlaying=!1,this.audioPlayer=this.$refs.audiofile,this.audioPlayer&&(this.audioPlayer.addEventListener("pause",this.onUpdateToPause),this.audioPlayer.addEventListener("play",this.onUpdateToPlay))},beforeDestroy:function(){this.audioPlayer=this.$refs.audiofile,this.audioPlayer&&(this.audioPlayer.removeEventListener("pause",this.onUpdateToPause),this.audioPlayer.removeEventListener("play",this.onUpdateToPlay)),this.audioPlayer=null},created:function(){var e=this;this.$nuxt.$on("onTogglePlay",(function(){e.song&&e.selectedSong&&e.song.TrackId==e.selectedSong.TrackId&&(e.canPlay?e.play():e.onOpenInSpotify())}))},methods:{onUpdateToPause:function(){this.isPlaying=!1},onUpdateToPlay:function(){this.isPlaying=!0},play:function(){this.audioPlayer&&(this.isPlaying?this.pause():(this.audioPlayer.play(),this.isPlaying=!0))},stop:function(){this.audioPlayer.currentTime=0},load:function(){console.log("loaded")},pause:function(){this.audioPlayer.pause(),this.isPlaying=!1},onOpenInSpotify:function(){window.open("https://open.spotify.com/track/"+this.song.TrackId)},updateTimer:function(){this.currentSeconds=parseInt(this.audioPlayer.currentTime),this.progressPercentageValue=(this.currentSeconds/parseInt(this.audioPlayer.duration)*100||0)+"%"},onToggleTrackPlay:function(){this.play()}}},r=(n(740),n(8)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"cover position-relative"},[t("img",{staticClass:"float-end song-cover ms-auto border border-4 shadow rounded border-light w-100",attrs:{src:e.song.Image,alt:e.song.Name?e.song.Name+" Cover":null}}),e._v(" "),e.canPlay?t("div",{staticClass:"play-toggle position-absolute top-50 start-50 translate-middle",on:{click:function(t){return t.stopPropagation(),e.onToggleTrackPlay()}}},[t("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:e.playToggleIcon}})],1):t("div",{staticClass:"play-toggle position-absolute top-50 start-50 translate-middle",on:{click:function(t){return t.stopPropagation(),e.onOpenInSpotify()}}},[t("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:["fab","spotify"]}})],1),e._v(" "),t("div",{staticClass:"bottom-0 start-0 end-0 position-absolute"},[t("div",{staticClass:"position-relative progress",staticStyle:{height:"4px"}},[t("div",{key:"progress"+e.progressPercentageValue,staticClass:"progress-bar bg-primary",style:"width:"+e.progressPercentageValue,attrs:{role:"progressbar","aria-valuenow":e.progressPercentageValue,"aria-valuemin":"0","aria-valuemax":"100"}})])]),e._v(" "),t("audio",{key:"track_"+e.song.TrackId||!1,ref:"audiofile",staticStyle:{display:"none"},attrs:{src:e.defaultSong,preload:"",controls:""},on:{timeupdate:e.updateTimer}})])}),[],!1,null,"c2c70b04",null);t.default=component.exports},865:function(e,t,n){"use strict";n(768)},866:function(e,t,n){var o=n(27)(!1);o.push([e.i,".genres-selector[data-v-cc444042]{z-index:10}.genres-selector .rounded-pill[data-v-cc444042]{cursor:pointer}.header-cover[data-v-cc444042]{align-self:center;min-height:100px;max-height:180px;height:36vh;transition:all .3s ease;max-width:100%;aspect-ratio:1/1}.header-cover[data-v-cc444042],.positioning[data-v-cc444042]{position:relative}.positioning .positioning-bg[data-v-cc444042]{transition:all .3s ease;transition:background .5s ease,background-position 5s ease-in-out;position:absolute;left:0;right:0;top:0;bottom:0;z-index:1;background-repeat:no-repeat!important;background-size:cover!important;filter:blur(5rem)}@media screen and (max-width:1200px){.positioning .positioning-bg[data-v-cc444042]{background-size:cover!important}}.positioning .positioning-content[data-v-cc444042]{position:relative;z-index:2}.positioning .positioning-content .icon[data-v-cc444042]{font-size:1.6rem;margin-bottom:.5rem;padding:.5rem;cursor:pointer;opacity:.72}.positioning .positioning-content .icon[data-v-cc444042]:hover{opacity:1}.positioning .positioning-content .nav-item a[data-v-cc444042]{text-decoration:none}",""]),e.exports=o},867:function(e,t,n){"use strict";var o=n(742),r=n.n(o);t.default=r.a},931:function(e,t,n){"use strict";n.r(t);n(41),n(32),n(55),n(23),n(56);var o=n(189),r=n(18),c=(n(87),n(11),n(303),n(48),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(47),n(31),n(188),n(34));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"SongHeader",data:function(){return{productImageCss:null,songGenres:[]}},computed:d(d({},Object(c.c)("artist",["selectedArtist"])),{},{mainGenres:{get:function(){return this.$store.getters["app/mainGenres"]},set:function(e){this.$store.dispatch("app/onSetMainGenres",e)}},selectedSong:{get:function(){return this.$store.getters["artist/selectedSong"]}},productHeaderStyle:function(){if(this.selectedSong){return"background:transparent url("+this.selectedSong.Image+");  background-repeat: no-repeat; background-position: center center; background-size: cover;"}return null}}),watch:{songGenres:function(){if(this.songGenres&&this.songGenres.length>0&&this.selectedSong&&(!this.selectedSong.Genres||this.selectedSong.Genres!=this.songGenres)){var e=d({},this.selectedSong);e.Genres=Object(o.a)(this.songGenres),this.$store.dispatch("artist/onSetSelectedSong",e)}},selectedSong:function(e,t){var n=this;e&&t&&e.TrackId==t.TrackId||(n.initializeGenreSelection(),n.productImageCss="transform: translateX(100%); opacity:0;",window.setTimeout((function(){n.productImageCss=" transform: translateX(0%); opacity:1;"}),50))},selectedArtist:function(){this.selectedArtist&&this.selectedArtist.Genres&&this.selectedArtist.Genres.length>0&&(this.songGenres=Object(o.a)(new Set(this.selectedArtist.Genres)))}},mounted:function(){this.initializeGenreSelection()},methods:{onOpenSongInSpotify:function(){this.selectedSong&&this.selectedSong.TrackId&&window.open("https://open.spotify.com/track/"+this.selectedSong.TrackId)},isGenreSelected:function(e){return this.songGenres.filter((function(t){return t===e})).length>0},initializeGenreSelection:function(){this.selectedSong&&this.selectedSong.Genres&&this.selectedSong.Genres.length>0?this.songGenres=Object(o.a)(this.selectedSong.Genres):this.selectedArtist&&this.selectedArtist.Genres.length>0?this.songGenres=Object(o.a)(new Set(this.selectedArtist.Genres)):this.songGenres="Other"},toggleGenreSelection:function(e){console.log("toggle?");var t=this.songGenres;if(t.filter((function(t){return t===e})).length>0?t.length>1&&t.splice(t.indexOf(e),1):t.length<3&&t.push(e),this.selectedSong){console.warn("updating");var n=d({},this.selectedSong);n.Genres=Object(o.a)(this.songGenres),this.$api.artist.updateSongGenres(n)}else console.warn("no selectedSong")}}},f=(n(865),n(8)),y=n(867),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"px-5 py-0 ml-0 positioning relative bg-dark d-flex flex-column"},[t("div",{staticClass:"positioning-bg",style:e.productHeaderStyle}),e._v(" "),t("div",{staticClass:"container-fluid positioning-content position-relative"},[t("div",{staticClass:"row flex-nowrap"},[t("div",{staticClass:"col-10 flex d-flex flex-column flex-grow-1 align-items-start justify-content-center py-5 position-relative"},[t("h2",{staticClass:"display-6 fw-bold d-inline-block text-truncate",staticStyle:{"max-width":"100%"}},[e._v("\n            "+e._s(e.selectedSong&&e.selectedSong.Name?e.selectedSong.Name:"")+"\n            "),t("span",[t("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:["fab","spotify"]},on:{click:function(t){return t.stopPropagation(),e.onOpenSongInSpotify.apply(null,arguments)}}})],1)]),e._v(" "),t("div",{staticClass:"genres-selector"},[t("label",{staticClass:"pe-2"},[e._v("Matched with:")]),e._v(" "),t("a",{staticClass:"text-light text-decoration-none dropdown-toggle",attrs:{id:"genresDropdownLink",href:"javascript:void(0)","data-bs-toggle":"dropdown","data-bs-auto-close":"outside",role:"button"}},e._l(e.songGenres,(function(n,o){return t("span",{key:"genre_"+o,staticClass:"badge rounded-pill mx-1 bg-dark"},[e._v(e._s(n))])})),0),e._v(" "),t("div",{staticClass:"dropdown-menu bg-dark p-3 text-wrap",staticStyle:{"max-width":"360px","z-index":"100"},attrs:{"aria-labelledby":"genresDropdownLink"}},e._l(e.mainGenres,(function(n,o){return t("span",{key:"genre_"+o,staticClass:"badge rounded-pill mx-1",class:e.isGenreSelected(n)?"bg-primary":"bg-dark",on:{click:function(t){return t.stopPropagation(),e.toggleGenreSelection(n)}}},[e._v(e._s(n))])})),0)])]),e._v(" "),t("div",{staticClass:"flex-shrink-0 flex-none align-items-center p-2 position-relative",staticStyle:{width:"220px"}},[t("UISongCover",{key:"cover_"+e.selectedSong.TrackId,staticClass:"header-cover",style:e.productImageCss,attrs:{song:e.selectedSong}})],1)])]),e._v(" "),t("div",{staticStyle:{"z-index":"1"}},[e._t("default")],2)])])}),[],!1,null,"cc444042",null);"function"==typeof y.default&&Object(y.default)(component);t.default=component.exports;installComponents(component,{UISongCover:n(801).default})}}]);