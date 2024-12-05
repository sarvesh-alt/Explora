import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    usertId: {
      type: String,
    },
    useremail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    tourName: {
        type:String,
        required: true,
    },
    guestSize:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    bookAt:{
        type:String,
        required:true,
    },
  }, 
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);