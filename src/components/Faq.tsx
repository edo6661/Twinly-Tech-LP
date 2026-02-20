import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';


interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[var(--section-padding-y)] px-6 bg-brand-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-[var(--radius-card)] overflow-hidden transition-colors duration-300 ${isActive
                  ? 'bg-brand-white border-accent-primary shadow-[var(--shadow-hover)]'
                  : 'bg-brand-white/50 border-border-subtle hover:border-accent-primary/50'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`font-medium text-lg transition-colors ${isActive ? 'text-accent-primary' : 'text-brand-dark'
                    }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex-shrink-0 p-1 rounded-full ${isActive ? 'bg-accent-subtle text-accent-primary' : 'text-text-secondary'
                      }`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-text-secondary leading-relaxed border-t border-border-subtle/50 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}