import { query as _query } from "./db.js";

class Tutorial {
  constructor(tutorial) {
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
  }

  static async create(newTutorial, result) {
    try {
      const res = await _query("INSERT INTO tutorials SET ?", newTutorial);
      console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
      result(null, { id: res.insertId, ...newTutorial });
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }

  static async findById(id, result) {
    try {
      const res = await _query(`SELECT * FROM tutorials WHERE id = ${id}`);
      if (res.length) {
        console.log("found tutorial: ", res[0]);
        result(null, res[0]);
      } else {
        result({ kind: "not_found" }, null);
      }
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }

  static async getAll(title, result) {
    let query = "SELECT * FROM tutorials";
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }

    try {
      const res = await _query(query);
      console.log("tutorials: ", res);
      result(null, res);
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }

  static async getAllPublished(result) {
    try {
      const res = await _query("SELECT * FROM tutorials WHERE published=true");
      console.log("tutorials: ", res);
      result(null, res);
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }

  static async updateById(id, tutorial, result) {
    try {
      const res = await _query(
        "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
        [tutorial.title, tutorial.description, tutorial.published, id]
      );
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
      } else {
        console.log("updated tutorial: ", { id: id, ...tutorial });
        result(null, { id: id, ...tutorial });
      }
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }

  static async remove(id, result) {
    try {
      const res = await _query("DELETE FROM tutorials WHERE id = ?", id);
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
      } else {
        console.log("deleted tutorial with id: ", id);
        result(null, res);
      }
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }

  static async removeAll(result) {
    try {
      const res = await _query("DELETE FROM tutorials");
      console.log(`deleted ${res.affectedRows} tutorials`);
      result(null, res);
    } catch (err) {
      console.error("error: ", err);
      result(err, null);
    }
  }
}

export default Tutorial;
