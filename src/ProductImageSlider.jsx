import * as React from "react";



export function ProductImageSlider({imageAddressArray}){
    const [currentImage,setCurrentImage] = React.useState(0);

    React.useEffect(()=>{
       const imageMover = setInterval(()=>{
             setCurrentImage((currentCount) => {
                if(currentCount +1 > imageAddressArray.length -1 ){
                   return 0 ;
                }
                else{
                    return currentCount+1;
                }
             });
       },2000)

       return ()=>{
        clearInterval(imageMover);
       }
    },[]);



    return (
        <div>
            <img src={imageAddressArray[currentImage]} alt="product image" height="200px" width="200px" />
        </div>
    )
}