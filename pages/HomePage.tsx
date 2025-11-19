
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { StarIcon, CheckCircleIcon, ArrowRightIcon, HeartIcon, ChevronDownIcon, PaletteIcon, PhotoIcon, UserIcon, PlusIcon, UploadIcon } from '../components/Icons';

const HomePage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I add a deceased loved one to a photo?",
      answer: "It's simple with our AI tool. Upload a base photo (like a family gathering) and a separate photo of your deceased loved one. Our system analyzes the lighting and perspective to seamlessly merge them into a single, respectful artistic portrait."
    },
    {
      question: "What are unique ways to honor a deceased loved one?",
      answer: "Creating a custom memorial portrait is a beautiful tribute. Many families display these 'merged memories' on canvas at weddings, graduations, or in their homes as a daily reminder of their presence. It's a visual way to say they are still with you."
    },
    {
      question: "Can I create a picture of a passed loved one meeting a new baby?",
      answer: "Yes, this is one of our most cherished requests. We can combine a photo of a grandparent who passed away with a photo of a newborn to create a heartwarming 'first meeting' that bridges generations."
    },
    {
      question: "Is the result suitable for canvas pictures?",
      answer: "Absolutely. We generate ultra-high resolution images (300 DPI equivalent) that are specifically optimized for large format printing. They look stunning when printed on canvas, creating a museum-quality memorial piece."
    },
    {
      question: "Can I place the deceased loved one in the background?",
      answer: "Yes. You have creative control over the composition. You can have them standing prominently with the group, or positioned more subtly in the background as a guardian figure, depending on the emotion you wish to convey."
    },
    {
      question: "Does the AI just paste them in, or merge the photos?",
      answer: "Our advanced AI doesn't just cut and paste. It artistically 'merges' the photos by redrawing the scene. It harmonizes shadows, lighting, and artistic style (like Charcoal or Oil) so the final image looks like a unified masterpiece."
    },
    {
      question: "Can I add multiple deceased loved ones to one photo?",
      answer: "Yes. Our 'Upload Added Person(s)' feature allows you to select multiple individual photos. Our AI artist will arrange them naturally into the group composition."
    },
    {
      question: "Do I need professional photos for this to work?",
      answer: "No. While clearer photos yield better results, our advanced AI is trained to enhance and reconstruct details from older or slightly blurry photographs common in family albums."
    },
    {
      question: "Is my data private?",
      answer: "Your privacy is our priority. Photos are processed securely for the sole purpose of generating your artwork and are deleted from our processing servers shortly after generation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Add Deceased Loved One to Photo | Memorial Art"
        description="The #1 AI tool to combine deceased loved ones into your favorite family photos. Create professional charcoal, watercolor, and oil portraits instantly."
        canonical="/"
      />
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-zinc-100">
        {/* Light Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-zinc-50 via-white to-white z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <div className="mb-8 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                AI-Powered Memorial Art Studio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-zinc-900 mb-8 leading-[1.1] tracking-tight">
              Reunite with <br/>
              <span className="text-zinc-400">
                Loved Ones
              </span>
            </h1>

            <p className="text-xl text-zinc-600 mb-12 leading-relaxed font-light max-w-2xl">
              Respectfully combining photos of the departed with the living. 
              Create timeless charcoal, watercolor, and oil portraits in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
              <Link 
                to="/create"
                className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white font-bold rounded-full hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg shadow-zinc-200 flex items-center justify-center gap-3"
              >
                <span>Create Portrait Now</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/examples"
                className="w-full sm:w-auto px-10 py-5 bg-white border border-zinc-200 text-zinc-600 font-medium rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST STATS STRIP --- */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-200">
            <div>
              <p className="text-3xl font-serif font-bold text-zinc-900 mb-1">50k+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Memories Created</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-zinc-900 mb-1">4.9/5</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-zinc-900 mb-1">100%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Private & Secure</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-zinc-900 mb-1">&lt; 30s</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Generation Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION LOGIC WIDGET --- */}
      <section className="py-24 bg-white relative">
         {/* Subtle Grid Background for Widget Area */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-6">How It Works</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">We bridge the gap between memories using advanced generative AI.</p>
          </div>

          {/* The Widget */}
          <div className="max-w-5xl mx-auto bg-zinc-50/50 rounded-[2rem] border border-zinc-100 p-8 md:p-12 shadow-sm backdrop-blur-sm">
             <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
                
                {/* Step 1: Inputs (Highly Designed) */}
                <div className="md:col-span-3 flex flex-col gap-4 relative">
                  
                  {/* Main Photo Card */}
                  <div className="relative group bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-zinc-300 transition-all duration-300 cursor-pointer p-1">
                     {/* Dashed Inner Area */}
                     <div className="border-2 border-dashed border-zinc-100 rounded-xl p-4 flex items-center gap-5 group-hover:border-zinc-200 transition-colors">
                         <div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
                            <PhotoIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="text-zinc-900 font-serif font-bold text-base">Base Photo</h4>
                                <span className="text-[10px] font-bold text-zinc-300 bg-zinc-100 px-2 py-0.5 rounded-full">JPG/PNG</span>
                            </div>
                            <p className="text-zinc-500 text-xs mb-2">Family gathering, wedding, etc.</p>
                            <div className="inline-flex items-center text-[10px] font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-200 pb-0.5 group-hover:border-zinc-900 transition-colors">
                                <UploadIcon className="w-3 h-3 mr-1" /> Select File
                            </div>
                        </div>
                     </div>
                  </div>

                  {/* Animated Connection Node */}
                  <div className="absolute left-[2.25rem] top-1/2 -translate-y-1/2 w-0.5 h-8 bg-zinc-200 -z-10 hidden md:block"></div> 
                  <div className="flex items-center justify-center -my-3 z-10">
                      <div className="w-10 h-10 rounded-full bg-white border-4 border-zinc-50 text-zinc-400 flex items-center justify-center shadow-md group hover:scale-110 transition-transform">
                         <PlusIcon className="w-4 h-4 group-hover:text-zinc-900 transition-colors" />
                      </div>
                  </div>

                  {/* Loved One Card */}
                  <div className="relative group bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-zinc-300 transition-all duration-300 cursor-pointer p-1">
                    <div className="border-2 border-dashed border-zinc-100 rounded-xl p-4 flex items-center gap-5 group-hover:border-zinc-200 transition-colors">
                        <div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
                            <UserIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                             <div className="flex justify-between items-center mb-1">
                                <h4 className="text-zinc-900 font-serif font-bold text-base">Loved One</h4>
                                <span className="text-[10px] font-bold text-zinc-300 bg-zinc-100 px-2 py-0.5 rounded-full">JPG/PNG</span>
                            </div>
                            <p className="text-zinc-500 text-xs mb-2">Clear facial features</p>
                             <div className="inline-flex items-center text-[10px] font-bold text-zinc-900 uppercase tracking-wider border-b border-zinc-200 pb-0.5 group-hover:border-zinc-900 transition-colors">
                                <UploadIcon className="w-3 h-3 mr-1" /> Select File
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Process Arrow (Animated) */}
                <div className="md:col-span-1 flex flex-col items-center justify-center py-8 md:py-0">
                   <div className="hidden md:flex h-px w-full bg-zinc-200 relative items-center justify-center">
                      <div className="absolute w-2 h-2 bg-zinc-400 rounded-full animate-ping opacity-20"></div>
                      <div className="relative bg-white border border-zinc-200 px-4 py-1.5 rounded-full text-zinc-500 text-[10px] tracking-widest uppercase shadow-sm font-bold z-10">
                        AI Merge
                      </div>
                   </div>
                   <ArrowRightIcon className="md:hidden w-6 h-6 text-zinc-300 rotate-90" />
                </div>

                {/* Step 3: Result (Premium Frame) */}
                <div className="md:col-span-3">
                   <div className="aspect-[4/3] rounded-2xl bg-white p-3 shadow-2xl shadow-zinc-200/50 group hover:scale-[1.02] transition-all duration-500 relative">
                      {/* Frame Border */}
                      <div className="absolute inset-0 rounded-2xl border border-zinc-200 pointer-events-none z-20"></div>
                      
                      <div className="w-full h-full rounded-xl bg-zinc-100 flex flex-col items-center justify-center relative overflow-hidden">
                         {/* Content */}
                         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/canvas.png')] z-10"></div>
                         <HeartIcon className="w-12 h-12 text-zinc-300 mb-4 z-0" />
                         <p className="text-zinc-400 font-serif text-xl italic z-0">Masterpiece</p>
                         
                         {/* Hover Overlay */}
                         <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                             <button className="bg-white text-zinc-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                Download
                             </button>
                         </div>
                         
                         <div className="absolute bottom-4 right-4 z-10">
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-zinc-200 text-[10px] text-zinc-900 uppercase tracking-wider shadow-sm font-bold">
                              Generated
                            </span>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* --- ARTISTIC STYLES GALLERY --- */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
               <div className="flex items-center gap-2 mb-4 text-zinc-500 text-xs tracking-widest uppercase font-medium">
                  <PaletteIcon className="w-4 h-4" />
                  <span>Our Collection</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Curated Artistic Styles</h2>
               <p className="text-zinc-600 mt-4 font-light">Choose the perfect aesthetic to honor your memory.</p>
            </div>
            <Link to="/create" className="hidden md:block text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:opacity-70 transition-opacity">
              Try all styles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Style 1 */}
            <div className="group cursor-pointer">
               <div className="aspect-[3/4] bg-white rounded-xl border border-zinc-200 overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                    <span className="text-4xl opacity-20">✏️</span>
                  </div>
               </div>
               <h3 className="text-lg font-serif font-medium text-zinc-900">Charcoal Sketch</h3>
               <p className="text-xs text-zinc-500 mt-1">Timeless, elegant, and dignified.</p>
            </div>
             {/* Style 2 */}
             <div className="group cursor-pointer">
               <div className="aspect-[3/4] bg-white rounded-xl border border-zinc-200 overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all relative">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                     <span className="text-4xl opacity-20">🎨</span>
                   </div>
               </div>
               <h3 className="text-lg font-serif font-medium text-zinc-900">Soft Watercolor</h3>
               <p className="text-xs text-zinc-500 mt-1">Ethereal, gentle, and full of emotion.</p>
            </div>
             {/* Style 3 */}
             <div className="group cursor-pointer">
               <div className="aspect-[3/4] bg-white rounded-xl border border-zinc-200 overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all relative">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                     <span className="text-4xl opacity-20">🖼️</span>
                   </div>
               </div>
               <h3 className="text-lg font-serif font-medium text-zinc-900">Realistic Oil</h3>
               <p className="text-xs text-zinc-500 mt-1">Museum quality texture and depth.</p>
            </div>
             {/* Style 4 */}
             <div className="group cursor-pointer">
               <div className="aspect-[3/4] bg-white rounded-xl border border-zinc-200 overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all relative">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                     <span className="text-4xl opacity-20">✒️</span>
                   </div>
               </div>
               <h3 className="text-lg font-serif font-medium text-zinc-900">Modern Line Art</h3>
               <p className="text-xs text-zinc-500 mt-1">Minimalist, clean, and contemporary.</p>
            </div>
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/create" className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5">
              Try all styles →
            </Link>
          </div>
        </div>
      </section>

      {/* --- USE CASES / EMOTIONAL MOMENTS --- */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Moments Worth Capturing</h2>
               <p className="text-zinc-500">Some moments are too precious to be missed.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 mb-6 text-xl shadow-sm">🎓</div>
                  <h3 className="text-xl font-serif text-zinc-900 mb-3">Graduations</h3>
                  <p className="text-zinc-600 font-light text-sm leading-relaxed">
                     Celebrate your achievement with the ones who paved the way, even if they couldn't be there in person.
                  </p>
               </div>
               <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 mb-6 text-xl shadow-sm">💍</div>
                  <h3 className="text-xl font-serif text-zinc-900 mb-3">Weddings</h3>
                  <p className="text-zinc-600 font-light text-sm leading-relaxed">
                     Complete your family photos on your special day. Have your grandparents or parents standing by your side.
                  </p>
               </div>
               <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 mb-6 text-xl shadow-sm">👶</div>
                  <h3 className="text-xl font-serif text-zinc-900 mb-3">Meeting Grandchildren</h3>
                  <p className="text-zinc-600 font-light text-sm leading-relaxed">
                     Create the heartwarming memory of a grandparent holding their grandchild for the very first time.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Heartfelt Stories</h2>
            <p className="text-zinc-500">From families we've helped reunite.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-6 text-zinc-800">
                {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-4 h-4" filled />)}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6 text-sm font-light">
                "I never got to take a photo with my grandfather before he passed. Seeing him standing next to me at my graduation in this charcoal sketch made me burst into tears. It looks so real."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs">SJ</div>
                <div>
                  <p className="text-zinc-900 text-sm font-medium">Sarah Jenkins</p>
                  <p className="text-zinc-400 text-xs">Charcoal Style</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all relative transform md:-translate-y-4 shadow-md">
              <div className="absolute -top-4 -right-4 bg-zinc-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Featured
              </div>
              <div className="flex gap-1 mb-6 text-zinc-800">
                {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-4 h-4" filled />)}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6 text-sm font-light">
                "The watercolor effect is absolutely stunning. I added my late wife to our daughter's wedding photo. It was the most meaningful gift I could have given. Thank you for this technology."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs">MR</div>
                <div>
                  <p className="text-zinc-900 text-sm font-medium">Michael Ross</p>
                  <p className="text-zinc-400 text-xs">Watercolor Style</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-6 text-zinc-800">
                {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-4 h-4" filled />)}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6 text-sm font-light">
                "Astonishing quality. I was worried it would look like a bad photoshop job, but the lighting correction makes it look like we were actually in the same room."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs">EL</div>
                <div>
                  <p className="text-zinc-900 text-sm font-medium">Emma Lewis</p>
                  <p className="text-zinc-400 text-xs">Realistic Oil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TIMELINE STEPS (Refined Design) --- */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto relative">
              
              {/* Continuous Line Background */}
              <div className="absolute left-[11px] top-4 bottom-12 w-px bg-zinc-200 z-0"></div>

              <div className="relative z-10 space-y-20">
                {/* Step 1 */}
                <div className="flex gap-10">
                   {/* Icon */}
                   <div className="flex-shrink-0 mt-2">
                      <div className="w-6 h-6 rounded-full border-2 border-zinc-300 bg-white relative z-10"></div>
                   </div>
                   {/* Content */}
                   <div>
                      <h3 className="text-3xl font-serif font-medium text-zinc-900 mb-4 leading-tight">1. Upload Your Memories</h3>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Select a high-quality base photo (the setting) and a clear photo of the person you wish to add. Our system supports standard formats (JPG, PNG).
                      </p>
                   </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-10">
                   {/* Icon */}
                   <div className="flex-shrink-0 mt-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-900 ring-4 ring-white relative z-10 shadow-sm"></div>
                   </div>
                   {/* Content */}
                   <div>
                      <h3 className="text-3xl font-serif font-medium text-zinc-900 mb-4 leading-tight">2. Select Artistic Direction</h3>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Choose from our curated styles: Charcoal for dignity, Watercolor for softness, or Realistic Oil for a museum-quality look. Adjust contrast and brightness to taste.
                      </p>
                   </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-10">
                   {/* Icon */}
                   <div className="flex-shrink-0 mt-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-900 ring-4 ring-white relative z-10 shadow-sm"></div>
                   </div>
                   {/* Content */}
                   <div>
                      <h3 className="text-3xl font-serif font-medium text-zinc-900 mb-4 leading-tight">3. Generate & Download</h3>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Our Gemini AI engine analyzes lighting, shadows, and perspective to merge the images. Within seconds, download your high-resolution tribute suitable for printing.
                      </p>
                   </div>
                </div>
              </div>

            </div>
         </div>
      </section>

      {/* --- FAQ ACCORDION --- */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
         <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Common Questions</h2>
              <p className="text-zinc-500">Everything you need to know.</p>
            </div>
            
            <div className="space-y-4">
               {faqs.map((faq, index) => (
                 <div key={index} className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                    <button 
                       onClick={() => toggleFaq(index)}
                       className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-zinc-50 transition-colors"
                    >
                       <span className="font-medium text-zinc-900 pr-4">{faq.question}</span>
                       <ChevronDownIcon className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
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

      {/* --- FINAL CTA (Refined Typography) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Premium Card Container */}
          <div className="relative max-w-5xl mx-auto bg-zinc-50 border border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-zinc-200/50 p-12 md:p-24 text-center">
            
            {/* Ambient Light Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white to-zinc-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 mb-8 tracking-tight leading-tight">
                Create a memory that<br/> 
                <span className="text-zinc-900">lasts forever.</span>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-sm text-zinc-600">
                    <CheckCircleIcon className="w-4 h-4 text-zinc-900 mr-2" /> No design skills needed
                 </span>
                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-sm text-zinc-600">
                    <CheckCircleIcon className="w-4 h-4 text-zinc-900 mr-2" /> Instant download
                 </span>
                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-sm text-zinc-600">
                    <CheckCircleIcon className="w-4 h-4 text-zinc-900 mr-2" /> High resolution 300DPI equivalent
                 </span>
              </div>
              
              <Link 
                to="/create"
                className="inline-block px-12 py-5 bg-zinc-900 text-white font-bold rounded-full text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Start Designing Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
