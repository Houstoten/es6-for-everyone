import { battleLog } from "./modals/battleLog"

export async function fight(firstFighter, secondFighter) {
  var nowFighter = Object.assign({}, secondFighter)
  var nowReciever = Object.assign({}, firstFighter)
  const swapFighter = function () {
    const temp = nowFighter;
    nowFighter = nowReciever;
    nowReciever = temp;
  }
  var damage;
  battleLog.createBattleLog(firstFighter, secondFighter)
  return await battle()
  function battle() {
    while (nowFighter.health > 0 && nowReciever.health > 0) {
      swapFighter()
      damage = getDamage(nowFighter, nowReciever)
      nowReciever.health -= damage
      battleLog.onDamage(nowFighter, nowReciever, damage)
      setTimeout(battle, 500)
    }
      console.log("No-way, winner is " + nowFighter.name)
      battleLog.closeBattleLog();
      return nowFighter
    
  }

}



export function getDamage(attacker, enemy) {
  const damage = getHitPower(attacker) - getBlockPower(enemy)
  if (damage > 0) {
    return damage;
  }
  return 0;
}

export function getHitPower(fighter) {
  const chance = Math.floor(1 + Math.random() * 2)
  if (chance) {
    battleLog.onCritical(fighter.name)
  }
  return fighter.attack * chance
}

export function getBlockPower(fighter) {
  const chance = Math.floor(1 + Math.random() * 2)
  if (chance) {
    battleLog.onBlock(fighter.name)
  }
  return fighter.defense * chance
}
