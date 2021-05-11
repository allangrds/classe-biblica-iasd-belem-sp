import React from 'react'

import Image from 'next/image'
import styles from './styles.module.css'

export default function Hero () {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div>
              <h1 className={styles.title}>
                Uma <strong>nova visão</strong> para um <strong>novo tempo</strong>
              </h1>
              <p className={styles.text}>
                A origem do homem e de tudo que conhecemos sempre intrigou a mente humana. De onde viemos? Para onde vamos? Se você tem o desejo de saber, se inscreva em nossa classe de estudos. Ao longo de estudos guiados descobriremos o que a Bíblia tem para revelar sobre tudo isso.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXSUvsFKFJdHkbTHInXXC_RDNfqkb1PG9slWI2HxgvDtysfQ/viewform?usp=sf_link"
                target="_blank"
                className={styles.signup}
              >
                Inscreva-se
              </a>
            </div>
            <Image src="/bible.svg" alt="Vercel Logo" width={230} height={166} />
          </div>
        </div>
      </div>
    </>
  )
}
