"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Hello, HomePage</h1>
      <Link href="/dashboard" className="text-blue-500">Dashboard</Link> {/* Use text color class */}
      <ToastContainer />
    </>
  )
}