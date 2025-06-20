import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  
  const router = useRouter();

  // Character sets
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const ambiguous = '0Ol1';

  // Generate password function
  const generatePassword = () => {
    let charset = '';
    
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    
    if (excludeAmbiguous) {
      charset = charset.split('').filter(char => !ambiguous.includes(char)).join('');
    }
    
    if (charset === '') {
      alert('Please select at least one character type!');
      return;
    }
    
    let result = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      result += charset[array[i] % charset.length];
    }
    
    setPassword(result);
  };

  // Copy to clipboard function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
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
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Password Generator
          </h1>

          {/* Quick Usage Guide */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Guide:</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>1.</strong> Adjust password length with the slider</p>
              <p><strong>2.</strong> Select character types you want to include</p>
              <p><strong>3.</strong> Click "Generate Password"</p>
              <p><strong>4.</strong> Copy your secure password</p>
            </div>
          </div>

          {/* Password Display */}
          <div className="mb-6">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 font-mono text-lg text-center min-h-[60px] flex items-center justify-center break-all overflow-hidden">
              {password || "Generated password will appear here"}
            </div>
          </div>

          {/* Length Control */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Length: {length}
            </label>
            <input
              type="range"
              min="8"
              max="128"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>8</span>
              <span>128</span>
            </div>
          </div>

          {/* Character Type Options */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Include Characters:
            </label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg text-gray-700">Uppercase (A-Z)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg text-gray-700">Lowercase (a-z)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg text-gray-700">Numbers (0-9)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg text-gray-700">Symbols (!@#$%^&*)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={excludeAmbiguous}
                  onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg text-gray-700">Exclude Ambiguous (0, O, l, I)</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <div className="mb-6">
            <button
              onClick={generatePassword}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Generate Password
            </button>
          </div>

          {/* Copy Button */}
          {password && (
            <div className="mb-4">
              <button
                onClick={copyToClipboard}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
              >
                📋 Copy to Clipboard
              </button>
            </div>
          )}
        </div>

        {/* Tool Description Section */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            About Our Password Generator
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Our free password generator creates cryptographically secure, random passwords to protect your online accounts from cyber threats. In today's digital world, weak passwords are the #1 cause of data breaches and account compromises. This tool generates strong, unique passwords that are virtually impossible for hackers to crack using brute force attacks or dictionary methods.
            </p>
            
            <p>
              <strong>Why use our password generator?</strong> Unlike simple password creation methods, our tool uses your browser's built-in cryptographic functions (crypto.getRandomValues()) to ensure true randomness. Every password is generated locally on your device - we never store, transmit, or have access to your passwords. This client-side approach guarantees your privacy and security while providing military-grade password strength.
            </p>
            
            <p>
              Customize your passwords with adjustable length (8-128 characters), multiple character types (uppercase, lowercase, numbers, symbols), and the option to exclude ambiguous characters that might be confused when typing. Whether you need a password for banking, email, social media, or work accounts, our generator provides the perfect balance of security and usability for your specific needs.
            </p>
          </div>

          {/* FAQ Link Button */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Have questions about password security?
            </p>
            <button
              onClick={goToFAQ}
              className="inline-flex items-center px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition duration-200"
            >
              📋 View Password Security FAQ
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Enhanced Security & Best Practices Section */}
          <div className="mt-8 space-y-6">
            {/* Consolidated Privacy & Security Section */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                🔒 Privacy & Security Guarantee
              </h3>
              <div className="text-green-700 space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>✓ Zero Data Storage:</strong> All passwords generated locally in your browser.</p>
                    <p><strong>✓ No Network Transmission:</strong> Passwords never leave your device.</p>
                  </div>
                  <div>
                    <p><strong>✓ Cryptographically Secure:</strong> Uses crypto.getRandomValues() for true randomness.</p>
                    <p><strong>✓ No Cookies Required:</strong> Each session is completely independent.</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-3 mt-4">
                  <p className="text-sm text-green-800">
                    <strong>Verification Test:</strong> You can disconnect from the internet after loading this page - 
                    the password generator will continue working perfectly, proving no data leaves your device.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                💡 Password Best Practices
              </h3>
              <div className="text-blue-700 space-y-2">
                <p><strong>• Use a Password Manager:</strong> Store all passwords in a reputable password manager like Bitwarden, 1Password, or LastPass.</p>
                <p><strong>• Enable Two-Factor Authentication:</strong> Add an extra security layer wherever available.</p>
                <p><strong>• Never Reuse Passwords:</strong> Each account should have a unique password.</p>
                <p><strong>• Regular Security Checkups:</strong> Review and update passwords for critical accounts annually.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}