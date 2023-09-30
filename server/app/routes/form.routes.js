export default app => {
    const addform = require("../controllers/form.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", addform.create);
  
    // // Retrieve all addform
    // router.get("/", addform.findAll);
  
    // // Retrieve all published addform
    // router.get("/published", addform.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", addform.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", addform.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", addform.delete);
  
    // // Delete all addform
    // router.delete("/", addform.deleteAll);
  
    app.use('/api/addform', router);
  };
  