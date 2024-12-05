
import express from "express";
import {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
  } from "../controllers/tourController.js"; // Import all required controllers
  import { verifyAdmin } from "../utiils/verifyToken.js";


const router = express.Router();

//create new tour
router.post('/', verifyAdmin, createTour);

//update new tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id",verifyAdmin, deleteTour);

//get Single tour
router.get("/:id", getSingleTour);

//create new  tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;