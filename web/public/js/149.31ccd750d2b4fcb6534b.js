webpackJsonp([149],{"N+Tn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("C331"),n={props:{account:{default:null},data:{default:null}},data:function(){return{recordData:[]}},methods:{_back:function(){this.$emit("removeBread",this.data)},_getRecords:function(){var t=this;Object(s.d)({url:"/api/payment/getpayrecord",type:"get",success:function(e){e.state?t.recordData=e.data.content||[]:t.$vux.toast.show({text:e.message,position:"bottom",type:"text"})}})},_checkDetail:function(t){console.log(t)}},created:function(){this._getRecords()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-records-page"},[a("view-box",[a("x-header",{staticClass:"payment-records-header",attrs:{title:"缴费记录"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),a("div",{staticClass:"payment-list"},t._l(t.recordData,function(e,s){return a("div",{key:s,staticClass:"payment-list-cell",on:{click:function(a){return t._checkDetail(e)}}},[a("flexbox",[a("flexbox-item",{attrs:{span:10}},[a("div",{staticClass:"payment-list-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"payment-list-time"},[t._v(t._s(e.payTime))])]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"payment-list-money"},[t._v("-"+t._s(e.amountPaid))])])],1)],1)}),0)],1)],1)},staticRenderFns:[]};var c=a("Mz/3")(n,i,!1,function(t){a("lQgF")},null,null);e.default=c.exports},lQgF:function(t,e){}});