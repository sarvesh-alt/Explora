import Tour from '../models/Tour.js';


//create new tour
export const createTour = async (req,res)=>{

    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res
          .status(200)
          .json({
            success:true, 
            message: 'Successfully created',
            data: savedTour,
          });
         
    } catch (err) {
        res
          .status(500)
          .json({success: false, message: 'Failed to create. Try again'});

    }
};

//update tour
export const updateTour = async (req,res)=>{
    const id = req.params.id;
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body,
        }, {new:true}
    );

        res.status(200).json({
            success:true, 
            message: 'Successfully created',
            data: updatedTour,
          });

    } catch (err) {
        res.status(500).json({
            success:false, 
            message: 'Failed to update',
          });
    }
};

export const deleteTour = async (req,res)=>{
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success:true, 
            message: 'Successfully deleted',
          });

    } catch (err) {
        res.status(500).json({
            success:false, 
            message: 'Failed to delete',
          });
    }
};

export const getSingleTour = async(req,res)=>{
    const id = req.params.id;
    try{
        const tour = await Tour.findById(id);

        res.status(200).json({
            success:true, 
            message: 'Successfully returned',
            data:tour
          });

    } catch (err) {
        res.status(404).json({
            success:false, 
            message: 'Not found',
          });
    }
};

export const getAllTour = async(req,res)=>{

    const page = parseInt(req.query.page);
    console.log(page);

    try{
        const tours = await Tour.find({}).skip(page * 8).limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfull",
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success:false, 
            message: 'Not found',
          });
    }
};

export const getTourBySearch = async (req, res) => {
    // here 'i' means case-sensitive
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try {
        //gte means greater than equal
        const tours = await Tour.find({ city, distance: {$gte:distance},
        maxGroupSize: {$gte:maxGroupSize} })

        res.status(200).json({
            success:true, 
            message: "Successful",
            data: tours,
          });

    } catch (err) {
        res.status(404).json({
            success:false, 
            message: 'Not found',
          });
    }
};

//get featured tpur
export const getFeaturedTour = async(req,res)=>{

    try{
        const tours = await Tour.find({featured:true}).limit(8);
        res.status(200).json({
            success: true,
            message: "Successfull",
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success:false, 
            message: 'Not found',
          });
    }
};

// get tour counts
export const getTourCount = async (req, res) => {
    try {
      // Fetch the estimated number of documents in the Tour collection
      const tourCount = await Tour.estimatedDocumentCount();
  
      // Send a success response with the count
      res.status(200).json({
        success: true,
        message: "Successfully fetched tour count",
        data: tourCount,
      });
    } catch (err) {
      // Handle any potential errors
      res.status(500).json({
        success: false,
        message: "Failed to fetch tour count",
        error: err.message, // Send a more descriptive error message
      });
    }
  };
  