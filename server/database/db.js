import mongoose from "mongoose";

//This is the setting and connecting the database
export const Connection = async () => {
    const URL = 'mongodb+srv://user:minheal%4097005@mindheal.bda4e.mongodb.net/?retryWrites=true&w=majority&appName=MindHeal';
    try {
        await mongoose.connect(URL, {
            connectTimeoutMS: 30000
          });
        console.log("Database connected successfully");
    } catch(error) {
        console.log("Error while connecting the database", error.message);
    }
}

export default Connection;