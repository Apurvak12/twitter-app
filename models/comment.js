const mongoose=require('mongoose');
const {Schema}=mongoose;
const CommentSchema= new Schema({
    comment:{
        type:String,
        trim:true
    },
    tweetId:{
       type:Schema.ObjectId,
       ref:'Tweets',
       required:true
    }
});

const Comments=mongoose.model('Comments',CommentSchema);
module.exports={
    Comments
}