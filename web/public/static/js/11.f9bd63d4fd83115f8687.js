webpackJsonp([11],{"8p32":function(t,s,e){"use strict";(function(t){var o=e("3cXf"),a=e.n(o),n=e("C331");s.a={data:function(){return{tab:"flow",tabList:[{id:"flow",name:"勤工助学设置"},{id:"job",name:"岗位类型人数限制"}],nodeList:[{type:"APPLICANT_STUDENT",name:"学生"},{type:"APPLICANT_UNIT",name:"用工单位"},{type:"UNIT_MANAGE",name:"用工单位领导"},{type:"COLLEGE",name:"学院勤工助学"},{type:"SCHOOL",name:"学校勤工助学"},{type:"FINANCE_OFFICE",name:"财务处"}],flows:[],oldSettingStr:"",oldSettingStr2:"",dragNodeType:"",jobTypes:[],jobForm:{}}},computed:{nodeListJson:function(){var t=this,s={};return this.nodeList.forEach(function(e){t.$set(s,e.type,e)}),s},flowsJson:function(){var t=this,s={};return this.flows.forEach(function(e){t.$set(s,e.type,e)}),s},isChange:function(){var t=!1;return"flow"===this.tab?this.oldSettingStr&&(t=this.oldSettingStr!==a()(this.flows)):"job"===this.tab&&this.oldSettingStr2&&(t=this.oldSettingStr2!==a()(this.jobTypes)),t}},methods:{_initFlows:function(){var t=this;Object(n.c)({url:"/api/pwps/workflow/nodes",type:"get",success:function(s){s.state?t.nodeList=s.data:t.$toast(s.message)}}),Object(n.c)({url:"/api/pwps/workflow/settings",type:"get",success:function(s){s.state?(t.flows=s.data,t.oldSettingStr=a()(s.data)):t.$toast(s.message)}})},_initJobTypes:function(){var t=this;Object(n.c)({url:"/api/pwps/config/student/limit",type:"get",success:function(s){s.state?(t.jobTypes=s.data||[],t.jobTypes.forEach(function(t){t.maxNumber+=""}),t.oldSettingStr2=a()(s.data)):t.$toast(s.message)}})},_dragStart:function(t){this.dragNodeType=t.target.getAttribute("data-type")},_dragover:function(t){t.preventDefault()},_drop:function(s){var e=t(s.target).attr("data-type")||t(s.target).parents(".flow-content").attr("data-type");if(this.flowsJson[e]){var o=this.flowsJson[e].nodes?this.flowsJson[e].nodes.length:0;this.flowsJson[e]&&this.flowsJson[e].nodes.push({nodeType:{id:this.nodeListJson[this.dragNodeType].id,type:this.nodeListJson[this.dragNodeType].type,name:this.nodeListJson[this.dragNodeType].name},nodeNo:o,statusType:"PROCESS",allowReject:!0,allowBatchOperation:!0})}},_remove:function(t,s){var e=-1;t.nodes.forEach(function(t,o){t.nodeNo===s.nodeNo&&(e=o)}),t.nodes.splice(e,1)},_submit:function(){var t=this;this.isChange?"flow"===this.tab?this._submitAjax(!1,function(s){t.oldSettingStr=a()(t.flows),s.success?t.$toast("保存成功"):confirm("保存成功,是否废弃未处理的表单？")&&t._submitAjax(!0,function(){t.$toast("操作成功")})}):"job"===this.tab&&Object(n.c)({url:"/api/pwps/config/student/limit",type:"put",data:this.jobTypes,success:function(s){s.state?(t.oldSettingStr2=a()(t.jobTypes),t.$toast("保存成功")):t.$toast(s.message)}}):this.$toast("暂无变更，无需保存")},_submitAjax:function(t,s){var e=this;Object(n.c)({url:"/api/pwps/workflow/settings",type:"post",data:{flows:this.flows,reset:t},success:function(t){t.state?s&&s(t.data):e.$toast(t.message)}})}},created:function(){this._initFlows(),this._initJobTypes()}}}).call(s,e("L7Pj"))},Ykpf:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("Z237");var o=e("8p32"),a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"work-study-flowset"},[e("div",{staticClass:"container-fluid flow-page"},[e("div",{staticClass:"row flow-head"},[e("div",{staticClass:"btn-group"},t._l(t.tabList,function(s,o){return e("button",{key:o,staticClass:"btn tab",class:{active:t.tab===s.id},on:{click:function(e){t.tab=s.id}}},[t._v(t._s(s.name))])})),t._v(" "),e("button",{staticClass:"btn pull-right save",class:{active:t.isChange},on:{click:t._submit}},[t._v("保存")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"flow"===t.tab,expression:"tab === 'flow'"}],staticClass:"row"},[e("div",{staticClass:"flow-nodes-list"},[e("label",[t._v("节点列表：")]),t._v(" "),t._l(t.nodeList,function(s,o){return e("span",{key:o,staticClass:"flow-node",attrs:{"data-type":s.type,draggable:"true"},on:{dragstart:t._dragStart}},[t._v(t._s(s.name))])})],2),t._v(" "),t._l(t.flows,function(s,o){return e("div",{key:o,staticClass:"flow-container"},[e("label",[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"flow-content",attrs:{"data-type":s.type},on:{dragover:t._dragover,drop:t._drop}},t._l(s.nodes,function(o,a){return e("div",{key:a,staticClass:"flow-item"},[0!==a?e("i",{staticClass:"maticon pull-left flow-arrow",domProps:{innerHTML:t._s(t.icons("arrow_forward"))}}):t._e(),t._v(" "),e("span",{staticClass:"flow-node"},[t._v("\n              "+t._s(o.nodeType.name)+"\n              "),0!==a?e("i",{staticClass:"maticon pull-right remove",domProps:{innerHTML:t._s(t.icons("cancel"))},on:{click:function(e){t._remove(s,o)}}}):t._e(),t._v(" "),0!==a?e("div",{staticClass:"pull-right options"},[e("i",{staticClass:"maticon pull-left",attrs:{title:"批量操作"},domProps:{innerHTML:t._s(t.icons(o.allowBatchOperation?"check_box":"check_box_outline_blank"))},on:{click:function(t){o.allowBatchOperation=!o.allowBatchOperation}}})]):t._e()])])}))])})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"job"===t.tab,expression:"tab === 'job'"}],staticClass:"row jobs-list"},t._l(t.jobTypes,function(s,o){return e("div",{key:o,staticClass:"job-item"},[0===o?e("span",[t._v("1人仅可拥有")]):t._e(),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.maxNumber,expression:"type.maxNumber"}],attrs:{type:"number",min:"0"},domProps:{value:s.maxNumber},on:{input:function(e){e.target.composing||t.$set(s,"maxNumber",e.target.value)}}}),t._v(" "),e("span",[t._v("个")]),e("span",[t._v(t._s(s.positionTypeLabel))]),t._v(" "),o<t.jobTypes.length-1?e("span",[t._v("，")]):t._e()])}))])])},staticRenderFns:[]};var n=function(t){e("ktMp")},i=e("C7Lr")(o.a,a,!1,n,null,null);s.default=i.exports},Z237:function(t,s,e){"use strict";(function(t){var s=e("3cXf");e.n(s),e("C331")}).call(s,e("L7Pj"))},ktMp:function(t,s){}});