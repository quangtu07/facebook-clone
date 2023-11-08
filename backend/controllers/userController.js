import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../config/jwtToken.js'
import validateMongoDbId from '../utils/validateMongodbid.js'


// @description user registration
// @route POST /api/register

const userRegistration = asyncHandler(async (req, res) => {
    try {
        const { email } = req.body;

        //check if user exists
        const ifUser = await User.findOne({ email })

        if (ifUser) {
            res.status(400);
            throw new Error(`User Already Exists`);
        }
        const newUser = await User.create(req.body)
        res.json(newUser);
    } catch (err) {
        throw new Error(err);
    }
})

// @desc user login
// @route POST /api/login
// @access Public
const userLogin = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        //check for email
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400);
            throw new Error('user not found');
        }

        // check if user if forbidden by admin
        if (user.blockStatus) {
            res.status(403);
            throw new Error('user is blocked by admin');
        }
        console.log(user);
        // authenticate user
        if (user && (await user.isPasswordMatched(password))) {
            console.log('Here');
            res.status(200).json({
                user,
                token: generateToken(user._id)
            })
        } else {
            res.status(401);
            throw new Error('Invalid login credentials')
        }
    } catch (err) {
        throw new Error(err);
    }
})

// @desc get the user
// @route GET /api/users/:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
    try {
        // check if id is valid
        const { id } = req.params;
        validateMongoDbId(id);

        // get user by id
        const user = await User.findById(id);
        res.json(user);

    } catch (err) {
        throw new Error(err)
    }
})

const addOrRemoveFriend = asyncHandler(async (req, res) => {
    const { friendId } = req.params;
    const { _id } = req.user;
    validateMongoDbId(friendId);
    try {
        const user = await User.findById({ _id });
        const friend = await User.findById(friendId);
        debugger
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId.toString());
            friend.friends = friend.friends.filter((id) => id !== user._id.toString());
        } else {
            user.friends.push(friendId.toString());
            friend.friends.push(user._id.toString());
        }

        const updatedUser = await user.save();
        const updateFriend = await friend.save();

        res.status(200).json({
            updatedUser,
            updateFriend
        });

    } catch (err) {
        throw new Error(err)
    }
})

const getUserFriends = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const userFriends = await User.findById({ _id }).select("friends")

        // Lấy ra mảng các _id của bạn
        const friendIds = userFriends.friends;

        // Sử dụng $in operator để tìm tất cả bạn dựa trên _id
        const friendsData = await User.find({ _id: { $in: friendIds } })
            .select("firstName lastName picturePath");

        res.json(friendsData);
    } catch (err) {
        throw new Error(err);
    }
})

const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const updateUser = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.json(updateUser)
    } catch (err) {
        throw new Error(err);
    }
})

export {
    userRegistration,
    userLogin,
    getUser,
    addOrRemoveFriend,
    getUserFriends,
    updateUser
}