const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../db/db');
const User = db.User;
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function authenticate({ email , password }) {
  try{
    const user = await User.findOne({ email }).lean();
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        console.log('token',token);
        return {
            ...userWithoutHash,
            token
        };
    }
  }
  catch(err){
    console.log('error', err);
    return { status : false, message : err}
  }
    
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById({ id }) {
    return await User.findById(id).select('-hash');
}

async function create({firstName, lastName, email, password}) {
  try{
      if (await User.findOne({email}))  throw 'email "' + email + '" is already taken';
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        firstName,
        lastName,
        hash : bcrypt.hashSync(password, 10),
        username : firstName + lastNamem,
        role : 'user',
        wToken: "wToken" + getRandomInt(0, 999999999999),
      });
      if (!user) return {status : false, message : "create user not success"};

      const data = await User.find().select('-hash');

      return { status : true, data};
  }
  catch(e){
      console.log('error', e);
      return { status : false, message : e}
  }

}

async function update({id, userParam}) {
    const user = await User.findById(id);
    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }
    // copy userParam properties to user
    Object.assign(user, userParam);
    await user.save();
}

async function _delete({id}) {
    await User.findByIdAndRemove(id);
}










// const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const db = require('../../db/db');
// const User = db.User;
// const ObjectId = require('mongoose').Types.ObjectId;

// module.exports = {
//     authenticate,
//     getAll,
//     getById,
//     create,
//     update,
//     delete: _delete
// };

// async function authenticate({ email , password }) {
//   try{
//     const user = await User.findOne({ email });
//     if (user && bcrypt.compareSync(password, user.hash)) {
//         const { hash, ...userWithoutHash } = user.toObject();
//         const token = jwt.sign({ sub: user.id }, config.secret);
//         return {
//             ...userWithoutHash,
//             token
//         };
//     }
//   }
//   catch(err){
//     console.log('error', err)
//   }
    
// }

// async function getAll() {
//     return await User.find().select('-hash');
// }

// async function getById(id) {
//     return await User.findById(id).select('-hash');
// }

// async function create({firstName, lastName, email, password}) {
//   try{
//       if (await User.findOne({email}))  throw 'email "' + email + '" is already taken';
//       const hash = bcrypt.hashSync(password, 10);
//       const user = await User.create({
//           firstName : firstName,
//           lastName : lastName,
//           email: email,
//           hash : hash,
//           username : firstName + lastName
//       });
//       // const data = await User.find().select('-hash');
//       return getAll();
//   }
//   catch(e)
//   {
//       console.log('error', e);
//   }

// }

// async function update(id, userParam) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }