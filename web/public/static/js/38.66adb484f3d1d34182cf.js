webpackJsonp([38],{NV6o:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("IvJb"),a("C331");var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"myPayment"}},[a("view-box",[a("x-header",{staticClass:"myPayment-header",attrs:{title:"我的缴费"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),a("div",{staticClass:"form-nav"},t._l(t.tabs,function(e,i){return a("div",{key:i,staticClass:"form-tab",class:{active:t.isSelect==e.id},on:{click:function(a){t.changeTab(e.id)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),t._v(" "),a("div",{staticClass:"myPayment-content"},["pending"===t.isSelect?a("div",{staticClass:"pending-list"},t._l(t.pendingData,function(e,i){return a("div",{key:i,staticClass:"pending-cell",on:{click:function(a){t.goToPayment(e)}}},[a("flexbox",[a("flexbox-item",{attrs:{span:9}},[a("div",{staticClass:"pending-name"},[t._v(t._s(e.title)+" "),a("span",{staticClass:"status"},[t._v("待缴")])]),t._v(" "),a("div",[t._v(t._s(e.amount))]),t._v(" "),a("div",{staticClass:"pending-time"},[t._v(t._s(e.time))])]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"pending-btn"},[t._v("\n               去缴费\n              ")])])],1)],1)})):a("div",{staticClass:"paid-list"},t._l(t.paidData,function(e,i){return a("div",{key:i,staticClass:"pending-cell"},[a("flexbox",[a("flexbox-item",{attrs:{span:9}},[a("div",{staticClass:"pending-name"},[t._v(t._s(e.title)+" "),a("span",{staticClass:"status"},[t._v("已缴")])]),t._v(" "),a("div",[t._v(t._s(e.amount))]),t._v(" "),a("div",{staticClass:"pending-time"},[t._v(t._s(e.time))])]),t._v(" "),a("flexbox-item")],1)],1)}))])],1)],1)},staticRenderFns:[]};var s=a("C7Lr")({props:{data:{default:""},update:{default:!1}},data:function(){return{tabs:[{id:"pending",name:"待缴"},{id:"paid",name:"已缴"}],isSelect:"pending",pendingData:[{title:"学费",time:"2018-11-06",amount:"0.01",status:"pay",code:11001},{title:"住宿费",time:"2018-11-06",amount:"0.01",status:"pay",code:11002},{title:"团费",time:"2018-11-06",amount:"0.01",status:"pay",code:11003},{title:"党费",time:"2018-11-06",amount:"0.01",status:"pay",code:11004},{title:"留学生缴费",time:"2018-11-06",amount:"0.01",status:"pay",code:11005},{title:"四六级",time:"2018-11-06",amount:"0.01",status:"pay",code:11006},{title:"重修",time:"2018-11-06",amount:"0.01",status:"pay",code:11007},{title:"考试",time:"2018-11-06",amount:"0.01",status:"pay",code:11008},{title:"电费",time:"2018-11-06",amount:"0.01",status:"pay",code:11009}],paidData:[{title:"考试",time:"2018-11-06",amount:"0.01",status:"paid",code:11008},{title:"重修",time:"2018-11-06",amount:"0.01",status:"paid",code:11007},{title:"电费",time:"2018-11-06",amount:"0.01",status:"pay",code:11009}]}},computed:{},watch:{},created:function(){},methods:{_back:function(){this.$emit("removeBread",this.data)},changeTab:function(t){this.isSelect=t},goToPayment:function(t){this.$emit("addBread",{route:"/paymentHall/paymentDetail",title:t.title,url:"/aggregation/payment/ccb/check?code="+t.code})}}},i,!1,function(t){a("dW5b")},null,null);e.default=s.exports},dW5b:function(t,e){}});