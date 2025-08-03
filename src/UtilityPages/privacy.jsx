import { FaShieldAlt, FaCopyright, FaExclamationTriangle, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="">
      <div className="max-w-4xl space-y-12">
        {/* Table of Contents */}
        <div>
          <div className='flex flex-row justify-between items-center'>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-purple-500">
                <FaShieldAlt className="mr-2" />
                Table of Contents (Privacy Policy)
            </h2>
            <div className='text-neutral-500 text-sm'>Updated : 1 August , 2025</div>
            </div>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white">
            <a href="#introduction" className="hover:text-purple-500">1. Introduction </a>
            <a href="#data-collection" className="hover:text-purple-500">2. Information We Collect</a>
            <a href="#info-used" className="hover:text-purple-500">3. Use of Information</a>
            <a href="#data-sharing" className="hover:text-purple-500">4. Sharing Your Information </a>
            <a href="#cookies" className="hover:text-purple-500">5.  Cookies & Analytics</a>
            <a href="#data-retention" className="hover:text-purple-500">6. Data Retention </a>
            <a href="#ata-security" className="hover:text-purple-500">7. Data Security</a>
            <a href="#user-rights" className="hover:text-purple-500">8. Your Rights</a>
            <a href="#policy-changes" className="hover:text-purple-500">9. Changes to This Policy </a>
          </nav>
        </div>

        {/* Section 1 */}
        <section id="introduction" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">1</span>
                Introduction
            </h3>
            <p className='text-sm'>
                Welcome to <strong>AutoAI Blog</strong>. This Privacy Policy explains how we collect,
                use, and protect your personal information when you visit or use our website.
                By using our Site, you agree to the collection and use of information in accordance with this policy.
            </p>
        </section>

        {/* Section 2 */}
        <section id="data-collection" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">2</span>
                Data Collection
            </h3>
            <p className='text-sm'>
                Types of Data Collected:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Personal identification (name, email, user profile info).</li>
                <li>Usage data (pages visited, time spent, browser/device information).</li>
                <li>Cookies, analytics, and tracking technologies.</li>
                <li>Information submitted via forms (comments, sign-ups, contact forms).</li>
            </ul>
            <p className='text-sm'>Whether data is collected automatically or directly from users.</p>
        </section>

        {/* Section 3 */}
        <section id="info-used" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">3</span>
                Use of Information
            </h3>
            <p className='text-sm'>
                How we use visitor information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
                <li>To provide and maintain the blog/service.</li>
                <li>For analytics and improvement.</li>
                <li>To process comments, subscriptions, and support queries.</li>
            </ul>
        </section>

        {/* Section 4 */}
        <section id="data-sharing" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">4</span>
                <FaCopyright className="mr-2 text-purple-500" />
                Data Sharing & Disclosure
            </h3>
            <p className='text-sm'>
                Who you may share data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Service providers (hosting, analytics like Google Analytics, email services).</li>
                <li>The database we used.</li>
            </ul>
        </section>

        {/* Section 5 */}
        <section id="cookies" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">5</span>
                    Cookies and Tracking
            </h3>
            <p className='text-sm'>
                How cookies are used
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
                <li>For analytics, remembering preferences, login sessions.</li>
            </ul>
        </section>

        {/* Section 6 */}
        <section id="data-retention" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">6</span>
                    Data Retention
            </h3>
            <p className='text-sm'>
                How long user data is kept - until account deletion, comment removal, or as legally required.
            </p>
        </section>

        {/* Section 7 */}
        <section id="data-security" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">7</span>
                Data Security
            </h3>
            <p className="font-semibold text-neutral-500 text-sm">
                Measures in place to protect user data (encryption, access limits, secure login & session management).
            </p>
        </section>

        {/* Section 8 */}
        <section id="user-rights" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">8</span>
                    User Rights
            </h3>
            <p className='text-sm'>
                Rights to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Access, update, or delete personal data.</li>
                <li>Withdraw consent at any time (unsubscribe from emails, etc.).</li>
            </ul>
        </section>

        {/* Section 9 */}
        <section id="policy-changes" className="space-y-4 text-neutral-500">
            <h3 className="text-xl font-bold flex items-center text-white">
                <span className="text-purple-500 mr-3">9</span>
                Changes to Policy
            </h3>
            <p className='text-sm'>
                How you’ll notify users of privacy policy updates (e.g., by posting changes with an updated date).
            </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
