import React from 'react';

interface Props {
    params: { id: number; photoId: number};
}

export default function photoPage({ params: { id, photoId}}: Props) {
  return (
    <div>photoPage {id} {photoId}</div>
  )
}
