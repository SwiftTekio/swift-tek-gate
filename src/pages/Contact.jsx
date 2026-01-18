import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronRight, Home } from 'lucide-react';
import Footer from '../components/home/Footer';

export default function Contact() {
  const { t, isRTL, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'ar' ? 'الهاتف' : 'Phone',
      value: '+972 923 77 000',
      href: 'tel:+972923177000'
    },
    {
      icon: Mail,
      label: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'info@swifttek.io',
      href: 'mailto:info@swifttek.io'
    },
    {
      icon: MapPin,
      label: language === 'ar' ? 'الموقع' : 'Location',
      value: language === 'ar' ? 'فلسطين' : 'Palestine',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4 px-6">
        <div className="container mx-auto max-w-6xl">
          <nav className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-slate-900 font-medium">{language === 'ar' ? 'اتصل بنا' : 'Contact'}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center ${isRTL ? 'text-right' : ''}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن.'
                : "We're here to help. Reach out to us and we'll respond as soon as possible."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h3 className="text-sm font-semibold text-slate-500 mb-1">
                        {info.label}
                      </h3>
                      <p className="text-lg font-medium text-slate-900" dir={info.label === 'Phone' ? 'ltr' : 'auto'}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl text-white"
              >
                <h3 className={`text-xl font-bold mb-3 ${isRTL ? 'text-right' : ''}`}>
                  {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <div className={`space-y-2 text-blue-100 ${isRTL ? 'text-right' : ''}`}>
                  <p>{language === 'ar' ? 'الأحد - الخميس: 9:00 - 18:00' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}</p>
                  <p>{language === 'ar' ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className={`text-2xl font-bold text-slate-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
                  {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {language === 'ar' ? 'شكراً لتواصلك!' : 'Thank You!'}
                    </h3>
                    <p className="text-slate-600 text-center">
                      {language === 'ar' 
                        ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.'
                        : 'Your message has been sent successfully. We\'ll get back to you soon.'}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'ar' ? 'الاسم' : 'Name'} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone'}
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'ar' ? 'الموضوع' : 'Subject'} *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder={language === 'ar' ? 'أدخل موضوع الرسالة' : 'Enter subject'}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {language === 'ar' ? 'الرسالة' : 'Message'} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder={language === 'ar' ? 'أدخل رسالتك هنا...' : 'Enter your message here...'}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                      <Send className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
