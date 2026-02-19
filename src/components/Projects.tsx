import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useMotionValue, animate, type PanInfo } from 'motion/react';
import { ArrowRight, } from 'lucide-react';
import { createPortal } from 'react-dom';
import { CARD_COLORS_PROJECT, DUMMY_PROJECTS, FILTER_OPTIONS_PROJECT, SPRING_CONFIG_PROJECT } from '../constants/projects';

const ImageCarousel = ({ images, uniqueId }: { images: string[], uniqueId: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);
  if (!images || images.length === 0) return null;
  const currentLayoutId = `project-${uniqueId}-image-${currentIndex}`;
  return (
    <>
      <div className="relative w-full h-40 md:h-48 mb-4 rounded-xl overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-800">
        <motion.div
          className="flex w-full h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {images.map((img, idx) => (
            <motion.img
              key={idx}
              layoutId={`project-${uniqueId}-image-${idx}`}
              src={img}
              alt={`Project preview ${idx + 1}`}
              className="w-full h-full object-cover shrink-0 cursor-pointer pointer-events-auto transition-transform duration-500 hover:scale-105"
              draggable={false}
              onPointerDown={(e) => {
                dragStartPos.current = { x: e.clientX, y: e.clientY };
              }}
              onClick={(e) => {
                e.stopPropagation();
                const dx = Math.abs(e.clientX - dragStartPos.current.x);
                const dy = Math.abs(e.clientY - dragStartPos.current.y);
                if (dx > 5 || dy > 5) return;
                setCurrentIndex(idx);
                setIsModalOpen(true);
              }}
            />
          ))}
        </motion.div>
        {images.length > 1 && (
          <div className="absolute bottom-1 w-full flex justify-center gap-1 z-30 pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className="p-2 cursor-pointer group outline-none"
                aria-label={`Lihat gambar ke-${idx + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 shadow-sm ${currentIndex === idx
                    ? 'bg-white w-6'
                    : 'bg-white/60 group-hover:bg-white w-2'
                    }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div
              className="fixed inset-0 z-999 flex items-center justify-center p-4 md:p-10 pointer-events-auto cursor-auto"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300 z-50 backdrop-blur-sm outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </motion.button>
              <motion.img
                layoutId={currentLayoutId}
                src={images[currentIndex]}
                alt="Enlarged project view"
                className="relative z-10 max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl cursor-grab active:cursor-grabbing"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.8}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.y) > 100) {
                    setIsModalOpen(false);
                  }
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-10 text-white/50 text-sm font-medium tracking-wide pointer-events-none z-20 select-none"
              >
                Swipe down to close
              </motion.p>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
export default function Projects() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const filteredProjects = DUMMY_PROJECTS.filter((project) =>
    activeFilter === 'all' || project.type === activeFilter
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  let safeProjects = [...filteredProjects];
  while (safeProjects.length > 0 && safeProjects.length < 6) {
    safeProjects = [...safeProjects, ...filteredProjects];
  }
  const N = safeProjects.length;
  const realCount = filteredProjects.length;
  const getOffset = (index: number) => {
    let diff = index - currentIndex;
    if (diff > Math.floor(N / 2)) diff -= N;
    if (diff < -Math.floor(N / 2)) diff += N;
    return diff;
  };
  const getMobilePosition = (offset: number) => ({
    pct: (offset * 100) - 50,
    px: offset * 20
  });
  const getDesktopPosition = (offset: number) => {
    if (offset === 0) return { pct: -100, px: -12 };
    if (offset === 1) return { pct: 0, px: 12 };
    if (offset < 0) return { pct: offset * 100 - 100, px: -(Math.abs(offset) * 24 + 12) };
    return { pct: (offset - 1) * 100, px: (offset - 1) * 24 + 12 };
  };
  const handlePanStart = () => {
    dragX.stop();
    setIsDragging(true);
  };
  const handlePan = (_: unknown, info: PanInfo) => {
    dragX.set(info.offset.x);
  };
  const handlePanEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false);
    const velocityFactor = 0.2;
    const swipePower = info.offset.x + (info.velocity.x * velocityFactor);
    const threshold = 60;
    if (swipePower < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % N);
    } else if (swipePower > threshold) {
      setCurrentIndex((prev) => (prev - 1 + N) % N);
    }
    animate(dragX, 0, SPRING_CONFIG_PROJECT);
  };
  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentIndex(0);
  };
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="w-full mx-auto px-6 max-w-7xl">
        <motion.div
          key={`header-${i18n.language}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            {t('projects.title', 'Our Projects')}
          </h2>
          <p className="text-text-secondary">{t('projects.subtitle', 'A glimpse into our recent work.')}</p>
        </motion.div>
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-wrap items-center gap-1 p-1.5 bg-brand-light/60 backdrop-blur-md border border-border-subtle rounded-full shadow-sm"
          >
            {FILTER_OPTIONS_PROJECT.map(({ id, icon: Icon }) => {
              const isActive = activeFilter === id;
              return (
                <button
                  key={id}
                  onClick={() => handleFilterClick(id)}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 outline-none ${isActive ? 'text-brand-white' : 'text-text-secondary hover:text-brand-dark hover:bg-brand-white/50'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-bubble"
                      className="absolute inset-0 bg-accent-primary rounded-full shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} className={isActive ? "animate-pulse" : ""} strokeWidth={isActive ? 2.5 : 2} />
                    {t(`projects.filters.${id}`, id)}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
      <motion.div
        onPanStart={handlePanStart}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        style={{ touchAction: 'pan-y' }}
        className="relative w-full h-150 md:h-162.5 flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
      >
        <motion.div style={{ x: dragX }} className="absolute w-full h-full">
          {safeProjects.length > 0 ? (
            safeProjects.map((project, i) => {
              const offset = getOffset(i);
              const isCenter = isMobile ? offset === 0 : (offset === 0 || offset === 1);
              const isPeek = isMobile ? Math.abs(offset) === 1 : (offset === -1 || offset === 2);
              const isHidden = !isCenter && !isPeek;
              const pos = isMobile ? getMobilePosition(offset) : getDesktopPosition(offset);
              const finalX = `calc(${pos.pct}% + ${pos.px}px)`;
              const projectColor = CARD_COLORS_PROJECT[(project.id - 1) % CARD_COLORS_PROJECT.length];

              // Tentukan base key untuk i18n berdasarkan translationKey proyek
              const projectKey = `projects.items.${project.translationKey}`;

              return (
                <motion.div
                  key={`${project.id}-${i}`}
                  style={{ left: '50%', top: '50%', y: '-50%' }}
                  animate={{
                    x: finalX,
                    scale: isCenter ? 1 : 0.9,
                    opacity: isCenter ? 1 : isPeek ? 0.35 : 0,
                    zIndex: isCenter ? 10 : isPeek ? 5 : 0,
                    pointerEvents: isHidden ? 'none' : 'auto'
                  }}
                  transition={SPRING_CONFIG_PROJECT}
                  onClick={() => {
                    if (isPeek && !isDragging) {
                      if (offset < 0) setCurrentIndex((prev) => (prev - 1 + N) % N);
                      if (offset > 0) setCurrentIndex((prev) => (prev + 1) % N);
                    }
                  }}
                  className={`absolute w-[82vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw] max-w-137.5 h-132.5 md:h-147.5 bg-brand-white rounded-3xl p-8 md:p-10 border border-border-subtle shadow-card flex flex-col justify-between select-none overflow-hidden ${isCenter ? '' : 'cursor-pointer'
                    }`}
                >
                  <div
                    className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[70px] opacity-30 dark:opacity-20 pointer-events-none transition-colors duration-500"
                    style={{ backgroundColor: projectColor }}
                  />
                  <div className="relative z-10 grow flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-2 text-brand-dark">
                      {/* Judul Proyek dari i18n */}
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {t(`${projectKey}.title`)}
                      </h3>
                    </div>
                    <div className="mb-4">
                      {/* Role & Category dari i18n */}
                      <p className="text-brand-dark font-medium mb-1">{t(`${projectKey}.role`)}</p>
                      <p className="text-text-secondary text-sm">{t(`${projectKey}.category`)}</p>
                    </div>
                    <ImageCarousel images={project.images} uniqueId={`${project.id}-${i}`} />
                    {/* Quote dari i18n */}
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-auto mb-6 line-clamp-3">
                      {t(`${projectKey}.quote`)}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-border-subtle relative z-10">
                    <p className="text-xs font-bold text-text-secondary tracking-wider mb-4 uppercase">
                      {/* Anda juga bisa menerjemahkan label ini jika mau, misal: t('projects.integratedApps') */}
                      Integrated Apps
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex gap-2">
                        {project.apps.map((AppIcon, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: projectColor }}
                          >
                            <AppIcon size={18} />
                          </div>
                        ))}
                      </div>
                      <button className="bg-brand-dark text-brand-light hover:opacity-80 px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-opacity shrink-0 z-20 pointer-events-auto">
                        {/* Teks tombol dari i18n */}
                        {t('projects.view')} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center text-text-secondary py-12">No projects found.</div>
          )}
        </motion.div>
      </motion.div>
      {realCount > 1 && (
        <div className="flex justify-center items-center gap-3 mt-12 px-6">
          {Array.from({ length: realCount }).map((_, idx) => {
            const isActive = (currentIndex % realCount) === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? "bg-brand-dark w-8" : "bg-border-subtle hover:bg-brand-dark/50 w-2.5"
                  }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}