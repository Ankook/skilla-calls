import React from 'react'; // we need this to make JSX compile
import { TypeOfCall } from '../Ui-Kit/TypeOfCall/TypeOfCall';


export interface CallsPagePropsType {
  name?: string
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  return (
    <div>
      <TypeOfCall isIncoming={true} isPerfect={true}/>
    </div>
  )
} 

export {CallsPage}
