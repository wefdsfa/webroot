
SET @@autocommit=0;
START TRANSACTION;

DELETE FROM `data_definition_column` where `column_name`= 'partTimeInstructorId' AND `type_id`=2;
INSERT INTO `data_definition_column` (`column_name`, `column_option`, `edit`, `title`, `type_id`, `data_type`, `status`, `definition_type`, `is_multiple`) VALUES ( 'partTimeInstructorId', NULL, b'1', '兼职辅导员', '2', 'Instructor', '1', 'system', b'0');

UPDATE `data_definition_column` SET `data_type`='Dict' WHERE `column_name`='onGuardStatus'AND type_id=75;


DELETE FROM rel_user_role WHERE role_id=21;

COMMIT;
SET @@autocommit=1;