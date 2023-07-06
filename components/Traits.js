import Image from 'next/image'
import styles from '@/styles/Traits.module.css'
import Tooltip from './Tooltip'

const Traits = () => {
    return (
        <div className={styles.section}>
            <h1 className={styles.title}>Collection Traits</h1>
            <div className={styles.tooltip}>
            <Tooltip />
            </div>
            <Image
            className={styles.image}
              src="/8.jpg"
              alt="Synergistic #8"
              width={600}
              height={600}
              priority

            />
        </div>
    )

}

export default Traits