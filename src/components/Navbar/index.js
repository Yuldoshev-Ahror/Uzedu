import React from "react";
import "./index.scss";

import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";

const Navbar = () => {
  return (
    <React.Fragment>
      <NavbarOne />
      <NavbarTwo />
      <NavbarThree />
    </React.Fragment>
  );
};

export default Navbar;
