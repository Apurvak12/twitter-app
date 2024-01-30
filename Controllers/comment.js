const {Comments}=require('../models/comment');

const getComments=async(req,res)=>{
try{
const query={
    tweetId:req.params.tweetId,
}
console.log(query);
let data=await Comments.find(query);
res.send({
    data:data
})
}
catch(error){
console.log(error);
res.send("Opps! Something went wrong")
}
};
const addComments=async(res,req)=>{
    try{
    req.body.tweetId=req.params.tweetId
    console.log(req.body);
    let data=await Comments.create(req.body);
    res.send({
        data:data
    })
    }
    catch(error){
        console.log(error);
        res.send("Opps! Something went wrong")
    }
};
const putComments=async(req,res)=>{
    try{
      let existingData=await Comments.findById(req.params.id);
      if(!existingData){
      return res.send('no data with this id');
}
console.log('Existing Data',existingData);
const result=await Comments.updateOne(
    ({_id:req.params.id}),
    req.body
);
console.log('result',result);
return res.send({message:'updated'});
    }
    catch(error){
        console.log(error);
        res.send("Opps! Something went wrong");
    }
};
const deleteComments=async(req,res)=>{
    try{
const existingPost=await Comments.findById(req.params.id);
    if(!existingPost){
        return res.status(401),send({message:'no post found'});
    }
    await Comments.deleteOne({_id:req.params.id});
res.send({
        message:'delete successfully'
    });
    }
    catch(error){
        res.send({message:'not deleted successfully'})
    }
}
module.exports={
    getComments,
    addComments,
    putComments,
    deleteComments
}