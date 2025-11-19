
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PaletteIcon, ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

interface ExampleItem {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  isColor: boolean;
}

const ExamplesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Charcoal Sketch', 'Watercolor', 'Realistic Oil', 'Modern Line Art'];

  // Mock Data using Unsplash images that resemble the art styles
  const examples: ExampleItem[] = [
    {
      id: 1,
      category: 'Charcoal Sketch',
      title: "Grandfather & Grandson",
      description: "A timeless black and white tribute merging two generations.",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      isColor: false
    },
    {
      id: 2,
      category: 'Watercolor',
      title: "Wedding Day Spirit",
      description: "Soft pastel tones adding a late mother to the bride's portrait.",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
      isColor: true
    },
    {
      id: 3,
      category: 'Realistic Oil',
      title: "The Family Matriarch",
      description: "Museum-quality texture and lighting for a dignified look.",
      imageUrl: "https://images.unsplash.com/photo-1578926375605-eaf7559b94cf?auto=format&fit=crop&q=80&w=800",
      isColor: true
    },
    {
      id: 4,
      category: 'Modern Line Art',
      title: "Minimalist Bond",
      description: "Clean lines capturing the essence of a father's hug.",
      imageUrl: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=800",
      isColor: false
    },
    {
      id: 5,
      category: 'Charcoal Sketch',
      title: "Brothers Reunited",
      description: "High contrast shading emphasizes the emotional connection.",
      imageUrl: "https://images.unsplash.com/photo-1615800098779-1be4e730534b?auto=format&fit=crop&q=80&w=800",
      isColor: false
    },
    {
      id: 6,
      category: 'Watercolor',
      title: "Ethereal Memory",
      description: "Dreamy, washed edges suitable for a gentle remembrance.",
      imageUrl: "https://images.unsplash.com/photo-1582201943021-e8e387906862?auto=format&fit=crop&q=80&w=800",
      isColor: true
    },
    {
      id: 7,
      category: 'Realistic Oil',
      title: "Golden Anniversary",
      description: "Rich colors and classical composition.",
      imageUrl: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&q=80&w=800",
      isColor: true
    },
    {
      id: 8,
      category: 'Modern Line Art',
      title: "Simple Grace",
      description: "Contemporary aesthetic for modern home decor.",
      imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=800",
      isColor: false
    },
  ];

  const filteredExamples = activeCategory === 'All' 
    ? examples 
    : examples.filter(ex => ex.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      <SEO 
        title="Portrait Gallery" 
        description="Browse examples of AI-generated memorial portraits in Charcoal, Watercolor, and Oil styles." 
        canonical="/examples" 
      />

      {/* --- HERO --- */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <PaletteIcon className="w-3 h-3" /> Inspiration Gallery
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
            The Art of Remembrance
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            See how families are using our technology to create stunning tributes. 
            From classical oil paintings to modern sketches, find the style that honors your loved one best.
          </p>
        </div>
      </section>

      {/* --- FILTER & GALLERY --- */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-zinc-900 text-white shadow-md transform scale-105' 
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredExamples.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-none">
              {/* Image Container (Frame Effect) */}
              <div className="relative aspect-[3/4] overflow-hidden shadow-xl bg-zinc-100 border-[12px] border-white outline outline-1 outline-zinc-200 transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <Link 
                    to="/create" 
                    className="px-6 py-3 bg-white text-zinc-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                  >
                    Try this style <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <h3 className="font-serif font-bold text-zinc-900 text-lg">{item.title}</h3>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1 mb-2">{item.category}</p>
                <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredExamples.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400">No examples found for this category.</p>
          </div>
        )}
      </div>

      {/* --- BOTTOM CTA --- */}
      <section className="py-20 bg-zinc-900 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Inspired? Create your own masterpiece.
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-zinc-400 text-sm">
             <span className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-white" /> Instant Preview</span>
             <span className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-white" /> Unlimited Re-generations</span>
             <span className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-white" /> High Resolution</span>
          </div>
          <Link 
            to="/create" 
            className="inline-block px-10 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Creating Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExamplesPage;
