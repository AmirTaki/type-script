import React from 'react';

// TYPE extand

type TUser1 = {
  name : string,
  age : number
}


type TUser2 = TUser1 & {
    children : string []
}

let user : TUser2 = {
  name : "amir",
  age : 28,
  children : ["not"]
} 



// INTERFACE extand


interface IUser1 {
  name : string ;
  age  : number
}

interface IUser2 extends IUser1{
  children : string[]
}


let UserI :  IUser2  = {
  name : "amir",
  age : 28,
  children : ["not"]
}

function App() {



  return (
      <div className="App">
        <h1>type script</h1>
               
      </div>
    );
  }

export default App;

// ادغام کردن 