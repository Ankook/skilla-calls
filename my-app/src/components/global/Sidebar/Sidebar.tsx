import React from 'react'; // we need this to make JSX compile


export interface SidebarPropsType {
  name?: string
}

const Sidebar: React.FC<SidebarPropsType> = () => {
  return (
    <div className={styles.sidebar}>
      Sidebar
    </div>
  )
} 

export { Sidebar }
