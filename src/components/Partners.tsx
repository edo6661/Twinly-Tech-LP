import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Command, Eclipse, Hexagon, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
const DEMO_PARTNERS = [
  { name: 'Acme Corp', icon: Command },
  { name: 'Quantum', icon: Eclipse },
  { name: 'Nexus', icon: Hexagon },
  { name: 'Spark', icon: Sparkles },
  { name: 'Infinity', icon: InfinityIcon },
];
const LONG_PARTNERS = Array(4).fill(DEMO_PARTNERS).flat();
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
interface MarqueeRowProps {
  items: typeof DEMO_PARTNERS;
  baseVelocity: number;
}
function MarqueeRow({ items, baseVelocity = 100 }: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 150
  });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-10, 0, 10], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  useAnimationFrame((_t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    const baseDirection = Math.sign(baseVelocity);
    const scrollEffect = velocityFactor.get() * (delta / 1000);
    moveBy += baseDirection * scrollEffect;
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <motion.div className="flex w-max" style={{ x }}>
      <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
        {items.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <div
              key={`set1-${index}`}
              className="flex items-center gap-3 text-brand-dark opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Icon size={32} className="text-accent-primary shrink-0" />
              <span className="font-heading font-bold text-2xl tracking-tight">
                {partner.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
        {items.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <div
              key={`set2-${index}`}
              className="flex items-center gap-3 text-brand-dark opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Icon size={32} className="text-accent-primary shrink-0" />
              <span className="font-heading font-bold text-2xl tracking-tight">
                {partner.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
export default function Partners() {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-brand-light border-y border-border-subtle overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-bold text-text-secondary uppercase tracking-widest"
        >
          {t('partners.title')}
        </motion.p>
      </div>
      <div className="relative w-full overflow-hidden flex flex-col gap-12 bg-brand-light py-2">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-linear-to-r from-brand-light to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-linear-to-l from-brand-light to-transparent z-10 pointer-events-none"></div>
        {/* DIPERLAMBAT: Kecepatan lambat natural saat dibiarkan diubah menjadi -3 dan 3 */}
        <MarqueeRow items={LONG_PARTNERS} baseVelocity={-0.5} />
        <MarqueeRow items={LONG_PARTNERS} baseVelocity={0.5} />
      </div>
    </section>
  );
}