import React from 'react';
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-10/12 mx-auto py-10 md:py-16">
      <h2 className="text-xl md:text-4xl font-bold text-center text-amber-300 mb-12">Contact Me</h2>

      <div className="bg-base-200 shadow-lg rounded-xl p-6 md:p-10 mx-auto">
        <p className="text-center text-lg mb-6">
          Feel free to reach out! I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-10'>
          <div className="space-y-6">
            <h2 className='text-2xl font-semibold'>Direct Contact</h2>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-amber-300 text-2xl" /> 
              <a href="mailto:yeassinali17@gmail.com" className="text-lg hover:underline">
                yeassinali17@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-amber-300 text-2xl" />
              <a href="tel:+8801318117376" className="text-lg hover:underline">
                +880 1318-117376
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-amber-300 text-2xl" />
              <a href="https://wa.me/8801318117376" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                +880 1318-117376
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className='text-2xl font-semibold'>Professional Profiles</h2>
            {/* linkdin */}
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-amber-300 text-2xl" /> 
              <a href="https://www.linkedin.com/in/md-yeassin-ali/" className="text-lg hover:underline">
                LinkdIn
              </a>
            </div>

            {/* github */}
            <div className="flex items-center space-x-4">
              <FaGithubSquare className="text-amber-300 text-2xl" />
              <a href="https://github.com/Yeassin7376" className="text-lg hover:underline">
                GitHub
              </a>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
