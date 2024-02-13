'use client'

import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/Blob.module.scss'
import { RandomBlob } from '../models/RandomBlob'
import { useState } from 'react'

const Illustration = ({ name }: { name: string }) => {
  const size = 200
  const blob = new RandomBlob(size)
  blob.generateCurvyShape()

  const [path, setPath] = useState(blob.getPath())
  const resetPath = () => {
    blob.generateCurvyShape()
    setPath(blob.getPath())
  }

  return (
    <div className={styles.frame} onClick={resetPath}>
      <svg
        width="100%"
        height="100%"
        viewBox={'0 0 ' + size + ' ' + size}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={styles.svg}
      >
        <path className={styles.blob} d={path}></path>
      </svg>
      <div className={styles.illustration}>
        <Image
          src={`/images/layout/${name}.svg`}
          fill={true}
          alt={name + ' isometric illustration'}
          sizes="100vw"
        />
      </div>
    </div>
  )
}

export default Illustration
