import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [exapndIndex,setExpandIndex] = useState();

  const resMenuData = useRestaurantMenu(resId);
  const categories =
    resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (resMenuData === null) return <Shimmer />;

  return (
    <div>
      {categories.map((menuItem,index) => (
        <RestaurantMenuCategory
          key={menuItem?.card?.card?.title}
          menuData={menuItem}
          showItems={index === exapndIndex && true}
          setExpandIndex = {()=>setExpandIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
