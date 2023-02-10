module.exports = app => {
    const task = require("../controllers/task.controller.js");
    //const jasper = require("../controllers/jasper.controller.js");
  
    var router = require("express").Router();
  
    router.get("/search", task.search);
  
    router.get("/worklog/:id", task.worklog);
  
    router.get("/session/:id", task.session);
  
    app.use('/rest/api/task', router);
  };