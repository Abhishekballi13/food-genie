import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    
    //with local variable you cannot change the button to logout on click
    //as react will have no track of the button
    // let btnName = "Login";
    //with use state it will be able to track the same thing
    //you know how this const varaiable is changing as it cannot be changes because of const properties
    //because header component will be called once again when button gets clicked,and btnName becomes new variable
    //as new instance is created and will update the value with help of setBtnName

    //when button gets clicked header component is renderd but by diff algo only the button gets refreshed all other inside header
    //will remain intact and unchanged
    const [btnName,setBtnName] = useState("Login"); 

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
      //we have used media queries like sm tells when device is small then yelloe and whn large then green
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-300">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
              <ul className="flex p-4 m-4">
              <li className="px-4">    
                Online Status:{onlineStatus ? "✅":"❌"}
              </li>
              <li className="px-4">
              <Link to="/">Home</Link>
              </li>
              <li className="px-4">
              <Link to="/about">About US</Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="px-4 text-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
              <button className="login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName('Login')}}>{btnName}</button>
              <li className="font-bold">{loggedInUser}</li>
              </ul>
            </div>
        </div>
    )
}

export default Header;