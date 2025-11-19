
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { HeartIcon, GlobeIcon, ShieldCheckIcon, UserIcon, ArrowRightIcon, GiftIcon } from '../components/Icons';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="About Us" 
        description="Learn about Memorial Art Studio's mission to heal through art and technology." 
        canonical="/about" 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 overflow-hidden border-b border-zinc-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold tracking-widest uppercase mb-6">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-8 leading-tight">
              Bridging the gap between <br/>
              <span className="italic text-zinc-500">memory and reality.</span>
            </h1>
            <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
              We believe that a photograph is more than just pixels. It's a vessel for connection. We use advanced technology to create the moments that life missed, with dignity and grace.
            </p>
          </div>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 shadow-xl relative">
                 <div className="absolute inset-0 bg-zinc-900/10 z-10"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800" 
                  alt="Artist working on a portrait" 
                  className="w-full h-full object-cover"
                 />
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-6">How it started</h2>
              <div className="prose prose-zinc prose-lg text-zinc-600">
                <p className="mb-6">
                  Memorial Art Studio began with a simple request. A friend of our founder wanted a photo of her son with his grandfather, who had passed away just months before the baby was born. She had photos of both, but never together.
                </p>
                <p className="mb-6">
                  Traditional photoshop often looked stiff and artificial. Hand-painted portraits were prohibitively expensive and took months. We realized there had to be a better way.
                </p>
                <p>
                  By leveraging the latest breakthroughs in generative AI (specifically Google's Gemini models), we found we could not just "cut and paste" images, but actually <em>re-imagine</em> the scene. We could adjust lighting, shadows, and perspective to create a cohesive, emotional piece of art that feels like a true memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES --- */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-zinc-500">The principles that guide every portrait we create.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Value 1 */}
             <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 mb-6">
                   <HeartIcon className="w-6 h-6" filled />
                </div>
                <h3 className="font-serif font-bold text-xl text-zinc-900 mb-3">Dignity First</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                   We treat every photo with the utmost respect. This is not just data processing; it is the handling of a family's most precious legacy.
                </p>
             </div>

             {/* Value 2 */}
             <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 mb-6">
                   <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-zinc-900 mb-3">Absolute Privacy</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                   Your memories belong to you. We never share, sell, or use your personal photos for advertising without your explicit written permission.
                </p>
             </div>

             {/* Value 3 */}
             <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 mb-6">
                   <GlobeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-zinc-900 mb-3">Accessible Art</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                   We believe everyone deserves a beautiful memorial portrait, regardless of budget. Technology allows us to make high-end art affordable.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- REFERRAL / PROFESSIONALS --- */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
               {/* Abstract Shapes */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

               <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
                  <div className="p-12 md:p-20 flex flex-col justify-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 self-start">
                        <UserIcon className="w-3 h-3" /> For Professionals
                     </div>
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Partner with us to serve families better.
                     </h2>
                     <p className="text-zinc-400 mb-8 leading-relaxed">
                        Are you a funeral director, grief counselor, or palliative care specialist? We offer a specialized referral program that allows you to provide complimentary or discounted portraits to the families you support.
                     </p>
                     <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition-colors self-start"
                     >
                        Become a Partner <ArrowRightIcon className="w-4 h-4" />
                     </Link>
                  </div>
                  <div className="bg-zinc-800 min-h-[300px] md:min-h-full relative overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                        alt="Hands holding photos" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-overlay"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-6">Ready to create something beautiful?</h2>
            <Link to="/create" className="inline-flex items-center gap-2 text-zinc-900 font-medium border-b border-zinc-900 pb-1 hover:opacity-70 transition-opacity">
               Start your portrait <ArrowRightIcon className="w-4 h-4" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default AboutPage;
