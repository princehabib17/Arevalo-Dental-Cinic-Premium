
import type { AppContent, Language } from './types';

const logos = [
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773490/download-1_tqryii.png',
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773490/hmo-valucare_1_tfypyv.png',
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773489/download_fj7mln.png',
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773489/download_2_iy0w6b.png',
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773489/download_6_jqmmrh.png',
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773489/hmo-intellicare_1_gzm9hs.png',
  'https://res.cloudinary.com/deulmakpv/image/upload/v1761773489/download_4_u2yozv.png',
];

const contentData: Record<Language, AppContent> = {
  en: {
    whatsappPrefill: "Hi Arevalo Clinic, I’d like to book an appointment.",
    hero: {
      eyebrow: "Dental Excellence",
      h1: "Welcome to Arevalo Dental Clinic",
      subhead: "Smile without second-guessing photos, meetings, or first impressions. Get clear options and confident results in Makati, without the stress of overcomplicated treatment plans.",
      primaryCTA: "Book an Appointment",
    },
    trustMarquee: {
      line: "Trusted by Major Insurance & Health Partners",
      logos: logos
    },
    services: {
        title: "Services We Do Best",
        services: [
            { title: "Dental Bridge", description: "Replace missing teeth with a fixed solution that feels natural when you chew and speak. Designed to close gaps cleanly and keep your bite comfortable.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Bridge_i7yjiv.png" },
            { title: "Dental Implant", description: "A stable replacement that looks and functions like a real tooth. No slipping, no awkwardness, just a secure result built for everyday life.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581528/Implant_cghqzv.png" },
            { title: "Whitening", description: "Professional whitening that lifts deep stains safely and evenly. You leave with a brighter smile that still looks like you.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581528/Whitening_bmkdwd.png" },
            { title: "Veneers", description: "Refine the look of your front teeth with a clean, natural finish. Great for chips, uneven edges, discoloration, and small gaps.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Veneer_hsq2q2.png" },
            { title: "Dental Crown", description: "Protect and restore a weakened or cracked tooth without losing it. Strong, functional, and shaped to blend with your smile.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Crown_luqh4c.png" },
            { title: "Inlay/Onlay", description: "A conservative upgrade when a filling is not enough, but a crown is too much. Custom-fit for strength and comfort.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Inlay_q7okek.png" },
            { title: "Oral Surgery", description: "Extractions and wisdom tooth procedures done under local anesthesia with a clear after-care plan. Straightforward, controlled, and focused on smooth recovery.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Surgery_n4iy3i.png" },
            { title: "Orthodontics", description: "Straightening options that fit adult life, including discreet clear aligners. Comfort, progress, and a smile that feels more like you.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Braces_nxpiv2.png" },
            { title: "Bonding", description: "A quick cosmetic fix for small chips and minor gaps. Natural-looking, polished, and often done in one visit.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Bonding_budxsg.png" },
            { title: "Periodontics", description: "Gum care that protects your teeth long-term. Treatment focuses on reducing inflammation and keeping the foundation healthy.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Periodontics_odywqu.png" },
            { title: "Dentures", description: "Custom-fit dentures made for comfort, stability, and a natural look. Built to help you eat, speak, and smile with ease.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Denture_desp9j.png" },
            { title: "Root Canal", description: "Relieves pain and saves the tooth by treating the infection at the source. Done with proper anesthesia and a calm, step-by-step approach.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Root_Canal_mbcne5.png" },
        ]
    },
    clientStories: {
        title: "Client Stories",
        stories: [
            { text: "I used to smile with my lips closed. After my treatment, I stopped thinking about angles and lighting. Now I show up in photos without hesitation.", author: "Fatima, Bahrain", rating: 5 },
            { text: "I wanted a clinic that was clear and direct. The plan made sense, the pricing was transparent, and the results feel solid and natural. I’d do it again.", author: "Abdullah, Saudi Arabia", rating: 5 },
            { text: "I didn’t realize how much my teeth affected my confidence until that weight was gone. I speak more freely now, and I smile without checking myself first.", author: "Maria, Manila", rating: 5 },
        ],
        cta: "Read more reviews"
    },
    team: {
        title: "30 Years of Excellence",
        subhead: "Led by Dr. Daisy Miranda-Arevalo, our clinic is known for consistent care, clear planning, and natural-looking results. We’ve served patients in Makati for decades, including many visiting from the Gulf region.",
        doctors: [
            { name: "Dr. Daisy Miranda-Arevalo", role: "Head Dentist", image: "https://res.cloudinary.com/deulmakpv/image/upload/v1761673223/image_39_omikz6.png" },
            { name: "Dr. Caroline Verceles-Arevalo", role: "Associate Dentist", image: "https://res.cloudinary.com/deulmakpv/image/upload/v1762162894/image_38_fuk03m.png" },
            { name: "Dr. Eliosa Tiongson", role: "Associate Dentist", image: "https://res.cloudinary.com/deulmakpv/image/upload/v1762162897/image_37_etr3h3.png" },
        ],
        stats: [
            { label: "Gulf Smiles", value: "26+" },
            { label: "International Patients", value: "71+" }
        ]
    },
    journey: {
        title: "Here’s What We’ll Do Next",
        steps: [
            { title: "Confirm your schedule", description: "You choose a time. We confirm your appointment within 24 hours." },
            { title: "Assess and listen", description: "We check what’s going on, what you want to change, and what matters most to you." },
            { title: "Map the plan", description: "You get clear options and transparent pricing, aligned with your timeline." },
            { title: "Start treatment", description: "We handle the work step-by-step, keeping things calm and predictable." },
            { title: "Follow through", description: "We monitor healing and results, and make sure everything settles the way it should." },
        ],
        cta: "Start Your Journey"
    },
    faq: {
        title: "Good to Know",
        faqs: [
            { question: "HMO coverage", answer: "Medicard, Intellicare, Valuecare, and many major Philippine HMO providers are accepted." },
            { question: "For patients flying in", answer: "Treatment can be planned around your travel dates, and we’ll outline a realistic timeline before you book anything." },
            { question: "Clinic location", answer: "We’re in Medical Towers Makati, in the CBD, with easy access by car, Grab, and public transport." },
            { question: "Emergency care", answer: "Urgent cases are prioritized and scheduled as soon as possible." },
        ]
    },
    finalCTA: {
        line: "You’re Still Here?",
        body: "If you’ve made it this far, you’re probably one message away from being done with this problem. Send us a WhatsApp message and we’ll reply with the next step.",
        button: "Message Us on WhatsApp"
    },
    footer: {
        tagline: "Dentistry that feels human.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        location: "Manila, Philippines",
    }
  },
  ar: {
    whatsappPrefill: "مرحباً عيادة أريفالو، أرغب في حجز موعد.",
    hero: {
      eyebrow: "التميز في طب الأسنان",
      h1: "مرحباً بك في عيادة أريفالو لطب الأسنان",
      subhead: "ابتسامة مريحة من دون تردد في الصور أو الكلام. خطة واضحة ونتائج طبيعية في ماكاتي، بأسلوب هادئ وخطوات مفهومة.",
      primaryCTA: "احجز موعد",
    },
    trustMarquee: {
      line: "موثوق به من قبل كبرى شركات التأمين والشركاء الصحيين",
      logos: logos
    },
    services: {
        title: "الخدمات التي نتميز بها",
        services: [
            { title: "جسر", description: "تعويض ثابت لإغلاق فراغ الأسنان المفقودة وتحسين المضغ والكلام. مصمم ليبدو طبيعياً ويحافظ على توازن العضّة.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Bridge_i7yjiv.png" },
            { title: "زراعة", description: "تعويض ثابت يشبه السن الطبيعي في الشكل والوظيفة. يساعد على استعادة الراحة والثبات والابتسامة بثقة.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581528/Implant_cghqzv.png" },
            { title: "تبييض", description: "تبييض احترافي يرفع التصبغات بشكل متجانس وآمن. يمنحك ابتسامة أفتح مع مظهر نظيف وغير مبالغ فيه.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581528/Whitening_bmkdwd.png" },
            { title: "ابتسامة هوليوود", description: "تحسين شامل لمظهر الأسنان الأمامية للحصول على ابتسامة متناسقة وواضحة. نركز على نتيجة أنيقة وطبيعية تناسب ملامح الوجه.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Veneer_hsq2q2.png" },
            { title: "تلبيسة", description: "تلبيسة تحمي السن الضعيف أو المتشقق وتعيد شكله ووظيفته. مصممة لتتناسق مع لون الأسنان وتبدو طبيعية.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Crown_luqh4c.png" },
            { title: "حشوة سراميك", description: "حشوة خزفية (سيراميك) متينة ومطابقة للون السن. خيار ممتاز عندما تحتاج تقوية للسن مع شكل طبيعي.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Inlay_q7okek.png" },
            { title: "جراحة", description: "إجراءات مثل خلع الأسنان أو ضروس العقل تتم تحت التخدير الموضعي مع خطة تعافٍ واضحة. تجربة مرتبة تركز على شفاء سلس.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Surgery_n4iy3i.png" },
            { title: "تقويم", description: "خيارات لتعديل اصطفاف الأسنان وتحسين العضّة، بما يناسب نمط حياتك. نتائج تدريجية مع متابعة منظمة وراحة أعلى.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Braces_nxpiv2.png" },
            { title: "حشوة تجميلية", description: "إصلاح بسيط وعملي لكسور صغيرة أو فراغات خفيفة أو حواف غير متساوية. النتيجة تبدو طبيعية وتندمج مع لون الأسنان.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Bonding_budxsg.png" },
            { title: "علاج لثة", description: "عناية تحمي أساس الأسنان على المدى الطويل. يقلل الالتهاب والنزيف ويساعد على الحفاظ على صحة اللثة والدعم العظمي.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Periodontics_odywqu.png" },
            { title: "طقم أسنان", description: "طقم مصمم على مقاس فمك ليكون مريحاً وثابتاً قدر الإمكان. يساعدك على الأكل والتحدث بثقة وبمظهر طبيعي.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581526/Denture_desp9j.png" },
            { title: "سحب عصب", description: "يعالج الالتهاب داخل السن ويخفف الألم مع الحفاظ على السن قدر الإمكان. يتم بخطوات واضحة وتخدير مناسب لراحة أكبر.", icon: "https://res.cloudinary.com/deulmakpv/image/upload/v1765581527/Root_Canal_mbcne5.png" },
        ]
    },
    clientStories: {
        title: "قصص من عملائنا",
        stories: [
            { text: "كنت أتردد في الابتسام في الصور. بعد العلاج أصبحت أبتسم بعفوية من دون أن أفكر في زوايا أو إضاءة.", author: "فاطمة، البحرين", rating: 5 },
            { text: "كنت أريد خطة واضحة وتعامل مباشر. كل شيء كان مفهوماً والتكلفة كانت شفافة، والنتيجة ثابتة وطبيعية.", author: "عبدالله، السعودية", rating: 5 },
            { text: "لم أدرك كم كان هذا الأمر يؤثر عليّ حتى اختفى. الآن أتحدث وأبتسم براحة أكبر، من دون تردد.", author: "ماريا، مانيلا", rating: 5 },
        ],
        cta: "شاهد المزيد"
    },
    team: {
        title: "30 عاماً من التميز",
        subhead: "بقيادة د. ديزي ميراندا-أريفالو، نركز على رعاية ثابتة وخطط واضحة ونتائج طبيعية. نخدم مرضى من ماكاتي منذ سنوات طويلة، وبينهم كثيرون من منطقة الخليج.",
        doctors: [
            { name: "د. ديزي ميراندا-أريفالو", role: "طبيبة الأسنان الرئيسية", image: "https://res.cloudinary.com/deulmakpv/image/upload/v1761673223/image_39_omikz6.png" },
            { name: "د. كارولين فيرسيليس-أريفالو", role: "طبيبة أسنان مساعدة", image: "https://res.cloudinary.com/deulmakpv/image/upload/v1762162894/image_38_fuk03m.png" },
            { name: "د. إليوسا تيونغسون", role: "طبيبة أسنان مساعدة", image: "https://res.cloudinary.com/deulmakpv/image/upload/v1762162897/image_37_etr3h3.png" },
        ],
        stats: [
            { label: "ابتسامة خليجية", value: "26+" },
            { label: "ابتسامة حول العالم", value: "71+" }
        ]
    },
    journey: {
        title: "الخطوة القادمة ببساطة",
        steps: [
            { title: "تأكيد الموعد", description: "تختار الوقت، ونحن نؤكد خلال 24 ساعة." },
            { title: "فحص واستماع", description: "نفهم المشكلة وما الذي تريد تغييره، ثم نوضح الصورة كاملة." },
            { title: "خطة واضحة", description: "خيارات عملية وتسعير شفاف يناسب وقتك وميزانيتك." },
            { title: "بدء العلاج", description: "نبدأ خطوة بخطوة، بهدوء وبشكل متوقع." },
            { title: "متابعة النتائج", description: "نراجع الشفاء والنتيجة ونتأكد أن كل شيء يسير كما يجب." },
        ],
        cta: "ابدأ رحلتك"
    },
    faq: {
        title: "معلومات مهمة",
        faqs: [
            { question: "التأمين الصحي", answer: "نقبل ميديكارد وإنتليكير وفاليوكير والعديد من مزودي التأمين الصحي في الفلبين." },
            { question: "للقادمين من الخارج", answer: "يمكن ترتيب خطة علاج حسب تواريخ السفر، مع جدول واضح قبل الحجز." },
            { question: "الموقع", answer: "نحن في Medical Towers Makati داخل منطقة الأعمال، مع وصول سهل بالسيارة وGrab والمواصلات." },
            { question: "الحالات العاجلة", answer: "نعطي الأولوية للحالات الطارئة ونحدد الموعد في أقرب وقت." },
        ]
    },
    finalCTA: {
        line: "لا تزال تقرأ؟",
        body: "إذا وصلت إلى هنا، فأنت على بُعد رسالة واحدة من الخطوة التالية. راسلنا على واتساب وسنرد عليك بما تحتاجه مباشرة.",
        button: "راسلنا على واتساب"
    },
    footer: {
        tagline: "طب أسنان بروح إنسانية.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        location: "مانيلا، الفلبين",
    }
  }
};

export const content = contentData;
