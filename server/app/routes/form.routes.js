module.exports = app => {
    const addform = require("../controllers/form.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", addform.create);
  
    // Retrieve all Tutorials
    // router.get("/", addform.findAll);
  
    app.use('/api/addform', router);
  };
  