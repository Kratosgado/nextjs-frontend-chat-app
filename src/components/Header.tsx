import Link from "next/link";
import { Links } from "./links";

export type HeaderProps = {
   username?: string;
 }
 export const Header = (headerProps: HeaderProps) => {
   return (
     <header className='bg-indigo-600 py-4 text-white'>
       <div className='container mx-auto flex items-center justify-between'>
         <h1 className='font-semibold text-2xl'>Demo Chat App</h1>
         <div className='flex space-x-4'>
           <Link className='hover:text-gray-300' href={"/"}>Home</Link>
           <button className='hover:text-gray-300'>Conversations</button>
           <Link href={"/signin"} className='hover:text-gray-300'>{!headerProps.username ? "Login": headerProps.username}</Link>
         </div>
       </div>
       {/* <Links /> */}
     </header>
   )
 }
 