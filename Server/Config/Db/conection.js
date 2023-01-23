const mongoose = require('mongoose');
const {MONGO_URI} = require('../Env/envConfig')

exports.getConnections = async() => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(MONGO_URI);
        return 'Connection DB Success!'
      } catch {
        return 'DB connection failed'        
      }
}
