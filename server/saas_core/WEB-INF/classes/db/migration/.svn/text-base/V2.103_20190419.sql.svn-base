

SET @@autocommit=0;
START TRANSACTION;

INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('48', NULL, b'0', '学院宿舍分配管理员', NULL, 'collegeRole', 'systemDefined', NULL);
INSERT INTO `authority_role` (`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES ('49', NULL, b'0', '学校宿舍分配管理员', NULL, 'schoolRole', 'systemDefined', NULL);

INSERT INTO `sys_dict_type` (`create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('2019-04-19 18:08:12', b'0', '在岗状态', 'customDefined', '2019-04-19 18:08:26');


INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT '2019-04-19 18:12:33', b'0', '在岗', '1', '2019-04-19 18:13:34', '01', id FROM sys_dict_type WHERE name='在岗状态';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT '2019-04-19 18:12:39', b'0', '不在岗', '2', '2019-04-19 18:13:36', '02', id FROM sys_dict_type WHERE name='在岗状态';

INSERT INTO `data_definition_column` (`column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('onGuardStatus', '在岗状态', 'String', b'1', '1', 'system', b'0', '在岗状态', '75');

UPDATE `authority_menu` SET `parent_id`='110' WHERE (`id`='10') LIMIT 1;
UPDATE `authority_menu` SET `parent_id`='110' WHERE (`id`='12') LIMIT 1;

INSERT INTO `department_rule` (`id`, `name`, `remark`, `role_id`) VALUES ('3', '第二课堂', '管理第二课堂校级组织', '21');

UPDATE `department_rule` SET `role_id`='10' WHERE (`name`='应用管理') LIMIT 1;
UPDATE `department_rule` SET `role_id`='9' WHERE (`name`='人员管理') LIMIT 1;

UPDATE `authority_role` SET `rank`='otherRole' WHERE (`id`='21') LIMIT 1;

INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (6, 106);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (6, 107);

INSERT INTO `authority_role`(`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES (46, NULL, b'0', '全校导师带生关系负责人', '查看管理全校学生与导师的对应关系', 'schoolRole', 'systemDefined', NULL);
INSERT INTO `authority_role`(`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES (47, NULL, b'0', '院级导师带生关系负责人', '查看管理院级学生与导师的对应关系', 'collegeRole', 'systemDefined', NULL);

INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (46, 108);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (46, 109);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (47, 108);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (47, 109);

INSERT INTO `authority_menu`(`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES (108, 'TUTOR_SCHOOL', 2, '本校导师带生关系设置', 'configurable', 106, NULL, NULL, 37);
INSERT INTO `authority_menu`(`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES (109, 'TUROR_COLLEGE', 2, '本院导师带生关系设置', 'configurable', 107, NULL, NULL, 37);

UPDATE `authority_menu` SET  `url` = '/relationship/relationshipManage/collegeInstructor?id=collegeInstructor'  WHERE `id` = 109;
UPDATE `authority_menu` SET  `url` = '/relationship/relationshipManage/schoolInstructor?id=schoolInstructor'  WHERE `id` = 108;

INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('110', 'TOP_DEPARTMENT_MANAGEMENT', '1', '部门管理', NULL, '108', NULL, NULL, NULL);
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('114', 'MY_ORGANIZATION', '2', '我的组织', 'requiredLogin', '1', NULL, '/activityManage/myOrganization', '42');

COMMIT;
SET @@autocommit=1;