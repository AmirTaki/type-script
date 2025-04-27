import React, { ComponentProps } from "react";
 
// type TButton = {
//     type? : string, 
//     value? : string ,
//     onClick? : () => void;
// }

type TButton = ComponentProps<"button"> & {
    buttonTitle? : string
}

function Button ({ type, onChange, onClick, buttonTitle} : TButton) {
    return(
        <>
            <button type = {type}>
                Click
            </button>
        </>
    )
} 

export default Button; 


// نکته کاهی میخواهیم تایپ اضافه بگداریم از 
// & 
// استفاده میکنیم