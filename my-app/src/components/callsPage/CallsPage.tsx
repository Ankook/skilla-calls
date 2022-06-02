import React from 'react'; // we need this to make JSX compile


export interface CallsPagePropsType {
  name?: string
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  return (
    <div>
      CallsPage
    </div>
  )
} 

export {CallsPage}
