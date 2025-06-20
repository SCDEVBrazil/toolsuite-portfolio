import Head from 'next/head';
import Link from 'next/link';

// AdSense Component - HIDDEN until Week 7 implementation
const GoogleAdUnit = ({ size, placement, responsive = false }) => {
  // TODO: Enable in Week 7 - AdSense Setup & Optimization
  const ADSENSE_ENABLED = false; // Set to true when implementing AdSense in Week 7
  
  if (!ADSENSE_ENABLED) {
    return null; // Hide ad placeholders until AdSense implementation
  }
  
  const getAdStyles = () => {
    switch(placement) {
      case 'topBanner':
        return 'ad-top-banner bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-8 shadow-lg border border-blue-100/50';
      case 'faqSidebar':
        return 'ad-faq-sidebar bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg sticky top-8';
      case 'contentInline':
        return 'ad-content-inline my-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center shadow-lg border border-blue-100/30';
      case 'bottomBanner':
        return 'ad-bottom-banner mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 shadow-lg border border-purple-100/50';
      case 'leftSidebar':
      case 'rightSidebar':
        return 'ad-sidebar bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-200/50';
      case 'leftSidebar2':
      case 'rightSidebar3':
        return 'ad-sidebar-bottom bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 shadow-md border border-blue-100/50';
      default:
        return 'ad-unit bg-gray-50 rounded-lg p-4';
    }
  };
  
  return (
    <div className={getAdStyles()}>
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-medium">
        Advertisement
      </p>
      <div className="bg-white rounded-lg min-h-[90px] flex items-center justify-center border-2 border-dashed border-gray-200">
        <span className="text-gray-400 text-sm">AdSense {size} - {placement}</span>
      </div>
    </div>
  );
};

export default function PasswordFAQ() {
  // Check if ads are enabled to determine layout
  const ADSENSE_ENABLED = false; // Set to true when implementing AdSense in Week 7
  
  return (
    <>
      <Head>
        <title>Password Security FAQ - Common Questions Answered | ToolSuite</title>
        <meta name="description" content="Get answers to common password security questions. Learn about password strength, best practices, and how to stay safe online with our comprehensive FAQ guide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://password.toolsuite.info/faq" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Password Security FAQ - Common Questions Answered" />
        <meta property="og:description" content="Get answers to common password security questions and learn best practices for staying safe online." />
        <meta property="og:url" content="https://password.toolsuite.info/faq" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ToolSuite" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Password Security FAQ - Common Questions Answered" />
        <meta name="twitter:description" content="Get answers to common password security questions and learn best practices for staying safe online." />
        
        {/* JSON-LD Schema Markup for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is it safe to use an online password generator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our password generator is completely safe. All passwords are generated locally in your browser using cryptographic functions. We never store, transmit, or have access to any passwords you generate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should my password be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend at least 12-16 characters for most accounts. For high-security accounts (banking, work), consider 20+ characters. Longer passwords are exponentially harder to crack."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include symbols in my passwords?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, including symbols significantly increases password strength. However, some websites don't allow certain symbols, so you may need to regenerate without symbols if you encounter issues."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Enhanced Custom Styles */}
        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fade-in-delayed {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .animate-blob { animation: blob 7s infinite; }
          .animate-slide-up { animation: slide-up 0.6s ease-out; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.5s ease-out; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          
          .faq-item:nth-child(odd) { animation-delay: 0.1s; }
          .faq-item:nth-child(even) { animation-delay: 0.2s; }
        `}</style>
      </Head>

      {/* Enhanced Page Layout with Decorative Elements */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          {/* Conditional Layout - Full width when ads disabled, grid when enabled */}
          <div className="max-w-full mx-auto">
            <div className={ADSENSE_ENABLED ? "grid grid-cols-12 gap-4" : "max-w-6xl mx-auto"}>
              
              {/* LEFT SIDEBAR ADS - Only render when ads enabled */}
              {ADSENSE_ENABLED && (
                <div className="hidden xl:block xl:col-span-2">
                  <div className="space-y-8">
                    <div className="sticky top-8">
                      <GoogleAdUnit size="160x600" placement="leftSidebar" />
                    </div>
                    <div className="sticky top-[400px]">
                      <GoogleAdUnit size="300x250" placement="leftSidebar2" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* MAIN CONTENT - Full width when ads hidden, constrained when ads visible */}
              <div className={ADSENSE_ENABLED ? "col-span-12 xl:col-span-8" : "w-full"}>
                <div className={ADSENSE_ENABLED ? "max-w-6xl mx-auto space-y-8" : "space-y-8"}>
                  
                  {/* TOP BANNER AD - Hidden until Week 7 */}
                  <GoogleAdUnit size="728x90" placement="topBanner" responsive />
                  
                  {/* Enhanced Back Navigation */}
                  <div className="mb-8 animate-slide-up">
                    <Link 
                      href="/password"
                      className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 transform hover:scale-105 border border-white/20"
                    >
                      <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Password Generator
                    </Link>
                  </div>

                  {/* Enhanced Page Header */}
                  <div className="text-center mb-12 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
                      Password Security FAQ
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      Everything you need to know about creating and managing secure passwords
                    </p>
                  </div>

                  {/* FAQ Content with conditional sidebar layout */}
                  <div className={ADSENSE_ENABLED ? "grid lg:grid-cols-4 gap-8" : "max-w-4xl mx-auto"}>
                    
                    {/* FAQ Main Content - Full width when ads disabled */}
                    <div className={ADSENSE_ENABLED ? "lg:col-span-3" : "w-full"}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/20 p-8 md:p-12 border border-white/20 animate-slide-up">
                        <div className="space-y-8">
                          
                          {/* FAQ Item 1 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">1</span>
                              <span>Is it safe to use an online password generator?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              <strong className="text-green-600">Yes, our password generator is completely safe.</strong> All passwords are generated locally in your browser using cryptographic functions (crypto.getRandomValues()). We never store, transmit, or have access to any passwords you generate. The entire process happens on your device, ensuring complete privacy and security.
                            </p>
                          </div>

                          {/* FAQ Item 2 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">2</span>
                              <span>How long should my password be?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              We recommend <strong className="text-blue-600">at least 12-16 characters</strong> for most accounts. For high-security accounts (banking, work), consider <strong className="text-purple-600">20+ characters</strong>. Longer passwords are exponentially harder to crack - a 12-character password might take centuries to crack, while an 8-character password could be cracked in hours or days.
                            </p>
                          </div>

                          {/* FAQ Item 3 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">3</span>
                              <span>Should I include symbols in my passwords?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              <strong className="text-green-600">Yes, including symbols significantly increases password strength</strong> by expanding the character pool. However, some websites don't allow certain symbols, so you may need to regenerate without symbols if you encounter issues. Always test your password on the target website before finalizing it.
                            </p>
                          </div>

                          {/* FAQ Item 4 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">4</span>
                              <span>What does "exclude ambiguous characters" mean?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              Ambiguous characters like <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">0</code> (zero), <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">O</code> (letter O), <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">l</code> (lowercase L), and <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">I</code> (uppercase i) can be confused when typing, especially with certain fonts. Excluding them makes passwords easier to type accurately but slightly reduces password strength. Use this option if you frequently type passwords manually.
                            </p>
                          </div>

                          {/* FAQ Item 5 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">5</span>
                              <span>How often should I change my passwords?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              Change passwords <strong className="text-red-600">immediately if there's a security breach</strong> at the service or if you suspect your account has been compromised. Otherwise, strong unique passwords don't need regular changes unless required by your organization's policy. Focus on using unique passwords for each account rather than frequently changing them.
                            </p>
                          </div>

                          {/* FAQ Item 6 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">6</span>
                              <span>Should I use the same password for multiple accounts?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              <strong className="text-red-600">Never!</strong> Each account should have a unique password. If one account is compromised, unique passwords prevent hackers from accessing your other accounts through "credential stuffing" attacks. Use a password manager to store and manage unique passwords for all your accounts.
                            </p>
                          </div>

                          {/* FAQ Item 7 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">7</span>
                              <span>What's the difference between a strong and weak password?</span>
                            </h2>
                            <div className="text-lg text-gray-700 leading-relaxed ml-11 space-y-3">
                              <p>Strong passwords are long (12+ characters), use multiple character types (uppercase, lowercase, numbers, symbols), and are completely random.</p>
                              <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-4 space-y-2">
                                <p><span className="text-red-600 font-semibold">❌ Weak:</span> <code className="bg-red-100 px-2 py-1 rounded font-mono text-sm">password123</code></p>
                                <p><span className="text-green-600 font-semibold">✅ Strong:</span> <code className="bg-green-100 px-2 py-1 rounded font-mono text-sm">K9#mX7$nQ2vL8@pR</code></p>
                              </div>
                            </div>
                          </div>

                          {/* FAQ Item 8 */}
                          <div className="faq-item animate-fade-in-delayed border-b border-gray-200 pb-8 hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">8</span>
                              <span>Should I write down my passwords?</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed ml-11">
                              It's better to use a <strong className="text-blue-600">reputable password manager</strong>, but writing passwords down and storing them securely (like in a locked drawer) is better than using weak, memorable passwords. <strong className="text-red-600">Never store passwords</strong> in easily accessible places like sticky notes on your monitor or unencrypted digital files.
                            </p>
                          </div>

                          {/* FAQ Item 9 */}
                          <div className="faq-item animate-fade-in-delayed hover:bg-blue-50/30 rounded-xl p-6 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-start space-x-3">
                              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">9</span>
                              <span>What should I do if I think my password was compromised?</span>
                            </h2>
                            <div className="text-lg text-gray-700 leading-relaxed ml-11">
                              <p className="mb-3"><strong className="text-red-600">Act immediately:</strong></p>
                              <ol className="space-y-2 list-decimal list-inside bg-yellow-50 rounded-lg p-4">
                                <li>Change the password on the affected account</li>
                                <li>Check for unauthorized activity</li>
                                <li>If you used the same password elsewhere, change those too</li>
                                <li>Enable two-factor authentication if available</li>
                                <li>Monitor your accounts for unusual activity</li>
                              </ol>
                              <p className="mt-3">Consider using a service like <strong className="text-blue-600">"Have I Been Pwned"</strong> to check if your email appears in known data breaches.</p>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Call to Action */}
                        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-2xl p-8 shadow-lg shadow-blue-500/10 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
                          <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center justify-center space-x-2">
                              <span>🔐</span>
                              <span>Ready to Create Secure Passwords?</span>
                            </h3>
                            <p className="text-xl text-blue-700 mb-6 max-w-2xl mx-auto">
                              Use our password generator to create strong, unique passwords for all your accounts.
                            </p>
                            <Link 
                              href="/password"
                              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            >
                              <span className="mr-3">🚀</span>
                              Generate Secure Password
                              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ SIDEBAR AD - Only render when ads enabled */}
                    {ADSENSE_ENABLED && (
                      <div className="lg:col-span-1">
                        <div className="space-y-8">
                          <GoogleAdUnit size="300x250" placement="faqSidebar" />
                          
                          {/* MOVED INLINE AD TO SIDEBAR FOR BETTER UX */}
                          <div className="sticky top-96">
                            <GoogleAdUnit size="336x280" placement="contentInline" responsive />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* BOTTOM BANNER AD - Hidden until Week 7 */}
                  <GoogleAdUnit size="728x90" placement="bottomBanner" responsive />
                </div>
              </div>
              
              {/* RIGHT SIDEBAR ADS - Only render when ads enabled */}
              {ADSENSE_ENABLED && (
                <div className="hidden xl:block xl:col-span-2">
                  <div className="space-y-6">
                    <div className="sticky top-8">
                      <GoogleAdUnit size="160x600" placement="rightSidebar" />
                    </div>
                    <div className="sticky top-96">
                      <GoogleAdUnit size="300x250" placement="rightSidebar2" />
                    </div>
                    <div className="sticky top-[600px]">
                      <GoogleAdUnit size="300x250" placement="rightSidebar3" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}