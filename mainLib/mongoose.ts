import mongoose from "mongoose";

let isConnected = false; // variable assigned to track connection to DB

export const connectToDB = async () => {
mongoose.set("strictQuery", true);

if(!process.env.MONGODB_URI) return console.log("cannot find mongoDB")
if(isConnected) return console.log("Connected, using an existing DB connection on mongoDB")

try {
  await mongoose.connect(process.env.MONGODB_URI);
  
  isConnected = true;

  console.log("MongoDB Connected");
  
} catch (error) {
  console.log(error)
}

}