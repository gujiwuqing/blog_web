import Particles from 'react-tsparticles';
import './index.less';

const SnowBg = ({ color }: { color: string }) => {
  const particlesInit = () => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = () => {};
  const config = {
    background: {
      color: {
        value: color,
      },
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
    fullScreen: {
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 0.3,
          opacity: 1,
          size: 4,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      links: {
        color: {
          value: '#ffffff',
        },
        distance: 500,
        opacity: 0.4,
        width: 2,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        direction: 'bottom',
        enable: true,
        outModes: {
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: 200,
      },
      opacity: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          speed: 1,
          minimumValue: 0.1,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 10,
        },
        animation: {
          speed: 40,
          minimumValue: 0.1,
        },
      },
    },
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{ ...config }}
    />
  );
};

export default SnowBg;
