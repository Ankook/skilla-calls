import React from 'react';
import styles from "./Sidebar.module.scss";
import { ButtonRoute } from './SidebarRoute/SidebarRoute';
import { navigationRoutes } from '../../../services/routes';

export interface ISidebarProps {
};

const Sidebar: React.FC<ISidebarProps> = ({  }) => {
  return (
    <div className={styles.sidebar}>
      { navigationRoutes.map((item, index) => (
          <ButtonRoute
            name={item.name}
            img={item.img}
            key={index}
            path={item.path}
            />
        ))}
    </div>
      )
}
export { Sidebar }