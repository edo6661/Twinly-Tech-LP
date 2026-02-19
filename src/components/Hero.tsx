import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'motion/react'; // Tambahkan Variants
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Sparkles, Code2, Cpu } from 'lucide-react';
import mascotImg from '../assets/mascot/2.png';

export default function Hero() {
  const { t, i18n } = useTranslation();

  // === MOUSE PARALLAX SETUP ===
  const [isDesktop, setIsDesktop] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const mascotX = useTransform(smoothX, [-500, 500], [15, -15]);
  const mascotY = useTransform(smoothY, [-500, 500], [15, -15]);
  const bgX = useTransform(smoothX, [-500, 500], [-25, 25]);
  const bgY = useTransform(smoothY, [-500, 500], [-25, 25]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop) return;
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDesktop);
    };
  }, [isDesktop, mouseX, mouseY]);

  // === FIX TYPESCRIPT ERROR DI SINI ===
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="relative pt-40 pb-(--section-padding-y) px-6 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">

      {/* Background Floating Ornaments (Parallax) */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
        <Sparkles className="absolute top-32 left-[10%] text-brand-dark w-12 h-12" />
        <Code2 className="absolute bottom-32 right-[5%] text-brand-dark w-16 h-16" />
        <Cpu className="absolute top-1/2 right-[45%] text-brand-dark w-10 h-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* === BAGIAN TEKS (KIRI) === */}
        <motion.div className="text-center md:text-left">
          <motion.h1
            key={i18n.language}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-brand-dark leading-[1.1] tracking-tight mb-8"
          >
            {t('hero.title').split(' ').map((word, i) => {
              const isHighlight = word.toLowerCase().includes('tech') || word.toLowerCase().includes('teknologi');
              return (
                <motion.span
                  variants={wordVariants}
                  key={i}
                  className={`inline-block mr-[0.25em] ${isHighlight ? 'text-brand-blue dark:text-accent-primary relative' : ''}`}
                >
                  {word}
                  {isHighlight && (
                    <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <motion.path
                        d="M0,10 Q50,20 100,10"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </motion.svg>
                  )}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-primary text-brand-white px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.cta')}
                <motion.div group-hover={{ x: 5 }} transition={{ type: "spring" }}>
                  <ArrowRight size={20} />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-brand-blue/20 dark:bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent-subtle)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium border-2 border-border-subtle text-brand-dark transition-colors flex items-center gap-2 backdrop-blur-sm group"
            >
              <motion.div
                className="bg-brand-dark text-brand-light p-1 rounded-full group-hover:bg-accent-primary transition-colors"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Play size={14} className="ml-0.5" />
              </motion.div>
              {t('nav.projects')}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* === BAGIAN MASKOT & BINGKAI (KANAN) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative flex justify-center items-center w-full"
          style={{ x: mascotX, y: mascotY }}
        >
          <div className="absolute bg-brand-blue rounded-full opacity-40 blur-[80px] w-62.5 h-62.5 md:w-100 md:h-100 animate-pulse"></div>

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 flex justify-center items-center group"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-7.5 md:-inset-12.5 rounded-full border-2 border-dashed border-brand-dark/20 dark:border-brand-white/20 opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-3 md:-inset-5 rounded-full border-t-4 border-l-4 border-transparent border-t-brand-blue border-l-brand-blue/50 opacity-80"
              style={{ filter: "drop-shadow(0 0 12px var(--color-brand-blue))" }}
            />
            <div className="relative overflow-hidden rounded-full p-2 bg-linear-to-b from-brand-light/50 to-transparent backdrop-blur-sm border border-border-subtle/50 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img
                src={mascotImg}
                alt="Twinlytech Mascot"
                className="relative z-10 w-64 h-64 md:w-96 md:h-96 aspect-square object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}