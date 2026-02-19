import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.jpeg';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Indonesia' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null); // State untuk sliding pill

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false;
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  const navLinks = [
    { id: '#about', label: t('nav.about') },
    { id: '#projects', label: t('nav.projects') },
  ];

  const currentLang = i18n.language || 'en';

  return (
    // Wrapper luar yang posisinya tetap, tapi isinya yang berubah ukuran
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-4 transition-all duration-500">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        // Saat discroll, ia mengecil jadi "pulau", saat di atas, ia merentang penuh. Pointer-events-auto wajib karena wrapper-nya pointer-events-none
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between
          ${isScrolled
            ? 'w-full max-w-5xl bg-brand-light/80 backdrop-blur-xl border border-border-subtle/50 shadow-xl rounded-full py-2 px-4 md:px-6'
            : 'w-full max-w-7xl bg-transparent py-4 px-6'
          }
        `}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Twinlytech Logo" className={`rounded-full object-cover shadow-md transition-all ${isScrolled ? 'h-8 w-8' : 'h-10 w-10'}`} />
          <span className={`font-heading font-bold text-brand-dark tracking-tight transition-all ${isScrolled ? 'text-lg' : 'text-xl md:text-2xl'}`}>Twinlytech</span>
        </motion.div>

        <div className="flex items-center gap-2 md:gap-4">

          {/* Desktop Links - SLIDING PILL EFFECT */}
          <div className="hidden md:flex items-center text-brand-dark font-medium mr-2" onMouseLeave={() => setHoveredIndex(null)}>
            {navLinks.map((link) => (
              <a
                key={`${link.id}-${i18n.language}`}
                href={link.id}
                onMouseEnter={() => setHoveredIndex(link.id)}
                className="relative px-5 py-2 rounded-full transition-colors duration-300"
              >
                {/* Background Kapsul yang meluncur */}
                {hoveredIndex === link.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-accent-subtle/80 backdrop-blur-sm rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 md:gap-2 border-l border-border-subtle/30 pl-2 md:pl-4">

            {/* Dark Mode Switcher */}
            <motion.button
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`relative flex items-center justify-center rounded-full hover:bg-accent-subtle/80 transition-base text-brand-dark overflow-hidden
                ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}
              `}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div key="moon" initial={{ y: -20, opacity: 0, rotate: -90 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: 20, opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }} className="absolute">
                    <Moon size={isScrolled ? 16 : 18} />
                  </motion.div>
                ) : (
                  <motion.div key="sun" initial={{ y: -20, opacity: 0, rotate: -90 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: 20, opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }} className="absolute">
                    <Sun size={isScrolled ? 16 : 18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1.5 rounded-full hover:bg-accent-subtle/80 transition-base text-brand-dark backdrop-blur-sm
                  ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}
                `}
              >
                <Globe size={isScrolled ? 14 : 16} />
                <span className="font-bold uppercase hidden sm:block">{currentLang}</span>
                <motion.div animate={{ rotate: isLangOpen ? 180 : 0 }} transition={{ duration: 0.3, type: "spring" }}>
                  <ChevronDown size={14} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-40 bg-brand-light/95 backdrop-blur-xl border border-border-subtle rounded-2xl shadow-xl overflow-hidden flex flex-col z-50 p-2"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`text-left px-4 py-2 text-sm rounded-xl transition-all flex items-center justify-between
                          ${currentLang === lang.code ? 'font-bold text-accent-primary bg-accent-subtle' : 'text-text-secondary hover:bg-accent-subtle/50 hover:text-brand-dark'}
                        `}
                      >
                        {lang.label}
                        {currentLang === lang.code && <span className="h-1.5 w-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_var(--color-accent-primary)]"></span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-full text-brand-dark hover:bg-accent-subtle/80 transition-base"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div initial={false} animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-brand-light/95 backdrop-blur-2xl border border-border-subtle shadow-2xl rounded-3xl overflow-hidden pointer-events-auto z-40 md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={`mobile-${link.id}-${i18n.language}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  href={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    // Add scroll logic logic here if needed, same as handleMobileNavClick
                  }}
                  className="text-xl font-heading font-medium text-brand-dark hover:text-accent-primary transition-colors cursor-pointer bg-accent-subtle/30 hover:bg-accent-subtle rounded-xl p-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}