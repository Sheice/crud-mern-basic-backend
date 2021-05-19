const { Router } = require("express");

const router = Router();

const {getUsers,postUsers, deleteUsers} = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(postUsers)

router.route('/:id')
    .delete(deleteUsers)


module.exports = router;