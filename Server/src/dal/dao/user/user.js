const { logger, logerror } = require("../../../helpers/logger")

const userDao =(models, isValidPassword, createHash) => {
    const { userModel } = models
    return {
        findUser: async (username, password, done) => {
            userModel.findOne({ username: username },
                async function (err, user) {
                    if (err)
                        return done(err)
                    if (!user) {
                        logerror.error('user not found:' + username)
                        return done(null, false)
                    }
                    if (! await isValidPassword(user, password)) {
                        logerror.error('Wrong password')
                        return done(null, false)
                    }
                    return done(null, user)
                }
            ).lean()
        },
        findOrCreateUser(userData, username, password, done) {            
            userModel.findOne({ username: username }, async function (err, user) {
                if (err) {
                    logerror.error('failed to registrer:' + err)
                    return done(err)
                }
                if (user) {
                    logerror.error('the user already exist')
                    return done(null, false)
                } else {                   
                    const newUser = new userModel({
                        name: userData.name,
                        surname: userData.surname,
                        username: username,
                        password: createHash(password)   
                    });
                    newUser.save(function(err) {
                        if (err) {
                            logerror.error('error saving user:' + err)
                            throw err;
                        }
                        logger.info('successfully registered user')
                        return done(null, newUser)
                    })
                }
            })
        }
    }
}

module.exports = userDao