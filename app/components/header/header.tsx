'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavigationMenu from '../navigation-menu/navigation-menu';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Header({children, className}: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className={`${className ? className : ''} ${isHomePage ? '' : 'md:bg-white'} md:w-24 md:h-screen md:fixed md:top-0 py-4 md:flex md:flex-col md:justify-between`}>
      <NavigationMenu isHomePage={isHomePage} />
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Jaaack Logo"
          className={`${isHomePage ? 'invert' : ''} max-w-none md:desktop-vertical-logo`}
          width={180}
          height={24}
          priority
        />
      </Link>
    </header>
  )
}