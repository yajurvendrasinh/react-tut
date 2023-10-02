import { useState } from 'react';

function DropDown( { options } ) {

    const [isOpen, setIsOpen] = useState(false)

    const handleSelectClick = () => {
        setIsOpen(!isOpen)
    }

    const renderOptions = options.map((option) => {
        return (<div key={option.value}>{option.label}</div>)
    });
    
    return (
        <div>
            <div onClick={handleSelectClick}>Select...</div>
            {isOpen && <div>{renderOptions}</div>}
        </div>
    )
}

export default DropDown;