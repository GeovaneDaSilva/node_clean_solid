const create = require("./createUser/createUser")
const get = require("./getUsers/getUsers")
const update = require("./updateUser/updateUser")
const Delete = require("./deleteUser/deleteUser")
const login = require("./loginUser/loginUser")


module.exports = {
    create,
    get,
    update,
    Delete,
    login
    
}