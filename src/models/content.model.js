'use strict';

import mongoose from 'mongoose';

var contentSchema = new mongoose.Schema({
    contentType: {
        type: String,
        required: true
    },
    language: {
        type: String,
        enum: ["bengali", "english"]
    },
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    author: {
        type: String,
        required: true,
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
    publishedDate: { 
        type: Date, 
        default: Date.now 
    },
    isFavourite: Boolean,
    meta: {
        votes: { type: Number, default: 0 },
        views: { type: Number, default: 0 }
    }
});

const Content = mongoose.model('Content', contentSchema);

export { Content };