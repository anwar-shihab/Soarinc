'use client';
import Image from 'next/image'
import React from 'react'
import { NavData } from '../data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidenav = () => {
    const pathname = usePathname()
      const getLinkClasses = (route: string) => {
    return pathname === route
      ? 'text-lg font-medium text-primary' 
      : 'text-lg font-medium text-muted'; 
  };
  return (
    <div className="relative hidden md:block">
          <Image src="/assets/images/ham.png" alt="logo" width={14} height={18} className='lg:hidden' /> 
          <div className='fixed text-primary hidden lg:block h-screen top-0 pt-10 px-8  border-r border-border bg-background'>
              <div className="flex align-center gap-2">
                  <Link href="/" className='flex items-center gap-2'>
                    <Image src="/assets/images/logo.svg" alt="logo" width={35} height={35} />
                    <h1 className='text-2xl font-semibold'>Soar Task</h1>
                  </Link>
              </div>
              <section className="mt-10 pt-9">
                {
                    NavData.map((item, index) => {
                        return (
                                <Link href={item.href} key={index}>
                                    <div  className='flex items-center gap-4 px-4 py-3 hover:bg-card cursor-pointer'>
                                        <Image src={`${pathname === item.href ? item.active :  item.icon}`} alt="icon" width={20} height={20} />
                                    <p className={getLinkClasses(item.href)} >{item.name}</p>
                                    </div>
                                </Link>
                        )
                    })
                }
              </section>
          </div>   
    </div>
  )
}


export const getServerSideProps = async () => {
    return {
        props: {
            
        }
    }
}

export default Sidenav
