const  { Schema, model } = require('mongoose');

const schemaUser = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
},
{
    versionKey: false
})

module.exports = model('User', schemaUser)