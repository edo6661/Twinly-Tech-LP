import { motion, type Variants } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="py-(--section-padding-y) px-6 relative overflow-hidden bg-brand-light transition-base">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
            {t('contact.title')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Bagian Kiri: Info Kontak */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-8"
          >
            {[
              { icon: Mail, title: t('contact.info.email'), detail: "hello@twinlytech.com" },
              { icon: Phone, title: t('contact.info.phone'), detail: "+62 812 3456 7890" },
              { icon: MapPin, title: t('contact.info.location'), detail: "Jakarta, Indonesia" },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-accent-subtle flex items-center justify-center text-brand-dark group-hover:bg-accent-primary group-hover:text-brand-white transition-colors duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">{item.title}</h4>
                  <p className="text-text-secondary">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bagian Kanan: Form Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-brand-white p-8 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] border border-border-subtle"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-brand-dark">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] bg-accent-subtle/50 border border-border-subtle text-brand-dark focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-brand-dark">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] bg-accent-subtle/50 border border-border-subtle text-brand-dark focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-dark">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] bg-accent-subtle/50 border border-border-subtle text-brand-dark focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                  placeholder={t('contact.form.placeholder')}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "var(--shadow-hover)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-primary text-brand-white px-8 py-4 rounded-[var(--radius-btn)] font-medium transition-colors flex items-center justify-center gap-2 group mt-2"
              >
                {t('contact.form.submit')}
                <motion.div group-hover={{ x: 3, y: -3 }} transition={{ type: "spring" }}>
                  <Send size={18} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}