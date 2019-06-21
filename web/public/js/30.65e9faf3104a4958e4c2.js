webpackJsonp([30],{"5ksG":function(t,s,e){"use strict";(function(t){var a=e("3SZ7"),o=e.n(a),n=e("C331");s.a={data:function(){return{tab:"flow",tabList:[{id:"flow",name:"勤工助学设置"},{id:"job",name:"岗位类型人数限制"}],nodeList:[{type:"APPLICANT_STUDENT",name:"学生"},{type:"APPLICANT_UNIT",name:"用工单位"},{type:"UNIT_MANAGE",name:"用工单位领导"},{type:"COLLEGE",name:"学院勤工助学"},{type:"SCHOOL",name:"学校勤工助学"},{type:"FINANCE_OFFICE",name:"财务处"}],flows:[],oldSettingStr:"",oldSettingStr2:"",dragNodeType:"",jobTypes:[],jobForm:{}}},computed:{nodeListJson:function(){var t=this,s={};return this.nodeList.forEach(function(e){t.$set(s,e.type,e)}),s},flowsJson:function(){var t=this,s={};return this.flows.forEach(function(e){t.$set(s,e.type,e)}),s},isChange:function(){var t=!1;return"flow"===this.tab?this.oldSettingStr&&(t=this.oldSettingStr!==o()(this.flows)):"job"===this.tab&&this.oldSettingStr2&&(t=this.oldSettingStr2!==o()(this.jobTypes)),t}},methods:{_initFlows:function(){var t=this;Object(n.d)({url:"/api/pwps/workflow/nodes",type:"get",success:function(s){s.state?t.nodeList=s.data:t.$toast(s.message)}}),Object(n.d)({url:"/api/pwps/workflow/settings",type:"get",success:function(s){s.state?(t.flows=s.data,t.oldSettingStr=o()(s.data)):t.$toast(s.message)}})},_initJobTypes:function(){var t=this;Object(n.d)({url:"/api/pwps/config/student/limit",type:"get",success:function(s){s.state?(t.jobTypes=s.data||[],t.jobTypes.forEach(function(t){t.maxNumber+=""}),t.oldSettingStr2=o()(s.data)):t.$toast(s.message)}})},_dragStart:function(t){this.dragNodeType=t.target.getAttribute("data-type")},_dragover:function(t){t.preventDefault()},_drop:function(s){var e=t(s.target).attr("data-type")||t(s.target).parents(".flow-content").attr("data-type");if(this.flowsJson[e]){var a=this.flowsJson[e].nodes?this.flowsJson[e].nodes.length:0;this.flowsJson[e]&&this.flowsJson[e].nodes.push({nodeType:{id:this.nodeListJson[this.dragNodeType].id,type:this.nodeListJson[this.dragNodeType].type,name:this.nodeListJson[this.dragNodeType].name},nodeNo:a,statusType:"PROCESS",allowReject:!0,allowBatchOperation:!0})}},_remove:function(t,s){var e=-1;t.nodes.forEach(function(t,a){t.nodeNo===s.nodeNo&&(e=a)}),t.nodes.splice(e,1)},_submit:function(){var t=this;this.isChange?"flow"===this.tab?this._submitAjax(!1,function(s){t.oldSettingStr=o()(t.flows),s.success?t.$toast("保存成功"):confirm("保存成功,是否废弃未处理的表单？")&&t._submitAjax(!0,function(){t.$toast("操作成功")})}):"job"===this.tab&&Object(n.d)({url:"/api/pwps/config/student/limit",type:"put",data:this.jobTypes,success:function(s){s.state?(t.oldSettingStr2=o()(t.jobTypes),t.$toast("保存成功")):t.$toast(s.message)}}):this.$toast("暂无变更，无需保存")},_submitAjax:function(t,s){var e=this;Object(n.d)({url:"/api/pwps/workflow/settings",type:"post",data:{flows:this.flows,reset:t},success:function(t){t.state?s&&s(t.data):e.$toast(t.message)}})}},created:function(){this._initFlows(),this._initJobTypes()}}}).call(s,e("W14+"))},EFaP:function(t,s){},Ykpf:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("zPJ9");var a=e("5ksG"),o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"work-study-flowset"},[e("div",{staticClass:"container-fluid flow-page"},[e("div",{staticClass:"tab_wrap"},[e("ul",{staticClass:"nav nav-tabs relationClassManage-tab"},t._l(t.tabList,function(s,a){return e("li",{key:a,class:{active:t.tab===s.id},on:{click:function(e){t.tab=s.id}}},[e("a",[t._v(t._s(s.name))])])}),0),t._v(" "),e("button",{staticClass:"btn submit-btn",class:{active:t.isChange},on:{click:t._submit}},[t._v("保存")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"flow"===t.tab,expression:"tab === 'flow'"}],staticClass:"row"},[e("div",{staticClass:"flow-nodes-list"},[e("label",[t._v("节点列表：")]),t._v(" "),t._l(t.nodeList,function(s,a){return e("span",{key:a,staticClass:"flow-node",attrs:{"data-type":s.type,draggable:"true"},on:{dragstart:t._dragStart}},[t._v(t._s(s.name))])})],2),t._v(" "),t._l(t.flows,function(s,a){return e("div",{key:a,staticClass:"flow-container"},[e("label",[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"flow-content",attrs:{"data-type":s.type},on:{dragover:t._dragover,drop:t._drop}},t._l(s.nodes,function(a,o){return e("div",{key:o,staticClass:"flow-item"},[0!==o?e("i",{staticClass:"maticon pull-left flow-arrow",domProps:{innerHTML:t._s(t.icons("arrow_forward"))}}):t._e(),t._v(" "),e("span",{staticClass:"flow-node"},[t._v("\n              "+t._s(a.nodeType.name)+"\n              "),0!==o?e("i",{staticClass:"maticon pull-right remove",domProps:{innerHTML:t._s(t.icons("cancel"))},on:{click:function(e){return t._remove(s,a)}}}):t._e(),t._v(" "),0!==o?e("div",{staticClass:"pull-right options"},[e("i",{staticClass:"maticon pull-left",attrs:{title:"批量操作"},domProps:{innerHTML:t._s(t.icons(a.allowBatchOperation?"check_box":"check_box_outline_blank"))},on:{click:function(t){a.allowBatchOperation=!a.allowBatchOperation}}})]):t._e()])])}),0)])})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"job"===t.tab,expression:"tab === 'job'"}],staticClass:"row jobs-list"},t._l(t.jobTypes,function(s,a){return e("div",{key:a,staticClass:"job-item"},[0===a?e("span",[t._v("1人仅可拥有")]):t._e(),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.maxNumber,expression:"type.maxNumber"}],attrs:{type:"number",min:"0"},domProps:{value:s.maxNumber},on:{input:function(e){e.target.composing||t.$set(s,"maxNumber",e.target.value)}}}),t._v(" "),e("span",[t._v("个")]),e("span",[t._v(t._s(s.positionTypeLabel))]),t._v(" "),a<t.jobTypes.length-1?e("span",[t._v("，")]):t._e()])}),0)])])},staticRenderFns:[]};var n=function(t){e("EFaP")},i=e("Mz/3")(a.a,o,!1,n,null,null);s.default=i.exports},zPJ9:function(t,s,e){"use strict";(function(t){var s=e("3SZ7");e.n(s),e("C331")}).call(s,e("W14+"))}});