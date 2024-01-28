const mongoose=require('mongoose');
const {Schema}=mongoose;
const TweetsSchema=new Schema({
    description:{
        type:String,
        trim:true,
    },
   
});


const Tweets=mongoose.model('Tweets',TweetsSchema);

module.exports={
    Tweets,
}