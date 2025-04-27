import React, { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
 


type TButton = ComponentPropsWithRef <"button"> & {
    buttonTitle? : string
}

function Button ({ type, onChange, onClick, buttonTitle, ref} : TButton) {
    return(
        <>
            <button type = {type}>
                Click
            </button>
        </>
    )
} 

export default Button; 



// اکر  میخواهیم از
// ref
// استفاده کنیم و 
// ref
// پاس دهیم به کامپوننت از دستور زیر استفاده میکنیم

// ComponentPropsWithRef

// ComponentProps

// و اما اکر نخواهیم از 
// ref 
// استفاده نکنیم از دستور زیر استفاده میکنیم

// ComponentPropsWithoutRef