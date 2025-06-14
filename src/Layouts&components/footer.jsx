import { FaTwitter, FaLinkedin, FaEnvelope, FaArrowUp, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-8 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-row md:grid-cols-4 gap-28">
          {/* Branding and short description */}
          <div className="max-w-[400px] flex flex-col gap-1">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-3xl font-bold text-indigo-400">AUTOAI</span>
              <span className="font-semibold text-white text-xl">Project</span>
            </div>
            <p className="text-neutral-500 text-sm mb-4">
              Exploring the future of Artificial Intelligence with news, insights, and tutorials.
            </p>
            
            <div className="flex flex-row items-center gap-3">
                <input placeholder="Subscribe to unlock" className="text-white text-[12px] placeholder-neutral-500 p-2 rounded-sm bg-transparent h-[40px] w-[350px] border border-neutral-500"/>
                <button className="h-[35px] w-[70px] px-2 rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer default-gradient">
                    Subscribe
                </button>
            </div>

            <div className="text-[14px] text-neutral-300 mt-2">
                Contact with us
            </div>
            
            <div className="flex space-x-4 mt-2">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-neutral-500 rounded-full hover:text-blue-400 hover:bg-opacity-60"><FaTwitter /></a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-neutral-500 rounded-full hover:text-blue-500 hover:bg-opacity-60"><FaLinkedin /></a>
              <a href="/contact" aria-label="Contact" className="p-2 bg-neutral-500 rounded-full hover:text-orange-500 hover:bg-opacity-60"><FaEnvelope /></a>
              <a href="/contact" aria-label="Contact" className="p-2 bg-neutral-500 rounded-full hover:text-blue-500 hover:bg-opacity-60"><FaFacebook /></a>
              <a href="/contact" aria-label="Contact" className="p-2 bg-neutral-500 rounded-full hover:text-red-500 hover:bg-opacity-60"><FaYoutube /></a>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            {/* Essential AdSense pages */}
            <div>
                <h3 className="text-neutral-400 font-semibold mb-3">Legal & Info</h3>
                <ul className="space-y-2 text-neutral-500 text-sm">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
                </ul>
            </div>

            {/* Blog navigation */}
            <div>
                <h3 className="text-neutral-400 font-semibold mb-3">Explore</h3>
                <ul className="space-y-2 text-neutral-500 text-sm">
                <li><a href="/insights" className="hover:text-white">Insights</a></li>
                <li><a href="/innovations" className="hover:text-white">Innovations</a></li>
                <li><a href="/applications" className="hover:text-white">Applications</a></li>
                <li><a href="/ethics" className="hover:text-white">Ethics</a></li>
                <li><a href="/agents" className="hover:text-white">Agents</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-neutral-400 font-semibold mb-3">Explore</h3>
                <ul className="space-y-2 text-neutral-500 text-sm">
                <li><a href="/insights" className="hover:text-white">Insights</a></li>
                <li><a href="/innovations" className="hover:text-white">Innovations</a></li>
                <li><a href="/applications" className="hover:text-white">Applications</a></li>
                <li><a href="/ethics" className="hover:text-white">Ethics</a></li>
                <li><a href="/agents" className="hover:text-white">Agents</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar with sitemap and copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <div>
            © {new Date().getFullYear()} AI Blog. All rights reserved.
            <span className="mx-2">|</span>
            <a href="/sitemap.xml" className="hover:text-indigo-400 transition">Sitemap</a>
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

