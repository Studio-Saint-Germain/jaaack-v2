import { AppRoute, AppRoutes } from '@/app/router/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NavigationProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Navigation({children, className}: NavigationProps) {
  return (
    <header className={`${className} md:w-24 md:h-screen md:fixed md:top-0 py-4 md:flex md:flex-col md:justify-between`}>
      <nav>
        <ul className="md:flex md:flex-col-reverse md:items-center">
          {AppRoutes.map( (route: AppRoute) => (
            <li key={route.label} className="md:flex md:items-center md:justify-center">
              <Link className="md:text-b-to-t p-4 text-lg uppercase md:text-white cursor-pointer" href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
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