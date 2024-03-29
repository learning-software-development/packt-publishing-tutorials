export default class CompanyLogin extends HTMLElement {
  constructor() {
    super();

    this.shadowObj = this.attachShadow({ mode: 'open' });
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    this.shadowObj.querySelector('button').addEventListener('click', (e) => this.handleLogin(e));
  }

  disconnectedCallback() {
    this.shadowObj.querySelector('button').removeEventListener('click');
  }

  getTemplate() {
    return `
      <input type="text" name="username" placeholder="Username"/>
      <input type="password" name="password" placeholder="Password"/>
      <button type="submit" class="login-button">Login</button>

      <style>
        :host {
          background: #68afe8;
          padding: 20px;
          display: flex;
          flex-direction: column;
          width: 400px;
          margin: 0 auto;
        }
        :host(.login-failure) {
          background: #f35353;
        }
        :host(.login-success) {
          background: #499c19;
        }
        input {
          margin-top: 5px;
          padding: 10px;
          height: 30px;
          font-size: 15px;
          border: none;
          border-radius: 5px;
        }
        button {
          margin-top: 15px;
          padding: 10px;
          font-size: 15px;
          border: none;
          height: 50px;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      `;
  }

  handleLogin(e) {
    this.username = this.shadowObj.querySelector('[name=username]').value;
    this.password = this.shadowObj.querySelector('[name=password]').value;

    // Do what ever you want with these values
    console.log(this.username, this.password);

    // We will do things as per our requirement
    let loginSuccess = Math.random();
    if (loginSuccess > 0.5) {
      this.classList.add('login-success');
    } else {
      this.classList.add('login-failure');
    }
  }
}


