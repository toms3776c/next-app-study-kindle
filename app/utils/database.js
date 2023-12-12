// app/utils/database.js
import mongoose, { mongo } from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://tom3776develop:wOBD2iO9TRNhil0F@cluster0.eq8ociu.mongodb.net/nextAppDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB