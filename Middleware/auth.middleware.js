import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { userModel } from "../Database/user.model.js";
dotenv.config();
const SECRET = process.env.JWT_SECRET;

export const authMiddleware = async (req, res, next) => {
  try {
    var authorizedToken = req.headers.authorization || "";
    let token = authorizedToken.split(" ")[1];
    if (token) {
      let userExist = jwt.verify(token, SECRET);
      let user = await userModel.findById(userExist._id);
      user = user.toJSON();
      delete user.password;
      req.user = user;
      console.log(userExist);
      // jwt.decode(token)
    }
  } catch (error) {
    console.log(error)
  }

  next();
};
