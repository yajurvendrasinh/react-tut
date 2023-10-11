import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';
import './styles/index.css';



const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
            <Provider>
                <App/> 
                {/* APP component will show up as {children} prop in Provider component in  */}
            </Provider>
        );