import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      hub: "Home",
      solutions: "Solutions",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact"
    },
    hero: {
      tagline: "Transform Your Business",
      title: "Build Your Digital Empire",
      subtitle: "Powerful eCommerce solutions, AI-driven marketing automation, and cutting-edge technology to scale your business globally.",
      cta: "Start Free Trial",
      ctaSecondary: "View Demo"
    },
    about: {
      label: "About SwiftTek",
      title: "Your Trusted Partner for Digital Success",
      description: "SwiftTek empowers businesses of all sizes to establish and grow their online presence. From sophisticated eCommerce platforms to intelligent chatbots, we provide everything you need to succeed in the digital marketplace.",
      stat1: "200+",
      stat1Label: "Solutions Delivered",
      stat2: "500+",
      stat2Label: "Happy Clients",
      stat3: "9.5",
      stat3Label: "Average Rating"
    },
    services: {
      label: "Our Services",
      title: "Comprehensive Digital Solutions",
      subtitle: "Everything you need to launch, grow, and scale your online business",
      ecommerce: {
        title: "eCommerce Platform",
        description: "Complete online store solution with inventory management, payment processing, and multi-channel selling capabilities."
      },
      marketing: {
        title: "Marketing Automation",
        description: "AI-powered chatbots and automated marketing tools to engage customers 24/7 and boost conversions."
      },
      hosting: {
        title: "Cloud Hosting",
        description: "Fast, secure, and reliable hosting infrastructure optimized for high-performance eCommerce applications."
      },
      pos: {
        title: "Point of Sale",
        description: "Seamlessly sync your physical and online stores with our integrated POS system."
      }
    },
    features: {
      label: "Features",
      title: "Powerful Tools for Growth",
      marketplace: {
        title: "Marketplace",
        description: "Create your own marketplace and manage multiple vendors from one dashboard."
      },
      checkout: {
        title: "One-Page Checkout",
        description: "Streamlined checkout experience that reduces cart abandonment."
      },
      pricing: {
        title: "Dynamic Pricing",
        description: "Flexible tier pricing that adjusts based on quantity and promotions."
      },
      recovery: {
        title: "Cart Recovery",
        description: "Automated recovery campaigns to win back abandoned carts."
      },
      analytics: {
        title: "Advanced Analytics",
        description: "Real-time insights into your store performance and customer behavior."
      },
      mobile: {
        title: "Mobile Apps",
        description: "Native mobile applications for iOS and Android to reach customers everywhere."
      }
    },
    portfolio: {
      label: "Our Work",
      title: "Themes & Templates",
      subtitle: "Professional designs for every industry",
      viewAll: "View All Themes"
    },
    testimonials: {
      label: "Testimonials",
      title: "What Our Clients Say"
    },
    values: {
      label: "Our Values",
      title: "Built on Strong Foundations",
      honesty: "Honesty",
      trust: "Trust",
      communication: "Communication",
      innovation: "Innovation",
      renewal: "Renewal"
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Join thousands of successful businesses using SwiftTek",
      button: "Get Started Free"
    },
    footer: {
      tagline: "Empowering businesses with innovative digital solutions.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All Rights Reserved"
    }
  },
  ar: {
    nav: {
      hub: "الرئيسية",
      solutions: "الحلول",
      services: "الخدمات",
      portfolio: "أعمالنا",
      about: "من نحن",
      contact: "اتصل بنا"
    },
    hero: {
      tagline: "حوّل أعمالك",
      title: "ابنِ إمبراطوريتك الرقمية",
      subtitle: "حلول تجارة إلكترونية قوية، وأتمتة تسويق مدعومة بالذكاء الاصطناعي، وتقنيات متطورة لتوسيع أعمالك عالمياً.",
      cta: "ابدأ تجربتك المجانية",
      ctaSecondary: "شاهد العرض"
    },
    about: {
      label: "عن سويفت تك",
      title: "شريكك الموثوق للنجاح الرقمي",
      description: "سويفت تك تمكّن الشركات من جميع الأحجام لإنشاء وتنمية تواجدها عبر الإنترنت. من منصات التجارة الإلكترونية المتطورة إلى روبوتات الدردشة الذكية، نوفر كل ما تحتاجه للنجاح في السوق الرقمي.",
      stat1: "+200",
      stat1Label: "حل تم تقديمه",
      stat2: "+500",
      stat2Label: "عميل سعيد",
      stat3: "9.5",
      stat3Label: "متوسط التقييم"
    },
    services: {
      label: "خدماتنا",
      title: "حلول رقمية شاملة",
      subtitle: "كل ما تحتاجه لإطلاق وتنمية وتوسيع أعمالك عبر الإنترنت",
      ecommerce: {
        title: "منصة التجارة الإلكترونية",
        description: "حل متكامل للمتجر الإلكتروني مع إدارة المخزون ومعالجة المدفوعات والبيع متعدد القنوات."
      },
      marketing: {
        title: "أتمتة التسويق",
        description: "روبوتات دردشة مدعومة بالذكاء الاصطناعي وأدوات تسويق آلية لإشراك العملاء على مدار الساعة."
      },
      hosting: {
        title: "الاستضافة السحابية",
        description: "بنية تحتية سريعة وآمنة وموثوقة محسّنة لتطبيقات التجارة الإلكترونية عالية الأداء."
      },
      pos: {
        title: "نقطة البيع",
        description: "مزامنة سلسة بين متاجرك الفعلية والإلكترونية مع نظام نقطة البيع المتكامل."
      }
    },
    features: {
      label: "المميزات",
      title: "أدوات قوية للنمو",
      marketplace: {
        title: "السوق",
        description: "أنشئ سوقك الخاص وأدر بائعين متعددين من لوحة تحكم واحدة."
      },
      checkout: {
        title: "دفع بصفحة واحدة",
        description: "تجربة دفع مبسطة تقلل من التخلي عن السلة."
      },
      pricing: {
        title: "تسعير ديناميكي",
        description: "تسعير مرن يتكيف حسب الكمية والعروض الترويجية."
      },
      recovery: {
        title: "استرداد السلة",
        description: "حملات استرداد آلية لاستعادة السلات المهجورة."
      },
      analytics: {
        title: "تحليلات متقدمة",
        description: "رؤى فورية حول أداء متجرك وسلوك العملاء."
      },
      mobile: {
        title: "تطبيقات الجوال",
        description: "تطبيقات جوال أصلية لنظامي iOS و Android للوصول إلى العملاء في كل مكان."
      }
    },
    portfolio: {
      label: "أعمالنا",
      title: "القوالب والتصاميم",
      subtitle: "تصاميم احترافية لكل صناعة",
      viewAll: "عرض جميع القوالب"
    },
    testimonials: {
      label: "آراء العملاء",
      title: "ماذا يقول عملاؤنا"
    },
    values: {
      label: "قيمنا",
      title: "مبنية على أسس قوية",
      honesty: "الصدق",
      trust: "الثقة",
      communication: "التواصل",
      innovation: "الابتكار",
      renewal: "التجديد"
    },
    cta: {
      title: "هل أنت مستعد لتحويل أعمالك؟",
      subtitle: "انضم إلى آلاف الشركات الناجحة التي تستخدم سويفت تك",
      button: "ابدأ مجاناً"
    },
    footer: {
      tagline: "تمكين الأعمال بحلول رقمية مبتكرة.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(language === 'ar');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}