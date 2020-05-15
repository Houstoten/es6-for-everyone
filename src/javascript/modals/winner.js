import { makeAttributesEasy } from '../helpers/domHelper'
import { showModal } from './modal';
import { battleLogByWinner } from "./battleLog";

export function showWinnerModal(fighter) {
    const title = "Winner is " + fighter.name + "!"
    const bodyElement = setBodyElement(fighter)
    showModal({ title, bodyElement })
}

function setBodyElement(fighter) {
    const fighterDetails = makeAttributesEasy('div', 'modal-body'
    , { style: 'font-family: cursive; display: inline-block;' });

    const winnerIMG = makeAttributesEasy('img', 'battle-modal-fighter-image', {
        src: fighter.source
        , style: " margin-left: auto;margin-right: auto;height: 20rem;"
    })

    const battleLogData = battleLogByWinner.get(fighter.id)
    fighterDetails.append(winnerIMG)
    fighterDetails.append(battleLogData)
    return fighterDetails
}