import React from 'react'; // we need this to make JSX compile
import styles from "./Sidebar.module.scss";

export interface SidebarPropsType {
  name?: string
}

const Sidebar: React.FC<SidebarPropsType> = () => {
  return (
    <div className={styles.sidebarComponent}>
      Sidebar
    </div>
  )
} 

export { Sidebar }

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Logo from "../../../assets/logo.svg";
import { ButtonRoute } from "./ButtonRoute";
import { navigationRoutes } from "../../../services/routes";
import { useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../redux/store";
import { Roles } from "../../../redux/auth/types/roles";
import { USERS_PAGE } from "../../../services/consts";

const Navbar = () => {
  const role = useAppSelector((state: RootState) => state.authReducer.roles);
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
            {role === Roles.ADMIN &&
              navigationRoutes.map((item, index) => (
                <ButtonRoute
                  name={item.name}
                  img={item.img}
                  key={index}
                  path={item.path}
                />
              ))}
            {(role === Roles.USER ||
              role === Roles.TESTER ||
              role === Roles.LIKER) &&
              navigationRoutes
                .filter((route) => route.path !== USERS_PAGE)
                .map((item, index) => (
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

export { Navbar };

