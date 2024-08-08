import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [loginBtn,setLoginbtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center shadow-lg">
      <img className="h-32" src={LOGO_URL} />
        <ul className="flex">
          <li className="m-4">OnlineStatus:{onlineStatus?"Online":"Offline"}</li>
          <li className="m-4"><Link to="/">Home</Link></li>
          <li className="m-4"><Link to="/about">About Us</Link></li>
          <li className="m-4"><Link to="/contact">Contact Us</Link></li>
          <li className="m-4">Cart</li>
          <li className="m-4">
            <button onClick={()=>{loginBtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login")}}>{loginBtn}</button>
          </li>
        </ul>
    </div>
    </div>
  );
};

export default Header;
