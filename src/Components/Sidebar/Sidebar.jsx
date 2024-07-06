import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobile from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/gerard.png";
import simon from "../../assets/jack.png";
import tom from "../../assets/simon.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setcategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`sidelink ${category===0?"active":""}`} onClick={() => setcategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className={`sidelink ${category===20?"active":""}`} onClick={() => setcategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`sidelink ${category===2?"active":""}`} onClick={() => setcategory(2)}>
          <img src={automobile} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`sidelink ${category===17?"active":""}`} onClick={() => setcategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`sidelink ${category===24?"active":""}`} onClick={() => setcategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`sidelink ${category===28?"active":""}`} onClick={() => setcategory(28)}>
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>
        <div className={`sidelink ${category===10?"active":""}`} onClick={() => setcategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`sidelink ${category===22?"active":""}`} onClick={() => setcategory(22)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`sidelink ${category===25?"active":""}`} onClick={() => setcategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
