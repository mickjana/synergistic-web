import React from 'react';
import {useCallback} from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import styles from '@/styles/Typewriter.module.css'

const Background = () => {
  const particlesInit = useCallback (async engine => {
    await loadFull (engine);
  }, []);

  const particlesLoaded = useCallback (async container => {
    await console.log (container);
  }, []);
  return (
    <div className={styles.background}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#00000080',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#0f2e6333',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: {min: 1, max: 5},
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
