import { CDN_URL } from "../utils/common";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <div>
        <p>{name}</p>
        <p>
          <span>{avgRating + " stars  "}</span>
          <span>{sla.slaString}</span>
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;