(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{854:function(e,t,n){e.exports=n.p+"img/paypal-logo.bc32795.svg"},926:function(e,t,n){"use strict";n.r(t);n(186),n(65),n(31),n(11),n(80),n(64),n(41),n(32),n(55),n(56);var o,r=n(0),c=n(189),l=n(18),d=(n(15),n(138),n(23),n(303),n(48),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(47),n(54),n(59),n(188),n(34));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"ModalPurchase",data:function(){return{agreedToTerms:!0,artistGenres:[],cardProcessErrors:[],couponCode:null,couponError:null,couponValidated:!1,enablePaypalProcess:!1,loadingResults:!1,parsedSearch:null,paymentCard:null,paymentFormLoaded:!1,paymentProvider:"square",paymentError:!1,paypalDeviceData:null,paypalError:null,paypalPaymentMethod:null,paypalProcessing:!1,previousSearchTerm:"",processingPayment:!1,processingSongSelection:!1,promoDescription:"",promoSelectorVisible:!1,searchingInProgress:null,searchTimer:null,selectedMoP:"new",selectedSongSearchResult:null,showArtistSelectionDropdown:!1,showSearchResults:!1,songSearchResults:[],songSearchTerm:"",songSelectionError:null,view:"",viewCouponForm:!1,viewGenreSelector:!1}},computed:v(v(v({},Object(d.c)("artist",["artistPromoSelection","selectedSong"])),Object(d.c)("user",["user"])),{},{theaders:function(){return this.$api.data.headers(null)},modal:{get:function(){return this.$store.getters["app/modal"]},set:function(e){this.$store.dispatch("app/showModalWindow",e)}},accountArtistSelection:function(){return this.$store.getters["artist/accountArtistSelection"]},userStats:function(){return this.$store.getters["user/stats"]},isPaypalProcessEnabled:function(){var e=this;return null!=e.paypalPaymentMethod&&!0===e.enablePaypalProcess&&!e.paypalProcessing&&1==e.agreedToTerms},isCardPaymentEnabled:function(){var e=this;return e.isCouponRequired?!(e.processingPayment||!e.couponValidated||!e.agreedToTerms):!(e.processingPayment||!e.agreedToTerms)},doesCouponApply:function(){return!!(this.selectedPackage&&this.selectedPackage.CouponRequired>-1)},couponCodeEntered:function(){return!!this.couponCode&&this.couponCode.trim().length>0},isCouponRequired:function(){return!(!this.selectedPackage||1!=this.selectedPackage.CouponRequired)},selectedPackage:{get:function(){var e=this.$store.getters["user/selectedMembershipOption"];return e||{Name:null,Price:null,PromotionPeriod:null}},set:function(e){this.$store.dispatch("user/onSetSelectedMembershipOption",e)}},isLabel:function(){return this.$store.getters["user/isLabel"]},availablePackages:function(){return this.$store.getters["user/membershipOptions"]},membershipPackageSelection:function(){return this.selectedPackage},promoSelections:function(){return[]},requirementsFullfilled:function(){var e=this,t=!0;if(this.selectedPackageDetails){var n=this.selectedPackageDetails.PostFunctionParams.split(",");console.log(n,e.selectedSong),n.forEach((function(n){switch(n){case"spotifysongid":e.selectedSong&&""!=e.selectedSong.TrackId||(t=!1);break;case"description":""===e.promoDescription.trim()&&(t=!1)}}))}return t},selectedPackageDetails:function(){var e=this.membershipPackageSelection.Id,t=this.membershipPackageSelection;if(this.availablePackages){var n=this.availablePackages.filter((function(t){return t.PackageId===e}));n&&n.length>0&&(t=n[0])}return t},mustSelectPromotion:function(){var e=this.selectedPackageDetails;return!!e&&e.ForceMatchingSong},mustSelectSong:function(){var e=this.selectedPackageDetails;return!!e&&e.ForceSongSelection},requiresSongFolder:function(){return!(!this.selectedPackageDetails||!this.selectedPackageDetails.AdSFWizard||""==this.selectedPackageDetails.AdSFWizard)},filteredSongSearchResults:function(){var e=this;return e.songSearchResults?e.songSearchResults.filter((function(t){return t.SpotifyArtistId==e.accountArtistSelection.SpotifyArtistId})):null}}),watch:{paymentProvider:function(){"paypal"===this.paymentProvider&&null===this.paypalDeviceData&&this.initiatePaypalSetup()},selectedMoP:function(){this.buildPaymentForm()},view:function(){"selectPaymentMethod"!==this.view||this.paymentFormLoaded||this.checkInitForm()}},mounted:function(){this.initPaymentModal(),this.checkInitForm()},beforeDestroy:function(){var e=this;e.paymentForm&&(e.paymentForm.destroy(),e.paymentForm=null)},methods:(o={selectedArtistGenres:function(){var e=this,t=[];return e.accountArtistSelection&&e.accountArtistSelection.Genres&&e.accountArtistSelection.Genres.length>0&&(t=e.accountArtistSelection.Genres,Array.isArray(t)||(t=t.split(",")),t=Object(c.a)(new Set(t))),t},genrePillSelectedStyle:function(e){var style="pill-selector";return this.artistGenres.includes(e)?style=" hide":style+=" active",style},genrePillPromoStyle:function(e){var t=this.artistGenres,n="genre-pill";return t?(t.filter((function(t){return t.includes(e)})).length>0&&(n="selected-genre genre-pill"),n):""},toggleGenreSelector:function(){this.viewGenreSelector=!this.viewGenreSelector},selectPromoGenre:function(e){var t=this.artistGenres;e=e.trim(),t.includes(e)?t.length>1&&t.splice(t.indexOf(e),1):t.push(e),this.artistGenres=t},initPaymentModal:function(){if(1==this.selectedPackage.AutoProcess)this.selectedMoP="previous",this.view="processing",this.processPayment();else{this.view="selectPaymentMethod",console.log(this.view);var e=this.$cookie.get("couponCode");e&&""!=e&&this.doesCouponApply&&(this.couponCode=e,this.viewCouponForm=!0)}},SetupBreaintree:function(e,t){var n=this;console.log("setup braintree?");braintree.setup(t,"custom",{paypal:{container:"paypal-container",displayName:"Pentatone Inc.",singleUse:!1,billingAgreementDescription:e,locale:"en_US"},dataCollector:{paypal:!0},onPaymentMethodReceived:function(e){console.log("paypal onPaymentMethodReceived"),n.paypalPaymentMethod=e,n.braintree_associate_vault_sandbox(e.nonce,n.paypalDeviceData)},onReady:function(e){console.log("paypal ready"),n.paypalDeviceData=e.deviceData}})},braintree_associate_vault_sandbox:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r=n,n.$api.data.headers(null),$.ajax({url:"".concat(n.$config.apiRoot,"/data/pc/braintree/braintree_associate_vault"),type:"POST",dataType:"json",headers:n.theaders,contentType:"application/json",data:JSON.stringify({nonce:e,devicedata:t}),beforeSend:function(){$.ajaxSetup({xhrFields:{withCredentials:!0}})},success:function(data){data&&"ok"===data.status&&(r.enablePaypalProcess=!0)},error:function(e){console.warn(e)}});case 3:case"end":return o.stop()}}),o)})))()},initiatePaypalSetup:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("initiating paypal"),t.prev=1,t.next=4,e.$api.purchase.getPaypalNonce();case 4:(n=t.sent)&&n.data&&"ok"===n.data.status&&e.SetupBreaintree("Playlister.club Purchase",n.data.braintreeClientToken),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.responseJSON&&t.t0.responseJSON.error?console.warn(t.t0.responseJSON.error.message):console.warn(null!=t.t0.responseText?t.t0.responseText:t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},processPaymentPaypal:function(){var e=this;e.paypalProcessing||(e.paypalProcessing=!0,$.ajax({url:this.$config.apiRoot+e.selectedPackage.PaypalServiceURL,type:"POST",dataType:"json",headers:this.theaders,contentType:"application/json",data:JSON.stringify({dbCreditPackageId:e.selectedPackage.PackageId}),beforeSend:function(){$.ajaxSetup({xhrFields:{withCredentials:!0}})},success:function(t){var n="pp_".concat(e.generateUUID());e.recordTransactionEvent("purchase",n),t&&"ok"===t.status?(e.onCompleteProcessSuccess(),e.paypalProcessing=!1):(e.paypalError=!0,e.onUpdateDashboardAfterPurchase(),e.paypalProcessing=!1)},error:function(t){console.warn(t),this.paypalError=!0,e.onUpdateDashboardAfterPurchase(),e.paypalProcessing=!1}}))},checkInitForm:function(){"selectPaymentMethod"===this.view&&"square"===this.paymentProvider&&(this.initializeSquare(),this.userStats&&this.userStats.PaymentMethodLastDigits&&""!=this.userStats.PaymentMethodLastDigits.Value?this.selectedMoP="previous":this.selectedMop="new",this.buildPaymentForm())},buildPaymentForm:function(){var e=this;"selectPaymentMethod"!=e.view||"new"!=e.selectedMoP||e.paymentFormLoaded||e.initializeSquare()},resetModal:function(){this.view="selectPaymentMethod",this.processingPayment=!1,this.selectedMoP="new",this.cardProcessErrors=[],this.paymentFormLoaded=!1,this.couponCode=null,this.couponError=!1,this.couponValidated=!1},initializeSquare:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,console.log("initializing square"),"sq0idp-JdgJFZPruiUWdX6mM3LF8A","3M5EHYW351NZ5",n.paymentFormLoaded=!0,t.prev=5,o=Square.payments("sq0idp-JdgJFZPruiUWdX6mM3LF8A","3M5EHYW351NZ5"),t.next=9,o.card({});case 9:n.paymentCard=t.sent,n.paymentCard&&n.paymentCard.attach("#card-container"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),console.warn(t.t0),n.paymentFormLoaded=!1;case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))()},processPayment:function(){if(this.cardProcessErrors=[],!this.processingPayment)switch(this.selectedMoP){case"new":this.processPaymentWithNewCard();break;case"previous":this.processingPayment=!0,this.processPaymentWithSavedCard()}},processPaymentWithNewCard:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e,t.next=3,e.paymentCard.tokenize();case 3:"OK"!==(n=t.sent).status?(console.log("Encountered errors:"),n.errors.forEach((function(e){console.log("  ".concat(e.message))}))):(e.processingPayment=!0,o=n.token,e.processCardPayment(o));case 5:case"end":return t.stop()}}),t)})))()},processPaymentWithSavedCard:function(){this.processCardPayment(null)},processCardPayment:function(e){var t=this;t.paymentError=!1;var n=t.generateUUID(),o="?save_card=true&note=Promo Package Id ".concat(t.selectedPackage.PackageId,"&batchid=").concat(n);e&&(o+="&card-nonce=".concat(e));var r=t.selectedPackage.ServiceURL+o;try{$.ajax({url:this.$config.apiRoot+r,type:"POST",headers:this.theaders,success:function(e){console.log(e),t.recordTransactionEvent("purchase",n),"ok"==e.status?t.onCompleteProcessSuccess():t.paymentError=!0},error:function(e,n){console.warn("error processing card",e,n,r),t.paymentError=!0,t.processingPayment=!1,t.onUpdateDashboardAfterPurchase(),t.$gtag.event("purchase_error",{event_category:this.user.UserType,event_label:"error with: ".concat(t.selectedPackage.PackageId)})}})}catch(e){console.warn("error processing card",e,r),t.paymentError=!0,t.processingPayment=!1,t.onUpdateDashboardAfterPurchase(),t.$gtag.event("purchase_error",{event_category:this.user.UserType,event_label:"error with: ".concat(t.selectedPackage.PackageId)})}},onUpdateDashboardAfterPurchase:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadUpgradePackages();case 2:return t.next=4,e.loadAccountCampaigns();case 4:return e.$nuxt.$emit("onLoadProductAlerts"),e.$nuxt.$emit("onLoadSongPackages"),t.next=8,e.loadUserStats();case 8:e.updateRoute();case 9:case"end":return t.stop()}}),t)})))()},loadUpgradePackages:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/onLoadMembershipOptions");case 2:case"end":return t.stop()}}),t)})))()},loadAccountCampaigns:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("artist/onLoadAccountCampaigns");case 2:case"end":return t.stop()}}),t)})))()},loadUserStats:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/onLoadUserStats");case 2:case"end":return t.stop()}}),t)})))()},onCompleteProcessSuccess:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("completing purchase"),(o=(n=e).$cookie.get("couponCode"))&&""!=o&&n.$cookie.delete("couponCode"),void 0===n.selectedPackage.CouponCode||""==n.selectedPackage.CouponCode){t.next=15;break}return t.prev=5,r=n.couponError?n.couponError:"null",t.next=9,e.$api.purchase.updateCouponCode(n.selectedPackage.CouponCode,r);case 9:t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.warn(t.t0);case 15:if(console.log(n.selectedPackageDetails,""!=n.selectedPackageDetails.PostFunctionURL,n.requirementsFullfilled),!n.selectedPackageDetails||""==n.selectedPackageDetails.PostFunctionURL||!n.requirementsFullfilled){t.next=41;break}return t.prev=17,c=e.selectedPackageDetails.PostFunctionParams.split(","),l=n.selectedSong,d={},c.forEach((function(e){switch(e){case"spotifysongid":d[e]=l.TrackId;break;case"description":d[e]=n.promoDescription.trim();break;case"songname":d[e]=l.SongName;break;case"songimage":d[e]=l.AlbumImage;break;case"focalpoint":d[e]=n.songImageFocalPoint?n.songImageFocalPoint:"null";break;case"geos":d[e]=n.selectedCampaignGeos?n.selectedCampaignGeos:"null";break;case"campaignresources":d[e]=n.selectedCampaingResourcesStr;break;default:d[e]="null"}})),t.next=24,n.onProcessSongSelection();case 24:return t.next=26,e.$api.data.get(n.selectedPackageDetails.PostFunctionURL,d);case 26:(m=t.sent)[0]&&m[0].CampaignCode&&n.generateCampaignResources(m[0].CampaignCode),n.view="processPaymentSuccess",n.processingPayment=!1,n.onUpdateDashboardAfterPurchase(),t.next=39;break;case 33:t.prev=33,t.t1=t.catch(17),console.warn(t.t1),n.processingPayment=!1,n.view="processRequirementError",n.onUpdateDashboardAfterPurchase();case 39:t.next=44;break;case 41:n.view="processPaymentSuccess",n.processingPayment=!1,n.onUpdateDashboardAfterPurchase();case 44:case"end":return t.stop()}}),t,null,[[5,12],[17,33]])})))()},onProcessSongSelection:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$api.artist.insertSelectedTrackInfo();case 3:n=t.sent,console.warn("inserttrack",n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn("error inserting track",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getUserStats:function(){this.$store.dispatch("user/onLoadUserStats")},checkForSearchSubmit:function(e){13===e.keyCode&&""!=this.songSearchTerm.trim()&&this.searchForSong()},onResetCouponForm:function(){this.couponError=null,this.couponCode=null,this.viewCouponForm=!1,this.couponValidated=!1},onProcessCouponCode:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=e).couponError=null,!n.couponCodeEntered){t.next=14;break}return t.prev=3,t.next=6,e.$api.purchase.applyCouponCode(n.selectedPackage.PackageId,n.couponCode.trim());case 6:o=t.sent,(r=o.data[0])&&("error"==r.Status?n.couponError=r.StatusDescription:"ok"==r.Status&&(n.couponValidated=!0,(c=v({},n.membershipPackageSelection)).CouponCode=r.CouponCode,c.Name=r.Name,c.Id=r.PackageId,c.PaypalServiceURL=r.PaypalServiceURL,c.Price=r.Price,c.PromotionPeriod=r.PromotionPeriod,c.PromotionSongsAllowed=r.PromotionSongsAllowed,c.ServiceURL=r.ServiceURL,n.setMembershipPackageSelection(c))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.warn(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})))()},recordTransactionEvent:function(e,t){var n=v({},this.membershipPackageSelection);"purchase"==e&&(n.GUID=t||"pmm_".concat(this.generateUUID()))}},Object(l.a)(o,"resetModal",(function(){this.view="selectPaymentMethod",this.processingPayment=!1,this.selectedMoP="new",this.cardProcessErrors=[],this.paymentFormLoaded=!1,this.couponCode=null,this.couponError=!1,this.couponValidated=!1})),Object(l.a)(o,"onCloseModal",(function(){var e=this;this.paymentFormLoaded&&(e.paymentForm&&(e.paymentForm.destroy(),e.paymentForm=null),this.paymentFormLoaded=!1),this.resetModal(),this.modal=null})),o)},f=n(8),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal d-block backdrop",staticStyle:{background:"rgba(0,0,0,0.5)"},attrs:{id:"purchaseModal",tabindex:"-1"}},[t("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable text-dark"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[e._v("\n          "+e._s(e.selectedPackage.Name)+"  Purchase\n        ")]),e._v(" "),t("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:function(t){t.stopPropagation(),e.modal=null}}})]),e._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"payment-method-modal1"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"selectPaymentMethod"==e.view,expression:"view == 'selectPaymentMethod'"}],staticClass:"payment-method-modal"},[t("div",{staticClass:"column"},[t("div",{class:{"tall-window":"new"==e.selectedMoP}},[t("div",{staticClass:"row w-100 header-row"},[e.selectedPackage?t("div",{staticClass:"balance-due col"},[t("label",{attrs:{for:""}},[e._v("Total Due:")]),t("br"),t("span",{staticClass:"value fs-1 text-primary"},[e._v("$"+e._s(parseFloat(e.selectedPackage.Price).toFixed(2)))])]):e._e(),e._v(" "),t("div",{staticClass:"payment-provider col flex-grow-0"},[t("label",{attrs:{for:""}},[e._v("Pay with:")]),e._v(" "),t("div",{staticClass:"row flex-nowrap"},[t("div",{staticClass:"col flex-grow-0 logo-provider py-3",class:{" border-bottom border-5 border-primary":"square"===e.paymentProvider},on:{click:function(t){t.stopPropagation(),e.paymentProvider="square"}}},[t("div",{staticClass:"d-flex flex-row flex-nowrap text-nowrap"},[t("FontAwesomeIcon",{staticClass:"icon fs-5 me-2",attrs:{icon:["fas","credit-card"]}}),t("span",{staticClass:"label text-nowrap"},[e._v("Credit Card")])],1)]),e._v(" "),t("div",{staticClass:"col flex-grow-0 logo-provider py-3",class:{" border-bottom border-5 border-primary":"paypal"===e.paymentProvider},on:{click:function(t){t.stopPropagation(),e.paymentProvider="paypal"}}},[t("img",{staticStyle:{width:"150px",height:"25px"},attrs:{src:n(854),alt:"Paypal"}})])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"square"===e.paymentProvider,expression:"paymentProvider==='square'"}],staticClass:"column flex provider"},[t("div",{staticClass:"column flex position-relative",staticStyle:{"min-height":"300px"}},[t("div",{staticClass:"scroller"},[e.userStats?t("div",[e.userStats&&e.userStats.PaymentMethodLastDigits&&""!=e.userStats.PaymentMethodLastDigits.Value?t("div",[t("h5",[e._v("Select your method of payment:")]),e._v(" "),t("div",{staticClass:"form-item mb-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMoP,expression:"selectedMoP"}],staticClass:"form-select",attrs:{id:"",name:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedMoP=t.target.multiple?n:n[0]}}},[e.userStats&&""!=e.userStats.PaymentMethodLastDigits.Value?t("option",{attrs:{selected:"",value:"previous"}},[e._v("\n                                  "+e._s(e.userStats.PaymentMethodLastDigits.Value)+"\n                                ")]):e._e(),e._v(" "),t("option",{attrs:{value:"new"}},[e._v("\n                                  New credit card\n                                ")])])])]):t("div",[t("h5",[e._v("Enter your method of payment:")])])]):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"new"==e.selectedMoP,expression:"selectedMoP == 'new'"}],staticClass:"new-payment"},[t("div",{attrs:{id:"card-container"}})]),e._v(" "),e.paymentError?t("div",{staticClass:"payment-error p-2 text-muted"},[t("font-awesome-icon",{staticClass:"text-danger icon me-1",attrs:{icon:["fas","exclamation-triangle"]}}),e._v(" "),t("span",[e._v("There was an error processing your payment. Please review payment method information and try again.")])],1):e._e()])]),e._v(" "),t("div",{staticClass:"modal-footer"},[e.doesCouponApply?t("div",{staticClass:"column flex-grow-1 enter-coupon tiny text-left"},[e.couponValidated?t("div",{staticClass:"coupon-success text-left"},[t("font-awesome-icon",{staticClass:"icon success",attrs:{icon:["fas","check-circle"]}}),e._v("Coupon code "),t("strong",[e._v(e._s(e.couponCode))]),e._v(" applied.\n                        ")],1):t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"cta",on:{click:function(t){t.stopPropagation(),e.viewCouponForm=!0}}},[e.viewCouponForm||e.isCouponRequired?t("span",[e._v("Enter Coupon Code")]):t("span",{staticClass:"btn-link"},[e._v("Have a Coupon Code?")])]),e._v(" "),e.viewCouponForm||e.isCouponRequired?t("div",{staticClass:"form-coupon mb-2 d-flex flex-row row-nowrap justify-content-between align-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.couponCode,expression:"couponCode"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:e.couponCode},on:{input:function(t){t.target.composing||(e.couponCode=t.target.value)}}}),e._v(" "),t("button",{staticClass:"btn btn-sm btn-primary mx-2",attrs:{disabled:!e.couponCodeEntered},on:{click:function(t){return t.stopPropagation(),e.onProcessCouponCode()}}},[e._v("\n                                Apply\n                              ")]),e._v(" "),t("font-awesome-icon",{staticClass:"close-coupon-cta text-muted",attrs:{icon:["fas","times-circle"]},on:{click:function(t){return t.stopPropagation(),e.onResetCouponForm()}}})],1):e._e()]),e._v(" "),e.couponError?t("div",{staticClass:"errors"},[t("font-awesome-icon",{staticClass:"text-danger icon me-1",attrs:{icon:["fas","exclamation-triangle"]}}),e._v(" "),t("span",{staticClass:"error text-muted"},[e._v(e._s(e.couponError))])],1):e._e()])]):e._e(),e._v(" "),t("div",{staticClass:"column tiny",staticStyle:{"padding-bottom":"10px"}},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.agreedToTerms,expression:"agreedToTerms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.agreedToTerms)?e._i(e.agreedToTerms,null)>-1:e.agreedToTerms},on:{change:function(t){var n=e.agreedToTerms,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.agreedToTerms=n.concat([null])):c>-1&&(e.agreedToTerms=n.slice(0,c).concat(n.slice(c+1)))}else e.agreedToTerms=r}}}),e._v(" I agree with the "),t("a",{attrs:{href:"https://www.playlister.club/resources/SSATC.html",target:"_blank"}},[e._v("Playlister Club Self-Serve Advertising Terms and Conditions.")])]),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"columns"},[t("button",{staticClass:"btn m-2 btn-secondary",on:{click:function(t){return t.stopPropagation(),e.onCloseModal()}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),t("button",{staticClass:"btn m-2 btn-primary",attrs:{disabled:!e.isCardPaymentEnabled},on:{click:function(t){return t.stopPropagation(),e.processPayment()}}},[e._v("\n                          Process\n                        ")])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"paypal"===e.paymentProvider,expression:"paymentProvider === 'paypal'"}],staticClass:"column flex provider"},[t("div",{staticClass:"column flex position-relative",staticStyle:{"min-height":"300px"}},[t("h5",[e._v("\n                        Connect your account:\n                      ")]),e._v(" "),t("div",{staticClass:"w-100 d-flex flex-column align-items-center justify-content-center m-auto"},[t("div",{staticClass:"paypal-container p-3 text-center d-flex align-content-center justify-content-center w-100",attrs:{id:"paypal-container"}},[e.paypalDeviceData?e._e():t("FontAwesomeIcon",{staticClass:"fa-spin icon fs-1 text-muted opacity-50",attrs:{icon:["fas","compact-disc"]}})],1),e._v(" "),e.paypalError?t("div",{staticClass:"paypal-error p-2 text-muted"},[t("font-awesome-icon",{staticClass:"text-danger icon me-1",attrs:{icon:["fas","exclamation-triangle"]}}),e._v(" "),t("span",[e._v("There was an error connecting to PayPal. Please try again.")])],1):e._e()])]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"d-flex flex-column flex-grow-1"},[e.doesCouponApply?t("div",{staticClass:"column enter-coupon tiny"},[e.couponValidated?t("div",{staticClass:"coupon-success"},[t("font-awesome-icon",{staticClass:"icon success",attrs:{icon:["fas","check-circle"]}}),e._v("Coupon code "),t("strong",[e._v(e._s(e.couponCode))]),e._v(" applied.\n                          ")],1):t("div",{},[t("div",{staticClass:"columns"},[t("div",{staticClass:"cta",on:{click:function(t){t.stopPropagation(),e.viewCouponForm=!0}}},[e.viewCouponForm||e.isCouponRequired?t("span",[e._v("Enter Coupon Code")]):t("span",{staticClass:"btn-link"},[e._v("Have a Coupon Code?")])]),e._v(" "),e.viewCouponForm||e.isCouponRequired?t("div",{staticClass:"form-coupon mb-2 d-flex flex-row row-nowrap justify-content-between align-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.couponCode,expression:"couponCode"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:e.couponCode},on:{input:function(t){t.target.composing||(e.couponCode=t.target.value)}}}),e._v(" "),t("button",{staticClass:"btn btn-sm btn-primary mx-2",attrs:{disabled:!e.couponCodeEntered},on:{click:function(t){return t.stopPropagation(),e.onProcessCouponCode()}}},[e._v("\n                                  Apply\n                                ")]),e._v(" "),t("font-awesome-icon",{staticClass:"close-coupon-cta text-muted",attrs:{icon:["fas","times-circle"]},on:{click:function(t){return t.stopPropagation(),e.onResetCouponForm()}}})],1):e._e()]),e._v(" "),e.couponError?t("div",{staticClass:"errors"},[t("font-awesome-icon",{staticClass:"text-danger icon me-1",attrs:{icon:["fas","exclamation-triangle"]}}),e._v(" "),t("span",{staticClass:"error text-muted"},[e._v(e._s(e.couponError))])],1):e._e()])]):e._e(),e._v(" "),t("div",{staticClass:"column tiny",staticStyle:{"padding-bottom":"10px"}},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.agreedToTerms,expression:"agreedToTerms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.agreedToTerms)?e._i(e.agreedToTerms,null)>-1:e.agreedToTerms},on:{change:function(t){var n=e.agreedToTerms,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.agreedToTerms=n.concat([null])):c>-1&&(e.agreedToTerms=n.slice(0,c).concat(n.slice(c+1)))}else e.agreedToTerms=r}}}),e._v(" I agree with the "),t("a",{attrs:{href:"https://www.playlister.club/resources/SSATC.html",target:"_blank"}},[e._v("Playlister Club Self-Serve Advertising Terms and Conditions.")])])])]),e._v(" "),t("div",{staticClass:"columns"},[t("button",{staticClass:"btn m-2 btn-secondary",on:{click:function(t){return t.stopPropagation(),e.onCloseModal()}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),t("button",{staticClass:"btn m-2 btn-primary",attrs:{disabled:!e.isPaypalProcessEnabled},on:{click:function(t){return t.stopPropagation(),e.processPaymentPaypal()}}},[e._v("\n                          Process\n                        ")])])])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"processing"==e.view,expression:"view=='processing'"}],staticClass:"payment-method-modal"},[t("div",{staticClass:"column"},[t("div",{staticClass:"loading-message d-flex flex-column align-content-center align-items-center justify-content-center",staticStyle:{height:"50vh","max-height":"300px"}},[t("font-awesome-icon",{staticClass:"loading-icon icon fa-spin text-muted fs-4",attrs:{icon:["fas","compact-disc"]}}),e._v(" "),t("h5",{staticClass:"text-center pt-3 pb-3"},[e._v("\n                    Processing... Please wait.\n                  ")])],1)])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"processPaymentSuccess"==e.view,expression:"view == 'processPaymentSuccess'"}],staticClass:"payment-method-modal"},[t("div",{staticClass:"column"},[t("div",{},[t("div",{staticClass:"d-flex align-content-center justify-content-center flex-column align-items-center",staticStyle:{"min-height":"300px"}},[t("font-awesome-icon",{staticClass:"text-success icon fs-1 mb-2",attrs:{icon:["far","check-circle"]}}),e._v(" "),t("h2",[e._v("Success!")]),e._v(" "),t("p",[e._v("Your transaction has been processed.")])],1),e._v(" "),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"columns"},[t("button",{staticClass:"btn",on:{click:function(t){return t.stopPropagation(),function(){e.onCloseModal()}.apply(null,arguments)}}},[e._v("\n                        Close\n                      ")])])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"processPaymentError"==e.view,expression:"view == 'processPaymentError'"}],staticClass:"payment-method-modal"},[t("div",{staticClass:"column"},[t("div",{},[t("div",{staticClass:"d-flex align-content-center justify-content-center flex-column align-items-center",staticStyle:{"min-height":"300px"}},[t("font-awesome-icon",{staticClass:"text-danger icon fs-1 mb-2",attrs:{icon:["fas","ban"]}}),e._v(" "),t("h2",[e._v("Oops! Something went wrong.")]),e._v(" "),t("p",[e._v("Unfortunately, we weren't able to process this transaction. Please try again later.")])],1),e._v(" "),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"columns"},[t("button",{staticClass:"btn",on:{click:function(t){return t.stopPropagation(),function(){e.onCloseModal()}.apply(null,arguments)}}},[e._v("\n                        Close\n                      ")])])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"serviceUnavailableError"==e.view,expression:"view == 'serviceUnavailableError'"}],staticClass:"payment-method-modal"},[t("div",{staticClass:"column"},[t("div",{},[t("div",{staticClass:"d-flex align-content-center justify-content-center flex-column align-items-center",staticStyle:{"min-height":"300px"}},[t("font-awesome-icon",{staticClass:"text-warning fs-1 mb-2 icon",attrs:{icon:["fas","exclamation-triangle"]}}),e._v(" "),t("h2",[e._v("Service unavailable.")]),e._v(" "),t("p",[e._v("The credit card processing service is unavailable at this time. Please try again later.")])],1),e._v(" "),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"columns"},[t("button",{staticClass:"btn",on:{click:function(t){return t.stopPropagation(),function(){e.onCloseModal()}.apply(null,arguments)}}},[e._v("\n                        Close\n                      ")])])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"processRequirementError"==e.view,expression:"view == 'processRequirementError'"}],staticClass:"payment-method-modal"},[t("div",{staticClass:"column"},[t("div",{},[t("div",{staticClass:"column result-notification"},[t("font-awesome-icon",{staticClass:"warning icon",attrs:{icon:["fas","exclamation-triangle"]}}),e._v(" "),t("h5",[e._v("Error Processing Request.")]),e._v(" "),e._m(1)],1),e._v(" "),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"columns"},[t("button",{staticClass:"modal-btn",on:{click:function(t){return t.stopPropagation(),function(){e.reloadArtistInfo(),e.onCloseModal()}.apply(null,arguments)}}},[e._v("\n                        Close\n                      ")])])])])])])])])])])])])}),[function(){var e=this,t=e._self._c;return t("div",[e._v("Card payment acceptance is handled via the "),t("a",{attrs:{href:"https://squareup.com/us/en",target:"_blank"}},[e._v("Square")]),e._v(" app and is currently available in the US, Canada, Japan, Australia, and the United Kingdom.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("We encountered an error while completing your purchase. Please contact "),t("a",{staticClass:"link",attrs:{href:"mailto:support@playlister.club?Subject:Purchase error encountered"}},[e._v("support@playlister.club")]),e._v(" for assistance.")])}],!1,null,"53d2cb76",null);t.default=component.exports}}]);