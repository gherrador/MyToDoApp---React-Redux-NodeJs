const Dao = require("../../dal/dao")
const model = require('../../models/index')
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

module.exports = () => {
    const { userDao } = Dao
    const { userModel } = model
    passport.use('login', new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
        await userDao.findUser(username, password, done)
    }))
    passport.use('signup', new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
        const userData = req.body
        userDao.findOrCreateUser(userData, username, password, done)
    }
    ))
    passport.serializeUser(function (user, done) {
        done(null, user.username);
    });

    passport.deserializeUser(function (username, done) {
        userModel.findOne({ username: username }, function (err, user) {
            done(err, user)
        }).lean()
    })
}
