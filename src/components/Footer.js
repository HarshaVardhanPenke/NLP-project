import React from 'react';
import { Logo } from '../utils/Constants';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <img className="h-14 m-4"src={Logo}></img>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p>
            Our website specializes in generating questions and answers from given input, helping users to better understand and engage with their content
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Products</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p>
              Vishnu Institute of Technology<br />
              Bhimavaram,West Godavari,Andhra Pradesh<br />
              Phone: (123) 000-0000<br />
              Email: abc@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 QAcrafter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;