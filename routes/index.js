const router=require('express').Router();
const TweetsRoutes=require('./tweets');

router.use('/tweets', TweetsRoutes);

module.exports=router;