const express = require('express');
const router = express.Router();
const TaskController = require('../../controllers/task-controller');



//for user
router.post('/register', async (req,res)=>{
    console.log('got the form')
    res.send('got it')
})

//for task
router.post(
    '/tasks',
    TaskController.create
);
router.delete('/tasks/:id', TaskController.destroy);
router.patch('/tasks/:id', TaskController.update);
router.get('/tasks/:id',TaskController.get);

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
