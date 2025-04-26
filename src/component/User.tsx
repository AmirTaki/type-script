import React from "react";

// نکته : وقتی قرار نیست چیزی برگرداند از 
// void
// استفاده میکنبم

// -------------------------------------------------------------------------------
// با گذاشتن علامت سوال در نام تایپ مد نظر اون تایپ به صورت اختیاری میشود
type USER = {
    name : string ,
    age : number, 
    hasChild : boolean,
    father? : string,
    sum: (a : number , b:number)=> number 
} 

function User ({name, age , hasChild, sum, father}:USER) {
    return(
    <>
        <h2> name :{name}</h2>
      
        <h2>age :{age}</h2>
      
        <h2>hasChild : {`${hasChild}`}</h2>
      
        <h2>sum : {sum(2, 6)}</h2>
        
        {/* {father ? <h2> father : {father}</h2> : <h2> </h2> }  */}
      
        <h2> father : {father ?  `${father}` :  "ندارد" } </h2>   
      
    </>    
    )
}

export default User;