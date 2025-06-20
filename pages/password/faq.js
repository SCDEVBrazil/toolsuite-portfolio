import Head from 'next/head';
import Link from 'next/link';

export default function PasswordFAQ() {
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
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto">
          {/* Back to Generator Link */}
          <div className="mb-8">
            <Link 
              href="/password"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Password Generator
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Password Security FAQ
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about creating and managing secure passwords
            </p>
          </div>

          {/* FAQ Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              
              {/* FAQ Item 1 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Is it safe to use an online password generator?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Yes, our password generator is completely safe. All passwords are generated locally in your browser using cryptographic functions (crypto.getRandomValues()). We never store, transmit, or have access to any passwords you generate. The entire process happens on your device, ensuring complete privacy and security.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  How long should my password be?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We recommend at least 12-16 characters for most accounts. For high-security accounts (banking, work), consider 20+ characters. Longer passwords are exponentially harder to crack - a 12-character password might take centuries to crack, while an 8-character password could be cracked in hours or days.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Should I include symbols in my passwords?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Yes, including symbols significantly increases password strength by expanding the character pool. However, some websites don't allow certain symbols, so you may need to regenerate without symbols if you encounter issues. Always test your password on the target website before finalizing it.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  What does "exclude ambiguous characters" mean?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ambiguous characters like 0 (zero), O (letter O), l (lowercase L), and I (uppercase i) can be confused when typing, especially with certain fonts. Excluding them makes passwords easier to type accurately but slightly reduces password strength. Use this option if you frequently type passwords manually.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  How often should I change my passwords?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Change passwords immediately if there's a security breach at the service or if you suspect your account has been compromised. Otherwise, strong unique passwords don't need regular changes unless required by your organization's policy. Focus on using unique passwords for each account rather than frequently changing them.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Should I use the same password for multiple accounts?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Never! Each account should have a unique password. If one account is compromised, unique passwords prevent hackers from accessing your other accounts through "credential stuffing" attacks. Use a password manager to store and manage unique passwords for all your accounts.
                </p>
              </div>

              {/* FAQ Item 7 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  What's the difference between a strong and weak password?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Strong passwords are long (12+ characters), use multiple character types (uppercase, lowercase, numbers, symbols), and are completely random. Weak passwords are short, use common words, personal information, or predictable patterns. Examples: "password123" (weak) vs "K9#mX7$nQ2vL8@pR" (strong).
                </p>
              </div>

              {/* FAQ Item 8 */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Should I write down my passwords?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  It's better to use a reputable password manager, but writing passwords down and storing them securely (like in a locked drawer) is better than using weak, memorable passwords. Never store passwords in easily accessible places like sticky notes on your monitor or unencrypted digital files.
                </p>
              </div>

              {/* FAQ Item 9 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  What should I do if I think my password was compromised?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Act immediately: (1) Change the password on the affected account, (2) Check for unauthorized activity, (3) If you used the same password elsewhere, change those too, (4) Enable two-factor authentication if available, (5) Monitor your accounts for unusual activity. Consider using a service like "Have I Been Pwned" to check if your email appears in known data breaches.
                </p>
              </div>

            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Ready to Create Secure Passwords?
              </h3>
              <p className="text-blue-700 mb-4">
                Use our password generator to create strong, unique passwords for all your accounts.
              </p>
              <Link 
                href="/password"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
              >
                Generate Secure Password
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}