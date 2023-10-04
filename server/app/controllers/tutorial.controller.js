import Tutorial from "../models/tutorial.model.js";

// Create and Save a new Tutorial
export async function create(req, res) {
  try {
    // Validate request
    if (!req.body) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Tutorial
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });

    // Save Tutorial in the database
    const data = await Tutorial.create(tutorial);
    res.send(data);
  } catch (err) {
    console.error("Error creating Tutorial:", err);
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Tutorial."
    });
  }
}

// Retrieve all Tutorials from the database (with condition).
export async function findAll(req, res) {
  try {
    const title = req.query.title;
    const data = await Tutorial.getAll(title);
    res.send(data);
  } catch (err) {
    console.error("Error retrieving tutorials:", err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
}

// Find a single Tutorial by Id
export async function findOne(req, res) {
  try {
    const data = await Tutorial.findById(req.params.id);
    if (!data) {
      return res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      });
    }
    res.send(data);
  } catch (err) {
    console.error("Error retrieving Tutorial:", err);
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      });
    } else {
      res.status(500).send({
        message: "Error retrieving Tutorial with id " + req.params.id
      });
    }
  }
}

// find all published Tutorials
export async function findAllPublished(req, res) {
  try {
    const data = await Tutorial.getAllPublished();
    res.send(data);
  } catch (err) {
    console.error("Error retrieving published tutorials:", err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
}

// Update a Tutorial identified by the id in the request
export async function update(req, res) {
  try {
    // Validate Request
    if (!req.body) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    const data = await Tutorial.updateById(req.params.id, new Tutorial(req.body));
    if (!data) {
      return res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      });
    }

    res.send(data);
  } catch (err) {
    console.error("Error updating Tutorial:", err);
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      });
    } else {
      res.status(500).send({
        message: "Error updating Tutorial with id " + req.params.id
      });
    }
  }
}

// Delete a Tutorial with the specified id in the request
export async function deleteById(req, res) {
  try {
    const data = await Tutorial.remove(req.params.id);
    if (!data) {
      return res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      });
    }
    res.send({ message: `Tutorial was deleted successfully!` });
  } catch (err) {
    console.error("Error deleting Tutorial:", err);
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      });
    } else {
      res.status(500).send({
        message: "Could not delete Tutorial with id " + req.params.id
      });
    }
  }
}

// Delete all Tutorials from the database.
export async function deleteAll(req, res) {
  try {
    const data = await Tutorial.removeAll();
    res.send({ message: `All Tutorials were deleted successfully!` });
  } catch (err) {
    console.error("Error deleting all Tutorials:", err);
    res.status(500).send({
      message: err.message || "Some error occurred while removing all tutorials."
    });
  }
}
