import { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantMenuItem = ({ menuData }) => {
  const [showItems,setShowItems] = useState(false)
  const {itemCards}= menuData?.card?.card
  return (
    <div>
      <div className="w-6/12  border-black-200 border-2 mb-2 mx-auto shadow-lg">
        <div className="flex justify-between p-2">
          <h1 className="font-bold text-lg">
            {menuData?.card?.card?.title}(
            {menuData?.card?.card?.itemCards.length})
          </h1>
          <button className="bg-blue-300 p-1 rounded-md text-white" onClick={()=>{
            setShowItems(!showItems)
          }}>{!showItems ? "Show":"Hide"}</button>
        </div>
        {showItems ? <div>
            {itemCards.map((itemData)=> <MenuItem itemData={itemData}/>)}
        </div>:""}
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
