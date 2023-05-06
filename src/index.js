// import React from 'react'; // импортируем ядро реакта
// import ReactDOM from 'react-dom/client'; // импортируем функцию createRoot с помощью которой будет поддерфиваться канкаред мод (18)
// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);
