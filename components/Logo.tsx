
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src="https://i.postimg.cc/V6v6Tmvf/KEP_LOGO.png" 
      alt="Keshava Elite Projects" 
      className={`${className}`}
      style={{ 
        mixBlendMode: 'screen', 
        filter: 'brightness(1.2) contrast(1.1)',
        objectFit: 'contain',
      }}
    />
  );
};

export default Logo;
