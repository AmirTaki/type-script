import React from 'react';


function App() {

  // type string
  let name:string  = "typeScript";

  // let test: string = 12; Error
  
  console.log(typeof(name));

//   نکته : در تایپ اسکریپت نمیتوان تایپ یک متغییر تغییر داد. اما در جاوا اسکریپپ میتوان تغییر داد.
  

// type number

let counter:number = 1;
console.log(typeof(counter));


// type boolean

let flag:boolean = false;
console.log(typeof(flag))


//  نکته ما زمانی برای متغیر تایپ تعریف میکنیم همان نوعی که میخواهیم  از مقدار اولیه باشد.
  return (
    <div className="App">
      <h1>type script</h1>
    </div>
  );
}

export default App;
