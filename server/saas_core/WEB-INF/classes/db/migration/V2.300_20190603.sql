SET @@autocommit=0;
START TRANSACTION;



INSERT INTO `sys_dict_type` (`create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('2019-06-04 15:17:48', b'0', '组织关系', 'customDefined', '2019-06-04 15:17:49');

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT  '2019-06-04 15:19:38', b'0', '组织关系在校', '1', '2019-06-04 15:20:33', '11', id FROM sys_dict_type WHERE `name`='组织关系';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT  '2019-06-04 15:20:00', b'0', '组织关系已转出', '1', '2019-06-04 15:20:32', '12', id FROM sys_dict_type WHERE `name`='组织关系';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT  '2019-06-04 15:20:25', b'0', '组织关系未转入', '1', '2019-06-04 15:20:32', '13', id FROM sys_dict_type WHERE `name`='组织关系';


INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('53', NULL, b'0', '全校党员信息负责人', NULL, 'schoolRole', 'systemDefined', NULL);
INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('55', NULL, b'0', '学院党员信息负责人', NULL, 'collegeRole', 'systemDefined', NULL);


INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('applyTime', 'yyyy-MM-dd', 'Date', b'1', '1', 'system', b'0', '申请入党时间', '115');
INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('trainingAndDevelopmentStage', '培养发展阶段', 'Dict', b'1', '1', 'system', b'0', '培养发展阶段', '2');
INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('organizationRelationship', '组织关系', 'Dict', b'1', '1', 'system', b'0', '组织关系', '2');


UPDATE `authority_role` SET `name`='校级党组织管理员' WHERE (`id`='37') LIMIT 1;
UPDATE `authority_role` SET `name`='院级党组织管理员' WHERE (`id`='38') LIMIT 1;



INSERT INTO `sys_dict_type` (`create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('2019-06-05 14:26:03', b'0', '支委身份', 'customDefined', '2019-06-05 14:26:03');

INSERT INTO `sys_dict_type` (`create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('2019-06-05 14:37:23', b'0', '培养发展阶段', 'customDefined', '2019-06-05 14:37:26');
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT  '2019-06-05 14:38:31', b'0', '入党申请人', '30', '2019-06-05 14:39:15', '1', id  FROM sys_dict_type WHERE name='培养发展阶段';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT  '2019-06-05 14:38:49', b'0', '入党积极分子', '30', '2019-06-05 14:39:12', '2', id  FROM sys_dict_type WHERE name='培养发展阶段';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT  '2019-06-05 14:38:52', b'0', '发展对象', '30', '2019-06-05 14:39:09', '3', id  FROM sys_dict_type WHERE name='培养发展阶段';

INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('57', NULL, b'0', '党支部副书记', NULL, 'otherRole', 'systemDefined', NULL);
INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('59', NULL, b'0', '组织委员', NULL, 'otherRole', 'systemDefined', NULL);
INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('61', NULL, b'0', '宣传委员', NULL, 'otherRole', 'systemDefined', NULL);
UPDATE `authority_role` SET `name`='党支部书记',rank='otherRole' WHERE (`id`='39') LIMIT 1;


DELETE FROM authority_menu WHERE id=102;
DELETE FROM rel_role_menu WHERE menu_id=102;
DELETE FROM rel_role_menu WHERE menu_id=99;
DELETE FROM authority_menu WHERE id=99;
UPDATE authority_menu SET name='党组织管理' WHERE id=104;
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('38', '104');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('1', '104');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('53', '127');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('53', '133');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('55', '135');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('55', '129');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('1', '137');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('1', '131');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('57', '104');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('59', '104');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('61', '104');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('39', '104');


INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('127', 'SCHOOL_PARTY_MEMBER_MANAGE', '2', '全校党员管理', 'configurable', '115', NULL, '/partyBuilding/partyManage/school?id=school', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('129', 'COLLEGE_PARTY_MEMBER_MANAGE', '2', '本院党员管理', 'configurable', '116', NULL, '/partyBuilding/partyManage/college?id=college', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('131', 'MY_MANAGE_PARTY_MEMBER_MANAGE', '2', '分管党员管理', 'configurable', '117', NULL, '/partyBuilding/partyManage/myManage?id=myManage', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('133', 'SCHOOL_PARTY_TRAIN', '2', '全校培养发展管理', 'configurable', '118', NULL, '/partyBuilding/partyTrain/school?id=school', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('135', 'COLLEGE_PARTY_TRAIN', '2', '本院培养发展管理', 'configurable', '119', NULL, '/partyBuilding/partyTrain/college?id=college', '101');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('137', 'MY_MANAGE_PARTY_TRAIN', '2', '分管培养发展管理', 'configurable', '120', NULL, '/partyBuilding/partyTrain/myManage?id=myManage', '101');


COMMIT;
SET @@autocommit=1;