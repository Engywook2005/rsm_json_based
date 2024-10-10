export function buildElement(className, elementName = "div") {
    const newEl = document.createElement(elementName);
    newEl.classList.add(className);
    return newEl;
}