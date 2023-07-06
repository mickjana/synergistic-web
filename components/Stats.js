import Typewriter from './Typewriter'
import styles from '@/styles/Stats.module.css'
import Image from 'next/image'


const Stats = () => {
    return (
        <div className={styles.section}>
            <h1 className={styles.title}>Collection Stats</h1>
            <Image
              className={styles.imageCallout}
              src="/SynCallout.png"
              alt="Synergistic Callout"
              width={1600}
              height={500}
              priority
            />
            <Typewriter />
        </div>
        
    )

}

export default Stats