import { CDN_URL } from "../utils/common";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    resData.info;
  return (
    <div className="w-[250] mt-2 p-4 bg-gray-50 hover:shadow-lg">
      <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm">
          <span>{avgRating + " stars  "}</span>
          <span>{sla.slaString}</span>
        </p>
        <p className="text-sm">{cuisines.join(", ")}</p>
        <p className="text-sm">{areaName}</p>
      </div>
    </div>
  );
};

export const withOpenRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="absolute bg-green-400 p-1 rounded-md text-white font-bold">OPEN</h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
