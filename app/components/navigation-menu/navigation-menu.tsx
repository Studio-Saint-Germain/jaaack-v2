'use client';
import { AppRoute, AppRoutes } from '@/app/router/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavigationMenuProps {
    children?: React.ReactNode;
    className?: string;
    isHomePage?: boolean;
    isVisible?: boolean;
    closeMobileMenu?: () => void;
}

export default function NavigationMenu({children, className, closeMobileMenu, isVisible}: NavigationMenuProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <nav className={`bg-white md:bg-transparent fixed md:relative w-full md:w-auto h-full md:h-auto top-0 md:top-unset z-10 md:z-auto transition-all duration-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:translate-x-0 md:opacity-100`}>
      <ul className="flex h-full text-4xl md:text-lg flex-col items-center justify-center md:h-auto md:flex-col-reverse">
      <li className="my-4 md:hidden">
        <Link onClick={() => closeMobileMenu && closeMobileMenu()} className={`p-4 uppercase cursor-pointer ${pathname == '/' ? "font-semibold" : ""}`} href={'/'}>Home</Link>
      </li>
      <li className="md:hidden">
      <Link onClick={() => closeMobileMenu && closeMobileMenu()} className={`p-4 text-lg uppercase cursor-pointer absolute top-4 right-4`} href={'/'}>Close</Link>
      </li>
        {AppRoutes.map( (route: AppRoute) => (
          <li key={route.label} className="my-4 md:my-0 md:flex md:items-center md:justify-center">
            <Link onClick={() => closeMobileMenu && closeMobileMenu()} className={`md:text-b-to-t p-4 uppercase ${isHomePage ? 'md:text-white' : ''} cursor-pointer ${pathname == route.path ? "font-semibold" : ""}`} href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}