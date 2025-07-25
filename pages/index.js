import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { gtag } from '../pages/_app';

// AdSense Component for Homepage - HIDDEN until Week 7 implementation
const GoogleAdUnit = ({ size, placement, responsive = false }) => {
  // TODO: Enable in Week 7 - AdSense Setup & Optimization
  const ADSENSE_ENABLED = false; // Set to true when implementing AdSense in Week 7
  
  if (!ADSENSE_ENABLED) {
    return null; // Hide ad placeholders until AdSense implementation
  }
  const getAdStyles = () => {
    switch(placement) {
      case 'topBanner':
        return 'ad-top-banner bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-4 mb-8 shadow-lg border border-white/10';
      case 'featuresSidebar':
        return 'ad-features-sidebar bg-gray-800 backdrop-blur-sm rounded-xl p-4 shadow-lg sticky top-8';
      case 'toolsInline':
        return 'ad-tools-inline my-12 bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 text-center shadow-lg border border-white/10';
      case 'ctaSidebar':
        return 'ad-cta-sidebar bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 shadow-lg';
      case 'bottomBanner':
        return 'ad-bottom-banner mt-12 bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-4 shadow-lg border border-white/10';
      case 'leftSidebar':
      case 'rightSidebar':
        return 'ad-sidebar bg-gray-800 backdrop-blur-sm rounded-lg p-3 shadow-md border border-white/10';
      case 'leftSidebar2':
      case 'rightSidebar2':
        return 'ad-sidebar-secondary bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-3 shadow-md border border-white/10';
      case 'rightSidebar3':
        return 'ad-sidebar-bottom bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-3 shadow-md border border-white/10';
      default:
        return 'ad-unit bg-gray-800 rounded-lg p-4';
    }
  };
  
  return (
    <div className={getAdStyles()}>
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
        Advertisement
      </p>
      <div className="bg-gray-900 rounded-lg min-h-[90px] flex items-center justify-center border-2 border-dashed border-white/20">
        <span className="text-gray-400 text-sm">AdSense {size} - {placement}</span>
      </div>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  
  // Check if ads are enabled to determine layout
  const ADSENSE_ENABLED = false; // Set to true when implementing AdSense in Week 7

  // Scroll to tools section function
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <>
      <Head>
        <title>
          ToolSuite - Free Online Utility Tools for Everyone | Secure & Private
        </title>
        <meta
          name="description"
          content="Access powerful, free online utility tools including password generators, calculators, converters and more. Secure, private, and no registration required."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://toolsuite.info" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="ToolSuite - Free Online Utility Tools for Everyone"
        />
        <meta
          property="og:description"
          content="Access powerful, free online utility tools including password generators, calculators, converters and more."
        />
        <meta property="og:url" content="https://toolsuite.info" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ToolSuite" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ToolSuite - Free Online Utility Tools"
        />
        <meta
          name="twitter:description"
          content="Access powerful, free online utility tools. Secure, private, and no registration required."
        />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ToolSuite",
              description: "Free online utility tools collection",
              url: "https://toolsuite.info",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://toolsuite.info/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Enhanced Custom Styles */}
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-delayed {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 0.8s ease-out; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.6s ease-out; }

          .tool-card:nth-child(1) { animation-delay: 0.2s; }
          .tool-card:nth-child(2) { animation-delay: 0.4s; }
          .tool-card:nth-child(3) { animation-delay: 0.6s; }

          .shine-border {
            position: relative;
            overflow: hidden;
          }
          
          .shine-border::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            animation: shine 3s infinite;
            z-index: 1;
          }

          .interactive-grid {
            background-image: 
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: float 8s ease-in-out infinite;
          }
        `}</style>
      </Head>

      {/* Enhanced Page Layout with Black Theme */}
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Interactive Grid Background */}
        <div className="interactive-grid absolute inset-0 opacity-30"></div>
        
        <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          {/* Conditional Layout - Full width when ads disabled, grid when enabled */}
          <div className="max-w-full mx-auto">
            <div
              className={
                ADSENSE_ENABLED
                  ? "grid grid-cols-12 gap-4"
                  : "max-w-6xl mx-auto"
              }
            >
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
              <div
                className={
                  ADSENSE_ENABLED ? "col-span-12 xl:col-span-8" : "w-full"
                }
              >
                <div
                  className={
                    ADSENSE_ENABLED
                      ? "max-w-6xl mx-auto space-y-8"
                      : "space-y-8"
                  }
                >
                  {/* TOP BANNER AD - Highest Revenue Potential */}
                  <GoogleAdUnit
                    size="728x90"
                    placement="topBanner"
                    responsive
                  />

                  {/* Hero Section with Shine Border */}
                  <div className="shine-border border border-white/10 rounded-xl overflow-hidden bg-gray-800 backdrop-blur-sm">
                    <div className="text-center pt-32 pb-16 animate-slide-up">
                      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        ToolSuite
                      </h1>
                      <p className="text-2xl md:text-3xl text-gray-400 mb-4 font-normal">
                        Free Online Utility Tools
                      </p>
                      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                        Access powerful, secure utility tools designed to protect
                        and empower you in your digital life. All tools are{" "}
                        <strong className="text-white">completely free</strong>
                        , run locally in your browser, and
                        <strong className="text-white">
                          {" "}
                          never store your data
                        </strong>
                        .
                      </p>
                      <div className="flex gap-4 justify-center">
                        <a
                          href="/password"
                          onClick={() =>
                            gtag({
                              action: "click_cta_button",
                              category: "navigation",
                              label: "try_password_generator_cta",
                              value: 1,
                            })
                          }
                          className="inline-flex items-center gap-2 border border-white/10 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition duration-200 backdrop-blur-sm"
                        >
                          <span className="text-sm">🔐</span>
                          Try Password Generator
                        </a>
                        <button 
                          onClick={scrollToTools}
                          className="bg-white text-black hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-200"
                        >
                          View All Tools
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Features Highlight with conditional sidebar */}
                  <div
                    className={
                      ADSENSE_ENABLED
                        ? "grid lg:grid-cols-4 gap-8 mb-16"
                        : "mb-16"
                    }
                  >
                    <div
                      className={ADSENSE_ENABLED ? "lg:col-span-3" : "w-full"}
                    >
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="shine-border border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 text-center shadow-lg animate-fade-in-delayed">
                          <div className="text-4xl mb-4">🛡️</div>
                          <h3 className="text-xl font-medium text-white mb-2">
                            Privacy First
                          </h3>
                          <p className="text-gray-400">
                            All processing happens locally in your browser. We
                            never see or store your data.
                          </p>
                        </div>

                        <div className="shine-border border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 text-center shadow-lg animate-fade-in-delayed">
                          <div className="text-4xl mb-4">🔒</div>
                          <h3 className="text-xl font-medium text-white mb-2">
                            Cryptographically Secure
                          </h3>
                          <p className="text-gray-400">
                            Using military-grade security standards for all
                            sensitive operations.
                          </p>
                        </div>

                        <div className="shine-border border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 text-center shadow-lg animate-fade-in-delayed">
                          <div className="text-4xl mb-4">⚡</div>
                          <h3 className="text-xl font-medium text-white mb-2">
                            Lightning Fast
                          </h3>
                          <p className="text-gray-400">
                            Optimized for speed and performance across all
                            devices and browsers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FEATURES SIDEBAR AD - Only render when ads enabled */}
                    {ADSENSE_ENABLED && (
                      <div className="lg:col-span-1">
                        <GoogleAdUnit
                          size="300x250"
                          placement="featuresSidebar"
                        />
                      </div>
                    )}
                  </div>

                  {/* Available Tools Section */}
                  <div id="tools-section" className="shine-border border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm shadow-2xl p-8 md:p-12 animate-slide-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
                      Available Tools
                    </h2>
                    <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                      Professional-grade utility tools, completely free and
                      secure
                    </p>

                    {/* INLINE TOOLS AD - Mid-Content Placement */}
                    <GoogleAdUnit
                      size="336x280"
                      placement="toolsInline"
                      responsive
                    />

                    {/* Tools Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* Password Generator - Live Tool */}
                      <div className="tool-card animate-fade-in-delayed group">
                        <a
                          href="/password"
                          onClick={() =>
                            gtag({
                              action: "click_tool_card",
                              category: "navigation",
                              label: "password_generator_from_homepage",
                              value: 1,
                            })
                          }
                          className="block shine-border border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 shadow-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl animate-float">🔐</div>
                            <div>
                              <h3 className="text-xl font-medium text-white group-hover:text-gray-200">
                                Password Generator
                              </h3>
                              <div className="flex items-center space-x-2">
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm text-green-400 font-medium">
                                  Live Now
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">
                            Generate cryptographically secure, random passwords
                            with customizable length and character types.
                          </p>
                          <div className="flex items-center text-gray-300 font-medium group-hover:text-white">
                            <span className="mr-2">Try it now</span>
                            <svg
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>

                      {/* Coming Soon Tools */}
                      <div className="tool-card animate-fade-in-delayed group">
                        <div className="border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 shadow-lg opacity-60">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl opacity-50">🧮</div>
                            <div>
                              <h3 className="text-xl font-medium text-gray-300">
                                BMI Calculator
                              </h3>
                              <span className="text-sm text-gray-400 font-medium">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">
                            Calculate your Body Mass Index with detailed health
                            insights and recommendations.
                          </p>
                          <div className="text-gray-400 font-medium">
                            Week 3 Release
                          </div>
                        </div>
                      </div>

                      <div className="tool-card animate-fade-in-delayed group">
                        <div className="border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 shadow-lg opacity-60">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl opacity-50">🏠</div>
                            <div>
                              <h3 className="text-xl font-medium text-gray-300">
                                Mortgage Calculator
                              </h3>
                              <span className="text-sm text-gray-400 font-medium">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">
                            Calculate monthly payments, interest, and
                            amortization schedules for home loans.
                          </p>
                          <div className="text-gray-400 font-medium">
                            Week 5 Release
                          </div>
                        </div>
                      </div>

                      <div className="tool-card animate-fade-in-delayed group">
                        <div className="border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 shadow-lg opacity-60">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl opacity-50">📐</div>
                            <div>
                              <h3 className="text-xl font-medium text-gray-300">
                                Unit Converter
                              </h3>
                              <span className="text-sm text-gray-400 font-medium">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">
                            Convert between different units of measurement with
                            precision and ease.
                          </p>
                          <div className="text-gray-400 font-medium">
                            Week 6 Release
                          </div>
                        </div>
                      </div>

                      <div className="tool-card animate-fade-in-delayed group">
                        <div className="border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 shadow-lg opacity-60">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl opacity-50">📱</div>
                            <div>
                              <h3 className="text-xl font-medium text-gray-300">
                                QR Code Generator
                              </h3>
                              <span className="text-sm text-gray-400 font-medium">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">
                            Create custom QR codes for URLs, text, contact info,
                            and more.
                          </p>
                          <div className="text-gray-400 font-medium">
                            Week 8 Release
                          </div>
                        </div>
                      </div>

                      <div className="tool-card animate-fade-in-delayed group">
                        <div className="border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-6 shadow-lg opacity-60">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl opacity-50">🎨</div>
                            <div>
                              <h3 className="text-xl font-medium text-gray-300">
                                More Tools
                              </h3>
                              <span className="text-sm text-gray-300 font-medium">
                                52+ Planned
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">
                            We're building a comprehensive suite of utility
                            tools for every need.
                          </p>
                          <div className="text-gray-400 font-medium">
                            Weekly Releases
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action Section with conditional sidebar */}
                  <div
                    className={
                      ADSENSE_ENABLED
                        ? "grid lg:grid-cols-4 gap-8 mt-16"
                        : "mt-16"
                    }
                  >
                    <div
                      className={ADSENSE_ENABLED ? "lg:col-span-3" : "w-full"}
                    >
                      <div className="text-center shine-border border border-white/10 rounded-xl bg-gray-800 backdrop-blur-sm p-8 shadow-lg relative overflow-hidden animate-fade-in-delayed">
                        <div className="relative z-10">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                            Ready to Get Started?
                          </h3>
                          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Try our password generator and experience the
                            security and convenience of ToolSuite.
                          </p>
                          <a
                            href="/password"
                            onClick={() =>
                              gtag({
                                action: "click_cta_button",
                                category: "navigation",
                                label: "try_password_generator_cta",
                                value: 1,
                              })
                            }
                            className="inline-block bg-white text-black hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-200"
                          >
                            Try Password Generator
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* CTA SIDEBAR AD - Only render when ads enabled */}
                    {ADSENSE_ENABLED && (
                      <div className="lg:col-span-1">
                        <GoogleAdUnit size="300x250" placement="ctaSidebar" />
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <footer className="mt-16 pt-8 border-t border-white/10 text-center">
                    <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/10">
                      <p className="text-gray-400 mb-2">
                        <strong className="text-white">ToolSuite</strong> -
                        Professional utility tools for everyone
                      </p>
                      <p className="text-sm text-gray-400">
                        Built with security, privacy, and user experience in
                        mind. All tools are free and always will be.
                      </p>
                      <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-400">
                        <span>🔒 Secure</span>
                        <span>🛡️ Private</span>
                        <span>⚡ Fast</span>
                        <span>💰 Free</span>
                      </div>
                    </div>
                  </footer>

                  {/* BOTTOM BANNER AD - Exit Intent */}
                  <GoogleAdUnit
                    size="728x90"
                    placement="bottomBanner"
                    responsive
                  />
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