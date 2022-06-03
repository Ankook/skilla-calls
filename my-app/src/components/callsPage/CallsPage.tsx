import React from 'react'; 
import { IsWeb } from '../Ui-Kit/IsWeb';

export interface CallsPagePropsType {
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  return (
    <div>
      <IsWeb isWeb={true} />
      <IsWeb isWeb={false} />
    </div>
  )
} 

export {CallsPage}
