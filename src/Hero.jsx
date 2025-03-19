import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  scrollTargetId,
  className
}) => {
  // Handle the scroll down action when the arrow is clicked
  const handleScrollDown = () => {
    if (scrollTargetId) {
      const target = document.getElementById(scrollTargetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center h-screen bg-cover bg-center ${className}`}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className="text-center p-4 bg-black bg-opacity-50 rounded">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mt-4 text-xl text-white">{subtitle}</p>}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition duration-300 rounded"
          >
            {ctaText}
          </a>
        )}
      </div>
      {/* Interactive scroll down arrow */}
      <div className="absolute bottom-8 cursor-pointer" onClick={handleScrollDown}>
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  scrollTargetId: PropTypes.string, // ID of the element to scroll to on arrow click
  className: PropTypes.string
};

Hero.defaultProps = {
  subtitle: '',
  backgroundImage: '',
  ctaText: '',
  ctaLink: '',
  scrollTargetId: '',
  className: ''
};

export default Hero;
