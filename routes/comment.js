const router=require('express').Router({mergeParams:true});
const CommentController=require('../Controllers/comment')

router.get('/',CommentController.getComments);
router.post('/',CommentController.addComments);
router.put('/:id',CommentController.putComments);
router.delete('/:id',CommentController.deleteComments);

module.exports=router;