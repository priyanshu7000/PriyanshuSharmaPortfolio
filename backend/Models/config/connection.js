import mongoose from'mongoose';
import dotenv from'dotenv';
dotenv.config();

const connection=async()=>{
    try{
    await mongoose.connect(process.env.dbURL || "mongodb://127.0.0.1:27017/portfolioDB");        
    console.log("Database connected successfully");
    }
    catch(error){
        console.log(`Error while connecting to database ${error}`);
    }
}

export default connection;