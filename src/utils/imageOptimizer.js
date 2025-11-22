/**
 * Image optimization utilities
 */

/**
 * Generate srcset for responsive images
 * @param {string} imagePath - Base image path
 * @param {array} sizes - Array of sizes [320, 640, 1024, 1920]
 * @returns {string} srcset string
 */
export function generateSrcSet(imagePath, sizes = [320, 640, 1024, 1920]) {
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `${basePath}-${size}.${extension} ${size}w`)
    .join(', ');
}

/**
 * Preload critical images
 * @param {array} images - Array of image URLs
 */
export function preloadImages(images) {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Lazy load image with placeholder
 * @param {HTMLImageElement} img - Image element
 * @param {string} src - Image source
 */
export function lazyLoadImage(img, src) {
  if (!img) return;
  
  // Show placeholder
  img.style.backgroundColor = '#f0f0f0';
  
  const tempImg = new Image();
  tempImg.onload = () => {
    img.src = src;
    img.style.backgroundColor = 'transparent';
  };
  tempImg.onerror = () => {
    console.error(`Failed to load image: ${src}`);
    img.alt = 'تصویر بارگذاری نشد';
  };
  tempImg.src = src;
}

export default {
  generateSrcSet,
  preloadImages,
  lazyLoadImage
};
