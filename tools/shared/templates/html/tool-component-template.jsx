// JSX Component Template for ToolSuite Tools
// Extracted from successful password generator structure

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { generateToolSEO } from '../shared/templates/seo/tool-seo-template';
import { toolStyling } from '../shared/templates/css/tool-styling-template';
import { 
  copyToClipboard, 
  useToolState, 
  validateRange 
} from '../shared/templates/js/tool-functions-template';

// ==================== MAIN TOOL COMPONENT TEMPLATE ====================

const ToolTemplate = () => {
  // Tool state management
  const {
    state,
    updateState,
    loading,
    setLoading,
    error,
    setError
  } = useToolState({
    result: '',
    settings: {
      // Tool-specific settings here
    },
    feedback: ''
  });

  // SEO configuration
  const seoConfig = generateToolSEO({
    toolName: "Tool Name",
    toolDescription: "Tool Description",
    toolCategory: "Utility",
    subdomain: "toolname",
    keywords: ["keyword1", "keyword2", "keyword3"]
  });

  // Main tool logic function
  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Tool-specific generation logic here
      const result = "Generated result";
      updateState({ result });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Copy result to clipboard
  const handleCopy = async () => {
    if (state.result) {
      await copyToClipboard(state.result, (message) => 
        updateState({ feedback: message })
      );
    }
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta property="og:description" content={seoConfig.openGraph.description} />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta name="twitter:description" content={seoConfig.twitter.description} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.schema)}
        </script>
      </Head>

      {/* Main Page Layout */}
      <div className={toolStyling.layout.pageContainer}>
        <div className={toolStyling.layout.contentWrapper}>
          
          {/* Quick Usage Guide */}
          <QuickGuideSection />
          
          {/* Main Tool Card */}
          <div className={toolStyling.layout.mainCard}>
            <h1 className={toolStyling.typography.pageTitle}>
              Tool Name
            </h1>
            
            {/* Tool Input Section */}
            <ToolInputSection 
              settings={state.settings}
              onSettingsChange={(newSettings) => updateState({ settings: newSettings })}
              onGenerate={handleGenerate}
              loading={loading}
              error={error}
            />
            
            {/* Result Display Section */}
            {state.result && (
              <ResultDisplaySection 
                result={state.result}
                feedback={state.feedback}
                onCopy={handleCopy}
              />
            )}
          </div>
          
          {/* Tool Description */}
          <ToolDescriptionSection />
          
          {/* Security & Privacy Information */}
          <SecurityPrivacySection />
          
          {/* Best Practices */}
          <BestPracticesSection />
          
        </div>
      </div>
    </>
  );
};

// ==================== REUSABLE COMPONENT TEMPLATES ====================

// Quick usage guide component
const QuickGuideSection = () => (
  <div className={toolStyling.infoSections.guide.container}>
    <h2 className={toolStyling.infoSections.guide.title}>
      🚀 Quick Guide
    </h2>
    <ol className={toolStyling.lists.stepsList}>
      <li className={toolStyling.lists.stepItem}>
        <span className={toolStyling.lists.stepNumber}>1</span>
        <span>Configure your settings below</span>
      </li>
      <li className={toolStyling.lists.stepItem}>
        <span className={toolStyling.lists.stepNumber}>2</span>
        <span>Click "Generate" to create your result</span>
      </li>
      <li className={toolStyling.lists.stepItem}>
        <span className={toolStyling.lists.stepNumber}>3</span>
        <span>Copy the result to use it</span>
      </li>
      <li className={toolStyling.lists.stepItem}>
        <span className={toolStyling.lists.stepNumber}>4</span>
        <span>Generate as many times as needed</span>
      </li>
    </ol>
  </div>
);

// Tool input section template
const ToolInputSection = ({ settings, onSettingsChange, onGenerate, loading, error }) => (
  <div className="space-y-6">
    {/* Settings would go here - customize per tool */}
    <div className={toolStyling.form.inputGroup}>
      {/* Tool-specific input controls */}
    </div>
    
    {/* Generate Button */}
    <div className="text-center">
      <button
        onClick={onGenerate}
        disabled={loading}
        className={`${toolStyling.buttons.primary} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </div>
    
    {/* Error Display */}
    {error && (
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-center">
        {error}
      </div>
    )}
  </div>
);

// Result display section template
const ResultDisplaySection = ({ result, feedback, onCopy }) => (
  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
    <h3 className={toolStyling.typography.subSectionTitle}>Your Result:</h3>
    <div className="flex items-center space-x-4">
      <div className={`${toolStyling.typography.resultText} flex-1`}>
        {result}
      </div>
      <button
        onClick={onCopy}
        className={toolStyling.buttons.copy}
      >
        Copy
      </button>
    </div>
    {feedback && (
      <div className="mt-2 text-green-600 text-sm font-medium">
        {feedback}
      </div>
    )}
  </div>
);

// Tool description section template
const ToolDescriptionSection = () => (
  <div className={toolStyling.layout.sectionCard}>
    <h2 className={toolStyling.typography.sectionTitle}>
      About Our Tool Name
    </h2>
    <div className={toolStyling.typography.bodyText}>
      <p className="mb-4">
        Detailed description of what this tool does and its benefits.
      </p>
      <p className="mb-4">
        Technical details about security, accuracy, or methodology.
      </p>
      <p>
        Privacy assurance and data handling information.
      </p>
    </div>
  </div>
);

// Security and privacy section template
const SecurityPrivacySection = () => (
  <div className={toolStyling.infoSections.security.container}>
    <h2 className={toolStyling.infoSections.security.title}>
      🛡️ Security & Privacy
    </h2>
    <div className={toolStyling.infoSections.security.grid}>
      <div>
        <h3 className="font-semibold text-green-800 mb-2">🔒 Security</h3>
        <ul className={toolStyling.lists.bulletList}>
          <li className={toolStyling.lists.bulletItem}>
            <span>•</span>
            <span>All processing happens in your browser</span>
          </li>
          <li className={toolStyling.lists.bulletItem}>
            <span>•</span>
            <span>No data is sent to our servers</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-green-800 mb-2">🔐 Privacy</h3>
        <ul className={toolStyling.lists.bulletList}>
          <li className={toolStyling.lists.bulletItem}>
            <span>•</span>
            <span>We don't store your results</span>
          </li>
          <li className={toolStyling.lists.bulletItem}>
            <span>•</span>
            <span>No personal information required</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// Best practices section template
const BestPracticesSection = () => (
  <div className={toolStyling.infoSections.bestPractices.container}>
    <h2 className={toolStyling.infoSections.bestPractices.title}>
      💡 Best Practices
    </h2>
    <div className={toolStyling.infoSections.bestPractices.text}>
      <ul className={toolStyling.lists.bulletList}>
        <li className={toolStyling.lists.bulletItem}>
          <span>•</span>
          <span>Best practice tip 1</span>
        </li>
        <li className={toolStyling.lists.bulletItem}>
          <span>•</span>
          <span>Best practice tip 2</span>
        </li>
        <li className={toolStyling.lists.bulletItem}>
          <span>•</span>
          <span>Best practice tip 3</span>
        </li>
      </ul>
    </div>
  </div>
);

// ==================== FAQ PAGE TEMPLATE ====================

const ToolFAQPage = () => {
  const seoConfig = generateToolSEO({
    toolName: "Tool Name FAQ",
    toolDescription: "Frequently Asked Questions",
    toolCategory: "Utility",
    subdomain: "toolname",
    keywords: ["faq", "questions", "help"]
  });

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.metaDescription} />
        <link rel="canonical" href={`${seoConfig.canonical}/faq`} />
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              // FAQ items would go here
            ]
          })}
        </script>
      </Head>

      <div className={toolStyling.layout.pageContainer}>
        <div className={toolStyling.layout.contentWrapper}>
          {/* Back Navigation */}
          <Link href="/toolname" className={toolStyling.navigation.backButton}>
            ← Back to Tool Name
          </Link>
          
          <div className={toolStyling.layout.mainCard}>
            <h1 className={toolStyling.typography.pageTitle}>
              Frequently Asked Questions
            </h1>
            
            {/* FAQ Items */}
            <div className="space-y-6">
              {/* FAQ items would be mapped here */}
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 text-center">
              <Link href="/toolname" className={toolStyling.buttons.primary}>
                Try Our Tool Name →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolTemplate;
export { ToolFAQPage };