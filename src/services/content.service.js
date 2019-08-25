'use strict';

import mongoose from 'mongoose';

import { Content } from '../models/content.model';

function getAllContentByType(req, res) {
    Content.find({contentType: req.params.contentType},function (err, content) {
        if (err) return console.error(err);
        res.send(content);
        });
};

function getContentById(req,res) {
    Content.findById(req.params.id, function(err, content) {
        if(err) return console.error(err);
        res.send(content);
    });
};

function saveContent(req, res) {

    var content = new Content();
    content.title = req.body.title;
    content.author = req.body.author;
    content.body = req.body.body;
    content.contentType = req.body.contentType;
    content.isPosted = true;
    // Convert the Model instance to a simple object using Model's 'toObject' function
    // to prevent weirdness like infinite looping...
    var upsertData = content.toObject();

    // Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
    delete upsertData._id;

    // Do the upsert, which works like this: If no Content exists with 
    // _id = content.id, then create a new doc using upsertData.
    // Otherwise, update the existing doc with upsertData
    Content.findOneAndUpdate({
        _id: req.params.id ? req.params.id : content.id}, upsertData, {upsert: true, new: true}, function(err, doc) {
            if (!err)
            return res.json(doc);
        else {
            return res.json(null);
        }
    });
};

export default { getAllContentByType, getContentById, saveContent };