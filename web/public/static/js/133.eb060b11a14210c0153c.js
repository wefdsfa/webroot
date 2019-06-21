webpackJsonp([133],{"4lyk":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("C331"),o={data:function(){var t=this;return{exportModalShow:!1,timeStamp:"",showUnpassOpinionModal:!1,unpassIds:[],opinion:"",positionId:"",canRevoke:!1,checkRecord:{modalShow:!1,viewIndex:"job",tableUrl:{job:"/table-data/pwps/salaries/page/byPosition",member:"/table-data/pwps/salaries/page/byUser"},columns:{job:[{id:"positionName",title:"岗位名称",className:"text-center",width:100,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.position.positionName}},{id:"positionType",title:"岗位类型",className:"text-center",width:100,hidden:!1,search:{type:"select",data:{url:"/api/system/dicts?dictType=岗位类型",optionsLabel:"label",optionsValue:"value"}},formatter:function(t){return t.position.positionTypeName}},{id:"month",title:"月份",className:"text-center",width:50,hidden:!1},{id:"grantCount",title:"发放人数",className:"text-center",width:100,hidden:!1},{id:"totalPayMount",title:"应发薪酬",className:"text-right",width:100,hidden:!1},{id:"realPayMount",title:"实发薪酬",className:"text-right",width:100,hidden:!1}],member:[{id:"name",title:"姓名",className:"text-left",width:60,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.user?t.user.name:""}},{id:"userNo",title:"学号",className:"text-left",width:120,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.user?t.user.userNo:""}},{id:"positionName",title:"岗位名称",className:"text-left",width:80,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}},formatter:function(t){return t.position?t.position.positionName:""}},{id:"positionType",title:"岗位类型",className:"text-center",width:80,hidden:!1,search:{type:"select",data:{url:"/api/system/dicts?dictType=岗位类型",optionsLabel:"label",optionsValue:"value"}},formatter:function(t){return t.position?t.position.positionTypeName:""}},{id:"month",title:"月份",className:"text-center",width:60,hidden:!1},{id:"manHour",title:"工时",className:"text-center",width:50,hidden:!1},{id:"rewardStandard",title:"薪酬标准",className:"text-right",width:80,hidden:!1,formatter:function(t){return t.position?t.position.rewardStandard:""}},{id:"salaryCapMonth",title:"薪酬上限",className:"text-right",width:80,hidden:!1,formatter:function(t){return t.position?t.position.salaryCapMonth:""}},{id:"totalPayMount",title:"应发薪酬",className:"text-right",width:100,hidden:!1},{id:"realPayMount",title:"实发薪酬",className:"text-right",width:100,hidden:!1}]}},manageTableUrl:"/table-data/pwps/workflow/runtime/salary/instances",manageTableColumns:[{id:"month",title:"月份",className:"text-left",width:100,hidden:!1,search:{type:"input"},formatter:function(t){return t.unitMonthlySalary?t.unitMonthlySalary.month:""}},{id:"unitName",title:"单位名称",width:100,className:"text-left",hidden:!1,search:{type:"input"},formatter:function(t){return t.unitMonthlySalary&&t.unitMonthlySalary.unit?t.unitMonthlySalary.unit.name:""}},{id:"grantCount",title:"发放人数",width:60,className:"text-center",hidden:!1,formatter:function(t){return t.unitMonthlySalary?t.unitMonthlySalary.grantCount:""}},{id:"totalPayMount",title:"应发薪酬",width:60,className:"text-right",hidden:!1,formatter:function(t){return t.unitMonthlySalary?t.unitMonthlySalary.totalPayMount:""}},{id:"realPayMount",title:"实发薪酬",width:60,className:"text-right",hidden:!1,formatter:function(t){return t.unitMonthlySalary?t.unitMonthlySalary.realPayMount:""}},{id:"applicantName",title:"提交人姓名",width:80,className:"text-left",hidden:!1,formatter:function(t){return t.applicant.name}},{id:"applicantUserNo",title:"提交人学工号",width:120,className:"text-left",hidden:!1,formatter:function(t){return t.applicant.userNo}},{id:"createTime",title:"提交时间",width:140,className:"text-left",hidden:!1},{id:"auditStatus",title:"审核状态",width:120,className:"text-center",hidden:!1,search:{type:"select",data:{options:[],optionsLabel:"text",optionsValue:"id"}},formatter:function(t){return t.statusLabel}},{id:"opt",title:"操作",className:"text-center",width:150,hidden:!1,formatter:function(e){var a=[{tag:"a",text:"查看",className:"opt-btn",callback:function(e,a){t.checkRecord.modalShow=!0,t.viewRecord=e,t.positionId=e.id,t.positionIds.push(e.id),t.currentNodeStatus=e.currentNodeStatus}}];return"TODO"===e.currentNodeStatus&&(a.push({tag:"a",text:"通过",className:"opt-btn",callback:function(e,a){t._submit("pass",[e.id])}}),a.push({tag:"a",text:"不通过",className:"opt-btn",callback:function(e,a){t._submit("unpass",[e.id])}})),e.canRevoke&&a.push({tag:"a",text:"撤回",className:"opt-btn",callback:function(e,a){t.positionId=e.id,t._revoke()}}),t.allowReject,a}}],viewRecord:null,exportFieldList:[],tableCheckedList:[],positionIds:[],currentNodeStatus:"",curNode:null}},computed:{allowBatch:function(){return this.curNode&&this.curNode.allowBatchOperation},allowReject:function(){return this.curNode&&this.curNode.allowReject},tableCheckedIds:function(){var t=[];return this.tableCheckedList.forEach(function(e){"TODO"===e.currentNodeStatus&&t.push(e.id)}),t},manageTableColumnsJson:function(){var t={};return this.manageTableColumns.forEach(function(e){t[e.id]=e}),t}},methods:{_checkField:function(t){var e=this.exportFieldList.indexOf(t.id);e>=0?this.exportFieldList.splice(e,1):this.exportFieldList.push(t.id)},_tableChecked:function(t){this.tableCheckedList=t},_export:function(){var t=this;this.$waiting.show();var e=this.$refs.salaryTable.tableSearchFields||{};e.nodeId=this.curNode.id,e.nodeType=this.curNode.type,e.ids=[],this.tableCheckedList.forEach(function(t){e.ids.push(t.id)}),Object(s.e)({url:"/api/pwps/workflow/runtime/salary/instances/export",type:"get",data:e,success:function(e){e.state?(t.$toast("文件获取成功，开始下载..."),window.location.href="/downloads/pwps/workflow/runtime/download?key="+e.data):t.$toast(e.message)}}).always(function(){t.$waiting.close()})},_submit:function(t,e){var a=this;0!==e.length?"pass"===t?window.confirm("确定通过吗？")&&(this.$waiting.show(),Object(s.e)({url:"/api/pwps/workflow/runtime/salary/instances/success",type:"post",data:{ids:e},success:function(t){t.state?(a.$toast("操作成功"),a._refreshTable(a),a.checkRecord.modalShow=!1):a.$toast(t.message)}}).always(function(){a.$waiting.close()})):"unpass"===t&&(this.showUnpassOpinionModal=!0,this.unpassIds=e):this.$toast("当前没有可操作的数据")},_revoke:function(){var t=this;window.confirm("确定撤回吗？")&&Object(s.e)({url:"/api/pwps/workflow/runtime/salary/instances/"+this.positionId+"/revoke",type:"put",success:function(e){e.state?(t._refreshTable(t),t.checkRecord.modalShow=!1,t.$toast("撤回成功")):t.$toast(e.message)}})},submitUnpassOpinion:function(){var t=this;if(!this.opinion)return this.$toast("请输入不通过的意见");Object(s.e)({url:"/api/pwps/workflow/runtime/salary/instances/failed",type:"post",data:{ids:this.unpassIds,opinion:this.opinion},success:function(e){e.state?(t.showUnpassOpinionModal=!1,t._refreshTable(t),t.checkRecord.modalShow=!1,t.$toast("操作成功")):t.$toast(e.message)}})},_refreshTable:function(t){t.timeStamp=Object(s.a)(),this.tableCheckedList=[]}},created:function(){var t=this;Object(s.e)({url:"/api/pwps/workflow/runtime/salary/nodes",type:"get",success:function(e){e.state?t.curNode=e.data[0]:t.$toast(e.message)}}),Object(s.e)({url:"/api/pwps/workflow/runtime/salary/search/options",type:"get",success:function(e){e.state?e.data&&(t.manageTableColumnsJson.auditStatus.search.data.options=e.data.auditStatus||[]):t.$toast(e.message)}})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"salary-grant-check"},[a("div",[a("v-table",{ref:"salaryTable",attrs:{url:t.curNode?t.manageTableUrl+"?nodeId="+t.curNode.id+"&nodeType="+t.curNode.type+"&timeStamp="+t.timeStamp:"",columns:t.manageTableColumns,pagesize:"10",idField:"id",multiple:t.allowBatch,order:!0,search:!1},on:{afterChecked:t._tableChecked}},[a("div",{staticClass:"table-options-container",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("div",{staticClass:"batch-options",class:{active:t.tableCheckedList.length>0}},[a("span",{staticClass:"pull-left"},[t._v("已选择"+t._s(t.tableCheckedList.length)+"项，其中可操作的有"+t._s(t.tableCheckedIds.length)+"项")]),t._v(" "),a("div",{staticClass:"pull-left"},[a("button",{staticClass:"btn blue",attrs:{type:"button"},on:{click:function(e){return t._submit("pass",t.tableCheckedIds)}}},[t._v("通过")]),t._v(" "),a("button",{staticClass:"btn blue",attrs:{type:"button"},on:{click:function(e){return t._submit("unpass",t.tableCheckedIds)}}},[t._v("不通过")])])]),t._v(" "),a("div",{staticClass:"btn-group pull-right"},[a("button",{staticClass:"btn clearBtnBorder ",attrs:{type:"button"},on:{click:t._export}},[t._v("导出")])])])])],1),t._v(" "),a("v-modal",{attrs:{show:t.exportModalShow}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        导出字段配置\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"field-list"},t._l(t.manageTableColumns,function(e,s){return"opt"!==e.id?a("div",{key:s,staticClass:"field-item",class:{active:t.exportFieldList.indexOf(e.id)>=0},on:{click:function(a){return t._checkField(e)}}},[a("i",{staticClass:"maticon pull-left",domProps:{innerHTML:t._s(t.icons(t.exportFieldList.indexOf(e.id)>=0?"check_box":"check_box_outline_blank"))}}),t._v(" "),a("span",[t._v(t._s(e.title))])]):t._e()}),0)]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.exportModalShow=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t._export}},[t._v("开始导出")])])]),t._v(" "),a("v-modal",{attrs:{show:t.checkRecord.modalShow,width:"1000"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        查看\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("v-table",{key:"5",attrs:{title:"job"===t.checkRecord.viewIndex?"岗位视图":"人员视图",url:t.viewRecord?t.checkRecord.tableUrl[t.checkRecord.viewIndex]+"?unitId="+t.viewRecord.unitMonthlySalary.unit.id+"&month="+t.viewRecord.unitMonthlySalary.month:"",columns:t.checkRecord.columns[t.checkRecord.viewIndex],pagesize:"10",idField:"id",multiple:!1,order:!0,search:!1}},[a("div",{attrs:{slot:"btn-group"},slot:"btn-group"},[a("div",{staticClass:"btn-group pull-right"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.checkRecord.viewIndex="job"===t.checkRecord.viewIndex?"member":"job"}}},[t._v("切换视图")])])])])],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},["TODO"===t.currentNodeStatus?a("a",{staticClass:"btn orangered",attrs:{type:"button"},on:{click:function(e){return t._submit("pass",t.positionIds)}}},[t._v("通过")]):t._e(),t._v(" "),"TODO"===t.currentNodeStatus?a("a",{staticClass:"btn orangered",attrs:{type:"button"},on:{click:function(e){return t._submit("unpass",t.positionIds)}}},[t._v("不通过")]):t._e(),t._v(" "),t.canRevoke?a("a",{staticClass:"btn orangered",attrs:{type:"button"},on:{click:t._revoke}},[t._v("撤回")]):t._e(),t._v(" "),a("a",{staticClass:"btn orangered",attrs:{type:"button"},on:{click:function(e){t.checkRecord.modalShow=!1}}},[t._v("关闭")])])]),t._v(" "),a("v-modal",{attrs:{show:t.showUnpassOpinionModal,width:"500"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        确定不通过该申请吗？\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.opinion,expression:"opinion"}],staticClass:"unpass-modal-textarea",attrs:{cols:"24",rows:"5",placeholder:"请输入不通过的意见",maxlength:"600"},domProps:{value:t.opinion},on:{input:function(e){e.target.composing||(t.opinion=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showUnpassOpinionModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.submitUnpassOpinion}},[t._v("确定")])])])],1)},staticRenderFns:[]};var n=a("VU/8")(o,i,!1,function(t){a("sN1C")},null,null);e.default=n.exports},sN1C:function(t,e){}});