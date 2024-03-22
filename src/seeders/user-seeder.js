const User = require('../models/user')

const userData = [
    { name: 'John Doe', email: 'john@example.com', phone: 1234567890, password: 'password1' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: 9876543210, password: 'password2' },
    { name: 'Alice Johnson', email: 'alice@example.com', phone: 5551234567, password: 'password3' },
    { name: 'Bob Brown', email: 'bob@example.com', phone: 9998887776, password: 'password4' },
    { name: 'Eva Green', email: 'eva@example.com', phone: 1112223334, password: 'password5' },
    { name: 'Michael Clark', email: 'michael@example.com', phone: 4445556665, password: 'password6' },
    { name: 'Samantha White', email: 'samantha@example.com', phone: 7778889998, password: 'password7' },
    { name: 'David Lee', email: 'david@example.com', phone: 6667778889, password: 'password8' },
    { name: 'Emily Taylor', email: 'emily@example.com', phone: 2223334445, password: 'password9' },
    {
        "name": "William Rodriguez",
        "email": "william@example.com",
        "phone": 8889990001,
        "password": "password10"
    },
    {
        "name": "Sophia Johnson",
        "email": "sophia@example.com",
        "phone": 7778889992,
        "password": "password20"
    },
    {
        "name": "James Smith",
        "email": "james@example.com",
        "phone": 6667778883,
        "password": "password30"
    },
    {
        "name": "Olivia Williams",
        "email": "olivia@example.com",
        "phone": 5556667774,
        "password": "password40"
    },
    {
        "name": "Liam Brown",
        "email": "liam@example.com",
        "phone": 4445556665,
        "password": "password50"
    },
    {
        "name": "Emma Davis",
        "email": "emma@example.com",
        "phone": 3334445556,
        "password": "password60"
    },
    {
        "name": "Noah Miller",
        "email": "noah@example.com",
        "phone": 2223334447,
        "password": "password70"
    },
    {
        "name": "Ava Wilson",
        "email": "ava@example.com",
        "phone": 1112223338,
        "password": "password80"
    },
    {
        "name": "Mia Martinez",
        "email": "mia@example.com",
        "phone": 9991112229,
        "password": "password90"
    },
    {
        "name": "Benjamin Taylor",
        "email": "benjamin@example.com",
        "phone": 8889990000,
        "password": "password100"
    },
    {
        "name": "Ethan Anderson",
        "email": "ethan@example.com",
        "phone": 7778889991,
        "password": "password110"
    },
    {
        "name": "Isabella Thomas",
        "email": "isabella@example.com",
        "phone": 6667778882,
        "password": "password120"
    },
    {
        "name": "Michael Jackson",
        "email": "michael@example.com",
        "phone": 5556667773,
        "password": "password130"
    },
    {
        "name": "Charlotte White",
        "email": "charlotte@example.com",
        "phone": 4445556664,
        "password": "password140"
    },
    {
        "name": "Amelia Harris",
        "email": "amelia@example.com",
        "phone": 3334445555,
        "password": "password150"
    },
    {
        "name": "Daniel Brown",
        "email": "daniel@example.com",
        "phone": 2223334446,
        "password": "password160"
    },
    {
        "name": "Harper Garcia",
        "email": "harper@example.com",
        "phone": 1112223337,
        "password": "password170"
    },
    {
        "name": "Matthew Martinez",
        "email": "matthew@example.com",
        "phone": 9991112228,
        "password": "password180"
    },
    {
        "name": "Evelyn Wilson",
        "email": "evelyn@example.com",
        "phone": 8889990009,
        "password": "password190"
    },
    {
        "name": "Elijah Lee",
        "email": "elijah@example.com",
        "phone": 7778889990,
        "password": "password200"
    }
];


function seedData() {
    User.insertMany(userData)
    .then(() => {
        console.log('Seed data inserted successfully');
    })
    .catch((error) => {
        console.log('Error occured', error);
    });

}


module.exports = seedData;
