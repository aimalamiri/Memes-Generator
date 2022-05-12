export default class Dom {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  clear() {
    this.element.innerHTML = '';
    return this;
  }

  append(html) {
    const range = document.createRange().createContextualFragment(html);
    this.element.appendChild(range);
    return this;
  }

  addClass(name) {
    this.element.classList.add(name);
    return this;
  }

  removeClass(name) {
    this.element.classList.remove(name);
    return this;
  }

  toggleClass(name) {
    this.element.classList.toggle(name);
    return this;
  }

  on(event, callback) {
    this.element.addEventListener(event, callback);
    return this;
  }
}
