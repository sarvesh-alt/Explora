import express from 'express'
//import {createReview} from '../controllers/bookingController.js';
import { verifyUser } from '../utiils/verifyToken.js';
import { createReview } from '../controllers/reviewController.js';

const router = express.Router()

router.post('/:tourID',verifyUser, createReview )

export default router;