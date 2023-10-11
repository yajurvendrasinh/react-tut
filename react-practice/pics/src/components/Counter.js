import { useState } from 'react';

function Counter() {

    const [number, setNumber] = useState(5);

    function addValue() {
        setNumber(number + 1);
    }

    function subValue() {
        setNumber(number - 1);
    }


    return (
        <section>
            <h2>Simple counter</h2>
            <div>
                <button onClick={addValue}>+</button>
            <p>{number}</p>
            <button onClick={subValue}>-</button>
            </div>
        </section>
    );
}

export default Counter;