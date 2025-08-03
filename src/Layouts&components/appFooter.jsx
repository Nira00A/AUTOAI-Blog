import { FaTwitter, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function AppFooter() {
  return (
    <footer className="bg-transperant text-gray-300 py-8 relative select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-400">AUTOAI</span>
              <span className="font-semibold text-white text-lg">Project</span>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs">
              Exploring the future of Artificial Intelligence with cutting-edge insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-neutral-400 font-semibold text-sm">Quick Links</h3>
            <div className="flex flex-col gap-2 text-neutral-500 text-sm">
              <a href="/about" className="hover:text-white transition">About</a>
              <a href="/contact" className="hover:text-white transition">Contact</a>
              <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-neutral-400 font-semibold text-sm">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" 
                 className="p-2 bg-neutral-800 rounded-full hover:text-blue-400 hover:bg-neutral-700 transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                 className="p-2 bg-neutral-800 rounded-full hover:text-blue-500 hover:bg-neutral-700 transition">
                <FaLinkedin />
              </a>
              <a href="/contact" aria-label="Contact" 
                 className="p-2 bg-neutral-800 rounded-full hover:text-orange-500 hover:bg-neutral-700 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <div>
            © {new Date().getFullYear()} AUTOAI Project. All rights reserved.
          </div>
          <a
            href="#top"
            className="flex items-center space-x-1 mt-4 md:mt-0 hover:text-indigo-400 transition"
            aria-label="Back to top"
          >
            <FaArrowUp /> <span>Back to top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
