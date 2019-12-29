const db = require('../../db/db');
const ObjectId = require('mongoose').Types.ObjectId();
const serviceChat = require('../../containers/Chat/service')
module.exports = (io) => {
	let client = 0;

	io.on('connection', function(socket){
		client ++ ;
		console.log(client + " connect on Application");
		socket.on('USER_CONNECT', async(data) => {
			const {userId, userName, socketId} = data;
			const userUpdate = await db.User.findOneAndUpdate({_id : ObjectId(userId)}, {$set: {sId : sokcetId}}, {new : true});
			console.log('userUpdate -------------', userUpdate);
			if(!userUpdate){
                socket.emit('ERROR', { err: "cantUpdateSID" });
                return;
            }

			socket.broadcast.emit('BROADCAST_NOTIFICATION', userName + 'connect in this room');
		})

		socket.on('ADD_MESSAGE', async(data) => {
			const {message, userId, userName} = data;
			const addMess = await serviceChat.addMessage({message, userId, userName});
			if(!addMess) {
				socket.emit('ERROR', { err: "Add message not success!" });
                return;
			}
			io.sockets.emit('RESPONSE_MESSAGE', {...data});
		})

		 socket.on('connect_failed', function() {
		   console.log('==============> CONNECT USER FAILED <============== ')
		});
		 
		socket.on('disconnect', async (data) => {
			const {userId, userName } = data;
			const removeSocketId = await db.User.findOneAndUpdate({_id : ObjectId(userId)}, {$set : {sId : ''}},{new : true});
			console.log('removeSocketId', removeSocketId);
			if(!removeSocketId){
                socket.emit('ERROR', { err: "removeSocketId" });
                return;
            }
			client --;
			console.log(client + ' connect on Application');
		})
	});
}