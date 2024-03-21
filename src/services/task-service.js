const {TaskRepository} = require('../repository/index');
const User = require('../models/user');

class TaskService {
    
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async getUserIdFromMail(email) {
        try {
            const user = await User.findOne({email: email});
            return user;
        } catch (error) {
            console.log("Something went wrong while fetcing user from email in task service");
            throw error;
        }
    }

    async create(data) {
        // adding code that must be removed after vani's implementation of get user by email
        let assignedToId;
        let assignedFromId;
        console.log("<------------------data--------------------->")
        console.log(data);
        try {
            const assignedToUser = await this.getUserIdFromMail(data.assignedToMail);
            console.log(assignedToUser);
            assignedToId = assignedToUser?._id;
        } catch (error) {
            console.log("Something went wrong task service while fetching assignedToUser");
            throw error;
        }

        try {
            const assignedFromUser = await this.getUserIdFromMail(data.assignedFromMail);
            assignedFromId = assignedFromUser._id;
        } catch (error) {
            console.log("Something went wrong task service while fetching assignedFromUser");
            throw error;
        }

        const newData = {
            title : data.title,
            description : data.description,
            deadlineDate : data.deadlineDate,
            phase : data.phase,
            assignedToId: assignedToId,
            assignedFromId: assignedFromId
        };

        try {
            const task = await this.taskRepository.create(newData);
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


        let assignedToId;
        let assignedFromId;
        try {
            const assignedToUser = await this.getUserIdFromMail(data.assignedToMail);
            assignedToId = assignedToUser._id;
        } catch (error) {
            console.log("Something went wrong task service while fetching assignedToUser");
            throw error;
        }

        try {
            const assignedFromUser = await this.getUserIdFromMail(data.assignedFromMail);
            assignedFromId = assignedFromUser._id;
        } catch (error) {
            console.log("Something went wrong task service while fetching assignedFromUser");
            throw error;
        }

        const newData = {
            title : data.title,
            description : data.description,
            deadlineDate : data.deadlineDate,
            phase : data.phase,
            assignedToId: assignedToId,
            assignedFromId: assignedFromId
        };

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