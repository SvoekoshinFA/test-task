const fs = require("fs");

// Create and Save a new Task
exports.create = (req, res) =>  {
  res.status(200).send({
    message: "TO DO"
  });
  return;
};

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
  fs.readFile('example/JiraAPI-isuues-search-sample.json', function(err, data) {
    if (err) res.status(500).send({
      message: err || "ERROR"
    });
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.send(data);
    return;
  })
};

// Find a single Task with an id
exports.findOne = (req, res) =>  {
  fs.readFile('example/JiraAPI-worklog-by-issue-sample.json', function(err, data) {
    if (err) res.status(500).send({
      message: err || "ERROR"
    });
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.send(data);
    return;
  })
};

// Update a Task by the id in the request
exports.update = (req, res) =>  {
  res.status(200).send({
    message: "TO DO"
  });
  return;
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) =>  {
  res.status(200).send({
    message: "TO DO"
  });
  return;
};
// Delete all Tasks from the database.
exports.deleteAll = (req, res) =>  {
  res.status(200).send({
    message: "TO DO"
  });
  return;
};

// Find all published Tasks
exports.findAllPublished = (req, res) => {
    res.status(200).send({
      message: "TO DO"
    });
    return;
  };