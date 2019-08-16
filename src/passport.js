'use strict';

import passportJwt from 'passport-jwt';

import userService from './services/user.service';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

function options(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.SECRET
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        userService.getUserById(jwt_payload.data._id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}

export {options};