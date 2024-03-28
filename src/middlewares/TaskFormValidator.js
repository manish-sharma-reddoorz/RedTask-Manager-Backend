const { StatusCodes } = require("http-status-codes");
const {validateId} = require('../utils/Helper');
const Task = require("../models/task");


function addValidator(req, res, next) {
    const schemaObject = Task.schema.obj;

    let errorString = "";
    Object.keys(schemaObject).forEach((key) => {
        if (schemaObject[key].required && !req.body[key]) {
            switch (key) {
                case 'assignedToId': {
                    if (!req.body["assignedToMail"]) errorString += `assignedToMail, `;
                    break;
                }

                case 'assignedFromId': {
                    if (!req.body["assignedFromMail"]) errorString += `assignedFromMail, `;
                    break;
                }

                default:
                    errorString += `${key}, `;
            }
        }
    });

    if (errorString.length > 0) {
        errorString += "is/ are required!";

        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: errorString,
            err: {},
        });
    }

    next();
}


async function updateValidator(req, res, next)  {
    const id = req.params.id;

    if(!id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Task id required to update',
            err: {},
        })
    }


    let isIdValid = true;
    try {
        isIdValid = await validateId(Task, id);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: error.message,
            err: error,
        })
    }

    if(!isIdValid) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid id Provided',
            err: {},
        })
    }


    if(Object.keys(req.body).length === 0) {
        return res.status(StatusCodes.OK).json({
            data: {},
            success: true,
            message: 'Successfully updated Task',
            err: {},
        })
    }

    next();
}

async function idValidator(req, res, next) {

    const id = req.params.id;
    let isIdValid = true;
    try {
        isIdValid = await validateId(Task, id);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: error.message,
            err: error,
        })
    }

    if(!isIdValid) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid id Provided',
            err: {},
        })
    }

    next();

}



module.exports = {
    addValidator,
    updateValidator,
    idValidator
};
