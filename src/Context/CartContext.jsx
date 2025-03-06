
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

function getHeaders() {
  return { token: localStorage.getItem("token") };
}

export default function CartContextProvider({ children }) {
  const [cartId, setCartId] = useState(null);
  const [numOfCartItems, setNumOfCartItems] = useState(0);

  function addToCart(id) {
    return axios.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: id },
      { headers: getHeaders() }
    ).then((response) => response.data)
      .catch((error) => console.error(error));
  }

  function getLoggedCartData() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: getHeaders() })
      .then((response) => response.data)
      .catch((error) => error);
  }

  function removeCartItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers: getHeaders() })
      .then(response => response.data)
      .catch((error) => console.error(error));
  }

  function ClearYourCart() {
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart', { headers: getHeaders() })
      .then(response => response.data)
      .catch((error) => console.error(error));
  }

  function updataProductQuantity(productId, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count }, { headers: getHeaders() })
      .then(response => response.data)
      .catch((error) => console.error(error));
  }

  function CashOnDelivery(data) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, data, { headers: getHeaders() })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  }

  function onlinePayment(data) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`, data, { headers: getHeaders() })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  }

  async function getData() {
    try {
      let response = await getLoggedCartData();
      setNumOfCartItems(response?.numOfCartItems || 0);
      setCartId(response?.cartId || null);
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider value={{
      addToCart, getLoggedCartData, numOfCartItems, cartId, removeCartItem, updataProductQuantity, ClearYourCart, setNumOfCartItems, CashOnDelivery, onlinePayment
    }}>
      {children}
    </CartContext.Provider>
  );
}
