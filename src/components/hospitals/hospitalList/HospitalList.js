import React from 'react'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system'
import ReactDOM from 'react-dom'

import styles from './HospitalList.css'

const HospitalList = (props) => {
  return(
    <Col xs={12} sm={12} md={12} lg={4}>
      <div className={styles.listBack}>
        <a href={`/hospitals/${props.hospital._id}`}>
          <img
            className={styles.imgList}
            src={this.props.hospital.img}
          />
        </a>
        <h1 className={styles.listH1}>
          <a className={styles.link} href={`/hospitals/${props.hospital._id}`}>
            {props.hospital.name}
          </a>
        </h1>
      </div>
    </Col>
  );
}

export default HospitalList
