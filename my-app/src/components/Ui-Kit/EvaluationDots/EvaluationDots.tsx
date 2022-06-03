import React from 'react';
import { ReactComponent as Ellipse } from "../../../assets/Ui-Kit/EvaluationDots/Ellipse.svg";
import styles from "./EvaluationDots.module.scss";

export interface IEvaluationDots {
  evaluationStatus: "excellent" | "good" | "bad"
};

const EvaluationDots: React.FC<IEvaluationDots> = ({ evaluationStatus }) => {
  return (
      <div className={styles.evaluationDots}>
        {evaluationStatus === "excellent"
        ? <div className={styles.excellentContainer}> 
          <Ellipse />
          <Ellipse />
          <Ellipse />
          </div>
        : evaluationStatus === "good"
        ? <div className={styles.goodContainer}>
            <Ellipse />
            <Ellipse />
          </div>
          : <div className={styles.badContainer}>
            <Ellipse />
          </div>
          
          }
      </div>
      )
}
export {EvaluationDots}