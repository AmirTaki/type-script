import React from "react";

// type TUser = {
//     value : string, 
//     onChange : React.Dispatch<React.SetStateAction<string>>; 
// }


interface IUser {
    value : string,
    onChange : React.Dispatch<React.SetStateAction<string>>
}

type TFruits = "Banan" | "Apple" | "Orange" // Union Type

interface INames { name : string}

type TCars = {name : string}


function User ({value, onChange}:IUser){ 
    return (
        <div>
            {value}
        </div>
    )
}

export default User;



// برای تعریف تایپ برای آبجکت ها از اینترفیس استفاده میکنیم

// کاربرد : اینترفیس ها معمولا برای آبجکت ها استفاده میشود و اما تایپ ها برای 

// تایپ ها قابلیت بیشتری دارند معمولا برای مقدار دهی به متغییر ها استفاده میشود

// مثلا در تایپ از 
// union
// میتوان استفاده کرد