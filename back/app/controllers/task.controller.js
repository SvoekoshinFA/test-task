const fs = require("fs");

// Retrieve all Tasks from the database.
exports.search = (req, res) => {
  setTimeout(() => {
    fs.readFile('example/JiraAPI-isuues-search-sample.json', function (err, data) {
      if (err) res.status(500).send({
        message: err || "ERROR"
      });
      res.setHeader('content-type', 'application/json; charset=utf-8');
      res.send(data);
      return;
    })
  }, 2000)
};

exports.worklog = (req, res) => {
  setTimeout(() => {
    const id = req.params.id;

    fs.readFile('example/JiraAPI-worklog-by-issue-sample.json', function (err, data) {
      if (err) res.status(500).send({
        message: err || "ERROR"
      });
      res.setHeader('content-type', 'application/json; charset=utf-8');
      res.send(data);
      return;
    })
  }, 2000)
};

exports.session = (req, res) => {
  setTimeout(() => {
    fs.readFile('example/JiraAPI-session-sample.json', function (err, data) {
      if (err) res.status(500).send({
        message: err || "ERROR"
      });
      res.setHeader('content-type', 'application/json; charset=utf-8');
      res.send(data);
      return;
    })
  }, 2000)
};