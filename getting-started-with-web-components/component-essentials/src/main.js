class HelloWorld extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.append('Hello World');
  }
}

customElements.define('hello-world', HelloWorld);


let shadowRootEl = document.querySelector('.entry');
let shadowRoot = shadowRootEl.attachShadow({ mode: 'open' });

let childEl = document.createElement('span');
childEl.innerText = "Hello shadow DOM";

shadowRoot.appendChild(childEl);
