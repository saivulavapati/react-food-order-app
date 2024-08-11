import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/common";
import { useState } from "react";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);

  const CartItem = ({ itemData }) => {
    const { name, defaultPrice, price, imageId } = itemData?.card?.info;
    const [count, setCount] = useState(1);
    return (
      <div className="flex justify-between w-6/12 mx-auto border-black-100 border-2 mt-2 p-2">
        <div>
          <p>{name}</p>
          <div className="my-2">
            <button
              className="bg-black text-white px-2 rounded-md"
              onClick={() => (count > 1 ? setCount(count-1) : 1)}
            >
              -
            </button>
            <span className="p-2">{count}</span>
            <button
              className="bg-black text-white px-2 rounded-md"
              onClick={() => (count >= 1 ? setCount(count+1) : 0)}
            >
              +
            </button>
          </div>
          <p>Rs.{(defaultPrice / 100 || price / 100) * count}</p>
        </div>
        <div className="w-3/12">
          <img src={CDN_URL + imageId} />
        </div>
      </div>
    );
  };
  return (
    <div>
      {items.map((item) => (
        <CartItem itemData={item} />
      ))}
    </div>
  );
};

export default Cart;
