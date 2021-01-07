const userRepository = require('../../repositories/userRepository')

//=====================================
//        READ LIST USERS = GET
//=====================================

const getUsers = async (req, res = response)=> {
  
    try {
      const usersDB = await userRepository.getAll()
      
      if(!usersDB){
        return res.status(401).json({
          ok: false,
          message:''
        })
      }
      const total = await User.count()
      res.status(200).json({
        ok: true,
        message:'Everything ok',
        usersDB,
        total
      })
  
    } catch (error) {
      
      if(error){
        return res.status(500).json({
          ok: false,
          message:`'Something on the server didn't work right.'`,
          error 
        })
      }
      
    }
  
  }
  
  
  //=====================================
  //        READ ONE USER ID = GET
  //=====================================
  
  const  getUser = async (req, res = response )=> {
    const id = req.params.id
  
    try {
  
      const userDB = await userRepository.getOne(id)
  
      if(!userDB){
        return res.status(401).json({
          ok: false,
          message:`'Something on the server didn't work right.'`,
        })
      }
  
      res.status(200).json({
        ok: true,
        message: ' Everything is normal',
        userDB
      })
      
    } catch (error) {
      return res.status(500).json({
        ok: true,
        message: `'Something on the server didn't work right.'`,
        error
      })
    }

  }

  module.exports = {
      getUsers,
      getUser
  }