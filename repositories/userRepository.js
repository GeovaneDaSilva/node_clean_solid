const User = require('../database/models/user')
const userProps = 'name email phone address city company img role created_date '
const { bcrypt, uuidv4 } = require('../userCases/userModule')
const getAll = async () => await User.find({}, userProps)
const getOne = async id => await User.findById(id, userProps)

const save = async (body) =>{
    const user = new User({
      id: uuidv4(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      password: bcrypt.hashSync(body.password, 10),
      img: body.img,
      role: body.role,
      created_date: new Date(),
    })

    await user.save()

    return user
}

module.exports = {
    getAll,
    getOne,
    save
}