(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{582:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("ffef5740",content,!0,{sourceMap:!1})},591:function(t,e,n){"use strict";n(582)},592:function(t,e,n){var o=n(27)(!1);o.push([t.i,".ad[data-v-0bcfcbe0]{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.cover[data-v-0bcfcbe0]{aspect-ratio:1/1;width:100%;height:auto;background-size:cover;background-position:50%;background-repeat:no-repeat;z-index:2;flex-shrink:0}.song-info-container[data-v-0bcfcbe0]{z-index:2;width:100%;max-width:100%;text-align:center;flex:1;display:flex;flex-flow:column nowrap;justify-content:center;padding:0 2%}.song-name[data-v-0bcfcbe0]{font-weight:700;padding-top:2%;margin:0}.artist-name[data-v-0bcfcbe0],.review[data-v-0bcfcbe0]{margin:0}.stars .icon[data-v-0bcfcbe0]{margin:0 1%;color:#fd7e14}.blurred-bg[data-v-0bcfcbe0]{position:absolute;top:0;bottom:0;right:0;left:0;z-index:0;filter:blur(5px);background-size:360%;background-repeat:no-repeat;background-position:50%}",""]),t.exports=o},631:function(t,e,n){"use strict";n.r(e);n(86);var o={name:"PreviewAd",props:{song:{type:Object,default:function(){}}},computed:{darkCol:function(){return this.adSong&&this.adSong.darkCol?this.adSong.darkCol:null},lightCol:function(){return this.adSong&&this.adSong.lightCol?this.adSong.lightCol:null},adSong:function(){return this.$store.getters["artist/preSalesResource"]},AdCopyCSS:function(){var t=this.darkCol[0],g=this.darkCol[1],b=this.darkCol[2];return"background: linear-gradient(rgba("+t+","+g+","+b+", 1), rgba("+t+","+g+","+b+", 0.5)); color:rgba("+this.lightCol+");"},containerWidth:function(){return this.$refs.adContainer?this.$refs.adContainer.clientWidth:100}},methods:{fontSize:function(style){var t=this.containerWidth;switch(style){case 1:return"font-size: "+Number(t/15)+"px";case 2:return"font-size: "+Number(t/23)+"px";case 3:return"font-size: "+Number(t/32)+"px";default:return"font-size:  12px"}}}},r=(n(591),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.adSong?e("div",{ref:"adContainer",staticClass:"ad d-flex flex-column align-items-center"},[t.adSong?e("div",{staticClass:"ad d-flex flex-column align-items-center",style:t.AdCopyCSS},[e("div",{staticClass:"blurred-bg",style:"background-image: url("+t.adSong.Image+")"}),t._v(" "),e("div",{staticClass:"cover ratio-1x1",style:"background-image: url("+t.adSong.Image+")"}),t._v(" "),t.containerWidth?e("div",{staticClass:"song-info-container",style:t.AdCopyCSS},[e("h4",{key:"song_"+t.containerWidth,staticClass:"text-truncate song-info song-name w-100",style:t.fontSize(1)},[t._v("\r\n        "+t._s(t.adSong.Name)+"\r\n      ")]),t._v(" "),e("h6",{key:"artist_"+t.containerWidth,staticClass:"text-truncate song-info artist-name w-100",style:t.fontSize(2)},[t._v("\r\n        "+t._s(t.adSong.Artist)+"\r\n      ")]),t._v(" "),e("p",{key:"review_"+t.containerWidth,staticClass:"review",style:t.fontSize(3)},[t._v('\r\n        - "Fresh new '+t._s(t.adSong.Genres&&t.adSong.Genres[0]?t.adSong.Genres[0]:null)+' song!"\r\n      ')]),t._v(" "),e("div",{key:"stars_"+t.containerWidth,staticClass:"stars mb-3",style:t.fontSize(3)},t._l(5,(function(t){return e("FontAwesomeIcon",{key:"star"+t,staticClass:"icon",attrs:{icon:["fas","star"]}})})),1)]):t._e()]):t._e()]):t._e()}),[],!1,null,"0bcfcbe0",null);e.default=component.exports}}]);