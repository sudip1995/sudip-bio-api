'use strict';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../models/user.model';

import dotenv from 'dotenv';

dotenv.config();


function getUserById(id, callback) {
    User.findById(id, callback);
}

function getUserByEmail(email, callback){
    const query = {email: email}
    User.findOne(query, callback);
}

function registerUser(req, res) {
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
};

function authenticateUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'Wrong email or password!'});
        }
        comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign({data: user}, process.env.SECRET, {
                    expiresIn: process.env.WEEK
                });
                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                })
            } else {
                return res.json({success: false, msg: 'Wrong email or password!'});
            }
        });
    });
}

function comparePassword(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
}

export default { getUserById, getUserByEmail, registerUser, authenticateUser };