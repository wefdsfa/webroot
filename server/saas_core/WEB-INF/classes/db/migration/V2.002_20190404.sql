
SET @@autocommit=0;
START TRANSACTION;

ALTER TABLE `message_setting`
ADD COLUMN `is_system` varchar(1) NULL DEFAULT 0 COMMENT '默认为0消息通知，1为系统消息' AFTER `setting_no`;
INSERT INTO `message_setting`(`id`, `notify_id`, `sender_name`, `start_time`, `end_time`, `title_setting`, `content_setting`, `setting_no`, `is_system`) VALUES (3, NULL, b'0', b'1', b'1', '{{title}}', '{{content}}', 3, '0');

COMMIT;
SET @@autocommit=1;