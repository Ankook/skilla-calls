import React from 'react';
import styles from "./IsWeb.module.scss";
import cx from "classnames";
import { ReactComponent as Web } from "../../../assets/Ui-Kit/IsWeb/IsWeb.svg";
import classNames from 'classnames';

export interface ITypeOfCall {
  isWeb: boolean
};

const IsWeb: React.FC<ITypeOfCall> = ({ isWeb }) => {
    return (
      <div className={isWeb? styles.isWeb : cx(styles.isWeb, styles.hidden) }>
        <Web/>
      </div>
      )
  
} 

export {IsWeb}