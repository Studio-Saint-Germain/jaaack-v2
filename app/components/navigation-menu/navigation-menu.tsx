'use client';
import { AppRoute, AppRoutes } from '@/app/router/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavigationMenuProps {
    children?: React.ReactNode;
    className?: string;
    isHomePage?: boolean;
}

export default function NavigationMenu({children, className}: NavigationMenuProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <nav>
      <ul className="md:flex md:flex-col-reverse md:items-center">
        {AppRoutes.map( (route: AppRoute) => (
          <li key={route.label} className="md:flex md:items-center md:justify-center">
            <Link className={`md:text-b-to-t p-4 text-lg uppercase ${isHomePage ? 'md:text-white' : ''} cursor-pointer ${pathname == route.path ? "font-semibold" : ""}`} href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}