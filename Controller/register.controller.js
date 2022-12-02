import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { userModel } from '../Database/user.model.js';
import * as dotenv from 'dotenv'
dotenv.config();
const SECRET = process.env.JWT_SECRET;
export const register = async (req, res) => {
    try {
        
        let body = req.body;
        
        if (body.email.includes('@masaischool.com')) {
            body.user_type = 'admin'
            let {name,user_type,email,password } = body;
            let existingUser =await userModel.findOne({ email });
            if (existingUser) {
                return res.send({
                    status: "Failed",
                    message:"User already exist"
                })
            }
            else {
                password = bcrypt.hashSync(password)
                let data=  await userModel.create({name,user_type,email,password})
                
                const token = jwt.sign({
                    _id: data._id,
                    email:data.email
                },SECRET)
                data = data.toJSON();
                delete data.password;
                return res.send({
                    status: "success",
                    message: token
                })
            }
           
    
        }   
        else {
            body.user_type = 'user'
            let {name,user_type,email,password } = body;
            console.log(email);
            let existingUser =await userModel.findOne( {email} );
            if (existingUser) {
                return res.send({
                    status: "Failed",
                    message:"User already exist"
                })
            }
            else {
                password = bcrypt.hashSync(password)
                let data=  await userModel.create({name,user_type,email,password})
                const token = jwt.sign({
                    _id: data._id,
                    email:data.email
                },SECRET)
                data = data.toJSON();
                delete data.password;
                return res.send({
                    status: "success",
                    message:token
                })
            }
        }
    } catch (error) {
        return res.status(500).send({
            status: "failed",
            message:"Server Error"
        })
    }
    
}