import { battleLog } from "./modals/battleLog"



export function fight(firstFighter, secondFighter) {
  var nowFighter = Object.assign({}, secondFighter)
  var nowReciever = Object.assign({}, firstFighter)
  const swapFighter = function () {
    const temp = nowFighter;
    nowFighter = nowReciever;
    nowReciever = temp;
  }
  var damage;
  battleLog.createBattleLog()
  while (nowFighter.health > 0 && nowReciever.health > 0) {
    swapFighter()
    damage = getDamage(nowFighter, nowReciever)
    nowReciever.health -= damage
    battleLog.onDamage(nowFighter, nowReciever, damage.toFixed(3))
  }

  console.log("No-way, winner is " + nowFighter.name)
  battleLog.closeBattleLog(nowFighter.id);
  return nowFighter
}

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export function getDamage(attacker, enemy) {
  const damage = getHitPower(attacker) - getBlockPower(enemy)
  if (damage > 0) {
    return damage;
  }
  return 0;
}

export function getHitPower(fighter) {
  const chance = 1 + Math.random()
  if (chance>=1.5) {
    battleLog.onCritical(fighter.name)
  }
  return fighter.attack * chance
}

export function getBlockPower(fighter) {
  const chance = 1 + Math.random()
  if (chance>=1.5) {
    battleLog.onBlock(fighter.name)
  }
  return fighter.defense * chance
}
