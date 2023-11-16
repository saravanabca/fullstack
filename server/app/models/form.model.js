const sql = require("./db.js");

// constructor
const Formdata = function(form) {
  this.name = form.name;
  this.email = form.email;
  this.age = form.age;
  this.address = form.address;
  this.imagefile = form.imagefile;
};

Formdata.create = (newFormdata, result) => {
  sql.query("INSERT INTO form SET ?", newFormdata, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Formdata: ", { id: res.insertId, ...newFormdata });
    // return;
    result(null, { id: res.insertId, ...newFormdata });
  });
};


Formdata.findById = (id, result) => {
  sql.query(`SELECT * FROM form WHERE form_id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return
    }

    if (res.length) {
      console.log("found Formdata: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Formdata with the id
    result({ kind: "not_found" }, null);
  });
};

Formdata.getAll = (title, result) => {
  let query = "SELECT * FROM form WHERE flag=1";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Formdatas: ", res);
    result(null, res);
  });
};



Formdata.updateById = (id, Formdata, result) => {
  sql.query(
    "UPDATE form SET name = ?, email = ?, age = ?,address = ? WHERE form_id = ?",
    [Formdata.name, Formdata.email, Formdata.age,Formdata.address, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Formdata with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Formdata: ", { id: id, ...Formdata });
      result(null, { id: id, ...Formdata });
    }
  );
};

Formdata.remove = (id, result) => {
  sql.query("UPDATE form SET flag=0 WHERE form_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Formdata with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Formdata with id: ", id);
    result(null, res);
  });
};

module.exports =Formdata;