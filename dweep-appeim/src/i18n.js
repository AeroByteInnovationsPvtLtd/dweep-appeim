import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "Home": "Home",
      "About": "About",
      "Support areas": "Support areas",
      "Contact Us": "Contact Us",
      "About Us": "About Us",
      "Contact": "Contact",
      
      // Language
      "Arabic": "Arabic",
      "English": "English",
      
      // Home Page
      "INTIGRATING Color Tinting,": "INTEGRATING Color Tinting,",
      "DELIVERING RESULTS.": "DELIVERING RESULTS.",
      "We provide next generation": "We provide next generation",
      "Tinitng Color Solutions": "Tinting Color Solutions",
      "Color Matching": "Color Matching",
      "Base Correction": "Base Correction",
      
      // About Us
      "About us": "About us",
      "Our Vision": "Our Vision",
      "Mission": "Mission",
      "Values": "Values",
      "Experience": "Experience",
      "Dweep LAB (Sigle Source Solution) Platform": "Dweep LAB (Single Source Solution) Platform",
      "To establish a comprehensive, single-source tinting solution for the paint industry that integrates software, colorants, paint correction, and tinting machines into one seamless ecosystem.": "To establish a comprehensive, single-source tinting solution for the paint industry that integrates software, colorants, paint correction, and tinting machines into one seamless ecosystem.",
      "We strive to simplify operations for paint manufacturers and retailers, ensuring accurate color reproduction, reduced waste, faster service, and improved profitability.": "We strive to simplify operations for paint manufacturers and retailers, ensuring accurate color reproduction, reduced waste, faster service, and improved profitability.",
      "We work smartly, take care of our team, and have fun in order to ensure the sustainability and success of our organization.": "We work smartly, take care of our team, and have fun in order to ensure the sustainability and success of our organization.",
      "With over 60 years of combined expertise in paint and tinting, our team delivers practical, reliable, and fully integrated tinting solutions tailored": "With over 60 years of combined expertise in paint and tinting, our team delivers practical, reliable, and fully integrated tinting solutions tailored",
      "Dweep Lab is a pioneering provider of single-source tinting solutions for the paint industry. We develops advanced software, supply high-quality tinting colorants, precise base correction, and reliable colorants dispensers into one seamless ecosystem. Our approach simplifies operations for manufacturers and retailers, ensures accurate color matching, reduces waste, and enhances customer satisfaction": "Dweep Lab is a pioneering provider of single-source tinting solutions for the paint industry. We develops advanced software, supply high-quality tinting colorants, precise base correction, and reliable colorants dispensers into one seamless ecosystem. Our approach simplifies operations for manufacturers and retailers, ensures accurate color matching, reduces waste, and enhances customer satisfaction",
      "Backed by decades of combined expertise, Dweep Lab delivers a complete, end-toend tinting platform that's practical, sustainable, and tailored to real-world industry needs.": "Backed by decades of combined expertise, Dweep Lab delivers a complete, end-to-end tinting platform that's practical, sustainable, and tailored to real-world industry needs.",
      
      // Support Areas
      "Support Areas": "Support Areas",
      "Paint Base Correction": "Paint Base Correction",
      "Color Solution": "Color Solution",
      "Dispensing Software": "Dispensing Software",
      "Color Database": "Color Database",
      "Dispenser Support": "Dispenser Support",
      "Single Source Solution": "Single Source Solution",
      
      // Support Areas Details
      "Process of Base Correction": "Process of Base Correction",
      "We provide paint companies with base correction services, adjusting a paint's color, opacity, and consistency to ensure accurate final shades after tinting.": "We provide paint companies with base correction services, adjusting a paint's color, opacity, and consistency to ensure accurate final shades after tinting.",
      "Tools & Equipment Utlizations": "Tools & Equipment Utilizations",
      "Our service uses precision instruments—mixers, dispersers, spectrophotometers, and viscosity testers—to accurately adjust and standardize paint base color, opacity, and consistency before tinting.": "Our service uses precision instruments—mixers, dispersers, spectrophotometers, and viscosity testers—to accurately adjust and standardize paint base color, opacity, and consistency before tinting.",
      "Key Considerations": "Key Considerations",
      "We treat paint base correction as a vital quality-control step, ensuring not just pigment adjustment but precise color accuracy, consistency, and production efficiency for our customers.": "We treat paint base correction as a vital quality-control step, ensuring not just pigment adjustment but precise color accuracy, consistency, and production efficiency for our customers.",
      "Color Matching & Formulation": "Color Matching & Formulation",
      "We Help in developing precise color recipes to meet customer or paint industry specifications.": "We Help in developing precise color recipes to meet customer or paint industry specifications.",
      "Base & Tint Optimization": "Base & Tint Optimization",
      "We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.": "We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.",
      "Quality Control & Standardization": "Quality Control & Standardization",
      "We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.": "We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.",
      "Accurate Formula Management": "Accurate Formula Management",
      "Stores and manages color formulas to ensure precise dispensing of tints and bases.": "Stores and manages color formulas to ensure precise dispensing of tints and bases.",
      "Automated Mixing & Dispensing": "Automated Mixing & Dispensing",
      "Controls machines to deliver exact quantities, reducing errors and waste.": "Controls machines to deliver exact quantities, reducing errors and waste.",
      "Reporting & Inventory Control": "Reporting & Inventory Control",
      "Tracks usage, inventory, and performance for better planning and cost efficiency.": "Tracks usage, inventory, and performance for better planning and cost efficiency.",
      "Cloud Storage of Color Formulas": "Cloud Storage of Color Formulas",
      "Keeps all standard and custom color recipes in one secure place.": "Keeps all standard and custom color recipes in one secure place.",
      "Fast & Accurate Color Matching": "Fast & Accurate Color Matching",
      "Quickly retrieves and matches colors for consistent results.": "Quickly retrieves and matches colors for consistent results.",
      "Regular Updates & Standardization": "Regular Updates & Standardization",
      "Ensures color data is current and uniform across all locations.": "Ensures color data is current and uniform across all locations.",
      "Online & In-person Support": "Online & In-person Support",
      "Our dispenser technicians specialize in leading brands such as Fast & Fluid, Corob, and more, with dedicated services available across all major cities in Saudi Arabia.": "Our dispenser technicians specialize in leading brands such as Fast & Fluid, Corob, and more, with dedicated services available across all major cities in Saudi Arabia.",
      "Spare Parts Availability": "Spare Parts Availability",
      "We provide a variety of spare parts for most dispenser brands used in the paint industry across Saudi Arabia.": "We provide a variety of spare parts for most dispenser brands used in the paint industry across Saudi Arabia.",
      "Support App": "Support App",
      "Our support app ensures all retail store requests are handled promptly and serviced without delays.": "Our support app ensures all retail store requests are handled promptly and serviced without delays.",
      "Integrated Systems": "Integrated Systems",
      "Combines software, machines, and colorants for seamless tinting operations.": "Combines software, machines, and colorants for seamless tinting operations.",
      "Consistent Color Accuracy": "Consistent Color Accuracy",
      "Ensures precise and repeatable shades across all locations.": "Ensures precise and repeatable shades across all locations.",
      "Efficient Service & Support": "Efficient Service & Support",
      "Provides end-to-end support, from setup to maintenance, reducing downtime.": "Provides end-to-end support, from setup to maintenance, reducing downtime.",
      
      // Contact Form
      "Contact us": "Contact us",
      "Let's work together": "Let's work together",
      "Title": "Title",
      "Mr.": "Mr.",
      "Mrs.": "Mrs.",
      "Ms.": "Ms.",
      "Full Name": "Full Name",
      "Email": "Email",
      "description": "Description",
      "Description": "Description",
      "Send Enquiry": "Send Enquiry",
      "Sending...": "Sending...",
      
      // Form validation messages
      "user name required": "User name is required",
      "email required": "Email is required",
      "invalid email": "Invalid email format",
      "Please enter a message": "Please enter a message",
      "Message must be at least 10 characters long": "Message must be at least 10 characters long",
      "Message must be less than 500 characters": "Message must be less than 500 characters",
      "nameMaxLengthValidMsg": "Name must be less than 40 characters",
      "Your message has been sent successfully! We will get back to you soon.": "Your message has been sent successfully! We will get back to you soon.",
      "Failed to send message. Please try again.": "Failed to send message. Please try again.",
      "Network error. Please check your connection and try again.": "Network error. Please check your connection and try again.",
      
      // Footer
      "© 2025 All rights reserved. Dweep LLC USA": "© 2025 All rights reserved. Dweep LLC USA"
    }
  },
  ar: {
    translation: {
      // Navigation
      "Home": "الرئيسية",
      "About": "حولنا",
      "Support areas": "مجالات الدعم",
      "Contact Us": "اتصل بنا",
      "About Us": "معلومات عنا",
      "Contact": "اتصل بنا",
      
      // Language
      "Arabic": "عربي",
      "English": "الإنجليزية",
      
      // Home Page
      "INTIGRATING Color Tinting,": "دمج تلوين الألوان،",
      "DELIVERING RESULTS.": "تحقيق النتائج.",
      "We provide next generation": "نحن نقدم الجيل القادم من",
      "Tinitng Color Solutions": "حلول تلوين الألوان",
      "Color Matching": "مطابقة الألوان",
      "Base Correction": "تصحيح القاعدة",
      
      // About Us
      "About us": "معلومات عنا",
      "Our Vision": "رؤيتنا",
      "Mission": "مهمتنا",
      "Values": "قيمنا",
      "Experience": "الخبرة",
      "Dweep LAB (Sigle Source Solution) Platform": "منصة دويب لاب (حل المصدر الواحد)",
      "To establish a comprehensive, single-source tinting solution for the paint industry that integrates software, colorants, paint correction, and tinting machines into one seamless ecosystem.": "إنشاء حل شامل ومتكامل للتلوين لصناعة الدهانات يدمج البرمجيات والملونات وتصحيح الدهانات وآلات التلوين في نظام بيئي متكامل.",
      "We strive to simplify operations for paint manufacturers and retailers, ensuring accurate color reproduction, reduced waste, faster service, and improved profitability.": "نسعى لتبسيط العمليات لمصنعي الدهانات وتجار التجزئة، مما يضمن إعادة إنتاج دقيقة للألوان وتقليل الهدر وخدمة أسرع وتحسين الربحية.",
      "We work smartly, take care of our team, and have fun in order to ensure the sustainability and success of our organization.": "نعمل بذكاء ونهتم بفريقنا ونستمتع بالعمل لضمان استدامة ونجاح منظمتنا.",
      "With over 60 years of combined expertise in paint and tinting, our team delivers practical, reliable, and fully integrated tinting solutions tailored": "مع أكثر من 60 عاماً من الخبرة المجمعة في الدهانات والتلوين، يقدم فريقنا حلول تلوين عملية وموثوقة ومتكاملة بالكامل ومصممة خصيصاً",
      "Dweep Lab is a pioneering provider of single-source tinting solutions for the paint industry. We develops advanced software, supply high-quality tinting colorants, precise base correction, and reliable colorants dispensers into one seamless ecosystem. Our approach simplifies operations for manufacturers and retailers, ensures accurate color matching, reduces waste, and enhances customer satisfaction": "دويب لاب هو مقدم رائد لحلول التلوين من مصدر واحد لصناعة الدهانات. نحن نطور برمجيات متقدمة ونوفر ملونات عالية الجودة وتصحيح دقيق للقاعدة وموزعات ملونات موثوقة في نظام بيئي متكامل. نهجنا يبسط العمليات للمصنعين وتجار التجزئة ويضمن مطابقة دقيقة للألوان ويقلل الهدر ويعزز رضا العملاء",
      "Backed by decades of combined expertise, Dweep Lab delivers a complete, end-toend tinting platform that's practical, sustainable, and tailored to real-world industry needs.": "مدعوماً بعقود من الخبرة المجمعة، يقدم دويب لاب منصة تلوين كاملة من البداية إلى النهاية عملية ومستدامة ومصممة لتلبية احتياجات الصناعة الحقيقية.",
      
      // Support Areas
      "Support Areas": "مجالات الدعم",
      "Paint Base Correction": "تصحيح قاعدة الدهان",
      "Color Solution": "حل الألوان",
      "Dispensing Software": "برنامج التوزيع",
      "Color Database": "قاعدة بيانات الألوان",
      "Dispenser Support": "دعم الموزع",
      "Single Source Solution": "حل المصدر الواحد",
      
      // Support Areas Details
      "Process of Base Correction": "عملية تصحيح القاعدة",
      "We provide paint companies with base correction services, adjusting a paint's color, opacity, and consistency to ensure accurate final shades after tinting.": "نحن نقدم لشركات الدهانات خدمات تصحيح القاعدة، وضبط لون الدهان وشفافيته واتساقه لضمان الحصول على ظلال نهائية دقيقة بعد التلوين.",
      "Tools & Equipment Utlizations": "استخدام الأدوات والمعدات",
      "Our service uses precision instruments—mixers, dispersers, spectrophotometers, and viscosity testers—to accurately adjust and standardize paint base color, opacity, and consistency before tinting.": "تستخدم خدماتنا أدوات دقيقة - الخلاطات والمشتتات ومقاييس الطيف الضوئي واختبارات اللزوجة - لضبط وتوحيد لون قاعدة الدهان وشفافيتها واتساقها بدقة قبل التلوين.",
      "Key Considerations": "الاعتبارات الرئيسية",
      "We treat paint base correction as a vital quality-control step, ensuring not just pigment adjustment but precise color accuracy, consistency, and production efficiency for our customers.": "نتعامل مع تصحيح قاعدة الدهان كخطوة حيوية لمراقبة الجودة، مما يضمن ليس فقط تعديل الصبغة ولكن دقة الألوان والاتساق وكفاءة الإنتاج لعملائنا.",
      "Color Matching & Formulation": "مطابقة الألوان والتركيب",
      "We Help in developing precise color recipes to meet customer or paint industry specifications.": "نساعد في تطوير وصفات ألوان دقيقة لتلبية مواصفات العملاء أو صناعة الدهانات.",
      "Base & Tint Optimization": "تحسين القاعدة والتلوين",
      "We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.": "نقدم خدمة لضمان مزج قواعد الدهانات والملونات بسلاسة للحصول على ظلال دقيقة وقابلة للتكرار.",
      "Quality Control & Standardization": "مراقبة الجودة والتوحيد القياسي",
      "We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.": "نقوم بتدريب فريقكم على أدوات الصناعة (مثل مقاييس الطيف الضوئي) للتحقق من الاتساق والمتانة وأداء اللون النهائي.",
      "Accurate Formula Management": "إدارة الصيغ الدقيقة",
      "Stores and manages color formulas to ensure precise dispensing of tints and bases.": "يخزن ويدير صيغ الألوان لضمان التوزيع الدقيق للملونات والقواعد.",
      "Automated Mixing & Dispensing": "الخلط والتوزيع الآلي",
      "Controls machines to deliver exact quantities, reducing errors and waste.": "يتحكم في الآلات لتقديم كميات دقيقة، مما يقلل الأخطاء والهدر.",
      "Reporting & Inventory Control": "التقارير ومراقبة المخزون",
      "Tracks usage, inventory, and performance for better planning and cost efficiency.": "يتتبع الاستخدام والمخزون والأداء لتحسين التخطيط وكفاءة التكلفة.",
      "Cloud Storage of Color Formulas": "التخزين السحابي لصيغ الألوان",
      "Keeps all standard and custom color recipes in one secure place.": "يحتفظ بجميع وصفات الألوان القياسية والمخصصة في مكان آمن واحد.",
      "Fast & Accurate Color Matching": "مطابقة الألوان السريعة والدقيقة",
      "Quickly retrieves and matches colors for consistent results.": "يسترجع ويطابق الألوان بسرعة للحصول على نتائج متسقة.",
      "Regular Updates & Standardization": "التحديثات المنتظمة والتوحيد القياسي",
      "Ensures color data is current and uniform across all locations.": "يضمن أن تكون بيانات الألوان حديثة وموحدة عبر جميع المواقع.",
      "Online & In-person Support": "الدعم الإلكتروني والشخصي",
      "Our dispenser technicians specialize in leading brands such as Fast & Fluid, Corob, and more, with dedicated services available across all major cities in Saudi Arabia.": "يتخصص فنيو الموزعات لدينا في العلامات التجارية الرائدة مثل Fast & Fluid وCorob وغيرها، مع خدمات مخصصة متاحة عبر جميع المدن الكبرى في المملكة العربية السعودية.",
      "Spare Parts Availability": "توفر قطع الغيار",
      "We provide a variety of spare parts for most dispenser brands used in the paint industry across Saudi Arabia.": "نوفر مجموعة متنوعة من قطع الغيار لمعظم ماركات الموزعات المستخدمة في صناعة الدهانات عبر المملكة العربية السعودية.",
      "Support App": "تطبيق الدعم",
      "Our support app ensures all retail store requests are handled promptly and serviced without delays.": "يضمن تطبيق الدعم الخاص بنا التعامل مع جميع طلبات متاجر التجزئة بسرعة وخدمتها دون تأخير.",
      "Integrated Systems": "الأنظمة المتكاملة",
      "Combines software, machines, and colorants for seamless tinting operations.": "يجمع بين البرمجيات والآلات والملونات لعمليات تلوين سلسة.",
      "Consistent Color Accuracy": "دقة الألوان المتسقة",
      "Ensures precise and repeatable shades across all locations.": "يضمن ظلال دقيقة وقابلة للتكرار عبر جميع المواقع.",
      "Efficient Service & Support": "الخدمة والدعم الفعال",
      "Provides end-to-end support, from setup to maintenance, reducing downtime.": "يوفر دعماً شاملاً من التركيب إلى الصيانة، مما يقلل من وقت التوقف.",
      
      // Contact Form
      "Contact us": "اتصل بنا",
      "Let's work together": "دعنا نعمل معاً",
      "Title": "اللقب",
      "Mr.": "السيد",
      "Mrs.": "السيدة",
      "Ms.": "الآنسة",
      "Full Name": "الاسم الكامل",
      "Email": "البريد الإلكتروني",
      "description": "الوصف",
      "Description": "الوصف",
      "Send Enquiry": "إرسال استفسار",
      "Sending...": "جاري الإرسال...",
      
      // Form validation messages
      "user name required": "اسم المستخدم مطلوب",
      "email required": "البريد الإلكتروني مطلوب",
      "invalid email": "تنسيق البريد الإلكتروني غير صحيح",
      "Please enter a message": "يرجى إدخال رسالة",
      "Message must be at least 10 characters long": "يجب أن تكون الرسالة على الأقل 10 أحرف",
      "Message must be less than 500 characters": "يجب أن تكون الرسالة أقل من 500 حرف",
      "nameMaxLengthValidMsg": "يجب أن يكون الاسم أقل من 40 حرف",
      "Your message has been sent successfully! We will get back to you soon.": "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
      "Failed to send message. Please try again.": "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      "Network error. Please check your connection and try again.": "خطأ في الشبكة. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
      
      // Footer
      "© 2025 All rights reserved. Dweep LLC USA": "© 2025 جميع الحقوق محفوظة. دويب إل إل سي الولايات المتحدة الأمريكية"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
