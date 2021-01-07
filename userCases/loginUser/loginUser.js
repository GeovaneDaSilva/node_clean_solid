const { bcrypt, jwt, uuidv4 } = require("../../userCases/userModule")
const User = require("../../database/models/user")
//=====================================
//        LOGIN USERS = POST
//=====================================
const login = (req, res) => {
    let body = req.body;
  
    if(body.email) {
  
      User.findOne({ email: body.email }, (err, userDB) => {
  
        if (err) {
          return res.status(500).json({
            ok: false,
            message: "Something on the server didnt work right.",
            err: err
          });
        }
    
        if (!userDB) {
          return res.status(400).json({
            ok: true,
            message:
              "Server didnt understand the URL you gave it, You need will check ID, if user exist.",
            err,
          });
        }
    
        if (!bcrypt.compareSync(body.password, userDB.password )) {
          return res.status(400).json({
            ok: false,
            err: {
              mensaje:
                " Server refuses to give you a file, authentication wont help, your information is not valid",
            },
          });
        }
    
        let token = jwt.sign(
          {
            user: userDB,
          },
          process.env.SEED,
          { expiresIn: process.env.expiresIn }
        ); // Verify the environment in config
    
        res.status(200).json({
          ok: true,
          message: "Login was Success",
          userDB,
          token,
        });
  
      });
  
    }
  
    // Validator: is if dealer exist I would like login with id dealer
    if(body.dealer_id) {
      
      Dealer.findOne({ dealer_id: body.dealer_id }, async (err, dealerDB) => {
  
        if (err) {
          return res.status(500).json({
            ok: false,
            message: "Something on the server didnt work right.",
            err: err
          });
        }
    
        if (!dealerDB) {
          return res.status(400).json({
            ok: true,
            message:
              "Server didnt understand the URL you gave it, You need will check ID, if user exist.",
            err,
          });
        }
  
        const userDB = await User.findById(dealerDB.user)
  
        if (!bcrypt.compareSync(body.password, userDB.password )) {
  
            res.status(400).json({
            ok: false,
            err: {
              mensaje:
                " Server refuses to give you a file, authentication wont help, your information is not valid",
            },
          });
          
        }
    
        let token = jwt.sign(
          {
            user: userDB,
          },
          process.env.SEED,
          { expiresIn: process.env.expiresIn }
        ); // Verify the environment in config
    
        res.status(200).json({
          ok: true,
          message: "Login was Success",
          userDB,
          token,
        });
  
      });
  
    }
  }

  module.exports = {
    login
  }