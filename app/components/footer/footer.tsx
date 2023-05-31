import Image from 'next/image';
import React, { useMemo } from 'react';

interface NavigationProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Footer(props: NavigationProps) {
  const currentYear = useMemo( () => {
    return new Date().getFullYear();
  },[]);

  return (
    <footer className='p-4 absolute bottom-0 right-0'>
      <p className='text-right text-xs'>© Copyright {currentYear} Jaaack. All Right Reserved. Site by Studio Saint Germain.</p>
    </footer>
  )
}