webpackJsonp([64],{JTLb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("n+6Y");var s=a("C331"),o={created:function(){var t=localStorage.getItem("lang"),e=this;Object(s.e)(t)&&(this.lang=t),this.columns=[{id:"name",title:this.translate.flowName,className:"text-left",hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.formNamePlaceholder}}},{id:"id",title:"#",width:60,className:"text-center",hidden:!1},{id:"opt",className:"text-right",width:"300px",hidden:!1,formatter:function(){return[{tag:"a",text:e.translate.edit,className:"opt-btn",callback:function(t,a){e.flow=t,e.newFlow.id=t.id,e.newFlow.name=t.name,e.modalType=e.translate.edit,e.showAddModal=!0}},{tag:"a",text:e.translate.remove,className:"opt-btn",callback:function(t,a){Object(s.c)({url:"/api/permission/roles/"+t.id,dataType:"json",type:"delete",success:function(t){confirm(e.translate.removeConfirmTip)&&(t.state?e.url="/table-data/permission/roles?timestamp="+(new Date).getTime():e.toast(e.translate.removeFailedTip+":"+t.message))}})}}]}}]},data:function(){return{columns:[],url:"/table-data/permission/roles",showAddModal:!1,flow:{},newFlow:{},treeItems:[],modalType:"",treeUrl:"",showBindUserGroupModal:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(s.e)(this.lang).flowManage}},methods:{editFlow:function(){var t=this;Object(s.c)({url:"/api/permission/roles/"+this.newFlow.id,dataType:"json",data:{name:this.newFlow.name},type:"patch",success:function(e){e.state?(t.flow.id=t.newFlow.id,t.flow.name=t.newFlow.name,t.showAddModal=!1):t.toast(t.translate.editSuccessTip+":"+e.message)}})},addModal:function(){this.newFlow={},this.modalType=this.translate.addNew,this.showAddModal=!0},addFlow:function(){var t=this;Object(s.c)({url:"/api/permission/roles",dataType:"json",data:{name:this.newFlow.name},type:"post",success:function(e){e.state?(t.url="/table-data/permission/roles?timestamp="+(new Date).getTime(),t.showAddModal=!1):t.toast(t.translate.addFailedTip+":"+e.message)}})},changeRole:function(){this.modalType===this.translate.addNew?this.addFlow():this.modalType===this.translate.edit&&this.editFlow()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"flow-page"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:t.translate.flowTable,url:t.url,pagesize:"10",idField:"id",columns:t.columns,multiple:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add",attrs:{type:"button"},on:{click:function(e){t.addModal()}}},[t._v(t._s(t.translate.addNew))])])])],1),t._v(" "),a("v-modal",{attrs:{show:t.showAddModal,effect:"fade",width:"274"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        "+t._s(t.modalType)+t._s(t.translate.form)+"\n    ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newFlow.id,expression:"newFlow.id"}],attrs:{type:"hidden",id:"formId"},domProps:{value:t.newFlow.id},on:{input:function(e){e.target.composing||t.$set(t.newFlow,"id",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newFlow.name,expression:"newFlow.name"}],staticClass:"form-control name-input",attrs:{id:"formName",type:"text"},domProps:{value:t.newFlow.name},on:{input:function(e){e.target.composing||t.$set(t.newFlow,"name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn btn-style-2",attrs:{type:"button"},on:{click:function(e){t.showAddModal=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn btn-style-1",attrs:{type:"button"},on:{click:t.changeRole}},[t._v(t._s(t.translate.confirm))])])])],1)},staticRenderFns:[]};var n=a("C7Lr")(o,l,!1,function(t){a("OqgH")},null,null);e.default=n.exports},OqgH:function(t,e){}});