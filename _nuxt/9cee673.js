(window.webpackJsonp=window.webpackJsonp||[]).push([[35,36,37],{585:function(e,t,r){var content=r(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("9f17f290",content,!0,{sourceMap:!1})},586:function(e,t,r){var content=r(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("66fcd2ea",content,!0,{sourceMap:!1})},622:function(e,t,r){"use strict";r(585)},623:function(e,t,r){var o=r(27)(!1);o.push([e.i,".container[data-v-ac03a8c2]{min-width:230px}.requirement-item .icon[data-v-ac03a8c2]{left:0;top:.65rem}",""]),e.exports=o},624:function(e,t,r){"use strict";r(586)},625:function(e,t,r){var o=r(27)(!1);o.push([e.i,".resource-thumbnail[data-v-66fc4334]{border:3px solid transparent;cursor:pointer}.resource-thumbnail.selected[data-v-66fc4334]{border-color:#2ec4b6!important}",""]),e.exports=o},634:function(e,t,r){"use strict";r.r(t);var o=r(0),n=(r(15),r(86),r(65),r(31),r(11),r(73),r(80),r(54),r(59),r(46),r(87),{props:{resource:{type:Object,default:function(){}},wizardCode:{type:Object,default:function(){}},folderOrder:{type:Number,default:1},spaceUsed:{type:Number,default:0},spaceAllowed:{type:Number,default:0},updateResource:{type:Function,default:function(){}},requiredPurchase:{type:Boolean,default:!1},stockResourceSelection:{type:Object,default:function(){}},hasPremiumAccess:{type:Boolean,default:!0}},data:function(){return{UploadError:null,ApproximateUploadTime:null,UploadFinishesOn:null,UploadProgress:null}},computed:{uploadAllowed:function(){return this.spaceUsed<this.spaceAllowed&&!("SongCover"==this.resource.WizardCode&&""!=this.resource.FileCreatedOn)},status:function(){return this.resource&&this.resource.FileStatus?this.resource.FileStatus:null},requirements:function(){return this.wizardCode&&this.wizardCode.Requirements&&""!=this.wizardCode.Requirements?this.wizardCode.Requirements.split(","):null},selectedSong:function(){return this.$store.getters["artist/selectedSong"]},acceptedFileTypes:function(){var e=this,t=this.$store.getters["songfolder/fileTypes"];return t&&t.length>0&&this.wizardCode?t.filter((function(t){return t.MediaType==e.wizardCode.MediaType})).map((function(e){return"."+e.Extension})).toString():null},SFHeaders:function(){return this.$store.getters["songfolder/sfHeaders"]},SFRoot:function(){return this.$store.getters["songfolder/sfRoot"]},fileTypes:{get:function(){return this.$store.getters["songfolder/fileTypes"]},set:function(e){this.$store.dispatch("songfolder/onSetFileTypes",e)}}},mounted:function(){},methods:{onProcessUploadClick:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("SongCover"!=e.resource.WizardCode){t.next=19;break}return console.log("processing here"),e.UploadProgress=10,t.prev=3,t.next=6,e.$api.artist.prepareNewSongAssets({tid:e.selectedSong.TrackId,genres:e.selectedSong.Genres.toString()});case 6:return t.sent,e.UploadProgress=60,t.next=10,e.$nuxt.$emit("onLoadSongFolderFiles");case 10:e.UploadProgress=100,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.warn(t.t0);case 16:e.UploadProgress=null,t.next=20;break;case 19:e.$refs.fileUploader.click();case 20:case"end":return t.stop()}}),t,null,[[3,13]])})))()},onBeginFileUpload:function(e){var t=e.target.files[0];this.UploadError=null,this.uploadThisFile(t)},uploadThisFile:function(e,t){var r=this;if(this.wizardCode){var o=this;this.UploadError=null;var body={fileId:"sf_".concat(this.generateUUID()),WizardCode:this.wizardCode.Code,Metadata:this.wizardCode.MediaType,Name:this.wizardCode.Name,Description:this.wizardCode.Description,FolderOrder:o.folderOrder};switch(o.selectedSong&&o.selectedSong.TrackId&&(body.SpotifySongId=o.selectedSong.TrackId,body.spotifySongName=o.selectedSong.Name),this.ApproximateUploadTime=null,this.UploadFinishesOn=null,this.UploadProgress=1,t){case"url":this.getBase64FromImage(e,(function(t){var n=t.substr(t.indexOf("data:"),t.indexOf(";base64"));n=n.substr(n.indexOf(":")+1,n.length);var c=o.fileTypes.filter((function(e){return e.MimeType==n})).map((function(e){return e.Extension}))[0];body.fileExtension=c,body.filename="default_".concat(body.WizardCode,".").concat(body.fileExtension),body.url=e,r.UploadProgress=10,o.uploadResourceToSongFolder(body)}),(function(e){console.warn(e)}));break;case"stock":this.getBase64FromImage(e,(function(t){var n=t.substr(t.indexOf("data:"),t.indexOf(";base64"));n=n.substr(n.indexOf(":")+1,n.length);var c=o.fileTypes.filter((function(e){return e.MimeType==n})).map((function(e){return e.Extension}))[0];body.fileExtension=c,body.filename="default_".concat(body.WizardCode,".").concat(body.fileExtension),body.attribution=r.stockResourceSelection.Attribution,body.attributionUrl=r.stockResourceSelection.AttributionUrl,body.source=r.stockResourceSelection.AttributionUrl.includes("pexels")?"https://www.pexels.com/":"https://unsplash.com/",body.url=e,r.UploadProgress=10,o.uploadResourceToSongFolder(body)}),(function(e){console.warn(e)}));break;default:var n=e;body.filename=n.name,body.fileExtension=body.filename.split(".").pop();var c=new FileReader;c.readAsBinaryString(n),c.onload=function(){var e=btoa(c.result);body.bytes=e,o.uploadResourceToSongFolder(body)},c.onError=function(e){console.warn("SF error",e)}}}},uploadResourceToSongFolder:function(body){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,e.UploadProgress=1,t.prev=2,t.next=5,e.$api.data.post("".concat(r.SFRoot,"/sf_users/UploadFileAsync/songfolder"),JSON.stringify(body),{headers:r.SFHeaders});case 5:(o=t.sent)&&o.data?(console.log(o.data),e.ApproximateUploadTime=o.data.data.extimatedSecondsToUpload,n=new Date,e.UploadFinishesOn=n.addSeconds(e.ApproximateUploadTime),r.updateProgressBar(body.fileId)):(console.log(o),e.UploadError="There was an error uploading this file. Please check file requirements try again.",e.UploadProgress=null),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(2),console.warn(t.t0),e.UploadError="There was an error uploading this file.  Please check file requirements try again.",e.UploadProgress=null;case 14:case"end":return t.stop()}}),t,null,[[2,9]])})))()},getUserAssets:function(){console.log("get user assets")},updateProgressBar:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var n,c,l,d,f,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=r,15,c=(new Date).getSeconds(),l=r.UploadFinishesOn.getSeconds(),!((d=l-c)<=0)){o.next=25;break}if(t||(t=0),!(++t<=15)){o.next=25;break}return r.UploadProgress=t/15*100,o.next=12,r.$api.songfolder.checkFileUploadStatus(e);case 12:if(!(f=o.sent)){o.next=22;break}if(!((m=f[0])&&m.files&&m.files>0)){o.next=20;break}return r.UploadProgress=100,r.updateResource(r.resource,m.URL),setTimeout((function(){n.UploadProgress=null}),1e3),o.abrupt("return");case 20:o.next=25;break;case 22:return r.UploadError="There was an error uploading this file. Please try again.",r.UploadProgress=null,o.abrupt("return");case 25:r.UploadProgress=d/r.ApproximateUploadTime*100,setTimeout((function(){n.updateProgressBar(e,t)}),500);case 27:case"end":return o.stop()}}),o)})))()},onUploadStockResource:function(){this.stockResourceSelection&&this.stockResourceSelection.url&&this.uploadThisFile(this.stockResourceSelection.url,"stock")}}}),c=(r(622),r(8)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return e.requiredPurchase?t("div",{staticClass:"container card px-3 py-0 border-0"},[e.hasPremiumAccess||"Verified"==e.resource.FileStatus?[e.wizardCode&&e.wizardCode.MediaType?t("h6",{staticClass:"mt-4"},[e._v("\n      Use Selected "+e._s(String(e.wizardCode.MediaType).toLowerCase())+"\n    ")]):e._e(),e._v(" "),t("p",[e._v("Enter a search term and select a resource to add it to your Songfolder")]),e._v(" "),null!=e.UploadProgress?t("div",[t("div",{staticClass:"progress",staticStyle:{height:"4px"}},[t("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated bg-primary",style:"width: "+e.UploadProgress+"%",attrs:{role:"progressbar","aria-valuenow":e.UploadProgress,"aria-valuemin":"0","aria-valuemax":"100"}})])]):e._e(),e._v(" "),t("div",{staticClass:"align-self-center py-3 w-100"},["PendingVerification"==e.status?t("button",{staticClass:"btn btn-light btn-rounded w-100 disabled text-nowrap",attrs:{disabled:"disabled"}},[e._v("\n        Pending approval\n      ")]):null!=e.UploadProgress?t("button",{staticClass:"btn btn-light btn-rounded w-100 disabled text-nowrap",attrs:{disabled:"disabled"}},[t("FontAwesomeIcon",{staticClass:"fa-spin",attrs:{icon:["fas","compact-disc"]}}),e._v(" Loading...\n      ")],1):"Verified"==e.resource.FileStatus&&e.uploadAllowed?t("button",{staticClass:"btn btn-rounded btn-outline-dark w-100 text-nowrap",on:{click:function(t){return t.stopPropagation(),e.onUploadStockResource.apply(null,arguments)}}},[e._v("\n        Change\n      ")]):e.uploadAllowed?t("button",{staticClass:"btn btn-rounded btn-primary w-100 text-nowrap",attrs:{disabled:!e.stockResourceSelection},on:{click:function(t){return t.stopPropagation(),e.onUploadStockResource()}}},[e._v("\n        Select Resource\n      ")]):t("button",{staticClass:"btn btn-rounded btn-gray w-100 text-nowrap small"},[e._v("\n        Max Space Reached\n      ")])]),e._v(" "),e.UploadError?t("div",{staticClass:"error text-small p-2",staticStyle:{"font-size":"0.75rem"}},[t("FontAwesomeIcon",{staticClass:"text-danger",attrs:{icon:["fas","exclamation-circle"]}}),e._v(" "),t("span",{staticClass:"text-muted fst-italic"},[e._v(e._s(e.UploadError))])],1):e._e()]:[t("h6",{staticClass:"mt-4"},[e._v("\n      Access with Songfolder Premium\n    ")]),e._v(" "),e.wizardCode&&e.wizardCode.MediaType?t("p",[e._v("\n      Purchase Songfolder Premium for this song and gain access to the full collection of stock "+e._s(String(e.wizardCode.MediaType).toLowerCase())+" as part of your campaign\n    ")]):e._e()]],2):t("div",{staticClass:"container card px-3 py-0 border-0"},[e.requirements?[t("h6",{staticClass:"mt-4"},[e._v("\n      Requirements\n    ")]),e._v(" "),t("ul",{staticClass:"list-group list-group-flush"},e._l(e.requirements,(function(r,o){return t("li",{key:"req_"+o,staticClass:"list-group-item requirement-item ps-4"},["Verified"==e.resource.FileStatus?t("FontAwesomeIcon",{staticClass:"icon text-success position-absolute",attrs:{icon:["fas","check-circle"]}}):t("FontAwesomeIcon",{staticClass:"icon text-gray-400 position-absolute",attrs:{icon:["fas","dot-circle"]}}),e._v("\n        "+e._s(r)+"\n      ")],1)})),0)]:e._e(),e._v(" "),null!=e.UploadProgress?t("div",[t("div",{staticClass:"progress",staticStyle:{height:"4px"}},[t("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated bg-primary",style:"width: "+e.UploadProgress+"%",attrs:{role:"progressbar","aria-valuenow":e.UploadProgress,"aria-valuemin":"0","aria-valuemax":"100"}})])]):e._e(),e._v(" "),t("div",{staticClass:"align-self-center py-3 w-100"},["PendingVerification"==e.status?t("button",{staticClass:"btn btn-light btn-rounded w-100 disabled text-nowrap",attrs:{disabled:"disabled"}},[e._v("\n      Pending approval\n    ")]):null!=e.UploadProgress?t("button",{staticClass:"btn btn-light btn-rounded w-100 disabled text-nowrap",attrs:{disabled:"disabled"}},[t("FontAwesomeIcon",{staticClass:"fa-spin",attrs:{icon:["fas","compact-disc"]}}),e._v(" Loading...\n    ")],1):"Verified"==e.resource.FileStatus&&"SongCover"!=e.resource.WizardCode?t("button",{staticClass:"btn btn-rounded btn-outline-dark w-100 text-nowrap",on:{click:function(t){return t.stopPropagation(),e.$refs.fileUploader.click()}}},[e._v("\n      Change\n    ")]):e.uploadAllowed?t("button",{staticClass:"btn btn-rounded btn-primary w-100 text-nowrap",on:{click:function(t){return t.stopPropagation(),e.onProcessUploadClick()}}},[e._v("\n      "+e._s("Rejected"==e.resource.FileStatus?"Upload Update":"Upload Now")+"\n    ")]):"SongCover"!=e.resource.WizardCode?t("button",{staticClass:"btn btn-rounded btn-dark-outline btn-disabled w-100 text-nowrap small",attrs:{disabled:""}},[e._v("\n      Max Space Reached\n    ")]):e._e()]),e._v(" "),t("input",{ref:"fileUploader",staticClass:"d-none",attrs:{type:"file",accept:e.acceptedFileTypes},on:{change:e.onBeginFileUpload}}),e._v(" "),e.UploadError?t("div",{staticClass:"error text-small p-2",staticStyle:{"font-size":"0.75rem"}},[t("FontAwesomeIcon",{staticClass:"text-danger",attrs:{icon:["fas","exclamation-circle"]}}),e._v(" "),t("span",{staticClass:"text-muted fst-italic"},[e._v(e._s(e.UploadError))])],1):e._e()],2)}),[],!1,null,"ac03a8c2",null);t.default=component.exports},635:function(e,t,r){"use strict";r.r(t);var o=r(0),n=(r(15),r(138),{name:"StockResourceSelector",props:{resource:{type:Object,default:function(){}},initSearchTerm:{type:String,default:null},setSelection:{type:Function,default:function(){}}},data:function(){return{itemsPerPage:21,currentPage:1,searchTerm:null,searchedResources:[],loading:!1,selectedResource:null,searchError:null}},computed:{nextPageActive:function(){return!this.searchedResources.length<this.itemsPerPage},stockProvider:function(){return"Video"===this.resource.MediaType?{Name:"Pexels",URL:"https://www.pexels.com/"}:{Name:"Unsplash",URL:"https://www.unsplash.com/"}}},watch:{selectedResource:function(){this.setSelection(this.selectedResource,this.resource)}},mounted:function(){this.initSearchTerm&&(this.searchTerm=this.initSearchTerm,this.onSearchStockMedia())},methods:{searchNextPage:function(){this.currentPage+=1,this.onSearchStockMedia()},searchPrevPage:function(){this.currentPage-=1,this.onSearchStockMedia()},onSearchStockMedia:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/data/pc/util/unsplash_search","Video"==e.resource.MediaType&&"/data/pc/util/pexels_search",t.prev=2,e.searchedResources=[],e.loading=!0,t.next=7,e.$api.songfolder.searchStockResources(e.resource.MediaType,e.searchTerm.trim(),e.currentPage);case 7:r=t.sent,console.log(r),e.loading=!1,e.searchedResources=r,t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),e.loading=!1,e.searchError="Oops...something went wrong. Please try again.",console.warn(t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,13]])})))()}}}),c=(r(624),r(8)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-md-column flex-xl-row w-100"},[t("div",{staticClass:"col-sm-12 col-xl-4 ps-1 d-flex align-xl-items-center place-content-xl-center place-content-sm-stretch"},[t("div",{staticClass:"position-relative w-100 mt-xl-4 me-sm-5"},[t("div",{staticClass:"card position-relative img-preview mx-auto",staticStyle:{"max-width":"300px"}},["Image"==e.resource.MediaType?[e.selectedResource?e._e():t("div",{staticClass:"preview"}),e._v(" "),t("div",{staticClass:"preview",staticStyle:{"aspect-ratio":"1/1","background-size":"cover","background-position":"center"},style:e.selectedResource?e.selectedResource.imageUrl?"background-image: url("+e.selectedResource.imageUrl+")":"background-image: url(songtools/img/placeholders/sfp_SongImage.svg)":e.resource&&""!=e.resource.FileURL?"background-image: url("+e.resource.FileURL+")":"background-image: url(songtools/img/placeholders/sfp_SongImage.svg)"})]:"Video"==e.resource.MediaType?[e.selectedResource&&e.selectedResource.url?t("video",{key:"vp_"+e.selectedResource.url,staticClass:"preview",staticStyle:{"max-height":"300px"},attrs:{controls:""}},[t("source",{attrs:{src:e.selectedResource.url,type:"video/mp4"}})]):t("div",{staticClass:"preview",staticStyle:{"min-height":"300px","background-image":"url(songtools/img/placeholders/sfp_SongImage.svg)","aspect-ratio":"1/1","background-size":"cover","background-position":"center"}})]:e._e()],2),e._v(" "),e.selectedResource?t("p",{staticClass:"text-muted text-small fst-italic text-end p-1"},[e._v("\n        by "),t("a",{attrs:{href:e.selectedResource.AttributionUrl,target:"new"}},[e._v(e._s(e.selectedResource.Attribution))]),e._v(" via  "),t("a",{attrs:{href:e.stockProvider.URL,target:"new"}},[e._v(e._s(e.stockProvider.Name))])]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-100 flex-grow-1 mt-4"},[t("div",{staticClass:"d-flex flex-row align-items-center"},[t("div",{staticClass:"col flex-grow-1 mb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Search term"},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex-grow-0"},[t("button",{staticClass:"btn btn-transparent mb-2 p-2 ps-4 outline-none shadow-none",staticStyle:{outline:"none"},on:{click:function(t){return t.stopPropagation(),e.onSearchStockMedia()}}},[t("FontAwesomeIcon",{staticClass:"fs-4",attrs:{icon:["fas","search"]}})],1)])]),e._v(" "),e.loading?t("div",{staticClass:"d-flex flex-row align-items-center justify-content-center",staticStyle:{"min-height":"100px"}},[t("FontAwesomeIcon",{staticClass:"fs-3 text-muted fa-spin",attrs:{icon:["fas","compact-disc"]}})],1):e.searchError?t("div",{staticClass:"text-muted fst-italic p-2"},[e._v("\n      "+e._s(e.searchError)+"\n    ")]):0==e.searchedResources.length?t("div",{staticClass:"d-flex flex-row align-items-center"},[t("p",{staticClass:"text-muted"},[e._v("\n        No results found. Try a different search term.\n      ")])]):t("div",{staticClass:"d-flex flex-row align-items-center position-relative ms-2"},[t("div",{staticClass:"flex-grow-0 flex-shrink-0 position-absolute",staticStyle:{left:"-50px"}},[t("button",{staticClass:"bg-transparent border-0",class:{disabled:1==e.currentPage},attrs:{disabled:1==e.currentPage},on:{click:function(t){return t.stopPropagation(),e.searchPrevPage()}}},[t("FontAwesomeIcon",{staticClass:"fs-3 mx-2",attrs:{icon:["fas","angle-left"]}})],1)]),e._v(" "),t("div",{staticClass:"flex-grow-1"},[t("div",{staticClass:"d-flex flex-row flex-wrap align-items-center position-relative"},e._l(e.searchedResources,(function(r,o){return t("div",{key:"resourceItem"+o,staticClass:"resource-thumbnail m-1",class:{"selected box-shadow":e.selectedResource==r},staticStyle:{width:"60px",height:"60px","background-size":"cover","background-position":"center center","aspect-ratio":"1/1"},style:"background-image: url("+r.imageUrl+")",on:{click:function(t){t.stopPropagation(),e.selectedResource=r}}})})),0)]),e._v(" "),t("div",{staticClass:"flex-grow-0 flex-shrink-0"},[t("button",{staticClass:"bg-transparent border-0",class:{disabled:!e.nextPageActive},attrs:{disabled:!e.nextPageActive},on:{click:function(t){return t.stopPropagation(),e.searchNextPage()}}},[t("FontAwesomeIcon",{staticClass:"fs-3 mx-2",attrs:{icon:["fas","angle-right"]}})],1)])])])])}),[],!1,null,"66fc4334",null);t.default=component.exports},766:function(e,t,r){var content=r(862);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("3c5fc734",content,!0,{sourceMap:!1})},861:function(e,t,r){"use strict";r(766)},862:function(e,t,r){var o=r(27)(!1);o.push([e.i,".img-preview[data-v-6b1ecc87]{width:55px;height:55px;display:flex;align-items:center;align-content:center;justify-content:center;place-content:center;aspect-ratio:1/1;position:relative;margin-right:1rem;border-radius:5px;overflow:hidden;padding:5px;background-color:#eceeed}.img-preview .icon.music-icon[data-v-6b1ecc87]{opacity:.5;font-size:2rem;align-self:center;margin:auto}.img-preview .preview[data-v-6b1ecc87]{position:absolute;left:0;right:0;top:0;bottom:0;background-size:cover!important;aspect-ratio:1/1;background-position:50%;max-width:100%}.img-preview .video-preview[data-v-6b1ecc87]{max-width:100%;max-height:100%}.img-preview[data-v-6b1ecc87]{width:100%;height:auto}.song-preview audio[data-v-6b1ecc87]{width:100%}.cover[data-v-6b1ecc87]{position:absolute;border-radius:5px;left:0;right:0;top:0;bottom:0;display:flex;pointer-events:none;align-content:center;justify-content:center;place-content:center;align-items:center;font-size:1.8rem;background-color:rgba(71,71,71,.75)}.cover.rejected[data-v-6b1ecc87]{background-color:rgba(222,0,44,.75)}",""]),e.exports=o},929:function(e,t,r){"use strict";r.r(t);r(86);var o={name:"AssetDetails",props:{resource:{type:Object,default:function(){}},resourceDetails:{type:Function,default:function(){}},updateResource:{type:Function,default:function(){}},stockSelection:{type:Object,default:function(){}},isAreaExpanded:{type:Function,default:function(){}},getMediaType:{type:Function,default:function(){}},hasBeenUploaded:{type:Function,default:function(){}},isStockResource:{type:Function,default:function(){}},stringToParagraphs:{type:Function,default:function(){}},resourceWizardCode:{type:Function,default:function(){}},onSetSelectedStockResource:{type:Function,default:function(){}},initStockSearchTerm:{type:String,default:""},index:{type:Number,default:0}}},n=(r(861),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[!e.isStockResource(e.resource)||e.isStockResource(e.resource)&&e.hasBeenUploaded(e.resource)?t("div",{staticClass:"accordion-body container ms-0"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-3 ps-1 d-flex align-items-center place-content-center"},[t("div",{staticClass:"position-relative w-100"},[e.hasBeenUploaded(e.resource)?"Image"==e.getMediaType(e.resource)?[t("div",{staticClass:"card position-relative img-preview"},[t("div",{staticClass:"preview",style:"background-image: url("+e.resourceDetails(e.resource).PreviewURL+")",attrs:{alt:""}})])]:"Video"==e.getMediaType(e.resource)?[t("div",{staticClass:"card position-relative img-preview"},[t("video",{staticClass:"video-preview",attrs:{controls:"",crossorigin:"",playsinline:""}},[t("source",{attrs:{src:e.resourceDetails(e.resource).PreviewURL,type:"video/mp4"}})])])]:"Music"==e.getMediaType(e.resource)?[t("div",{staticClass:"card position-relative song-preview mr-2 w-100 border-0",class:{pending:"PendingVerification"==e.resourceDetails(e.resource).FileStatus}},[t("audio",{staticClass:"preview",attrs:{controls:"",crossorigin:"",playsinline:""}},[t("source",{attrs:{src:e.resourceDetails(e.resource).PreviewURL,type:"video/mp4"}})])])]:e._e():[t("div",{staticClass:"card position-relative img-preview bg-transparent border-0"},[t("div",{staticClass:"preview",style:"background-image: url("+e.resourceDetails(e.resource).PreviewURL+")"})])],e._v(" "),"PendingVerification"==e.resourceDetails(e.resource).FileStatus?[t("div",{staticClass:"cover"},[t("FontAwesomeIcon",{staticClass:"icon-pending text-light",attrs:{icon:["fas","hourglass-clock"]}})],1)]:"Rejected"==e.resourceDetails(e.resource).FileStatus?[t("div",{staticClass:"cover rejected"},[t("FontAwesomeIcon",{staticClass:"icon text-light",attrs:{icon:["fas","octagon-xmark"]}})],1)]:e._e()],2)]),e._v(" "),"PendingVerification"==e.resourceDetails(e.resource).FileStatus?t("div",{staticClass:"col flex-grow-1 mt-4"},[t("h5",[e._v("Your "+e._s(e.resourceDetails(e.resource).Name)+" is being reviewed")]),e._v(" "),t("div",[e._v("This "+e._s(e.resourceDetails(e.resource).Name)+" is being reviewed for approval by our team in order to make sure it meets the requirements. Once approved it will be activated for your campaign.")])]):"Rejected"==e.resourceDetails(e.resource).FileStatus?t("div",{staticClass:"col flex-grow-1 mt-4"},[t("h5",[e._v("Your "+e._s(e.resourceDetails(e.resource).Name)+" was rejected")]),e._v(" "),t("p",[e._v("This "+e._s(e.resourceDetails(e.resource).Name)+" was not approved. Please review and update.")]),e._v(" "),t("h6",[e._v("Rejection Reason")]),e._v(" "),t("p",[t("FontAwesomeIcon",{staticClass:"text-danger me-2",attrs:{icon:["fas","octagon-xmark"]}}),e._v(e._s(e.resourceDetails(e.resource).FileStatusDescription))],1)]):"Verified"==e.resourceDetails(e.resource).FileStatus?t("div",{staticClass:"col flex-grow-1 mt-4"},[t("h5",[t("FontAwesomeIcon",{staticClass:"text-success fs-4 me-2",attrs:{icon:["fas","check-circle"]}}),e._v(" Your "+e._s(e.resourceDetails(e.resource).Name)+" has been approved")],1),e._v(" "),t("p",[e._v("This "+e._s(e.resourceDetails(e.resource).Name)+" has been approved and it's ready to be used in your campaigns.")])]):t("div",{staticClass:"col flex-grow-1 mt-4"},[t("h5",[e._v("About your  "+e._s(e.resourceDetails(e.resource).Name))]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.stringToParagraphs(e.resourceDetails(e.resource).LongDescription))}})]),e._v(" "),t("div",{staticClass:"col flex-grow-0"},[t("SongFolderAssetUploader",{attrs:{"wizard-code":e.resourceWizardCode(e.resource),resource:e.resource,"folder-order":e.index+1,"update-resource":e.updateResource}})],1)])]):t("div",{staticClass:"accordion-body container ms-0"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col flex-grow-1 position-relative w-100"},[e.isAreaExpanded(e.resourceDetails(e.resource).WizardCode)?t("SongFolderStockResourceSelector",{key:e.resourceDetails(e.resource).WizardCode+e.isAreaExpanded(e.resourceDetails(e.resource).WizardCode),attrs:{resource:e.resourceDetails(e.resource),"set-selection":e.onSetSelectedStockResource,"init-search-term":e.initStockSearchTerm}}):e._e()],1),e._v(" "),t("div",{staticClass:"col flex-grow-0"},[t("SongFolderAssetUploader",{attrs:{"wizard-code":e.resourceWizardCode(e.resource),resource:e.resource,"folder-order":e.index+1,"update-resource":e.updateResource,"required-purchase":e.resourceDetails(e.resource).IsPremium,"stock-resource-selection":e.stockSelection}})],1)])])])}),[],!1,null,"6b1ecc87",null);t.default=component.exports;installComponents(component,{SongFolderAssetUploader:r(634).default,SongFolderStockResourceSelector:r(635).default})}}]);