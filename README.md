# OneThrive Website - Complete Guide & Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Quick Start Guide](#quick-start-guide)
3. [Website Structure & Navigation](#website-structure--navigation)
4. [File Organization & What Each Does](#file-organization--what-each-does)
5. [How to Make Common Changes](#how-to-make-common-changes)
6. [Content Management Guide](#content-management-guide)
7. [Technical Details](#technical-details)
8. [Troubleshooting](#troubleshooting)
9. [Getting Help](#getting-help)

---

## 🌟 Project Overview

**OneThrive Website** is a modern, professional website built for OneThrive - an employee engagement and team-building company. The website showcases services, provides educational blogs, includes interactive tools, and serves as a platform to attract potential clients.

### Key Features:
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Tools**: ROI Calculator and Culture Quiz
- **Blog System**: Educational content management
- **Contact Forms**: Lead generation capabilities
- **SEO Optimized**: Better visibility on search engines
- **Fast Performance**: Optimized for speed and user experience

### Technology Stack:
- **Frontend Framework**: React.js (Modern web framework)
- **Styling**: Tailwind CSS (For beautiful designs)
- **Build Tool**: Vite (Fast development and building)
- **Deployment**: Vercel (Cloud hosting platform)
- **Analytics**: Vercel Analytics & Speed Insights

---

## 🚀 Quick Start Guide

### For Non-Technical Users:
If you need to make content changes (text, images, contact info), you can:
1. **Find the relevant file** using this guide
2. **Edit the content** using any text editor
3. **Contact a developer** to implement changes
4. **Use the deployment section** to publish changes

### For Technical Users:
```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd onethrive-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🗺️ Website Structure & Navigation

### Main Website Pages:

| Page | URL | Purpose | Key Components |
|------|-----|---------|----------------|
| **Home** | `/` | Main landing page | Hero, Services, About, Testimonials, FAQs |
| **About Us** | `/about` | Company story & team | Mission, Vision, Process, Team profiles |
| **Services** | `/services` | Service offerings | Detailed service descriptions |
| **Contact** | `/contact` | Contact information | Contact form, office details |
| **Blogs** | `/blogs` | Educational content | Blog grid, individual blog posts |
| **ROI Calculator** | `/roi-calculator` | Interactive tool | Calculate engagement ROI |
| **Culture Quiz** | `/culture-quiz` | Assessment tool | Company culture evaluation |

### Policy Pages:
- **Privacy Policy** (`/privacy-policy`)
- **Terms & Conditions** (`/terms-conditions`) 
- **Cancellation & Refund** (`/cancellation-refund`)

---

## 📁 File Organization & What Each Does

### Root Directory Files:
```
onethrive-website/
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Build configuration
├── tailwind.config.js    # Styling configuration
├── eslint.config.js      # Code quality rules
├── vercel.json          # Deployment settings
└── index.html           # Main HTML template
```

### Source Code (`src/` folder):

#### 🎯 Main App Files:
- **`src/App.jsx`** - Main application structure, defines all website routes
- **`src/main.jsx`** - Application entry point
- **`src/index.css`** - Global styles and fonts

#### 📄 Pages (`src/pages/`):
Each file represents a complete webpage:

| File | What it shows | Key Content |
|------|---------------|-------------|
| `Home.jsx` | Homepage | Complete landing page with all sections |
| `About.jsx` | About Us page | Company information, team, process |
| `Services.jsx` | Services page | All service offerings |
| `Contact.jsx` | Contact page | Contact form and information |
| `Blog.jsx` | Blog listing | All blog posts in grid format |
| `ROICalculator.jsx` | ROI tool | Interactive calculator |
| `CultureQuiz.jsx` | Culture assessment | Interactive quiz |

#### 🧩 Components (`src/components/`):

**Shared Components:**
- **`Navbar.jsx`** - Website header with navigation menu
- **`Footer.jsx`** - Website footer with links and contact info
- **`Background.jsx`** - Animated background effects
- **`ScrollToTop.jsx`** - Scroll to top functionality

**Home Page Sections (`src/components/Home/`):**
| Component | What it does | Where it appears |
|-----------|--------------|------------------|
| `HeroSection.jsx` | Main banner with call-to-action | Top of homepage |
| `AboutUs.jsx` | Brief company overview | Homepage about section |
| `ServicesSection.jsx` | Service highlights | Homepage services |
| `WhyChooseUs.jsx` | Company advantages | Homepage benefits |
| `ClientLogos.jsx` | Client testimonials | Homepage social proof |
| `Testimonials.jsx` | Customer reviews | Homepage testimonials |
| `MomentsThatMatter.jsx` | Image gallery | Homepage gallery |
| `FAQs.jsx` | Frequently asked questions | Homepage FAQ section |

**About Page Components (`src/components/About/`):**
- `AboutUsHero.jsx` - About page banner
- `MissionVision.jsx` - Company mission and vision
- `OurProcess.jsx` - Company process explanation
- `OurTeam.jsx` - Team member profiles

**Blog System (`src/components/Blog/`):**
- `BlogGrid.jsx` - Blog posts grid layout
- `BlogPage.jsx` - Individual blog post layout
- `BlogPagination.jsx` - Blog navigation
- `blogData.js` - **[IMPORTANT]** All blog content and metadata
- `BlogPosts/` - Individual blog post content files

**Interactive Tools:**
- `src/components/ROI_Calculator/` - ROI calculation tool
- `src/components/CultureQuiz/` - Culture assessment quiz

#### 🖼️ Assets (`src/assets/`):
```
src/assets/
├── Logo.png              # Main OneThrive logo
├── herosectionimage.webp  # Homepage hero image
├── about.webp            # About page image
├── Blogs/               # Blog post images (Blog1.webp, Blog2.webp, etc.)
├── ClientLogo/          # Client company logos
├── moments/             # Gallery images (image1.webp - image6.webp)
├── process/             # Process step images (1.png - 5.png)
├── services/            # Service icons (services1.png - services7.png)
└── team/               # Team member photos (parth.webp, smeet.webp, sujal.webp)
```

---

## 🔧 How to Make Common Changes

### 1. **Changing Contact Information**

**Phone Numbers, Email, Address:**
- **File**: `src/components/Footer.jsx`
- **Also check**: `src/pages/Contact.jsx`

**What to look for:**
```jsx
// Find sections like this:
<p>📧 hello@onethrive.in</p>
<p>📱 +91 98765 43210</p>
```

### 2. **Updating Company Logo**
- **Replace file**: `src/assets/Logo.png`
- **Also replace**: `public/Onethrive tab logo.png` (browser tab icon)

### 3. **Changing Hero Section (Main Banner)**
- **File**: `src/components/Home/HeroSection.jsx`
- **Image**: `src/assets/herosectionimage.webp`

**Look for:**
```jsx
// Main headline text
<h1>Transform Your Workplace Culture</h1>
// Subtitle text
<p>Creating engaging employee experiences...</p>
```

### 4. **Adding/Editing Team Members**
- **File**: `src/components/About/OurTeam.jsx`
- **Photos**: Add to `src/assets/team/`

**Format:**
```jsx
{
  name: "Person Name",
  role: "Job Title", 
  image: personPhoto,
  bio: "Person's background..."
}
```

### 5. **Managing Blog Posts**

**Adding a New Blog:**
1. **Add image**: Save blog image as `src/assets/Blogs/Blog[X].webp`
2. **Update blog list**: Edit `src/components/Blog/blogData.js`
3. **Create blog content**: Add file in `src/components/Blog/BlogPosts/`
4. **Add route**: Update `src/App.jsx` routes section

**Blog Data Format:**
```javascript
{
  id: 10,
  title: "Your Blog Title",
  category: "Category Name",
  thumbnail: BlogimageX,
  excerpt: "Brief description...",
  author: "OneThrive",
  readTime: "X min read",
  path: "/blogs/your-blog-url"
}
```

### 6. **Updating Services**
- **Homepage Services**: `src/components/Home/ServicesSection.jsx`
- **Detailed Services Page**: `src/pages/Services.jsx`
- **Service Icons**: `src/assets/services/`

### 7. **Changing Client Logos**
- **Component**: `src/components/Home/ClientLogos.jsx`
- **Images**: `src/assets/ClientLogo/`

### 8. **Updating FAQ Section**
- **File**: `src/components/Home/FAQs.jsx`

**Format:**
```jsx
{
  question: "Your question?",
  answer: "Your detailed answer..."
}
```

### 9. **Modifying Navigation Menu**
- **File**: `src/components/Navbar.jsx`
- **Look for**: `navItems` array

**Format:**
```javascript
{ name: "Menu Item", path: "/page-url" }
```

### 10. **Social Media Links**
- **File**: `src/components/Footer.jsx`
- **Icons**: `src/assets/instagram-logo.png`, `src/assets/linkedin-logo.png`

---

## 📝 Content Management Guide

### Text Content Changes:
1. **Headlines & Descriptions**: Look for JSX content between `<h1>`, `<h2>`, `<p>` tags
2. **Button Text**: Look for text within `<button>` or `<Link>` components
3. **Form Labels**: Look in contact form components

### Image Changes:
1. **Replace existing images** with same filename for easy updates
2. **Maintain image dimensions** for best results
3. **Use optimized formats** (.webp for web, .png for logos)

### SEO Content (Search Engine Optimization):
**Files to update for better Google ranking:**
- Page titles and descriptions in each page file
- `public/sitemap.xml` - List of all pages
- `public/robots.txt` - Search engine instructions

---

## ⚙️ Technical Details

### Development Commands:
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Check code quality
```

### Project Dependencies:
- **React**: User interface framework
- **React Router**: Page navigation
- **Tailwind CSS**: Styling framework
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **React Icons**: Additional icons
- **Vercel Analytics**: Website statistics

### File Types Explained:
- **`.jsx` files**: React components (website building blocks)
- **`.js` files**: JavaScript logic and data
- **`.css` files**: Styling and appearance
- **`.json` files**: Configuration and data
- **`.webp/.png` files**: Optimized images

---

## 🚨 Troubleshooting

### Common Issues:

**1. Website not loading after changes:**
- Check for syntax errors in modified files
- Ensure all required files are present
- Restart development server

**2. Images not displaying:**
- Check file paths are correct
- Ensure images are in correct folders
- Verify image file names match code references

**3. Navigation not working:**
- Check routes in `src/App.jsx`
- Verify component imports
- Ensure page files exist

**4. Styling issues:**
- Check Tailwind classes are correct
- Verify CSS imports
- Clear browser cache

**5. Contact form not working:**
- Check form submission logic
- Verify email integration
- Test form validation

### Quick Fixes:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist/
npm run build

# Check for errors
npm run lint
```

---

## 🆘 Getting Help

### For Non-Technical Users:
1. **Document your changes** before making them
2. **Take screenshots** of issues
3. **Note error messages** exactly as they appear
4. **Contact your developer** with specific details

### For Technical Users:
1. **Check browser console** for error messages
2. **Review Git commits** for recent changes
3. **Test in development mode** before deploying
4. **Check Vercel deployment logs** for production issues

### Important Files to Never Delete:
- `package.json` - Project configuration
- `src/App.jsx` - Main application structure  
- `src/main.jsx` - Application entry point
- `vite.config.js` - Build configuration
- `vercel.json` - Deployment settings

### Backup Strategy:
1. **Always backup** before major changes
2. **Use version control** (Git) for tracking changes
3. **Test changes** in development before production
4. **Keep original files** when replacing images

---

## 📞 Emergency Contacts

**For Technical Issues:**
- Contact your web developer
- Check Vercel dashboard for deployment status
- Review error logs in browser developer tools

**For Content Updates:**
- Follow this guide for common changes
- Document changes before implementation
- Test thoroughly before going live

---

## 🎯 Website Maintenance Schedule

### Weekly:
- Monitor website performance
- Check for broken links
- Review contact form submissions

### Monthly:
- Update blog content
- Review and update team information
- Check client testimonials

### Quarterly:
- Review and update service offerings
- Update company information
- Refresh team photos and bios

### Annually:
- Review entire website content
- Update privacy policy and terms
- Refresh design elements if needed

---

**Last Updated:** October 2025  
**Version:** 1.0  
**Created by:** Jaimeen Bhagat (Freelancer)  
**Client:** OneThrive

---

*This documentation is designed to help non-technical users understand and maintain the OneThrive website. For complex changes or technical issues, please consult with a qualified web developer.*