import React from "react";
import Style from "../CSS/Sidebar.module.css";
import { Home, ChevronRight } from "lucide-react";

const Sidebar = ({ toggle }) => {
  return (
    <aside
      className={`${Style.section} ${toggle ? Style.sidebar : ""}`}
    >
      <div className={Style.home}>
        <Home size={20}/>
        <span>Home</span>
      </div>

      <div className={Style.subscription}>
        <span>Subscription</span>
        <ChevronRight size={18}/>
      </div>

      <div className={Style.you}>
        <span>You</span>
      </div>

      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i}>Scroll</div>
      ))}
    </aside>
  );
};

export default Sidebar;