webpackJsonp([150],{GXCx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("C331"),n={props:{account:{default:null},data:{default:null}},data:function(){return{pageStatus:{pageLayout:{groups:[{title:"",cells:[{title:"学年:",name:"year",type:"input",required:!1,readonly:!0},{title:"缴费项目:",name:"name",type:"input",required:!1,readonly:!0},{title:"应缴金额:",name:"amount",type:"input",required:!1,readonly:!0},{title:"开始时间:",name:"beginTime",type:"input",required:!1,readonly:!0},{title:"结束时间:",name:"endTime",type:"input",required:!1,readonly:!0}]},{title:"",cells:[{title:"缴费详情:",name:"orderDetails",type:"textarea",required:!1,readonly:!0}]}]}},formFields:{year:"2018学年-2019学年",name:"缴费项目A",amount:"5200",amountPaid:"5200",beginTime:"2018-11-11",endTime:"2018-11-22",orderDetails:"条目1:300，条目2:400"}}},methods:{_back:function(){this.$emit("removeBread",this.data)},_submit:function(){var e=this;Object(i.d)({url:"/api/payment/orders",type:"post",data:{userId:this.account.userId,projectId:this.data.data.id},success:function(t){t.state?(t.data.amount=e.data.data.amount,e.$emit("addBread",{route:"payHall/MPaymentPage",title:"",data:t.data})):e.$toast(t.message)}})},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},_getApplication:function(){var e=this.data.data;this.formFields.orderNum=e.orderNum||"-",this.formFields.year=e.year+"-"+(parseInt(e.year)+1)+"学年",this.formFields.name=e.name,this.formFields.amount=e.amount,this.formFields.amountPaid=e.amountPaid,this.formFields.beginTime=e.beginTime,this.formFields.endTime=e.endTime,this.formFields.orderDetails=e.orderDetails}},created:function(){this._getApplication()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"payhall-application-mobile"},[a("view-box",[a("x-header",{staticClass:"payhall-application-header",attrs:{title:"学生缴费"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:e._s(e.icons("navigate_before"))},on:{click:e._back},slot:"overwrite-left"},[e._v("navigate_before")])]),e._v(" "),a("div",{staticClass:"apply-content"},[e._l(e.pageStatus.pageLayout.groups,function(t,i){return a("group",{key:i,staticClass:"info-group",attrs:{title:t.title,"label-width":"8em","label-margin-right":"2em","label-align":"left"}},e._l(t.cells,function(t,i){return["input"].indexOf(t.type)>=0?a("x-input",{key:i,ref:t.name+"_input",refInFor:!0,attrs:{title:t.title,readonly:t.readonly,"text-align":"right"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["textarea"].indexOf(t.type)>=0?a("x-textarea",{attrs:{title:t.title},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):e._e()}),1)}),e._v(" "),a("box",{staticClass:"submit-box"},[a("x-button",{staticClass:"custom-primary-blue",attrs:{plain:"",type:"primary"},nativeOn:{click:function(t){return e._submit(t)}}},[e._v("去缴费")])],1)],2)],1)],1)},staticRenderFns:[]};var l=a("Mz/3")(n,r,!1,function(e){a("vkpr")},null,null);t.default=l.exports},vkpr:function(e,t){}});