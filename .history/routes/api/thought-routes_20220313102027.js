const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts);

// /api/thoughts/id
router
    