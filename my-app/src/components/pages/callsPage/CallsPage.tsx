import React from 'react'; 
import { CallEvaluationTextStatus } from '../../Ui-Kit/CallEvaluationTextStatus';
import { useGetListQuery, useGetRecordQuery } from '../../../api/skilla/skilla';

export interface CallsPagePropsType {
}

const CallsPage: React.FC<CallsPagePropsType> = () => {
  //const { data, error, isLoading } = useGetListQuery({ date_start: "2022-03-03", date_end: "2022-05-05", in_out: 0, limit:75});
  const { data, error, isLoading } = useGetRecordQuery({ record: 'MToxMDA2NzYxNToxNDMwMDM3NzExNzow' , partnership_id: "578" });
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
