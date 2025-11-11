import express from "express";
const app = express()
import { prismaClient } from "db/client";
// import v1Router from "./routes/v1"

app.post('/website',(req,res)=>{

})

app.get("/status/:websiteId",(req,res)=>{

})

app.listen(3000)