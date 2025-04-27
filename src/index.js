import connectDB from './db/index.js';
import 'dotenv/config'
import { app } from "./app.js";


connectDB()
    .then(() => {
        app.listen(process.env.PORT|| 3000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("mongodb connection failed", err)
    })






/*
import express from 'express'
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("error",error)
            throw error
        })

        app.listen (process.env.PORT,()=>{
            console.log(`App listing on port ${process.env.PORT}`)
        })
    }catch (err){
        console.log("error:",err)
        throw err
    }
}) ()*/