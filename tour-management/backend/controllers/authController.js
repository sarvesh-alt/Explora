import Users from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

//user registration
export const register = async (req, res) =>{
    try {
        const newUser =new User({
            username: req.body.username,
            email:req.body.email,
            password:req.body.password,
            photo:req.body.photo
        });

        await newUser.save();

        req.status(200).json({success:true, message: "successfully created"});
    } catch (err) {
        req.status(500).json({success:false, message: "Failed to create, Try again"})
    }
};


//user login 
export const login = async (req, res) =>{
    try {
    } catch (err) {}
};

export default {register, login}    