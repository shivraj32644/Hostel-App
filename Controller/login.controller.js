import { userModel } from "../Database/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.JWT_SECRET;
export const login = async (req, res) => {
    try {
        let body = req.body
        let { email, password } = body;
        let existingUser = await userModel.findOne({ email })
        // console.log(existingUser)
        if (!existingUser) {
            return res.status(404).send({
                status: "Failed",
                Message:"User does not exist"
            })
        }
        else {
            
            let validPassword = bcrypt.compareSync(password, existingUser.password);
            
            if (validPassword) {
               let token =  jwt.sign({
                    _id: existingUser._id,
                    email: existingUser.email
                },SECRET)
                
                return res.status(200).send({
                    status: "success",
                    message: token
                });
            }
            else {
                
                return res.status(404).send({
                    status: "failed",
                    message:"Wrong Password"
                });
            }
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: "ERROR",
            Message:"Server error"
        })
    }
}