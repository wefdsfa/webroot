ALTER TABLE `student_status_info`
ADD COLUMN `current_school_status`  varchar(255) NULL COMMENT '当前在校状态（用于签到人员限制）';

ALTER TABLE `isi_project`
ADD COLUMN `current_school_status`  varchar(255) NULL ;

ALTER TABLE `sc_activity_content_type`
ADD COLUMN `point`  float(10,2) NULL DEFAULT 1 ;




CREATE TABLE `sc_activity_participant_point` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `normal_participant` float(10,2) DEFAULT NULL,
  `organizer` float(10,2) DEFAULT NULL,
  `manager` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;



ALTER TABLE `sc_activity`
ADD COLUMN `content_type_point`  float(10,2) NULL DEFAULT 1 ,
ADD COLUMN `normal_participant_point`  float(10,2) NULL DEFAULT 1 AFTER `content_type_point`,
ADD COLUMN `organizer_point`  float(10,2) NULL DEFAULT 1 AFTER `normal_participant_point`,
ADD COLUMN `manager_point`  float(10,2) NULL DEFAULT 1 AFTER `organizer_point`;



ALTER TABLE `mentality_student_info`
ADD COLUMN `consulting_date`  date NULL ,
ADD COLUMN `consulting_address`  varchar(1024) NULL AFTER `consulting_date`,
ADD COLUMN `consulting_main_content`  varchar(1024) NULL AFTER `consulting_address`,
ADD COLUMN `has_psychiatric_history`  bit(1) NULL AFTER `consulting_main_content`,
ADD COLUMN `local_consulting_hours`  date NULL AFTER `has_psychiatric_history`,
ADD COLUMN `hospital`  varchar(255) NULL AFTER `local_consulting_hours`,
ADD COLUMN `doctor`  varchar(20) NULL AFTER `hospital`,
ADD COLUMN `drug`  varchar(255) NULL AFTER `doctor`;


ALTER TABLE `mentality_reservation`
ADD COLUMN `consulting_date`  date NULL DEFAULT NULL ,
ADD COLUMN `consulting_address`  varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `consulting_date`,
ADD COLUMN `consulting_main_content`  varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `consulting_address`,
ADD COLUMN `has_psychiatric_history`  bit(1) NULL DEFAULT NULL AFTER `consulting_main_content`,
ADD COLUMN `local_consulting_hours`  date NULL DEFAULT NULL AFTER `has_psychiatric_history`,
ADD COLUMN `hospital`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `local_consulting_hours`,
ADD COLUMN `doctor`  varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `hospital`,
ADD COLUMN `drug`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL AFTER `doctor`;