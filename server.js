const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors');

const dotenv=require('dotenv');
dotenv.config();
const userRoutes = require("./api/routes/user");

//app level middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

//Connecting DB(Mongoose)
const DB_URI="mongodb+srv://honnaraju:H1%40onnaraju@cluster0.jyz1s.mongodb.net/eCom_backend?retryWrites=true&w=majority"

mongoose.connect(DB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("mongoose Connected"))
.catch(()=>console.log("mongoose Didnot Connect"))

app.get('/',(req,res,next)=>{
    res.end("Inside Honnaraju-portfolio-contact-API ");
})

app.use("/user",userRoutes)

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Started in port ${PORT}`);
})