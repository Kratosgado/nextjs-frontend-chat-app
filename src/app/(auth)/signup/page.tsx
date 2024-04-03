"use client";
import { SignUpInput, User } from "@/api/types";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {Button} from '@mui/material';

export default function SignUpPage() {
  return (
      <SignUpForm />
  )
};


function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | null>(null); 
   const signUp = async ({ email, name, password }: SignUpInput) => {
    console.log(email, password, name);
  
    const response = await fetch(`${process.env.chatBackendUrl!}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "username": name,
        "password": password
      })
    });
    return response.json();
  }
  

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    // Call the signUp mutation
    toast.info(`Signing up user...`, { position: toast.POSITION.TOP_CENTER });
    await signUp( { email, name, password } );
    toast.success(`User signed up successfully. Data: ${user}`, { position: toast.POSITION.TOP_CENTER });
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
       <div className="dark:bg-white bg-gray-900 p-8 rounded shadow-md w-96">
         <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-600">Sign Up</h2>
         <form>
           <div className="mb-4">
             <label htmlFor="name" className={inputLabel}>
               Name
             </label>
             <input
               type="text"
               id="name"
              name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
               className={inputField}
             />
           </div>
           <div className="mb-4">
             <label htmlFor="email" className={inputLabel}>
               Email
             </label>
             <input
               type="email"
               id="email"
              name="email"
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
          <Button variant="contained">Sign Up</Button>
           <button
            type="submit" onClick={handleSignUp}
             className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
           >
             Sign Up
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