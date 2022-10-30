const express = require("express");
const { Player, Game } = require("../db");
const router = express.Router();

// GET api/players
router.get("/", async (req, res, next) => {
    const players = await Player.findAll();
    res.send(players);
});

// GET api/players/:playerId
router.get("/:playerId", async (req, res, next) => {
    const { playerId } = req.params;
    const player = await Player.findByPk(playerId, {
        include: [Game]
    });
    res.send(player);
})

// PUT api/players/:playerId
router.put("/:playerId", async (req, res, next) => {
    const { playerId } = req.params;
    const { username } = req.body;

    const player = await Player.findByPk(playerId);
    player.update({
        username
    });

    res.sendStatus(204);
});

// POST api/players
router.post("/", async (req, res, next) => {
    const { username } = req.body;

    const newPlayer = await Player.create({
        username
    });

    res.status(204).send(newPlayer);
});

module.exports = router;