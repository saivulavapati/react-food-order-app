import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);

  if (resMenuData === null) return <Shimmer />;

  const MenuItem = (props) => {
    const { item } = props;
    const { name, price } = item.card.info;
    return (
      <li>
        <h3>{name}</h3>
        <h4>Rs:-{price / 100}</h4>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {resMenuData.map((item) => (
          <MenuItem key={item.card.info.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
