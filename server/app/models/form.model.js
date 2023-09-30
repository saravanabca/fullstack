import { query } from "./db.js";

// constructor
class Form {
    constructor(form) {
        this.name = form.name;
        this.email = form.email;
        this.age = form.age;
        this.address = form.address;
    }
    static create(newTutorial, result) {
        query("INSERT INTO form SET ?", newTutorial, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
            result(null, { id: res.insertId, ...newTutorial });
        });
    }
}
export default Form;

