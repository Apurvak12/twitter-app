const express=require('express');
const app=express();
const PORT=3001;
const mainRoutes = require('./routes/index');
const dBConfig=require('./Config/dbConfig');
app.use(express.json());
app.use('/', mainRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
    dBConfig.connectDb();
})