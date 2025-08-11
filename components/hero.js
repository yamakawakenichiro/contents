import Image from 'next/image'
import styles from 'styles/hero.module.css'
import home from 'images/home.webp'
import RiveAnimation from 'components/rive-animation'

export default function Hero({ title, subtitle, imageOn = false, riveOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure>
          <Image
            src={home}
            alt=""
            width={1500}
            height={1300}
            sizes="(min-width:1152px)576px,(min-width:768px)50vw,100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
          />
        </figure>
      )}
      {riveOn && (
        <div className={styles.hideOnMobile}>
          <RiveAnimation
            src="/0802.riv"
            stateMachines="State Machine 1"
            width="200px"
            height="200px"
          />
        </div>
      )}
    </div>
  )
}
