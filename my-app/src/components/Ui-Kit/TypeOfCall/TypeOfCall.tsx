import React from 'react';
import { ReactComponent as IncomingCall } from "../../../assets/Ui-Kit/TypeOfCall/incoming.svg";
import { ReactComponent as OutcomingCall } from "../../../assets/Ui-Kit/TypeOfCall/outcoming.svg";
import styles from "./TypeOfCall.module.scss";

export interface ITypeOfCall {
  isIncoming: boolean,
  isPerfect: boolean
};

const TypeOfCall: React.FC<ITypeOfCall> = ({ isIncoming, isPerfect }) => {
    return (
      <div className={styles.typeOfCall}>
        {isIncoming
          ? <IncomingCall className={isPerfect ? styles.incoming : styles.imperfect} />
          : <OutcomingCall className={isPerfect ? styles.outcoming : styles.imperfect} />}
      </div>
      )
  
} 

export {TypeOfCall}