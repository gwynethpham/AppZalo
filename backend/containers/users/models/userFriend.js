const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName : {type : String , require : true , trim : true},
    friendList : [ {
        userId :{ type : mongoose.Schema.Types.ObjectId, ref : 'User' },
        name : { type: String , trim : true},
        createdDate: { type: Date, default: Date.now },
        sort :{ type : Number, default : 0 },
        _id : false,
    } ],
    addFriend : [{
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
        name : {type : String, require: true},
        createdAt : {type : Date, default : Date.now},
        _id : false,
    }],
    blockFriend : [{
        userId : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
        name : {type : String, require: true},
        createdBlock : { type : Date },
        _id : false,
    }],
    id : false,
});

module.exports = mongoose.model('Friend', friendSchema);