import { CDN_URL } from "../utils/common";

const MenuItem = ({ itemData }) => {
  console.log(itemData)
  const { name, defaultPrice, imageId, description,price } = itemData?.card?.info;
  return (
    <div className="flex justify-between border-b-2 border-gray-200 py-2">
      <div className="w-9/12 py-1 px-1">
        <p className="font-bold">{name}</p>
        <p className="text-sm">Rs-{defaultPrice/100 || price/100}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="w-3/12 p-2">
        <img className="w-full h-[120px]" src={CDN_URL + imageId} />
      </div>
    </div>
  );
};

export default MenuItem;
