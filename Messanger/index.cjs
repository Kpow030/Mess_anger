import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`);
const document = dom.window.document;
const window = dom.window;

global.window = window;
global.document = document;

require('@babel/register');

const { createRoot } = require('react-dom/client');
const App = require('./App');

const root = createRoot(document.getElementById('root'));
root.render(App);

const UserProfile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Форма отправлена!');
  };

  return React.createElement('form', { onSubmit: handleSubmit },
    React.createElement('input', { type: 'text', placeholder: 'Имя' }),
    React.createElement('input', { type: 'password', placeholder: 'Пароль' }),
    React.createElement('button', { type:'submit' }, 'Отправить')
  );
};

ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(UserProfile, null)
  ),
  document.getElementById('root')
);