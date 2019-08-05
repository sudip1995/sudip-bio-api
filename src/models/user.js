import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
export default User;