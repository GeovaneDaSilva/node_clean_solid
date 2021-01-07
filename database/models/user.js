//Web Model
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


let rolesValidos = {
    values: ['USER_ROLE', 'SUPER_ROLE', 'ADMIN_ROLE',],
    message: 'Error, expected {PATH} is not valid.'

}

var userSchema = new Schema({
    id: {  type: String, required: [true, ' El id es requerido']},
    name: {  type: String, required: [false, ' El name es requerido']},
    email: {  type: String, unique: true,  required: [true, ' El email es requerido']},
    password: {  type: String, required: [true, ' El password es requerido']},
    phone: {  type: String, required: [false, ' El phone es requerido']},
    img: {  type: String, required: [false, ' la img es requerido']},
    role: { type: String, enum: rolesValidos, required: true, default: 'USER_ROLE'}
});


userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


module.exports = mongoose.model('User', userSchema);