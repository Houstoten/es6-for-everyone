import { createElement, customAddhtml, makeAttributesEasy, addStatusBar } from '../helpers/domHelper';
import { showModal } from './modal';
import { getFighterDetails } from '../services/fightersService';

export var battleLogByWinner = new Map()

class BattleLog {
    
    createBattleLog() {
        this.bodyElement = this.setBodyElement()
    }

    setBodyElement() {
        const battle = makeAttributesEasy('div', 'modal-body'
            , { style: 'font-family: cursive; display: inline-block;' });

        

        this.battleDataBlock = makeAttributesEasy('div', 'modal-body-battle-data', {
            style: "height: 20rem; float: left; width: 40rem; border: black solid 3px; overflow:auto; padding-left:1rem;"
            , id: 'battleLog-data'
        });

        battle.append(this.battleDataBlock)

        return battle
    }

    updateBattleLog(log) {
       
            this.battleDataBlock.prepend(log);
        
    }

    onCritical(name) {
        const attributes = { style: 'color:red;' }
        this.updateBattleLog(customAddhtml(createElement({ tagName: 'p', className: 'battleLog-initial', attributes }), `CRITICAL from ${name}`))
    }

    onBlock(name) {
        const attributes = { style: 'color:blue;' }
        this.updateBattleLog(customAddhtml(createElement({ tagName: 'p', className: 'battleLog-initial', attributes }), `ULTRA BLOCK from ${name}`))
    }

    onDamage(attacker, reciever, damage) {
        this.updateBattleLog(customAddhtml(createElement({ tagName: 'p', className: 'battleLog-initial' })
            , attacker.name + " hits " + reciever.name + " and makes " + damage + " damage. Now " + reciever.name + " has " + reciever.health.toFixed(3) + " health!"))
    }

    closeBattleLog(winnerID) {
        battleLogByWinner.set(winnerID,this.bodyElement)
    }
}
export const battleLog = new BattleLog(); 