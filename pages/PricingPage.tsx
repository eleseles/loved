
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckIcon, GiftIcon, StarIcon, CheckCircleIcon, XCircleIcon, ChevronDownIcon, MinusIcon } from '../components/Icons';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'single' | 'bundle'>('single');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const billingFaqs = [
    {
      question: "Do credits expire?",
      answer: "Purchased credits never expire. You can buy a bundle today and use them whenever you have a new photo to create."
    },
    {
      question: "What if I'm not happy with the result?",
      answer: "We offer a 100% satisfaction guarantee. If the AI generates a result that has significant distortions or doesn't resemble your loved one, simply contact support for a full refund or free regeneration credits."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Since we operate on a pay-per-download model rather than a monthly subscription, you can simply purchase a larger bundle next time to get the best volume discount."
    },
    {
      question: "Is payment secure?",
      answer: "Yes, all payments are processed via Stripe with bank-level AES-256 encryption. We do not store your credit card details."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="Pricing & Plans"
        description="Affordable pricing for professional AI memorial portraits. Choose the plan that fits your needs."
        canonical="/pricing"
      />

      {/* --- HERO HEADER --- */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-white/50 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-200/50 text-zinc-600 text-xs font-bold tracking-widest uppercase mb-6">
            Simple & Transparent
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
            Preserve Memories,<br /> Not Subscriptions
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Pay only for the portraits you love. No monthly fees, no hidden costs. 
            High-resolution downloads suitable for large format printing.
          </p>
        </div>
      </section>

      {/* --- PRICING CARDS --- */}
      <section className="py-20 bg-white -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            
            {/* TIER 1: Single */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 border-b border-zinc-100 pb-6">
                <h3 className="text-xl font-serif font-medium text-zinc-900">Single Portrait</h3>
                <p className="text-sm text-zinc-500 mt-2">One-time masterpiece creation.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-zinc-900">$19</span>
                  <span className="text-zinc-400 ml-2">/image</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>1 High-Res Download</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>300 DPI Print Quality</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>Standard Processing</span>
                </li>
              </ul>
              <Link to="/create" className="w-full py-4 rounded-xl border border-zinc-200 text-zinc-900 font-semibold hover:bg-zinc-50 transition-colors text-center">
                Create Single
              </Link>
            </div>

            {/* TIER 2: Bundle (Featured) */}
            <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden h-full ring-4 ring-zinc-100">
              <div className="absolute top-0 right-0 bg-white text-zinc-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider z-10">
                Best Value
              </div>
              {/* Ambient glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-700 rounded-full blur-3xl opacity-20"></div>
              
              <div className="mb-6 border-b border-zinc-800 pb-6 relative z-10">
                <h3 className="text-xl font-serif font-medium text-white">Memory Bundle</h3>
                <p className="text-sm text-zinc-400 mt-2">Perfect for trying different styles.</p>
              </div>
              <div className="mb-6 relative z-10">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$39</span>
                  <span className="text-zinc-400 ml-2">/3 images</span>
                </div>
                <p className="text-xs text-green-400 mt-2 font-medium">Save 30% compared to single</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircleIcon className="w-5 h-5 text-white shrink-0" />
                  <span className="font-medium text-white">3 High-Res Downloads</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircleIcon className="w-5 h-5 text-white shrink-0" />
                  <span>Prioritized Fast Generation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircleIcon className="w-5 h-5 text-white shrink-0" />
                  <span>All Art Styles Included</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircleIcon className="w-5 h-5 text-white shrink-0" />
                  <span>Free Retouches (1x)</span>
                </li>
              </ul>
              <Link to="/create" className="w-full py-4 rounded-xl bg-white text-zinc-900 font-bold hover:bg-zinc-200 transition-colors text-center shadow-lg relative z-10">
                Get Bundle
              </Link>
            </div>

            {/* TIER 3: Studio */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 border-b border-zinc-100 pb-6">
                <h3 className="text-xl font-serif font-medium text-zinc-900">Studio Pass</h3>
                <p className="text-sm text-zinc-500 mt-2">For large families & events.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-zinc-900">$89</span>
                  <span className="text-zinc-400 ml-2">/10 images</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>10 High-Res Downloads</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>Commercial Usage Rights</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>Dedicated Email Support</span>
                </li>
              </ul>
              <Link to="/create" className="w-full py-4 rounded-xl border border-zinc-200 text-zinc-900 font-semibold hover:bg-zinc-50 transition-colors text-center">
                Get Studio Pass
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURE COMPARISON TABLE --- */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Compare Features</h2>
            <p className="text-zinc-500">Detailed breakdown of what is included.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left py-4 px-6 text-zinc-500 font-medium text-sm w-1/3">Features</th>
                  <th className="text-center py-4 px-6 text-zinc-900 font-serif font-bold text-lg w-1/5">Single</th>
                  <th className="text-center py-4 px-6 text-zinc-900 font-serif font-bold text-lg w-1/5 bg-zinc-100 rounded-t-xl">Bundle</th>
                  <th className="text-center py-4 px-6 text-zinc-900 font-serif font-bold text-lg w-1/5">Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                <tr>
                  <td className="py-4 px-6 text-zinc-600 font-medium">Image Quantity</td>
                  <td className="py-4 px-6 text-center text-zinc-600">1 Portrait</td>
                  <td className="py-4 px-6 text-center text-zinc-900 font-bold bg-zinc-50">3 Portraits</td>
                  <td className="py-4 px-6 text-center text-zinc-600">10 Portraits</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-zinc-600 font-medium">Resolution</td>
                  <td className="py-4 px-6 text-center text-zinc-600">4k (300 DPI)</td>
                  <td className="py-4 px-6 text-center text-zinc-900 font-bold bg-zinc-50">4k (300 DPI)</td>
                  <td className="py-4 px-6 text-center text-zinc-600">4k (300 DPI)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-zinc-600 font-medium">Generation Speed</td>
                  <td className="py-4 px-6 text-center text-zinc-600">Standard</td>
                  <td className="py-4 px-6 text-center text-zinc-900 font-bold bg-zinc-50">Priority</td>
                  <td className="py-4 px-6 text-center text-zinc-600">Priority</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-zinc-600 font-medium">Watermark</td>
                  <td className="py-4 px-6 text-center text-zinc-600">Removed</td>
                  <td className="py-4 px-6 text-center text-zinc-900 font-bold bg-zinc-50">Removed</td>
                  <td className="py-4 px-6 text-center text-zinc-600">Removed</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-zinc-600 font-medium">Retouching Support</td>
                  <td className="py-4 px-6 text-center flex justify-center"><XCircleIcon className="w-5 h-5 text-zinc-300"/></td>
                  <td className="py-4 px-6 text-center bg-zinc-50">
                    <div className="flex justify-center"><CheckCircleIcon className="w-5 h-5 text-zinc-900"/></div>
                  </td>
                  <td className="py-4 px-6 text-center flex justify-center"><CheckCircleIcon className="w-5 h-5 text-zinc-900"/></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-zinc-600 font-medium">Commercial License</td>
                  <td className="py-4 px-6 text-center flex justify-center"><XCircleIcon className="w-5 h-5 text-zinc-300"/></td>
                  <td className="py-4 px-6 text-center bg-zinc-50 flex justify-center">
                    <XCircleIcon className="w-5 h-5 text-zinc-300"/>
                  </td>
                  <td className="py-4 px-6 text-center flex justify-center"><CheckCircleIcon className="w-5 h-5 text-zinc-900"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- REFERRAL PROGRAM --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -skew-x-12 translate-x-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-12 md:p-16 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                <GiftIcon className="w-4 h-4" /> Referral Program
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Give $10,<br /> Get $10.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Share the gift of memory. When a friend purchases their first portrait using your link, you both receive credits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:bg-white/20 focus:border-white/30 w-full md:w-auto min-w-[260px]"
                />
                <button className="px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition-colors shadow-lg whitespace-nowrap">
                  Invite Friends
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
               <div className="relative w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl border border-zinc-700/50 shadow-2xl flex flex-col justify-between p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-start">
                     <span className="text-white font-serif font-bold text-xl">Gift Card</span>
                     <span className="text-zinc-500 font-mono text-xs">MEMORIAL-STUDIO</span>
                  </div>
                  <div className="text-right">
                     <span className="block text-zinc-400 text-xs uppercase tracking-wider mb-1">Value</span>
                     <span className="text-4xl font-bold text-white">$10.00</span>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- BILLING FAQ --- */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Billing Questions</h2>
              <p className="text-zinc-500">Common questions about payments and credits.</p>
            </div>
            
            <div className="space-y-4">
               {billingFaqs.map((faq, index) => (
                 <div key={index} className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button 
                       onClick={() => toggleFaq(index)}
                       className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-zinc-50 transition-colors"
                    >
                       <span className="font-medium text-zinc-900">{faq.question}</span>
                       <ChevronDownIcon className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                       className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-48 py-5 border-t border-zinc-100' : 'max-h-0'}`}
                    >
                       <p className="text-zinc-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- TRUST FOOTER --- */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
             <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-full border border-zinc-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <StarIcon className="w-4 h-4" filled />
                </div>
                <div className="text-left">
                  <p className="font-bold text-zinc-900 text-sm">Love it or Free</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Money-back guarantee</p>
                </div>
             </div>
             <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-full border border-zinc-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-zinc-900 text-sm">Secure Payment</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider">256-bit SSL Encryption</p>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
