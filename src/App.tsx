import React from 'react';
import User from "./component/User"




function App() {

  return (
      <div className="App">
        <h1>type script</h1>
        <User name = "amir" age = {28} hasChild = {false}  />
      </div>
    );
  }

export default App;
