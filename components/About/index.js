import React from 'react'
import styles from './styles.module.css'

import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Sobre
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.card_title}>
              Público
            </h3>
            <Image src="/teamwork.svg" alt="Pessoas" width={60} height={60} />
            <p className={styles.card_text}>
              Pessoas que buscam respostas para questionamentos da vida e não tem conhecimento da Bíblia.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_title}>
              Quando
            </h3>
            <Image src="/clock.svg" alt="Relógio" width={60} height={60} />
            <p className={styles.card_text}>
              Todo sábado, 16h.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_title}>
              Onde
            </h3>
            <Image src="/placeholder.svg" alt="Ponto de localização" width={60} height={60} />
            <p className={styles.card_text}>
              Transmissão ao vivo através de nossas redes.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_title}>
              Interação
            </h3>
            <Image src="/whatsapp.svg" alt="Telefone com fundo verde" width={60} height={60} />
            <p className={styles.card_text}>
              Tem alguma dúvida sobre o que temos estudado? Nós temos um grupo no Whatsapp para os inscritos poderem perguntar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
