const mongoose = require('mongoose'),
    config  = require('../config/index');

const connect = (url = config.dbUrl,opts={})=>{
    return mongoose.connect(url, {...opts,useNewUrlParser:true})
}

module.exports.connect = connect;