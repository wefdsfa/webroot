webpackJsonp([68],{"60xa":function(t,i,e){"use strict";(function(t){var n=e("C331"),s=e("Y/Kc");e.n(s);i.a={props:{data:{default:""}},data:function(){return{signInName:"",qrcodeRefreshType:[],qrcodeRefreshTypeOption:0,needSignOffOption:"否",needSignOff:["是","否"],signInStartTime:"",signInEndTime:"",startTime:"",endTime:"",activityInfo:{},signInfo:{},isCreat:!0,isSignOut:!1,blockDuplicatClicks:!1}},created:function(){var i=this;["","","","","","",""].forEach(function(t,e){0===e?i.qrcodeRefreshType.push({key:5*e,id:5*e,value:"静态码"}):i.qrcodeRefreshType.push({key:5*e,id:5*e,value:5*e+"秒"})}),this.activityInfo=this.data.activityInfo,this.signInfo=this.data.data,this.startTime=new Date(this.activityInfo.applyStartTime.replace(/-/g,"/")).getTime(),this.endTime=new Date(this.activityInfo.endTime.replace(/-/g,"/")).getTime()+108e5,t.isEmptyObject(this.data.data)?this.isCreat=!0:(this.signInName=this.signInfo.signName,this.qrcodeRefreshTypeOption=this.signInfo.qrCodeType,this.signInStartTime=this.signInfo.signStartTime,this.signInEndTime=this.signInfo.signEndTime,this.needSignOffOption=this.signInfo.haveSignOut?"是":"否",this.isCreat=!1),this.isSignOut=this.data.isSignOut},methods:{_back:function(){this.$emit("removeBread",this.data)},changeDate:function(t){var i=new Date(t);return i.getFullYear()+"-"+((i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1)+"-")+((i.getDate()<10?"0"+i.getDate():i.getDate())+" ")+((i.getHours()<10?"0"+i.getHours():i.getHours())+":")+(i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes())},_signInDetail:function(){this.$emit("addBread",{route:"/activity/MSignInDetail",title:""})},_editSignIn:function(){this.$emit("addBread",{route:"/activity/MCreateSignIn",title:""})},_create:function(){var t=this;return this.signInName?!this.blockDuplicatClicks&&(this.blockDuplicatClicks=!0,void Object(n.e)({url:"/api/sc/activityProcesses/createActivitySign",type:"post",data:{activityId:this.activityInfo.id,signName:this.signInName,qrCodeType:this.qrcodeRefreshTypeOption,haveSignOut:"是"===this.needSignOffOption,signStartTime:this.signInStartTime?this.signInStartTime:this.activityInfo.applyStartTime,signEndTime:this.signInEndTime?this.signInEndTime:this.changeDate(this.endTime)},success:function(i){t.blockDuplicatClicks=!1,i.state?(t.data.isUpdateLastPage=!0,t.$emit("removeBread",t.data)):t._toast(i.message)}})):this._toast("名称不能为空")},_save:function(){var t=this;return this.signInName?!this.blockDuplicatClicks&&(this.blockDuplicatClicks=!0,void Object(n.e)({url:"/api/sc/activityProcesses/updateActivitySign/"+this.signInfo.signId,type:"put",data:{signName:this.signInName,qrCodeType:this.qrcodeRefreshTypeOption,haveSignOut:"是"===this.needSignOffOption,signStartTime:this.signInStartTime?this.signInStartTime:this.activityInfo.applyStartTime,signEndTime:this.signInEndTime?this.signInEndTime:this.changeDate(this.endTime)},success:function(i){t.blockDuplicatClicks=!1,i.state?(t.data.isUpdateLastPage=!0,t.$emit("removeBread",t.data)):t._toast(i.message)}})):this._toast("名称不能为空")},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})},_timeSelect:function(t,i){var e=this,n=new Date(this.signInStartTime.replace(/-/g,"/")).getTime(),s=new Date(this.signInEndTime.replace(/-/g,"/")).getTime();"start"===i?(n<this.startTime&&(setTimeout(function(){e.signInStartTime=""},100),this.$vux.alert.show({title:"签到开始时间要在报名开始时间"+this.activityInfo.applyStartTime+"之后"})),n>this.endTime&&(setTimeout(function(){e.signInStartTime=""},100),this.$vux.alert.show({title:"签到开始时间要在活动结束后三个小时"+this.changeDate(this.endTime)+"之前"})),this.signInEndTime&&n>s&&(setTimeout(function(){e.signInStartTime=""},100),this.$vux.alert.show({title:"签到开始时间要在签到结束时间"+this.signInEndTime+"之前"}))):(s>this.endTime&&(setTimeout(function(){e.signInEndTime=""},100),this.$vux.alert.show({title:"签到结束时间要在活动结束后三个小时"+this.changeDate(this.endTime)+"之前"})),s<this.startTime&&(setTimeout(function(){e.signInEndTime=""},100),this.$vux.alert.show({title:"签到结束时间要在报名开始时间"+this.activityInfo.applyStartTime+"之后"})),this.signInStartTime&&n>s&&(setTimeout(function(){e.signInEndTime=""},100),this.$vux.alert.show({title:"签到结束时间要在签到开始时间"+this.signInStartTime+"之后"})))}}}}).call(i,e("qqHy"))},6627:function(t,i,e){"use strict";(function(t){e("C331");var i=e("Y/Kc");e.n(i)}).call(i,e("qqHy"))},bFtx:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("6627");var n=e("60xa"),s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"creatSignIn"}},[e("view-box",[e("x-header",{staticClass:"creatSignIn-header"},[e("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),e("div",{staticClass:"creatSignIn-content"},[e("group",{staticClass:"info-group"},[e("x-input",{staticClass:"signIn-info-input",attrs:{title:"签到名称","text-align":"right",placeholder:"请填写"},model:{value:t.signInName,callback:function(i){t.signInName=i},expression:"signInName"}}),t._v(" "),e("popup-radio",{attrs:{title:"二维码刷新类型",options:t.qrcodeRefreshType,"value-text-align":"right",placeholder:"请选择"},model:{value:t.qrcodeRefreshTypeOption,callback:function(i){t.qrcodeRefreshTypeOption=i},expression:"qrcodeRefreshTypeOption"}}),t._v(" "),e("datetime",{attrs:{title:"签到开始时间",placeholder:"请选择","value-text-align":"right",format:"YYYY-MM-DD HH:mm"},on:{"on-change":function(i){return t._timeSelect(i,"start")}},model:{value:t.signInStartTime,callback:function(i){t.signInStartTime=i},expression:"signInStartTime"}}),t._v(" "),e("datetime",{attrs:{title:"签到结束时间",placeholder:"请选择","value-text-align":"right",format:"YYYY-MM-DD HH:mm"},on:{"on-change":function(i){return t._timeSelect(i,"end")}},model:{value:t.signInEndTime,callback:function(i){t.signInEndTime=i},expression:"signInEndTime"}}),t._v(" "),t.isSignOut?t._e():e("popup-radio",{attrs:{title:"是否需要签退",options:t.needSignOff,"value-text-align":"right"},model:{value:t.needSignOffOption,callback:function(i){t.needSignOffOption=i},expression:"needSignOffOption"}})],1)],1),t._v(" "),e("box",{staticClass:"submit-box",attrs:{gap:"16px"}},[t.isCreat?e("x-button",{staticClass:"custom-primary-blue",attrs:{plain:"",type:"primary"},nativeOn:{click:function(i){return t._create()}}},[t._v("创建")]):e("x-button",{staticClass:"custom-primary-blue",attrs:{plain:"",type:"primary"},nativeOn:{click:function(i){return t._save()}}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var a=function(t){e("xXUk")},o=e("C7Lr")(n.a,s,!1,a,null,null);i.default=o.exports},xXUk:function(t,i){}});