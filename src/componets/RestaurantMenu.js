import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItem from "./RestaurantItem";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);
  const categories= resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  if (resMenuData === null) return <Shimmer />;

  return (
    <div>
      {categories.map((menuItem) => <RestaurantItem/>)}
    </div>
  );
};

export default RestaurantMenu;
