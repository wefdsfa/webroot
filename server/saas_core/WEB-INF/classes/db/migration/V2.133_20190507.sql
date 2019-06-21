
SET @@autocommit=0;
START TRANSACTION;


INSERT INTO `data_definition_type` (`id`, `bean_name`, `data_definition_type`, `enable`, `is_multiple`, `name`, `title`, `type`) VALUES ('115', 'com.xchs.saas_core.module.document.entity.po.StudentPartyBuildInfoPO', 'system', b'0', b'0', 'student_party_build_info', '学生党建信息', 'student');

INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('partyBuildOrganization', NULL, 'String', b'1', '1', 'system', b'0', '所属党支部', '115');



COMMIT;
SET @@autocommit=1;