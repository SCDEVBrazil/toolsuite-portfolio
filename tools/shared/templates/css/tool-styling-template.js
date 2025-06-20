// Tailwind CSS Styling Template for ToolSuite Tools
// Extracted from successful password generator design patterns

export const toolStyling = {
  // Page layout patterns
  layout: {
    pageContainer: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4",
    contentWrapper: "max-w-4xl mx-auto space-y-8",
    mainCard: "bg-white rounded-lg shadow-lg p-8",
    sectionCard: "bg-white rounded-lg shadow-md p-6"
  },

  // Typography patterns
  typography: {
    pageTitle: "text-3xl font-bold text-gray-800 text-center mb-8",
    sectionTitle: "text-2xl font-semibold text-gray-800 mb-4",
    subSectionTitle: "text-xl font-semibold text-gray-700 mb-3",
    bodyText: "text-gray-600 leading-relaxed",
    smallText: "text-sm text-gray-500",
    resultText: "text-lg font-mono bg-gray-100 p-3 rounded border break-all"
  },

  // Form elements patterns
  form: {
    inputGroup: "mb-6",
    label: "block text-sm font-medium text-gray-700 mb-2",
    checkboxContainer: "flex items-center space-x-2 mb-2",
    checkbox: "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
    checkboxLabel: "text-sm text-gray-700",
    slider: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
    sliderValue: "text-center text-lg font-semibold text-gray-800 mb-2"
  },

  // Button patterns
  buttons: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-200",
    success: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200",
    copy: "bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ml-4"
  },

  // Information section patterns
  infoSections: {
    guide: {
      container: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",
      title: "text-lg font-semibold text-blue-800 mb-2",
      text: "text-blue-700 text-sm"
    },
    security: {
      container: "bg-green-50 border border-green-200 rounded-lg p-6",
      title: "text-xl font-semibold text-green-800 mb-3",
      text: "text-green-700",
      grid: "grid md:grid-cols-2 gap-4"
    },
    bestPractices: {
      container: "bg-blue-50 border border-blue-200 rounded-lg p-6",
      title: "text-xl font-semibold text-blue-800 mb-3", 
      text: "text-blue-700"
    }
  },

  // List patterns
  lists: {
    stepsList: "space-y-2 text-blue-700 text-sm",
    stepItem: "flex items-start space-x-2",
    stepNumber: "bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-0.5",
    bulletList: "space-y-1 text-gray-600",
    bulletItem: "flex items-start space-x-2"
  },

  // Navigation patterns
  navigation: {
    link: "text-blue-600 hover:text-blue-800 font-medium transition duration-200 underline",
    breadcrumb: "text-sm text-gray-500 mb-4",
    backButton: "text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center space-x-1"
  },

  // Responsive patterns
  responsive: {
    mobileHidden: "hidden md:block",
    mobileOnly: "block md:hidden",
    gridResponsive: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
    flexResponsive: "flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4"
  },

  // Color scheme patterns
  colors: {
    primary: "blue", // blue-50, blue-600, blue-700, etc.
    secondary: "indigo", // indigo-100, indigo-600, etc.
    success: "green", // green-50, green-600, etc.
    neutral: "gray", // gray-100, gray-600, etc.
    accent: "blue" // for highlights and links
  }
};

// Quick class combination generators
export const generateClasses = {
  infoCard: (type = "default") => {
    const types = {
      guide: toolStyling.infoSections.guide.container,
      security: toolStyling.infoSections.security.container,
      practices: toolStyling.infoSections.bestPractices.container,
      default: toolStyling.layout.sectionCard
    };
    return types[type] || types.default;
  },

  button: (variant = "primary") => {
    return toolStyling.buttons[variant] || toolStyling.buttons.primary;
  },

  heading: (level = 1) => {
    const headings = {
      1: toolStyling.typography.pageTitle,
      2: toolStyling.typography.sectionTitle,
      3: toolStyling.typography.subSectionTitle
    };
    return headings[level] || toolStyling.typography.sectionTitle;
  }
};

// Example usage:
// <div className={toolStyling.layout.pageContainer}>
//   <div className={toolStyling.layout.contentWrapper}>
//     <div className={toolStyling.layout.mainCard}>
//       <h1 className={toolStyling.typography.pageTitle}>Tool Name</h1>
//       <button className={toolStyling.buttons.primary}>Generate</button>
//     </div>
//   </div>
// </div>