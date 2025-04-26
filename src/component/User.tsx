import React from "react";

type TUser = {
    value : string, 
    onChange : React.Dispatch<React.SetStateAction<string>>; 
}

function User ({value, onChange}:TUser){ 
    return (
        <div>
            {value}
        </div>
    )
}

export default User;