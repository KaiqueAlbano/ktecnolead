import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
  title?: string;
  subtitle?: string;
}

const Divider = ({ title, subtitle }: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="relative h-[50vh] overflow-hidden">
      {/* Parallax Image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img
          src={"/imgs/tech-background.jpg"}
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content */}
      {(title || subtitle) && (
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          {title && (
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-light max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      )}

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
      />
    </div>
  );
};

export default Divider;
