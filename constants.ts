
import type { AppContent, Language } from './types';

const contentData: Record<Language, AppContent> = {
  en: {
    whatsappPrefill: "Hi Arevalo Clinic, I’m interested in your services.",
    hero: {
      eyebrow: "Dental Clinic",
      h1: "WE OFFER AFFORDABLE, QUALITY IMPLANT AND COSMETIC DENTISTRY SERVICES IN OUR CLINIC",
      subhead: "Trusted by patients from Riyadh, Doha, and Dubai. Global standards with Filipino warmth.",
      primaryCTA: "Book Appointment",
      secondaryCTA: "View Services",
    },
    trustMarquee: {
      line: "Partnered with clinics and dental brands trusted across the Gulf and Asia.",
    },
    services: {
        title: "Services We Do Best",
        services: [
            { title: "Dental Bridge", description: "A dental bridge replaces missing teeth with artificial teeth." },
            { title: "Dental Implant", description: "Dental implants are artificial tooth roots." },
            { title: "Whitening", description: "Removes stains and discoloration from teeth." },
            { title: "Veneers", description: "Thin shells of porcelain tailored to cover teeth." },
            { title: "Dental Crown", description: "A cap placed over a tooth to restore shape." },
            { title: "Inlay/Onlay", description: "Indirect fillings for decayed or damaged teeth." },
            { title: "Oral Surgery", description: "Procedures including extractions and implants." },
            { title: "Orthodontics", description: "Correction of malpositioned teeth and jaws." },
            { title: "Bonding", description: "Application of tooth-colored resin material." },
            { title: "Periodontics", description: "Prevention, diagnosis, and treatment of periodontal disease." },
            { title: "Dentures", description: "Removable replacement for missing teeth." },
            { title: "Root Canal", description: "Treatment for the infected pulp of a tooth." },
        ]
    },
    clientStories: {
        title: "Our Valuable Clients",
        stories: [
            { text: "I was scared of surgery. Now I smile in every photo.", author: "Thomas Daniel", rating: 5 },
            { text: "Whitening lifted four shades with zero sensitivity.", author: "Alena Alex", rating: 5 },
            { text: "Aligners were discreet and fast. Colleagues noticed.", author: "Thomas Edison", rating: 5 },
        ],
        cta: "View all stories"
    },
    team: {
        title: "30 Years of Excellence",
        doctors: [
            { name: "Dr. Caroline Mercedes-Arevalo", role: "Assistant Dentist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1740&auto=format&fit=crop" },
            { name: "Dr. Daisy Heneda Arevalo", role: "Head Dentist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
            { name: "Dr. Shiela Tiongson", role: "Assistant Dentist", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" },
        ]
    },
    journey: {
        title: "Journey to Your Smile",
        steps: [
            { title: "Book Appointment", description: "To book your first virtual consultation, we help you guide through the checker process." },
            { title: "Consultation", description: "You will be welcomed by the receptionist, who will guide you through the registration process." },
            { title: "Set Dental Plan", description: "Following your dental consultation, you will drive to go over your customized treatment plan." },
            { title: "Dental Procedure", description: "After the dental plan is understood by the patient, the next step is to schedule the treatment." },
            { title: "Follow up Care", description: "You'll get clear instructions on what to eat and how to maintain the result if you ever need us." },
        ],
        cta: "Plan my visit"
    },
    faq: {
        title: "Frequently Asked Questions",
        faqs: [
            { question: "What services do you offer?", answer: "We offer a range of healthcare services including Personal Health Consultations, Health Monitoring Programs, and Integrated Care Plans." },
            { question: "How do I book an appointment?", answer: "You can book directly via WhatsApp or our contact form." },
            { question: "What can I expect during my first visit?", answer: "A comprehensive exam, X-rays if needed, and a clear treatment plan." },
            { question: "How does the Health Monitoring Program work?", answer: "We track your dental health over time with regular checkups and digital logs." },
            { question: "What is an Integrated Care Plan?", answer: "A holistic approach combining hygiene, restoration, and aesthetics." },
        ]
    },
    finalCTA: {
        line: "Get Our Updates",
        button: "Submit"
    },
    footer: {
        tagline: "Dentistry that feels human.",
        privacy: "Privacy",
        terms: "Terms",
        location: "Location",
    }
  },
  ar: {
    whatsappPrefill: "مرحباً عيادة أريفالو، أنا مهتم بخدماتكم.",
    hero: {
      eyebrow: "عيادة أسنان",
      h1: "نقدم خدمات زراعة وتجميل أسنان عالية الجودة وبأسعار معقولة",
      subhead: "ناس كثير من الرياض والدوحة ودبي يثقون فينا. معايير عالمية بدفء فلبيني.",
      primaryCTA: "احجز موعدك",
      secondaryCTA: "عرض الخدمات",
    },
    trustMarquee: {
      line: "شركاء النجاح في الخليج وآسيا",
    },
    services: {
        title: "أفضل خدماتنا",
        services: [
            { title: "جسور الأسنان", description: "استبدال الأسنان المفقودة بجسور ثابتة وطبيعية." },
            { title: "زراعة الأسنان", description: "جذور صناعية من التيتانيوم تعوض الأسنان المفقودة." },
            { title: "تبييض الأسنان", description: "إزالة التصبغات والبقع للحصول على ابتسامة مشرقة." },
            { title: "الفينير (القشور)", description: "قشور خزفية رقيقة لتجميل شكل ولون الأسنان." },
            { title: "تيجان الأسنان", description: "غطاء كامل للسن لترميم الشكل والوظيفة." },
            { title: "الحشوات", description: "حشوات تجميلية للأسنان المتضررة أو المسوسة." },
            { title: "جراحة الفم", description: "إجراءات تشمل الخلع والزراعة وغيرها." },
            { title: "تقويم الأسنان", description: "تصحيح تموضع الأسنان والفكين." },
            { title: "الترابط (Bonding)", description: "تطبيق مادة الراتنج بلون الأسنان للإصلاح." },
            { title: "علاج اللثة", description: "الوقاية والتشخيص وعلاج أمراض اللثة." },
            { title: "أطقم الأسنان", description: "بدائل متحركة للأسنان المفقودة." },
            { title: "علاج الجذور", description: "علاج عصب السن المصاب أو الملتهب." },
        ]
    },
    clientStories: {
        title: "عملاؤنا الأعزاء",
        stories: [
            { text: "كنت خايف من العملية... الحين أبتسم بكل صورة.", author: "طارق — قطر", rating: 5 },
            { text: "تبييض رفع ٤ درجات... ولا فيه تحسّس.", author: "عائشة — الرياض", rating: 5 },
            { text: "الألينرز كانت خفيفة وسريعة... والزملاء لاحظوا.", author: "فيصل — جدة", rating: 5 },
        ],
        cta: "شاهد المزيد"
    },
    team: {
        title: "٣٠ عاماً من التميز",
        doctors: [
            { name: "د. كارولين مرسيدس", role: "طبيب مساعد", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1740&auto=format&fit=crop" },
            { name: "د. ديزي هينيدا أريفالو", role: "رئيس الأطباء", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
            { name: "د. شيلا تيونغسون", role: "طبيب مساعد", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" },
        ]
    },
    journey: {
        title: "رحلتك لابتسامة أفضل",
        steps: [
            { title: "حجز موعد", description: "لحجز استشارتك الأولى، سنرشدك خلال العملية." },
            { title: "الاستشارة", description: "سيستقبلك موظف الاستقبال ويرشدك خلال التسجيل." },
            { title: "خطة العلاج", description: "بعد الاستشارة، سنضع لك خطة علاج مخصصة." },
            { title: "الإجراء الطبي", description: "بعد فهم الخطة، سنبدأ في تحديد مواعيد العلاج." },
            { title: "المتابعة", description: "سنعطيك تعليمات واضحة للحفاظ على النتيجة." },
        ],
        cta: "خطط لزيارتي"
    },
    faq: {
        title: "أسئلة شائعة",
        faqs: [
            { question: "ما هي الخدمات التي تقدمونها؟", answer: "نقدم مجموعة واسعة تشمل الاستشارات الشخصية وبرامج المتابعة الصحية." },
            { question: "كيف أحجز موعد؟", answer: "يمكنك الحجز مباشرة عبر واتساب." },
            { question: "ماذا أتوقع في زيارتي الأولى؟", answer: "فحص شامل، أشعة إذا لزم الأمر، وخطة علاج واضحة." },
            { question: "كيف يعمل برنامج المتابعة الصحية؟", answer: "نتابع صحة أسنانك بمرور الوقت مع فحوصات منتظمة." },
            { question: "ما هي خطة الرعاية المتكاملة؟", answer: "نهج شامل يجمع بين النظافة والترميم والتجميل." },
        ]
    },
    finalCTA: {
        line: "احصل على التحديثات",
        button: "اشتراك"
    },
    footer: {
        tagline: "طب أسنان بروح إنسانية.",
        privacy: "الخصوصية",
        terms: "الشروط",
        location: "الموقع",
    }
  }
};

export const content = contentData;
