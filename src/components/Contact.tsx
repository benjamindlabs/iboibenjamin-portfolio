
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // EmailJS configuration from environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_pnkv3ag';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_eypccku';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '4D5UUh7B6BH46CZ9-';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters with enhanced email visibility
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'benjamindlabs@gmail.com',
        // Enhanced subject line with user's email for easy identification
        email_subject: `Portfolio Contact: ${formData.subject} - from ${formData.email}`,
        // Reply-to information prominently displayed
        reply_info: `REPLY TO: ${formData.email}`,
        // Full sender details for easy reference
        sender_details: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}`
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative z-10 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contact
        </h2>
        <p className="text-emerald-400 text-xl mb-2" data-aos="fade-up" data-aos-delay="100">
          Ready to get started on your project?
        </p>
        <p className="text-gray-300 text-lg" data-aos="fade-up" data-aos-delay="200">
          Contact me now for a Free consultation.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 border-none text-white hover:scale-105 transition-transform duration-300" data-aos="fade-right" data-aos-delay="300">
          <CardContent className="p-6 flex items-center gap-4">
            <Mail size={32} />
            <div>
              <p className="text-lg font-semibold">benjamindlabs@gmail.com</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-pink-500 to-pink-600 border-none text-white hover:scale-105 transition-transform duration-300" data-aos="fade-left" data-aos-delay="450">
          <CardContent className="p-6 flex items-center gap-4">
            <Phone size={32} />
            <div>
              <p className="text-lg font-semibold">(+234) 9013997660</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="600">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Get in touch using the form
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-right" data-aos-delay="700">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full px-6 py-4 text-lg"
              required
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="750">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full px-6 py-4 text-lg"
              required
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="800">
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full px-6 py-4 text-lg"
              required
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="850">
            <Textarea
              name="message"
              placeholder="Send a message to get started..."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-2xl px-6 py-4 text-lg min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Status Message */}
          {submitStatus !== 'idle' && (
            <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
              submitStatus === 'success'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`} data-aos="fade-up">
              {submitStatus === 'success' ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span className="text-sm">{statusMessage}</span>
            </div>
          )}

          <div className="text-center" data-aos="fade-up" data-aos-delay="900">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send size={20} />
                  Send Message
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

