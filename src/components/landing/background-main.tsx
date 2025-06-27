"use client"
import { loadAll } from "@tsparticles/all";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";

export const Bg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

const options: ISourceOptions = useMemo(() => ({
  fpsLimit: 120,
  particles: {
    number: {
      value: 55,
      density: {
        enable: true,
        width: 800,
        height: 600
      }
    },
    color: {
      value: ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981"],
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: { min: 0.1, max: 0.3 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false
      }
    },
    size: {
      value: { min: 1, max: 2 }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#6366f1",
      opacity: 0.15,
      width: 1,
      triangles: {
        enable: false
      }
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "bubble"
      },
      resize: {
        enable: true
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.3
        }
      },
      bubble: {
        distance: 200,
        size: 4,
        duration: 2,
        opacity: 0.5,
        speed: 3
      }
    }
  },
  smooth: true,
  style: {
    position: "absolute"
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  }
}), [])

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  }

  return <></>;
}