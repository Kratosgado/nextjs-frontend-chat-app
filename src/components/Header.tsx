import { Switch } from "@mui/material";
import Link from "next/link";
import { MaterialUISwitch, toggleDarkMode } from "./client/UISwitch";

export type HeaderProps = {
   username?: string;
 }
 export const Header = (headerProps: HeaderProps) => {
   return (
     <header className='bg-indigo-600 py-4 text-white'>
       <div className='container mx-auto flex items-center justify-between'>
         <h1 className='font-semibold text-2xl'>Demo Chat App</h1>
         <MaterialUISwitch onChange={toggleDarkMode} defaultChecked/>
         <div className='flex space-x-4'>
           <Link className='hover:text-gray-300' href={"/"}>Home</Link>
           <button className='hover:text-gray-300'>Conversations</button>
           <Link href={"/login"} className='hover:text-gray-300'>{!headerProps.username ? "Login": headerProps.username}</Link>
         </div>
       </div>
     </header>
   )
 }
 