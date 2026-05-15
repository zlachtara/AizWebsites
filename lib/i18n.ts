export type Language = 'en' | 'pl';

export const translations = {
  en: {
    // Navigation
    nav: {
      gallery: 'Gallery',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      bookCall: 'Book a Call',
      sideText: 'aiz.websites — Europe',
    },
    
    // Hero
    hero: {
      line1: 'We Build',
      line2: 'Digital',
      line3: 'Experiences.',
      subtext: 'Custom websites for businesses, creators, and brands across Europe. From idea to launch.',
      cta1: 'See Our Work',
      cta2: 'Get a Quote',
      scroll: 'scroll',
    },
    
    // Marquee
    marquee: 'Web Design • Custom Development • Landing Pages • E-Commerce • SEO-Optimized • European Studio • ',
    
    // About
    about: {
      label: 'About Us',
      headline: 'Your vision deserves a digital home that matches it.',
      p1: 'We are a boutique web design studio based in Europe, crafting bespoke digital experiences for brands that refuse to blend in.',
      p2: 'Every project begins with understanding your story, your goals, and your audience. We translate that into design that speaks.',
      p3: 'No templates. No shortcuts. Just carefully considered design and clean, performant code.',
      stat1: '50+',
      stat1Label: 'Projects',
      stat2: '100%',
      stat2Label: 'Custom',
      stat3: '24h',
      stat3Label: 'Response',
    },
    
    // Services
    services: {
      label: 'Services',
      headline: 'What We Build',
      items: [
        { title: 'Landing Pages', desc: 'High-converting single pages that capture attention and drive action.' },
        { title: 'Business Websites', desc: 'Professional multi-page sites that establish credibility and trust.' },
        { title: 'E-Commerce Stores', desc: 'Beautiful online shops with seamless shopping experiences.' },
        { title: 'Portfolio Sites', desc: 'Elegant showcases for creatives, artists, and professionals.' },
        { title: 'Redesigns', desc: 'Transform outdated sites into modern, performant experiences.' },
        { title: 'Maintenance & Support', desc: 'Ongoing care to keep your website secure and up-to-date.' },
      ],
    },
    
    // Portfolio
    portfolio: {
      label: 'Portfolio',
      headline: 'Selected Work',
      viewProject: 'View Project',
      filters: {
        all: 'All',
        landing: 'Landing',
        business: 'Business',
        ecommerce: 'E-Commerce',
        portfolio: 'Portfolio',
      },
      projects: [
        { name: 'FuraPiany', category: 'landing', categoryLabel: 'Landing', desc: 'Landing page for a detailing company' },
        { name: 'CleanArt-Pranie', category: 'business', categoryLabel: 'Business', desc: 'Business website for a cleaning service' },
        { name: 'TechReach EU', category: 'business', categoryLabel: 'Business', desc: 'B2B tech consultancy website' },
        { name: 'LaunchFast', category: 'landing', categoryLabel: 'Landing', desc: 'SaaS product launch page' },
        { name: 'PetCare Plus', category: 'business', categoryLabel: 'Business', desc: 'Veterinary clinic website' },
        { name: 'Marble & Co.', category: 'ecommerce', categoryLabel: 'E-Commerce', desc: 'Luxury homeware online store' },
      ],
    },
    
    // Process
    process: {
      label: 'Process',
      headline: 'How We Work',
      steps: [
        { title: 'Discovery Call', desc: 'We start with a conversation to understand your vision, goals, and requirements. This helps us align on expectations and timeline.' },
        { title: 'Design Concept', desc: 'We create a visual direction that captures your brand essence. You will see mockups and provide feedback before we proceed.' },
        { title: 'Development', desc: 'Our team brings the design to life with clean, performant code. We build with scalability and maintainability in mind.' },
        { title: 'Review & Revisions', desc: 'You review the build and we refine based on your feedback. We iterate until everything is perfect.' },
        { title: 'Launch', desc: 'We deploy your website and ensure everything runs smoothly. Your digital presence is now live.' },
      ],
    },
    
    // Pricing
    pricing: {
      label: 'Pricing',
      headline: 'Transparent Pricing',
      subheadline: 'No surprises. No hidden fees.',
      mostPopular: 'Most Popular',
      getStarted: 'Get Started',
      customNote: 'Need something custom? DM us.',
      plans: [
        {
          name: 'Starter',
          price: 'from €200',
          features: [
            'Landing page (up to 5 sections)',
            'Mobile responsive',
            'Contact form',
            'Basic SEO',
            '1 revision round',
            '7-day delivery',
          ],
        },
        {
          name: 'Pro',
          price: 'from €699',
          popular: true,
          features: [
            'Multi-page site (up to 8 pages)',
            'Custom design',
            'CMS integration',
            'Advanced SEO',
            '3 revision rounds',
            '14-day delivery',
            '30-day support',
          ],
        },
        {
          name: 'Premium',
          price: 'from €1,499',
          features: [
            'E-Commerce / Complex app',
            'Full design system',
            'Performance optimization',
            '5 revision rounds',
            'Priority delivery',
            '60-day support',
            'Analytics setup',
          ],
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      label: 'Testimonials',
      headline: 'What Clients Say',
      rating: '5.0 ★ from clients across Europe',
      items: [
        { quote: 'Aiz Websites transformed our online presence. The attention to detail and understanding of our brand was exceptional.', name: 'Maria K.', location: 'Berlin, Germany' },
        { quote: 'Working with them felt like a true partnership. They listened, delivered, and exceeded every expectation we had.', name: 'Tomasz W.', location: 'Warsaw, Poland' },
        { quote: 'Our conversion rate doubled after the redesign. Clean, fast, and beautifully crafted. Highly recommend.', name: 'Sophie L.', location: 'Paris, France' },
      ],
    },
    
    // FAQ
    faq: {
      label: 'FAQ',
      headline: 'Questions',
      items: [
        { q: 'How long does a typical project take?', a: 'Timeline depends on complexity. A landing page typically takes 7-10 days, while larger projects can take 2-4 weeks. We will provide a detailed timeline during our discovery call.' },
        { q: 'Do you work with clients outside Europe?', a: 'Absolutely. While we are based in Europe, we work with clients worldwide. Communication happens primarily via video calls and messaging platforms.' },
        { q: 'What is your design process?', a: 'We start with discovery, move to design concepts, then development, review, and launch. You are involved at every stage with opportunities for feedback and revisions.' },
        { q: 'Do you provide hosting?', a: 'We can recommend hosting solutions and help with deployment, but we do not provide hosting directly. Most projects are deployed on modern platforms like Vercel or Netlify.' },
        { q: 'Can you work with my existing brand guidelines?', a: 'Yes, we love working within established brand systems. Send us your guidelines and we will ensure the website perfectly aligns with your visual identity.' },
        { q: 'What if I need changes after launch?', a: 'Depending on your package, you have included support time. After that, we offer maintenance packages or can handle changes on an hourly basis.' },
        { q: 'How do payments work?', a: 'We typically require 50% upfront to begin work and 50% upon completion before launch. For larger projects, we can arrange milestone-based payments.' },
      ],
    },
    
    // Contact
    contact: {
      label: 'Contact',
      headline: "Let's Build Something.",
      subtext: 'Ready to bring your vision to life? Get in touch and let us discuss your project.',
      instagram: 'Follow us on Instagram',
      location: 'Based in Europe',
      form: {
        name: 'Name',
        email: 'Email',
        service: 'Service',
        serviceOptions: ['Landing Page', 'Business Website', 'E-Commerce', 'Portfolio', 'Redesign', 'Other'],
        budget: 'Budget',
        budgetOptions: ['Under €500', '€500 - €1,000', '€1,000 - €2,500', '€2,500+'],
        message: 'Message',
        submit: 'Send Message',
        success: 'Thank you! We will be in touch soon.',
      },
    },
    
    // Footer
    footer: {
      tagline: 'Turning ideas into functional digital experiences',
      rights: '© 2025 Aiz Websites · Based in Europe · All rights reserved',
    },
    
    // Cookie Banner
    cookies: {
      message: 'We use cookies to improve your experience and analyze traffic. You can accept all or manage your preferences.',
      acceptAll: 'Accept All',
      decline: 'Decline',
      preferences: 'Preferences',
      modal: {
        title: 'Cookie Preferences',
        necessary: 'Necessary',
        necessaryDesc: 'Essential for the website to function properly.',
        analytics: 'Analytics',
        analyticsDesc: 'Help us understand how visitors interact with our website.',
        marketing: 'Marketing',
        marketingDesc: 'Used to deliver personalized advertisements.',
        save: 'Save Preferences',
      },
    },
  },
  
  pl: {
    // Navigation
    nav: {
      gallery: 'Galeria',
      services: 'Usługi',
      portfolio: 'Portfolio',
      process: 'Proces',
      pricing: 'Cennik',
      faq: 'FAQ',
      contact: 'Kontakt',
      bookCall: 'Umów rozmowę',
      sideText: 'aiz.websites — Europa',
    },
    
    // Hero
    hero: {
      line1: 'Tworzymy',
      line2: 'Cyfrowe',
      line3: 'Doświadczenia.',
      subtext: 'Własne strony dla firm, twórców i marek z Europy. Od pomysłu do wdrożenia.',
      cta1: 'Zobacz prace',
      cta2: 'Wycena',
      scroll: 'przewiń',
    },
    
    // Marquee
    marquee: 'Projektowanie stron • Własny kod • Strony lądowania • Sklepy • SEO • Studio z Europy • ',
    
    // About
    about: {
      label: 'O nas',
      headline: 'Twoja wizja zasługuje na cyfrowy dom na jej miarę.',
      p1: 'Jesteśmy butikowym studiem webowym z Europy, tworzącym unikalne doświadczenia cyfrowe dla marek, które nie chcą wtapiać się w tłum.',
      p2: 'Każdy projekt zaczyna się od zrozumienia Twojej historii, celów i odbiorców. Przekładamy to na design, który przemawia.',
      p3: 'Żadnych szablonów. Żadnych skrótów. Tylko przemyślany design i czysty, wydajny kod.',
      stat1: '50+',
      stat1Label: 'Projektów',
      stat2: '100%',
      stat2Label: 'Na miarę',
      stat3: '24h',
      stat3Label: 'Odpowiedź',
    },
    
    // Services
    services: {
      label: 'Usługi',
      headline: 'Co tworzymy',
      items: [
        { title: 'Strony lądowania', desc: 'Skuteczne strony, które przyciągają uwagę i generują konwersje.' },
        { title: 'Strony firmowe', desc: 'Profesjonalne witryny budujące wiarygodność i zaufanie.' },
        { title: 'Sklepy internetowe', desc: 'Piękne sklepy online z płynnym doświadczeniem zakupowym.' },
        { title: 'Strony portfolio', desc: 'Eleganckie prezentacje dla twórców, artystów i profesjonalistów.' },
        { title: 'Przeprojektowanie', desc: 'Transformacja przestarzałych stron w nowoczesne, wydajne witryny.' },
        { title: 'Opieka i wsparcie', desc: 'Stała opieka, by Twoja strona była bezpieczna i aktualna.' },
      ],
    },
    
    // Portfolio
    portfolio: {
      label: 'Portfolio',
      headline: 'Wybrane realizacje',
      viewProject: 'Zobacz projekt',
      filters: {
        all: 'Wszystkie',
        landing: 'Landing',
        business: 'Firmowe',
        ecommerce: 'Sklepy',
        portfolio: 'Portfolio',
      },
      projects: [
        { name: 'FuraPiany', category: 'landing', categoryLabel: 'Landing', desc: 'Landing page dla firmy detailingowej' },
        { name: 'CleanArt-Pranie', category: 'business', categoryLabel: 'Firmowa', desc: 'Strona internetowa dla firmy zajmującej się czyszczeniem' },
        { name: 'TechReach EU', category: 'business', categoryLabel: 'Firmowa', desc: 'Strona konsultingu technologicznego B2B' },
        { name: 'LaunchFast', category: 'landing', categoryLabel: 'Landing', desc: 'Strona startowa produktu SaaS' },
        { name: 'PetCare Plus', category: 'business', categoryLabel: 'Firmowa', desc: 'Strona kliniki weterynaryjnej' },
        { name: 'Marble & Co.', category: 'ecommerce', categoryLabel: 'Sklep', desc: 'Luksusowy sklep z wyposażeniem wnętrz' },
      ],
    },
    
    // Process
    process: {
      label: 'Proces',
      headline: 'Jak pracujemy',
      steps: [
        { title: 'Rozmowa wstępna', desc: 'Zaczynamy od rozmowy, by zrozumieć Twoją wizję, cele i wymagania. Pozwala nam to ustalić oczekiwania i harmonogram.' },
        { title: 'Koncepcja projektu', desc: 'Tworzymy kierunek wizualny oddający esencję Twojej marki. Zobaczysz makiety i możesz przekazać uwagi.' },
        { title: 'Realizacja', desc: 'Nasz zespół ożywia design czystym, wydajnym kodem. Budujemy z myślą o skalowalności i utrzymaniu.' },
        { title: 'Poprawki i testy', desc: 'Przeglądasz projekt, a my dopracowujemy na podstawie Twoich uwag. Iterujemy, aż wszystko będzie idealne.' },
        { title: 'Wdrożenie', desc: 'Wdrażamy Twoją stronę i upewniamy się, że wszystko działa płynnie. Twoja obecność cyfrowa jest już online.' },
      ],
    },
    
    // Pricing
    pricing: {
      label: 'Cennik',
      headline: 'Przejrzysty cennik',
      subheadline: 'Żadnych niespodzianek.',
      mostPopular: 'Najpopularniejszy',
      getStarted: 'Zacznij',
      customNote: 'Potrzebujesz czegoś niestandardowego? Napisz do nas.',
      plans: [
        {
          name: 'Starter',
          price: 'od 200€',
          features: [
            'Strona lądowania (do 5 sekcji)',
            'Responsywna',
            'Formularz kontaktowy',
            'Podstawowe SEO',
            '1 runda poprawek',
            'Dostawa w 7 dni',
          ],
        },
        {
          name: 'Pro',
          price: 'od 699€',
          popular: true,
          features: [
            'Wielostronicowa (do 8 podstron)',
            'Własny projekt',
            'Integracja z CMS',
            'Zaawansowane SEO',
            '3 rundy poprawek',
            'Dostawa w 14 dni',
            '30 dni wsparcia',
          ],
        },
        {
          name: 'Premium',
          price: 'od 1499€',
          features: [
            'Sklep / zaawansowana apka',
            'Pełny system designu',
            'Optymalizacja wydajności',
            '5 rund poprawek',
            'Priorytetowa dostawa',
            '60 dni wsparcia',
            'Konfiguracja analityki',
          ],
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      label: 'Opinie',
      headline: 'Co mówią klienci',
      rating: '5.0 ★ od klientów z całej Europy',
      items: [
        { quote: 'Aiz Websites całkowicie odmienili naszą obecność online. Dbałość o szczegóły i zrozumienie naszej marki były wyjątkowe.', name: 'Maria K.', location: 'Berlin, Niemcy' },
        { quote: 'Współpraca z nimi była prawdziwym partnerstwem. Słuchali, dostarczali i przekraczali każde nasze oczekiwanie.', name: 'Tomasz W.', location: 'Warszawa, Polska' },
        { quote: 'Nasz współczynnik konwersji podwoił się po redesignie. Czysto, szybko i pięknie wykonane. Bardzo polecam.', name: 'Sophie L.', location: 'Paryż, Francja' },
      ],
    },
    
    // FAQ
    faq: {
      label: 'FAQ',
      headline: 'Pytania',
      items: [
        { q: 'Jak długo trwa typowy projekt?', a: 'Czas zależy od złożoności. Strona lądowania zajmuje zwykle 7-10 dni, większe projekty 2-4 tygodnie. Szczegółowy harmonogram przedstawimy podczas rozmowy wstępnej.' },
        { q: 'Czy pracujecie z klientami spoza Europy?', a: 'Oczywiście. Choć mamy siedzibę w Europie, pracujemy z klientami na całym świecie. Komunikacja odbywa się głównie przez wideorozmowy i komunikatory.' },
        { q: 'Jaki jest wasz proces projektowy?', a: 'Zaczynamy od odkrywania, przechodzimy do koncepcji, potem realizacja, przegląd i wdrożenie. Jesteś zaangażowany na każdym etapie z możliwością feedbacku i poprawek.' },
        { q: 'Czy zapewniacie hosting?', a: 'Możemy polecić rozwiązania hostingowe i pomóc przy wdrożeniu, ale nie oferujemy hostingu bezpośrednio. Większość projektów wdrażamy na platformach jak Vercel czy Netlify.' },
        { q: 'Czy możecie pracować z moimi wytycznymi marki?', a: 'Tak, uwielbiamy pracować w ramach ustalonych systemów marki. Prześlij nam wytyczne, a upewnimy się, że strona idealnie pasuje do Twojej identyfikacji wizualnej.' },
        { q: 'Co jeśli potrzebuję zmian po wdrożeniu?', a: 'W zależności od pakietu masz wliczony czas wsparcia. Po tym oferujemy pakiety utrzymaniowe lub zmiany rozliczane godzinowo.' },
        { q: 'Jak wyglądają płatności?', a: 'Zwykle wymagamy 50% zaliczki na start i 50% po ukończeniu przed wdrożeniem. Przy większych projektach możemy ustalić płatności etapowe.' },
      ],
    },
    
    // Contact
    contact: {
      label: 'Kontakt',
      headline: 'Zbudujmy coś razem.',
      subtext: 'Gotowy ożywić swoją wizję? Skontaktuj się i porozmawiajmy o Twoim projekcie.',
      instagram: 'Śledź nas na Instagramie',
      location: 'Studio z Europy',
      form: {
        name: 'Imię',
        email: 'Email',
        service: 'Usługa',
        serviceOptions: ['Strona lądowania', 'Strona firmowa', 'Sklep', 'Portfolio', 'Przeprojektowanie', 'Inne'],
        budget: 'Budżet',
        budgetOptions: ['Poniżej 500€', '500€ - 1000€', '1000€ - 2500€', '2500€+'],
        message: 'Wiadomość',
        submit: 'Wyślij',
        success: 'Dziękujemy! Odezwiemy się wkrótce.',
      },
    },
    
    // Footer
    footer: {
      tagline: 'Zamieniamy pomysły w funkcjonalne doświadczenia cyfrowe',
      rights: '© 2025 Aiz Websites · Studio z Europy · Wszelkie prawa zastrzeżone',
    },
    
    // Cookie Banner
    cookies: {
      message: 'Używamy plików cookie, aby ulepszyć doświadczenia i analizować ruch. Możesz zaakceptować wszystkie lub zarządzać preferencjami.',
      acceptAll: 'Akceptuj wszystkie',
      decline: 'Odrzuć',
      preferences: 'Preferencje',
      modal: {
        title: 'Preferencje plików cookie',
        necessary: 'Niezbędne',
        necessaryDesc: 'Niezbędne do prawidłowego działania strony.',
        analytics: 'Analityczne',
        analyticsDesc: 'Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony.',
        marketing: 'Marketingowe',
        marketingDesc: 'Używane do wyświetlania spersonalizowanych reklam.',
        save: 'Zapisz preferencje',
      },
    },
  },
} as const;

export type Translations = typeof translations.en;
