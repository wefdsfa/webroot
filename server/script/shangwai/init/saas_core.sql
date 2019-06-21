/*
Navicat MySQL Data Transfer

Source Server         : 192.168.9.150
Source Server Version : 50718
Source Host           : 192.168.9.150:3306
Source Database       : xchs_saas_1

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-05-23 09:35:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for app
-- ----------------------------
DROP TABLE IF EXISTS `app`;
CREATE TABLE `app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `img_type` varchar(255) DEFAULT NULL,
  `remark` longtext,
  `sort` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `is_published` bit(1) DEFAULT b'0',
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of app
-- ----------------------------

-- ----------------------------
-- Table structure for approve_role
-- ----------------------------
DROP TABLE IF EXISTS `approve_role`;
CREATE TABLE `approve_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of approve_role
-- ----------------------------

-- ----------------------------
-- Table structure for approve_role_user
-- ----------------------------
DROP TABLE IF EXISTS `approve_role_user`;
CREATE TABLE `approve_role_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `college_code` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of approve_role_user
-- ----------------------------

-- ----------------------------
-- Table structure for app_setting
-- ----------------------------
DROP TABLE IF EXISTS `app_setting`;
CREATE TABLE `app_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` int(11) DEFAULT NULL,
  `flow_id` varchar(255) DEFAULT NULL,
  `form_id` varchar(255) DEFAULT NULL,
  `player_setting_id` varchar(255) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of app_setting
-- ----------------------------

-- ----------------------------
-- Table structure for app_type
-- ----------------------------
DROP TABLE IF EXISTS `app_type`;
CREATE TABLE `app_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of app_type
-- ----------------------------

-- ----------------------------
-- Table structure for authority_college_role_user
-- ----------------------------
DROP TABLE IF EXISTS `authority_college_role_user`;
CREATE TABLE `authority_college_role_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `college_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority_college_role_user
-- ----------------------------

-- ----------------------------
-- Table structure for authority_menu
-- ----------------------------
DROP TABLE IF EXISTS `authority_menu`;
CREATE TABLE `authority_menu` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `rank` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `sort` int(11) unsigned DEFAULT NULL,
  `parent_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority_menu
-- ----------------------------
INSERT INTO `authority_menu` VALUES ('2', '本院学生信息', 'COLLEGE_STUDENT_INFO', '1', 'configurable', '/document/studentManage/college?id=college', '2', null);
INSERT INTO `authority_menu` VALUES ('3', '全校学生信息', 'SCHOOL_STUDENT_INFO', '1', 'configurable', '/document/studentManage/school?id=school', '3', null);
INSERT INTO `authority_menu` VALUES ('4', '分管学生信息', 'INSTRUCTOR_STUDENT_INFO', '1', 'bindSystemRole', '/document/studentManage/myManage?id=myManage', '4', null);
INSERT INTO `authority_menu` VALUES ('6', '本院带生关系设置', 'COLLEGE_INSTRUCTOR_SETTING', '1', 'configurable', '/relationship/relationshipManage/college?id=college', '5', null);
INSERT INTO `authority_menu` VALUES ('7', '全校带生关系设置', 'SCHOOL_INSTRUCTOR_SETTING', '1', 'configurable', '/relationship/relationshipManage/school?id=school', '6', null);
INSERT INTO `authority_menu` VALUES ('8', '本院带班设置', 'COLLEGE_CLASS_SETTING', '1', 'configurable', '/relationship/relationClassManage', '7', null);
INSERT INTO `authority_menu` VALUES ('9', '应用布局管理', 'APP_LAYOUT_MANAGEMENT', '1', 'requiredSuperAdmin', '/workflow/appManage/manager?id=manager', '8', null);
INSERT INTO `authority_menu` VALUES ('10', '部门管理', 'DEPARTMENT_MANAGEMENT', '1', 'configurable', '/permission/departmentManage', '9', null);
INSERT INTO `authority_menu` VALUES ('11', '应用管理', 'APP_MANAGEMENT', '1', 'configurable', '/workflow/appManage/department?id=department', '10', null);
INSERT INTO `authority_menu` VALUES ('12', '部门人员管理', 'DEPARTMENT_PERSON_MANAGEMENT', '1', 'configurable', '/permission/personnelManage', '11', null);
INSERT INTO `authority_menu` VALUES ('13', '审批角色管理', 'WORKFLOW_ROLE_MANAGEMENT', '1', 'configurable', '/permission/approverRoleManage', '12', null);
INSERT INTO `authority_menu` VALUES ('14', '校级权限管理', 'SCHOOL_AUTHORITY_MANAGEMENT', '1', 'configurable', '/authority/schoolRoleManage', '13', null);
INSERT INTO `authority_menu` VALUES ('15', '校级审批人员设置', 'SCHOOL_WORKFLOW_ROLE_PERSON', '1', 'configurable', '/permission/schoolRoleApproverManage', '14', null);
INSERT INTO `authority_menu` VALUES ('16', '院级权限设置', 'COLLEGE_AUTHORITY_MANAGEMENT', '1', 'configurable', '/authority/collegeRoleManage', '15', null);
INSERT INTO `authority_menu` VALUES ('17', '院级审批人员设置', 'COLLEGE_WORKFLOW_ROLE_PERSON', '1', 'configurable', '/permission/collegeRoleApproverManage', '16', null);
INSERT INTO `authority_menu` VALUES ('18', '学院管理', 'COLLEGE_MANAGEMENT', '1', 'requiredSuperAdmin', '/permission/collegeManage', '17', null);
INSERT INTO `authority_menu` VALUES ('19', '字典管理', 'DICTIONARY_MANAGEMENT', '1', 'requiredSuperAdmin', '/dictionary/dictionaryManage', '18', null);
INSERT INTO `authority_menu` VALUES ('20', '系统权限管理', 'SYSTEM_AUTHORITY_MANAGEMENT', '1', 'requiredSuperAdmin', '/authority/systemRoleManage', '19', null);
INSERT INTO `authority_menu` VALUES ('21', '学生信息导入', 'IMPORT_STUDENT', '1', 'requiredSuperAdmin', '/document/studentImport', '20', null);
INSERT INTO `authority_menu` VALUES ('22', '教职工信息导入', 'IMPORT_TEACHER', '1', 'requiredSuperAdmin', '/document/teacherImport', '21', null);

-- ----------------------------
-- Table structure for authority_resource
-- ----------------------------
DROP TABLE IF EXISTS `authority_resource`;
CREATE TABLE `authority_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority_resource
-- ----------------------------

-- ----------------------------
-- Table structure for authority_role
-- ----------------------------
DROP TABLE IF EXISTS `authority_role`;
CREATE TABLE `authority_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `rank` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority_role
-- ----------------------------
INSERT INTO `authority_role` VALUES ('1', '辅导员', 'systemDefined', 'otherRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('2', '本院学生信息负责人', 'systemDefined', 'collegeRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('3', '全校学生信息负责人', 'systemDefined', 'schoolRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('4', '本院带生关系负责人', 'systemDefined', 'collegeRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('5', '全校带生关系负责人', 'systemDefined', 'schoolRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('6', '本院带班负责人', 'systemDefined', 'collegeRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('8', '部门管理员', 'systemDefined', 'systemRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('9', '部门人员负责人', 'systemDefined', 'otherRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('10', '部门应用负责人', 'systemDefined', 'otherRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('11', '校级审批人员设置负责人', 'systemDefined', 'schoolRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('12', '院级审批人员设置负责人', 'systemDefined', 'collegeRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('13', '学院总负责人', 'systemDefined', 'otherRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('14', '学院管理负责人', 'systemDefined', 'schoolRole', '\0', null, null);
INSERT INTO `authority_role` VALUES ('16', '学校学工管理员', 'systemDefined', 'systemRole', '\0', null, null);

-- ----------------------------
-- Table structure for business
-- ----------------------------
DROP TABLE IF EXISTS `business`;
CREATE TABLE `business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `guide` longtext,
  `is_enable` bit(1) DEFAULT NULL,
  `is_limit` bit(1) DEFAULT NULL,
  `is_public` bit(1) DEFAULT NULL,
  `limit_type` varchar(255) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `setting_id` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `app_id` int(11) DEFAULT NULL,
  `begin_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of business
-- ----------------------------

-- ----------------------------
-- Table structure for business_limit
-- ----------------------------
DROP TABLE IF EXISTS `business_limit`;
CREATE TABLE `business_limit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `in_school` varchar(255) DEFAULT NULL,
  `student_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of business_limit
-- ----------------------------

-- ----------------------------
-- Table structure for business_student
-- ----------------------------
DROP TABLE IF EXISTS `business_student`;
CREATE TABLE `business_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of business_student
-- ----------------------------

-- ----------------------------
-- Table structure for business_time
-- ----------------------------
DROP TABLE IF EXISTS `business_time`;
CREATE TABLE `business_time` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` datetime DEFAULT NULL,
  `business_id` int(11) DEFAULT NULL,
  `node_id` varchar(255) DEFAULT NULL,
  `is_limit` bit(1) DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of business_time
-- ----------------------------

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_full_name` varchar(255) DEFAULT NULL,
  `class_leader_end_time` datetime DEFAULT NULL,
  `class_leader_id` bigint(20) DEFAULT NULL,
  `class_leader_start_time` datetime DEFAULT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `class_number` int(11) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `create_user_id` bigint(20) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `dissolution_time` datetime DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `instructor_end_time` datetime DEFAULT NULL,
  `instructor_id` bigint(20) DEFAULT NULL,
  `instructor_start_time` datetime DEFAULT NULL,
  `is_delete` bit(1) NOT NULL,
  `learning_level` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------

-- ----------------------------
-- Table structure for class_committee
-- ----------------------------
DROP TABLE IF EXISTS `class_committee`;
CREATE TABLE `class_committee` (
  `class_committee_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_committee` int(11) DEFAULT NULL,
  `student_user_id` bigint(20) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`class_committee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class_committee
-- ----------------------------

-- ----------------------------
-- Table structure for class_committee_type
-- ----------------------------
DROP TABLE IF EXISTS `class_committee_type`;
CREATE TABLE `class_committee_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class_committee_type
-- ----------------------------
INSERT INTO `class_committee_type` VALUES ('1', null, '班长');
INSERT INTO `class_committee_type` VALUES ('2', null, '副班长');

-- ----------------------------
-- Table structure for class_teacher
-- ----------------------------
DROP TABLE IF EXISTS `class_teacher`;
CREATE TABLE `class_teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_user_id` bigint(20) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class_teacher
-- ----------------------------

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------

-- ----------------------------
-- Table structure for department_rule
-- ----------------------------
DROP TABLE IF EXISTS `department_rule`;
CREATE TABLE `department_rule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department_rule
-- ----------------------------
INSERT INTO `department_rule` VALUES ('1', '应用管理', null);
INSERT INTO `department_rule` VALUES ('2', '人员管理', null);

-- ----------------------------
-- Table structure for department_staff
-- ----------------------------
DROP TABLE IF EXISTS `department_staff`;
CREATE TABLE `department_staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_no` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department_staff
-- ----------------------------

-- ----------------------------
-- Table structure for info_column
-- ----------------------------
DROP TABLE IF EXISTS `info_column`;
CREATE TABLE `info_column` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `column_name` varchar(255) DEFAULT NULL,
  `column_option` varchar(255) DEFAULT NULL,
  `edit` bit(1) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=514 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of info_column
-- ----------------------------
INSERT INTO `info_column` VALUES ('1', '姓名', 'string', 'name', '', '', '1');
INSERT INTO `info_column` VALUES ('2', '拼音姓名', 'string', 'nameSpell', '', '', '1');
INSERT INTO `info_column` VALUES ('3', '曾用名', 'string', 'usedName', '', '', '1');
INSERT INTO `info_column` VALUES ('4', '出生地', 'string', 'birthPlace', null, '', '1');
INSERT INTO `info_column` VALUES ('8', '性别', 'dict', 'sex', '性别', '', '1');
INSERT INTO `info_column` VALUES ('9', '民族', 'dict', 'nation', '民族', '', '1');
INSERT INTO `info_column` VALUES ('10', '政治面貌', 'dict', 'politicalStatus', '政治面貌', '', '1');
INSERT INTO `info_column` VALUES ('11', '婚姻状况', 'dict', 'maritalStatus', '婚姻状况', '', '1');
INSERT INTO `info_column` VALUES ('12', '出生日期', 'Date', 'birthday', '', '', '1');
INSERT INTO `info_column` VALUES ('14', '国籍', 'dict', 'nationality', '国籍', '', '1');
INSERT INTO `info_column` VALUES ('16', '籍贯', 'dict', 'nativePlace', '地区', '', '1');
INSERT INTO `info_column` VALUES ('24', '宗教信仰', 'dict', 'faith', '宗教信仰', '', '1');
INSERT INTO `info_column` VALUES ('31', '健康状况', 'dict', 'physicalCondition', '健康状况', '', '1');
INSERT INTO `info_column` VALUES ('33', '血型', 'dict', 'bloodType', '血型', '', '1');
INSERT INTO `info_column` VALUES ('41', '用户id', 'Long', 'userId', '', '\0', '1');
INSERT INTO `info_column` VALUES ('42', '学号', 'string', 'studentId', '', '\0', '1');
INSERT INTO `info_column` VALUES ('44', '用户id', 'Long', 'userId', '', '\0', '2');
INSERT INTO `info_column` VALUES ('46', '学院/院系名称/基层单位', 'college', 'college', '学院', '', '2');
INSERT INTO `info_column` VALUES ('47', '系别', 'college', 'department', '系别', '', '2');
INSERT INTO `info_column` VALUES ('48', '专业', 'dict', 'major', '专业', '', '2');
INSERT INTO `info_column` VALUES ('50', '班级', 'class', 'classId', '', '', '2');
INSERT INTO `info_column` VALUES ('51', '年级', 'string', 'grade', '', '', '2');
INSERT INTO `info_column` VALUES ('53', '学生类别', 'dict', 'studentType', '学生类别', '', '2');
INSERT INTO `info_column` VALUES ('55', '培养方式', 'dict', 'cultivateMode', '培养方式', '', '2');
INSERT INTO `info_column` VALUES ('56', '获得学历方式', 'dict', 'studyMode', '获得学历方式', '', '2');
INSERT INTO `info_column` VALUES ('57', '是否学分制', 'dict', 'isCreditSystem', '是否', '', '2');
INSERT INTO `info_column` VALUES ('58', '培养层次', 'dict', 'educationLevel', '培养层次', '', '2');
INSERT INTO `info_column` VALUES ('59', '连读方式', 'dict', 'learnMode', '连读方式', '', '2');
INSERT INTO `info_column` VALUES ('60', '学生当前状态', 'dict', 'schoolStatus', '学生当前状态', '', '2');
INSERT INTO `info_column` VALUES ('73', '辅导员', 'instructor', 'instructorId', '', '\0', '2');
INSERT INTO `info_column` VALUES ('74', '导师', 'teacher', 'tutorId', '', '\0', '2');
INSERT INTO `info_column` VALUES ('107', '用户id', 'Long', 'userId', null, '\0', '9');
INSERT INTO `info_column` VALUES ('108', '电话', 'string', 'phone', null, '', '9');
INSERT INTO `info_column` VALUES ('109', '通信地址', 'string', 'address', null, '', '9');
INSERT INTO `info_column` VALUES ('110', '邮政编码', 'string', 'postalCode', null, '', '9');
INSERT INTO `info_column` VALUES ('111', '电子邮箱', 'string', 'eMail', null, '', '9');
INSERT INTO `info_column` VALUES ('112', '个人主页', 'string', 'personalHomepage', null, '', '9');
INSERT INTO `info_column` VALUES ('113', '即时通讯号', 'string', 'instantMessageNo', null, '', '9');
INSERT INTO `info_column` VALUES ('133', '用户id', 'Long', 'userId', null, '\0', '11');
INSERT INTO `info_column` VALUES ('134', '家庭邮编', 'string', 'postalCode', null, '', '11');
INSERT INTO `info_column` VALUES ('135', '家庭电话', 'string', 'phone', null, '', '11');
INSERT INTO `info_column` VALUES ('136', '家庭地址', 'string', 'address', null, '', '11');
INSERT INTO `info_column` VALUES ('137', '家庭联系人', 'string', 'contactPerson', null, '', '11');
INSERT INTO `info_column` VALUES ('138', '家庭电子邮箱', 'string', 'eMail', null, '', '11');
INSERT INTO `info_column` VALUES ('163', 'id', 'Integer', 'id', null, '\0', '13');
INSERT INTO `info_column` VALUES ('164', '用户id', 'Long', 'userId', null, '\0', '13');
INSERT INTO `info_column` VALUES ('165', '关系码', 'string', 'relation', null, '', '13');
INSERT INTO `info_column` VALUES ('166', '成员名字', 'string', 'name', null, '', '13');
INSERT INTO `info_column` VALUES ('168', '工作单位', 'string', 'workUnit', null, '', '13');
INSERT INTO `info_column` VALUES ('169', '从业', 'string', 'employment', null, '', '13');
INSERT INTO `info_column` VALUES ('170', '专业技术职务', 'string', 'duty', null, '', '13');
INSERT INTO `info_column` VALUES ('172', '职务级别', 'string', 'jobLevel', null, '', '13');
INSERT INTO `info_column` VALUES ('189', 'id', 'Integer', 'id', null, '\0', '15');
INSERT INTO `info_column` VALUES ('190', '用户id', 'Long', 'userId', null, '\0', '15');
INSERT INTO `info_column` VALUES ('191', '奖学金编号', 'string', 'number', null, '', '15');
INSERT INTO `info_column` VALUES ('193', '等级', 'string', 'level', null, '', '15');
INSERT INTO `info_column` VALUES ('194', '金额', 'Float', 'amount', null, '', '15');
INSERT INTO `info_column` VALUES ('195', '类型', 'string', 'type', null, '', '15');
INSERT INTO `info_column` VALUES ('196', '获奖年月', 'string', 'awardDate', null, '', '15');
INSERT INTO `info_column` VALUES ('197', '资助单位或个人', 'string', 'subsidizedBy', null, '', '15');
INSERT INTO `info_column` VALUES ('198', '奖励资助资金来源', 'string', 'expenditureResource', null, '', '15');
INSERT INTO `info_column` VALUES ('211', 'id', 'Integer', 'id', '', '\0', '17');
INSERT INTO `info_column` VALUES ('212', '用户id', 'Long', 'userId', '', '\0', '17');
INSERT INTO `info_column` VALUES ('213', '学年', 'string', 'year', '', '', '17');
INSERT INTO `info_column` VALUES ('214', '违纪日期', 'Date', 'disciplineDate', null, '', '17');
INSERT INTO `info_column` VALUES ('215', '违纪简况', 'string', 'disciplineBriefing', '处分类型', '', '17');
INSERT INTO `info_column` VALUES ('216', '违纪类别', 'dict', 'disciplineType', '违纪类别', '', '17');
INSERT INTO `info_column` VALUES ('217', '处分名称', 'string', 'punishmentName', '', '', '17');
INSERT INTO `info_column` VALUES ('218', '处分原因', 'string', 'punishmentReason', '', '', '17');
INSERT INTO `info_column` VALUES ('219', '处分日期', 'Date', 'punishmentDate', '', '', '17');
INSERT INTO `info_column` VALUES ('220', '处分文号', 'string', 'punishmentFileNo', '', '', '17');
INSERT INTO `info_column` VALUES ('221', '处分撤销日期', 'Date', 'punishmentRepealDate', '是否', '', '17');
INSERT INTO `info_column` VALUES ('222', '处分撤销文号', 'string', 'punishmentRepealFileNo', null, '', '17');
INSERT INTO `info_column` VALUES ('232', 'id', 'Integer', 'id', null, '\0', '19');
INSERT INTO `info_column` VALUES ('233', '用户id', 'Long', 'userId', null, '\0', '19');
INSERT INTO `info_column` VALUES ('234', '始发年月', 'string', 'startYearMonth', null, '', '19');
INSERT INTO `info_column` VALUES ('235', '停发年月', 'string', 'endYearMonth', null, '', '19');
INSERT INTO `info_column` VALUES ('236', '停发原因', 'string', 'stopSubsidizeReason', null, '', '19');
INSERT INTO `info_column` VALUES ('237', '资助单位或个人', 'string', 'subsidizedBy', null, '', '19');
INSERT INTO `info_column` VALUES ('238', '助学金金额', 'Float', 'money', null, '', '19');
INSERT INTO `info_column` VALUES ('253', 'id', 'Integer', 'id', null, '\0', '21');
INSERT INTO `info_column` VALUES ('254', '用户id', 'Long', 'userId', null, '\0', '21');
INSERT INTO `info_column` VALUES ('255', '用人单位', 'string', 'unitName', null, '', '21');
INSERT INTO `info_column` VALUES ('256', '工作岗位', 'string', 'post', null, '', '21');
INSERT INTO `info_column` VALUES ('257', '勤工助学类别', 'dict', 'type', '勤工助学类别', '', '21');
INSERT INTO `info_column` VALUES ('258', '月工时', 'Float', 'laborHourOfMonth', null, '', '21');
INSERT INTO `info_column` VALUES ('259', '年工时', 'Float', 'laborHourOfYear', null, '', '21');
INSERT INTO `info_column` VALUES ('260', '月金额', 'Float', 'amountOfMonth', null, '', '21');
INSERT INTO `info_column` VALUES ('261', '年金额', 'Float', 'amountOfYear', null, '', '21');
INSERT INTO `info_column` VALUES ('262', '发放日期', 'Date', 'grantDate', null, '', '21');
INSERT INTO `info_column` VALUES ('263', '勤工助学金额', 'Float', 'workStudyAmount', null, '', '21');
INSERT INTO `info_column` VALUES ('264', '助学单位类别码', 'string', 'unitType', null, '', '21');
INSERT INTO `info_column` VALUES ('265', '工作性质', 'string', 'jobNature', null, '', '21');
INSERT INTO `info_column` VALUES ('272', '获得贷款日期', 'Date', 'getLoanDate', null, '', '23');
INSERT INTO `info_column` VALUES ('273', '延期还款日期', 'Date', 'delayRepaymentDate', null, '', '23');
INSERT INTO `info_column` VALUES ('274', '是否延期还款', 'Boolean', 'isDelayRepayment', null, '', '23');
INSERT INTO `info_column` VALUES ('275', 'id', 'Integer', 'id', null, '\0', '23');
INSERT INTO `info_column` VALUES ('276', '用户id', 'Long', 'userId', null, '\0', '23');
INSERT INTO `info_column` VALUES ('277', '贷款申请年月', 'string', 'applyYearMonth', null, '', '23');
INSERT INTO `info_column` VALUES ('278', '贷款合同号', 'string', 'compactNo', null, '', '23');
INSERT INTO `info_column` VALUES ('279', '贷款总金额', 'Float', 'amount', null, '', '23');
INSERT INTO `info_column` VALUES ('280', '贷款年数', 'Integer', 'year', null, '', '23');
INSERT INTO `info_column` VALUES ('281', '贷款生活费', 'Float', 'alimony', null, '', '23');
INSERT INTO `info_column` VALUES ('282', '贷款生活费年数', 'Integer', 'alimonyYear', null, '', '23');
INSERT INTO `info_column` VALUES ('283', '收起还款日', 'Date', 'firstRepaymentDay', null, '', '23');
INSERT INTO `info_column` VALUES ('284', '还款终止日', 'Date', 'endRepaymentDay', null, '', '23');
INSERT INTO `info_column` VALUES ('285', '贷款用途', 'string', 'loanUseFor', null, '', '23');
INSERT INTO `info_column` VALUES ('286', '贷款银行', 'string', 'loanBank', null, '', '23');
INSERT INTO `info_column` VALUES ('287', '签约日', 'Date', 'signDate', null, '', '23');
INSERT INTO `info_column` VALUES ('289', '月利率', 'Float', 'interestRateOfMonth', null, '', '23');
INSERT INTO `info_column` VALUES ('290', '还款方式', 'string', 'repaymentMode', null, '', '23');
INSERT INTO `info_column` VALUES ('291', '担保方式', 'string', 'guaranteeMode', null, '', '23');
INSERT INTO `info_column` VALUES ('408', '用户id', 'Long', 'userId', '', '\0', '38');
INSERT INTO `info_column` VALUES ('409', '教工号', 'string', 'teacherId', '', '\0', '38');
INSERT INTO `info_column` VALUES ('410', '姓名', 'string', 'name', '', '', '38');
INSERT INTO `info_column` VALUES ('411', '性别', 'dict', 'sex', '性别', '', '38');
INSERT INTO `info_column` VALUES ('412', '单位号', 'string', 'organisation', '', '', '38');
INSERT INTO `info_column` VALUES ('413', '姓名拼音', 'string', 'nameSpell', '', '', '38');
INSERT INTO `info_column` VALUES ('414', '曾用名', 'string', 'usedName', '', '', '38');
INSERT INTO `info_column` VALUES ('415', '出生日期', 'Date', 'birthday', '', '', '38');
INSERT INTO `info_column` VALUES ('416', '出生地', 'dict', 'birthPlace', '地区', '', '38');
INSERT INTO `info_column` VALUES ('417', '籍贯', 'dict', 'nativePlace', '地区', '', '38');
INSERT INTO `info_column` VALUES ('418', '民族', 'dict', 'nation', '民族', '', '38');
INSERT INTO `info_column` VALUES ('419', '国籍', 'dict', 'nationality', '国籍', '', '38');
INSERT INTO `info_column` VALUES ('420', '身份证件类型码', 'string', 'identificationType', '', '', '38');
INSERT INTO `info_column` VALUES ('421', '身份证号', 'string', 'identificationNo', '', '', '38');
INSERT INTO `info_column` VALUES ('422', '身份证有效期', 'string', 'idCardValidity', '', '', '38');
INSERT INTO `info_column` VALUES ('423', '婚姻状况', 'string', 'maritalStatus', '', '', '38');
INSERT INTO `info_column` VALUES ('424', '港澳台侨外码', 'string', 'hongKongMacaoTaiwanOversea', '', '', '38');
INSERT INTO `info_column` VALUES ('425', '健康状态', 'string', 'healthStatus', '', '', '38');
INSERT INTO `info_column` VALUES ('426', '宗教信仰', 'dict', 'faith', '宗教信仰', '', '38');
INSERT INTO `info_column` VALUES ('427', '血型', 'dict', 'bloodType', '血型', '', '38');
INSERT INTO `info_column` VALUES ('428', '最高学历', 'string', 'highestEducation', '', '', '38');
INSERT INTO `info_column` VALUES ('429', '文化程度', 'string', 'degreeOfEducation', '', '', '38');
INSERT INTO `info_column` VALUES ('430', '参加工作年月', 'string', 'joinTheWorkingYears', '', '', '38');
INSERT INTO `info_column` VALUES ('431', '来校时间', 'string', 'timeToSchool', '', '', '38');
INSERT INTO `info_column` VALUES ('432', '起薪日期', 'string', 'timeStartWage', '', '', '38');
INSERT INTO `info_column` VALUES ('433', '从教年月', 'string', 'timeStartTeaching', '', '', '38');
INSERT INTO `info_column` VALUES ('434', '编制', 'string', 'authorizedStrength', '', '', '38');
INSERT INTO `info_column` VALUES ('435', '职工类别', 'dict', 'workerCategory', '职工类别', '', '38');
INSERT INTO `info_column` VALUES ('436', '任课情况', 'string', 'courseSituation', '', '', '38');
INSERT INTO `info_column` VALUES ('437', '档案编号', 'string', 'fileNo', '', '', '38');
INSERT INTO `info_column` VALUES ('438', '档案文本', 'string', 'fileText', '', '', '38');
INSERT INTO `info_column` VALUES ('439', '在职状态', 'string', 'onTheJobState', '', '', '38');
INSERT INTO `info_column` VALUES ('440', '特长', 'string', 'speciality', '', '', '38');
INSERT INTO `info_column` VALUES ('441', '照片', 'string', 'photo', '', '', '38');
INSERT INTO `info_column` VALUES ('442', '学科类别', 'string', 'subjectType', '', '', '38');
INSERT INTO `info_column` VALUES ('443', '一级学科', 'string', 'primaryDiscipline', null, '', '38');
INSERT INTO `info_column` VALUES ('448', '二级学科', 'Date', 'secondaryDiscipline', null, '', '38');
INSERT INTO `info_column` VALUES ('449', '研究方向', 'string', 'mainResearchTopics', null, '', '38');
INSERT INTO `info_column` VALUES ('462', '用户id', 'string', 'userId', null, '\0', '39');
INSERT INTO `info_column` VALUES ('470', '邮政编码', 'string', 'postalCode', null, '', '39');
INSERT INTO `info_column` VALUES ('472', '通信地址', 'string', 'mailingAddress', null, '', '39');
INSERT INTO `info_column` VALUES ('473', '家庭地址', 'string', 'homeAddress', null, '', '39');
INSERT INTO `info_column` VALUES ('474', '现地址', 'string', 'currentAddress', null, '', '39');
INSERT INTO `info_column` VALUES ('475', '户口所在地', 'string', 'registeredPermanentResidence', null, '', '39');
INSERT INTO `info_column` VALUES ('476', '户口类别', 'string', 'accountCategory', null, '', '39');
INSERT INTO `info_column` VALUES ('481', '办公电话', 'string', 'officePhone', null, '', '39');
INSERT INTO `info_column` VALUES ('482', '住宅电话', 'string', 'homePhone', null, '', '39');
INSERT INTO `info_column` VALUES ('485', '移动电话', 'string', 'mobilePhone', null, '', '39');
INSERT INTO `info_column` VALUES ('486', '传真电话', 'string', 'fax', null, '', '39');
INSERT INTO `info_column` VALUES ('488', '电子信箱', 'string', 'mail', null, '', '39');
INSERT INTO `info_column` VALUES ('495', '主页', 'string', 'homePage', null, '', '39');
INSERT INTO `info_column` VALUES ('496', '校区号', 'string', 'campusNo', null, '', '39');

-- ----------------------------
-- Table structure for info_type
-- ----------------------------
DROP TABLE IF EXISTS `info_type`;
CREATE TABLE `info_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `url_name` varchar(255) DEFAULT NULL,
  `table_name` varchar(255) DEFAULT NULL,
  `bean_name` varchar(255) DEFAULT NULL,
  `is_multiple` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of info_type
-- ----------------------------
INSERT INTO `info_type` VALUES ('1', '学生基本信息', 'stu', null, 'base-info', 'student_base_info', 'com.xchs.saas_core.module.document.entity.po.StudentBaseInfoPO', '\0');
INSERT INTO `info_type` VALUES ('2', '学生学籍信息', 'stu', null, 'status-info', 'student_status_info', 'com.xchs.saas_core.module.document.entity.po.StudentStatusInfoPO', '\0');
INSERT INTO `info_type` VALUES ('9', '联系方式信息', 'stu', null, 'personal-contact', 'student_personal_contact', 'com.xchs.saas_core.module.document.entity.po.StudentPersonalContactPO', '\0');
INSERT INTO `info_type` VALUES ('11', '家庭联系方式信息', 'stu', '10', 'family-info/family-information', 'student_family_information', 'com.xchs.saas_core.module.document.entity.po.StudentFamilyInfoPO', '\0');
INSERT INTO `info_type` VALUES ('13', '家庭成员信息', 'stu', '10', 'family-info/family-members', 'student_family_member', 'com.xchs.saas_core.module.document.entity.po.StudentFamilyMemberPO', '');
INSERT INTO `info_type` VALUES ('15', '奖学金信息', 'stu', null, 'scholarship', 'student_scholarship', 'com.xchs.saas_core.module.document.entity.po.StudentScholarshipPO', '');
INSERT INTO `info_type` VALUES ('17', '违纪处分信息', 'stu', null, 'discipline', 'student_discipline', 'com.xchs.saas_core.module.document.entity.po.StudentDisciplinaryPunishmentPO', '');
INSERT INTO `info_type` VALUES ('19', '助学金信息', 'stu', null, 'subsidies', 'student_subsidies', 'com.xchs.saas_core.module.document.entity.po.StudentSubsidiesPO', '');
INSERT INTO `info_type` VALUES ('21', '勤工俭学信息', 'stu', null, 'part-time-job', 'student_part_time_job', 'com.xchs.saas_core.module.document.entity.po.StudentPartTimeJobPO', '');
INSERT INTO `info_type` VALUES ('23', '贷款信息', 'stu', null, 'loan', 'student_loan', 'com.xchs.saas_core.module.document.entity.po.StudentLoanPO', '');
INSERT INTO `info_type` VALUES ('38', '教师基本信息', 'tea', null, 'base-info', 'teacher_base_info', 'com.xchs.saas_core.module.document.entity.po.TeacherBaseInfoPO', '\0');
INSERT INTO `info_type` VALUES ('39', '教师联系方式信息', 'tea', null, 'tea-contact', 'teacher_contact_info', 'com.xchs.saas_core.module.document.entity.po.TeacherContactPO', '\0');

-- ----------------------------
-- Table structure for popular_app
-- ----------------------------
DROP TABLE IF EXISTS `popular_app`;
CREATE TABLE `popular_app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` int(11) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of popular_app
-- ----------------------------

-- ----------------------------
-- Table structure for rel_department_staff_rule
-- ----------------------------
DROP TABLE IF EXISTS `rel_department_staff_rule`;
CREATE TABLE `rel_department_staff_rule` (
  `staff_id` int(11) NOT NULL,
  `rule_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_department_staff_rule
-- ----------------------------

-- ----------------------------
-- Table structure for rel_instructor_student
-- ----------------------------
DROP TABLE IF EXISTS `rel_instructor_student`;
CREATE TABLE `rel_instructor_student` (
  `student_user_id` bigint(20) NOT NULL,
  `teacher_user_id` bigint(20) NOT NULL,
  `change_log` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_instructor_student
-- ----------------------------

-- ----------------------------
-- Table structure for rel_menu_resource
-- ----------------------------
DROP TABLE IF EXISTS `rel_menu_resource`;
CREATE TABLE `rel_menu_resource` (
  `menu_id` int(11) NOT NULL,
  `resource_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_menu_resource
-- ----------------------------
INSERT INTO `rel_menu_resource` VALUES ('11', '1');

-- ----------------------------
-- Table structure for rel_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `rel_role_menu`;
CREATE TABLE `rel_role_menu` (
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_role_menu
-- ----------------------------
INSERT INTO `rel_role_menu` VALUES ('1', '4');
INSERT INTO `rel_role_menu` VALUES ('2', '2');
INSERT INTO `rel_role_menu` VALUES ('3', '3');
INSERT INTO `rel_role_menu` VALUES ('4', '6');
INSERT INTO `rel_role_menu` VALUES ('5', '7');
INSERT INTO `rel_role_menu` VALUES ('6', '8');
INSERT INTO `rel_role_menu` VALUES ('8', '10');
INSERT INTO `rel_role_menu` VALUES ('9', '12');
INSERT INTO `rel_role_menu` VALUES ('10', '11');
INSERT INTO `rel_role_menu` VALUES ('10', '13');
INSERT INTO `rel_role_menu` VALUES ('11', '15');
INSERT INTO `rel_role_menu` VALUES ('12', '17');
INSERT INTO `rel_role_menu` VALUES ('14', '18');
INSERT INTO `rel_role_menu` VALUES ('13', '16');
INSERT INTO `rel_role_menu` VALUES ('16', '14');
INSERT INTO `rel_role_menu` VALUES ('8', '12');
INSERT INTO `rel_role_menu` VALUES ('3', '21');
INSERT INTO `rel_role_menu` VALUES ('3', '22');
INSERT INTO `rel_role_menu` VALUES ('8', '9');

-- ----------------------------
-- Table structure for rel_student_class
-- ----------------------------
DROP TABLE IF EXISTS `rel_student_class`;
CREATE TABLE `rel_student_class` (
  `class_id` int(11) DEFAULT NULL,
  `student_user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`student_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_student_class
-- ----------------------------

-- ----------------------------
-- Table structure for rel_user_role
-- ----------------------------
DROP TABLE IF EXISTS `rel_user_role`;
CREATE TABLE `rel_user_role` (
  `role_id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rel_user_role
-- ----------------------------

-- ----------------------------
-- Table structure for student_base_info
-- ----------------------------
DROP TABLE IF EXISTS `student_base_info`;
CREATE TABLE `student_base_info` (
  `user_id` bigint(20) NOT NULL,
  `student_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `used_name` varchar(255) DEFAULT NULL,
  `birth_place` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `blood_type` varchar(255) DEFAULT NULL,
  `faith` varchar(255) DEFAULT NULL,
  `health_status` varchar(255) DEFAULT NULL,
  `hong_kong_macao_taiwan_oversea` varchar(255) DEFAULT NULL,
  `id_card_no` varchar(255) DEFAULT NULL,
  `id_card_type` varchar(255) DEFAULT NULL,
  `id_card_validity` datetime DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `name_spell` varchar(255) DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `native_place` varchar(255) DEFAULT NULL,
  `political_status` varchar(255) DEFAULT NULL,
  `portrait` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_base_info
-- ----------------------------

-- ----------------------------
-- Table structure for student_difficulty_identified
-- ----------------------------
DROP TABLE IF EXISTS `student_difficulty_identified`;
CREATE TABLE `student_difficulty_identified` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` float DEFAULT NULL,
  `apply_hardship_date` datetime DEFAULT NULL,
  `apply_reason` varchar(255) DEFAULT NULL,
  `grant_date` datetime DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_difficulty_identified
-- ----------------------------

-- ----------------------------
-- Table structure for student_discipline
-- ----------------------------
DROP TABLE IF EXISTS `student_discipline`;
CREATE TABLE `student_discipline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discipline_briefing` varchar(255) DEFAULT NULL,
  `discipline_date` datetime DEFAULT NULL,
  `discipline_type` varchar(255) DEFAULT NULL,
  `punishment_date` datetime DEFAULT NULL,
  `punishment_file_no` varchar(255) DEFAULT NULL,
  `punishment_name` varchar(255) DEFAULT NULL,
  `punishment_reason` varchar(255) DEFAULT NULL,
  `punishment_repeal_date` datetime DEFAULT NULL,
  `punishment_repeal_file_no` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_discipline
-- ----------------------------

-- ----------------------------
-- Table structure for student_family_information
-- ----------------------------
DROP TABLE IF EXISTS `student_family_information`;
CREATE TABLE `student_family_information` (
  `user_id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `e_mail` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_family_information
-- ----------------------------

-- ----------------------------
-- Table structure for student_family_member
-- ----------------------------
DROP TABLE IF EXISTS `student_family_member`;
CREATE TABLE `student_family_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `duty` varchar(255) DEFAULT NULL,
  `employment` varchar(255) DEFAULT NULL,
  `job_level` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `relation` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `work_unit` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_family_member
-- ----------------------------

-- ----------------------------
-- Table structure for student_loan
-- ----------------------------
DROP TABLE IF EXISTS `student_loan`;
CREATE TABLE `student_loan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alimony` float DEFAULT NULL,
  `alimony_year` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `apply_year_month` varchar(255) DEFAULT NULL,
  `compact_no` varchar(255) DEFAULT NULL,
  `delay_repayment_date` datetime DEFAULT NULL,
  `end_repayment_day` datetime DEFAULT NULL,
  `first_repayment_day` datetime DEFAULT NULL,
  `get_loan_date` datetime DEFAULT NULL,
  `guarantee_mode` varchar(255) DEFAULT NULL,
  `interest_rate_of_month` float DEFAULT NULL,
  `is_delay_repayment` bit(1) DEFAULT NULL,
  `loan_bank` varchar(255) DEFAULT NULL,
  `loan_use_for` varchar(255) DEFAULT NULL,
  `repayment_mode` varchar(255) DEFAULT NULL,
  `sign_date` datetime DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_loan
-- ----------------------------

-- ----------------------------
-- Table structure for student_part_time_job
-- ----------------------------
DROP TABLE IF EXISTS `student_part_time_job`;
CREATE TABLE `student_part_time_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount_of_month` float DEFAULT NULL,
  `amount_of_year` float DEFAULT NULL,
  `grant_date` datetime DEFAULT NULL,
  `job_nature` varchar(255) DEFAULT NULL,
  `labor_hour_of_month` float DEFAULT NULL,
  `labor_hour_of_year` float DEFAULT NULL,
  `post` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `unit_name` varchar(255) DEFAULT NULL,
  `unit_type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `work_study_amount` float DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_part_time_job
-- ----------------------------

-- ----------------------------
-- Table structure for student_personal_contact
-- ----------------------------
DROP TABLE IF EXISTS `student_personal_contact`;
CREATE TABLE `student_personal_contact` (
  `user_id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `e_mail` varchar(255) DEFAULT NULL,
  `instant_message_no` varchar(255) DEFAULT NULL,
  `personal_homepage` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_personal_contact
-- ----------------------------

-- ----------------------------
-- Table structure for student_scholarship
-- ----------------------------
DROP TABLE IF EXISTS `student_scholarship`;
CREATE TABLE `student_scholarship` (
  `id` int(11) NOT NULL,
  `amount` float DEFAULT NULL,
  `award_date` varchar(255) DEFAULT NULL,
  `expenditure_resource` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `subsidized_by` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_scholarship
-- ----------------------------

-- ----------------------------
-- Table structure for student_status_info
-- ----------------------------
DROP TABLE IF EXISTS `student_status_info`;
CREATE TABLE `student_status_info` (
  `user_id` bigint(20) NOT NULL,
  `class_id` int(11) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `cultivate_mode` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `education_level` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `instructor_id` bigint(20) DEFAULT NULL,
  `is_credit_system` bit(1) DEFAULT NULL,
  `learn_mode` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `school_status` varchar(255) DEFAULT NULL,
  `student_type` varchar(255) DEFAULT NULL,
  `study_mode` varchar(255) DEFAULT NULL,
  `tutor_id` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_status_info
-- ----------------------------

-- ----------------------------
-- Table structure for student_subsidies
-- ----------------------------
DROP TABLE IF EXISTS `student_subsidies`;
CREATE TABLE `student_subsidies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `end_year_month` varchar(255) DEFAULT NULL,
  `money` float DEFAULT NULL,
  `start_year_month` varchar(255) DEFAULT NULL,
  `stop_subsidize_reason` varchar(255) DEFAULT NULL,
  `subsidized_by` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_subsidies
-- ----------------------------

-- ----------------------------
-- Table structure for sys_dict
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=901 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_dict
-- ----------------------------
INSERT INTO `sys_dict` VALUES ('73', '中国', '1', '1', '39', '\0', '2018-04-08 17:13:56', '2018-04-08 20:29:25');
INSERT INTO `sys_dict` VALUES ('74', '美国', '2', '2', '39', '\0', '2018-04-08 17:13:56', '2018-04-08 20:29:27');
INSERT INTO `sys_dict` VALUES ('86', '未婚', '1', '1', '66', '\0', '2018-04-08 20:52:21', '2018-04-08 20:52:12');
INSERT INTO `sys_dict` VALUES ('87', '已婚', '2', '2', '66', '\0', '2018-04-08 20:52:24', '2018-04-08 20:52:35');
INSERT INTO `sys_dict` VALUES ('88', '基督教', '1', '1', '67', '\0', '2018-04-08 20:55:12', '2018-04-08 20:55:06');
INSERT INTO `sys_dict` VALUES ('89', '良好', '1', '1', '68', '\0', '2018-04-08 20:55:59', '2018-04-08 21:13:05');
INSERT INTO `sys_dict` VALUES ('93', '博士', '1', '1', '1000', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('94', '硕士', '2', '2', '1000', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('95', '本科', '3', '3', '1000', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('96', '专科', '4', '4', '1000', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('97', '其他', '5', '5', '1000', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('98', '国家任务', '10', '1', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('99', '非定向', '11', '2', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('100', '定向', '12', '3', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('101', '非国家任务', '20', '4', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('102', '自筹经费', '21', '5', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('103', '委托培养', '22', '6', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('104', '联合培养', '23', '7', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('105', '留学生', '30', '8', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('106', '国际组织资助', '31', '9', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('107', '中国政府资助', '32', '10', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('108', '本国政府资助', '33', '11', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('109', '学校间交换', '34', '12', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('110', '自费留学生', '35', '13', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('111', '其他', '99', '14', '1001', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('112', '居民身份证', '1', '1', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('113', '军官证', '2', '2', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('114', '士兵证', '3', '3', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('115', '文职干部证', '4', '4', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('116', '部队离退休证', '5', '5', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('117', '香港特区护照/身份证明', '6', '6', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('118', '澳门特区护照/身份证明', '7', '7', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('119', '台湾居民来往大陆通行证', '8', '8', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('120', '境外永久居住证', '9', '9', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('121', '护照', 'A', '10', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('122', '户口簿', 'B', '11', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('123', '其他', 'Z', '12', '1002', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('124', '在读', '01', '1', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('125', '休学', '02', '2', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('126', '退学', '03', '3', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('127', '停学', '04', '4', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('128', '复学', '05', '5', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('129', '流失', '06', '6', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('130', '毕业', '07', '7', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('131', '结业', '08', '8', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('132', '肄业', '09', '9', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('133', '转学（转出）', '10', '10', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('134', '死亡', '11', '11', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('135', '保留入学资格', '12', '12', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('136', '公派出国', '13', '13', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('137', '开除', '14', '14', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('138', '下落不明', '15', '15', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('139', '其他', '99', '16', '1003', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('140', '普通专科生', '411', '1', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('141', '函授专科生', '4121', '2', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('142', '业余专科生', '4122', '3', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('143', '脱产专科生', '4123', '4', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('144', '普通本科生', '421', '5', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('145', '函授本科', '4221', '6', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('146', '业余本科', '4222', '7', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('147', '脱产本科', '4223', '8', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('148', '网络本科生', '423', '9', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('149', '硕士研究生', '431', '10', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('150', '专业学位硕士研究生', '4312', '11', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('151', '博士研究生', '432', '12', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('152', '专业学位博士研究生', '4322', '13', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('153', '专业学位硕士学位学生', '44220', '14', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('154', '普通预科生', '91400', '15', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('155', '进修学生', '92100', '16', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('156', '培训学生', '92200', '17', '1004', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('157', '直接授予', '1', '1', '1005', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('158', '其他学历文凭考试', '2', '2', '1005', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('159', '其他', '3', '3', '1005', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('160', '香港同胞', '01', '1', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('161', '香港同胞亲属', '02', '2', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('162', '澳门同胞', '03', '3', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('163', '澳门同胞亲属', '04', '4', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('164', '台湾同胞', '05', '5', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('165', '台湾同胞秦顺', '06', '6', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('166', '华侨', '11', '7', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('167', '侨眷', '12', '8', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('168', '归侨', '13', '9', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('169', '归侨子女', '14', '10', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('170', '归国留学人员', '21', '11', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('171', '非华裔中国人', '31', '12', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('172', '外籍华裔人', '41', '13', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('173', '外国人', '51', '14', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('174', '其他', '99', '15', '1006', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('175', '汉族', '01', '1', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('176', '蒙古族', '02', '2', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('177', '回族', '03', '3', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('178', '藏族', '04', '4', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('179', '维吾尔族', '05', '5', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('180', '苗族', '06', '6', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('181', '彝族', '07', '7', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('182', '壮族', '08', '8', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('183', '布依族', '09', '9', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('184', '朝鲜族', '10', '10', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('185', '满族', '11', '11', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('186', '侗族', '12', '12', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('187', '瑶族', '13', '13', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('188', '白族', '14', '14', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('189', '土家族', '15', '15', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('190', '哈尼族', '16', '16', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('191', '哈萨克族', '17', '17', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('192', '傣族', '18', '18', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('193', '黎族', '19', '19', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('194', '傈傈族', '20', '20', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('195', '佤族', '21', '21', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('196', '畲族', '22', '22', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('197', '高山族', '23', '23', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('198', '拉祜族', '24', '24', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('199', '水族', '25', '25', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('200', '东乡族', '26', '26', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('201', '纳西族', '27', '27', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('202', '景颇族', '28', '28', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('203', '柯尔克孜族', '29', '29', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('204', '土族', '30', '30', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('205', '达翰尔族', '31', '31', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('206', '仫佬族', '32', '32', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('207', '羌族', '33', '33', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('208', '布朗族', '34', '34', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('209', '撒拉族', '35', '35', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('210', '毛难族', '36', '36', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('211', '仡佬族', '37', '37', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('212', '锡伯族', '38', '38', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('213', '阿昌族', '39', '39', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('214', '普米族', '40', '40', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('215', '塔吉克族', '41', '41', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('216', '怒族', '42', '42', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('217', '乌孜别克族', '43', '43', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('218', '俄罗斯族', '44', '44', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('219', '鄂温克族', '45', '45', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('220', '崩龙族', '46', '46', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('221', '保安族', '47', '47', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('222', '裕固族', '48', '48', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('223', '京族', '49', '49', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('224', '塔塔尔族', '50', '50', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('225', '独龙族', '51', '51', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('226', '鄂伦春族', '52', '52', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('227', '赫哲族', '53', '53', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('228', '门巴族', '54', '54', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('229', '珞巴族', '55', '55', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('230', '基洛族', '56', '56', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('231', '其他', '97', '57', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('232', '外国血统', '98', '58', '1007', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('233', '男', '1', '1', '1008', '\0', '2018-04-08 17:53:31', '2018-04-09 15:46:52');
INSERT INTO `sys_dict` VALUES ('234', '女', '2', '2', '1008', '\0', '2018-04-08 17:53:31', '2018-04-09 15:46:52');
INSERT INTO `sys_dict` VALUES ('235', '本科生', '1', '1', '1009', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('236', '硕士生', '2', '2', '1009', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('237', '博士生', '3', '3', '1009', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('238', '预科生', '4', '4', '1009', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict` VALUES ('245', '党员', '2', '2', '1011', '\0', '2018-04-08 17:53:31', '2018-04-09 17:56:07');
INSERT INTO `sys_dict` VALUES ('249', '180', '1', '1', '1014', '\0', '2018-04-09 10:41:22', '2018-04-09 10:42:46');
INSERT INTO `sys_dict` VALUES ('250', '190', '2', '2', '1014', '\0', '2018-04-09 10:41:22', '2018-04-09 10:42:46');
INSERT INTO `sys_dict` VALUES ('251', '176', '3', '3', '1014', '\0', '2018-04-09 10:42:46', '2018-04-09 10:42:46');
INSERT INTO `sys_dict` VALUES ('252', '170', '4', '4', '1014', '\0', '2018-04-09 10:42:46', '2018-04-09 10:42:46');
INSERT INTO `sys_dict` VALUES ('253', '你们', '5', '5', '1014', '\0', '2018-04-09 10:42:46', '2018-04-09 10:42:46');
INSERT INTO `sys_dict` VALUES ('254', 'f\'f', '1', '1', '1015', '\0', '2018-04-09 10:51:54', '2018-04-09 14:58:51');
INSERT INTO `sys_dict` VALUES ('255', '哦额么', '2', '2', '1015', '\0', '2018-04-09 10:51:54', '2018-04-09 14:58:51');
INSERT INTO `sys_dict` VALUES ('257', 'www', '2', '2', '1023', '\0', '2018-04-09 15:56:08', '2018-04-09 16:21:32');
INSERT INTO `sys_dict` VALUES ('258', 'www', '1', '1', '1024', '\0', '2018-04-09 16:26:11', '2018-04-09 16:41:23');
INSERT INTO `sys_dict` VALUES ('260', 'ndjdnj', '2', '2', '1024', '\0', '2018-04-09 16:41:23', '2018-04-09 16:41:23');
INSERT INTO `sys_dict` VALUES ('262', '选11', '1', '1', '1025', '\0', '2018-04-09 17:14:24', '2018-04-09 18:57:02');
INSERT INTO `sys_dict` VALUES ('263', '选2222', '2', '2', '1025', '\0', '2018-04-09 17:14:24', '2018-04-09 18:57:02');
INSERT INTO `sys_dict` VALUES ('264', '您的', '1', '1', '1026', '\0', '2018-04-09 18:57:30', '2018-04-09 19:04:07');
INSERT INTO `sys_dict` VALUES ('265', '好的', '2', '2', '1026', '\0', '2018-04-09 18:57:30', '2018-04-09 19:04:07');
INSERT INTO `sys_dict` VALUES ('266', '我们', '1', '1', '1027', '\0', '2018-04-09 19:20:29', '2018-04-09 19:20:41');
INSERT INTO `sys_dict` VALUES ('267', '他们', '2', '2', '1027', '\0', '2018-04-09 19:20:41', '2018-04-09 19:20:41');
INSERT INTO `sys_dict` VALUES ('268', '难上', '1', '1', '1028', '\0', '2018-04-09 19:21:45', '2018-04-09 19:21:45');
INSERT INTO `sys_dict` VALUES ('273', '1', '1', '1', '1033', '\0', '2018-04-09 19:38:35', '2018-04-09 20:46:16');
INSERT INTO `sys_dict` VALUES ('274', '2', '2', '2', '1033', '\0', '2018-04-09 19:38:35', '2018-04-09 20:46:16');
INSERT INTO `sys_dict` VALUES ('276', '4', '4', '4', '1033', '\0', '2018-04-09 19:38:35', '2018-04-09 20:46:16');
INSERT INTO `sys_dict` VALUES ('278', '', '1', '1', '1034', '\0', '2018-04-09 20:49:38', '2018-04-10 10:18:08');
INSERT INTO `sys_dict` VALUES ('279', 'w', '2', '2', '1034', '\0', '2018-04-09 20:49:38', '2018-04-10 10:18:08');
INSERT INTO `sys_dict` VALUES ('280', 'a', '3', '3', '1034', '\0', '2018-04-09 20:49:38', '2018-04-10 10:18:08');
INSERT INTO `sys_dict` VALUES ('282', 'e', '4', '4', '1034', '\0', '2018-04-10 10:00:13', '2018-04-10 10:18:08');
INSERT INTO `sys_dict` VALUES ('283', 'r', '5', '5', '1034', '\0', '2018-04-10 10:00:13', '2018-04-10 10:18:08');
INSERT INTO `sys_dict` VALUES ('284', 'y', '6', '6', '1034', '\0', '2018-04-10 10:18:08', '2018-04-10 10:18:08');
INSERT INTO `sys_dict` VALUES ('285', '', '1', '1', '1036', '\0', '2018-04-10 10:36:25', '2018-04-10 10:38:26');
INSERT INTO `sys_dict` VALUES ('286', 'b', '2', '2', '1036', '\0', '2018-04-10 10:36:25', '2018-04-10 10:38:26');
INSERT INTO `sys_dict` VALUES ('287', 'd', '3', '3', '1036', '\0', '2018-04-10 10:36:25', '2018-04-10 10:38:26');
INSERT INTO `sys_dict` VALUES ('288', 'a', '4', '4', '1036', '\0', '2018-04-10 10:36:25', '2018-04-10 10:38:26');
INSERT INTO `sys_dict` VALUES ('289', '', '1', '1', '1037', '\0', '2018-04-10 10:40:18', '2018-04-10 10:40:18');
INSERT INTO `sys_dict` VALUES ('290', 'a', '2', '2', '1037', '\0', '2018-04-10 10:40:18', '2018-04-10 10:40:18');
INSERT INTO `sys_dict` VALUES ('291', 'c', '3', '3', '1037', '\0', '2018-04-10 10:40:18', '2018-04-10 10:40:18');
INSERT INTO `sys_dict` VALUES ('292', 'b', '4', '4', '1037', '\0', '2018-04-10 10:40:18', '2018-04-10 10:40:18');
INSERT INTO `sys_dict` VALUES ('293', '1', '1', '1', '1038', '\0', '2018-04-10 10:58:07', '2018-04-10 10:58:20');
INSERT INTO `sys_dict` VALUES ('294', '2', '2', '2', '1038', '\0', '2018-04-10 10:58:07', '2018-04-10 10:58:20');
INSERT INTO `sys_dict` VALUES ('297', '1', '1', '1', '1039', '\0', '2018-04-10 11:53:28', '2018-04-10 12:01:42');
INSERT INTO `sys_dict` VALUES ('298', '2', '2', '2', '1039', '\0', '2018-04-10 11:53:28', '2018-04-10 12:01:42');
INSERT INTO `sys_dict` VALUES ('300', '1', '1', '1', '1040', '\0', '2018-04-10 12:04:24', '2018-04-10 12:04:30');
INSERT INTO `sys_dict` VALUES ('302', '1', '1', '1', '1041', '\0', '2018-04-10 15:46:05', '2018-04-10 15:46:05');
INSERT INTO `sys_dict` VALUES ('303', '2', '2', '2', '1041', '\0', '2018-04-10 15:46:05', '2018-04-10 15:46:05');
INSERT INTO `sys_dict` VALUES ('304', '3', '3', '3', '1041', '\0', '2018-04-10 15:46:05', '2018-04-10 15:46:05');
INSERT INTO `sys_dict` VALUES ('305', '4', '4', '4', '1041', '\0', '2018-04-10 15:46:05', '2018-04-10 15:46:05');
INSERT INTO `sys_dict` VALUES ('306', '12', '1', '1', '1042', '\0', '2018-04-10 15:46:29', '2018-04-10 15:46:50');
INSERT INTO `sys_dict` VALUES ('310', '21', '2', '2', '1042', '\0', '2018-04-10 15:46:50', '2018-04-10 15:46:50');
INSERT INTO `sys_dict` VALUES ('315', 'a', '1', '1', '1044', '\0', '2018-04-10 16:12:38', '2018-04-10 16:12:42');
INSERT INTO `sys_dict` VALUES ('316', '2', '2', '2', '1044', '\0', '2018-04-10 16:12:38', '2018-04-10 16:12:42');
INSERT INTO `sys_dict` VALUES ('317', '3', '3', '3', '1044', '\0', '2018-04-10 16:12:38', '2018-04-10 16:12:42');
INSERT INTO `sys_dict` VALUES ('325', '1', '1', '1', '1043', '\0', '2018-04-10 16:31:27', '2018-04-10 16:31:27');
INSERT INTO `sys_dict` VALUES ('326', '2', '2', '2', '1043', '\0', '2018-04-10 16:31:27', '2018-04-10 16:31:27');
INSERT INTO `sys_dict` VALUES ('339', 'a', '2', '2', '1045', '\0', '2018-04-10 17:23:08', '2018-04-10 17:23:08');
INSERT INTO `sys_dict` VALUES ('340', 'b', '3', '3', '1045', '\0', '2018-04-10 17:23:08', '2018-04-10 17:23:08');
INSERT INTO `sys_dict` VALUES ('369', 'bbb', '4', '4', '1046', '\0', '2018-04-10 18:02:14', '2018-04-10 18:02:14');
INSERT INTO `sys_dict` VALUES ('370', 'ddd', '6', '6', '1046', '\0', '2018-04-10 18:02:14', '2018-04-10 18:02:14');
INSERT INTO `sys_dict` VALUES ('371', 'aaa', '2', '2', '1046', '\0', '2018-04-10 18:02:14', '2018-04-10 18:02:14');
INSERT INTO `sys_dict` VALUES ('372', 'ccc', '5', '5', '1046', '\0', '2018-04-10 18:02:14', '2018-04-10 18:02:14');
INSERT INTO `sys_dict` VALUES ('387', '5', '5', '5', '1048', '\0', '2018-04-10 20:21:33', '2018-04-10 20:21:41');
INSERT INTO `sys_dict` VALUES ('388', '3', '3', '3', '1048', '\0', '2018-04-10 20:21:41', '2018-04-10 20:21:41');
INSERT INTO `sys_dict` VALUES ('393', '1', '2', '2', '1047', '\0', '2018-04-11 11:16:45', '2018-04-11 11:16:45');
INSERT INTO `sys_dict` VALUES ('394', '2', '3', '3', '1047', '\0', '2018-04-11 11:16:45', '2018-04-11 11:16:45');
INSERT INTO `sys_dict` VALUES ('395', '4', '5', '5', '1047', '\0', '2018-04-11 11:16:45', '2018-04-11 11:16:45');
INSERT INTO `sys_dict` VALUES ('406', 'b', '3', '3', '1049', '\0', '2018-04-11 11:23:01', '2018-04-11 11:23:01');
INSERT INTO `sys_dict` VALUES ('407', 'c', '4', '4', '1049', '\0', '2018-04-11 11:23:01', '2018-04-11 11:23:01');
INSERT INTO `sys_dict` VALUES ('408', 'd', '5', '5', '1049', '\0', '2018-04-11 11:23:01', '2018-04-11 11:23:01');
INSERT INTO `sys_dict` VALUES ('409', 'a', '2', '2', '1049', '\0', '2018-04-11 11:23:01', '2018-04-11 11:23:01');
INSERT INTO `sys_dict` VALUES ('462', 'ttkjwjr', '4', '4', '1051', '\0', '2018-04-11 15:45:14', '2018-04-11 15:45:59');
INSERT INTO `sys_dict` VALUES ('463', 't', '3', '3', '1051', '\0', '2018-04-11 15:45:14', '2018-04-11 15:45:59');
INSERT INTO `sys_dict` VALUES ('464', 'd', '5', '5', '1051', '\0', '2018-04-11 15:45:14', '2018-04-11 15:45:59');
INSERT INTO `sys_dict` VALUES ('480', '34', '4', '4', '1050', '\0', '2018-04-11 16:37:31', '2018-04-11 16:37:31');
INSERT INTO `sys_dict` VALUES ('481', 'ttt', '3', '3', '1050', '\0', '2018-04-11 16:37:31', '2018-04-11 16:37:31');
INSERT INTO `sys_dict` VALUES ('488', '2', '3', '3', '1055', '\0', '2018-04-13 09:48:05', '2018-04-13 09:48:05');
INSERT INTO `sys_dict` VALUES ('503', '2', '3', '3', '1056', '\0', '2018-04-13 09:52:09', '2018-04-13 09:52:09');
INSERT INTO `sys_dict` VALUES ('529', '233555213', '3', '3', '1058', '\0', '2018-04-13 14:09:14', '2018-04-13 14:09:14');
INSERT INTO `sys_dict` VALUES ('536', '1', '2', '2', '1059', '\0', '2018-04-13 14:59:03', '2018-04-13 14:59:03');
INSERT INTO `sys_dict` VALUES ('537', '2', '3', '3', '1059', '\0', '2018-04-13 14:59:03', '2018-04-13 14:59:03');
INSERT INTO `sys_dict` VALUES ('538', '3', '4', '4', '1059', '\0', '2018-04-13 14:59:03', '2018-04-13 14:59:03');
INSERT INTO `sys_dict` VALUES ('539', '4', '5', '5', '1059', '\0', '2018-04-13 14:59:03', '2018-04-13 14:59:03');
INSERT INTO `sys_dict` VALUES ('607', '43', '5', '5', '1061', '\0', '2018-04-13 15:40:21', '2018-04-13 15:40:21');
INSERT INTO `sys_dict` VALUES ('608', '223', '3', '3', '1061', '\0', '2018-04-13 15:40:21', '2018-04-13 15:40:21');
INSERT INTO `sys_dict` VALUES ('609', '12', '6', '6', '1061', '\0', '2018-04-13 15:40:21', '2018-04-13 15:40:21');
INSERT INTO `sys_dict` VALUES ('610', '32', '4', '4', '1061', '\0', '2018-04-13 15:40:21', '2018-04-13 15:40:21');
INSERT INTO `sys_dict` VALUES ('611', '1234', '2', '2', '1061', '\0', '2018-04-13 15:40:21', '2018-04-13 15:40:21');
INSERT INTO `sys_dict` VALUES ('622', '1', '2', '2', '1062', '\0', '2018-04-13 15:54:32', '2018-04-13 15:54:32');
INSERT INTO `sys_dict` VALUES ('623', '3', '4', '4', '1062', '\0', '2018-04-13 15:54:32', '2018-04-13 15:54:32');
INSERT INTO `sys_dict` VALUES ('624', '2', '3', '3', '1062', '\0', '2018-04-13 15:54:32', '2018-04-13 15:54:32');
INSERT INTO `sys_dict` VALUES ('625', '4', '5', '5', '1062', '\0', '2018-04-13 15:54:32', '2018-04-13 15:54:32');
INSERT INTO `sys_dict` VALUES ('626', '5', '6', '6', '1062', '\0', '2018-04-13 15:54:32', '2018-04-13 15:54:32');
INSERT INTO `sys_dict` VALUES ('668', '公共服务', '8', '3', '1010', '\0', '2018-04-18 15:05:28', '2018-04-18 15:05:28');
INSERT INTO `sys_dict` VALUES ('669', '科研机构', '7', '2', '1010', '\0', '2018-04-18 15:05:28', '2018-04-18 15:05:28');
INSERT INTO `sys_dict` VALUES ('670', '党务部门', '9', '4', '1010', '\0', '2018-04-18 15:05:28', '2018-04-18 15:05:28');
INSERT INTO `sys_dict` VALUES ('671', '教学院系', '6', '1', '1010', '\0', '2018-04-18 15:05:28', '2018-04-18 15:05:28');
INSERT INTO `sys_dict` VALUES ('672', '河南', '1', '1', '1013', '\0', '2018-04-18 16:48:19', '2018-04-18 16:48:19');
INSERT INTO `sys_dict` VALUES ('673', '河北', '2', '2', '1013', '\0', '2018-04-18 16:48:19', '2018-04-18 16:48:19');
INSERT INTO `sys_dict` VALUES ('690', '北京市', '1', '1', '1013', '\0', '2018-04-18 16:48:19', '2018-04-18 16:48:19');
INSERT INTO `sys_dict` VALUES ('691', '天津市', '1', '1', '1013', '\0', '2018-04-18 16:48:19', '2018-04-18 16:48:19');
INSERT INTO `sys_dict` VALUES ('692', '4', '5', '5', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('693', '26', '3', '3', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('694', '1', '2', '2', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('695', '3', '4', '4', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('696', '5', '6', '6', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('697', '66', '7', '7', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('698', 'ee', '8', '8', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('699', '11', '9', '9', '1064', '\0', '2018-04-18 17:53:14', '2018-04-18 17:53:14');
INSERT INTO `sys_dict` VALUES ('724', 'c', '4', '4', '1068', '\0', '2018-04-20 09:39:23', '2018-04-20 09:39:23');
INSERT INTO `sys_dict` VALUES ('725', 'd', '5', '5', '1068', '\0', '2018-04-20 09:39:23', '2018-04-20 09:39:23');
INSERT INTO `sys_dict` VALUES ('726', 'a', '2', '2', '1068', '\0', '2018-04-20 09:39:23', '2018-04-20 09:39:23');
INSERT INTO `sys_dict` VALUES ('748', '5', '6', '6', '1067', '\0', '2018-04-20 09:40:45', '2018-04-20 09:47:38');
INSERT INTO `sys_dict` VALUES ('749', '3', '4', '4', '1067', '\0', '2018-04-20 09:47:38', '2018-04-20 09:47:38');
INSERT INTO `sys_dict` VALUES ('765', '4', '5', '5', '1070', '\0', '2018-04-20 14:02:17', '2018-04-20 14:02:17');
INSERT INTO `sys_dict` VALUES ('766', '3', '4', '4', '1070', '\0', '2018-04-20 14:02:17', '2018-04-20 14:02:17');
INSERT INTO `sys_dict` VALUES ('767', '2', '3', '3', '1070', '\0', '2018-04-20 14:02:17', '2018-04-20 14:02:17');
INSERT INTO `sys_dict` VALUES ('816', '2', '3', '3', '1071', '\0', '2018-04-22 23:19:53', '2018-04-22 23:19:53');
INSERT INTO `sys_dict` VALUES ('817', '1', '4', '4', '1071', '\0', '2018-04-22 23:19:54', '2018-04-22 23:19:54');
INSERT INTO `sys_dict` VALUES ('818', '6', '5', '5', '1071', '\0', '2018-04-22 23:19:54', '2018-04-22 23:19:54');
INSERT INTO `sys_dict` VALUES ('819', '9', '6', '6', '1071', '\0', '2018-04-22 23:19:54', '2018-04-22 23:19:54');
INSERT INTO `sys_dict` VALUES ('876', '8', '2', '2', '1072', '\0', '2018-04-24 09:32:15', '2018-04-24 09:32:15');
INSERT INTO `sys_dict` VALUES ('877', '1', '3', '3', '1072', '\0', '2018-04-24 09:32:15', '2018-04-24 09:32:15');
INSERT INTO `sys_dict` VALUES ('878', '3', '5', '5', '1072', '\0', '2018-04-24 09:32:15', '2018-04-24 09:32:15');
INSERT INTO `sys_dict` VALUES ('879', '2', '4', '4', '1072', '\0', '2018-04-24 09:32:15', '2018-04-24 09:32:15');
INSERT INTO `sys_dict` VALUES ('892', '3', '4', '4', '1074', '\0', '2018-04-25 14:33:05', '2018-04-25 14:33:05');
INSERT INTO `sys_dict` VALUES ('893', '1', '2', '2', '1074', '\0', '2018-04-25 14:33:05', '2018-04-25 14:33:05');
INSERT INTO `sys_dict` VALUES ('894', '2', '3', '3', '1074', '\0', '2018-04-25 14:33:05', '2018-04-25 14:33:05');
INSERT INTO `sys_dict` VALUES ('895', '4', '5', '5', '1074', '\0', '2018-04-25 14:33:05', '2018-04-25 14:33:05');
INSERT INTO `sys_dict` VALUES ('896', '6', '7', '7', '1074', '\0', '2018-04-25 14:33:05', '2018-04-25 14:33:05');
INSERT INTO `sys_dict` VALUES ('897', '5', '6', '6', '1074', '\0', '2018-04-25 14:33:05', '2018-04-25 14:33:05');
INSERT INTO `sys_dict` VALUES ('899', '软件学院', '2', '2', '1075', '\0', '2018-05-09 14:20:48', '2018-05-09 14:20:48');
INSERT INTO `sys_dict` VALUES ('900', '人文学院', '3', '3', '1075', '\0', '2018-05-09 14:20:48', '2018-05-09 14:20:48');

-- ----------------------------
-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `rank` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1076 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_dict_type
-- ----------------------------
INSERT INTO `sys_dict_type` VALUES ('39', '国籍', 'systemDefined', '\0', '2018-04-08 16:49:00', '2018-04-08 21:16:38');
INSERT INTO `sys_dict_type` VALUES ('66', '婚姻状态', 'systemDefined', '\0', '2018-04-08 20:51:48', '2018-04-08 21:16:12');
INSERT INTO `sys_dict_type` VALUES ('67', '宗教信仰', 'systemDefined', '\0', '2018-04-08 20:54:21', '2018-04-08 21:16:07');
INSERT INTO `sys_dict_type` VALUES ('68', '健康状态', 'systemDefined', '\0', '2018-04-08 20:55:49', '2018-04-08 21:16:07');
INSERT INTO `sys_dict_type` VALUES ('69', '证件类型', 'systemDefined', '\0', '2018-04-08 21:47:38', '2018-04-08 21:47:22');
INSERT INTO `sys_dict_type` VALUES ('1000', '培养层次', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1001', '培养方式', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1002', '身份证件类型', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1003', '在校状态', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1004', '学生类别', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1005', '获取学历方式', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1006', '港澳台侨外代码', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1007', '民族', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-09 14:59:09');
INSERT INTO `sys_dict_type` VALUES ('1008', '性别', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1009', '学习层次', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1010', '单位类别代码', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1011', '政治面貌', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1013', '地区', 'systemDefined', '\0', '2018-04-08 17:53:31', '2018-04-08 17:53:31');
INSERT INTO `sys_dict_type` VALUES ('1075', '学院', 'customDefined', '\0', '2018-05-08 11:44:32', '2018-05-09 14:20:23');

-- ----------------------------
-- Table structure for teacher_base_info
-- ----------------------------
DROP TABLE IF EXISTS `teacher_base_info`;
CREATE TABLE `teacher_base_info` (
  `user_id` bigint(20) NOT NULL,
  `authorized_strength` varchar(255) DEFAULT NULL,
  `birth_place` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `blood_type` varchar(255) DEFAULT NULL,
  `course_situation` varchar(255) DEFAULT NULL,
  `degree_of_education` varchar(255) DEFAULT NULL,
  `faith` varchar(255) DEFAULT NULL,
  `file_no` varchar(255) DEFAULT NULL,
  `file_text` varchar(255) DEFAULT NULL,
  `health_status` varchar(255) DEFAULT NULL,
  `highest_education` varchar(255) DEFAULT NULL,
  `hong_kong_macao_taiwan_oversea` varchar(255) DEFAULT NULL,
  `id_card_validity` varchar(255) DEFAULT NULL,
  `identification_no` varchar(255) DEFAULT NULL,
  `identification_type` varchar(255) DEFAULT NULL,
  `join_the_working_years` varchar(255) DEFAULT NULL,
  `main_research_topics` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_spell` varchar(255) DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `native_place` varchar(255) DEFAULT NULL,
  `on_the_job_state` varchar(255) DEFAULT NULL,
  `organisation` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `primary_discipline` varchar(255) DEFAULT NULL,
  `secondary_discipline` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `subject_type` varchar(255) DEFAULT NULL,
  `teacher_id` varchar(255) DEFAULT NULL,
  `time_start_teaching` varchar(255) DEFAULT NULL,
  `time_start_wage` varchar(255) DEFAULT NULL,
  `time_to_school` varchar(255) DEFAULT NULL,
  `used_name` varchar(255) DEFAULT NULL,
  `worker_category` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher_base_info
-- ----------------------------

-- ----------------------------
-- Table structure for teacher_contact_info
-- ----------------------------
DROP TABLE IF EXISTS `teacher_contact_info`;
CREATE TABLE `teacher_contact_info` (
  `user_id` bigint(20) NOT NULL,
  `account_category` varchar(255) DEFAULT NULL,
  `campus_no` varchar(255) DEFAULT NULL,
  `current_address` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `home_address` varchar(255) DEFAULT NULL,
  `home_page` varchar(255) DEFAULT NULL,
  `home_phone` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `mailing_address` varchar(255) DEFAULT NULL,
  `mobile_phone` varchar(255) DEFAULT NULL,
  `office_phone` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `registered_permanent_residence` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher_contact_info
-- ----------------------------

-- ----------------------------
-- Table structure for unit
-- ----------------------------
DROP TABLE IF EXISTS `unit`;
CREATE TABLE `unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `person_in_charge` bigint(20) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of unit
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `user_no` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
