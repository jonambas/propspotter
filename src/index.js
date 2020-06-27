import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const out = document.createElement('div');
document.body.append(out);

const style = document.createElement('style');
style.innerHTML = `
  body { font-size: 16px; }
  * { box-sizing: border-box; }
`;
document.head.appendChild(style);

function renderReprop() {
  ReactDOM.render(<App />, out);
}

renderReprop();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderReprop();
  });
}
