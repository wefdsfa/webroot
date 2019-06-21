webpackJsonp([7],{"9ps/":function(t,e,s){t.exports=s.p+"static/img/enroll_success.0ca4550.png"},UzkU:function(t,e){},"cE/P":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("C331"),a={data:function(){var t=this;return{isSuccess:!1,studentInfo:{studentName:"",phone:"",subject:"",entranceResult:"",studentLand:"",entranceEvaluate:"",middleSchool:"",schoolIdx:null,mindMajor:[],unwillingMajor:[],areaIdx:null,cityIdx:null},rules:{studentName:[{required:!0,message:"请输入真实姓名",trigger:"blur"},{min:2,max:7,message:"长度在 2 到 7 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入联系方式",trigger:"blur"},{type:"number",message:"联系方式必须填数字"}],subject:[{required:!0,message:"请选择科类",trigger:"change"}],entranceResult:[{required:!0,message:"请输入高考成绩",trigger:"blur"},{type:"number",message:"高考成绩必须填数字"}],areaIdx:[{required:!0,message:"请选择省份",trigger:"change"}],cityIdx:[{required:!0,message:"请选择所在城市",trigger:"change"}],entranceEvaluate:[{required:!0,message:"请输入高考排名",trigger:"blur"},{type:"number",message:"高考排名必须填数字"},{validator:function(t,e,s){"number"!=typeof(e=Number(e))||isNaN(e)?s(new Error("必须输入数字")):e<1?s(new Error("排名不能小于1")):s()},trigger:["blur","change"]}],schoolIdx:[{required:!0,message:"请选择中学",trigger:"blur"}],middleSchool:[{validator:function(e,s,n){t.studentInfo.schoolIdx==t.schoolArr.length-1&&""===s?n(new Error("必填")):n()},trigger:["blur","change"]}]},subjectArr:[{type:0,label:"理工"},{type:1,label:"文史"},{type:2,label:"综合改革"}],areaArr:[],cityList:[],schoolArr:[],majorArr:[]}},created:function(){this.initMajor(),this.initArea()},mounted:function(){},computed:{areaIdx:function(){return this.studentInfo.areaIdx},cityIdx:function(){return this.studentInfo.cityIdx}},watch:{areaIdx:function(t){this.initCity(this.areaArr[t].value)},cityIdx:function(t){this.initSchool(this.areaArr[this.studentInfo.areaIdx].value,this.cityList[t].value)}},methods:{initArea:function(){var t=this;Object(n.e)({url:"/api/archives/permissions/getProvinceList",dataType:"json",type:"GET",success:function(e){e.state?t.areaArr=e.data:t.$toast(e.message)}})},initCity:function(t){var e=this;Object(n.e)({url:"/api/archives/permissions/getProvinceSecond?value="+t,dataType:"json",type:"GET",success:function(t){t.state?(e.cityList=t.data,e.studentInfo.cityIdx=0,e.studentInfo.schoolIdx=null):e.$toast(t.message)}})},initMajor:function(){var t=this;this.$waiting.show(),Object(n.e)({url:"/api/archives/intention/major",dataType:"json",type:"GET",success:function(e){t.$waiting.close(),e.state?t.majorArr=e.data:t.$toast(e.message)}})},initSchool:function(t,e){var s=this;Object(n.e)({url:"/api/archives/getSchool?provinceValue="+t+"&countryCode="+e,dataType:"json",type:"GET",success:function(t){t.state?s.schoolArr=t.data:s.$toast(t.message),s.schoolArr.push("其他")}})},submit:function(){var t=this;this.$refs.stuInfo.validate(function(e){if(!e)return!1;var s={recommendMode:"",studentName:t.studentInfo.studentName,phone:t.studentInfo.phone,subject:t.subjectArr[t.studentInfo.subject].label,entranceResult:t.studentInfo.entranceResult,studentLand:t.areaArr[t.studentInfo.areaIdx].label+t.cityList[t.studentInfo.cityIdx].label,entranceEvaluate:t.studentInfo.entranceEvaluate,middleSchool:t.studentInfo.schoolIdx==t.schoolArr.length-1?t.studentInfo.middleSchool:t.schoolArr[t.studentInfo.schoolIdx],mindMajor:t.studentInfo.mindMajor.join(","),unwillingMajor:t.studentInfo.unwillingMajor.join(",")};Object(n.e)({url:"/api/archives/intention/register",data:s,dataType:"json",type:"POST",success:function(e){e.state?t.isSuccess=!0:t.$alert(data.message,"",{confirmButtonText:"确定",callback:function(t){}})}})})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"studentDirection"},[t.isSuccess?n("div",{staticClass:"container-fluid studentDirection-page success"},[n("img",{attrs:{src:s("9ps/"),alt:""}}),t._v(" "),n("h5",[t._v("信息登记成功")]),t._v(" "),n("p",[t._v("稍后将会有负责老师与你联系，请保持电话通畅，中国药科大学期待你的加入")])]):n("div",{staticClass:"container-fluid studentDirection-page "},[t._m(0),t._v(" "),n("div",{staticClass:"body"},[n("el-form",{ref:"stuInfo",attrs:{inline:!0,rules:t.rules,"label-position":"right",model:t.studentInfo,"label-width":"100px"}},[n("el-row",[n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"姓名:",prop:"studentName"}},[n("el-input",{staticClass:"w220",attrs:{placeholder:"请输入真实姓名"},model:{value:t.studentInfo.studentName,callback:function(e){t.$set(t.studentInfo,"studentName",e)},expression:"studentInfo.studentName"}})],1)],1),t._v(" "),n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"联系方式:",prop:"phone"}},[n("el-input",{staticClass:"w220",attrs:{maxlength:"12",placeholder:"请输入手机或固定电话"},model:{value:t.studentInfo.phone,callback:function(e){t.$set(t.studentInfo,"phone",t._n(e))},expression:"studentInfo.phone"}})],1)],1),t._v(" "),n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"科类:",prop:"subject"}},[n("el-select",{staticClass:"w220",attrs:{placeholder:"请选择科类"},model:{value:t.studentInfo.subject,callback:function(e){t.$set(t.studentInfo,"subject",e)},expression:"studentInfo.subject"}},t._l(t.subjectArr,function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:t.type}})}),1)],1)],1)],1),t._v(" "),n("el-row",[n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"高考成绩:",prop:"entranceResult"}},[n("el-input",{staticClass:"w220",attrs:{maxlength:"3",placeholder:"请输入高考成绩"},model:{value:t.studentInfo.entranceResult,callback:function(e){t.$set(t.studentInfo,"entranceResult",t._n(e))},expression:"studentInfo.entranceResult"}})],1)],1),t._v(" "),n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"省份:",prop:"areaIdx"}},[n("el-select",{staticClass:"w220",attrs:{placeholder:"请选择省份"},model:{value:t.studentInfo.areaIdx,callback:function(e){t.$set(t.studentInfo,"areaIdx",e)},expression:"studentInfo.areaIdx"}},t._l(t.areaArr,function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:e}})}),1)],1)],1),t._v(" "),n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"所在城市:",prop:"cityIdx"}},[n("el-select",{staticClass:"w220",attrs:{placeholder:"请选择所在城市"},model:{value:t.studentInfo.cityIdx,callback:function(e){t.$set(t.studentInfo,"cityIdx",e)},expression:"studentInfo.cityIdx"}},t._l(t.cityList,function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:e}})}),1)],1)],1)],1),t._v(" "),n("el-row",[n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"高考排名:",prop:"entranceEvaluate"}},[n("el-input",{staticClass:"w220",attrs:{placeholder:"请输入高考排名"},model:{value:t.studentInfo.entranceEvaluate,callback:function(e){t.$set(t.studentInfo,"entranceEvaluate",t._n(e))},expression:"studentInfo.entranceEvaluate"}})],1)],1),t._v(" "),n("el-col",{staticClass:"row-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:"中学:",prop:"schoolIdx"}},[n("el-select",{staticClass:"w220",attrs:{placeholder:"请选择中学"},model:{value:t.studentInfo.schoolIdx,callback:function(e){t.$set(t.studentInfo,"schoolIdx",e)},expression:"studentInfo.schoolIdx"}},t._l(t.schoolArr,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1)],1),t._v(" "),t.studentInfo.schoolIdx==t.schoolArr.length-1?n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{prop:"middleSchool"}},[n("el-input",{attrs:{placeholder:"请输入中学"},model:{value:t.studentInfo.middleSchool,callback:function(e){t.$set(t.studentInfo,"middleSchool",e)},expression:"studentInfo.middleSchool"}})],1)],1):t._e()],1),t._v(" "),n("el-row",[n("div",{staticClass:"check-box-title ml28"},[t._v("意向专业：\n            "),n("span",[t._v("（可多选）")])])]),t._v(" "),n("el-row",[n("el-checkbox-group",{staticClass:"checkbox",model:{value:t.studentInfo.mindMajor,callback:function(e){t.$set(t.studentInfo,"mindMajor",e)},expression:"studentInfo.mindMajor"}},t._l(t.majorArr,function(t,e){return n("el-col",{key:e,attrs:{span:8}},[n("el-checkbox",{attrs:{label:t}})],1)}),1)],1),t._v(" "),n("el-row",[n("div",{staticClass:"check-box-title ml13 mt10"},[t._v("非意向专业：\n            "),n("span",[t._v("（可多选）")])])]),t._v(" "),n("el-row",[n("el-checkbox-group",{staticClass:"checkbox",model:{value:t.studentInfo.unwillingMajor,callback:function(e){t.$set(t.studentInfo,"unwillingMajor",e)},expression:"studentInfo.unwillingMajor"}},t._l(t.majorArr,function(t,e){return n("el-col",{key:e,attrs:{span:8}},[n("el-checkbox",{attrs:{label:t}})],1)}),1)],1),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{staticClass:"submit-btn mt10",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row title"},[e("span",[this._v("优秀意向生登记")]),this._v(" "),e("span",[this._v("请勿重复提交登记，确保联系电话填写无误。")])])}]};var r=s("C7Lr")(a,l,!1,function(t){s("UzkU")},"data-v-f021e67c",null);e.default=r.exports}});