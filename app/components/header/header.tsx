
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavigationMenu from '../navigation-menu/navigation-menu';

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Header({children, className}: HeaderProps) {
  return (
    <header className={`${className} md:w-24 md:h-screen md:fixed md:top-0 py-4 md:flex md:flex-col md:justify-between`}>
      <NavigationMenu />
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Jaaack Logo"
          className="invert max-w-none md:desktop-vertical-logo"
          width={180}
          height={24}
          priority
        />
      </Link>
    </header>
  )
}