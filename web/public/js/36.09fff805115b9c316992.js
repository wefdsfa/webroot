webpackJsonp([36],{"4CWm":function(t,a,e){"use strict";(function(t){var s=e("3SZ7"),i=e.n(s),n=(e("wHeh"),e("C331"));a.a={props:{},created:function(){var t=localStorage.getItem("lang");Object(n.f)(t)&&(this.lang=t),this.getJoinList(),this.getBriefList(),this.getCollegesList(),this.getContentTypeList(),this.getTypeList()},data:function(){return{lang:"zh-cn",briefList:[],collegesList:[],contentTypeList:[],typeList:[],joinList:[],coverImage:"",coverImgList:[],activeImgList:[],childTypeList:[],typePoint:"",params:{applyAuditNeeded:!0,applyEndTime:"",applyStartTime:"",contactWay:"",contentTypeId:"",studentCode:"",endTime:"",images:[],introduction:"",name:"",organizations:[{organizationId:"",type:"PUBLISHER"},{organizationId:"",type:"SPONSOR"},{organizationId:"",type:"PURVEYOR"},{organizationId:"",type:"ASSISTANT"}],place:"",startTime:"",studentOriented:[{code:"05014000"}],typeId:"",userLimit:""}}},computed:{translate:function(){return Object(n.f)(this.lang).creatActivity}},methods:{submitForm:function(){var t=this;if(this.params.images=[],this.params.name)if(this.params.typeId)if(this.params.contentTypeId)if(this.params.organizations[0].organizationId)if(this.params.organizations[1].organizationId)if(this.coverImgList.length)if(this.params.images.push({image:this.coverImgList[0].hash,isCover:!0}),this.params.introduction)if(this.params.startTime)if(this.params.endTime)if(this.params.applyStartTime)if(this.params.applyEndTime)if(this.params.place)if(this.params.contactWay)if(this.params.studentOriented.length){this.activeImgList.length&&this.params.images.push({image:this.activeImgList[0].hash,isCover:!1}),this.params.studentOriented=this.params.studentCode.split(",").map(function(t){return{code:t}});var a=JSON.parse(i()(this.params));a.organizations[3].organizationId||a.organizations.splice(3,1),a.organizations[2].organizationId||a.organizations.splice(2,1),a.startTime=a.startTime.substring(0,16),a.endTime=a.endTime.substring(0,16),a.applyStartTime=a.applyStartTime.substring(0,16),a.applyEndTime=a.applyEndTime.substring(0,16);Object(n.c)("/api/sc/activities",a).then(function(a){a.state?(t.$toast("发布成功!"),t.params={applyAuditNeeded:!0,applyEndTime:"",applyStartTime:"",contactWay:"",contentTypeId:"",studentCode:"",endTime:"",images:[],introduction:"",name:"",organizations:[{organizationId:"",type:"PUBLISHER"},{organizationId:"",type:"SPONSOR"},{organizationId:"",type:"PURVEYOR"},{organizationId:"",type:"ASSISTANT"}],place:"",startTime:"",studentOriented:[{code:"05014000"}],typeId:"",userLimit:""}):t.$toast(a.message)})}else this.$toast("选择面向群体!");else this.$toast("请输入联系方式!");else this.$toast("请输入活动地点!");else this.$toast("请选择报名结束时间!");else this.$toast("请选择报名开始时间!");else this.$toast("请选择活动结束时间!");else this.$toast("请选择活动开始时间!");else this.$toast("请输入活动简介!");else this.$toast("请选择活动封面图片!");else this.$toast("请选择主办方!");else this.$toast("请选择发布方!");else this.$toast("请选择活动类型!");else this.$toast("请选择活动定位!");else this.$toast("请输入活动名称!")},selectType:function(t){var a=this;this.contentTypeList.map(function(e){return e.id===t.value&&(a.childTypeList=e.childType),e})},selectChildType:function(t){var a=this;this.childTypeList.map(function(e){return e.id===t.value&&(a.typePoint=e.point),e})},deleteImg:function(t,a){var e="api/storage/files/"+this[a][t].hash;Object(n.c)(e,"","delete").then(function(t){}),this[a].splice(t,1)},onSelectImage:function(t){var a=event.target.files[0],e=this;if(a){event.target.value="";var s=new FileReader;s.onloadend=function(s){var i=new Image;i.src=s.target.result,i.onload=function(){e.$croppa({file:a,width:800,height:800,scale:"",sure:function(a){Object(n.c)("/api/storage/base64Images",{data:a}).then(function(s){"cover"===t?(e.coverImgList.length&&e.deleteImg(0,"coverImgList"),e.coverImgList.push({hash:s.data.hash,base64:a})):(e.activeImgList.length&&e.deleteImg(0,"activeImgList"),e.activeImgList.push({hash:s.data.hash,base64:a}))})}})}},s.readAsDataURL(a)}},selectImage:function(a){t("#"+a).click()},getJoinList:function(){var t=this;Object(n.c)("/api/sc/organizations/list/join").then(function(a){a.state&&(t.joinList=a.data)})},getBriefList:function(){var t=this;Object(n.c)("/api/sc/organizations/list/brief").then(function(a){a.state&&(t.briefList=a.data)})},getCollegesList:function(){var t=this;Object(n.c)("/api/colleges").then(function(a){a.state&&(t.collegesList=a.data)})},getContentTypeList:function(){var t=this;Object(n.c)("/api/sc/activityContentType").then(function(a){a.state&&(t.contentTypeList=a.data)})},getTypeList:function(){var t=this;Object(n.c)("/api/sc/activities/types").then(function(a){a.state&&(t.typeList=a.data)})}}}}).call(a,e("W14+"))},a8Fm:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("ewxC");var s=e("4CWm"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"creatActivity_wrap"},[e("div",{staticClass:"big_title"},[t._v("配置活动积分")]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动名称")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.params.name,expression:"params.name"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text"},domProps:{value:t.params.name},on:{input:function(a){a.target.composing||t.$set(t.params,"name",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动定位")]),t._v(" "),e("v-select",{attrs:{options:t.typeList,"options-value":"id","options-label":"name","close-on-select":"",justify:""},model:{value:t.params.typeId,callback:function(a){t.$set(t.params,"typeId",a)},expression:"params.typeId"}})],1)]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动类型")]),t._v(" "),e("v-select",{attrs:{options:t.contentTypeList,"options-value":"id","options-label":"typeName","close-on-select":"",justify:""},on:{afterSelected:t.selectType}})],1),t._v(" "),t.childTypeList.length?e("div",{staticClass:"form-group"},[e("v-select",{attrs:{options:t.childTypeList,"options-value":"id","options-label":"typeName","close-on-select":"",justify:""},on:{afterSelected:t.selectChildType},model:{value:t.params.contentTypeId,callback:function(a){t.$set(t.params,"contentTypeId",a)},expression:"params.contentTypeId"}}),t._v(" "),e("label",{staticClass:"input-label require",staticStyle:{"text-align":"left","padding-left":"10px"}},[t._v("活动积分:"+t._s(t.typePoint))])],1):t._e()]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("发布方")]),t._v(" "),e("v-select",{attrs:{options:t.joinList,"options-value":"id","options-label":"name","close-on-select":"",justify:""},model:{value:t.params.organizations[0].organizationId,callback:function(a){t.$set(t.params.organizations[0],"organizationId",a)},expression:"params.organizations[0].organizationId"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("主办方")]),t._v(" "),e("v-select",{attrs:{options:t.briefList,"options-value":"id","options-label":"name","close-on-select":"",justify:""},model:{value:t.params.organizations[1].organizationId,callback:function(a){t.$set(t.params.organizations[1],"organizationId",a)},expression:"params.organizations[1].organizationId"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label"},[t._v("承办方(选填)")]),t._v(" "),e("v-select",{attrs:{options:t.briefList,"options-value":"id","options-label":"name","close-on-select":"",justify:""},model:{value:t.params.organizations[2].organizationId,callback:function(a){t.$set(t.params.organizations[2],"organizationId",a)},expression:"params.organizations[2].organizationId"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label"},[t._v("协办方(选填)")]),t._v(" "),e("v-select",{attrs:{options:t.briefList,"options-value":"id","options-label":"name","close-on-select":"",justify:""},model:{value:t.params.organizations[3].organizationId,callback:function(a){t.$set(t.params.organizations[3],"organizationId",a)},expression:"params.organizations[3].organizationId"}})],1)]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group box_flex column"},[e("div",{staticClass:"box_flex"},[e("label",{staticClass:"input-label require"},[t._v("活动封面")]),t._v(" "),e("div",{staticClass:"img-div"},[t.coverImgList.length?e("img",{staticClass:"img",attrs:{src:t.coverImgList[0].base64}}):t._e(),t._v(" "),e("div",{staticClass:"close-img text-center"},[t.coverImgList.length?e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("cancel"))},on:{click:function(a){return a.stopPropagation(),t.deleteImg(0,"activeImgList")}}},[t._v("cancel")]):e("i",{staticClass:"maticon add",domProps:{innerHTML:t._s(t.icons("add"))},on:{click:function(a){return a.stopPropagation(),t.selectImage("coverImage")}}},[t._v("add")])])]),t._v(" "),e("input",{staticClass:"form-control search-input modal-form-style",staticStyle:{display:"none"},attrs:{id:"coverImage",type:"file"},on:{change:function(a){return t.onSelectImage("cover")}}})])]),t._v(" "),e("div",{staticClass:"form-group box_flex column"},[e("div",{staticClass:"box_flex"},[e("label",{staticClass:"input-label require"},[t._v("活动图片(选填)")]),t._v(" "),e("div",{staticClass:"img-div"},[t.activeImgList.length?e("img",{staticClass:"img",attrs:{src:t.activeImgList[0].base64}}):t._e(),t._v(" "),e("div",{staticClass:"close-img text-center"},[t.activeImgList.length?e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("cancel"))},on:{click:function(a){return a.stopPropagation(),t.deleteImg(0,"activeImgList")}}},[t._v("cancel")]):e("i",{staticClass:"maticon add",domProps:{innerHTML:t._s(t.icons("add"))},on:{click:function(a){return a.stopPropagation(),t.selectImage("activeImage")}}},[t._v("add")])])]),t._v(" "),e("input",{staticClass:"form-control search-input modal-form-style",staticStyle:{display:"none"},attrs:{id:"activeImage",type:"file"},on:{change:function(a){return t.onSelectImage("active")}}})])])]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动简介")]),t._v(" "),e("v-textarea",{staticClass:"info-value textarea",staticStyle:{width:"674px"},attrs:{rows:"4","max-length":"1000",autoHeight:!0},model:{value:t.params.introduction,callback:function(a){t.$set(t.params,"introduction",a)},expression:"params.introduction"}})],1)]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("报名开始时间")]),t._v(" "),e("v-datepicker",{staticClass:"info-value btn-block",attrs:{format:"yyyy-MM-dd hh:ii",showTime:!1},model:{value:t.params.applyStartTime,callback:function(a){t.$set(t.params,"applyStartTime",a)},expression:"params.applyStartTime"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("报名结束时间")]),t._v(" "),e("v-datepicker",{staticClass:"info-value btn-block",attrs:{format:"yyyy-MM-dd hh:ii",showTime:!1},model:{value:t.params.applyEndTime,callback:function(a){t.$set(t.params,"applyEndTime",a)},expression:"params.applyEndTime"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动开始时间")]),t._v(" "),e("v-datepicker",{staticClass:"info-value btn-block",attrs:{format:"yyyy-MM-dd hh:ii",showTime:!1},model:{value:t.params.startTime,callback:function(a){t.$set(t.params,"startTime",a)},expression:"params.startTime"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动结束时间")]),t._v(" "),e("v-datepicker",{staticClass:"info-value btn-block",attrs:{format:"yyyy-MM-dd hh:ii",showTime:!1},model:{value:t.params.endTime,callback:function(a){t.$set(t.params,"endTime",a)},expression:"params.endTime"}})],1)]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("活动地点")]),t._v(" "),e("v-textarea",{staticClass:"info-value textarea",staticStyle:{width:"674px"},attrs:{rows:"4","max-length":"50"},model:{value:t.params.place,callback:function(a){t.$set(t.params,"place",a)},expression:"params.place"}})],1)]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("联系方式")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.params.contactWay,expression:"params.contactWay"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text"},domProps:{value:t.params.contactWay},on:{input:function(a){a.target.composing||t.$set(t.params,"contactWay",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("面向群体")]),t._v(" "),e("v-select",{attrs:{options:t.collegesList,"options-value":"code","options-label":"name",multiple:"true",justify:""},model:{value:t.params.studentCode,callback:function(a){t.$set(t.params,"studentCode",a)},expression:"params.studentCode"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("人数上限(选填)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.params.userLimit,expression:"params.userLimit"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"number"},domProps:{value:t.params.userLimit},on:{input:function(a){a.target.composing||t.$set(t.params,"userLimit",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label require"},[t._v("报名是否审核")]),t._v(" "),e("div",{staticClass:"bool-div",class:t.params.applyAuditNeeded?"active":"",on:{click:function(a){t.params.applyAuditNeeded=!t.params.applyAuditNeeded}}},[e("span")])])]),t._v(" "),e("div",{staticClass:"box_flex flex_center"},[e("button",{staticClass:"btn submit-btn",on:{click:function(a){return t.submitForm()}}},[t._v("发布")])])])},staticRenderFns:[]};var n=function(t){e("cCav")},o=e("Mz/3")(s.a,i,!1,n,"data-v-26582aad",null);a.default=o.exports},cCav:function(t,a){},ewxC:function(t,a,e){"use strict";(function(t){var a=e("3SZ7");e.n(a),e("wHeh"),e("C331")}).call(a,e("W14+"))}});