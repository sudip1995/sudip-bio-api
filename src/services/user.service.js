'use strict';

import { User } from '../models/user.model';

function registerUser(req, res) {
    console.log(req);
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

export default { registerUser };