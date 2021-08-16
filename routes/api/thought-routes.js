const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
    getAllReactions
} = require('../../controllers/thought-controller')

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(createReaction).get(getAllReactions)

router.route('/:thoughtId/:reactionId').delete(deleteReaction)

module.exports = router;