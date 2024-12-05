import express from 'express'
//import {createReview} from '../controllers/bookingController.js';
import { verifyUser } from '../utiils/verifyToken.js';
import { createBooking, getBooking, getAllBooking } from '../controllers/bookingController.js';

const router = express.Router()

router.post("/",verifyUser, createBooking );
router.post("/:id",verifyUser, getBooking );
router.post("/",verifyUser, getAllBooking );
  

export default router;