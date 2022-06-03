import React from 'react';
import styles from "./CallEvaluationTextStatus.module.scss";
import cx from 'classnames';

export interface ICallEvaluationTextStatus {
  evaluationStatus: "excellent" | "good" | "bad";
};

const CallEvaluationTextStatus: React.FC<ICallEvaluationTextStatus> = ({ evaluationStatus }) => {
  return (
    <div className={cx(styles.callEvaluationStatusText,
      evaluationStatus === "excellent"
      ? styles.excellent
      : evaluationStatus === "good"
      ? styles.good
      : evaluationStatus === "bad"
      ? styles.bad
      : null
  )}>
      {evaluationStatus === "excellent"
      ? "Отлично"
      : evaluationStatus === "good"
      ? "Хорошо"
      : evaluationStatus === "bad"
      ? "Плохо"
      : null} 
     </div>  
  )
  
}; 

export {CallEvaluationTextStatus}