//Created by Purshell
var moment = require('moment');
exports.calcTime = function(time) {
  var now = moment();

  var startOfToday = now.clone().startOf('day');
  var startOfYesterday = startOfToday.clone().subtract(1, 'day');
  var startOfYear = now.clone().startOf('year');

  time = moment(time);

  // 去年  显示 YYYY-MM-DD HH:mm
  if (time.isBefore(startOfYear)) {
    return time.format('YYYY-MM-DD HH:mm');
  }

  // 昨天之前   显示 MM-DD HH:mm
  if (time.isBefore(startOfYesterday)) {
    return time.format('MM-DD HH:mm');
  }

  // 昨天   显示 昨天 HH:mm
  if (time.isBefore(startOfToday)) {
    return time.format('昨天 HH:mm');
  }

  // 今天  1分钟内
  var diffSeconds = now.diff(time, 'seconds');
  if (diffSeconds < 60) {
    // return diffSeconds + '秒前';
    return '刚刚';
  }

  // 今天  60分钟内
  if (diffSeconds < 60 * 60) {
    return Math.floor(diffSeconds / 60) + '分钟前';
  }

  // 今天  多少小时前
  return Math.floor(diffSeconds / (60 * 60)) + '小时前';
};

exports.getSchoolYearDate = function(year) {
  year = Number(year);
  let start = moment();
  let end = moment();
  let nextYear = year + 1;
  const START_MONTH = 8;
  const START_DAY = 1;
  const START_HOUR = 0;
  const START_MINUTE = 0;
  const START_SECOND = 0;
  const START_MILLISECOND = 0;

  const END_MONTH = 7;
  const END_DAY = 30;
  const END_HOUR = 23;
  const END_MINUTE = 59;
  const END_SECOND = 59;
  const END_MILLISECOND = 999;
  start.set({
    year: year,
    month: START_MONTH,
    date: START_DAY,
    hour: START_HOUR,
    minute: START_MINUTE,
    second: START_SECOND,
    millisecond: START_MILLISECOND,
  });

  end.set({
    year: nextYear,
    month: END_MONTH,
    date: END_DAY,
    hour: END_HOUR,
    minute: END_MINUTE,
    second: END_SECOND,
    millisecond: END_MILLISECOND,
  });
  return {
    start: start,
    end: end
  }
};

exports.getYearsByGrade = function(grade) {
  let years = [];
  let noLatest = true;
  let year = Number(grade);
  let now = moment();
  while (noLatest) {
    let {
      start,
      end
    } = this.getSchoolYearDate(year);
    if (start.isAfter(now)) {
      noLatest = false;
    } else {
      years.push(year);
      ++year;
    }
  }
  return years.sort(function(a, b) {
    return b - a
  });
};



exports.getDateFormatYYYY_MM_DD_HH_mm = function(date) {
  let today = moment();
  if (today.isSame(date, 'year')) {
    return moment(date).format('MM-DD HH:mm')
  } else {
    return moment(date).format('YYYY-MM-DD HH:mm')
  }
}
