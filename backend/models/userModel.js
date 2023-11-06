import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    friends: {
        type: Array,
        required: false,
        default: []
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    blockStatus: {
        type: Boolean,
        required: false,
        default: false,
    },
    picturePath: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    occupation: {
        type: String,
        required: false,
    },
    viewedProfile: {
        type: Number,
        required: false,
    },
    impressions: {
        type: Number,
        required: false,
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    // if password is changed, encrypt password again
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
};

export default mongoose.model('User', userSchema)