webpackJsonp([193],{"TiG+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),o=i("C331"),s=i("/tWO");a.a.component("jobApplyForm",s.a);a.a.component("jobApplyForm",s.a);var n={data:function(){return{jobApplyUrl:"/table-data/pwps/positions/page/canApplyPositions",columns:[],curRoute:"",schoolYearDefault:"",schoolYearData:[],positionTypeData:[],applyRecordUrl:"/table-data/pwps/workflow/runtime/applications/histories",timeStamp:"",applyRecordColumns:[],isApplyRecordPage:!1,curRouter:"jobApplyList",applicationFormDetail:{},applicationId:"",isApply:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(o.g)(this.lang).employmentUnitManage}},created:function(){var t=this,e=localStorage.getItem("lang");Object(o.g)(e)&&(this.lang=e),Object(o.e)({url:"/api/pwps/positions/all/schoolYears",dataType:"json",type:"get",success:function(e){e.state?e.data&&(t.schoolYearData=e.data,t.schoolYearDefault=e.data[0].id,t.url="?schoolYear="+t.schoolYearDefault):t.$toast(e.message)}}),Object(o.e)({url:"/api/system/dicts",dataType:"json",type:"get",data:{dictType:"岗位类型"},success:function(e){e.state?t.positionTypeData=e.data:t.$toast(e.message)}}),this.curRoute="jobListPage",this.columns=[{id:"positionName",title:"岗位名称",className:"text-left",hidden:!1,width:100,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.position&&t.position.positionName}},{id:"positionType",title:"岗位类型",className:"text-left",hidden:!1,width:100,formatter:function(e){if(e.position){var i="";return t.positionTypeData.forEach(function(t,a){t.value===e.position.positionType&&(i=t.label)}),i}},search:{type:"select",data:{url:"/api/system/dicts?dictType=岗位类型",optionsLabel:"label",optionsValue:"value"}}},{id:"unitId",title:"单位名称",className:"text-left",hidden:!1,width:100,search:{type:"select",data:{url:"/api/pwps/units/all",optionsLabel:"name",optionsValue:"id"}},formatter:function(t){return t.position&&t.position.unit&&t.position.unit.name}},{id:"address",title:"地点",className:"text-left",hidden:!1,width:100,formatter:function(t){return t.position&&t.position.address}},{id:"rewardStandard",title:"薪酬标准(元/小时)",className:"text-right",width:150,hidden:!1,formatter:function(t){return t.position&&t.position.rewardStandard}},{id:"positionRequire",title:"岗位要求",className:"text-left",width:100,hidden:!1,formatter:function(t){return t.position&&t.position.positionRequire}},{id:"createTime",title:"发布时间",width:150,className:"text-left",hidden:!1,formatter:function(t){return t.position&&t.position.createTime}},{id:"opt",title:"操作",className:"text-center",width:130,hidden:!1,formatter:function(e){if(!e.position)return"";var i=parseInt(e.position.userIncumbencyCount)>=parseInt(e.position.personCount);return e.hasOnTheJob||e.hasApplied?void 0:[{tag:"a",text:i?"已满":"申请",className:"opt-btn",callback:function(e,a){i?t.$toast("人员已满，不可报名！"):t.$emit("addBread",{route:"/workStudy/jobDetail?positionId="+e.position.id,title:e.position.positionName,data:e.position,lastRoute:{route:"/workStudy/jobApply",title:""}})}}]}}],this.applyRecordColumns=[{id:"year",title:"学年",className:"text-left",hidden:!1,width:100,formatter:function(t){if(t.applicationFormVO)return t.applicationFormVO.position.schoolYear.name},search:{type:"select",data:{url:"/api/pwps/positions/options/schoolYears",optionsLabel:"name",optionsValue:"id"}}},{id:"positionName",title:"岗位名称",className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){if(t.applicationFormVO)return t.applicationFormVO.position.positionName}},{id:"positionType",title:"岗位类型",className:"text-left",width:100,hidden:!1,formatter:function(e){if(e.applicationFormVO){var i="";return t.positionTypeData.forEach(function(t,a){t.value===e.applicationFormVO.position.positionType&&(i=t.label)}),i}},search:{type:"select",data:{url:"/api/system/dicts?dictType=岗位类型",optionsLabel:"label",optionsValue:"value"}}},{id:"unitId",title:"单位名称",className:"text-left",hidden:!1,width:130,search:{type:"select",data:{url:"/api/pwps/units/all",optionsLabel:"name",optionsValue:"id"}},formatter:function(t){if(t.applicationFormVO)return t.applicationFormVO.position.unit.name}},{id:"createTime",title:"申请时间",className:"text-left",hidden:!1},{id:"statusLabel",title:"审核状态",className:"text-left",hidden:!1,formatter:function(t){if(t.applicationFormVO)return t.applicationFormVO.statusLabel}},{id:"opt",title:"操作",className:"text-center",width:130,hidden:!1,formatter:function(e){return[{tag:"a",text:"查看",className:"opt-btn",callback:function(e,i){t.curRouter="jobApplyForm",t.applicationId=e.id,e.canResubmit?t.isApply=!0:t.isApply=!1,t.applicationFormDetail={createTime:e.createTime,form:e.applicationFormVO,formId:e.id,isShowLog:!0,isToDifficultyStudent:!(!e.applicationFormVO||!e.applicationFormVO.position)&&e.applicationFormVO.position.isToDifficultyStudent,opts:{canCancel:e.canCancel,canResubmit:e.canResubmit,canRevoke:e.canRevoke}}}}]}}]},methods:{schoolYearSelected:function(t){this.schoolYearDefault=t.value},_back:function(){this.curRouter="jobApplyList"},_revoke:function(){var t=this;window.confirm("确定撤回吗？")&&Object(o.e)({url:"/api/pwps/workflow/runtime/applications/"+this.applicationId+"/revoke",type:"put",success:function(e){e.state?(t.timeStamp=Object(o.a)(),t.curRouter="jobApplyList",t.$toast("撤回成功")):t.$toast(e.message)}})},_resubimt:function(t){var e=this;window.confirm("确定重新提交吗？")&&Object(o.e)({url:"/api/pwps/workflow/runtime/applications/"+this.applicationId+"/resubmit",type:"put",data:t,success:function(t){t.state?(e.timeStamp=Object(o.a)(),e.curRouter="jobApplyList",e.$toast("重新提交成功")):e.$toast(t.message)}})},_cancelApplication:function(){var t=this;window.confirm("确定取消申请吗？")&&Object(o.e)({url:"/api/pwps/workflow/runtime/applications/"+this.applicationId+"/canceled",type:"put",success:function(e){e.state?(t.timeStamp=Object(o.a)(),t.curRouter="jobApplyList",t.$toast("操作成功")):t.$toast(e.message)}})}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return"jobApplyList"===t.curRouter?i("div",{staticClass:"container-fluid",attrs:{id:"jobApply"}},[t.isApplyRecordPage?i("div",{staticClass:"row"},[i("v-table",{attrs:{url:t.applyRecordUrl+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.applyRecordColumns,multiple:!1,order:!0,search:!1}},[i("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[i("div",{staticClass:"btn-group pull-right"},[i("button",{staticClass:"btn table-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.isApplyRecordPage=!1}}},[t._v("切换到岗位申请列表")])])])])],1):i("div",{staticClass:"row text-center"},[i("v-table",{attrs:{url:t.schoolYearDefault?t.jobApplyUrl+"?schoolYear="+t.schoolYearDefault+"&timeStamp="+t.timeStamp:"",pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!1}},[i("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[i("div",{staticClass:"btn-group pull-left"},[i("v-select",{attrs:{value:t.schoolYearDefault,options:t.schoolYearData,optionsLabel:"name",optionsValue:"id"},on:{afterSelected:t.schoolYearSelected}})],1),t._v(" "),i("div",{staticClass:"btn-group pull-right"},[i("button",{staticClass:"btn table-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.isApplyRecordPage=!0}}},[t._v("切换到申请记录")])])])])],1)]):i("jobApplyForm",{attrs:{formType:"applicationRecord",isApply:t.isApply,formDetail:t.applicationFormDetail},on:{back:t._back,revoke:t._revoke,resubimt:t._resubimt,cancelApplication:t._cancelApplication}})},staticRenderFns:[]};var l=i("VU/8")(n,p,!1,function(t){i("h/3w")},null,null);e.default=l.exports},"h/3w":function(t,e){}});