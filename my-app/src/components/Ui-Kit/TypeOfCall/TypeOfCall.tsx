import React from 'react'; // we need this to make JSX compile
import {ReactComponent as IncomingCall} from "../../../../"

export interface ITypeOfCall {
  isIncoming: boolean
  isPerfect: boolean
}

const TypeOfCall: React.FC<ITypeOfCall> = () => {
  return (
    <div>
      CallsPage
    </div>
  )
} 

export {TypeOfCall}