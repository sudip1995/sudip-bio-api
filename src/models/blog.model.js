'use strict';

import mongoose from 'mongoose';

var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    author: {
        type: String,
        // required: true,
        maxlength: 50
    },
    body: {
        type: String,
        required: true
    },
    isPosted: {
        type: Boolean,
        default: false
    },
    comments: [{ body: String, date: Date }],
    date: { 
        type: Date, 
        default: Date.now 
    },
    isFavourite: Boolean,
    meta: {
        votes: { type: Number, default: 0 },
        views: { type: Number, default: 0 }
    }
});

const Blog = mongoose.model('BlogPost', blogSchema);

export { Blog };