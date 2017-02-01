import express from 'express';
import Team from '../models/team.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var team = new Team();

    router.get('/', team.findAll);

    router.get('/:id', team.findById);

    router.post('/', team.create);

    router.put('/addPlayer', team.addPlayer)

    router.put('/:id', team.update);

    router.delete('/:id', team.delete);

    app.use('/teams', Auth.hasAuthorization, router);

}
