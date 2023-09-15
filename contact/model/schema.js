const mongoose = require('mongoose')


const conschema = mongoose.Schema({
  name:{
    type: String,
    required:[true, 'please add a text value']

  } ,
  age:{
    type: String,
    required:[true, 'please add a text value']

} ,
  favouritefoods: {
    type: String,
    required:[true, 'please add a text value']
  },

  
},{
    timestamps: true,
           
});
module.exports = mongoose.model('personlist', conschema)
      
      

