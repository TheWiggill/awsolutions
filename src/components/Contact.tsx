import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const submissionData = new FormData(formElement);
      submissionData.append('access_key', 'c1645eab-c2e9-4bb4-96fb-0a3be1b5e691');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });

      const data: any = await response.json();

      if (data?.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        formElement.reset();
        return;
      }

      const message = data?.message || 'Something went wrong. Please try again later.';
      throw new Error(message);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
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
        <p className="text-emerald-400 text-lg mb-8 max-w-2xl mx-auto">
          Contact me to place an order, organize a rental, receive a quote for design and manufacturing of your products, or for tech support!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full px-4 py-3 rounded-lg bg-emerald-900/20 border border-emerald-900/30 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
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
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg transition-all"
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
          {submitSuccess && (
            <div className="text-emerald-400 text-sm">Thanks! Your message has been sent.</div>
          )}
          {submitError && (
            <div className="text-red-400 text-sm">{submitError}</div>
          )}
        </form>
      </div>
    </div>
  );
}