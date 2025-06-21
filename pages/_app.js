import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Google Analytics tracking ID
const GA_TRACKING_ID = 'G-GMB3FLKZFC'

// Google Analytics functions
const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

const pageview = (url) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

const event = ({ action, category, label, value }) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Track page views on route changes
    const handleRouteChange = (url) => {
      pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

// Export the event function for use in other components
export { event as gtag }