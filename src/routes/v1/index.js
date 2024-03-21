const express = require('express');
const router = express.Router();
const TaskController = require('../../controllers/task-controller');
const User = require('../../models/user');

//for users
router.get('/users/findByEmail/:email',async function (req,res) {
    
    try {
        if(!req.params.email) {
            res.status(200).json({
                data : {},
                success : true,
                message : "Successfully fetched users",
                error : {}
            })
        }
        let findEmailRegex = `^${req.params.email}.*`;
        let users = await User.find({email: {$regex: findEmailRegex}})
        users = users.map((user) => {
            return {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })
        res.status(200).json({
            data : users,
            success : true,
            message : "Successfully fetched users",
            error : {}
        })
    } catch (error) {

        res.status(500).json({
            data: {},
            success: false,
            message: error.message,
            err: error
        })
        
    }
})


router.get('/users/validateUserByEmail/:email', async function(req,res) {
    try{
        const user = await User.findOne({email: req.params.email});
        if(user) {
            res.status(200).json({
                data: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                success: true,
                description: 'user is valid',
                err: {}
            })
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                description: 'user not found',
                err: {}
            })
        }

    }catch(error) {
        res.status(500).json({
            data: {},
            success: false,
            description: error.description,
            err: error,
        })
    }
    
})

// for task
router.post(
    '/tasks',
    TaskController.create
);
router.delete('/tasks/:id', TaskController.destroy);
router.patch('/tasks/:id', TaskController.update);
router.get('/tasks/:id',TaskController.get);

module.exports = router;