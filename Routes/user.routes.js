import { Router } from "express";
import { login } from "../Controller/login.controller.js";
import { register } from "../Controller/register.controller.js";


export const userRoutes = Router();

userRoutes.post('/register', register)
userRoutes.post('/login',login)

