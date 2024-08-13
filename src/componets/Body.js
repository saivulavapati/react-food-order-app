import RestaurantCard, { withOpenRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithOpen = withOpenRestaurant(RestaurantCard)

  const {loggedUser,setAuthenticatedUser} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4312564&lng=78.3328672&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      <div className="flex m-4">
        <div>
          <input
            className="border border-gray-300 rounded-md p-2"
            placeholder="search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
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
        <div>
          <button
            className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => {
              // console.log(restaurantList);
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setfilteredResList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="ml-2">
        <span>UserName:</span>
        <input
            className="border border-gray-300 rounded-md p-2 ml-2"
            placeholder="Enter Username"
            type="text"
            value={loggedUser}
            onChange={(e)=>setAuthenticatedUser(e.target.value)}
            
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((resData) => (
          <Link to={"/restaurants/" + resData.info.id} key={resData.info.id}>
            {
              resData.info.isOpen ? <RestaurantCardWithOpen resData={resData}/>:
              <RestaurantCard resData={resData} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
