const sql = require("./db.js");

// constructor
const Form = function(form) {
  this.name = form.name;
  this.email = form.email;
  this.age = form.age;
  this.address = form.address;
};

Form.create = (newTutorial, result) => {
  sql.query("INSERT INTO form SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    // return;
    result(null, { id: res.insertId, ...newTutorial });
  });
};
module.exports =Form;