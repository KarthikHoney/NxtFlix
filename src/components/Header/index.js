import { IoMdContact,IoIosSearch  } from "react-icons/io";
import "./index.css";

const Header =()=>{
    return(
        <div className="header">
            <div className="iconHA">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix logo" className="netflix-logo"/>
            <p className="para">Home</p>
            <p className="para">About</p>
            </div>
            <div className="SearchAndContact">
            <IoIosSearch className="icon" />
            <IoMdContact className="icon" />
            </div>
        </div>
    )
}
export default Header;