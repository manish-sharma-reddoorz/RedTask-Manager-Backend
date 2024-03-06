const Task = require('../models/task');

class TaskRepository {

    async create(data) {

        try {
            const task = await Task.create(data);
            return task;
        } catch (error) {
            console.log("Something went wrong in task repository");
            throw error;
        }

    }

    async destroy(id) {


        try {
            const task = await Task.findByIdAndDelete(id);
            return task;
        } catch (error) {
            console.log("Something went wrong in task repository");
            throw error;
        }
    }

    async get(id) {


        try {
            const task = await Task.findById(id);
            return task;
        } catch (error) {
            console.log("Something went wrong in task repository");
            throw error;
        }

    }

    async update(taskId, data) {


        try {
            const task = await Task.findByIdAndUpdate(taskId, data, {new: true});
            return task;
        } catch (error) {
            console.log("Something went wrong in task repository");
            throw error;
            
        }

    }

}

module.exports = TaskRepository;