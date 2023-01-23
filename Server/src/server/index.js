const { app } = require('./server')
const { conecction: {getConnections} } = require('../../Config')
const {logger, logerror } = require('../helpers/logger')
const { env: {PORT}} = require('../../Config') 

getConnections().then((message) => {
    logger.info(message)
    app.listen(PORT, () => {
        logger.info(`Server listening on port: ${PORT}`)
    })
    app.on('error', (err) => logerror.error(`an error: ${err} occurred while trying to connect to the server`))
})