import React, { useRef } from 'react';



function App() {

  
  const ref = useRef<HTMLButtonElement>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  return (
      <div className="App">
        <h1>type script</h1>

        <button ref = {ref}> Click </button> 

        <input type="text" ref = {inputRef} />

      </div>
    );
  }

export default App;

