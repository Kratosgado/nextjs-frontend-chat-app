import Image from 'next/image';
import Link from 'next/link'; 

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard</h1>
      <Link href="/">HomePage</Link>
      {/* scroll to id */}
      <Link href={"/dashboard#settings"}>Settings</Link>
    </>
  )
}