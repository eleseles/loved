
import React from 'react';
import SEO from '../components/SEO';
import { TruckIcon, GlobeIcon, CubeIcon, DownloadIcon } from '../components/Icons';

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      <SEO 
        title="Shipping & Delivery" 
        description="Information about digital delivery and shipping policies for Memorial Art Studio." 
        canonical="/shipping" 
      />

      {/* --- HERO --- */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6">Shipping & Delivery</h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Understanding how your memorial art is delivered to you, both digitally and physically.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Digital Delivery (Primary) */}
          <div className="col-span-1 md:col-span-2 bg-zinc-900 text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                   <DownloadIcon className="w-5 h-5" />
                 </div>
                 <h2 className="text-2xl font-serif font-bold">Digital Downloads</h2>
              </div>
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                For the vast majority of our orders, delivery is instant. Once you generate your portrait using our AI tool, the high-resolution file is available for download immediately.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Instant access after generation
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Sent via email for backup storage
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  300 DPI resolution ready for local printing
                </li>
              </ul>
            </div>
          </div>

          {/* Physical Prints */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8">
             <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 mb-6">
               <TruckIcon className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-serif font-bold text-zinc-900 mb-3">Physical Prints</h3>
             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
               If you choose to order a canvas or framed print through our partners, shipping times vary by location.
             </p>
             <div className="space-y-4 border-t border-zinc-100 pt-4">
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-900 font-medium">USA & Canada</span>
                 <span className="text-zinc-500">3-5 Business Days</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-900 font-medium">United Kingdom</span>
                 <span className="text-zinc-500">4-6 Business Days</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-900 font-medium">International</span>
                 <span className="text-zinc-500">7-14 Business Days</span>
               </div>
             </div>
          </div>

          {/* Packaging */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8">
             <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 mb-6">
               <CubeIcon className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-serif font-bold text-zinc-900 mb-3">Secure Packaging</h3>
             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
               We treat every physical order with extreme care to ensure it arrives safely.
             </p>
             <ul className="space-y-2">
               <li className="flex items-start gap-2 text-sm text-zinc-600">
                 <span className="text-zinc-300">•</span>
                 Canvas prints are wrapped in protective foam.
               </li>
               <li className="flex items-start gap-2 text-sm text-zinc-600">
                 <span className="text-zinc-300">•</span>
                 Framed prints use reinforced corner guards.
               </li>
               <li className="flex items-start gap-2 text-sm text-zinc-600">
                 <span className="text-zinc-300">•</span>
                 All shipments are fully insured against damage.
               </li>
             </ul>
          </div>

          {/* International Info */}
          <div className="col-span-1 md:col-span-2 bg-zinc-50 rounded-2xl p-8 border border-zinc-200 flex flex-col md:flex-row items-center gap-6">
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-zinc-900 shadow-sm flex-shrink-0">
                <GlobeIcon className="w-8 h-8" />
             </div>
             <div>
                <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">A Note on Customs</h3>
                <p className="text-zinc-600 text-sm">
                   For international orders outside of the US and EU, additional customs fees or import duties may apply depending on your country's regulations. These fees are the responsibility of the recipient.
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
