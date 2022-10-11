import React, { useState ,useContext} from "react";
import { Context } from "./Context";
import PropTypes from "prop-types";


function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const {toggleFavorite,addToCart,cartItem,removeFromCart} = useContext(Context);


        function heartIcon() {
        if(img.isFavorite) {
          return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} />
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
  function carticon() {
    const alreadyInCart=cartItem.some(item=> item.id===img.id)
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    }
    else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)} />
      
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} >
  <img src={img.url} className="image-grid" alt="" />
        {heartIcon()}
        {carticon()}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}
export default Image;