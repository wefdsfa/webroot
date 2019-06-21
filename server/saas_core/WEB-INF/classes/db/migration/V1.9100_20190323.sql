CREATE TABLE `apartment_statistic_building` (
  `campus_name` varchar(255) DEFAULT NULL,
  `zone_name` varchar(255) DEFAULT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `tot_room` int(4) DEFAULT NULL,
  `tot_bed` int(4) DEFAULT NULL,
  `tot_user` int(4) DEFAULT NULL,
  `condition_room` int(4) DEFAULT NULL,
  `condition_user` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `apartment_statistic_room` (
  `campus_id` varchar(255) DEFAULT NULL,
  `zone_id` int(4) DEFAULT NULL,
  `building_id` int(4) DEFAULT NULL,
  `room_id` int(4) DEFAULT NULL,
  `used_for` varchar(255) DEFAULT NULL,
  `toilet` varchar(255) DEFAULT NULL,
  `have_balcony` varchar(255) DEFAULT NULL,
  `max_number` int(4) DEFAULT NULL,
  `left_number` int(4) DEFAULT NULL,
  `living_status` varchar(255) DEFAULT NULL,
  `date_of_statistic` int(8) DEFAULT NULL,
  UNIQUE KEY `room_id` (`room_id`,`date_of_statistic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `apartment_statistic_user` (
  `campus_id` varchar(255) DEFAULT NULL,
  `zone_id` int(4) DEFAULT NULL,
  `building_id` int(4) DEFAULT NULL,
  `room_id` int(4) DEFAULT NULL,
  `bed_id` int(4) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `user_no` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `education_level` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `user_check_in_status` varchar(255) DEFAULT NULL,
  `in_time` date DEFAULT NULL,
  `out_time` date DEFAULT NULL,
  `date_of_statistic` int(11) DEFAULT NULL,
  UNIQUE KEY `user_id` (`user_id`,`date_of_statistic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `apartment_operation_record` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `operation` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `operator_type` varchar(255) DEFAULT NULL,
  `operator_user_id` varchar(255) DEFAULT NULL,
  `operation_time` datetime DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=471 DEFAULT CHARSET=utf8;



CREATE TABLE `apartment_in_out_accommodation_record` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `campus` varchar(20) DEFAULT NULL COMMENT '校区',
  `building_id` int(20) DEFAULT NULL COMMENT '楼栋',
  `zone_id` int(20) DEFAULT NULL COMMENT '园区',
  `room_id` int(20) DEFAULT NULL COMMENT '房间号',
  `operation` varchar(255) DEFAULT NULL,
  `operator_type` varchar(255) DEFAULT NULL,
  `operator_user_id` varchar(255) DEFAULT NULL,
  `operation_time` datetime DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;