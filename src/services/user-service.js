const {UserRepository} = require( '../repository/user-repository.js');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async createUser(data){
        try {
            const user= await this.userRepository.createUser(data);
            return user;

        }
        catch (error){
            console.log('something wen wrong in user service')
            throw error;
        }

    } 

    async destroyUser(id){
        try{
            const user = await this.userRepository.destroy(id);
            return user;
        }
        catch(error){
            console.log('something went wrong in user-service')
            throw error;
        }
    }

    async getUser(id){
        try{
            const user = await this.userRepository.get(id);
            return user;
        }
        catch(error){
            console.log('something went wrong in user-service')
            throw error;
        }
    }

    async updateUser(id, data){
        try{
            const user = await this.userRepository.update(id, data);
            return user;
        }
        catch(error){
            console.log('something went wrong in user-service')
            throw error;
        }
    }







}
module.exports = UserService;