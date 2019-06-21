
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

ALTER TABLE `student_status_info`
ADD COLUMN `tutor_name` varchar(255) NULL AFTER `part_time_instructor_id`;

CREATE TABLE `tutor_user`  (
  `id` bigint(20) NOT NULL,
  `tutor_name` varchar(255) NULL DEFAULT NULL,
  `tutor_id` bigint(20) NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `tutor_user`
ADD COLUMN `user_id` bigint(20) NULL AFTER `tutor_id`,
ADD COLUMN `user_no` varchar(0) NULL AFTER `user_id`;

ALTER TABLE `tutor_user`
MODIFY COLUMN `id` bigint(20) NOT NULL AUTO_INCREMENT FIRST;

ALTER TABLE `tutor_user`
MODIFY COLUMN `user_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL AFTER `user_id`;

UPDATE `authority_menu` SET  `url` = '/relationship/relationshipManage/collegeInstructor?id=collegeInstructor'  WHERE `id` = 109;
UPDATE `authority_menu` SET  `url` = '/relationship/relationshipManage/schoolInstructor?id=schoolInstructor'  WHERE `id` = 108;

INSERT INTO `message_setting`(`id`, `notify_id`, `sender_name`, `start_time`, `end_time`, `title_setting`, `content_setting`, `setting_no`, `is_system`) VALUES (4, NULL, b'0', b'1', b'1', '{{title}}', '{{content}}', 4, '1');


COMMIT;
SET @@autocommit=1;