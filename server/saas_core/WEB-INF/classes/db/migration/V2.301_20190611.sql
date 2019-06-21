SET @@autocommit=0;
START TRANSACTION;

INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('correctionTime', 'yyyy-MM-dd', 'Date', b'1', '1', 'system', b'0', '转正时间', '115');
INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('recommendPartyOrganizations', NULL , 'String', b'1', '1', 'system', b'0', '发展入党的党组织', '115');
UPDATE `authority_role` SET `remark`='管理全校党员及培养发展' WHERE (`id`='53') LIMIT 1;
UPDATE `authority_role` SET `remark`='管理本院党员及培养发展' WHERE (`id`='55') LIMIT 1;

COMMIT;
SET @@autocommit=1;



