const User = require("../../database/models/user")

//=====================================
//       DELETE USER ID = DELETE
//=====================================

const deleteUser = async (req, res= response)=>{
    const id = req.params.id
  
    try {
      
      const userDB = await User.findById(id)
  
      if(!userDB){
        return res.status(401).json({
          ok: false,
          message:`'There is no user with this id:' ${id}`,
        })
      }
  
      const userDeleted = await User.findByIdAndRemove(userDB._id)
  
  
      res.status(200).json({
        ok: true,
        message: ' Everything is normal',
        userDeleted
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
    deleteUser
  }