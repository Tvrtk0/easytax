export const languages = ['en', 'hr'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',

    // Footer
    'footer.description': 'Professional tax and accounting services for foreign businesses in Croatia.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.copyright': 'Easy Tax & Accounting. All rights reserved.',
    'footer.legalEstablishment': 'Legal Establishment',
    'footer.businessAddress': 'Business Address Services',
    'footer.taxCompliance': 'Tax Compliance',
    'footer.accountingServices': 'Accounting Services',

    // Home - Hero
    'home.title': 'Easy Tax & Accounting - Your Trusted Partner for Business in Croatia',
    'home.hero.heading': 'Your Trusted Partner<br />for Business in Croatia',
    'home.hero.subtitle': 'Comprehensive tax, accounting, and legal services for foreign businesses establishing operations in Croatia',
    'home.hero.cta': 'Get Started',
    'home.hero.ctaSecondary': 'Our Services',

    // Home - Services
    'home.services.heading': 'Our Services',
    'home.services.subtitle': 'Comprehensive solutions for foreign businesses establishing and operating in Croatia',
    'home.services.legal.title': 'Legal Establishment',
    'home.services.legal.desc': 'Complete company registration and legal setup services for foreign businesses in Croatia.',
    'home.services.address.title': 'Business Address',
    'home.services.address.desc': 'Professional business address services to establish your presence in Croatia.',
    'home.services.tax.title': 'Tax Compliance',
    'home.services.tax.desc': 'Ensure full compliance with Croatian tax regulations and filing requirements.',
    'home.services.accounting.title': 'Accounting Services',
    'home.services.accounting.desc': 'Comprehensive bookkeeping and accounting solutions tailored to your business needs.',
    'home.services.viewAll': 'View All Services',

    // Home - Why Choose Us
    'home.why.heading': 'Why Choose Easy Tax & Accounting?',
    'home.why.foreign.title': 'Specialized in Foreign Businesses',
    'home.why.foreign.desc': 'We understand the unique challenges foreign companies face when establishing operations in Croatia.',
    'home.why.legal.title': 'Complete Legal Support',
    'home.why.legal.desc': 'From company registration to ongoing compliance, we handle all legal and administrative requirements.',
    'home.why.transparent.title': 'Transparent & Reliable',
    'home.why.transparent.desc': 'Clear communication, predictable pricing, and dependable service you can count on.',

    // Home - CTA
    'home.cta.heading': 'Ready to Establish Your Business in Croatia?',
    'home.cta.subtitle': 'Contact us today for a consultation and let us handle your accounting and tax compliance needs.',
    'home.cta.button': 'Get in Touch',

    // Services page
    'services.title': 'Our Services - Easy Tax & Accounting',
    'services.heading': 'Our Services',
    'services.subtitle': 'Comprehensive solutions designed specifically for foreign businesses establishing and operating in Croatia',
    'services.legal.title': 'Legal Establishment Services',
    'services.legal.desc': 'Complete support for establishing your business entity in Croatia',
    'services.legal.f1': 'Company registration and incorporation',
    'services.legal.f2': 'Preparation of all required documentation',
    'services.legal.f3': 'Liaison with Croatian authorities',
    'services.legal.f4': 'Registration with tax and statistical offices',
    'services.legal.f5': 'Bank account opening assistance',
    'services.address.title': 'Business Address Services',
    'services.address.desc': 'Professional business address to establish your Croatian presence',
    'services.address.f1': 'Registered office address in Croatia',
    'services.address.f2': 'Mail handling and forwarding',
    'services.address.f3': 'Meeting room access when needed',
    'services.address.f4': 'Professional business location',
    'services.address.f5': 'Compliance with local regulations',
    'services.tax.title': 'Tax Compliance',
    'services.tax.desc': 'Comprehensive tax services to ensure full compliance',
    'services.tax.f1': 'VAT registration and reporting',
    'services.tax.f2': 'Corporate income tax preparation',
    'services.tax.f3': 'Tax planning and optimization',
    'services.tax.f4': 'Ongoing compliance monitoring',
    'services.tax.f5': 'Communication with tax authorities',
    'services.accounting.title': 'Accounting Services',
    'services.accounting.desc': 'Full-service bookkeeping and financial management',
    'services.accounting.f1': 'Monthly bookkeeping and reconciliation',
    'services.accounting.f2': 'Financial statements preparation',
    'services.accounting.f3': 'Payroll processing',
    'services.accounting.f4': 'Accounts payable and receivable',
    'services.accounting.f5': 'Financial reporting and analysis',
    'services.benefits.heading': 'Why Work With Us',
    'services.benefits.international.title': 'International Expertise',
    'services.benefits.international.desc': 'We specialize in helping foreign businesses navigate Croatian regulations',
    'services.benefits.compliance.title': 'Compliance Guaranteed',
    'services.benefits.compliance.desc': 'Stay fully compliant with all Croatian legal and tax requirements',
    'services.benefits.time.title': 'Time Saving',
    'services.benefits.time.desc': 'Focus on your business while we handle the administrative burden',
    'services.benefits.support.title': 'Dedicated Support',
    'services.benefits.support.desc': 'Personal account manager for all your needs',
    'services.cta.heading': 'Ready to Get Started?',
    'services.cta.subtitle': 'Contact us today to discuss how we can help establish and manage your business in Croatia',
    'services.cta.button': 'Contact Us',

    // Articles page
    'articles.title': 'Articles & Insights - Easy Tax & Accounting',
    'articles.heading': 'Articles & Insights',
    'articles.subtitle': 'Expert guidance and up-to-date information about doing business in Croatia',
    'articles.featured': 'Featured',
    'articles.readArticle': 'Read Article',
    'articles.readMore': 'Read more',
    'articles.newsletter.heading': 'Stay Updated',
    'articles.newsletter.subtitle': 'Subscribe to our newsletter for the latest insights on Croatian business regulations and tax updates',
    'articles.newsletter.placeholder': 'Enter your email',
    'articles.newsletter.button': 'Subscribe',
    'articles.cat.all': 'All',
    'articles.cat.legal': 'Legal',
    'articles.cat.tax': 'Tax',
    'articles.cat.accounting': 'Accounting',
    'articles.cat.business': 'Business',

    // Article items
    'article.1.title': 'Complete Guide to Registering a Business in Croatia for Foreign Investors',
    'article.1.excerpt': 'Learn everything you need to know about establishing your company in Croatia, from choosing the right business structure to final registration.',
    'article.1.date': 'March 10, 2026',
    'article.1.readTime': '8 min read',
    'article.2.title': 'Understanding Croatian Tax System: VAT, Corporate Tax, and Income Tax',
    'article.2.excerpt': 'A comprehensive overview of the Croatian tax system and what foreign businesses need to know about compliance and optimization.',
    'article.2.date': 'March 5, 2026',
    'article.2.readTime': '10 min read',
    'article.3.title': 'Why Croatia is an Attractive Destination for International Business',
    'article.3.excerpt': 'Discover the benefits of establishing your business in Croatia, from strategic location to EU membership advantages.',
    'article.3.date': 'February 28, 2026',
    'article.3.readTime': '6 min read',
    'article.4.title': 'Bookkeeping Requirements for Foreign Companies in Croatia',
    'article.4.excerpt': 'Essential information about maintaining proper accounting records and meeting Croatian bookkeeping standards.',
    'article.4.date': 'February 20, 2026',
    'article.4.readTime': '7 min read',
    'article.5.title': 'VAT Registration in Croatia: When and How to Register',
    'article.5.excerpt': 'Learn about VAT thresholds, registration procedures, and ongoing compliance requirements for businesses in Croatia.',
    'article.5.date': 'February 15, 2026',
    'article.5.readTime': '9 min read',
    'article.6.title': 'Digital Nomad Visa and Business Opportunities in Croatia',
    'article.6.excerpt': "Explore how Croatia's digital nomad visa can benefit remote workers and the business opportunities it creates.",
    'article.6.date': 'February 8, 2026',
    'article.6.readTime': '5 min read',

    // Article detail
    'articleDetail.backToArticles': 'Back to Articles',
    'articleDetail.by': 'By',
    'articleDetail.author': 'Easy Tax & Accounting Team',
    'articleDetail.cta.heading': 'Need Help with Business Registration?',
    'articleDetail.cta.subtitle': 'Our team of experts is ready to assist you with establishing your business in Croatia',
    'articleDetail.cta.button': 'Contact Us',
    'articleDetail.related': 'Related Articles',
    'articleDetail.related.1.title': 'Understanding Croatian Tax System',
    'articleDetail.related.1.excerpt': 'A comprehensive overview of the Croatian tax system...',
    'articleDetail.related.2.title': 'Bookkeeping Requirements for Foreign Companies',
    'articleDetail.related.2.excerpt': 'Essential information about maintaining proper records...',
    'articleDetail.related.3.title': 'VAT Registration in Croatia',
    'articleDetail.related.3.excerpt': 'Learn about VAT thresholds and registration...',

    // Article content
    'articleDetail.content': `
      <p>Starting a business in Croatia as a foreign investor can be an exciting opportunity. Croatia offers a strategic location, EU membership benefits, and a growing economy. However, navigating the registration process requires understanding local regulations and procedures.</p>

      <h2>Understanding Business Structures in Croatia</h2>
      <p>The first step in registering your business is choosing the right legal structure. The most common forms for foreign investors are:</p>
      <ul>
        <li><strong>Limited Liability Company (d.o.o.)</strong> - The most popular choice for small to medium-sized businesses</li>
        <li><strong>Joint Stock Company (d.d.)</strong> - Suitable for larger enterprises planning to raise capital</li>
        <li><strong>Branch Office</strong> - An extension of a foreign company without separate legal personality</li>
      </ul>

      <h2>Required Documentation</h2>
      <p>To register your company in Croatia, you'll need to prepare several key documents:</p>
      <ul>
        <li>Articles of Association or Memorandum of Association</li>
        <li>Decision on company establishment</li>
        <li>Proof of registered office address</li>
        <li>Identification documents for founders and directors</li>
        <li>Bank confirmation of paid-in capital</li>
      </ul>

      <h2>The Registration Process</h2>
      <p>The registration process in Croatia involves several steps:</p>
      <ol>
        <li><strong>Reserve Company Name</strong> - Check availability and reserve your desired company name</li>
        <li><strong>Deposit Share Capital</strong> - Open a temporary bank account and deposit the minimum required capital</li>
        <li><strong>Notarize Documents</strong> - Have your founding documents notarized by a Croatian notary</li>
        <li><strong>Register with Court Registry</strong> - Submit all documents to the Commercial Court</li>
        <li><strong>Obtain Tax Number</strong> - Register with the Tax Administration</li>
        <li><strong>Register with Statistical Office</strong> - Complete statistical registration</li>
      </ol>

      <h2>Minimum Capital Requirements</h2>
      <p>Different business structures have different minimum capital requirements:</p>
      <ul>
        <li>Limited Liability Company (d.o.o.): 20,000 HRK (approximately 2,650 EUR)</li>
        <li>Joint Stock Company (d.d.): 200,000 HRK (approximately 26,500 EUR)</li>
      </ul>

      <h2>Timeline and Costs</h2>
      <p>The entire registration process typically takes 2-4 weeks, depending on the complexity of your business structure and how quickly you can gather all required documentation. Costs include:</p>
      <ul>
        <li>Court registration fees</li>
        <li>Notary fees</li>
        <li>Legal and administrative services</li>
        <li>Translation and apostille services (if applicable)</li>
      </ul>

      <h2>Post-Registration Requirements</h2>
      <p>After successfully registering your company, you'll need to:</p>
      <ul>
        <li>Register employees with social security and health insurance</li>
        <li>Obtain necessary business permits and licenses</li>
        <li>Set up accounting and bookkeeping systems</li>
        <li>Register for VAT if applicable</li>
      </ul>

      <h2>How We Can Help</h2>
      <p>At Easy Tax & Accounting, we specialize in helping foreign investors navigate the Croatian business registration process. Our services include:</p>
      <ul>
        <li>Complete documentation preparation</li>
        <li>Liaison with Croatian authorities</li>
        <li>Registered office address provision</li>
        <li>Bank account opening assistance</li>
        <li>Ongoing compliance support</li>
      </ul>

      <p>Contact us today to start your business registration journey in Croatia with confidence.</p>
    `,

    // Contact page
    'contact.title': 'Contact Us - Easy Tax & Accounting',
    'contact.heading': 'Get in Touch',
    'contact.subtitle': 'Ready to establish your business in Croatia? Contact us today for a consultation',
    'contact.form.heading': 'Send Us a Message',
    'contact.form.name': 'Full Name *',
    'contact.form.namePlaceholder': 'John Doe',
    'contact.form.email': 'Email Address *',
    'contact.form.emailPlaceholder': 'john@example.com',
    'contact.form.company': 'Company Name',
    'contact.form.companyPlaceholder': 'Your Company',
    'contact.form.phone': 'Phone Number',
    'contact.form.phonePlaceholder': '+385 ...',
    'contact.form.service': 'Service Interested In *',
    'contact.form.servicePlaceholder': 'Select a service',
    'contact.form.serviceLegal': 'Legal Establishment',
    'contact.form.serviceAddress': 'Business Address',
    'contact.form.serviceTax': 'Tax Compliance',
    'contact.form.serviceAccounting': 'Accounting Services',
    'contact.form.serviceConsultation': 'General Consultation',
    'contact.form.message': 'Message *',
    'contact.form.messagePlaceholder': 'Tell us about your needs...',
    'contact.form.submit': 'Send Message',
    'contact.form.thankYou': 'Thank You!',
    'contact.form.thankYouMsg': "We've received your message and will get back to you shortly.",
    'contact.info.heading': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.office': 'Office',
    'contact.hours.heading': 'Office Hours',
    'contact.hours.weekdays': 'Monday - Friday:',
    'contact.hours.weekdaysValue': '9:00 AM - 5:00 PM',
    'contact.hours.saturday': 'Saturday:',
    'contact.hours.saturdayValue': 'By Appointment',
    'contact.hours.sunday': 'Sunday:',
    'contact.hours.sundayValue': 'Closed',
    'contact.faq.heading': 'Frequently Asked Questions',
    'contact.faq.1.q': 'How long does it take to register a company in Croatia?',
    'contact.faq.1.a': 'The registration process typically takes 2-4 weeks, depending on the complexity and how quickly all documentation is prepared.',
    'contact.faq.2.q': 'Do I need to be physically present in Croatia to register a company?',
    'contact.faq.2.a': 'Not necessarily. We can handle most of the process on your behalf with proper authorization, though some steps may require your presence or notarized documentation.',
    'contact.faq.3.q': 'What is the minimum capital required to start a business?',
    'contact.faq.3.a': 'For a Limited Liability Company (d.o.o.), the minimum capital is 20,000 HRK (approximately 2,650 EUR).',
    'contact.faq.4.q': 'Do you provide ongoing support after company registration?',
    'contact.faq.4.a': 'Yes, we offer comprehensive ongoing services including accounting, tax compliance, and legal support to ensure your business operates smoothly.',
  },
  hr: {
    // Nav
    'nav.home': 'Naslovnica',
    'nav.services': 'Usluge',
    'nav.articles': 'Članci',
    'nav.contact': 'Kontakt',

    // Footer
    'footer.description': 'Profesionalne porezne i računovodstvene usluge za strane tvrtke u Hrvatskoj.',
    'footer.quickLinks': 'Brze Poveznice',
    'footer.services': 'Usluge',
    'footer.copyright': 'Easy Tax & Accounting. Sva prava pridržana.',
    'footer.legalEstablishment': 'Pravno Osnivanje',
    'footer.businessAddress': 'Poslovna Adresa',
    'footer.taxCompliance': 'Porezna Usklađenost',
    'footer.accountingServices': 'Računovodstvene Usluge',

    // Home - Hero
    'home.title': 'Easy Tax & Accounting - Vaš Pouzdani Partner za Poslovanje u Hrvatskoj',
    'home.hero.heading': 'Vaš Pouzdani Partner<br />za Poslovanje u Hrvatskoj',
    'home.hero.subtitle': 'Sveobuhvatne porezne, računovodstvene i pravne usluge za strane tvrtke koje uspostavljaju poslovanje u Hrvatskoj',
    'home.hero.cta': 'Započnite',
    'home.hero.ctaSecondary': 'Naše Usluge',

    // Home - Services
    'home.services.heading': 'Naše Usluge',
    'home.services.subtitle': 'Sveobuhvatna rješenja za strane tvrtke koje uspostavljaju i posluju u Hrvatskoj',
    'home.services.legal.title': 'Pravno Osnivanje',
    'home.services.legal.desc': 'Kompletne usluge registracije tvrtke i pravnog ustroja za strane tvrtke u Hrvatskoj.',
    'home.services.address.title': 'Poslovna Adresa',
    'home.services.address.desc': 'Profesionalne usluge poslovne adrese za uspostavljanje vaše prisutnosti u Hrvatskoj.',
    'home.services.tax.title': 'Porezna Usklađenost',
    'home.services.tax.desc': 'Osigurajte potpunu usklađenost s hrvatskim poreznim propisima i zahtjevima za podnošenje prijava.',
    'home.services.accounting.title': 'Računovodstvene Usluge',
    'home.services.accounting.desc': 'Sveobuhvatna rješenja za vođenje knjiga i računovodstvo prilagođena vašim poslovnim potrebama.',
    'home.services.viewAll': 'Pogledajte Sve Usluge',

    // Home - Why Choose Us
    'home.why.heading': 'Zašto Odabrati Easy Tax & Accounting?',
    'home.why.foreign.title': 'Specijalizirani za Strane Tvrtke',
    'home.why.foreign.desc': 'Razumijemo jedinstvene izazove s kojima se susreću strane tvrtke pri uspostavljanju poslovanja u Hrvatskoj.',
    'home.why.legal.title': 'Potpuna Pravna Podrška',
    'home.why.legal.desc': 'Od registracije tvrtke do tekuće usklađenosti, brinemo se o svim pravnim i administrativnim zahtjevima.',
    'home.why.transparent.title': 'Transparentni i Pouzdani',
    'home.why.transparent.desc': 'Jasna komunikacija, predvidljive cijene i pouzdana usluga na koju se možete osloniti.',

    // Home - CTA
    'home.cta.heading': 'Spremni za Uspostavljanje Poslovanja u Hrvatskoj?',
    'home.cta.subtitle': 'Kontaktirajte nas danas za konzultaciju i prepustite nam vaše računovodstvene i porezne potrebe.',
    'home.cta.button': 'Kontaktirajte Nas',

    // Services page
    'services.title': 'Naše Usluge - Easy Tax & Accounting',
    'services.heading': 'Naše Usluge',
    'services.subtitle': 'Sveobuhvatna rješenja posebno dizajnirana za strane tvrtke koje uspostavljaju i posluju u Hrvatskoj',
    'services.legal.title': 'Usluge Pravnog Osnivanja',
    'services.legal.desc': 'Kompletna podrška za osnivanje vašeg poslovnog subjekta u Hrvatskoj',
    'services.legal.f1': 'Registracija i osnivanje tvrtke',
    'services.legal.f2': 'Priprema sve potrebne dokumentacije',
    'services.legal.f3': 'Komunikacija s hrvatskim tijelima',
    'services.legal.f4': 'Registracija kod poreznih i statističkih ureda',
    'services.legal.f5': 'Pomoć pri otvaranju bankovnog računa',
    'services.address.title': 'Usluge Poslovne Adrese',
    'services.address.desc': 'Profesionalna poslovna adresa za uspostavljanje vaše prisutnosti u Hrvatskoj',
    'services.address.f1': 'Registrirano sjedište u Hrvatskoj',
    'services.address.f2': 'Zaprimanje i prosljeđivanje pošte',
    'services.address.f3': 'Pristup prostoriji za sastanke po potrebi',
    'services.address.f4': 'Profesionalna poslovna lokacija',
    'services.address.f5': 'Usklađenost s lokalnim propisima',
    'services.tax.title': 'Porezna Usklađenost',
    'services.tax.desc': 'Sveobuhvatne porezne usluge za potpunu usklađenost',
    'services.tax.f1': 'Registracija i izvješćivanje o PDV-u',
    'services.tax.f2': 'Priprema poreza na dobit',
    'services.tax.f3': 'Porezno planiranje i optimizacija',
    'services.tax.f4': 'Tekuće praćenje usklađenosti',
    'services.tax.f5': 'Komunikacija s poreznim tijelima',
    'services.accounting.title': 'Računovodstvene Usluge',
    'services.accounting.desc': 'Kompletno vođenje knjiga i financijsko upravljanje',
    'services.accounting.f1': 'Mjesečno vođenje knjiga i usklađivanje',
    'services.accounting.f2': 'Priprema financijskih izvješća',
    'services.accounting.f3': 'Obrada plaća',
    'services.accounting.f4': 'Upravljanje potraživanjima i obvezama',
    'services.accounting.f5': 'Financijsko izvješćivanje i analiza',
    'services.benefits.heading': 'Zašto Raditi s Nama',
    'services.benefits.international.title': 'Međunarodno Iskustvo',
    'services.benefits.international.desc': 'Specijalizirani smo za pomoć stranim tvrtkama u snalaženju s hrvatskim propisima',
    'services.benefits.compliance.title': 'Zajamčena Usklađenost',
    'services.benefits.compliance.desc': 'Ostanite potpuno usklađeni sa svim hrvatskim pravnim i poreznim zahtjevima',
    'services.benefits.time.title': 'Ušteda Vremena',
    'services.benefits.time.desc': 'Fokusirajte se na svoje poslovanje dok mi brinemo o administrativnim obvezama',
    'services.benefits.support.title': 'Posvećena Podrška',
    'services.benefits.support.desc': 'Osobni voditelj računa za sve vaše potrebe',
    'services.cta.heading': 'Spremni za Početak?',
    'services.cta.subtitle': 'Kontaktirajte nas danas da razgovaramo o tome kako možemo pomoći u osnivanju i vođenju vašeg poslovanja u Hrvatskoj',
    'services.cta.button': 'Kontaktirajte Nas',

    // Articles page
    'articles.title': 'Članci i Uvidi - Easy Tax & Accounting',
    'articles.heading': 'Članci i Uvidi',
    'articles.subtitle': 'Stručne smjernice i ažurne informacije o poslovanju u Hrvatskoj',
    'articles.featured': 'Istaknuto',
    'articles.readArticle': 'Pročitajte Članak',
    'articles.readMore': 'Pročitajte više',
    'articles.newsletter.heading': 'Budite u Toku',
    'articles.newsletter.subtitle': 'Pretplatite se na naš newsletter za najnovije uvide o hrvatskim poslovnim propisima i poreznim ažuriranjima',
    'articles.newsletter.placeholder': 'Unesite svoj email',
    'articles.newsletter.button': 'Pretplatite se',
    'articles.cat.all': 'Sve',
    'articles.cat.legal': 'Pravno',
    'articles.cat.tax': 'Porezi',
    'articles.cat.accounting': 'Računovodstvo',
    'articles.cat.business': 'Poslovanje',

    // Article items
    'article.1.title': 'Kompletni Vodič za Registraciju Tvrtke u Hrvatskoj za Strane Investitore',
    'article.1.excerpt': 'Saznajte sve što trebate znati o osnivanju tvrtke u Hrvatskoj, od odabira prave poslovne strukture do završne registracije.',
    'article.1.date': '10. ožujka 2026.',
    'article.1.readTime': '8 min čitanja',
    'article.2.title': 'Razumijevanje Hrvatskog Poreznog Sustava: PDV, Porez na Dobit i Porez na Dohodak',
    'article.2.excerpt': 'Sveobuhvatan pregled hrvatskog poreznog sustava i što strane tvrtke trebaju znati o usklađenosti i optimizaciji.',
    'article.2.date': '5. ožujka 2026.',
    'article.2.readTime': '10 min čitanja',
    'article.3.title': 'Zašto je Hrvatska Atraktivna Destinacija za Međunarodno Poslovanje',
    'article.3.excerpt': 'Otkrijte prednosti osnivanja poslovanja u Hrvatskoj, od strateške lokacije do prednosti članstva u EU.',
    'article.3.date': '28. veljače 2026.',
    'article.3.readTime': '6 min čitanja',
    'article.4.title': 'Zahtjevi za Vođenje Knjiga za Strane Tvrtke u Hrvatskoj',
    'article.4.excerpt': 'Bitne informacije o vođenju urednih računovodstvenih evidencija i ispunjavanju hrvatskih standarda vođenja knjiga.',
    'article.4.date': '20. veljače 2026.',
    'article.4.readTime': '7 min čitanja',
    'article.5.title': 'Registracija za PDV u Hrvatskoj: Kada i Kako se Registrirati',
    'article.5.excerpt': 'Saznajte o pragovima PDV-a, postupcima registracije i tekućim zahtjevima usklađenosti za tvrtke u Hrvatskoj.',
    'article.5.date': '15. veljače 2026.',
    'article.5.readTime': '9 min čitanja',
    'article.6.title': 'Viza za Digitalne Nomade i Poslovne Prilike u Hrvatskoj',
    'article.6.excerpt': 'Istražite kako hrvatska viza za digitalne nomade može koristiti osobama koje rade na daljinu i koje poslovne prilike stvara.',
    'article.6.date': '8. veljače 2026.',
    'article.6.readTime': '5 min čitanja',

    // Article detail
    'articleDetail.backToArticles': 'Natrag na Članke',
    'articleDetail.by': 'Autor:',
    'articleDetail.author': 'Tim Easy Tax & Accounting',
    'articleDetail.cta.heading': 'Trebate Pomoć s Registracijom Tvrtke?',
    'articleDetail.cta.subtitle': 'Naš tim stručnjaka spreman je pomoći vam s uspostavljanjem vašeg poslovanja u Hrvatskoj',
    'articleDetail.cta.button': 'Kontaktirajte Nas',
    'articleDetail.related': 'Povezani Članci',
    'articleDetail.related.1.title': 'Razumijevanje Hrvatskog Poreznog Sustava',
    'articleDetail.related.1.excerpt': 'Sveobuhvatan pregled hrvatskog poreznog sustava...',
    'articleDetail.related.2.title': 'Zahtjevi za Vođenje Knjiga za Strane Tvrtke',
    'articleDetail.related.2.excerpt': 'Bitne informacije o vođenju urednih evidencija...',
    'articleDetail.related.3.title': 'Registracija za PDV u Hrvatskoj',
    'articleDetail.related.3.excerpt': 'Saznajte o pragovima PDV-a i registraciji...',

    // Article content
    'articleDetail.content': `
      <p>Pokretanje poslovanja u Hrvatskoj kao strani investitor može biti uzbudljiva prilika. Hrvatska nudi strateški položaj, prednosti članstva u EU i rastuće gospodarstvo. Međutim, navigacija kroz postupak registracije zahtijeva razumijevanje lokalnih propisa i procedura.</p>

      <h2>Razumijevanje Poslovnih Struktura u Hrvatskoj</h2>
      <p>Prvi korak u registraciji vašeg poslovanja je odabir pravog pravnog oblika. Najčešći oblici za strane investitore su:</p>
      <ul>
        <li><strong>Društvo s ograničenom odgovornošću (d.o.o.)</strong> - Najpopularniji izbor za mala i srednja poduzeća</li>
        <li><strong>Dioničko društvo (d.d.)</strong> - Prikladno za veća poduzeća koja planiraju prikupljanje kapitala</li>
        <li><strong>Podružnica</strong> - Proširenje strane tvrtke bez zasebnog pravnog subjektiviteta</li>
      </ul>

      <h2>Potrebna Dokumentacija</h2>
      <p>Za registraciju tvrtke u Hrvatskoj trebat ćete pripremiti nekoliko ključnih dokumenata:</p>
      <ul>
        <li>Društveni ugovor ili Akt o osnivanju</li>
        <li>Odluka o osnivanju tvrtke</li>
        <li>Dokaz o registriranom sjedištu</li>
        <li>Identifikacijski dokumenti osnivača i direktora</li>
        <li>Potvrda banke o uplaćenom kapitalu</li>
      </ul>

      <h2>Postupak Registracije</h2>
      <p>Postupak registracije u Hrvatskoj uključuje nekoliko koraka:</p>
      <ol>
        <li><strong>Rezervacija Naziva Tvrtke</strong> - Provjerite dostupnost i rezervirajte željeni naziv tvrtke</li>
        <li><strong>Uplata Temeljnog Kapitala</strong> - Otvorite privremeni bankovni račun i uplatite minimalni potrebni kapital</li>
        <li><strong>Ovjera Dokumenata</strong> - Ovjerite osnivačke dokumente kod hrvatskog javnog bilježnika</li>
        <li><strong>Registracija kod Trgovačkog Suda</strong> - Predajte sve dokumente Trgovačkom sudu</li>
        <li><strong>Dobivanje Poreznog Broja</strong> - Registrirajte se kod Porezne uprave</li>
        <li><strong>Registracija kod Statističkog Ureda</strong> - Dovršite statističku registraciju</li>
      </ol>

      <h2>Zahtjevi za Minimalni Kapital</h2>
      <p>Različite poslovne strukture imaju različite zahtjeve za minimalni kapital:</p>
      <ul>
        <li>Društvo s ograničenom odgovornošću (d.o.o.): 20.000 HRK (približno 2.650 EUR)</li>
        <li>Dioničko društvo (d.d.): 200.000 HRK (približno 26.500 EUR)</li>
      </ul>

      <h2>Vremenski Okvir i Troškovi</h2>
      <p>Cjelokupni postupak registracije obično traje 2-4 tjedna, ovisno o složenosti vaše poslovne strukture i brzini prikupljanja sve potrebne dokumentacije. Troškovi uključuju:</p>
      <ul>
        <li>Sudske pristojbe za registraciju</li>
        <li>Javnobilježničke pristojbe</li>
        <li>Pravne i administrativne usluge</li>
        <li>Prijevod i apostille usluge (ako je primjenjivo)</li>
      </ul>

      <h2>Zahtjevi Nakon Registracije</h2>
      <p>Nakon uspješne registracije tvrtke, trebat ćete:</p>
      <ul>
        <li>Registrirati zaposlenike za socijalno i zdravstveno osiguranje</li>
        <li>Pribaviti potrebne poslovne dozvole i licence</li>
        <li>Uspostaviti sustave računovodstva i vođenja knjiga</li>
        <li>Registrirati se za PDV ako je primjenjivo</li>
      </ul>

      <h2>Kako Vam Možemo Pomoći</h2>
      <p>U Easy Tax & Accountingu specijalizirani smo za pomoć stranim investitorima u navigaciji kroz postupak registracije poslovanja u Hrvatskoj. Naše usluge uključuju:</p>
      <ul>
        <li>Kompletnu pripremu dokumentacije</li>
        <li>Komunikaciju s hrvatskim tijelima</li>
        <li>Osiguranje registriranog sjedišta</li>
        <li>Pomoć pri otvaranju bankovnog računa</li>
        <li>Tekuću podršku za usklađenost</li>
      </ul>

      <p>Kontaktirajte nas danas kako biste s povjerenjem započeli svoj put registracije poslovanja u Hrvatskoj.</p>
    `,

    // Contact page
    'contact.title': 'Kontaktirajte Nas - Easy Tax & Accounting',
    'contact.heading': 'Kontaktirajte Nas',
    'contact.subtitle': 'Spremni ste uspostaviti poslovanje u Hrvatskoj? Kontaktirajte nas danas za konzultaciju',
    'contact.form.heading': 'Pošaljite Nam Poruku',
    'contact.form.name': 'Ime i Prezime *',
    'contact.form.namePlaceholder': 'Ivan Horvat',
    'contact.form.email': 'Email Adresa *',
    'contact.form.emailPlaceholder': 'ivan@primjer.com',
    'contact.form.company': 'Naziv Tvrtke',
    'contact.form.companyPlaceholder': 'Vaša Tvrtka',
    'contact.form.phone': 'Broj Telefona',
    'contact.form.phonePlaceholder': '+385 ...',
    'contact.form.service': 'Usluga koja Vas Zanima *',
    'contact.form.servicePlaceholder': 'Odaberite uslugu',
    'contact.form.serviceLegal': 'Pravno Osnivanje',
    'contact.form.serviceAddress': 'Poslovna Adresa',
    'contact.form.serviceTax': 'Porezna Usklađenost',
    'contact.form.serviceAccounting': 'Računovodstvene Usluge',
    'contact.form.serviceConsultation': 'Opća Konzultacija',
    'contact.form.message': 'Poruka *',
    'contact.form.messagePlaceholder': 'Opišite nam svoje potrebe...',
    'contact.form.submit': 'Pošaljite Poruku',
    'contact.form.thankYou': 'Hvala Vam!',
    'contact.form.thankYouMsg': 'Primili smo vašu poruku i javit ćemo vam se u najkraćem mogućem roku.',
    'contact.info.heading': 'Kontakt Informacije',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefon',
    'contact.info.office': 'Ured',
    'contact.hours.heading': 'Radno Vrijeme',
    'contact.hours.weekdays': 'Ponedjeljak - Petak:',
    'contact.hours.weekdaysValue': '9:00 - 17:00',
    'contact.hours.saturday': 'Subota:',
    'contact.hours.saturdayValue': 'Po Dogovoru',
    'contact.hours.sunday': 'Nedjelja:',
    'contact.hours.sundayValue': 'Zatvoreno',
    'contact.faq.heading': 'Često Postavljana Pitanja',
    'contact.faq.1.q': 'Koliko vremena treba za registraciju tvrtke u Hrvatskoj?',
    'contact.faq.1.a': 'Postupak registracije obično traje 2-4 tjedna, ovisno o složenosti i brzini pripreme sve dokumentacije.',
    'contact.faq.2.q': 'Trebam li biti fizički prisutan u Hrvatskoj za registraciju tvrtke?',
    'contact.faq.2.a': 'Ne nužno. Većinu postupka možemo obaviti u vaše ime uz odgovarajuću ovlast, iako neki koraci mogu zahtijevati vašu prisutnost ili ovjerenu dokumentaciju.',
    'contact.faq.3.q': 'Koji je minimalni kapital potreban za pokretanje poslovanja?',
    'contact.faq.3.a': 'Za društvo s ograničenom odgovornošću (d.o.o.), minimalni kapital iznosi 20.000 HRK (približno 2.650 EUR).',
    'contact.faq.4.q': 'Pružate li tekuću podršku nakon registracije tvrtke?',
    'contact.faq.4.a': 'Da, nudimo sveobuhvatne tekuće usluge uključujući računovodstvo, poreznu usklađenost i pravnu podršku kako bismo osigurali nesmetano poslovanje vaše tvrtke.',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['en'];
