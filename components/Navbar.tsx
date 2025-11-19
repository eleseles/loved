
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo Icon: Black circle, White M */}
          <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg group-hover:bg-zinc-700 transition-colors">
            M
          </div>
          <span className="font-serif text-xl text-zinc-900 tracking-wide font-semibold">
            Memorial<span className="text-zinc-500 font-light">Studio</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isHome ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            Home
          </Link>
          <Link to="/create" className={`text-sm font-medium transition-colors ${location.pathname === '/create' ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            Create Portrait
          </Link>
          <Link to="/examples" className={`text-sm font-medium transition-colors ${location.pathname === '/examples' ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            Gallery
          </Link>
           <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            About
          </Link>
          <Link to="/pricing" className={`text-sm font-medium transition-colors ${location.pathname === '/pricing' ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            Pricing
          </Link>
          <Link to="/blog" className={`text-sm font-medium transition-colors ${location.pathname === '/blog' ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            Blog
          </Link>
          <Link to="/faq" className={`text-sm font-medium transition-colors ${location.pathname === '/faq' ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            to="/create" 
            className="hidden md:block px-5 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-200 transition-all"
          >
            Start Creation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;