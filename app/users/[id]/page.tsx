import React from 'react';

interface Props {
    params: { id: number};
}

export default function UserDetailPage({ params: { id }}: Props) {
  return (
    <div>UserDetailPage {id}</div>
  )
}
