SET @@autocommit=0;
START TRANSACTION;

ALTER TABLE `message_push_user`
ADD COLUMN `confirm_flag` bit(1) NULL DEFAULT 0 COMMENT '0,否，1是'  ,
ADD COLUMN `is_recalled` varchar(255) NULL DEFAULT 0  AFTER `confirm_flag`;

INSERT INTO `authority_role`(`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES (42, NULL, b'0', '全校消息发送管理员', '可以发送消息给全校', 'schoolRole', 'systemDefined', NULL);
INSERT INTO `authority_role`(`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES (43, NULL, b'0', '院级消息发送管理员', '可以发送消息给学院', 'collegeRole', 'systemDefined', NULL);

INSERT INTO `authority_role`(`id`, `create_time`, `is_delete`, `name`, `remark`, `rank`, `source`, `update_time`) VALUES (45, NULL, b'0', '班主任消息发送', '可以发送消息给班主任对应班级的人员', 'collegeRole', 'systemDefined', NULL);

COMMIT;
SET @@autocommit=1;