import React from "react";
import styles from "./SidebarRoute.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import cx from "classnames";

interface IButtonRouteProps {
  name: string;
  img: any;
  path: string;
}
const ButtonRoute: React.FC<IButtonRouteProps> = ({ name, img, path }) => {
  const navigate = useNavigate();
  const params = useParams<any>();
 
  
  return (
    <Link
      className={cx(
        styles.button,
         styles.activeButton 
      )}
      to={path}
    >
      {img}
      <p>{name}</p>
    </Link>
  );
};

export { ButtonRoute };