import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-indigo-50 py-16">  {/* full width background with padding */}
      <div className="max-w-4xl mx-auto px-6 bg-white rounded-lg shadow-lg font-sans text-gray-900">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
          About Our Real Estate Company
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-indigo-600">Prime Properties</span>, we are
          committed to helping you find your dream home or the perfect commercial space.
          With over 15 years of experience in the real estate industry, we understand the
          importance of trust, transparency, and personalized service.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our expert team of realtors is dedicated to providing tailored solutions that
          meet your unique needs. Whether you are buying, selling, or investing, we guide
          you every step of the way with professionalism and integrity.
        </p>
        <p className="text-lg leading-relaxed">
          Join thousands of satisfied clients who have successfully found their ideal
          property with us. Let us help you turn your real estate dreams into reality.
        </p>
      </div>
    </section>
  );
};

export default About;
