import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string }
}

export default async function UserPage({ searchParams: { sortOrder }}: Props) {
  
  return (
    <>
      <h1>Users</h1>
      <Link href='/users/new' className='btn  btn-primary'>New user</Link>
      <UserTable sortOrder={sortOrder}/>
    </>
  )
}
