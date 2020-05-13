import { battleLog } from "./modals/battleLog"

export function fight(firstFighter, secondFighter) {
  var nowFighter = Object.assign({}, secondFighter)
  var nowReciever = Object.assign({}, firstFighter)
  const swapFighter = function () {
    const temp = nowFighter;
    nowFighter = nowReciever;
    nowReciever = temp;
  }
  battleLog.createBattleLog(firstFighter, secondFighter)
  while (nowFighter.health > 0 && nowReciever.health > 0) {
    swapFighter()
    nowReciever.health -= getDamage(nowFighter, nowReciever)
    console.log(nowFighter.name + " " + nowFighter.health + ";  " + nowReciever.name + " " + nowReciever.health + ";  ")
  }
  console.log("No-way, winner is " + nowFighter.name)
  return nowFighter
}



export function getDamage(attacker, enemy) {
  const damage = getHitPower(attacker) - getBlockPower(enemy)
  if (damage > 0) {
    return damage;
  }
  return 0;
}

export function getHitPower(fighter) {
  const chance = Math.floor(Math.random() * 2)
  if (chance) {
    console.log("CRITICAL from " + fighter.name)
  }
  return fighter.attack * chance
}

export function getBlockPower(fighter) {
  const chance = Math.floor(Math.random() * 2)
  if (chance) {
    console.log("ULTRA BLOCK from " + fighter.name)
  }
  return fighter.defense * chance
}
