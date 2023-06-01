import Image from 'next/image';
import React, { useMemo } from 'react';

interface NavigationProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Footer({className}: NavigationProps) {
  const currentYear = useMemo( () => {
    return new Date().getFullYear();
  },[]);

  return (
    <footer className={`p-4 bottom-0 right-0 ${className ? className : ''}`}>
      <p className='text-right text-[10px] text-white'>© Copyright {currentYear} Jaaack. All Right Reserved. Site by <a className="underline" href="https://studio-saintgermain.com" target="_blank">Studio Saint Germain</a>.</p>
    </footer>
  )
}