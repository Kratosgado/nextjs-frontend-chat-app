"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const queryClient = new ApolloClient({
  uri: process.env.chatBackendUrl!,
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: `Bearer ${process.env.chatBackendToken}`
  // }
});


export default function Page() {
  return (
    <ApolloProvider client={queryClient}>
      <h1 className="text-2xl font-semibold">Hello, HomePage</h1>
      <Link href="/dashboard" className="text-blue-500">Dashboard</Link> {/* Use text color class */}
      <ToastContainer />
    </ApolloProvider>
  )
}