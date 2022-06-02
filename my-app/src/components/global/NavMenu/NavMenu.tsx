import React from 'react'; // we need this to make JSX compile


export interface NavMenuPropsType {
  name?: string
}

const NavMenu: React.FC<NavMenuPropsType> = () => {
  return (
    <div>
      Navigation menu
    </div>
  )
} 

export {NavMenu }
