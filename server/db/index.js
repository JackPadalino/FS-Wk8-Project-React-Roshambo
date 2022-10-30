const db = require('./db')
// require each of your models here...
const Game = require("./Game");
const Player = require("./Player");

// ...and give them some nice associations here!
Game.belongsTo(Player);
Player.hasMany(Game);


module.exports = {
  db,
  Game,
  Player
}
