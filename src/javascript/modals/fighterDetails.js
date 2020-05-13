import { createElement, customAddhtml, makeAttributesEasy } from '../helpers/domHelper';
import { showModal } from './modal';

export function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, source, attack, defense, health } = fighter;

  const fighterDetails = makeAttributesEasy('div', 'modal-body'
    , { style: 'font-family: cursive;' });

  const fighterDetailsData = makeAttributesEasy('div', 'modal-body-data', {
    style: ""
  });

  const fighterDetailsImg = makeAttributesEasy('div', 'modal-body-image', {
    style: "height: 15rem;"
  });

  const elementDetailsData = [

    customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-name' }), name)

    , customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-attack' }), attack)

    , customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-defence' }), defense)

    , customAddhtml(createElement({ tagName: 'span', className: 'info-modal-fighter-health' }), health)

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
