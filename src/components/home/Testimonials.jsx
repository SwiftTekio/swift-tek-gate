import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import testimonial1 from '@/assets/images/testimonial-1.jpg';
import testimonial2 from '@/assets/images/testimonial-2.jpg';
import testimonial3 from '@/assets/images/testimonial-3.jpg';

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Bashar Dalal',
      role: 'Nablus Municipality',
      roleAr: 'بلدية نابلس - رجال الإطفاء',
      image: testimonial1,
      content: 'My sincere thanks and appreciation to SWIFT, the owners of excellence and bright ideas, for all their creativity to achieve success at work, proud to work with you.',
      contentAr: 'خالص شكري وتقديري لسويفت، أصحاب التميز والأفكار المبدعة، على كل إبداعهم لتحقيق النجاح في العمل، فخور بالعمل معكم.',
      rating: 5,
    },
    {
      name: 'Shaher Masri',
      role: 'General Manager',
      roleAr: 'المدير العام',
      image: testimonial2,
      content: 'All thanks and appreciation to Mr. Qamhiyeh and the work team and for the kind effort that was made to develop our communication with our customers.',
      contentAr: 'كل الشكر والتقدير للسيد قمحية وفريق العمل على الجهد الكبير الذي بذل لتطوير تواصلنا مع عملائنا.',
      rating: 5,
    },
    {
      name: 'Sarah Ahmed',
      role: 'Store Owner',
      roleAr: 'صاحبة متجر',
      image: testimonial3,
      content: 'SwiftTek transformed our online presence. Sales increased by 150% in just 3 months. The chatbot feature alone saved us countless hours.',
      contentAr: 'سويفت تك حولت تواجدنا الإلكتروني. ارتفعت المبيعات بنسبة 150% في 3 أشهر فقط. ميزة الشات بوت وحدها وفرت لنا ساعات لا تحصى.',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.testimonials.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            {t.testimonials.title}
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
              >
                <Quote className="w-12 h-12 text-blue-500/20 mb-6" />
                
                <p className={`text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
                  "{isRTL ? testimonials[currentIndex].contentAr : testimonials[currentIndex].content}"
                </p>

                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className={isRTL ? 'text-right' : ''}>
                    <h4 className="text-lg font-bold text-slate-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-slate-500">
                      {isRTL ? testimonials[currentIndex].roleAr : testimonials[currentIndex].role}
                    </p>
                    <div className={`flex gap-1 mt-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className={`flex items-center justify-center gap-4 mt-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 border-slate-300 hover:bg-slate-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 border-slate-300 hover:bg-slate-100"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}