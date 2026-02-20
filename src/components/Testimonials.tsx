import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { CARD_POSITIONS, TESTIMONIALS } from '../constants/testimonials';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestimonialCard = ({ index, data, scrollYProgress }: { index: number, data: any, scrollYProgress: any }) => {
  const pos = CARD_POSITIONS[index];
  const x = useTransform(scrollYProgress, [0, 1], [pos.xStart, pos.xEnd]);
  const y = useTransform(scrollYProgress, [0, 1], [pos.yStart, pos.yEnd]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 15 : -15]);
  return (
    <motion.div
      style={{ x, y, scale, opacity, rotate }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 z-20"
    >
      <div className="bg-brand-light/90 dark:bg-brand-white/90 backdrop-blur-md border border-border-subtle p-5 rounded-2xl shadow-card hover:shadow-hover transition-shadow">
        <div className="flex items-center gap-4 mb-3">
          <img src={data.img} alt={data.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue" />
          <div>
            <h4 className="font-heading font-bold text-brand-dark text-sm">{data.name}</h4>
            <p className="text-xs text-text-secondary">{data.role}</p>
          </div>
        </div>
        <p className="text-sm text-brand-dark line-clamp-3">"{data.text}"</p>
      </div>
    </motion.div>
  );
};
export default function Testimonials() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-dark dark:bg-brand-light">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.img
              key={i}
              src={`https://i.pravatar.cc/150?img=${i + 10}`}
              animate={{
                y: [0, (i % 2 === 0 ? 40 : -40), 0],
                x: [0, (i % 3 === 0 ? 30 : -30), 0],
              }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full grayscale blur-[2px]"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 20)}%`,
                width: `${50 + (i * 10)}px`,
                height: `${50 + (i * 10)}px`
              }}
            />
          ))}
        </div>
        <div className="relative z-30 text-center pointer-events-auto">
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
            className="flex flex-col items-center gap-6 p-6"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-brand-light dark:text-brand-dark tracking-tight">
              {t('testimonials.title', 'Apa Kata Mereka?')}
            </h2>
            <p className="text-brand-light/70 dark:text-text-secondary max-w-md">
              Jelajahi pengalaman klien kami. Scroll ke bawah untuk melihat cerita mereka secara langsung.
            </p>
          </motion.div>
        </div>
        {TESTIMONIALS.map((data, index) => (
          <TestimonialCard
            key={data.id}
            index={index}
            data={data}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}