webpackJsonp([94],{RfXa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("WxFH"),l=a.n(s),o=(a("wHeh"),a("L4f1")),n=a.n(o),r=a("C331"),i={created:function(){var e=localStorage.getItem("lang"),t=this;Object(r.f)(e)&&(this.lang=e),Object(r.d)({url:"/api/payment/years?lang=",dataType:"json",type:"get",success:function(e){for(var a=0;a<e.data.length;a++){var s=new Object;s.name=e.data[a]+"-"+(parseInt(e.data[a])+1)+"年",s.id=e.data[a],t.schoolYear.push(s)}}}),Object(r.d)({url:"/api/colleges?lang=",dataType:"json",type:"get",success:function(e){for(var a=0;a<e.data.length;a++){var s=new Object;s.name=e.data[a].name,s.code=e.data[a].code,t.college.push(s)}}}),""==this.schoolYearSelect&&Object(r.d)({url:"/api/payment/projects",dataType:"json",type:"get",success:function(e){for(var a=0;a<e.data.length;a++){var s=new Object;s.name=e.data[a].name,s.id=e.data[a].id,t.payItem.push(s),t.projectIds=t.projectIds+e.data[a].id+",",t.projectIds1=t.projectIds1+e.data[a].id+","}t.payItem1=t.payItem,Object(r.d)({url:"/api/payment/stat?projectIds="+t.projectIds,dataType:"json",type:"get",success:function(e){t.time=e.data.createTime;for(var a=[],s=[],l=[],o=[],n=[],r=0;r<e.data.items.length;r++)a.push(e.data.items[r].peopleCountPaid),s.push(e.data.items[r].peopleCountNotPay),l.push(e.data.items[r].amountPaid),o.push(e.data.items[r].amountNotPay),n.push(e.data.items[r].projectName);t.updateEchart(n,a,s,l,o)}})}})},data:function(){var e;return e={payItem1:[],time:"",collegeSelect:"",selectPayItems:"",selectSchoolYears:"",projectIds1:"",collegeCode:"",projectIds:[],schoolYearSelect:"",isheadPage:!0,xueyuan:"数学院",item:"学费"},l()(e,"time","2017-2018年"),l()(e,"departmentOptions",[]),l()(e,"levelOptions",[{id:"COLLEGE",name:"院级"},{id:"SCHOOL",name:"校级"}]),l()(e,"college",[]),l()(e,"schoolYear",[]),l()(e,"payItem",[]),l()(e,"currentDepartmentId",""),l()(e,"url",""),l()(e,"roleUrl","/table-data/approveRoles/page"),l()(e,"showUserModal",!1),l()(e,"newDepartRole",{id:"",name:"",departmentId:0,level:""}),l()(e,"modalType",""),l()(e,"lang","zh-cn"),e},mounted:function(){},computed:{translate:function(){return Object(r.f)(this.lang).approverRoleManage}},methods:{updateEchart:function(e,t,a,s,l){n.a.init(document.getElementById("echartContainer")).setOption({title:{text:"缴费统计图"},color:["#64c23a","#e6a23c","#f56c6c","#4091ff"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["已缴费人数","未缴费人数","已缴费金额","未缴费金额"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e,axisLabel:{show:!0,interval:0,rotate:-45,formatter:function(e){return e.length>12?e.substring(0,12)+"...":e}}}],yAxis:[{type:"value",name:"人数",axisLabel:{formatter:"{value} 人"}},{type:"value",name:"金额",axisLabel:{formatter:"{value} 元"}}],series:[{name:"已缴费人数",type:"bar",stack:"人数",data:t},{name:"未缴费人数",type:"bar",stack:"人数",data:a},{name:"已缴费金额",type:"bar",stack:"金额",data:s,yAxisIndex:1},{name:"未缴费金额",type:"bar",stack:"金额",data:l,yAxisIndex:1}],itemStyle:{normal:{color:function(e){var t=["#64c23a","#e6a23c","#f56c6c","#f5f5f5"];return t[e.dataIndex%t.length]}}}})},selectSchoolYear:function(e){this.selectSchoolYears=e.value,this.selectPayItems="";var t=this;Object(r.d)({url:"/api/payment/projects?year="+e.value,dataType:"json",type:"get",success:function(e){t.projectIds="",t.payItem=[];for(var a="",s=[],l=0;l<e.data.length;l++){var o=new Object;o.name=e.data[l].name,o.id=e.data[l].id,t.payItem.push(o),a=a+e.data[l].id+",",t.projectIds=t.projectIds+e.data[l].id+",",s.push(e.data[l].name)}Object(r.d)({url:"/api/payment/stat?projectIds="+a+"&collegeCode="+t.collegeSelect,dataType:"json",type:"get",success:function(e){for(var a=[],l=[],o=[],n=[],r=0;r<e.data.items.length;r++)a.push(e.data.items[r].peopleCountPaid),l.push(e.data.items[r].peopleCountNotPay),o.push(e.data.items[r].amountPaid),n.push(e.data.items[r].amountNotPay);t.updateEchart(s,a,l,o,n)}})}})},selectCollegeItem:function(e){this.collegeCode=e.value;this.selectSchoolYears="",this.selectPayItems=""},selectPayItem:function(e){var t=this;""==e.val?this.projectIds=this.projectIds1:this.projectIds=e.value,Object(r.d)({url:"/api/payment/stat?projectIds="+this.projectIds+"&collegeCode="+t.collegeCode,dataType:"json",type:"get",success:function(e){for(var a=[],s=[],l=[],o=[],n=[],r=0;r<e.data.items.length;r++)a.push(e.data.items[r].peopleCountPaid),s.push(e.data.items[r].peopleCountNotPay),l.push(e.data.items[r].amountPaid),o.push(e.data.items[r].amountNotPay),n.push(e.data.items[r].projectName);t.updateEchart(n,a,s,l,o)}})},appeartongji:function(){this.isheadPage=!1},_verifyLength:function(){var e=0,t=0,a=0;if(!this.newDepartRole.name)return!1;for(var s=0;s<this.newDepartRole.name.length;s++)this.newDepartRole.name.charCodeAt(s)>127||94===this.newDepartRole.name.charCodeAt(s)?e++:t+=.5,25===parseInt(e+t)&&(a=s);parseInt(e+t)>25&&(this.newDepartRole.name=this.newDepartRole.name.slice(0,a+1))},changeDepartment:function(e){this.currentDepartmentId=e.val,this.url=this.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+this.currentDepartmentId},cancelAddRole:function(){this.newDepartRole={id:"",name:"",departmentId:0,level:"SCHOOL"},this.showUserModal=!1},addRoleModal:function(){this.projectIds==[]?this.$toast("请选中缴费项目"):window.location.href="/downloads/payment/stat/export?collegeCode="+this.collegeCode+"&projectIds="+this.projectIds},reset:function(){this.selectSchoolYears="",this.selectPayItems="",this.collegeSelect=""},changeLevel:function(e){this.newDepartRole.level=e.val},addRole:function(){var e=this;if(!this.newDepartRole.name)return e.toast(this.translate.nameIsNull);if(!this.newDepartRole.level)return e.toast(this.translate.levelIsNull);if(e.newDepartRole.departmentId=e.currentDepartmentId,this.newDepartRole.id){if(!confirm(this.translate.editRoleConfirmTip))return!1;Object(r.d)({url:"/api/approveRoles/"+e.newDepartRole.id,dataType:"json",data:e.newDepartRole,type:"put",success:function(t){t.state?(e.showUserModal=!1,e.url=e.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+e.currentDepartmentId):e.toast(t.message)}})}else{if(!confirm(this.translate.addRoleConfirmTip))return!1;Object(r.d)({url:"/api/approveRoles",dataType:"json",data:e.newDepartRole,type:"post",success:function(t){t.state?(e.showUserModal=!1,e.url=e.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+e.currentDepartmentId):e.toast(t.message)}})}}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"collegeRole-page"}},[a("h4",{staticStyle:{"margin-left":"-14px",color:"rgb(117,117,117)"}},[e._v("缴费统计时间："+e._s(e.time))]),e._v(" "),a("div",{staticClass:"row text-center"},[a("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("div",{staticClass:"btn-group pull-left"},[a("v-select",{staticClass:"dep-select",attrs:{placeholder:"所有学院",options:e.college,optionsLabel:"name",optionsValue:"code"},on:{afterSelected:e.selectCollegeItem},model:{value:e.collegeSelect,callback:function(t){e.collegeSelect=t},expression:"collegeSelect"}})],1),e._v(" "),a("div",{staticClass:"btn-group pull-left",staticStyle:{"margin-left":"10px"}},[a("v-select",{staticClass:"dep-select",attrs:{placeholder:"请选择学年",options:e.schoolYear,optionsLabel:"name",optionsValue:"id"},on:{afterSelected:e.selectSchoolYear},model:{value:e.selectSchoolYears,callback:function(t){e.selectSchoolYears=t},expression:"selectSchoolYears"}})],1),e._v(" "),a("div",{staticClass:"btn-group pull-left",staticStyle:{"margin-left":"10px"}},[a("v-select",{staticClass:"dep-select",staticStyle:{width:"130px"},attrs:{multiple:!0,placeholder:"请选择项目",options:e.payItem,optionsLabel:"name",optionsValue:"id",search:!1},on:{afterSelected:e.selectPayItem},model:{value:e.selectPayItems,callback:function(t){e.selectPayItems=t},expression:"selectPayItems"}})],1),e._v(" "),a("div",{staticClass:"btn-group pull-left",staticStyle:{"margin-left":"10px"}},[a("button",{staticClass:"btn submit-btn",attrs:{type:"button"},on:{click:function(t){return e.reset()}}},[e._v("重置")])]),e._v(" "),a("div",{staticClass:"btn-group pull-left",staticStyle:{"margin-left":"10px"}},[a("button",{staticClass:"btn submit-btn",attrs:{type:"button"},on:{click:function(t){return e.addRoleModal()}}},[e._v("导出")])])])]),e._v(" "),a("div",{staticStyle:{"margin-left":"80px","margin-top":"100px",width:"95%",height:"600px"},attrs:{id:"echartContainer"}}),e._v(" "),a("v-modal",{attrs:{show:e.showUserModal,effect:"fade",width:"420"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(e._s(e.modalType)+e._s(e.translate.role))])]),e._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newDepartRole.id,expression:"newDepartRole.id"}],attrs:{type:"hidden",id:"role-id"},domProps:{value:e.newDepartRole.id},on:{input:function(t){t.target.composing||e.$set(e.newDepartRole,"id",t.target.value)}}}),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.translate.level))]),e._v(" "),a("v-select",{staticClass:"btn-block search-select modal-form-style levels-select",attrs:{disabled:"编辑"===e.modalType,value:e.newDepartRole.level?e.newDepartRole.level:"1",options:e.levelOptions,"options-value":"id","options-label":"name",search:"","close-on-select":""},on:{afterSelected:e.changeLevel}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.translate.roleName))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newDepartRole.name,expression:"newDepartRole.name"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text"},domProps:{value:e.newDepartRole.name},on:{keyup:e._verifyLength,input:function(t){t.target.composing||e.$set(e.newDepartRole,"name",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.cancelAddRole}},[e._v(e._s(e.translate.cancel))]),e._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.addRole}},[e._v(e._s(e.translate.submit))])])])],1)},staticRenderFns:[]};var d=a("Mz/3")(i,c,!1,function(e){a("s91i")},null,null);t.default=d.exports},s91i:function(e,t){}});