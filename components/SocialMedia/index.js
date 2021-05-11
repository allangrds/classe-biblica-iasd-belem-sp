import styles from './styles.module.css'
import Image from 'next/image'

export default function SocialMedia() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nossas redes
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              href="https://www.facebook.com/novavisaoparanovotempo/"
              target="_blank"
            >
              <Image src="/facebook.svg" alt="Facebook" width={50} height={50} />
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="https://www.instagram.com/novavisaoparanovotempo/"
              target="_blank"
            >
              <Image src="/instagram.svg" alt="Instagram" width={50} height={50} />
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="https://www.youtube.com/channel/novavisaoparanovotempo"
              target="_blank"
            >
              <Image src="/youtube.svg" alt="Youtube" width={50} height={50} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
