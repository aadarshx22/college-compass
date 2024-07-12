'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavItem = () => {
    const pathname = usePathname();
  return (
    <ul className='flex md:flex-between flex-col w-full items-start gap-5 md:flex-row'>
       {headerLinks.map((link) => {
        const isActive = pathname === link.route;
            return (
                <li
                    key={link.route}
                    className={`${
                        isActive && 'text-primary-500'}
                        flex-center p-mediun whitespace-nowrap`}
                >
                    <Link href = {link.route}>{link.label}</Link>
                </li>
            )
       })}
    </ul>
  )
}
