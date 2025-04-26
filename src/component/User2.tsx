import React from "react";

// نکته : وقتی قرار نیست چیزی برگرداند از 
// void
// استفاده میکنبم

type USER = {
    name : string ,
    age : number, 
    hasChild : boolean,
    sum: (a : number , b:number)=> number 
} 


const User:React.FC<USER>  = ({name, age , hasChild, sum}) => {
    return (
        <>
            <h2>name : {name}</h2>
            <h2>age : {age}</h2>
            <h2>hasChild : {hasChild}</h2>
            <h2>sum : {sum(4, 6)}</h2>
        </>
    )
}  

export default User;