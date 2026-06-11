// components/hero/HeroBackground.tsx
'use client';

import { memo, useState } from 'react';

interface HeroBackgroundProps {
  src: string;
  alt: string;
}

export const HeroBackground = memo(({ src, alt }: HeroBackgroundProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        onError={() => setImageError(true)}
      />
      {imageError && (
        <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] to-[#1a2234]" />
      )}
      <div className="absolute inset-0 bg-black/30 bg-linear-to-r from-black/50 via-black/20 to-transparent" />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';