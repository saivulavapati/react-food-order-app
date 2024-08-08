import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4268114&lng=78.338529&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const checkOnline = useOnlineStatus();
  console.log(checkOnline);
  if (checkOnline === false) {
    return (
      <div>
        <h1>You are Offline</h1>
      </div>
    );
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResList(filteredList);
            }}
          >
            search
          </button>
        </div>
        <div className="filter-btn-container">
          <button
            onClick={() => {
              console.log(restaurantList);
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredResList.map((resData) => (
          <Link to={"/restaurants/" + resData.info.id} key={resData.info.id}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
