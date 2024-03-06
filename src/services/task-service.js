const {TaskRepository} = require('../repository/index');


class TaskService {
    
    constructor() {
        this.taskRepository = new TaskRepository();
    }


    async create(data) {

        try {
            const task = await this.taskRepository.create(data);
            return task;
        } catch (error) {
            console.log("Something went wrong in task service");
            throw error;
        }
    }

    async destroy(id) {

        try {
            const task = await this.taskRepository.destroy(id);
            return task;
        } catch (error) {
            console.log("Something went wrong in task service");
            throw error;
        }
    }



    async get(id) {

        try {
            const task = await this.taskRepository.get(id);
            return task;
        } catch (error) {
            console.log("Something went wrong in task service");
            throw error;
        }
    }

    async update(taskId, data) {

        try {
            const task = await this.taskRepository.update(taskId, data);
            return task;
        } catch (error) {
            console.log("Something went wrong in task service");
            throw error;
        }
    }
}


module.exports = TaskService;