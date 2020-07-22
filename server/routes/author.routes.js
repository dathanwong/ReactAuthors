const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.get('/api/authors/:id', AuthorController.findAuthorById);
}