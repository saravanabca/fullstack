import { verifySignUp } from "../middleware/index.js";
import { signup, signin, signout } from "../controllers/auth.controller";
import express from 'express';

const router = express.Router(); // Create an instance of express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  signup
);

router.post("/signin", signin);

router.post("/signout", signout);

export default router; // Export the router instance
