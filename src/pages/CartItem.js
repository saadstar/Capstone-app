import React, { useContext, useState } from "react";
import { Context } from "../Context";

export function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    const [hovered,setIshovered]=useState(false)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    return (
      <div className="cart-item">
            <i className={iconClassName} onClick={() => removeFromCart(item.id)}
            onMouseEnter={()=>setIshovered(true)}
            onMouseLeave={()=>setIshovered(false)}
            ></i>
        <img src={item.url} width="130px" height="130px" />
        <p>$5.99</p>
      </div>
    );
}