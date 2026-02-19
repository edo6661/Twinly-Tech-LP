import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-darker text-brand-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-brand-darker font-bold text-3xl">T</div>
          <span className="font-heading text-3xl">TwinlyTech</span>
        </div>
        <p className="text-brand-white/60 text-sm">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}