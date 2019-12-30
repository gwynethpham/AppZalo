const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    hash: { type: String, required: true },
    username : {type: String, required: true},
    email: { type: String, trim: true },
    wToken : { type : String , trim : true, index : true},
    avatar : {data : Buffer, contentType : String},
    sId : { type : String , trim : true, index : true},// user socketId check online-offline
    role : {type : String , default : 'user'},  //user -admin -editor
}, { timestamps : true});

module.exports = mongoose.model('User', userSchema);