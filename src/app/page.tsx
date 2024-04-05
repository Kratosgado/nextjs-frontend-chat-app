"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, redirect } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

// create a context for the user's authentication state
interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextData | null>(null);



export default function Page() {
  const router = useRouter();
  const isAuthenticated = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      redirect('/login');
    }
  }, [isAuthenticated, router]);
  return (
    <>
     <ToastContainer />
      <App>
        <h1 className="text-2xl font-semibold">Hello, HomePage</h1>
      </App>
    </>
  )
}

const App = ({children}: {children: React.ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await checkUserSession();
      setIsAuthenticated(!!user);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

const checkUserSession = async (): Promise<boolean> => {
  const token = localStorage.getItem('token');

  if (!token) { return false; }
  const response = await fetch(`${process.env.chatBackendUrl!}/user/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(token);

  return response.ok;
}