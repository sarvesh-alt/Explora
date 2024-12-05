import express from 'express'
import { createBooking } from '../controllers/bookingController.js';
import { verifyUser } from '../utiils/verifyToken.js';
import { createReview } from '../controllers/reviewController.js';

const router = express.Router()

router.post('/',verifyUser, createReview);

export default router;