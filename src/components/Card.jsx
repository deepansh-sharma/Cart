import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, add } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";

const Card = (props) => {
  // const [selected, setSelected] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    let post = {
      title: props.title,
      description: props.description,
      price: props.price,
      id: props.id,
      image: props.image,
    };
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeToCart = () => {
    let post = {
      title: props.title,
      description: props.description,
      price: props.price,
      id: props.id,
      image: props.image,
    };
    dispatch(remove(post));
    toast.error("Item remove from Cart");
  };
  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div>
        <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {props.title}
        </div>
        <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {props.description.split(" ").slice(0, 10).join(" ") + "..."}
        </div>
      </div>
      <div className="h-[180px]">
        <img src={props.image} className="h-full w-full " alt="img" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div className="text-green-600 font-semibold">${props.price}</div>
        {cart.some((p) => p.id === props.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeToCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add Item
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
