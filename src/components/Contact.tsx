import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="contact" className="bg-black py-24 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-emerald-900/20 border border-emerald-900/30 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg bg-emerald-900/20 border border-emerald-900/30 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-emerald-900/20 border border-emerald-900/30 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}