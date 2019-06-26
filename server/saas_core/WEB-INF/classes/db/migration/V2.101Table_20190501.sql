
ALTER TABLE `student_subsidies`
MODIFY COLUMN `start_year_month`  date NULL DEFAULT NULL COMMENT '始发年月' ,
MODIFY COLUMN `end_year_month`  date NULL DEFAULT NULL COMMENT '停发年月' ;


ALTER TABLE `instructor_base_info`
ADD COLUMN `on_guard_status`  varchar(255) NULL AFTER `is_delete`;

ALTER TABLE `department_rule`
ADD COLUMN `role_id`  int NULL AFTER `remark`;


ALTER TABLE `sc_organization`
ADD COLUMN `department_id`  int NULL AFTER `create_time`;


ALTER TABLE `sc_organization_duty`
ADD COLUMN `title_id`  int(10) NULL AFTER `create_time`;



ALTER TABLE `sc_organization_duty`
ADD COLUMN `organization_member_id`  int(10) NULL AFTER `title_id`;

CREATE TABLE `tutor_user`  (
  `id` bigint(20) NOT NULL,
  `tutor_name` varchar(255) NULL DEFAULT NULL,
  `tutor_id` bigint(20) NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `tutor_user`
ADD COLUMN `user_id` bigint(20) NULL AFTER `tutor_id`,
ADD COLUMN `user_no` varchar(0) NULL AFTER `user_id`;

ALTER TABLE `tutor_user`
MODIFY COLUMN `id` bigint(20) NOT NULL AUTO_INCREMENT FIRST;

ALTER TABLE `tutor_user`
MODIFY COLUMN `user_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL AFTER `user_id`;



ALTER TABLE `student_status_info`
ADD COLUMN `tutor_name` varchar(255) NULL AFTER `part_time_instructor_id`;



ALTER TABLE `business_limit`
ADD COLUMN `school_status`  varchar(1024) NULL COMMENT '学生在校状态 “,” 分割多条' AFTER `student_type`;

CREATE TABLE `user_external_account` (
  `user_id` bigint(20) unsigned NOT NULL,
  `yiban_user_id` varchar(255) DEFAULT NULL,
  `yiban_access_token` varchar(1024) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `app_report_count_condition`;
CREATE TABLE `app_report_count_condition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count_id` int(11) DEFAULT NULL COMMENT '计算方式count-id',
  `table_child_name` varchar(255) NOT NULL COMMENT '表格里的控件',
  `value` varchar(255) DEFAULT NULL COMMENT '约束条件值',
  `relation` varchar(10) DEFAULT NULL COMMENT '且或者或的关系',
  `type` varchar(255) DEFAULT NULL COMMENT '约束关系式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;


ALTER TABLE `sc_organization_member`
ADD COLUMN `college_code`  varchar(255) NULL ;


CREATE TABLE `sc_organization_title` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '职务名称',
  `org_department_id` int(11) DEFAULT NULL COMMENT '组织部门id',
  `organization_id` int(11) DEFAULT NULL COMMENT '组织id',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `is_forbidden` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `sc_organization_department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `org_department_name` varchar(255) DEFAULT NULL,
  `is_forbidden` bit(1) DEFAULT NULL COMMENT '是否禁用',
  `organization_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;



CREATE TABLE `document_change_logs` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type_id` int(10) DEFAULT NULL,
  `column_name` varchar(255) DEFAULT NULL,
  `value_before` varchar(255) DEFAULT NULL,
  `value_after` varchar(255) DEFAULT NULL,
  `modified_user_id` bigint(20) DEFAULT NULL,
  `source` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `revise_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;


