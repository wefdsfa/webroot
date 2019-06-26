
SET @@autocommit=0;
START TRANSACTION;

INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (42, 106);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (43, 106);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (45, 106);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (1, 106);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (42, 107);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (43, 107);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (45, 107);
INSERT INTO `rel_role_menu`(`role_id`, `menu_id`) VALUES (1, 107);

INSERT INTO `authority_menu`(`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `parent_id`) VALUES (106, 'MESSAGE_BOX', 1, '消息盒子', NULL, 104, NULL, NULL);
INSERT INTO `authority_menu`(`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES (107, 'PLATORM_MESSAGE', 2, '平台消息盒子', 'configurable', 105, NULL, '/messageBox/messageManage', 106);

COMMIT;
SET @@autocommit=1;