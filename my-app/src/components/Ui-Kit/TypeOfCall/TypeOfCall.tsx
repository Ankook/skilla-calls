import React from 'react'; // we need this to make JSX compile
import { ReactComponent as IncomingCall } from "../../../assets/Ui-Kit/TypeOfCall/incoming.svg";
import { ReactComponent as OutComingCall } from "../../../assets/Ui-Kit/TypeOfCall/outcoming.svg";

export interface ITypeOfCall {
  isIncoming: boolean
  isPerfect: boolean
}

const TypeOfCall: React.FC<ITypeOfCall> = (isIncoming, isPerfect) => {
  return (
    <div>
      <IncomingCall />
      <OutComingCall />
      <IncomingCall fill='red'/>
    </div>
  )
} 

export {TypeOfCall}