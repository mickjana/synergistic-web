import Typewriter from 'typewriter-effect'
import styles from '@/styles/Typewriter.module.css'


const TypeWriterText = () => {
    return (
<>
<div className={styles.text}>
    
    <Typewriter
        options={{
            autostart:true,
            loop: true,
            }}
  onInit={(typewriter) => {
    typewriter
    .typeString('<span>Synergistic: Beyond Algorithms is a micro NFT collection.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span>With total of 369 items costing 0.0369 ETH per NFT.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span>This collection falls into following Categories: 3D, AI, PFPS.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span>It lives its artificial life on Ethereum blockchain.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span>You can visit OpenSea marketplace to mint and view your NFTs.</span>')
    .pauseFor(2000)
    .start()

  }}
/>
</div>
</>

    );

};


export default TypeWriterText;