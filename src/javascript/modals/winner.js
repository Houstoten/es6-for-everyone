import { customAddhtml, createElement } from '../helpers/domHelper'
import { showModal } from './modal';

export function showWinnerModal(fighter) {
    const title = "Winner is " + fighter + "!"
    const bodyElement = setBodyElement(fighter)
    showModal({ title, bodyElement })
}

function setBodyElement(name) {
    const attributes={style:'font-size:1.5rem; margin:auto;'}
    return customAddhtml(createElement({ tagName: 'span', className: 'winner-modal', attributes}), `Congrats, ${name}!`)
}