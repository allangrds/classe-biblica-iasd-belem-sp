import React from 'react'
import styles from './styles.module.css'

import ClassItem from '../ClassItem'
import classes from './classes'

export default function Class() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Aulas
        </h2>
        {
          classes.map((item, index) => (
            <ClassItem
              title={`${index}. ${item.title}`}
              link={item.link}
            />
          ))
        }
      </div>
    </div>
  )
}
