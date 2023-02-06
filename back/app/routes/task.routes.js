module.exports = app => {
    const task = require("../controllers/task.controller.js");
    //const jasper = require("../controllers/jasper.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", task.findAll);
  
    router.get("/:id", task.findOne);
  
    app.use('/rest/api/task', router);
  };