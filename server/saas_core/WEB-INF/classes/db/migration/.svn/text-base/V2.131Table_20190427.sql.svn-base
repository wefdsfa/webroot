ALTER TABLE `pwps_position_salary`
ADD COLUMN `remark`  varchar(1024) NULL AFTER `total_pay_mount`;



CREATE TABLE `data_definition_column_role` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `data_definition_column_id` int(11) NOT NULL,
  `flow_type` varchar(50) DEFAULT NULL COMMENT 'SCHOOL(全校),COLLEGE(本院),INSTRUCTOR(分管)',
  `role_type` varchar(50) DEFAULT NULL COMMENT 'CANNOT_EXPORT禁止导出',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
