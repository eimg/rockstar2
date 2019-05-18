var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var sign_key = require('./config').sign_key;

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: sign_key
};

module.exports = new JwtStrategy(opts, function(decoded, done) {
    return done(null, true);
});
