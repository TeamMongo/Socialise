const express = require('express'),
    {json} = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    
    config  = require('./config/index'),
    {connect} = require("./utils/dbconnect");


const app = express();

app.use(cors());
app.use(json());

app.use(morgan("combined"))

app.get('*',(req,res)=>{
    res.json({message:"Verb Not supported"})
})

const start = async()=>{
    try{
        await connect()
        app.listen(config.port,()=>{
            console.log(`Server running in ${config.env} mode at port ${config.port}`);
        })
    }catch(e){
        console.log(e);
    }
}
exports.start = start;