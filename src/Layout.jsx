import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Phone } from 'lucide-react';

function Navigation() {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.hub, href: '/', isAnchor: false },
    { label: t.nav.solutions, href: '#about', isAnchor: true, page: '/' },
    { label: t.nav.services, href: '#services', isAnchor: true, page: '/' },
    { label: t.nav.portfolio, href: '/portfolio', isAnchor: false },
    { label: t.nav.about, href: '#about', isAnchor: true, page: '/' },
    { label: t.nav.contact, href: '/contact', isAnchor: false },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.isAnchor) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // Regular page navigation
      navigate(link.href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100 transition-all duration-300"
      >
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link to={createPageUrl('Home')} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-slate-900">
                SwiftTek
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="font-medium transition-colors cursor-pointer text-slate-600 hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className={`hidden lg:flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </button>

              {/* Phone */}
              <a
                href="tel:+97292377000"
                className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''} text-slate-600 hover:text-blue-600 transition-colors`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium" dir="ltr">+972 923 77 000</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-6 py-6">
                <div className={`flex flex-col gap-4 ${isRTL ? 'items-end' : ''}`}>
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-slate-700 font-medium py-2 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ))}
                  <button
                    onClick={toggleLanguage}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'العربية' : 'English'}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default function Layout({ children }) {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
      </div>
    </LanguageProvider>
  );
}