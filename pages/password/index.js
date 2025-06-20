import Head from 'next/head';
import PasswordGenerator from '../../components/PasswordGenerator';

export default function PasswordPage() {
  return (
    <>
      <Head>
        <title>
          Free Password Generator - Secure Random Passwords | ToolSuite
        </title>
        <meta
          name="description"
          content="Generate secure, random passwords with our free online tool. Customize length, characters, and complexity. No storage, instant copy-to-clipboard."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://password.toolsuite.info" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Free Password Generator - Secure Random Passwords"
        />
        <meta
          property="og:description"
          content="Generate secure, random passwords with our free online tool. Customize length, characters, and complexity."
        />
        <meta property="og:url" content="https://password.toolsuite.info" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ToolSuite" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Free Password Generator - Secure Random Passwords"
        />
        <meta
          name="twitter:description"
          content="Generate secure, random passwords with our free online tool."
        />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Password Generator",
              description:
                "Free online password generator tool that creates secure, random passwords with customizable length and character types.",
              url: "https://password.toolsuite.info",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              provider: {
                "@type": "Organization",
                name: "ToolSuite",
              },
            }),
          }}
        />
      </Head>
      <div>
        <PasswordGenerator />
      </div>
    </>
  );
}