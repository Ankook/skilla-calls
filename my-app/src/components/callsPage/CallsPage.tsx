import React from 'react'; 
import { EvaluationDots } from '../Ui-Kit/EvaluationDots';

export interface CallsPagePropsType {
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  return (
    <div>
      <EvaluationDots evaluationStatus='excellent' />
      <EvaluationDots evaluationStatus='good' />
      <EvaluationDots evaluationStatus='bad'/>
    </div>
  )
} 

export {CallsPage}
