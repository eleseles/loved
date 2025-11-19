
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl text-zinc-900 mb-4">Memorial Studio</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Using advanced Gemini AI to reunite families in timeless works of art. We specialize in adding deceased loved ones to photos with dignity and grace.
            </p>
          </div>
          
          <div>
            <h4 className="text-zinc-900 font-medium mb-4">Studio</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link to="/" className="hover:text-zinc-900">Home</Link></li>
              <li><Link to="/examples" className="hover:text-zinc-900">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-zinc-900">About Us</Link></li>
              <li><Link to="/create" className="hover:text-zinc-900">Create Portrait</Link></li>
              <li><Link to="/pricing" className="hover:text-zinc-900">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-zinc-900">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-zinc-900 font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link to="/faq" className="hover:text-zinc-900">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-zinc-900">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-zinc-900">Shipping Info</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-zinc-900 font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link to="/privacy" className="hover:text-zinc-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-zinc-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Memorial Art Studio. All rights reserved.
          </p>
          <p className="text-zinc-400 text-xs mt-2 md:mt-0">
            Made with Gemini AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
