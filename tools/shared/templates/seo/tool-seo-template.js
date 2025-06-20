// SEO Template for ToolSuite Utility Tools
// Based on successful password generator implementation

export const generateToolSEO = (toolConfig) => {
  const {
    toolName,
    toolDescription,
    toolCategory,
    subdomain,
    keywords = [],
    schemaType = "SoftwareApplication"
  } = toolConfig;

  return {
    // Title tag template (under 60 characters)
    title: `Free ${toolName} - ${toolDescription} | ToolSuite`,
    
    // Meta description template (under 160 characters)
    metaDescription: `${toolDescription}. Free, secure, and easy to use ${toolName.toLowerCase()}. Generate results instantly with our professional online tool.`,
    
    // Canonical URL
    canonical: `https://${subdomain}.toolsuite.info`,
    
    // Keywords (for internal tracking)
    keywords: [toolName.toLowerCase(), ...keywords, "free", "online", "tool"].join(", "),
    
    // Open Graph tags
    openGraph: {
      title: `Free ${toolName} - ${toolDescription}`,
      description: `${toolDescription}. Free, secure, and easy to use ${toolName.toLowerCase()}.`,
      url: `https://${subdomain}.toolsuite.info`,
      type: "website",
      siteName: "ToolSuite"
    },
    
    // Twitter Card tags
    twitter: {
      card: "summary",
      title: `Free ${toolName} - ${toolDescription}`,
      description: `${toolDescription}. Free online tool.`
    },
    
    // JSON-LD Schema markup
    schema: {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": toolName,
      "description": toolDescription,
      "applicationCategory": `${toolCategory}Application`,
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Organization",
        "name": "ToolSuite"
      }
    }
  };
};

// Example usage template:
// const passwordGeneratorSEO = generateToolSEO({
//   toolName: "Password Generator",
//   toolDescription: "Secure Random Passwords",
//   toolCategory: "Security",
//   subdomain: "password",
//   keywords: ["password", "security", "generator", "random", "secure"]
// });

// Next.js Head component template
export const generateHeadComponent = (seoData) => `
<Head>
  <title>{seoData.title}</title>
  <meta name="description" content="{seoData.metaDescription}" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="{seoData.canonical}" />
  
  {/* Open Graph */}
  <meta property="og:title" content="{seoData.openGraph.title}" />
  <meta property="og:description" content="{seoData.openGraph.description}" />
  <meta property="og:url" content="{seoData.openGraph.url}" />
  <meta property="og:type" content="{seoData.openGraph.type}" />
  <meta property="og:site_name" content="{seoData.openGraph.siteName}" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="{seoData.twitter.card}" />
  <meta name="twitter:title" content="{seoData.twitter.title}" />
  <meta name="twitter:description" content="{seoData.twitter.description}" />
  
  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify(seoData.schema)}
  </script>
</Head>
`;