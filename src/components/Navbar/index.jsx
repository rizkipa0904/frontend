import React from "react";

/** Styles */
import styles from "./style.module.css";

/** Components */
import TitleLogo from "../TitleLogo";
import NavItem from "../NavItem";

/** utils */
import { navItems } from "../../utils/navItems";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <TitleLogo className={styles.logo} />
      {
        navItems.map((item) => {
          return (
            <NavItem
              key={item.id}
              logo={item.logo}
              name={item.name}
              link={item.link}
            />
          );
        })
      }
    </div>
  );
};

export default Navbar;
