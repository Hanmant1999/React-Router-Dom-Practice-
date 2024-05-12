import *  as React from "react";
import { ProductImageSlider } from "./ProductImageSlider";
import { NavLink, Outlet, useLocation, useRoutes } from "react-router-dom";


export function Products(){
   const [products,setProducts] = React.useState();
   const[isLoading,setIsLoading] = React.useState(true);
   const  path = useLocation();
   console.log(path);
   async function getMeData(){
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);

      setProducts(data.products);
      setIsLoading(false);
   }

   React.useEffect(()=>{
       getMeData();
   },[]);
 
   console.log(products);
   return (
    !isLoading ?
    <>
    <h1>Products</h1>
    <div style ={{display:"flex",textAlign:"center", gap:"10px",flexWrap:"wrap"}} >
    {
        products && products?.map((product,index)=>{
            return (
           <div key = {index} style= {{width:"300px", height:"400px",border:"1px solid green"}}>
           <ProductImageSlider  imageAddressArray={product.images} />
           <h3>{product.title}</h3>
           <p>{product.description}</p>
           <NavLink to={`${index}`}>Show Price</NavLink>
           {path.pathname.endsWith(`${index}`) ?
            <Outlet context={[product.price]}/>
            :<></>
           }
           </div>
            )
        })
    }
    </div>
    </>
    :
    <>Loading ...</>
   )
}