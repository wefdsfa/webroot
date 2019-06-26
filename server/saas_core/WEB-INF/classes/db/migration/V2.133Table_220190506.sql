ALTER TABLE `student_party_build_info`
ADD COLUMN `party_build_organization`  varchar(255) NULL COMMENT '所属支部' ;



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


ALTER TABLE `student_status_info`
ADD COLUMN `current_school_status`  varchar(255) NULL COMMENT '当前在校状态（用于签到人员限制）';

ALTER TABLE `isi_project`
ADD COLUMN `current_school_status`  varchar(255) NULL ;


