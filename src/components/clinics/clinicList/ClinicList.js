import React from 'react'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system'
import ReactDOM from 'react-dom'

import styles from './ClinicList.css'

const ClinicList = (props) => {
  return(
    <div>
      <Col xs={12} sm={12} md={12} lg={4}>
        <div className={styles.listBack}>
          <a href={`/clinics/${props.clinic._id}`}>
            <img
              className={styles.imgList}
              src={props.clinic.img}
            />
          </a>
          <h1 className={styles.listH1}>
            <a className={styles.link} href={`/clinics/${props.clinic._id}`}>
              {props.clinic.name}
            </a>
          </h1>
        </div>
      </Col>
    </div>
  );
}

export default ClinicList
