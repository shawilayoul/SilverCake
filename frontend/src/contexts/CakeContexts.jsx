/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
export const CakeContext = createContext({
  items: [],
  getQauntity: () => {},
  addOneToCart: () => {},
  removerOneFromCart: () => {},
  deleteFromCart: () => {},
  updateCart: () => {},
  getTotalCost: () => {},
});
const CakeContextsProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  //get quantity
  const getQauntity = (id) => {
    const quantity = cartProduct.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };
  //updating the cart
  const updateCart = (e) => {
    const targetEl = e.target;
    if (e.target.classList.contains("added")) {
      targetEl.classList.remove("added");
      targetEl.classList.add("remove");
      targetEl.innerHTML = "Add to cart";
    } else {
      targetEl.classList.add("added");
      targetEl.classList.remove("remove");
      targetEl.innerText = "Remove from cart";
    }
  };
  // add to cart
  const addOneToCart = (e, id, image, title, price) => {
    const quantity = getQauntity(id);
    if (quantity === 0) {
      // product is not in the cart
      setCartProduct([
        ...cartProduct,
        {
          id: id,
          quantity: 1,
          image,
          title,
          price,
        },
      ]);
    } else {
      //products is in the cart
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        )
      );
    }
  };

  //remove from cart
  const removerOneFromCart = (id) => {
    let quantity = getQauntity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };
  // delete from cart
  const deleteFromCart = (id) => {
    setCartProduct(cartProduct.filter((product) => product.id != id));
  };

  // get total cost
  const getTotalCost = () => {
    let total = 0;
    cartProduct.map((product) => {
      total += product.price * product.quantity;
    });
    return total
  };
  const contextValue = {
    updateCart,
    items: cartProduct,
    getQauntity,
    addOneToCart,
    deleteFromCart,
    removerOneFromCart,
    getTotalCost,
  };
  return (
    <CakeContext.Provider value={contextValue}>{children}</CakeContext.Provider>
  );
};

export default CakeContextsProvider;
