import { motion, type Variants } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  MonitorSmartphone,
  Server,
  Settings,
  Search,
  LineChart,
  Terminal,
  Globe,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
export default function Services() {
  const { t } = useTranslation();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };
  return (
    <section id="services" className="py-24 bg-brand-light overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-125brand-blue/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand-dark">
              {t('services.title', 'Our Services')}
            </h2>
            <p className="text-text-secondary text-lg">
              {t('services.subtitle', 'Comprehensive digital solutions tailored to elevate your business, from custom software to seamless cloud deployment.')}
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-brand-light font-bold transition-colors shrink-0 group shadow-sm hover:shadow-md"
          >
            {t('services.learnMore', 'Learn more')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4 md:gap-6"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 bg-brand-white border border-border-subtle rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-card hover:shadow-hover transition-all duration-300 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-48 md:h-64 mb-8 flex items-center justify-center gap-6">
              <div className="w-2/3 max-w-75 h-full bg-brand-light border border-border-subtle rounded-xl shadow-lg flex flex-col overflow-hidden relative z-10 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="h-8 bg-brand-white border-b border-border-subtle flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="p-4 flex flex-col gap-2 opacity-70">
                  <div className="w-3/4 h-2 bg-brand-blue rounded-full" />
                  <div className="w-1/2 h-2 bg-border-subtle rounded-full" />
                  <div className="w-full h-2 bg-border-subtle rounded-full mt-2" />
                  <div className="w-5/6 h-2 bg-border-subtle rounded-full" />
                </div>
                <Terminal className="absolute bottom-4 right-4 text-border-subtle w-16 h-16" />
              </div>
              <div className="absolute right-[5%] md:right-[15%] top-10 w-24 md:w-32 h-[120%] bg-brand-white border-4 border-brand-dark rounded-4xl shadow-xl flex flex-col p-2 z-20 group-hover:-translate-y-4 transition-transform duration-500 delay-100">
                <div className="w-1/3 h-1.5 bg-border-subtle rounded-full mx-auto mb-2" />
                <div className="flex-1 bg-brand-light rounded-2xl flex flex-col gap-2 p-2">
                  <div className="w-full h-10 bg-brand-blue/30 rounded-xl mb-1" />
                  <div className="w-full h-6 bg-border-subtle rounded-lg" />
                  <div className="w-full h-6 bg-border-subtle rounded-lg" />
                </div>
              </div>
            </div>
            <div className="mt-auto relative z-10">
              <div className="w-12 h-12 bg-accent-subtle rounded-xl flex items-center justify-center text-accent-primary mb-5 border border-border-subtle">
                <MonitorSmartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-brand-dark">1. App Development</h3>
              <ul className="text-text-secondary text-sm space-y-2 mb-4">
                <li className="flex items-center gap-2"><Globe size={14} className="text-accent-primary" /> Web Development: Profil, e-commerce, sistem kompleks.</li>
                <li className="flex items-center gap-2"><Smartphone size={14} className="text-accent-primary" /> Mobile App: iOS & Android yang cepat & user-friendly.</li>
                <li className="flex items-center gap-2"><Terminal size={14} className="text-accent-primary" /> Custom Software: Sesuai alur kerja bisnis klien.</li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-brand-white border border-border-subtle rounded-3xl p-6 lg:p-8 relative overflow-hidden group shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-full h-24 bg-brand-light border border-border-subtle rounded-xl mb-6 flex items-end justify-between p-4 gap-2 transition-colors">
              {[40, 70, 45, 90, 60].map((height, i) => (
                <div key={i} className="w-full bg-border-subtle rounded-t-sm relative group-hover:bg-brand-blue/60 transition-colors" style={{ height: `${height}%` }}>
                  {i === 3 && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-primary rounded-full shadow-[0_0_8px_var(--color-accent-primary)]" />}
                </div>
              ))}
            </div>
            <LineChart size={24} className="text-accent-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-brand-dark">2. IT Consulting</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              IT Strategy & Digital Transformation. Beralih ke ranah digital dan tingkatkan efisiensi operasional.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-brand-white border border-border-subtle rounded-3xl6 lg:p-8 relative overflow-hidden group shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-full h-24 mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 border border-dashed border-border-subtle rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <div className="w-32 h-6 bg-brand-light border border-border-subtle rounded-md flex items-center px-2 gap-2 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <div className="w-full h-1 bg-border-subtle rounded-full" />
                </div>
                <div className="w-32 h-6 bg-brand-light border border-border-subtle rounded-md flex items-center px-2 gap-2 shadow-sm translate-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                  <div className="w-full h-1 bg-border-subtle rounded-full" />
                </div>
              </div>
            </div>
            <Server size={24} className="text-accent-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-brand-dark">3. Cloud & Deployment</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Cloud Hosting & API Integration. Peluncuran AWS/GCP yang aman & integrasi sistem pihak ketiga yang mulus.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-brand-white border border-border-subtle rounded-3xl p-6 lg:p-8 relative overflow-hidden group shadow-card hover:shadow-hover transition-all duration-300">
            <div className="w-full h-20 mb-6 flex items-center justify-center">
              <div className="w-full max-w-50 h-10 rounded-full bg-brand-light border border-border-subtle flex items-center px-3 gap-2 group-hover:border-accent-primary/50 transition-colors shadow-inner">
                <Search size={14} className="text-text-secondary" />
                <div className="h-1.5 w-1/2 bg-border-subtle rounded-full" />
                <div className="ml-auto w-4 h-4 rounded-full bg-accent-subtle flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                </div>
              </div>
            </div>
            <Search size={24} className="text-accent-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-brand-dark">4. SEO & Performance</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Optimasi kecepatan aplikasi dan visibilitas di mesin pencari agar mudah ditemukan pelanggan.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 bg-brand-white border border-border-subtle rounded-3xl p-6 lg:p-8 relative overflow-hidden group shadow-card hover:shadow-hover transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 z-10">
              <div className="flex items-center gap-3 mb-4">
                <Settings size={24} className="text-accent-primary" />
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  System Operational
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">5. Maintenance & Support</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-lg mb-4">
                Pengelolaan rutin, perbaikan bug, dan dukungan teknis 24/7. Serta layanan App & Web Revamp untuk memperbarui desain sistem lama agar lebih modern.
              </p>
            </div>
            <div className="w-full md:w-48 h-32 bg-brand-light border border-border-subtle rounded-xl p-4 flex flex-col justify-center gap-3 shrink-0 relative z-10">
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>Uptime</span>
                <span className="text-green-600 dark:text-green-400 font-mono font-bold">99.9%</span>
              </div>
              <div className="w-full h-1.5 bg-border-subtle rounded-full overflow-hidden">
                <div className="w-full h-full bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary mt-2">
                <CheckCircle2 size={14} className="text-accent-primary" />
                <span>All bugs resolved</span>
              </div>
            </div>
            <Settings className="absolute -right-10 -bottom-10 w-48 h-48 text-border-subtle/50 group-hover:rotate-90 transition-transform duration-1000 ease-out" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}