const { logger, logerror, logwarn } = require("../../helpers/logger");

const userControllers = () => {
    return {
        getLogin: (req, res,) => {
            if (req.isAuthenticated()) {
                logger.info('user logged')
                const user = req.user
                res.status(200).send(user);
            } else {
                logwarn.warn('user not logged')
            }
        },
        getUser: (req, res,) => {
            if (req.user) {
                const user = req.user
                res.status(200).send(user);
                logger.info('user logged')
            } else {
                res.status(404).send("user is not defined");
            }
        },
        postSignup: (req, res) => {
            if (req.isAuthenticated()) {
                const user = req.user
                logger.info('user logged in')
                res.status(200).send(user);

            } else {
                logerror.error('something go wrong')
                logwarn.warn('user not logged in')

            }
        },
        logoutUser: (req, res, next) => {
            req.logout(async function (err) {
                if (err) { return next(err); }
                await req.session.destroy();
                res.status(200).send(req.user);
            });
        }
    }
}

module.exports = userControllers