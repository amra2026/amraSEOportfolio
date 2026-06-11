# How to Add Images and Screenshots to Your Portfolio

## Overview

Your portfolio currently uses image placeholders. Here's a complete guide to replace them with actual images and screenshots.

---

## 1. Add Your Professional Portrait (Hero Section)

### Step 1: Prepare Your Image
- **Recommended size:** 800x800px or larger (square or portrait)
- **Format:** JPG, PNG, or WebP
- **File size:** Keep under 500KB for performance
- **Optimization:** Use tools like TinyPNG or ImageOptim

### Step 2: Add Image to Project

**Create a public images folder:**
```bash
mkdir public/images
mkdir public/images/portraits
mkdir public/images/case-studies
```

**Upload your portrait:**
- Save your professional portrait as `public/images/portraits/amrahata-portrait.jpg`
- Alternatively, use the Image #1 you provided

### Step 3: Update Hero Component

Edit `src/components/Hero.jsx` and replace the image placeholder section:

**Current code (lines ~125-145):**
```jsx
<motion.div
  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-sm"
  whileHover={{ scale: 1.05, rotateY: 5 }}
>
  {/* Placeholder for professional portrait */}
  <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">👩‍💼</div>
      <p className="text-slate-400">Professional Portrait</p>
      <p className="text-sm text-slate-500 mt-2">Image Placeholder</p>
    </div>
  </div>
</motion.div>
```

**Replace with actual image:**
```jsx
<motion.div
  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-sm"
  whileHover={{ scale: 1.05, rotateY: 5 }}
>
  <img
    src="/images/portraits/amrahata-portrait.jpg"
    alt="Amrahata Paalisbo - SEO Specialist"
    className="w-full h-full object-cover"
  />
</motion.div>
```

---

## 2. Add Case Study Screenshots

### Step 1: Prepare Screenshots

**Screenshots to collect:**
1. SEO dashboard/analytics screenshot
2. Keyword rankings chart
3. Content calendar/workflow tool
4. Internal linking structure diagram
5. Traffic growth graph
6. Domain ecosystem visualization
7. Before/After comparisons

**Optimization:**
- Size: 1200x800px or 16:9 aspect ratio
- Format: PNG for crisp text, JPG for photos
- File size: < 300KB each
- Tools: Compressor.io, TinyPNG

### Step 2: Organize in Project

```bash
public/images/case-studies/
├── overview.png
├── seo-dashboard.png
├── keyword-rankings.png
├── content-workflow.png
├── internal-linking.png
├── traffic-growth.png
└── domain-ecosystem.png
```

### Step 3: Create an Image Component

Create `src/components/ImageGallery.jsx`:

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid md:grid-cols-2 gap-6 my-12">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(image)}
            className="relative rounded-lg overflow-hidden cursor-pointer group glass-sm"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ opacity: 1 }}
            >
              <FiZoomIn className="text-white" size={32} />
            </motion.div>
            {image.label && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">{image.label}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-screen"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-colors"
              >
                <FiX className="text-white" size={24} />
              </button>
              {selectedImage.label && (
                <p className="text-white text-center mt-4 font-semibold">
                  {selectedImage.label}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
```

### Step 4: Update Case Study Component

Add a new slide to `src/components/CaseStudy.jsx`:

```jsx
import ImageGallery from './ImageGallery';

// Add to slides array:
{
  id: 'case-assets',
  title: 'Screenshots',
  content: {
    heading: 'Visual Project Overview',
    images: [
      {
        src: '/images/case-studies/seo-dashboard.png',
        alt: 'SEO Dashboard Analytics',
        label: 'SEO Performance Dashboard',
      },
      {
        src: '/images/case-studies/keyword-rankings.png',
        alt: 'Keyword Rankings Chart',
        label: 'Keyword Rankings Growth',
      },
      {
        src: '/images/case-studies/content-workflow.png',
        alt: 'Content Workflow System',
        label: 'Content Operations Workflow',
      },
      {
        src: '/images/case-studies/internal-linking.png',
        alt: 'Internal Linking Structure',
        label: 'Internal Linking Architecture',
      },
      {
        src: '/images/case-studies/traffic-growth.png',
        alt: 'Traffic Growth Over Time',
        label: 'Organic Traffic Growth: +350%',
      },
      {
        src: '/images/case-studies/domain-ecosystem.png',
        alt: 'Multi-Domain SEO Ecosystem',
        label: 'Domain Ecosystem Strategy',
      },
    ],
  },
}
```

Then in the slide content rendering:

```jsx
{currentSlide.content.images && (
  <ImageGallery images={currentSlide.content.images} />
)}
```

---

## 3. Add About Section Image

Edit `src/components/About.jsx`:

**Replace the placeholder:**
```jsx
<motion.div
  className="relative w-full aspect-square rounded-2xl overflow-hidden glass-sm"
  whileHover={{ scale: 1.02 }}
>
  <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-slate-900/40 flex items-center justify-center">
    <div className="text-center">
      <div className="text-8xl mb-4">📊</div>
      <p className="text-slate-400">Strategic Insights</p>
    </div>
  </div>
</motion.div>
```

**With actual image:**
```jsx
<motion.div
  className="relative w-full aspect-square rounded-2xl overflow-hidden glass-sm"
  whileHover={{ scale: 1.02 }}
>
  <img
    src="/images/portraits/amrahata-about.jpg"
    alt="Amrahata Paalisbo at work"
    className="w-full h-full object-cover"
  />
</motion.div>
```

---

## 4. Image Optimization Best Practices

### Create a Responsive Image Component

Create `src/components/OptimizedImage.jsx`:

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({
  src,
  srcWebP,
  alt,
  title,
  isClickable = false,
  onClick,
  className = '',
}) => {
  return (
    <motion.figure
      whileHover={isClickable ? { scale: 1.02 } : {}}
      onClick={onClick}
      className={`${isClickable ? 'cursor-pointer' : ''} ${className}`}
    >
      <picture>
        {srcWebP && <source srcSet={srcWebP} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          title={title}
          loading="lazy"
          className="w-full h-auto rounded-lg"
        />
      </picture>
    </motion.figure>
  );
};

export default OptimizedImage;
```

### Lazy Loading Setup

Add to `src/App.jsx`:

```jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Native lazy loading
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            imageObserver.unobserve(entry.target);
          }
        });
      });
      images.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  return (
    // ... rest of app
  );
}
```

---

## 5. Adding Images - Complete Step-by-Step

### Method 1: Using Public Folder (Simple)

1. **Create folders:**
   ```bash
   mkdir -p public/images/{portraits,case-studies}
   ```

2. **Add your images:**
   - Copy your portrait to: `public/images/portraits/amrahata-portrait.jpg`
   - Copy screenshots to: `public/images/case-studies/`

3. **Reference in components:**
   ```jsx
   <img src="/images/portraits/amrahata-portrait.jpg" alt="Description" />
   ```

### Method 2: Using Import (Better for Build)

1. **Create images directory in src:**
   ```bash
   mkdir -p src/assets/images/{portraits,case-studies}
   ```

2. **Add images to folder**

3. **Import in components:**
   ```jsx
   import portraitImage from '../assets/images/portraits/amrahata-portrait.jpg';
   
   <img src={portraitImage} alt="Amrahata" />
   ```

### Method 3: Using CDN (Most Scalable)

1. **Upload images to Cloudinary or similar**

2. **Use in components:**
   ```jsx
   <img src="https://res.cloudinary.com/your-name/image/upload/v123/amrahata-portrait.jpg" />
   ```

---

## 6. Image File Structure Example

```
public/
└── images/
    ├── portraits/
    │   ├── amrahata-portrait.jpg          # Hero section
    │   └── amrahata-about.jpg              # About section
    ├── case-studies/
    │   ├── overview.png
    │   ├── seo-dashboard.png
    │   ├── keyword-rankings.png
    │   ├── content-workflow.png
    │   ├── internal-linking.png
    │   ├── traffic-growth.png
    │   └── domain-ecosystem.png
    └── icons/
        └── favicon.ico
```

---

## 7. SEO Image Optimization

### Add Image Metadata

```jsx
<img
  src="/images/portraits/amrahata-portrait.jpg"
  alt="Amrahata Paalisbo - SEO Specialist and Content Operations Expert"
  title="Amrahata Paalisbo Professional Portrait"
  loading="lazy"
  className="w-full h-auto rounded-2xl"
/>
```

### Update Meta Tags in `public/index.html`

```html
<meta property="og:image" content="/images/portraits/amrahata-portrait.jpg" />
<meta property="og:image:width" content="800" />
<meta property="og:image:height" content="800" />
<meta property="twitter:image" content="/images/portraits/amrahata-portrait.jpg" />
```

---

## 8. Tools for Screenshot/Image Creation

### Capture Screenshots
- **Mac:** Cmd + Shift + 4
- **Windows:** Win + Shift + S
- **Tools:** ScreenFlow, Snagit, OBS

### Edit & Optimize
- **Canva** - Design graphics
- **Figma** - Create diagrams
- **TinyPNG** - Compress images
- **Compressor.io** - Batch compression
- **ImageMagick** - Command-line processing

### Convert & Format
```bash
# Convert to WebP (smaller size)
magick input.jpg -quality 80 output.webp

# Resize image
magick input.jpg -resize 1200x800 resized.jpg

# Batch convert
for file in *.png; do magick "$file" -quality 85 "${file%.png}.jpg"; done
```

---

## 9. Performance Tips

✅ **Use WebP format** (50% smaller than JPG)  
✅ **Keep images under 300KB**  
✅ **Use lazy loading** on all images  
✅ **Provide multiple sizes** for responsive design  
✅ **Add alt text** for every image  
✅ **Compress before uploading**  
✅ **Use CDN** for faster delivery  

---

## 10. Troubleshooting

### Images not showing
- Check file path is correct
- Verify image file exists in folder
- Check browser console for 404 errors
- Try absolute path: `/images/name.jpg`

### Images look blurry
- Image resolution too low
- Try 2x resolution (1600x1600 for 800x800 display)
- Use PNG for text/graphics

### Images loading slowly
- Compress to < 300KB
- Use WebP format
- Enable lazy loading
- Use CDN

### Responsive images not working
- Add `max-w-full` class
- Use `h-auto` with width
- Test on mobile device

---

## Ready to Add Images?

1. ✅ Gather all images (portrait + screenshots)
2. ✅ Optimize and compress them
3. ✅ Create `public/images` folder structure
4. ✅ Add images to appropriate folders
5. ✅ Update component files with image paths
6. ✅ Test on different devices
7. ✅ Verify in browser DevTools

**Next:** Follow Method 1 (Public Folder) for the quickest start!
