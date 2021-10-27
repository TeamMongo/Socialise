require("dotenv").config();
const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    secrets:{
        jwt : process.env.JWT_SECRET || 'secret',
        jwtExp:'5d',
    },
    dbUrl: process.env.MONGODBURL || 'mongodb://localhost:27017/testdb2',
    client_id:process.env.CLIENT_ID,
    client_secret:process.env.CLIENT_SECRET
}
module.exports = config;