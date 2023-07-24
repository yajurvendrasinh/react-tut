import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';

function App() {
    const accordianData = [
        {
            'id' : 'lol',
            'header' : 'header lable',
            'copy' : 'copy text'

        },
        {
            'id' : 'lol2',
            'header' : 'header lable',
            'copy' : 'copy text'

        }
    ]
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
            <div>
              {/* <ButtonPage/> */}
              <AccordionPage data={accordianData}/> 
            </div>
        </div>
    )
}

export default App;