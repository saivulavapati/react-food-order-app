import { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantMenuCategory = ({ menuData,showItems,setExpandIndex }) => {
  const {itemCards}= menuData?.card?.card
  const handleClick = () => {
    setExpandIndex();
  }
  return (
    <div>
      <div className="w-6/12  border-black-200 border-2 mb-2 mx-auto shadow-lg">
        <div className="flex justify-between p-2">
          <h1 className="font-bold text-lg">
            {menuData?.card?.card?.title}(
            {menuData?.card?.card?.itemCards.length})
          </h1>
          <button className="bg-blue-300 p-1 rounded-md text-white" onClick={handleClick}>{!showItems ? "Show":"Hide"}</button>
        </div>
        {showItems ? <div>
            {itemCards.map((itemData)=> <MenuItem key={itemData?.card?.info?.id} itemData={itemData}/>)}
        </div>:""}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
