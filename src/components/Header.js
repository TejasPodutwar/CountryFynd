import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes["main-heading"]}>Search Countries in Asia</div>
    </header>
  );
}

export default Header;
