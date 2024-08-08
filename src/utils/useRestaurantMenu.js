import { useEffect, useState } from "react";
import { MENU_URL } from "./common";

const useRestaurantMenu = (resId) => {

    const [resMenuData,setResMenuData] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_URL+resId)
        const json = await data.json();
        setResMenuData(json?.data)
    }

    return resMenuData;
}

export default useRestaurantMenu;