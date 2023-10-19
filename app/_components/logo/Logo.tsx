import React from "react";
import Image from "next/image";

// data
import logoDimensions from '@/app/data/logo.json';

export const Logo: React.FC = ({
}) => {
  return (
    <Image
      alt="Derek Gygax Portfolio Logo"
      src={'/assets/derekGygaxPortfolioLogo.png'}
      height={logoDimensions.height}
      width={logoDimensions.width}
      style={{ objectFit: "contain" }}
      priority
    />
  )
}