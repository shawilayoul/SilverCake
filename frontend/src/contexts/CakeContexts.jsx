import React, { useState } from "react";
import { createContext } from "react";
const CakeContext = createContext();
export const CakeContextsProvider = ({ children }) => {
  const [countProduct, setCountProduct] = useState(0);

  //updating the cart
  const updateCart = (e) => {
    const targetEl = e.target;
    if (e.target.classList.contains("added")) {
      targetEl.classList.remove("added");
      targetEl.classList.add("remove");
      targetEl.innerHTML = "Add to cart";
      setCountProduct(countProduct - 1);
    } else {
      targetEl.classList.add("added");
      targetEl.classList.remove("remove");
      targetEl.innerText = "Remove from cart";
      setCountProduct(countProduct + 1);
    }
  };
  return (
    <CakeContext.Provider value={{ updateCart,countProduct}}>
      {children}
    </CakeContext.Provider>
  );
};

export default CakeContext;

export const Provider = ({ children }) => {};
