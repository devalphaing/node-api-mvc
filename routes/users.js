const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUserById } = require('../controllers/userController');

router.get("/all", getAllUsers);

router.post("/new", createUser)


router.get("/userid/:id", getUserById)

module.exports = router; 