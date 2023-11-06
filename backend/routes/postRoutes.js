import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
import { createPost, getFeedPosts, findUserPosts, likePost } from '../controllers/postController.js'

const router = express.Router();

router.post('/create', upload.single('picture'), userAuth, createPost)
router.get('/', userAuth, getFeedPosts)
router.get('/:userId/posts', userAuth, findUserPosts);
router.put('/:postId/like', userAuth, likePost);

export default router