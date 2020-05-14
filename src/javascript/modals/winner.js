import { makeAttributesEasy } from '../helpers/domHelper'
import { showModal } from './modal';

export function showWinnerModal(fighter) {
    const title = "Winner is " + fighter.name + "!"
    const bodyElement = setBodyElement(fighter.source)
    showModal({ title, bodyElement })
}

function setBodyElement(img) {
    return makeAttributesEasy('img', 'battle-modal-fighter-image', {
        src: img
        , style: " margin-left: auto;margin-right: auto;height: 20rem;"
    })
}