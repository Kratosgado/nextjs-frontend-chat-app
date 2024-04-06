"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppStore } from '@/lib/hooks';
import { RootState } from "@/lib/store";
import { User } from '@/api/types';
import { getCurrentUser } from '@/lib/feature/userReducer';


export default function Page() {
  const router = useRouter();
  let user = useAppSelector((state: RootState) => state.user); 

  

  useEffect(() => {

    if (!getCurrentUser()) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <>
     <ToastContainer />
        <h1 className="text-2xl font-semibold">Hello, HomePage</h1>
    </>
  )
}

export const checkUserSession = async (): Promise<User | null> => {
  const token = localStorage.getItem('token');

  console.log("checkUserSession");
  if (!token) { return null; }
  try {
    const response = await fetch(`${process.env.chatBackendUrl!}/user/me`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(token);
  
    return (await response.json());
  } catch (error) {
    console.error(error);
    return null;
  }
}