import { html } from 'lit';
import '../src/intro-owc.js';

export default {
  title: 'IntroOwc',
  component: 'intro-owc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <intro-owc
      style="--intro-owc-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </intro-owc>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
