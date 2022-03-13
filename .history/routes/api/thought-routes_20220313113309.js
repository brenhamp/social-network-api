const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/:thoughtID/reactions
router
    .route('')

module.exports = router;