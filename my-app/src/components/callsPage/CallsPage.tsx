import React from 'react'; // we need this to make JSX compile
import { TypeOfCall } from '../Ui-Kit/TypeOfCall/TypeOfCall';


export interface CallsPagePropsType {
  name?: string
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  return (
    <div>
      <TypeOfCall isIncoming={true} isPerfect={true} />
      <TypeOfCall isIncoming={true} isPerfect={false} />
      <TypeOfCall isIncoming={false} isPerfect={true} />
      <TypeOfCall isIncoming={false} isPerfect={false}/>
    </div>
  )
} 

export {CallsPage}
