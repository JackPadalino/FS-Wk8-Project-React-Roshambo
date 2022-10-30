const express = require("express");
const { Player, Game } = require("../db");
const router = express.Router();

// GET api/games/
router.get("/", async (req, res, next) => {
    const games = await Game.findAll({
        include: [Player]
    });

    res.send(games);
})

// GET api/games/:gameId
router.get("/:gameId", async (req, res, next) => {
    const { gameId } = req.params;
    const game = await Game.findByPk(gameId, {
        include: [Player]
    });

    res.send(game);
})

// POST api/games
router.post("/", async (req, res, next) => {
    const { result, playerId } = req.body;
    const newGame = await Game.create({
        result,
        playerId
    });

    res.status(204).send(newGame);
})

module.exports = router;