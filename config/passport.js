
const LineStrategy = require('passport-line-auth').Strategy;
const jwt = require('jsonwebtoken');

module.exports = function(passport) {
    passport.use(new LineStrategy({
        channelID: '<channelID>',
        channelSecret: '<channelSecret>',
        callbackURL: '<callbackURL>',
        scope: ['profile', 'openid', 'email'],
        botPrompt: 'normal'
    },
        function (accessToken, refreshToken, params, profile, cb) {
            
            return cb(null, profile);
        })
    );

    passport.serializeUser(function (user, cb) {
        
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });
}