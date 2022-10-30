const Sequelize = require("sequelize");
const db = require("./db");

const Game = db.define("game", {
    result: {
        type: Sequelize.ENUM(["tie", "human", "computer"]),
        allowNull: false,
    }
});

module.exports = Game;