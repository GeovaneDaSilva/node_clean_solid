'use strict'

const express = require('express')
const { create, get, update, Delete, login } = require('../userCases/userController')
const router = express.Router()
 
const  auth = require('../middlewares/auth') // auth

router.post('/login/',  login.login) // POST USER

router.post('/user/', [ auth.verificaToken ], create.createUser ) // POST USER

router.get('/users/',  [ auth.verificaToken,], get.getUsers) // GET USERS

router.get('/user/:id', auth.verificaToken, auth.verificaToken,  get.getUser) // GET USERS

router.delete('/user/:id', [ auth.verificaToken, auth.verificaRole_Admin ],  Delete.deleteUser) // GET USERS
router.put('/user/:id', update.updateUser)  // GET USERS




module.exports = router;