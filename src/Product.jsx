import * as React from "react";
import { useOutletContext } from "react-router-dom";



export function Product(){
      const [Price ] = useOutletContext();
    return (
        <h3>{Price} $</h3>
    )
}