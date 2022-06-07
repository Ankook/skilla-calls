import React from 'react'; 
import { CallEvaluationTextStatus } from '../../Ui-Kit/CallEvaluationTextStatus';
import { useGetListQuery, useGetRecordQuery } from '../../../api/skilla/skilla';

export interface CallsPagePropsType {
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  //const { data, error, isLoading } = useGetListQuery({ date_start: "2022-03-03", date_end: "2022-06-06", in_out: 1 });
  const { data, error, isLoading } = useGetRecordQuery({ record: "MToxMDA2NzYxNToxNDM0ODcwNDQzMzow" , partnership_id: "136" });
  console.log(data);
  return (
    <div>
      <CallEvaluationTextStatus evaluationStatus={"excellent" } />
      <CallEvaluationTextStatus evaluationStatus={"good" } />
      <CallEvaluationTextStatus evaluationStatus={"bad" }/>
    </div>
  )
} 

export {CallsPage}
