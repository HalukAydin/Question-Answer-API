const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const customErrorHandler= require("./middlewares/errors/customErrorsHandler");
const connectDatabase=require("./helpers/database/connectDatabase");
const path = require("path");
//Environment Variables
dotenv.config({
    path:"./config/env/config.env"
});
//Mongodb Connection
connectDatabase();

const app = express();

app.use(express.json());
const PORT = process.env.PORT;

//Routers Middleware

app.use("/api",routers);


//Error Handling
app.use(customErrorHandler);

app.use(express.static(path.join(__dirname,"public")));
app.listen(PORT,()=>{
    console.log(`app started on ${PORT}:${process.env.NODE_ENV}`);
});