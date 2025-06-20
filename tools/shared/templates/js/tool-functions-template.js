// JavaScript Function Templates for ToolSuite Tools
// Extracted from successful password generator implementation

// ==================== CORE GENERATION FUNCTIONS ====================

// Cryptographically secure random number generation
export const getSecureRandom = (min, max) => {
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const maxValue = Math.pow(256, bytesNeeded);
  const threshold = Math.floor(maxValue / range) * range;
  
  let randomValue;
  do {
    const randomBytes = new Uint8Array(bytesNeeded);
    crypto.getRandomValues(randomBytes);
    randomValue = randomBytes.reduce((acc, byte, index) => 
      acc + byte * Math.pow(256, index), 0);
  } while (randomValue >= threshold);
  
  return min + (randomValue % range);
};

// Secure array element selection
export const getSecureRandomElement = (array) => {
  if (!array || array.length === 0) return null;
  const randomIndex = getSecureRandom(0, array.length - 1);
  return array[randomIndex];
};

// Secure array shuffling (Fisher-Yates)
export const secureArrayShuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getSecureRandom(0, i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// ==================== UI INTERACTION FUNCTIONS ====================

// Copy to clipboard with user feedback
export const copyToClipboard = async (text, setFeedback) => {
  try {
    await navigator.clipboard.writeText(text);
    setFeedback('Copied to clipboard!');
    setTimeout(() => setFeedback(''), 2000);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setFeedback('Copied to clipboard!');
      setTimeout(() => setFeedback(''), 2000);
      return true;
    } catch (fallbackErr) {
      setFeedback('Failed to copy');
      setTimeout(() => setFeedback(''), 2000);
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

// Debounced function for performance optimization
export const useDebounce = (callback, delay) => {
  const [debounceTimer, setDebounceTimer] = useState(null);
  
  return (...args) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);
    
    setDebounceTimer(newTimer);
  };
};

// ==================== VALIDATION FUNCTIONS ====================

// Input validation helpers
export const validateRange = (value, min, max) => {
  const num = parseInt(value);
  return !isNaN(num) && num >= min && num <= max;
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value !== '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateNumber = (value, allowDecimals = true) => {
  const regex = allowDecimals ? /^-?\d*\.?\d+$/ : /^-?\d+$/;
  return regex.test(value);
};

// ==================== FORMATTING FUNCTIONS ====================

// Number formatting helpers
export const formatNumber = (num, decimals = 2) => {
  return Number(num).toFixed(decimals);
};

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

export const formatPercentage = (value, decimals = 1) => {
  return `${(value * 100).toFixed(decimals)}%`;
};

// Text formatting helpers
export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

// ==================== CALCULATION HELPERS ====================

// Common mathematical calculations
export const calculatePercentage = (value, total) => {
  return total === 0 ? 0 : (value / total) * 100;
};

export const calculateCompoundInterest = (principal, rate, time, compounds = 1) => {
  return principal * Math.pow(1 + rate / compounds, compounds * time);
};

export const calculateAverage = (numbers) => {
  return numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

// ==================== LOCAL STORAGE HELPERS ====================

// Local storage with error handling
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
    return false;
  }
};

export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn('Failed to load from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn('Failed to remove from localStorage:', error);
    return false;
  }
};

// ==================== REACT HOOKS TEMPLATES ====================

// Custom hook for tool state management
export const useToolState = (initialState) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const updateState = (updates) => {
    setState(prev => ({ ...prev, ...updates }));
  };
  
  const resetState = () => {
    setState(initialState);
    setError(null);
  };
  
  return {
    state,
    setState,
    updateState,
    resetState,
    loading,
    setLoading,
    error,
    setError
  };
};

// Custom hook for form handling
export const useForm = (initialValues, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate field on blur
    if (validationRules[name]) {
      const error = validationRules[name](values[name]);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };
  
  const validateAll = () => {
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      const error = validationRules[field](values[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    isValid: Object.keys(errors).length === 0
  };
};

// ==================== EXAMPLE USAGE TEMPLATES ====================

/*
// Example: Using secure random generation
const generateRandomPassword = (length, charset) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += getSecureRandomElement(charset);
  }
  return result;
};

// Example: Using copy functionality
const handleCopy = async () => {
  const success = await copyToClipboard(generatedResult, setFeedbackMessage);
  if (success) {
    // Additional success handling
  }
};

// Example: Using validation
const isValidInput = validateRange(userInput, 1, 100) && validateRequired(userInput);

// Example: Using tool state hook
const {
  state,
  updateState,
  loading,
  setLoading,
  error,
  setError
} = useToolState({
  result: '',
  settings: {},
  history: []
});
*/