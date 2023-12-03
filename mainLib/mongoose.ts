import mongoose from "mongoose";

let isConnected = false; // variable assigned to track connection to DB

export const connectToDB = async () => {
mongoose.set("strictQuery", true)
}