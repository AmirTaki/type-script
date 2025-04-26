import React, { JSX } from "react";

// نکته : اگر چایلدرن در تگ استفاده کردیم باید نوع تایپ تگ از 
// یعنی تگ پاس بدیم
// JSX.Element
// استفاده کنیم

// ------
// نکته : اگر ندانیم که از چه چیزی در  (چایلدرن) استفاده کنیم از دستور زیر 
// یعنی تگ پاس ندیم
// React.ReactNode
// استفاده میکنیم





type Articles = {
    // children : JSX.Element;
    children : React.ReactNode;
}

function Article ({children } : Articles){
    return (
        <div>
            {children}
        </div>
    )
}


// const Article = ({children} : Articles) => {
//     return (
//         <div>
//             {children}
//         </div>
//     )
// }

export default Article;