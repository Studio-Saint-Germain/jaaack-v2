import { AppRoute, AppRoutes } from '@/app/router/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NavigationProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Navigation({children, className}: NavigationProps) {
  console.log(AppRoutes)
  return (
    <header className={`${className} md:w-24 md:h-screen md:fixed md:top-0 py-4 md:bg-white md:bg-opacity-50`}>
      <nav>
        <ul>
          {AppRoutes.map( (route: AppRoute) => (
            <li key={route.label}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Jaaack Logo"
          className="invert max-w-none"
          width={180}
          height={24}
          priority
        />
      </Link>
    </header>
  )
}