import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Lock, 
  Database,
  Activity,
  Globe2,
  CheckCircle2,
  ArrowRight,
  HardDrive,
  Gauge,
  ChevronRight,
  Home
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import { Button } from '../../components/ui/button';

export default function CloudHosting() {
  const { t, isRTL, language } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: language === 'ar' ? 'أداء فائق السرعة' : 'Lightning-Fast Performance',
      description: language === 'ar' 
        ? 'خوادم SSD فائقة السرعة مع CDN عالمي لتحميل سريع'
        : 'Ultra-fast SSD servers with global CDN for blazing-fast load times'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'حماية متقدمة' : 'Advanced Security',
      description: language === 'ar' 
        ? 'حماية DDoS وجدار ناري وشهادات SSL مجانية'
        : 'DDoS protection, firewall, and free SSL certificates included'
    },
    {
      icon: Activity,
      title: language === 'ar' ? 'وقت تشغيل 99.99٪' : '99.99% Uptime Guarantee',
      description: language === 'ar' 
        ? 'موثوقية استثنائية مع ضمان وقت تشغيل 99.99٪'
        : 'Exceptional reliability with 99.99% uptime SLA guarantee'
    },
    {
      icon: Database,
      title: language === 'ar' ? 'نسخ احتياطي تلقائي' : 'Automatic Backups',
      description: language === 'ar' 
        ? 'نسخ احتياطية يومية تلقائية مع استعادة سهلة بنقرة واحدة'
        : 'Daily automatic backups with easy one-click restore options'
    },
    {
      icon: Gauge,
      title: language === 'ar' ? 'قابل للتوسع' : 'Scalable Infrastructure',
      description: language === 'ar' 
        ? 'قم بتوسيع مواردك بسهولة مع نمو موقعك'
        : 'Easily scale your resources as your website grows'
    },
    {
      icon: Globe2,
      title: language === 'ar' ? 'مراكز بيانات عالمية' : 'Global Data Centers',
      description: language === 'ar' 
        ? 'اختر من بين مواقع متعددة حول العالم لأفضل أداء'
        : 'Choose from multiple locations worldwide for optimal performance'
    }
  ];

  const plans = [
    {
      name: language === 'ar' ? 'أساسي' : 'Starter',
      price: language === 'ar' ? '٤٩' : '49',
      currency: language === 'ar' ? 'درهم' : 'AED',
      features: [
        language === 'ar' ? '50 جيجابايت تخزين SSD' : '50GB SSD Storage',
        language === 'ar' ? 'نطاق ترددي غير محدود' : 'Unlimited Bandwidth',
        language === 'ar' ? 'شهادة SSL مجانية' : 'Free SSL Certificate',
        language === 'ar' ? '5 حسابات بريد إلكتروني' : '5 Email Accounts',
        language === 'ar' ? 'دعم فني 24/7' : '24/7 Support'
      ]
    },
    {
      name: language === 'ar' ? 'احترافي' : 'Professional',
      price: language === 'ar' ? '٩٩' : '99',
      currency: language === 'ar' ? 'درهم' : 'AED',
      featured: true,
      features: [
        language === 'ar' ? '200 جيجابايت تخزين SSD' : '200GB SSD Storage',
        language === 'ar' ? 'نطاق ترددي غير محدود' : 'Unlimited Bandwidth',
        language === 'ar' ? 'شهادة SSL مجانية' : 'Free SSL Certificate',
        language === 'ar' ? '25 حساب بريد إلكتروني' : '25 Email Accounts',
        language === 'ar' ? 'نسخ احتياطي يومي' : 'Daily Backups',
        language === 'ar' ? 'دعم أولوية' : 'Priority Support'
      ]
    },
    {
      name: language === 'ar' ? 'مؤسسات' : 'Enterprise',
      price: language === 'ar' ? '١٩٩' : '199',
      currency: language === 'ar' ? 'درهم' : 'AED',
      features: [
        language === 'ar' ? 'تخزين SSD غير محدود' : 'Unlimited SSD Storage',
        language === 'ar' ? 'نطاق ترددي غير محدود' : 'Unlimited Bandwidth',
        language === 'ar' ? 'شهادة SSL متقدمة' : 'Advanced SSL Certificate',
        language === 'ar' ? 'بريد إلكتروني غير محدود' : 'Unlimited Email Accounts',
        language === 'ar' ? 'نسخ احتياطي كل ساعة' : 'Hourly Backups',
        language === 'ar' ? 'مدير حساب مخصص' : 'Dedicated Account Manager'
      ]
    }
  ];

  const benefits = [
    language === 'ar' ? 'إعداد فوري في دقائق' : 'Instant setup in minutes',
    language === 'ar' ? 'لوحة تحكم سهلة الاستخدام' : 'User-friendly control panel',
    language === 'ar' ? 'تثبيت تطبيقات بنقرة واحدة' : 'One-click app installations',
    language === 'ar' ? 'دعم فني خبير على مدار الساعة' : 'Expert 24/7 technical support',
    language === 'ar' ? 'ضمان استرداد الأموال لمدة 30 يوماً' : '30-day money-back guarantee',
    language === 'ar' ? 'ترحيل مجاني من مضيفك الحالي' : 'Free migration from your current host',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="text-slate-600 hover:text-cyan-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <a href="/#services" className="text-slate-600 hover:text-cyan-600 transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-slate-900 font-medium">{language === 'ar' ? 'الاستضافة السحابية' : 'Cloud Hosting'}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={isRTL ? 'text-right' : ''}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
                <Cloud className="w-4 h-4" />
                <span>{language === 'ar' ? 'استضافة سحابية' : 'Cloud Hosting'}</span>
              </div>
              
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                {language === 'ar' ? 'استضافة سحابية عالية الأداء' : 'High-Performance Cloud Hosting'}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                {language === 'ar' 
                  ? 'استضافة سريعة وآمنة وموثوقة محسّنة لمتاجر التجارة الإلكترونية والمواقع عالية الحركة.'
                  : 'Fast, secure, and reliable hosting infrastructure optimized for e-commerce stores and high-traffic websites.'}
              </p>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                    {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </a>
                <Button size="lg" variant="outline">
                  {language === 'ar' ? 'شاهد العرض التوضيحي' : 'Watch Demo'}
                </Button>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  {/* Server Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">{language === 'ar' ? 'وقت التشغيل' : 'Uptime'}</div>
                        <div className="text-lg font-bold text-green-600">99.99%</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>{language === 'ar' ? 'المعالج' : 'CPU'}</span>
                        <span>24%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>{language === 'ar' ? 'الذاكرة' : 'Memory'}</span>
                        <span>45%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>{language === 'ar' ? 'التخزين' : 'Storage'}</span>
                        <span>62%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[62%] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t">
                    <div className="text-center">
                      <div className="text-xs text-slate-500">{language === 'ar' ? 'الزوار' : 'Visitors'}</div>
                      <div className="text-lg font-bold text-slate-900">12.5K</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500">{language === 'ar' ? 'السرعة' : 'Speed'}</div>
                      <div className="text-lg font-bold text-green-600">1.2s</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500">{language === 'ar' ? 'الأمان' : 'Security'}</div>
                      <div className="text-lg font-bold text-blue-600">A+</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {language === 'ar' ? 'مميزات الاستضافة' : 'Hosting Features'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'استضافة مصممة لتقديم أفضل أداء وأمان وموثوقية'
                : 'Hosting designed to deliver the best performance, security, and reliability'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-slate-900 mb-3 ${isRTL ? 'text-right' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-slate-600 ${isRTL ? 'text-right' : ''}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {language === 'ar' ? 'خطط الأسعار' : 'Pricing Plans'}
            </h2>
            <p className="text-xl text-slate-600">
              {language === 'ar' ? 'اختر الخطة المناسبة لاحتياجاتك' : 'Choose the plan that fits your needs'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-2xl scale-105'
                    : 'bg-slate-50 text-slate-900'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {plan.name}
                </h3>
                <div className={`mb-6 ${isRTL ? 'text-right' : ''}`}>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.featured ? 'text-cyan-100' : 'text-slate-600'}`}>
                    {' '}{plan.currency}/{language === 'ar' ? 'شهرياً' : 'month'}
                  </span>
                </div>
                <ul className={`space-y-3 mb-8 ${isRTL ? 'text-right' : ''}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-cyan-200' : 'text-green-500'}`} />
                      <span className={plan.featured ? 'text-cyan-50' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href="/contact">
                  <Button 
                    className={`w-full ${
                      plan.featured
                        ? 'bg-white text-cyan-600 hover:bg-cyan-50'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                    }`}
                  >
                    {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {language === 'ar' ? 'لماذا تستضيف معنا؟' : 'Why Host With Us?'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-lg text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              {language === 'ar' 
                ? 'انقل موقعك إلى استضافة سريعة وآمنة اليوم'
                : 'Move your website to fast and secure hosting today'}
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
                {language === 'ar' ? 'تواصل معنا اليوم' : 'Contact Us Today'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
