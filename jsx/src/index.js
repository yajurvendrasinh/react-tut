// Step 1 - import React and React related libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Step 2 - Get reference of the div with id='root'
const el = document.getElementById('root');

// Step 3 - Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Step 4.1 - Create component
/** 
 * this is how you initially create the component. 
 * and then use APP.JS to import it from different file while you clean up the code
 * the below code wil lgo in App.js and then as on line 4, it will be imported here in this file
    function App() {
        let name = 'Yajur'
        return (
            <div>
                <p>My name is <span>{name}</span></p>
                <input placeholder="this is placeholder" />
            </div>
        )
    }
*/

//  Step 5 - show that component
root.render(<App />)