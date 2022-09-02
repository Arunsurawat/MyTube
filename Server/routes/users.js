import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsuscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

export default router;

//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

//suscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//unsuscribe a user
router.put("/unsub/:id", verifyToken, unsuscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

// dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);
