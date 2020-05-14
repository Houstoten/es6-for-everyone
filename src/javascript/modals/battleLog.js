import { createElement, customAddhtml, makeAttributesEasy, addStatusBar } from '../helpers/domHelper';
import { showModal } from './modal';
import { getFighterDetails } from '../services/fightersService';


class BattleLog {
    createBattleLog(leftFighter, rightFighter) {
        const title = leftFighter.name + " VS " + rightFighter.name
        const bodyElement = this.setBodyElement(leftFighter, rightFighter)
        showModal({ title, bodyElement })
    }

    setBodyElement(leftFighter, rightFighter) {
        const battle = makeAttributesEasy('div', 'modal-body'
            , { style: 'font-family: cursive; display: inline-block;' });

        const leftFighterBlock = makeAttributesEasy('div', 'modal-body-image-left', {
            style: "height: 15rem;float: left;width: fit-content;"
        });

        const rightFighterBlock = makeAttributesEasy('div', 'modal-body-image-right', {
            style: "height: 15rem;float: right;width: fit-content;-moz-transform: scale(-1, 1);-webkit-transform: scale(-1, 1);-o-transform: scale(-1, 1);transform: scale(-1, 1);"
        });

        const leftFighterImg = makeAttributesEasy('img', 'battle-modal-fighter-image', {
            src: leftFighter.source
            , style: "height: -webkit-fill-available;"
        });

        const rightFighterImg = makeAttributesEasy('img', 'battle-modal-fighter-image', {
            src: rightFighter.source
            , style: "height: -webkit-fill-available;"
        });

        const battleDataBlock = makeAttributesEasy('div', 'modal-body-battle-data', {
            style: "height: 15rem; float: left; width: 40rem; border: black solid 3px; overflow:auto; padding-left:1rem;"
            , id: 'battleLog-data'
        });

        leftFighterBlock.append(leftFighterImg)
        rightFighterBlock.append(rightFighterImg)

        battle.append(leftFighterBlock)
        battle.append(battleDataBlock)
        battle.append(rightFighterBlock)

        return battle
    }

    updateBattleLog(log) {
        if (document.getElementById('battleLog-data')) {
            document.getElementById('battleLog-data').prepend(log);
        }
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

    closeBattleLog() {
        document.getElementsByClassName('modal-layer')[0].remove();
    }
}
export const battleLog = new BattleLog(); 