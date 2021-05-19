const { Router } = require("express");

const router = Router();

const {getNotes, postNotes, putNotes, deletedNotes,getNote} = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(postNotes)

router.route('/:id')
    .get(getNote)
    .put(putNotes)
    .delete(deletedNotes)
   


module.exports = router;