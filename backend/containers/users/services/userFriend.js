const config = require('../../../db/config');
const db = require('../../../db/db');
const ObjectId = require('mongoose').Types.ObjectId;
const _ = require('lodash');

module.exports = {
    getFriendById,
    addFriend,
    acceptFriend,
    deleteFriend,
    blockFriend,
}

async function getFriendById({userId}) {
    try{
        return await db.Friend.findById(userId).lean();
    }
    catch(e) {
        console.log('Error', e);
        return { status : false, message : "Get Friend not success!"}
    }
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

async function acceptFriend({userFriendId, nameFriend, userId}){
    try{
        if(!userFriendId || !nameFriend || !userId) return{ status : false, message : 'Not found enough param'}
        const FriendList = db.Friend.findOne({userId : ObjectId(userId)}).lean();
        if(_.isNull(FriendList)) return {status : false, message : 'Friend list not found'};

        const checkAddFriend = FriendList && FriendList.addFriend.map(item => {
            if(item.userId === userFriendId) return item;
            return null;
        }).filter(item => item);

        if(!checkAddFriend || (checkAddFriend && checkAddFriend.length === 0)) return {status : false, message : 'Check Add friend not found request'}

        const newFriend = await db.Friend.findByIdAndUpdate({userId : ObjectId(userId)}, {$pull : {userId  : userFriendId}, $addToSet : {friendList : checkAddFriend}}, {$new : true}).lean();

        if(!newFriend) return { status : false, message : 'Accept friend not success!'}
        const data = await getFriendById({userId});

        return { status : true, data}

    }
    catch(e) {
        console.log('Errr',e);
        return { status : false, message : e}
    }
}
async function deleteFriend({userId, userFriendId}) {
    try{
        const CheckListFriend = await db.Friend.findById(userId).lean();
        if(_.isNull(CheckListFriend)) return {status : false, message : 'Query FriendList not success!'}

        CheckListFriend.friendList.map(async(item) => {
            if(item.userId === userFriendId) {
               await db.Friend.findByIdAndUpdate(userFriendId, {$pull : {userId : userFriendId}}, {$new : true}).lean();
               
               const data = await getFriendById({userId});
               return { status : true, data}
            }
            return item;
        });
        const data =await getFriendById({userId});
        return { status : true, data}
    }
    catch(e) {
        console.log('Error', e);
        return { status : false, message : e}
    }
}
async function blockFriend({userId, userFriendId}) {
    try{
        const CheckListFriend = await db.Friend.findById(userId).lean();
        if(_.isNull(CheckListFriend)) return {status : false, message : 'Query list Friend not success!'}

        const paramBlockFriend = CheckListFriend && CheckListFriend.friendList.map(item => {
            if(item.userId === userFriendId) return item;
            return null;
        }).filter(item => item);

        const BlockFriend = await db.Friend.findByIdAndUpdate(userId, {$pull : {friendList : paramBlockFriend}, $addToSet : {blockFriend : paramBlockFriend}}, {$new : true}).lean();
        if(!BlockFriend) return { status : false, message : 'Block Friend not success'}

        const data =await getFriendById({userId});
        return { status : true, data}
    }
    catch(e) {
        console.log('Error', e);
        return { status : false, message : e + 'Block Friend fail'}
    }
}
