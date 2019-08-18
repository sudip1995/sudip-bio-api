'use strict';

import mongoose from 'mongoose';

import { Blog } from '../models/blog.model';

function getAllBlogs(req,res) {
    Blog.find(function (err, blogs) {
        if (err) return console.error(err);
        res.send(blogs);
        });
};

function getBlogPostById(req,res) {
    Blog.findById(req.params.id, function(err, blog) {
        if(err) return console.error(err);
        res.send(blog);
    });
};

function saveBlogPost(req, res) {

    var blog = new Blog();
    blog.title = req.body.title;
    blog.author = req.body.author;
    blog.body = req.body.body;
    blog.isPosted = true;
    // Convert the Model instance to a simple object using Model's 'toObject' function
    // to prevent weirdness like infinite looping...
    var upsertData = blog.toObject();

    // Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
    delete upsertData._id;

    // Do the upsert, which works like this: If no Blog exists with 
    // _id = blog.id, then create a new doc using upsertData.
    // Otherwise, update the existing doc with upsertData
    Blog.findOneAndUpdate({
        _id: req.params.id ? req.params.id : blog.id}, upsertData, {upsert: true, new: true}, function(err, doc) {
            if (!err)
            return res.json(doc);
        else {
            return res.json(null);
        }
    });
};

export default { getAllBlogs, getBlogPostById, saveBlogPost };