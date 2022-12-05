import mongoose from "mongoose";

export const hostelSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    location: {
        cityName: String,
        stateName: String,
        streetName: String,
        postalCode: String,
        
    },
    type: {
        type: String,
        require: true,
        enum:["Boys","Girls","Both"]
    },
    postedDate:{ type: Date, default: Date.now },
    
    rating: {
        type:Number
    },
    available_rooms: {
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