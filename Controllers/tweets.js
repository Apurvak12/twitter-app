const {Tweets}=require('../models/tweets');

const getTweets=async(req,res)=>{
    try{
        const {limit=10,skip=0}=req.query;
        const sortBy={title:1};
        const data=await Tweets.find().sort(sortBy).skip(skip).limit(limit);
       res.send(data)
    }catch(error){
        console.log(error);
       res.send('Opps, something went wrong!!')
    }
};

const addTweets=async(req,res)=>{
    try{
        console.log(req.body);
   let data=await Tweets.create(req.body);
   res.send({
    data,
    message:'added'
   })
    }catch(error){
  console.log(error)
   res.send('Opps, something went wrong!!');
    }
}

const deleteTweets=async(req,res)=>{
    try{
    const existingPost=await Tweets.findById(req.params.id);
    if(!existingPost){
        return res.status(401),send({message:'no post found'});
    }
    await Tweets.deleteOne({_id:req.params.id});
res.send({
        message:'delete successfully'
    });
    }catch(error){
res.send({
       message:'not delete successfully'
    });
    }
}

const putTweets=async(req,res)=>{
    try{
          let existingData=await Tweets.findById(req.params.id);
          if(!existingData){
           return res.send('No data with this id');
          }
       console.log('Exsiting data',existingData);
         const result=await Tweets.updateOne(
            ({_id:req.params.id}),
            req.body
          );
           console.log('Result',result);
       return res.send({message:'updated'});
    }catch(error){
         console.log('Error',error);
        res.send('opps,something went wrong');
    }
};
module.exports={
  getTweets,
  addTweets,
  putTweets,
  deleteTweets
};