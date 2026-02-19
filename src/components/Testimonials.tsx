import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Dummy Data Testimoni
const TESTIMONIALS = [
  { id: 1, name: 'Budi Santoso', role: 'CEO TechCorp', text: 'Kerja sama yang luar biasa! Tim ini sangat profesional.', img: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Siti Aminah', role: 'Product Manager', text: 'Desain dan performa website kami meningkat drastis.', img: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Reza Rahadian', role: 'Startup Founder', text: 'Sangat responsif dan solutif. Highly recommended!', img: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Diana Putri', role: 'Marketing Head', text: 'Konversi penjualan kami naik 200% berkat UI baru.', img: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Ahmad Faisal', role: 'CTO DevIndo', text: 'Kode yang rapi dan mudah di-maintain. Keren!', img: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Nadia Vega', role: 'Creative Director', text: 'Animasi yang dibuat sangat mulus dan memanjakan mata.', img: 'https://i.pravatar.cc/150?u=6' },
  { id: 7, name: 'Kevin Wijaya', role: 'E-commerce Owner', text: 'Tidak pernah mengecewakan. Selalu on-time.', img: 'https://i.pravatar.cc/150?u=7' },
  { id: 8, name: 'Linda Kusuma', role: 'Operations', text: 'Komunikasi timnya sangat baik dan transparan.', img: 'https://i.pravatar.cc/150?u=8' },
  { id: 9, name: 'Hendra Gunawan', role: 'Lead Engineer', text: 'Stack teknologi yang dipakai sangat up-to-date.', img: 'https://i.pravatar.cc/150?u=9' },
];

// Konfigurasi pergerakan tiap card: mulai (start) dari dekat tengah, berakhir (end) jauh di luar layar
// xStart negatif = kiri, positif = kanan. Akan makin menjauh sesuai nilai xEnd.
const CARD_POSITIONS = [
  { xStart: '-5vw', yStart: '-10vh', xEnd: '-120vw', yEnd: '-60vh' },
  { xStart: '5vw', yStart: '-5vh', xEnd: '110vw', yEnd: '-40vh' },
  { xStart: '-10vw', yStart: '0vh', xEnd: '-130vw', yEnd: '10vh' },
  { xStart: '10vw', yStart: '5vh', xEnd: '120vw', yEnd: '20vh' },
  { xStart: '-5vw', yStart: '10vh', xEnd: '-100vw', yEnd: '80vh' },
  { xStart: '8vw', yStart: '12vh', xEnd: '115vw', yEnd: '70vh' },
  { xStart: '-2vw', yStart: '-15vh', xEnd: '-80vw', yEnd: '-100vh' },
  { xStart: '0vw', yStart: '15vh', xEnd: '60vw', yEnd: '110vh' },
  { xStart: '12vw', yStart: '-12vh', xEnd: '140vw', yEnd: '-80vh' },
];

// Sub-komponen Card agar logika hooks useTransform tidak berantakan
const TestimonialCard = ({ index, data, scrollYProgress }: { index: number, data: any, scrollYProgress: any }) => {
  const pos = CARD_POSITIONS[index];

  // Map pergerakan berdasarkan scroll (0 = awal scroll, 1 = akhir scroll section)
  const x = useTransform(scrollYProgress, [0, 1], [pos.xStart, pos.xEnd]);
  const y = useTransform(scrollYProgress, [0, 1], [pos.yStart, pos.yEnd]);

  // Muncul kecil, lalu membesar saat menuju layar luar
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 1, 2.5]);

  // Opacity: Muncul dari 0, jelas di tengah, hilang saat membesar keluar layar
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  // Efek rotasi absurd (random rotasi kecil saat membesar)
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

  // Pantau progres scroll hanya di dalam area section ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-dark dark:bg-brand-light">
      {/* Sticky wrapper agar elemen tertahan di layar selama user scrolling 300vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Background Absurd Floating Elements (Gambar blur/gelap di belakang) */}
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

        {/* Tulisan Pusat (Mirip "Sign up for Edge") */}
        <div className="relative z-30 text-center pointer-events-auto">
          <motion.div
            // Hilang saat user scroll menjauh ke bawah
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

        {/* 9 Cards Testimonial */}
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