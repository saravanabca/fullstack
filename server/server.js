import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import authRoutes from './app/routes/auth.routes.mjs';
import userRoutes from './app/routes/user.routes.mjs';
import tutorialRoutes from './app/routes/tutorial.routes.mjs';
const app = express();

app.use(cors());
/* for Angular Client (withCredentials) */
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000"],
//   })
// );

app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:3000"
};

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Login-Auth",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
import { sequelize } from "./app/models";
// const Role = db.role;

sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server is Running." });
});

// routes
// routes
// require("./app/routes/auth.routes").default(app);
// require("./app/routes/user.routes").default(app);
// require("./app/routes/tutorial.routes.js").default(app);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tutorials',tutorialRoutes);


// require("./app/routes/form.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  // initial();
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user",
//   });

//   Role.create({
//     id: 2,
//     name: "moderator",
//   });

//   Role.create({
//     id: 3,
//     name: "admin",
//   });
// }
