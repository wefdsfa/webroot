SET @@autocommit=0;
START TRANSACTION;

ALTER TABLE `app_collect`
MODIFY COLUMN `user_id`  bigint(20) NOT NULL COMMENT '用户id' AFTER `id`,
MODIFY COLUMN `app_id`  int(11) UNSIGNED NOT NULL COMMENT '应用id' AFTER `user_id`,
COMMENT='应用收藏';


ALTER TABLE `app_report_count`
MODIFY COLUMN `count_name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '计算名称' AFTER `id`,
MODIFY COLUMN `count_way`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '计算方式' AFTER `count_name`,
MODIFY COLUMN `component`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '计算控件名' AFTER `count_way`,
MODIFY COLUMN `report_id`  int(11) NULL DEFAULT NULL COMMENT '报表id' AFTER `component`,
MODIFY COLUMN `count_value`  bit(1) NULL DEFAULT NULL COMMENT '是否计算空值' AFTER `report_id`,
COMMENT='应用表单计算';

ALTER TABLE `app_report_name`
MODIFY COLUMN `report_name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报表名称' AFTER `id`,
MODIFY COLUMN `app_id`  int(11) NULL DEFAULT NULL COMMENT '应用id' AFTER `report_name`,
COMMENT='应用报表';

ALTER TABLE `app_setting`
MODIFY COLUMN `flow_id`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '流程id' AFTER `id`,
MODIFY COLUMN `form_id`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '应用id' AFTER `flow_id`,
MODIFY COLUMN `use_business`  tinyint(4) NULL DEFAULT 1 COMMENT '是否使用业务期' AFTER `form_id`,
MODIFY COLUMN `player_setting_id`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '参与者设置id' AFTER `use_business`,
MODIFY COLUMN `link_url`  varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '链接地址' AFTER `player_setting_id`,
MODIFY COLUMN `type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型' AFTER `link_url`,
MODIFY COLUMN `app_id`  int(11) NULL DEFAULT NULL COMMENT '应用id' AFTER `type`,
COMMENT='应用设置';


ALTER TABLE `app_type`
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类名称' AFTER `is_delete`,
MODIFY COLUMN `sort`  int(11) NULL DEFAULT NULL COMMENT '排序值' AFTER `name`,
MODIFY COLUMN `user_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户类型' AFTER `update_time`,
COMMENT='应用分类';

ALTER TABLE `approve_role`
MODIFY COLUMN `level`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '审批角色级别' AFTER `is_delete`,
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名称' AFTER `level`,
MODIFY COLUMN `department_id`  int(11) NULL DEFAULT NULL COMMENT '所属部门id' AFTER `update_time`,
COMMENT='审批角色';

ALTER TABLE `approve_role_user`
MODIFY COLUMN `college_code`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学院代码' AFTER `id`,
MODIFY COLUMN `role_id`  int(11) NULL DEFAULT NULL COMMENT '审批角色id' AFTER `create_time`,
MODIFY COLUMN `user_id`  bigint(20) NULL DEFAULT NULL COMMENT '用户id' AFTER `role_id`,
COMMENT='审批角色用户';


ALTER TABLE `authority_college_role_user`
MODIFY COLUMN `college_id`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学院代码' AFTER `id`,
MODIFY COLUMN `role_id`  int(11) NULL DEFAULT NULL COMMENT '权限角色id' AFTER `college_id`,
MODIFY COLUMN `user_id`  bigint(20) NULL DEFAULT NULL COMMENT '用户id' AFTER `role_id`,
COMMENT='学院权限用户';

ALTER TABLE `authority_menu`
MODIFY COLUMN `code`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单代码' AFTER `id`,
MODIFY COLUMN `level`  int(11) NULL DEFAULT NULL COMMENT '等级' AFTER `code`,
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称' AFTER `level`,
MODIFY COLUMN `sort`  int(11) NULL DEFAULT NULL COMMENT '排序值' AFTER `rank`,
MODIFY COLUMN `icon`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标' AFTER `sort`,
MODIFY COLUMN `url`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '链接' AFTER `icon`,
MODIFY COLUMN `parent_id`  int(11) NULL DEFAULT NULL COMMENT '父菜单id' AFTER `url`,
COMMENT='菜单';

ALTER TABLE `authority_resource`
MODIFY COLUMN `category`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类' AFTER `id`,
MODIFY COLUMN `code`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '代码' AFTER `category`,
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称' AFTER `code`,
COMMENT='权限资源';

ALTER TABLE `authority_role`
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名称' AFTER `is_delete`,
MODIFY COLUMN `remark`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注' AFTER `name`,
MODIFY COLUMN `rank`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '等级（校级、学院、其他）' AFTER `remark`,
MODIFY COLUMN `source`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源（系统定义，自定义）' AFTER `rank`,
COMMENT='权限角色';

ALTER TABLE `business`
MODIFY COLUMN `begin_time`  datetime NULL DEFAULT NULL COMMENT '业务期开始时间' AFTER `id`,
MODIFY COLUMN `end_time`  datetime NULL DEFAULT NULL COMMENT '业务期结束时间' AFTER `begin_time`,
MODIFY COLUMN `guide`  longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '指南' AFTER `end_time`,
MODIFY COLUMN `is_enable`  bit(1) NULL DEFAULT NULL COMMENT '是否启用' AFTER `guide`,
MODIFY COLUMN `is_public`  bit(1) NULL DEFAULT NULL COMMENT '是否发布' AFTER `is_enable`,
MODIFY COLUMN `is_publishing`  bit(1) NULL DEFAULT NULL COMMENT '是否正在发布' AFTER `is_public`,
MODIFY COLUMN `limit_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '面向人员限制类型' AFTER `is_publishing`,
MODIFY COLUMN `link_url`  varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '链接地址' AFTER `limit_type`,
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '业务期名称' AFTER `link_url`,
MODIFY COLUMN `setting_id`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '业务期设置id' AFTER `name`,
MODIFY COLUMN `year`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年份' AFTER `setting_id`,
MODIFY COLUMN `app_id`  int(11) NULL DEFAULT NULL COMMENT '应用id' AFTER `year`,
MODIFY COLUMN `publish_time`  datetime NULL DEFAULT NULL COMMENT '发布时间' AFTER `update_time`,
COMMENT='业务期';

ALTER TABLE `business_limit`
MODIFY COLUMN `grade`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年级' AFTER `id`,
MODIFY COLUMN `in_school`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '在校状态' AFTER `grade`,
MODIFY COLUMN `student_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学生类型' AFTER `in_school`,
MODIFY COLUMN `business_id`  int(11) NULL DEFAULT NULL COMMENT '业务期id' AFTER `student_type`,
COMMENT='业务期面向人员限制';

ALTER TABLE `business_student`
COMMENT='业务期用户';


ALTER TABLE `class_teacher`
COMMENT='班级教师';

ALTER TABLE `data_definition_column`
MODIFY COLUMN `column_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '字段' AFTER `id`,
MODIFY COLUMN `column_option`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '选项' AFTER `column_name`,
MODIFY COLUMN `data_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '数据类型' AFTER `column_option`,
MODIFY COLUMN `edit`  bit(1) NULL DEFAULT NULL COMMENT '是否可以编辑' AFTER `data_type`,
MODIFY COLUMN `status`  int(11) NULL DEFAULT NULL COMMENT '状态' AFTER `edit`,
MODIFY COLUMN `definition_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '字段所属类型' AFTER `status`,
MODIFY COLUMN `is_multiple`  bit(1) NULL DEFAULT NULL COMMENT '是否是多条数据' AFTER `definition_type`,
MODIFY COLUMN `title`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称' AFTER `is_multiple`,
MODIFY COLUMN `type_id`  int(11) NULL DEFAULT NULL COMMENT '所属类型id' AFTER `title`,
COMMENT='数据定义字段';

ALTER TABLE `data_definition_type`
MODIFY COLUMN `bean_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '实体类名称' AFTER `id`,
MODIFY COLUMN `data_definition_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '数据类类型' AFTER `bean_name`,
MODIFY COLUMN `enable`  bit(1) NULL DEFAULT NULL COMMENT '是否可用' AFTER `data_definition_type`,
MODIFY COLUMN `is_multiple`  bit(1) NULL DEFAULT NULL COMMENT '是否是多条数据' AFTER `enable`,
MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类名' AFTER `is_multiple`,
MODIFY COLUMN `title`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述' AFTER `name`,
MODIFY COLUMN `type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '档案类型' AFTER `title`,
COMMENT='数据字段分类';

ALTER TABLE `department`
COMMENT='部门';

ALTER TABLE `department_rule`
COMMENT='部门分工';

ALTER TABLE `department_staff`
MODIFY COLUMN `emp_no`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学工号' AFTER `create_time`,
MODIFY COLUMN `department_id`  int(11) NULL DEFAULT NULL COMMENT '部门id' AFTER `update_time`,
COMMENT='部门成员';

ALTER TABLE `file_storage`
MODIFY COLUMN `hash`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'hash' AFTER `delete_time`,
MODIFY COLUMN `original_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '全名' AFTER `is_delete`,
MODIFY COLUMN `path`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路径' AFTER `original_name`,
MODIFY COLUMN `size`  bigint(20) NULL DEFAULT NULL COMMENT '大小' AFTER `path`,
COMMENT='文件';

ALTER TABLE `first_page`
MODIFY COLUMN `content`  longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '内容' AFTER `id`,
MODIFY COLUMN `background`  longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '首页背景图' AFTER `content`,
MODIFY COLUMN `tips`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '提示' AFTER `add_time`,
COMMENT='首页配置';

ALTER TABLE `freshman_account`
COMMENT='新生账号';


ALTER TABLE `freshman_business_status`
COMMENT='新生事务办理状态';

ALTER TABLE `freshman_first_page`
MODIFY COLUMN `freshman_guide`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '迎新指南' AFTER `create_time`,
COMMENT='新生首页配置';

ALTER TABLE `isi_project`
MODIFY COLUMN `project_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '签到项目名称' AFTER `id`,
MODIFY COLUMN `type_id`  int(11) NULL DEFAULT NULL COMMENT '项目类型id' AFTER `project_name`,
MODIFY COLUMN `limit_list_of_people`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户范围' AFTER `type_id`,
MODIFY COLUMN `education_level`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '培养层次' AFTER `user_id`,
MODIFY COLUMN `student_status`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学生状态' AFTER `education_level`,
MODIFY COLUMN `grade`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年级' AFTER `student_status`,
COMMENT='签到项目';

ALTER TABLE `isi_project_agent`
MODIFY COLUMN `agent_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '代理名称' AFTER `id`,
MODIFY COLUMN `project_id`  int(11) NULL DEFAULT NULL COMMENT '项目id' AFTER `agent_name`,
COMMENT='签到项目代理设置';

ALTER TABLE `isi_project_agent_role`
COMMENT='签到项目代理角色';

ALTER TABLE `isi_project_people`
MODIFY COLUMN `college_code`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学院代码' AFTER `id`,
MODIFY COLUMN `instructor_id`  bigint(20) NULL DEFAULT NULL COMMENT '辅导员id' AFTER `college_code`,
MODIFY COLUMN `clazz_id`  int(11) NULL DEFAULT NULL COMMENT '班级id' AFTER `instructor_id`,
COMMENT='签到项目人员';

ALTER TABLE `isi_project_type`
MODIFY COLUMN `type_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目类型名称' AFTER `id`,
COMMENT='签到项目类型';

ALTER TABLE `isi_sign_in`
MODIFY COLUMN `sign_in_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '签到名称' AFTER `project_id`,
MODIFY COLUMN `use_dynamic_code`  bit(1) NULL DEFAULT NULL COMMENT '是否使用动态码' AFTER `time_end`,
MODIFY COLUMN `distance`  float(10,2) NULL DEFAULT NULL COMMENT '据定位点的距离' AFTER `latitude`,
MODIFY COLUMN `address`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址' AFTER `distance`,
COMMENT='签到';


ALTER TABLE `isi_sign_in_people`
MODIFY COLUMN `sign_in_id`  int(11) NULL DEFAULT NULL COMMENT '签到id' FIRST ,
MODIFY COLUMN `sign_in_status`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '签到状态' AFTER `project_id`,
MODIFY COLUMN `sign_in_time`  datetime NULL DEFAULT NULL COMMENT '签到名称' AFTER `sign_in_status`,
MODIFY COLUMN `remark`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注' AFTER `sign_in_time`,
MODIFY COLUMN `college_code`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所属学院' AFTER `id`,
MODIFY COLUMN `instructor_id`  bigint(20) NULL DEFAULT NULL COMMENT '辅导员用户id' AFTER `college_code`,
MODIFY COLUMN `clazz_id`  int(11) NULL DEFAULT NULL COMMENT '班级id' AFTER `instructor_id`,
COMMENT='签到人员';

ALTER TABLE `isi_sign_in_range`
COMMENT='签到范围';

ALTER TABLE `mentality_config`
MODIFY COLUMN `interview_first`  bit(1) NULL DEFAULT NULL COMMENT '首次预约是否只能预约访谈' AFTER `id`,
MODIFY COLUMN `reserve_anytime`  bit(1) NULL DEFAULT NULL COMMENT '是否任何时间都可以预约' AFTER `interview_first`,
MODIFY COLUMN `hours_in_advance`  int(11) NULL DEFAULT NULL COMMENT '需提前多少小时预约' AFTER `reserve_anytime`,
MODIFY COLUMN `max_days_reserve`  int(11) NULL DEFAULT NULL COMMENT '最多提前多久预约' AFTER `hours_in_advance`,
MODIFY COLUMN `hours_can_cancel`  int(11) NULL DEFAULT NULL COMMENT '需提前多久取消预约' AFTER `max_days_reserve`,
MODIFY COLUMN `cancel_tip`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '取消预约时的提示' AFTER `hours_can_cancel`,
COMMENT='心理预约配置';

ALTER TABLE `mentality_readme`
MODIFY COLUMN `published`  bit(1) NULL DEFAULT NULL COMMENT '是否发布' AFTER `content`,
COMMENT='心理预约协议';

ALTER TABLE `mentality_reservation`
MODIFY COLUMN `first_time`  bit(1) NULL DEFAULT NULL COMMENT '是否首次预约' AFTER `scheduling_id`,
MODIFY COLUMN `readme_id`  int(11) NULL DEFAULT NULL COMMENT '协议id' AFTER `first_time`,
MODIFY COLUMN `family_members`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '家庭成员' AFTER `readme_id`,
MODIFY COLUMN `parents_marriage_situation`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '家庭婚姻情况' AFTER `family_members`,
MODIFY COLUMN `take_medicine`  bit(1) NULL DEFAULT NULL COMMENT '是否有服用药物' AFTER `parents_marriage_situation`,
MODIFY COLUMN `psychiatric_history`  bit(1) NULL DEFAULT NULL COMMENT '家庭病史' AFTER `take_medicine`,
MODIFY COLUMN `content`  varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '预约内容' AFTER `contact`,
MODIFY COLUMN `has_consulting_experience`  bit(1) NULL DEFAULT NULL COMMENT '是否有过咨询经历' AFTER `email`,
MODIFY COLUMN `score`  float(11,0) NULL DEFAULT NULL COMMENT '评分' AFTER `status`,
MODIFY COLUMN `record`  varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '咨询师填写记录' AFTER `score`,
MODIFY COLUMN `reason`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '取消原因' AFTER `record`,
COMMENT='心理预约';

ALTER TABLE `mentality_reservation_log`
COMMENT='心理预约历史';

ALTER TABLE `mentality_scheduling_day_time`
COMMENT='心理预约排班表';


ALTER TABLE `mentality_scheduling_setting`
COMMENT='心理预约排班表';

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-06 11:34:46', b'0', '出租床位', '1', '2019-03-06 11:34:46', '01', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '酗酒、赌博、斗殴、盗窃', '1', '2019-03-07 09:28:17', '02', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '私拉电线', '1', '2019-03-07 09:28:17', '03', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '留宿他人', '1', '2019-03-07 09:28:17', '04', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '使用违章电器', '1', '2019-03-07 09:28:17', '05', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '饲养宠物', '1', '2019-03-07 09:28:17', '06', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '私改电路、偷电', '1', '2019-03-07 09:28:17', '07', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '私藏管制刀具及易燃易爆品', '1', '2019-03-07 09:28:17', '08', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '破坏公物（如消防设备、开水房设备、公共洗衣机等）', '1', '2019-03-07 09:28:17', '09', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '进行宗教活动', '1', '2019-03-07 09:28:17', '10', '1311');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-07 09:28:37', b'0', '私人物品占用逃生通道', '1', '2019-03-07 09:28:17', '11', '1311');


CREATE TABLE `partybuild_users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `organization_id` int(10) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;


CREATE TABLE `partybuild_organization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '组织名称',
  `position` varchar(255) DEFAULT NULL COMMENT '职务',
  `person_in_charge` bigint(20) DEFAULT NULL COMMENT '负责人',
  `rank` varchar(255) DEFAULT NULL COMMENT '院级还是校级',
  `college` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;


INSERT INTO `sys_dict_type` (`id`, `create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('1404', '2019-03-08 15:02:02', b'0', '党支部职务', 'customDefined', '2019-03-08 15:02:02');


INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('37', NULL, b'0', '校党组织管理员', '管理所有党组织', 'schoolRole', 'systemDefined', NULL);
INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('38', NULL, b'0', '院级组织管理员', '管理院级党组织', 'collegeRole', 'systemDefined', NULL);

ALTER TABLE `student_part_time_job`
ADD COLUMN `school_year`  varchar(20) NULL AFTER `work_study_amount`,
ADD COLUMN `time_start`  datetime NULL COMMENT '开始时间' AFTER `school_year`,
ADD COLUMN `time_end`  datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '结束时间' AFTER `time_start`;


INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('schoolYear', NULL, 'String', b'1', NULL, NULL, NULL, '学年', '21');
INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('timeStart', 'yyyy-MM-dd', 'Date', b'1', 1, NULL, NULL, '开始时间', '21');
INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('timeEnd', 'yyyy-MM-dd', 'Date', b'1', 1, NULL, NULL, '结束时间', '21');


UPDATE `data_definition_column` SET `column_option`=NULL, `data_type`='String' WHERE `column_name`='type' AND `type_id`=21;
UPDATE `data_definition_column` SET `column_option`=NULL, `data_type`='String' WHERE `column_name`='unitType' AND `type_id`=21;

INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('105', 'SECOND_CLASS_ACTIVITY_TYPE_STAT', '2', '活动整体情况统计', 'configurable', '23', NULL, '/activityManage/typeStat', '42');

INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('23', '105');

ALTER TABLE `unit`
ADD COLUMN `sort`  int(11) NULL COMMENT '排序值' AFTER `person_in_charge`;

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-22 10:15:10', b'0', '入党积极分子', '30', '2019-03-22 10:15:15', '14', '1011');

UPDATE data_definition_column set data_type='String' WHERE data_type='Strng';

INSERT INTO `sys_dict_type` (`id`, `create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('3333', '2019-03-08 15:02:02', b'0', '党支部职务', 'customDefined', '2019-03-08 15:02:02');

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-08 15:02:02', b'0', '书记', '1', '2019-03-08 15:02:02', '1552028503435', '3333');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-08 15:02:02', b'0', '副书记', '2', '2019-03-08 15:02:02', '1552028507835', '3333');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-08 15:02:02', b'0', '组织委员', '3', '2019-03-08 15:02:02', '1552028512987', '3333');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-08 15:02:02', b'0', '宣传委员', '4', '2019-03-08 15:02:02', '1552028516099', '3333');



CREATE TABLE `apartment_assets` (
  `assets_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '房间room主键关联',
  `room_id` int(11) NOT NULL,
  `assets_type` text NOT NULL COMMENT '资产种类',
  `assets_number` int(11) NOT NULL COMMENT '资产数量',
  `assets_state` varchar(255) NOT NULL COMMENT '资产状态',
  `note` text COMMENT '备注',
  `records` varchar(255) DEFAULT NULL COMMENT '操作记录',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  PRIMARY KEY (`assets_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4;


INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('99', 'COLLEGE_PARTY_BUILD_ORGANIZATION', '2', '院级党组织管理', 'configurable', '99', NULL, '/partyBuilding/hospitalLeveOrganizationManage', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('101', 'PARTY_BUILD', '1', '党建', NULL, '101', NULL, NULL, NULL);
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('102', 'PARTY_MEMBER_MANAGE', '2', '党员管理', 'configurable', '100', NULL, '/partyBuilding/partyMemberManage', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('103', 'APARTMENT_ASSETS_MANAGE', '2', '公寓资产管理', 'requiredApartment', '102', NULL, '/apartment/apartmentAssetsManage', '70');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('104', 'SCHOOL_PARTY_BUILD_ORGANIZATION', '2', '校级党组织管理', 'configurable', '103', NULL, '/partyBuilding/schoolLeveOrganizationManage', '101');

INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('38', '99');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('37', '104');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('37', '102');


CREATE TABLE `student_party_build_info` (
  `user_id` bigint(20) NOT NULL,
  `join_time` datetime DEFAULT NULL,
  `correction_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `recommend_party_organizations` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `logs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:57:37', b'0', '未设置', '1', '2019-03-12 13:57:37', '1552370235441', '1268');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:57:37', b'0', '是加长床', '2', '2019-03-12 13:57:37', '1552370253727', '1268');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:57:37', b'0', '不是加长床', '3', '2019-03-12 13:57:37', '1552370259942', '1268');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:58:31', b'0', '未设置', '1', '2019-03-12 13:58:31', '1552370290295', '1267');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:58:31', b'0', '上下铺', '2', '2019-03-12 13:58:31', '1552370298199', '1267');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:58:31', b'0', '组合式家具', '3', '2019-03-12 13:58:31', '1552370308366', '1267');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:58:31', b'0', '分离式家具', '4', '2019-03-12 13:58:31', '1552370316633', '1267');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:59:19', b'0', '未设置', '1', '2019-03-12 13:59:19', '1552370349498', '1266');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:59:19', b'0', '公共卫生间', '2', '2019-03-12 13:59:19', '1552370357631', '1266');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:59:19', b'0', '独立卫生间', '3', '2019-03-12 13:59:19', '1552370364193', '1266');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '未设置', '1', '2019-03-12 14:09:17', '1552370417855', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '爱心房', '2', '2019-03-12 14:09:17', '1552370427208', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '不宜居住', '3', '2019-03-12 14:09:17', '1552370437263', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '储备辅导员值班室', '4', '2019-03-12 14:09:17', '1552370452143', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '残障房', '5', '2019-03-12 14:09:17', '1552370465192', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '电控用房', '6', '2019-03-12 14:09:17', '1552370475630', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '额外占用', '7', '2019-03-12 14:09:17', '1552370482816', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '辅导员工作室', '8', '2019-03-12 14:09:17', '1552370494231', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '辅导员园区办公室', '9', '2019-03-12 14:09:17', '1552370518743', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '公寓办辅导员值班室', '10', '2019-03-12 14:09:17', '1552370534192', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '基建处用房', '11', '2019-03-12 14:09:17', '1552370557384', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '监控房', '12', '2019-03-12 14:09:17', '1552370565431', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '开水房', '13', '2019-03-12 14:09:17', '1552370570127', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '配电室', '14', '2019-03-12 14:09:17', '1552370584374', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '网络用房', '15', '2019-03-12 14:09:17', '1552370708367', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '物业管理站', '16', '2019-03-12 14:09:17', '1552370719030', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '其他用房', '17', '2019-03-12 14:09:17', '1552370886381', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '选培办使用房', '18', '2019-03-12 14:09:17', '1552370909119', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '学生用房', '19', '2019-03-12 14:09:17', '1552370915598', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '洗衣房', '20', '2019-03-12 14:09:17', '1552370924919', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '园区辅导员夜间值班室', '21', '2019-03-12 14:09:17', '1552370946422', '1265');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 14:09:08', b'0', '暂不安排', '22', '2019-03-12 14:09:17', '1552370953398', '1265');

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:56:39', b'0', '未设置', '1', '2019-03-12 13:56:39', '1552370192864', '1269');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:56:39', b'0', '有阳台', '2', '2019-03-12 13:56:39', '1552370197910', '1269');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) VALUES ('2019-03-12 13:56:39', b'0', '无阳台', '3', '2019-03-12 13:56:39', '1552370201871', '1269');

COMMIT;
SET @@autocommit=1;

