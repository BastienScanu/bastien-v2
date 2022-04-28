import * as React from 'react'
import styles from '../styles/Blob.module.scss'
import { RandomBlob } from '../models/RandomBlob';
import { useState, useEffect } from 'react';

const Blob = () => {
  const size = 200
  const blob = new RandomBlob(size);
  blob.generateCurvyShape();

  const [path, setPath] = useState(blob.getPath());
  const resetPath = () => {
    blob.generateCurvyShape();
    setPath(blob.getPath());
  }


  return (
    <div className={styles.frame} onClick={resetPath}>    
      <svg width="100%" height="100%" viewBox={"0 0 " + size + " " + size} xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" className={styles.svg}>

        <path className={styles.blob} d={path}></path>
        <defs>
          <linearGradient id="gradient-fill" x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
              <stop offset="0.14285714285714285" stopColor="#14851c" />
              <stop offset="0.2857142857142857" stopColor="#1b931e" />
              <stop offset="0.42857142857142855" stopColor="#1e9a1e" />
              <stop offset="0.5714285714285714" stopColor="#22a11f" />
              <stop offset="0.7142857142857142" stopColor="#26a81f" />
              <stop offset="0.8571428571428571" stopColor="#2eb620" />
          </linearGradient>
        </defs>
      </svg>
    </div>

  )
}

export default Blob
