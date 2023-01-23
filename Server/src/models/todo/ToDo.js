const  { Schema, model } = require('mongoose');

const schemaToDo = new Schema({
    username:{type:String, required: true},
    text: {type: String, required: true},
    complete: { type: Boolean, default: false },
    timestamp: {type: String, default: Date.now()}
},
{
    versionKey: false
})

module.exports = model('todo', schemaToDo)