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