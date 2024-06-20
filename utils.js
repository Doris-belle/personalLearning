export default function decorateMbMenu(mbMenu, block, expanded = true) {
  mbMenu.classList.add('accordion-menu');
  const menuItems = mbMenu.querySelectorAll(':scope > ul > li');

  menuItems.forEach((item) => {
    const link = item.querySelector('a');
    const linkText = link.textContent;
    const span = document.createElement('span');
    span.textContent = linkText;
    if (expanded) {
      span.classList.add('expanded');
    }
    span.addEventListener('click', () => span.classList.toggle('expanded'));
    link.parentNode.replaceChild(span, link);

    const newTopLink = document.createElement('a');
    newTopLink.href = link.getAttribute('href');
    newTopLink.textContent = `${linkText}トップ`;

    const newListItem = document.createElement('li');
    const subMenu = item.querySelector('.sub-menu');
    newListItem.appendChild(newTopLink);
    subMenu.insertBefore(newListItem, subMenu.firstChild);
  });

  block.prepend(mbMenu);
}

export class DelayedQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.timer = null;
  }

  add(func, delay) {
    this.queue.push({ func, delay });
    if (!this.running) {
      this.next();
    }
    return this;
  }

  next() {
    if (this.queue.length > 0) {
      this.running = true;
      const { func, delay } = this.queue.shift();
      this.timer = setTimeout(() => {
        func();
        this.next();
      }, delay);
    } else {
      this.running = false;
    }
  }

  stop() {
    this.running = false;
    clearTimeout(this.timer);
    this.queue = [];
    return this;
  }
}
