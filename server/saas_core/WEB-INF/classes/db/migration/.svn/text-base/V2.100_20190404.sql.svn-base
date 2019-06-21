SET @@autocommit=0;
START TRANSACTION;

ALTER TABLE `mentality_reservation`
MODIFY COLUMN `score`  float(11,1) NULL DEFAULT NULL COMMENT '咨询师给学生的评分' AFTER `status`,
ADD COLUMN `teacher_score`  float(11,1) NULL COMMENT '学生给咨询师的评分' AFTER `reason`,
ADD COLUMN `student_evaluation`  varchar(1024) NULL COMMENT '学生的评价' AFTER `teacher_score`;


INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('40', NULL, b'0', '心理预约助理', '协助管理员设置心理预约相关信息', 'schoolRole', 'systemDefined', NULL);

INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('40', '58');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('40', '59');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('40', '60');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('40', '61');



ALTER TABLE `mentality_scheduling_day_time_teacher`
ADD COLUMN `is_visual`  bit(1) NULL COMMENT '是否可见' AFTER `log_id`;

UPDATE mentality_scheduling_day_time_teacher SET is_visual=1;


ALTER TABLE `isi_project`
ADD COLUMN `level`  varchar(10) NULL AFTER `grade`,
ADD COLUMN `college`  varchar(10) NULL AFTER `level`;


CREATE TABLE `isi_project_exclude_people` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `project_id` int(10) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('41', NULL, b'0', 'i签到院级管理员', '创建管理院级签到', 'collegeRole', 'systemDefined', NULL);


UPDATE isi_project SET level='SCHOOL';



CREATE TABLE `address_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16381 DEFAULT CHARSET=utf8mb4;

INSERT INTO address_value (value,label) SELECT value,label from sys_dict where type_id=1013;

update address_value set province = if(RIGHT(value,4)='0000',value,CONCAT(LEFT(value,2),'0000')),city=if(RIGHT(value,4)='0000',null,if(RIGHT(value,2)='00',value,CONCAT(LEFT(value,4),'00')));

update address_value set province=null where province=value;

update address_value set city=null where city=value;

update address_value t1,(select * from sys_dict where type_id=1013)t2 set t1.city=t2.label where t1.city=t2.value;

update address_value t1,(select * from sys_dict where type_id=1013)t2 set t1.province=t2.label where t1.province=t2.value;

update address_value set label=concat(concat(if(province is null,'',province),if(city is null,'',city)),label);

UPDATE `data_definition_type` SET `bean_name`='com.xchs.saas_core.module.document.entity.po.StudentExemptTuitionPO' WHERE bean_name='com.xchs.saas_core.module.document.entity.po.SudentExemptTuitionPO' LIMIT 1;


COMMIT;
SET @@autocommit=1;

