const notesControllers = {

};

const Note = require('../models/Notes'); 

notesControllers.getNotes = async (req, res)=> {
    const notes = await Note.find();
    res.json(notes);
};

notesControllers.postNotes =async(req, res) => {
    const {title, description, author} = req.body;
    const newNote = new Note({
        title: title,
        description: description,
        author: author
    });

    await newNote.save();
    res.json({message: "send note completed"})
};

// request for id

notesControllers.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesControllers.putNotes = async (req, res) => {
    const {title, description, author} = req.body;
    await Note.findOneAndUpdate(req.params.id, {
        title: title,
        description: description,
        author: author
    });
    res.json({message: "note updated"})
};

notesControllers.deletedNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    
    res.json({message: "note deleted"});
};



module.exports = notesControllers;