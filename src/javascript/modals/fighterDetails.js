import { createElement, customAddhtml, makeAttributesEasy, addStatusBar } from '../helpers/domHelper';
import { showModal } from './modal';
import { MAX_ATTACK, MAX_DEFENCE, MAX_HEALTH } from '../constants/fightersConstants'

export function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, source, attack, defense, health } = fighter;

  const fighterDetails = makeAttributesEasy('div', 'modal-body'
    , { style: 'font-family: cursive; display: inline-block;' });

  const fighterDetailsData = makeAttributesEasy('div', 'modal-body-data', {
    style: "display:inline-grid;"
  });

  const fighterDetailsImg = makeAttributesEasy('div', 'modal-body-image', {
    style: "height: 15rem;float: right;width: fit-content;-moz-transform: scale(-1, 1);-webkit-transform: scale(-1, 1);-o-transform: scale(-1, 1);transform: scale(-1, 1);"
  });

  const elementDetailsData = [

    customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-name' }), name)

    , customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-attack' }), attack)

    , addStatusBar(attack, MAX_ATTACK)

    , customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-defense' }), defense)

    , addStatusBar(defense, MAX_DEFENCE)

    , customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-health' }), health)

    , addStatusBar(health, MAX_HEALTH)

  ]

  const elementDetailsImg = makeAttributesEasy('img', 'info-modal-fighter-image', {
    src: source
    , style: "height: -webkit-fill-available;"
  });

  elementDetailsData.forEach((element) => fighterDetailsData.append(element))
  fighterDetailsImg.append(elementDetailsImg)

  fighterDetails.append(fighterDetailsData)
  fighterDetails.append(fighterDetailsImg)

  return fighterDetails
}
