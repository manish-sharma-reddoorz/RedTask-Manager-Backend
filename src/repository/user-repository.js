const User = require('../models/user')
//performing CRUD in user Schema{ this will directly in contact of model(database)}
class UserRepository {
  async createUser(data){
    try {
        const user = await User.create(data)
        return user;
       }
       catch(err){
        console.log('something went wrong in user-repo')
        throw err;
       }
  }

  async deleteUser(id){
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        return User;
      }
    
     catch(err){
    console.log('Something went wrong in user-repo')
    throw err;
  }
}


  async getUser(id){
   try {
    const getUser = await User.findById(id)
    return getUser;
   }
   catch {
    console.log('something went wrong in user-repo')
    throw err;
   }
  }

  async updateUser (id, data){
           try {
            const user = await User.findByIdAndUpdate(id, data, {new:true})
            return user;
           }
           catch (err){
            console.log('something went wrong in user-repo')
            throw err;
           }
  }
}
module.exports = UserRepository;