import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();

//update new tour
router.put("/:id", updateUser);

//delete tour
router.delete("/:id", deleteUser);

//get Single tour
router.get("/:id", getSingleUser);

//create new  tour
router.get("/", getAllUser);

export default router;
