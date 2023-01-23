const {env:{MONGO_URL}} = require('../../Config')

/*------- Express --------*/
const express = require("express")
const app = express();
app.use(express.static('public'))
/* ----- Session ------ */
const session = require('express-session')
const MongoStore = require('connect-mongo')
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
app.use(session({
    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        mongoOptions: advancedOptions,
        autoRemove: 'interval',
        autoRemoveInterval: 10,        
    }),
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,    
}));



/* ----- Login & Register with Passport ---- */
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
require('../middleware/passport/passport')(passport)


/*------- Routes -------*/
const routes = require('../routes')
app.use(routes())

module.exports = { app }
