import React from 'react'; 
import { CallEvaluationTextStatus } from '../../Ui-Kit/CallEvaluationTextStatus';

export interface CallsPagePropsType {
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  return (
    <div>
      <CallEvaluationTextStatus evaluationStatus={"excellent" } />
      <CallEvaluationTextStatus evaluationStatus={"good" } />
      <CallEvaluationTextStatus evaluationStatus={"bad" }/>
    </div>
  )
} 

export {CallsPage}
