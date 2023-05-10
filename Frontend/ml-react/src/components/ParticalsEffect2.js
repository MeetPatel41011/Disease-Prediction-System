import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleEffect2 = React.memo(() => {
  
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      return (
        <div className="App">
      
    
     <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#ffffff"
              }
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: ["#bb3941", "#FFB6C1"]
              },
              links: {
                color: "#663399",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              move: {
                enable: true,
                speed: 3
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          }}
        />
    
    
    
        </div>
      );
});

export default ParticleEffect2;
