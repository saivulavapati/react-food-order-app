import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/common";
import { useState } from "react";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const CartItem = ({ itemData }) => {
    const { name, defaultPrice, price, imageId } = itemData?.card?.info;
    const [count, setCount] = useState(1);
    return (
      <div data-testid="cart-item" className="flex justify-between w-6/12 mx-auto border-black-100 border-2 mt-2 p-2">
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
    <div className="flex flex-col place-items-center">
      <div>
          <button className="bg-blue-300 p-2 rounded-md text-white"
          onClick={()=> dispatch(clearCart())}
          >Clear Cart</button>
      </div>
      {items.length ==0 ? <h1>Your cart is Empty.</h1>:items.map((item) => (
        <CartItem key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default Cart;
