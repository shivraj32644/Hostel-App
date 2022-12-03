import { hostelModel } from "../Database/hostel.model.js"

export const addHostel = async (req, res) => {
    const body = req.body;
    try {
        let user = req.user;
        if (user.email.includes("@masaischool.com")) {
            await hostelModel.create(body);
            return res.send({
                status: "success",
                message:body
            })
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


export const deleteHostel =async (req,res) => {
    try {
        const { id } = req.params.id
        let result = await hostelModel.findByIdAndDelete(id,{new:true});
        console.log("Deleted Item ",result);
        return res.status(200).send({
            status: "success",
            "message": {}
        })

    } catch (error) {
        return res.status(500).send({
            status: "Failed",
            message:"Server Error"
        })
    }
}

export const editHostelDetail = async () => {
    
}
