import React, { useEffect } from 'react';


type TUser =  string; 

function App() {

  useEffect (()=>{

    // const user = localStorage.getItem("user")

    const user = JSON.parse(localStorage.getItem("user") as TUser );

    console.log(typeof user)

    console.log(user)
  
  })



  return (
      <div className="App">
        <h1>type script</h1>

      </div>
    );
  }

export default App;


// نکته هر جا که متغییر را ما دو حالتی باشد یا 

// null

// باشد یا

// undifind

// باشد میتوان از 

// as 

// استفاده کرد


// یا بخواهیم استرینک به عنوان یه نامبر جا بزنیم یا بالعکس

// یا از 

// parseInt

// toString