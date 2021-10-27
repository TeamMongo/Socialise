const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    secrets:{
        jwt : process.env.JWT_SECRET || 'secret',
        jwtExp:'100d',
    },
    dbUrl: process.env.MONGODBURL || 'mongodb://localhost:27017/testdb',
}
module.exports = config;