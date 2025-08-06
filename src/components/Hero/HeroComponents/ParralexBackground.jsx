import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const mountain3Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const planetsX   = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">
        {/* Static Sky */}
        <img
          src="/assets/sky.jpg"
          alt="Sky background"
          className="absolute inset-0 -z-50 w-full h-full object-cover"
        />

        {/* Mountain Layer 3 */}
        <motion.img
          src="/assets/mountain-3.png"
          alt="Mountain layer 3"
          className="absolute inset-0 -z-40 w-full h-full object-cover will-change-transform"
          style={{ y: mountain3Y }}
        />

        {/* Planets */}
        <motion.img
          src="/assets/planets.png"
          alt="Planets"
          className="absolute inset-0 -z-30 w-full h-full object-cover will-change-transform"
          style={{ x: planetsX }}
        />

        {/* Mountain Layer 2 */}
        <motion.img
          src="/assets/mountain-2.png"
          alt="Mountain layer 2"
          className="absolute inset-0 -z-20 w-full h-full object-cover will-change-transform"
          style={{ y: mountain2Y }}
        />

        {/* Mountain Layer 1 (static) */}
        <img
          src="/assets/mountain-1.png"
          alt="Mountain layer 1"
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
