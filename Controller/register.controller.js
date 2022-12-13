import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { userModel } from '../Database/user.model.js';
import * as dotenv from 'dotenv'
dotenv.config();
const SECRET = process.env.JWT_SECRET;
export const register = async (req, res) => {
    try {
        
        let body = req.body;
        let existingUser = await userModel.find({ email: body.email });
        console.log(existingUser);
        if (existingUser.length > 0) {
            return res.status(404).json({
                message: "User already exist"
            })
        }
        else {
            if (body.email.includes('@hostelbuddy.com')) {
                body.user_type = 'admin'
                
                let existingUser = await userModel.findOne({ email:body.email });
                if (existingUser) {
                    return res.send({
                        status: "Failed",
                        message: "User already exist"
                    })
                }
                else {
                    password = bcrypt.hashSync(password)
                    let data = await userModel.create({ name, user_type, email, password })
                
                    const token = jwt.sign({
                        _id: data._id,
                        email: data.email
                    }, SECRET)
                    res.cookie("token", token, {
                        httpOnly: true
                    })
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
                let { name, user_type, email, password } = body;
                console.log(email);
                let existingUser = await userModel.findOne({ email });
                if (existingUser) {
                    return res.send({
                        status: "Failed",
                        message: "User already exist"
                    })
                }
                else {
                    password = bcrypt.hashSync(password)
                    let data = await userModel.create({ name, user_type, email, password })
                    const token = jwt.sign({
                        _id: data._id,
                        email: data.email
                    }, SECRET)
                    data = data.toJSON();
                    delete data.password;
                    return res.send({
                        status: "success",
                        message: token
                    })
                }
            }
        }
    } catch (error) {
        return res.status(500).send({
            status: "failed",
            message:"Server Error"
        })
    }
    
}