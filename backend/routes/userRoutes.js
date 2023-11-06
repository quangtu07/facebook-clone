import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { getUser, addOrRemoveFriend, getUserFriends, updateUser } from '../controllers/userController.js'

const router = express.Router();

router.get('/friends', userAuth, getUserFriends)
router.get('/:id', getUser)
router.post('/friends/:friendId', userAuth, addOrRemoveFriend);
router.put('/update', userAuth, updateUser);

export default router