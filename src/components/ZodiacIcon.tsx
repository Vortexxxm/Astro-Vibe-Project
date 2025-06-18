
import React from 'react';
import { zodiacSigns } from '@/utils/zodiacUtils';

interface ZodiacIconProps {
  sign: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const ZodiacIcon: React.FC<ZodiacIconProps> = ({ sign, size = 'md', animated = false }) => {
  const zodiac = zodiacSigns[sign];
  if (!zodiac) return null;

  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl',
    xl: 'w-32 h-32 text-7xl'
  };

  const gradientId = `gradient-${sign}`;

  return (
    <div className={`${sizeClasses[size]} ${animated ? 'animate-float' : ''} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={zodiac.colors[0]} />
            <stop offset="100%" stopColor={zodiac.colors[1] || zodiac.colors[0]} />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={`url(#${gradientId})`}
          opacity="0.2"
          className={animated ? 'animate-pulse' : ''}
        />
        <text
          x="50"
          y="65"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontSize="40"
          fontWeight="bold"
        >
          {zodiac.symbol}
        </text>
      </svg>
    </div>
  );
};

export default ZodiacIcon;
