import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex bg-slate-200 p-5'>
        <Link className='mr-5' href='/'>Nextjs</Link>
        <Link href='/users'>Users</Link>
    </div>
  )
}
