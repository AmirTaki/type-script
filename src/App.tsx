import React from 'react';
import { useState } from 'react';
import User from './component/User';


function App() {

  const[state, setState] = useState<string>("amir")

  // const[state, setState] = useState<string|null>(null)


  return (
      <div className="App">
        <h1>type script</h1>
          
          <User value = {state} onChange = {setState} />
       
      </div>
    );
  }

export default App;

