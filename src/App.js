import React, { useState } from "react";
import './App.css';

function App() {
  const greetings = ["Hello", "Hi", "Hey", "Greetings"];
  const [greetingIndex, setGreetingIndex] = useState(0);

  const handleButtonClick = () => {

    setGreetingIndex((greetingIndex + 1) % greetings.length);
  };
  return (
    <div className="App">
      <h1>{greetings[greetingIndex]}</h1>
      <button onClick={handleButtonClick}>Next Greeting</button>
    </div>
  );
}

export default App;
