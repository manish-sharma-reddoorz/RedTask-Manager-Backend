const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        startingDate: {
            type: Date,
            required: true
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
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
