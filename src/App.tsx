import React from 'react';



// function : 

function sum (a:number, b:number) : number{
  return  a + b ;
}


function App() {

  return (
      <div className="App">
        <h1>type script</h1>
        <p>
        <h2>{sum (3, 8)}</h2>
        </p>
      </div>
    );
  }

export default App;
