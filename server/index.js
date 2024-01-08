import express from "express";
import route from "./routes/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
mongoose.connect(process.env.MONGO_URL).then(
    console.log("Database Connected"));
const app=express()

// middleware - use();
app.use(cors());
app.use(express.json());
app.use("/students",route)

app.listen(5000,()=>{console.log("server started ...")}) ;

