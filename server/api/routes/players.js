import express from 'express';
import Player from '../models/player.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var player = new Player();

    router.get('/', player.findAll);

    router.get('/:id', player.findById);

    router.post('/', player.create);

    router.put('/:id', player.update);

    router.delete('/:id', player.delete);

    app.use('/players', Auth.hasAuthorization, router);

}
