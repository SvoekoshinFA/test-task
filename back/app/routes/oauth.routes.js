module.exports = app => {
    const oauth = require("../controllers/oauth.controller.js");
  
    var router = require("express").Router();
  
    router.get("/authorize", oauth.authorize);
  
    router.get("/callback", oauth.callback);
  
    router.get("/session", oauth.session);
  
    app.use('/oauth', router);
  };