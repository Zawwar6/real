import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Property Buying',
    description: 'Helping you find the perfect property tailored to your needs and budget.',
    icon: (
      <svg
        className="w-12 h-12 text-indigo-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3a2 2 0 01-2-2z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Property Selling',
    description: 'Maximize your property’s value with our expert selling services.',
    icon: (
      <svg
        className="w-12 h-12 text-indigo-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a4 4 0 00-8 0v2m-4 0h16v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Property Management',
    description: 'Comprehensive management services for your rental or commercial properties.',
    icon: (
      <svg
        className="w-12 h-12 text-indigo-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18"></path>
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900  py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Our Services</h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {servicesData.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex-1 bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center text-gray-300 hover:shadow-indigo-600 hover:bg-gray-700 transition duration-300"
          >
            {icon}
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
