import mongoose from "mongoose"
// ! mongodb+srv://shiv:shiv32644@cluster0.cewl226.mongodb.net/?retryWrites=true&w=majority

export const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/hostel', (err) => {
            if (err) {
                reject("Connection Failed to Database")
            }
            else {
                resolve();
            }
        })
    })
}