import React from 'react';
import  ReactDOM  from 'react-dom/client';

import App from './App';

const divElement = document.querySelector('#root');
const root = ReactDOM.createRoot(divElement);
root.render(<App />);