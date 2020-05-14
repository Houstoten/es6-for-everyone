export function createElement({ tagName, className, attributes = {} }) {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(className);
  }

  Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

  return element;
}

export const customAddhtml = (el, html) => {
  el.innerHTML = html
  return el
}

export function makeAttributesEasy(tag, class_, attrib) {
  const attributes = attrib
  return createElement({ tagName: tag, className: class_, attributes })
}

export function addStatusBar(length, maxLength) {
  const bar_width = length * 100 / maxLength
  const wrapper = makeAttributesEasy('div', 'wrapper-bar', {
    style: "height: 1rem; background-color: rgba(153, 153, 153, 0.8);"
  })
  wrapper.append(makeAttributesEasy('div', 'bar', {
    style: `width:${bar_width}%; background: linear-gradient(to right, green 0%,yellow 50%, red 100%); height: -webkit-fill-available;`
  }));
  return wrapper
}