import React from 'react'

import styles from './styles.module.css'

export default function ClassItem ({
  title,
  link,
}) {
  return (
    <div className={styles.class}>
      <div className={styles.timeline}>
        <div className={styles.circle}></div>
        <hr className={styles.line} />
      </div>
      <div>
        <h3 className={styles.class_name}>
          { title }
        </h3>
        <a
          className={styles.link}
          href={link}
        >
          Vídeo
        </a>
      </div>
    </div>
  )
}
