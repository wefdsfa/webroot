webpackJsonp([124],{Frcs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("xd7I"),a("C331");var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"},attrs:{id:"transactionRecord"}},[a("view-box",[a("x-header",{staticClass:"transactionRecord-header",attrs:{title:"交易记录"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),a("div",{staticClass:"transactionRecord-content"},[a("div",{staticClass:"transactionRecord-container"},t._l(t.recordData,function(e,i){return a("div",{key:i,staticClass:"transactionRecord-cell"},[a("flexbox",[a("flexbox-item",{attrs:{span:10}},[a("div",{staticClass:"transactionRecord-time"},[t._v(t._s(e.time))]),t._v(" "),a("div",{staticClass:"transactionRecord-name"},[t._v(t._s(e.title))])]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"transactionRecord-money"},[t._v("\n               "+t._s(e.amount)+"\n              ")])])],1)],1)}),0)])],1)],1)},staticRenderFns:[]};var n=a("C7Lr")({props:{data:{default:""}},data:function(){return{recordData:[{title:"团费",time:"2018-11-06",amount:"-0.01"},{title:"党费",time:"2018-11-01",amount:"-0.01"},{title:"电费",time:"2018-10-30",amount:"-0.01"},{title:"住宿费",time:"2018-09-01",amount:"-0.01"},{title:"学费",time:"2018-09-01",amount:"-0.01"}]}},created:function(){},methods:{addBread:function(){this.$emit("addBread",{route:"/form/MFormLayout",title:""})},_back:function(){this.$emit("removeBread",this.data)}}},i,!1,function(t){a("Zj0p")},null,null);e.default=n.exports},Zj0p:function(t,e){}});