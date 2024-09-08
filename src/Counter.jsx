import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // setCount(c => c + 1) //updater function : membuat function seperti sebuah line yang mengantro
    // setCount(c => c + 1) //jika hanya (count + 1) tidak akan meng-update si count walaupung jumlahnya ada lebih dari 1
  };

  const decrement = () => {
    setCount(count - 1);
    // setCount(c => c -1)
    // setCount(c => c -1)
  };

  const reset = () => {
    setCount(0)
  };

  return(
    <div>
        <p>{count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </div>
  )

}

export default Counter;
