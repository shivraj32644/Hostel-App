import { Router } from "express";
import { addHostel } from "../Controller/adminHostel.controller.js";
import { fetchOneHostel, getHostel } from "../Controller/UserHostel.controller.js";
import { hostelModel } from "../Database/hostel.model.js";


export const hostelRoutes = Router();

hostelRoutes.get('/', getHostel)
hostelRoutes.get('/hostel/:id',fetchOneHostel)
hostelRoutes.post('/hostel/add',addHostel)