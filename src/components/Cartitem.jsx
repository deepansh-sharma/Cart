import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";

const Cartitem = (props) => {
  const dispatch = useDispatch();

  const removeToCart = () => {
    let post = {
      title: props.item.title,
      description: props.item.description,
      price: props.item.price,
      id: props.item.id,
      image: props.item.image,
    };
    dispatch(remove(post));
    toast.error("Item removed from Cart");
  };

  return (
    <div>
      <div className="flex items-start justify-between  mt-10 pr-10 pl-10">
        <div className="h-[180px] w-4/4">
          <img
            src={props.item.image}
            className="h-full w-full"
            alt={props.item.title}
          />
        </div>
        <div className="w-7/12 ">
          <h1 className="text-xl font-bold">{props.item.title}</h1>
          <p className="text-gray-400 font-normal text-sm mt-5">
            {props.item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
          <div className="flex items-center justify-between mt-5">
            <div className="text-lg font-bold">${props.item.price}</div>
            <div>
              <button
                className="p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                onClick={removeToCart}
              >
                <AiTwotoneDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t mt-6"></div>
    </div>
  );
};

export default Cartitem;
