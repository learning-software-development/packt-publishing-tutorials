class HelloWorld extends HTMLElement {
  constructor() {
    super();

    let templateReference = document.querySelector('#hello-world-template');
    let templateContent = templateReference.content;

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.append(templateContent.cloneNode(true));
  }
}

customElements.define('hello-world', HelloWorld);
