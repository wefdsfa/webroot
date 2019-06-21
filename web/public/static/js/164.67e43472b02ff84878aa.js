webpackJsonp([164],{D1e4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("C331"),i={components:{},data:function(){return{showeditNewItemModal:!1,editNewItem:{id:"",schoolyear:"",enrollItemName:"",enrollstartTime:"",enrollendTime:""},iseditNewItem:!1,showAddClassModal:!1,addNewItem:{schoolyear:"",enrollItemName:"",enrollstartTime:"",enrollendTime:""},url:"/table-data/archives/batch/getListBatch",schoolyearList:[{text:"2022",id:"2022"},{text:"2021",id:"2021"},{text:"2020",id:"2020"},{text:"2019",id:"2019"},{text:"2018",id:"2018"},{text:"2017",id:"2017"},{text:"2016",id:"2016"}],collegeOptions:{template:[],grades:[{text:"2022",id:"2022"},{text:"2021",id:"2021"},{text:"2020",id:"2020"},{text:"2019",id:"2019"},{text:"2018",id:"2018"},{text:"2017",id:"2017"},{text:"2016",id:"2016"}]}}},created:function(){this._initColumnsOfSearch()},methods:{insureEdit:function(){var e=this;if(this.editNewItem.schoolyear&&this.editNewItem.enrollendTime&&this.editNewItem.enrollstartTime&&this.editNewItem.enrollItemName){var t={id:this.editNewItem.id,year:this.editNewItem.schoolyear,endTime:this.editNewItem.enrollendTime,beginTime:this.editNewItem.enrollstartTime,name:this.editNewItem.enrollItemName};Object(s.e)({url:"/api/archives/batch/updateBatch",dataType:"json",type:"put",data:t,success:function(t){t.state?(e.url="/table-data/archives/batch/getListBatch?timestamp="+(new Date).getTime(),e.toast("编辑数据成功"),e.showeditNewItemModal=!1):"50003"==t.code?e.toast("批次名重复或批次已存在！"):e.toast("编辑数据失败")}})}else alert("请正确输入批次信息!")},collegeSelected:function(e){this.addNewItem.schoolyear=e.value},editNewItemStartTime:function(e){var t=this;if(this.editNewItem.startTime){if(new Date(e.value).getTime()-new Date(this.editNewItem.endTime).getTime()>0)return this.$nextTick(function(){t.toast("开始时间不能大于结束时间"),t.editNewItem.startTime=""}),!1;this.editNewItem.startTime=e.value}else this.editNewItem.startTime=e.value},editNewItemEndTime:function(e){var t=this;if(this.editNewItem.endTime){if(new Date(e.value).getTime()-new Date(this.editNewItem.startTime).getTime()<0)return this.$nextTick(function(){t.toast("开始时间不能大于结束时间"),t.editNewItem.endTime=""}),!1;this.editNewItem.endTime=e.value}else this.editNewItem.endTime=e.value},insureAdd:function(){var e=this;if(this.addNewItem.schoolyear&&this.addNewItem.enrollendTime&&this.addNewItem.enrollstartTime&&this.addNewItem.enrollItemName){var t={year:this.addNewItem.schoolyear,beginTime:this.addNewItem.enrollstartTime,endTime:this.addNewItem.enrollendTime,name:this.addNewItem.enrollItemName};Object(s.e)({url:"/api/archives/batch/saveBatch",dataType:"json",type:"post",data:t,success:function(t){t.state?(e.url="/table-data/archives/batch/getListBatch?timestamp="+(new Date).getTime(),e.toast("新增数据成功"),e.showAddClassModal=!1):e.toast(t.message)}})}else alert("请正确输入批次信息!")},startTimeSelected:function(e){var t=this;if(this.addNewItem.enrollendTime){if(new Date(e.value).getTime()-new Date(this.addNewItem.enrollendTime).getTime()>0)return this.$nextTick(function(){t.toast("开始时间不能大于结束时间"),t.addNewItem.enrollstartTime=""}),!1;this.addNewItem.enrollstartTime=e.value}else this.addNewItem.enrollstartTime=e.value},endTimeSelected:function(e){var t=this;if(this.addNewItem.enrollstartTime){if(new Date(e.value).getTime()-new Date(this.addNewItem.enrollstartTime).getTime()<0)return this.$nextTick(function(){t.toast("开始时间不能大于结束时间"),t.addNewItem.enrollendTime=""}),!1;this.addNewItem.enrollendTime=e.value}else this.addNewItem.enrollendTime=e.value},addNewItemSchoolyearSelected:function(e){},_initColumnsOfSearch:function(){var e=this;this.columns=[{id:"year",title:"年份",width:120,className:"text-left",hidden:!1,formatter:function(e,t){return e.year},search:{type:"select",data:{options:e.schoolyearList,optionsLabel:"text",optionsValue:"id"}}},{id:"name",title:"批次",width:150,className:"text-left",hidden:!1},{id:"beginTime",title:"开始时间",width:150,className:"text-center",hidden:!1},{id:"endTime",title:"结束时间",width:150,className:"text-left",hidden:!1},{id:"opt",title:"操作",className:"text-left",width:150,hidden:!1,formatter:function(t,a){var i=[],l={tag:"a",text:"编辑",className:"opt-btn",callback:function(t,a){e.showeditNewItemModal=!0,e.iseditNewItem=!1,e.editNewItem.id=t.id,e.editNewItem.schoolyear=t.year,e.editNewItem.enrollItemName=t.name,e.editNewItem.enrollstartTime=t.beginTime,e.editNewItem.enrollendTime=t.endTime,e.editNewItem.amount=t.amount}},d={tag:"a",text:"删除",className:"opt-btn",callback:function(t,a){confirm("确定删除本批次吗？")&&Object(s.e)({url:"/api/archives/batch/sureOperation?year="+t.year+"&name="+t.name,dataType:"json",type:"get",success:function(a){a.data.sureOperation?Object(s.e)({url:"/api/archives/batch/deleteBatch?id="+t.id,dataType:"json",type:"delete",success:function(t){t.state?(e.url="/table-data/archives/batch/getListBatch?timestamp="+(new Date).getTime(),e.toast("删除数据成功"),e.showAddClassModal=!1):e.toast("删除数据失败")}}):alert("已上传录取结果，不可删除!")}})}};return i.push(l),i.push(d),i}}]},createClass:function(){this.showAddClassModal=!0,this.addNewItem={schoolyear:"",enrollItemName:"",enrollstartTime:"",enrollendTime:""}}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"enrollBatchManage-page"}},[a("div",{staticClass:"row text-center class-list-page"},[a("v-table",{ref:"enrollBatchManageTable",attrs:{url:e.url,pagesize:"10",idField:"id",columns:e.columns,order:!0,search:!0}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(t){return e.createClass()}}},[e._v("新增")])])])],1),e._v(" "),a("v-modal",{attrs:{show:e.showAddClassModal,effect:"fade",width:"500"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("新增")])]),e._v(" "),e.showAddClassModal?a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"input-group addClass-input-group"},[a("label",{staticClass:"addClass-text"},[e._v("年份:")]),e._v(" "),a("v-select",{staticClass:"btn-block search-select",attrs:{options:e.collegeOptions.grades,"options-value":"id","options-label":"text",search:"","close-on-select":""},on:{afterSelected:e.addNewItemSchoolyearSelected},model:{value:e.addNewItem.schoolyear,callback:function(t){e.$set(e.addNewItem,"schoolyear",t)},expression:"addNewItem.schoolyear"}})],1),e._v(" "),a("div",{staticClass:"input-group addClass-input-group"},[a("label",{staticClass:"addClass-text"},[e._v("批次:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addNewItem.enrollItemName,expression:"addNewItem.enrollItemName"}],staticClass:"form-control search-input",attrs:{type:"text","aria-describedby":"basic-addClass-enrollItemName"},domProps:{value:e.addNewItem.enrollItemName},on:{input:function(t){t.target.composing||e.$set(e.addNewItem,"enrollItemName",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group edit-class-group"},[a("label",{staticClass:"edit-class-text time-picker-label pull-left"},[e._v("开始时间:")]),e._v(" "),a("v-datepicker",{ref:"datepicker",staticClass:"btn-block time-picker",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:e.startTimeSelected},model:{value:e.addNewItem.enrollstartTime,callback:function(t){e.$set(e.addNewItem,"enrollstartTime",t)},expression:"addNewItem.enrollstartTime"}})],1),e._v(" "),a("div",{staticClass:"form-group edit-class-group"},[a("label",{staticClass:"edit-class-text time-picker-label pull-left"},[e._v("结束时间:")]),e._v(" "),a("v-datepicker",{ref:"datepicker",staticClass:"btn-block time-picker",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:e.endTimeSelected},model:{value:e.addNewItem.enrollendTime,callback:function(t){e.$set(e.addNewItem,"enrollendTime",t)},expression:"addNewItem.enrollendTime"}})],1)]):e._e(),e._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.showAddClassModal=!1}}},[e._v("取消")]),e._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){return e.insureAdd()}}},[e._v("确认")])])]),e._v(" "),a("v-modal",{attrs:{show:e.showeditNewItemModal,effect:"fade",width:"500"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("批次编辑")])]),e._v(" "),e.showeditNewItemModal?a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"input-group addClass-input-group"},[a("label",{staticClass:"addClass-text"},[e._v("年份:")]),e._v(" "),a("v-select",{staticClass:"btn-block search-select",attrs:{options:e.schoolyearList,"options-value":"id","options-label":"text",search:"","close-on-select":""},on:{afterSelected:e.collegeSelected},model:{value:e.editNewItem.schoolyear,callback:function(t){e.$set(e.editNewItem,"schoolyear",t)},expression:"editNewItem.schoolyear"}})],1),e._v(" "),a("div",{staticClass:"input-group addClass-input-group"},[a("label",{staticClass:"addClass-text"},[e._v("批次:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editNewItem.enrollItemName,expression:"editNewItem.enrollItemName"}],staticClass:"form-control search-input",attrs:{type:"text","aria-describedby":"basic-addClass-enrollItemName"},domProps:{value:e.editNewItem.enrollItemName},on:{input:function(t){t.target.composing||e.$set(e.editNewItem,"enrollItemName",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group edit-class-group"},[a("label",{staticClass:"edit-class-text time-picker-label pull-left"},[e._v("开始时间:")]),e._v(" "),a("v-datepicker",{ref:"datepicker",staticClass:"btn-block time-picker",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:e.editNewItemStartTime},model:{value:e.editNewItem.enrollstartTime,callback:function(t){e.$set(e.editNewItem,"enrollstartTime",t)},expression:"editNewItem.enrollstartTime"}})],1),e._v(" "),a("div",{staticClass:"form-group edit-class-group"},[a("label",{staticClass:"edit-class-text time-picker-label pull-left"},[e._v("结束时间:")]),e._v(" "),a("v-datepicker",{ref:"datepicker",staticClass:"btn-block time-picker",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:e.editNewItemEndTime},model:{value:e.editNewItem.enrollendTime,callback:function(t){e.$set(e.editNewItem,"enrollendTime",t)},expression:"editNewItem.enrollendTime"}})],1)]):e._e(),e._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){return e.insureEdit()}}},[e._v("确认")]),e._v(" "),a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.showeditNewItemModal=!1}}},[e._v("取消")])])])],1)},staticRenderFns:[]};var d=a("C7Lr")(i,l,!1,function(e){a("bJ09")},null,null);t.default=d.exports},bJ09:function(e,t){}});