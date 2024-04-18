import React, { useState } from 'react';
import Header from '../component/header';

const Contact = () => {
  const [title, setTitle] = useState("Contact");
  
  return (
    <div className="bg-gray-700 min-h-screen">  
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-9xl font-bold text-center mb-4 text-white">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
              <p className="text-gray-700">Have questions or feedback? Use the form below to send us a message. We'll get back to you as soon as possible.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Visit Our Office</h2>
              <p className="text-gray-700">Stop by our office during business hours. We're located at [address]. We'd love to meet you in person!</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-2xl shadow-gray-950 rounded-lg overflow-hidden">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Connect on Social Media</h2>
              <p className="text-gray-700">Follow us on social media for the latest updates, promotions, and more. Stay connected with our community!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
