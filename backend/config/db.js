import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shiv10212005_db_user:Invoice123@cluster0.mnjib9i.mongodb.net/InvoiceAI')
    .then(() =>{
        console.log("DB CONNECTED");    
    })
}