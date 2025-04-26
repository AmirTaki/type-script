import React from "react";

// نکته : وقتی قرار نیست چیزی برگرداند از 
// void
// استفاده میکنبم

type propsUser = {name : string ,
    age : number, 
    hasChild : boolean,
    sum: (a : number , b:number)=> number 
} 

function User (props:propsUser) {
    return(
    <>
        <h2> name :{props.name  }</h2>
      
        <h2>age :{props.age}</h2>
      
        <h2>hasChild : {`${props.hasChild}`}</h2>
      
        <h2>sum : {props.sum(2, 6)}</h2>
    </>    
    )
}

export default User;