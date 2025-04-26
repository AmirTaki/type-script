import React from "react";

type propsFunctions = {name : string , age : number, hasChild : boolean} 

function User (props:propsFunctions) {
    return(
    <>
        
        <h2> name :{props.name  }</h2>
        <h2>age :{props.age}</h2>
        <h2>hasChild : {`${props.hasChild}`}</h2>
    </>    
    )
}

export default User;