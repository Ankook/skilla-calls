import React from "react";
import styles from "./ButtonRoute.module.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import cx from "classnames";

interface IProps {
  name: string;
  img: any;
  path: string;
}
const ButtonRoute: React.FC<IProps> = ({ name, img, path }) => {
  const history = useHistory();
  const params = useParams<any>();
  
  return (
    <Link
      className={cx(
        styles.button,
      )}
      to={path}
    >
      {img}
      <p>{name}</p>
    </Link>
  );
};

export { ButtonRoute };