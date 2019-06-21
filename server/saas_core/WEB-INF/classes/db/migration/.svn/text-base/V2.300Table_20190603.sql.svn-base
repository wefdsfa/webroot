ALTER TABLE `business_limit`
ADD COLUMN `education_level`  varchar(255) NULL;


ALTER TABLE `business_limit`
ADD COLUMN `url`  varchar(255) NULL,
ADD COLUMN `update_type`  varchar(20) NULL AFTER `url`,
ADD COLUMN `cron`  varchar(50) NULL AFTER `update_type`;


ALTER TABLE `business_student`
ADD COLUMN `create_time`  datetime NULL;



ALTER TABLE `student_status_info`
ADD COLUMN `organization_relationship`  varchar(50) DEFAULT 11;





ALTER TABLE `student_party_build_info`
ADD COLUMN `apply_time`  datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '申请入党时间' ;


ALTER TABLE `student_status_info`
ADD COLUMN `training_and_development_stage`  varchar(50) NULL;



ALTER TABLE `partybuild_organization`
MODIFY COLUMN `person_in_charge`  bigint(20) NULL DEFAULT NULL COMMENT '书记' AFTER `position`,
ADD COLUMN `deputy_secretary`  bigint(20) NULL COMMENT '副书记' AFTER `update_time`,
ADD COLUMN `deputy_secretary_position`  varchar(255) NULL AFTER `deputy_secretary`,
ADD COLUMN `charge_of_organization`  bigint(20) NULL COMMENT '组织委员' AFTER `deputy_secretary_position`,
ADD COLUMN `charge_of_organization_position`  varchar(255) NULL AFTER `charge_of_organization`,
ADD COLUMN `charge_of_publicity`  bigint(20) NULL COMMENT '宣传委员' AFTER `charge_of_organization_position`,
ADD COLUMN `charge_of_publicity_position`  varchar(255) NULL AFTER `charge_of_publicity`;

ALTER TABLE `partybuild_organization`
ADD COLUMN `person_in_charge_position`  varchar(255) NULL ;

ALTER TABLE `partybuild_organization`
ADD COLUMN `build_date`  date NULL COMMENT '成立时间';