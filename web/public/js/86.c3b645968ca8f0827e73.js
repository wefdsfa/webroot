webpackJsonp([86],{JbxV:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("wHeh");var s=e("C331"),n={data:function(){return{consultantData:{userId:"",account:"",password:"",name:"",contact:"",sex:"",introduction:"",imgHash:"",type:""},sexData:[],showErrorColor:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(s.f)(this.lang).employmentUnitManage}},created:function(){var t=this,a=localStorage.getItem("lang");Object(s.f)(a)&&(this.lang=a),Object(s.d)({url:"/api/system/dicts",dataType:"json",type:"get",data:{dictType:"性别"},success:function(a){a.state?t.sexData=a.data:t.$toast(a.message)}}),Object(s.d)({url:"/api/mentality/teachers/info",dataType:"json",type:"get",success:function(a){if(a.state){a=a.data;t.consultantData={userId:a.teacherBaseInfo?a.teacherBaseInfo.userId:"",account:a.userCertificationVO?a.userCertificationVO.userNo:"",password:a.userCertificationVO?a.userCertificationVO.password:"",name:a.teacherBaseInfo?a.teacherBaseInfo.name:"",contact:a.teacherBaseInfo&&a.teacherBaseInfo.teacherContactPO?a.teacherBaseInfo.teacherContactPO.mobilePhone:"",sex:a.teacherBaseInfo?a.teacherBaseInfo.sex:"",introduction:a.synopsis,imgHash:a.portrait,type:a.type}}else t.$toast(a.message)}})},methods:{_selectSex:function(t){},_fileUpload:function(t){var a=this;this.$waiting.show({text:"附件上传中..."});var e=new FormData;e.append("file",t.target.files[0]),e.append("fieldName",t.target.files[0].name),console.log(t.target.files[0].name),Object(s.d)({url:this.uploadFile,type:"post",data:e,contentType:!1,processData:!1,success:function(t){"88888"===t.code?(a.consultantData.imgHash=t.data.hash,a.$toast("照片上传成功")):a.$toast(t.message)}}).always(function(){a.$waiting.close()})},removeImg:function(){confirm("确定删除该照片吗？")&&(this.consultantData.imgHash="")},_showAttachmentPreview:function(){var t=this.fileUrlPrefix+this.consultantData.imgHash;this.$preview({name:"照片",url:t,type:"png"})},isPhoneNo:function(){if(!/^1[3456789]\d{9}$/.test(this.consultantData.contact))return this.$toast("联系方式格式不对"),void(this.showErrorColor=!0);this.showErrorColor=!1},sumbit:function(){var t=this;Object(s.d)({url:"/api/mentality/teachers",type:"put",data:{synopsis:this.consultantData.introduction,teacherBaseInfo:{userId:this.consultantData.userId,name:this.consultantData.name,sex:this.consultantData.sex,teacherContactPO:{mobilePhone:this.consultantData.contact}},portrait:this.consultantData.imgHash,type:this.consultantData.type,userCertificationVO:{userNo:this.consultantData.account,password:this.consultantData.password}},success:function(a){a.state?t.$toast("保存成功！"):t.$toast(a.message)}})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",attrs:{id:"consultant-info-manage"}},[t._m(0),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group name-group"},[e("label",{staticClass:"form-label two-words-difference-margin"},[t._v("姓名")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.consultantData.name,expression:"consultantData.name"}],staticClass:"form-control form-input",attrs:{type:"text",disabled:"disabled",placeholder:"请输入姓名"},domProps:{value:t.consultantData.name},on:{input:function(a){a.target.composing||t.$set(t.consultantData,"name",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"info-item"},[e("span",{staticClass:"item-title"},[t._v("性别")]),t._v(" "),e("div",{staticClass:"info-options"},t._l(t.sexData,function(a,s){return e("span",{key:s,on:{click:function(e){return t._selectSex(a)}}},[e("i",{staticClass:"maticon",class:t.consultantData.sex===a.value?"active":"",domProps:{innerHTML:t._s(t.icons(t.consultantData.sex===a.value?"radio_button_checked":"radio_button_unchecked"))}}),t._v(t._s(a.label)+"\n            ")])}),0)]),t._v(" "),e("div",{staticClass:"form-group "},[e("label",{staticClass:"form-label"},[t._v("联系方式")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.consultantData.contact,expression:"consultantData.contact"}],staticClass:"form-control form-input",class:t.showErrorColor?"error":"",attrs:{type:"text",placeholder:"请输入联系方式"},domProps:{value:t.consultantData.contact},on:{change:t.isPhoneNo,input:function(a){a.target.composing||t.$set(t.consultantData,"contact",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"textarea-label two-words-difference-margin"},[t._v("照片")]),t._v(" "),t.consultantData.imgHash?e("div",{staticClass:"photo-show",style:{backgroundImage:"url("+(t.imageUrlPrefix+t.consultantData.imgHash)+"?thumb=true)",backgroundSize:"100% 100%"},on:{click:t._showAttachmentPreview}},[e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("cancel"))},on:{click:function(a){return a.stopPropagation(),t.removeImg(a)}}},[t._v("cancel")])]):e("div",{staticClass:"file-select"},[e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("file_upload"))}},[t._v("file_upload")]),t._v(" "),e("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(a){return t._fileUpload(a)}}})])])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label two-words-difference-margin textarea-label"},[t._v("简介")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.consultantData.introduction,expression:"consultantData.introduction"}],staticClass:"modal-textarea",attrs:{cols:"24",rows:"5",maxlength:"300",placeholder:"请输入300字以内的简介"},domProps:{value:t.consultantData.introduction},on:{input:function(a){a.target.composing||t.$set(t.consultantData,"introduction",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"info-footer"},[e("button",{staticClass:"agree",on:{click:t.sumbit}},[t._v("保存")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header"},[a("div",[this._v("咨询师个人信息")])])}]};var i=e("Mz/3")(n,o,!1,function(t){e("zrB7")},null,null);a.default=i.exports},zrB7:function(t,a){}});