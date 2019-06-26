SET @@autocommit=0;
START TRANSACTION;

ALTER TABLE `student_status_info`
ADD COLUMN `part_time_instructor_id`  bigint(20) NULL AFTER `update_time`;



ALTER TABLE `announcement`
MODIFY COLUMN `content`  longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL AFTER `college`;

CREATE TABLE `user_school_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dict_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4;


update sys_dict set label='毛南族' where label='毛难族';



CREATE TABLE `app_report_count` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count_name` varchar(255) DEFAULT NULL,
  `count_way` varchar(255) DEFAULT NULL,
  `component` varchar(255) DEFAULT NULL,
  `report_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `app_report_name` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_name` varchar(255) DEFAULT NULL,
  `app_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `isi_sign_in`
ADD COLUMN `is_location`  bit(1) NULL DEFAULT NULL COMMENT '是否使用定位' AFTER `is_delete`,
ADD COLUMN `longitude`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `is_location`,
ADD COLUMN `latitude`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `longitude`,
ADD COLUMN `distance`  float(10,2) NULL AFTER `latitude`,
ADD COLUMN `address`  varchar(255) NULL AFTER `distance`;

CREATE TABLE `app_collect` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `app_id` int(11) unsigned NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `business`
ADD COLUMN `create_time`  datetime NULL AFTER `app_id`,
ADD COLUMN `update_time`  datetime NULL ON UPDATE CURRENT_TIMESTAMP AFTER `create_time`;

ALTER TABLE `app`
ADD COLUMN `publish_time`  datetime NULL AFTER `department_id`;

ALTER TABLE `business`
ADD COLUMN `publish_time`  datetime NULL AFTER `update_time`;

UPDATE app SET publish_time = update_time WHERE is_published = TRUE;
UPDATE business SET publish_time = update_time WHERE is_public = TRUE AND is_enable = TRUE;
ALTER TABLE `isi_sign_in_people`
ADD COLUMN `longitude`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `update_user_id`,
ADD COLUMN `latitude`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `longitude`,
ADD COLUMN `distance`  float(10,2) NULL DEFAULT NULL AFTER `latitude`,
ADD COLUMN `address`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `distance`;



ALTER TABLE `isi_sign_in`
ADD COLUMN `sign_in_type`  varchar(20) NULL COMMENT '签到类型（扫码SCAN，定位LOCATION）' AFTER `address`;



UPDATE isi_sign_in SET is_location=0,sign_in_type='SCAN';

INSERT INTO `message_setting` VALUES (1, NULL, b'0', b'1', b'1', '{{title}}的缴费通知', '请{{title}}的同学于{{finishTime}}前完成缴费，以免带来不必要的麻烦', 1);
INSERT INTO `message_setting` VALUES (2, NULL, b'0', b'1', b'1', '{{title}}', '{{content}}', 2);

CREATE TABLE `isi_sign_in_range` (
  `sign_in_id` int(10) DEFAULT NULL,
  `longitude` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `latitude` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `distance` float(10,2) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `sys_quick_service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link_name` varchar(255) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `location` int(5) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

COMMIT;
SET @@autocommit=1;