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
