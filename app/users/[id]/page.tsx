import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
    params: { id: number};
}

export default function UserDetailPage({ params: { id }}: Props) {
  if (id > 10) notFound();
  return (
    <div>UserDetailPage {id}</div>
  )
}
