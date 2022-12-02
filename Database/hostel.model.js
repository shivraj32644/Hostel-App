import mongoose from "mongoose";

export const hostelSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    location: {
        type: String,
        require:true
    },
    type: {
        type: String,
        require: true,
        enum:["Boys","Girls","Both"]
    },
    rating: {
        type:Number
    },
    total_seats: {
        type: Number,
        require:true
    },
    price: {
        type: Number,
        require:true,
    },
    image: {
      type:String  
    },
    createdBy: {
        type: String,
        require:true,
        
    },
    Description: {
        type:String
    },
    Facilities: {
        type:String
    },
    Contact: {
        type:String
    }
})

export const hostelModel = mongoose.model("hostels", hostelSchema);