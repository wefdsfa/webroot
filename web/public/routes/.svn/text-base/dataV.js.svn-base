const express = require('express'),
	  config = require('../config'),
      request = require("request"),
      router = express.Router();

//学院人数统计
router.get('/statistics/students/colleges', function(req, res) {
  var schoolId = req.query.schoolId;
  var url = "/document/statistics/students/colleges";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([]);
    }
    let collegeStatistics = [];
    data.forEach(function(item) {
      collegeStatistics.push({
        x: item.label,
        y: item.count
      });
    });
    res.json(collegeStatistics);
  });
});

//在校生人数统计
router.get('/statistics/studentInSchool', function(req, res) {
  var schoolId = req.query.schoolId;
  var url = "/document/statistics/studentInSchool";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([{value: 0}]);
    }
    res.json([{
      value: data
    }]);
  });
});

//学生性别统计
router.get('/statistics/students/sex', function(req, res) {
  var schoolId = req.query.schoolId;
  var url = "/document/statistics/students/sex";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([]);
    }
    let sexStatistics = [];
    data.forEach(function(item) {
      sexStatistics.push({
        x: item.label,
        y: item.count
      });
    });
    res.json(sexStatistics);
  });
});

//学生学习层次统计
router.get('/statistics/students/educationLevels', function(req, res) {
  var schoolId = req.query.schoolId;
  var top = req.query.top ? req.query.top : 0;
  var url = "/document/statistics/students/educationLevels";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([]);
    }
    let educationLevelStatistics = [];
    data.forEach(function(item) {
      educationLevelStatistics.push({
        name: item.label,
        value: item.count ? item.count : 0
      });
    });
    educationLevelStatistics.sort(function(item1, item2) {
      return item2.value - item1.value
    });
    if (!top) {
      res.json(educationLevelStatistics);
    } else {
      res.json([educationLevelStatistics[top - 1]]);
    }
  });
});

//学生民族统计
router.get('/statistics/students/nations', function(req, res) {
  var schoolId = req.query.schoolId;
  var url = "/document/statistics/students/nations";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([]);
    }
    let nationStatistics = [];
    data.forEach(function(item) {
      nationStatistics.push({
        nation: item.label,
        count: item.count ? item.count : 0
      });
    });
    nationStatistics.sort(function(item1, item2) {
      return item2.count - item1.count
    });
    res.json(nationStatistics.filter(function(item) {
      return item.count != 0;
    }));
  });
});

//学生生源地统计
router.get('/statistics/students/originPlace', function(req, res) {
  var schoolId = req.query.schoolId;
  var top = req.query.top ? req.query.top : 0;
  var url = "/document/statistics/students/originPlace";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([]);
    }
    let originPlaceStatistics = [];
    data.forEach(function(item) {
      originPlaceStatistics.push({
        name: item.label,
        value: item.count ? item.count : 0
      });
    });
    originPlaceStatistics.sort(function(item1, item2) {
      return item2.value - item1.value
    });
    if (top) {
      res.json([originPlaceStatistics[top - 1]]);
    } else {
      res.json(originPlaceStatistics);
    }
  });
});

//学生政治面貌统计
router.get('/statistics/students/politicalStatus', function(req, res) {
  var schoolId = req.query.schoolId;
  var url = "/document/statistics/students/politicalStatus";

  requestBackend(url, schoolId, function(err, data) {
    if (err) {
      return res.json([]);
    }
    let politicalStatusStatistics = [];
    data.forEach(function(item) {
      politicalStatusStatistics.push({
        type: item.label,
        value: item.count ? item.count : 0
      });
    });
    res.json(politicalStatusStatistics);
  });
});

function requestBackend(url, schoolId, callback) {
  let options = {
    url: config.dev.saasBackEndHost + url,
    method: 'GET',
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': 'schoolId=' + schoolId
    }
  };
  request(options, function (error, response, body) {
    if (error || body.code !== "88888") {
      res.json(error);
    } else {
      callback(null, body.data);
    }
  });
}

module.exports = router;