


import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidevar.module.scss";
import Logo from "../../../assets/logo.svg";
import { ButtonRoute } from "./ButtonRoute";
import { navigationRoutes } from "../../../services/routes";


export interface SidebarPropsType {
  name?: string
}

const Sidebar: React.FC<SidebarPropsType> = ({ name }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            {
              navigationRoutes.map((item, index) => (
                <ButtonRoute
                  name={item.name}
                  img={item.img}
                  key={index}
                  path={item.path}
                />
              ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };

