const config = require('../../../db/config');
const db = require('../../../db/db');
const ObjectId = require('mongoose').Types.ObjectId;
const _ = require('lodash');

module.exports = {
    addFriend
}

// Function addFriend
async function addFriend({nameFriend, userId, myName}) {
    try{
        // status : 1 exitsFriend, 2 BlockFriend, 3 sentFriend
        let data;
        let addFriendList= [];
        const user = await db.Friend.findOne({userId : ObjectId(userId)});

        const infoFriend =await db.User.findOne({nameFriend : nameFriend}).select('userName email _id -wToken');
        if(!infoFriend) return{ status : false, message : 'Not found infoFriend'};
        const param = {
            userId : infoFriend._id,
            name : infoFriend.userName
        }
        addFriendList = addFriendList.push(param)

        if(_.isNull(user)){
            data = await db.Friend.create({
               userId :  userId,
               user : myName,
               friendList : [],
               addFriend : addFriendList,
               blockFriend : [],
            });
            if(!data) return{ status : false, message : 'Cannot create addFriend in DB Friend'}
            return { status : true, data}
        }
        else{
            const checkFriend = user.friendList.map(item => {
                if(item.name === nameFriend) return item
                return null;
            }).filter(item => item);
            if(checkFriend && checkFriend.length !== 0 ) return { status : 1, message : nameFriend + " already exist!"}
    
            const checkBlock = user.blockFriend.map(item => {
                if(item.name === nameFriend) return item
                return null;
            }).filter(item => item);
            if(checkBlock && checkBlock.length !== 0 ) return { status : 2, message : nameFriend + " have been in blockFriend list by mySelf!"}
    
            const checkSentFriend = user.addFriend.map(item => {
                if(item.name === nameFriend) return item
                return null;
            }).filter(item => item);
            if(checkSentFriend && checkSentFriend.length !== 0 ) return { status : 3, message : nameFriend + " have been in sentFriend list by mySelf!"}
            
            data = await db.Friend.findByIdAndUpdate({userId : ObjectId(userId)}, {$addToSet : {addFriend : addFriendList}},{$new : true}).lean();
            return { status : true, data}
        }
    }
    catch(e) {
        console.log('Error', e);
        return{
            status : false,
            message : e
        }
    }
}
