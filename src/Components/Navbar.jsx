import React from "react";
import Style from "../CSS/Navbar.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Menu, Plus, Search } from "lucide-react";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav className={Style.navbar}>
      <div className={Style.logo}>

        <button
          className={Style.menuBtn}
          onClick={() => setToggle(!toggle)}
        >
          <Menu size={28} />
        </button>

        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"
          alt="youtube"
        />
      </div>

      <div className={Style.search}>
        <input type="text" placeholder="Search" />

        <button>
          <Search size={20}/>
        </button>
      </div>

      <div className={Style.righticon}>
        <button className={Style.createBtn}>
          <Plus size={18}/>
          <span>Create</span>
        </button>

        <FaBell size={24}/>
        <FaUserCircle size={28}/>
      </div>
    </nav>
  );
};

export default Navbar;