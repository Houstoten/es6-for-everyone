import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';
import { getFighterDetails } from '../services/fightersService';

class BattleLog {
    createBattleLog(leftFighter, rightFighter) {
        alert(leftFighter.name + " " + rightFighter.name)
    }

    onCritical() {

    }

    onBlock() {

    }

    onDamage(reciever, damage) {

    }

    closeBattleLog() {

    }
}
export const battleLog = new BattleLog(); 