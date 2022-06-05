import React from 'react';
import styles from "./Sidebar.module.scss";
import { SidebarRoute } from './SidebarRoute/SidebarRoute';
import { navigationRoutes } from '../../../services/routes';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Sidebar/logo.svg";

export interface ISidebarProps {
};

const Sidebar: React.FC<ISidebarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Link className={styles.link} to={"/calls"}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={styles.navigationRoutes}>
        {navigationRoutes.map((item, index) => (
          <li>
            <SidebarRoute
              name={item.name}
              img={item.img}
              key={index}
              path={item.path}
              />
          </li>
      ))}
      </ul>
    </div>
      )
}
export { Sidebar }