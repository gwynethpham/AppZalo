const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const response = require('../../../helpers/response');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/getAll', getAll);
router.get('/current', getCurrent);
router.get('/getById', getById);
router.put('/update', update);
router.delete('/delete', _delete);
router.post('/loginSocial', loginSocial);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(result => response.handleResponse(req, res, true, result))
        .catch(err => next(err));
}


// function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

function register(req, res, next) {
    userService.create(req.body.param)
    .then(result => response.handleResponse(req, res, false, result))
    .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
    .then(result => response.handleResponse(req, res, true, result))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
    .then(result => response.handleResponse(req, res, true, result))
    .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.body)
    .then(result => response.handleResponse(req, res, true, result))
    .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.body)
    .then(result => response.handleResponse(req, res, true, result))
    .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.body)
    .then(result => response.handleResponse(req, res, true, result))
    .catch(err => next(err));
}

function loginSocial(req, res, next) {
    userService.loginSocial(req.body)
    .then(result => response.handleResponse(req, res, true, result))
    .catch(err => next(err));
}