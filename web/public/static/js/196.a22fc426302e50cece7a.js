webpackJsonp([196],{"j/Yp":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("xd7I");var n=a("C331"),s={created:function(){var t=this,e=localStorage.getItem("lang");Object(n.g)(e)&&(this.lang=e),Object(n.e)({url:"/api/apartment/inandout/getSelectOption",dataType:"json",type:"get",success:function(e){if(e.state){var a=e.data.option;t.options.college=a.college||[],t.options.grade=a.grade||[],t.options.educationLevel=a.educationLevel||[],t.options.checkInStatus=a.checkInStatus||[],t.options.paymentStatus=a.paymentStatus||[],t._initColumns()}else t.toast(e.message)}})},data:function(){return{columns:[],url:"/table-data/apartment/inandout/allRecord",importPage:!1,importParams:{parentPageTitle:"",downloadTemplateUrl:"",downloadErrorTemplateUrl:"",checkTemplateUrl:"",templateName:"",importBtnType:null},options:{college:[],grade:[],educationLevel:[],checkInStatus:[],paymentStatus:[]},timeStamp:null,lang:"zh-cn"}},computed:{translate:function(){return Object(n.g)(this.lang).entryAndEexit}},methods:{_initColumns:function(){var t=this;this.columns=[{id:"name",title:this.translate.name,className:"text-left",width:70,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.namePlaceholder}}},{id:"studentId",title:this.translate.studentId,className:"text-left",width:120,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.studentIdPlaceholder}}},{id:"account",title:this.translate.account,className:"text-left",width:120,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.accountIdPlaceholder}}},{id:"college",title:this.translate.college,className:"text-left",width:100,hidden:!1,search:{type:"multiSelect",data:{options:this.options.college,optionsLabel:"name",optionsValue:"code"}}},{id:"educationLevel",title:this.translate.educationLevel,className:"text-left",width:80,hidden:!1,search:{type:"multiSelect",data:{options:this.options.educationLevel,optionsLabel:"name",optionsValue:"code"}}},{id:"grade",title:this.translate.grade,className:"text-left",width:60,hidden:!1,search:{type:"multiSelect",data:{options:this.options.grade,optionsLabel:"name",optionsValue:"code"}}},{id:"paymentStatus",title:this.translate.paymentStatus,className:"text-left",width:80,hidden:!1,search:{type:"multiSelect",data:{options:this.options.paymentStatus,optionsLabel:"name",optionsValue:"code"}}},{id:"dormitory",title:this.translate.dormitory,className:"text-left",width:300,hidden:!1,formatter:function(t){return(t.dormitory.campus?t.dormitory.campus+"校区":"")+t.dormitory.zone+t.dormitory.buildName+" "+t.dormitory.room+"室"+t.dormitory.bed+"号床"}},{id:"checkInStatus",title:this.translate.checkInStatus,className:"text-left",width:80,hidden:!1,search:{type:"select",data:{options:this.options.checkInStatus,optionsLabel:"name",optionsValue:"code"}}},{id:"opt",title:this.translate.opt,className:"text-left",width:60,hidden:!1,formatter:function(e){return"已入住"==e.checkInStatus?[{tag:"a",text:t.translate.leaveDormitory,className:"opt-btn",callback:function(e,a){confirm(t.translate.leaveDormitoryConfirmTip)&&Object(n.e)({url:"/api/apartment/inandout/singleOut/"+e.studentId,dataType:"json",type:"put",success:function(e){e.state?(t.checkInStatus="已退宿",t.timeStamp=Object(n.a)(),t.$toast("退宿成功!")):t.$toast(e.message)}})}}]:[{tag:"a",text:t.translate.entryDormitory,className:"opt-btn",callback:function(e,a){confirm(t.translate.entryDormitoryConfirmTip)&&Object(n.e)({url:"/api/apartment/inandout/singleIn/"+e.studentId,dataType:"json",type:"put",success:function(e){e.state?(t.checkInStatus="已入住",t.timeStamp=Object(n.a)(),t.$toast("入住成功!")):that.$toast(e.message)}})}}]}}]},entry:function(){var t=this;this.importPage=!0,this.importParams.parentPageTitle=this.translate.tableName,this.importParams.templateName=this.translate.batchEntry,this.importParams.downloadTemplateUrl="/apartment/inandout/batchIn/template",this.importParams.checkTemplateUrl="/apartment/inandout/batchIn/excel",this.importParams.downloadErrorTemplateUrl="/apartment/inandout/batchIn/error",this.importParams.importBtnType=[{url:"/apartment/inandout/batchIn",method:"put",isShowBtn:!0,name:this.translate.overlayImport,success:function(e){e.state&&t._refreshTable()}}]},exit:function(){var t=this;this.importPage=!0,this.importParams.parentPageTitle=this.translate.tableName,this.importParams.templateName=this.translate.batchExit,this.importParams.downloadTemplateUrl="/apartment/inandout/batchOut/template",this.importParams.checkTemplateUrl="/apartment/inandout/batchOut/excel",this.importParams.downloadErrorTemplateUrl="/apartment/inandout/batchOut/error",this.importParams.importBtnType=[{url:"/apartment/inandout/batchOut",method:"put",isShowBtn:!0,name:this.translate.overlayImport,success:function(e){e.state&&t._refreshTable()}}]},_refreshTable:function(){this.timeStamp=Object(n.a)()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"entryAndExit-page"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.importPage,expression:"!importPage"}],staticClass:"row text-center"},[a("v-table",{attrs:{title:t.translate.tableName,url:t.url+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,order:!0,search:!0}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.entry()}}},[t._v(t._s(t.translate.batchEntry))]),t._v(" "),a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(t._s(t.translate.batchExit))])])])],1),t._v(" "),a("v-import",t._b({directives:[{name:"show",rawName:"v-show",value:t.importPage,expression:"importPage"}],on:{backParentPage:function(e){t.importPage=!1}}},"v-import",t.importParams,!1))],1)},staticRenderFns:[]};var o=a("C7Lr")(s,i,!1,function(t){a("mVI5")},null,null);e.default=o.exports},mVI5:function(t,e){}});