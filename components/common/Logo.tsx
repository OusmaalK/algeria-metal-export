import React from 'react';

const Logo = ({ className = "", width = 200, height = 50 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 50" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9A44" />
          <stop offset="100%" stopColor="#FC6076" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      <path d="M 5,42 L 20,8 L 35,42" stroke="url(#gradOrange)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="10" y1="30" x2="30" y2="30" stroke="url(#gradOrange)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 20,8 L 20,20" stroke="url(#gradOrange)" strokeWidth="3" strokeLinecap="round" />

      <text x="20" y="37" fontFamily="'Montserrat', Arial, sans-serif" fontSize="7" fontWeight="900" fill="#ffffff" textAnchor="middle" opacity="0.9" letterSpacing="1">AE</text>

      <text x="48" y="28" fontFamily="'Montserrat', 'Segoe UI', Arial, sans-serif" fontSize="18" fontWeight="900" fill="#ffffff" letterSpacing="2" filter="url(#shadow)">
        ALGERIA METAL
      </text>

      <text x="50" y="42" fontFamily="'Montserrat', 'Segoe UI', Arial, sans-serif" fontSize="8" fontWeight="700" fill="#F97316" letterSpacing="3" filter="url(#shadow)">
        EXPORT SOLUTIONS
      </text>
    </svg>
  );
};

export default Logo;