import React from 'react'
import styles from './styles.module.css'

import ClassItem from '../ClassItem'

export default function Class() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Aulas
        </h2>
        <ClassItem
          title="1. O que é a verdade"
          link="https://www.youtube.com/watch?v=HykU_iDBDPs"
        />
        <ClassItem
          title="2. Quem dominará o mundo"
          link="https://www.youtube.com/watch?v=lZEU3xPNIbI"
        />
        <ClassItem
          title="3. Quem é Deus"
          link="https://www.youtube.com/watch?v=jzdPtI2L8LA"
        />
        <ClassItem
          title="4. Criacionismo x Evolucionismo"
          link="https://www.youtube.com/watch?v=f1RRtpfRiEs"
        />
        <ClassItem
          title="5. Quem é Jesus?"
          link="https://www.youtube.com/watch?v=O_MXeRXYUvA"
        />
        <ClassItem
          title="6. Se Deus existe, por que sofremos?"
          link="https://www.youtube.com/watch?v=Xqlfc-wteBQ"
        />
        <ClassItem
          title="7. Se Deus existe, por que sofremos? Parte final"
          link="https://www.youtube.com/watch?v=7wHgiLMSGxU"
        />
        <ClassItem
          title="8. Deus na encruzilhada do pecado"
          link="https://www.youtube.com/watch?v=PTRFGKgID3s"
        />
        <ClassItem
          title="9. O conflito cósmico atingiu a todos nós?"
          link="https://www.youtube.com/watch?v=wyoydRSsygc"
        />
      </div>
    </div>
  )
}
