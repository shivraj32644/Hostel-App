import { hostelModel } from "../Database/hostel.model.js";


export const getHostel = async (req, res) => {
    try {
        if (req.user) {
            var data = await hostelModel.find();
            let { sort, order, location, type } = req.query;
            let filters = req.query;
            console.log(filters)
            if (sort && order) {
                order = order === 'asc' ? 1 : -1;
                data = await hostelModel.find().sort({[sort]: order})
            }
            if (filters) {
                data = await hostelModel.find(filters)
            }
            
            if (sort && order && filters) {
                order = order === 'asc' ? 1 : -1;
                data = await hostelModel.find(filters).sort({[sort]: order})
            }
            return res.send(data);
        } else {
            return res.status(404).send({
                status: "Failed",
                message:"User Not Found"
            })
        }
       
    } catch (error) {
        return res.status(500).send({
            status: "Failed",
            message:"Server Error"
        })
    }
}

export const fetchOneHostel = async(req,res) => {
    try {
        if (req.user) {
            const hostel = await hostelModel.findById(req.params.id)
            return res.send(hostel)
        }
        else {
            return res.status(404).send({
                status: "Failed",
                message:"User Not Found"
            })
        }
    } catch (error) {
        return res.status(500).send({
            status: "Failed",
            message:"Server Error"
        })
    }
}