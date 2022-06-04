import React from 'react';
import styles from "./Sidebar.module.scss";
import { ButtonRoute } from './SidebarRoute/SidebarRoute';

export interface ISidebarProps {
};

const Sidebar: React.FC<ISidebarProps> = ({  }) => {
  return (
    <div className={styles.sidebar}>
      Sidebar
      <ButtonRoute name="Aboba" img="Some Icon" path="/calls"/>
    </div>
      )
}
export { Sidebar }