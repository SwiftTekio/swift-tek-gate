import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const { t, isRTL, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: t.nav.solutions, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
  ];

  const handleFooterLinkClick = (e, href) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
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
      const element = document.querySelector(href);
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
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 ${isRTL ? 'text-right' : ''}`}>
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">SwiftTek</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleFooterLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.nav.services}</h3>
            <ul className="space-y-3">
              {[t.services.ecommerce.title, t.services.marketing.title, t.services.hosting.title, t.services.pos.title].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400" dir="ltr">+972 923 77 000</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400">info@swifttek.io</span>
              </li>
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {language === 'ar' ? 'فلسطين' : 'Palestine'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} SwiftTek. {t.footer.rights}.
            </p>
            <div className={`flex gap-6 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}