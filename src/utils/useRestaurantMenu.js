import { useEffect, useState } from "react";
import { MENU_URL } from "./common";

const useRestaurantMenu = (resId) => {

    const [resMenuData,setResMenuData] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        console.log(MENU_URL+resId)
        const data = await fetch(MENU_URL+resId)
        const json = await data.json();
        console.log(json)
        setResMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    return resMenuData;
}

export default useRestaurantMenu;