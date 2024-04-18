import React, { useState } from 'react';
import Header from '../component/header';

const About = () => {
  const [title, setTitle] = useState("About");
  
  return (
    <div className="bg-gray-700 min-h-screen">  
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-9xl font-bold text-center mb-4 text-white">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Our Story</h2>
              <p className="text-gray-700">Learn about our journey and how we started. Discover the milestones we've achieved along the way.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Our Team</h2>
              <p className="text-gray-700">Meet the talented individuals behind our company. Get to know the people who make things happen.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Our Values</h2>
              <p className="text-gray-700">Explore the core values that drive our organization. Discover what we stand for and believe in.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
