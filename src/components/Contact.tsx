import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesan terkirim! (demo)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-(--section-padding-y) bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-heading tracking-tight text-center mb-4">{t('contact.title')}</h2>
        <p className="text-center text-text-secondary mb-16">Kami siap membantu bisnis Anda</p>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder={t('contact.form.name')}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-6 py-4 rounded-(--radius-btn) border border-border-subtle focus:border-accent-primary outline-none"
                required
              />
              <input
                type="email"
                placeholder={t('contact.form.email')}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-6 py-4 rounded-(--radius-btn) border border-border-subtle focus:border-accent-primary outline-none"
                required
              />
              <textarea
                rows={6}
                placeholder={t('contact.form.message')}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-6 py-4 rounded-(--radius-btn) border border-border-subtle focus:border-accent-primary outline-none resize-none"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent-primary text-white py-4 rounded-(--radius-btn) font-semibold text-lg hover:bg-accent-hover transition-colors"
              >
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </div>

          <div className="md:col-span-2 space-y-8 text-sm pt-4">
            <div>
              <div className="font-medium mb-1">Email</div>
              <a href="mailto:hello@twinlytech.com" className="text-accent-primary hover:underline">{t('contact.info.email')}</a>
            </div>
            <div>
              <div className="font-medium mb-1">Phone</div>
              <a href="tel:+6281234567890" className="text-accent-primary hover:underline">{t('contact.info.phone')}</a>
            </div>
            <div>
              <div className="font-medium mb-1">Address</div>
              <p className="text-text-secondary">{t('contact.info.address')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}