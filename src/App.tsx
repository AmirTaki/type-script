import React, { useRef } from 'react';

type User1 = {
  name : string,
  age : number,
  color : string
}

type user2 = Omit<User1, "age" | "color">
  


function App() {


  return (
      <div className="App">
        <h1>type script</h1>

      </div>
    );
  }

export default App;

