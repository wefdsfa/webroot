webpackJsonp([23],{"/iUO":function(e,t){},"0D/X":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("jCtM"),s=a("zILJ"),n=(s.a,{data:function(){return{tableDataUrl:"/table-data/employment/preachMeeting/getPreachMeetingListForStudent",columns:[],loginType:{},curStatus:"list",techinDetails:{}}},components:{techinDetails:s.a},methods:{backToParent:function(){this.curStatus="list"},catchLoginType:function(){var e=this;Object(i.b)().then(function(t){t.state&&(e.loginType=t.data)})}},created:function(){var e=this;this.columns=[{id:"title",title:"宣讲会标题",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"companyName",title:"单位名称",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"timeSpace",title:"时间",className:"text-left",width:130,hidden:!1},{id:"areaName",title:"场地",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"opts",title:"操作",width:80,hidden:!1,formatter:function(t){return[{tag:"a",text:"查看",callback:function(t,a){Object(i.c)(t.id).then(function(t){e.techinDetails=t,e.curStatus="details"})}}]}}]}}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"techinList2Student"}},["list"!=e.curStatus?a("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-back"},on:{click:function(t){e.curStatus="list"}}},[e._v("返回")]):e._e(),e._v(" "),a("div",{staticClass:"techinList2Student"},["list"==e.curStatus?a("v-table",{ref:"techinList2Student",attrs:{order:!0,url:e.tableDataUrl,columns:e.columns,pagesize:"15",idField:"id"}}):e._e()],1),e._v(" "),"details"==e.curStatus?a("techin-details",{attrs:{loginType:e.loginType,techinDetails:e.techinDetails},on:{backToParent:e.backToParent}}):e._e()],1)},staticRenderFns:[]};var l=a("C7Lr")(n,o,!1,function(e){a("49XE")},"data-v-0124c4a6",null);t.default=l.exports},"49XE":function(e,t){},"6vO7":function(e,t){},"8HaW":function(e,t){},C5Vw:function(e,t){},"EM+9":function(e,t){},Ej6b:function(e,t){},GwEi:function(e,t,a){"use strict";var i=a("jCtM"),s=a("p+qa"),n={props:["loginType","unitList","defaultInfo"],data:function(){return{unitForm:{companyName:"",contactPeople:"",email:"",contactPhone:""},unitList:[],status:"",unitInfo:{},unitFormRules:{companyName:[{required:!0,message:"请选择公司",trigger:"change"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确格式的邮箱",trigger:"blur"}],contactPhone:[{required:!0,message:"请输入联系人电话",trigger:"blur"},{validator:function(e,t,a){if(!t)return a(new Error("手机号不能为空"));if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(t))return a(new Error("请输入正确的手机号"));a()},message:"请输入正确格式的手机号码",trigger:"blur"}],contactPeople:[{required:!0,message:"请输入联系人",trigger:"blur"}]}}},methods:{catchUnitInfo:function(){var e=this;Object(i.d)().then(function(t){t&&(e.unitInfo=t,e.unitForm.companyId=t.id,e.unitForm.contactPeople=t.contactPeople,e.unitForm.contactPhone=t.contactPhone,e.unitForm.email=t.mailAddress)})},catchUnitList:function(){var e=this;Object(s.i)().then(function(t){t.state&&(e.unitList=t.data)})},unitChange:function(e){var t=this;Object(i.d)(e).then(function(e){e&&(t.unitInfo=e,t.unitForm.companyId=e.id,t.unitForm.contactPeople=e.contactPeople,t.unitForm.contactPhone=e.contactPhone,t.unitForm.email=e.mailAddress)})},vali:function(){var e=!1;return this.$refs.unitInfoForm.validate(function(t){e=t}),e},setDefaultInfo:function(){this.unitInfo=this.defaultInfo,this.unitInfo.scaleName=this.defaultInfo.scale,this.unitInfo.propertyName=this.defaultInfo.property;var e=this.defaultInfo;this.defaultInfo&&(this.status=this.defaultInfo.status,this.unitForm={contactPeople:e.contactPeople,email:e.email,contactPhone:e.contactPhone},"COMPANY"==this.loginType.loginType?this.unitForm.companyName=e.companyName:(this.unitForm.companyName=e.companyName,this.unitForm.companyId=e.id))}},created:function(){"COMPANY"==this.loginType.loginType?this.catchUnitInfo():this.catchUnitList(),this.defaultInfo&&this.setDefaultInfo()}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"unitInfo"}},[e._m(0),e._v(" "),a("div",{staticClass:"unitForm"},[a("el-form",{ref:"unitInfoForm",attrs:{model:e.unitForm,rules:e.unitFormRules,"label-width":"150px"}},[a("div",{staticClass:"inline"},["COMPANY"==e.loginType.loginType?a("el-form-item",{attrs:{label:"单位名称："}},[a("span",[e._v(e._s(e.unitInfo.companyName))])]):a("el-form-item",{attrs:{label:"单位名称：",prop:"companyName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"0"==e.status,placeholder:"请选择或输入公司名称",filterable:""},on:{change:e.unitChange},model:{value:e.unitForm.companyName,callback:function(t){e.$set(e.unitForm,"companyName",t)},expression:"unitForm.companyName"}},e._l(e.unitList,function(e,t){return a("el-option",{key:t,attrs:{label:e.companyName,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{staticClass:"pull-right",attrs:{label:"单位性质："}},[a("span",[e._v(e._s(e.unitInfo.propertyName))])])],1),e._v(" "),a("div",{staticClass:"inline"},[a("el-form-item",{attrs:{label:"单位联系人：",prop:"contactPeople"}},[a("el-input",{model:{value:e.unitForm.contactPeople,callback:function(t){e.$set(e.unitForm,"contactPeople",t)},expression:"unitForm.contactPeople"}})],1),e._v(" "),a("el-form-item",{staticClass:"pull-right",attrs:{label:"单位规模："}},[a("span",[e._v(e._s(e.unitInfo.scaleName))])])],1),e._v(" "),a("div",{staticClass:"inline"},[a("el-form-item",{attrs:{label:"电话：",prop:"contactPhone"}},[a("el-input",{model:{value:e.unitForm.contactPhone,callback:function(t){e.$set(e.unitForm,"contactPhone",t)},expression:"unitForm.contactPhone"}})],1),e._v(" "),a("el-form-item",{staticClass:"pull-right",attrs:{label:"邮箱：",prop:"email"}},[a("el-input",{model:{value:e.unitForm.email,callback:function(t){e.$set(e.unitForm,"email",t)},expression:"unitForm.email"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"w100",attrs:{label:"单位地址："}},[a("span",[e._v(e._s(e.unitInfo.addressDetail))])]),e._v(" "),a("el-form-item",{staticClass:"w100",attrs:{label:"单位简介："}},[a("span",{domProps:{innerHTML:e._s(e.unitInfo.summary)}})])],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),t("i",[this._v("单位信息")])])])])}]};var l=a("C7Lr")(n,o,!1,function(e){a("8HaW"),a("/iUO")},"data-v-6d4a1206",null);t.a=l.exports},Hf17:function(e,t){},ITHW:function(e,t){},"Mv/G":function(e,t){},Y253:function(e,t,a){"use strict";var i=a("VDzf"),s=a("p+qa"),n=(i.a,{components:{position:i.a},props:["defaultInfo"],data:function(){return{showDialog:!1,tableData:[],defaultFormInfo:null,isEditPosition:!0,curPositionIndex:"",disabledEditPosition:!0}},methods:{addPosition:function(){var e=this;Object(s.a)(0,50),setTimeout(function(){e.showDialog=!0,e.defaultFormInfo=null,e.isEditPosition=!0,e.disabledEditPosition=!1},200)},closeDialog:function(){this.showDialog=!1},Delete:function(e,t){var a=this;e.id?Object(s.b)(e.id).then(function(e){e.state?a.$message.success("删除成功"):(a.$message.error(e.message),a.tableData.splice(t,1))}):this.tableData.splice(t,1)},edit:function(e,t){this.showDialog=!0,this.isEditPosition=!1,this.defaultFormInfo=e,this.curPositionIndex=t},positionSubmit:function(e){var t=this;setTimeout(function(){(!t.isEditPosition||t.defaultFormInfo&&t.defaultFormInfo.id)&&t.tableData.splice(t.curPositionIndex,1),t.tableData.push(e)},500)}},created:function(){this.defaultInfo&&this.defaultInfo.recruitmentPositionTableDTOList.length&&(this.tableData=this.defaultInfo.recruitmentPositionTableDTOList)}}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"positionEdit"}},[e._m(0),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{width:"100",type:"index",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{prop:"positionName",label:"职位名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"positionProperty",label:"职位性质"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("PRACTICE"==t.row.positionProperty?"实习":"全职"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.edit(t.row,t.$index)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.Delete(t.row,t.$index)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"add-position-warp"},[a("el-button",{staticClass:"add-position",attrs:{icon:"el-icon-plus",plain:""},on:{click:e.addPosition}},[e._v("添加")])],1)],1),e._v(" "),e.showDialog?a("position",{attrs:{showDialog:e.showDialog,defaultFormInfo:e.defaultFormInfo},on:{closeDialog:e.closeDialog,positionSubmit:e.positionSubmit}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("职位信息")])])])])}]};var l=a("C7Lr")(n,o,!1,function(e){a("ITHW"),a("Hf17")},"data-v-6a84fe2e",null);t.a=l.exports},hfSC:function(e,t){},iAlU:function(e,t,a){"use strict";var i=a("aA9S"),s=a.n(i),n=a("xTvN"),o=a("GwEi"),l=a("Y253"),r=a("zY0d"),c=a("C331"),u=(n.a,o.a,l.a,{props:["loginType"],data:function(){return{placeRule:{},sumarry:"",unitList:[]}},methods:{catchPlaceRules:function(){var e=this;Object(r.a)("PREACH_MEETING").then(function(t){t.length&&(e.placeRule=t[0])})},submit:function(){var e=this,t=this.$refs.baseInfoEdit.vali(),a=this.$refs.unitInfoEdit.vali(),i=(this.$refs.positionInfoEdit.tableData,void 0);t&&a&&(this.$refs.baseInfoEdit.toSubmit(),setTimeout(function(){var t=e.$refs.baseInfoEdit.baseInfo,a=e.$refs.unitInfoEdit.unitForm,n=e.$refs.positionInfoEdit.tableData,o=s()({},t,a);n&&(o.recruitmentPositionVOList=n),o.recruitmentBrief=e.sumarry,i="COMPANY"==e.loginType.loginType?"/api/employment/preachMeeting/addPreachMeeting":"/api/employment/manage/preachMeeting/addPreachMeeting",Object(c.e)({url:i,type:"post",data:o,success:function(t){t.state?(e.$message.success("宣讲会添加成功"),e.$emit("backToParent")):(e.$message.error(t.message),e.$emit("backToParent"))}})},200))}},components:{baseInfoEdit:n.a,unitInfoEdit:o.a,positionEdit:l.a},created:function(){this.catchPlaceRules()}}),f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"addTeachin"}},[a("base-info-edit",{ref:"baseInfoEdit",attrs:{placeRule:e.placeRule,loginType:e.loginType}}),e._v(" "),a("unit-info-edit",{ref:"unitInfoEdit",attrs:{loginType:e.loginType}}),e._v(" "),a("position-edit",{ref:"positionInfoEdit",attrs:{unitList:e.unitList}}),e._v(" "),a("div",{staticClass:"sumarry"},[e._m(0),e._v(" "),a("div",{staticClass:"sumarryInput"},[a("el-input",{attrs:{type:"textarea",resize:"none",rows:"8"},model:{value:e.sumarry,callback:function(t){e.sumarry=t},expression:"sumarry"}})],1)]),e._v(" "),a("div",{staticClass:"submitBtn"},["COMPANY"==e.loginType.loginType?a("a",{on:{click:e.submit}},[e._v("提交审核")]):e._e(),e._v(" "),e.loginType.isAdmin?a("a",{on:{click:e.submit}},[e._v("提交")]):e._e()])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("招聘简章")])])])])}]};var m=a("C7Lr")(u,f,!1,function(e){a("zAvf"),a("Ej6b")},"data-v-846a9320",null);t.a=m.exports},xTvN:function(e,t,a){"use strict";var i=a("HzJ8"),s=a.n(i),n=a("zY0d"),o=a("p+qa"),l={props:["isEdit","placeRule","loginType","defaultInfo","editStatus"],data:function(){return{firstState:!0,usablePlace:[],curUsablePlaceInfo:{},date:"",baseInfo:{title:"",schoolName:"",areaType:"",areaRequirement:"",areaDetail:"",date:"",year:"",timeRange:"",startDate:"",startTime:"",needExamination:"",reciveTime:"",timeOptions:[],beginTime:"",endTime:""},baseInfoRules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],areaType:[{required:!0,message:"请选择场地类型",trigger:"change"}],areaDetail:[{required:!0,message:"请填写场地名称",trigger:"blur"}]},placeForm:{place:"",reciveTime:"",needExamination:""},placeFormRule:{place:[{required:!0,message:"请选择可用场地",trigger:"blur"}]}}},methods:{vali:function(){var e=this,t=!1;return this.$refs.baseInfoForm.validate(function(a){var i=e.baseInfo;if(e.loginType.isAdmin){if("isAllow"==i.areaType){if(!i.startTime||!i.startDate)return e.$message.error("请选择宣讲会时间");if(!i.reciveTime)return e.$message.error("请选择简历接收时间")}if("COMPANY_CHOOSE"==i.areaType&&!e.placeForm.place)return e.$message.error("请选择场地")}else{if("isAllow"==i.areaType){if(!i.startTime||!i.startDate)return e.$message.error("请选择宣讲会时间");if(!i.reciveTime)return e.$message.error("请选择简历接收时间")}if("COMPANY_CHOOSE"==i.areaType){if(!i.timeRange||!i.year)return e.$message.error("请选择宣讲会时间");if(!e.placeForm.reciveTime)return e.$message.error("请选择简历接收时间");if(!e.placeForm.place)return e.$message.error("请选择场地")}}t=a}),t},toSubmit:function(){var e=this.baseInfo;if(e.selfContact="isAllow"==e.areaType?1:0,"COMPANY_CHOOSE"!=e.areaType){var t=e.reciveTime,a=e.startTime;e.resumeReceiveBeginTime=t[0]+" 00:00:00",e.resumeReceiveEndTime=t[1]+" 00:00:00",e.beginTime=e.startDate+" "+a[0]+":00",e.endTime=e.startDate+" "+a[1]+":00"}if("COMPANY_CHOOSE"==e.areaType){var i=this.placeForm.reciveTime,s=this.baseInfo.timeRange.split("~");e.resumeReceiveBeginTime=i[0]+" 00:00:00",e.resumeReceiveEndTime=i[1]+" 00:00:00",e.beginTime=e.year+" "+s[0]+":00",e.endTime=e.year+" "+s[1]+":00",e.areaUseId=this.placeForm.place}},placeTypeChange:function(e){},dateChange:function(e){var t=this;Object(n.c)(e).then(function(e){if(t.baseInfo.timeRange="",t.firstState||(t.placeForm.place=""),e.length?t.baseInfo.timeOptions=e:(t.baseInfo.timeRange="",t.baseInfo.timeOptions=[]),t.defaultInfo){var a=t.defaultInfo.beginTime.split(" ")[0];if(t.defaultInfo.areaUseId&&t.baseInfo.year==a){var i=t.defaultInfo.beginTime.split(" ")[1],s=t.defaultInfo.endTime.split(" ")[1],n=i.substring(0,i.length-3)+"~"+s.substring(0,s.length-3);t.firstState?t.baseInfo.timeRange=n:t.baseInfo.timeRange="",t.baseInfo.timeOptions.indexOf(n)<0&&t.baseInfo.timeOptions.push(n)}else t.baseInfo.timeRange="";t.firstState=!1}})},contactDataChange:function(e){},usableTimesChange:function(e){var t=this,a=e.split("~");this.usablePlace=[],this.curUsablePlaceInfo={},this.placeForm.place="";var i=this.baseInfo.year+" "+a[0]+":00",s=this.baseInfo.year+" "+a[1]+":00";Object(n.b)(i,s).then(function(e){if(e.length?t.usablePlace=e:t.usablePlace=[],t.defaultInfo&&t.defaultInfo.areaUseId){var a=t.defaultInfo.beginTime.split(" ")[1],i=t.defaultInfo.endTime.split(" ")[1];a.substring(0,a.length-3)+"~"+i.substring(0,i.length-3)==t.baseInfo.timeRange&&t.usablePlace.push({name:t.defaultInfo.areaName,id:t.defaultInfo.areaUseId,peopleNum:t.defaultInfo.areaPeopleNum,description:t.defaultInfo.areaDescription})}})},placeRadioChange:function(e){var t=!0,a=!1,i=void 0;try{for(var n,o=s()(this.usablePlace);!(t=(n=o.next()).done);t=!0){var l=n.value;e==l.id&&(this.curUsablePlaceInfo=l)}}catch(e){a=!0,i=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw i}}},catchSchool:function(){var e=this;Object(o.g)().then(function(t){t.state&&(e.baseInfo.schoolName=t.data.name)})},setDefaultInfo:function(){if(this.defaultInfo){var e=this.defaultInfo;if(this.baseInfo={id:e.id,title:e.title,schoolName:e.schoolName,areaType:e.areaType?e.areaType:"isAllow",areaRequirement:e.areaRequirement,areaDetail:e.areaDetail,timeRange:"",timeOptions:[]},"isAllow"==e.areaType||"COMPANY_CHOOSE"!=e.areaType){var t=e.beginTime.split(" ")[1],a=e.endTime.split(" ")[1];this.$set(this.baseInfo,"startDate",e.beginTime.split(" ")[0]),this.$set(this.baseInfo,"startTime",[t.substring(0,t.length-3),a.substring(0,a.length-3)]),this.$set(this.baseInfo,"reciveTime",[e.resumeReceiveBeginTime.split(" ")[0],e.resumeReceiveEndTime.split(" ")[0]]),this.$set(this.baseInfo,"needExamination",e.needExamination+"")}if("COMPANY_CHOOSE"==e.areaType){var i=e.beginTime.split(" ")[1],s=e.endTime.split(" ")[1];this.firstState=!0,this.$set(this.baseInfo,"year",e.beginTime.split(" ")[0]),this.dateChange(e.beginTime.split(" ")[0]),this.usableTimesChange(i.substring(0,i.length-3)+"~"+s.substring(0,s.length-3)),this.$set(this.baseInfo,"timeRange",i.substring(0,i.length-3)+"~"+s.substring(0,s.length-3)),this.baseInfo.timeOptions.push(this.baseInfo.timeRange),this.$set(this.placeForm,"place",e.areaUseId),this.curUsablePlaceInfo={id:e.areaUseId,name:e.areaName,peopleNum:e.areaPeopleNum,description:e.areaDescription},this.firstState=!0,this.$set(this.placeForm,"reciveTime",[e.resumeReceiveBeginTime.split(" ")[0],e.resumeReceiveEndTime.split(" ")[0]]),this.$set(this.placeForm,"needExamination",e.needExamination+"")}}}},created:function(){this.catchSchool(),this.setDefaultInfo()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"baseInfo"}},[a("div",{staticClass:"baseInfo"},[e._m(0),e._v(" "),"COMPANY"==e.loginType.loginType||e.defaultInfo?a("div",{staticClass:"baseInfoForm"},[a("el-form",{ref:"baseInfoForm",attrs:{model:e.baseInfo,rules:e.baseInfoRules,"label-width":"170px"}},[a("el-form-item",{attrs:{prop:"title",label:"宣讲会标题："}},[a("el-input",{model:{value:e.baseInfo.title,callback:function(t){e.$set(e.baseInfo,"title",t)},expression:"baseInfo.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所在学校："}},[a("el-input",{model:{value:e.baseInfo.schoolName,callback:function(t){e.$set(e.baseInfo,"schoolName",t)},expression:"baseInfo.schoolName"}})],1),e._v(" "),e.defaultInfo&&"COMPANY"==e.defaultInfo.createType||!e.defaultInfo&&"COMPANY"==e.loginType.loginType?a("el-form-item",{staticClass:"w100",attrs:{label:"场地类型：",prop:"areaType"}},[a("el-radio-group",{on:{change:e.placeTypeChange},model:{value:e.baseInfo.areaType,callback:function(t){e.$set(e.baseInfo,"areaType",t)},expression:"baseInfo.areaType"}},["COMPANY_CHOOSE"==e.placeRule.allocationScheme||e.defaultInfo&&"COMPANY_CHOOSE"==e.defaultInfo.areaType?a("el-radio",{attrs:{label:"COMPANY_CHOOSE"}},[e._v("选择可用场地")]):e._e(),e._v(" "),1==e.placeRule.isAllow||"isAllow"==e.baseInfo.areaType?a("el-radio",{attrs:{label:"isAllow"}},[e._v("自行联系")]):e._e(),e._v(" "),"ADMIN_ASSIGNMENT"==e.placeRule.allocationScheme||e.defaultInfo&&"ADMIN_ASSIGNMENT"==e.defaultInfo.areaType?a("el-radio",{attrs:{label:"ADMIN_ASSIGNMENT"}},[e._v("管理员分配场地")]):e._e()],1)],1):e._e(),e._v(" "),"isAllow"==e.baseInfo.areaType||e.defaultInfo&&"COMPANY"!=e.defaultInfo.createType?a("el-form-item",{attrs:{label:"场地：",prop:"areaDetail"}},[a("el-input",{model:{value:e.baseInfo.areaDetail,callback:function(t){e.$set(e.baseInfo,"areaDetail",t)},expression:"baseInfo.areaDetail"}})],1):e._e(),e._v(" "),"ADMIN_ASSIGNMENT"==e.baseInfo.areaType&&"COMPANY"==e.loginType.loginType||e.defaultInfo&&"COMPANY"==e.defaultInfo.createType&&"ADMIN_ASSIGNMENT"==e.baseInfo.areaType?a("el-form-item",{staticClass:"w100",attrs:{label:"场地要求："}},[a("el-input",{attrs:{placeholder:"请填入场地、时间要求等",type:"textarea",rows:"4",resize:"none"},model:{value:e.baseInfo.areaRequirement,callback:function(t){e.$set(e.baseInfo,"areaRequirement",t)},expression:"baseInfo.areaRequirement"}})],1):e._e(),e._v(" "),"COMPANY_CHOOSE"!=e.baseInfo.areaType?a("el-form-item",{attrs:{prop:"reciveTime"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("em",{staticStyle:{color:"#d25050"}},[e._v("*")]),e._v("简历接收时间：\n            ")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.baseInfo.reciveTime,callback:function(t){e.$set(e.baseInfo,"reciveTime",t)},expression:"baseInfo.reciveTime"}})],1):e._e(),e._v(" "),"COMPANY_CHOOSE"==e.baseInfo.areaType?a("el-form-item",{staticClass:"w100"},[a("span",{attrs:{slot:"label"},slot:"label"},[a("em",{staticStyle:{color:"#d25050"}},[e._v("*")]),e._v("宣讲会时间：\n          ")]),e._v(" "),a("div",{staticClass:"dateBox"},[a("el-date-picker",{key:"rangeDate",attrs:{format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},on:{change:e.dateChange},model:{value:e.baseInfo.year,callback:function(t){e.$set(e.baseInfo,"year",t)},expression:"baseInfo.year"}}),e._v(" "),a("el-select",{attrs:{disabled:!e.baseInfo.timeOptions.length,placeholder:"请选择时间段"},on:{change:e.usableTimesChange},model:{value:e.baseInfo.timeRange,callback:function(t){e.$set(e.baseInfo,"timeRange",t)},expression:"baseInfo.timeRange"}},e._l(e.baseInfo.timeOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1)]):e._e(),e._v(" "),"ADMIN_ASSIGNMENT"==e.baseInfo.areaType||"isAllow"==e.baseInfo.areaType?a("el-form-item",{staticClass:"w100"},[a("span",{attrs:{slot:"label"},slot:"label"},[a("em",{staticStyle:{color:"#d25050"}},[e._v("*")]),e._v("宣讲会时间：\n            ")]),e._v(" "),a("div",{staticClass:"selfcontact"},[a("el-date-picker",{attrs:{format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.startDate,callback:function(t){e.$set(e.baseInfo,"startDate",t)},expression:"baseInfo.startDate"}}),e._v(" "),a("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm",format:"HH:mm","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},on:{change:e.contactDataChange},model:{value:e.baseInfo.startTime,callback:function(t){e.$set(e.baseInfo,"startTime",t)},expression:"baseInfo.startTime"}})],1)]):e._e(),e._v(" "),"COMPANY_CHOOSE"!=e.baseInfo.areaType?a("el-form-item",{attrs:{label:"是否需要笔面试："}},[a("el-radio-group",{model:{value:e.baseInfo.needExamination,callback:function(t){e.$set(e.baseInfo,"needExamination",t)},expression:"baseInfo.needExamination"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1):e._e()],1)],1):e._e(),e._v(" "),e.loginType.isAdmin&&!e.defaultInfo?a("div",{staticClass:"baseInfoForm"},[a("el-form",{ref:"baseInfoForm",attrs:{model:e.baseInfo,rules:e.baseInfoRules,"label-width":"170px"}},[a("el-form-item",{attrs:{prop:"title",label:"宣讲会标题："}},[a("el-input",{model:{value:e.baseInfo.title,callback:function(t){e.$set(e.baseInfo,"title",t)},expression:"baseInfo.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所在学校："}},[a("el-input",{model:{value:e.baseInfo.schoolName,callback:function(t){e.$set(e.baseInfo,"schoolName",t)},expression:"baseInfo.schoolName"}})],1),e._v(" "),a("el-form-item",{staticClass:"w100"},[a("span",{attrs:{slot:"label"},slot:"label"},[a("em",{staticStyle:{color:"#d25050"}},[e._v("*")]),e._v("宣讲会时间：\n            ")]),e._v(" "),a("div",{staticClass:"selfcontact"},[a("el-date-picker",{attrs:{format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.startDate,callback:function(t){e.$set(e.baseInfo,"startDate",t)},expression:"baseInfo.startDate"}}),e._v(" "),a("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm",format:"HH:mm","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},on:{change:e.contactDataChange},model:{value:e.baseInfo.startTime,callback:function(t){e.$set(e.baseInfo,"startTime",t)},expression:"baseInfo.startTime"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"场地：",prop:"areaDetail"}},[a("el-input",{model:{value:e.baseInfo.areaDetail,callback:function(t){e.$set(e.baseInfo,"areaDetail",t)},expression:"baseInfo.areaDetail"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"reciveTime"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("em",{staticStyle:{color:"#d25050"}},[e._v("*")]),e._v("简历接收时间：\n            ")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.baseInfo.reciveTime,callback:function(t){e.$set(e.baseInfo,"reciveTime",t)},expression:"baseInfo.reciveTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否需要笔面试："}},[a("el-radio-group",{model:{value:e.baseInfo.needExamination,callback:function(t){e.$set(e.baseInfo,"needExamination",t)},expression:"baseInfo.needExamination"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1)],1):e._e()]),e._v(" "),"COMPANY_CHOOSE"==e.baseInfo.areaType?a("div",{staticClass:"placeInfo"},[a("div",{staticClass:"placeInfoForm"},[e._m(1),e._v(" "),a("div",{staticClass:"placeInfoForm"},[a("el-form",{attrs:{model:e.placeForm,rules:e.placeFormRule,"label-width":"170px"}},[e.baseInfo.timeRange?a("el-form-item",{staticClass:"w100",attrs:{prop:"place",label:"场地："}},[a("el-radio-group",{model:{value:e.placeForm.place,callback:function(t){e.$set(e.placeForm,"place",t)},expression:"placeForm.place"}},e._l(e.usablePlace,function(t,i){return a("el-radio",{key:i,attrs:{label:t.id},on:{change:e.placeRadioChange}},[e._v(e._s(t.name))])}),1),e._v(" "),e.placeForm.place?a("div",{staticClass:"usablePlace"},[a("em"),e._v(" "),a("h2",[e._v("可容纳人数："+e._s(e.curUsablePlaceInfo.peopleNum))]),e._v(" "),a("h2",{domProps:{innerHTML:e._s("场地说明："+e.curUsablePlaceInfo.description)}})]):e._e()],1):e._e(),e._v(" "),a("el-form-item",{attrs:{prop:"reciveTime"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("em",{staticStyle:{color:"#d25050"}},[e._v("*")]),e._v("简历接收时间：\n            ")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.placeForm.reciveTime,callback:function(t){e.$set(e.placeForm,"reciveTime",t)},expression:"placeForm.reciveTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否需要现场笔面试："}},[a("el-radio-group",{model:{value:e.placeForm.needExamination,callback:function(t){e.$set(e.placeForm,"needExamination",t)},expression:"placeForm.needExamination"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1)],1)])]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("基本信息")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("场地信息")])])])])}]};var c=a("C7Lr")(l,r,!1,function(e){a("EM+9"),a("hfSC")},"data-v-7c4d3600",null);t.a=c.exports},zAvf:function(e,t){},zILJ:function(e,t,a){"use strict";var i=a("aA9S"),s=a.n(i),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"baseInfoDetails"}},[t("div",{staticClass:"baseInfo"})])}]};var o=a("C7Lr")({},n,!1,function(e){a("Mv/G")},"data-v-8fab72f2",null).exports,l=a("VDzf"),r=a("WD6V"),c=a("iAlU"),u=a("xTvN"),f=a("GwEi"),m=a("Y253"),d=a("zY0d"),p=a("jCtM"),v=(a("p+qa"),a("C331")),h=(l.a,r.a,c.a,u.a,f.a,m.a,{data:function(){return{placeRule:{},disabledEditPosition:!0,showDialog:!1,defaultFormInfo:{},editStatus:!1,status:"",statusName:"",showLog:!1,sumarry:""}},props:["loginType","techinDetails"],computed:{dataUrl:function(){return"/api/employment/manage/preachMeeting/getOperationDetailList?id="+this.techinDetails.id}},methods:{revise:function(){var e=this,t=this.$refs.baseInfoEdit.vali(),a=this.$refs.unitInfoEdit.vali(),i=(this.$refs.positionInfoEdit.tableData,void 0);i="COMPANY"==this.loginType.loginType?"/api/employment/preachMeeting/updatePreachMeeting":"/api/employment/manage/preachMeeting/updatePreachMeeting",t&&a&&(this.$refs.baseInfoEdit.toSubmit(),setTimeout(function(){var t=e.$refs.baseInfoEdit.baseInfo,a=e.$refs.unitInfoEdit.unitForm,n=e.$refs.positionInfoEdit.tableData,o=s()({},t,a);n&&(o.recruitmentPositionVOList=n),Object(v.e)({url:i,type:"put",data:o,success:function(t){t.state?("COMPANY"==e.loginType.loginType?e.$message.success("提交成功"):e.$message.success("修改成功"),e.$emit("backToParent")):(e.$message.error(t.message),e.$emit("backToParent"))}})},200))},catchPlaceRules:function(){var e=this;Object(d.a)("PREACH_MEETING").then(function(t){t.length&&(e.placeRule=t[0],e.status=e.techinDetails.status,e.statusName=e.techinDetails.statusName)})},closeDialog:function(){this.showDialog=!1},checkPositionDetails:function(e){this.showDialog=!0,this.defaultFormInfo=e},editPositionDetails:function(e){},editForAdmin:function(){this.editStatus=!this.editStatus},reCall:function(){var e=this;Object(p.e)(this.techinDetails.id).then(function(t){t.state?(e.$message.success("撤回成功"),e.statusName="已撤回",e.status=3):e.$message.error(t.message)})},showOpLog:function(){this.showLog=!this.showLog}},components:{baseInfoDetails:o,position:l.a,oplog:r.a,addTeachin:c.a,baseInfoEdit:u.a,unitInfoEdit:f.a,positionEdit:m.a},created:function(){this.catchPlaceRules()}}),b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"techinDetails"}},[a("div",{staticClass:"statusBar box"},[a("p",[a("span",{class:{default:0==e.status,error:2==e.status||5==e.status}},[e._v(e._s(e.statusName))])]),e._v(" "),a("h3",[a("a",{on:{click:e.showOpLog}},[e._v("操作日志")]),e._v(" "),"COMPANY"==e.loginType.loginType?a("div",{staticClass:"pull-right"},[5==e.status||3==e.status||1==e.status?a("a",{on:{click:e.editForAdmin}},[a("i"),a("em",[e._v("编辑")])]):e._e()]):e._e(),e._v(" "),e.loginType.isAdmin?a("div",{staticClass:"pull-right"},[1==e.status||0==e.status?a("a",{on:{click:e.editForAdmin}},[a("i"),a("em",[e._v("编辑")])]):e._e()]):e._e()])]),e._v(" "),e.editStatus?e._e():a("div",[a("div",{staticClass:"baseInfo"},[e._m(0),e._v(" "),a("ul",{staticClass:"baseInfoList"},[a("li",[a("span",[e._v("宣讲会标题：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.title))])]),e._v(" "),a("li",[a("span",[e._v("所在学校：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.schoolName))])]),e._v(" "),a("li",[a("span",[e._v("宣讲会时间：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.beginTime+"~"+e.techinDetails.endTime))])]),e._v(" "),a("li",[a("span",[e._v("场地：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.areaName||e.techinDetails.areaDetail))])]),e._v(" "),"ADMIN_ASSIGNMENT"==e.techinDetails.areaType&&"COMPANY"==e.techinDetails.createType?a("li",[a("span",[e._v("场地要求：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.areaRequirement))])]):e._e(),e._v(" "),a("li",[a("span",[e._v("简历接收时间：")]),e._v(" "),e.techinDetails.resumeReceiveBeginTime?a("i",[e._v(e._s(e.techinDetails.resumeReceiveBeginTime.split(" ")[0]+" 至 "+e.techinDetails.resumeReceiveEndTime.split(" ")[0]))]):e._e()]),e._v(" "),a("li",[a("span",[e._v("是否需要现场笔面试：")]),e._v(" "),1==e.techinDetails.needExamination?a("i",[e._v("是")]):0==e.techinDetails.needExamination?a("i",[e._v("否")]):a("i",[e._v("未选择")])])])]),e._v(" "),a("div",{staticClass:"unitInfo"},[e._m(1),e._v(" "),a("ul",{staticClass:"baseInfoList unitInfoList"},[a("div",[a("li",[a("span",[e._v("单位名称：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.companyName))])]),e._v(" "),a("li",[a("span",[e._v("单位性质：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.property))])])]),e._v(" "),a("div",[a("li",[a("span",[e._v("单位规模：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.scale))])]),e._v(" "),a("li",[a("span",[e._v("邮箱：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.email))])])]),e._v(" "),a("div",[a("li",[a("span",[e._v("单位联系人：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.contactPeople))])]),e._v(" "),a("li",[a("span",[e._v("电话：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.contactPhone))])])]),e._v(" "),a("li",[a("span",[e._v("单位地址：")]),e._v(" "),a("i",[e._v(e._s(e.techinDetails.addressDetail))])]),e._v(" "),a("li",{staticClass:"box"},[a("span",[e._v("单位简介：")]),e._v(" "),a("i",{domProps:{innerHTML:e._s(e.techinDetails.summary)}})])])]),e._v(" "),a("div",{staticClass:"positionList"},[e._m(2),e._v(" "),a("div",{staticClass:"positionTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.techinDetails.recruitmentPositionTableDTOList}},[a("el-table-column",{attrs:{width:"100",type:"index",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{prop:"positionName",label:"职位名称"}}),e._v(" "),a("el-table-column",{attrs:{label:"职位性质"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("PRACTICE"==t.row.positionProperty?"实习":"全职"))])]}}],null,!1,2348323164)}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.checkPositionDetails(t.row)}}},[e._v("详情")]),e._v(" "),e.loginType.isAdmin&&e.editStatus?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.editPositionDetails(t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,26106746)})],1)],1)]),e._v(" "),a("div",{staticClass:"summary"},[a("div",{staticClass:"title"},[e._m(3),e._v(" "),a("div",{staticClass:"content"},[a("span",[e._v(e._s(e.techinDetails.recruitmentBrief))])])])])]),e._v(" "),e.editStatus?a("div",[a("base-info-edit",{ref:"baseInfoEdit",attrs:{defaultInfo:e.techinDetails,placeRule:e.placeRule,loginType:e.loginType}}),e._v(" "),a("unit-info-edit",{ref:"unitInfoEdit",attrs:{defaultInfo:e.techinDetails,loginType:e.loginType}}),e._v(" "),a("position-edit",{ref:"positionInfoEdit",attrs:{defaultInfo:e.techinDetails,unitList:e.unitList}}),e._v(" "),a("div",{staticClass:"summary"},[e._m(4),e._v(" "),a("div",{staticClass:"sumarryInput"},[a("el-input",{attrs:{type:"textarea",resize:"none",rows:"8"},model:{value:e.sumarry,callback:function(t){e.sumarry=t},expression:"sumarry"}})],1)]),e._v(" "),e.loginType.isAdmin?a("div",{staticClass:"btnGroup"},[1==e.status?a("a",{staticClass:"submit",on:{click:e.revise}},[e._v("修改")]):e._e()]):e._e(),e._v(" "),"COMPANY"==e.loginType.loginType?a("div",{staticClass:"btnGroup"},[1==e.status?a("a",{staticClass:"submit",on:{click:e.revise}},[e._v("修改")]):e._e()]):e._e()],1):e._e(),e._v(" "),e.showDialog?a("position",{attrs:{showDialog:e.showDialog,disabledEditPosition:e.disabledEditPosition,defaultFormInfo:e.defaultFormInfo},on:{closeDialog:e.closeDialog}}):e._e(),e._v(" "),a("div",{class:{show:e.showLog},attrs:{id:"timeline"}},[a("oplog",{attrs:{dataUrl:e.dataUrl}})],1),e._v(" "),"COMPANY"==e.loginType.loginType?a("div",{staticClass:"btnGroup"},[0==e.status?a("a",{staticClass:"reCall",on:{click:e.reCall}},[e._v("撤回")]):e._e(),e._v(" "),5==e.status&&e.editStatus||3==e.status&&e.editStatus?a("a",{staticClass:"submit",on:{click:e.revise}},[e._v("重新提交")]):e._e()]):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("基本信息")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("单位信息")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("职位信息")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"clearfix"},[t("span",[t("em"),this._v(" "),t("i",[this._v("招聘简章")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title clearfix"},[t("h1",[t("span",[t("em"),this._v(" "),t("i",[this._v("招聘简章")])])])])}]};var _=a("C7Lr")(h,b,!1,function(e){a("6vO7"),a("C5Vw")},"data-v-5c5408ad",null);t.a=_.exports}});