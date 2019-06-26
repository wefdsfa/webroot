const openRoutes = [
  '/certification/yiban/system',
  '/certification/freshman',
  '/firstPage/info',
  '/firstPage/images/*',
  '/logout',
  '/tip',
  '/login',
  '/login/employment',
  '/*/login',
  '/*/login/employment',
  '/system/config',
  '/login/cas', // TODO 重构此路由 改为 /auth 等前缀
  '/login/cas/*',
  '/login/cas/app/*',
  '/login/cas/*/app/*',
  '/login/qyhauth/*',
  '/certification/yiban',
  '/official/schools',
  '/system/name',
  '/school/*',
  '/school/*/login',
  '/school/*/name',
  '/*/app/*',
  '/app/*',
  '/openapi/document/import/studentInfo',
  '/openapi/document/import/major',
  '/official/*/config/update',
  '/official/heartbeat',
  '/api/users/certifications',
  '/users/certifications',
  '/downloads/storage/images/*',
  '/certification/system',
  '/s/*/*',
  '/downloads/sc/activityProcesses/exportSignUsersFile',
  '/certification/official',
  '/wjx/getScore',
  '/*/payment/verify',
  '/ccb/test/ccb/test/login/*/*',
  '/ccb/test/*',
  '/ccb/test/*/*',
  '/ccb/test/*/*/*',
  '/ccb/test/*/*/*/*',
  '/ccb/test/*/*/*/*/*',
  '/openapi/announcement/list/pages/byUsers',
  '/downloads/sc/activities/applies/files',

  // 就业系统页面
  '/api/employment/*',
  '/api/employment/*/*',
  '/api/employment/*/*/*',
  '/api/employment/*/*/*/*',
  '/employment',
  '/employment/*',
  '/employment/*/*',
  '/employment/certifications/loginCheck',
  '/*/employment/index',
  '/employment/index',
  '/employment/register',
  '/api/employment/certifications/register',
  '/api/employment/platform/getPositionListBySearch',
  '/employment/recruitmentInfoApply',
  '/api/employment/platform/recruitmentList',
  '/api/employment/certifications/activeAccount',
  '/api/employment/certifications/sendVerificationCodeToNewMail',
  '/api/employment/certifications/passwordResetConfirm',
  '/employment/forget',
  '/upload/storage/images',
  // '/login/check'
 // '/employment/login',

  // 录取查询页面
  '/*/enroll/enrollSearch',
  '/enroll/enrollSearch',
  '/api/archives/query/*',
  '/upload/archives/query/*/saveInfo',
  '/api/archives/query/*/applyOperateStatus',
  '/api/archives/query/getEnrollResult',
  '/api/archives/query/getImageDate',
  '/downloads/archives/query/getImageDate',

   // 招生计划页面
   '/*/enroll/enrollPlan',
   '/enroll/enrollPlan',
   '/table-data/archives/PC/getEnrollment',
   '/api/archives/getCCMC',
   '/api/archives/getJHLBMC',
    // 历年分数页面
    '/*/enroll/yearScores',
    '/enroll/yearScores',
    '/api/archives/demo/getSysDict',
    '/table-data/archives/yearScore/allPcEnroll',
    '/table-data/archives/yearScore/pcMajorEnroll',
     // 新生档案页面
     '/*/enroll/newStudentInfo',
     '/enroll/newStudentInfo',
     '/api/archives/queryArchiveByStudent',
     // 意向生登记页面
     '/*/enroll/studentDirection',
     '/enroll/studentDirection',
     '/api/archives/intention/major',
     '/api/archives/intention/register',
     // 招生行程页面
     '/*/enroll/enrollJourney',
     '/enroll/enrollJourney',
     '/table-data/archives/trip/getPcArrange',

     '/api/archives/permissions/getProvinceList',
     '/api/archives/permissions/getProvinceSecond',
     '/api/archives/getSchool',
      // 智能评估
      '/*/enroll/intelligentAssessment',
      '/enroll/intelligentAssessment',
      '/api/archives/evaluation/score',
      '/api/archives/evaluation/scoreMajor',
      '/api/archives/evaluation/scoreRank',
      '/api/archives/evaluation/scoreMajorRank'
]

const openRouteRegExps = openRoutes.map(openRoute => new RegExp(`^${openRoute.replace(/\*+/g, '(\\w|-|_)+')}$`))

module.exports = (req, res, next) => {
  req.isOpenRoute = false
  if (openRoutes.includes(req.pathname) || /\./g.test(req.pathname)) {
    req.isOpenRoute = true
  } else {
    for (let openRouteRegExp of openRouteRegExps) {
      if (openRouteRegExp.test(req.pathname)) {
        req.isOpenRoute = true
        break
      }
    }
  }
  next()
}
