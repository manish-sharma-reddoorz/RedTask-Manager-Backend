const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now
    },
    deadlineDate: {
        type: Date,
        required: true
    },
    phase: {
        type: String,
        enum: ['New', 'UI/UX', 'Development', 'Testing', 'UAT', 'Released'],
        required: true
    },
    assignedToId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assignedFromId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
