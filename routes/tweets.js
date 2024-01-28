const router=require('express').Router();
const TweetController=require('../Controllers/tweets');
router.get('/',TweetController.getTweets);
router.post('/',TweetController.addTweets);
router.put('/:id',TweetController.putTweets);
router.delete('/:id',TweetController.deleteTweets);
module.exports=router;