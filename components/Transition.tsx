import * as React from 'react'
import styles from '../styles/Transition.module.scss'

const Transition = ({direction}: {direction: string}) => {

  return (
    <div className={styles[direction]}>
      <div className={styles.above}></div>
      <div className={styles.transition}></div>
      <div className={styles.below}></div>
    </div>
  )
}

export default Transition
