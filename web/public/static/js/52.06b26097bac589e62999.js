webpackJsonp([52],{P7fS:function(t,e){},PUN0:function(t,e,a){"use strict";var n=a("Xxa5"),i=a.n(n),s=a("exGp"),o=a.n(s),r=a("713C"),l=a("V/it"),c=a("B/WJ"),u=a("Se9A"),f=a("N9Ox"),p=a("XfSg"),d=(a("p+qa"),a("MVd6")),h=(Object,Object,Boolean,u.a,f.a,r.a,l.a,c.a,{props:{ojf:Object,myUnit:Object,isManager:Boolean},components:{ModuleContainer:u.a,ModuleLoader:f.a,UnitInfo:r.a,PositionsInfo:l.a,RecruitmentInfo:c.a},data:function(){return{loading:!0,myUnit:null,units:[],ojfUnitApply:new d.b,submiting:!1}},computed:{},created:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.myUnit&&(t.ojfUnitApply=d.b.fromUnit(t.myUnit)),!t.isManager){e.next=4;break}return e.next=4,t.initNoJoinedUnits();case 4:t.ojfUnitApply.ojf=t.ojf,t.loading=!1;case 6:case"end":return e.stop()}},e,t)}))()},methods:{initNoJoinedUnits:function(){var t=this;return o()(i.a.mark(function e(){var a,n,s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getNoJoinedUnits(t.ojf.id);case 2:a=e.sent,n=a.state,s=a.message,o=a.data,n?t.units=o.map(function(t){return{id:t.id,name:t.companyName}}):t.$toast(s);case 7:case"end":return e.stop()}},e,t)}))()},submit:function(){var t=this;return o()(i.a.mark(function e(){var a,n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.unitInfo.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return");case 8:if(!t.isManager){e.next=10;break}return e.abrupt("return",t.submitByManager());case 10:return e.next=12,p.a.apply(t.ojfUnitApply);case 12:a=e.sent,n=a.state,s=a.message,t.submiting=!1,n?t.$alert("提交申请成功","",{center:!0,showClose:!1}).then(function(){t.backToMyOjfList()}):t.$toast(s);case 17:case"end":return e.stop()}},e,t,[[0,5]])}))()},submitByManager:function(){var t=this;return o()(i.a.mark(function e(){var a,n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.applyByManager(t.ojfUnitApply);case 2:a=e.sent,n=a.state,s=a.message,t.submiting=!1,n?t.$alert("预留成功","",{center:!0,showClose:!1}).then(function(){t.back()}):t.$toast(s);case 7:case"end":return e.stop()}},e,t)}))()},backToMyOjfList:function(){this.$emit("back-to-my-list",{refresh:!0})},back:function(){this.$emit("back-to-list")}}}),m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"back",on:{click:t.back}},[a("i",{staticClass:"el-icon-back"}),t._v("返回\n  ")]),t._v(" "),a("div",{staticClass:"page-title"},[t._v("\n    "+t._s("网招会名称："+t.ojf.name)+"\n  ")]),t._v(" "),t.loading?a("module-loader"):a("div",{staticClass:"module-container"},[a("unit-info",{ref:"unitInfo",attrs:{"my-unit":t.myUnit,units:t.units,edit:""},model:{value:t.ojfUnitApply,callback:function(e){t.ojfUnitApply=e},expression:"ojfUnitApply"}}),t._v(" "),a("positions-info",{attrs:{edit:""},model:{value:t.ojfUnitApply.positions,callback:function(e){t.$set(t.ojfUnitApply,"positions",e)},expression:"ojfUnitApply.positions"}}),t._v(" "),a("recruitment-info",{attrs:{edit:""},model:{value:t.ojfUnitApply.recruitment,callback:function(e){t.$set(t.ojfUnitApply,"recruitment",e)},expression:"ojfUnitApply.recruitment"}}),t._v(" "),a("module-container",{attrs:{actions:""}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.submiting,expression:"submiting"}],attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v(t._s(t.isManager?"预留":"提交审核"))])],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")(h,m,!1,null,null,null);e.a=v.exports},"Sui/":function(t,e){},yV1m:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("wHoj"),a("NGAA");var n=a("INlO"),i=a.n(n),s=a("Xxa5"),o=a.n(s),r=a("exGp"),l=a.n(r),c=a("MVd6"),u=a("Se9A"),f=a("XfSg"),p=a("+X9P"),d=(a("162o"),u.a,p.a,{components:{ModuleContainer:u.a,BaseInfo:p.a},data:function(){return{ojf:new c.a}},methods:{createOjf:function(){var t=this;return l()(o.a.mark(function e(){var a,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.baseInfo.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return");case 8:return e.next=10,f.a.create(t.ojf);case 10:a=e.sent,n=a.state,i=a.message,a.data,n?t.$alert("发布成功","",{center:!0,showClose:!1}).then(function(){t.backToList()}):t.$toast(i);case 15:case"end":return e.stop()}},e,t,[[0,5]])}))()},backToList:function(){this.$emit("back-to-list",{refresh:!0,tableName:"manageList"})}}}),h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"back",on:{click:t.backToList}},[a("i",{staticClass:"el-icon-back"}),t._v("返回\n  ")]),t._v(" "),a("div",{staticClass:"module-container"},[a("base-info",{ref:"baseInfo",attrs:{edit:""},model:{value:t.ojf,callback:function(e){t.ojf=e},expression:"ojf"}}),t._v(" "),a("module-container",{attrs:{actions:"",inline:""}},[a("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.createOjf}},[t._v("发布")])],1)],1)])},staticRenderFns:[]},m=a("VU/8")(d,h,!1,null,null,null).exports,v={components:{NewOjf:m},data:function(){var t=this;return{ojf:new c.a,table:{url:"/table-data/employment/platform/getNetworkMeetingList?ts=",search:{ts:+new Date},columns:[{id:"name",title:"网招会名称",className:"text-left",width:100,hidden:!1,search:{type:"",data:{placeholer:"网招会名称",autoFocus:!1}},formatter:function(t){return c.a.fromApi(t).getNameHtmlWithStatus()}},{id:"startTime",title:"网招会开始时间",className:"text-left",width:140,hidden:!1,formatter:function(t){return new Date(t.beginTime).format("yyyy-MM-dd HH:mm")}},{id:"endTime",title:"网招会结束时间",className:"text-left",width:140,hidden:!1,formatter:function(t){return new Date(t.endTime).format("yyyy-MM-dd HH:mm")}},{id:"opt",title:"操作",width:120,hidden:!1,formatter:function(e){var a=c.a.fromApi(e),n={show:{tag:"a",text:"查看",callback:function(e,n){t.showOjf(a)}},unShelve:{tag:"a",text:"下架",callback:function(e,n){t.unShelve(a)}},shelve:{tag:"a",text:"上架",callback:function(e,n){t.shelve(a)}},publish:{tag:"a",text:"发布",callback:function(e,n){t.publish(a)}},setTop:{tag:"a",text:"置顶",callback:function(e,n){t.changeTop(a,!0)}},downTop:{tag:"a",text:"取消置顶",callback:function(e,n){t.changeTop(a,!1)}}},i=[n.show];return a.unShelved&&i.push(n.shelve),a.top?i.push(n.downTop):i.push(n.setTop),a.published&&i.push(n.unShelve),a.published||a.unShelved||i.push(n.publish),i}}]}}},computed:{tableUrl:function(){return this.table.url+"&beginTime="+(this.table.search.beginTime||"")+"&endTime="+(this.table.search.endTime||"")+"&ts="+this.table.search.ts}},methods:{toCreateOjf:function(){this.$emit("to-create-ojf")},showOjf:function(t){var e=this;return l()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.$emit("to-detail",t);case 1:case"end":return a.stop()}},a,e)}))()},unShelve:function(t){var e=this;return l()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:i.a.confirm("确认下架"+t.name+"?").then(l()(o.a.mark(function a(){var n,i,s;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.unShelve(t.id);case 2:n=a.sent,i=n.state,s=n.message,n.data,i?(e.$toast("下架成功"),e.refreshTable()):e.$toast(s);case 7:case"end":return a.stop()}},a,e)})));case 1:case"end":return a.stop()}},a,e)}))()},shelve:function(t){var e=this;return l()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:i.a.confirm("确认上架"+t.name+"?").then(l()(o.a.mark(function a(){var n,i,s;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.shelve(t.id);case 2:n=a.sent,i=n.state,s=n.message,n.data,i?(e.$toast("上架成功"),e.refreshTable()):e.$toast(s);case 7:case"end":return a.stop()}},a,e)})));case 1:case"end":return a.stop()}},a,e)}))()},publish:function(t){var e=this;return l()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:i.a.confirm("确认发布"+t.name+"?").then(l()(o.a.mark(function a(){var n,i,s;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.publish(t.id);case 2:n=a.sent,i=n.state,s=n.message,n.data,i?(e.$toast("发布成功"),e.refreshTable()):e.$toast(s);case 7:case"end":return a.stop()}},a,e)})));case 1:case"end":return a.stop()}},a,e)}))()},changeTop:function(t,e){var a=this;return l()(o.a.mark(function n(){var i,s,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.changeTop(t.id,e);case 2:i=n.sent,s=i.state,r=i.message,i.data,s?(a.$toast("置顶成功"),a.refreshTable()):a.$toast(r);case 7:case"end":return n.stop()}},n,a)}))()},refreshTable:function(){this.table.search.ts=+new Date}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-table",{ref:"manageListTable",attrs:{url:this.tableUrl,columns:this.table.columns,pagesize:"20",idField:"id",multiple:!1,order:!0,search:!0}},[e("div",{staticClass:"pull-right",attrs:{slot:"btn-group"},slot:"btn-group"},[e("el-button",{attrs:{type:"primary"},on:{click:this.toCreateOjf}},[this._v("新增网招会")])],1)])],1)},staticRenderFns:[]},g=a("VU/8")(v,b,!1,null,null,null).exports,j=a("woOf"),x=a.n(j),w=a("DkpT"),y={data:function(){var t=this;return{page:"LIST",ojf:new c.a,table:{url:"/table-data/employment/manage/networkMeeting/getNetworkMeetingAuditList?ts=",search:{ts:+new Date},columns:[{id:"companyName",title:"单位名称",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"name",title:"网招会名称",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"beginTime",title:"开始时间",className:"text-left",width:145,hidden:!1},{id:"endTime",title:"结束时间",className:"text-left",width:145,hidden:!1},{id:"createTime",title:"提交时间",className:"text-left",width:145,hidden:!1},{id:"status",title:"审核状态",className:"text-left",width:80,hidden:!1,formatter:function(t){var e=w.c[t.status]||w.b[t.status];return'<span class="el-tag el-tag--small el-tag--dark el-tag--'+w.d[t.status]+'">'+e+"</span>"},search:{type:"select",data:{placeholer:"审核状态",autoFocus:!1,optionsLabel:"text",optionsValue:"id",options:w.e}}},{id:"auditReason",title:"审核意见",className:"text-left",width:100,hidden:!1},{id:"opt",title:"操作",width:100,hidden:!1,formatter:function(e){return[{show:{tag:"a",text:"查看",callback:function(e,a){t.toApplyDetail({ojfUnitApplyId:e.participantId,ojf:new c.a({id:e.id})})}}}.show]}}]}}},computed:{tableUrl:function(){return this.table.url+"&ts="+this.table.search.ts}},methods:{backToList:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).created&&this.refreshTable(),this.page=this.PAGES.LIST},toApplyDetail:function(t){var e=this;return l()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.$emit("to-apply-detail",x()({},t,{from:"LIST"}));case 1:case"end":return a.stop()}},a,e)}))()},refreshTable:function(){this.table.search.ts=+new Date}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-table",{ref:"manageListTable",attrs:{url:this.tableUrl,columns:this.table.columns,pagesize:"20",idField:"id",multiple:!1,order:!0,search:!0}})],1)},staticRenderFns:[]},U=a("VU/8")(y,k,!1,null,null,null).exports,O=(Object,u.a,p.a,{props:{ojf:Object},components:{ModuleContainer:u.a,BaseInfo:p.a},data:function(){return{hasUpdated:!1,loading:!1,isEditingOjf:!1,ojfTemp:null,showOpLogs:!1,opLogDataUrl:"",exportOjfUnitDialog:{show:!1,selectAll:!1,fields:[{value:"1",text:"单位名称"},{value:"2",text:"单位性质"},{value:"3",text:"单位联系人"},{value:"4",text:"单位规模"},{value:"5",text:"电话"},{value:"6",text:"邮箱"},{value:"7",text:"单位地址"},{value:"8",text:"单位简介"},{value:"9",text:"招聘简章"},{value:"10",text:"职位数量"},{value:"11",text:"职位名称"},{value:"12",text:"薪资范围"},{value:"13",text:"招聘人数"},{value:"14",text:"所属类别"},{value:"15",text:"专业要求"},{value:"16",text:"学历要求"},{value:"17",text:"工作地点"},{value:"18",text:"岗位职责"},{value:"19",text:"岗位要求"}],selected:[]}}},computed:{allExportOjfUnitFieldsSelected:function(){return this.exportOjfUnitDialog.fields.length===this.exportOjfUnitDialog.selected.length}},created:function(){var t=this;return l()(o.a.mark(function e(){var a,n,i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t.ojf.id);case 2:a=e.sent,n=a.state,i=a.message,s=a.data,n?t.ojf.units=c.a.fromApi(s).units:t.$toast(i);case 7:case"end":return e.stop()}},e,t)}))()},methods:{updateOjf:function(){var t=this;return l()(o.a.mark(function e(){var a,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.update(t.ojf);case 2:a=e.sent,n=a.state,i=a.message,a.data,n?(t.$toast("保存更改成功"),t.hasUpdated=!0,t.isEditingOjf=!1,t.ojfTemp=null):t.$toast(i);case 7:case"end":return e.stop()}},e,t)}))()},toReserve:function(){this.$emit("to-reserve",{ojf:this.ojf})},toExportOjfUnit:function(){this.exportOjfUnitDialog.show=!0,this.selectAllExportOjfUnitFields()},selectAllExportOjfUnitFields:function(t){this.exportOjfUnitDialog.selected=t?this.exportOjfUnitDialog.fields.map(function(t){return t.value}):[]},exportOjfUnit:function(){window.open("/downloads/employment/manage/networkMeeting/excelOut?id="+this.ojf.id+"&fields="+this.exportOjfUnitDialog.selected.join(",")),this.exportOjfUnitDialog.show=!1},showOjfUnitApply:function(t,e){this.$emit("to-apply-detail",{ojfUnitApplyId:t.id,ojf:this.ojf,edit:!0,hideStatus:!0})},toEditOjf:function(){this.ojfTemp=x()({},this.ojf),this.isEditingOjf=!0},cancelEditOjf:function(){x()(this.ojf,this.ojfTemp),this.isEditingOjf=!1},backToList:function(){var t={};this.hasUpdated&&(t={refresh:!0,tableName:"manageList"}),this.$emit("back-to-list",t)}}}),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"back",on:{click:t.backToList}},[a("i",{staticClass:"el-icon-back"}),t._v("返回\n  ")]),t._v(" "),a("div",{staticClass:"module-container"},[a("base-info",{attrs:{edit:t.isEditingOjf},model:{value:t.ojf,callback:function(e){t.ojf=e},expression:"ojf"}}),t._v(" "),t.isEditingOjf?a("module-container",{attrs:{actions:""}},[a("el-button",{attrs:{size:"large"},on:{click:t.cancelEditOjf}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.updateOjf}},[t._v("保存")])],1):t._e(),t._v(" "),a("module-container",{attrs:{title:"参会单位",loader:t.loading,"loader-text":"正在加载参会单位"}},[a("div",{staticClass:"actions"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.toReserve}},[t._v("预留展位")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-download"},on:{click:t.toExportOjfUnit}},[t._v("导出")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ojf.units}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"企业名称",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"positionCount",label:"职位数量",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"opt",label:"操作",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.showOjfUnitApply(e.row,e.$index)}}},[t._v("查看")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"operations-container-action"},[t.isEditingOjf?a("el-button",{attrs:{type:"text"},on:{click:t.cancelEditOjf}},[t._v("取消编辑")]):a("el-button",{attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:t.toEditOjf}},[t._v("编辑")])],1),t._v(" "),a("div",{staticClass:"operations-container",class:{show:t.showOpLogs}})],1),t._v(" "),a("el-dialog",{attrs:{title:"选择导出的字段",visible:t.exportOjfUnitDialog.show,width:"25%","show-close":!1,center:""},on:{"update:visible":function(e){return t.$set(t.exportOjfUnitDialog,"show",e)}}},[a("el-checkbox",{attrs:{indeterminate:t.exportOjfUnitDialog.selected.length&&t.exportOjfUnitDialog.selected.length<t.exportOjfUnitDialog.fields.length},on:{change:t.selectAllExportOjfUnitFields},model:{value:t.allExportOjfUnitFieldsSelected,callback:function(e){t.allExportOjfUnitFieldsSelected=e},expression:"allExportOjfUnitFieldsSelected"}},[t._v("\n      全选\n    ")]),t._v(" "),a("el-checkbox-group",{model:{value:t.exportOjfUnitDialog.selected,callback:function(e){t.$set(t.exportOjfUnitDialog,"selected",e)},expression:"exportOjfUnitDialog.selected"}},t._l(t.exportOjfUnitDialog.fields,function(e){return a("div",{key:e.value},[a("el-checkbox",{attrs:{label:e.value}},[t._v(t._s(e.text))])],1)}),0),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.exportOjfUnitDialog.show=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.exportOjfUnit}},[t._v("导 出")])],1)],1)],1)},staticRenderFns:[]};var T=a("VU/8")(O,_,!1,function(t){a("P7fS")},"data-v-1ff88b54",null).exports,A=a("PUN0"),L=a("G1RR"),D=(A.a,L.a,{components:{ManageOjfList:g,ManageOjfAuditList:U,NewOjf:m,OjfDetail:T,UnitOjfApply:A.a,UnitOjfApplyDetail:L.a},data:function(){return{activeList:"ALL",page:"LIST",ojf:null,ojfUnitApplyId:null,showOplog:!1,edit:!1,applyDetailFrom:null,hideStatus:!1}},watch:{activeList:function(t){var e={ALL:"manageList",AUDIT:"auditList"}[t];this.$refs[e].refreshTable()}},methods:{toCreateOjf:function(){this.page="NEW"},toDetail:function(t){this.page="DETAIL",this.ojf=t},toApplyDetail:function(t){var e=t.ojf,a=t.ojfUnitApplyId,n=t.showOplog,i=t.edit,s=t.from,o=t.hideStatus;this.ojf=e,this.ojfUnitApplyId=a,this.showOplog=n||!1,this.edit=i||!1,this.applyDetailFrom=s,this.hideStatus=o,this.page="APPLY_DETAIL"},toReserve:function(t){var e=t.ojf;this.ojf=e,this.page="APPLY"},backToList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.refresh,a=t.tableName,n=t.from;this.page=n||"LIST",e&&this.$refs[a].refreshTable()},backToDetail:function(){this.page="DETAIL"},applyDetailBack:function(t){var e=t.from,a=t.refresh,n=t.tableName;this.page=e||"DETAIL",a&&this.$refs[n].refreshTable()}}}),$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"LIST"===t.page,expression:"page === 'LIST'"}],staticClass:"tab-content"},[a("el-tabs",{model:{value:t.activeList,callback:function(e){t.activeList=e},expression:"activeList"}},[a("el-tab-pane",{attrs:{label:"网招会列表",name:"ALL"}},[a("manage-ojf-list",{ref:"manageList",on:{"to-create-ojf":t.toCreateOjf,"to-detail":t.toDetail}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"网招会审核",name:"AUDIT"}},[a("manage-ojf-audit-list",{ref:"auditList",on:{"to-apply-detail":t.toApplyDetail}})],1)],1)],1),t._v(" "),"NEW"===t.page?a("div",[a("new-ojf",{on:{"back-to-list":t.backToList}})],1):t._e(),t._v(" "),"DETAIL"===t.page?a("div",[a("ojf-detail",{attrs:{ojf:t.ojf},on:{"back-to-list":t.backToList,"to-apply-detail":t.toApplyDetail,"to-reserve":t.toReserve}})],1):t._e(),t._v(" "),"APPLY"===t.page?a("div",[a("unit-ojf-apply",{attrs:{ojf:t.ojf,"is-manager":""},on:{"back-to-list":t.backToDetail}})],1):t._e(),t._v(" "),"APPLY_DETAIL"===t.page?a("div",[a("unit-ojf-apply-detail",{attrs:{ojf:t.ojf,"ojf-unit-apply-id":t.ojfUnitApplyId,from:t.applyDetailFrom,"hide-status":t.hideStatus,"show-oplog":t.showOplog,edit:t.edit,"is-manager":""},on:{back:t.applyDetailBack}})],1):t._e()])},staticRenderFns:[]};var E=a("VU/8")(D,$,!1,function(t){a("Sui/")},null,null);e.default=E.exports}});