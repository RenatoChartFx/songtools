(window.webpackJsonp=window.webpackJsonp||[]).push([[74,40],{797:function(t,e,n){"use strict";n.r(e);var o={name:"ProductMaintenanceMsg",computed:{selectedProduct:function(){return this.$store.getters["app/selectedProduct"]},productName:function(){return this.selectedProduct&&this.selectedProduct.Name?this.selectedProduct.Name:"This product"}}},c=n(8),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-3 container d-flex flex-xl-row flex-sm-column align-self-center pt-5 justify-content-center align-items-center"},[e("div",{staticClass:"px-5 pb-sm-5 pb-xl-0"},[e("span",{staticClass:"position-relative d-inline-block"},[e("FontAwesomeIcon",{staticClass:"display-1 text-gray-200",staticStyle:{"font-size":"10rem","margin-right":"3.6rem"},attrs:{icon:["fal","server"]}}),t._v(" "),e("font-awesome-icon",{staticClass:"maintenance-icon display-2 text-primary position-absolute",staticStyle:{right:"-1.36rem",bottom:"0.36rem"},attrs:{icon:["fas","tools"]}})],1)]),t._v(" "),e("div",{staticClass:"ps-4 text-sm-center text-xl-start",staticStyle:{"max-width":"720px"}},[e("h1",[t._v(t._s(t.productName)+" is currently under maintenance")]),t._v(" "),e("p",[t._v("Due to maintenance, this product is currently unavailable. Please check back later... ")]),t._v(" "),e("button",{staticClass:"btn btn-outline-light btn-rounded"},[t._v("\n      Refresh Status\n    ")])])])}),[],!1,null,"1c041e16",null);e.default=component.exports},912:function(t,e,n){"use strict";n.r(e);var o={name:"SongFlyMaintenance",components:{ProductStatusNotification:n(195).a},layout:"productInfo",mounted:function(){},methods:{}},c=n(8),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"flex-grow-1 d-flex flex-column"},[t("ProductStatusNotification",{},[t("SongtoolsMaintenanceMessage")],1)],1)}),[],!1,null,"51f48d3c",null);e.default=component.exports;installComponents(component,{SongtoolsMaintenanceMessage:n(797).default})}}]);