import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import { 
  Monitor, 
  Smartphone, 
  Wifi, 
  BarChart3, 
  Package, 
  CreditCard,
  Users,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  Receipt,
  ChevronRight,
  Home
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import { Button } from '../../components/ui/button';

export default function PointOfSale() {
  const { t, isRTL, language } = useLanguage();

  const features = [
    {
      icon: Monitor,
      title: language === 'ar' ? 'نظام نقاط البيع المتقدم' : 'Advanced POS System',
      description: language === 'ar' 
        ? 'نظام نقاط بيع سهل الاستخدام مع واجهة بديهية للمعاملات السريعة'
        : 'User-friendly POS interface with intuitive design for fast transactions'
    },
    {
      icon: RefreshCw,
      title: language === 'ar' ? 'مزامنة فورية' : 'Real-Time Sync',
      description: language === 'ar' 
        ? 'مزامنة تلقائية بين متجرك الفعلي والإلكتروني في الوقت الفعلي'
        : 'Automatic synchronization between your physical and online store in real-time'
    },
    {
      icon: Package,
      title: language === 'ar' ? 'إدارة المخزون الموحدة' : 'Unified Inventory Management',
      description: language === 'ar' 
        ? 'إدارة مخزون موحدة عبر جميع القنوات والمواقع'
        : 'Unified inventory management across all channels and locations'
    },
    {
      icon: CreditCard,
      title: language === 'ar' ? 'دفع متعدد الطرق' : 'Multiple Payment Methods',
      description: language === 'ar' 
        ? 'قبول النقد والبطاقات والمحافظ الرقمية وجميع طرق الدفع'
        : 'Accept cash, cards, digital wallets, and all payment methods'
    },
    {
      icon: BarChart3,
      title: language === 'ar' ? 'تقارير وتحليلات' : 'Reports & Analytics',
      description: language === 'ar' 
        ? 'تقارير مفصلة عن المبيعات والمخزون والأداء'
        : 'Detailed reports on sales, inventory, and performance metrics'
    },
    {
      icon: Wifi,
      title: language === 'ar' ? 'عمل بدون اتصال' : 'Offline Mode',
      description: language === 'ar' 
        ? 'استمر في البيع حتى بدون اتصال بالإنترنت'
        : 'Continue selling even without internet connection'
    }
  ];

  const capabilities = [
    {
      icon: ShoppingBag,
      title: language === 'ar' ? 'إدارة الطلبات' : 'Order Management',
      items: [
        language === 'ar' ? 'معالجة سريعة للطلبات' : 'Quick order processing',
        language === 'ar' ? 'تتبع الطلبات' : 'Order tracking',
        language === 'ar' ? 'إرجاع واستبدال سهل' : 'Easy returns & exchanges',
      ]
    },
    {
      icon: Users,
      title: language === 'ar' ? 'إدارة العملاء' : 'Customer Management',
      items: [
        language === 'ar' ? 'ملفات تعريف العملاء' : 'Customer profiles',
        language === 'ar' ? 'برامج الولاء' : 'Loyalty programs',
        language === 'ar' ? 'سجل المشتريات' : 'Purchase history',
      ]
    },
    {
      icon: Receipt,
      title: language === 'ar' ? 'الفواتير والإيصالات' : 'Invoicing & Receipts',
      items: [
        language === 'ar' ? 'إيصالات رقمية ومطبوعة' : 'Digital & printed receipts',
        language === 'ar' ? 'فواتير مخصصة' : 'Custom invoices',
        language === 'ar' ? 'إيصالات بالبريد الإلكتروني' : 'Email receipts',
      ]
    },
  ];

  const benefits = [
    language === 'ar' ? 'إعداد سريع وسهل' : 'Quick and easy setup',
    language === 'ar' ? 'تدريب شامل للموظفين' : 'Comprehensive staff training',
    language === 'ar' ? 'دعم فني متواصل' : 'Ongoing technical support',
    language === 'ar' ? 'تحديثات منتظمة مجانية' : 'Regular free updates',
    language === 'ar' ? 'أجهزة متوافقة مع النظام' : 'Compatible hardware options',
    language === 'ar' ? 'تكامل مع أنظمة المحاسبة' : 'Integration with accounting systems',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <a href="/#services" className="text-slate-600 hover:text-emerald-600 transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-slate-900 font-medium">{language === 'ar' ? 'نظام نقاط البيع' : 'Point of Sale'}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">{/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={isRTL ? 'text-right' : ''}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                <Monitor className="w-4 h-4" />
                <span>{language === 'ar' ? 'نظام نقاط البيع' : 'Point of Sale'}</span>
              </div>
              
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                {language === 'ar' ? 'نظام نقاط بيع متكامل' : 'Integrated Point of Sale System'}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                {language === 'ar' 
                  ? 'دمج متجرك الفعلي مع متجرك الإلكتروني بسلاسة. نظام نقاط بيع قوي يعمل أينما كنت.'
                  : 'Seamlessly integrate your physical store with your online store. A powerful POS system that works wherever you are.'}
              </p>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
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
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  {/* POS Interface */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {language === 'ar' ? 'كاشير 01' : 'Cashier 01'}
                        </div>
                        <div className="text-xs text-emerald-600 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          {language === 'ar' ? 'متصل' : 'Online'}
                        </div>
                      </div>
                    </div>
                    <Smartphone className="w-6 h-6 text-slate-400" />
                  </div>

                  {/* Transaction Items */}
                  <div className="space-y-2 border-t pt-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-slate-100 rounded" />
                          <div>
                            <div className="h-2 w-20 bg-slate-300 rounded" />
                            <div className="h-1.5 w-12 bg-slate-200 rounded mt-1" />
                          </div>
                        </div>
                        <div className="h-2 w-12 bg-slate-300 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t pt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">{language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                      <div className="h-2 w-16 bg-slate-200 rounded" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">{language === 'ar' ? 'الضريبة' : 'Tax'}</span>
                      <div className="h-2 w-12 bg-slate-200 rounded" />
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-bold text-slate-900">{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                      <div className="h-3 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded" />
                    </div>
                  </div>

                  {/* Payment Button */}
                  <div className="pt-2">
                    <div className="h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg" />
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
              {language === 'ar' ? 'مميزات النظام' : 'System Features'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'كل ما تحتاجه لإدارة مبيعات متجرك بكفاءة'
                : 'Everything you need to manage your store sales efficiently'}
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
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {language === 'ar' ? 'إمكانيات متقدمة' : 'Advanced Capabilities'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <capability.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className={`text-xl font-bold text-slate-900 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-slate-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              {language === 'ar' ? 'ما تحصل عليه' : 'What You Get'}
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
            className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد لتطوير متجرك؟' : 'Ready to Upgrade Your Store?'}
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              {language === 'ar' 
                ? 'احصل على نظام نقاط بيع متطور يزيد من كفاءة عملك'
                : 'Get an advanced POS system that boosts your business efficiency'}
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
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
