
SET @@autocommit=0;
START TRANSACTION;

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