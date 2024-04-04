'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  const {status, data: session} = useSession()
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link className='mr-5' href='/'>Nextjs</Link>
        <Link href='/users'>Users</Link>
        { status === "authenticated" && 
          <div>
            {session.user!.name}
            <Link href='/api/auth/signout' className='ml-3'>Sign out</Link>
          </div>}
        { status === "unauthenticated" && <Link href='/api/auth/signin'>Sign in</Link>}
    </div>
  )
}
