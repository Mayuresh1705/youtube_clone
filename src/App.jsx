import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import MainBox from "./Components/MainbBox"; // or MainBox if you rename the file
import Style from "./CSS/App.module.css";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className={Style.mainLayout}>
        <Sidebar toggle={toggle} />
        <MainBox />
      </div>
    </>
  );
};

export default App;