"use client"
import React from 'react'
import Sidenav from './navbar/Sidenav'
import Image from 'next/image'
import IconButton from './IconButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  return (
    <div className='fixed pl-5 pr-5 pt-5 lg:pt-7 lg:pb-7 lg:pl-0 w-full bg-background  lg:border-b border-border top-0 z-[100]'>
          <header className='flex pb-3 font-inter items-center justify-between relative lg:justify-start'>
              <nav className='relative lg:w-[220px]'>
                  <Sidenav />
              </nav>
              <h3 className='font-inter font-semibold text-xl lg:text-2xl leading-6 text-primary lg:pl-8 '>  
                {pathname==='/' ? 'Overview' :pathname==='/settings' ? 'Settings' : ''}
              </h3>
              <div className="hidden lg:ml-auto lg:flex">
                  <div className="flex gap-7">
                      <div className=" relative hidden lg:block w-[255px]">
              <input type="text" placeholder="Search for something" className="w-full h-[50px] px-5 text-sm text-secondary font-inter bg-foreground rounded-3xl focus:outline-none focus:ring-0 pl-10" />
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute left-3 top-[40%] transform -translate-y-1/2 h-5 w-5 text-secondary font-inter" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
            >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
          </div>
                      <IconButton src="/assets/images/settings.png" alt="settings" width={50} height={50} link="/settings" />
                      <IconButton src="/assets/images/bell.png" alt="bell-icon" width={50} height={50} link="/notifications"/>
                      <IconButton src="/assets/images/profile.png" alt="avatar" width={60} height={60} link="/profile" />
                  </div>
              </div>
              <Image className='lg:hidden' src="/assets/images/profile.png" alt="logo" width={35} height={35} />
          </header>
          <div className="relative lg:hidden mb-5">
              <input type="text" placeholder="Search for something?" className="w-full h-10 px-5 text-sm text-secondary font-inter bg-foreground rounded-3xl focus:outline-none focus:ring-0 pl-10" />
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary font-inter" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
            >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
          </div>
    </div>
  )
}

export default Header
