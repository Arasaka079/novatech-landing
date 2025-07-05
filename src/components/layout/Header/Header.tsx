'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SquareMenu, SquareX, ChevronUp } from 'lucide-react';
import { menu } from './NavbarData';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<number | null>(null);

  const subMenuToggle = (id: number) => {
    setIsSubMenuOpen(prev => (prev === id ? null : id));
  };

  return (
    <header className="flex justify-between items-center py-2">
      {/*? Header Logo */}
      <div className="relative w-22 h-[40px] xl:w-28 xl:h-[54px] ">
        <Image src="/images/novalogo.webp" alt="NovaTech Website Logo" priority={true} fill={true}></Image>
      </div>

      {/*? Nav Menu  */}
      <div
        className={`${isMenuOpen ? 'fixed' : 'hidden'}  top-0 left-0 right-0 bottom-0 bg-black/60 z-20`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsSubMenuOpen(null);
        }}></div>
      <nav className="z-40">
        <div className="absolute max-w-150 mx-auto top-20 left-5 right-5 xl:hidden ">
          <ul
            className={` ${
              isMenuOpen ? 'flex' : 'hidden'
            } relative flex-col w-full bg-white text-nt-heading font-poppins  shadow-md rounded-md`}>
            <SquareX
              size={36}
              strokeWidth={1.5}
              className="absolute right-1 top-1 text-nt-accent p-1 rounded-md"
              onClick={() => {
                setIsMenuOpen(false);
                setIsSubMenuOpen(null);
              }}
            />
            {menu.map(item => (
              <li key={item.id} className="px-4 py-3">
                <button className="flex justify-between items-center w-full" onClick={() => subMenuToggle(item.id)}>
                  {item.title}
                  {item.submenu && (
                    <ChevronUp
                      size={24}
                      strokeWidth={1.5}
                      className={`${isSubMenuOpen === item.id ? 'rotate-180' : ''} transition-all duration-200`}
                    />
                  )}
                </button>
                {item.submenu && isSubMenuOpen === item.id && (
                  <ul className="flex flex-col gap-1 text-sm ml-3 mt-2 p-2 rounded-md border-2 border-indigo-200">
                    {item.submenu.map(subitem => (
                      <li key={subitem.id} className="">
                        {subitem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Nav Action */}
      <div className="flex justify-between items-center gap-1">
        <a href="/" className="px-3 py-1 rounded-md text-white text-base font-roboto bg-nt-accent">
          Get Started
        </a>
        <button className="text-nt-accent xl:hidden">
          <SquareMenu size={36} strokeWidth={1.5} onClick={() => setIsMenuOpen(true)} />
        </button>
      </div>
    </header>
  );
}

export default Header;
