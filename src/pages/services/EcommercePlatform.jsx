import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import { 
  ShoppingCart, 
  Package, 
  CreditCard, 
  TrendingUp, 
  Globe, 
  Smartphone,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Home
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import { Button } from '../../components/ui/button';

export default function EcommercePlatform() {
  const { t, isRTL, language } = useLanguage();

  const features = [
    {
      icon: Package,
      title: language === 'ar' ? 'إدارة المخزون' : 'Inventory Management',
      description: language === 'ar' 
        ? 'تتبع المخزون في الوقت الفعلي مع تنبيهات تلقائية للمخزون المنخفض'
        : 'Real-time inventory tracking with automatic low-stock alerts'
    },
    {
      icon: CreditCard,
      title: language === 'ar' ? 'معالجة الدفع الآمنة' : 'Secure Payment Processing',
      description: language === 'ar' 
        ? 'قبول جميع طرق الدفع الرئيسية بأمان من الدرجة البنكية'
        : 'Accept all major payment methods with bank-grade security'
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'البيع متعدد القنوات' : 'Multi-Channel Selling',
      description: language === 'ar' 
        ? 'قم بالبيع على موقعك الإلكتروني ووسائل التواصل الاجتماعي والأسواق من لوحة تحكم واحدة'
        : 'Sell on your website, social media, and marketplaces from one dashboard'
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'تصميم متجاوب' : 'Mobile-Responsive Design',
      description: language === 'ar' 
        ? 'متاجر محسّنة للجوال توفر تجربة تسوق سلسة على أي جهاز'
        : 'Mobile-optimized stores that provide seamless shopping on any device'
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'تحليلات متقدمة' : 'Advanced Analytics',
      description: language === 'ar' 
        ? 'رؤى شاملة حول الأداء وسلوك العملاء والمبيعات'
        : 'Comprehensive insights into performance, customer behavior, and sales'
    },
    {
      icon: ShieldCheck,
      title: language === 'ar' ? 'أمان على مستوى المؤسسات' : 'Enterprise-Grade Security',
      description: language === 'ar' 
        ? 'شهادة SSL وتشفير البيانات والامتثال لمعايير PCI'
        : 'SSL certification, data encryption, and PCI compliance'
    }
  ];

  const benefits = [
    language === 'ar' ? 'إعداد سهل في دقائق' : 'Easy setup in minutes',
    language === 'ar' ? 'لا توجد رسوم خفية' : 'No hidden fees',
    language === 'ar' ? 'قابلية التوسع مع نمو أعمالك' : 'Scalable as your business grows',
    language === 'ar' ? 'دعم فني على مدار الساعة' : '24/7 technical support',
    language === 'ar' ? 'تحديثات منتظمة ومجانية' : 'Regular free updates',
    language === 'ar' ? 'تكامل مع الأدوات الشائعة' : 'Integration with popular tools',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <a href="/#services" className="text-slate-600 hover:text-blue-600 transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-slate-900 font-medium">{language === 'ar' ? 'منصة التجارة الإلكترونية' : 'E-Commerce Platform'}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={isRTL ? 'text-right' : ''}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <ShoppingCart className="w-4 h-4" />
                <span>{language === 'ar' ? 'حل التجارة الإلكترونية' : 'E-Commerce Solution'}</span>
              </div>
              
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                {language === 'ar' ? 'منصة التجارة الإلكترونية المتكاملة' : 'Complete eCommerce Platform'}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                {language === 'ar' 
                  ? 'أنشئ متجرك الإلكتروني الاحترافي مع جميع الأدوات التي تحتاجها لإدارة منتجاتك، معالجة المدفوعات، وتنمية أعمالك عبر الإنترنت.'
                  : 'Build your professional online store with all the tools you need to manage products, process payments, and grow your business online.'}
              </p>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
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
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  {/* Store Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{language === 'ar' ? 'متجري' : 'My Store'}</div>
                        <div className="text-xs text-slate-500">{language === 'ar' ? 'التجارة الإلكترونية' : 'E-Commerce'}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-semibold">+24%</span>
                    </div>
                  </div>
                  
                  {/* Product Grid with Colors */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <div className="h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-10 flex-1 bg-slate-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="h-10 flex-1 bg-slate-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-slate-500" />
                      </div>
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
              {language === 'ar' ? 'مميزات قوية' : 'Powerful Features'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'كل ما تحتاجه لإدارة متجر إلكتروني ناجح في مكان واحد'
                : 'Everything you need to run a successful online store in one place'}
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
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
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
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد لبدء متجرك؟' : 'Ready to Start Your Store?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {language === 'ar' 
                ? 'انضم إلى آلاف التجار الناجحين الذين يستخدمون منصتنا'
                : 'Join thousands of successful merchants using our platform'}
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
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
