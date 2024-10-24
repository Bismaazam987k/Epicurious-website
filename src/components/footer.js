import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-yellow-400">About Us</h2>
            <p className="text-gray-400">
              We are a team of passionate developers committed to building innovative 
              and user-friendly web applications. Our mission is to deliver top-notch 
              digital experiences.
            </p>
          </div>
          
          {/* Useful Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-yellow-400">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
