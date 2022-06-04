import React from 'react';
import styles from "./Sidebar.module.scss";

export interface ISidebarProps {
};

const Sidebar: React.FC<ISidebarProps> = ({  }) => {
  return (
    <div className={styles.sidebar}>
      Sidebar
    </div>
      )
}
export { Sidebar }