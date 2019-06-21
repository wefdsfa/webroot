/*
Navicat MySQL Data Transfer

Source Server         : 192.168.9.150
Source Server Version : 50718
Source Host           : 192.168.9.150:3306
Source Database       : xchs_saas_schedule

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-05-22 15:49:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '任务ID',
  `name` varchar(255) DEFAULT NULL COMMENT '任务名称',
  `job_group` varchar(255) DEFAULT NULL,
  `trigger_name` varchar(255) DEFAULT NULL,
  `description` varchar(280) DEFAULT NULL COMMENT '描述信息',
  `cron_expression` varchar(40) DEFAULT NULL COMMENT '任务运行时间表达式',
  `school_id` varchar(255) DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT b'0' COMMENT '任务状态 0禁用 1启用',
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for job_execution_log
-- ----------------------------
DROP TABLE IF EXISTS `job_execution_log`;
CREATE TABLE `job_execution_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) DEFAULT NULL,
  `result_code` varchar(255) DEFAULT NULL,
  `result_message` varchar(1023) DEFAULT NULL,
  `execute_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
