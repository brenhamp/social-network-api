const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// 