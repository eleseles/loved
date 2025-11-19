
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { MailIcon, MessageCircleIcon, MapPinIcon, PhoneIcon, SendIcon, ArrowRightIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Memorial Art Studio support team." 
        canonical="/contact" 
      />

      {/* --- HERO --- */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6">Get in Touch</h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Whether you have a question about your portrait, need help with an order, or just want to say hello, we're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* --- LEFT: FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-2">Send us a message</h2>
                <p className="text-zinc-500 text-sm">We usually reply within 24 hours.</p>
              </div>

              {isSuccess ? (
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 text-center py-16">
                  <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <SendIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-zinc-900 mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-zinc-900 font-medium underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-700">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-700">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Subject</label>
                    <select 
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order Status</option>
                      <option value="quality">Quality Concern</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Message</label>
                    <textarea 
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? 'bg-zinc-400 cursor-wait' : 'bg-zinc-900 hover:bg-black hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <SendIcon className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* --- RIGHT: INFO --- */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Email Card */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
              <div className="w-12 h-12 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
                <MailIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Email Support</h3>
              <p className="text-zinc-500 text-sm mb-4">For general inquiries and order support.</p>
              <a href="mailto:support@memorialstudio.com" className="text-zinc-900 font-medium hover:underline">
                support@memorialstudio.com
              </a>
            </div>

            {/* Chat Card */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
              <div className="w-12 h-12 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
                <MessageCircleIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Live Chat</h3>
              <p className="text-zinc-500 text-sm mb-4">Available Mon-Fri, 9am - 5pm EST.</p>
              <button className="text-zinc-900 font-medium hover:underline text-left">
                Start a conversation →
              </button>
            </div>

            {/* Office Card */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200">
              <div className="flex items-start gap-4 mb-6">
                <MapPinIcon className="w-6 h-6 text-zinc-300 mt-1" />
                <div>
                  <h3 className="font-serif font-bold text-zinc-900 mb-1">Headquarters</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    100 Art Plaza, Suite 400<br/>
                    New York, NY 10013<br/>
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-zinc-300 mt-1" />
                <div>
                  <h3 className="font-serif font-bold text-zinc-900 mb-1">Phone</h3>
                  <p className="text-zinc-500 text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* Partnerships / Referral Nudge */}
            <div className="bg-zinc-900 text-white p-8 rounded-2xl shadow-lg">
               <h3 className="font-serif font-bold text-xl mb-4">Partnerships</h3>
               <p className="text-zinc-400 text-sm mb-6">
                 Are you a funeral home director or grief counselor? We offer a dedicated referral program for professionals.
               </p>
               <a href="mailto:partners@memorialstudio.com" className="inline-flex items-center text-white font-medium text-sm border-b border-white/30 hover:border-white pb-1 transition-all">
                 Contact Partnership Team <ArrowRightIcon className="w-4 h-4 ml-2" />
               </a>
            </div>

          </div>

        </div>

        {/* FAQ Nudge */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
           <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-4">Looking for quick answers?</h2>
           <p className="text-zinc-500 mb-8">Check out our frequently asked questions before sending a message.</p>
           <Link to="/faq" className="px-8 py-3 rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors">
             Visit FAQ Center
           </Link>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
