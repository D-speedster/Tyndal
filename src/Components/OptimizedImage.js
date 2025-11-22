import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

/**
 * Optimized Image Component with lazy loading
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  loading = 'lazy',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);
  const { targetRef, hasIntersected } = useIntersectionObserver();

  useEffect(() => {
    if (hasIntersected && !imageSrc) {
      setImageSrc(src);
    }
  }, [hasIntersected, src, imageSrc]);

  const handleError = () => {
    setImageError(true);
    console.error(`Failed to load image: ${src}`);
  };

  if (imageError) {
    return (
      <div 
        ref={targetRef}
        className={className}
        style={{
          ...style,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          fontSize: '14px'
        }}
      >
        تصویر بارگذاری نشد
      </div>
    );
  }

  return (
    <img
      ref={targetRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E'}
      alt={alt}
      className={className}
      style={{
        ...style,
        backgroundColor: imageSrc ? 'transparent' : '#f0f0f0',
        transition: 'background-color 0.3s ease'
      }}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;
