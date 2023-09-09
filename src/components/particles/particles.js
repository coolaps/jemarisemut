'use client'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

import gambar1 from '../../assets/bg1.png'

const ParticlesComponent = () => {
  const option = useMemo(() => {
    return {
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        move: {
          enable: true,
          speed: { min: 1, max: 3 }
        },
        number: {
          value: 20,
          max: 5
        },
        opacity: {
          value: 1
        },
        rotate: {
          path: false
        },
        "shape": {
          "type": "images",
          "stroke": {
            "width": 0,
            "color": "#000"
          },
          "polygon": {
            "nb_sides": 6
          },
          "images": [
            {
              "src": "https://res.cloudinary.com/dr0w3lfnj/image/upload/v1694253994/rtxs20l1ckldsmm6ws4h.png",
              "width": 100,
              "height": 100
            },
            {
              "src": "https://res.cloudinary.com/dr0w3lfnj/image/upload/v1694253994/cp2owhzxggv7qpqdf5f7.png",
              "width": 100,
              "height": 100
            },
            {
              "src": "https://res.cloudinary.com/dr0w3lfnj/image/upload/v1694253994/wr9wsa5huauoraggguaf.png",
              "width": 100,
              "height": 100
            },
            {
              "src": "https://res.cloudinary.com/dr0w3lfnj/image/upload/v1694253994/ifamx2idqt2u3tqwaxc7.png",
              "width": 100,
              "height": 100
            },
            {
              "src": "https://res.cloudinary.com/dr0w3lfnj/image/upload/v1694253994/k9fpa9eazgfeuzqwl7rt.png",
              "width": 100,
              "height": 100
            },
            {
              "src": "https://res.cloudinary.com/dr0w3lfnj/image/upload/v1694253994/tkuvxn7n7v1frnmzi1pr.png",
              "width": 100,
              "height": 100
            },
          ]
        },
        size: {
          value: {
            min: 10,
            max: 30
          }
        }
      }
    };
  }, [])

  const particlesInit = useCallback((engine) => {
    loadSlim(engine)
    // loadFull(engine)
  }, [])

  return <Particles init={particlesInit} options={option}/>
}

export default ParticlesComponent