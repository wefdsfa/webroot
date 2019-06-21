webpackJsonp([198],{JRyd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("bOdI"),s=a.n(l),i=(a("7+uW"),a("C331")),o={data:function(){return{url:"/table-data/apartment/checkInManage/selfChoose/page",columns:[],timeStamp:"",studentTimeStamp:"",studentUrl:"",studentColumns:"",curPage:"mainPage",importParams:{parentPageTitle:"",downloadTemplateUrl:"",downloadErrorTemplateUrl:"",checkTemplateUrl:"",templateName:"",importBtnType:null},urlParameter:{batchId:"",userId:""},batchSetting:{showAddModal:!1,layout:[{title:"名称",id:"name",type:"input"},{title:"预计入住时间",id:"expectCheckInDate",type:"datepicker",format:"yyyy-MM-dd"},{title:"预计退宿时间",id:"expectRetirementDate",type:"datepicker",format:"yyyy-MM-dd"},{title:"选房开始时间",id:"applyTimeStart",type:"datepicker",format:"yyyy-MM-dd hh:ii:ss"},{title:"选房结束时间",id:"applyTimeEnd",type:"datepicker",format:"yyyy-MM-dd hh:ii:ss"}],defaultValue:{name:"",expectCheckInDate:"",expectRetirementDate:"",applyTimeStart:"",applyTimeEnd:"",college:!1,sex:!0,department:!1},divideMethodData:[{id:"college",value:!1,name:"学院"},{id:"department",value:!1,name:"系别"},{id:"sex",value:!0,name:"性别"}]},addStudentSetting:{showAddModal:!1,isShowSearch:!0,userInfo:"",userId:""},allocation:{showAllocationMoal:!1,layout:[{title:"校区",id:"campus"},{title:"园区",id:"zone"},{title:"楼栋",id:"building"},{title:"宿舍",id:"dormitory"},{title:"床位",id:"bed"}],options:{campus:[],zone:[],building:[],dormitory:[],bed:[]},defaultValue:{campus:"",zone:"",building:"",dormitory:"",bed:""}},searchSelectOptions:{checkIn:[{value:"WAIT_CHECK_IN",label:"未入住"},{value:"CHECK_IN",label:"已入住"},{value:"RETIREMENT",label:"已退宿"}],payment:[{value:"1",label:"已缴费"},{value:"2",label:"未缴费"},{value:"3",label:"免缴费"},{value:"4",label:"生源地/校园地贷款"}],selectRoom:[{value:"WAIT_START",label:"未开始"},{value:"APPLYING",label:"正在进行"},{value:"END",label:"已结束"}]},status:{checkIn:{WAIT_CHECK_IN:"未入住",CHECK_IN:"已入住",RETIREMENT:"已退宿"},payment:{1:"已缴费",2:"未缴费",3:"免缴费",4:"生源地/校园地贷款"},selectRoomStatus:{WAIT_START:"未开始",APPLYING:"正在进行",END:"已结束"}},isAllocated:"",batchName:"",lang:"zh-cn"}},computed:{translate:function(){return Object(i.g)(this.lang).accommodationResources}},created:function(){var t,e=this,a=localStorage.getItem("lang");Object(i.g)(a)&&(this.lang=a),Object(i.e)({url:"/api/apartment/dicts?typeName=校区",type:"get",success:function(t){t.state?t.data.forEach(function(t){e.allocation.options.campus.push({label:t.label,value:t.value})}):e.toast(t.message)}}),this.columns=[{id:"name",title:"批次名称",className:"text-left",hidden:!1,width:136,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"applytime",title:"学生选房时间",className:"text-left",hidden:!1,width:285,formatter:function(t){return t.applyTimeStart+"至"+t.applyTimeEnd}},{id:"expectCheckInDate",title:"预计入住时间",width:100,className:"text-left",hidden:!1},{id:"expectRetirementDate",title:"预计退宿时间",width:100,className:"text-left",hidden:!1},{id:"checkInStatus",title:"选房情况",width:80,className:"text-left",hidden:!1},(t={id:"status",title:"状态",width:80,className:"text-left"},s()(t,"width",100),s()(t,"hidden",!1),s()(t,"search",{type:"select",data:{options:this.searchSelectOptions.selectRoom,optionsLabel:"label",optionsValue:"value"}}),s()(t,"formatter",function(t){return e.status.selectRoomStatus[t.status]}),t),{id:"opt",title:"操作",className:"text-left",hidden:!1,width:400,formatter:function(t){return[{tag:"a",text:e.translate.edit,className:"opt-btn",callback:function(t,a){"END"!==t.status?"APPLYING"===t.status&&t.hadUsers&&0!=t.userChooseCount?e.$toast("该批次已经有人员选了房，不能编辑"):(e.batchSetting.showAddModal=!0,e.modalType="编辑",e.urlParameter.batchId=t.id,e.batchSetting.defaultValue={name:t.name,expectCheckInDate:t.expectCheckInDate||"",expectRetirementDate:t.expectRetirementDate||"",applyTimeStart:t.applyTimeStart||"",applyTimeEnd:t.applyTimeEnd||"",college:t.college,sex:t.sex,department:t.department}):e.$toast("该批次已结束，不能编辑")}},{tag:"a",text:e.translate.delete,className:"opt-btn",callback:function(t,a){"END"!==t.status?"APPLYING"===t.status&&t.hadUsers&&t.hadHousing?e.$toast("该批次已经有人员选了房，不能删除"):confirm("确定删除吗？")&&Object(i.e)({url:"/api/apartment/checkInManage/selfChoose/"+t.id,type:"delete",success:function(t){t.state?(e._refreshTable(),e.$toast("删除成功！")):e.toast(t.message)}}):e.$toast("该批次已结束，不能删除")}},{tag:"a",text:"学生列表",className:"opt-btn",callback:function(t,a){e.curPage="studentListPage",e.urlParameter.batchId=t.id,e.batchName=t.name,e.studentUrl="/table-data/apartment/checkIn/users/selfChoose/page/"+t.id}},{tag:"a",text:"名单导入",className:"opt-btn",callback:function(t,a){e.curPage="importPage",e.importParams={parentPageTitle:"批次列表",downloadTemplateUrl:"/apartment/checkIn/users/selfChoose/batch/templates",downloadErrorTemplateUrl:"/apartment/checkIn/users/selfChoose/batch/error",checkTemplateUrl:"/apartment/checkIn/users/selfChoose/batch/check/"+t.id,templateName:"名单导入模板",importBtnType:[{name:"覆盖导入",url:"/apartment/checkIn/users/selfChoose/batch/createUsers",method:"put",isShowBtn:!0,success:function(t){t.state&&e._refreshTable()}}]}}},{tag:"a",text:"分配片区",className:"opt-btn",callback:function(t,a){t.hadUsers?(e.curPage="importPage",e.importParams={parentPageTitle:"批次列表",downloadTemplateUrl:"/apartment/checkInManage/batchHousingAllot/template/"+t.id,downloadErrorTemplateUrl:"/apartment/checkInManage/selfChoose/batchHousingAllot/error/info",checkTemplateUrl:"/apartment/checkInManage/selfChoose/batchHousingAllot/excel/"+t.id,templateName:"分配房间模板",importBtnType:[{name:"覆盖导入",url:"/apartment/checkInManage/selfChoose/batchHousingAllot/batch/create",method:"post",isShowBtn:!0,success:function(t){t.state&&e._refreshTable()}}]}):e.$toast("请先导入名单或者在学生列表那边新增学生")}},{tag:"a",text:"收回房源",className:"opt-btn",callback:function(t,a){t.hadHousing?confirm("确定收回房源吗？")&&Object(i.e)({url:"/api/apartment/checkInManage/selfChoose/removeHousing/"+t.id,type:"put",success:function(t){t.state?(e._refreshTable(),e.$toast("操作成功！")):e.toast(t.message)}}):e.$toast("尚未分配房间，不必收回房源")}},{tag:"a",text:"导出",className:"opt-btn",callback:function(t,a){var l=new Date,s=l.getFullYear()+e._getTimeFormat(l.getMonth()+1)+e._getTimeFormat(l.getDate());window.location.href="/downloads/apartment/checkIn/users/selfChoose/"+t.id+"?fileName=学生选房信息_"+s}}]}}],this.studentColumns=[{id:"name",title:"姓名",className:"text-left",width:100,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"userNo",title:"学号",className:"text-left",width:120,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"account",title:"新生账号",width:120,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"sex",title:"性别",width:100,className:"text-left",hidden:!1,search:{type:"select",data:{url:"/api/apartment/dicts?typeName=性别",optionsLabel:"label",optionsValue:"value"}}},{id:"college",title:"学院",width:120,className:"text-left",hidden:!1,search:{type:"multiSelect",data:{url:"/api/apartment/unit/list",optionsLabel:"name",optionsValue:"code"}}},{id:"apartment",title:"已选宿舍",className:"text-left",width:100,hidden:!1},{id:"paymentStatus",title:"缴费情况",className:"text-left",width:100,hidden:!1,search:{type:"select",data:{options:this.searchSelectOptions.payment,optionsLabel:"label",optionsValue:"value"}},formatter:function(t){return e.status.payment[t.paymentStatus]}},{id:"userCheckInStatus",title:"入住情况",className:"text-left",width:100,hidden:!1,search:{type:"select",data:{options:this.searchSelectOptions.checkIn,optionsLabel:"label",optionsValue:"value"}},formatter:function(t){return t.checkInStatus}},{id:"giveUp",title:"是否放弃入住",className:"text-left",width:100,hidden:!1,formatter:function(t){return t.giveUp?"是":"否"}},{id:"opt",title:"操作",className:"text-left",width:200,hidden:!1,formatter:function(t){var a=[{tag:"a",text:e.translate.delete,className:"opt-btn",callback:function(t,a){confirm("是否确定从该批次中删除该学生？")&&Object(i.e)({url:"/api/apartment/checkIn/users/selfChoose/delete/"+t.userId+"/"+e.urlParameter.batchId,type:"delete",success:function(t){t.state?(e._refreshStudentTable(),e.$toast("删除成功！")):e.toast(t.message)}})}},{tag:"a",text:"查看",className:"opt-btn",callback:function(t,a){e.$emit("addBread",{route:"/apartment/staffInfo?userId="+t.userId,title:t.name+"的信息"})}}];return"FIRST"!==t.batchCheckUserApplyStatus&&"HAD_APPLY"!==t.batchCheckUserApplyStatus||t.giveUp||a.push({tag:"a",text:"分配",className:"opt-btn",callback:function(t,a){e.allocation.showAllocationMoal=!0,e.urlParameter.userId=t.userId,e.isAllocated=t.batchCheckUserApplyStatus,e.allocation.defaultValue={campus:"",zone:"",building:"",dormitory:"",bed:""}}}),"未入住"!==t.checkInStatus&&t.giveUp||a.push({tag:"a",text:"放弃入住",className:"opt-btn",callback:function(t,a){confirm("确定放弃入住吗？此操作不可逆")&&Object(i.e)({url:"/api/apartment/checkIn/users/selfChoose/giveUp/"+t.userId+"/"+e.urlParameter.batchId,type:"put",success:function(t){t.state?(e._refreshStudentTable(),e.$toast("操作成功！")):e.toast(t.message)}})}}),a}}]},methods:{_getTimeFormat:function(t){return t<10?"0"+t:t},_showAddStudentModal:function(){this.addStudentSetting={showAddModal:!0,isShowSearch:!0,userInfo:"",userId:""}},_showAddModal:function(){this.batchSetting.showAddModal=!0,this.modalType="新增",this.batchSetting.defaultValue={name:"",expectCheckInDate:"",expectRetirementDate:"",applyTimeStart:"",applyTimeEnd:"",college:!1,sex:!0,department:!1}},_setValue:function(t){t.value=!t.value,this.batchSetting.defaultValue[t.id]=t.value,this.batchSetting.defaultValue.department&&(this.batchSetting.defaultValue.college||(this.batchSetting.defaultValue.college=!0,this.batchSetting.divideMethodData.forEach(function(t){"college"===t.id&&(t.value=!0)})))},_submit:function(){"新增"===this.modalType?this._add():"编辑"===this.modalType&&this._edit()},_verify:function(){var t=this,e=!0;return this.batchSetting.layout.forEach(function(a){e&&!t.batchSetting.defaultValue[a.id]&&(t.$toast(a.title+"不能为空"),e=!1)}),this.batchSetting.defaultValue.college||this.batchSetting.defaultValue.sex||this.batchSetting.defaultValue.department||(this.$toast("房间划分方式不能为空"),e=!1),(this.batchSetting.defaultValue.college||this.batchSetting.defaultValue.department)&&(this.batchSetting.defaultValue.sex||(this.$toast("性别为必选项"),e=!1)),e},_add:function(){var t=this;this._verify()&&(this.batchSetting.defaultValue.expectCheckInDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectCheckInDate)[0],this.batchSetting.defaultValue.expectRetirementDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectRetirementDate)[0],Object(i.e)({url:"/api/apartment/checkInManage/selfChoose/batches",type:"post",data:this.batchSetting.defaultValue,success:function(e){e.state?(t.batchSetting.showAddModal=!1,t._refreshTable(),t.$toast("新增成功！")):t.$toast(e.message)}}))},_edit:function(){var t=this;this._verify()&&(this.batchSetting.defaultValue.expectCheckInDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectCheckInDate)[0],this.batchSetting.defaultValue.expectRetirementDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectRetirementDate)[0],Object(i.e)({url:"/api/apartment/checkInManage/selfChoose/batches/"+this.urlParameter.batchId,type:"put",data:this.batchSetting.defaultValue,success:function(e){e.state?(t.batchSetting.showAddModal=!1,t._refreshTable(),t.$toast("编辑成功！")):t.$toast(e.message)}}))},_submitAddStudnet:function(){var t=this;this.addStudentSetting.userId?Object(i.e)({url:"/api/apartment/checkIn/users/selfChoose/singleUser/"+this.urlParameter.batchId+"/"+this.addStudentSetting.userId,type:"post",success:function(e){e.state?(t._refreshStudentTable(),t._refreshTable(),t.$toast("新增成功！"),t.addStudentSetting.showAddModal=!1):t.$toast(e.message)}}):this.$toast("请先检测人员")},_daySelected:function(t,e){var a=this;"expectCheckInDate"===e||"expectRetirementDate"===e?new Date(this.batchSetting.defaultValue.expectCheckInDate).getTime()-new Date(this.batchSetting.defaultValue.expectRetirementDate).getTime()>0&&("expectCheckInDate"===e?(this.$toast("预计入住时间要在预计退宿时间之前"),this.$nextTick(function(){a.batchSetting.defaultValue.expectCheckInDate=""})):(this.$toast("预计退宿时间要在预计入住时间之后"),this.$nextTick(function(){a.batchSetting.defaultValue.expectRetirementDate=""}))):new Date(this.batchSetting.defaultValue.applyTimeStart).getTime()-new Date(this.batchSetting.defaultValue.applyTimeEnd).getTime()>0&&("applyTimeStart"===e?(this.$toast("选房开始时间要在选房结束时间之前"),this.$nextTick(function(){a.batchSetting.defaultValue.applyTimeStart=""})):(this.$toast("选房结束时间要在选房开始时间之后"),this.$nextTick(function(){a.batchSetting.defaultValue.applyTimeEnd=""})))},userSelected:function(t){this.addStudentSetting.userId=t.userId,this.addStudentSetting.userInfo=t.name+" ("+t.userNo+")",this.addStudentSetting.isShowSearch=!1},changeUserSearch:function(){this.addStudentSetting.isShowSearch=!0,this.addStudentSetting.userInfo="",this.addStudentSetting.userId=""},_allocationSelected:function(t,e){this.allocation.defaultValue[e.id]=t.value,this.allocation.defaultValue[e.id]&&("campus"===e.id?this._getZonesData(this.allocation.defaultValue[e.id]):"zone"===e.id?this._getBuildingData(this.allocation.defaultValue[e.id]):"building"===e.id?this._getDormitoryData(this.allocation.defaultValue[e.id]):"dormitory"===e.id&&this._getBedData(this.allocation.defaultValue[e.id]))},_getZonesData:function(t){var e=this;Object(i.e)({url:"/api/apartment/zones/getByCampuses/"+t,type:"get",success:function(t){t.state?(e.allocation.options.zone.splice(0,e.allocation.options.zone.length),t.data&&t.data.forEach(function(t){e.allocation.options.zone.push({label:t.name,value:t.zoneId.toString()})})):e.$toast(t.message)}})},_getBuildingData:function(t){var e=this;Object(i.e)({url:"/api/apartment/buildings/list/"+t,type:"get",success:function(t){t.state?(e.allocation.options.building.splice(0,e.allocation.options.building.length),t.data&&t.data.forEach(function(t){e.allocation.options.building.push({label:t.name,value:t.buildingId.toString()})})):e.$toast(t.message)}})},_getDormitoryData:function(t){var e=this;Object(i.e)({url:"/api/apartment/rooms/list/"+t,type:"get",success:function(t){t.state?(e.allocation.options.dormitory.splice(0,e.allocation.options.dormitory.length),t.data&&t.data.forEach(function(t){e.allocation.options.dormitory.push({label:t.roomNo,value:t.roomId})})):e.$toast(t.message)}})},_getBedData:function(t){var e=this;Object(i.e)({url:"/api/apartment/beds/getBedsByRooms/"+t,type:"get",success:function(t){t.state?(e.allocation.options.bed.splice(0,e.allocation.options.bed.length),t.data&&t.data.forEach(function(t){e.allocation.options.bed.push({label:t.bedNo.toString(),value:t.bedId})})):e.$toast(t.message)}})},_allocationVerify:function(){var t=this,e=!0;return this.allocation.layout.forEach(function(a){e&&!t.allocation.defaultValue[a.id]&&(t.$toast(a.title+"不能为空"),e=!1)}),e},_submitAllocation:function(){this._allocationVerify()&&("HAD_APPLY"===this.isAllocated?confirm("确定重新安排宿舍？")?this._allocationDormitory():this.allocation.showAllocationMoal=!1:"FIRST"===this.isAllocated&&this._allocationDormitory())},_allocationDormitory:function(){var t=this;Object(i.e)({url:"/api/apartment/checkIn/users/selfChoose/distribute/"+this.urlParameter.batchId+"/"+this.urlParameter.userId,type:"put",data:{campus:this.allocation.defaultValue.campus,zoneId:this.allocation.defaultValue.zone,buildingId:this.allocation.defaultValue.building,roomId:this.allocation.defaultValue.dormitory,bedId:this.allocation.defaultValue.bedId},success:function(e){e.state?(t.$toast("分配成功"),t.allocation.showAllocationMoal=!1,t._refreshStudentTable()):t.$toast(e.message)}})},_refreshTable:function(){this.timeStamp=Object(i.a)()},_refreshStudentTable:function(){this.studentTimeStamp=Object(i.a)()}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"houseparent-assignment-checkIn"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"mainPage"===t.curPage,expression:"curPage === 'mainPage'"}],staticClass:"row text-center"},[a("v-table",{attrs:{title:"学生自选入住",url:t.url+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t._showAddModal}},[t._v("新增批次")])])])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"studentListPage"===t.curPage,expression:"curPage === 'studentListPage'"}],staticClass:"row"},[a("div",{staticClass:"back-parent-page",on:{click:function(e){t.curPage="mainPage"}}},[a("button",{staticClass:"btn back-btn clearBtnBorder",attrs:{type:"button"}},[a("i",{staticClass:"maticon back-icon-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),a("span",{staticClass:"nav-title"},[t._v("返回批次列表")])])]),t._v(" "),a("v-table",{attrs:{title:t.batchName+"-学生列表",url:"studentListPage"===t.curPage?t.studentUrl+"?timeStamp="+t.studentTimeStamp:"",pagesize:"10",idField:"id",columns:t.studentColumns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t._showAddStudentModal}},[t._v("新增学生")])])])],1),t._v(" "),"importPage"===t.curPage?a("v-import",t._b({on:{backParentPage:function(e){t.curPage="mainPage"}}},"v-import",t.importParams,!1)):t._e(),t._v(" "),a("v-modal",{attrs:{show:t.batchSetting.showAddModal,effect:"fade",width:"446"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n          "+t._s(t.modalType)+"批次\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[t._l(t.batchSetting.layout,function(e,l){return"input"===e.type?a("div",{key:l,staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v(t._s(e.title))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.batchSetting.defaultValue[e.id],expression:"batchSetting.defaultValue[cell.id]"}],staticClass:"form-control form-input-style",attrs:{type:"text"},domProps:{value:t.batchSetting.defaultValue[e.id]},on:{input:function(a){a.target.composing||t.$set(t.batchSetting.defaultValue,e.id,a.target.value)}}})]):a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v(t._s(e.title))]),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:e.format,clearButton:!1,showTime:!1},on:{daySelected:function(a){return t._daySelected(a,e.id)}},model:{value:t.batchSetting.defaultValue[e.id],callback:function(a){t.$set(t.batchSetting.defaultValue,e.id,a)},expression:"batchSetting.defaultValue[cell.id]"}})],1)}),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-title"},[t._v("片区划分方式")]),t._v(" "),a("div",{staticClass:"info-options"},t._l(t.batchSetting.divideMethodData,function(e,l){return"sex"!==e.id?a("span",{key:l,on:{click:function(a){return t._setValue(e)}}},[a("i",{staticClass:"maticon",class:t.batchSetting.defaultValue[e.id]?"active":"",domProps:{innerHTML:t._s(t.icons(t.batchSetting.defaultValue[e.id]?"check_box":"check_box_outline_blank"))}}),t._v(t._s(e.name)+"\n          ")]):a("span",{staticStyle:{cursor:"not-allowed"}},[a("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("check_box"))}}),t._v(t._s(e.name)+"\n          ")])}),0)]),t._v(" "),a("label",{staticClass:"modal-tips"},[t._v("举例：如勾选性别、学院、系别、则同一性别、学院、系别的学生将在同一片区选房")])],2),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.batchSetting.showAddModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._submit}},[t._v("确定")])])]),t._v(" "),a("v-modal",{attrs:{show:t.addStudentSetting.showAddModal,effect:"fade",width:"446"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n          新增学生\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group student-search"},[a("label",{staticClass:"input-label"},[t._v("学生检索")]),t._v(" "),t.addStudentSetting.isShowSearch?a("detect",{staticClass:"search-user",attrs:{url:"/api/apartment/users/searchResults",placeholder:"用户姓名或学工号"},on:{afterSelected:t.userSelected}}):a("div",{staticStyle:{display:"inline-block"}},[a("div",{staticClass:"user-info"},[t._v("\n            "+t._s(t.addStudentSetting.userInfo)+"\n            "),a("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("edit"))},on:{click:t.changeUserSearch}},[t._v("edit")])])])],1)]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.addStudentSetting.showAddModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._submitAddStudnet}},[t._v("确定")])])]),t._v(" "),a("v-modal",{attrs:{show:t.allocation.showAllocationMoal,effect:"fade",width:"340"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        分配\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},t._l(t.allocation.layout,function(e,l){return a("div",{key:l,staticClass:"form-group"},[a("label",{staticClass:"input-label allocation-modal-label"},[t._v(t._s(e.title))]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.allocation.defaultValue[e.id],options:t.allocation.options[e.id],"options-value":"value","options-label":"label",search:"","close-on-select":""},on:{afterSelected:function(a){return t._allocationSelected(a,e)}}})],1)}),0),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.allocation.showAllocationMoal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._submitAllocation}},[t._v("确定")])])])],1)},staticRenderFns:[]};var c=a("VU/8")(o,n,!1,function(t){a("hGGN")},null,null);e.default=c.exports},hGGN:function(t,e){}});