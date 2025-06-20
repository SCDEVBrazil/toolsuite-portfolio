// AdSense Revenue Optimization Template for ToolSuite Tools
// Balances beautiful design with maximum ad performance

export const adSenseOptimization = {
  // ==================== OPTIMAL AD PLACEMENT ZONES ====================
  
  placements: {
    // Above-the-fold banner (highest revenue potential)
    topBanner: {
      position: "above-tool",
      size: "728x90", // Leaderboard
      mobileSize: "320x50", // Mobile banner
      priority: "highest",
      className: "ad-top-banner",
      description: "Prime real estate - first thing users see"
    },
    
    // Tool results area (high engagement zone)
    resultsSidebar: {
      position: "beside-results",
      size: "300x250", // Medium rectangle
      mobileSize: "300x250",
      priority: "high", 
      className: "ad-results-sidebar",
      description: "Users look here after generating results"
    },
    
    // Content area (good for content-heavy sections)
    contentInline: {
      position: "mid-content",
      size: "336x280", // Large rectangle
      mobileSize: "300x250",
      priority: "medium",
      className: "ad-content-inline",
      description: "Natural break in content flow"
    },
    
    // FAQ section (high dwell time)
    faqSidebar: {
      position: "faq-sidebar",
      size: "160x600", // Wide skyscraper
      mobileSize: "300x250",
      priority: "medium",
      className: "ad-faq-sidebar",
      description: "Users spend time reading FAQ"
    },
    
    // Bottom area (exit intent)
    bottomBanner: {
      position: "bottom-content",
      size: "728x90", // Leaderboard
      mobileSize: "320x50",
      priority: "low",
      className: "ad-bottom-banner",
      description: "Catches users before they leave"
    }
  },

  // ==================== REVENUE-OPTIMIZED LAYOUTS ====================
  
  layouts: {
    // Main tool page layout with optimal ad integration
    toolPageOptimized: {
      structure: `
        <div className="ad-optimized-container">
          {/* TOP BANNER - Highest Revenue */}
          <AdUnit placement="topBanner" />
          
          <div className="tool-content-wrapper">
            <div className="tool-main-area">
              {/* Quick Guide */}
              <QuickGuide />
              
              {/* Main Tool */}
              <MainToolCard />
              
              {/* RESULTS + SIDEBAR AD */}
              <div className="results-with-ad">
                <ResultsDisplay />
                <AdUnit placement="resultsSidebar" />
              </div>
            </div>
            
            {/* Tool Description */}
            <ToolDescription />
            
            {/* INLINE CONTENT AD */}
            <AdUnit placement="contentInline" />
            
            {/* Security/Best Practices */}
            <SecuritySections />
          </div>
          
          {/* BOTTOM BANNER */}
          <AdUnit placement="bottomBanner" />
        </div>
      `
    },
    
    // FAQ page layout optimized for longer dwell time
    faqPageOptimized: {
      structure: `
        <div className="faq-ad-optimized">
          {/* TOP BANNER */}
          <AdUnit placement="topBanner" />
          
          <div className="faq-content-with-sidebar">
            <div className="faq-main-content">
              <FAQHeader />
              <FAQItems />
            </div>
            
            {/* FAQ SIDEBAR AD - High dwell time */}
            <div className="faq-sidebar">
              <AdUnit placement="faqSidebar" />
            </div>
          </div>
          
          {/* BOTTOM BANNER */}
          <AdUnit placement="bottomBanner" />
        </div>
      `
    }
  },

  // ==================== AD-INTEGRATED STYLING ====================
  
  adStyling: {
    // Make ads look native and integrated
    adContainer: {
      base: "relative rounded-xl overflow-hidden shadow-lg border border-gray-200/50",
      topBanner: "mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-4",
      sidebar: "bg-white/80 backdrop-blur-sm p-4 sticky top-8",
      inline: "my-12 bg-gradient-to-br from-gray-50 to-blue-50 p-6",
      bottom: "mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-4"
    },
    
    // Labels to improve ad performance (transparency)
    adLabel: {
      className: "text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium",
      text: "Advertisement"
    },
    
    // Responsive ad containers
    responsive: {
      mobile: "block md:hidden",
      desktop: "hidden md:block",
      tablet: "hidden sm:block md:hidden"
    }
  },

  // ==================== LAYOUT COMPONENTS ====================
  
  layoutComponents: {
    // Top banner with tool integration
    topBannerSection: `
      <div className="ad-top-banner bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 shadow-lg border border-blue-100/50">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">Advertisement</p>
            <div className="ad-placeholder bg-white rounded-lg">
              {/* AdSense code goes here */}
              <GoogleAdUnit size="728x90" responsive />
            </div>
          </div>
        </div>
      </div>
    `,
    
    // Results area with sidebar ad
    resultsWithAd: `
      <div className="results-ad-layout grid lg:grid-cols-4 gap-8 my-12">
        <div className="lg:col-span-3">
          <ResultDisplay />
        </div>
        <div className="lg:col-span-1">
          <div className="ad-results-sidebar bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg sticky top-8">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-medium">Advertisement</p>
            <GoogleAdUnit size="300x250" />
          </div>
        </div>
      </div>
    `,
    
    // FAQ sidebar layout
    faqWithSidebar: `
      <div className="faq-layout grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <FAQContent />
        </div>
        <div className="lg:col-span-1">
          <div className="ad-faq-sidebar bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg sticky top-8">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-medium">Related Tools</p>
            <GoogleAdUnit size="160x600" />
          </div>
        </div>
      </div>
    `,
    
    // Inline content ad
    inlineContentAd: `
      <div className="ad-content-inline my-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100/30">
        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-4 font-medium">Advertisement</p>
          <GoogleAdUnit size="336x280" responsive />
        </div>
      </div>
    `
  },

  // ==================== ADSENSE COMPONENT TEMPLATE ====================
  
  adUnitComponent: `
    import { useEffect } from 'react';
    
    const GoogleAdUnit = ({ size, placement, responsive = false }) => {
      useEffect(() => {
        // Load AdSense script
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }, []);
      
      const getAdStyles = () => {
        switch(placement) {
          case 'topBanner':
            return 'ad-top-banner bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-8';
          case 'resultsSidebar':
            return 'ad-results-sidebar bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg sticky top-8';
          case 'contentInline':
            return 'ad-content-inline my-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center';
          case 'faqSidebar':
            return 'ad-faq-sidebar bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg sticky top-8';
          case 'bottomBanner':
            return 'ad-bottom-banner mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4';
          default:
            return 'ad-unit bg-gray-50 rounded-lg p-4';
        }
      };
      
      return (
        <div className={getAdStyles()}>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">
            Advertisement
          </p>
          <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format={responsive ? 'auto' : 'rectangle'}
            data-full-width-responsive={responsive ? 'true' : 'false'}
          />
        </div>
      );
    };
    
    export default GoogleAdUnit;
  `,

  // ==================== REVENUE OPTIMIZATION TIPS ====================
  
  revenueOptimization: {
    bestPractices: [
      "Place first ad above the fold (top banner) - highest RPM",
      "Use 300x250 rectangles near results - high engagement",
      "Implement sticky sidebar ads for longer content",
      "Add inline ads every 3-4 content sections",
      "Use responsive ad units for mobile optimization",
      "A/B test ad placements for optimal performance",
      "Maintain 60/40 content-to-ad ratio for user experience"
    ],
    
    highPerformingPlacements: [
      "Above tool (before interaction) - 100% visibility",
      "Beside/below results - 90% engagement", 
      "FAQ sidebar - 85% dwell time",
      "Mid-content - 70% scroll depth",
      "Bottom banner - 60% exit intent"
    ],
    
    mobileOptimizations: [
      "Use 320x50 banners instead of 728x90",
      "Stack ads vertically on mobile",
      "Ensure touch-friendly spacing",
      "Test mobile-specific ad positions",
      "Consider AMP for faster mobile loading"
    ]
  },

  // ==================== AD PERFORMANCE TRACKING ====================
  
  performanceTracking: {
    metrics: [
      "CTR (Click-through rate)",
      "RPM (Revenue per 1000 impressions)", 
      "Viewability percentage",
      "Page RPM by ad placement",
      "User bounce rate impact"
    ],
    
    googleAnalyticsEvents: `
      // Track ad performance in GA4
      gtag('event', 'ad_impression', {
        'ad_unit_name': 'top_banner',
        'page_location': window.location.href
      });
      
      gtag('event', 'ad_click', {
        'ad_unit_name': 'results_sidebar',
        'value': estimated_revenue
      });
    `
  }
};

// ==================== QUICK IMPLEMENTATION GUIDE ====================

export const implementationSteps = {
  step1: "Apply for Google AdSense approval with clean, content-rich pages",
  step2: "Add AdSense script to Next.js _app.js or _document.js", 
  step3: "Create GoogleAdUnit component using template above",
  step4: "Implement top banner and results sidebar ads first (highest revenue)",
  step5: "Test and optimize ad placements based on performance data",
  step6: "Gradually add inline and bottom ads to maximize revenue",
  step7: "Monitor Core Web Vitals to ensure ads don't hurt SEO",
  step8: "A/B test different ad sizes and positions for optimal RPM"
};

export default adSenseOptimization;