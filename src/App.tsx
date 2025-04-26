import React from 'react';


// تعریف تایپ با کلمه کلیدی
// type (name) = {type}

type User =  {name : string ; age : number; color : string}

type  ArrayType  = number[] 

type ArrayMerge = (string | number | boolean) []

// میتوان از دستور اکسپرت و اینپورت نیز استفاده کرد

export type ArrayD = number [];

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


// تایپ آرایه ها :

let array = [1,"string", false, ];

console.log(typeof(array))

let array2: number[] = [1, 2, 3, 4, 5]

let array3: string[] = ["code", "typeScript"]

let array4: (string  | number | boolean) [] = [true, 1, 2, 3, 4, "typeScript"]


// آبجکت ها

let obj_user = {
  name : "amir",
  age : 28,
  color : "white",
}

// تعریف تایپ برای آبجکت ها

let obj_user2 : {name : string ; age : number ; color : string} = {
  name : "amir",
  age : 28,
  color : "white"
}

// ------------------------------------------------------------------------

let profile : User =  {

  name : "amir",
  age : 30,
  color : "black"

}


let array5 : ArrayType = [1, 2, 3, 4, 5, 6]

let array6 : ArrayMerge = ["code2", "javaScript", "react", false , 1, 2, 3, 4, 5]

return (
    <div className="App">
      <h1>type script</h1>
      <p>
         type string : {name}<br />
         type number : {counter} <br />
         
      </p>
    </div>
  );
}

export default App;
