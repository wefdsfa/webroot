webpackJsonp([92],{MPQl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("IvJb");var s=a("C331"),n={created:function(){var t=localStorage.getItem("lang"),e=this;Object(s.e)(t)&&(this.lang=t),this.columns=[{id:"id",title:"#",width:60,className:"text-center",hidden:!0},{id:"name",title:this.translate.formName,className:"text-left",hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.formNamePlaceholder}}},{id:"version",title:this.translate.version,width:100,className:"text-center",hidden:!1},{id:"remark",title:this.translate.remark,editable:!0,className:"text-left",hidden:!1},{id:"opt",className:"text-right",width:"300px",hidden:!1,formatter:function(){return[{tag:"a",text:e.translate.edit,className:"opt-btn",callback:function(t,a){e.form=t,e.newForm.id=t.id,e.newForm.name=t.name,e.modalType=e.translate.edit,e.showAddModal=!0}},{tag:"a",text:e.translate.remove,className:"opt-btn",callback:function(t,a){confirm(e.translate.removeConfirmTip)&&Object(s.c)({url:"/api/workflow/forms/"+t.formId+"/settings/"+t.id,dataType:"json",type:"delete",success:function(t){t.state?e.url="/table-data/workflow/forms/pages?timestamp="+(new Date).getTime():e.$toast(e.translate.removeFailedTip+":"+t.message)}})}}]}}]},data:function(){return{columns:[],url:"/table-data/workflow/forms/pages",showAddModal:!1,form:{},newForm:{},modalType:"",lang:"zh-cn"}},computed:{translate:function(){return Object(s.e)(this.lang).formManage}},methods:{editForm:function(){var t=this;Object(s.c)({url:"/api/permission/roles/"+this.newForm.id,dataType:"json",data:{name:this.newForm.name},type:"patch",success:function(e){e.state?(t.form.id=t.newForm.id,t.form.name=t.newForm.name,t.showAddModal=!1):t.$toast(t.translate.editSuccessTip+":"+e.message)}})},addModal:function(){this.newForm={},this.modalType=this.translate.addNew,this.showAddModal=!0},addForm:function(){var t=this;Object(s.c)({url:"/api/permission/roles",dataType:"json",data:{name:this.newForm.name},type:"post",success:function(e){e.state?(t.url="/table-data/permission/roles?timestamp="+(new Date).getTime(),t.showAddModal=!1):t.$toast(t.translate.addFailedTip+":"+e.message)}})},saveRemark:function(t){var e=this;Object(s.c)({url:"/api/workflow/forms/"+t.row.id,dataType:"json",type:"put",data:{name:t.row.name,remark:t.value},success:function(t){t.state?e.url="/table-data/workflow/forms/pages?timestamp="+(new Date).getTime():e.$toast(t.message)}})},changeRole:function(){this.modalType===this.translate.addNew?this.addForm():this.modalType===this.translate.edit&&this.editForm()}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"form-page"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:t.translate.formTable,url:t.url,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!0},on:{saveEdit:t.saveRemark}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add",attrs:{type:"button"},on:{click:function(e){t.addModal()}}},[t._v(t._s(t.translate.addNew))])])])],1)])},staticRenderFns:[]};var r=a("C7Lr")(n,o,!1,function(t){a("sUXW")},null,null);e.default=r.exports},sUXW:function(t,e){}});