import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Post from '../models/postModel.js'
import validateMongoDbId from '../utils/validateMongodbid.js'

const createPost = asyncHandler(async (req, res) => {
    const { title, description, picturePath } = req.body
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const post = await Post.create({
            title,
            description,
            picturePath,
            author: _id
        })
        res.json(post)
    } catch (err) {
        throw new Error(err)
    }
})

const getFeedPosts = asyncHandler(async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.json(allPosts)
    } catch (err) {
        throw new Error(err)
    }
})

const findUserPosts = asyncHandler(async (req, res) => {
    const { userId } = req.params
    validateMongoDbId(userId);
    try {
        const userPosts = await Post.find({ author: userId });
        res.json(userPosts)

    } catch (err) {
        throw new Error(err);
    }
})

const likePost = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { postId } = req.params;
    validateMongoDbId(_id);
    try {
        const post = await Post.findById({ _id: postId })
        if (!post) {
            throw new Error('Not found post')
        }

        const isLiked = post.likes.includes(_id)

        if (isLiked) {
            // If the user has already liked the post, remove the like
            post.likes.pull(_id);
        } else {
            // If the user has not liked the blog, add the like
            post.likes.push(_id);
        }

        // Toggle the "isLiked" field based on the current state
        post.isLiked = !isLiked;

        // Save the updated blog
        const updatedPost = await post.save();

        res.json(updatedPost);
    } catch (err) {
        throw new Error(err);
    }
})

export {
    createPost,
    getFeedPosts,
    findUserPosts,
    likePost
}