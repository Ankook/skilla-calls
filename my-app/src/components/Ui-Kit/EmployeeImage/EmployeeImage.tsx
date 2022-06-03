import React from 'react';
import { ReactComponent as IncomingCall } from "../../../assets/Ui-Kit/TypeOfCall/incoming.svg";
import { ReactComponent as OutcomingCall } from "../../../assets/Ui-Kit/TypeOfCall/outcoming.svg";
import styles from "./EmployeeImage.module.scss";

export interface IEmployeeImage {

};

const EmployeeImage: React.FC<IEmployeeImage> = ({  }) => {
    return (
      <div className={styles.employeeImage}>
        <img src={"https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg"} alt='Employee image'/>
      </div>
      )
  
} 

export {EmployeeImage}