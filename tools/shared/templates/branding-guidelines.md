# ToolSuite Branding Guidelines
**Complete visual identity and design standards for all ToolSuite tools**

## 🎨 BRAND IDENTITY

### **Brand Mission**
Create beautiful, secure, and easy-to-use online tools that protect and empower users in their digital lives.

### **Brand Values**
- **Security First:** Privacy and cryptographic security in everything we build
- **User-Centric:** Clean, intuitive interfaces that anyone can use
- **Professional Quality:** Enterprise-grade tools available free to everyone
- **Transparency:** Open about our processes, no hidden data collection

### **Brand Personality**
- **Trustworthy:** Reliable, secure, dependable
- **Modern:** Clean, contemporary, cutting-edge
- **Accessible:** Simple, clear, inclusive
- **Professional:** Polished, sophisticated, credible

## 🌈 COLOR SYSTEM

### **Primary Colors**
```css
--primary-50: #eff6ff    /* Light blue backgrounds */
--primary-100: #dbeafe   /* Subtle accents */
--primary-500: #3b82f6   /* Main brand blue */
--primary-600: #2563eb   /* Primary buttons, links */
--primary-700: #1d4ed8   /* Hover states */
--primary-900: #1e3a8a   /* Dark accents */
```

### **Secondary Colors**
```css
--indigo-50: #eef2ff     /* Gradient backgrounds */
--indigo-100: #e0e7ff    /* Secondary accents */
--indigo-600: #4f46e5    /* Secondary actions */

--purple-50: #faf5ff     /* Decorative elements */
--purple-100: #f3e8ff    /* Special sections */
--purple-600: #9333ea    /* Accent highlights */
```

### **Semantic Colors**
```css
--success-50: #f0fdf4    /* Success states */
--success-600: #16a34a   /* Success actions */
--success-700: #15803d   /* Success hover */

--warning-50: #fffbeb    /* Warning states */
--warning-600: #d97706   /* Warning actions */

--error-50: #fef2f2      /* Error states */
--error-600: #dc2626     /* Error actions */
```

### **Neutral Colors**
```css
--gray-50: #f9fafb      /* Light backgrounds */
--gray-100: #f3f4f6     /* Subtle backgrounds */
--gray-200: #e5e7eb     /* Borders, dividers */
--gray-500: #6b7280     /* Secondary text */
--gray-600: #4b5563     /* Body text */
--gray-700: #374151     /* Headings */
--gray-800: #1f2937     /* Primary text */
--gray-900: #111827     /* High contrast text */
```

## 🎨 GRADIENT SYSTEM

### **Background Gradients**
```css
/* Primary page background */
background: linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #faf5ff 100%);

/* Card backgrounds */
background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);

/* Button gradients */
background: linear-gradient(90deg, #3b82f6 0%, #4f46e5 100%);

/* Success gradients */
background: linear-gradient(90deg, #10b981 0%, #059669 100%);
```

### **Decorative Gradients**
```css
/* Information sections */
background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);

/* Security sections */
background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);

/* Best practices sections */
background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
```

## ✍️ TYPOGRAPHY SYSTEM

### **Font Stack**
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### **Heading Hierarchy**
```css
/* Hero titles */
.text-hero {
  font-size: 3rem;         /* 48px */
  font-weight: 900;        /* black */
  line-height: 1.1;
  background: linear-gradient(90deg, #2563eb 0%, #4f46e5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Page titles */
.text-title {
  font-size: 2.25rem;      /* 36px */
  font-weight: 700;        /* bold */
  line-height: 1.2;
  color: #1f2937;          /* gray-800 */
}

/* Section headings */
.text-heading {
  font-size: 1.5rem;       /* 24px */
  font-weight: 600;        /* semibold */
  line-height: 1.3;
  color: #374151;          /* gray-700 */
}

/* Subheadings */
.text-subheading {
  font-size: 1.25rem;      /* 20px */
  font-weight: 500;        /* medium */
  line-height: 1.4;
  color: #4b5563;          /* gray-600 */
}
```

### **Body Text**
```css
/* Large body text */
.text-body-lg {
  font-size: 1.125rem;     /* 18px */
  line-height: 1.6;
  color: #4b5563;          /* gray-600 */
}

/* Regular body text */
.text-body {
  font-size: 1rem;         /* 16px */
  line-height: 1.6;
  color: #6b7280;          /* gray-500 */
}

/* Small text */
.text-small {
  font-size: 0.875rem;     /* 14px */
  line-height: 1.5;
  color: #6b7280;          /* gray-500 */
}

/* Monospace (results, code) */
.text-mono {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 1.125rem;     /* 18px */
  background: #f3f4f6;     /* gray-100 */
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb; /* gray-200 */
}
```

## 🏗️ LAYOUT SYSTEM

### **Spacing Scale** (Tailwind-based)
```css
--space-1: 0.25rem;      /* 4px */
--space-2: 0.5rem;       /* 8px */
--space-3: 0.75rem;      /* 12px */
--space-4: 1rem;         /* 16px */
--space-6: 1.5rem;       /* 24px */
--space-8: 2rem;         /* 32px */
--space-12: 3rem;        /* 48px */
--space-16: 4rem;        /* 64px */
--space-20: 5rem;        /* 80px */
```

### **Container Widths**
```css
/* Main content containers */
max-width: 72rem;        /* 1152px - main content */
max-width: 80rem;        /* 1280px - full layout with sidebars */

/* Card containers */
max-width: 28rem;        /* 448px - tool cards */
max-width: 42rem;        /* 672px - content cards */
```

### **Grid System**
```css
/* Full layout with sidebars */
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: 1rem;

/* Sidebar layout (2 columns each side, 8 main) */
.sidebar-left   { grid-column: span 2; }  /* xl:col-span-2 */
.main-content   { grid-column: span 8; }  /* xl:col-span-8 */
.sidebar-right  { grid-column: span 2; }  /* xl:col-span-2 */
```

## 🎭 COMPONENT STYLING

### **Cards & Containers**
```css
/* Main tool cards */
.card-main {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
}

/* Secondary cards */
.card-secondary {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
}

/* Information cards */
.card-info {
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  border: 2px solid #bfdbfe;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);
}
```

### **Buttons**
```css
/* Primary buttons */
.btn-primary {
  background: linear-gradient(90deg, #3b82f6 0%, #4f46e5 100%);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-primary:hover {
  background: linear-gradient(90deg, #2563eb 0%, #4338ca 100%);
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
  transform: scale(1.05);
}

/* Secondary buttons */
.btn-secondary {
  background: white;
  color: #374151;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  border: 2px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

/* Success buttons */
.btn-success {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
}
```

### **Form Elements**
```css
/* Input fields */
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
}

.input-field:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  outline: none;
}

/* Checkboxes */
.checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #d1d5db;
  border-radius: 0.25rem;
  color: #3b82f6;
  transition: all 0.2s ease;
}

.checkbox:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
```

## ✨ ANIMATION SYSTEM

### **Micro-Interactions**
```css
/* Hover effects */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px -12px rgba(59, 130, 246, 0.3);
}

/* Loading states */
.loading-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.loading-spin {
  animation: spin 1s linear infinite;
}

/* Entrance animations */
.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### **Background Effects**
```css
/* Animated blobs */
.bg-blob {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(40px);
  opacity: 0.7;
  animation: blob 7s infinite;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```

## 🖼️ VISUAL ELEMENTS

### **Icons & Emojis**
```css
/* Use emojis for quick, universal recognition */
🚀 - Quick Guide, Getting Started
🔐 - Security, Passwords, Protection
📋 - Clipboard, Copy, Lists
💡 - Tips, Best Practices, Ideas
🛡️ - Security, Privacy, Protection
✅ - Success, Completed, Verified
⚠️ - Warning, Caution, Important
❌ - Error, Failed, Incorrect
🎯 - Goals, Targets, Focus
📊 - Analytics, Data, Statistics
```

### **Shadows & Depth**
```css
/* Card shadows */
.shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.05);
.shadow-medium: 0 4px 6px rgba(59, 130, 246, 0.1);
.shadow-strong: 0 10px 25px rgba(59, 130, 246, 0.2);
.shadow-glow: 0 0 20px rgba(59, 130, 246, 0.4);

/* Colored shadows for brand consistency */
.shadow-blue: 0 10px 25px rgba(59, 130, 246, 0.2);
.shadow-green: 0 10px 25px rgba(16, 185, 129, 0.2);
.shadow-purple: 0 10px 25px rgba(147, 51, 234, 0.2);
```

## 📱 RESPONSIVE DESIGN

### **Breakpoints**
```css
/* Mobile first approach */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### **Mobile Optimizations**
- **Touch targets:** Minimum 44px (iOS) / 48px (Android)
- **Text size:** Minimum 16px to prevent zoom
- **Spacing:** Increased touch spacing on mobile
- **Navigation:** Simplified, thumb-friendly layouts
- **Content:** Condensed but readable layouts

## 🎨 ADSENSE INTEGRATION

### **Ad Styling Guidelines**
```css
/* Ad containers that blend with design */
.ad-container {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(229, 231, 235, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Ad labels */
.ad-label {
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 500;
  margin-bottom: 0.75rem;
}
```

### **Ad Placement Rules**
- **Never interrupt content flow** in main reading areas
- **Use sidebar placement** for optimal viewability
- **Maintain visual hierarchy** with proper spacing
- **Match design aesthetic** with native styling
- **Respect user experience** over revenue maximization

## 🎯 BRAND APPLICATION

### **Tool Page Structure**
1. **Hero Section:** Tool name with gradient text
2. **Quick Guide:** Blue gradient background with numbered steps
3. **Main Tool:** White glassmorphism card with functionality
4. **Tool Description:** Clean typography with benefits focus
5. **Security Section:** Green gradient emphasizing safety
6. **Best Practices:** Purple gradient with actionable tips

### **Consistency Requirements**
- **All tools** must use the same color palette
- **Typography hierarchy** must be consistent
- **Card styling** must follow component guidelines
- **Animation timing** must be uniform (0.3s transitions)
- **Spacing** must follow the scale system

### **Quality Standards**
- **Lighthouse score** 90+ in all categories
- **Mobile responsiveness** across all devices
- **Accessibility compliance** WCAG 2.1 AA
- **Cross-browser compatibility** Chrome, Firefox, Safari, Edge
- **Loading performance** under 2 seconds

---

## 📋 BRAND CHECKLIST

### ✅ **Visual Identity**
- [ ] Color palette correctly applied
- [ ] Typography hierarchy implemented
- [ ] Gradient system used appropriately
- [ ] Component styling consistent
- [ ] Animation system functional

### ✅ **User Experience**
- [ ] Design supports functionality
- [ ] Information hierarchy clear
- [ ] Navigation intuitive
- [ ] Feedback states implemented
- [ ] Error handling user-friendly

### ✅ **Technical Quality**
- [ ] Performance optimized
- [ ] Accessibility compliant
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] SEO optimized

---

*These guidelines ensure every ToolSuite tool maintains brand consistency, professional quality, and optimal user experience while supporting business objectives.*