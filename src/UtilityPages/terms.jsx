import { FaShieldAlt, FaCopyright, FaExclamationTriangle, FaEnvelope } from 'react-icons/fa';

const TermsOfUse = () => {
  return (
    <div className="">
      <div className="max-w-4xl space-y-12">
        {/* Table of Contents */}
        <div>
            <div className='flex flex-row justify-between items-center'>
                <h2 className="text-xl font-semibold mb-4 flex items-center text-purple-500">
                    <FaShieldAlt className="mr-2" />
                    Table of Contents (Terms & Services)
                </h2>
                <div className='text-neutral-500 text-sm'>Updated : 1 August , 2025</div>
            </div>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white">
                <a href="#acceptance" className="hover:text-purple-500">1. Acceptance of Terms</a>
                <a href="#description" className="hover:text-purple-500">2. Description of Service</a>
                <a href="#user-accounts" className="hover:text-purple-500">3. User Accounts</a>
                <a href="#content" className="hover:text-purple-500">4. Content and Intellectual Property</a>
                <a href="#user-conduct" className="hover:text-purple-500">5. User Conduct</a>
                <a href="#privacy" className="hover:text-purple-500">6. Privacy Policy</a>
                <a href="#disclaimers" className="hover:text-purple-500">7. Disclaimers</a>
                <a href="#limitation" className="hover:text-purple-500">8. Limitation of Liability</a>
                <a href="#termination" className="hover:text-purple-500">9. Termination</a>
                <a href="#changes" className="hover:text-purple-500">10. Changes to Terms</a>
                <a href="#governing-law" className="hover:text-purple-500">11. Governing Law</a>
            </nav>
        </div>

        {/* Section 1 */}
        <section id="acceptance" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">1</span>
            Acceptance of Terms
          </h3>
          <p className='text-sm'>
            Welcome to <strong>AutoAI Blog</strong> ("we," "us," or "our"). By accessing or using our website located at autoaiblog.com (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree with any part of these Terms, please do not use the Site.
          </p>
          <p className='text-sm'>
            These Terms constitute a legally binding agreement between you and AutoAI Blog. By using our service, you represent that you are at least 18 years old or have parental consent to use the Site.
          </p>
        </section>

        {/* Section 2 */}
        <section id="description" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">2</span>
            Description of Service
          </h3>
          <p className='text-sm'>
            AutoAI Blog is a digital publication focused on artificial intelligence, machine learning, technology trends, and related topics. We provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Educational articles and tutorials about AI and technology</li>
            <li>Industry news and analysis</li>
            <li>Community discussion through comments</li>
            <li>Newsletter subscriptions</li>
            <li>Code examples and technical resources</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="user-accounts" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">3</span>
            User Accounts
          </h3>
          <p className='text-sm'>
            To access certain features of our Site, you may need to create an account. You agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your password</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of unauthorized use</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="content" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">4</span>
            <FaCopyright className="mr-2 text-purple-500" />
            Content and Intellectual Property
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-neutral-500 mb-2">Our Content</h4>
              <p className='text-sm'> 
                All content on AutoAI Blog, including articles, images, logos, and code examples, is owned by us or our licensors and protected by copyright laws. You may share our content for non-commercial purposes with proper attribution.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-500 mb-2">User-Generated Content</h4>
              <p className='text-sm'> 
                By submitting comments or other content, you grant us a non-exclusive, royalty-free license to use, modify, and display such content. You retain ownership of your content but are responsible for ensuring it doesn't infringe on others' rights.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="user-conduct" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">5</span>
            <FaExclamationTriangle className="mr-2 text-purple-500" />
            User Conduct
          </h3>
          <p className='text-sm'>
            You agree not to use the Site to:
          </p>
          <div className="grid md:grid-cols-2 gap-4 px-3 py-1 text-purple-500 rounded-lg bg-purple-300">
            <div className=''>
              <h4 className="font-semibold text-purple-500 mb-2">Prohibited Activities</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Post offensive or harmful content</li>
                <li>Spam or send unsolicited messages</li>
                <li>Violate intellectual property rights</li>
                <li>Distribute malware or viruses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-500 mb-2">Technical Restrictions</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Attempt to gain unauthorized access</li>
                <li>Use automated scraping tools</li>
                <li>Interfere with site functionality</li>
                <li>Reverse engineer our software</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="privacy" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">6</span>
            Privacy Policy
          </h3>
          <p className='text-sm'>
            Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our Site, you consent to the collection and use of your information as described in our Privacy Policy.
          </p>
        </section>

        {/* Section 7 */}
        <section id="disclaimers" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">7</span>
            Disclaimers
          </h3>
          <p className="font-semibold text-neutral-500 text-sm">
            IMPORTANT: The information on AutoAI Blog is for educational and informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any content. The Site is provided "as is" without warranties of any kind, either express or implied.
          </p>
          <p className='text-sm'>
            We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be error-free or uninterrupted.
          </p>
        </section>

        {/* Section 8 */}
        <section id="limitation" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">8</span>
            Limitation of Liability
          </h3>
          <p className='text-sm'>
            To the fullest extent permitted by law, AutoAI Blog shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of the Site.
          </p>
        </section>

        {/* Section 9 */}
        <section id="termination" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">9</span>
            Termination
          </h3>
          <p className='text-sm'>
            We reserve the right to terminate or suspend your access to the Site at any time, without prior notice, for any reason, including breach of these Terms. You may also terminate your account at any time by contacting us.
          </p>
        </section>

        {/* Section 10 */}
        <section id="changes" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">10</span>
            Changes to Terms
          </h3>
          <p className='text-sm'>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Modified" date. Your continued use of the Site after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        {/* Section 11 */}
        <section id="governing-law" className="space-y-4 text-neutral-500">
          <h3 className="text-xl font-bold flex items-center text-white">
            <span className="text-purple-500 mr-3">11</span>
            Governing Law
          </h3>
          <p className='text-sm'>
            These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms will be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
