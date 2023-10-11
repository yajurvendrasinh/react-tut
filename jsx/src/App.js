/**
 * A component always starts with a capital letter of the component it exports
 * importing and exporting smaller chunks of files or components is called MODULE SYSTEMS
 * @return component App to be imported
 */

function App() {
    let appName = 'PERSONAL DIGITAL ASSISTANTS'
    return (
        <div>
            <h1 className='app-header'>{appName}</h1>
            <div className='assistant-card'>
                <div className="logo-box">
                    <img />
                </div>
                <div className="content-box">
                    <h3 className="assist-name">Siri</h3>
                    <section className="assist-handle">@siri</section>
                    <section classname="assist-info">-made by Apple </section>
                </div>
            </div>
        </div>
    )
}

export default App;

/**
 * video 22 on react course
 * There are two main types of exports
 * 1. is DEFAULT EXPORTS : 
 *      export default App ;
 *          OR
 *      export default function App() { ... }
 * 
 *      import App from './App'
 * 
 * this can be assigned to same name variable or can be renamed in the file importing it
 * there can be only ONE default export per file
 * hence to export multiple variables from a single file, we use NAMED EXPORTS
 * 
 * 2. NAMED EXPORTS : 
 *      const message = 'hi'
 *      export {message} 
 *          OR
 *      export const message = 'hi'
 * 
 *      import { message } from './App'
 * 
 * NAMED export cannot be renamed
 * 
 * GOTCHA:
 *  import React from 'react' <- this doesnt need directory specification as
 *  it is a package and will be imported as one from your installed packages form node_modules
 *  './' <- same folder relative path
 *  '../' <- go to parent folder
 */