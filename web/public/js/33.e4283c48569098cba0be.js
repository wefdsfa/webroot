webpackJsonp([33],{"3anY":function(t,e,a){"use strict";(function(t){a("wHeh");var i=a("C331");e.a={inject:{windowObj:{default:null}},props:{data:{default:null}},data:function(){var t=this;return{basicInfo:{layout:{columns:[{index:"0",cells:[{title:"姓名",name:"name",type:"notEditable"},{title:"准考证号",name:"admissionTicketNumber",type:"notEditable"},{title:"宗教",name:"religion",type:"notEditable"},{title:"专业",name:"profession",type:"notEditable"},{title:"学籍",name:"schoolRoll",type:"notEditable"},{title:"邮箱",name:"email",type:"editable"},{title:"学生类型",name:"studentType",type:"notEditable"},{title:"延毕原因",name:"reasonForDelayingGraduation",type:"notEditable"}]},{index:"1",cells:[{title:"性别",name:"sex",type:"notEditable"},{title:"国籍",name:"nationality",type:"notEditable"},{title:"学院",name:"college",type:"notEditable"},{title:"年级",name:"grade",type:"notEditable"},{title:"电话",name:"phone",type:"editable"},{title:"生源地",name:"studentSource",type:"notEditable"},{title:"人员类型",name:"personType",type:"notEditable"},{title:"民族",name:"nation",type:"notEditable"}]},{index:"2",cells:[{title:"学号",name:"userNo",type:"notEditable"},{title:"系别",name:"department",type:"notEditable"},{title:"培养层次",name:"cultureLevel",type:"notEditable"},{title:"身份证号",name:"identityNumber",type:"notEditable"},{title:"学习方式",name:"learningMethod",type:"notEditable"},{title:"学制",name:"schoolSystem",type:"notEditable"},{title:"辅导员",name:"instructor",type:"notEditable"}]}]},defaultValue:{name:"",admissionTicketNumber:"",religion:"",profession:"",schoolRoll:"",email:"",studentType:"",instructor:"",sex:"",nationality:"",college:"",grade:"",phone:"",studentSource:"",personType:"",reasonForDelayingGraduation:"",userNo:"",nation:"",nativeLanguage:"",department:"",cultureLevel:"",identityNumber:"",learningMethod:"",schoolSystem:"",remark:""}},accommodationInfo:{layout:{columns:[{index:"0",cells:[{title:"入住情况",name:"checkInSituation",type:"notEditable"}]},{index:"1",cells:[{title:"预计入住时间",name:"expectedCheckInTime",type:"editable"}]},{index:"2",cells:[{title:"预计退宿时间",name:"expectedLeaveDormitoryTime",type:"editable"}]}]},defaultValue:{ownDormitory:"",checkInSituation:"",expectedCheckInTime:"",expectedLeaveDormitoryTime:""},historyRecord:[],historyRecordColumns:[{id:"changeDate",title:"入退调时间",className:"text-left",hidden:!1},{id:"checkInStatus",title:"入退调记录",className:"text-left",hidden:!1,formatter:function(e){return t.checkInStatus[e.checkInStatus]}}]},paymentRecord:{historyRecord:[],historyRecordColumns:[{id:"createTime",title:"时间",className:"text-left",hidden:!1},{id:"batchName",title:"名称",className:"text-left",hidden:!1},{id:"schoolYear",title:"学年",className:"text-left",hidden:!1},{id:"paymentStatus",title:"状态",className:"text-left",hidden:!1},{id:"cost",title:"费用",className:"text-left",hidden:!1},{id:"remark",title:"备注",className:"text-left",hidden:!1}]},livingHabit:{layout:{columns:[{index:"0",cells:[{title:"作息时间",name:"schedule",type:"notEditable"}]},{index:"1",cells:[{title:"兴趣爱好",name:"hobby",type:"notEditable"}]},{index:"2",cells:[{title:"空调温度",name:"airConditioningTemperature",type:"notEditable"}]}]},defaultValue:{schedule:"",hobby:"",airConditioningTemperature:"",other:"",remark:""}},violationRecord:{historyRecord:[],historyRecordColumns:[{id:"type",title:"违规类型",width:150,className:"text-left",hidden:!1},{id:"createTime",title:"记录时间",width:200,className:"text-left",hidden:!1},{id:"remark",title:"备注",width:300,className:"text-left",hidden:!1},{id:"opt",title:"操作",className:"text-centet",hidden:!1,formatter:function(e){return[{tag:"a",text:"删除",callback:function(e,a){confirm("确定要删除吗")&&Object(i.d)({url:"/api/apartment/users/disciplinary/"+e.id,type:"delete",success:function(e){e.state?(t.$toast("删除成功"),t._refreshTable(),t._getViolationData()):t.$toast(e.message)}})}}]}}],addViolationData:{violationTypeDefaultValue:"",violationTypeData:[],remark:""}},log:{logShow:!1},isEdit:!1,isCanEdit:{expectedCheckInTime:!0,expectedLeaveDormitoryTime:!0},showAddModal:!1,timeStamp:"",checkInStatus:{WAIT_CHECK_IN:"未入住",CHECK_IN:"已入住",RETIREMENT:"退宿",ACCOMMODATION:"已入住"},recordBeforeEditData:{phone:"",email:"",baseInfoRemark:"",userHabitsRemark:"",expectCheckInTime:"",expectRetirementTime:""},scrollHeight:null}},created:function(){var t=this;Object(i.d)({url:"/api/apartment/users/baseInfo/"+this.data.data.userId,type:"get",success:function(e){e.state?(e=e.data||[])&&(t.basicInfo.defaultValue={name:e.name,admissionTicketNumber:e.userNo,religion:e.faith,profession:e.major,schoolRoll:e.statusOfSchoolStatus,email:e.email,studentType:e.studentType,instructor:e.instructorName,sex:e.sex,nationality:e.nationality,college:e.college,grade:e.grade,phone:e.phone,studentSource:e.originPlace,personType:e.userType,reasonForDelayingGraduation:e.isPostpone,userNo:e.userNo,department:e.department,cultureLevel:e.educationLevel,nation:e.nation,identityNumber:e.idCardNo,learningMethod:e.studyType,schoolSystem:e.studyYears,remark:e.remark},t.recordBeforeEditData.phone=e.pone,t.recordBeforeEditData.email=e.email,t.recordBeforeEditData.baseInfoRemark=e.remark):t.$toast(e.message)}}),Object(i.d)({url:"/api/apartment/users/apartmentInfo/"+this.data.data.userId,type:"get",success:function(e){e.state?e.data&&("CHECK_IN"!==e.data.checkInStatus&&"ACCOMMODATION"!==e.data.checkInStatus||(t.isCanEdit.expectedCheckInTime=!1),"RETIREMENT"===e.data.checkInStatus&&(t.isCanEdit.expectedLeaveDormitoryTime=!1,t.isCanEdit.expectedCheckInTime=!1),t.accommodationInfo.defaultValue={checkInSituation:t.checkInStatus[e.data.checkInStatus],expectedCheckInTime:e.data.expectCheckInTime||"",expectedLeaveDormitoryTime:e.data.expectRetirementTime||""},e.data.campus&&e.data.zone&&e.data.building&&(t.accommodationInfo.defaultValue.ownDormitory=e.data.campus+e.data.zone.name+e.data.building.name+(e.data.roomName||"")+(e.data.bed||"")),t.accommodationInfo.historyRecord=e.data.apartmentUserList,e.data.apartmentUserHabits&&(t.livingHabit.defaultValue={schedule:e.data.apartmentUserHabits.timeTable,hobby:e.data.apartmentUserHabits.hobbiesAndInterests,airConditioningTemperature:e.data.apartmentUserHabits.airConditioningTemperature,other:e.data.apartmentUserHabits.remark,remark:e.data.apartmentUserHabits.managerRemark},t.recordBeforeEditData.userHabitsRemark=e.data.apartmentUserHabits.managerRemark),t.recordBeforeEditData.expectCheckInTime=e.data.expectCheckInTime,t.recordBeforeEditData.expectRetirementTime=e.data.expectRetirementTime):t.$toast(e.message)}}),Object(i.d)({url:"/api/apartment/payment/PaymentList/"+this.data.data.userId,dataType:"json",type:"get",success:function(e){e.state?t.paymentRecord.historyRecord=e.data||[]:t.$toast(e.message)}}),this._getViolationData(),Object(i.d)({url:"/api/apartment/dicts",dataType:"json",type:"get",data:{typeName:"违规类型"},success:function(e){e.state?t.violationRecord.addViolationData.violationTypeData=e.data||[]:t.$toast(e.message)}})},watch:{windowObj:{deep:!0,handler:function(){var e=t("#staff-info").height();this.scrollHeight=e-t(".header").height()-19}}},mounted:function(){var e=t("#staff-info").height();this.scrollHeight=e-t(".header").height()-19},methods:{_getTimeTextShow:function(t){return t?/\d{4}-\d{1,2}-\d{1,2}/g.exec(t)[0]:""},_getViolationData:function(){var t=this;Object(i.d)({url:"/api/apartment/users/disciplinary/"+this.data.data.userId,type:"get",success:function(e){e.state?e.data&&(t.violationRecord.historyRecord=e.data):t.$toast(e.message)}})},_saveInfo:function(){var t=this,e="",a="";this.accommodationInfo.defaultValue.expectedCheckInTime&&(e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.accommodationInfo.defaultValue.expectedCheckInTime)[0]),this.accommodationInfo.defaultValue.expectedLeaveDormitoryTime&&(a=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.accommodationInfo.defaultValue.expectedLeaveDormitoryTime)[0]),Object(i.d)({url:"/api/apartment/users/info/"+this.data.data.userId,type:"put",data:{baseInfo:{phone:this.basicInfo.defaultValue.phone,mail:this.basicInfo.defaultValue.email,remark:this.basicInfo.defaultValue.remark},userHabits:{managerRemark:this.livingHabit.defaultValue.remark},apartmentUser:{userId:this.data.data.userId,expectCheckInTime:e,expectRetirementTime:a}},success:function(e){e.state?(t.isEdit=!1,t.$toast("修改成功")):t.$toast(e.message)}})},_cancelEdit:function(){this.isEdit=!1,this.basicInfo.defaultValue.phone=this.recordBeforeEditData.phone,this.basicInfo.defaultValue.email=this.recordBeforeEditData.email,this.basicInfo.defaultValue.remark=this.recordBeforeEditData.baseInfoRemark,this.livingHabit.defaultValue.remark=this.recordBeforeEditData.userHabitsRemark,this.accommodationInfo.defaultValue.expectedCheckInTime=this.recordBeforeEditData.expectCheckInTime,this.accommodationInfo.defaultValue.expectedLeaveDormitoryTime=this.recordBeforeEditData.expectRetirementTime},_dateSelected:function(t,e){var a=this;new Date(this.accommodationInfo.defaultValue.expectedCheckInTime).getTime()-new Date(this.accommodationInfo.defaultValue.expectedLeaveDormitoryTime).getTime()>0&&("expectedCheckInTime"===e?(this.$toast("预计入住时间要在预计退宿时间之前"),this.$nextTick(function(){a.accommodationInfo.defaultValue.expectedCheckInTime=""})):(this.$toast("预计退宿时间要在预计入住时间之后"),this.$nextTick(function(){a.accommodationInfo.defaultValue.expectedLeaveDormitoryTime=""})))},addViolationRecord:function(){var t=this;this.violationRecord.addViolationData.violationTypeDefaultValue?Object(i.d)({url:"/api/apartment/users/disciplinary",type:"post",data:{userId:this.data.data.userId,type:this.violationRecord.addViolationData.violationTypeDefaultValue,remark:this.violationRecord.addViolationData.remark},success:function(e){e.state?(t.$toast("新增成功"),t._refreshTable(),t._getViolationData(),t.showAddModal=!1):t.$toast(e.message)}}):this.$toast("请选择违规类型")},_valueSelected:function(t){this.violationRecord.addViolationData.violationTypeDefaultValue=t.value},showAddRecordModa:function(){this.showAddModal=!0,this.violationRecord.addViolationData.violationTypeDefaultValue="",this.violationRecord.addViolationData.remark=""},_changeValue:function(t){if("phone"===t)/^1[3456789]\d{9}$/.test(this.basicInfo.defaultValue.phone)||(this.$toast("电话格式不正确"),this.basicInfo.defaultValue.phone="");else{/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.basicInfo.defaultValue.email)||(this.$toast("邮箱格式不正确"),this.basicInfo.defaultValue.email="")}},_refreshTable:function(){this.timeStamp=Object(i.a)()}}}}).call(e,a("W14+"))},"5cl7":function(t,e){},FchC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("kQqh");var i=a("3anY"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"staff-info"}},[a("div",{staticClass:"header"},[a("label",{staticClass:"header-title pull-left"},[t._v("住宿人员信息")]),t._v(" "),t.isEdit?a("div",{staticClass:"pull-right"},[a("button",{staticClass:"btn submit-btn",attrs:{type:"button"},on:{click:t._saveInfo}},[t._v("保存")]),t._v(" "),a("button",{staticClass:"btn cancel-btn",attrs:{type:"button"},on:{click:t._cancelEdit}},[t._v("取消")])]):a("div",{staticClass:"pull-right"},[a("button",{staticClass:"btn submit-btn ",attrs:{type:"button"},on:{click:function(e){t.isEdit=!0}}},[t._v("编辑")])])]),t._v(" "),a("div",{staticClass:"content",style:"max-height:"+t.scrollHeight+"px"},[a("div",{staticClass:"info-card clearStyle"},[a("label",{staticClass:"card-title"},[t._v("基本信息")]),t._v(" "),a("div",[a("div",{staticClass:"row"},t._l(t.basicInfo.layout.columns,function(e,i){return a("div",{key:i,staticClass:"col-md-4"},t._l(e.cells,function(e,i){return"notEditable"===e.type?a("div",{key:i,staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v(t._s(e.title)+":")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.basicInfo.defaultValue[e.name]))])]):a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v(t._s(e.title)+":")]),t._v(" "),t.isEdit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.basicInfo.defaultValue[e.name],expression:"basicInfo.defaultValue[cell.name]"}],staticClass:"form-control form-input-style",attrs:{type:"text"},domProps:{value:t.basicInfo.defaultValue[e.name]},on:{change:function(a){return t._changeValue(e.name)},input:function(a){a.target.composing||t.$set(t.basicInfo.defaultValue,e.name,a.target.value)}}}):a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.basicInfo.defaultValue[e.name]))])])}),0)}),0),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label textarea-label"},[t._v("备注:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.basicInfo.defaultValue.remark,expression:"basicInfo.defaultValue.remark"}],staticClass:"textarea-style",attrs:{cols:"24",rows:"3",disabled:!t.isEdit,maxlength:"600"},domProps:{value:t.basicInfo.defaultValue.remark},on:{input:function(e){e.target.composing||t.$set(t.basicInfo.defaultValue,"remark",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"info-card"},[a("label",{staticClass:"card-title"},[t._v("住宿信息")]),t._v(" "),a("div",[a("label",{staticClass:"input-label title-label"},[t._v("所属宿舍:")]),t._v(" "),a("label",[t._v(t._s(t.accommodationInfo.defaultValue.ownDormitory))])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.accommodationInfo.layout.columns,function(e,i){return a("div",{key:i,staticClass:"col-md-4"},t._l(e.cells,function(e,i){return"notEditable"===e.type?a("div",{staticClass:"form-group",attrs:{"v-for":i}},[a("label",{staticClass:"input-label title-label"},[t._v(t._s(e.title)+":")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.accommodationInfo.defaultValue[e.name]))])]):a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label",staticStyle:{"vertical-align":"bottom"}},[t._v(t._s(e.title)+":")]),t._v(" "),t.isCanEdit[e.name]?a("div",{staticStyle:{display:"inline-block"}},[t.isEdit?a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:function(a){return t._dateSelected(a,e.name)}},model:{value:t.accommodationInfo.defaultValue[e.name],callback:function(a){t.$set(t.accommodationInfo.defaultValue,e.name,a)},expression:"accommodationInfo.defaultValue[cell.name]"}}):a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t._getTimeTextShow(t.accommodationInfo.defaultValue[e.name])))])],1):a("div",{staticStyle:{display:"inline-block"}},[a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t._getTimeTextShow(t.accommodationInfo.defaultValue[e.name])))])])])}),0)}),0),t._v(" "),a("div",{staticClass:"table-container"},[a("v-table",{attrs:{title:"入退调记录",idField:"id",columns:t.accommodationInfo.historyRecordColumns,rows:t.accommodationInfo.historyRecord,order:!0,columnsControl:!1,paginationShow:!1}})],1)]),t._v(" "),a("div",{staticClass:"info-card"},[a("label",{staticClass:"card-title"},[t._v("缴费记录")]),t._v(" "),a("div",{staticClass:"table-container"},[a("v-table",{attrs:{title:"历史缴费记录",idField:"id",columns:t.paymentRecord.historyRecordColumns,rows:t.paymentRecord.historyRecord,order:!0,columnsControl:!1,paginationShow:!1}})],1)]),t._v(" "),a("div",{staticClass:"info-card"},[a("label",{staticClass:"card-title"},[t._v("生活习惯")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.livingHabit.layout.columns,function(e,i){return a("div",{key:i,staticClass:"col-md-4"},t._l(e.cells,function(e,i){return a("div",{staticClass:"form-group",attrs:{"v-for":i}},[a("label",{staticClass:"input-label title-label"},[t._v(t._s(e.title)+":")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.livingHabit.defaultValue[e.name]))])])}),0)}),0),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("其他:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.livingHabit.defaultValue.other))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label textarea-label"},[t._v("备注:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.livingHabit.defaultValue.remark,expression:"livingHabit.defaultValue.remark"}],staticClass:"textarea-style",attrs:{cols:"24",rows:"3",maxlength:"600",disabled:!t.isEdit},domProps:{value:t.livingHabit.defaultValue.remark},on:{input:function(e){e.target.composing||t.$set(t.livingHabit.defaultValue,"remark",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"info-card"},[a("label",{staticClass:"card-title"},[t._v("违规违纪记录")]),t._v(" "),a("div",[a("v-table",{attrs:{title:"违规违纪记录",idField:"id",columns:t.violationRecord.historyRecordColumns,rows:t.violationRecord.historyRecord,order:!0,columnsControl:!1,paginationShow:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn clearBtnBorder add-btn",attrs:{type:"button"},on:{click:t.showAddRecordModa}},[t._v("新增")])])])],1)])]),t._v(" "),a("v-modal",{attrs:{show:t.showAddModal,effect:"fade",width:"450"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n         新增违规违纪记录\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v("违规类型")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.violationRecord.addViolationData.violationTypeDefaultValue,options:t.violationRecord.addViolationData.violationTypeData,optionsLabel:"label",optionsValue:"value",search:"","close-on-select":""},on:{afterSelected:t._valueSelected}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-textarea-label"},[t._v("备注")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.violationRecord.addViolationData.remark,expression:"violationRecord.addViolationData.remark"}],staticClass:"modal-textarea-style",attrs:{cols:"24",rows:"3",maxlength:"600"},domProps:{value:t.violationRecord.addViolationData.remark},on:{input:function(e){e.target.composing||t.$set(t.violationRecord.addViolationData,"remark",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showAddModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.addViolationRecord}},[t._v("确认")])])])],1)},staticRenderFns:[]};var o=function(t){a("5cl7")},s=a("Mz/3")(i.a,l,!1,o,null,null);e.default=s.exports},kQqh:function(t,e,a){"use strict";(function(t){a("wHeh"),a("C331")}).call(e,a("W14+"))}});