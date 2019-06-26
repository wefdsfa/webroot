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
