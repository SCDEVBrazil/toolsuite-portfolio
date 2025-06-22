import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { gtag } from '../pages/_app';

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
        return 'ad-top-banner bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 mb-8 shadow-lg border border-gray-600/50';
      case 'resultsSidebar':
        return 'ad-results-sidebar bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg';
      case 'contentInline':
        return 'ad-content-inline my-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 text-center shadow-lg border border-gray-600/30';
      case 'bottomBanner':
        return 'ad-bottom-banner mt-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 shadow-lg border border-gray-600/50';
      case 'leftSidebar':
      case 'rightSidebar':
        return 'ad-sidebar bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-700/50';
      case 'leftSidebar2':
      case 'rightSidebar2':
        return 'ad-sidebar-secondary bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg p-3 shadow-md border border-gray-500/50';
      case 'rightSidebar3':
        return 'ad-sidebar-bottom bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-3 shadow-md border border-gray-600/50';
      default:
        return 'ad-unit bg-gray-800 rounded-lg p-4';
    }
  };
  
  return (
    <div className={getAdStyles()}>
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
        Advertisement
      </p>
      <div className="bg-gray-700 rounded-lg min-h-[90px] flex items-center justify-center border-2 border-dashed border-gray-600">
        <span className="text-gray-400 text-sm">AdSense {size} - {placement}</span>
        {/* Replace with actual AdSense code:
        <ins 
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format={responsive ? 'auto' : 'rectangle'}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
        */}
      </div>
    </div>
  );
};

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const router = useRouter();

  // Check if ads are enabled to determine layout
  const ADSENSE_ENABLED = false; // Set to true when implementing AdSense in Week 7

  // Character sets
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const ambiguous = '0Ol1';

  // Enhanced generate password function with animation and GA4 tracking
const generatePassword = async () => {
  setIsGenerating(true);
  
  // Brief delay for animation effect
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let charset = '';
  
  if (includeUppercase) charset += uppercase;
  if (includeLowercase) charset += lowercase;
  if (includeNumbers) charset += numbers;
  if (includeSymbols) charset += symbols;
  
  if (excludeAmbiguous) {
    charset = charset.split('').filter(char => !ambiguous.includes(char)).join('');
  }
  
  if (charset === '') {
    setFeedback('Please select at least one character type!');
    setTimeout(() => setFeedback(''), 3000);
    setIsGenerating(false);
    return;
  }
  
  let result = '';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < length; i++) {
    result += charset[array[i] % charset.length];
  }
  
  setPassword(result);
  setIsGenerating(false);
  setFeedback('Password generated successfully! ✓');
  setTimeout(() => setFeedback(''), 2000);
  
  // Track password generation event in Google Analytics
  gtag({
    action: 'generate_password',
    category: 'tool_usage',
    label: `length_${length}_types_${[
      includeUppercase && 'upper',
      includeLowercase && 'lower', 
      includeNumbers && 'numbers',
      includeSymbols && 'symbols'
    ].filter(Boolean).join('_')}`,
    value: length
  });
};

  // Enhanced copy to clipboard function with GA4 tracking
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(password);
    setFeedback('Password copied to clipboard! ✓');
    setTimeout(() => setFeedback(''), 2000);
    
    // Track copy event in Google Analytics
    gtag({
      action: 'copy_password',
      category: 'tool_usage',
      label: 'clipboard_success',
      value: password.length
    });
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setFeedback('Password copied to clipboard! ✓');
      setTimeout(() => setFeedback(''), 2000);
      
      // Track copy event in Google Analytics (fallback method)
      gtag({
        action: 'copy_password',
        category: 'tool_usage',
        label: 'clipboard_fallback',
        value: password.length
      });
    } catch (fallbackErr) {
      setFeedback('Failed to copy password');
      setTimeout(() => setFeedback(''), 2000);
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

  // Navigate to FAQ page
  const goToFAQ = () => {
    router.push('/password/faq');
  };

  return (
    <>
      <Head>
        <title>Free Password Generator - Secure Random Passwords | ToolSuite</title>
        <meta name="description" content="Generate secure, random passwords instantly. Cryptographically secure with customizable length and character types. No data stored - completely private and safe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://password.toolsuite.info" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Free Password Generator - Secure Random Passwords" />
        <meta property="og:description" content="Generate secure, random passwords instantly. Cryptographically secure with customizable length and character types." />
        <meta property="og:url" content="https://password.toolsuite.info" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ToolSuite" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free Password Generator - Secure Random Passwords" />
        <meta name="twitter:description" content="Generate secure, random passwords instantly. Cryptographically secure and completely private." />
        
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Password Generator",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Generate cryptographically secure, random passwords with customizable length and character types.",
              "url": "https://password.toolsuite.info"
            })
          }}
        />
        
        {/* Enhanced Custom Styles */}
        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(148, 163, 184, 0.4); }
            50% { box-shadow: 0 0 30px rgba(148, 163, 184, 0.6); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-pulse-glow { animation: pulse-glow 2s infinite; }
          .animate-slide-up { animation: slide-up 0.6s ease-out; }
        `}</style>
      </Head>

      {/* Enhanced Page Layout with Dark Professional Theme */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Subtle Dark Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-slate-700/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-600/20 rounded-full filter blur-3xl opacity-30"></div>
        
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
                  
                  {/* Enhanced Quick Usage Guide */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-6 shadow-lg relative overflow-hidden animate-slide-up">
                    <div className="relative z-10">
                      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center space-x-2">
                        <span className="text-slate-400">→</span>
                        <span>Quick Guide</span>
                      </h2>
                      <ol className="space-y-3 text-slate-200">
                        <li className="flex items-start space-x-3">
                          <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-0.5">1</span>
                          <span>Adjust password length with the slider below</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-0.5">2</span>
                          <span>Select character types you want to include</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-0.5">3</span>
                          <span>Click "Generate Password" for instant results</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-0.5">4</span>
                          <span>Copy your secure password to use immediately</span>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* Enhanced Main Tool Card with conditional sidebar */}
                  <div className={ADSENSE_ENABLED ? "grid lg:grid-cols-4 gap-8" : "max-w-4xl mx-auto"}>
                    <div className={ADSENSE_ENABLED ? "lg:col-span-3" : "w-full"}>
                      <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-600/50 animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-light text-white text-center mb-8 leading-tight tracking-wide">
                          Password Generator
                        </h1>

                        {/* Enhanced Password Display */}
                        <div className="mb-8">
                          <div className={`bg-gradient-to-r from-slate-700 to-slate-600 border-2 border-slate-500 rounded-2xl p-6 font-mono text-lg text-center min-h-[80px] flex items-center justify-center break-all transition-all duration-300 text-white ${password ? 'animate-pulse-glow' : ''}`}>
                            {password || (
                              <span className="text-slate-300">
                                Your secure password will appear here
                              </span>
                            )}
                          </div>
                          
                          {/* Feedback Messages */}
                          {feedback && (
                            <div className="mt-3 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-slate-700 text-slate-100 border border-slate-600">
                                {feedback}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Enhanced Length Control */}
                        <div className="mb-8">
                          <label className="block text-lg font-medium text-slate-200 mb-4">
                            Password Length: <span className="text-2xl text-white font-light">{length}</span>
                          </label>
                          <input
                            type="range"
                            min="8"
                            max="128"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full h-3 bg-slate-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-200"
                            style={{
                              background: `linear-gradient(to right, #cbd5e1 0%, #cbd5e1 ${((length - 8) / (128 - 8)) * 100}%, #475569 ${((length - 8) / (128 - 8)) * 100}%, #475569 100%)`
                            }}
                          />
                          <div className="flex justify-between text-sm text-slate-300 mt-2">
                            <span className="font-medium">8 (Minimum)</span>
                            <span className="font-medium">128 (Maximum)</span>
                          </div>
                        </div>

                        {/* Enhanced Character Type Options */}
                        <div className="mb-8">
                          <label className="block text-lg font-medium text-slate-200 mb-4">
                            Include Characters:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="flex items-center p-4 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                className="w-5 h-5 rounded border border-slate-500 text-slate-400 focus:ring-slate-400 focus:ring-1 transition-all duration-200"
                              />
                              <span className="ml-3 text-lg text-slate-200 font-normal">Uppercase (A-Z)</span>
                            </label>

                            <label className="flex items-center p-4 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                                className="w-5 h-5 rounded border border-slate-500 text-slate-400 focus:ring-slate-400 focus:ring-1 transition-all duration-200"
                              />
                              <span className="ml-3 text-lg text-slate-200 font-normal">Lowercase (a-z)</span>
                            </label>

                            <label className="flex items-center p-4 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                className="w-5 h-5 rounded border border-slate-500 text-slate-400 focus:ring-slate-400 focus:ring-1 transition-all duration-200"
                              />
                              <span className="ml-3 text-lg text-slate-200 font-normal">Numbers (0-9)</span>
                            </label>

                            <label className="flex items-center p-4 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                className="w-5 h-5 rounded border border-slate-500 text-slate-400 focus:ring-slate-400 focus:ring-1 transition-all duration-200"
                              />
                              <span className="ml-3 text-lg text-slate-200 font-normal">Symbols (!@#$%^&*)</span>
                            </label>
                          </div>
                          
                          <label className="flex items-center p-4 mt-4 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-700/30 transition-all duration-200 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={excludeAmbiguous}
                              onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                              className="w-5 h-5 rounded border border-slate-500 text-slate-400 focus:ring-slate-400 focus:ring-1 transition-all duration-200"
                            />
                            <span className="ml-3 text-lg text-slate-200 font-normal">Exclude Ambiguous Characters (0, O, l, I)</span>
                          </label>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <button
                            onClick={generatePassword}
                            disabled={isGenerating}
                            className={`flex-1 inline-flex items-center justify-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-600 ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}`}
                          >
                            {isGenerating ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                              </>
                            ) : (
                              "Generate Password"
                            )}
                          </button>

                          {password && (
                            <button
                              onClick={copyToClipboard}
                              className="flex-1 sm:flex-none inline-flex items-center justify-center px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 border border-slate-500"
                            >
                              Copy Password
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* RESULTS SIDEBAR AD - Only render when ads enabled */}
                    {ADSENSE_ENABLED && (
                      <div className="lg:col-span-1">
                        <div className="sticky top-8">
                          <GoogleAdUnit size="300x250" placement="resultsSidebar" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Tool Description Section */}
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-slate-600/50 animate-slide-up">
                    <h2 className="text-3xl font-light text-white mb-8 text-center">
                      About Our Password Generator
                    </h2>
                    
                    <div className="prose prose-lg max-w-none text-slate-200 space-y-6">
                      <p className="text-xl leading-relaxed">
                        Our free password generator creates <strong className="text-white">cryptographically secure, random passwords</strong> to protect your online accounts from cyber threats. In today's digital world, weak passwords are the #1 cause of data breaches and account compromises. This tool generates strong, unique passwords that are virtually impossible for hackers to crack using brute force attacks or dictionary methods.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        <strong className="text-white">Why use our password generator?</strong> Unlike simple password creation methods, our tool uses your browser's built-in cryptographic functions (crypto.getRandomValues()) to ensure true randomness. Every password is generated locally on your device - we never store, transmit, or have access to your passwords. This client-side approach guarantees your privacy and security while providing military-grade password strength.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Customize your passwords with adjustable length (8-128 characters), multiple character types (uppercase, lowercase, numbers, symbols), and the option to exclude ambiguous characters that might be confused when typing. Whether you need a password for banking, email, social media, or work accounts, our generator provides the perfect balance of security and usability for your specific needs.
                      </p>
                    </div>

                    {/* Enhanced FAQ Link Button */}
                    <div className="mt-10 text-center">
                      <p className="text-xl text-slate-300 mb-6">
                        Have questions about password security?
                      </p>
                      <button
                        onClick={goToFAQ}
                        className="inline-flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg border border-slate-600"
                      >
                        View Password Security FAQ
                        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* INLINE CONTENT AD - Hidden until Week 7 */}
                  <GoogleAdUnit size="336x280" placement="contentInline" responsive />

                  {/* Enhanced Security & Best Practices Sections */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Enhanced Security Section */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 shadow-lg relative overflow-hidden animate-slide-up">
                      <div className="relative z-10">
                        <h3 className="text-2xl font-light text-white mb-6 flex items-center space-x-3">
                          <span className="text-slate-300">•</span>
                          <span>Security & Privacy</span>
                        </h3>
                        <div className="text-slate-200 space-y-4">
                          <div className="grid gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <h4 className="font-medium text-white mb-2">Cryptographic Security</h4>
                              <p className="text-sm text-slate-300">Uses crypto.getRandomValues() for military-grade randomness</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <h4 className="font-medium text-white mb-2">Zero Data Storage</h4>
                              <p className="text-sm text-slate-300">All passwords generated locally - never stored or transmitted</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-4">
                              <h4 className="font-medium text-white mb-2">Privacy Guarantee</h4>
                              <p className="text-sm text-slate-300">No cookies, tracking, or personal information required</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Best Practices Section */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 shadow-lg relative overflow-hidden animate-slide-up">
                      <div className="relative z-10">
                        <h3 className="text-2xl font-light text-white mb-6 flex items-center space-x-3">
                          <span className="text-slate-300">•</span>
                          <span>Best Practices</span>
                        </h3>
                        <div className="text-slate-200 space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-1">1</span>
                              <span><strong className="text-white">Use a Password Manager:</strong> Store passwords in Bitwarden, 1Password, or LastPass</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-1">2</span>
                              <span><strong className="text-white">Enable 2FA:</strong> Add two-factor authentication wherever available</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-1">3</span>
                              <span><strong className="text-white">Unique Passwords:</strong> Never reuse passwords across accounts</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <span className="bg-slate-700 text-slate-200 text-xs font-medium px-2 py-1 rounded mt-1">4</span>
                              <span><strong className="text-white">Regular Updates:</strong> Change critical passwords annually</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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