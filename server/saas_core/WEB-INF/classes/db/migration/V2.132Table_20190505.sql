ALTER TABLE `sc_organization_duty`
     MODIFY COLUMN `name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL AFTER `user_id`;


ALTER TABLE `sc_organization_duty`
     MODIFY COLUMN `organization_id`  int(10) UNSIGNED NULL AFTER `id`;


ALTER TABLE `sc_organization_duty`
MODIFY COLUMN `user_id`  bigint(20) NULL AFTER `organization_id`;