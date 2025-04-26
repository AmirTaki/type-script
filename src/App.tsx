import React from 'react';
import { useState } from 'react';



type State = {
  name : string,
  age : number, 
}

function App() {

  // const[state, setState] = useState<string>("test")

  const[state, setState] = useState<State | null>(null);

  return (
      <div className="App">
        <h1>type script</h1>
          
        {
          state?.name
        }
      </div>
    );
  }

export default App;



// هر نوع مقداری که در 
// useState(مقدار)
// بکذاریم همان تایپ آن میشود

// --------------------------------------------

// برای محدود کردن کافیست از دستور زیر استفاده کنیم

// const [state, setState] = usestate<boolean>(false)

// ------------------------------------
// برای آبجکت چون نمیدانیم که چه نوع تایپی از بک اند میاد از 
// null
// استفاده میکنیم


// const[state, setState] = useState<State | null>(null);

// نکته : علت علامت سوال این است که قبل از رسیدن دیتا از بک اند مقدار
// null
// است

