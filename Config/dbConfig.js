const mongoose=require('mongoose');

const connectDb=()=>{
    mongoose.connect('mongodb://localhost:27017/twitter-app');
    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully');
    });
    mongoose.connection.on('error',()=>{
    console.log('error in connectind database')
    })
}
module.exports={
    connectDb
}