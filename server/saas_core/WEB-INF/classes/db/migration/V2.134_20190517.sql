
SET @@autocommit=0;
START TRANSACTION;

INSERT INTO `sc_activity_participant_point` (`id`, `normal_participant`, `organizer`, `manager`) VALUES ('1', '0', '0', '0');



INSERT INTO `rel_student_advanced_search` ( `type_id`, `column_id`) SELECT type_id,id FROM data_definition_column WHERE column_name='sex' AND type_id=1;
INSERT INTO `rel_student_advanced_search` ( `type_id`, `column_id`) SELECT type_id,id FROM data_definition_column WHERE column_name='faith' AND type_id=1;
INSERT INTO `rel_student_advanced_search` ( `type_id`, `column_id`) SELECT type_id,id FROM data_definition_column WHERE column_name='originPlace' AND type_id=1;

INSERT INTO `data_definition_column` ( `column_name`, `column_option`, `data_type`, `edit`, `status`, `definition_type`, `is_multiple`, `title`, `type_id`) VALUES ('currentSchoolStatus', '当前在校状态', 'Dict', b'1', '1', 'system', b'0', '当前在校状态', '2');

INSERT INTO `sys_dict_type` ( `create_time`, `is_delete`, `name`, `rank`, `update_time`) VALUES ('2019-05-09 16:54:40', b'0', '当前在校状态', 'customDefined', '2019-05-09 16:54:55');

INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT '2018-10-21 04:00:00', b'0', '在校', '1', '2018-10-21 04:00:00', '1', id FROM sys_dict_type WHERE `name`= '当前在校状态';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT '2018-10-21 04:00:00', b'0', '请假', '1', '2018-10-21 04:00:00', '2', id FROM sys_dict_type WHERE `name`= '当前在校状态';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT '2018-10-21 04:00:00', b'0', '外出实习', '1', '2018-10-21 04:00:00', '3', id FROM sys_dict_type WHERE `name`= '当前在校状态';
INSERT INTO `sys_dict` (`create_time`, `is_delete`, `label`, `sort`, `update_time`, `value`, `type_id`) SELECT '2018-10-21 04:00:00', b'0', '其他', '1', '2018-10-21 04:00:00', '4', id FROM sys_dict_type WHERE `name`= '当前在校状态';

INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('23', '115');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('23', '117');
INSERT INTO `rel_role_menu` (`role_id`, `menu_id`) VALUES ('23', '119');

INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('115', 'SET_ACTIVITY_POINT', '2', '配置活动积分', 'configurable', '23', NULL, '/activityManage/setActivityPoint', '42');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('117', 'APPLY_ACTIVITY', '2', '发布活动', 'configurable', '24', NULL, '/activityManage/creatActivity', '42');
INSERT INTO `authority_menu` (`id`, `code`, `level`, `name`, `rank`, `sort`, `icon`, `url`, `parent_id`) VALUES ('119', 'USER_PORTRAIT', '2', '用户画像', 'configurable', '25', NULL, '/activityManage/userPortrait', '42');


COMMIT;
SET @@autocommit=1;