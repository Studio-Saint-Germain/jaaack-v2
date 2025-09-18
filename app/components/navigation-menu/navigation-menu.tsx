'use client';
import { AppRoute, AppRoutes } from '@/app/router/routes';
import Image from 'next/image';
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

export default function NavigationMenu({ closeMobileMenu, isVisible }: NavigationMenuProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className={`bg-white md:bg-transparent fixed md:relative w-full md:w-auto h-full md:h-auto top-0 md:top-unset z-10 md:z-auto transition-all duration-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:translate-x-0 md:opacity-100`}>
      <ul className="flex h-full text-4xl md:text-lg flex-col items-center justify-center md:h-auto md:flex-col">
        <li className="my-4 md:hidden">
          <Link onClick={() => closeMobileMenu && closeMobileMenu()} className={`p-4 uppercase cursor-pointer ${pathname == '/' ? "font-semibold" : ""}`} href={'/'}>Home</Link>
        </li>
        <li className="md:hidden">
          <span onClick={() => closeMobileMenu && closeMobileMenu()} className={`p-4 text-lg uppercase cursor-pointer absolute top-4 right-4`}>Close</span>
        </li>
        {AppRoutes.map((route: AppRoute) => (
          <li key={route.label} className="my-4 md:my-0 md:flex md:items-center md:justify-center">
            <Link onClick={() => closeMobileMenu && closeMobileMenu()} className={`md:text-b-to-t p-4 uppercase ${isHomePage ? 'md:text-white' : ''} cursor-pointer ${pathname.split('/').includes(route.path.slice(1)) ? "font-semibold" : ""}`} href={route.path}>{route.label}</Link>
          </li>
        ))}
        <span className="flex gap-2 items-center justify-center md:-rotate-90 mt-2">
          <li>
            <Link className={`text-3xl text-white ${!isHomePage ? 'invert' : ''}`} href='https://www.instagram.com/jackantoinecharlot' target="_blank">
              <Image
                src="/instagram.svg"
                alt="Link to Instagram"
                className='w-10 md:w-4'
                width={16}
                height={16}
                priority
              />
            </Link>
          </li>
          <li>
            <Link className={`text-3xl text-white ${!isHomePage ? 'invert' : ''}`} href='https://vimeo.com/jackantoinecharlot' target="_blank">
              <Image
                src="/vimeo.svg"
                alt="Link to Vimeo"
                className='w-10 md:w-4'
                width={16}
                height={16}
                priority
              />
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  )
}