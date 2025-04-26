import React from "react";

// میتوانیم بعضی تایپ ها را به صورت خاص تعریف کنیم

type UserMoter = "mari" | "didi" | "jeni" ;

type USER = {
    name : string ,
    
    age : number, 
    
    hasChild : boolean,
    
    father? : string,

    mother : UserMoter,

    sum: (a : number , b:number)=> number 
} 

function User ({name, age , hasChild, sum, father, mother}:USER) {
    return(
    <>
        <h2> name :{name}</h2>
      
        <h2>age :{age}</h2>
      
        <h2>hasChild : {`${hasChild}`}</h2>
      
        <h2>sum : {sum(2, 6)}</h2>
      
        <h2> father : {father ?  `${father}` :  "ندارد" } </h2>   

        <h2>motehr : {`${mother}`}</h2>      
    </>    
    )
}

export default User;