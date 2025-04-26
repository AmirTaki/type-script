import React from 'react';
import User from "./component/User"



function sum (a:number, b: number) : number{
  return a + b;
}
function App() {

  return (
      <div className="App">
        <h1>type script</h1>
        <User name = "amir" age = {28} hasChild = {false} sum = {sum}  />
      </div>
    );
  }

export default App;
