import { useState } from 'react';

function CounterOptimized() {
  const [result, setResult] = useState(0);

  function addOne() {
    setResult((prevResult) => prevResult + 1);
  }

  function subOne() {
    setResult((prevResult) => prevResult - 1);
  }

  return (
    <section className='container column'>
      <h1>Counter Optimized</h1>
      <div>
        <p>Ans: {result}</p>
        <button onClick={addOne}> ADD 1 </button>
        <button onClick={subOne}> SUBSTRACT 1</button>
      </div>
    </section>
  );
}

export default CounterOptimized;
