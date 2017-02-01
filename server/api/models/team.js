import mongoose from 'mongoose';
import Player from '../models/player.js';

const teamSchema = new mongoose.Schema({
    name: String,
    nationality: String,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }]
});

let model = mongoose.model('Team', teamSchema);

export default class Team {

    findAll(req, res) {
        model.find({}, (err, teams) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    res.json(teams);
                }
            })
            .populate('players');
    }

    findById(req, res) {
        model.findById(req.params.id, (err, team) => {
            if (err || !team) {
                res.sendStatus(403);
            } else {
                res.json(team);
            }
        });
    }

    create(req, res) {
        model.create(req.body,
            (err, team) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(team);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            description: req.body.description
        }, (err, team) => {
            if (err || !team) {
                res.status(500).send(err.message);
            } else {
                res.json(team);
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
        })
    }

    addPlayer(req, res) {
        model.update({
            _id: req.body.teamID
        }, {
            $push: {
                players: req.body.playerID
            }
        }, (err, team) => {
            if (err || !team) {
                res.status(500).send(err.message);
            } else {
                res.json(team);
            }
        });
    }

}
