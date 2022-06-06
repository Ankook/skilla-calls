import React from 'react'; 
import { CallEvaluationTextStatus } from '../../Ui-Kit/CallEvaluationTextStatus';
import { useGetListQuery } from '../../../api/skilla/skilla';

export interface CallsPagePropsType {
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  const { data, error, isLoading } = useGetListQuery({date_start: "2022-05-03"});
  return (
    <div>
      <CallEvaluationTextStatus evaluationStatus={"excellent" } />
      <CallEvaluationTextStatus evaluationStatus={"good" } />
      <CallEvaluationTextStatus evaluationStatus={"bad" }/>
    </div>
  )
} 

export {CallsPage}
