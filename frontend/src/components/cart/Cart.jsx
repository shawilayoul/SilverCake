import "./cart.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cartContainer">
      <div className="cartTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Cart</h2>
        </div>
      </div>
      <div className="cartItem">
        <p>Your cart is currently empty</p>
        <Link to='shop' className="btnReturn">Return To shop</Link>
      </div>
    </div>
  );
};

export default Cart;
