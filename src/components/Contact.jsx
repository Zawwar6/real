import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white  flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center text-black px-4 md:px-0">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-400">Contact Us</h1>
          <p className="text-lg leading-relaxed mb-4">
            Got questions or want to work with us? Fill out the form and our team will get back to you shortly. We’re here to help you with your real estate needs.
          </p>
          <p className="text-gray-400">
            Whether you want to buy, sell, or manage properties, reach out today!
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
