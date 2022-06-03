import React from 'react';
import { ReactComponent as Ellipse } from "../../../assets/Ui-Kit/EvaluationDots/Ellipse.svg";
import styles from "./EvaluationDots.module.scss";

export interface IEvaluationDots {
  evaluationStatus: "excellent" | "good" | "bad"
};

const EvaluationDots: React.FC<IEvaluationDots> = ({ evaluationStatus }) => {
  return (
      <div className={styles.typeOfCall}>
        {evaluationStatus === "excellent"
        ? <> 
          <Ellipse />
          <Ellipse />
          <Ellipse />
          </>
        : evaluationStatus === "good"
        ? <>
            <Ellipse />
            <Ellipse />
          </>
        : <Ellipse />
          }
      </div>
      )
}
export {EvaluationDots}