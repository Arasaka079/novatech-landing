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
        <div className="absolute max-w-150 mx-auto top-20 left-5 right-5 xl:static ">
          <ul
            className={` ${
              isMenuOpen ? 'flex' : 'hidden'
            } relative flex-col w-full bg-white text-nt-heading font-poppins font-medium shadow-md rounded-md 
             xl:flex xl:flex-row xl:shadow-none xl:font-semibold`}>
            <SquareX
              size={36}
              strokeWidth={1.5}
              className="absolute right-1 top-1 text-nt-accent p-1 rounded-md xl:hidden"
              onClick={() => {
                setIsMenuOpen(false);
                setIsSubMenuOpen(null);
              }}
            />
            {menu.map(item => (
              <li key={item.id} className={` ${item.submenu ? 'xl:relative group' : ''} px-4 py-3 xl:text-[17px]`}>
                <button
                  className={`flex justify-between items-center w-full hover:text-nt-accent transition-all duration-150 cursor-pointer `}
                  onClick={() => subMenuToggle(item.id)}>
                  <a href="#">{item.title}</a>
                  {item.submenu && (
                    <ChevronUp
                      size={24}
                      strokeWidth={1.5}
                      className={`${
                        isSubMenuOpen === item.id ? 'rotate-180' : ''
                      } transition-all duration-200 group-hover:rotate-180`}
                    />
                  )}
                </button>
                <ul
                  className={`${
                    item.submenu && isSubMenuOpen === item.id ? 'flex' : 'hidden'
                  } flex-col gap-1 text-sm ml-3 mt-2 p-2 rounded-md border-2 border-indigo-200
                   xl:absolute xl:gap-3 xl:top-full xl:-left-7 xl:min-w-max xl:bg-white xl:shadow-lg xl:m-0 xl:p-4 xl:group-hover:flex`}>
                  {item.submenu?.map(subitem => (
                    <li key={subitem.id}>{subitem.label}</li>
                  ))}
                </ul>
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
