webpackJsonp([127],{qWvU:function(t,i){},yVZl:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("C331"),a={props:{data:{default:null}},data:function(){return{hasExperience:!1,hasPsychiatricHistory:!1,formFields:{},pageOptions:{familyMembers:[],parentsMarriageSituation:[{key:"在婚",value:"在婚"},{key:"再婚",value:"再婚"},{key:"离异",value:"离异"},{key:"丧偶",value:"丧偶"}],psychiatricHistory:[{key:!0,value:"有"},{key:!1,value:"无"}],takeMedicine:[{key:!0,value:"是"},{key:!1,value:"否"}],hasConsultingExperience:[{key:!0,value:"是"},{key:!1,value:"否"}],hasPsychiatricHistory:[{key:!0,value:"是"},{key:!1,value:"否"}]},formatError:{email:!1,contact:!1}}},methods:{consultationDateSelected:function(t){this.formFields.consultingDate=t.value.substring(0,10)},consultingHoursSelected:function(t){this.formFields.localConsultingHours=t.value.substring(0,10)},_submit:function(){var t=this;this.formFields.remark.length>220?this.$toast("备注输入不得超过200字！"):Object(e.e)({url:"/api/mentality/reservation/myStudentInfo",type:"put",data:this.formFields,success:function(i){i.state?t.$toast("保存成功"):t.$toast(i.message)}})},_init:function(){var t=this;Object(e.e)({url:"/api/mentality/reservation/myStudentInfo",type:"get",success:function(i){if(i.state){if(i.data)for(var s in i.data)t.$set(t.formFields,s,i.data[s]),t.hasExperience=t.formFields.hasConsultingExperience,t.formFields.hasPsychiatricHistory?t.hasPsychiatricHistory=t.formFields.hasPsychiatricHistory:(t.hasPsychiatricHistory=!1,t.formFields.hasPsychiatricHistory=!1)}else t.$toast("个人信息初始失败："+i.message)}})},checkContact:function(){if(!/^1[3456789]\d{9}$/.test(this.formFields.contact))return this.$toast("联系方式格式不正确"),void(this.formatError.contact=!0);this.formatError.contact=!1},checkEmail:function(){if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.formFields.email))return this.$toast("邮箱格式不正确"),void(this.formatError.email=!0);this.formatError.email=!1},_setValue:function(t,i){if("hasPsychiatricHistory"===t&&("是"==i.value?this.hasPsychiatricHistory=!0:this.hasPsychiatricHistory=!1),"hasConsultingExperience"===t&&("是"==i.value?this.hasExperience=!0:this.hasExperience=!1),"familyMembers"===t){this.formFields[t]||this.$set(this.formFields,t,[]);var s=this.formFields[t].indexOf(i.key);s>=0?this.formFields[t].splice(s,1):this.formFields[t].push(i.key)}else this.$set(this.formFields,t,i.key)},_getFamilyMembers:function(){var t=this;Object(e.e)({url:"/api/system/dicts?dictType=家庭成员类型",type:"get",success:function(i){i.state&&(i.data.forEach(function(t){t.key=t.value,t.value=t.label}),t.pageOptions.familyMembers=i.data)}})}},created:function(){this._init(),this._getFamilyMembers()}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"psychological-student-info"},[s("div",{staticClass:"info-container"},[s("div",{staticClass:"submit-info col-md-12"},[s("span",{staticClass:"title-tip"},[t._v("完善个人信息")]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("联系方式:")]),t._v(" "),s("div",{staticClass:"info-options form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formFields.contact,expression:"formFields.contact"}],staticClass:"form-control",class:t.formatError.contact?"error":"",attrs:{type:"text"},domProps:{value:t.formFields.contact},on:{change:t.checkContact,input:function(i){i.target.composing||t.$set(t.formFields,"contact",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("邮箱:")]),t._v(" "),s("div",{staticClass:"info-options form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formFields.email,expression:"formFields.email"}],staticClass:"form-control",class:t.formatError.email?"error":"",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:t.formFields.email},on:{change:t.checkEmail,input:function(i){i.target.composing||t.$set(t.formFields,"email",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("现今一起生活的家庭成员:")]),t._v(" "),s("div",{staticClass:"info-options"},t._l(t.pageOptions.familyMembers,function(i,e){return s("span",{key:e,on:{click:function(s){return t._setValue("familyMembers",i)}}},[s("i",{staticClass:"maticon",class:t.formFields.familyMembers&&t.formFields.familyMembers.indexOf(i.key)>=0?"active":"",domProps:{innerHTML:t._s(t.icons(t.formFields.familyMembers&&t.formFields.familyMembers.indexOf(i.key)>=0?"check_box":"check_box_outline_blank"))}}),t._v(t._s(i.value)+"\n            ")])}),0)]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("父母婚姻状况:")]),t._v(" "),s("div",{staticClass:"info-options"},t._l(t.pageOptions.parentsMarriageSituation,function(i,e){return s("span",{key:e,on:{click:function(s){return t._setValue("parentsMarriageSituation",i)}}},[s("i",{staticClass:"maticon",class:t.formFields.parentsMarriageSituation===i.key?"active":"",domProps:{innerHTML:t._s(t.icons(t.formFields.parentsMarriageSituation===i.key?"radio_button_checked":"radio_button_unchecked"))}}),t._v(t._s(i.value)+"\n            ")])}),0)]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("家庭精神病史:")]),t._v(" "),s("div",{staticClass:"info-options"},t._l(t.pageOptions.psychiatricHistory,function(i,e){return s("span",{key:e,on:{click:function(s){return t._setValue("psychiatricHistory",i)}}},[s("i",{staticClass:"maticon",class:t.formFields.psychiatricHistory===i.key?"active":"",domProps:{innerHTML:t._s(t.icons(t.formFields.psychiatricHistory===i.key?"radio_button_checked":"radio_button_unchecked"))}}),t._v(t._s(i.value)+"\n            ")])}),0)]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("是否服用药物(必填):")]),t._v(" "),s("div",{staticClass:"info-options"},t._l(t.pageOptions.takeMedicine,function(i,e){return s("span",{key:e,on:{click:function(s){return t._setValue("takeMedicine",i)}}},[s("i",{staticClass:"maticon",class:t.formFields.takeMedicine===i.key?"active":"",domProps:{innerHTML:t._s(t.icons(t.formFields.takeMedicine===i.key?"radio_button_checked":"radio_button_unchecked"))}}),t._v(t._s(i.value)+"\n            ")])}),0)]),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("是否有咨询经历(必填):")]),t._v(" "),s("div",{staticClass:"info-options"},t._l(t.pageOptions.hasConsultingExperience,function(i,e){return s("span",{key:e,on:{click:function(s){return t._setValue("hasConsultingExperience",i)}}},[s("i",{staticClass:"maticon",class:t.formFields.hasConsultingExperience===i.key?"active":"",domProps:{innerHTML:t._s(t.icons(t.formFields.hasConsultingExperience===i.key?"radio_button_checked":"radio_button_unchecked"))}}),t._v(t._s(i.value)+"\n            ")])}),0)]),t._v(" "),t.hasExperience?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("咨询时间(选填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("v-datepicker",{attrs:{defaultValue:t.formFields.consultingDate},on:{daySelected:t.consultationDateSelected}})],1)]):t._e(),t._v(" "),t.hasExperience?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("咨询地点(选填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formFields.consultingAddress,expression:"formFields.consultingAddress"}],attrs:{rows:"3",placeholder:"最多输入不得超过100字..."},domProps:{value:t.formFields.consultingAddress},on:{input:function(i){i.target.composing||t.$set(t.formFields,"consultingAddress",i.target.value)}}})])]):t._e(),t._v(" "),t.hasExperience?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("咨询主题(必填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formFields.consultingMainContent,expression:"formFields.consultingMainContent"}],attrs:{rows:"3",placeholder:"最多输入不得超过100字..."},domProps:{value:t.formFields.consultingMainContent},on:{input:function(i){i.target.composing||t.$set(t.formFields,"consultingMainContent",i.target.value)}}})])]):t._e(),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("是否有精神科就医经历(必填):")]),t._v(" "),s("div",{staticClass:"info-options"},t._l(t.pageOptions.hasPsychiatricHistory,function(i,e){return s("span",{key:e,on:{click:function(s){return t._setValue("hasPsychiatricHistory",i)}}},[s("i",{staticClass:"maticon",class:t.formFields.hasPsychiatricHistory===i.key?"active":"",domProps:{innerHTML:t._s(t.icons(t.formFields.hasPsychiatricHistory===i.key?"radio_button_checked":"radio_button_unchecked"))}}),t._v(" "+t._s(i.value)+"\n                ")])}),0)]),t._v(" "),t.hasPsychiatricHistory?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("最近一次门诊时间(选填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("v-datepicker",{attrs:{defaultValue:t.formFields.localConsultingHours},on:{daySelected:t.consultingHoursSelected}})],1)]):t._e(),t._v(" "),t.hasPsychiatricHistory?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("医院(选填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formFields.hospital,expression:"formFields.hospital"}],attrs:{rows:"3",placeholder:"最多输入不得超过100字..."},domProps:{value:t.formFields.hospital},on:{input:function(i){i.target.composing||t.$set(t.formFields,"hospital",i.target.value)}}})])]):t._e(),t._v(" "),t.hasPsychiatricHistory?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("医生姓名(选填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formFields.doctor,expression:"formFields.doctor"}],attrs:{rows:"3",placeholder:"最多输入不得超过50字..."},domProps:{value:t.formFields.doctor},on:{input:function(i){i.target.composing||t.$set(t.formFields,"doctor",i.target.value)}}})])]):t._e(),t._v(" "),t.hasPsychiatricHistory?s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("服用药物(选填):")]),t._v(" "),s("div",{staticClass:"info-options"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formFields.drug,expression:"formFields.drug"}],attrs:{rows:"3",placeholder:"最多输入不得超过100字..."},domProps:{value:t.formFields.drug},on:{input:function(i){i.target.composing||t.$set(t.formFields,"drug",i.target.value)}}})])]):t._e(),t._v(" "),s("div",{staticClass:"info-item"},[s("span",{staticClass:"item-title"},[t._v("备注:")]),t._v(" "),s("div",{staticClass:"info-options"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formFields.remark,expression:"formFields.remark"}],attrs:{rows:"3",placeholder:"最多输入不得超过200字..."},domProps:{value:t.formFields.remark},on:{input:function(i){i.target.composing||t.$set(t.formFields,"remark",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"divide-line"}),t._v(" "),s("div",{staticClass:"info-footer"},[s("button",{staticClass:"agree",on:{click:t._submit}},[t._v("保存")])])])])])},staticRenderFns:[]};var n=s("C7Lr")(a,o,!1,function(t){s("qWvU")},null,null);i.default=n.exports}});