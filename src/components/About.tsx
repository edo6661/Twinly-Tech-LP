import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();

  const features = [
    'Scalable Architecture',
    'Cross-Platform Mobile Apps',
    'User-Centric UI/UX'
  ];

  return (
    <section id="about" className="py-(--section-padding-y) px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Teks */}
        <motion.div
          key={i18n.language}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            {t('about.title')}
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            {t('about.description')}
          </p>

          {/* Checklist */}
          <ul className="mt-8 space-y-4">
            {features.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-brand-dark font-medium"
              >
                {/* Menggunakan accent-primary agar kontrasnya selalu pas */}
                <CheckCircle2 className="text-accent-primary" size={24} />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Kolom Gambar dengan Dekorasi Aksen */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 md:mt-0"
        >
          <div className="absolute w-full h-full bg-gray-400/50 rounded-card transform translate-x-4 translate-y-4 opacity-70"></div>

          <div className="rounded-card overflow-hidden shadow-card bg-brand-white relative z-10 border border-border-subtle group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team working"
              className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Floating Badge (Class dark: dihapus) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 bg-brand-white p-4 rounded-2xl shadow-xl border border-border-subtle z-20 flex items-center gap-4"
          >
            <div className="bg-brand-light rounded-full p-3">
              <span className="text-2xl font-heading font-bold text-accent-primary">5+</span>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Years of</p>
              <p className="text-xs text-text-secondary">Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}