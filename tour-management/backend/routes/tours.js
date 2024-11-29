
import express from "express";
import {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour
  } from "../controllers/tourController.js"; // Import all required controllers


const router = express.Router();

//create new tour
router.post('/', createTour);

//update new tour
router.put("/:id", updateTour);

//delete tour
router.post("/:id", deleteTour);

//get Single tour
router.get("/:id", getSingleTour);

//create new  tour
router.get("/:id", getAllTour);

export default router;