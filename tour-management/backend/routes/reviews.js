import express from 'express'
import { createReview } from '../controllers/reviewController.js';

const router = express.Router()

router.post('/:tourID', createReview )

export default router;