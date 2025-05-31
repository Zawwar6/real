import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white pt-32 pb-60 scroll-mt-28 overflow-hidden"
    >
      {/* Background Overlay Shape */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-800 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-600 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <div className="md:w-1/2 animate-fade-in-up">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">Luxury Real Estate</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Find Your Dream Home <br />
            with <span className="text-blue-400">Real Estate Experts</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover luxury properties with modern amenities, prime locations, and unmatched comfort.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Contact Agent
            </a>
            <a
              href="#about"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Trusted Badge */}
          <p className="mt-6 text-sm text-gray-400">
            Trusted by <span className="text-white font-semibold">200+ families</span> nationwide.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 animate-fade-in-down">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Dream House"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
