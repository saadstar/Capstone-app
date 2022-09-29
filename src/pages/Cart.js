import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { CartItem } from "./CartItem";
function Cart() {
  const { cartItem, emptyCart } = useContext(Context);
  const [buttonText,setButtonText]=useState("Place Order")
  const cartElements = cartItem.map((item) => (
    <CartItem key={ item.id} item={item} />
  ))
  const total = 5.99 * cartItem.length;
  const totalCostDisplay = total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

  function buttonTextHandler() {
    setButtonText("Ordering...")
    setTimeout(() => { 
      setButtonText("place Oreder")
    emptyCart()
    }, 3000)
  }

  return (
    <main className="cart-page">
      {cartElements}
      <p className="total-cost">Total:{totalCostDisplay} </p>
      {
        cartItem.length >0 ?
      <div className="order-button">
        <button onClick={buttonTextHandler}>{ buttonText}</button>
      </div> :
      "You have no items in your Cart. "
      }
    </main>
  );
}

export default Cart;
