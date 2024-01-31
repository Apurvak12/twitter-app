const router=require('express').Router();
const TweetController=require('../Controllers/tweets');

const CommentRoutes=require('./comment');

router.get('/',TweetController.getTweets);
router.post('/',TweetController.addTweets);
router.put('/:id',TweetController.putTweets);
router.delete('/:id',TweetController.deleteTweets);
router.use('/:tweetId/comment',CommentRoutes);
module.exports=router;