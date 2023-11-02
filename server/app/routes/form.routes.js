module.exports = app => {
    const formdata = require("../controllers/form.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", formdata.create);
  
    // Retrieve all formdata
    router.get("/", formdata.findAll);

    router.get("/:id", formdata.findOne);

    // Update a Tutorial with id
    router.put("/:id", formdata.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", formdata.delete);
  
  
    app.use('/api/formdata', router);
  };
  