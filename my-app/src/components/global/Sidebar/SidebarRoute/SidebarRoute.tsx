import React from "react";
import styles from "./SidebarRoute.module.scss";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

interface ISidebarRouteProps {
  name: string;
  img: any;
  path: string;
}
const SidebarRoute: React.FC<ISidebarRouteProps> = ({ name, img, path }) => {
 
  const location = useLocation();
  
  return (
    <Link
      className={cx(styles.SidebarRoute,location.pathname === path ? styles.activeButton : null)}
      to={path}
    >
        <div className={styles.img}>{img}</div>
        <p className={styles.text}>{name}</p>
    </Link>
  );
};

export { SidebarRoute };