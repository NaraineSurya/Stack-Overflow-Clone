import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup = async (req,res) => {
    const {name, email,password} = req.body;
    try{
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User already exists."})
        }

        const hashedPassword = await bcrypt.hash(password,12)
        const newUser = await users.create({name ,email ,password: hashedPassword})
        const token = jwt.sign({ email: newUser.email, id:newUser._id}, "test",)

    } catch(error){
        res.status(500).json("Something went wrong")
    }
}

export const login = async (req,res) => {

}