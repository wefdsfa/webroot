webpackJsonp([175],{BjIg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("a3Yh"),l=a.n(s),i=a("xd7I"),o=a("C331"),n=a("Do79");i.default.component("c-reserveTable",n.a);i.default.component("c-reserveTable",n.a);var r={data:function(){return{manageUrl:"/table-data/mentality/reservation/teacher",recordUrl:"",timeStamp:"",columns:[],recordColumns:[],modalType:"",startDate:"",endDate:"",showStudentInfoModal:!1,showEvaluationModal:!1,reason:"",record:{id:"",resultRecord:"",starNumber:1},stars:[{id:1,isSelected:!0},{id:2,isSelected:!1},{id:3,isSelected:!1},{id:4,isSelected:!1},{id:5,isSelected:!1}],statusLabel:{SUCCESS:"预约成功",CANCELED:"取消预约",CANCELED_BY_ADMIN:"后台取消",ING:"进行中",FINISHED:"已结束",DONE:"已完成",ABSENT:"未到",ABORT:"排班被取消"},studentInfoData:{name:"",userNo:"",grade:"",collegeName:"",className:"",educationLevelLabel:"",politicalStatusLabel:"",contact:"",familyMembers:"",psychiatricHistory:"",takeMedicine:"",parentsMarriageSituation:"",remark:"",content:"",hasConsultingExperience:"",email:""},familyMembers:[],statusArray:[{id:"SUCCESS",label:"预约成功"},{id:"CANCELED",label:"取消预约"},{id:"CANCELED_BY_ADMIN",label:"后台取消"},{id:"ING",label:"进行中"},{id:"FINISHED",label:"已结束"},{id:"DONE",label:"已完成"},{id:"ABSENT",label:"未到"},{id:"ABORT",label:"排班被取消"}],lang:"zh-cn"}},computed:{translate:function(){return Object(o.g)(this.lang).employmentUnitManage}},created:function(){var t,e=this,a=localStorage.getItem("lang");Object(o.g)(a)&&(this.lang=a),Object(o.e)({url:"/api/system/dicts",dataType:"json",type:"get",data:{dictType:"家庭成员类型"},success:function(t){t.state?e.familyMembers=t.data:e.$toast(t.message)}}),this.columns=[{id:"studentName",title:"姓名",width:70,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.student?t.student.name:""}},{id:"studentNo",title:"学号",width:120,className:"text-left",hidden:!0,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.student?t.student.userNo:""}},{id:"collegeCode",title:"学院",width:120,className:"text-left",hidden:!0,search:{type:"select",data:{url:"/api/colleges",optionsLabel:"name",optionsValue:"code"}},formatter:function(t){return t.student?t.student.collegeName:""}},{id:"campus",title:"校区",width:80,className:"text-left",hidden:!0,formatter:function(t){return t.student?t.student.campusLabel:""}},{id:"contact",title:"学生联系方式",width:120,className:"text-left",hidden:!0,formatter:function(t){return t.student?t.student.contact:""}},{id:"name",title:"咨询师",width:70,className:"text-left",hidden:!0,formatter:function(t){return t.teacher?t.teacher.name:""}},{id:"timeQuantum",title:"预约时段",width:180,className:"text-center no-wrap",hidden:!1,formatter:function(t){return t.dayTime&&t.dayTime.timeQuantum?t.dayTime.dateTime+" "+t.dayTime.timeQuantum:""}},{id:"createTime",title:"预约时间",width:150,className:"text-center no-wrap",hidden:!0},{id:"status",title:"状态",className:"text-left",hidden:!1,width:80,search:{type:"select",data:{options:this.statusArray,optionsLabel:"label",optionsValue:"id"}},formatter:function(t){return e.statusLabel[t.status]}},{id:"score",title:"危机评分",width:70,className:"text-left",hidden:!0},{id:"reason",title:"取消预约理由",width:120,className:"text-left",hidden:!0},{id:"opt",title:"操作",className:"text-left",width:130,hidden:!1,formatter:function(t){var a=[{tag:"a",text:"查看",className:"opt-btn",callback:function(t,a){e.showStudentInfoModal=!0,e.recordUrl="/table-data/mentality/reservation/"+t.id+"/histories";var s="";for(var l in t.familyMembers)for(var i in e.familyMembers)t.familyMembers[l]===e.familyMembers[i].value&&(s+=e.familyMembers[i].label+",");e.studentInfoData={consultingMainContent:t.consultingMainContent,consultingAddress:t.consultingAddress,consultingDate:t.consultingDate,name:t.student?t.student.name:"",userNo:t.student?t.student.userNo:"",grade:t.student?t.student.grade:"",collegeName:t.student?t.student.collegeName:"",className:t.student?t.student.collegeName:"",educationLevelLabel:t.student?t.student.educationLevelLabel:"",politicalStatusLabel:t.student?t.student.politicalStatusLabel:"",contact:t.student?t.student.contact:"",familyMembers:s.substr(0,s.length-1),psychiatricHistory:t.psychiatricHistory?"是":"否",takeMedicine:t.takeMedicine?"是":"否",parentsMarriageSituation:t.parentsMarriageSituation,remark:t.remark,content:t.content,hasConsultingExperience:t.hasConsultingExperience?"是":"否",hasPsychiatricHistory:t.hasPsychiatricHistory?"是":"否",email:t.email,hospital:t.hospital,doctor:t.doctor,drug:t.drug}}}];return"FINISHED"===t.status&&a.push({tag:"a",text:"评价",className:"opt-btn",callback:function(t,a){e.showEvaluationModal=!0,e.record.id=t.id}}),"ING"!==t.status&&"FINISHED"!==t.status||a.push({tag:"a",text:"未到",className:"opt-btn",callback:function(t,a){Object(o.e)({url:"/api/mentality/reservation/"+t.id+"/absent",dataType:"json",type:"put",success:function(t){t.state?(e.$toast("操作成功"),e._refreshTable()):e.$toast(t.message)}})}}),a}}],this.recordColumns=[(t={id:"createTime",title:"咨询时间",className:"text-left",hidden:!1,width:150},l()(t,"hidden",!1),l()(t,"formatter",function(t){return t.dayTime&&t.dayTime.dateTime?t.dayTime.dateTime+" "+t.dayTime.timeQuantumStart+"-"+t.dayTime.timeQuantumEnd:""}),t),{id:"teacherName",title:"咨询师姓名",className:"text-left",width:100,hidden:!1},{id:"contact",title:"咨询师联系方式",className:"text-left",width:130,hidden:!1},{id:"score",title:"危机评分",className:"text-left",width:80,hidden:!1},{id:"record",title:"咨询记录",className:"text-left",width:200,hidden:!1},{id:"status",title:"状态",className:"text-left",hidden:!1,formatter:function(t){return e.statusLabel[t.status]}}]},methods:{startDateSelected:function(t){var e=this;if(this.endDate){if(new Date(t.value).getTime()-new Date(this.endDate).getTime()>0)return this.$nextTick(function(){e.$toast("开始日期要在结束日期之前"),e.startDate=""}),!1;this.startDate=t.value}else this.startDate=t.value},endDateSelected:function(t){var e=this;if(this.startDate){if(new Date(t.value).getTime()-new Date(this.startDate).getTime()<0)return this.$nextTick(function(){e.$toast("结束日期要在开始日期之后"),e.endDate=""}),!1;this.endDate=t.value}else this.endDate=t.value},sumbitEditRecordModal:function(){var t=this;Object(o.e)({url:"/api/mentality/reservation/"+this.record.id+"/evaluation",dataType:"json",type:"put",data:{score:this.record.starNumber,record:this.record.resultRecord},success:function(e){e.state?(t.$toast("评价成功"),t.showEvaluationModal=!1,t._refreshTable()):t.$toast(e.message)}})},_refreshTable:function(){this.timeStamp=Object(o.a)()},changeStar:function(t){for(var e in this.record.starNumber=0,this.stars)this.stars[e].id<=t.id?(this.stars[e].isSelected=!0,this.record.starNumber++):this.stars[e].isSelected=!1}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"student-reservation-record"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{url:t.manageUrl+"?consultStartTime="+t.startDate+"&consultEndTime="+t.endDate+"&timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!1,columnsControl:!0}},[a("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("div",{staticClass:"btn-group pull-left consultative-time"},[a("div",{staticClass:"form-group "},[a("label",{staticClass:"form-label"},[t._v("咨询时间")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block time-picker",attrs:{clearButton:!0,showTime:!1,format:"yyyy-MM-dd hh:ii:ss"},on:{daySelected:t.startDateSelected}}),t._v(" "),a("label",{staticClass:"form-label"},[t._v("-")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block time-picker",attrs:{clearButton:!0,showTime:!1,format:"yyyy-MM-dd hh:ii:ss"},on:{daySelected:t.endDateSelected}})],1)])])])],1),t._v(" "),a("v-modal",{attrs:{show:t.showStudentInfoModal,effect:"fade",width:"1000"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("div",{staticClass:"student-info-title"},[t._v("\n          查看学生信息\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("GeminiScrollbar",{staticClass:"srcoll-bar",attrs:{scrollX:!1}},[a("div",{staticClass:"columns"},[a("label",{staticClass:"columns-title"},[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("姓名")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.name))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("学号")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.userNo))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("年级")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.grade))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("学院")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.collegeName))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("邮箱")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.email))])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label two-words-difference-margin"},[t._v("班级")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.className))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("培养层次")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.educationLevelLabel))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("政治面貌")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.politicalStatusLabel))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("联系方式")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.contact))])])])])]),t._v(" "),a("div",{staticClass:"columns"},[a("label",{staticClass:"columns-title"},[t._v("预约填写额外信息")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label two-words-difference-margin"},[t._v("家庭成员")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.familyMembers))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("父母婚姻情况")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.parentsMarriageSituation))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("本次咨询内容")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.content))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("本次咨询备注")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.remark))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("是否有精神科就医经历")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.hasPsychiatricHistory))])]),t._v(" "),"是"==t.studentInfoData.hasPsychiatricHistory?a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("医院")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.hospital))])]):t._e(),t._v(" "),"是"==t.studentInfoData.hasPsychiatricHistory?a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("医生姓名")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.doctor))])]):t._e(),t._v(" "),"是"==t.studentInfoData.hasPsychiatricHistory?a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("服用药物")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.drug))])]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label one-words-difference-margin"},[t._v("家庭精神病史")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.psychiatricHistory))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label one-words-difference-margin"},[t._v("是否服用药物")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.takeMedicine))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label one-words-difference-margin"},[t._v("是否有咨询记录")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.hasConsultingExperience))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label one-words-difference-margin"},[t._v("咨询时间")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.consultingDate))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label one-words-difference-margin"},[t._v("咨询地点")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.consultingAddress))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label one-words-difference-margin"},[t._v("咨询主题")]),t._v(" "),a("label",{staticClass:"label-content"},[t._v(t._s(t.studentInfoData.consultingMainContent))])])])])]),t._v(" "),a("div",[a("label",{staticClass:"columns-title"},[t._v("咨询记录")]),t._v(" "),a("v-table",{attrs:{url:t.recordUrl,pagesize:"10",idField:"id",columns:t.recordColumns,paginationShow:!1,order:!0}})],1)])],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showStudentInfoModal=!1}}},[t._v("取消")])])]),t._v(" "),a("v-modal",{attrs:{show:t.showEvaluationModal,effect:"fade",width:"400"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        评价\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label two-words-difference-margin"},[t._v("危机评分")]),t._v(" "),t._l(t.stars,function(e,s){return a("div",{key:s,staticClass:"stars-group"},[a("span",{on:{click:function(a){return t.changeStar(e)}}},[e.isSelected?a("i",{staticClass:"maticon",class:t.record.starNumber>3?"danger-color":"default-color",domProps:{innerHTML:t._s(t.icons("star"))}},[t._v("star")]):a("i",{staticClass:"maticon star-border",domProps:{innerHTML:t._s(t.icons("star_border"))}},[t._v("star_border")])])])})],2),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label textarea-label"},[t._v("咨询结果记录")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.record.resultRecord,expression:"record.resultRecord"}],staticClass:"modal-textarea",attrs:{cols:"24",rows:"5",maxlength:"300"},domProps:{value:t.record.resultRecord},on:{input:function(e){e.target.composing||t.$set(t.record,"resultRecord",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showEvaluationModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.sumbitEditRecordModal}},[t._v("确定")])])])],1)},staticRenderFns:[]};var d=a("C7Lr")(r,c,!1,function(t){a("GeeB")},null,null);e.default=d.exports},GeeB:function(t,e){}});