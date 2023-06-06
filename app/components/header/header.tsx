'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavigationMenu from '../navigation-menu/navigation-menu';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    className?: string;
}

export default function Header({className}: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  return (
    <header className={`${className ? className : ''} z-10 flex items-center w-full pr-6 md:pr-0 md:border-r md:border-solid ${isHomePage ? 'border-white' : 'md:border-black md:bg-white'} md:w-24 md:h-screen fixed md:top-0 py-4 md:flex-col md:items-stretch justify-between`}>
      <NavigationMenu closeMobileMenu={() => setDisplayMobileMenu(!displayMobileMenu)} isVisible={displayMobileMenu} isHomePage={isHomePage} />
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Jaaack Logo"
          className={`invert ${isHomePage ? 'invert' : 'md:invert-0'} max-w-none md:desktop-vertical-logo`}
          width={180}
          height={24}
          priority
        />
      </Link>
      <p onClick={() => setDisplayMobileMenu(!displayMobileMenu)} className="text-white md:hidden cursor-pointer">
        MENU
      </p>
    </header>
  )
}