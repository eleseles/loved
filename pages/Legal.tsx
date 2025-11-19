
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { ChevronDownIcon, SearchIcon, MailIcon, MessageCircleIcon, PrinterIcon, DownloadIcon, DocumentTextIcon } from '../components/Icons';

// --- SHARED LAYOUT COMPONENTS ---

const LegalLayout: React.FC<{ 
  title: string; 
  lastUpdated: string; 
  children: React.ReactNode;
  sidebarItems: { id: string; label: string }[];
}> = ({ title, lastUpdated, children, sidebarItems }) => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 border border-zinc-200 text-zinc-600 text-xs font-semibold tracking-wider uppercase mb-6">
            <DocumentTextIcon className="w-4 h-4" /> Legal Document
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-zinc-500 font-mono text-sm">
            Last Updated: <span className="text-zinc-900">{lastUpdated}</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Sidebar Navigation (Sticky) */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <h4 className="text-zinc-900 font-serif font-bold mb-4 text-lg">Contents</h4>
                <ul className="space-y-3 border-l border-zinc-200 pl-4">
                  {sidebarItems.map((item) => (
                    <li key={item.id}>
                      <button 
                        onClick={() => scrollToSection(item.id)}
                        className="text-sm text-zinc-500 hover:text-zinc-900 hover:underline text-left transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Document Actions Widget */}
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
                <h5 className="font-medium text-zinc-900 mb-3 text-sm">Document Actions</h5>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors group">
                    <span>Print Policy</span>
                    <PrinterIcon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900" />
                  </button>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors group">
                    <span>Download PDF</span>
                    <DownloadIcon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7 prose prose-zinc prose-lg max-w-none">
            {children}
          </div>

          {/* Mobile/Right Widget Column (Summary) */}
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-xl">
                <h4 className="font-serif font-bold text-lg mb-4">Key Takeaways</h4>
                <ul className="space-y-4 text-sm text-zinc-300">
                   <li className="flex gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>We do not sell your photos or data.</span>
                   </li>
                   <li className="flex gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Images are deleted after processing.</span>
                   </li>
                   <li className="flex gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>You own the copyright to your art.</span>
                   </li>
                </ul>
             </div>
             
             <div className="bg-white border border-zinc-200 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-zinc-900 font-serif font-bold mb-2">Questions?</p>
                <p className="text-zinc-500 text-xs mb-4">Our legal team is available to clarify specific clauses.</p>
                <a href="mailto:legal@memorialstudio.com" className="text-sm font-medium text-zinc-900 border-b border-zinc-900 hover:opacity-70">
                  Contact Legal Team
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- PRIVACY PAGE ---

export const PrivacyPage: React.FC = () => {
  const sidebarItems = [
    { id: 'collection', label: '1. Information We Collect' },
    { id: 'usage', label: '2. How We Use Data' },
    { id: 'sharing', label: '3. Data Sharing' },
    { id: 'security', label: '4. Security' },
    { id: 'rights', label: '5. Your Rights' },
  ];

  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="February 24, 2025"
      sidebarItems={sidebarItems}
    >
      <SEO title="Privacy Policy" description="Privacy Policy for Memorial Art Studio." canonical="/privacy" />
      
      <div className="lead text-xl text-zinc-600 font-light mb-12 border-l-4 border-zinc-900 pl-6 italic">
        Your privacy is paramount. This policy outlines exactly how we handle the sensitive memories you entrust to us.
      </div>

      <section id="collection" className="scroll-mt-28">
        <h3>1. Information We Collect</h3>
        <p>
          We collect minimal data necessary to provide our service. This includes:
        </p>
        <ul>
          <li><strong>Uploaded Images:</strong> The photos you provide for generation.</li>
          <li><strong>Usage Data:</strong> Anonymized metrics about how you interact with our website.</li>
          <li><strong>Payment Information:</strong> Processed securely via Stripe (we do not store card numbers).</li>
        </ul>
      </section>

      <section id="usage" className="scroll-mt-28">
        <h3>2. How We Use Your Information</h3>
        <p>
          The primary use of your data is to operate the AI generation tool. Specifically:
        </p>
        <ul>
          <li><strong>Image Processing:</strong> Your photos are temporarily processed by our AI provider (Google Gemini) to generate the portrait.</li>
          <li><strong>Service Improvement:</strong> We analyze aggregated, non-personal data to improve generation quality.</li>
          <li><strong>Communication:</strong> We use your email to send your finished portraits and receipts.</li>
        </ul>
        <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 text-sm text-zinc-700 my-6">
          <strong>Note on Facial Data:</strong> We do not build biometric profiles or perform facial recognition for surveillance purposes.
        </div>
      </section>

      <section id="sharing" className="scroll-mt-28">
        <h3>3. Data Sharing</h3>
        <p>
          We do <strong>not</strong> sell your personal data to third parties. We share data only with essential service providers:
        </p>
        <ul>
          <li><strong>Cloud Providers:</strong> For hosting secure servers.</li>
          <li><strong>Payment Processors:</strong> For billing.</li>
          <li><strong>AI Partners:</strong> Strictly for the generation request duration.</li>
        </ul>
      </section>

      <section id="security" className="scroll-mt-28">
        <h3>4. Security Measures</h3>
        <p>
          We employ banking-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your photos are automatically deleted from our processing servers within 24 hours of generation to ensure privacy.
        </p>
      </section>

      <section id="rights" className="scroll-mt-28">
        <h3>5. Your Rights (GDPR & CCPA)</h3>
        <p>
          Depending on your location, you have the right to:
        </p>
        <ul>
          <li>Request a copy of all data we hold about you.</li>
          <li>Request permanent deletion of your account and data ("Right to be Forgotten").</li>
          <li>Opt-out of any non-essential processing.</li>
        </ul>
      </section>
    </LegalLayout>
  );
};

// --- TERMS PAGE ---

export const TermsPage: React.FC = () => {
  const sidebarItems = [
    { id: 'acceptance', label: '1. Acceptance' },
    { id: 'use', label: '2. Acceptable Use' },
    { id: 'ip', label: '3. Intellectual Property' },
    { id: 'refunds', label: '4. Refunds' },
    { id: 'limitation', label: '5. Liability' },
  ];

  return (
    <LegalLayout 
      title="Terms of Service" 
      lastUpdated="February 24, 2025"
      sidebarItems={sidebarItems}
    >
      <SEO title="Terms of Service" description="Terms of Service for Memorial Art Studio." canonical="/terms" />
      
      <div className="lead text-xl text-zinc-600 font-light mb-12 border-l-4 border-zinc-900 pl-6 italic">
        Please read these terms carefully before using our memorial portrait services.
      </div>

      <section id="acceptance" className="scroll-mt-28">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using Memorial Art Studio, you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you may not use the service.
        </p>
      </section>

      <section id="use" className="scroll-mt-28">
        <h3>2. Acceptable Use Policy</h3>
        <p>
          You agree not to misuse the Service. You are prohibited from uploading:
        </p>
        <ul>
          <li>Content that infringes on the intellectual property rights of others.</li>
          <li>Illegal, pornographic, offensive, or hateful content.</li>
          <li>Deepfakes intended to deceive or harm.</li>
        </ul>
        <p>We reserve the right to ban users who violate these guidelines without refund.</p>
      </section>

      <section id="ip" className="scroll-mt-28">
        <h3>3. Intellectual Property</h3>
        <p>
          <strong>Your Content:</strong> You retain all ownership rights to the original photos you upload.
        </p>
        <p>
          <strong>Generated Content:</strong> You own the commercial rights to the images generated by our service, provided you have paid the applicable fees. We claim no ownership over your personal memorial art.
        </p>
      </section>

      <section id="refunds" className="scroll-mt-28">
        <h3>4. Refund Policy</h3>
        <p>
          Due to the digital nature of the product, refunds are generally discretionary. However, under our "Love it or Free" guarantee, if the generated image is technically defective or bears no resemblance to the subjects, we will offer a refund or free regeneration upon review.
        </p>
      </section>

      <section id="limitation" className="scroll-mt-28">
        <h3>5. Limitation of Liability</h3>
        <p>
          Memorial Art Studio is provided "as is". We are not liable for any indirect, incidental, or consequential damages arising from the use of our service. The AI may occasionally produce unpredictable results; users accept this risk.
        </p>
      </section>
    </LegalLayout>
  );
};

// --- FAQ PAGE (Kept as previously designed) ---

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ['General', 'Creation Process', 'Pricing & Refunds', 'Privacy & Security'];

  const allFaqs = [
    {
      category: 'General',
      question: "What is Memorial Studio?",
      answer: "Memorial Studio is an AI-powered artistic service that allows you to combine separate photos of people (such as deceased loved ones and living family members) into a single, unified artistic portrait."
    },
    {
      category: 'General',
      question: "Is the result suitable for printing?",
      answer: "Absolutely. We generate ultra-high resolution images (300 DPI equivalent) that are perfect for framing. Many customers print them on canvas, poster paper, or use them for memorial cards."
    },
    {
      category: 'Creation Process',
      question: "Do I need professional photos?",
      answer: "No. While clearer photos yield better results, our AI is trained to enhance and reconstruct details from older or slightly blurry photographs common in family albums."
    },
    {
      category: 'Creation Process',
      question: "Can I add a pet?",
      answer: "Yes! Our system recognizes pets just as well as humans. You can upload a photo of a beloved pet to be included in the family portrait."
    },
    {
      category: 'Creation Process',
      question: "How long does it take?",
      answer: "The generation process typically takes between 10 to 30 seconds, depending on the complexity of the request and server load."
    },
    {
      category: 'Pricing & Refunds',
      question: "Do credits expire?",
      answer: "No. Purchased credits or bundles never expire. You can use them whenever you are ready."
    },
    {
      category: 'Pricing & Refunds',
      question: "What is your refund policy?",
      answer: "We offer a 'Love it or Free' guarantee. If the AI generates a result that has significant distortions or doesn't resemble your loved one, contact support for a full refund or free regeneration credits."
    },
    {
      category: 'Privacy & Security',
      question: "Is my data private?",
      answer: "Your privacy is our priority. Photos are processed securely for the sole purpose of generating your artwork and are deleted from our processing servers shortly after generation. We do not sell your data."
    },
    {
      category: 'Privacy & Security',
      question: "Do you own the copyright?",
      answer: "No. You retain full ownership of your original photos and the generated artwork."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter logic
  const filteredFaqs = allFaqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    
    return searchTerm ? matchesSearch : matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
       <SEO title="FAQ" description="Frequently Asked Questions about Memorial Art Studio." canonical="/faq" />
      
      {/* Hero Section */}
      <div className="bg-zinc-50 border-b border-zinc-200 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6">How can we help?</h1>
          <p className="text-zinc-500 text-lg mb-8">Search for answers about our creation process, pricing, and more.</p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Type your question..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-zinc-300 focus:border-zinc-900 focus:ring-0 shadow-sm outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Category Tabs (Hidden if searching) */}
        {!searchTerm && (
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-4">
           {filteredFaqs.length > 0 ? (
             filteredFaqs.map((faq, index) => (
               <div key={index} className="bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all hover:shadow-sm">
                  <button 
                     onClick={() => toggleAccordion(index)}
                     className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-zinc-50 transition-colors"
                  >
                     <span className="font-medium text-zinc-900 text-lg">{faq.question}</span>
                     <ChevronDownIcon className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                     className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 py-5 border-t border-zinc-100' : 'max-h-0'}`}
                  >
                     <div className="prose prose-zinc max-w-none">
                       <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                     </div>
                  </div>
               </div>
             ))
           ) : (
             <div className="text-center py-12">
               <p className="text-zinc-500">No matching questions found.</p>
               <button onClick={() => setSearchTerm('')} className="text-zinc-900 underline mt-2">Clear search</button>
             </div>
           )}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Still need help?</h2>
            <p className="text-zinc-400 mb-8">Our team is available 7 days a week to answer your questions.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:support@memorialstudio.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors">
                <MailIcon className="w-5 h-5" />
                Email Support
              </a>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-full font-medium hover:bg-zinc-700 transition-colors">
                <MessageCircleIcon className="w-5 h-5" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
