"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const queryClient = new ApolloClient({
  uri: process.env.NEXT_CHAT_BACKEND_URL!,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_BACKEND_AUTH_TOKEN}`
  }
});


export default function Page() {
  return (
    <ApolloProvider client={queryClient}>
      <h1>Hello, HomePage</h1>
      <Link href="/dashboard">Dashboard</Link>
    </ApolloProvider>
  )
}