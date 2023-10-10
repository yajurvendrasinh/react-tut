import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropDown from './components/DropDown';
import CounterPage from './pages/Counter';

function App() {

    const options = [
        {label : 'Red', value: 'Red' },
        {label : 'Green', value: 'Green' },
        {label : 'Blue', value: 'Blue' }
    ]
    
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
            <div>
              {/* <ButtonPage/> */}
              {/* <AccordionPage data={accordianData}/>  */}
              {/* <DropDown options={options} /> */}
              <CounterPage initialCount={1} />
            </div>
        </div>
    )
}

export default App;