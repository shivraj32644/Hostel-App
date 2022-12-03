import { Router } from "express";
import { addHostel, deleteHostel } from "../Controller/adminHostel.controller.js";
import { fetchOneHostel, getHostel } from "../Controller/UserHostel.controller.js";
import { hostelModel } from "../Database/hostel.model.js";


export const hostelRoutes = Router();

hostelRoutes.get('/', getHostel)
hostelRoutes.get('/hostel/:id',fetchOneHostel)
hostelRoutes.post('/hostel/add',addHostel)
hostelRoutes.delete('/hostel/:id',deleteHostel)
hostelRoutes.patch('/hostel/:id',deleteHostel)