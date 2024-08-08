import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [loginBtn,setLoginbtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>OnlineStatus:{onlineStatus?"Online":"Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={()=>{loginBtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login")}}>{loginBtn}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
