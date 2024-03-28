const express = require('express');
const router = express.Router();
const TaskController = require('../../controllers/task-controller');
const {TaskFormValidator} = require('../../middlewares/index');
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


//for user
router.post('/register', async (req,res)=>{
    console.log('got the form')
    res.send('got it')
})

//for task
router.post(
    '/tasks',
    TaskFormValidator.addValidator,
    TaskController.create
);
router.patch(
    '/tasks/:id',
    TaskFormValidator.updateValidator,
    TaskController.update
);
router.delete(
    '/tasks/:id', 
    TaskFormValidator.idValidator,
    TaskController.destroy
);
router.get(
    '/tasks/:id',
    TaskFormValidator.idValidator,
    TaskController.get
);

module.exports = router;























// const { email, phone, password, confirmPassword} = req.body;

// if(  !email || !phone || !password || !confirmPassword){
//             return res.status(422).json({error: "All fields are mandatory"})
// }

// })
 
// try {
//     const response = await User.findOne({email:email});
//     if(userExists){
//         return res.status(422).json({error:"Email already exists"})
//     }
//     const newUser = new User({email, phone, password, confirmPassword})
//     const userRegister = await newUser.save()

//     if(userRegister){
//         res.status(201).json({message: "user registered successfully"})

//     }else{
//         res.status(500).json({error:"Failed to register"})
//     }




// }
// catch(err){
//     console.log(error)
// }

// for task
