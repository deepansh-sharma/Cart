import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../components/Cartitem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex justify-center items-center">
      {cart.length > 0 ? (
        <div className="flex justify-between w-3/4 bg-white p-6 rounded shadow-lg">
          <div className="w-3/4 pr-6">
            {cart.map((item) => (
              <Cartitem key={item.id} item={item} />
            ))}
          </div>
          <div className="w-1/4 ">
            <div className="bg-gray-200 p-4 rounded">
              <h1 className="text-2xl font-bold mb-4 text-green-600">
                Your Cart
              </h1>
              <h1 className="text-lg font-bold mb-2 ">Summary :</h1>
              <div className="mb-2">Total Item: {cart.length}</div>
              <div className="mb-4">
                Total Amount: $
                {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </div>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <div className="text-lg mb-4">Your cart is empty.</div>
          <NavLink
            to="/"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Go to Home
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
