const {TaskService} = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const taskService = new TaskService();

const create = async (req,res) => {
    try {

        // destructuring the request object
        console.log("<-----------------Request------------------------>")
        console.log(req.body);
        const task = {
            title : req.body.title,
            description : req.body.description,
            startingDate: req.body.startingDate,
            deadlineDate : req.body.deadlineDate,
            phase : req.body.phase,
            assignedToMail : req.body.assignedToMail,
            assignedFromMail : req.body.assignedFromMail,
        }

        const result = await taskService.create(task);
        return res.status(StatusCodes.CREATED).json({
            data : result,
            success : true,
            message : "Successfully created task",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const destroy = async (req,res) => {
    try {
        const result = await taskService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Successfully deleted the task",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const update = async (req,res) => {
    try {
        const result = await taskService.update(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Successfullt updated the task",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await taskService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : "Successfully fetched the task",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}


module.exports = {
    create,
    destroy,
    update,
    get,
}