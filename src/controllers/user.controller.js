import mongoose from 'mongoose';

import User from '../models';

module.exports.register = (req, res, next) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.gender = req.body.gender;
    user.dateOfBirth = req.body.dateOfBirth;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            //error handling
        }
 
    });
}