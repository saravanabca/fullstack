import { create } from "../models/form.model.js";

// Create and Save a new Tutorial
export function create(req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const form = new Tutorial({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    address:req.body.address
  });

  // Save Tutorial in the database
  create(form, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Form."
      });
    else res.send(data);
  });
}
