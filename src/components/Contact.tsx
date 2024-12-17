import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { colors } from '../utils/colors';
import resume from '../assets/Sahil_Gupta_Resume.pdf';

const Contact = () => {
  const [state, handleSubmit] = useForm("xanygjab");  // Replace "xanygjab" with your Formspree endpoint ID
  const [isSuccess, setIsSuccess] = useState(false);  // For showing success message
  const [isError, setIsError] = useState(false);  // For handling errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Reset the form on success
  const resetForm = () => {
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });  // Reset form fields here
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);  // Hide the success message after 3 seconds
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xanygjab', {  // Formspree endpoint
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        resetForm();  // Reset form on success
      } else {
        setIsError(true);  // Show error message
        console.error('Error sending message');
      }
    } catch (error) {
      setIsError(true);  // Show error message
      console.error('Error sending message:', error);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#000f4a' }} id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}  // Bind value to state
                  onChange={handleInputChange}  // Handle input change
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ffa600] focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}  // Bind value to state
                  onChange={handleInputChange}  // Handle input change
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ffa600] focus:border-transparent text-white"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}  // Bind value to state
                  onChange={handleInputChange}  // Handle input change
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ffa600] focus:border-transparent text-white"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                className="w-full h-16 text-xl font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(to right, ${colors.accent5}, ${colors.accent6})` }}
                disabled={state.submitting}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" style={{ color: colors.accent6 }} />
              <a href="mailto:gguptassahil@gmail.com" className="text-gray-300 text-xl hover:text-white transition-colors">
                gguptassahil@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6" style={{ color: colors.accent6 }} />
              <a
                href="https://www.linkedin.com/in/sahil-gupta-253bb0187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6" style={{ color: colors.accent6 }} />
              <a
                href="https://github.com/sahilgupta245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                GitHub Profile
              </a>
            </div>
            {/* Resume Download Button */}
            <div className="flex items-center gap-4">
              <button
                className="py-2 px-4 h-20 w-60 text-xl font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(to right, ${colors.accent5}, ${colors.accent6})` }}
              >
                <a
                  href={resume}
                  download="Sahil_Gupta_Resume.pdf"
                  className="block text-white"
                >
                  Download My Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Pop-up */}
      {isSuccess && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex items-center justify-center z-50">
          <div className="bg-white text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-green-500">Message sent successfully!</h2>
            <p className="mt-2 text-gray-600">We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Pop-up */}
      {isError && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex items-center justify-center z-50">
          <div className="bg-white text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-red-500">Error sending message!</h2>
            <p className="mt-2 text-gray-600">Please try again later.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
