import mongoose from 'mongoose';
import Team from '../models/team.js';

const playerSchema = new mongoose.Schema({
    alias: String,
    firstName: String,
    lastName: String,
    nationality: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
});

let model = mongoose.model('Player', playerSchema);

export default class Player {

    findAll(req, res) {
        model.find({}, (err, players) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(players);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, player) => {
            if (err || !player) {
                res.sendStatus(403);
            } else {
                res.json(player);
            }
        });
    }

    create(req, res) {
        model.create(req.body,
            (err, player) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(player);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            description: req.body.description
        }, (err, player) => {
            if (err || !player) {
                res.status(500).send(err.message);
            } else {
                res.json(player);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
