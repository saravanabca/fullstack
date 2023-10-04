import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import authRoutes from './app/routes/auth.routes.mjs';
import userRoutes from './app/routes/user.routes.mjs';
import tutorialRoutes from './app/routes/tutorial.routes.mjs';
import { sequelize } from "./app/models/index.js";

const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Login-Auth",
    keys: ["COOKIE_SECRET"], // should use an environment variable for secret
    httpOnly: true,
    sameSite: 'strict'
  })
);


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


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  // initial(); // You can uncomment and call this function to initialize roles if needed.
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
