webpackJsonp([49],{"+Jp4":function(e,t,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("5rGT"),d=a("C331"),r=(n.a,{data:function(){return{address:{province:"",city:"",area:""},addOptions:[{name:"年份",type:"select",value:"year",require:!1,noEdit:!1},{name:"学年",type:"input",value:"studyYear",require:!1,noEdit:!0},{name:"时间",type:"date",value:"submitTime",require:!1,noEdit:!1},{name:"活动类别",type:"select",value:"activityType",require:!1,noEdit:!1},{name:"活动性质",type:"select",value:"activityNature",require:!1,noEdit:!1},{name:"中学/咨询会",type:"select",value:"middleConsult",require:!1,noEdit:!1},{name:"中学性质",type:"input",value:"middleNature",require:!1,noEdit:!1},{name:"中学/咨询会联系人",type:"input",value:"middleConsultPeople",require:!1,noEdit:!1},{name:"中学/咨询会地址  ",type:"select_input",value:"middleConsultPlace",value2:"middleConsultPlaceInfo",require:!1,noEdit:!1},{name:"有无讲座",type:"select",value:"theLecture",require:!1,noEdit:!1},{name:"讲座题目",type:"input",value:"lectureName",require:!1,noEdit:!1},{name:"专家名字",type:"input",value:"expertsName",require:!1,noEdit:!1},{name:"其他人员",type:"input",value:"otherJoinPeople",require:!1,noEdit:!1},{name:"工作内容说明",type:"textarea",placeholder:"请输入工作内容说明",value:"workDescribe",require:!1,noEdit:!1}],addParams:{id:37,userId:0x3f332dcec800000,userName:"",year:"",studyYear:"",addressCode:"",provinceSecond:"",submitTime:null,activityType:"",activityNature:"",middleConsult:"",middleNature:"",middleConsultPeople:"",middleConsultPlace:"",theLecture:"",lectureName:"",expertsName:"",schoolJoinPeopleSurnames:"",schoolJoinPeopleName:"",schoolJoinPeoplePhone:"",schoolJoinPeopleVO:[],otherJoinPeople:"",workDescribe:"",note:"",status:"",reason:"",createTime:"",updateTime:""},yearList:[],middleList:[],selectOptions:{activityType:[],activityNature:[],middleConsult:[],middleConsultPlace:[],theLecture:[]},hasEdit:0,myAddress:""}},components:{newAddress:n.a},created:function(){var e=this;this.addParams=this.value,this.myAddress=this.addParams.province,this.addParams.provinceSecond&&(this.myAddress+=","+this.addParams.provinceSecond),this.getYearList();[{name:"活动类别",value:"activityType"},{name:"活动性质",value:"activityNature"},{name:"中学/咨询会",value:"middleConsult"},{name:"中学/咨询会地址",value:"middleConsultPlace"},{name:"有无讲座",value:"theLecture"}].forEach(function(t){e.getDirectoryList(t)})},props:{value:{default:{}},width:{default:220},noArea:{default:!1},type:{default:"edit"}},watch:{value:function(e){this.addParams=JSON.parse(s()(e)),this.myAddress=this.addParams.province,this.addParams.provinceSecond&&(this.myAddress+=","+this.addParams.provinceSecond)},addParams:{handler:function(e,t){this.hasEdit++},deep:!0}},methods:{back:function(){this.hasEdit>1?confirm("当前页面未保存,是否放弃修改?")&&(this.hasEdit=0,this.$emit("back")):(this.hasEdit=0,this.$emit("back"))},addJoinPeople:function(){this.addParams.schoolJoinPeopleVO.push({surnames:"",name:"",phone:""})},getYearList:function(){var e=this;Object(d.d)("api/archives/enroll/getListYear").then(function(t){t.state&&(e.yearList=t.data.map(function(e){return{id:e.value,text:e.label}}))})},save:function(){this.addParams.addressCode?(this.addParams.province=this.addParams.addressCode.split(",")[0],this.addParams.provinceSecond=this.addParams.addressCode.split(",")[1]?this.addParams.addressCode.split(",")[1]:""):(this.addParams.province=this.addParams.provinceCode,this.addParams.provinceSecond=this.addParams.provinceSecondCode),this.$emit("input",this.addParams),this.$emit("onchange")},getDirectoryList:function(e){var t=this,a="api/archives/demo/getSysDict?name="+e.name;Object(d.d)(a).then(function(a){a.state&&(t.selectOptions[e.value]=a.data.map(function(e){return e.text=e.name,e.id=e.value,e}))})},getSelectOptions:function(e){switch(e){case"year":return this.yearList;case"middleConsultPlace":return this.middleList;default:return this.selectOptions[e]}},getMiddleList:function(e){var t=this,a="api/archives/trip/getMiddleData?province="+e.split(",")[0]+"&provinceSecond="+(e.split(",")[1]?e.split(",")[1]:"");Object(d.d)(a).then(function(e){e.state&&(t.middleList=e.data.map(function(e){return{id:e.name,text:e.name}}),t.middleList.push({id:"其他",text:"其他"}))})},changeAddress:function(e,t){this.addParams[t.value]=e,this.getMiddleList(e)}}}),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editScheduling"},[a("label",{staticClass:"back pull-left",staticStyle:{padding:"0"},on:{click:function(t){return e.back()}}},[a("i",{staticClass:"maticon pull-left",domProps:{innerHTML:e._s(e.icons("arrow_back"))}},[e._v("arrow_back")]),e._v(" "),a("span",[e._v("返回")])]),e._v(" "),a("div",{staticClass:"form-wrap box_flex align_center"},[e._l(e.addOptions.filter(function(e,t){return t<=13}),function(t,i){return a("div",{key:i,staticClass:"form-group align_center"},[a("div",{staticClass:"label",class:{require:t.require}},[a("span",[e._v(e._s(t.name)+":")])]),e._v(" "),"input"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.addParams[t.value],expression:"addParams[item.value]"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",disabled:"read"==e.type||t.noEdit},domProps:{value:e.addParams[t.value]},on:{input:function(a){a.target.composing||e.$set(e.addParams,t.value,a.target.value)}}}):e._e(),e._v(" "),"select_input"==t.type?a("div",{staticClass:"select_input_wrap box_flex flex_between",staticStyle:{width:"450px"}},[e.getSelectOptions(t.value).length&&"13001"===e.addParams.middleConsult?a("v-select",{attrs:{options:e.getSelectOptions(t.value),"options-value":"id","options-label":"text","close-on-select":"",justify:""},model:{value:e.addParams[t.value],callback:function(a){e.$set(e.addParams,t.value,a)},expression:"addParams[item.value]"}}):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addParams[t.value2],expression:"addParams[item.value2]"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",disabled:"read"==e.type||t.noEdit},domProps:{value:e.addParams[t.value2]},on:{input:function(a){a.target.composing||e.$set(e.addParams,t.value2,a.target.value)}}})],1):e._e(),e._v(" "),"address"==t.type?a("newAddress",{ref:"address",refInFor:!0,attrs:{disabled:"read"==e.type||t.noEdit,value:e.myAddress,width:200,noArea:"true"},on:{onChange:function(a){e.changeAddress(a,t)}}}):e._e(),e._v(" "),"detect"==t.type?a("detect",{attrs:{url:t.url,searchVal:e.addParams[t.label],placeholder:t.placeholder},on:{afterSelected:function(a){e.afterDetect(a,t)}}}):e._e(),e._v(" "),"select"==t.type?a("v-select",{attrs:{disabled:"read"==e.type||t.noEdit,options:e.getSelectOptions(t.value),"options-value":"id","options-label":"text","close-on-select":"",justify:""},model:{value:e.addParams[t.value],callback:function(a){e.$set(e.addParams,t.value,a)},expression:"addParams[item.value]"}}):e._e(),e._v(" "),"date"==t.type?a("v-datepicker",{ref:"datepicker",refInFor:!0,attrs:{disabled:"read"==e.type||t.noEdit,format:"yyyy-MM-dd",clearButton:!1,showTime:!1},model:{value:e.addParams[t.value],callback:function(a){e.$set(e.addParams,t.value,a)},expression:"addParams[item.value]"}}):e._e()],1)}),e._v(" "),e._l(e.addParams.schoolJoinPeopleVO,function(t,i){return a("div",{key:i,staticClass:"box_flex"},[a("div",{staticClass:"form-group align_center"},[a("div",{staticClass:"label"},[a("span",[e._v("我校主要参加人"+e._s(i+1)+":")])]),e._v(" "),a("div",{staticClass:"tow_input_wrap box_flex flex_between"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.surnames,expression:"inputItem['surnames']"}],staticClass:"form-control search-input organization-input",staticStyle:{width:"40px","padding-right":"0"},attrs:{type:"text",disabled:"read"==e.type},domProps:{value:t.surnames},on:{input:function(a){a.target.composing||e.$set(t,"surnames",a.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"inputItem['name']"}],staticClass:"form-control search-input organization-input",staticStyle:{width:"140px"},attrs:{type:"text",disabled:"read"==e.type},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}})])]),e._v(" "),a("div",{staticClass:"form-group align_center"},[a("div",{staticClass:"label"},[a("span",[e._v("我校主要参加人联系方式"+e._s(i+1)+":")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"inputItem['phone']"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",disabled:"read"==e.type},domProps:{value:t.phone},on:{input:function(a){a.target.composing||e.$set(t,"phone",a.target.value)}}})])])}),e._v(" "),"add"==e.type?a("div",{staticStyle:{width:"100%"}},[a("button",{staticClass:"btn submit-btn",on:{click:function(t){return e.addJoinPeople()}}},[e._v("新增")])]):e._e(),e._v(" "),e._l(e.addOptions.filter(function(e,t){return t>13}),function(t,i){return a("div",{key:i,staticClass:"textarea_wrap form-group align_center"},[a("div",{staticClass:"label",class:{require:t.require}},[a("span",[e._v(e._s(t.name)+":")])]),e._v(" "),"input"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.addParams[t.value],expression:"addParams[item.value]"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",disabled:"read"==e.type||t.noEdit},domProps:{value:e.addParams[t.value]},on:{input:function(a){a.target.composing||e.$set(e.addParams,t.value,a.target.value)}}}):e._e(),e._v(" "),"textarea"==t.type?a("v-textarea",{attrs:{readonly:"read"==e.type||t.noEdit,lineHeight:"22",placeholder:t.placeholder,rows:"6",maxLength:"255"},model:{value:e.addParams.note,callback:function(t){e.$set(e.addParams,"note",t)},expression:"addParams['note']"}}):e._e()],1)}),e._v(" "),"edit"==e.type?a("div",{staticClass:"textarea_wrap form-group align_center"},[e._m(0),e._v(" "),a("v-textarea",{attrs:{lineHeight:"22",placeholder:"请输入驳回理由",rows:"6",maxLength:"255"},model:{value:e.addParams.note,callback:function(t){e.$set(e.addParams,"note",t)},expression:"addParams['note']"}})],1):e._e()],2),e._v(" "),a("div",{staticClass:"box_flex flex_center"},[a("button",{staticClass:"btn submit-btn",on:{click:function(t){return e.save()}}},[e._v("保存")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"label"},[t("span",[this._v("备注:")])])}]};var o=a("VU/8")(r,l,!1,function(e){a("WROo")},"data-v-6eb1f1f1",null);t.a=o.exports},"90XN":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("C331"),s=a("y0ro"),n=a("JUJb"),d=a("+Jp4"),r=(s.a,n.a,d.a,{mixins:[s.a,n.a],components:{editScheduling:d.a},data:function(){return{schedulingUrl:"/table-data/archives/trip/getOneArrange",schedulingColumns:[],imgList:[],timestamp:"?timestamp=",lang:"zh-cn",examineStatus:!1,isEdit:!0,reason:"",addParams:{id:"",userId:"",userName:"",year:"",studyYear:"",province:"",provinceSecond:"",submitTime:null,activityType:"",activityNature:"",middleConsult:"",middleNature:"",middleConsultPeople:"",middleConsultPlace:"",theLecture:"",lectureName:"",expertsName:"",schoolJoinPeopleSurnames:"",schoolJoinPeopleName:"",schoolJoinPeoplePhone:"",schoolJoinPeopleVO:[],otherJoinPeople:"",workDescribe:"",note:"",status:"",reason:"",createTime:"",updateTime:""},selectOptions:{activityType:[],activityNature:[],middleConsult:[],middleConsultPlace:[],theLecture:[]},yearList:[]}},created:function(){var e=this,t=localStorage.getItem("lang");Object(i.g)(t)&&(this.lang=t);[{name:"活动类别",value:"activityType"},{name:"活动性质",value:"activityNature"},{name:"中学/咨询会",value:"middleConsult"},{name:"中学/咨询会地址",value:"middleConsultPlace"},{name:"有无讲座",value:"theLecture"}].forEach(function(t){e.getDirectoryList(t)}),this.initTable()},methods:{addScheduling:function(e){var t=this;if(this.examineStatus){this.isEdit||(this.addParams.userId=this.$attrs.account.userId,this.addParams.userName=this.$attrs.account.userName),Object(i.d)("api/archives/trip/insertArrange",this.addParams,"POST").then(function(e){e.state?(t.$toast("操作成功!"),t.examineStatus=!1,t.timestamp="?timestamp="+(new Date).getTime()):t.$toast(e.message)})}else if(this.examineStatus=!0,e)e.submitTime=new Date(e.submitTime).format("yyyy-MM-dd HH:mm"),this.addParams=e,this.isEdit=!1;else{this.isEdit=!0;var a=(new Date).getFullYear(),s=new Date(a+"-7-31 23:59:59"),n="";n=new Date>s?a+"-"+(a+1):a-1+"-"+a,this.addParams={id:"",userId:"",userName:"",year:"",studyYear:n,province:"",provinceSecond:"",submitTime:null,activityType:"",activityNature:"",middleConsult:"",middleNature:"",middleConsultPeople:"",middleConsultPlace:"",theLecture:"",lectureName:"",expertsName:"",schoolJoinPeopleSurnames:"",schoolJoinPeopleName:"",schoolJoinPeoplePhone:"",schoolJoinPeopleVO:[{surnames:"",name:"",phone:""}],otherJoinPeople:"",workDescribe:"",note:"",status:"",reason:"",createTime:"",updateTime:""}}},initTable:function(){var e=this;this.schedulingColumns=[{title:"年份",id:"year",className:"text-left",width:140,hidden:!1,search:{type:"select",data:{optionsLabel:"label",optionsValue:"value",url:"api/archives/enroll/getListYear"}}},{title:"活动类别",id:"activityType",className:"text-left",width:140,hidden:!1,search:{type:"select",data:{optionsLabel:"name",optionsValue:"value",url:"api/archives/demo/getSysDict?name=活动类别"}}},{title:"活动性质",id:"activityNature",className:"text-left",width:140,hidden:!1,search:{type:"select",data:{optionsLabel:"name",optionsValue:"value",url:"api/archives/demo/getSysDict?name=活动性质"}}},{title:"时间",id:"submitTime",className:"text-left",width:140,hidden:!1},{title:"省份",id:"province",className:"text-left",width:140,hidden:!1,search:{type:"select",data:{optionsLabel:"label",optionsValue:"value",url:"api/archives/permissions/getProvinceList"}}},{title:"中学/咨询会",id:"middleConsult",className:"text-left",width:140,hidden:!1,search:{type:"select",data:{optionsLabel:"name",optionsValue:"value",url:"api/archives/demo/getSysDict?name=中学/咨询会"}}},{title:"中学名称/咨询会地址",id:"middleConsultPlace",className:"text-left",width:140,hidden:!1,search:{type:"input",data:{placeholder:""}}},{title:"提交人",id:"userName",className:"text-left",width:140,hidden:!1},{title:"提交时间",id:"updateTime",className:"text-left",width:140,hidden:!1},{id:"opt",title:"操作",className:"text-center",width:"230px",hidden:!1,formatter:function(t){return[{tag:"a",text:"查看",className:"opt-btn",callback:function(t,a){e.addScheduling(t)}}]}}]},getDirectoryList:function(e){var t=this,a="api/archives/demo/getSysDict?name="+e.name;Object(i.d)(a).then(function(a){a.state&&(t.selectOptions[e.value]=a.data.map(function(e){return e.text=e.name,e.id=e.value,e}))})}},computed:{translate:function(){return Object(i.g)(this.lang).enrollManage}}}),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.examineStatus?a("div",[a("editScheduling",{attrs:{type:e.isEdit?"add":"read"},on:{back:function(t){e.examineStatus=!1},onchange:e.addScheduling},model:{value:e.addParams,callback:function(t){e.addParams=t},expression:"addParams"}})],1):a("div",{staticClass:"scheduling"},[a("div",{staticClass:"content text-center"},[a("v-table",{ref:"schedulingTable",attrs:{title:"行程安排",url:e.schedulingUrl+e.timestamp,pagesize:"10",idField:"id",columns:e.schedulingColumns,multiple:"true",order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(t){return e.addScheduling()}}},[e._v("新建行程")])])])],1)])},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(e){a("xAzj")},"data-v-79d1f084",null);t.default=o.exports},WROo:function(e,t){},xAzj:function(e,t){}});