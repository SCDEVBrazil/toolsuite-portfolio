// Advanced Design System for ToolSuite - Modern, Compelling Visual Design
// Enhances the basic styling with advanced animations, effects, and branding

export const advancedDesignSystem = {
  // ==================== ENHANCED COLOR PALETTE ====================
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    gradient: {
      primary: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
      card: 'bg-gradient-to-br from-white to-blue-50/30',
      button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      accent: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      success: 'bg-gradient-to-r from-green-500 to-emerald-600',
      warning: 'bg-gradient-to-r from-yellow-500 to-orange-500'
    },
    shadows: {
      soft: 'shadow-lg shadow-blue-500/10',
      medium: 'shadow-xl shadow-blue-500/20',
      strong: 'shadow-2xl shadow-blue-500/30',
      glow: 'shadow-2xl shadow-blue-400/40',
      colored: 'shadow-lg shadow-indigo-500/25'
    }
  },

  // ==================== ANIMATION SYSTEM ====================
  animations: {
    // Micro-interactions
    hover: {
      lift: 'hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out',
      glow: 'hover:shadow-2xl hover:shadow-blue-400/30 transition-all duration-300',
      bounce: 'hover:animate-bounce',
      pulse: 'hover:animate-pulse',
      wiggle: 'hover:animate-wiggle'
    },
    
    // Loading states
    loading: {
      spin: 'animate-spin',
      pulse: 'animate-pulse',
      bounce: 'animate-bounce',
      ping: 'animate-ping'
    },
    
    // Entrance animations
    entrance: {
      fadeIn: 'animate-fade-in',
      slideUp: 'animate-slide-up',
      slideDown: 'animate-slide-down',
      scaleIn: 'animate-scale-in',
      slideLeft: 'animate-slide-left',
      slideRight: 'animate-slide-right'
    },
    
    // Success/feedback animations
    feedback: {
      success: 'animate-bounce',
      error: 'animate-shake',
      copy: 'animate-pulse'
    }
  },

  // ==================== ENHANCED TYPOGRAPHY ====================
  typography: {
    display: {
      hero: 'text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight',
      title: 'text-4xl md:text-5xl font-bold text-gray-900 leading-tight',
      subtitle: 'text-2xl md:text-3xl font-semibold text-gray-800'
    },
    
    headings: {
      h1: 'text-3xl md:text-4xl font-bold text-gray-900 leading-tight',
      h2: 'text-2xl md:text-3xl font-semibold text-gray-800 leading-snug',
      h3: 'text-xl md:text-2xl font-semibold text-gray-700 leading-snug',
      h4: 'text-lg md:text-xl font-medium text-gray-700'
    },
    
    body: {
      large: 'text-lg text-gray-600 leading-relaxed',
      base: 'text-base text-gray-600 leading-relaxed',
      small: 'text-sm text-gray-500 leading-relaxed',
      tiny: 'text-xs text-gray-400'
    },
    
    special: {
      code: 'font-mono text-sm bg-gray-100 px-2 py-1 rounded border',
      result: 'text-lg font-mono bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-2 border-blue-100 break-all',
      highlight: 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium',
      badge: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium'
    }
  },

  // ==================== ENHANCED LAYOUT COMPONENTS ====================
  layout: {
    containers: {
      page: 'min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden',
      content: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10',
      section: 'py-12 md:py-16 lg:py-20'
    },
    
    cards: {
      main: 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/20 p-8 md:p-12 border border-white/20',
      secondary: 'bg-white/60 backdrop-blur-sm rounded-xl shadow-lg shadow-blue-500/10 p-6 md:p-8 border border-white/20',
      feature: 'bg-gradient-to-br from-white to-blue-50/50 rounded-xl shadow-lg p-6 border border-blue-100/50 hover:shadow-xl transition-all duration-300',
      floating: 'bg-white rounded-2xl shadow-2xl shadow-blue-500/25 p-6 transform hover:scale-105 transition-all duration-300'
    },
    
    decorative: {
      blob1: 'absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob',
      blob2: 'absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000',
      blob3: 'absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000',
      grid: 'absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none'
    }
  },

  // ==================== ENHANCED FORM ELEMENTS ====================
  forms: {
    inputs: {
      text: 'w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 outline-none bg-white/50 backdrop-blur-sm',
      select: 'w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 outline-none bg-white/50 backdrop-blur-sm appearance-none',
      checkbox: 'w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2 transition-all duration-200',
      slider: 'w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb:appearance-none slider-thumb:w-6 slider-thumb:h-6 slider-thumb:bg-blue-600 slider-thumb:rounded-full slider-thumb:shadow-lg'
    },
    
    labels: {
      default: 'block text-sm font-semibold text-gray-700 mb-2',
      required: 'block text-sm font-semibold text-gray-700 mb-2 after:content-["*"] after:text-red-500 after:ml-1',
      optional: 'block text-sm font-medium text-gray-600 mb-2'
    }
  },

  // ==================== ENHANCED BUTTON SYSTEM ====================
  buttons: {
    primary: 'inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50',
    
    secondary: 'inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/20',
    
    success: 'inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300',
    
    copy: 'inline-flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-500/50',
    
    icon: 'inline-flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200',
    
    floating: 'fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transform hover:scale-110 transition-all duration-300 z-50'
  },

  // ==================== INFORMATION SECTIONS ====================
  infoSections: {
    guide: {
      container: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-2xl p-6 shadow-lg shadow-blue-500/10 relative overflow-hidden',
      title: 'text-xl font-bold text-blue-900 mb-4 flex items-center space-x-2',
      content: 'text-blue-800 space-y-3',
      decoration: 'absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-30'
    },
    
    security: {
      container: 'bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg shadow-green-500/10 relative overflow-hidden',
      title: 'text-2xl font-bold text-green-900 mb-6 flex items-center space-x-3',
      content: 'text-green-800 space-y-4',
      grid: 'grid md:grid-cols-2 gap-6',
      decoration: 'absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full translate-y-20 -translate-x-20 opacity-20'
    },
    
    practices: {
      container: 'bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-200 rounded-2xl p-8 shadow-lg shadow-purple-500/10 relative overflow-hidden',
      title: 'text-2xl font-bold text-purple-900 mb-6 flex items-center space-x-3',
      content: 'text-purple-800 space-y-4',
      decoration: 'absolute top-0 right-0 w-36 h-36 bg-purple-200 rounded-full -translate-y-18 translate-x-18 opacity-25'
    }
  },

  // ==================== RESPONSIVE UTILITIES ====================
  responsive: {
    grid: {
      auto: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      feature: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12',
      stats: 'grid grid-cols-2 md:grid-cols-4 gap-4'
    },
    
    flex: {
      stack: 'flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6',
      center: 'flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6',
      between: 'flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'
    },
    
    spacing: {
      section: 'py-12 md:py-16 lg:py-24',
      component: 'py-8 md:py-12',
      element: 'py-4 md:py-6'
    }
  }
};

// ==================== COMPONENT GENERATORS ====================

export const generateAdvancedComponent = {
  heroSection: (title, subtitle, ctaText) => ({
    container: `${advancedDesignSystem.layout.containers.section} text-center relative`,
    title: `${advancedDesignSystem.typography.display.hero} mb-6 ${advancedDesignSystem.animations.entrance.fadeIn}`,
    subtitle: `${advancedDesignSystem.typography.body.large} mb-8 max-w-2xl mx-auto ${advancedDesignSystem.animations.entrance.slideUp}`,
    cta: `${advancedDesignSystem.buttons.primary} ${advancedDesignSystem.animations.entrance.scaleIn}`
  }),
  
  featureCard: (variant = 'default') => ({
    container: `${advancedDesignSystem.layout.cards.feature} ${advancedDesignSystem.animations.hover.lift}`,
    icon: `${advancedDesignSystem.buttons.icon} mb-4`,
    title: `${advancedDesignSystem.typography.headings.h3} mb-3`,
    description: `${advancedDesignSystem.typography.body.base}`
  }),
  
  resultDisplay: () => ({
    container: 'mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border-2 border-blue-100 shadow-lg',
    label: `${advancedDesignSystem.typography.headings.h4} mb-4`,
    result: `${advancedDesignSystem.typography.special.result} mb-4`,
    actions: 'flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'
  })
};

// ==================== CUSTOM CSS CLASSES (for Tailwind config) ====================

export const customTailwindClasses = `
/* Custom animations */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Utility classes */
.animate-blob { animation: blob 7s infinite; }
.animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 0.5s ease-out; }
.animate-slide-up { animation: slide-up 0.6s ease-out; }
.animate-scale-in { animation: scale-in 0.4s ease-out; }
.animate-shake { animation: shake 0.5s ease-in-out; }

.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }

/* Glass morphism utilities */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
`;

export default advancedDesignSystem;