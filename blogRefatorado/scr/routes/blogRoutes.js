const express = require('express')
const blogController = require('../controllers/blogController')

const router = express.Router()

router.post('/texts', blogController.createPost)
router.get('/texts', blogController.listPosts)
router.get('/texts/:id', blogController.listPost)
router.put('/texts/:id', blogController.updatePostEdit)
router.delete('/texts/:id', blogController.deletePost)

module.exports = router