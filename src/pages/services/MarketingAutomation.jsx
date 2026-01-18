import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import { 
  Bot, 
  MessageSquare, 
  Zap, 
  Clock, 
  Target, 
  Mail,
  Users,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Home
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import { Button } from '../../components/ui/button';

export default function MarketingAutomation() {
  const { t, isRTL, language } = useLanguage();

  const features = [
    {
      icon: Bot,
      title: language === 'ar' ? 'روبوتات محادثة ذكية' : 'AI-Powered Chatbots',
      description: language === 'ar' 
        ? 'روبوتات محادثة مدعومة بالذكاء الاصطناعي تتفاعل مع العملاء على مدار الساعة'
        : 'AI-driven chatbots that engage customers 24/7 with human-like conversations'
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'حملات بريد إلكتروني آلية' : 'Automated Email Campaigns',
      description: language === 'ar' 
        ? 'رسائل بريد إلكتروني مخصصة تُرسل في الوقت المناسب بناءً على سلوك العملاء'
        : 'Personalized email sequences triggered by customer behavior and actions'
    },
    {
      icon: Target,
      title: language === 'ar' ? 'استهداف متقدم' : 'Advanced Segmentation',
      description: language === 'ar' 
        ? 'استهدف عملائك بدقة بناءً على التركيبة السكانية والسلوك والتفضيلات'
        : 'Target customers precisely based on demographics, behavior, and preferences'
    },
    {
      icon: LineChart,
      title: language === 'ar' ? 'تحليل الأداء' : 'Performance Analytics',
      description: language === 'ar' 
        ? 'تتبع وقياس فعالية حملاتك التسويقية في الوقت الفعلي'
        : 'Track and measure campaign effectiveness with real-time analytics'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'إدارة العملاء المحتملين' : 'Lead Management',
      description: language === 'ar' 
        ? 'احصل على العملاء المحتملين ورعايتهم وتحويلهم إلى عملاء تلقائياً'
        : 'Capture, nurture, and convert leads automatically with smart workflows'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'تكامل سلس' : 'Seamless Integration',
      description: language === 'ar' 
        ? 'اتصل بأدواتك المفضلة ومنصاتك الحالية بسهولة'
        : 'Connect with your favorite tools and existing platforms effortlessly'
    }
  ];

  const benefits = [
    language === 'ar' ? 'زيادة معدلات التحويل بنسبة تصل إلى 300٪' : 'Increase conversion rates by up to 300%',
    language === 'ar' ? 'وفر 20+ ساعة أسبوعياً من المهام اليدوية' : 'Save 20+ hours per week on manual tasks',
    language === 'ar' ? 'رد فوري على استفسارات العملاء' : 'Instant response to customer inquiries',
    language === 'ar' ? 'تجارب مخصصة لكل عميل' : 'Personalized experiences for every customer',
    language === 'ar' ? 'تحسين مستمر بناءً على البيانات' : 'Continuous improvement based on data',
    language === 'ar' ? 'إدارة متعددة القنوات من لوحة واحدة' : 'Multi-channel management from one dashboard',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="text-slate-600 hover:text-purple-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <a href="/#services" className="text-slate-600 hover:text-purple-600 transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-slate-900 font-medium">{language === 'ar' ? 'أتمتة التسويق' : 'Marketing Automation'}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={isRTL ? 'text-right' : ''}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                <Bot className="w-4 h-4" />
                <span>{language === 'ar' ? 'أتمتة التسويق' : 'Marketing Automation'}</span>
              </div>
              
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                {language === 'ar' ? 'أتمتة ذكية للتسويق' : 'AI-Powered Marketing Automation'}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                {language === 'ar' 
                  ? 'أتمتة حملاتك التسويقية وتفاعل مع العملاء بذكاء اصطناعي لزيادة المبيعات وبناء علاقات أقوى مع عملائك.'
                  : 'Automate your marketing campaigns and engage customers with AI-powered tools to boost sales and build stronger relationships.'}
              </p>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  {/* Chatbot Interface */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-slate-200 rounded mb-1" />
                      <div className="h-2 w-16 bg-green-100 rounded flex items-center gap-1 px-1">
                        <div className="w-1 h-1 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[70%]">
                        <div className="h-2 w-32 bg-white/50 rounded" />
                      </div>
                    </div>
                    <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <div className="bg-slate-100 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[70%] space-y-1">
                        <div className="h-2 w-40 bg-slate-300 rounded" />
                        <div className="h-2 w-28 bg-slate-300 rounded" />
                      </div>
                    </div>
                    <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[70%]">
                        <div className="h-2 w-24 bg-white/50 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Sparkle Effects */}
                  <div className="flex justify-center gap-2 pt-2">
                    <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                    <Sparkles className="w-3 h-3 text-pink-500 animate-pulse delay-300" />
                    <Sparkles className="w-4 h-4 text-purple-500 animate-pulse delay-700" />
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
              {language === 'ar' ? 'مميزات متقدمة' : 'Advanced Features'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'أدوات تسويقية ذكية تعمل على مدار الساعة لنمو أعمالك'
                : 'Smart marketing tools that work around the clock to grow your business'}
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
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
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
              {language === 'ar' ? 'فوائد الأتمتة' : 'Benefits of Automation'}
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
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد لأتمتة تسويقك؟' : 'Ready to Automate Your Marketing?'}
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              {language === 'ar' 
                ? 'دع الذكاء الاصطناعي يعمل من أجلك بينما تركز على تنمية أعمالك'
                : 'Let AI work for you while you focus on growing your business'}
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
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
