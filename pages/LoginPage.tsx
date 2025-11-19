
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { GoogleIcon, AppleIcon, ArrowRightIcon } from '../components/Icons';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-20 px-4 font-sans">
      <SEO title="Sign In" description="Access your Memorial Studio account." canonical="/login" />
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-200">
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-zinc-900 mb-2">Welcome Back</h1>
            <p className="text-zinc-500">Sign in to continue your creation.</p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <GoogleIcon className="w-5 h-5" />
              <span className="text-sm font-medium text-zinc-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <AppleIcon className="w-5 h-5" />
              <span className="text-sm font-medium text-zinc-700">Apple</span>
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-zinc-400">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Email address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-zinc-700">Password</label>
                <Link to="/forgot-password" className="text-xs text-zinc-500 hover:text-zinc-900">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl bg-zinc-900 text-white font-bold hover:bg-black hover:shadow-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
              {!isSubmitting && <ArrowRightIcon className="w-4 h-4" />}
            </button>
          </form>
        </div>
        
        <div className="bg-zinc-50 px-8 py-4 border-t border-zinc-200 text-center">
          <p className="text-sm text-zinc-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-zinc-900 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
