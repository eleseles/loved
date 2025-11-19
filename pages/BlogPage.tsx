
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { SearchIcon, CalendarIcon, UserIcon, ArrowRightIcon, TagIcon, BookmarkIcon, MailIcon, ChevronDownIcon } from '../components/Icons';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: React.ReactNode; // Rich content for detail view
  category: string;
  author: string;
  authorRole: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

const BlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // --- MOCK DATA ---
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "The Healing Power of Visualizing Memories",
      excerpt: "How seeing a deceased loved one in a new, peaceful context can aid the grieving process and provide a sense of closure.",
      category: "Grief & Healing",
      author: "Dr. Emily Thorne",
      authorRole: "Clinical Psychologist",
      date: "Feb 20, 2025",
      imageUrl: "https://images.unsplash.com/photo-1516069678625-c85170425b54?auto=format&fit=crop&q=80&w=1200",
      featured: true,
      content: (
        <>
          <p className="lead text-xl text-zinc-600 mb-8 font-light border-l-4 border-zinc-900 pl-6 italic">
            "Grief is not about forgetting; it's about finding a new way to remember."
          </p>
          <p className="mb-6">
            When we lose someone we love, our mind often struggles with the finality of their absence. One of the most profound challenges in the grieving process is the gradual fading of visual memories. We fear forgetting the exact curve of their smile or the way they stood.
          </p>
          <p className="mb-6">
            Visualizing our loved ones in a peaceful, dignified state can be a powerful tool for healing. It moves the memory from a place of trauma or loss to a place of serenity. This is where art—and now, compassionate technology—plays a vital role.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000" 
            alt="Family looking at photo album" 
            className="w-full h-96 object-cover rounded-xl my-8 shadow-md"
            loading="lazy"
          />

          <h3 className="text-2xl font-serif font-bold text-zinc-900 mt-10 mb-4">The Psychology of Presence</h3>
          <p className="mb-6">
            Studies in bereavement suggest that 'continuing bonds'—maintaining a connection with the deceased rather than detaching—is a healthy adaptive strategy. A portrait that combines a current family photo with an image of the departed serves as a visual bridge for this bond.
          </p>
          <p className="mb-6">
            It allows us to say, <em>"You are still part of this family. You are still here with us."</em>
          </p>
          <div className="bg-zinc-50 p-8 rounded-xl border-l-4 border-zinc-300 my-8">
            <h4 className="font-bold text-zinc-900 mb-2">Key Benefit</h4>
            <p className="text-zinc-700 italic">
              Visualizing the deceased at important life events (weddings, graduations) can reduce the feeling of their absence casting a shadow over the joy of the day.
            </p>
          </div>
          <h3 className="text-2xl font-serif font-bold text-zinc-900 mt-10 mb-4">Art as Therapy</h3>
          <p className="mb-6">
            Unlike a simple photograph, an artistic rendering (like charcoal or watercolor) adds a layer of interpretation. It softens the reality, making the image feel timeless and ethereal rather than just a snapshot of the past. This abstraction can be comforting, allowing the viewer to focus on the essence of the person rather than the specific details of their illness or final days.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "5 Tips for Choosing the Perfect Base Photo",
      excerpt: "A guide to selecting photographs that yield the most realistic and emotionally resonant AI-generated portraits.",
      category: "Tutorials",
      author: "Sarah Jenkins",
      authorRole: "Lead Artist",
      date: "Feb 18, 2025",
      imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80&w=800",
      content: (
        <>
          <p className="mb-6">
            The magic of AI portrait generation relies heavily on the quality of the inputs. While our system is designed to handle imperfect photos, following these five tips will ensure your memorial portrait looks like a masterpiece.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">1. Consistent Lighting Direction</h3>
          <p className="mb-6">
            Try to choose photos where the light source is coming from roughly the same direction. If the main family photo is lit from the left, but the photo of your loved one is lit from the right, the resulting shadow mismatch can look unnatural.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">2. Eye Level Matters</h3>
          <p className="mb-6">
            Perspective is key. If your base photo is taken at eye level, avoid using a photo of your loved one taken from a high angle (looking down) or low angle (looking up). Matching the camera angle is the secret to believability.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
            alt="Camera lens close up" 
            className="w-full h-64 object-cover rounded-xl my-8 shadow-sm"
            loading="lazy"
          />

          <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">3. Resolution</h3>
          <p className="mb-6">
            While we can enhance blurry photos, we can't invent details that aren't there. Ensure facial features are distinct.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">4. Avoid heavy filters</h3>
          <p className="mb-6">
             Snapchat or Instagram filters that alter face shape or add elements (like dog ears) confuse the AI. Use original, raw photos whenever possible.
          </p>
           <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">5. Emotional Resonance</h3>
          <p className="mb-6">
             Choose a photo where they look happy and like themselves. The goal is to capture their spirit.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "From Old Albums to Digital Art: Restoring History",
      excerpt: "Techniques for scanning and prepping vintage family photos for modern AI processing.",
      category: "Restoration",
      author: "Mark Davis",
      authorRole: "Restoration Expert",
      date: "Feb 15, 2025",
      imageUrl: "https://images.unsplash.com/photo-1531346680769-a19694e81e00?auto=format&fit=crop&q=80&w=800",
      content: (
        <>
          <p className="mb-6">
            Old photo albums are treasure troves of history, but time is often unkind to physical prints. Fading, tears, and dust can obscure the faces we hold dear. Here is how to bring those memories into the digital age.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1000" 
            alt="Hands holding old photographs" 
            className="w-full h-80 object-cover rounded-xl my-8 shadow-md"
            loading="lazy"
          />

          <p className="mb-6">
             Before uploading a vintage photo to Memorial Studio, a little preparation goes a long way.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">Scanning Best Practices</h3>
          <p className="mb-6">
             Don't just take a photo of the photo with your phone. Glare is the enemy. Use a flatbed scanner if possible, set to at least 600 DPI. If you must use a phone, use apps like Google PhotoScan which stitch multiple angles together to remove glare.
          </p>
        </>
      )
    },
    {
      id: 4,
      title: "Understanding the 'Charcoal' Aesthetic",
      excerpt: "Why the timeless, high-contrast look of charcoal is the preferred medium for memorial tributes.",
      category: "Art Styles",
      author: "Elena Vos",
      authorRole: "Art Director",
      date: "Feb 10, 2025",
      imageUrl: "https://images.unsplash.com/photo-1615800098779-1be4e730534b?auto=format&fit=crop&q=80&w=800",
      content: (
        <>
           <p className="mb-6">
              Charcoal is one of the oldest artistic mediums in human history. Its raw, high-contrast nature strips away the distraction of color, forcing the viewer to focus purely on emotion, form, and light.
           </p>
           
           <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000" 
            alt="Artist drawing with charcoal" 
            className="w-full h-96 object-cover rounded-xl my-8 shadow-md"
            loading="lazy"
           />

           <p className="mb-6">
              For memorial portraits, this is particularly effective. Color photographs can sometimes feel 'stuck' in a specific era due to clothing colors or background hues. Charcoal renders the subject timeless.
           </p>
        </>
      )
    },
    {
      id: 5,
      title: "Customer Story: The Wedding Guest Who Wasn't There",
      excerpt: "One bride's emotional reaction to seeing her late father standing next to her in her wedding photos.",
      category: "Stories",
      author: "Memorial Team",
      authorRole: "Staff Writer",
      date: "Feb 05, 2025",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      content: (
        <>
           <p className="mb-6">
              Sarah always dreamed her father would walk her down the aisle. When he passed away unexpectedly three years before her wedding, that dream seemed impossible.
           </p>
           <p className="mb-6">
              "I felt a hole in every photo," Sarah told us. "Everyone looked happy, but I knew who was missing."
           </p>
           
           <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000" 
            alt="Bride holding wedding bouquet" 
            className="w-full h-80 object-cover rounded-xl my-8 shadow-md"
            loading="lazy"
           />

           <p className="mb-6">
              Her husband surprised her with a Memorial Studio portrait. He took a solo photo of Sarah in her dress and combined it with a photo of her father from a family BBQ years ago. The AI adjusted his suit to look like a tuxedo and corrected the lighting.
           </p>
           <p className="mb-6">
              "It wasn't just a photo," she said. "It was a moment reclaimed."
           </p>
        </>
      )
    }
  ];

  // --- VIEW LOGIC ---
  const activePost = id ? posts.find(p => p.id === Number(id)) : null;
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => !p.featured && p.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const categories = ["Grief & Healing", "Tutorials", "Restoration", "Art Styles", "Stories"];
  const trendingPosts = [posts[4], posts[1], posts[3]];

  // If ID is present but not found, redirect or show 404 (simple redirect here)
  useEffect(() => {
    if (id && !activePost) {
      navigate('/blog');
    }
  }, [id, activePost, navigate]);

  // --- RENDER: DETAIL VIEW ---
  if (activePost) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 font-sans pb-24">
        <SEO 
          title={activePost.title}
          description={activePost.excerpt}
          canonical={`/blog/${activePost.id}`}
          image={activePost.imageUrl}
        />

        {/* Article Progress Bar (Visual only) */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
           <div className="h-full bg-zinc-900 w-1/3"></div> 
        </div>

        {/* Article Hero */}
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-zinc-900">
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           <img 
            src={activePost.imageUrl} 
            alt={activePost.title} 
            className="w-full h-full object-cover opacity-90" 
           />
           <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-end pb-16">
              <div className="max-w-4xl mx-auto w-full">
                 <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium uppercase tracking-wider transition-colors">
                    <span className="mr-2">←</span> Back to Journal
                 </Link>
                 <div className="flex gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                       {activePost.category}
                    </span>
                 </div>
                 <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    {activePost.title}
                 </h1>
                 <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                       <UserIcon className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="font-medium text-sm">{activePost.author}</p>
                       <p className="text-white/60 text-xs">{activePost.authorRole} • {activePost.date}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Article Content Layout */}
        <div className="container mx-auto px-4 py-16">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Social Share / Sidebar (Sticky) */}
              <div className="hidden lg:block lg:col-span-2">
                 <div className="sticky top-32 space-y-6 text-center">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Share</p>
                    <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all mx-auto">
                       FB
                    </button>
                    <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all mx-auto">
                       TW
                    </button>
                    <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all mx-auto">
                       LN
                    </button>
                    <div className="w-8 h-px bg-zinc-200 mx-auto my-6"></div>
                    <button className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all mx-auto">
                       <BookmarkIcon className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              {/* Main Text */}
              <div className="lg:col-span-8">
                 <div className="prose prose-lg prose-zinc max-w-none font-serif leading-loose text-zinc-700 first-letter:text-5xl first-letter:font-bold first-letter:text-zinc-900 first-letter:mr-3 first-letter:float-left">
                    {activePost.content}
                 </div>

                 {/* Tags */}
                 <div className="mt-16 pt-8 border-t border-zinc-200">
                    <div className="flex flex-wrap gap-2">
                       {['Memory', 'AI Art', 'Family', 'Healing'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-sm rounded-md hover:bg-zinc-200 cursor-pointer transition-colors">
                             #{tag}
                          </span>
                       ))}
                    </div>
                 </div>

                 {/* Author Box */}
                 <div className="mt-12 bg-zinc-50 p-8 rounded-2xl flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-zinc-200 flex-shrink-0 overflow-hidden">
                       <img src={`https://ui-avatars.com/api/?name=${activePost.author}&background=18181b&color=fff`} alt={activePost.author} />
                    </div>
                    <div>
                       <h4 className="font-serif font-bold text-zinc-900 text-lg mb-2">About {activePost.author}</h4>
                       <p className="text-zinc-600 text-sm leading-relaxed">
                          {activePost.authorRole} at Memorial Studio. Dedicated to exploring the intersection of technology and human emotion, helping families preserve their most cherished memories.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Related Sidebar */}
              <div className="lg:col-span-2 hidden lg:block">
                 <h5 className="font-sans font-bold text-zinc-900 text-sm uppercase tracking-widest mb-6">Read Next</h5>
                 <div className="space-y-8">
                    {posts.filter(p => p.id !== activePost.id).slice(0, 2).map(post => (
                       <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                          <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-zinc-100">
                             <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                          </div>
                          <h6 className="font-serif font-bold text-zinc-900 leading-snug group-hover:underline text-sm">{post.title}</h6>
                       </Link>
                    ))}
                 </div>
              </div>

           </div>
        </div>
        
        {/* Mobile Read Next (Visible only on small screens) */}
        <div className="lg:hidden container mx-auto px-4 pb-16">
            <h5 className="font-sans font-bold text-zinc-900 text-sm uppercase tracking-widest mb-6 border-t border-zinc-200 pt-8">Read Next</h5>
            <div className="grid grid-cols-1 gap-6">
               {posts.filter(p => p.id !== activePost.id).slice(0, 2).map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group">
                     <div className="w-24 h-24 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                     </div>
                     <div>
                        <h6 className="font-serif font-bold text-zinc-900 leading-snug mb-2">{post.title}</h6>
                        <span className="text-xs text-zinc-500">Read Article →</span>
                     </div>
                  </Link>
               ))}
            </div>
        </div>
      </div>
    );
  }

  // --- RENDER: LIST VIEW (Original) ---
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <SEO 
        title="Blog & Stories"
        description="Insights on grief, memory preservation, and the art of AI portraits from Memorial Studio."
        canonical="/blog"
      />

      {/* --- HERO HEADER --- */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <TagIcon className="w-3 h-3" /> Memorial Studio Journal
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
            Insights & Stories
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Exploring the intersection of technology, art, and the enduring power of memory.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Featured Article */}
            {!searchTerm && (
              <div className="group relative rounded-3xl overflow-hidden shadow-xl">
                <Link to={`/blog/${featuredPost.id}`}>
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img 
                      src={featuredPost.imageUrl} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <div className="flex items-center gap-4 text-white/80 text-sm font-medium mb-3 uppercase tracking-wider">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white">
                        {featuredPost.category}
                      </span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight group-hover:underline decoration-zinc-400 underline-offset-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-zinc-300 text-lg mb-6 line-clamp-2 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-bold hover:text-zinc-300 transition-colors">
                      Read Article <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {regularPosts.map((post) => (
                <article key={post.id} className="flex flex-col group">
                  <Link to={`/blog/${post.id}`}>
                    <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-6 border border-zinc-100 shadow-sm">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-medium uppercase tracking-wide">
                      <span className="text-zinc-900">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-3 leading-tight group-hover:text-zinc-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 line-clamp-3 mb-4 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-zinc-900 font-medium mt-auto">
                    <UserIcon className="w-4 h-4 text-zinc-400" />
                    {post.author}
                  </div>
                </article>
              ))}
            </div>

            {regularPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-500 text-lg">No articles found matching your search.</p>
                <button onClick={() => setSearchTerm('')} className="text-zinc-900 font-medium underline mt-2">Clear search</button>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN (Sidebar Widgets) */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Widget: Search */}
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
               <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
               </div>
            </div>

            {/* Widget: Categories */}
            <div className="space-y-4">
               <h4 className="font-serif font-bold text-xl text-zinc-900 border-b border-zinc-200 pb-2">Categories</h4>
               <ul className="space-y-2">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <button className="flex items-center justify-between w-full p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors text-left group">
                         <span>{cat}</span>
                         <span className="text-zinc-300 text-xs group-hover:text-zinc-900">→</span>
                      </button>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Widget: Trending */}
            <div className="space-y-6">
               <h4 className="font-serif font-bold text-xl text-zinc-900 border-b border-zinc-200 pb-2">Trending Stories</h4>
               <div className="space-y-6">
                  {trendingPosts.map((post, index) => (
                     <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group cursor-pointer">
                        <span className="text-4xl font-serif font-bold text-zinc-200 group-hover:text-zinc-300 transition-colors">
                          0{index + 1}
                        </span>
                        <div>
                           <h5 className="font-serif font-bold text-zinc-900 leading-snug group-hover:underline mb-1">
                              {post.title}
                           </h5>
                           <span className="text-xs text-zinc-500">{post.date}</span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

            {/* Widget: Newsletter */}
            <div className="bg-zinc-900 text-white p-8 rounded-3xl text-center shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
               
               <div className="relative z-10">
                 <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                    <MailIcon className="w-6 h-6 text-white" />
                 </div>
                 <h4 className="font-serif font-bold text-2xl mb-3">Join the Community</h4>
                 <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    Get art tips, restoration guides, and emotional stories delivered to your inbox weekly.
                 </p>
                 <div className="space-y-3">
                    <input 
                       type="email" 
                       placeholder="Your email address" 
                       className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 focus:outline-none focus:bg-white/20 transition-all text-center"
                    />
                    <button className="w-full px-4 py-3 rounded-xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors">
                       Subscribe
                    </button>
                 </div>
                 <p className="text-xs text-zinc-500 mt-4">No spam, unsubscribe anytime.</p>
               </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
