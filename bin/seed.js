#!/usr/bin/env node

const { db, Game, Player } = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

  const ben = await Player.create({ username: "ben" });
  const louis = await Player.create({ username: "louis" });

  const bengame1 = await Game.create({ result: "tie", playerId: ben.id })
  const bengame2 = await Game.create({ result: "human", playerId: ben.id })
  const bengame3 = await Game.create({ result: "computer", playerId: ben.id })
  const bengame4 = await Game.create({ result: "computer", playerId: ben.id })
  const louisgame1 = await Game.create({ result: "tie", playerId: louis.id })
  const louisgame2 = await Game.create({ result: "human", playerId: louis.id })
  const louisgame3 = await Game.create({ result: "human", playerId: louis.id })
  const louisgame4 = await Game.create({ result: "tie", playerId: louis.id })

  db.close()
  console.log(`
    Seeding successful!
    Roshambo is now ready to rock paper scizors!
  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
