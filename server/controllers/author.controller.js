const { Author } = require("../models/author.model");

module.exports.index = (req, res)=>{
    res.json({
        message: "working"
    });
}

module.exports.createAuthor = (req, res) =>{
    const {name} = req.body;

    Author.create({name})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.findAllAuthors = (req, res) =>{
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.findAuthorById = (req, res) =>{
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "Unable to find author with that id"}));
}

module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(r => res.json(r))
        .catch(err => res.status(400).json({message: "Delete unsuccessful"}));
}

module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}