import Accordion from '../components/Accordion';

function AccordionPage ( { data } ) {

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

    const renderAccordion = data.map((item)=> {
        return (
            <Accordion id={item.id} header={item.header} copy={item.copy}></Accordion>
           )
    })

    return (
        <div>{renderAccordion}</div>
    )
   
}

export default AccordionPage;