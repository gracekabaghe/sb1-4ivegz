import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5" />
                <span>support@aixpro.shop</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+1 (888) AI-XPRO</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Case Studies</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} AIXPRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;