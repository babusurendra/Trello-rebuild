let mongoose = require('mongoose');
let env = require('./env.port');
connectionString = env.connection.mongodev;
mongoose.connect(connectionString);
mongoose.connection.on('connection',()=>{

});
mongoose.connection.on('error',(error)=>{
   console.log("error whilc connecting DataBase");
});
mongoose.connection.on('disconnected',()=>{
    console.log("Data base disconnected , please check");
});
mongoose.connection.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log("Closed DB connection, as node process closed or terminated.");
        process.exit(0);
    });
});
require('../models/trello.model');