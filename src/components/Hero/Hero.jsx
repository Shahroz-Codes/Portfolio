import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "./HeroComponents/HeroText";
import ParallaxBackground from "./HeroComponents/ParralexBackground";
import { Astronaut } from "./HeroComponents/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "./HeroComponents/Loader";
import { useEffect, useState } from "react";
// ...existing code...
function Rig() {
  let lastUpdate = 0;
  return useFrame((state, delta) => {
    lastUpdate += delta;
    if (lastUpdate > 0.03) { // ~30 FPS
      easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
      );
      lastUpdate = 0;
    }
  });
}
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [showAstronaut, setShowAstronaut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAstronaut(true), 500); // Delay load
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }} dpr={[1, 1.5]}>
          <Suspense fallback={<Loader />}>
            <Float>
              {showAstronaut && (
                <Astronaut
                  scale={isMobile ? 0.23 : 0.3}
                  position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
                />
              )}
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
export default Hero;