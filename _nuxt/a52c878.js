(window.webpackJsonp=window.webpackJsonp||[]).push([[0,56,57],{581:function(t,e,n){"use strict";n.r(e);n(41),n(32),n(55),n(56);var o=n(0),r=n(18),c=(n(15),n(11),n(23),n(54),n(31),n(73),n(34));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"SongtoolsProductActionsBar",props:{},data:function(){return{loading:!1,actionsCount:[],isCampaignActive:!1}},computed:d(d({},Object(c.c)("artist",["activeAccountCampaigns","isSelectedTrackActiveCampaign","selectedArtist"])),{},{products:{get:function(){return this.$store.getters["app/products"]},set:function(t){this.$store.dispatch("app/onSetProducts",t)}},userStats:function(){return this.$store.getters["user/stats"]},activeMembership:function(){return!(!this.userStats||!this.userStats.PackageName)&&(""!=this.userStats.PackageName.Value&&(this.userStats.DaysUntilExpiration.Value>0||this.userStats.MinutesUntilExpiration.Value>0))},productGroups:function(){var t=[];return this.songCreditPackages&&this.songCreditPackages.length>1&&this.songCreditPackages.forEach((function(e){e.ServiceGroup&&""!=e.ServiceGroup&&!t.includes(e.ServiceGroup)&&t.push(e.ServiceGroup)})),"playlisting"!=this.selectedProduct.Service||t.includes("playlist")||t.unshift("playlist"),t.length>=1?t:null},selectedProduct:{get:function(){return this.$store.getters["app/selectedProduct"]},set:function(t){this.$store.dispatch("app/onSetSelectedProduct",t)}},selectedSong:function(){return this.$store.getters["artist/selectedSong"]},selectedSongId:function(){return this.$store.getters["artist/selectedSong"]},songCreditPackages:{get:function(){return this.$store.getters["artist/songCreditPackages"]},set:function(t){this.$store.dispatch("artist/onSetSongCreditPackages",t)}},selectedMembershipOption:{get:function(){return this.$store.getters["user/selectedMembershipOption"]},set:function(t){this.$store.dispatch("user/onSetSelectedMembershipOption",t)}},modal:{get:function(){return this.$store.getters["app/modal"]},set:function(t){this.$store.dispatch("app/showModalWindow",t)}}}),watch:{selectedSongId:function(){this.loadSongPackages()},songCreditPackages:function(){"songfly"===this.selectedProduct.Service.toLowerCase()&&(console.warn("--\x3e"),this.$nuxt.$emit("onLoadSongflyCampaignStatus"))}},mounted:function(){this.loadSongPackages(),this.isCampaignActive=this.isSelectedTrackActiveCampaign},methods:{filteredProducts:function(t,e,n){return t&&t.length>0?t.filter((function(t){return t[e]===n})):[]},productGroupLabel:function(t){switch(t){case"dads":return"Digital Ads";case"playlist":return"Playlist Promotion"}},productGroupItems:function(t){var e=this.filteredProducts(this.songCreditPackages,"ServiceGroup",t);return 0==e.length&&"playlist"==t?[{Channel:"playlist",ServiceGroup:"playlist"}]:e},productGroupChannels:function(t){var e=t,n=[];return e&&e.length>1&&(e.forEach((function(t){t.Channel&&""!=t.Channel&&!n.includes(t.Channel)&&n.push(t.Channel)})),n.length>0)?n:null},productGroupChannelItems:function(t,e){return this.filteredProducts(t,"Channel",e)},OnPurchasePackageOneClick:function(t){var e=d(d({},t),{},{AutoProcess:!0});this.OnPurchasePackage(e)},OnPurchasePackage:function(t){this.onPrepareSongAssets(),this.selectedMembershipOption=t,this.modal="ModalPurchase"},onSelectProduct:function(t){this.selectedProduct=t,console.log("generate route from productactionbar onselectproduct"),this.$router.push(this.generateRoute())},getActionCount:function(t){if(this.actionsCount){var e=this.actionsCount.filter((function(e){return String(e.Service).toLowerCase()==String(t.Label).toLowerCase()}));return e.length>0?e[0].Actions:0}return 0},loadProductInfoForSong:function(){this.loadSongPackages(),this.loadProductAlerts()},onPrepareSongAssets:function(){this.$api.artist.prepareNewSongAssets({tid:this.selectedSong.TrackId,genres:this.selectedSong.Genres.toString()})},loadSongPackages:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.selectedMembershipOption=null,t.$store.dispatch("artist/onSetSongCreditPackages",null),!t.selectedSong){e.next=9;break}if(!(n=t.selectedSong.TrackId)){e.next=9;break}return e.next=7,t.$api.artist.getSongCreditPackages(n,t.selectedProduct.Label);case 7:o=e.sent,t.songCreditPackages=o;case 9:case"end":return e.stop()}}),e)})))()},loadProductAlerts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.selectedSong){e.next=10;break}if(!(n=t.selectedSong.TrackId)){e.next=10;break}return e.next=5,t.$api.artist.getSongToolsActionsCount(n);case 5:if(!(o=e.sent)||!o.data){e.next=9;break}return t.actionsCount=o.data,e.abrupt("return");case 9:t.actionsCount=[];case 10:case"end":return e.stop()}}),e)})))()}}},h=(n(810),n(8)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return t.activeMembership?e("div",{staticClass:"product-action-bar position-relative px-4"},[e("div",{staticClass:"container position-relative"},[t.productGroups?[e("div",{staticClass:"d-flex flex-row align-items-start justify-content-between w-100 px-3"},[t._t("default"),t._v(" "),t._l(t.productGroups,(function(n,o){return e("div",{key:"pg_"+o,staticClass:"col"},[e("div",{staticClass:"d-flex flex-row pt-2 justify-content-end"},[t.productGroupChannels(t.productGroupItems(n))?t._l(t.productGroupChannels(t.productGroupItems(n)),(function(o,r){return e("div",{key:"pgc_"+r,staticClass:"d-flex flex-row-nowrap align-items-start"},[e("div",{staticClass:"row"},[e("UIPackageGroupPurchaseButton",{attrs:{"group-name":o,"group-items":t.productGroupChannelItems(t.productGroupItems(n),o),action:t.OnPurchasePackage}})],1)])})):t._l(t.productGroupItems(n),(function(n){return e("div",{key:n.Id,staticClass:"d-flex flex-column justify-content-end"},[e("UIPackageGroupPurchaseButton",{attrs:{"group-name":"playlist","group-items":t.productGroupItems("playlist"),action:null}})],1)}))],2)])}))],2)]:[e("nav",{staticClass:"navbar navbar-expand-lg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex flex-row w-100 align-items-center ps-4",staticStyle:{"z-index":"2",position:"relative"}},[e("div",{staticClass:"col m-0 p-0 flex-grow-0"},[t._t("default")],2),t._v(" "),t.songCreditPackages&&t.songCreditPackages.length>0?e("div",{staticClass:"col flex-grow-0 d-flex flex-row-reverse flex-wrap flex-grow-1"},t._l(t.songCreditPackages,(function(n,o){return e("div",{key:"productPack"+o,staticClass:"p-2 px-3 d-inline-block mx-2 p-0 booster-card"},["presshold"==n.PurchaseType?e("UIConfirmPurchaseButton",{attrs:{"credit-package":n,label:"test",action:t.OnPurchasePackageOneClick}}):e("UIPackagePurchaseButton",{key:"pb_"+n.PackageId,staticStyle:{"min-width":"235px"},attrs:{label:n.Name,action:t.OnPurchasePackage,icon:t.packageGroupIcon(t.selectedProduct.Service),"credit-package":n,price:n.Price,description:n.Description,hexagons:0}})],1)})),0):t._e()])])])]],2)]):t._e()}),[],!1,null,"05a9c922",null);e.default=component.exports;installComponents(component,{UIConfirmPurchaseButton:n(775).default,UIPackagePurchaseButton:n(320).default,UIPackageGroupPurchaseButton:n(776).default})},600:function(t,e,n){var content=n(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("3cf403fb",content,!0,{sourceMap:!1})},601:function(t,e,n){var content=n(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("717e2446",content,!0,{sourceMap:!1})},637:function(t,e,n){"use strict";n(600)},638:function(t,e,n){var o=n(27)(!1);o.push([t.i,".btn-begin[data-v-097427b4]{border-color:#2e2e2e}.btn-begin[data-v-097427b4]:hover{background-color:#474747!important;color:#f9fafa}.btn-text .hover-text[data-v-097427b4]{position:absolute;left:0;right:0;display:none}.hovered[data-v-097427b4]{position:relative}.hovered .action-text[data-v-097427b4]{opacity:0}.hovered .hover-text[data-v-097427b4]{display:inline-block}.btn-confirm:hover .btn-tooltip .icon[data-v-097427b4]{color:#fff}",""]),t.exports=o},639:function(t,e,n){"use strict";n(601)},640:function(t,e,n){var o=n(27)(!1);o.push([t.i,".activate-btn .playlist-icon[data-v-6d75edcc]{width:16px;height:16px}.activate-btn[data-v-6d75edcc]:hover{background-color:#2ec4b6;border-color:#4fd6c9;color:#fff;fill:#fff}.btn-cancel .icon[data-v-6d75edcc]{color:#ff1241}.btn-cancel[data-v-6d75edcc]:hover{background-color:#ff1241;color:#fff}.btn-cancel:hover .icon[data-v-6d75edcc]{color:#fff}.btn-begin[data-v-6d75edcc]{border-color:#2e2e2e}.btn-begin[data-v-6d75edcc]:hover{background-color:#474747!important;color:#f9fafa}.btn-text .hover-text[data-v-6d75edcc]{position:absolute;left:0;right:0;display:none}.hovered[data-v-6d75edcc]{position:relative}.hovered .action-text[data-v-6d75edcc]{opacity:0}.hovered .hover-text[data-v-6d75edcc]{display:inline-block}.btn-confirm:hover .btn-tooltip .icon[data-v-6d75edcc]{color:#fff}.artist-info-btn[data-v-6d75edcc]{border:none;text-align:left;padding:0 0 .72rem}.artist-info-btn .icon-up[data-v-6d75edcc],.artist-info-btn[data-v-6d75edcc]:after{display:none}.artist-info-btn.show .icon.icon-up[data-v-6d75edcc]{display:block}.artist-info-btn.show .icon.icon-down[data-v-6d75edcc]{display:none}",""]),t.exports=o},747:function(t,e,n){var content=n(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0622e6e5",content,!0,{sourceMap:!1})},775:function(t,e,n){"use strict";n.r(e);n(87);var o={name:"ConfirmButton",props:{action:{type:Function,default:function(){}},creditPackage:{type:Object,default:function(){}}},data:function(){return{msToConfirm:3600,msCount:0,progressTimer:null,progressActive:!1,showHover:!1,purchaseComplete:!1}},computed:{confirmed:function(){return!!this.creditPackage&&(this.creditPackage.DaysLeft>0||1==this.purchaseComplete)},label:function(){return this.creditPackage.Name+" - $"+this.creditPackage.Price},progressIcon:function(){return this.progressActive?["fas","angles-right"]:this.confirmed?["fas",check]:["fas","hand-pointer"]}},watch:{purchaseComplete:function(t){t&&this.action(this.creditPackage)}},mounted:function(){$("[data-bs-toggle=tooltip]").tooltip()},methods:{start:function(){this.progressActive=!0,this.logProgress(0),this.showHover=!0},logProgress:function(t){var e=this;this.progressActive?(this.msCount=t,t<this.msToConfirm?(t+=72,this.progressTimer=window.setTimeout((function(){e.logProgress(t)}),18)):(clearTimeout(this.progressTimer),this.progresTimer=null,this.purchaseComplete=!0)):this.stop()},mouseup:function(){this.stop()},mouseout:function(){this.stop()},stop:function(){this.msCount=0,this.progressActive=!1,this.showHover=!1}}},r=(n(637),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.confirmed?e("div",[e("button",{staticClass:"ms-auto me-0 btn-rounded btn btn-primary d-flex flex-row px-4"},[e("span",{staticClass:"flex-grow-1 text-nowrap"},[t._v("Purchase Complete  "+t._s(t.creditPackage.DaysLeft))]),t._v(" "),e("span",{staticClass:"ms-auto ps-2"},[e("FontAwesomeIcon",{attrs:{icon:["fas","check"]}})],1)])]):e("div",{staticClass:"position-relative w-100 btn-confirm",class:{hovered:t.showHover},staticStyle:{"min-width":"180px"}},[e("div",{staticClass:"ms-auto me-0 btn-rounded d-flex flex-row flex-nowrap align-items-center btn btn-begin border-1 w-100"},[e("div",{staticClass:"position-absolute top-0 start-0 bottom-0 flex-shrink-0 flex-grow-0",staticStyle:{"z-index":"3",right:"40px"},on:{mousedown:function(e){return t.start()},mouseup:function(e){return t.mouseup()},mouseout:function(e){return t.mouseout()},mouseover:function(e){t.showHover=!0},mouseleave:function(e){t.showHover=!1}}}),t._v(" "),e("div",{staticClass:"timer-bg bg-primary btn-rounded position-absolute start-0 top-0 bottom-0 d-flex align-items-center px-2 text-end",staticStyle:{"min-width":"34px","z-index":"2",margin:"1px"},style:t.progressActive&&t.msCount>100?"width:"+t.msCount/t.msToConfirm*100+"%":null},[e("FontAwesomeIcon",{staticClass:"ms-auto me-1",attrs:{icon:t.progressIcon}})],1),t._v(" "),e("div",{staticClass:"col btn-text px-3 text-nowrap flex-grow-1",staticStyle:{"z-index":"1"}},[e("span",{staticClass:"action-text"},[t._v(t._s(t.label)+" ")]),t._v(" "),e("span",{staticClass:"hover-text"},[t._v("Press & Hold")])]),t._v(" "),e("div",{staticClass:"position-absolute end-0 top-0 bottom-0 hover-text"},[e("button",{staticClass:"btn btn-transparent btn-tooltip shadow-none bg-transparent outline-none px-3 m-0",attrs:{"data-bs-toggle":"tooltip","data-bs-html":"false","data-bs-title":t.creditPackage.Description||null,role:"button"}},[e("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:["far","info-circle"]}})],1)])])])}),[],!1,null,"097427b4",null);e.default=component.exports},776:function(t,e,n){"use strict";n.r(e);n(41),n(32),n(55),n(23),n(56);var o=n(0),r=n(18),c=(n(15),n(86),n(31),n(11),n(34));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"PackageGroupPurchaseButton",props:{action:{type:Function,default:function(){}},groupItems:{type:Array,default:[]},groupName:{type:String,default:""}},data:function(){return{selectedCreditPackage:null,loading:!1}},computed:d(d(d({},Object(c.c)("user",["user"])),Object(c.c)("artist",["selectedSong","membershipIncludedCampaigns","accountCampaigns"])),{},{percentageToExpiration:function(){return this.channelCampaignDaysLeft&&this.channelCampaignPeriodDays&&100*Number(this.channelCampaignDaysLeft/this.channelCampaignPeriodDays)||0},availableCampaignSlots:function(){return this.$store.getters["artist/membershipAvailableCampaigns"]},isPlaylistingCampaignActive:function(){var t=this.$route.params.SongId;return!!t&&(this.accountCampaigns&&this.accountCampaigns.filter((function(e){return"Active"==e.Status&&"Playlisting"==e.Type&&e.TrackId==t})).length>0)},progressClass:function(){var t=this.percentageToExpiration;return t>50?"bg-primary":t<30?"bg-danger":"bg-warning"},packIcon:function(){return this.packageGroupIcon(this.groupName)},channelCampaignPeriodDays:function(){if(this.selectedCreditPackage){var t=new Date(this.selectedCreditPackage.ChannelPurchasedOn),e=new Date(this.selectedCreditPackage.ChannelEndingOn);return Math.floor((e-t)/1e3*60*60*24)}return null},channelCampaignDaysLeft:function(){if(this.selectedCreditPackage){var t=new Date(this.selectedCreditPackage.ChannelEndingOn),e=new Date;return t-e>0?Math.floor((t-e)/1e3*60*60*24):0}return null},membershipCampaignAvailabilityDescription:function(){var t="Activate Campaign";return this.availableCampaignSlots&&(t="Activate now to use one of your ("+this.availableCampaignSlots+") available playlist campaign(s)."),t}}),watch:{selectedCreditPackage:function(){$(".dropdown-toggle.show").dropdown("hide")}},mounted:function(){this.selectedCreditPackage=this.groupItems[0],$("[data-bs-toggle=tooltip]").tooltip()},methods:{onSelectMembershipOption:function(t){this.action(t)},onChangePromoStatus:function(t){"Active"==t&&this.$store.getters["artist/isSelectedSongPromoted"]?this.onProcessPromoActivation():this.changePromoStatus(this.$store.getters["artist/accountCampaignSelection"],t)}},changePromoStatus:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if((r=n).loading){o.next=9;break}return r.loading=!0,o.next=5,n.$api.artist.pausePromotionId(t.BatchId,e);case 5:return c=o.sent,n.$store.dispatch("artist/onLoadAccountCampaigns"),r.loading=!1,o.abrupt("return",c);case 9:return r.loading=!1,o.abrupt("return",null);case 11:case"end":return o.stop()}}),o)})))()},onProcessPromoActivation:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},(o=t).loading=!0,""==o.trackToPromote.PreviewUrl&&null,n.BatchId=t.generateUUID(),n.Type="Promotion","label"==o.user.UserType?(n.dbLabelId=o.user.Id,n.dbUserId=o.selectedSong.dbArtistId):n.dbUserId=o.user.Id,n.dbArtistId=o.selectedSong.dbArtistId,n.SpotifyArtistId=o.selectedSong.SpotifyArtistId,n.SongSpotifyArtistName=o.selectedSong.SongSpotifyArtistName,n.SpotifySongId=o.selectedSong.TrackId,n.SongName=o.selectedSong.SongName,n.SongImage=o.selectedSong.AlbumImage,n.SongDuration=Number(o.selectedSong.Duration),n.SongPreviewURL=o.selectedSong.SongPreviewURL,n.Status="Active",e.next=19,t.saveTransaction(n).then((function(data){console.log("saved transaction"),o.reloadArtistInfo(),o.view="success",o.isProcessing=!1,console.log("done processing")})).fail((function(t){console.warn(t),console.log("Error saving promotion.".concat(t.body.status.message)),o.view="errorProcessing",o.isProcessing=!1}));case 19:case"end":return e.stop()}}),e)})))()}},h=(n(639),n(8)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-relative mb-2 mx-3 d-inline-block",staticStyle:{"z-index":"99"}},[e("label",{staticClass:"upper-label"},[t._v(t._s("playlist"==t.groupName?"Playlister.club":t.groupName)+" Campaign")]),t._v(" "),"playlist"==t.groupName&&t.availableCampaignSlots>0?e("div",{staticClass:"d-flex flex-row flex-nowrap align-items-start"},[e("div",[e("button",{staticClass:"btn btn-rounded btn-outline-dark activate-btn mt-1 px-2",staticStyle:{"min-width":"235px"},on:{click:function(e){return e.stopPropagation(),t.onChangePromoStatus("Active")}}},[e("div",{staticClass:"d-flex flex-row align-items-start align-content-start"},[e("div",{staticClass:"col flex-grow-0 px-1"},[e("UIPlaylisterClubIcon",{staticClass:"playlist-icon"})],1),t._v(" "),e("div",{staticClass:"col flex text-start text-nowrap ps-2"},[t._v("\n            Activate Campaign\n          ")]),t._v(" "),e("div",{staticClass:"col flex-grow-0 ms-auto px-2"},[e("a",{staticClass:"m-0 p-0 px-0 text-auto lh-1",staticStyle:{color:"inherit"},attrs:{role:"button","data-bs-toggle":"tooltip","data-bs-html":"true","data-bs-title":t.membershipCampaignAvailabilityDescription||"Activate Campaign"}},[e("FontAwesomeIcon",{staticClass:"fs-6",attrs:{icon:["far","info-circle"]}})],1)])])]),t._v(" "),t.membershipIncludedCampaigns>1?[e("div",{staticClass:"d-flex mt-2 flex-row w-100 align-items-center justify-content-stretch"},t._l(t.membershipIncludedCampaigns,(function(n){return e("div",{key:"campaignSlot_"+n,staticClass:"flex flex-grow-1 me-1 border rounded",class:n<t.membershipIncludedCampaigns-t.availableCampaignSlots?"bg-primary":"bg-gray-300",staticStyle:{height:"3px"}})})),0)]:t._e()],2)]):t.selectedCreditPackage?[e("div",{staticClass:"d-flex flex-row flex-nowrap align-items-center"},[t.selectedCreditPackage?e("UIPackagePurchaseButton",{key:"pb_"+t.selectedCreditPackage.PackageId,staticStyle:{"min-width":"235px"},attrs:{label:t.selectedCreditPackage.Name,action:t.onSelectMembershipOption,icon:t.packIcon,"credit-package":t.selectedCreditPackage,price:t.selectedCreditPackage.Price,description:t.selectedCreditPackage.Description,hexagons:0}}):t._e(),t._v(" "),t.groupItems.length>1?[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn dropdown-toggle bg-transparent fs-4 w-100 artist-info-btn shadow-none p-0 ms-3",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"true"}},[e("div",{staticClass:"col icon-container align-self-end flex-grow-0"},[e("FontAwesomeIcon",{staticClass:"icon icon-down",attrs:{icon:["fas","angle-down"]}}),t._v(" "),e("FontAwesomeIcon",{staticClass:"icon icon-up",attrs:{icon:["fas","angle-up"]}})],1)]),t._v(" "),t.groupItems&&t.groupItems.length>1?e("ul",{staticClass:"dropdown-menu dropdown-menu-end shadow p-1",staticStyle:{"min-width":"250px","max-height":"40vh"}},[t._l(t.groupItems,(function(n){return[e("li",{key:"pgci_ "+n.PackageId},[e("UIPackagePurchaseButton",{key:"pb_"+n.PackageId,staticClass:"border-0 w-100 p-0",attrs:{label:n.Name,"is-incremental-purchase":"dads"===n.ServiceGroup.toLowerCase(),action:t.onSelectMembershipOption,icon:t.packIcon,"credit-package":n,price:n.Price,description:n.Description,hexagons:0,"btn-style":"min-width: 235px; border-radius:0 !important; border-color:transparent"}})],1)]})),t._v(" "),t.isPlaylistingCampaignActive?e("li",{staticClass:"pb-2"},[e("button",{staticClass:"dropdown-item p-2 btn-cancel",on:{click:function(e){return e.stopPropagation(),t.onChangePromoStatus("Expired")}}},[e("div",{staticClass:"row flex-nowrap"},[e("div",{staticClass:"col flex-grow-0 text-nowrap fw-bold px-1 ms-1 ps-2 ms-2"},[e("FontAwesomeIcon",{staticClass:"icon fs-5",attrs:{icon:["fas","octagon-exclamation"]}})],1),t._v(" "),e("div",{staticClass:"col flex text-nowrap text-start ps-1",staticStyle:{"font-weight":"500"}},[t._v("\n                    Stop Campaign\n                  ")])])])]):t._e()],2):t._e()])]:t._e()],2),t._v(" "),""!=t.selectedCreditPackage.ChannelPurchasedOn?e("div",{staticClass:"gauge-container mb-2",staticStyle:{"margin-left":"10px","margin-right":"40px"}},[e("div",{staticClass:"progress mt-1",staticStyle:{height:"5px"},attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:t.channelCampaignDaysLeft+" days left"}},[e("div",{staticClass:"progress-bar",class:t.progressClass,style:"width: "+t.percentageToExpiration+"%;",attrs:{role:"progressbar","aria-valuenow":t.channelCampaignDaysLeft,"aria-valuemin":"0","aria-valuemax":t.channelCampaignPeriodDays}})])]):t._e()]:t._e()],2)}),[],!1,null,"6d75edcc",null);e.default=component.exports;installComponents(component,{UIPlaylisterClubIcon:n(326).default,UIPackagePurchaseButton:n(320).default})},810:function(t,e,n){"use strict";n(747)},811:function(t,e,n){var o=n(27)(!1);o.push([t.i,".positioning-content[data-v-05a9c922]{max-width:1160px!important;width:100%;margin:auto}.nav-item .badge[data-v-05a9c922]{top:-.5rem;right:-1rem}",""]),t.exports=o}}]);