require('dotenv').config();
module.exports = {
    email: {
      service: 'gmail',
      auth: {
        user:process.env.user , 
        pass:process.env.pass , 
      }
    },
    PORT:process.env.PORT
    
  };
  