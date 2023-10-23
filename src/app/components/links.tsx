'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link';

export function Links() {
   const pathname = usePathname()

   return (
      <nav>
         <ul>
            <li>
               <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={'/'}>
                  Home
               </Link>
            </li>
            <li>
               <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href={'/'}>
                  Dashboard
               </Link>
            </li>
         </ul>
      </nav>
   )
}