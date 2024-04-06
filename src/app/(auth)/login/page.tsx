"use client";
import { User } from "@/api/types";
import { checkUserSession } from "@/app/page";
import { useAppDispatch } from "@/lib/hooks";
import { AppDispatch } from "@/lib/store";
import {useRouter} from 'next/navigation'
import next, { Metadata } from "next";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function SignInPage() {
  return (
      <SignInForm />
  )
};


function SignInForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useAppDispatch();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${process.env.chatBackendUrl!}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      });
      return response;
    } catch (error) {
       throw error;
    }
  }
  

  const handleLogin = async (event: React.FormEvent) => {
    
    event.preventDefault();
      try {
        const response: Response = await login(email, password);
        if (response.ok) {
          localStorage.setItem('token', await response.text());
          dispatch({ type: 'SET_USER', payload: await checkUserSession() });
          toast.success(`User signed in successfully.`, { position: toast.POSITION.TOP_CENTER });
          router.back();
          
        } else {
          toast.error(`User sign in failed.`, { position: toast.POSITION.TOP_CENTER });
        }
      } catch (error) {
        console.log(error);
        toast.error(`${error}`, { position: toast.POSITION.TOP_CENTER });
      }
  };

  return (
     <div className="min-h-screen flex items-center bg-slate-900 justify-center">
       <div className="bg-white p-8 rounded shadow-md w-96">
         <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-600">Login</h2>
         <form onSubmit={handleLogin}>
           <div className="mb-4">
             <label htmlFor="email" className={inputLabel}>
               Email
             </label>
             <input
               type="email"
               id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
               className={inputField}
             />
           </div>
           <div className="mb-4">
             <label htmlFor="password" className={inputLabel}>
               Password
             </label>
             <input
               type="password"
               id="password"
              name="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
               className={inputField}
             />
           </div>
           <button
            type="submit"
             className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
           >
             Sign In
           </button>
        </form>
       </div>
     </div>
   );
 };
const inputLabel = `
    block
    text-sm
    font-medium
    text-gray-600
 
`
 const inputField = `
    mt-1
    p-2
    w-full
    border
    rounded
    focus:ring
    focus:ring-indigo-200
 `