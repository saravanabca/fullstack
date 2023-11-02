const Formdata = require("../models/form.model.js");

// Create and Save a new Formdata
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Formdata
  const form = new Formdata({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    address : req.body.address
  });

  // Save Formdata in the database
  Formdata.create(form, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Formdata."
      });
    else res.send(data);
  });
};



// Retrieve all Formdatas from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Formdata.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Formdatas."
      });
    else res.send(data);
  });
};


// Find a single Formdata by Id
exports.findOne = (req, res) => {
  Formdata.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Formdata with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Formdata with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};



// Update a Formdata identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Formdata.updateById(
    req.params.id,
    new Formdata(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Formdata with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Formdata with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Formdata with the specified id in the request
exports.delete = (req, res) => {
  Formdata.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Formdata with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Formdata with id " + req.params.id
        });
      }
    } else res.send({ message: `Formdata was deleted successfully!` });
  });
};


