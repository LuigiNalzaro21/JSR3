import React, { useState } from 'react';
import Header from '../component/header';

const Home = () => {
  const [title, setTitle] = useState("Home Page");

  return (
    <div className="bg-gray-700 min-h-screen">  
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-9xl font-bold text-center mb-4 text-white">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Welcome to Our Website!</h2>
              <p className="text-gray-700">We are delighted to have you here. Explore our site to discover exciting content, resources, and much more.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-700">At our company, we are committed to providing top-notch services and products to our customers. Our mission is to exceed your expectations and deliver excellence in everything we do.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
              <p className="text-gray-700">Have questions or feedback? We'd love to hear from you! Contact us today to connect with our team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
