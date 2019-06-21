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
  '/api/employment/*',
  '/api/employment/*/*',
  '/api/employment/*/*/*',
  '/api/employment/*/*/*/*',
  '/employment',
  '/employment/*',
  '/employment/*/*',
  '/employment/certifications/loginCheck',
  '/*/employment/index',
  '/*/enroll/index',
  // '/employment/login',
  '/employment/index',
  '/enroll/index',
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
