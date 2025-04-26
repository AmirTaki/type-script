import React from "react";

// نکته : وقتی قرار نیست چیزی برگرداند از 
// void
// استفاده میکنبم

// -------------------------------------------------------------------------------

// با گذاشتن علامت سوال در نام تایپ مد نظر اون تایپ به صورت اختیاری میشود

// -------------------------------------------------------------------------------

// اکر برای ما به هر دلیلی نتوانیم  یا ندانیم تایپ چیزی استفاده کنیم از 
// any
// استفاده کنیم



type USER = {
    name : string ,
    
    age : number, 
    
    hasChild : boolean,
    
    father? : string,

    mother : any, 

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