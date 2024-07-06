import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo2 from "../../assets/logo2.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user_profile.jpg";
import audio_icon from "../../assets/voice-search.png";
import { Link } from "react-router-dom";

const Navbar = ({setsidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt="Menu" />
        <Link to="/"><img className="logo" src={logo2} alt="Logo"/></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img className="search-icon" src={search_icon} alt="Search" />
        </div>
        <div className="audio-icon-container">
          <img className="audio-icon" src={audio_icon} alt="Audio" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More" />
        <img src={notification_icon} alt="Notifications" />
        <img className="user_icon" src={profile_icon} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
