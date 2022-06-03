import React from 'react';
import styles from "./CallEvaluationTextStatus.module.scss";

export interface ICallEvaluationTextStatus {
  evaluationStatus: "excellent" | "good" | "bad";
};

const CallEvaluationTextStatus: React.FC<ICallEvaluationTextStatus> = ({ evaluationStatus }) => {
  return (
    <div className={styles.CallEvaluationTextStatus}>
      {evaluationStatus}
     </div>  
  )
  
}; 

export {CallEvaluationTextStatus}