webpackJsonp([53],{"6BWh":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("C331"),i={data:function(){return{columns:[],gradeOptions:[],timeStamp:"",tableData_url:"/table-data/partyMember/page",searchParams:{name:"",userNo:"",college:"",grade:"",educationLevel:"",politicalStatus:"",organizationName:"",organizationPosition:""},showInfoModal:!1,isCheck:!1,organizationName_options:[],organizationPosition_options:[],collegeId:"",grade:"",politicalStatus:"",organizationName_value:"",organizationPosition:"",organizationName:"",userInfo:{},seleteFace_list:[],editInfo:{politicalStatus:"",studentPartyBuildInfo:{joinTime:"",correctionTime:"",recommendPartyOrganizations:""},partyBuildOrganization:{id:""}},selectList:[],selectModel:"",recommendPartyOrganizations_model:"",seleteFace:"",seleteFace_id:"",tableCheckedList:[],setParty:!1,selectedParty:""}},methods:{getGrade:function(){for(var t=(new Date).getFullYear(),e=t-5;e<t+5;e++)this.gradeOptions.push({id:e+"",name:e+""})},getFace:function(){var t=this;Object(s.d)({type:"get",url:"api/system/dicts?dictType=政治面貌",success:function(e){e.state&&(t.seleteFace_list=e.data,e.data.map(function(e){e.label==t.seleteFace&&(t.seleteFace_id=e.value)}))}})},getPositionOptions:function(){var t=this;Object(s.d)({url:"/api/partyMember/personInChargePositionOptions",type:"get",success:function(e){e.state&&(e.data.organizationName.map(function(e){t.organizationName_options.push(e)}),e.data.organizationPosition.map(function(e){t.organizationPosition_options.push(e)}))}})},submitConsultantInfo:function(){var t=this;this.editInfo.studentPartyBuildInfo&&(this.editInfo.studentPartyBuildInfo.recommendPartyOrganizations=this.recommendPartyOrganizations_model),this.editInfo.politicalStatus=this.seleteFace_id,Object(s.d)({type:"put",data:this.editInfo,url:"api/document/students/baseStatusOrganizationInfo/"+this.userInfo.userId,success:function(e){return e.state?(t.tableData_url="/table-data/partyMember/page?timeStamp = "+(new Date).getTime(),t.showInfoModal=!1,t.$toast("编辑成功")):t.$toast(e.message)}})},partySelect:function(t){this.editInfo.partyBuildOrganization.id=t.value},faceSelect:function(t){this.seleteFace_id=t.value},exportStat:function(){var t=this.$refs.liveStaffTable.tableSearchFields,e="/downloads/partyMember/excels?name="+t.name+"&userNo="+t.userNo+"&college="+this.collegeId+"&grade="+t.grade+"&educationLevel="+t.educationLevel+"&organizationName="+t.organizationName+"&organizationPosition="+t.organizationPosition;window.location.href=e},createTimeSelected_in:function(t){this.editInfo.studentPartyBuildInfo.joinTime=t.value},createTimeSelected_office:function(t){this.editInfo.studentPartyBuildInfo.correctionTime=t.value},_tableChecked:function(t){this.tableCheckedList=t},selectParty:function(t){},submitSelectParty:function(){var t=this;if(!this.selectedParty)return this.$toast("请选择党组织!");var e=[];this.tableCheckedList.map(function(t){e.push(t.userId)}),Object(s.d)({url:"/api/partyMember/batch/setOrganization",type:"post",data:{organizationId:this.selectedParty,userIds:e},success:function(e){e.state?(t.setParty=!1,t.$toast("设置成功"),t.tableData_url="/table-data/partyMember/page?timeStamp = "+(new Date).getTime()):t.$toast(e.message),t.tableCheckedList=[]}})}},created:function(){var t=this;this.getPositionOptions(),this.columns=[{id:"name",title:"姓名",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"userNo",title:"学号",className:"text-left",width:150,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"college",title:"学院",width:150,className:"text-left",hidden:!1,search:{type:"select",data:{url:"/api/colleges",optionsLabel:"name",optionsValue:"code",change:function(t){t.value?this.collegeId=t.value:this.collegeId=""}}}},{id:"grade",title:"年级",width:150,className:"text-left",hidden:!1,search:{type:"select",data:{options:this.gradeOptions,optionsLabel:"name",optionsValue:"id",change:function(t){this.grade=t.value}}}},{id:"politicalStatus",title:"政治面貌",hidden:!1,width:130,search:{type:"select",data:{url:"api/system/dicts?dictType=政治面貌",optionsLabel:"label",optionsValue:"value",change:function(t){this.politicalStatus=t.value}}}},{id:"educationLevel",title:"培养层次",className:"text-left",hidden:!1,width:130,search:{type:"select",data:{url:"api/system/dicts?dictType=培养层次",optionsLabel:"label",optionsValue:"value",change:function(t){this.educationLevel=t.value}}}},{id:"organizationName",title:"所属党组织",hidden:!1,width:130,search:{type:"select",data:{options:this.organizationName_options,optionsLabel:"text",optionsValue:"id",change:function(t){this.organizationName_value=t.value}}},formatter:function(t){if(!t.partyBuildOrganization)return"";var e="";return(e+='<span title="'+t.partyBuildOrganization.name+'">'+t.partyBuildOrganization.name+"</span>").substring(0,e.length-1)}},{id:"organizationPosition",title:"党支部书记",hidden:!1,width:130,search:{type:"select",data:{options:this.organizationPosition_options,optionsLabel:"text",optionsValue:"id",change:function(t){}}},formatter:function(t){if(!t.partyBuildOrganization)return"";var e="";return(e+='<span title="'+t.userNo+'">'+t.partyBuildOrganization.personInCharge.name+"/"+t.partyBuildOrganization.position+"</span>").substring(0,e.length-1)}},{id:"opt",className:"text-left",title:"操作",width:50,hidden:!1,formatter:function(){return[{tag:"a",text:"编辑",className:"opt-btn",callback:function(e,a){var i="/api/document/students/baseStatusOrganizationInfo/"+e.userId;Object(s.d)({type:"get",url:i,success:function(e){e.state?(t.seleteFace=e.data.politicalStatus,t.userInfo=e.data,null!=e.data.partyBuildOrganization&&(t.selectModel=e.data.partyBuildOrganization.id),null!=e.data.studentPartyBuildInfo&&(t.recommendPartyOrganizations_model=e.data.studentPartyBuildInfo.recommendPartyOrganizations),t.getFace(),t.$nextTick(function(){t.showInfoModal=!0})):t.$toast(e.message)}})}}]}}]},mounted:function(){this.getGrade()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"party-member-manage"}},[a("v-table",{key:1,ref:"liveStaffTable",attrs:{columns:t.columns,idField:"id",pagesize:"15",order:!0,search:!1,searchParams:t.searchParams,url:t.tableData_url,multiple:!0},on:{afterChecked:t._tableChecked}},[a("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("div",{staticClass:"btn-group pull-left set"},[t.tableCheckedList.length>0?a("div",{staticClass:"batch-options"},[a("span",{staticClass:"pull-left"},[t._v("已选择"+t._s(t.tableCheckedList.length)+"项，其中可操作的有"+t._s(t.tableCheckedList.length)+"项")]),t._v(" "),a("div",{staticClass:"pull-left"},[a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder resetBtn",attrs:{type:"button"},on:{click:function(e){t.setParty=!0,t.selectedParty=""}}},[t._v("设置所属党组织")])])]):t._e()]),t._v(" "),a("div",{staticClass:"btn-group pull-right"},[a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t.exportStat}},[t._v("导出")])])])]),t._v(" "),a("v-modal",{attrs:{show:t.showInfoModal,id:"infoModal",effect:"fade",width:"800"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("编辑")])]),t._v(" "),a("div",{staticClass:"modal-body canEdit",attrs:{slot:"modal-body"},slot:"modal-body"},[a("h1",[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("姓名:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.name))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("学号:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.studentId))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("学院:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.college))])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("年级:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.grade))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("班级:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.className))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("系别:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.department))])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("专业:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.major))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("性别:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.sex))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("培养层次:")]),t._v(" "),a("label",{staticClass:"input-label modal-label"},[t._v(t._s(t.userInfo.educationLevel))])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label title-label"},[t._v("政治面貌:")]),t._v(" "),a("v-select",{attrs:{value:t.seleteFace_id,options:t.seleteFace_list,autoSelect:!0,optionsLabel:"label",optionsValue:"value"},on:{afterSelected:function(e){return t.faceSelect(e)}},model:{value:t.seleteFace_id,callback:function(e){t.seleteFace_id=e},expression:"seleteFace_id"}})],1)])]),t._v(" "),a("div",{staticClass:"modal-body canEdit",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"editCt"},[a("h1",[t._v("入党信息")]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"edit-class-text"},[t._v("入党时间:")]),t._v(" "),a("v-datepicker",{ref:"datepicker",staticClass:"btn-block time-picker",attrs:{value:t.userInfo.studentPartyBuildInfo?t.userInfo.studentPartyBuildInfo.joinTime:"",clearButton:!1,showTime:!1},on:{daySelected:t.createTimeSelected_in}})],1)]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"edit-class-text"},[t._v("转正时间:")]),t._v(" "),a("v-datepicker",{ref:"datepicker",staticClass:"btn-block time-picker",attrs:{value:t.userInfo.studentPartyBuildInfo?t.userInfo.studentPartyBuildInfo.correctionTime:"",clearButton:!1,showTime:!1},on:{daySelected:t.createTimeSelected_office}})],1)]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"edit-class-text"},[t._v("推荐党组织:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.recommendPartyOrganizations_model,expression:"recommendPartyOrganizations_model"}],staticClass:"form-control modal-form-style name-input",attrs:{type:"text"},domProps:{value:t.recommendPartyOrganizations_model},on:{input:function(e){e.target.composing||(t.recommendPartyOrganizations_model=e.target.value)}}})])]),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("h2",[t._v("党组织信息")]),t._v(" "),a("div",{staticClass:"partyInfo"},[a("div",{staticClass:"col-md-8"},[a("label",{attrs:{for:""}},[t._v("所属党组织: ")]),t._v(" "),a("v-select",{attrs:{value:t.selectModel,options:t.organizationName_options,autoSelect:!0,optionsLabel:"text",optionsValue:"id"},on:{afterSelected:function(e){return t.partySelect(e)}},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}}),t._v(" "),a("span",[t._v(t._s(t.userInfo.partyBuildOrganization?t.userInfo.partyBuildOrganization.position:""))]),t._v(" "),a("span",[t._v(t._s(t.userInfo.partyBuildOrganization&&t.userInfo.partyBuildOrganization.personInCharge?t.userInfo.partyBuildOrganization.personInCharge.name:""))])],1),t._v(" "),a("div",{staticStyle:{clear:"both"}})])])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showInfoModal=!1}}},[t._v("取消")]),t._v(" "),t.isCheck?t._e():a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.submitConsultantInfo}},[t._v("确定")])])]),t._v(" "),a("v-modal",{attrs:{show:t.setParty,id:"infoModal",effect:"fade",width:"400"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("设置所属党组织")])]),t._v(" "),a("div",{staticClass:"modal-body setParty",attrs:{slot:"modal-body"},slot:"modal-body"},[a("label",{staticClass:"partyName"},[t._v("党组织列表")]),t._v(" "),a("v-select",{attrs:{options:t.organizationName_options,optionsLabel:"text",optionsValue:"id"},on:{afterSelected:function(e){return t.selectParty(e)}},model:{value:t.selectedParty,callback:function(e){t.selectedParty=e},expression:"selectedParty"}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.setParty=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.submitSelectParty}},[t._v("确定")])])])],1)},staticRenderFns:[]};var o=a("Mz/3")(i,l,!1,function(t){a("EicO"),a("mTcU")},"data-v-282447fa",null);e.default=o.exports},EicO:function(t,e){},mTcU:function(t,e){}});