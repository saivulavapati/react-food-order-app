import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/common";
import { addItem } from "../redux/cartSlice";

const MenuItem = ({ itemData }) => {
  const { name, defaultPrice, imageId, description, price } =
    itemData?.card?.info;

  const dispatch = useDispatch();

  const handleCardItem = (data) => {
    dispatch(addItem(data))
  }

  return (
    <div className="flex justify-between border-b-2 border-gray-200 py-2">
      <div className="w-9/12 py-1 px-1">
        <p className="font-bold">{name}</p>
        <p className="text-sm">Rs-{defaultPrice / 100 || price / 100}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="w-3/12 p-2">
        <button className="absolute bg-black text-white border border-black rounded-md p-1 text-sm" 
        onClick={()=>handleCardItem(itemData)}
        >
          Add+
        </button>
        <img className="w-full h-[120px]" src={CDN_URL + imageId} />
      </div>
    </div>
  );
};

export default MenuItem;
