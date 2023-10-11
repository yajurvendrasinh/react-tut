// 1. import libs needed for react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// 2. get reference of the dom elemtn to tell react to use to render the app
const el = document.getElementById('root');

// 3. tell react to take control of the element
const root = ReactDOM.createRoot(el);

// 4. render the compoent

root.render(<App/>);