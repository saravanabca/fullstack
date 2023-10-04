import { authJwt } from "../middleware";
import { allAccess, userBoard, moderatorBoard, adminBoard } from "../controllers/user.controller";
import express from 'express';

const router = express.Router(); // Create an instance of express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

router.get("/api/test/all", allAccess);

router.get(
  "/api/test/user",
  [authJwt.verifyToken],
  userBoard
);

router.get(
  "/api/test/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  moderatorBoard
);

router.get(
  "/api/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  adminBoard
);

export default router; // Export the router instance
