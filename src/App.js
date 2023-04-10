import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);

  function updateNumbers() {
    const newNumbers = [...numbers];
    newNumbers.push(Math.floor(Math.random() * 10));
    setNumbers(newNumbers);
  }

  let arr = [1,2,3,4,5,6,7,8,9,10]
  let random = Math.floor(Math.random() * 10)

  return (
    <div>
      <button onClick={updateNumbers}>Update Numbers</button>

      <p>
        {
          arr.map((e)=>(
            <li>{e*random}</li>
          ))
        }
      </p>

    </div>


  );
}

export default App;
